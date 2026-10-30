/**
 * @name proxy configuration
 * @see Proxy is not valid in production environment, so there is no production environment configuration
 * @doc https://umijs.org/docs/guides/proxy
 */
/**
 * @name detailed proxy configuration
 * @doc https://github.com/chimurai/http-proxy-middleware
 */
export default {
  dev: {
    '/server/api/': {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },

  test: {
    '/server/api/': {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/server/api/': {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
