import {
  G_APP_IS_SECURE_SCREEN,
  G_APP_PLATFORM_BY,
  G_APP_PLATFORM_CODE,
  G_APP_PLATFORM_TO,
  G_APP_VERSION_CODE,
  G_APP_VERSION_NAME,
  G_APP_VERSION_NUMBER,
} from '@/platform';
import token from '@/utils/token';
import { message, notification } from 'antd';

import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
// Error handling scheme: error type
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// Response data format with backend scheduled
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

export function buildAuthorization() {
  const tokenVal = token.get();
  return tokenVal !== null && tokenVal !== '' && tokenVal !== 'null' ? `Bearer ${tokenVal}` : null;
  // : `Bearer {}`;
}
/**
 * Default headers when configuring requests
 */
export const getRequestHeaders = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Accept-Language': 'en-US,en;',
    // Authorization: buildAuthorization(),
    Upappversionname: G_APP_VERSION_NAME,
    Upappversionnumber: G_APP_VERSION_NUMBER,
    Upappversioncode: G_APP_VERSION_CODE,
    Upappplatformcode: G_APP_PLATFORM_CODE,
    Upappplatformby: G_APP_PLATFORM_BY,
    Upappplatformto: G_APP_PLATFORM_TO,
    Upappsecurescreen: G_APP_IS_SECURE_SCREEN,
  };

  if (buildAuthorization()) {
    headers.Authorization = buildAuthorization();
  }
  return headers;
};

/**
 * @name Error handling
 * pro Self-contained error handling, you can make your own changes here
 * @doc https://umijs.org/docs/max/request
 */
export const errorConfig: RequestConfig = {
  // Error handling: umi@3's error handling scheme.
  errorConfig: {
    // throw error
    errorThrower: (res) => {
      const { success, data, errorCode, errorMessage, showType } =
        res as unknown as ResponseStructure;
      if (!success) {
        const error: any = new Error(errorMessage);
        error.name = 'BizError';
        error.info = { errorCode, errorMessage, showType, data };
        throw error; // throw automatic error
      }
    },
    // error reception and handling
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // Our errorThrower throws errors.
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warning(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.response) {
        // Axios error of
        // The request was sent successfully and the server also responded with a status code, but the status code exceeded the range of 2xx
        message.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // The request has been successfully initiated, but no response has been received
        // \`error.request\` is an example of XMLHttpRequest in the browser,
        // Here is the example of http.ClientRequest in node.js
        message.error('None response! Please retry.');
      } else {
        // There was a problem while sending the request.
        message.error('Request error, please retry.');
      }
    },
  },

  // request interceptor
  requestInterceptors: [
    (config: RequestOptions) => {
      // Intercept request configuration，Perform personalized processing。
      const { pathname, search } = window.location;

      let rurl = pathname;
      if (search) rurl = `${rurl}${search}`;

      // const url = config?.url?.concat('?token = 123');
      return {
        ...config,
        headers: {
          ...getRequestHeaders(),
          ...config.headers,
          'Content-Type': 'application/json',
          rurl,
        },
      };
    },
  ],

  // response interceptor
  responseInterceptors: [
    (response) => {
      // intercept response data, perform personalized processing
      const { data } = response as unknown as ResponseStructure;

      if (data?.success === false) {
        message.error('Request failed!');
      }
      return response;
    },
  ],
};
