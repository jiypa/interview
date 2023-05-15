import{_ as p,r as o,o as c,c as r,a as n,b as s,d as a,w as l,e as t}from"./app-1ae88177.js";const u={},d=t(`<h1 id="面试题典" tabindex="-1"><a class="header-anchor" href="#面试题典" aria-hidden="true">#</a> 面试题典</h1><h2 id="_1-介绍-js-的基本数据类型。" tabindex="-1"><a class="header-anchor" href="#_1-介绍-js-的基本数据类型。" aria-hidden="true">#</a> 1. 介绍 js 的基本数据类型。</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js 一共有七种基本数据类型，分别是 Undefined、Null、Boolean、Number、String，还有在 ES6 中新增的 Symbol 和 ES10 中新增的 BigInt 类型。
Symbol 代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。
BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-javascript-有几种类型的值" tabindex="-1"><a class="header-anchor" href="#_2-javascript-有几种类型的值" aria-hidden="true">#</a> ==2. JavaScript 有几种类型的值？==</h2><p>涉及知识点：</p><ul><li>栈：原始数据类型（Undefined、Null、Boolean、Number、String）</li><li>堆：引用数据类型（对象、数组和函数）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两种类型的区别是：存储位置不同。
原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js 可以分为两种类型的值，一种是基本数据类型，一种是引用数据类型。

基本数据类型....（参考1）

引用数据类型指的是 Object 类型，所有其他的如 Array、Date 等数据类型都可以理解为 Object 类型的子类。

两种类型间的主要区别是它们的存储位置不同，基本数据类型的值直接保存在栈中，而复杂数据类型的值保存在堆中，通过使用在栈中保存对应的指针来获取堆中的值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v={href:"https://blog.csdn.net/lxcao/article/details/52749421",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/jiangjuanjaun/article/details/80327342",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="_3-什么是堆-什么是栈-它们之间有什么区别和联系" tabindex="-1"><a class="header-anchor" href="#_3-什么是堆-什么是栈-它们之间有什么区别和联系" aria-hidden="true">#</a> 3. 什么是堆？什么是栈？它们之间有什么区别和联系？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>堆和栈的概念存在于数据结构中和操作系统内存中。

在数据结构中，栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。

在操作系统中，内存被分为栈区和堆区。

栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。

堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={href:"https://www.zhihu.com/question/19729973",target:"_blank",rel:"noopener noreferrer"},h={id:"_4-内部属性-class-是什么",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_4-内部属性-class-是什么","aria-hidden":"true"},"#",-1),g=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>所有 typeof 返回值为 &quot;object&quot; 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非传统的面向对象意义上的类）。这个属性无法直接访问，一般通过Object.prototype.toString(..) 来查看。例如：

Object.prototype.toString.call( [1,2,3] );
// &quot;[object Array]&quot;

Object.prototype.toString.call( /regex-literal/i );
// &quot;[object RegExp]&quot;

// 我们自己创建的类就不会有这份特殊待遇，因为 toString() 找不到 toStringTag 属性时只好返回默认的 Object 标签
// 默认情况类的[[Class]]返回[object Object]
class Class1 {}
Object.prototype.toString.call(new Class1()); // &quot;[object Object]&quot;
// 需要定制[[Class]]
class Class2 {
  get [Symbol.toStringTag]() {
    return &quot;Class2&quot;;
  }
}
Object.prototype.toString.call(new Class2()); // &quot;[object Class2]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-介绍-js-有哪些内置对象" tabindex="-1"><a class="header-anchor" href="#_5-介绍-js-有哪些内置对象" aria-hidden="true">#</a> 5. 介绍 js 有哪些内置对象？</h2><p>涉及知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>全局的对象（ global objects ）或称标准内置对象，不要和 &quot;全局对象（global object）&quot; 混淆。这里说的全局的对象是说在全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。

标准内置对象的分类

（1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法

例如 Infinity、NaN、undefined、null 字面量

（2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

例如 eval()、parseFloat()、parseInt() 等

（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

例如 Object、Function、Boolean、Symbol、Error 等

（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。

例如 Number、Math、Date

（5）字符串，用来表示和操作字符串的对象。

例如 String、RegExp

（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array

（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

例如 Map、Set、WeakMap、WeakSet

（8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。

例如 SIMD 等

（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。

例如 JSON 等

（10）控制抽象对象

例如 Promise、Generator 等

（11）反射

例如 Reflect、Proxy

（12）国际化，为了支持多语言处理而加入 ECMAScript 的对象。

例如 Intl、Intl.Collator 等

（13）WebAssembly

（14）其他

例如 arguments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。一般我们经常用到的如全局变量值 NaN、undefined，全局函数如 parseInt()、parseFloat() 用来实例化对象的构造函数如 Date、Object 等，还有提供数学计算的单体内置对象如 Math 对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},x={href:"https://segmentfault.com/a/1190000011467723#articleHeader24",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="_6-undefined-与-undeclared-的区别" tabindex="-1"><a class="header-anchor" href="#_6-undefined-与-undeclared-的区别" aria-hidden="true">#</a> 6. undefined 与 undeclared 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明过的变量，是 undeclared 的。
- 对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。
- 并且typeof 对 undefined 和 undeclared 变量返回的都是undefined。其实“ undefined” 和“ is not defined ”是两码事。

总结：
undeclared：变量压根就未声明
undefined：变量已声明但未被赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-null-和-undefined-的区别" tabindex="-1"><a class="header-anchor" href="#_7-null-和-undefined-的区别" aria-hidden="true">#</a> 7. null 和 undefined 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有赋值的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。

undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。
null == undefined    // true
null === undefined   // false   数据类型不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8Bundefined%E4%B8%8Enull.html",target:"_blank",rel:"noopener noreferrer"},j=t(`<h2 id="_8-如何获取安全的-undefined-值-暂时不看" tabindex="-1"><a class="header-anchor" href="#_8-如何获取安全的-undefined-值-暂时不看" aria-hidden="true">#</a> 8. 如何获取安全的 undefined 值？（暂时不看）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>因为 undefined 是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响 undefined 的正常判断。

表达式 void ___ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。

- 按惯例我们用 void 0 来获得 undefined。
- 除了防止被重写外，还可以减少字节。void 0 代替 undefined省3个字节。（老司机常用）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-说几条写-javascript-的基本规范" tabindex="-1"><a class="header-anchor" href="#_9-说几条写-javascript-的基本规范" aria-hidden="true">#</a> 9. 说几条写 JavaScript 的基本规范？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在平常项目开发中，我们遵守一些这样的基本规范，比如说：

（1）一个函数作用域中所有的变量声明应该尽量提到函数首部，用一个 var 声明，不允许出现两个连续的 var 声明，声明时如果变量没有值，应该给该变量赋值对应类型的初始值，便于他人阅读代码时，能够一目了然的知道变量对应的类型值。

（2）代码中出现地址、时间等字符串时需要使用常量代替。

（3）在进行比较的时候吧，尽量使用&#39;===&#39;, &#39;!==&#39;代替&#39;==&#39;, &#39;!=&#39;。

（4）不要在内置对象的原型上添加方法，如 Array, Date。

（5）switch 语句必须带有 default 分支。

（6）for 循环必须使用大括号。

（7）if 语句必须使用大括号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-什么是原型-原型链" tabindex="-1"><a class="header-anchor" href="#_10-什么是原型-原型链" aria-hidden="true">#</a> ==10. 什么是原型&amp;原型链？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1). 什么是原型对象:
    1. 每个构造函数都有一个prototype属性，该属性指向的是原型对象(显示原型对象)
    2. 每个实例对象身上都有一个__proto__属性，该属性指向的也是原型对象(隐式原型对象)
    3. 构造函数的显示原型 === 当前构造函数实例对象的隐式原型对象
    4. 原型对象的本质：普通的Object实例
2). 什么是原型链：
    1. 查找对象的属性的时候先在自身查找，如果自身没有沿着__proto__找原型对象
    2. 如果原型对象上还没有，继续沿着__proto__，直到找到Object的原型对象（Object.prototype）
    3. 如果还没有找到返回undefined
    4. 原型链：沿着__proto__查找属性或方法的这条链就是原型链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),S={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="_11-js-获取原型的方法" tabindex="-1"><a class="header-anchor" href="#_11-js-获取原型的方法" aria-hidden="true">#</a> 11. js 获取原型的方法？</h2><ul><li><p>对象.<strong>proto</strong></p></li><li><p>对象.constructor.<strong>proto</strong></p></li><li><p>Object.getPrototypeOf(对象)</p></li><li><p>构造函数.prototype</p></li><li><p>类.prototype</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">R</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> one<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	  <span class="token comment">//官方推荐，规范写法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>one<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span>					 <span class="token comment">//不报错，不推荐</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>one<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>		  <span class="token comment">//不报错，不推荐</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_12-在-js-中不同进制数字的表示方式" tabindex="-1"><a class="header-anchor" href="#_12-在-js-中不同进制数字的表示方式" aria-hidden="true">#</a> 12. 在 js 中不同进制数字的表示方式</h2><ul><li><p>以 0X、0x 开头的表示为十六进制。</p></li><li><p>以 0、0O、0o 开头的表示为八进制。</p></li><li><p>以 0B、0b 开头的表示为二进制格式。</p></li></ul><h2 id="_13-js-中整数的安全范围是多少-——max-safe-integer-min-safe-integer" tabindex="-1"><a class="header-anchor" href="#_13-js-中整数的安全范围是多少-——max-safe-integer-min-safe-integer" aria-hidden="true">#</a> 13. js 中整数的安全范围是多少？——MAX_SAFE_INTEGER&amp;MIN_SAFE_INTEGER</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安全整数指的是，在这个范围内的整数转化为二进制存储的时候不会出现精度丢失，能够被“安全”呈现的最大整数是 2^53 - 1，即9007199254740991，在 ES6 中被定义为 Number.MAX_SAFE_INTEGER。最小整数是-9007199254740991，在 ES6 中被定义为 Number.MIN_SAFE_INTEGER。

如果某次计算的结果得到了一个超过 JavaScript 数值范围的值，那么这个值会被自动转换为特殊的 Infinity 值。如果某次计算返回了正或负的 Infinity 值，那么该值将无法参与下一次的计算。判断一个数是不是有穷的，可以使用 isFinite 函数来判断。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),E={id:"_14-typeof-nan-的结果是什么",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#_14-typeof-nan-的结果是什么","aria-hidden":"true"},"#",-1),M=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NaN 意指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

typeof NaN; // &quot;number&quot;

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN != NaN为 true。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-isnan-和-number-isnan-函数的区别" tabindex="-1"><a class="header-anchor" href="#_15-isnan-和-number-isnan-函数的区别" aria-hidden="true">#</a> 15. isNaN 和 Number.isNaN 函数的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。

函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，这种方法对于 NaN 的判断更为准确。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-array-构造函数只有一个参数值时的表现" tabindex="-1"><a class="header-anchor" href="#_16-array-构造函数只有一个参数值时的表现" aria-hidden="true">#</a> 16. Array 构造函数只有一个参数值时的表现？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array 构造函数只带一个数字参数的时候，该参数会被作为数组的预设长度（length），而非只充当数组中的一个元素。这样创建出来的只是一个空数组，只不过它的 length 属性被设置成了指定的值。

构造函数 Array(..) 不要求必须带 new 关键字。不带时，它会被自动补上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-其他值到字符串的转换规则" tabindex="-1"><a class="header-anchor" href="#_17-其他值到字符串的转换规则" aria-hidden="true">#</a> 17. 其他值到字符串的转换规则？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>规范的 9.8 节中定义了抽象操作 ToString ，它负责处理非字符串到字符串的强制类型转换。

（1）Null 和 Undefined 类型 ，null 转换为 &quot;null&quot;，undefined 转换为 &quot;undefined&quot;，

（2）Boolean 类型，true 转换为 &quot;true&quot;，false 转换为 &quot;false&quot;。

（3）Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。

（4）Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。

（5）对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）来返回内部属性 [[Class]] 的值，如&quot;[object Object]&quot;。如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-其他值到数字值的转换规则" tabindex="-1"><a class="header-anchor" href="#_18-其他值到数字值的转换规则" aria-hidden="true">#</a> 18. 其他值到数字值的转换规则？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有时我们需要将非数字值当作数字来使用，为此我们可以使用Number()方法将其他值转换为数字。

（1）Undefined 类型的值转换为 NaN。

（2）Null 类型的值转换为 0。

（3）Boolean 类型的值，true 转换为 1，false 转换为 0。

（4）String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。

（5）Symbol 类型的值不能转换为数字，会报错。

（6）对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。

为了将值转换为相应的基本类型值，抽象操作 ToPrimitive 会首先（通过内部操作 DefaultValue）检查该值是否有valueOf() 方法。如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。

如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-其他值到布尔类型的值的转换规则" tabindex="-1"><a class="header-anchor" href="#_19-其他值到布尔类型的值的转换规则" aria-hidden="true">#</a> 19. 其他值到布尔类型的值的转换规则？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们可以使用Boolean()方法将其他值转换为布尔值

以下这些是假值：
• undefined
• null
• false
• +0、-0 和 NaN
• &quot;&quot;(空串)

假值的布尔强制类型转换结果为 false
从逻辑上来讲，假值列表以外的都应该是真值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),N={id:"_20-和-的-valueof-和-tostring-的结果是什么",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#_20-和-的-valueof-和-tostring-的结果是什么","aria-hidden":"true"},"#",-1),J=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{} 的 valueOf 结果为 {} ，toString 的结果为 &quot;[object Object]&quot;

[] 的 valueOf 结果为 [] ，toString 的结果为 &quot;&quot; （空串）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-什么是假值对象" tabindex="-1"><a class="header-anchor" href="#_21-什么是假值对象" aria-hidden="true">#</a> 21. 什么是假值对象？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>浏览器在某些特定情况下，在常规 JavaScript 语法基础上自己创建了一些外来值，这些就是“假值对象”。假值对象看起来和普通对象并无二异（都有属性，等等），但将它们强制类型转换为布尔值时结果为 false。最常见的例子是 document.all，它是一个类数组对象，包含了页面上的所有元素，由 DOM（而不是 JavaScript 引擎）提供给 JavaScript 程序使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_22-操作符的作用" tabindex="-1"><a class="header-anchor" href="#_22-操作符的作用" aria-hidden="true">#</a> 22. ~ 操作符的作用？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这是js中的一元操作符：按位取反。
~ 返回 2 的补码，并且 ~ 会将数字转换为 32 位整数，因此我们可以使用 ~ 来进行取整操作。

~x 大致等同于 -(x+1)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字-它们之间的区别是什么" tabindex="-1"><a class="header-anchor" href="#_23-解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字-它们之间的区别是什么" aria-hidden="true">#</a> 23. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>parseInt()/parseFloat()：解析字符串中含有非数字字符时，解析按从左到右的顺序，直到遇到非数字字符才停止

Number()：强制类型转换不允许出现非数字字符，否则会失败并返回 NaN，比parseInt()/parseFloat()更为严格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-操作符什么时候用于字符串的拼接" tabindex="-1"><a class="header-anchor" href="#_24-操作符什么时候用于字符串的拼接" aria-hidden="true">#</a> 24. <code>+</code> 操作符什么时候用于字符串的拼接？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果“+”操作符的其中一个操作数是字符串或者能够转换为字符串，则执行字符串拼接，否则执行数字加法。

那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-什么情况下会发生布尔值的隐式强制类型转换" tabindex="-1"><a class="header-anchor" href="#_25-什么情况下会发生布尔值的隐式强制类型转换" aria-hidden="true">#</a> 25. 什么情况下会发生布尔值的隐式强制类型转换？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1） if (..) 语句中的条件判断表达式。
（2） for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。
（3） while (..) 和 do..while(..) 循环中的条件判断表达式。
（4） ? : 中的条件判断表达式。
（5） 逻辑运算符 ||（逻辑或）和 &amp;&amp;（逻辑与）左边的操作数（作为条件判断表达式）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_26-和-操作符的返回值" tabindex="-1"><a class="header-anchor" href="#_26-和-操作符的返回值" aria-hidden="true">#</a> ==26. || 和 &amp;&amp; 操作符的返回值？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|| 和 &amp;&amp; 首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行强制类型转换，然后再执行条件判断。

对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。

&amp;&amp; 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

|| 和 &amp;&amp; 返回它们其中一个操作数的值，而非条件判断的结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_27-symbol-值的强制类型转换" tabindex="-1"><a class="header-anchor" href="#_27-symbol-值的强制类型转换" aria-hidden="true">#</a> 27. Symbol 值的强制类型转换？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES6 允许从符号到字符串的显式强制类型转换，然而隐式强制类型转换会产生错误。

Symbol 值不能够被强制类型转换为数字（显式和隐式都会产生错误），但可以被强制类型转换为布尔值（显式和隐式结果都是 true ）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28-操作符的强制类型转换规则" tabindex="-1"><a class="header-anchor" href="#_28-操作符的强制类型转换规则" aria-hidden="true">#</a> 28. == 操作符的强制类型转换规则？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）字符串和数字之间的相等比较，将字符串转换为数字之后再进行比较。

（2）其他类型和布尔类型之间的相等比较，先将布尔值转换为数字后，再应用其他规则进行比较。

（3）null 和 undefined 之间的相等比较，结果为真。其他值和它们进行比较都返回假值。

（4）对象和非对象之间的相等比较，对象先调用 ToPrimitive 抽象操作后，再进行比较。

（5）如果一个操作值为 NaN ，则相等比较返回 false（ NaN 本身也不等于 NaN ）。

（6）如果两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true，否则，返回 false。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),C={href:"https://www.jeffjade.com/2015/08/28/2015-09-02-js-string-compare/",target:"_blank",rel:"noopener noreferrer"},T=t(`<h2 id="_29-如何将字符串转化为数字-例如-12-3b" tabindex="-1"><a class="header-anchor" href="#_29-如何将字符串转化为数字-例如-12-3b" aria-hidden="true">#</a> 29. 如何将字符串转化为数字，例如 &#39;12.3b&#39;?</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。

（2）使用 parseInt() 方法，parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

（3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。

（4）使用 + 操作符的隐式转换。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P={href:"https://blog.csdn.net/m0_38099607/article/details/72638678",target:"_blank",rel:"noopener noreferrer"},R=t(`<h2 id="_30-如何将浮点数点左边的数每三位添加一个逗号-如-12000000-11-转化为『12-000-000-11』" tabindex="-1"><a class="header-anchor" href="#_30-如何将浮点数点左边的数每三位添加一个逗号-如-12000000-11-转化为『12-000-000-11』" aria-hidden="true">#</a> 30. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法一</span>
<span class="token keyword">function</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ?=这表示一个环视的语法，表示该位置后面的字符指定规则</span>
  <span class="token keyword">return</span> number <span class="token operator">&amp;&amp;</span> number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+\\.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$1<span class="token punctuation">,</span> $2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> $2 <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 方法二</span>
<span class="token keyword">function</span> <span class="token function">format1</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Intl<span class="token punctuation">.</span><span class="token function">NumberFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 方法三</span>
<span class="token keyword">function</span> <span class="token function">format2</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> number<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// 换成当地的字符串格式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-常用正则表达式" tabindex="-1"><a class="header-anchor" href="#_31-常用正则表达式" aria-hidden="true">#</a> 31. 常用正则表达式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// （1）匹配 16 进制颜色值</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token comment">// （2）匹配日期，如 yyyy-mm-dd 格式</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

<span class="token comment">// （3）匹配 qq 号</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9][0-9]{4,10}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token comment">// （4）手机号码正则</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[345789]\\d{9}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token comment">// （5）用户名正则</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z\\$][a-zA-Z0-9_\\$]{4,16}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),I={href:"http://caibaojian.com/form-regexp.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.jianshu.com/p/1cb5229325a7",target:"_blank",rel:"noopener noreferrer"},D=t(`<h2 id="_32-生成随机数的各种方法" tabindex="-1"><a class="header-anchor" href="#_32-生成随机数的各种方法" aria-hidden="true">#</a> 32. 生成随机数的各种方法？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.random()   生成0-1（包括0不包括1的随机数）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_33-如何实现数组的随机排序" tabindex="-1"><a class="header-anchor" href="#_33-如何实现数组的随机排序" aria-hidden="true">#</a> 33. 如何实现数组的随机排序？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// （1）使用数组 sort 方法对数组元素随机排序，让 Math.random() 出来的数与 0.5 比较，如果大于就返回 1 交换位置，如果小于就返回 -1，不交换位置。</span>

<span class="token keyword">function</span> <span class="token function">randomSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token punctuation">)</span>      
<span class="token punctuation">}</span>

<span class="token comment">//  缺点：每个元素被派到新数组的位置不是随机的，原因是 sort() 方法是依次比较的。</span>

<span class="token comment">// （2）随机从原数组抽取一个元素，加入到新数组</span>

<span class="token keyword">function</span> <span class="token function">randomSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>randomIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 删除原数组中随机下标位置的值</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// （3）随机交换数组内的元素（洗牌算法类似）</span>

<span class="token keyword">function</span> <span class="token function">randomSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> index<span class="token punctuation">,</span>
    randomIndex<span class="token punctuation">,</span>
    temp<span class="token punctuation">,</span>
    len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 向下取整（最大 - 最小 + 1） + 最小 （+1） // 避免自己跟自己交换</span>
    randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">index</span> <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

    temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// es6</span>
