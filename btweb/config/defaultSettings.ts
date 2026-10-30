import { ProLayoutProps } from '@ant-design/pro-components';
import { COMPANY } from '../src/constants/company';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  title: '',
  navTheme: 'dark',
  colorPrimary: '#0c5739',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: false,
  colorWeak: false,
  locale: 'en-US',
  pwa: true,
  logo: COMPANY.logoSvgUrl,
  token: {
    // Dark theme for the mobile nav drawer (sider) to match the site
    sider: {
      colorMenuBackground: '#02120c',
      colorTextMenu: 'rgba(255,255,255,0.78)',
      colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
      colorTextMenuSelected: '#89DE74',
      colorTextSubMenuSelected: '#89DE74',
      colorTextMenuActive: '#89DE74',
      colorTextMenuItemHover: '#89DE74',
      colorBgMenuItemHover: 'rgba(137,222,116,0.08)',
      colorBgMenuItemSelected: 'rgba(137,222,116,0.12)',
    },
  },
  siderMenuType: 'sub',
  splitMenus: true,
};

export default Settings;
