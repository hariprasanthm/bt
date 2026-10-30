/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access() {
  return {
    // canAdmin: currentUser && currentUser.access === 'admin',
    canAdmin: true,
  };
}
