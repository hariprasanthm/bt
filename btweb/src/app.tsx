import BrandLoader from '@/components/BrandLoader';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLocation } from '@umijs/max';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { useSetLanguage } from './appCommon';
import { errorConfig } from './requestErrorConfig';

// Every antd <Spin /> renders the brand loader instead of the default dots
Spin.setDefaultIndicator(<BrandLoader size={24} />);

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
}> {
  return {
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (document.body) {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Also scroll any Ant Design layout wrappers to top
    const layouts = document.getElementsByClassName('ant-layout');
    for (let i = 0; i < layouts.length; i++) {
      layouts[i].scrollTo({ top: 0, behavior: 'smooth' });
    }
    const contents = document.getElementsByClassName('ant-pro-layout-content');
    for (let i = 0; i < contents.length; i++) {
      contents[i].scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const PageTransitionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-fade-in">
      {children}
    </div>
  );
};

// ProLayout API: https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  useSetLanguage(initialState?.settings?.locale || 'en-US');
  const [collapsed, setCollapsed] = useState(true);
  const { pathname } = useLocation();

  // Highlight the menu section the current page belongs to, including
  // sub pages (/services/* -> Services, /event-preview/:id -> Events)
  const section = `/${pathname.split('/')[1] || ''}`;
  const activeMenuKey =
    section === '/event-preview' ? '/events' : section === '/home' ? '/' : section;

  return {
    locale: 'en-US',
    // Titles are owned by each page's <Seo> (Helmet); stop ProLayout from
    // setting document.title from the route name (e.g. "Home") on load.
    pageTitleRender: false,
    footerRender: false,
    menuHeaderRender: undefined,
    // Hide the default right-side header (avatar / user menu)
    rightContentRender: false,
    // Mobile drawer: no expand/collapse button at the bottom of the menu
    collapsedButtonRender: false,
    collapsed,
    onCollapse: setCollapsed,
    menuProps: {
      selectedKeys: [activeMenuKey],
      onClick: () => {
        if (window.innerWidth <= 768) {
          setCollapsed(true);
        }
      },
    },
    childrenRender: (children) => {
      return (
        <PageTransitionWrapper>
          <ScrollToTop />
          <Breadcrumbs />
          {children}
        </PageTransitionWrapper>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * Request configuration with unified error handling.
 * @doc https://umijs.org/docs/max/request
 */
export const request = {
  ...errorConfig,
};
