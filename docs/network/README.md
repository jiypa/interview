# 网络

## 1. HTTP 缓存机制是什么？

::: tip 简记

强 EC 协 CLIEI

:::

### 概念

首次请求 $\to$ 资源副本

再次请求 $\to$ 命中缓存 $\to$ 返回副本（避免重新请求）

::: warning

一般仅对静态资源进行缓存而不对动态资源进行缓存。

:::
### 分类

#### 强制缓存

强制缓存==不用==询问服务器以判断缓存是否过期。

##### 实现

- ❎ ==Expires==（HTTP 1.0）：`Expires：绝对时间（年月日时分秒）`，当前时间 $\lt$ 绝对时间 $\to$ 使用缓存，否则重新请求。它要求浏览器与服务器**时间必须同步**，否则可能判断失误。

- ✅ ==Cache-Control==（HTTP 1.1）：Cache-Control 实际上既可以实现强制缓存又可以实现协商缓存，可取值如下：
    - `Cache-Control: max-age=滑动时间（秒）`：开启强制缓存（浏览器），以浏览器当前时间为基准向后滑动指定时间，在滑动时间以内使用缓存，否则重新请求。
    - `Cache-Control: no-cache`：开启协商缓存。
    - `Cache-Control: no-store`：禁用缓存。
    -  `Cache-Control: private`：默认值，私有缓存，资源仅可被浏览器缓存，不能被反向代理服务器缓存。
    - `Cache-Control: public`：公有缓存，资源既可被浏览器缓存又可被反向代理服务器缓存。
    - `Cache-Control: s-maxage=滑动时间（秒）`：开启强制缓存（反向代理服务器），以反向代理服务器当前时间为基准向后滑动指定时间，在滑动时间以内使用缓存，否则重新请求，**需保证 `Cache-Control: public`**。

#### 协商缓存

协商缓存==需要==询问服务器以判断缓存是否过期。

##### 实现

首先使用 `Cache-Control: no-cache` 开启协商缓存，然后进行以下操作：

- ==Last-Modified & If-Modified-Since==：Last-Modified 需要配合 If-Modified-Since 一起使用，Last-Modified 存在于响应头，If-Modified-Since 存在于请求头，服务器将请求头中 If-Modified-Since 的时间与资源最后修改的时间进行比较，若二者相等，则表示资源无修改，服务器直接返回 304 即可，若二者不等，则表示资源有修改，服务器需要将资源时间通过 Last-Modified 重新发送给浏览器，同时也需要将修改后的资源重新发送给浏览器。Last-Modified 存在如下问题：
    - 服务器获取到的资源最后修改的时间实际上是一个==时间戳==，时间戳的单位为秒，故资源最后修改的时间仅能精确到秒级，若资源修改速度太快（如毫秒级），则无法感知，造成判断失误。
    - 当仅修改资源名称而未修改资源内容时，时间戳仍会发生变化，此时协商缓存失效，需要重新请求，造成不必要的带宽浪费。

- ==ETag & If-None-Match==：ETag 是服务器对**资源内容**进行**哈希运算**得到的资源==指纹==（字符串），只要资源内容发生变化，ETag 就会发生变化。ETag 需要配合 If-None-Match 一起使用，ETag 存在于响应头，If-None-Match 存在于请求头，服务器将请求头中 If-None-Match 的值与资源指纹进行比较，若二者相等，则表示资源无修改，服务器直接返回 304 即可，若二者不等，则表示资源有修改，服务器需要将资源指纹通过 ETag 重新发送给浏览器，同时也需要将修改后的资源重新发送给浏览器。ETag 优先级高于 Last-Modified。ETag 存在如下问题：
    - 哈希运算需要一定开销，资源较大可能会影响服务器性能。
    - ETag 分为强验证和弱验证，强验证对资源内容进行哈希运算，弱验证对资源部分属性（如时间等）进行哈希运算，强验证速度慢但准确，弱验证速度快但可能不准确。

::: info 说明

If-Modified-Since（If-None-Match）不需要手动设置，首次请求时若服务器已经设置了 Last-Modified（ETag），则再次请求时 If-Modified-Since（If-None-Match）会被自动携带，携带内容为服务器设置的 Last-Modified（ETag）的内容。

:::

::: note 参考资料

- [HTTP 缓存精讲](https://www.bilibili.com/video/BV1Jr4y1v7Nc)

:::
