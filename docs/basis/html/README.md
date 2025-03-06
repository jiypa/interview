# HTML

## 1. DOCTYPE 的作用是什么？
DOCTYPE 声明一般位于文档的第一行，它的作用主要是告诉浏览器以什么样的模式来解析文档。一般指定了之后会以<mark>标准模式</mark>来进行文档解析，否则就以<mark>兼容模式</mark>进行解析。

在标准模式下，浏览器的解析规则都是按照最新的标准进行解析的。而在兼容模式下，浏览器会以向后兼容的方式来模拟老式浏览器的行为，以保证一些老的网站的正确访问。

DOCTYPE 声明不存在或格式不正确会导致文档以兼容模式呈现。
## 2. 标准模式与兼容模式有什么区别？
在标准模式中，页面的渲染方式和 JS 引擎的解析方式都是以该浏览器支持的最高标准运行。

在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。
## 3. 行内元素有哪些？块级元素有哪些？二者有什么区别？⭐
[行内元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)：a、b、strong、i、em、span、br、img、sub、sup、label、input、button、select、textarea

[块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)：div、p、hr、form、ul、ol、li、table、dl、dd、dt、h1~h6、header、main、footer、article、aside、section、nav

行内元素与块级元素的区别：

（1） 在格式上：默认情况下，行内元素不会以新行开始，而块级元素会另起一行。

（2） 在内容上：默认情况下，行内元素不能包含块级元素，而块级元素可以包含行内元素，也可以包含其他块级元素。

（3） 在盒模型属性上：行内元素不支持设置宽高；行内元素支持水平方向的 padding、border、margin，也可以设置垂直方向的padding、border、margin，但是不会影响布局。
## 4. link 和 @import 的区别是什么？⭐
（1）功能上的区别：link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等，而 @import 是 CSS 提供的语法规则，只有导入样式表的作用。

（2）加载顺序区别：在加载页面时，link 标签引入的 CSS 会被同时加载，而 @import 引入的 CSS 将在页面加载完毕后被加载。

（3）兼容性区别：link 标签是 HTML 元素，不存在兼容性问题，而 @import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别。

（4）DOM 可控性区别：可以通过 JS 操作 DOM ，插入 link 标签来改变样式，而 JS 无法通过操作 @import 来插入样式。
## 5. 简述一下你对 HTML5 语义化的理解？⭐⭐⭐⭐⭐
HTML5 新增的语义化元素有：header、foote、main、article、section、nav

对于 HTML5 语义化的理解：

（1） 用正确的标签做正确的事情

（2） html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析

（3） 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的

（4） 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO

（5） 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

> 详细资料可以参考：
> [《语义化的 HTML 结构到底有什么好处？》](https://www.html.cn/archives/1668)
> [《如何理解 Web 语义化？》](https://www.zhihu.com/question/20455165)
> [《我的 HTML 会说话——从实用出发，谈谈 HTML 的语义化》](https://juejin.im/post/5a9c8866f265da23741072bf#heading-5)
## 6. 前端如何提高 SEO？⭐⭐⭐⭐⭐
（1）合理地设置title、description、keywords：搜索引擎对这三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可

（2）采用语义化的 HTML 代码：语义化代码让搜索引擎容易理解网页

（3）重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被抓取

（4）重要内容不要用 JS 输出：爬虫不会执行 JS 获取内容

（5）少用 iframe：搜索引擎不会抓取 iframe 中的内容

（6）非装饰性图片必须加 alt

（7）提高网站速度：网站速度是搜索引擎排序的一个重要指标
## 7. label 元素的作用是什么？
label 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
``` html
<label for="name">标签：</label>
<input type="text" id="name"/>
```
## 8. 页面可见性（Page Visibility API） 有什么作用？
Page Visibility API 通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页，下面这些网页行为都是可以暂停的：

（1）对服务器的轮询

（2）网页动画

（3）正在播放的音频或视频

``` javascript
document.addEventListener('visibilitychange', (e) => {
   console.log(document.visibilityState);
});
```

> 详细资料可以参考：
> [《Page Visibility API 教程》](http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html)
## 9. Canvas 和 SVG 有什么区别？
Canvas 是一种通过 JS 来绘制 2D 图形的方法。Canvas 是<mark>逐像素</mark>来进行渲染的，因此当我们对 Canvas 进行缩放时，会出现<mark>失真</mark>的情况。
 
SVG 是一种使用<mark> XML </mark>描述 2D 图形的语言。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。我们可以为某个元素附加 JavaScript 事件监听函数。并且 SVG 保存的是图形的绘制方法，因此当 SVG 图形缩放时并<mark>不会失真</mark>。

> 详细资料可以参考：
> [《SVG 与 HTML5 的 canvas 各有什么优点，哪个更有前途？》](https://www.zhihu.com/question/19690014)
