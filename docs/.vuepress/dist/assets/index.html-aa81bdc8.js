import{_ as o,r,o as p,c as i,a as e,b as a,d as t,e as s}from"./app-1ae88177.js";const l={},c=s('<h1 id="面试题典" tabindex="-1"><a class="header-anchor" href="#面试题典" aria-hidden="true">#</a> 面试题典</h1><h2 id="_1-doctype-的作用是什么" tabindex="-1"><a class="header-anchor" href="#_1-doctype-的作用是什么" aria-hidden="true">#</a> 1. DOCTYPE 的作用是什么？</h2><p>DOCTYPE 声明一般位于文档的第一行，它的作用主要是告诉浏览器以什么样的模式来解析文档。一般指定了之后会以<mark>标准模式</mark>来进行文档解析，否则就以<mark>兼容模式</mark>进行解析。</p><p>在标准模式下，浏览器的解析规则都是按照最新的标准进行解析的。而在兼容模式下，浏览器会以向后兼容的方式来模拟老式浏览器的行为，以保证一些老的网站的正确访问。</p><p>DOCTYPE 声明不存在或格式不正确会导致文档以兼容模式呈现。</p><h2 id="_2-标准模式与兼容模式有什么区别" tabindex="-1"><a class="header-anchor" href="#_2-标准模式与兼容模式有什么区别" aria-hidden="true">#</a> 2. 标准模式与兼容模式有什么区别？</h2><p>在标准模式中，页面的渲染方式和 JS 引擎的解析方式都是以该浏览器支持的最高标准运行。</p><p>在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。</p><h2 id="_3-dtd-是什么-有什么用" tabindex="-1"><a class="header-anchor" href="#_3-dtd-是什么-有什么用" aria-hidden="true">#</a> 3. DTD 是什么？有什么用？</h2><p>DTD（ Document Type Definition 文档类型定义）是一组机器可读的规则，它们定义 XML 或 HTML 的特定版本中所有允许元 素及它们的属性和层次关系的定义。在解析网页时，浏览器将使用这些规则检查页面的有效性并且采取相应的措施。</p><p>DTD 是对 HTML 文档的声明，还会影响浏览器的渲染模式（工作模式）。</p><h2 id="_4-html5-为什么只需要写-doctype-html-而不需要引入-dtd" tabindex="-1"><a class="header-anchor" href="#_4-html5-为什么只需要写-doctype-html-而不需要引入-dtd" aria-hidden="true">#</a> 4. HTML5 为什么只需要写 <code>&lt;!DOCTYPE HTML&gt;</code>，而不需要引入 DTD？</h2><p>HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 DOCTYPE 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。</p><p>而 HTML4.01 基于 SGML ，所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。</p><h2 id="_5-sgml-、-html-、xml-和-xhtml-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_5-sgml-、-html-、xml-和-xhtml-的区别是什么" aria-hidden="true">#</a> 5. SGML 、 HTML 、XML 和 XHTML 的区别是什么？</h2><p>SGML 是标准通用标记语言，是一种定义电子文档结构和描述其内容的国际标准语言，是所有电子文档标记语言的<mark>起源</mark>。</p><p>HTML 是超文本标记语言，主要是用于规定怎么显示网页。</p><p>XML 是可扩展标记语言是未来网页语言的发展方向，XML 和 HTML 的最大区别就在于 XML 的标签是<mark>可以自己定义的</mark>，数量无限多，而 HTML 的标签都是固定的而且数量有限。</p><p>XHTML 也是现在基本上所有网页都在用的标记语言，他其实和 HTML 没什么本质的区别，标签都一样，用法也都一样，就是<mark>比 HTML 更严格</mark>，比如<mark>标签必须都用小写</mark>，<mark>标签都必须闭合</mark>等。</p><h2 id="_6-行内元素有哪些-块级元素有哪些-二者有什么区别-⭐" tabindex="-1"><a class="header-anchor" href="#_6-行内元素有哪些-块级元素有哪些-二者有什么区别-⭐" aria-hidden="true">#</a> 6. 行内元素有哪些？块级元素有哪些？二者有什么区别？⭐</h2>',20),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements",target:"_blank",rel:"noopener noreferrer"},u=s('<p>行内元素与块级元素的区别：</p><p>（1） 在格式上：默认情况下，行内元素不会以新行开始，而块级元素会另起一行。</p><p>（2） 在内容上：默认情况下，行内元素不能包含块级元素，而块级元素可以包含行内元素，也可以包含其他块级元素。</p><p>（3） 在盒模型属性上：行内元素不支持设置宽高；行内元素支持水平方向的 padding、border、margin，也可以设置垂直方向的padding、border、margin，但是不会影响布局。</p><h2 id="_9-什么是空元素" tabindex="-1"><a class="header-anchor" href="#_9-什么是空元素" aria-hidden="true">#</a> 9. 什么是空元素？</h2><p>空元素的定义：标签内没有内容的元素被称为空元素。</p><p>空元素的特点：空元素都是<mark>自闭合</mark>的。</p><p>常见的空元素有：meta、link、br、hr、img、input</p><h2 id="_10-link-和-import-的区别是什么-⭐" tabindex="-1"><a class="header-anchor" href="#_10-link-和-import-的区别是什么-⭐" aria-hidden="true">#</a> 10. link 和 @import 的区别是什么？⭐</h2><p>（1）功能上的区别：link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等，而 @import 是 CSS 提供的语法规则，只有导入样式表的作用。</p><p>（2）加载顺序区别：在加载页面时，link 标签引入的 CSS 会被同时加载，而 @import 引入的 CSS 将在页面加载完毕后被加载。</p><p>（3）兼容性区别：link 标签是 HTML 元素，不存在兼容性问题，而 @import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别。</p><p>（4）DOM 可控性区别：可以通过 JS 操作 DOM ，插入 link 标签来改变样式，而 JS 无法通过操作 @import 来插入样式。</p><h2 id="_11-说说你对浏览器的理解-⭐" tabindex="-1"><a class="header-anchor" href="#_11-说说你对浏览器的理解-⭐" aria-hidden="true">#</a> 11. 说说你对浏览器的理解？⭐</h2><p>浏览器的主要功能是将用户选择的 web 资源呈现出来，它需要从服务器请求资源，并将其显示在浏览器窗口中，资源的格式通常是 HTML，也包括 PDF、image 及其他格式。用户用 URI（Uniform Resource Identifier 统一资源标识符）来指定所请求资源的位置。</p><p>HTML 和 CSS 规范中规定了浏览器解释 html 文档的方式，由 W3C 组织对这些规范进行维护，W3C 是负责制定 web 标准的组织。</p><p>但是浏览器厂商纷纷开发自己的扩展，对规范的遵循并不完善，这为 web 开发者带来了严重的兼容性问题。</p><p>简单来说浏览器可以分为两部分——<mark>外壳</mark>和<mark>内核</mark>。其中外壳的种类相对比较多，内核则比较少。外壳主要是提供给用户界面操作，参数设置等，它通过调用内核来实现各种功能。内核是浏览器的核心，它是基于标记语言显示内容的程序或模块，也有一些浏览器并不区分外壳和内核，从 Mozilla 将 Gecko 独立出来后，才有了外壳和内核的明确划分。</p><h2 id="_12-说说你对浏览器内核的理解-⭐⭐" tabindex="-1"><a class="header-anchor" href="#_12-说说你对浏览器内核的理解-⭐⭐" aria-hidden="true">#</a> 12. 说说你对浏览器内核的理解？⭐⭐</h2><p>浏览器内核主要包括<mark>渲染引擎</mark>和<mark> JS 引擎</mark>两部分。</p><p>渲染引擎的职责就是渲染，即在浏览器窗口中显示所请求的内容。默认情况下，渲染引擎可以显示 html、xml、image，它也可以借助插件显示其他类型数据，例如使用 PDF 阅读器插件，可以显示 PDF 格式。</p><p>JS 引擎的职责就是解析和执行 JS 来实现网页的动态效果。</p><p>最开始渲染引擎和 JS 引擎并没有区分得很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。</p><h2 id="_13-常见浏览器所用内核都是什么-⭐" tabindex="-1"><a class="header-anchor" href="#_13-常见浏览器所用内核都是什么-⭐" aria-hidden="true">#</a> 13. 常见浏览器所用内核都是什么？⭐</h2><p>（1）IE 浏览器：Trident 内核，也是俗称的 IE 内核</p><p>（2）Chrome 浏览器：Chrome 内核，以前是 Webkit 内核，现在是 Blink内核</p><p>（3）Firefox 浏览器：Gecko 内核，俗称 Firefox 内核</p><p>（4）Safari 浏览器：Webkit 内核</p><p>（5）Opera 浏览器：最初是自己的 Presto 内核，后来加入谷歌大军，从 Webkit 又到了 Blink 内核</p><p>（6）Edge浏览器：Chrome内核</p><p>（7）360浏览器、猎豹浏览器：IE + Chrome 双内核</p><p>（8）搜狗、遨游、QQ 浏览器：Trident（兼容模式）+ Webkit（高速模式）</p><p>（9）百度、世界之窗浏览器：IE 内核</p><p>（10）2345浏览器：好像以前是 IE 内核，现在也是 IE + Chrome 双内核了</p><p>（11）UC 浏览器：这个众口不一，UC 说是他们自己研发的 U3 内核，但好像还是基于 Webkit 和 Trident ，还有说是基于火狐内核</p><h2 id="_14-说说浏览器的渲染原理-⭐⭐⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_14-说说浏览器的渲染原理-⭐⭐⭐⭐⭐" aria-hidden="true">#</a> 14. 说说浏览器的渲染原理？⭐⭐⭐⭐⭐</h2><p>（1）构建DOM树：解析收到的文档，根据文档定义构建一棵DOM 树，DOM 树是由 DOM 元素及属性节点组成的。</p><p>（2）构建CSSOM树：然后对 CSS 进行解析，生成 CSSOM 树。</p><p>（3）根据 DOM 树和 CSSOM 规则树构建渲染树：渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 元素相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。还有一些 DOM 元素对应几个可见对象，它们一般是一些具有复杂结构的元素，无法用一个矩形来描述。</p><p>（4）重排（回流）：当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。</p><p>（5）重绘：布局阶段结束后是绘制阶段，遍历渲染树并调用渲染对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。</p><p>值得注意的是，这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的 html 都解析完成之后再去构建和布局渲染树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。</p>',42),_={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc7207f265da613c09425d",target:"_blank",rel:"noopener noreferrer"},m={href:"https://coolshell.cn/articles/9666.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://kb.cnblogs.com/page/129756/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.fundebug.com/2019/01/03/understand-browser-rendering/",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"_15-渲染过程中遇到-js-文件怎么处理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_15-渲染过程中遇到-js-文件怎么处理","aria-hidden":"true"},"#"),a(" 15. 渲染过程中遇到 JS 文件怎么处理？")],-1),g=e("p",null,"JS 的加载、解析与执行会阻塞文档的解析，也就是说，在构建 DOM 树时，HTML 解析器若遇到了 JS，那么它会暂停（阻塞）文档的解析，将控制权移交给 JS 引擎，等 JS 引擎运行完毕，浏览器再从中断的地方恢复文档得解析。",-1),S=e("p",null,"也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然并不是说 script 标签必须放在底部，我们也可以给 script 标签添加 defer 或者 async 属性。",-1),M=e("h2",{id:"_16-async-和-defer-的作用是什么-二者有什么区别-⭐⭐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_16-async-和-defer-的作用是什么-二者有什么区别-⭐⭐","aria-hidden":"true"},"#"),a(" 16. async 和 defer 的作用是什么？二者有什么区别？⭐⭐")],-1),v=e("p",null,"（1）JS 脚本若没有添加 async 或 defer 属性，那么浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。",-1),x=e("p",null,"（2）async 属性表示异步执行引入的 JS，它与 defer 的区别在于，如果已经加载好，就会开始执行，也就是说它的执行仍然会阻塞文档的解析，只是它的加载过程不会阻塞，多个脚本的执行顺序无法保证。",-1),C=e("p",null,"（3）defer 属性表示延迟执行引入的 JS，即这段 JS 加载时 HTML 并未停止解析，这两个过程是并行的。当整个 HRML 文档解析完毕后再执行脚本文件，在 DOMContentLoaded 事件触发之前完成，多个脚本按顺序执行。",-1),w={href:"https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"_17-什么是文档的预解析-⭐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_17-什么是文档的预解析-⭐","aria-hidden":"true"},"#"),a(" 17. 什么是文档的预解析？⭐")],-1),D=e("p",null,"一般情况下，HTML 文档解析时，遇到 JS 脚本就会暂停，等待脚本的下载、执行，这一过程受限于网络环境、脚本大小等。针对这个情况，Chrome 浏览器做了很多优化，其中一个主要的优化是预解析操作。当渲染引擎收到字节流之后，会开启一个预解析线程，用来分析 HTML 文件中包含的 JS、CSS 等相关文件，解析到相关文件之后，预解析线程会提前下载这些文件，这种方式可以使资源并行加载从而使整体速度更快。需要注意的是，预解析并不改变 DOM 树，它将这个工作留给主解析（渲染）过程，自己只解析外部资源的引用，比如外部脚本、样式表及图片等。",-1),T={href:"https://www.jianshu.com/p/3a72f1886206",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"_18-css-如何阻塞文档解析-⭐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_18-css-如何阻塞文档解析-⭐","aria-hidden":"true"},"#"),a(" 18. CSS 如何阻塞文档解析？ ⭐")],-1),O=e("p",null,"理论上，既然样式表不改变 DOM 树，也就没有必要停下文档的解析等待它们，然而，存在一个问题，JS 脚本执行时可能会请求样式信息，如果样式还没有加载和解析，脚本将得到错误的值，显然这将会导致很多问题。",-1),H=e("p",null,"所以如果浏览器尚未完成 CSSOM 树的构建，而我们却想在此时运行脚本，那么浏览器将延迟 JS 脚本的执行和文档的解析，直至其完成 CSSOM 的下载和构建。也就是说，在这种情况下，浏览器会先下载和构建 CSSOM 树，然后再执行 JS，最后再继续文档的解析。",-1),J=e("h2",{id:"_19-渲染页面时常见哪些不良现象-⭐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_19-渲染页面时常见哪些不良现象-⭐","aria-hidden":"true"},"#"),a(" 19. 渲染页面时常见哪些不良现象？⭐")],-1),q=e("p",null,"FOUC：主要指的是样式闪烁的问题，有些浏览器渲染机制（比如 Firefox）在 CSS 加载之前，先呈现了 HTML，就会导致展示出无样式内容，然后样式突然呈现的现象。会出现这个问题的原因主要有三：（1）CSS 加载时间过长（2）CSS 被放在了文档底部（3）使用了 @import 加载 CSS。",-1),j=e("p",null,"白屏：有些浏览器渲染机制（比如 Chrome）要先构建 DOM 树和 CSSOM 树，构建完成后再进行渲染，如果 CSS 部分放在 HTML 尾部，由于 CSS 未加载完成，浏览器迟迟未渲染，从而导致白屏；也可能是把 JS 文件放在头部，JS 脚本的加载会阻塞后面文档内容的解析，从而页面迟迟未渲染出来，出现白屏问题。",-1),W={href:"https://juejin.im/entry/58f867045c497d0058e2ff3a",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.jianshu.com/p/6617efa874b0",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"_20-如何优化关键渲染路径",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_20-如何优化关键渲染路径","aria-hidden":"true"},"#"),a(" 20. 如何优化关键渲染路径？")],-1),E=e("p",null,"为尽快完成首次渲染，我们需要最大限度减小三种可变因素：（1）关键资源的数量（2）关键路径长度（3）关键字节的数量。",-1),P=e("p",null,"关键资源是可能阻止网页首次渲染的资源。这些资源越少，浏览器的工作量就越小，对 CPU 以及其他资源的占用也就越少。同样，关键路径长度受所有关键资源与其字节大小之间依赖关系图的影响：某些资源只能在上一资源处理完毕之后才能开始下载， 并且资源越大，下载所需的往返次数就越多。最后，浏览器需要下载的关键字节越少，处理内容并让其出现在屏幕上的速度就越快。要减少字节数，我们可以减少资源数（将它们删除或设为非关键资源），此外还要压缩和优化各项资源，确保最大限度减小传送大小。",-1),G=e("p",null,"优化关键渲染路径的常规步骤如下：",-1),V=e("p",null,"（1）对关键路径进行分析和特性描述：资源数、字节数、长度。",-1),U=e("p",null,"（2）最大限度减少关键资源的数量：删除它们，延迟它们的下载，将它们标记为异步等。",-1),N=e("p",null,"（3）优化关键字节数以缩短下载时间（往返次数）。",-1),B=e("p",null,"（4）优化其余关键资源的加载顺序：您需要尽早下载所有关键资产，以缩短关键路径长度。",-1),F={href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},X=s('<h2 id="_21-什么是重绘和重排-⭐⭐⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_21-什么是重绘和重排-⭐⭐⭐⭐⭐" aria-hidden="true">#</a> 21. 什么是重绘和重排？⭐⭐⭐⭐⭐</h2><p>重绘: 当渲染树中的一些元素需要更新属性，而这些属性只是影响元素的<mark>外观</mark>、<mark>风格</mark>，而不会影响到布局，如有关颜色的更新，我们将这样的操作称为重绘。</p><p>重排（回流）：当渲染树中的一部分（或全部）因为元素的<mark>位置</mark>、<mark>大小</mark>等改变而需要重新构建并且会影响到布局的操作，这样的操作我们称为重排。</p><p>常见引起重排的属性和方法：</p><p>（1）添加或者删除可见的 DOM 元素</p><p>（2）元素尺寸改变——边距、填充、边框、宽度和高度</p><p>（3）内容变化，比如用户在 input 框中输入文字</p><p>（4）浏览器窗口尺寸改变——resize事件发生时</p><p>（5）计算 offsetWidth 和 offsetHeight 属性</p><p>（6）设置 style 属性的值</p><p>（7）网页的默认字体被修改</p><p><mark>重排必定会发生重绘，重绘不一定会引发重排</mark>。重排所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点一系列的重排。</p><p>常见引起重绘属性和方法：</p><p><img src="https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-14.png" alt="常见引起重排属性和方法"></p><p>常见引起回流属性和方法：</p><p><img src="https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-13.png" alt="常见引起重绘属性和方法"></p>',16),A={href:"https://juejin.im/post/5a9923e9518825558251c96a",target:"_blank",rel:"noopener noreferrer"},Y=s('<h2 id="_22-如何减少重排-⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_22-如何减少重排-⭐⭐⭐" aria-hidden="true">#</a> 22. 如何减少重排？⭐⭐⭐</h2><p>（1）使用 transform 替代 top</p><p>（2）不要把节点的属性值放在一个循环里当成循环里的变量</p><p>（3）不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局</p><p>（4）把 DOM 离线后修改。如：使用 documentFragment 对象在内存里操作 DOM</p><p>（5）不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 CSS 的 class，然后修改 DOM 的 className</p><h2 id="_23-为什么操作-dom-慢-⭐⭐" tabindex="-1"><a class="header-anchor" href="#_23-为什么操作-dom-慢-⭐⭐" aria-hidden="true">#</a> 23. 为什么操作 DOM 慢？⭐⭐</h2><p>一些 DOM 的操作或者属性访问可能会引起页面的重排和重绘，从而引起性能上的消耗。</p><h2 id="_24-domcontentloaded-事件和-load-事件的区别-⭐" tabindex="-1"><a class="header-anchor" href="#_24-domcontentloaded-事件和-load-事件的区别-⭐" aria-hidden="true">#</a> 24. DOMContentLoaded 事件和 Load 事件的区别？⭐</h2><p>DOMContentLoaded 事件只要在页面 DOM 加载完成后就触发，而无需等待依赖资源的完全加载。</p><p>load 事件是当所有依赖资源全部加载完成后才被触发，即<mark> DOMContentLoaded 事件发生于 load 事件之前</mark>。</p>',11),R={href:"https://www.jianshu.com/p/ca8dae435a2c",target:"_blank",rel:"noopener noreferrer"},Q=e("h2",{id:"_25-简述一下你对-html5-语义化的理解-⭐⭐⭐⭐⭐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_25-简述一下你对-html5-语义化的理解-⭐⭐⭐⭐⭐","aria-hidden":"true"},"#"),a(" 25. 简述一下你对 HTML5 语义化的理解？⭐⭐⭐⭐⭐")],-1),K=e("p",null,"HTML5 新增的语义化元素有：header、foote、main、article、section、nav",-1),Z=e("p",null,"对于 HTML5 语义化的理解：",-1),$=e("p",null,"（1） 用正确的标签做正确的事情",-1),ee=e("p",null,"（2） html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析",-1),ae=e("p",null,"（3） 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的",-1),ne=e("p",null,"（4） 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO",-1),te=e("p",null,"（5） 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解",-1),se={href:"https://www.html.cn/archives/1668",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://www.zhihu.com/question/20455165",target:"_blank",rel:"noopener noreferrer"},re={href:"https://juejin.im/post/5a9c8866f265da23741072bf#heading-5",target:"_blank",rel:"noopener noreferrer"},pe=s('<h2 id="_26-前端如何提高seo-⭐⭐⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_26-前端如何提高seo-⭐⭐⭐⭐⭐" aria-hidden="true">#</a> 26. 前端如何提高SEO ？⭐⭐⭐⭐⭐</h2><p>（1）合理地设置title、description、keywords：搜索引擎对这三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可</p><p>（2）采用语义化的 HTML 代码：语义化代码让搜索引擎容易理解网页</p><p>（3）重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被抓取</p><p>（4）重要内容不要用 JS 输出：爬虫不会执行 JS 获取内容</p><p>（5）少用 iframe：搜索引擎不会抓取 iframe 中的内容</p><p>（6）非装饰性图片必须加 alt</p><p>（7）提高网站速度：网站速度是搜索引擎排序的一个重要指标</p><h2 id="_27-常见的浏览器端的存储技术有哪些-⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_27-常见的浏览器端的存储技术有哪些-⭐⭐⭐" aria-hidden="true">#</a> 27. 常见的浏览器端的存储技术有哪些？⭐⭐⭐</h2><p>浏览器常见的存储技术有 cookie、localStorage 和 sessionStorage。</p><p>若要存储大规模数据可以采用indexDB。</p><p>IE 支持 userData 存储数据，但是基本很少使用到，除非有很强的浏览器兼容需求。</p>',12),ie={href:"https://segmentfault.com/a/1190000012578794#articleHeader0",target:"_blank",rel:"noopener noreferrer"},le=s('<h2 id="_28-请描述一下-cookies-sessionstorage-和-localstorage-的区别-⭐⭐⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_28-请描述一下-cookies-sessionstorage-和-localstorage-的区别-⭐⭐⭐⭐⭐" aria-hidden="true">#</a> 28. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？⭐⭐⭐⭐⭐</h2><p>SessionStorage， LocalStorage， Cookie 这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对。区别在于前两者属于 HTML5 WebStorage，创建它们的目的便于客户端存储数据。而 cookie 是网站为了标示用户身份而储存在用户本地终端上的数据（通常经过加密）。cookie 数据始终在同源（协议、主机、端口相同）的 http 请求中携带（即使不需要），会在浏览器和服务器间来回传递。</p><p><mark>存储大小上的区别：</mark></p><p>cookies 数据大小不能超过4 KB。</p><p>sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5MB 或更大。</p><p><mark>有期时间上的区别：</mark></p><p>localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据。</p><p>sessionStorage 数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话。</p><p>cookies 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。</p><p><mark>作用域上的区别：</mark></p><p>sessionStorage 只在同源的同窗口中共享数据，也就是只在当前会话中共享。</p><p>localStorage 在所有同源窗口中都是共享的。</p><p>cookies 在所有同源窗口中都是共享的。</p>',13),ce={href:"https://segmentfault.com/a/1190000017423117",target:"_blank",rel:"noopener noreferrer"},de={href:"http://www.ruanyifeng.com/blog/2018/07/indexeddb.html",target:"_blank",rel:"noopener noreferrer"},he=e("h2",{id:"_29-iframe-有那些缺点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_29-iframe-有那些缺点","aria-hidden":"true"},"#"),a(" 29. iframe 有那些缺点？")],-1),ue=e("p",null,"iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。",-1),_e=e("p",null,"它的主要缺点有：",-1),me=e("p",null,"（1） iframe 会阻塞主页面的 onload 事件。window 的 onload 事件需要在所有 iframe 加载完毕后（包含里面的元素）才会触发。在 Safari 和 Chrome 里，通过 JavaScript 动态设置 iframe 的 src 可以避免这种阻塞情况。",-1),ke=e("p",null,"（2） 搜索引擎的检索程序无法解读这种页面，不利于网页的 SEO 。",-1),fe=e("p",null,"（3） iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。",-1),be=e("p",null,"（4） 浏览器的后退按钮失效。",-1),ge=e("p",null,"（5） 小型的移动设备无法完全显示框架。",-1),Se={href:"https://blog.csdn.net/yintianqin/article/details/72625785",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://segmentfault.com/a/1190000009891683",target:"_blank",rel:"noopener noreferrer"},ve=s(`<h2 id="_30-label-元素的作用是什么" tabindex="-1"><a class="header-anchor" href="#_30-label-元素的作用是什么" aria-hidden="true">#</a> 30. label 元素的作用是什么？</h2><p>label 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标签：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-html5-表单元素的自动完成功能是什么" tabindex="-1"><a class="header-anchor" href="#_31-html5-表单元素的自动完成功能是什么" aria-hidden="true">#</a> 31. HTML5 表单元素的自动完成功能是什么？</h2><p>autocomplete 属性规定输入字段是否应该启用自动完成功能。默认为启用，设置为 autocomplete=off 可以关闭该功能。</p><p>当开启自动完成功能时，浏览器基于之前键入过的值在用户在字段开始键入时显示出在字段中填写的选项。</p><p>autocomplete 属性适用于 form，以及其下面的 input 类型：text、search、url、telephone、email、password、date, range、color。</p><h2 id="_32-如何实现浏览器内多个标签页之间的通信-⭐⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_32-如何实现浏览器内多个标签页之间的通信-⭐⭐⭐⭐" aria-hidden="true">#</a> 32. 如何实现浏览器内多个标签页之间的通信？⭐⭐⭐⭐</h2><p>实现多个标签页之间的通信，本质上都是通过中介者模式来实现的，因为标签页之间没有办法直接通信，因此我们可以找一个中介者，让标签页和中介者进行通信，然后让这个中介者来进行消息的转发。</p><p>具体的实现方法有：</p><p>（1）使用 WebSocket，通信的标签页连接同一个服务器，发送消息到服务器后，服务器推送消息给所有连接的客户端</p><p>（2）使用 SharedWorker （只适用于 chrome 浏览器），两个页面共享同一个线程，通过向线程发送数据和接收数据来实现标签页之间的双向通行</p><p>（3）可以调用 localStorage、sessionStorage、cookies 等本地存储方式，localStorge 另一个浏览上下文里被添加、修改或删除时，它都会触发一个 storage 事件，我们通过监听 storage 事件，控制它的值来进行页面信息通信</p><p>（4）如果我们能够获得对应标签页的引用，通过 postMessage 方法也是可以实现多个标签页通信的</p>`,14),xe={href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://www.cnblogs.com/chyingp/p/websocket-deep-in.html",target:"_blank",rel:"noopener noreferrer"},we={href:"https://segmentfault.com/a/1190000011538416",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API",target:"_blank",rel:"noopener noreferrer"},De={href:"https://www.zhuwenlong.com/blog/article/590ea64fe55f0f385f9a12e5",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://juejin.im/post/5acdba01f265da23826e5633#heading-1",target:"_blank",rel:"noopener noreferrer"},ye=s(`<h2 id="_33-页面可见性-page-visibility-api-有什么作用-⭐" tabindex="-1"><a class="header-anchor" href="#_33-页面可见性-page-visibility-api-有什么作用-⭐" aria-hidden="true">#</a> 33. 页面可见性（Page Visibility API） 有什么作用？⭐</h2><p>这个新的 API 的意义在于，通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页，下面这些网页行为都是可以暂停的：</p><p>（1）对服务器的轮询</p><p>（2）网页动画</p><p>（3）正在播放的音频或视频</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Oe={href:"http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html",target:"_blank",rel:"noopener noreferrer"},He=s('<h2 id="_34-canvas-和-svg-有什么区别-⭐" tabindex="-1"><a class="header-anchor" href="#_34-canvas-和-svg-有什么区别-⭐" aria-hidden="true">#</a> 34. Canvas 和 SVG 有什么区别？⭐</h2><p>Canvas 是一种通过 JS 来绘制 2D 图形的方法。Canvas 是<mark>逐像素</mark>来进行渲染的，因此当我们对 Canvas 进行缩放时，会出现<mark>失真</mark>的情况。</p><p>SVG 是一种使用<mark> XML </mark>描述 2D 图形的语言。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。我们可以为某个元素附加 JavaScript 事件监听函数。并且 SVG 保存的是图形的绘制方法，因此当 SVG 图形缩放时并<mark>不会失真</mark>。</p>',3),Je={href:"https://www.zhihu.com/question/19690014",target:"_blank",rel:"noopener noreferrer"},qe=s(`<h2 id="_35-attribute-和-property-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_35-attribute-和-property-的区别是什么" aria-hidden="true">#</a> 35. attribute 和 property 的区别是什么？</h2><p>attribute 是 dom 元素在文档中作为 html 标签拥有的属性。</p><p>property 就是 dom 元素在 JS 中作为对象拥有的属性。</p><p>对于 html 的标准属性来说，attribute 和 property 是同步的，是会自动更新的，但是对于自定义的属性来说，他们是不同步的。</p><h2 id="_36-谈谈你对对-web-标准可用性、可访问性、可维护性的理解" tabindex="-1"><a class="header-anchor" href="#_36-谈谈你对对-web-标准可用性、可访问性、可维护性的理解" aria-hidden="true">#</a> 36. 谈谈你对对 web 标准可用性、可访问性、可维护性的理解？</h2><p>可用性（Usability）：产品是否容易上手，用户能否完成任务，效率如何，以及这过程中用户的主观感受可好，是从用户的角度来看产品的质量。可用性好意味着产品质量高，是企业的核心竞争力</p><p>可访问性（Accessibility）：Web 内容对于残障用户的可阅读和可理解性</p><p>可维护性（Maintainability）：一般包含两个层次，一是当系统出现问题时，快速定位并解决问题的成本，成本低则可维护性好。二是代码是否容易被人理解，是否容易修改和增强功能。</p><h2 id="_37-浏览器架构解析-⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_37-浏览器架构解析-⭐⭐⭐" aria-hidden="true">#</a> 37. 浏览器架构解析？⭐⭐⭐</h2><p><img src="https://s3.bmp.ovh/imgs/2022/08/14/ef6d03ef6ef4497e.png" alt="alt 浏览器架构"></p><h2 id="_38-在-html5-中-哪个方法用于获得用户的当前位置" tabindex="-1"><a class="header-anchor" href="#_38-在-html5-中-哪个方法用于获得用户的当前位置" aria-hidden="true">#</a> 38. 在 HTML5 中，哪个方法用于获得用户的当前位置？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token parameter">pos</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span> latitude<span class="token punctuation">,</span> longitude <span class="token punctuation">}</span> <span class="token operator">=</span> pos<span class="token punctuation">.</span>coords<span class="token punctuation">;</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;纬度：&#39;</span> <span class="token operator">+</span> latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;经度：&#39;</span> <span class="token operator">+</span> longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_39-disabled-和-readonly-的区别" tabindex="-1"><a class="header-anchor" href="#_39-disabled-和-readonly-的区别" aria-hidden="true">#</a> 39. disabled 和 readonly 的区别？</h2><p>disabled 指当 input 元素加载时禁用此元素。input 内容不会随着表单提交。</p><p>readonly 规定输入字段为只读。input 内容会随着表单提交。</p><p>无论设置 readonly 还是 disabled，通过 js 脚本都能更改 input 的 value 值。</p><h2 id="_40-主流浏览器内核私有属性-css-前缀" tabindex="-1"><a class="header-anchor" href="#_40-主流浏览器内核私有属性-css-前缀" aria-hidden="true">#</a> 40. 主流浏览器内核私有属性 css 前缀？</h2><p>mozilla 内核 （firefox 等）：-moz</p><p>webkit 内核 （safari,chrome 等）：-webkit</p><p>opera 内核 （opera 浏览器）：-o</p><p>trident 内核 （ie 浏览器）：-ms</p><h2 id="_41-前端性能优化方法有哪些-⭐⭐⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#_41-前端性能优化方法有哪些-⭐⭐⭐⭐⭐" aria-hidden="true">#</a> 41. 前端性能优化方法有哪些？⭐⭐⭐⭐⭐</h2><p><mark>在内容方面：</mark></p><p>（1）通过文件合并、css 雪碧图、使用 base64 等方式来减少 HTTP 请求数，避免过多的请求造成等待的情况。</p><p>（2）通过 DNS 缓存等机制来减少 DNS 的查询次数。</p><p>（3）通过设置缓存策略，对常用不变的资源进行缓存。</p><p>（4）使用延迟加载的方式，来减少页面首屏加载时需要请求的资源。延迟加载的资源当用户需要访问时，再去请求加载。</p><p>（5）通过用户行为，对某些资源使用预加载的方式，来提高用户需要访问资源时的响应速度。</p><p><mark>在服务器方面：</mark></p><p>（1）使用 CDN 服务，来提高用户对于资源请求时的响应速度。</p><p>（2）服务器端启用 Gzip、Deflate 等方式对于传输的资源进行压缩，减小文件的体积。</p><p>（3）尽可能减小 cookie 的大小，并且通过将静态资源分配到其他域名下，来避免对静态资源请求时携带不必要的 cookie</p><p><mark>在 CSS 和 JavaScript 方面：</mark></p><p>（1）把样式表放在页面的 head 标签中，减少页面的首次渲染的时间。</p><p>（2）尽量避免使用 @import 标签。</p><p>（3）尽量把 js 脚本放在页面底部或者使用 defer 或 async 属性，避免脚本的加载和执行阻塞页面的渲染。</p><p>（4）通过对 JavaScript 和 CSS 的文件进行压缩，来减小文件的体积。</p>`,37),je={href:"https://juejin.im/post/5b73ef38f265da281e048e51#heading-10",target:"_blank",rel:"noopener noreferrer"},We={href:"https://juejin.im/entry/58709b9a128fe1006b29cd5d",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://segmentfault.com/a/1190000012571492",target:"_blank",rel:"noopener noreferrer"},ze=e("h2",{id:"_42-是否对-chrome-中的-waterfall-有所了解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_42-是否对-chrome-中的-waterfall-有所了解","aria-hidden":"true"},"#"),a(" 42. 是否对 Chrome 中的 Waterfall 有所了解？")],-1),Ee={href:"https://blog.csdn.net/carian_violet/article/details/84954360",target:"_blank",rel:"noopener noreferrer"},Pe={href:"https://blog.csdn.net/csdn_girl/article/details/54911632",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://www.zhihu.com/question/27085552/answer/35194131",target:"_blank",rel:"noopener noreferrer"};function Ve(Ue,Ne){const n=r("ExternalLinkIcon");return p(),i("div",null,[c,e("p",null,[e("a",d,[a("行内元素"),t(n)]),a("：a、b、strong、i、em、span、br、img、sub、sup、label、input、button、select、textarea")]),e("p",null,[e("a",h,[a("块级元素"),t(n)]),a("：div、p、hr、form、ul、ol、li、table、dl、dd、dt、h1~h6、header、main、footer、article、aside、section、nav")]),u,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",_,[a("《浏览器渲染原理》"),t(n)]),e("a",m,[a("《浏览器的渲染原理简介》"),t(n)]),e("a",k,[a("《前端必读：浏览器内部工作原理》"),t(n)]),e("a",f,[a("《深入浅出浏览器渲染原理》"),t(n)])])]),b,g,S,M,v,x,C,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",w,[a("《defer 和 async 的区别》"),t(n)])])]),L,D,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",T,[a("《HTML 文档是边加载边解析、预解析》"),t(n)])])]),y,O,H,J,q,j,e("p",null,[a("详细资料可以参考： "),e("a",W,[a("《前端魔法堂：解秘 FOUC》"),t(n)]),e("a",I,[a("《白屏问题和 FOUC》"),t(n)])]),z,E,P,G,V,U,N,B,e("p",null,[a("详细资料可以参考： "),e("a",F,[a("《优化关键渲染路径》"),t(n)])]),X,e("p",null,[a("详细资料可以参考： "),e("a",A,[a("《浏览器的回流与重绘》"),t(n)])]),Y,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",R,[a("《DOMContentLoaded 事件 和 Load 事件的区别？》"),t(n)])])]),Q,K,Z,$,ee,ae,ne,te,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",se,[a("《语义化的 HTML 结构到底有什么好处？》"),t(n)]),e("a",oe,[a("《如何理解 Web 语义化？》"),t(n)]),e("a",re,[a("《我的 HTML 会说话——从实用出发，谈谈 HTML 的语义化》"),t(n)])])]),pe,e("blockquote",null,[e("p",null,[a("详细的资料可以参考： "),e("a",ie,[a("《很全很全的前端本地存储讲解》"),t(n)])])]),le,e("blockquote",null,[e("p",null,[a("详细的资料可以参考： "),e("a",ce,[a("《请描述一下 cookies，sessionStorage 和 localStorage 的区别？》"),t(n)]),e("a",de,[a("《浏览器数据库 IndexedDB 入门教程》"),t(n)])])]),he,ue,_e,me,ke,fe,be,ge,e("blockquote",null,[e("p",null,[a("详细的资料可以参考： "),e("a",Se,[a("《使用 iframe 的优缺点》"),t(n)]),e("a",Me,[a("《iframe 简单探索以及 iframe 跨域处理》"),t(n)])])]),ve,e("blockquote",null,[e("p",null,[a("详细的资料可以参考： "),e("a",xe,[a("《WebSocket 教程》"),t(n)]),e("a",Ce,[a("《WebSocket 协议：5分钟从入门到精通》"),t(n)]),e("a",we,[a("《WebSocket 学习（一）——基于 socket.io 实现简单多人聊天室》"),t(n)]),e("a",Le,[a("《使用 Web Storage API》"),t(n)]),e("a",De,[a("《JavaScript 的多线程，Worker 和 SharedWorker》"),t(n)]),e("a",Te,[a("《实现多个标签页之间通信的几种方法》"),t(n)])])]),ye,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",Oe,[a("《Page Visibility API 教程》"),t(n)])])]),He,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",Je,[a("《SVG 与 HTML5 的 canvas 各有什么优点，哪个更有前途？》"),t(n)])])]),qe,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",je,[a("《前端性能优化之雅虎35条军规》"),t(n)]),e("a",We,[a("《你真的了解 gzip 吗？》"),t(n)]),e("a",Ie,[a("《前端性能优化之 gzip》"),t(n)])])]),ze,e("blockquote",null,[e("p",null,[a("详细资料可以参考： "),e("a",Ee,[a("《前端性能之 Chrome 的 Waterfall》"),t(n)]),e("a",Pe,[a("《教你读懂网络请求的瀑布图》"),t(n)]),a(),e("a",Ge,[a("《前端妹子跟我抱怨她们的页面加载很慢的时候，如何在她面前优雅地装逼？》"),t(n)])])])])}const Fe=o(l,[["render",Ve],["__file","index.html.vue"]]);export{Fe as default};
