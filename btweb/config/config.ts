// https://umijs.org/config/
import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  /**
   * @name Hashed build output
   * @description Adds a hash suffix to build artifacts, for incremental releases and cache busting.
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,

  /**
   * @name Route configuration; files not referenced by routes are not compiled.
   * @doc https://umijs.org/docs/guides/routes
   */
  routes,

  /**
   * @name Theme configuration (less variables).
   * @doc https://umijs.org/docs/api/config#theme
   */
  theme: {
    // 'variable' enables dynamic theming via ConfigProvider; use 'default' to disable it.
    'root-entry-name': 'variable',
  },
  /**
   * @name Skip bundling moment locales to reduce bundle size.
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,
  /**
   * @name Dev-server proxy configuration (development only; not applied to builds).
   * @doc https://umijs.org/docs/guides/proxy
   */
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  /**
   * @name Fast refresh; keeps component state across hot updates.
   */
  fastRefresh: true,
  //============== @umijs/max plugin configuration ===============
  /**
   * @name Data-flow plugin
   * @doc https://umijs.org/docs/max/data-flow
   */
  model: {},
  /**
   * @name Global initial state, shared across plugins.
   * @doc https://umijs.org/docs/max/data-flow
   */
  initialState: {},
  /**
   * @name Layout plugin
   * @doc https://umijs.org/docs/max/layout-menu
   */
  title: 'Best Technology IT Solution | Integrated Electronic Security Systems',
  metas: [
    {
      name: 'description',
      content:
        'Best Technology IT Solution provides integrated electronic security solutions: CCTV surveillance, AI ANPR cameras, biometric access control, boom barriers, fire alarms, AIS 140 GPS, and enterprise AMC services.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Best Technology IT Solution' },
    { property: 'og:title', content: 'Best Technology IT Solution | Your Trusted Security Partner' },
    {
      property: 'og:description',
      content:
        'Comprehensive solutions in surveillance, access control, fire safety, and IT services — designed to meet today’s challenges and tomorrow’s needs.',
    },
    { property: 'og:url', content: 'https://salesbesttechnology23.com/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Best Technology IT Solution | Electronic Security & IT' },
    {
      name: 'twitter:description',
      content:
        'Comprehensive solutions in surveillance, access control, fire safety, and IT services — Experience security without compromise.',
    },
  ],
  /**
   * @name Extra <link> tags in <head>
   * @description Preload the self-hosted DM Sans font used across the site.
   */
  links: [
    {
      rel: 'preload',
      href: '/fonts/dm-sans-latin.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
    },
  ],
  layout: {
    locale: true,
    ...defaultSettings,
  },
  /**
   * @name moment2dayjs plugin; replaces moment with dayjs.
   * @doc https://umijs.org/docs/max/moment2dayjs
   */
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  /**
   * @name i18n plugin
   * @doc https://umijs.org/docs/max/i18n
   */
  locale: {
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  /**
   * @name antd plugin; includes the babel import plugin.
   * @doc https://umijs.org/docs/max/antd#antd
   */
  antd: {},
  /**
   * @name Network request configuration; unified request and error handling based on axios and ahooks' useRequest.
   * @doc https://umijs.org/docs/max/request
   */
  request: {},
  /**
   * @name Access-control plugin, based on initialState (initialState must be enabled).
   * @doc https://umijs.org/docs/max/access
   */
  access: {},
  /**
   * @name Extra scripts in <head>
   */
  headScripts: [
    // Solve the problem of white screen on the first load
    { src: '/scripts/loading.js', async: true },
  ],
  //================ pro plugin configuration =================
  presets: ['umi-presets-pro'],
  mfsu: false,
  requestRecord: {},
  esbuildMinifyIIFE: true,
});
