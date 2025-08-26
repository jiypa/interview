# HTML

## 1. 行内元素 VS 块级元素？

[行内元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)：`a`、`b`、`strong`、`i`、`em`、`span`、`br`、`img`、`sub`、`sup`、`label` 等。

行内块元素：`input`、`button`、`select`、`textarea` 等。

[块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)：`div`、`p`、`hr`、`ul`、`ol`、`li`、`form`、`table`、`dl`、`dd`、`dt`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`header`、`main`、`footer`、`article`、`aside`、`section`、`nav` 等。

二者区别：

- 块级元素独占一行，行内元素正常排列。
- 块级元素可以包含行内元素，行内元素不能包含块级元素。
- 块级元素宽高有效，行内元素宽高无效。
- 块级元素内外边距上下左右均有效，行内元素内外边距左右有效上下无效。

::: note 参考资料

- [CSS 中块级元素、行内元素、行内块元素区别](https://juejin.cn/post/6998925491797229599)

:::

## 2. 谈谈你对 HTML5 语义化的理解？

HTML5 新增语义化标签：`header`、`footer`、`main`、`article`、`section`、`nav` 等。

HTML5 语义化：

- 用正确的标签做正确的事。
- 使页面内容结构化，结构更清晰，利于（用户）阅读，利于（浏览器）解析。
- 搜索引擎依据标签来确定上下文和关键字权重，利于 SEO。
- 代码可读性更强，利于开发和维护。

::: note 参考资料

- [如何理解 Web 语义化？](https://www.zhihu.com/question/20455165)
- [我的 HTML 会说话——从实用出发，谈谈 HTML 的语义化](https://juejin.im/post/5a9c8866f265da23741072bf#heading-5)

:::

## 3. `src` VS `href`？

`src`：`src` 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。`src` 会将其指向的资源下载并应用到文档内，如请求 js 脚本。当浏览器解析到该元素时，会暂停其它资源的下载和处理，直到将该资源加载、编译、执行完毕，所以一般 js 脚本都会放到页面底部。

`href`：`href` 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它指向的文件时，就会并行下载资源，不会停止对当前文档的处理，常用在 `a`、`link` 等标签上。

## 4. `link` VS `@import`？

- 功能上的区别：`link` 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 rss、rel 连接属性、引入网站图标等，而 `@import` 是 CSS 提供的语法规则，只有导入样式表的作用。
- 加载顺序区别：在加载页面时，`link` 标签引入的 CSS 会被同时加载，而 `@import` 引入的 CSS 将在页面加载完毕后被加载。
- 兼容性区别：`link` 标签是 HTML 元素，不存在兼容性问题，而 `@import` 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别。
- DOM 可控性区别：可以通过 JS 操作 DOM ，插入 `link` 标签来改变样式，而 JS 无法通过操作 `@import` 来插入样式。

## 5. `async` VS `defer`？

![async vs defer](https://jydbjb.vercel.app/images/asyncvsdefer.png)

默认情况下，浏览器在解析 HTML 时若遇到 JS 脚本会立即加载并执行该脚本，可能阻塞页面渲染。

`async` 属性表示异步执行引入的 JS，它与 `defer` 的区别在于，如果已经加载好，就会开始执行，也就是说它的执行仍然会阻塞文档的解析，只是它的加载过程不会阻塞，多个脚本的执行顺序无法保证。

`defer` 属性表示延迟执行引入的 JS，即这段 JS 加载时 HTML 并未停止解析，这两个过程是并行的。当整个 HTML 文档解析完毕后再执行脚本文件，在 `DOMContentLoaded` 事件触发之前完成，多个脚本按顺序执行。

::: note 参考资料

- [async vs defer attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

:::

## 6. 页面可见性（Page Visibility API） 有什么作用？

Page Visibility API 可以通过监听页面可见性来判断页面是否卸载，以此来减少资源消耗（如 CPU、电池等），优化用户体验。

实际应用：当页面不可见时可以考虑减少对服务器的轮询、暂停页面动画、暂停播放音视频等操作。

``` js
document.addEventListener('visibilitychange', (e) => {
    console.log(document.visibilityState);
});
```

::: note 参考资料

- [阮一峰 - Page Visibility API 教程](http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html)

:::

## 7. Canvas 和 SVG 有什么区别？

Canvas 是一种通过 JS 来绘制 2D 图形的方法。Canvas 是逐<mark>像素</mark>来进行渲染的，因此当我们对 Canvas 进行缩放时，会出现<mark>失真</mark>的情况。

SVG 是一种使用 <mark>XML</mark> 描述 2D 图形的语言。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。我们可以为某个元素附加 JavaScript 事件监听函数。并且 SVG 保存的是图形的绘制方法，因此当 SVG 图形缩放时并<mark>不会失真</mark>。

## 8. 前端如何提高 SEO？

- 合理地设置title、description、keywords：搜索引擎对这三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可
- 采用语义化的 HTML 代码：语义化代码让搜索引擎容易理解网页
- 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被抓取
- 重要内容不要用 JS 输出：爬虫不会执行 JS 获取内容
- 少用 iframe：搜索引擎不会抓取 iframe 中的内容
- 非装饰性图片必须加 alt
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标
