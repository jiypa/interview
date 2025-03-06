# 性能

## 1. 前端性能优化方案有哪些？⭐⭐⭐⭐⭐

::: tip 简记

合懒预 CCJ 压压缓

:::

（1）通过文件合并（雪碧图）、图片 base64 编码等方式来减少 HTTP 请求数。

（2）懒加载，仅在用户真正要访问某个资源时才去加载，减少首屏加载时间。

（3）预加载，通过分析用户行为判定用户是否将要访问某个资源，若判定为是（如用户鼠标悬停于某个链接超过指定时间）则提前加载该资源，提高响应速度。

（4）使用 CDN 提高请求响应速度。

（5）避免使用 `@import` 引入 CSS。

（6）将 JS 置于页面底部或使用 `defer` 或 `async` 属性，避免 JS 阻塞页面渲染。

（7）前端打包压缩，减小文件体积，提高传输速度。

（8）服务器端开启 gzip、br 等压缩，减小文件体积，提高传输速度。

（9）服务器端开启 [HTTP 缓存](/network/#_1-http-缓存机制是什么)。

::: note 参考资料

- [Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html?guccounter=1)
- [前端性能优化之雅虎 35 条军规](https://juejin.im/post/5b73ef38f265da281e048e51#heading-10)
- [你真的了解 gzip 吗？](https://juejin.im/entry/58709b9a128fe1006b29cd5d)
- [前端性能优化之 gzip](https://segmentfault.com/a/1190000012571492)

:::
