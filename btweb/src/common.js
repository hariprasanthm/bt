import html2canvas from 'html2canvas';
import { notification } from 'antd';

export const G_PRODUCT_NAME = 'BEST TECHNOLOGY IT SOLUTION';
export const G_PRODUCTION = true;
export const G_ALLOW_SETUP_NAVIGATION = false;
export const G_PRODUCTION_DEV_ALERT = false;

export const getQueryParams = () => {
  const queryParams = new URLSearchParams(location.search);
  const queryParamMap = {};
  for (let [key, value] of queryParams.entries()) queryParamMap[key] = value;

  return queryParamMap;
};

export const copyScreenshot = async (id) => {
  const element = document.querySelector(id);
  const canvas = await html2canvas(element);
  canvas.toBlob(function (blob) {
    navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
  });
  notification.success({ message: 'Copied to clipboard' });
};