<span class="token keyword">function</span> <span class="token function">randomSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> length <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token comment">// 不是数组或者数组长度小于等于1，直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token operator">||</span> length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>length <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> index<span class="token punctuation">;</span>

    <span class="token punctuation">[</span>array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>array<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),L={href:"https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/#top",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.zhihu.com/question/32303195",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.w3cplus.com/javascript/how-to-randomize-shuffle-a-javascript-array.html",target:"_blank",rel:"noopener noreferrer"},U=t(`<h2 id="_34-javascript-创建对象的几种方式" tabindex="-1"><a class="header-anchor" href="#_34-javascript-创建对象的几种方式" aria-hidden="true">#</a> 34. javascript 创建对象的几种方式？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js 和一般的面向对象的语言不同，在 <span class="token constant">ES6</span> 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象。

对象的创建方式有：

（<span class="token number">1</span>）第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。
	<span class="token comment">// 工厂函数: 返回一个需要的数据的函数</span>
  <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> age
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

（<span class="token number">2</span>）第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 <span class="token keyword">new</span> 来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 <span class="token keyword">this</span> 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 <span class="token keyword">this</span> 的值指向了新建的对象，因此我们可以使用 <span class="token keyword">this</span> 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

（<span class="token number">3</span>）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

（<span class="token number">4</span>）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

（<span class="token number">5</span>）第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。

（<span class="token number">6</span>）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),z={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E5%AF%B9%E8%B1%A1%E5%88%9B%E5%BB%BA.html",target:"_blank",rel:"noopener noreferrer"},H=t(`<h2 id="_35-javascript-继承的几种实现方式" tabindex="-1"><a class="header-anchor" href="#_35-javascript-继承的几种实现方式" aria-hidden="true">#</a> 35. JavaScript 继承的几种实现方式？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我了解的 js 中实现继承的几种方式有：

（1）第一种是以原型链的方式来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

（2）第二种方式是使用借用构造函数的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

（3）第三种方式是组合继承，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

（4）第四种方式是原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

（5）第五种方式是寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

（6）第六种方式是寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),X={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E7%BB%A7%E6%89%BF.html",target:"_blank",rel:"noopener noreferrer"},W=t(`<h2 id="_36-寄生式组合继承的实现" tabindex="-1"><a class="header-anchor" href="#_36-寄生式组合继承的实现" aria-hidden="true">#</a> 36. 寄生式组合继承的实现？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;My name is &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 子类的原型等价于父类的实例，指向父类的原型</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student<span class="token punctuation">;</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayMyGrade</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;My grade is &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_37-javascript-的作用域链" tabindex="-1"><a class="header-anchor" href="#_37-javascript-的作用域链" aria-hidden="true">#</a> 37. Javascript 的作用域链？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。

作用域链的创建过程跟执行上下文的建立有关
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),G={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.html",target:"_blank",rel:"noopener noreferrer"},$=t(`<h2 id="_38-谈谈-this-对象的理解——this指向的四种情况" tabindex="-1"><a class="header-anchor" href="#_38-谈谈-this-对象的理解——this指向的四种情况" aria-hidden="true">#</a> ==38. 谈谈 this 对象的理解——this指向的四种情况==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>1.第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。</p></li><li><p>2.第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。</p></li><li><p>3.第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。</p></li><li><p>4.第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这四种方式，使用构造器调用模式的优先级最高，然后是 apply 、 call 和 bind 调用模式，然后是方法调用模式，然后是函数调用模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),Q={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8Bthis%E8%AF%A6%E8%A7%A3.html",target:"_blank",rel:"noopener noreferrer"},Y=t(`<h2 id="_39-eval-是做什么的-——字符串-代码" tabindex="-1"><a class="header-anchor" href="#_39-eval-是做什么的-——字符串-代码" aria-hidden="true">#</a> 39. eval 是做什么的？——字符串 -&gt; 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>它的功能是把对应的字符串解析成 JS 代码并运行。

应该避免使用 eval，不安全，非常耗性能（2次，一次解析成 js 语句，一次执行）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Z={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval",target:"_blank",rel:"noopener noreferrer"},K=t(`<h2 id="_40-什么是-dom-和-bom" tabindex="-1"><a class="header-anchor" href="#_40-什么是-dom-和-bom" aria-hidden="true">#</a> 40. 什么是 DOM 和 BOM？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DOM 指的是文档对象模型，它指的是把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。

BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的方法和接口。BOM 的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个全局对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location、navigator、screen、history等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),nn={href:"https://www.zhihu.com/question/33453164",target:"_blank",rel:"noopener noreferrer"},sn={href:"http://www.w3school.com.cn/jsref/dom_obj_window.asp",target:"_blank",rel:"noopener noreferrer"},an={href:"https://www.zhihu.com/question/20724662",target:"_blank",rel:"noopener noreferrer"},en={href:"https://segmentfault.com/a/1190000000654274#articleHeader21",target:"_blank",rel:"noopener noreferrer"},tn=t(`<h2 id="_41-写一个通用的事件侦听器函数。" tabindex="-1"><a class="header-anchor" href="#_41-写一个通用的事件侦听器函数。" aria-hidden="true">#</a> 41. 写一个通用的事件侦听器函数。</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> EventUtils <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 视能力分别使用dom0||dom2||IE方式 来绑定事件</span>
  <span class="token comment">// 添加事件</span>
  <span class="token function-variable function">addEvent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">[</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 移除事件</span>
  <span class="token function-variable function">removeEvent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>removeEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>detachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      element<span class="token punctuation">[</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取事件目标</span>
  <span class="token function-variable function">getTarget</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> event<span class="token punctuation">.</span>target <span class="token operator">||</span> event<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event</span>
  <span class="token function-variable function">getEvent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）</span>
  <span class="token function-variable function">stopPropagation</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 取消事件的默认行为</span>
  <span class="token function-variable function">preventDefault</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ln={href:"https://segmentfault.com/a/1190000006934031#articleHeader6",target:"_blank",rel:"noopener noreferrer"},on=n("h2",{id:"_42-事件是什么-ie-与火狐的事件机制有什么区别-如何阻止冒泡",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_42-事件是什么-ie-与火狐的事件机制有什么区别-如何阻止冒泡","aria-hidden":"true"},"#"),s(" ==42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？==")],-1),pn=n("ul",null,[n("li",null,[n("p",null,"1.事件是用户操作网页时发生的交互动作，比如 click/move， 事件除了用户触发的动作外，还可以是文档加载，窗口滚动和大小调整。事件被封装成一个 event 对象，包含了该事件发生时的所有相关信息（ event 的属性）以及可以对事件进行的操作（ event 的方法）。")]),n("li",null,[n("p",null,"2.事件处理机制：IE 支持事件冒泡、Firefox 同时支持两种事件模型，也就是：事件冒泡和事件捕获。")]),n("li",null,[n("p",null,"3.event.stopPropagation() 或者 ie 下的方法 event.cancelBubble = true;")])],-1),cn={href:"https://www.cnblogs.com/lvdabao/p/3265870.html",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://blog.csdn.net/wuseyukui/article/details/13771493",target:"_blank",rel:"noopener noreferrer"},un=t(`<h2 id="_43-三种事件模型是什么" tabindex="-1"><a class="header-anchor" href="#_43-三种事件模型是什么" aria-hidden="true">#</a> 43. 三种事件模型是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>事件是用户操作网页时发生的交互动作或者网页本身的一些操作，现代浏览器一共有三种事件模型。

第一种事件模型是最早的 DOM0 级模型，这种模型不会传播，所以没有事件流的概念，但是现在有的浏览器支持以冒泡的方式实现，它可以在网页中直接定义监听函数，也可以通过 js 属性来指定监听函数。这种方式是所有浏览器都兼容的。

第二种事件模型是 IE 事件模型，在该事件模型中，一次事件共有两个过程：事件处理阶段和事件冒泡阶段。事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到document，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。这种模型通过 attachEvent 来添加监听函数，可以添加多个监听函数，会按顺序依次执行。

第三种是 DOM2 级事件模型，在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。捕获指的是事件从 document 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。后面两个阶段和 IE 事件模型的两个阶段相同。这种事件模型，事件绑定的函数是 addEventListener，其中第三个参数可以指定事件是否在捕获阶段执行（默认值为false）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),dn={href:"https://blog.csdn.net/u013217071/article/details/77613706",target:"_blank",rel:"noopener noreferrer"},vn=t(`<h2 id="_44-事件委派是什么" tabindex="-1"><a class="header-anchor" href="#_44-事件委派是什么" aria-hidden="true">#</a> 44. 事件委派是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>事件委派本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件委派。

使用事件委派我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件委派我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),kn={href:"https://zhuanlan.zhihu.com/p/26536815",target:"_blank",rel:"noopener noreferrer"},mn=t(`<h2 id="_45-1-2-3-map-parseint-答案是多少" tabindex="-1"><a class="header-anchor" href="#_45-1-2-3-map-parseint-答案是多少" aria-hidden="true">#</a> 45. [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map(parseInt) 答案是多少？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，其中 radix 表示要解析的数字的基数(即按什么进制来解析)。（该值介于 2 ~ 36 之间，如果省略该参数或其值为 0，则数字将以 10 进制来解析。如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN）。

此处 map 传了 3 个参数 (element, index, array)，默认第三个参数被忽略掉，因此三次传入的参数分别为 &quot;1-0&quot;, &quot;2-1&quot;, &quot;3-2&quot;

因为字符串的值不能大于进制数，因此后面两次调用均失败，返回 NaN ，第一次基数为 0 ，按十进制解析返回 1。、
// 1  NaN  NaN 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),bn={href:"https://blog.csdn.net/justjavac/article/details/19473199",target:"_blank",rel:"noopener noreferrer"},hn=t(`<h2 id="_46-什么是闭包-为什么要用它" tabindex="-1"><a class="header-anchor" href="#_46-什么是闭包-为什么要用它" aria-hidden="true">#</a> 46. 什么是闭包，为什么要用它？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么是闭包：
   - 闭包是一个存在内部函数的引用关系
   - 该引用指向的是外部函数的局部变量对象(前提是内部函数使用了外部函数的局部变量)

闭包的作用：
   - 延长外部函数变量对象的生命周期
   - 使用闭包能够间接的从函数外部访问函数内部的私有变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),fn={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E9%97%AD%E5%8C%85.html",target:"_blank",rel:"noopener noreferrer"},gn=t(`<h2 id="_47-javascript-代码中的-use-strict-是什么意思-使用它区别是什么" tabindex="-1"><a class="header-anchor" href="#_47-javascript-代码中的-use-strict-是什么意思-使用它区别是什么" aria-hidden="true">#</a> 47. javascript 代码中的 &quot;use strict&quot;; 是什么意思 ? 使用它区别是什么？</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use strict 是一种 ECMAscript5 添加的（严格）运行模式，这种模式使得 Javascript 在更严格的条件下运行。

设立&quot;严格模式&quot;的目的，主要有以下几个：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;</li><li>消除代码运行的一些不安全之处，保证代码运行的安全；</li><li>提高编译器效率，增加运行速度；</li><li>为未来新版本的 Javascript 做好铺垫。</li></ul><p>区别：</p><ul><li>1.声明定义变量必须用var</li><li>2.禁止自定义的函数中的this关键字指向全局对象</li><li>创建eval作用域, 更安全</li></ul><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use strict 指的是严格运行模式，在这种模式对 js 的使用添加了一些限制。比如说禁止 this 指向全局对象，还有声明定义变量必须用var等。设立严格模式的目的，主要是为了消除代码使用中的一些不安全的使用方式，也是为了消除 js 语法本身的一些不合理的地方，以此来减少一些运行时的怪异的行为。同时使用严格运行模式也能够提高编译的效率，从而提高代码的运行速度。
我认为严格模式代表了 js 一种更合理、更安全、更严谨的发展方向。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),_n={href:"http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html",target:"_blank",rel:"noopener noreferrer"},xn=t(`<h2 id="_48-如何判断一个对象是否属于某个类" tabindex="-1"><a class="header-anchor" href="#_48-如何判断一个对象是否属于某个类" aria-hidden="true">#</a> 48. 如何判断一个对象是否属于某个类？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一种方式是使用 A instanceof B 运算符来判断B构造函数的 prototype 属性是否出现在A对象的原型链中的任何位置。

第二种方式，如果需要判断的是某个内置的引用类型的话，可以使用 Object.prototype.toString() 方法来打印对象的 [[Class]] 属性来进行判断。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),yn={href:"https://blog.csdn.net/haitunmin/article/details/78418522",target:"_blank",rel:"noopener noreferrer"},wn=t(`<h2 id="_49-instanceof-的作用" tabindex="-1"><a class="header-anchor" href="#_49-instanceof-的作用" aria-hidden="true">#</a> 49. instanceof 的作用？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。</span>
<span class="token comment">// 实现：</span>

<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 获取对象的原型</span>
    prototype <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// 获取构造函数的 prototype 对象</span>

  <span class="token comment">// 判断构造函数的 prototype 对象是否在对象的原型链上</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>proto<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> prototype<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),jn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof",target:"_blank",rel:"noopener noreferrer"},Sn=t(`<h2 id="_50-new-操作符具体干了什么呢-如何实现" tabindex="-1"><a class="header-anchor" href="#_50-new-操作符具体干了什么呢-如何实现" aria-hidden="true">#</a> 50. new 操作符具体干了什么呢？如何实现？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// （1）首先创建了一个新的空对象</span>
<span class="token comment">// （2）设置原型，将对象的原型设置为函数的 prototype 对象。</span>
<span class="token comment">// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）</span>
<span class="token comment">// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。</span>

<span class="token comment">// 实现:</span>

<span class="token keyword">function</span> <span class="token function">objectFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newObject <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    constructor <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 拿到构造函数</span>
    result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>   

  <span class="token comment">// 参数判断</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> constructor <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;type error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 新建一个空对象，对象的原型为构造函数的 prototype 对象</span>
  newObject <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将 this 指向新建对象，并执行函数</span>
  result <span class="token operator">=</span> <span class="token function">constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>newObject<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 判断返回对象</span>
  <span class="token keyword">let</span> flag <span class="token operator">=</span>
    result <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 判断返回结果</span>
  <span class="token keyword">return</span> flag <span class="token operator">?</span> result <span class="token operator">:</span> newObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用方法</span>
<span class="token comment">// objectFactory(构造函数, 初始化参数);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),qn={href:"https://segmentfault.com/a/1190000008576048",target:"_blank",rel:"noopener noreferrer"},En={href:"https://github.com/mqyqingfeng/Blog/issues/13",target:"_blank",rel:"noopener noreferrer"},On=t(`<h2 id="_51-javascript-中-有一个函数-执行对象查找时-永远不会去查找原型-这个函数是" tabindex="-1"><a class="header-anchor" href="#_51-javascript-中-有一个函数-执行对象查找时-永远不会去查找原型-这个函数是" aria-hidden="true">#</a> 51. Javascript 中，有一个函数，执行对象查找时，永远不会去查找原型，这个函数是？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hasOwnProperty

所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性，和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Mn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",target:"_blank",rel:"noopener noreferrer"},Nn=t(`<h2 id="_52-对于-json-的了解" tabindex="-1"><a class="header-anchor" href="#_52-对于-json-的了解" aria-hidden="true">#</a> 52. 对于 JSON 的了解？</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JSON 是一种数据交换格式，基于文本，优于轻量，用于交换数据。

JSON 可以表示数字、布尔值、字符串、null、数组（值的有序序列），以及由这些值（或数组、对象）所组成的对象（字符串与值的映射）。

JSON 使用 JavaScript 语法，但是 JSON 格式仅仅是一个文本。文本可以被任何编程语言读取及作为数据格式传递。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JSON 是一种基于文本的轻量级的数据交换格式。它可以被任何的编程语言读取和作为数据格式来传递。

在项目开发中，我们使用 JSON 作为前后端数据交换的方式。在前端我们通过将一个符合 JSON 格式的数据结构序列化为 JSON 字符串，然后将它传递到后端，后端通过 JSON 格式的字符串解析后生成对应的数据结构，以此来实现前后端数据的一个传递。

因为 JSON 的语法是基于 js 的，因此很容易将 JSON 和 js 中的对象弄混，但是我们应该注意的是 JSON 和 js 中的对象不是一回事，JSON 中对象格式更加严格，比如说在 JSON 中属性值不能为函数，不能出现 NaN 这样的属性值等，因此大多数的 js 对象是不符合 JSON 对象的格式的。

在 js 中提供了两个函数来实现 js 数据结构和 JSON 格式的转换处理，一个是 JSON.stringify 函数，通过传入一个符合 JSON 格式的数据结构，将其转换为一个 JSON 字符串。如果传入的数据结构不符合 JSON 格式，那么在序列化的时候会对这些值进行对应的特殊处理，使其符合规范。在前端向后端发送数据时，我们可以调用这个函数将数据对象转化为 JSON 格式的字符串。

另一个函数 JSON.parse() 函数，这个函数用来将 JSON 格式的字符串转换为一个 js 数据结构，如果传入的字符串不是标准的 JSON 格式的字符串的话，将会抛出错误。当我们从后端接收到 JSON 格式的字符串时，我们可以通过这个方法来将其解析为一个 js 数据结构，以此来进行数据的访问。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),An={href:"https://my.oschina.net/u/3284240/blog/874368",target:"_blank",rel:"noopener noreferrer"},Jn=t(`<h2 id="_53-foreach-call-function-a-a-style-outline-1px-solid-math-random-1-24-tostring-16-能解释一下这段代码的意思吗-暂时不看" tabindex="-1"><a class="header-anchor" href="#_53-foreach-call-function-a-a-style-outline-1px-solid-math-random-1-24-tostring-16-能解释一下这段代码的意思吗-暂时不看" aria-hidden="true">#</a> 53. [].forEach.call($$(&quot;<em>&quot;),function(a){a.style.outline=&quot;1px solid #&quot;+(~~(Math.random()</em>(1&lt;&lt;24))).toString(16)}) 能解释一下这段代码的意思吗？（暂时不看）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）选取页面所有 DOM 元素。在浏览器的控制台中可以使用$$()方法来获取页面中相应的元素，这是现代浏览器提供的一个命令行 API 相当于 document.querySelectorAll 方法。

（2）循环遍历 DOM 元素

（3）给元素添加 outline 。由于渲染的 outline 是不在 CSS 盒模型中的，所以为元素添加 outline 并不会影响元素的大小和页面的布局。

（4）生成随机颜色函数。Math.random()*(1&lt;&lt;24) 可以得到 0~2^24 - 1 之间的随机数，因为得到的是一个浮点数，但我们只需要整数部分，使用取反操作符 ~ 连续两次取反获得整数部分，然后再用 toString(16) 的方式，转换为一个十六进制的字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Cn={href:"https://2008winstar.iteye.com/blog/2128290",target:"_blank",rel:"noopener noreferrer"},Tn=t(`<h2 id="_54-js-延迟加载的方式有哪些" tabindex="-1"><a class="header-anchor" href="#_54-js-延迟加载的方式有哪些" aria-hidden="true">#</a> ==54. js 延迟加载的方式有哪些？==</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js延迟加载，也就是等页面加载完成之后再加载js文件。js延迟加载有助于提高页面加载速度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般有以下几种方式：</p><ul><li>defer 属性</li><li>async 属性</li><li>动态创建 DOM 方式</li><li>使用 setTimeout 延迟方法</li><li>让 JS 最后加载</li></ul><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js 的加载、解析和执行会阻塞页面的渲染过程，因此我们希望 js 脚本能够尽可能的延迟加载，提高页面的渲染速度。

第一种方式是我们一般采用的是将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。

第二种方式是给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。

第三种方式是给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

第四种方式是动态创建 DOM 标签的方式，我们可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),Pn={href:"https://blog.csdn.net/meijory/article/details/76389762",target:"_blank",rel:"noopener noreferrer"},Rn={href:"http://www.w3school.com.cn/html5/att_script_async.asp",target:"_blank",rel:"noopener noreferrer"},In=n("code",null,"<script>",-1),Bn=n("code",null,"async",-1),Dn=t(`<h2 id="_55-ajax-是什么-如何创建一个-ajax" tabindex="-1"><a class="header-anchor" href="#_55-ajax-是什么-如何创建一个-ajax" aria-hidden="true">#</a> 55. Ajax 是什么? 如何创建一个 Ajax？</h2><p>Ajax是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。</p><p>具体来说，AJAX 包括以下几个步骤。</p><ul><li>1.创建 XMLHttpRequest 对象，也就是创建一个异步调用对象</li><li>2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的方法、URL 及验证信息</li><li>3.设置响应 HTTP 请求状态变化的函数</li><li>4.发送 HTTP 请求</li><li>5.获取异步调用返回的数据</li><li>6.使用 JavaScript 和 DOM 实现局部刷新</li></ul><p>一般实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">SERVER_URL</span> <span class="token operator">=</span> <span class="token string">&quot;/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 Http 请求</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token constant">SERVER_URL</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置状态监听函数</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token comment">// 当请求成功时</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 设置请求失败时的监听函数</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 设置请求头信息</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 发送 Http 请求</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// promise 封装实现：</span>

<span class="token keyword">function</span> <span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个 promise 对象</span>
  <span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 新建一个 http 请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置状态的监听函数</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

      <span class="token comment">// 当请求成功或失败时，改变 promise 的状态</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置错误监听函数</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置响应的数据类型</span>
    xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置请求头信息</span>
    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 发送 http 请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我对 ajax 的理解是，它是一种异步通信的方法，通过直接由 js 脚本向服务器发起 http 通信，然后根据服务器返回的数据，更新网页的相应部分，而不用刷新整个页面的一种方法。

创建一个 ajax 有这样几个步骤

首先是创建一个 XMLHttpRequest 对象。

然后在这个对象上使用 open 方法创建一个 http 请求，open 方法所需要的参数是请求的方法、请求的地址、是否异步和用户的认证信息。

在发起请求前，我们可以为这个对象添加一些信息和监听函数。比如说我们可以通过 setRequestHeader 方法来为请求添加头信息。我们还可以为这个对象添加一个状态监听函数。一个 XMLHttpRequest 对象一共有 5 个状态，当它的状态变化时会触发onreadystatechange 事件，我们可以通过设置监听函数，来处理请求成功后的结果。当对象的 readyState 变为 4 的时候，代表服务器返回的数据接收完成，这个时候我们可以通过判断请求的状态，如果状态是 2xx 或者 304 的话则代表返回正常。这个时候我们就可以通过 response 中的数据来对页面进行更新了。

当对象的属性和监听函数设置完成后，最后我们调用 send 方法来向服务器发起请求，可以传入参数作为发送的数据体。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),Ln={href:"https://wangdoc.com/javascript/bom/xmlhttprequest.html",target:"_blank",rel:"noopener noreferrer"},Fn={href:"https://juejin.im/post/5acde23c5188255cb32e7e76",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://juejin.im/post/5c160937f265da61180199b2",target:"_blank",rel:"noopener noreferrer"},Un={href:"https://segmentfault.com/a/1190000003810652",target:"_blank",rel:"noopener noreferrer"},zn=t(`<h2 id="_56-谈一谈浏览器的缓存机制" tabindex="-1"><a class="header-anchor" href="#_56-谈一谈浏览器的缓存机制" aria-hidden="true">#</a> ==56. 谈一谈浏览器的缓存机制？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>浏览器的缓存机制指的是通过在一段时间内保留已接收到的 web 资源的一个副本，如果在资源的有效时间内，发起了对这个资源的再一次请求，那么浏览器会直接使用缓存的副本，而不是向服务器发起请求。使用 web 缓存可以有效地提高页面的打开速度，减少不必要的网络带宽的消耗。

web 资源的缓存策略一般由服务器来指定，可以分为两种，分别是强制缓存策略和协商缓存策略。

使用强制缓存策略时，如果缓存资源有效，则直接使用缓存资源，不必再向服务器发起请求。强制缓存策略可以通过两种方式来设置，分别是 http 头信息中的 Expires 属性和 Cache-Control 属性。

服务器通过在响应头中添加 Expires 属性，来指定资源的过期时间。在过期时间以内，该资源可以被缓存使用，不必再向服务器发送请求。这个时间是一个绝对时间，它是服务器的时间，因此可能存在这样的问题，就是客户端的时间和服务器端的时间不一致，或者用户可以对客户端时间进行修改的情况，这样就可能会影响缓存命中的结果。

Expires 是 http1.0 中的方式，因为它的一些缺点，在 http 1.1 中提出了一个新的头部属性就是 Cache-Control 属性，它提供了对资源的缓存的更精确的控制。它有很多不同的值，我们可以通过设置 max-age 来指定资源能够被缓存的时间的长短，这是一个相对的时间，它会根据这个时间的大小和资源第一次请求时的时间来计算出资源过期的时间，因此相对于 Expires 来说，这种方式更加有效一些。常用的还有比如 private ，用来规定资源只能被客户端缓存，不能够代理服务器所缓存，还有如 no-store ，用来指定资源不能够被缓存，no-cache 代表该资源能够被缓存，但是立即失效，每次都需要向服务器发起请求。

一般来说只需要设置其中一种方式就可以实现强制缓存策略，当两种方式一起使用时，Cache-Control 的优先级要高于 Expires 。

使用协商缓存策略时，浏览器会先向服务器发送一个请求，如果资源没有发生修改，则返回一个 304 状态，让浏览器使用本地的缓存副本。如果资源发生了修改，则返回修改后的资源。协商缓存也可以通过两种方式来设置，分别是 http 头信息中的 Etag 和 Last-Modified 属性。

服务器通过在响应头中添加 Last-Modified 属性来指出资源最后一次修改的时间，当浏览器下一次发起请求时，会在请求头中添加一个 If-Modified-Since 的属性，属性值为上一次资源返回时的 Last-Modified 的值。当请求发送到服务器后服务器会通过这个属性来和资源的最后一次的修改时间来进行比较，以此来判断资源是否做了修改。如果资源没有修改，那么返回 304 状态，让客户端使用本地的缓存。如果资源已经被修改了，则返回修改后的资源。使用这种方法有一个缺点，就是 Last-Modified 标注的最后修改时间只能精确到秒级，如果某些文件在1秒钟以内，被修改多次的话，那么文件已经改变了但是 Last-Modified 却没有改变，这样会造成缓存命中的不准确。

因为 Last-Modified 的这种可能发生的不准确性，http 中提供了另外一种方式，那就是 Etag 属性。服务器在返回资源的时候，在头信息中添加了 Etag 属性，这个属性是资源生成的唯一标识符，当资源发生改变的时候，这个值也会发生改变。在下一次资源请求时，浏览器会在请求头中添加一个 If-None-Match 属性，这个属性的值就是上次返回的资源的 Etag 的值。服务接收到请求后会根据这个值来和资源当前的 Etag 的值来进行比较，以此来判断资源是否发生改变，是否需要返回资源。通过这种方式，比 Last-Modified 的方式更加精确。

当 Last-Modified 和 Etag 属性同时出现的时候，Etag 的优先级更高。使用协商缓存的时候，服务器需要考虑负载平衡的问题，因此多个服务器上资源的 Last-Modified 应该保持一致，因为每个服务器上 Etag 的值都不一样，因此在考虑负载平衡时，最好不要设置 Etag 属性。

强缓存策略和协商缓存策略在缓存命中时都会直接使用本地的缓存副本，区别只在于协商缓存会向服务器发送一次请求。它们缓存不命中时，都会向服务器发送请求来获取资源。在实际的缓存机制中，强缓存策略和协商缓存策略是一起合作使用的。浏览器首先会根据请求的信息判断，强缓存是否命中，如果命中则直接使用资源。如果不命中则根据头信息向服务器发起请求，使用协商缓存，如果协商缓存命中的话，则服务器不返回资源，浏览器直接使用本地资源的副本，如果协商缓存不命中，则服务器返回最新的资源给浏览器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Hn={href:"https://segmentfault.com/a/1190000012573337",target:"_blank",rel:"noopener noreferrer"},Xn={href:"https://juejin.im/post/5b9346dcf265da0aac6fbe57#heading-3",target:"_blank",rel:"noopener noreferrer"},Wn={href:"https://www.web-tinker.com/article/21221.html",target:"_blank",rel:"noopener noreferrer"},Gn={href:"https://juejin.im/post/5c2d6c9ae51d450cf4195a08",target:"_blank",rel:"noopener noreferrer"},$n=t('<h2 id="_57-ajax-解决浏览器缓存问题" tabindex="-1"><a class="header-anchor" href="#_57-ajax-解决浏览器缓存问题" aria-hidden="true">#</a> 57. Ajax 解决浏览器缓存问题？</h2><ul><li><p>1.在 ajax 发送请求前加上 anyAjaxObj.setRequestHeader(&quot;If-Modified-Since&quot;,&quot;0&quot;)。</p></li><li><p>2.在 ajax 发送请求前加上 anyAjaxObj.setRequestHeader(&quot;Cache-Control&quot;,&quot;no-cache&quot;)。</p></li><li><p>3.在 URL 后面加上一个随机数： &quot;fresh=&quot; + Math.random();。</p></li><li><p>4.在 URL 后面加上时间戳：&quot;nowtime=&quot; + new Date().getTime();。</p></li><li><p>5.如果是使用 jQuery，直接这样就可以了$.ajaxSetup({cache:false})。这样页面的所有 ajax 都会执行这条语句就是不需要保存缓存记录。</p></li></ul>',2),Qn={href:"https://www.cnblogs.com/cwzqianduan/p/8632009.html",target:"_blank",rel:"noopener noreferrer"},Yn={href:"https://segmentfault.com/a/1190000012573337",target:"_blank",rel:"noopener noreferrer"},Zn=t(`<h2 id="_58-同步和异步的区别" tabindex="-1"><a class="header-anchor" href="#_58-同步和异步的区别" aria-hidden="true">#</a> ==58. 同步和异步的区别？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>同步指的是当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，那么这个进程会一直等待下去，直到消息返回为止再继续向下执行。

异步指的是当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，这个时候进程会继续往下执行，不会阻塞等待消息的返回，当消息返回时系统再通知进程进行处理。
异步的常见场景：
1.计时器
2.ajax
3.读取文件

注意：同步代码执行完成以后才可以执行异步代码！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Kn={href:"https://blog.csdn.net/tennysonsky/article/details/45111623",target:"_blank",rel:"noopener noreferrer"},ns=t(`<h2 id="_59-什么是浏览器的同源政策" tabindex="-1"><a class="header-anchor" href="#_59-什么是浏览器的同源政策" aria-hidden="true">#</a> 59. 什么是浏览器的同源政策？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我对浏览器的同源政策的理解是，一个域下的 js 脚本在未经允许的情况下，不能够访问另一个域的内容。这里的同源的指的是两个域的协议、域名、端口号必须相同，否则则不属于同一个域。

同源政策主要限制了三个方面

第一个是当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。
第二个是当前域下的 js 脚本不能够操作访问操作其他域下的 DOM。
第三个是当前域下 ajax 无法发送跨域请求。

同源政策的目的主要是为了保证用户的信息安全，它只是对 js 脚本的一种限制，并不是对浏览器的限制，对于一般的 img、或者 script 脚本请求都不会有跨域的限制，这是因为这些操作都不会通过响应结果来进行可能出现安全问题的操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_60-如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#_60-如何解决跨域问题" aria-hidden="true">#</a> ==60. 如何解决跨域问题？==</h2><p>相关知识点：</p><ul><li><ol><li>通过 jsonp 跨域</li></ol></li><li><ol start="2"><li>document.domain + iframe 跨域</li></ol></li><li><ol start="3"><li>location.hash + iframe</li></ol></li><li><ol start="4"><li>window.name + iframe 跨域</li></ol></li><li><ol start="5"><li>postMessage 跨域</li></ol></li><li><ol start="6"><li>跨域资源共享（CORS)</li></ol></li><li><ol start="7"><li>nginx 代理跨域</li></ol></li><li><ol start="8"><li>nodejs 中间件代理跨域</li></ol></li><li><ol start="9"><li>WebSocket 协议跨域</li></ol></li></ul><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解决跨域的方法我们可以根据我们想要实现的目的来划分。

首先我们如果只是想要实现主域名下的不同子域名的跨域操作，我们可以使用设置 document.domain 来解决。

（1）将 document.domain 设置为主域名，来实现相同子域名的跨域操作，这个时候主域名下的 cookie 就能够被子域名所访问。同时如果文档中含有主域名相同，子域名不同的 iframe 的话，我们也可以对这个 iframe 进行操作。

如果是想要解决不同跨域窗口间的通信问题，比如说一个页面想要和页面的中的不同源的 iframe 进行通信的问题，我们可以使用 location.hash 或者 window.name 或者 postMessage 来解决。

（2）使用 location.hash 的方法，我们可以在主页面动态的修改 iframe 窗口的 hash 值，然后在 iframe 窗口里实现监听函数来实现这样一个单向的通信。因为在 iframe 是没有办法访问到不同源的父级窗口的，所以我们不能直接修改父级窗口的 hash 值来实现通信，我们可以在 iframe 中再加入一个 iframe ，这个 iframe 的内容是和父级页面同源的，所以我们可以 window.parent.parent 来修改最顶级页面的 src，以此来实现双向通信。

（3）使用 window.name 的方法，主要是基于同一个窗口中设置了 window.name 后不同源的页面也可以访问，所以不同源的子页面可以首先在 window.name 中写入数据，然后跳转到一个和父级同源的页面。这个时候级页面就可以访问同源的子页面中 window.name 中的数据了，这种方式的好处是可以传输的数据量大。

（4）使用 postMessage 来解决的方法，这是一个 h5 中新增的一个 api。通过它我们可以实现多窗口间的信息传递，通过获取到指定窗口的引用，然后调用 postMessage 来发送信息，在窗口中我们通过对 message 信息的监听来接收信息，以此来实现不同源间的信息交换。

如果是像解决 ajax 无法提交跨域请求的问题，我们可以使用 jsonp、cors、websocket 协议、服务器代理来解决问题。

（5）使用 jsonp 来实现跨域请求，它的主要原理是通过动态构建 script  标签来实现跨域请求，因为浏览器对 script 标签的引入没有跨域的访问限制 。通过在请求的 url 后指定一个回调函数，然后服务器在返回数据的时候，构建一个 json 数据的包装，这个包装就是回调函数，然后返回给前端，前端接收到数据后，因为请求的是脚本文件，所以会直接执行，这样我们先前定义好的回调函数就可以被调用，从而实现了跨域请求的处理。这种方式只能用于 get 请求。

（6）使用 CORS 的方式，CORS 是一个 W3C 标准，全称是&quot;跨域资源共享&quot;。CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，因此我们只需要在服务器端配置就行。浏览器将 CORS 请求分成两类：简单请求和非简单请求。对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是会在头信息之中，增加一个 Origin 字段。Origin 字段用来说明本次请求来自哪个源。服务器根据这个值，决定是否同意这次请求。对于如果 Origin 指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含 Access-Control-Allow-Origin 字段，就知道出错了，从而抛出一个错误，ajax 不会收到响应信息。如果成功的话会包含一些以 Access-Control- 开头的字段。

非简单请求，浏览器会先发出一次预检请求，来判断该域名是否在服务器的白名单中，如果收到肯定回复后才会发起请求。

（7）使用 websocket 协议，这个协议没有同源限制。

（8）使用服务器来代理跨域的访问请求，就是有跨域的请求操作时发送请求给后端，让后端代为请求，然后最后将获取的结果返回。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),ss={href:"https://segmentfault.com/a/1190000011145364",target:"_blank",rel:"noopener noreferrer"},as={href:"http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html",target:"_blank",rel:"noopener noreferrer"},es={href:"https://juejin.im/entry/59feae9df265da43094488f6",target:"_blank",rel:"noopener noreferrer"},ts={href:"https://www.zhihu.com/question/31592553",target:"_blank",rel:"noopener noreferrer"},is=n("h2",{id:"_61-服务器代理转发时-该如何处理-cookie",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_61-服务器代理转发时-该如何处理-cookie","aria-hidden":"true"},"#"),s(" 61. 服务器代理转发时，该如何处理 cookie？")],-1),ls={href:"https://www.jianshu.com/p/5eab0f83e3b4",target:"_blank",rel:"noopener noreferrer"},os=t(`<h2 id="_62-简单谈一下-cookie" tabindex="-1"><a class="header-anchor" href="#_62-简单谈一下-cookie" aria-hidden="true">#</a> 62. 简单谈一下 cookie ？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我的理解是 cookie 是服务器提供的一种用于维护会话状态信息的数据，通过服务器发送到浏览器，浏览器保存在本地，当下一次有同源的请求时，将保存的 cookie 值添加到请求头部，发送给服务端。这可以用来实现记录用户登录状态等功能。cookie 一般可以存储 4k 大小的数据，并且只能够被同源的网页所共享访问。

服务器端可以使用 Set-Cookie 的响应头部来配置 cookie 信息。一条cookie 包括了5个属性值 expires、domain、path、secure、HttpOnly。其中 expires 指定了 cookie 失效的时间，domain 是域名、path是路径，domain 和 path 一起限制了 cookie 能够被哪些 url 访问。secure 规定了 cookie 只能在确保安全的情况下传输，HttpOnly 规定了这个 cookie 只能被服务器访问，不能使用 js 脚本访问。

在发生 xhr 的跨域请求的时候，即使是同源下的 cookie，也不会被自动添加到请求头部，除非显示地规定。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ps={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"},cs={href:"https://segmentfault.com/a/1190000004556040",target:"_blank",rel:"noopener noreferrer"},rs=t(`<h2 id="_63-模块化开发怎么做" tabindex="-1"><a class="header-anchor" href="#_63-模块化开发怎么做" aria-hidden="true">#</a> 63. 模块化开发怎么做？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js只实现一些简单的功能，所以并没有模块的概念，但随着程序越来越复杂，代码的模块化开发变得越来越重要。

1. 全局function模式：由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污染，并且模块间没有联系。

2. namespace模式：后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所有的模块成员，外部代码可以修改内部属性的值。

3. IIFE模式（闭包）：之后发展为立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。但是这种方法无法解决当前这个模块依赖另一个模块的问题。

4. IIFE增强模式：通过在IIFE模式中引入依赖，这就是现代模块实现的基石
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),us={href:"https://juejin.im/post/5ab378c46fb9a028ce7b824f",target:"_blank",rel:"noopener noreferrer"},ds={href:"http://www.ruanyifeng.com/blog/2012/10/javascript_module.html",target:"_blank",rel:"noopener noreferrer"},vs={href:"https://juejin.im/post/5aaa37c8f265da23945f365c",target:"_blank",rel:"noopener noreferrer"},ks={href:"http://es6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"},ms=t(`<h2 id="_64-js-的几种模块规范" tabindex="-1"><a class="header-anchor" href="#_64-js-的几种模块规范" aria-hidden="true">#</a> 64. js 的几种模块规范？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js 中现在比较成熟的有四种模块加载方案。

第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。

第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。

第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和 require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。参考65

第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。这种方案和上面三种方案都不同，参考 66。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_65-amd-和-cmd-规范的区别" tabindex="-1"><a class="header-anchor" href="#_65-amd-和-cmd-规范的区别" aria-hidden="true">#</a> 65. AMD 和 CMD 规范的区别？</h2><p>它们之间的主要区别有两个方面。</p><p>（1）第一个方面是在模块定义时对依赖的处理不同。AMD 推崇依赖前置，在定义模块的时候就要声明其依赖的模块。而 CMD 推崇就近依赖，只有在用到某个模块的时候再去 require。</p><p>（2）第二个方面是对依赖模块的执行时机处理不同。首先 AMD 和 CMD 对于模块的加载方式都是异步加载，不过它们的区别在于模块的执行时机，AMD 在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和我们书写的顺序不一定一致。而 CMD在依赖模块加载完成后并不执行，只是下载而已，等到所有的依赖模块都加载好后，进入回调函数逻辑，遇到 require 语句的时候才执行对应的模块，这样模块的执行顺序就和我们书写的顺序保持一致了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// AMD 默认推荐</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 依赖必须一开始就写好</span>
  a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 此处略去 100 行</span>
  b<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// CMD</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 此处略去 100 行</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 依赖可以就近书写</span>
  b<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),bs={href:"https://juejin.im/post/5a422b036fb9a045211ef789",target:"_blank",rel:"noopener noreferrer"},hs=t(`<h2 id="_66-es6-模块与-commonjs-模块、amd、cmd-的差异。" tabindex="-1"><a class="header-anchor" href="#_66-es6-模块与-commonjs-模块、amd、cmd-的差异。" aria-hidden="true">#</a> 66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。</h2><ul><li><p>1.CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。</p></li><li><p>2.CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。CommonJS 模块就是对象，即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。</p></li></ul><h2 id="_67-requirejs-的核心原理是什么-如何动态加载的-如何避免多次加载的-如何-缓存的" tabindex="-1"><a class="header-anchor" href="#_67-requirejs-的核心原理是什么-如何动态加载的-如何避免多次加载的-如何-缓存的" aria-hidden="true">#</a> 67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>require.js 的核心原理是通过动态创建 script 脚本来异步引入模块，然后对每个脚本的 load 事件进行监听，如果每个脚本都加载完成了，再调用回调函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),fs={href:"https://github.com/HRFE/blog/issues/10",target:"_blank",rel:"noopener noreferrer"},gs={href:"https://zhuanlan.zhihu.com/p/55039478",target:"_blank",rel:"noopener noreferrer"},_s={href:"https://www.cnblogs.com/dong-xu/p/7160919.html",target:"_blank",rel:"noopener noreferrer"},xs={href:"https://www.jianshu.com/p/5a39535909e4",target:"_blank",rel:"noopener noreferrer"},ys=n("h2",{id:"_68-js-模块加载器的轮子怎么造-也就是如何实现一个模块加载器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_68-js-模块加载器的轮子怎么造-也就是如何实现一个模块加载器","aria-hidden":"true"},"#"),s(" 68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？")],-1),ws={href:"https://www.zhihu.com/question/21157540",target:"_blank",rel:"noopener noreferrer"},js=t(`<h2 id="_69-es6-怎么写-class-class出现的意义是什么" tabindex="-1"><a class="header-anchor" href="#_69-es6-怎么写-class-class出现的意义是什么" aria-hidden="true">#</a> 69. ES6 怎么写 class，class出现的意义是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在我看来 ES6 新添加的 class 只是为了补充 js 中缺少的一些面向对象语言的特性，但本质上来说它只是一种语法糖，不是一个新的东西，其背后还是原型继承的思想。通过加入 class 可以有利于我们更好的组织代码。

在 class 中添加的方法，其实是添加在类的原型上的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ss={href:"https://www.zhihu.com/question/29789315",target:"_blank",rel:"noopener noreferrer"},qs={href:"http://es6.ruanyifeng.com/#docs/class",target:"_blank",rel:"noopener noreferrer"},Es=t(`<h2 id="_70-documen-write-和-innerhtml-的区别" tabindex="-1"><a class="header-anchor" href="#_70-documen-write-和-innerhtml-的区别" aria-hidden="true">#</a> 70. documen.write 和 innerHTML 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.write 的内容会代替整个文档内容，会重写整个页面。

innerHTML 的内容只是替代指定元素的内容，只会重写页面中的部分内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Os={href:"https://www.nowcoder.com/questionTerminal/2c5d8105b2694d85b06eff85e871cf50",target:"_blank",rel:"noopener noreferrer"},Ms=t(`<h2 id="_71-dom-操作——怎样添加、移除、移动、复制、创建和查找节点" tabindex="-1"><a class="header-anchor" href="#_71-dom-操作——怎样添加、移除、移动、复制、创建和查找节点" aria-hidden="true">#</a> ==71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？==</h2><p>（1）创建新节点</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>以下方法都是document调用：
<span class="token function">createDocumentFragment</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">createElement</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）添加、移除、替换、插入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>以下方法都是父元素调用，操作子元素：
<span class="token function">appendChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token function">removeChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token function">replaceChild</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">,</span>old<span class="token punctuation">)</span>
<span class="token function">insertBefore</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">,</span>old<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）查找</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）属性操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">getAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">hasAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">removeAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),Ns={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction#DOM_interfaces",target:"_blank",rel:"noopener noreferrer"},As={href:"https://harttle.land/2015/10/01/javascript-dom-api.html",target:"_blank",rel:"noopener noreferrer"},Js={href:"https://microzz.com/2017/04/06/jsdom/",target:"_blank",rel:"noopener noreferrer"},Cs=t(`<h2 id="_72-innerhtml-与-outerhtml-的区别" tabindex="-1"><a class="header-anchor" href="#_72-innerhtml-与-outerhtml-的区别" aria-hidden="true">#</a> 72. innerHTML 与 outerHTML 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对于这样一个 HTML 元素：&lt;div&gt;content&lt;br/&gt;&lt;/div&gt;。

innerHTML：内部 HTML，content&lt;br/&gt;；
outerHTML：外部 HTML，&lt;div&gt;content&lt;br/&gt;&lt;/div&gt;；
innerText：内部文本，content ；
outerText：内部文本，content ；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_73-call-、-apply-和-bind-的区别" tabindex="-1"><a class="header-anchor" href="#_73-call-、-apply-和-bind-的区别" aria-hidden="true">#</a> ==73. call() 、 apply() 和 bind() 的区别？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>call,apply,bind()三者都用于改变函数的this对象的指向。
bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用。
call和apply的作用一模一样，区别仅在于传入参数的形式的不同。

apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数。

call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Ts={href:"https://juejin.im/entry/58d0a7b22f301e007e5a15ae",target:"_blank",rel:"noopener noreferrer"},Ps=t(`<h2 id="_74-javascript-类数组对象的定义" tabindex="-1"><a class="header-anchor" href="#_74-javascript-类数组对象的定义" aria-hidden="true">#</a> 74. JavaScript 类数组对象的定义？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。

常见的类数组对象有 arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有 length 属性值，代表可接收的参数个数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见的类数组转换为数组的方法有这样几种：</p><p>（1）通过 call 调用数组的 slice 方法来实现转换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）通过 call 调用数组的 splice 方法来实现转换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）通过 apply 调用数组的 concat 方法来实现转换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）通过 Array.from 方法来实现转换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),Rs={href:"https://github.com/mqyqingfeng/Blog/issues/14",target:"_blank",rel:"noopener noreferrer"},Is={href:"https://segmentfault.com/a/1190000000415572",target:"_blank",rel:"noopener noreferrer"},Bs={href:"https://blog.lxxyx.cn/2016/05/07/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3JavaScript%E7%B1%BB%E6%95%B0%E7%BB%84/",target:"_blank",rel:"noopener noreferrer"},Ds=t(`<h2 id="_75-数组和对象有哪些原生方法-列举一下" tabindex="-1"><a class="header-anchor" href="#_75-数组和对象有哪些原生方法-列举一下" aria-hidden="true">#</a> ==75. 数组和对象有哪些原生方法，列举一下？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。

数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。

数组首部操作的方法 shift() 和 unshift() 重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。

数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。

数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。

数组插入方法 splice()，影响原数组查找特定项的索引的方法，indexOf() 和 lastIndexOf() 迭代方法 every()、some()、filter()、map() 和 forEach() 方法

数组归并方法 reduce() 和 reduceRight() 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ls={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8BArray%E8%AF%A6%E8%A7%A3.html",target:"_blank",rel:"noopener noreferrer"},Fs=t(`<h2 id="_76-数组的-fill-方法" tabindex="-1"><a class="header-anchor" href="#_76-数组的-fill-方法" aria-hidden="true">#</a> 76. 数组的 fill 方法？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
fill 方法接受三个参数 value，start 以及 end，start 和 end 参数是可选的，其默认值分别为 0 和 this 对象的 length 属性值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Vs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",target:"_blank",rel:"noopener noreferrer"},Us=t(`<h2 id="_77-的长度" tabindex="-1"><a class="header-anchor" href="#_77-的长度" aria-hidden="true">#</a> 77. [,,,] 的长度？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>尾后逗号 （有时叫做“终止逗号”）在向 JavaScript 代码添加元素、参数、属性时十分有用。如果你想要添加新的属性，并且上一行已经使用了尾后逗号，你可以仅仅添加新的一行，而不需要修改上一行。这使得版本控制更加清晰，以及代码维护麻烦更少。

JavaScript 一开始就支持数组字面值中的尾后逗号，随后向对象字面值（ECMAScript 5）中添加了尾后逗号。最近（ECMAScript 2017），又将其添加到函数参数中。但是 JSON 不支持尾后逗号。

如果使用了多于一个尾后逗号，会产生间隙。 带有间隙的数组叫做稀疏数组（密致数组没有间隙）。稀疏数组的长度为逗号的数量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),zs={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas",target:"_blank",rel:"noopener noreferrer"},Hs=t(`<h2 id="_78-javascript-中的作用域与变量声明提升" tabindex="-1"><a class="header-anchor" href="#_78-javascript-中的作用域与变量声明提升" aria-hidden="true">#</a> 78. JavaScript 中的作用域与变量声明提升？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>变量提升的表现是，无论我们在函数中何处位置声明的变量，好像都被提升到了函数的首部，我们可以在变量声明前访问到而不会报错。

造成变量声明提升的本质原因是 js 引擎在代码执行前有一个解析的过程，创建了执行上下文，初始化了一些代码执行时需要用到的对象。当我们访问一个变量时，我们会到当前执行上下文中的作用域链中去查找，而作用域链的首端指向的是当前执行上下文的变量对象，这个变量对象是执行上下文的一个属性，它包含了函数的形参、所有的函数和变量声明，这个对象的是在代码解析的时候创建的。这就是会出现变量声明提升的根本原因。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Xs={href:"http://cavszhouyou.top/JavaScript%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E4%B9%8B%E5%8F%98%E9%87%8F%E5%AF%B9%E8%B1%A1.html",target:"_blank",rel:"noopener noreferrer"},Ws=n("h2",{id:"_79-如何编写高性能的-javascript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_79-如何编写高性能的-javascript","aria-hidden":"true"},"#"),s(" 79. 如何编写高性能的 Javascript ？")],-1),Gs=n("ul",null,[n("li",null,"1.使用位运算代替一些简单的四则运算。"),n("li",null,"2.避免使用过深的嵌套循环。"),n("li",null,"3.不要使用未定义的变量。"),n("li",null,"4.当需要多次访问数组长度时，可以用变量保存起来，避免每次都会去进行属性查找。")],-1),$s={href:"https://zhuanlan.zhihu.com/p/34780474",target:"_blank",rel:"noopener noreferrer"},Qs=t(`<h2 id="_80-简单介绍一下-v8-引擎的垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#_80-简单介绍一下-v8-引擎的垃圾回收机制" aria-hidden="true">#</a> ==80. 简单介绍一下 V8 引擎的垃圾回收机制==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v8 的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点，一是新生的对象容易早死，另一个是不死的对象会活得更久。基于这个假说，v8 引擎将内存分为了新生代和老生代。

新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生代。

新生代被分为 From 和 To 两个空间，To 一般是闲置的。当 From 空间满了的时候会执行 Scavenge 算法进行垃圾回收。当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。这个算法分为三步：

（1）首先检查 From 空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足条件则晋升到老生代。如果不满足条件则移动 To 空间。

（2）如果对象不存活，则释放对象的空间。

（3）最后将 From 空间和 To 空间角色进行交换。

新生代对象晋升到老生代有两个条件：

（1）第一个是判断是对象否已经经过一次 Scavenge 回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。

（2）第二个是 To 空间的内存使用占比是否超过限制。当对象从 From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置 25% 的原因主要是因为算法结束后，两个空间结束后会交换位置，如果 To 空间的内存太小，会影响后续的内存分配。

老生代采用了标记清除法和标记压缩法。标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以了解决内存碎片的问题引入了标记压缩法。

由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法由于内存小，每次停顿的时间不会太长，但对于老生代来说每次垃圾回收的时间长，停顿会造成很大的影响。 为了解决这个问题 V8 引入了增量标记的方法，将一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会，就这样交替运行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ys={href:"https://www.jianshu.com/p/b8ed21e8a4fb",target:"_blank",rel:"noopener noreferrer"},Zs={href:"https://zhuanlan.zhihu.com/p/23992332",target:"_blank",rel:"noopener noreferrer"},Ks=t(`<h2 id="_81-哪些操作会造成内存泄漏" tabindex="-1"><a class="header-anchor" href="#_81-哪些操作会造成内存泄漏" aria-hidden="true">#</a> 81. 哪些操作会造成内存泄漏？</h2><p>相关知识点：</p><ul><li>1.意外的全局变量</li><li>2.被遗忘的计时器或回调函数</li><li>3.脱离 DOM 的引用</li><li>4.闭包</li></ul><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

第二种情况是我们设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。

第三种情况是我们获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。

第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),na={href:"http://www.ruanyifeng.com/blog/2017/04/memory-leak.html",target:"_blank",rel:"noopener noreferrer"},sa={href:"https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/",target:"_blank",rel:"noopener noreferrer"},aa={href:"https://juejin.im/entry/5a64366c6fb9a01c9332c706",target:"_blank",rel:"noopener noreferrer"},ea={href:"https://segmentfault.com/a/1190000008901861",target:"_blank",rel:"noopener noreferrer"},ta=t(`<h2 id="_82-需求-实现一个页面操作不会整页刷新的网站-并且能在浏览器前进、后退时正确响应。给出你的技术实现方案-暂时不看" tabindex="-1"><a class="header-anchor" href="#_82-需求-实现一个页面操作不会整页刷新的网站-并且能在浏览器前进、后退时正确响应。给出你的技术实现方案-暂时不看" aria-hidden="true">#</a> 82. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？（暂时不看）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过使用 pushState + ajax 实现浏览器无刷新前进后退，当一次 ajax 调用成功后我们将一条 state 记录加入到 history对象中。一条 state 记录包含了 url、title 和 content 属性，在 popstate 事件中可以获取到这个 state 对象，我们可以使用 content 来传递数据。最后我们通过对 window.onpopstate 事件监听来响应浏览器的前进后退操作。

使用 pushState 来实现有两个问题，一个是打开首页时没有记录，我们可以使用 replaceState 来将首页的记录替换，另一个问题是当一个页面刷新的时候，仍然会向服务器端请求数据，因此如果请求的 url 需要后端的配合将其重定向到一个页面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ia={href:"http://blog.chenxu.me/post/detail?id=ed4f0732-897f-48e4-9d4f-821e82f17fad",target:"_blank",rel:"noopener noreferrer"},la={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"},oa=t(`<h2 id="_83-如何判断当前脚本运行在浏览器还是-node-环境中-阿里" tabindex="-1"><a class="header-anchor" href="#_83-如何判断当前脚本运行在浏览器还是-node-环境中-阿里" aria-hidden="true">#</a> 83. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this === window ? &#39;browser&#39; : &#39;node&#39;;

通过判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_84-把-script-标签放在页面的最底部的-body-封闭之前和封闭之后有什么区别-浏览器会如何解析它们" tabindex="-1"><a class="header-anchor" href="#_84-把-script-标签放在页面的最底部的-body-封闭之前和封闭之后有什么区别-浏览器会如何解析它们" aria-hidden="true">#</a> 84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？</h2>`,3),pa={href:"https://www.zhihu.com/question/20027966",target:"_blank",rel:"noopener noreferrer"},ca={href:"https://zhuanlan.zhihu.com/p/30558018",target:"_blank",rel:"noopener noreferrer"},ra=t(`<h2 id="_85-移动端的点击事件的有延迟-时间是多久-为什么会有-怎么解决这个延时" tabindex="-1"><a class="header-anchor" href="#_85-移动端的点击事件的有延迟-时间是多久-为什么会有-怎么解决这个延时" aria-hidden="true">#</a> 85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>移动端点击有 300ms 的延迟，因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有三种办法来解决这个问题：</p><ul><li>1.通过 meta 标签禁用网页的缩放。</li><li>2.通过 meta 标签将网页的 viewport 设置为 ideal viewport。</li><li>3.调用一些 js 库，比如 FastClick</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>click 延时问题还可能引起点击穿透的问题，就是如果我们在一个元素上注册了 touchStart 的监听事件，这个事件会将这个元素隐藏掉，我们发现当这个元素隐藏后，触发了这个元素下的一个元素的点击事件，这就是点击穿透。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),ua={href:"https://juejin.im/post/5b3cc9836fb9a04f9a5cb0e0",target:"_blank",rel:"noopener noreferrer"},da=t(`<h2 id="_86-什么是-前端路由-什么时候适合使用-前端路由-前端路由-有哪些优点和缺点" tabindex="-1"><a class="header-anchor" href="#_86-什么是-前端路由-什么时候适合使用-前端路由-前端路由-有哪些优点和缺点" aria-hidden="true">#</a> 86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）什么是前端路由？

前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。

（2）什么时候使用前端路由？

在单页面应用，大部分页面结构不变，只改变部分内容的使用

（3）前端路由有什么优点和缺点？

优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户

缺点：单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

前端路由一共有两种实现方式，一种是通过 hash 的方式，一种是通过使用 pushState 的方式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),va={href:"https://segmentfault.com/q/1010000005336260",target:"_blank",rel:"noopener noreferrer"},ka={href:"https://github.com/kaola-fed/blog/issues/137",target:"_blank",rel:"noopener noreferrer"},ma={href:"https://www.zhihu.com/question/53064386",target:"_blank",rel:"noopener noreferrer"},ba=n("h2",{id:"_87-如何测试前端代码么-知道-bdd-tdd-unit-test-么-知道怎么测试你的前端工程么-mocha-sinon-jasmin-qunit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_87-如何测试前端代码么-知道-bdd-tdd-unit-test-么-知道怎么测试你的前端工程么-mocha-sinon-jasmin-qunit","aria-hidden":"true"},"#"),s(" 87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？")],-1),ha={href:"https://juejin.im/post/5b2da89cf265da597f1c7cab",target:"_blank",rel:"noopener noreferrer"},fa=t(`<h2 id="_88-检测浏览器版本有哪些方式" tabindex="-1"><a class="header-anchor" href="#_88-检测浏览器版本有哪些方式" aria-hidden="true">#</a> 88. 检测浏览器版本有哪些方式？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>检测浏览器版本一共有两种方式：

一种是检测 window.navigator.userAgent 的值，但这种方式很不可靠，因为 userAgent 可以被改写，并且早期的浏览器如 ie，会通过伪装自己的 userAgent 的值为 Mozilla 来躲过服务器的检测。

第二种方式是功能检测，根据每个浏览器独有的特性来进行判断，如 ie 下独有的 ActiveXObject。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ga={href:"https://www.jianshu.com/p/d99f4ca385ac",target:"_blank",rel:"noopener noreferrer"},_a=t(`<h2 id="_89-什么是-polyfill" tabindex="-1"><a class="header-anchor" href="#_89-什么是-polyfill" aria-hidden="true">#</a> 89. 什么是 Polyfill ？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Polyfill 指的是用于实现浏览器并不支持的原生 API 的代码。

比如说 querySelectorAll() 是很多现代浏览器都支持的原生 Web API，但是有些古老的浏览器并不支持，那么假设有人写了一段代码来实现这个功能使这些浏览器也支持了这个功能，那么这就可以成为一个 Polyfill。

一个 shim 是一个库，有自己的 API，而不是单纯实现原生不支持的 API。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),xa={href:"https://segmentfault.com/a/1190000002593432",target:"_blank",rel:"noopener noreferrer"},ya={href:"https://juejin.im/post/5a579bc7f265da3e38496ba1",target:"_blank",rel:"noopener noreferrer"},wa=t(`<h2 id="_90-使用-js-实现获取文件扩展名" tabindex="-1"><a class="header-anchor" href="#_90-使用-js-实现获取文件扩展名" aria-hidden="true">#</a> 90. 使用 JS 实现获取文件扩展名？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// String.lastIndexOf() 方法返回指定值（本例中的&#39;.&#39;）在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。</span>

<span class="token comment">// 对于 &#39;filename&#39; 和 &#39;.hiddenfile&#39; ，lastIndexOf 的返回值分别为 -1 和 0， 无符号右移操作符(&gt;&gt;&gt;) 将 -1 转换为 4294967295 ，将 -2 转换为 4294967294 ，这个方法可以保证边缘情况时文件名不变。</span>

<span class="token comment">// String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为&quot;&quot;。</span>
<span class="token keyword">function</span> <span class="token function">getFileExtension</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> filename<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>filename<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ja={href:"https://segmentfault.com/a/1190000004993946",target:"_blank",rel:"noopener noreferrer"},Sa=t(`<h2 id="_91-介绍一下-js-的节流与防抖" tabindex="-1"><a class="header-anchor" href="#_91-介绍一下-js-的节流与防抖" aria-hidden="true">#</a> ==91. 介绍一下 js 的节流与防抖？==</h2><p>相关知识点：参考性能优化中的函数防抖与节流</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数防抖： 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。</span>

<span class="token comment">// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。</span>

<span class="token comment">// 函数防抖的实现</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

    <span class="token comment">// 如果此时存在定时器的话，则取消之前的定时器重新记时</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置定时器，使事件间隔指定时间后执行</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数节流的实现;</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> preTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      args <span class="token operator">=</span> arguments<span class="token punctuation">,</span>
      nowTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果两次时间间隔超过了指定时间，则执行函数。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nowTime <span class="token operator">-</span> preTime <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      preTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),qa={href:"https://juejin.im/post/5a35ed25f265da431d3cc1b1",target:"_blank",rel:"noopener noreferrer"},Ea={href:"https://juejin.im/post/5aa60b0e518825556b6c6d1a",target:"_blank",rel:"noopener noreferrer"},Oa={href:"https://juejin.im/entry/5b1d2d54f265da6e2545bfa4",target:"_blank",rel:"noopener noreferrer"},Ma=t(`<h2 id="_92-object-is-与原来的比较操作符-、-的区别" tabindex="-1"><a class="header-anchor" href="#_92-object-is-与原来的比较操作符-、-的区别" aria-hidden="true">#</a> 92. Object.is() 与原来的比较操作符 &quot;= = =&quot;、&quot;= =&quot; 的区别？</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两等号判等，会在比较时进行隐式类型转换。
三等号判等（判断严格），比较时不进行隐式类型转换，（类型不同则会返回false）。

Object.is() 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，但 Object.is(NaN, NaN) 会返回 true.

Object.is() 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用双等号进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。

使用三等号进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。

使用 Object.is() 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 认定为是相等的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_93-escape-encodeuri-encodeuricomponent-有什么区别-不看" tabindex="-1"><a class="header-anchor" href="#_93-escape-encodeuri-encodeuricomponent-有什么区别-不看" aria-hidden="true">#</a> 93. escape,encodeURI,encodeURIComponent 有什么区别？（不看）</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>escape 和 encodeURI 都属于 Percent-encoding，基本功能都是把 URI 非法字符转化成合法字符，转化后形式类似「%*」。
它们的根本区别在于，escape 在处理 0xff 之外字符的时候，是直接使用字符的 unicode 在前面加上一个「%u」，而 encode URI 则是先进行 UTF-8，再在 UTF-8 的每个字节码前加上一个「%」；在处理 0xff 以内字符时，编码方式是一样的（都是「%XX」，XX 为字符的 16 进制 unicode，同时也是字符的 UTF-8），只是范围（即哪些字符编码哪些字符不编码）不一样。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>encodeURI 是对整个 URI 进行转义，将 URI 中的非法字符转换为合法字符，所以对于一些在 URI 中有特殊意义的字符不会进行转义。

encodeURIComponent 是对 URI 的组成部分进行转义，所以一些特殊字符也会得到转义。

escape 和 encodeURI 的作用相同，不过它们对于 unicode 编码为 0xff 之外字符的时候会有区别，escape 是直接在字符的 unicode 编码前加上 %u，而 encodeURI 首先会将字符转换为 UTF-8 的格式，再在每个字节前加上 %。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),Na={href:"https://www.zhihu.com/question/21861899",target:"_blank",rel:"noopener noreferrer"},Aa=t(`<h2 id="_94-unicode-和-utf-8-之间的关系" tabindex="-1"><a class="header-anchor" href="#_94-unicode-和-utf-8-之间的关系" aria-hidden="true">#</a> 94. Unicode 和 UTF-8 之间的关系？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Unicode 是一种字符集合，现在可容纳 100 多万个字符。每个字符对应一个不同的 Unicode 编码，它只规定了符号的二进制代码，却没有规定这个二进制代码在计算机中如何编码传输。

UTF-8 是一种对 Unicode 的编码方式，它是一种变长的编码方式，可以用 1~4 个字节来表示一个字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ja={href:"https://blog.51cto.com/polaris/377468",target:"_blank",rel:"noopener noreferrer"},Ca={href:"http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html",target:"_blank",rel:"noopener noreferrer"},Ta=t(`<h2 id="_95-js的运行机制是什么" tabindex="-1"><a class="header-anchor" href="#_95-js的运行机制是什么" aria-hidden="true">#</a> ==95. JS的运行机制是什么？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS的运行机制中包含三个部分：运行栈（存放并执行同步代码）、任务队列（按顺序存放异步代码）、事件循环（循环执行任务队列中的异步代码）

任务队列中存储的任务（异步代码）包含宏任务与微任务两种：
宏任务：ajax、setTimeout()，setInterval()，setImmediate()，I/O 操作、UI 渲染等
微任务：promise.then()、process.nextTick()（node）、对 Dom 变化监听的 MutationObserver

所以，JS中的代码执行顺序为：
1.同步代码
2.process.nextTick()
3.微任务
4.宏任务
5.setImmediate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Pa={href:"https://juejin.im/post/5afbc62151882542af04112d",target:"_blank",rel:"noopener noreferrer"},Ra={href:"https://zhuanlan.zhihu.com/p/33058983",target:"_blank",rel:"noopener noreferrer"},Ia={href:"http://www.ruanyifeng.com/blog/2013/10/event_loop.html",target:"_blank",rel:"noopener noreferrer"},Ba={href:"https://juejin.im/post/59e85eebf265da430d571f89",target:"_blank",rel:"noopener noreferrer"},Da=t(`<h2 id="_96-js-中的深浅拷贝实现" tabindex="-1"><a class="header-anchor" href="#_96-js-中的深浅拷贝实现" aria-hidden="true">#</a> ==96. js 中的深浅拷贝实现？==</h2><p>相关资料：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 浅拷贝的实现;</span>

<span class="token keyword">function</span> <span class="token function">shallowCopy</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 只拷贝对象</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>object <span class="token operator">||</span> <span class="token keyword">typeof</span> object <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token comment">// 根据 object 的类型判断是新建一个数组还是对象</span>
  <span class="token keyword">let</span> newObject <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 遍历 object，并且判断是 object 的属性才拷贝</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newObject<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> newObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 深拷贝的实现;</span>

<span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>object <span class="token operator">||</span> <span class="token keyword">typeof</span> object <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> newObject <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newObject<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span>
        <span class="token keyword">typeof</span> object<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">?</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> newObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>浅拷贝指的是将一个对象的属性值复制到另一个对象，如果有的属性的值为引用类型的话，那么会将这个引用的地址复制给对象，因此两个对象会有同一个引用类型的引用。浅拷贝可以使用 Object.assign 和展开运算符来实现。

深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，因此对象获得的一个新的引用类型而不是一个原有类型的引用。深拷贝对于一些对象可以使用JSON.parse(JSON.stringify(对象))的方法来实现，但是由于 JSON 的对象格式比 js 的对象格式更加严格，所以如果属性值里边出现函数或者 Symbol 类型的值时，会转换失败。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),La={href:"https://github.com/mqyqingfeng/Blog/issues/32",target:"_blank",rel:"noopener noreferrer"},Fa={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bed40d951882545f73004f6",target:"_blank",rel:"noopener noreferrer"},Va=t(`<h2 id="_97-手写-call、apply-及-bind-函数" tabindex="-1"><a class="header-anchor" href="#_97-手写-call、apply-及-bind-函数" aria-hidden="true">#</a> 97. 手写 call、apply 及 bind 函数</h2><p>相关资料：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// call函数实现</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断调用对象</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;type error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取参数</span>
  <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 判断 context 是否传入，如果未传入则设置为 window</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> window<span class="token punctuation">;</span>

  <span class="token comment">// 将调用函数设为对象的方法</span>
  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token comment">// 调用函数</span>
  result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将属性删除</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// apply 函数实现</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断调用对象是否为函数</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 判断 context 是否存在，如果未传入则为 window</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> window<span class="token punctuation">;</span>

  <span class="token comment">// 将函数设为对象的方法</span>
  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token comment">// 调用方法</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 将属性删除</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bind 函数实现</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断调用对象是否为函数</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取参数</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据调用方式，传入不同绑定值</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Fn</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> context<span class="token punctuation">,</span>
      args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><p>call 函数的实现步骤：</p><ul><li>1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。</li><li>2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。</li><li>3.处理传入的参数，截取第一个参数后的所有参数。</li><li>4.将函数作为上下文对象的一个属性。</li><li>5.使用上下文对象来调用这个方法，并保存返回结果。</li><li>6.删除刚才新增的属性。</li><li>7.返回结果。</li></ul><p>apply 函数的实现步骤：</p><ul><li>1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。</li><li>2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。</li><li>3.将函数作为上下文对象的一个属性。</li><li>4.判断参数值是否传入</li><li>4.使用上下文对象来调用这个方法，并保存返回结果。</li><li>5.删除刚才新增的属性</li><li>6.返回结果</li></ul><p>bind 函数的实现步骤：</p><ul><li>1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。</li><li>2.保存当前函数的引用，获取其余传入参数值。</li><li>3.创建一个函数返回</li><li>4.函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。</li></ul>`,10),Ua={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdd0d8e6fb9a04a044073fe",target:"_blank",rel:"noopener noreferrer"},za={href:"https://github.com/mqyqingfeng/Blog/issues/11",target:"_blank",rel:"noopener noreferrer"},Ha=t(`<h2 id="_98-函数柯里化的实现" tabindex="-1"><a class="header-anchor" href="#_98-函数柯里化的实现" aria-hidden="true">#</a> 98. 函数柯里化的实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。</span>

<span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取函数需要的参数长度</span>
  <span class="token keyword">let</span> length <span class="token operator">=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  args <span class="token operator">=</span> args <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> subArgs <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 拼接得到现有的所有参数</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      subArgs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断参数的长度是否已经满足函数所需参数的长度</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>subArgs<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果满足，执行函数</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> subArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果不满足，递归返回科里化的函数，等待参数的传入</span>
      <span class="token keyword">return</span> <span class="token function">curry</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> subArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// es6 实现</span>
<span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fn<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> args<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">curry</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Xa={href:"https://github.com/mqyqingfeng/Blog/issues/42",target:"_blank",rel:"noopener noreferrer"},Wa=t(`<h2 id="_99-为什么-0-1-0-2-0-3-如何解决这个问题" tabindex="-1"><a class="header-anchor" href="#_99-为什么-0-1-0-2-0-3-如何解决这个问题" aria-hidden="true">#</a> 99. 为什么 0.1 + 0.2 != 0.3？如何解决这个问题？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当计算机计算 0.1+0.2 的时候，实际上计算的是这两个数字在计算机里所存储的二进制，0.1 和 0.2 在转换为二进制表示的时候会出现位数无限循环的情况。js 中是以 64 位双精度格式来存储数字的，只有 53 位的有效数字，超过这个长度的位数会被截取掉这样就造成了精度丢失的问题。这是第一个会造成精度丢失的地方。在对两个以 64 位双精度格式的数据进行计算的时候，首先会进行对阶的处理，对阶指的是将阶码对齐，也就是将小数点的位置对齐后，再进行计算，一般是小阶向大阶对齐，因此小阶的数在对齐的过程中，有效数字会向右移动，移动后超过有效位数的位会被截取掉，这是第二个可能会出现精度丢失的地方。当两个数据阶码对齐后，进行相加运算后，得到的结果可能会超过 53 位有效数字，因此超过的位数也会被截取掉，这是可能发生精度丢失的第三个地方。

对于这样的情况，我们可以将其转换为整数后再进行运算，运算后再转换为对应的小数，以这种方式来解决这个问题。

我们还可以将两个数相加的结果和右边相减，如果相减的结果小于一个极小数，那么我们就可以认定结果是相等的，这个极小数可以使用 es6 的 Number.EPSILON
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ga={href:"https://blog.csdn.net/Lixuanshengchao/article/details/82049191",target:"_blank",rel:"noopener noreferrer"},$a={href:"https://blog.csdn.net/zhengyanan815/article/details/78550073",target:"_blank",rel:"noopener noreferrer"},Qa={href:"http://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html",target:"_blank",rel:"noopener noreferrer"},Ya={href:"https://juejin.im/post/5b372f106fb9a00e6714aa21",target:"_blank",rel:"noopener noreferrer"},Za={href:"https://juejin.im/post/594a31d0a0bb9f006b0b2624",target:"_blank",rel:"noopener noreferrer"},Ka={href:"https://github.com/camsong/blog/issues/9",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://juejin.im/post/5bd2f10a51882555e072d0c4",target:"_blank",rel:"noopener noreferrer"},se={href:"https://juejin.im/entry/59cdd7fb6fb9a00a600f8eef",target:"_blank",rel:"noopener noreferrer"},ae=t(`<h2 id="_100-原码、反码和补码的介绍" tabindex="-1"><a class="header-anchor" href="#_100-原码、反码和补码的介绍" aria-hidden="true">#</a> 100. 原码、反码和补码的介绍</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原码是计算机中对数字的二进制的定点表示方法，最高位表示符号位，其余位表示数值位。优点是易于分辨，缺点是不能够直接参与运算。

正数的反码和其原码一样；负数的反码，符号位为1，数值部分按原码取反。
如 [+7]原 = 00000111，[+7]反 = 00000111； [-7]原 = 10000111，[-7]反 = 11111000。

正数的补码和其原码一样；负数的补码为其反码加1。

例如 [+7]原 = 00000111，[+7]反 = 00000111，[+7]补 = 00000111；
[-7]原 = 10000111，[-7]反 = 11111000，[-7]补 = 11111001

之所以在计算机中使用补码来表示负数的原因是，这样可以将加法运算扩展到所有的数值计算上，因此在数字电路中我们只需要考虑加法器的设计就行了，而不用再为减法设置新的数字电路。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ee={href:"http://www.ruanyifeng.com/blog/2009/08/twos_complement.html",target:"_blank",rel:"noopener noreferrer"},te=t(`<h2 id="_101-toprecision-和-tofixed-和-math-round-的区别" tabindex="-1"><a class="header-anchor" href="#_101-toprecision-和-tofixed-和-math-round-的区别" aria-hidden="true">#</a> 101. toPrecision 和 toFixed 和 Math.round 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>toPrecision 用于处理精度，精度是从左至右第一个不为 0 的数开始数起。
toFixed 是对小数点后指定位数取整，从小数点开始数起。
Math.round 是将一个数字四舍五入到一个整数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_102-什么是-xss-攻击-如何防范-xss-攻击" tabindex="-1"><a class="header-anchor" href="#_102-什么是-xss-攻击-如何防范-xss-攻击" aria-hidden="true">#</a> 102. 什么是 XSS 攻击？如何防范 XSS 攻击？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>XSS（Cross Site Scripting）攻击指的是跨站脚本攻击，是一种代码注入攻击。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 cookies 等。

XSS 的本质是因为网站没有对恶意代码进行过滤，与正常的代码混合在一起了，浏览器没有办法分辨哪些脚本是可信的，从而导致了恶意代码的执行。

XSS 一般分为存储型、反射型和 DOM 型。

存储型指的是恶意代码提交到了网站的数据库中，当用户请求数据的时候，服务器将其拼接为 HTML 后返回给了用户，从而导致了恶意代码的执行。

反射型指的是攻击者构建了特殊的 URL，当服务器接收到请求后，从 URL 中获取数据，拼接到 HTML 后返回，从而导致了恶意代码的执行。

DOM 型指的是攻击者构建了特殊的 URL，用户打开网站后，js 脚本从 URL 中获取数据，从而导致了恶意代码的执行。

XSS 攻击的预防可以从两个方面入手，一个是恶意代码提交的时候，一个是浏览器执行恶意代码的时候。

对于第一个方面，如果我们对存入数据库的数据都进行的转义处理，但是一个数据可能在多个地方使用，有的地方可能不需要转义，由于我们没有办法判断数据最后的使用场景，所以直接在输入端进行恶意代码的处理，其实是不太可靠的。

因此我们可以从浏览器的执行来进行预防，一种是使用纯前端的方式，不用服务器端拼接后返回。另一种是对需要插入到 HTML 中的代码做好充分的转义。对于 DOM 型的攻击，主要是前端脚本的不可靠而造成的，我们对于数据获取渲染和字符串拼接的时候应该对可能出现的恶意代码情况进行判断。

还有一些方式，比如使用 CSP ，CSP 的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行，从而防止恶意代码的注入攻击。

还可以对一些敏感信息进行保护，比如 cookies 使用 http-only ，使得脚本无法获取。也可以使用验证码，避免脚本伪装成用户执行一些操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),ie={href:"https://juejin.im/post/5bad9140e51d450e935c6d64",target:"_blank",rel:"noopener noreferrer"},le=t(`<h2 id="_103-什么是-csp" tabindex="-1"><a class="header-anchor" href="#_103-什么是-csp" aria-hidden="true">#</a> 103. 什么是 CSP？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CSP 指的是内容安全策略，它的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截由浏览器来实现。

通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的 Content-Security-Policy，一种是设置 meta 标签的方式 &lt;meta http-equiv=&quot;Content-Security-Policy&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),oe={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc721851882516c33430a2",target:"_blank",rel:"noopener noreferrer"},ce=t(`<h2 id="_104-什么是-csrf-攻击-如何防范-csrf-攻击" tabindex="-1"><a class="header-anchor" href="#_104-什么是-csrf-攻击-如何防范-csrf-攻击" aria-hidden="true">#</a> 104. 什么是 CSRF 攻击？如何防范 CSRF 攻击？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CSRF 攻击指的是跨站请求伪造攻击，攻击者诱导用户进入一个第三方网站，然后该网站向被攻击网站发送跨站请求。如果用户在被攻击网站中保存了登录状态，那么攻击者就可以利用这个登录状态，绕过后台的用户验证，冒充用户向服务器执行一些操作。

CSRF 攻击的本质是利用了 cookies 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充。

一般的 CSRF 攻击类型有三种：

第一种是 GET 类型的 CSRF 攻击，比如在网站中的一个 img 标签里构建一个请求，当用户打开这个网站的时候就会自动发起提交。

第二种是 POST 类型的 CSRF 攻击，比如说构建一个表单，然后隐藏它，当用户进入页面时，自动提交这个表单。

第三种是链接类型的 CSRF 攻击，比如说在 a 标签的 href 属性里构建一个请求，然后诱导用户去点击。

CSRF 可以用下面几种方法来防护：

第一种是同源检测的方法，服务器根据 http 请求头中 origin 或者 referer 信息来判断请求是否为允许访问的站点，从而对请求进行过滤。当 origin 或者 referer 信息都不存在的时候，直接阻止。这种方式的缺点是有些情况下 referer 可以被伪造。还有就是我们这种方法同时把搜索引擎的链接也给屏蔽了，所以一般网站会允许搜索引擎的页面请求，但是相应的页面请求这种请求方式也可能被攻击者给利用。

第二种方法是使用 CSRF Token 来进行验证，服务器向用户返回一个随机数 Token ，当网站再次发起请求时，在请求参数中加入服务器端返回的 token ，然后服务器对这个 token 进行验证。这种方法解决了使用 cookie 单一验证方式时，可能会被冒用的问题，但是这种方法存在一个缺点就是，我们需要给网站中的所有请求都添加上这个 token，操作比较繁琐。还有一个问题是一般不会只有一台网站服务器，如果我们的请求经过负载平衡转移到了其他的服务器，但是这个服务器的 session 中没有保留这个 token 的话，就没有办法验证了。这种情况我们可以通过改变 token 的构建方式来解决。

第三种方式使用双重 Cookie 验证的办法，服务器在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串，然后当用户再次向服务器发送请求的时候，从 cookie 中取出这个字符串，添加到 URL 参数中，然后服务器通过对 cookie 中的数据和参数中的数据进行比较，来进行验证。使用这种方式是利用了攻击者只能利用 cookie，但是不能访问获取 cookie 的特点。并且这种方法比 CSRF Token 的方法更加方便，并且不涉及到分布式访问的问题。这种方法的缺点是如果网站存在 XSS 漏洞的，那么这种方式会失效。同时这种方式不能做到子域名的隔离。

第四种方式是使用在设置 cookie 属性的时候设置 Samesite ，限制 cookie 不能作为被第三方使用，从而可以避免被攻击者利用。Samesite 一共有两种模式，一种是严格模式，在严格模式下 cookie 在任何情况下都不可能作为第三方 Cookie 使用，在宽松模式下，cookie 可以被请求是 GET 请求，且会发生页面跳转的请求所使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),re={href:"https://juejin.im/post/5bc009996fb9a05d0a055192",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://www.jianshu.com/p/1f9c71850299",target:"_blank",rel:"noopener noreferrer"},de=t(`<h2 id="_105-什么是-samesite-cookie-属性" tabindex="-1"><a class="header-anchor" href="#_105-什么是-samesite-cookie-属性" aria-hidden="true">#</a> 105. 什么是 Samesite Cookie 属性？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Samesite Cookie 表示同站 cookie，避免 cookie 被第三方所利用。

将 Samesite 设为 strict ，这种称为严格模式，表示这个 cookie 在任何情况下都不可能作为第三方 cookie。

将 Samesite 设为 Lax ，这种模式称为宽松模式，如果这个请求是个 GET 请求，并且这个请求改变了当前页面或者打开了新的页面，那么这个 cookie 可以作为第三方 cookie，其余情况下都不能作为第三方 cookie。

使用这种方法的缺点是，因为它不支持子域，所以子域没有办法与主域共享登录信息，每次转入子域的网站，都回重新登录。还有一个问题就是它的兼容性不够好。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_106-什么是点击劫持-如何防范点击劫持" tabindex="-1"><a class="header-anchor" href="#_106-什么是点击劫持-如何防范点击劫持" aria-hidden="true">#</a> 106. 什么是点击劫持？如何防范点击劫持？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。

我们可以在 http 相应头中设置 X-FRAME-OPTIONS 来防御用 iframe 嵌套的点击劫持攻击。通过不同的值，可以规定页面在特
定的一些情况才能作为 iframe 来使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),ve={href:"https://www.jianshu.com/p/251704d8ff18",target:"_blank",rel:"noopener noreferrer"},ke=t(`<h2 id="_107-sql-注入攻击" tabindex="-1"><a class="header-anchor" href="#_107-sql-注入攻击" aria-hidden="true">#</a> 107. SQL 注入攻击？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL 注入攻击指的是攻击者在 HTTP 请求中注入恶意的 SQL 代码，服务器使用参数构建数据库 SQL 命令时，恶意 SQL 被一起构造，破坏原有 SQL 结构，并在数据库中执行，达到编写程序时意料之外结果的攻击行为。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),me={href:"https://juejin.im/post/5bd5b820e51d456f72531fa8",target:"_blank",rel:"noopener noreferrer"},be={href:"http://blog.720ui.com/2016/security_web/#SQL%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB",target:"_blank",rel:"noopener noreferrer"},he=t(`<h2 id="_108-什么是-mvvm-比之-mvc-有什么区别" tabindex="-1"><a class="header-anchor" href="#_108-什么是-mvvm-比之-mvc-有什么区别" aria-hidden="true">#</a> 108. 什么是 MVVM？比之 MVC 有什么区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。MVC实现的是单向的数据绑定。

MVVM 模式中的 VM，指的是 ViewModel，vue充当的其实就是ViewModel，它通过双向的数据绑定，将 View 和 Model 的同步更新给自动化了。当 Model 发生变化的时候，ViewModel 就会自动更新，ViewModel 变化了，View 也会更新，反之同理。我了解过一点双向数据绑定的原理，比如 vue 是通过使用数据劫持和发布订阅者模式来实现的这一功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),fe={href:"https://juejin.im/post/593021272f301e0058273468",target:"_blank",rel:"noopener noreferrer"},ge={href:"http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc72e6e51d45054f664dbf",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://segmentfault.com/a/1190000015310674",target:"_blank",rel:"noopener noreferrer"},ye=t(`<h2 id="_109-vue-双向数据绑定原理" tabindex="-1"><a class="header-anchor" href="#_109-vue-双向数据绑定原理" aria-hidden="true">#</a> ==109. vue 双向数据绑定原理？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue 通过使用双向数据绑定，来实现了 View 和 Model 的同步更新。vue 的双向数据绑定主要是通过使用数据劫持和发布订阅者模式来实现的。

数据劫持：指的是在访问或者修改对象的某个属性时，通过一段代码拦截这个行为，进行额外的操作或者修改返回结果。

Vue2双向绑定的主要实现原理是Object.defineProperty()方法
Vue3双向绑定的主要实现原理是ES6新增的Proxy()对象

首先我们通过 Object.defineProperty() 方法来对 Model 数据各个属性添加访问属性，以此来实现数据劫持，因此当 Model 中的数据发生变化的时候，我们可以通过配置的 setter 和 getter 方法来实现对 View 层数据更新的通知。

数据在 html 模板中一共有两种绑定情况，一种是使用 v-model 来对 value 值进行绑定，一种是作为文本绑定，在对模板引擎进行解析的过程中。

如果遇到元素节点，并且属性值包含 v-model 的话，我们就从 Model 中去获取 v-model 所对应的属性的值，并赋值给元素的 value 值。然后给这个元素设置一个监听事件，当 View 中元素的数据发生变化的时候触发该事件，通知 Model 中的对应的属性的值进行更新。

如果遇到了绑定的文本节点，我们使用 Model 中对应的属性的值来替换这个文本。对于文本节点的更新，我们使用了发布订阅者模式，属性作为一个主题，我们为这个节点设置一个订阅者对象，将这个订阅者对象加入这个属性主题的订阅者列表中。当 Model 层数据发生改变的时候，Model 作为发布者向主题发出通知，主题收到通知再向它的所有订阅者推送，订阅者收到通知后更改自己的数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),we={href:"http://www.cnblogs.com/kidney/p/6052935.html?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"},je=t(`<p>==补充：观察者模式与发布订阅模式的区别与联系？==</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>观察者模式与发布订阅模式所起的作用的相同的，它们都会监听一个对象的变化，并在该对象状态改变的时候去同通知另一/多个对象，但是二者又有些不同：
1.在观察者模式中，只有两个角色——发布者（Subject）、观察者（Observer）；而在发布订阅模式中，有三个角色——发布者（Publisher）、经纪人（Broker）、订阅者（Subscriber）
2.在观察者模式中，发布者与观察者存在松耦合；而在发布订阅模式中，发布者与订阅者之间则完全不存在耦合
3.观察者模式多用于单个应用内部；而发布订阅模式，则更多的是一种跨应用的模式，比如一些消息中间件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察者模式图示如下：</p><p><img src="https://pic2.zhimg.com/80/v2-0a7ef7d1a328dc37eadefb29e0ea705d_720w.jpg" alt="img"></p><p>发布订阅模式图示如下：</p><p><img src="https://pic2.zhimg.com/80/v2-b6ed65f370a766620718ad4227d5d4e5_720w.jpg" alt="img"></p><h2 id="_110-object-defineproperty-介绍" tabindex="-1"><a class="header-anchor" href="#_110-object-defineproperty-介绍" aria-hidden="true">#</a> 110. Object.defineProperty()介绍？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

Object.defineProperty(对象，属性，{get(){} | value, set(){} | writable: true | false, enumerable: true | false, configurable: true | false})方法可以设定对于对象的一些特殊操作的属性，一个对象的操作属性有四个，分别是value（属性的值），writable（是否可写），enumerable（是否可枚举），configurable（是否可配置）。

Object.defineProperty方法一共有三个参数，第一个参数是需要定义属性的对象，第二个参数是需要定义的属性，第三个是该属性描述符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),Se={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"},qe=t(`<h2 id="_111-使用-object-defineproperty-来进行数据劫持有什么缺点" tabindex="-1"><a class="header-anchor" href="#_111-使用-object-defineproperty-来进行数据劫持有什么缺点" aria-hidden="true">#</a> 111. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有一些对属性的操作，使用这种方法无法拦截，比如说通过下标方式修改数组数据或者给对象新增属性，vue 内部通过重写函数解决了这个问题。在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用 Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为这是 ES6 的语法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_112-什么是-virtual-dom-为什么-virtual-dom-比原生-dom-快" tabindex="-1"><a class="header-anchor" href="#_112-什么是-virtual-dom-为什么-virtual-dom-比原生-dom-快" aria-hidden="true">#</a> ==112. 什么是 Virtual DOM？为什么 Virtual DOM 比原生 DOM 快？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先对我们将要插入到文档中的 DOM 树结构进行分析，使用 js 对象将其表示出来，比如一个元素对象，包含 tag、props 和 children 这些属性。然后我们将这个 js 对象树给保存下来，最后再将 DOM 片段插入到文档中。

当页面的状态发生改变，我们需要对页面的 DOM 的结构进行调整的时候，我们首先根据变更的状态，重新构建起一棵对象树，然后将这棵新的对象树和旧的对象树进行比较，记录下两棵树的的差异。

最后将记录的有差异的地方应用到真正的 DOM 树中去，这样视图就更新了。

我认为 Virtual DOM 这种方法对于我们需要有大量的 DOM 操作的时候，能够很好的提高我们的操作效率，通过在操作前确定需要做的最小修改，尽可能的减少 DOM 操作带来的重流和重绘的影响。其实 Virtual DOM 并不一定比我们真实的操作 DOM 要快，这种方法的目的是为了提高我们开发时的可维护性，在任意的情况下，都能保证一个尽量小的性能消耗去进行操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Ee={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc72e6e51d45054f664dbf",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://github.com/y8n/blog/issues/5",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://github.com/livoras/blog/issues/13",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://www.zhihu.com/question/31809713/answer/53544875",target:"_blank",rel:"noopener noreferrer"},Ae=t(`<h2 id="_113-如何比较两个-dom-树的差异-diff算法" tabindex="-1"><a class="header-anchor" href="#_113-如何比较两个-dom-树的差异-diff算法" aria-hidden="true">#</a> ==113. 如何比较两个 DOM 树的差异（diff算法）？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两个树的完全 diff 算法的时间复杂度为 O(n^3) ，但是在前端中，我们很少会跨层级的移动元素，所以我们只需要比较同一层级的元素进行比较，这样就可以将算法的时间复杂度降低为 O(n)。

算法首先会对新旧两棵树进行一个深度优先的遍历，这样每个节点都会有一个序号。在深度遍历的时候，每遍历到一个节点，我们就将这个节点和新的树中的节点进行比较，如果有差异，则将这个差异记录到一个对象中。

在对列表元素进行对比的时候，由于 tag 是重复的，所以我们不能使用这个来对比。我们需要给每一个子节点加上一个 key，列表对比的时候使用 key 来进行比较，这样我们才能够复用老的 DOM 树上的节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_114-什么是-requestanimationframe" tabindex="-1"><a class="header-anchor" href="#_114-什么是-requestanimationframe" aria-hidden="true">#</a> 114. 什么是 requestAnimationFrame ？</h2>`,3),Je={href:"https://juejin.im/post/5a82f0626fb9a06358657c9c",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/",target:"_blank",rel:"noopener noreferrer"},Te=t(`<h2 id="_115-谈谈你对-webpack-的看法" tabindex="-1"><a class="header-anchor" href="#_115-谈谈你对-webpack-的看法" aria-hidden="true">#</a> 115. 谈谈你对 webpack 的看法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我当时使用 webpack 的一个最主要原因是为了简化页面依赖的管理，并且通过将其打包为一个文件来降低页面加载时请求的资源
数。

我认为 webpack 的主要原理是，它将所有的资源都看成是一个模块，并且把页面逻辑当作一个整体，通过一个给定的入口文件，webpack 从这个文件开始，找到所有的依赖文件，将各个依赖文件模块通过 loader 和 plugins 处理后，然后打包在一起，最后输出一个浏览器可识别的 JS 文件。

Webpack 具有五个核心的概念，分别是 Entry（入口）、Output（输出）、loader 、 Plugins（插件）和mode（模式）。

Entry 是 webpack 的入口起点，它指示 webpack 应该从哪个模块开始着手，来作为其构建内部依赖图的开始。

Output 属性告诉 webpack 在哪里输出它所创建的打包文件，也可指定打包文件的名称，默认位置为 ./dist。

loader 可以理解为 webpack 的编译器，它使得 webpack 可以处理一些非 JavaScript 文件。在对 loader 进行配置的时候，test 属性，标志有哪些后缀的文件应该被处理，是一个正则表达式。use 属性，指定 test 类型的文件应该使用哪个 loader 进行预处理。常用的 loader 有 css-loader、style-loader 等。

插件可以用于执行范围更广的任务，包括打包、优化、压缩、搭建服务器等等，要使用一个插件，一般是先使用 npm 包管理器进行安装，然后在配置文件中引入，最后将其实例化后传递给 plugins 数组属性。

使用 webpack 的确能够提供我们对于项目的管理，但是它的缺点就是调试和配置起来太麻烦了。但现在 webpack4.0 的免配置一定程度上解决了这个问题。但是我感觉对我来说，就是一个黑盒，很多时候出现了问题，没有办法很好的定位。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Pe={href:"https://juejin.im/post/5b38d27451882574d87aa5d5#heading-0",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://juejin.im/entry/5b5724d05188251aa01647fd",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://juejin.im/post/5afa9cd0f265da0b981b9af9#heading-0",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://juejin.im/entry/5ae5c8c9f265da0b9f400d8e",target:"_blank",rel:"noopener noreferrer"},De=t(`<h2 id="_116-offsetwidth-offsetheight-clientwidth-clientheight-与-scrollwidth-scrollheight-的区别" tabindex="-1"><a class="header-anchor" href="#_116-offsetwidth-offsetheight-clientwidth-clientheight-与-scrollwidth-scrollheight-的区别" aria-hidden="true">#</a> 116. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>clientWidth/clientHeight 返回的是元素的内部宽度，它的值只包含 content + padding，如果有滚动条，不包含滚动条。
clientTop 返回的是上边框的宽度。
clientLeft 返回的左边框的宽度。

offsetWidth/offsetHeight 返回的是元素的布局宽度，它的值包含 content + padding + border 包含了滚动条。
offsetTop 返回的是当前元素相对于其 offsetParent 元素的顶部的距离。（即元素的定位Top值）
offsetLeft 返回的是当前元素相对于其 offsetParent 元素的左部的距离。（即元素的定位Left值）

scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸。
scrollTop 属性返回的是一个元素的内容垂直滚动的像素数。
scrollLeft 属性返回的是元素滚动条到元素左边的距离。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Le={href:"https://juejin.im/post/5bc9366d5188255c4834e75a",target:"_blank",rel:"noopener noreferrer"},Fe={href:"http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html",target:"_blank",rel:"noopener noreferrer"},Ve=t(`<h2 id="_117-谈一谈你理解的函数式编程" tabindex="-1"><a class="header-anchor" href="#_117-谈一谈你理解的函数式编程" aria-hidden="true">#</a> 117. 谈一谈你理解的函数式编程？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>简单说，&quot;函数式编程&quot;是一种&quot;编程范式&quot;（programming paradigm），也就是如何编写程序的方法论。

它具有以下特性：闭包和高阶函数、惰性计算、递归、函数是&quot;第一等公民&quot;、只用&quot;表达式&quot;。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ue={href:"http://www.ruanyifeng.com/blog/2012/04/functional_programming.html",target:"_blank",rel:"noopener noreferrer"},ze=t(`<h2 id="_118-异步编程的实现方式" tabindex="-1"><a class="header-anchor" href="#_118-异步编程的实现方式" aria-hidden="true">#</a> 118. 异步编程的实现方式？</h2><p>相关资料：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>回调函数
优点：简单、容易理解
缺点：不利于维护，代码耦合高

事件监听（采用时间驱动模式，取决于某个事件是否发生）：
优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数
缺点：事件驱动型，流程不够清晰

发布/订阅（观察者模式）
类似于事件监听，但是可以通过‘消息中心’，了解现在有多少发布者，多少订阅者

Promise 对象
优点：可以利用 then 方法，进行链式写法；可以书写错误时的回调函数；
缺点：编写和理解，相对比较难

Generator 函数
优点：函数体内外的数据交换、错误处理机制
缺点：流程管理不方便

async 函数
优点：内置执行器、更好的语义、更广的适用性、返回的是 Promise、结构清晰。
缺点：错误处理机制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js 中的异步机制可以分为以下几种：

第一种最常见的是使用回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

第二种是 Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

第三种是使用 generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部我们还可以将执行权转移回来。当我们遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕的时候我们再将执行权给转移回来。因此我们在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式我们需要考虑的问题是何时将函数的控制权转移回来，因此我们需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

第四种是使用 async 函数的形式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此我们可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_119-js-动画与-css-动画区别及相应实现" tabindex="-1"><a class="header-anchor" href="#_119-js-动画与-css-动画区别及相应实现" aria-hidden="true">#</a> 119. Js 动画与 CSS 动画区别及相应实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CSS3 的动画的优点

在性能上会稍微好一些，浏览器会对 CSS3 的动画做一些优化
代码相对简单

缺点

在动画控制上不够灵活
兼容性不好

JavaScript 的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容 IE6，并且功能强大。对于一些复杂控制的动画，使用 javascript 会比较靠谱。而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_120-get-请求传参长度的误区" tabindex="-1"><a class="header-anchor" href="#_120-get-请求传参长度的误区" aria-hidden="true">#</a> 120. get 请求传参长度的误区</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>误区：我们经常说 get 请求参数的大小存在限制，而 post 请求的参数大小是无限制的。

实际上 HTTP 协议从未规定 GET/POST 的请求长度限制是多少。对 get 请求参数的限制是来源与浏览器或web 服务器，浏览器或 web 服务器限制了 url 的长度。为了明确这个概念，我们必须再次强调下面几点:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>1.HTTP 协议未规定 GET 和 POST 的长度限制</li><li>2.GET 的最大长度显示是因为浏览器和 web 服务器限制了 URI 的长度</li><li>3.不同的浏览器和 WEB 服务器，限制的最大长度不一样</li><li>4.要支持 IE，则最大长度为 2083byte，若只支持 Chrome，则最大长度 8182byte</li></ul><h2 id="_121-url-和-uri-的区别" tabindex="-1"><a class="header-anchor" href="#_121-url-和-uri-的区别" aria-hidden="true">#</a> 121. URL 和 URI 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>URI: Uniform Resource Identifier      指的是统一资源标识符
URL: Uniform Resource Location        指的是统一资源定位符
URN: Universal Resource Name          指的是统一资源名称

URI 指的是统一资源标识符，用唯一的标识来确定一个资源，它是一种抽象的定义，也就是说，不管使用什么方法来定义，只要能唯一的标识一个资源，就可以称为 URI。

URL 指的是统一资源定位符，URN 指的是统一资源名称。URL 和 URN 是 URI 的子集，URL 可以理解为使用地址来标识资源，URN 可以理解为使用名称来标识资源。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),He={href:"https://www.zhihu.com/question/21950864",target:"_blank",rel:"noopener noreferrer"},Xe={href:"http://web.jobbole.com/83452/",target:"_blank",rel:"noopener noreferrer"},We={href:"https://segmentfault.com/a/1190000006081973",target:"_blank",rel:"noopener noreferrer"},Ge=t(`<h2 id="_122-get-和-post-请求在缓存方面的区别" tabindex="-1"><a class="header-anchor" href="#_122-get-和-post-请求在缓存方面的区别" aria-hidden="true">#</a> 122. get 和 post 请求在缓存方面的区别</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。

post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此 get 请求适合于请求缓存。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>缓存一般只适用于那些不会更新服务端数据的请求。一般 get 请求都是查找请求，不会对服务器资源数据造成修改，而 post 请求一般都会对服务器数据造成修改，所以，一般会对 get 请求进行缓存，很少会对 post 请求进行缓存。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),$e={href:"https://blog.csdn.net/qq_27093465/article/details/50479289",target:"_blank",rel:"noopener noreferrer"},Qe=t(`<h2 id="_123-图片的懒加载和预加载" tabindex="-1"><a class="header-anchor" href="#_123-图片的懒加载和预加载" aria-hidden="true">#</a> 123. 图片的懒加载和预加载</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。

懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。 懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>懒加载也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载，这样可以提高网站的首屏加载速度，提升用户的体验，并且可以减少服务器的压力。它适用于图片很多，页面很长的电商网站的场景。懒加载的实现原理是，将页面上的图片的 src 属性设置为空字符串，将图片的真实路径保存在一个自定义属性中，当页面滚动的时候，进行判断，如果图片进入页面可视区域内，则从自定义属性中取出真实路径赋值给图片的 src 属性，以此来实现图片的延迟加载。

预加载指的是将所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。通过预加载能够减少用户的等待时间，提高用户的体验。我了解的预加载的最常用的方式是使用 js 中的 image 对象，通过为 image 对象来设置 scr 属性，来实现图片的预加载。

这两种方式都是提高网页性能的方式，两者主要区别是一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),Ye={href:"https://juejin.im/post/5b0c3b53f265da09253cbed0",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://juejin.im/entry/5a73f38cf265da4e99575be3",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://www.zhangxinxu.com/wordpress/2016/06/image-preload-based-on-user-behavior/",target:"_blank",rel:"noopener noreferrer"},nt=t(`<h2 id="_124-mouseover-和-mouseenter-的区别" tabindex="-1"><a class="header-anchor" href="#_124-mouseover-和-mouseenter-的区别" aria-hidden="true">#</a> 124. mouseover 和 mouseenter 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当鼠标移动到元素上时就会触发 mouseenter 事件，类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡。

由于 mouseenter 不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其 mouseover 和 mouseout 事件，但是却不会触发 mouseenter 和 mouseleave 事件。
事件委派必须使用mouseover和mouseout这一对。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),st={href:"https://github.com/qianlongo/zepto-analysis/issues/1",target:"_blank",rel:"noopener noreferrer"},at=t(`<h2 id="_125-js-拖拽功能的实现" tabindex="-1"><a class="header-anchor" href="#_125-js-拖拽功能的实现" aria-hidden="true">#</a> 125. js 拖拽功能的实现</h2><p>相关知识点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先是三个事件，分别是 mousedown，mousemove，mouseup
当鼠标点击按下的时候，需要一个 tag 标识此时已经按下，可以执行 mousemove 里面的具体方法。
clientX，clientY 标识的是鼠标的坐标，分别标识横坐标和纵坐标，并且我们用 offsetX 和 offsetY 来表示
元素的初始坐标，移动的距离应该是：
鼠标移动时候的坐标-鼠标按下去时候的坐标。
也就是说定位信息为：
鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的 offetLeft.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个元素的拖拽过程，我们可以分为三个步骤，第一步是鼠标按下目标元素，第二步是鼠标保持按下的状态移动鼠标，第三步是鼠标抬起，拖拽过程结束。

这三步分别对应了三个事件，mousedown 事件，mousemove 事件和 mouseup 事件。只有在鼠标按下的状态移动鼠标我们才会
执行拖拽事件，因此我们需要在 mousedown 事件中设置一个状态来标识鼠标已经按下，然后在 mouseup 事件中再取消这个状
态。在 mousedown 事件中我们首先应该判断，目标元素是否为拖拽元素，如果是拖拽元素，我们就设置状态并且保存这个时候鼠
标的位置。然后在 mousemove 事件中，我们通过判断鼠标现在的位置和以前位置的相对移动，来确定拖拽元素在移动中的坐标。
最后 mouseup 事件触发后，清除状态，结束拖拽事件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),et={href:"https://blog.csdn.net/LZGS_4/article/details/43523465",target:"_blank",rel:"noopener noreferrer"},tt=t(`<h2 id="_126-为什么使用-settimeout-实现-setinterval-怎么模拟" tabindex="-1"><a class="header-anchor" href="#_126-为什么使用-settimeout-实现-setinterval-怎么模拟" aria-hidden="true">#</a> 126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？</h2><p>相关知识点：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果</span>

<span class="token keyword">function</span> <span class="token function">mySetInterval</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> timeout</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 控制器，控制定时器是否继续执行</span>
  <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 设置递归函数，模拟定时器执行。</span>
  <span class="token keyword">function</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">.</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 启动定时器</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 返回控制器</span>
  <span class="token keyword">return</span> timer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回答：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。

针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),it={href:"https://www.jianshu.com/p/32479bdfd851",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://zhuanlan.zhihu.com/p/51995737",target:"_blank",rel:"noopener noreferrer"},ot=t(`<h2 id="_127-let-和-const-的注意点" tabindex="-1"><a class="header-anchor" href="#_127-let-和-const-的注意点" aria-hidden="true">#</a> 127. let 和 const 的注意点？</h2><ul><li>1.声明的变量只在声明时的代码块内有效</li><li>2.不存在声明提升</li><li>3.存在暂时性死区，如果在变量声明前使用，会报错</li><li>4.不允许重复声明，重复声明会报错</li></ul><h2 id="_128-什么是-rest-参数" tabindex="-1"><a class="header-anchor" href="#_128-什么是-rest-参数" aria-hidden="true">#</a> 128. 什么是 rest 参数？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rest 参数（形式为...变量名），用于获取函数的多余参数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_129-什么是尾调用-使用尾调用有什么好处" tabindex="-1"><a class="header-anchor" href="#_129-什么是尾调用-使用尾调用有什么好处" aria-hidden="true">#</a> 129. 什么是尾调用，使用尾调用有什么好处？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>尾调用指的是函数的最后一步调用另一个函数。我们代码执行是基于执行栈的，所以当我们在一个函数里调用另一个函数时，我们会保留当前的执行上下文，然后再新建另外一个执行上下文加入栈中。使用尾调用的话，因为已经是函数的最后一步，所以这个时候我们可以不必再保留当前的执行上下文，从而节省了内存，这就是尾调用优化。但是 ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_130-symbol-类型的注意点" tabindex="-1"><a class="header-anchor" href="#_130-symbol-类型的注意点" aria-hidden="true">#</a> 130. Symbol 类型的注意点？</h2><ul><li>1.Symbol 函数前不能使用 new 命令，否则会报错。</li><li>2.Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。</li><li>3.Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。</li><li>4.Object.getOwnPropertySymbols 方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。</li><li>5.Symbol.for 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。</li><li>6.Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。</li></ul><h2 id="_131-set-和-weakset-结构" tabindex="-1"><a class="header-anchor" href="#_131-set-和-weakset-结构" aria-hidden="true">#</a> 131. Set 和 WeakSet 结构？</h2><ul><li>1.ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</li><li>2.WeakSet 结构与 Set 类似，也是不重复的值的集合。但是 WeakSet 的成员只能是对象，而不能是其他类型的值。WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，</li></ul><h2 id="_132-map-和-weakmap-结构" tabindex="-1"><a class="header-anchor" href="#_132-map-和-weakmap-结构" aria-hidden="true">#</a> 132. Map 和 WeakMap 结构？</h2><ul><li>1.Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。</li><li>2.WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。</li></ul><h2 id="_133-什么是-proxy" tabindex="-1"><a class="header-anchor" href="#_133-什么是-proxy" aria-hidden="true">#</a> 133. 什么是 Proxy ？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_134-reflect-对象创建目的" tabindex="-1"><a class="header-anchor" href="#_134-reflect-对象创建目的" aria-hidden="true">#</a> 134. Reflect 对象创建目的？</h2><ul><li>1.将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty，放到 Reflect 对象上。</li><li>2.修改某些 Object 方法的返回结果，让其变得更合理。</li><li>3.让 Object 操作都变成函数行为。</li><li>4.Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。</li></ul><h2 id="_135-require-模块引入的查找方式" tabindex="-1"><a class="header-anchor" href="#_135-require-模块引入的查找方式" aria-hidden="true">#</a> 135. require 模块引入的查找方式？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当 Node 遇到 require(X) 时，按下面的顺序处理。

（1）如果 X 是内置模块（比如 require(&#39;http&#39;)）
　　a. 返回该模块。
　　b. 不再继续执行。

（2）如果 X 以 &quot;./&quot; 或者 &quot;/&quot; 或者 &quot;../&quot; 开头
　　a. 根据 X 所在的父模块，确定 X 的绝对路径。
　　b. 将 X 当成文件，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
    X
    X.js
    X.json
    X.node

　　c. 将 X 当成目录，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
    X/package.json（main字段）
    X/index.js
    X/index.json
    X/index.node

（3）如果 X 不带路径
　　a. 根据 X 所在的父模块，确定 X 可能的安装目录。
　　b. 依次在每个目录中，将 X 当成文件名或目录名加载。

（4）抛出 &quot;not found&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),pt={href:"http://www.ruanyifeng.com/blog/2015/05/require.html",target:"_blank",rel:"noopener noreferrer"},ct=t(`<h2 id="_136-什么是-promise-对象-什么是-promises-a-规范" tabindex="-1"><a class="header-anchor" href="#_136-什么是-promise-对象-什么是-promises-a-规范" aria-hidden="true">#</a> 136. 什么是 Promise 对象，什么是 Promises/A+ 规范？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise 对象是异步编程的一种解决方案，最早由社区提出。Promises/A+ 规范是 JavaScript Promise 的标准，规定了一个 Promise 所必须具有的特性。

Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是 pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者 rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。状态的改变是通过 resolve() 和 reject() 函数来实现的，我们可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),rt={href:"http://www.ituring.com.cn/article/66566",target:"_blank",rel:"noopener noreferrer"},ut={href:"http://es6.ruanyifeng.com/#docs/promise#Promise-resolve",target:"_blank",rel:"noopener noreferrer"},dt=t(`<h2 id="_137-手写一个-promise" tabindex="-1"><a class="header-anchor" href="#_137-手写一个-promise" aria-hidden="true">#</a> 137. 手写一个 Promise</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">RESOLVED</span> <span class="token operator">=</span> <span class="token string">&quot;resolved&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyPromise</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 保存初始化状态</span>
  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

  <span class="token comment">// 初始化状态</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">PENDING</span><span class="token punctuation">;</span>

  <span class="token comment">// 用于保存 resolve 或者 rejected 传入的值</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 用于保存 resolve 的回调函数</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>resolvedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 用于保存 reject 的回调函数</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>rejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 状态转变为 resolved 方法</span>
  <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 保证代码的执行顺序为本轮事件循环的末尾</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 只有状态为 pending 时才能转变，</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 修改状态</span>
        self<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">RESOLVED</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置传入的值</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>

        <span class="token comment">// 执行回调函数</span>
        self<span class="token punctuation">.</span>resolvedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 状态转变为 rejected 方法</span>
  <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保证代码的执行顺序为本轮事件循环的末尾</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 只有状态为 pending 时才能转变</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 修改状态</span>
        self<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">REJECTED</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置传入的值</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>

        <span class="token comment">// 执行回调函数</span>
        self<span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 将两个方法传入函数执行</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遇到错误时，捕获错误，执行 reject 函数</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">MyPromise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 首先判断两个参数是否为函数类型，因为这两个参数是可选参数</span>
  onResolved <span class="token operator">=</span>
    <span class="token keyword">typeof</span> onResolved <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">?</span> <span class="token function-variable function">onResolved</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onRejected <span class="token operator">=</span>
    <span class="token keyword">typeof</span> onRejected <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">?</span> <span class="token function-variable function">onRejected</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> error<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 如果是等待状态，则将函数加入对应列表中</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>resolvedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果状态已经凝固，则直接执行对应状态的函数</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">RESOLVED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">REJECTED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_138-如何检测浏览器所支持的最小字体大小" tabindex="-1"><a class="header-anchor" href="#_138-如何检测浏览器所支持的最小字体大小" aria-hidden="true">#</a> 138. 如何检测浏览器所支持的最小字体大小？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用 JS 设置 DOM 的字体为某一个值，然后再取出来，如果值设置成功，就说明支持。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_139-怎么做-js-代码-error-统计" tabindex="-1"><a class="header-anchor" href="#_139-怎么做-js-代码-error-统计" aria-hidden="true">#</a> 139. 怎么做 JS 代码 Error 统计？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>error 统计使用浏览器的 window.error 事件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_140-单例模式模式是什么" tabindex="-1"><a class="header-anchor" href="#_140-单例模式模式是什么" aria-hidden="true">#</a> 140. 单例模式模式是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单例模式保证了全局只有一个实例来被访问。比如说常用的如弹框组件的实现和全局状态的实现。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_141-策略模式是什么" tabindex="-1"><a class="header-anchor" href="#_141-策略模式是什么" aria-hidden="true">#</a> 141. 策略模式是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>策略模式主要是用来将方法的实现和方法的调用分离开，外部通过不同的参数可以调用不同的策略。我主要在 MVP 模式解耦的时候
用来将视图层的方法定义和方法调用分离。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_142-代理模式是什么" tabindex="-1"><a class="header-anchor" href="#_142-代理模式是什么" aria-hidden="true">#</a> 142. 代理模式是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。比如说常见的事件代理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_143-中介者模式是什么" tabindex="-1"><a class="header-anchor" href="#_143-中介者模式是什么" aria-hidden="true">#</a> 143. 中介者模式是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>中介者模式指的是，多个对象通过一个中介者进行交流，而不是直接进行交流，这样能够将通信的各个对象解耦。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_144-适配器模式是什么" tabindex="-1"><a class="header-anchor" href="#_144-适配器模式是什么" aria-hidden="true">#</a> 144. 适配器模式是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>适配器用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。假如我们需要一种
新的接口返回方式，但是老的接口由于在太多地方已经使用了，不能随意更改，这个时候就可以使用适配器模式。比如我们需要一种
自定义的时间返回格式，但是我们又不能对 js 时间格式化的接口进行修改，这个时候就可以使用适配器模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),vt={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc74186fb9a049ab0d0b6b",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://juejin.im/post/59df4f74f265da430f311909#heading-3",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://juejin.im/post/5afe6430518825428630bc4d",target:"_blank",rel:"noopener noreferrer"},bt=t(`<h2 id="_145-观察者模式和发布订阅模式有什么不同" tabindex="-1"><a class="header-anchor" href="#_145-观察者模式和发布订阅模式有什么不同" aria-hidden="true">#</a> 145. 观察者模式和发布订阅模式有什么不同？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>发布订阅模式其实属于广义上的观察者模式

在观察者模式中，观察者需要直接订阅目标事件。在目标发出内容改变的事件后，直接接收事件并作出响应。

而在发布订阅模式中，发布者和订阅者之间多了一个调度中心。调度中心一方面从发布者接收事件，另一方面向订阅者发布事件，订阅者需要在调度中心中订阅事件。通过调度中心实现了发布者和订阅者关系的解耦。使用发布订阅者模式更利于我们代码的可维护性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ht={href:"https://www.zhihu.com/question/23486749",target:"_blank",rel:"noopener noreferrer"},ft=t(`<h2 id="_146-vue-的生命周期是什么" tabindex="-1"><a class="header-anchor" href="#_146-vue-的生命周期是什么" aria-hidden="true">#</a> 146. Vue 的生命周期是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue 的生命周期指的是组件从创建到销毁的一系列的过程，被称为 Vue 的生命周期。通过提供的 Vue 在生命周期各个阶段的钩子函数，我们可以很好的在 Vue 的各个生命阶段实现一些操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_147-vue-的各个生命阶段是什么" tabindex="-1"><a class="header-anchor" href="#_147-vue-的各个生命阶段是什么" aria-hidden="true">#</a> 147. Vue 的各个生命阶段是什么？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue 一共有8个生命阶段，分别是创建前、创建后、加载前、加载后、更新前、更新后、销毁前和销毁后，每个阶段对应了一个生命周期的钩子函数。

（1）beforeCreate：在实例初始化之后，在数据监听和事件配置之前触发。因此在这个事件中我们是获取不到 data 数据的。

（2）created：在实例创建完成后触发，此时可以访问 data、methods 等属性。但这个时候组件还没有被挂载到页面中去，所以这个时候访问不到 $el 属性。一般我们可以在这个函数中进行一些页面初始化的工作，比如通过 ajax 请求数据来对页面进行初始化。

（3）beforeMount：在组件被挂载到页面之前触发。在 beforeMount 之前，会找到对应的 template，并编译成 render 函数。

（4）mounted：在组件挂载到页面之后触发。此时可以通过 DOM API 获取到页面中的 DOM 元素。

（5）beforeUpdate：在响应式数据更新时触发，发生在虚拟 DOM 重新渲染和打补丁之前，这个时候我们可以对可能会被移除的元素做一些操作，比如移除事件监听器。

（6）updated：虚拟 DOM 重新渲染和打补丁之后调用。

（7）beforeDestroy：在实例销毁之前调用。一般在这一步我们可以销毁定时器、解绑全局事件等。

（8）destroyed：在实例销毁之后调用，调用后，Vue 实例中的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

当我们使用 keep-alive 的时候，还有两个钩子函数，分别是 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),gt={href:"https://juejin.im/entry/5aee8fbb518825671952308c",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://cn.vuejs.org/v2/guide/instance.html",target:"_blank",rel:"noopener noreferrer"},xt=t(`<h2 id="_148-vue-组件间的通信-数据传递-方式" tabindex="-1"><a class="header-anchor" href="#_148-vue-组件间的通信-数据传递-方式" aria-hidden="true">#</a> 148. Vue 组件间的通信（数据传递）方式？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）父子组件间通信

第一种方法是子组件通过 props 属性来接受父组件的数据，然后父组件在子组件上注册监听事件，子组件通过 this.$emit 触发事件来向父组件发送数据。

第二种是通过 ref 属性给子组件设置一个名字。父组件通过 this.$refs 组件名来获得子组件，子组件通过 this.$parent 获得父组件，这样也可以实现通信。

第三种是使用 provide + inject，在父组件中通过 provide 提供变量，在子组件中通过 inject 来将变量注入到组件中。不论子组件有多深，只要调用了 inject 那么就可以注入 provide 中的数据。

第四种是使用 $attrs，它只能用于子（孙）组件接收父组件传递过来的属性和方法，可以理解为props的简化版/语法糖

（2）兄弟组件间通信

第一种是使用 eventBus 的方法，它的本质是通过创建一个空的 Vue 实例来作为消息传递的对象，通信的组件引入这个实例，通信的组件通过在这个实例上监听和触发事件，来实现消息的传递。

第二种是通过 $parent.$refs 来获取到兄弟组件，也可以进行通信。

（3）任意组件之间

使用 eventBus ，其实就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。

如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候采用上面这一些方法可能不利于项目的维护。这个时候可以使用 vuex ，vuex 的思想就是将这一些公共的数据抽离出来，将它作为一个全局的变量来管理，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),yt={href:"https://juejin.im/entry/5ba215ac5188255c6d0d8345",target:"_blank",rel:"noopener noreferrer"},wt=t(`<h2 id="_149-computed-和-watch-的差异" tabindex="-1"><a class="header-anchor" href="#_149-computed-和-watch-的差异" aria-hidden="true">#</a> ==149. computed 和 watch 的差异？==</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）computed 是计算一个新的属性，并将该属性挂载到 Vue 实例上，而 watch 是监听已经存在且已挂载到 Vue 实例上的数据，所以用 watch 同样可以监听 computed 计算属性的变化。

（2）computed 本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 computed 属性，才会计算新的值。而 watch 不支持缓存，数据发生改变，直接会触发相应的操作。

（3）从使用场景上说，computed 适用一个数据被多个数据影响（多对一），而 watch 适用一个数据影响多个数据（一对多）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),jt={href:"https://juejin.im/post/5b98c4da6fb9a05d353c5fd7",target:"_blank",rel:"noopener noreferrer"},St={href:"https://juejin.im/post/5af908ea5188254265399009",target:"_blank",rel:"noopener noreferrer"},qt=t(`<h2 id="_150-vue-router-中的导航钩子函数" tabindex="-1"><a class="header-anchor" href="#_150-vue-router-中的导航钩子函数" aria-hidden="true">#</a> 150. vue-router 中的导航钩子函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）全局的钩子函数 beforeEach 和 afterEach

beforeEach 有三个参数，to 代表要进入的路由对象，from 代表离开的路由对象。next 是一个必须要执行的函数，如果不传参数，那就执行下一个钩子函数，如果传入 false，则终止跳转，如果传入一个路径，则导航到对应的路由，如果传入 error ，则导航终止，error 传入错误的监听函数。

（2）单个路由独享的钩子函数 beforeEnter，它是在路由配置上直接进行定义的。

（3）组件内的导航钩子主要有这三种：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。它们是直接在路由组件内部直接进行定义的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Et={href:"https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB",target:"_blank",rel:"noopener noreferrer"},Ot=t(`<h2 id="_151-route-和-router-的区别" tabindex="-1"><a class="header-anchor" href="#_151-route-和-router-的区别" aria-hidden="true">#</a> 151. $route 和 $router 的区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。而 $router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_152-vue-常用的修饰符" tabindex="-1"><a class="header-anchor" href="#_152-vue-常用的修饰符" aria-hidden="true">#</a> 152. vue 常用的修饰符？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素的时候会触发；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_153-vue-中-key-值的作用" tabindex="-1"><a class="header-anchor" href="#_153-vue-中-key-值的作用" aria-hidden="true">#</a> 153. vue 中 key 值的作用？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue 中 key 值的作用可以分为两种情况来考虑。

第一种情况是 v-if 中使用 key。由于 Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。因此当我们使用 v-if 来实现元素切换的时候，如果切换前后含有相同类型的元素，那么这个元素就会被复用。如果是相同的 input 元素，那么切换前后用户的输入不会被清除掉，这样是不符合需求的。因此我们可以通过使用 key 来唯一的标识一个元素，这个情况下，使用 key 的元素不会被复用。这个时候 key 的作用是用来标识一个独立的元素。

第二种情况是 v-for 中使用 key。用 v-for 更新已渲染过的元素列表时，它默认使用“就地复用”的策略。如果数据项的顺序发生了改变，Vue 不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处的每个元素。因此通过为每个列表项提供一个 key 值，来以便 Vue 跟踪元素的身份，从而高效的实现复用。这个时候 key 的作用是为了高效的更新渲染虚拟 DOM。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Mt={href:"https://segmentfault.com/a/1190000016344599",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://www.zhihu.com/question/61064119",target:"_blank",rel:"noopener noreferrer"},At={href:"https://www.cnblogs.com/RainyBear/p/8563101.html",target:"_blank",rel:"noopener noreferrer"},Jt=t(`<h2 id="_154-computed-和-watch-区别" tabindex="-1"><a class="header-anchor" href="#_154-computed-和-watch-区别" aria-hidden="true">#</a> 154. computed 和 watch 区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。

watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_155-keep-alive-组件有什么作用" tabindex="-1"><a class="header-anchor" href="#_155-keep-alive-组件有什么作用" aria-hidden="true">#</a> 155. keep-alive 组件有什么作用？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果你需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_156-vue-中-mixin-和-mixins-区别" tabindex="-1"><a class="header-anchor" href="#_156-vue-中-mixin-和-mixins-区别" aria-hidden="true">#</a> 156. vue 中 mixin 和 mixins 区别？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mixin 用于全局混入，会影响到每个组件实例。

mixins 应该是我们最常使用的扩展组件的方式了。如果多个组件中有相同的业务逻辑，就可以将这些逻辑剥离出来，通过 mixins 混入代码，比如上拉下拉加载数据这种逻辑等等。另外需要注意的是 mixins 混入的钩子函数会先于组件内的钩子函数执行，并且在遇到同名选项的时候也会有选择性的进行合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Ct={href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc731b51882516c56ced6f",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://cn.vuejs.org/v2/guide/mixins.html",target:"_blank",rel:"noopener noreferrer"},Pt=t(`<h2 id="_157-开发中常用的几种-content-type" tabindex="-1"><a class="header-anchor" href="#_157-开发中常用的几种-content-type" aria-hidden="true">#</a> 157. 开发中常用的几种 Content-Type ？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）application/x-www-form-urlencoded

浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。该种方式提交的数据放在 body 里面，数据按照 key1=val1&amp;key2=val2 的方式进行编码，key 和 val 都进行了 URL
转码。

（2）multipart/form-data

该种方式也是一个常见的 POST 提交方式，通常表单上传文件时使用该种方式。

（3）application/json

告诉服务器消息主体是序列化后的 JSON 字符串。

（4）text/xml

该种方式主要用来提交 XML 格式的数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Rt={href:"https://honglu.me/2015/07/13/%E5%B8%B8%E7%94%A8%E7%9A%84%E5%87%A0%E7%A7%8DContent-Type/",target:"_blank",rel:"noopener noreferrer"},It=t(`<h2 id="_158-如何封装一个-javascript-的类型判断函数" tabindex="-1"><a class="header-anchor" href="#_158-如何封装一个-javascript-的类型判断函数" aria-hidden="true">#</a> 158. 如何封装一个 javascript 的类型判断函数？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------------- 定义检测数据类型的方法 ------------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">checkoutType</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Bt={href:"https://github.com/mqyqingfeng/Blog/issues/28",target:"_blank",rel:"noopener noreferrer"},Dt=t(`<h2 id="_159-如何判断一个对象是否为空对象" tabindex="-1"><a class="header-anchor" href="#_159-如何判断一个对象是否为空对象" aria-hidden="true">#</a> 159. 如何判断一个对象是否为空对象？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkNullObj</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Lt={href:"https://blog.csdn.net/FungLeo/article/details/78113661",target:"_blank",rel:"noopener noreferrer"},Ft=t(`<h2 id="_160-使用闭包实现每隔一秒打印-1-2-3-4" tabindex="-1"><a class="header-anchor" href="#_160-使用闭包实现每隔一秒打印-1-2-3-4" aria-hidden="true">#</a> 160. 使用闭包实现每隔一秒打印 1,2,3,4</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用闭包实现</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用 let 块级作用域</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_161-手写一个-jsonp" tabindex="-1"><a class="header-anchor" href="#_161-手写一个-jsonp" aria-hidden="true">#</a> 161. 手写一个 jsonp</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断是否含有参数</span>
  <span class="token keyword">let</span> queryString <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;-1&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;?&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// 添加参数</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queryString <span class="token operator">+=</span> k <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> params<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理回调函数名</span>
  <span class="token keyword">let</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    callbackName <span class="token operator">=</span> <span class="token string">&quot;myJsonp&quot;</span> <span class="token operator">+</span> random<span class="token punctuation">;</span>

  <span class="token comment">// 添加回调函数</span>
  queryString <span class="token operator">+=</span> <span class="token string">&quot;callback=&quot;</span> <span class="token operator">+</span> callbackName<span class="token punctuation">;</span>

  <span class="token comment">// 构建请求</span>
  <span class="token keyword">let</span> scriptNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scriptNode<span class="token punctuation">.</span>src <span class="token operator">=</span> url <span class="token operator">+</span> queryString<span class="token punctuation">;</span>

  window<span class="token punctuation">[</span>callbackName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用回调函数</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 删除这个引入的脚本</span>
    document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>scriptNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 发起请求</span>
  document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Vt={href:"https://www.cnblogs.com/zzc5464/p/jsonp.html",target:"_blank",rel:"noopener noreferrer"},Ut={href:"https://segmentfault.com/a/1190000007665361#articleHeader1",target:"_blank",rel:"noopener noreferrer"},zt=t(`<h2 id="_162-手写一个观察者模式" tabindex="-1"><a class="header-anchor" href="#_162-手写一个观察者模式" aria-hidden="true">#</a> 162. 手写一个观察者模式？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> topics <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册监听函数</span>
    <span class="token function-variable function">subscribe</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">topic<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>topics<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 发布事件，触发观察者回调事件</span>
    <span class="token function-variable function">publish</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">topic<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>topics<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">handler</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 移除主题的一个观察者的回调事件</span>
    <span class="token function-variable function">remove</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">topic<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>topics<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

      <span class="token keyword">var</span> handlerIndex <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          handlerIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>handlerIndex <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>handlerIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 移除主题的所有观察者的回调事件</span>
    <span class="token function-variable function">removeAll</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">topic</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>topics<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ht={href:"https://segmentfault.com/a/1190000006934031#articleHeader1",target:"_blank",rel:"noopener noreferrer"},Xt=t(`<h2 id="_163-eventemitter-实现" tabindex="-1"><a class="header-anchor" href="#_163-eventemitter-实现" aria-hidden="true">#</a> 163. EventEmitter 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> callbacks <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> callbacks<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">off</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> callbacks <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> callbacks <span class="token operator">&amp;&amp;</span> callbacks<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> fn <span class="token operator">!==</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> callbacks <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">;</span>
    callbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">once</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token function-variable function">wrapFun</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> wrapFun<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> wrapFun<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_164-一道常被人轻视的前端-js-面试题" tabindex="-1"><a class="header-anchor" href="#_164-一道常被人轻视的前端-js-面试题" aria-hidden="true">#</a> 164. 一道常被人轻视的前端 JS 面试题</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Foo<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//请写出以下输出结果：</span>
Foo<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token keyword">new</span> <span class="token class-name">Foo<span class="token punctuation">.</span>getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
<span class="token keyword">new</span> <span class="token class-name">new</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Wt={href:"https://github.com/Wscats/Good-text-Share/issues/85",target:"_blank",rel:"noopener noreferrer"},Gt={href:"https://segmentfault.com/q/1010000008430170",target:"_blank",rel:"noopener noreferrer"},$t={href:"https://www.cnblogs.com/xxcanghai/p/5189353.html",target:"_blank",rel:"noopener noreferrer"},Qt=t(`<h2 id="_165-如何确定页面的可用性时间-什么是-performance-api" tabindex="-1"><a class="header-anchor" href="#_165-如何确定页面的可用性时间-什么是-performance-api" aria-hidden="true">#</a> 165. 如何确定页面的可用性时间，什么是 Performance API？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Performance API 用于精确度量、控制、增强浏览器的性能表现。这个 API 为测量网站性能，提供以前没有办法做到的精度。

使用 getTime 来计算脚本耗时的缺点，首先，getTime方法（以及 Date 对象的其他方法）都只能精确到毫秒级别（一秒的千分之一），想要得到更小的时间差别就无能为力了。其次，这种写法只能获取代码运行过程中的时间进度，无法知道一些后台事件的时间进度，比如浏览器用了多少时间从服务器加载网页。

为了解决这两个不足之处，ECMAScript 5引入“高精度时间戳”这个 API，部署在 performance 对象上。它的精度可以达到1毫秒
的千分之一（1秒的百万分之一）。

navigationStart：当前浏览器窗口的前一个网页关闭，发生 unload 事件时的 Unix 毫秒时间戳。如果没有前一个网页，则等于 fetchStart 属性。

loadEventEnd：返回当前网页 load 事件的回调函数运行结束时的 Unix 毫秒时间戳。如果该事件还没有发生，返回 0。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面这些属性，可以计算出网页加载各个阶段的耗时。比如，网页加载整个过程的耗时的计算方法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> t <span class="token operator">=</span> performance<span class="token punctuation">.</span>timing<span class="token punctuation">;</span>
<span class="token keyword">var</span> pageLoadTime <span class="token operator">=</span> t<span class="token punctuation">.</span>loadEventEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>navigationStart<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Yt={href:"http://javascript.ruanyifeng.com/bom/performance.html",target:"_blank",rel:"noopener noreferrer"},Zt=t(`<h2 id="_166-js-中的命名规则" tabindex="-1"><a class="header-anchor" href="#_166-js-中的命名规则" aria-hidden="true">#</a> 166. js 中的命名规则</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）第一个字符必须是字母、下划线（_）或美元符号（$）
（2）余下的字符可以是下划线、美元符号或任何字母或数字字符

一般我们推荐使用小驼峰法来对变量名进行命名，因为这样可以与 ECMAScript 内置的函数和对象命名格式保持一致。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Kt={href:"http://www.w3school.com.cn/js/pro_js_variables.asp",target:"_blank",rel:"noopener noreferrer"},ni=t(`<h2 id="_167-js-语句末尾分号是否可以省略" tabindex="-1"><a class="header-anchor" href="#_167-js-语句末尾分号是否可以省略" aria-hidden="true">#</a> 167. js 语句末尾分号是否可以省略？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 ECMAScript 规范中，语句结尾的分号并不是必需的。但是我们一般最好不要省略分号，因为加上分号一方面有
利于我们代码的可维护性，另一方面也可以避免我们在对代码进行压缩时出现错误。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_168-object-assign" tabindex="-1"><a class="header-anchor" href="#_168-object-assign" aria-hidden="true">#</a> 168. Object.assign()</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_169-math-ceil-和-math-floor" tabindex="-1"><a class="header-anchor" href="#_169-math-ceil-和-math-floor" aria-hidden="true">#</a> 169. Math.ceil 和 Math.floor</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.ceil() === 向上取整，函数返回一个大于或等于给定数字的最小整数。

Math.floor() === 向下取整，函数返回一个小于或等于给定数字的最大整数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_170-js-for-循环注意点" tabindex="-1"><a class="header-anchor" href="#_170-js-for-循环注意点" aria-hidden="true">#</a> 170. js for 循环注意点</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">,</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当判断语句含有多个语句时，以最后一个判断语句的值为准，因此上面的代码会执行 10 次。</span>
<span class="token comment">// 当判断语句为空时，循环会一直进行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_171-一个列表-假设有-100000-个数据-这个该怎么办" tabindex="-1"><a class="header-anchor" href="#_171-一个列表-假设有-100000-个数据-这个该怎么办" aria-hidden="true">#</a> 171. 一个列表，假设有 100000 个数据，这个该怎么办？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们需要思考的问题：该处理是否必须同步完成？数据是否必须按顺序完成？

解决办法：

（1）将数据分页，利用分页的原理，每次服务器端只返回一定数目的数据，浏览器每次只对一部分进行加载。

（2）使用懒加载的方法，每次加载一部分数据，其余数据当需要使用时再去加载。

（3）使用数组分块技术，基本思路是为要处理的项目创建一个队列，然后设置定时器每过一段时间取出一部分数据，然后再使用定时器取出下一个要处理的项目进行处理，接着再设置另一个定时器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_172-js-中倒计时的纠偏实现" tabindex="-1"><a class="header-anchor" href="#_172-js-中倒计时的纠偏实现" aria-hidden="true">#</a> 172. js 中倒计时的纠偏实现？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在前端实现中我们一般通过 setTimeout 和 setInterval 方法来实现一个倒计时效果。但是使用这些方法会存在时间偏差的问题，这是由于 js 的程序执行机制造成的，setTimeout 和 setInterval 的作用是隔一段时间将回调事件加入到事件队列中，因此事件并不是立即执行的，它会等到当前执行栈为空的时候再取出事件执行，因此事件等待执行的时间就是造成误差的原因。

一般解决倒计时中的误差的有这样两种办法：

（1）第一种是通过前端定时向服务器发送请求获取最新的时间差，以此来校准倒计时时间。

（2）第二种方法是前端根据偏差时间来自动调整间隔时间的方式来实现的。这一种方式首先是以 setTimeout 递归的方式来实现倒计时，然后通过一个变量来记录已经倒计时的秒数。每一次函数调用的时候，首先将变量加一，然后根据这个变量和每次的间隔时间，我们就可以计算出此时无偏差时应该显示的时间。然后将当前的真实时间与这个时间相减，这样我们就可以得到时间的偏差大小，因此我们在设置下一个定时器的间隔大小的时候，我们就从间隔时间中减去这个偏差大小，以此来实现由于程序执行所造成的时间误差的纠正。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),si={href:"https://juejin.im/post/5badf8305188255c8e728adc",target:"_blank",rel:"noopener noreferrer"},ai=n("h2",{id:"_173-进程间通信的方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_173-进程间通信的方式","aria-hidden":"true"},"#"),s(" 173. 进程间通信的方式？")],-1),ei=n("ul",null,[n("li",null,"1.管道通信"),n("li",null,"2.消息队列通信"),n("li",null,"3.信号量通信"),n("li",null,"4.信号通信"),n("li",null,"5.共享内存通信"),n("li",null,"6.套接字通信")],-1),ti={href:"https://blog.csdn.net/violet_echo_0908/article/details/51201278",target:"_blank",rel:"noopener noreferrer"},ii={href:"http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html",target:"_blank",rel:"noopener noreferrer"},li=t(`<h2 id="_174-如何查找一篇英文文章中出现频率最高的单词" tabindex="-1"><a class="header-anchor" href="#_174-如何查找一篇英文文章中出现频率最高的单词" aria-hidden="true">#</a> 174. 如何查找一篇英文文章中出现频率最高的单词？</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findMostWord</span><span class="token punctuation">(</span><span class="token parameter">article</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 合法性判断</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>article<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token comment">// 参数处理</span>
  article <span class="token operator">=</span> article<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> wordList <span class="token operator">=</span> article<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    maxNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    maxWord <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

  article <span class="token operator">=</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> wordList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// 遍历判断单词出现次数</span>
  wordList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 加入 visited </span>
      visited<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">let</span> word <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span> <span class="token operator">+</span> item <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        num <span class="token operator">=</span> article<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> maxNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxNum <span class="token operator">=</span> num<span class="token punctuation">;</span>
        maxWord <span class="token operator">=</span> item<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> maxWord <span class="token operator">+</span> <span class="token string">&quot;  &quot;</span> <span class="token operator">+</span> maxNum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_175-vue中的data为什么被设计为函数" tabindex="-1"><a class="header-anchor" href="#_175-vue中的data为什么被设计为函数" aria-hidden="true">#</a> 175.vue中的data为什么被设计为函数？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data是挂载到原型对象上的，所有的实例都共用原型对象下的方法或属性。组件是用来复用的，而一个组件不管复用过多少次，组件中的data数据都应该是隔离的，互不影响的。我们想让每个组件实例都有自己的作用域，每个实例相互独立不会相互影响，所以把data变成了一个函数。每次调用data函数的时候都会return一个新的对象，他们的内存地址都是不一样的，这样就不会相互影响。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function oi(pi,ci){const e=o("ExternalLinkIcon"),i=o("font");return c(),r("div",null,[d,n("p",null,[s("详细资料可以参考： "),n("a",v,[s("《JavaScript 有几种类型的值？》"),a(e)]),n("a",k,[s("《JavaScript 有几种类型的值？能否画一下它们的内存图；》"),a(e)])]),m,n("p",null,[s("详细资料可以参考： "),n("a",b,[s("《什么是堆？什么是栈？他们之间有什么区别和联系？》"),a(e)])]),n("h2",h,[f,s(),a(i,{color:"red"},{default:l(()=>[s("4. 内部属性 [[Class]] 是什么？")]),_:1})]),g,n("p",null,[s("详细资料可以参考： "),n("a",_,[s("《标准内置对象的分类》"),a(e)]),n("a",x,[s("《JS 所有内置对象属性和方法汇总》"),a(e)])]),y,n("p",null,[s("详细资料可以参考： "),n("a",w,[s("《JavaScript 深入理解之 undefined 与 null》"),a(e)])]),j,n("p",null,[s("详细资料可以参考： "),n("a",S,[s("《JavaScript 深入理解之原型与原型链》"),a(e)])]),q,n("h2",E,[O,s(),a(i,{color:"red"},{default:l(()=>[s("14. typeof NaN 的结果是什么？")]),_:1})]),M,n("h2",N,[A,s(),a(i,{color:"red"},{default:l(()=>[s("20. {} 和 [] 的 valueOf 和 toString 的结果是什么？")]),_:1})]),J,n("p",null,[s("详细资料可以参考： "),n("a",C,[s("《JavaScript 字符串间的比较》"),a(e)])]),T,n("p",null,[s("详细资料可以参考： "),n("a",P,[s("《详解 JS 中 Number()、parseInt() 和 parseFloat() 的区别》"),a(e)])]),R,n("p",null,[s("详细资料可以参考： "),n("a",I,[s("《前端表单验证常用的 15 个 JS 正则表达式》"),a(e)]),n("a",B,[s("《JS 常用正则汇总》"),a(e)])]),D,n("p",null,[s("详细资料可以参考： "),n("a",L,[s("《Fisher and Yates 的原始版》"),a(e)]),n("a",F,[s("《javascript 实现数组随机排序?》"),a(e)]),n("a",V,[s("《JavaScript 学习笔记：数组随机排序》"),a(e)])]),U,n("p",null,[s("详细资料可以参考： "),n("a",z,[s("《JavaScript 深入理解之对象创建》"),a(e)])]),H,n("p",null,[s("详细资料可以参考： "),n("a",X,[s("《JavaScript 深入理解之继承》"),a(e)])]),W,n("p",null,[s("详细资料可以参考： "),n("a",G,[s("《JavaScript 深入理解之作用域链》"),a(e)])]),$,n("p",null,[n("a",Q,[s("《JavaScript 深入理解之 this 详解》"),a(e)])]),Y,n("p",null,[s("详细资料可以参考： "),n("a",Z,[s("《eval()》"),a(e)])]),K,n("p",null,[s("详细资料可以参考： "),n("a",nn,[s("《DOM, DOCUMENT, BOM, WINDOW 有什么区别?》"),a(e)]),n("a",sn,[s("《Window 对象》"),a(e)]),n("a",an,[s("《DOM 与 BOM 分别是什么，有何关联？》"),a(e)]),n("a",en,[s("《JavaScript 学习总结（三）BOM 和 DOM 详解》"),a(e)])]),tn,n("p",null,[s("详细资料可以参考： "),n("a",ln,[s("《JS 事件模型》"),a(e)])]),on,pn,n("p",null,[s("详细资料可以参考： "),n("a",cn,[s("《Javascript 事件模型系列（一）事件及事件的三种模型》"),a(e)]),n("a",rn,[s("《Javascript 事件模型：事件捕获和事件冒泡》"),a(e)])]),un,n("p",null,[s("详细资料可以参考： "),n("a",dn,[s("《一个 DOM 元素绑定多个事件时，先执行冒泡还是捕获》"),a(e)])]),vn,n("p",null,[s("详细资料可以参考： "),n("a",kn,[s("《JavaScript 事件委托详解》"),a(e)])]),mn,n("p",null,[s("详细资料可以参考： "),n("a",bn,[s('《为什么 ["1", "2", "3"].map(parseInt) 返回 [1,NaN,NaN]？》'),a(e)])]),hn,n("p",null,[s("详细资料可以参考： "),n("a",fn,[s("《JavaScript 深入理解之闭包》"),a(e)])]),gn,n("p",null,[s("详细资料可以参考： "),n("a",_n,[s("《Javascript 严格模式详解》"),a(e)])]),xn,n("p",null,[s("详细资料可以参考： "),n("a",yn,[s("《js 判断一个对象是否属于某一类》"),a(e)])]),wn,n("p",null,[s("详细资料可以参考： "),n("a",jn,[s("《instanceof》"),a(e)])]),Sn,n("p",null,[s("详细资料可以参考： "),n("a",qn,[s("《new 操作符具体干了什么？》"),a(e)]),n("a",En,[s("《JavaScript 深入之 new 的模拟实现》"),a(e)])]),On,n("p",null,[s("详细资料可以参考： "),n("a",Mn,[s("《Object.prototype.hasOwnProperty()》"),a(e)])]),Nn,n("p",null,[s("详细资料可以参考： "),n("a",An,[s("《深入了解 JavaScript 中的 JSON 》"),a(e)])]),Jn,n("p",null,[s("详细资料可以参考： "),n("a",Cn,[s("《通过一行代码学 JavaScript》"),a(e)])]),Tn,n("p",null,[s("详细资料可以参考： "),n("a",Pn,[s("《JS 延迟加载的几种方式》"),a(e)]),n("a",Rn,[s("《HTML 5 "),In,s(),Bn,s(" 属性》"),a(e)])]),Dn,n("p",null,[s("详细资料可以参考： "),n("a",Ln,[s("《XMLHttpRequest 对象》"),a(e)]),n("a",Fn,[s("《从 ajax 到 fetch、axios》"),a(e)]),n("a",Vn,[s("《Fetch 入门》"),a(e)]),n("a",Un,[s("《传统 Ajax 已死，Fetch 永生》"),a(e)])]),zn,n("p",null,[s("详细资料可以参考： "),n("a",Hn,[s("《浅谈浏览器缓存》"),a(e)]),n("a",Xn,[s("《前端优化：浏览器缓存技术介绍》"),a(e)]),n("a",Wn,[s("《请求头中的 Cache-Control》"),a(e)]),n("a",Gn,[s("《Cache-Control 字段值详解》"),a(e)])]),$n,n("p",null,[s("详细资料可以参考： "),n("a",Qn,[s("《Ajax 中浏览器的缓存问题解决方法》"),a(e)]),n("a",Yn,[s("《浅谈浏览器缓存》"),a(e)])]),Zn,n("p",null,[s("详细资料可以参考： "),n("a",Kn,[s("《同步和异步的区别》"),a(e)])]),ns,n("p",null,[s("详细资料可以参考： "),n("a",ss,[s("《前端常见跨域解决方案（全）》"),a(e)]),n("a",as,[s("《浏览器同源政策及其规避方法》"),a(e)]),n("a",es,[s("《跨域，你需要知道的全在这里》"),a(e)]),n("a",ts,[s("《为什么 form 表单提交没有跨域问题，但 ajax 提交有跨域问题？》"),a(e)])]),is,n("p",null,[s("详细资料可以参考： "),n("a",ls,[s("《深入浅出 Nginx》"),a(e)])]),os,n("p",null,[s("详细资料可以参考： "),n("a",ps,[s("《HTTP cookies》 "),a(e)]),n("a",cs,[s("《聊一聊 cookie》 "),a(e)])]),rs,n("p",null,[s("详细资料可以参考： "),n("a",us,[s("《浅谈模块化开发》"),a(e)]),n("a",ds,[s("《Javascript 模块化编程（一）：模块的写法》"),a(e)]),n("a",vs,[s("《前端模块化：CommonJS，AMD，CMD，ES6》"),a(e)]),n("a",ks,[s("《Module 的语法》"),a(e)])]),ms,n("p",null,[s("详细资料可以参考： "),n("a",bs,[s("《前端模块化，AMD 与 CMD 的区别》"),a(e)])]),hs,n("p",null,[s("详细资料可以参考： "),n("a",fs,[s("《requireJS 的用法和原理分析》"),a(e)]),n("a",gs,[s("《requireJS 的核心原理是什么？》"),a(e)]),n("a",_s,[s("《从 RequireJs 源码剖析脚本加载原理》"),a(e)]),n("a",xs,[s("《requireJS 原理分析》"),a(e)])]),ys,n("p",null,[s("详细资料可以参考： "),n("a",ws,[s("《JS 模块加载器加载原理是怎么样的？》"),a(e)])]),js,n("p",null,[s("详细资料可以参考： "),n("a",Ss,[s("《ECMAScript 6 实现了 class，对 JavaScript 前端开发有什么意义？》"),a(e)]),n("a",qs,[s("《Class 的基本语法》"),a(e)])]),Es,n("p",null,[s("详细资料可以参考： "),n("a",Os,[s("《简述 document.write 和 innerHTML 的区别。》"),a(e)])]),Ms,n("p",null,[s("详细资料可以参考： "),n("a",Ns,[s("《DOM 概述》"),a(e)]),n("a",As,[s("《原生 JavaScript 的 DOM 操作汇总》"),a(e)]),n("a",Js,[s("《原生 JS 中 DOM 节点相关 API 合集》"),a(e)])]),Cs,n("p",null,[s("详细资料可以参考： "),n("a",Ts,[s("《apply、call 的区别和用途》"),a(e)])]),Ps,n("p",null,[s("详细的资料可以参考： "),n("a",Rs,[s("《JavaScript 深入之类数组对象与 arguments》"),a(e)]),n("a",Is,[s("《javascript 类数组》"),a(e)]),n("a",Bs,[s("《深入理解 JavaScript 类数组》"),a(e)])]),Ds,n("p",null,[s("详细资料可以参考： "),n("a",Ls,[s("《JavaScript 深入理解之 Array 类型详解》"),a(e)])]),Fs,n("p",null,[s("详细资料可以参考： "),n("a",Vs,[s("《Array.prototype.fill()》"),a(e)])]),Us,n("p",null,[s("详细资料可以参考： "),n("a",zs,[s("《尾后逗号》"),a(e)])]),Hs,n("p",null,[s("详细资料可以参考： "),n("a",Xs,[s("《JavaScript 深入理解之变量对象》"),a(e)])]),Ws,Gs,n("p",null,[s("详细资料可以参考： "),n("a",$s,[s("《如何编写高性能的 Javascript？》"),a(e)])]),Qs,n("p",null,[s("详细资料可以参考： "),n("a",Ys,[s("《深入理解 V8 的垃圾回收原理》"),a(e)]),n("a",Zs,[s("《JavaScript 中的垃圾回收》"),a(e)])]),Ks,n("p",null,[s("详细资料可以参考： "),n("a",na,[s("《JavaScript 内存泄漏教程》"),a(e)]),n("a",sa,[s("《4 类 JavaScript 内存泄漏及如何避免》"),a(e)]),n("a",aa,[s("《杜绝 js 中四种内存泄漏类型的发生》"),a(e)]),n("a",ea,[s("《javascript 典型内存泄漏及 chrome 的排查方法》"),a(e)])]),ta,n("p",null,[s("详细资料可以参考： "),n("a",ia,[s("《pushState + ajax 实现浏览器无刷新前进后退》"),a(e)]),n("a",la,[s("《Manipulating the browser history》"),a(e)])]),oa,n("p",null,[s("详细资料可以参考： "),n("a",pa,[s("《为什么把 script 标签放在 body 结束标签之后 html 结束标签之前？》"),a(e)]),n("a",ca,[s("《从 Chrome 源码看浏览器如何加载资源》"),a(e)])]),ra,n("p",null,[s("详细资料可以参考： "),n("a",ua,[s("《移动端 300ms 点击延迟和点击穿透》"),a(e)])]),da,n("p",null,[s("详细资料可以参考： "),n("a",va,[s("《什么是“前端路由”》"),a(e)]),n("a",ka,[s("《浅谈前端路由》 "),a(e)]),n("a",ma,[s("《前端路由是什么东西？》"),a(e)])]),ba,n("p",null,[s("详细资料可以参考： "),n("a",ha,[s("《浅谈前端单元测试》"),a(e)])]),fa,n("p",null,[s("详细资料可以参考： "),n("a",ga,[s("《JavaScript 判断浏览器类型》"),a(e)])]),_a,n("p",null,[s("详细资料可以参考： "),n("a",xa,[s("《Web 开发中的“黑话”》"),a(e)]),n("a",ya,[s("《Polyfill 为何物》"),a(e)])]),wa,n("p",null,[s("详细资料可以参考： "),n("a",ja,[s("《如何更有效的获取文件扩展名》"),a(e)])]),Sa,n("p",null,[s("详细资料可以参考： "),n("a",qa,[s("《轻松理解 JS 函数节流和函数防抖》"),a(e)]),n("a",Ea,[s("《JavaScript 事件节流和事件防抖》"),a(e)]),n("a",Oa,[s("《JS 的防抖与节流》"),a(e)])]),Ma,n("p",null,[s("详细资料可以参考： "),n("a",Na,[s("《escape,encodeURI,encodeURIComponent 有什么区别?》"),a(e)])]),Aa,n("p",null,[s("详细资料可以参考： "),n("a",Ja,[s("《字符编码详解》"),a(e)]),n("a",Ca,[s("《字符编码笔记：ASCII，Unicode 和 UTF-8》"),a(e)])]),Ta,n("p",null,[s("详细资料可以参考： "),n("a",Pa,[s("《浏览器事件循环机制（event loop）》"),a(e)]),n("a",Ra,[s("《详解 JavaScript 中的 Event Loop（事件循环）机制》"),a(e)]),n("a",Ia,[s("《什么是 Event Loop？》"),a(e)]),n("a",Ba,[s("《这一次，彻底弄懂 JavaScript 执行机制》"),a(e)])]),Da,n("p",null,[s("详细资料可以参考： "),n("a",La,[s("《JavaScript 专题之深浅拷贝》"),a(e)]),n("a",Fa,[s("《前端面试之道》"),a(e)])]),Va,n("p",null,[s("详细资料可以参考： "),n("a",Ua,[s("《手写 call、apply 及 bind 函数》"),a(e)]),n("a",za,[s("《JavaScript 深入之 call 和 apply 的模拟实现》"),a(e)])]),Ha,n("p",null,[s("详细资料可以参考： "),n("a",Xa,[s("《JavaScript 专题之函数柯里化》"),a(e)])]),Wa,n("p",null,[s("详细资料可以参考： "),n("a",Ga,[s("《十进制的 0.1 为什么不能用二进制很好的表示？》"),a(e)]),n("a",$a,[s("《十进制浮点数转成二进制》"),a(e)]),n("a",Qa,[s("《浮点数的二进制表示》"),a(e)]),n("a",Ya,[s("《js 浮点数存储精度丢失原理》"),a(e)]),n("a",Za,[s("《浮点数精度之谜》"),a(e)]),n("a",Ka,[s("《JavaScript 浮点数陷阱及解法》"),a(e)]),n("a",ne,[s("《0.1+0.2 !== 0.3？》"),a(e)]),n("a",se,[s("《JavaScript 中奇特的~运算符》"),a(e)])]),ae,n("p",null,[s("详细资料可以参考： "),n("a",ee,[s("《关于 2 的补码》"),a(e)])]),te,n("p",null,[s("详细资料可以参考： "),n("a",ie,[s("《前端安全系列（一）：如何防止 XSS 攻击？》"),a(e)])]),le,n("p",null,[s("详细资料可以参考： "),n("a",oe,[s("《内容安全策略（CSP）》"),a(e)]),n("a",pe,[s("《前端面试之道》"),a(e)])]),ce,n("p",null,[s("详细资料可以参考： "),n("a",re,[s("《前端安全系列之二：如何防止 CSRF 攻击？》"),a(e)]),n("a",ue,[s("《[ HTTP 趣谈] origin, referer 和 host 区别》"),a(e)])]),de,n("p",null,[s("详细资料可以参考： "),n("a",ve,[s("《web 安全之--点击劫持攻击与防御技术简介》"),a(e)])]),ke,n("p",null,[s("详细资料可以参考： "),n("a",me,[s("《Web 安全漏洞之 SQL 注入》"),a(e)]),n("a",be,[s("《如何防范常见的 Web 攻击》"),a(e)])]),he,n("p",null,[s("详细资料可以参考： "),n("a",fe,[s("《浅析前端开发中的 MVC/MVP/MVVM 模式》"),a(e)]),n("a",ge,[s("《MVC，MVP 和 MVVM 的图示》"),a(e)]),n("a",_e,[s("《MVVM》"),a(e)]),n("a",xe,[s("《一篇文章了解架构模式：MVC/MVP/MVVM》"),a(e)])]),ye,n("p",null,[s("详细资料可以参考： "),n("a",we,[s("《Vue.js 双向绑定的实现原理》"),a(e)])]),je,n("p",null,[s("详细资料可以参考： "),n("a",Se,[s("《Object.defineProperty()》"),a(e)])]),qe,n("p",null,[s("详细资料可以参考： "),n("a",Ee,[s("《Virtual DOM》"),a(e)]),n("a",Oe,[s("《理解 Virtual DOM》"),a(e)]),n("a",Me,[s("《深度剖析：如何实现一个 Virtual DOM 算法》"),a(e)]),n("a",Ne,[s("《网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？》"),a(e)])]),Ae,n("p",null,[s("详细资料可以参考： "),n("a",Je,[s("《你需要知道的 requestAnimationFrame》"),a(e)]),n("a",Ce,[s("《CSS3 动画那么强，requestAnimationFrame 还有毛线用？》"),a(e)])]),Te,n("p",null,[s("详细资料可以参考： "),n("a",Pe,[s("《不聊 webpack 配置，来说说它的原理》"),a(e)]),n("a",Re,[s("《前端工程化——构建工具选型：grunt、gulp、webpack》"),a(e)]),n("a",Ie,[s("《浅入浅出 webpack》"),a(e)]),n("a",Be,[s("《前端构建工具发展及其比较》"),a(e)])]),De,n("p",null,[s("详细资料可以参考： "),n("a",Le,[s("《最全的获取元素宽高及位置的方法》"),a(e)]),n("a",Fe,[s("《用 Javascript 获取页面元素的位置》"),a(e)])]),Ve,n("p",null,[s("详细资料可以参考： "),n("a",Ue,[s("《函数式编程初探》"),a(e)])]),ze,n("p",null,[s("详细资料可以参考： "),n("a",He,[s("《HTTP 协议中 URI 和 URL 有什么区别？》"),a(e)]),n("a",Xe,[s("《你知道 URL、URI 和 URN 三者之间的区别吗？》"),a(e)]),n("a",We,[s("《URI、URL 和 URN 的区别》"),a(e)])]),Ge,n("p",null,[s("详细资料可以参考： "),n("a",$e,[s("《HTML 关于 post 和 get 的区别以及缓存问题的理解》"),a(e)])]),Qe,n("p",null,[s("详细资料可以参考： "),n("a",Ye,[s("《懒加载和预加载》"),a(e)]),n("a",Ze,[s("《网页图片加载优化方案》"),a(e)]),n("a",Ke,[s("《基于用户行为的图片等资源预加载》"),a(e)])]),nt,n("p",null,[s("详细资料可以参考： "),n("a",st,[s("《mouseenter 与 mouseover 为何这般纠缠不清？》"),a(e)])]),at,n("p",null,[s("详细资料可以参考： "),n("a",et,[s("《原生 js 实现拖拽功能基本思路》"),a(e)])]),tt,n("p",null,[s("详细资料可以参考： "),n("a",it,[s("《用 setTimeout 实现 setInterval》"),a(e)]),n("a",lt,[s("《setInterval 有什么缺点？》"),a(e)])]),ot,n("p",null,[s("详细资料可以参考： "),n("a",pt,[s("《require() 源码解读》"),a(e)])]),ct,n("p",null,[s("详细资料可以参考： "),n("a",rt,[s("《Promises/A+ 规范》"),a(e)]),n("a",ut,[s("《Promise》"),a(e)])]),dt,n("p",null,[s("更多关于设计模式的资料可以参考： "),n("a",vt,[s("《前端面试之道》"),a(e)]),n("a",kt,[s("《JavaScript 设计模式》"),a(e)]),n("a",mt,[s("《JavaScript 中常见设计模式整理》"),a(e)])]),bt,n("p",null,[s("详细资料可以参考： "),n("a",ht,[s("《观察者模式和发布订阅模式有什么不同？》"),a(e)])]),ft,n("p",null,[s("详细资料可以参考： "),n("a",gt,[s("《vue 生命周期深入》"),a(e)]),n("a",_t,[s("《Vue 实例》"),a(e)])]),xt,n("p",null,[s("详细资料可以参考： "),n("a",yt,[s("《VUE 组件之间数据传递全集》"),a(e)])]),wt,n("p",null,[s("详细资料可以参考： "),n("a",jt,[s("《做面试的不倒翁：浅谈 Vue 中 computed 实现原理》"),a(e)]),n("a",St,[s("《深入理解 Vue 的 watch 实现原理及其实现方式》"),a(e)])]),qt,n("p",null,[s("详细资料可以参考： "),n("a",Et,[s("《导航守卫》"),a(e)])]),Ot,n("p",null,[s("详细资料可以参考： "),n("a",Mt,[s("《Vue 面试中，经常会被问到的面试题 Vue 知识点整理》"),a(e)]),n("a",Nt,[s("《Vue2.0 v-for 中 :key 到底有什么用？》"),a(e)]),n("a",At,[s("《vue 中 key 的作用》"),a(e)])]),Jt,n("p",null,[s("详细资料可以参考： "),n("a",Ct,[s("《前端面试之道》"),a(e)]),n("a",Tt,[s("《混入》"),a(e)])]),Pt,n("p",null,[s("详细资料可以参考： "),n("a",Rt,[s("《常用的几种 Content-Type》"),a(e)])]),It,n("p",null,[s("详细资料可以参考： "),n("a",Bt,[s("《JavaScript 专题之类型判断(上)》"),a(e)])]),Dt,n("p",null,[s("详细资料可以参考： "),n("a",Lt,[s("《js 判断一个 object 对象是否为空》"),a(e)])]),Ft,n("p",null,[s("详细资料可以参考： "),n("a",Vt,[s("《原生 jsonp 具体实现》"),a(e)]),n("a",Ut,[s("《jsonp 的原理与实现》"),a(e)])]),zt,n("p",null,[s("详细资料可以参考： "),n("a",Ht,[s("《JS 事件模型》"),a(e)])]),Xt,n("p",null,[s("详细资料可以参考： "),n("a",Wt,[s("《前端程序员经常忽视的一个 JavaScript 面试题》"),a(e)]),n("a",Gt,[s("《一道考察运算符优先级的 JavaScript 面试题》"),a(e)]),n("a",$t,[s("《一道常被人轻视的前端 JS 面试题》"),a(e)])]),Qt,n("p",null,[s("详细资料可以参考： "),n("a",Yt,[s("《Performance API》"),a(e)])]),Zt,n("p",null,[s("详细资料可以参考： "),n("a",Kt,[s("《ECMAScript 变量》"),a(e)])]),ni,n("p",null,[s("详细资料可以参考： "),n("a",si,[s("《JavaScript 前端倒计时纠偏实现》"),a(e)])]),ai,ei,n("p",null,[s("详细资料可以参考： "),n("a",ti,[s("《进程间 8 种通信方式详解》"),a(e)]),n("a",ii,[s("《进程与线程的一个简单解释》"),a(e)])]),li])}const ui=p(u,[["render",oi],["__file","index.html.vue"]]);export{ui as default};
