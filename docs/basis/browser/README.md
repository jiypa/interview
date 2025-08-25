# 浏览器

## 1. 浏览器架构解析？⭐⭐⭐
![alt 浏览器架构](https://s3.bmp.ovh/imgs/2022/08/14/ef6d03ef6ef4497e.png)
## 2. 说说你对浏览器内核的理解？⭐⭐
浏览器内核主要包括<mark>渲染引擎</mark>和<mark> JS 引擎</mark>两部分。

渲染引擎的职责就是渲染，即在浏览器窗口中显示所请求的内容。默认情况下，渲染引擎可以显示 html、xml、image，它也可以借助插件显示其他类型数据，例如使用 PDF 阅读器插件，可以显示 PDF 格式。

JS 引擎的职责就是解析和执行 JS 来实现网页的动态效果。

最开始渲染引擎和 JS 引擎并没有区分得很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。
## 3. 说说浏览器的渲染原理？⭐⭐⭐⭐⭐
（1）构建DOM树：解析收到的文档，根据文档定义构建一棵DOM 树，DOM 树是由 DOM 元素及属性节点组成的。

（2）构建CSSOM树：然后对 CSS 进行解析，生成 CSSOM 树。

（3）根据 DOM 树和 CSSOM 规则树构建渲染树：渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 元素相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。还有一些 DOM 元素对应几个可见对象，它们一般是一些具有复杂结构的元素，无法用一个矩形来描述。

（4）重排（回流）：当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。

（5）重绘：布局阶段结束后是绘制阶段，遍历渲染树并调用渲染对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。

值得注意的是，这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的 html 都解析完成之后再去构建和布局渲染树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。

> 详细资料可以参考：
> [《浏览器渲染原理》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc7207f265da613c09425d)
> [《浏览器的渲染原理简介》](https://coolshell.cn/articles/9666.html)
> [《前端必读：浏览器内部工作原理》](https://kb.cnblogs.com/page/129756/)
> [《深入浅出浏览器渲染原理》](https://blog.fundebug.com/2019/01/03/understand-browser-rendering/)

## 4. 渲染过程中遇到 JS 文件怎么处理？
JS 的加载、解析与执行会阻塞文档的解析，也就是说，在构建 DOM 树时，HTML 解析器若遇到了 JS，那么它会暂停（阻塞）文档的解析，将控制权移交给 JS 引擎，等 JS 引擎运行完毕，浏览器再从中断的地方恢复文档得解析。

也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然并不是说 script 标签必须放在底部，我们也可以给 script 标签添加 defer 或者 async 属性。

## 5. 什么是文档的预解析？⭐
一般情况下，HTML 文档解析时，遇到 JS 脚本就会暂停，等待脚本的下载、执行，这一过程受限于网络环境、脚本大小等。针对这个情况，Chrome 浏览器做了很多优化，其中一个主要的优化是预解析操作。当渲染引擎收到字节流之后，会开启一个预解析线程，用来分析 HTML 文件中包含的 JS、CSS 等相关文件，解析到相关文件之后，预解析线程会提前下载这些文件，这种方式可以使资源并行加载从而使整体速度更快。需要注意的是，预解析并不改变 DOM 树，它将这个工作留给主解析（渲染）过程，自己只解析外部资源的引用，比如外部脚本、样式表及图片等。

> 详细资料可以参考：
> [《HTML 文档是边加载边解析、预解析》](https://www.jianshu.com/p/3a72f1886206)
## 6. CSS 如何阻塞文档解析？ ⭐
理论上，既然样式表不改变 DOM 树，也就没有必要停下文档的解析等待它们，然而，存在一个问题，JS 脚本执行时可能会请求样式信息，如果样式还没有加载和解析，脚本将得到错误的值，显然这将会导致很多问题。

所以如果浏览器尚未完成 CSSOM 树的构建，而我们却想在此时运行脚本，那么浏览器将延迟 JS 脚本的执行和文档的解析，直至其完成 CSSOM 的下载和构建。也就是说，在这种情况下，浏览器会先下载和构建 CSSOM 树，然后再执行 JS，最后再继续文档的解析。
## 7. 渲染页面时常见哪些不良现象？⭐
FOUC：主要指的是样式闪烁的问题，有些浏览器渲染机制（比如 Firefox）在 CSS 加载之前，先呈现了 HTML，就会导致展示出无样式内容，然后样式突然呈现的现象。会出现这个问题的原因主要有三：（1）CSS 加载时间过长（2）CSS 被放在了文档底部（3）使用了 @import 加载 CSS。

白屏：有些浏览器渲染机制（比如 Chrome）要先构建 DOM 树和 CSSOM 树，构建完成后再进行渲染，如果 CSS 部分放在 HTML 尾部，由于 CSS 未加载完成，浏览器迟迟未渲染，从而导致白屏；也可能是把 JS 文件放在头部，JS 脚本的加载会阻塞后面文档内容的解析，从而页面迟迟未渲染出来，出现白屏问题。

详细资料可以参考：
[《前端魔法堂：解秘 FOUC》](https://juejin.im/entry/58f867045c497d0058e2ff3a)
[《白屏问题和 FOUC》](https://www.jianshu.com/p/6617efa874b0)
## 8. 什么是重绘和重排？⭐⭐⭐⭐⭐
重绘: 当渲染树中的一些元素需要更新属性，而这些属性只是影响元素的<mark>外观</mark>、<mark>风格</mark>，而不会影响到布局，如有关颜色的更新，我们将这样的操作称为重绘。

重排（回流）：当渲染树中的一部分（或全部）因为元素的<mark>位置</mark>、<mark>大小</mark>等改变而需要重新构建并且会影响到布局的操作，这样的操作我们称为重排。

常见引起重排的属性和方法：

（1）添加或者删除可见的 DOM 元素

（2）元素尺寸改变——边距、填充、边框、宽度和高度

（3）内容变化，比如用户在 input 框中输入文字

（4）浏览器窗口尺寸改变——resize事件发生时

（5）计算 offsetWidth 和 offsetHeight 属性

（6）设置 style 属性的值

（7）网页的默认字体被修改

<mark>重排必定会发生重绘，重绘不一定会引发重排</mark>。重排所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点一系列的重排。

常见引起重绘属性和方法：

![常见引起重排属性和方法](https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-14.png)

常见引起回流属性和方法：

![常见引起重绘属性和方法](https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-13.png)

详细资料可以参考：
[《浏览器的回流与重绘》](https://juejin.im/post/5a9923e9518825558251c96a)
## 9. 如何减少重排？⭐⭐⭐
（1）使用 transform 替代 top

（2）不要把节点的属性值放在一个循环里当成循环里的变量

（3）不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局

（4）把 DOM 离线后修改。如：使用 documentFragment 对象在内存里操作 DOM

（5）不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 CSS 的 class，然后修改 DOM 的 className
## 10. DOMContentLoaded VS load？⭐
DOMContentLoaded 事件只要在页面 DOM 加载完成后就触发，而无需等待依赖资源的完全加载。

load 事件是当所有依赖资源全部加载完成后才被触发，即<mark> DOMContentLoaded 事件发生于 load 事件之前</mark>。

> 详细资料可以参考：
> [《DOMContentLoaded 事件 和 Load 事件的区别？》](https://www.jianshu.com/p/ca8dae435a2c)
## 11. 常见的浏览器端的存储技术有哪些？⭐⭐⭐

浏览器常见的存储技术有 cookie、localStorage 和 sessionStorage。

若要存储大规模数据可以采用indexDB。

> 详细的资料可以参考：
> [《很全很全的前端本地存储讲解》](https://segmentfault.com/a/1190000012578794#articleHeader0)

## 12. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？⭐⭐⭐⭐⭐

SessionStorage， LocalStorage， Cookie 这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对。区别在于前两者属于 HTML5 WebStorage，创建它们的目的便于客户端存储数据。而 cookie 是网站为了标示用户身份而储存在用户本地终端上的数据（通常经过加密）。cookie 数据始终在同源（协议、主机、端口相同）的 http 请求中携带（即使不需要），会在浏览器和服务器间来回传递。

<mark>存储大小上的区别：</mark>

cookies 数据大小不能超过4 KB。

sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5MB 或更大。

<mark>有期时间上的区别：</mark>

localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据。

sessionStorage  数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话。

cookies         设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。

<mark>作用域上的区别：</mark>

sessionStorage  只在同源的同窗口中共享数据，也就是只在当前会话中共享。

localStorage    在所有同源窗口中都是共享的。

cookies         在所有同源窗口中都是共享的。

> 详细的资料可以参考：
> [《请描述一下 cookies，sessionStorage 和 localStorage 的区别？》](https://segmentfault.com/a/1190000017423117)
> [《浏览器数据库 IndexedDB 入门教程》](http://www.ruanyifeng.com/blog/2018/07/indexeddb.html)
## 13. 如何实现浏览器内多个标签页之间的通信？⭐⭐⭐⭐
实现多个标签页之间的通信，本质上都是通过中介者模式来实现的，因为标签页之间没有办法直接通信，因此我们可以找一个中介者，让标签页和中介者进行通信，然后让这个中介者来进行消息的转发。

具体的实现方法有：

（1）使用 WebSocket，通信的标签页连接同一个服务器，发送消息到服务器后，服务器推送消息给所有连接的客户端

（2）使用 SharedWorker （只适用于 chrome 浏览器），两个页面共享同一个线程，通过向线程发送数据和接收数据来实现标签页之间的双向通行

（3）可以调用 localStorage、sessionStorage、cookies 等本地存储方式，localStorge 另一个浏览上下文里被添加、修改或删除时，它都会触发一个 storage 事件，我们通过监听 storage 事件，控制它的值来进行页面信息通信

（4）如果我们能够获得对应标签页的引用，通过 postMessage 方法也是可以实现多个标签页通信的

> 详细的资料可以参考：
> [《WebSocket 教程》](http://www.ruanyifeng.com/blog/2017/05/websocket.html)
> [《WebSocket 协议：5分钟从入门到精通》](https://www.cnblogs.com/chyingp/p/websocket-deep-in.html)
> [《WebSocket 学习（一）——基于 socket.io 实现简单多人聊天室》](https://segmentfault.com/a/1190000011538416)
> [《使用 Web Storage API》](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
> [《JavaScript 的多线程，Worker 和 SharedWorker》](https://www.zhuwenlong.com/blog/article/590ea64fe55f0f385f9a12e5)
> [《实现多个标签页之间通信的几种方法》](https://juejin.im/post/5acdba01f265da23826e5633#heading-1)
