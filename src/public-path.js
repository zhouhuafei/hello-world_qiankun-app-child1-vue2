/* eslint-disable */

const isProd = process.env.NODE_ENV === 'production'
if (window.__POWERED_BY_QIANKUN__) {
  // 如果是二级域名部署，则这个if不需要。
  // 我采用二级路由部署，这个if不能拿掉。
  if (!isProd) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  }
}
