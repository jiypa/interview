# 面试题典

## 1.介绍一下 CSS 盒模型？
  盒模型分为两种：IE盒模型（border-box）、W3C标准盒模型（content-box）

  在盒模型中，元素被分为 content、padding、border、margin 四个部分

  IE盒模型和标准盒模型的区别：

  （1）标准盒模型：属性 width、height 只包含 content，不包含 border 和 padding，指的仅是内容区域的宽度和长度

  （2）IE盒模型：属性 width、height 包含 content、border 和 padding，指的是三者起来的宽度和长度

  一般来说，我们可以通过修改元素的 box-sizing 属性来改变元素的盒模型的类型

  在 IE6，7，8中若 DOCTYPE 缺失浏览器会将盒模型解释为IE盒模型，若在页面中声明了DOCTYPE类型，则所有的浏览器都会把盒模型解释为标准盒模型。

  > 详细资料可以参考：
  > [《CSS 盒模型详解》](https://juejin.im/post/59ef72f5f265da4320026f76)

## 2.CSS 选择器有哪些？
（1）id选择器（#myid）

（2）类选择器（.myclassname）

（3）标签选择器（div,h1,p）

（4）后代选择器（h1 p）

（5）子选择器（ul>li）

（6）兄弟选择器（所有）（li~a）

（7）相邻兄弟选择器（li+a）

（8）属性选择器（a[rel="external"]）

（9）伪类选择器（a:hover,li:nth-child）

（10）伪元素选择器（::before、::after）

（11）通配符选择器（*）
## 3.伪类与伪元素的区别？
  CSS 引入伪类和伪元素概念是为了格式化文档树以外的信息，即<mark>伪类和伪元素是用来修饰不在文档树中的部分</mark>，比如，一句话中的第一个字母，或者是列表中的第一个元素等。

  <mark>伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。</mark>比如当用户悬停在指定的元素时，我们可以通过 :hover 来描述这个元素的状态。

  <mark>伪元素用于创建一些不在文档树中的元素，并为其添加样式。</mark>它们允许我们为元素的某些部分设置样式。比如说，我们可以通过 ::before 来在一个元素前增加一些文本，并为这些文本添加样式，虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

  CSS3 为了区分伪类和伪元素，将伪类用单冒号（:）表示、伪元素用双冒号（::）表示，但是，由于在旧版本的W3C规范并未对此进行特别区分，因此目前绝大多数的浏览器都支持使用这两种方式表示伪元素。

  ❗ 注意：同一个元素上伪元素 before 与 after 分别只能设置一个，若同一个元素上设置了多个相同的伪元素，则后面的伪元素会覆盖掉前面相同的伪元素。

  > 详细资料可以参考：
  > [《总结伪类与伪元素》](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)

## 4.CSS 中哪些属性可以继承？
  每个CSS属性定义的概述都指出了这个属性是默认继承的，还是默认不继承的。这决定了当你没有为元素的属性指定值时该如何计算值。

  当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值。只有文档根元素取该属性的概述中给定的初始值。

  当元素的一个非继承属性没有指定值时，则取属性的初始值（该值在该属性的概述里被指定）。

  有继承性的属性：

  （1）字体系列属性：font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust

  （2）文本系列属性：text-indent、text-align、text-shadow、line-height、word-spacing、letter-spacing、
  text-transform、direction、color

  （3）表格布局属性：caption-side border-collapse empty-cells

  （4）列表属性：list-style-type、list-style-image、list-style-position、list-style

  （5）光标属性：cursor

  （6）元素可见性：visibility

  （7）还有一些不常用的；speak，page，设置嵌套引用的引号类型quotes等属性


  ❗ 注意：当一个属性不是继承属性时，可以使用 inherit 关键字指定一个属性应从父元素继承它的值，inherit 关键字用于显式地指定继承性，可用于任何继承性或非继承性属性。
## 5.CSS 优先级算法是什么？
  判断优先级时，首先我们会判断一条属性声明是否有权重，也就是是否在声明后面加上了 !important。一条声明如果加上了权重，那么它的优先级就是最高的，前提是它之后不再出现相同权重的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。

  一条匹配规则一般由多个选择器组成，一条规则的特殊性由组成它的选择器的特殊性累加而成。选择器的特殊性可以分为以下四个等级：

  （1）行内样式，为1000，
  
  （2）id选择器，为0100，
  
  （3）类选择器、伪类选择器和属性选择器，为0010，

  （4）元素选择器和伪元素选择器，为0001。
  
  规则中每出现一个选择器，就将它的特殊性进行叠加，这个叠加只限于对应等级的叠加，不会产生进位。选择器特殊性值的比较是从左向右排序的，也就是说以1开头的特殊性值比所有以0开头的特殊性值要大，比如特殊性值为1000的的规则优先级就要比特殊性值为0999的规则高，如果两个规则的特殊性值相等的时候，那么就会根据它们引入的顺序，后出现的规则的优先级高。

  例：

  （1）#demo a{color: orange;}（特殊性值：0101）

  （2）div#demo a{color: red;}（特殊性值：0102）

  > 详细资料可以参考：
  > [《CSS 优先级计算及应用》](https://www.jianshu.com/p/1c4e639ff7d5)
  > [《CSS 优先级计算规则》](http://www.cnblogs.com/wangmeijian/p/4207433.html)
  > [《有趣：256 个 class 选择器可以干掉 1 个 id 选择器》](https://www.zhangxinxu.com/wordpress/2012/08/256-class-selector-beat-id-selector/)
## 6.关于伪类 LVHA 的解释?
a标签有四种状态：链接访问前（:link）、链接访问后（:visited）、鼠标滑过（:hover）、激活（:active）。

当链接未访问过时：

（1）当鼠标滑过 a 链接时，满足 :link 和 :hover 两种状态，要改变 a 标签的颜色，就必须将 :hover伪 类在 :link 伪
类后面声明；

（2）当鼠标点击激活 a 链接时，同时满足 :link、:hover、:active 三种状态，要显示a标签激活时的样式，必须将 :active 伪类声明放到 :link 和 :hover 之后，因此得出LVHA这个顺序。

当链接访问过时，情况基本同上，只不过需要将 :link 换成 :visited。

这个顺序能不能变？可以，但也只有 :link 和 :visited 可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，也就不存在覆盖的问题。
## 7.CSS3 新增伪类有那些？
  （1）elem:nth-child(n)选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数
  值，也可以接受函数。

  （2）elem:nth-last-child(n)作用同上，不过是从后开始查找。

  （3）elem:last-child选中最后一个子元素。

  （4）elem:only-child如果elem是父元素下唯一的子元素，则选中之。

  （5）elem:nth-of-type(n)选中父元素下第n个与父元素同类型的子元素，n可以接受具体的数值，也可以接受函数。

  （6）elem:first-of-type选中父元素下第一个与父元素同类型的子元素。

  （7）elem:last-of-type选中父元素下最后一个与父元素同类型的子元素。

  （8）elem:only-of-type如果父元素下只有一个与父元素同类型的子元素，则选中之。

  （9）elem:empty选中内容为空的与父元素同类型的子元素。

  （10）elem:target选择当前活动的elem元素。

  （11）:not(elem)选择非elem元素的每个元素。

  （12）:enabled 控制表单控件的禁用状态。

  （13）:disabled	控制表单控件的禁用状态。

  （14）:checked单选框或复选框被选中。

  > 详细的资料可以参考：
  > [《CSS3 新特性总结(伪类)》](https://www.cnblogs.com/SKLthegoodman/p/css3.html)
  > [《浅谈 CSS 伪类和伪元素及 CSS3 新增伪类》](https://blog.csdn.net/zhouziyu2011/article/details/58605705)
## 8.如何水平居中一个 div？
  基础 HTML：
  ``` html
  <!DOCTYPE html>
  <html lang="zh">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>基础 HTML</title>
      <style>
          *{
              margin: 0;
              padding: 0;
          }
          .container{
            width: 100vw;
            height: 100vh;
            background-color: #fff;
          }
          .content{
            width: 400px;
            height: 400px;
            border-radius: 20px;
            background-color: #1890ff;
          }
          /* 插入自己的样式 */
      </style>
  </head>
  <body>
      <div class="container">
          <div class="content"></div>
      </div>
  </body>
  </html>
  ```
  （1）使用 margin:0 auto 属性
  ``` css
  div.content{
    margin: 0 auto;
  }
  ```
  （2）使用 text-align: center 属性
  ``` css
  div.container{
    /* text-align 仅对行内元素或行内块元素有效，因此被水平居中的元素需要将 display 设置为 inline 或 inline-block*/
    text-align: center;
  }
  div.content{
    display: inline-block;
  }
  ```
## 9.如何水平垂直居中一个 div？
  （1）使用绝对定位 + margin: auto
  ``` css
  div.content{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  ```
  （2）使用绝对定位 + margin: 特定值
  ``` css
  div.content{
    position: absolute;/*必须使用绝对定位*/
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -200px;
  }
  ```
  （3）使用 transform 属性<mark>（被居中元素宽高确定与不定的情形均适用）</mark>
  ``` css
  div.content{
    position: absolute; /*相对定位或绝对定位均可*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```
  （4）使用 flex 布局<mark>（被居中元素宽高确定与不定的情形均适用）</mark>
  ``` css
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```
  （5）使用 text-align: center + vertical-align: middle 属性
  ``` css
  /*
    使用 vertical-align: middle 属性垂直居中元素的时候 display 值必须为 inline 或 table-cell
    若外层容器表现为行内元素，则将其 display 值置为 inline
    若外层容器表现为块级元素，则将其 display 值置为 table-cell
    由于使用了 text-align: center 属性，此时被居中的元素仍需遵循8.（2）中的规则
  */
  div.container{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  div.content{
    display: inline-block;
  }
  ```
## 10.position 可取的值都有哪些，定位原点分别是什么？
  absolute：生成绝对定位的元素，相对于最近的非 static 定位（已开启定位）的祖先元素的 padding 进行定位，脱离文档流。

  fixed：生成固定定位的元素，相对于浏览器窗口进行定位，脱离文档流，注意定位的时候只包括 content，不包括 padding、border 和 margin。

  relative：生成相对定位的元素，相对于其元素本身所在文档流中的位置进行定位。

  static：默认值，没有定位，元素出现在正常的流中。

  inherit：规定从父元素继承 position 属性的值。

  ❗ 注意：只有绝对定位的元素计算定位距离的时候需要将其参照元素的 padding 值包含在内，其余定位的元素均以其参照元素的 content 值进行计算。

  ![alt position](https://s3.bmp.ovh/imgs/2022/08/14/4bc9f53b2bb30415.png)
  > 详细的资料可以参考：
  > [《你可能对position和z-index有一些误解》](https://juejin.cn/post/6993468505773309982)
## 11.请介绍一下 CSS3 的 Flex 布局？
  Flex 是 FlexibleBox 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

  任何一个容器都可以指定为 Flex 布局。
  
  ❗ 注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

  采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex元素（flex item），简称"元素"。

  容器默认存在两根轴：水平的主轴（main axis）和垂直的辅轴（cross axis），元素默认沿主轴排列。

  以下6个属性设置在容器上。

  flex-direction属性决定主轴的方向（即元素的排列方向）。

  flex-wrap属性定义，如果一条轴线排不下，如何换行。

  flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

  justify-content属性定义了元素在主轴上的对齐方式。 可选值：flex-start, flex-end, center, space-around,space-between, stretch

  align-items属性定义元素在辅轴上如何对齐。 可选值：flex-start, flex-end, center， stretch

  align-content属性定义了多根轴线的对齐方式。如果元素只有一根轴线，该属性不起作用。


  以下6个属性设置在元素上。

  order属性定义元素的排列顺序。数值越小，排列越靠前，默认为0。

  flex-grow属性定义元素的增长系数，默认为0，即如果存在剩余空间，也不放大。

  flex-shrink属性定义了项目的缩减系数，默认为1，即如果空间不足，该项目将缩小。

  flex-basis属性定义了在分配多余空间之前，元素占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

  flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。

  align-self属性允许单个元素有与其他元素不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

  > 详细资料可以参考：
  > [《Flex 布局教程：语法篇》](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
  > [《Flex 布局教程：实例篇》](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
## 12.用纯 CSS 创建一个三角形的原理是什么？
  采用的是相邻边框连接处的均分原理，将元素的宽高设为0，只设置 border，把任意三条边隐藏掉（颜色设为 transparent），剩下的就是一个三角形。
  ``` css
    div{
      width: 0;
      height: 0;
      border-width: 20px;
      border-style: solid;
      border-color: transparent transparent red transparent;
      border-top: none;   // 加上这一行可以让三角形顶格， 不加三角形会下移20px
    } 
  ```
## 13.HTML 中多个行内元素或行内块元素横向排列时时会产生空白间隔，这是什么原因引起的，有什么解决办法？
  浏览器会把行内元素或行内块元素间的空白字符（空格、换行、tab 等）渲染成一个空格。而为了美观。我们在编写代码的时候通常是将一个行内元素或行内块元素放在一行，这导致这些元素在换行后产生空白字符，它变成一个空格，占用了一个字符的宽度。

  解决办法：

  （1）为行内元素或行内块元素设置 float: left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。

  （2）将所有行内元素或行内块元素写在同一行。不足：代码不美观。

  （3）将行内元素或行内块元素的父元素内的字符尺寸直接设为0，即 font-size:0。不足：行内元素或行内块元素也会继承其父元素的字符尺寸，也会被设为0，需要额外重新设定其他字符尺寸，且在 Safari 浏览器依然会出现空白间隔。

  （4）消除行内元素或行内块元素的父元素的字符间隔 letter-spacing: -5px，不足：行内元素或行内块元素也会继承其父元素的字符间隔，其内部的文本间隔也会被消除，因此需要将行内元素或行内块元素内的字符间隔重新设为默认 letter-spacing: normal。

  > 详细资料可以参考：
  > [《li 与 li 之间有看不见的空白间隔是什么原因引起的？》](https://blog.csdn.net/sjinsa/article/details/70919546)
## 14.什么是包含块，对于包含块的理解?
  包含块（containing block）就是元素用来计算和定位的一个框。

  如果所有的祖先元素都没有开启定位，则其包含块就是初始包含块（html 元素）。

  对于开启了绝对定位的元素来说，包含块是离它最近的开启了定位（position 值不为 static）的祖先元素。

  对于其他开启了非绝对定位的元素来说，包含块就是离当前元素最近的块级祖先元素。
## 15.CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下有什么区别？
  对于一般的元素，它的表现跟visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。

  但例外的是，如果这个元素是table相关的元素，它的表现却跟 display: none 一样，也就是说，它们占用的空间也会释放。

  在不同浏览器下的区别：

  在谷歌浏览器里，使用 collapse 值和使用 hidden 值没有什么区别。

  在火狐浏览器、Opera 和 IE11里，使用 collapse 值的效果就如它的字面意思：table 的行会消失，它的下面一行会补充它的位置。

  > 详细资料可以参考：
  > [《CSS 里的 visibility 属性有个鲜为人知的属性值：collapse》](http://www.webhek.com/post/visibility-collapse.html)

## 16.width: auto 和 width: 100%的区别？
width: 100%会使元素内容区域的宽度等于父元素的内容区域的宽度。

width: auto 会使元素宽度从外边距开始撑满整个父元素。
## 17.简述图片使用 base64 编码的优点和缺点？
  优点：减少图片的HTTP请求

  缺点：

  （1）根据 base64 的编码原理，编码后的大小会比原文件大小大1/3，如果把大图片编码到 HTML 或 CSS 中，不仅会造成文件体积的增加，影响文件的加载速度，还会增加浏览器对 HTML 或 CSS 文件解析渲染的时间。

  （2）使用 base64 无法直接缓存，要缓存只能缓存包含 base64 的文件，比如 HTML 或者 CSS，这相比于直接缓存图片的效果要差很多。

  （3）兼容性的问题，IE8以前的浏览器不支持。

  一般一些网站的小图标可以使用 base64 图片来引入。

  > 详细资料可以参考：
  > [《玩转图片 base64 编码》](https://www.cnblogs.com/coco1s/p/4375774.html)
  > [《前端开发中，使用 base64 图片的弊端是什么？》](https://www.zhihu.com/question/31155574)
  > [《小 tip:base64:URL 背景图片与 web 页面性能优化》](https://www.zhangxinxu.com/wordpress/2012/04/base64-url-image-%E5%9B%BE%E7%89%87-%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/)
## 18.谈谈你对 BFC 和 IFC 的理解？
  BFC指的是块级格式化上下文，相当于一个<mark>容器</mark>，一个元素开启了BFC之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也不会影响到BFC中的内部元素。

  触发BFC的方法：

  （1）子元素或父元素上：float = left | right（≠none）

  （2）子元素或父元素上：position = absolute | fixed（≠static | relative）

  （3）父元素上：display = inline-block | flex | inline-flex | table-cell（表格单元格）| table-caption（表格标题）

  （4）父元素上：overflow = hidden | auto | scroll（≠visible）

  IFC指的是行级格式化上下文，它有这样的一些布局规则：

  （1）IFC 内部的盒子会在水平方向，一个接一个地放置。

  （2）当一行不够的时候会自动切换到下一行。

  （3）行级上下文的高度由内部最高的内联盒子的高度决定。

  > 详细资料可以参考：
  > [《[译]:BFC 与 IFC》](https://segmentfault.com/a/1190000004466536#articleHeader5)
  > [《BFC 和 IFC 的理解（布局）》](https://blog.csdn.net/paintandraw/article/details/80401741)
## 19.谈谈你对外边距塌陷和外边距合并问题的理解？
  首先要说明的是这两个问题是不同的两个问题，不能想当然地将两者混为一谈。

  外边距塌陷：两个<mark>嵌套（父子关系）</mark>的块级元素，当父元素有上外边距或者没有上外边距，子元素也有上外边距的时候，两个上外边距会合并为一个上外边距，以值相对较大的上外边距值为准，这种现象就叫做“外边距塌陷”，它可以说是 CSS 中的一个 bug。

  外边距塌陷图示：
  ![alt 外边距塌陷](https://pic1.zhimg.com/v2-6ac492e5d34a17790ea8662a9c9323cc_r.jpg)

  外边距塌陷解决方案：

  （1）给父元素设置边框或者内边距（不推荐）

  （2）触发 BFC，触发方法详见18题（推荐）
  ***
  外边距合并：两个<mark>相邻（兄弟关系）</mark>的块级元素，给上面的元素设置下外边距（margin-bottom），并同时给下面的元素设置上外边距（margin-top），两个元素之间的距离不等于这两个外边距之和，而是等于其中较大的一个外边距值，这种现象就叫做“外边距合并”。

  外边距合并图示：
  ![alt 外边距合并](https://pic3.zhimg.com/v2-39a61730c6f5c9a359c96f3a9d58499a_r.jpg)

  ❗ 注意：外边距合并只会发生在垂直方向上，而不会发生在水平方向上；只会发生在块级元素上，而不会发生在行内元素或行内块元素上。

  合并后外边距的计算方法：

  （1）正数 + 正数：外边距为两者中较大的一个

  （2）负数 + 负数：外边距为两者中绝对值较大的一个

  （3）正数 + 负数：外边距为两者相加的和

  外边距合并解决方案：

  （1）只设置其中一个元素的 margin 值即可（推荐）

  （2）给每一个元素都添加一个父元素，然后触发BFC（不推荐）

  > 详细资料可以参考：
  > [《CSS中外边距（margin）塌陷和合并的问题（初学者必看）》](https://zhuanlan.zhihu.com/p/337857229)
## 20.为什么要清除浮动？清除浮动的方式有哪些?
  两个嵌套（父子关系）的块级元素，子元素设置了浮动但父元素未设置高度时，父元素会发生<mark>高度塌陷</mark>（父元素高度为0），为了避免由于父元素高度塌陷而对后面元素的布局和定位产生的影响，就需要清除浮动。

  清除浮动的方式：

  （1）使用clear属性清除浮动：clear: left | right | both。
  ``` css
    .content::after{
      content: '';
      display: block;
      clear: both;
    }
  ```
  （2）通过触发 BFC 来清除浮动。
## 21.CSS 优化、提高性能的方法有哪些？
  <mark>加载性能</mark>：

  （1）CSS 压缩：将写好的 CSS 进行打包压缩，可以减少很多的体积。

  （2）尽量使用 CSS 单一样式：当需要下边距和左边距的时候，很多时候选择: margin: top 0 bottom 0，但实际上 margin-bottom: bottom、margin-left: left 执行的效率更高。

  （3）减少使用 @import，建议使用 link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。

  <mark>选择器性能</mark>：

  （1）关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS 选择器是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；

  （2）如果规则拥有 id 选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）。

  （3）避免使用通配规则，如*{}计算次数惊人！只对需要用到的元素进行选择。

  （4）尽量少的去对标签进行选择，而是用 class。

  （5）尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。

  （6）了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

  <mark>渲染性能</mark>：

  （1）慎重使用高性能属性：浮动、定位。

  （2）尽量减少页面重排、重绘。

  （3）去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少css文档体积。

  （4）属性值为0时，不加单位。

  （5）属性值为浮动小数0.**，可以省略小数点之前的0。

  （6）标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。

  （7）不使用 @import 前缀，它会影响 CSS 的加载速度。

  （8）选择器优化嵌套，尽量避免层级过深。

  （9）CSS 雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚，再使用。

  （10）正确使用 display 属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。

  （11）不滥用 web 字体。对于中文网站来说 WebFonts 可能很陌生，国外却很流行。web fonts 通常体积庞大，而且一些浏览器在下载 web fonts 时会阻塞页面渲染损伤性能。

  <mark>可维护性、健壮性</mark>：

  （1）将具有相同属性的样式抽离出来，整合并通过 class 在页面中进行使用，提高 CSS 的可维护性。

  （2）样式与内容分离：将 CSS 代码定义到外部 CSS 中。

  > 详细资料可以参考：
  > [《CSS 优化、提高性能的方法有哪些？》](https://www.zhihu.com/question/19886806)
  > [《CSS 优化，提高性能的方法》](https://www.jianshu.com/p/4e673bf24a3b)
## 22.浏览器是怎样解析 CSS 选择器的？——从上到下、从右到左
  > 详细资料可以参考：
  > [《探究 CSS 解析原理》](https://juejin.im/entry/5a123c55f265da432240cc90)
## 23.为什么不建议使用统配符初始化 CSS 样式？
  （1）使用通配符初始化CSS样式时需要把所有的标签都遍历一遍，当网站较大时，样式比较多，这样写就大大的加强了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一套初始化样式。

  （2）并不是所有标签都会有 padding 和 margin，因此对常见的具有默认 padding 和 margin 的元素初始化即可，并不需使用通配符来初始化。
## 24.元素竖向的百分比设定是相对于容器的高度吗？
  如果是 height 的话，是相对于包含块的高度。

  如果是 padding 或者 margin 竖直方向的属性则是相对于包含块的宽度。

  > 详细资料可以参考：
  > [《margin/padding百分比值的计算》](https://segmentfault.com/a/1190000016226944)
## 25.什么是响应式设计？响应式设计的基本原理是什么？
  响应式网站设计指的是一个网站能够适配多个终端，而不是为每一个终端做一个特定的版本。

  基本原理是通过<mark>媒体查询</mark>检测不同的设备屏幕尺寸然后再做处理。
  
  ❗ 注意：响应式设计要求页面头部必须有 meta 声明的 viewport。

  > 详细资料可以参考：
  > [《响应式布局原理》](https://blog.csdn.net/dreamerframework/article/details/8994741)
  > [《响应式布局的实现方法和原理》](http://www.mahaixiang.cn/wzsj/278.html)
## 26.如何修改 chrome 记住密码后自动填充表单的黄色背景？
  chrome 表单自动填充后，input 文本框的背景会变成黄色的，通过审查元素可以看到这是由于 chrome 会默认给自动填充的 input 表单加上 input: -webkit-autofill 私有属性，然后对其赋予以下样式：
  ``` css
  {
    background-color:rgb(250,255,189) !important;
    background-image:none !important;
    color:rgb(0,0,0) !important;
  }
  ```
  使用足够大的纯色内阴影来覆盖 input 输入框的黄色背景，处理如下
  ``` css
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{
    -webkit-box-shadow:000px 1000px white inset;
    border:1px solid #CCC !important;
  }
  ```
  > 详细资料可以参考：
  > [《去掉 chrome 记住密码后的默认填充样式》](https://blog.csdn.net/zsl_955200/article/details/78276209)
  > [《修改谷歌浏览器 chrome 记住密码后自动填充表单的黄色背景》](https://blog.csdn.net/M_agician/article/details/73381706)
## 27.让页面里的字体变清晰、变细用 CSS 怎么实现？
  webkit 内核的私有属性：<mark>-webkit-font-smoothing</mark>，用于字体抗锯齿，使用后字体看起来会更清晰舒服。

  在 MacOS 测试环境下面设置-webkit-font-smoothing: antialiased，但是这个属性仅仅是面向 MacOS，其他操作系统设置后无效。

  > 详细资料可以参考：
  > [《让字体变的更清晰 CSS 中-webkit-font-smoothing》](https://blog.csdn.net/huo_bao/article/details/50251585)
## 28.font-style 属性中 italic 和 oblique 的区别？
  italic：使用当前字体的斜体字体。

  oblique：单纯地让文字形状倾斜。

  如果当前字体没有对应的斜体字体，italic 就会被解析为 oblique。
## 29.谈谈你对移动端三个 viewport 的理解？
  第一个视口是布局视口（layout viewport），在移动端显示网页时，由于移动端的屏幕尺寸比较小，如果网页使用移动端的屏幕尺寸进行布局的话，那么整个页面的布局都会显示错乱。所以移动端浏览器提供了一个layout viewport布局视口的概念，使用这个视口来对页面进行布局展示，一般layout viewport的大小为980px，因此页面布局不会有太大的变化，我们可以通过拖动和缩放来查看到这个页面。

  第二个视口指的是视觉视口（visual viewport），visual viewport指的是移动设备上我们可见的区域的视口大小，一般为屏幕的分辨率的大小。visual viewport和layout viewport的关系，就像是我们通过窗户看外面的风景，视觉视口就是窗户，而外面的风景就是布局视口中的网页内容。

  第三个视口是理想视口（ideal viewport），由于layout viewport一般比visual viewport要大，所以想要看到整个页面必须通过拖动和缩放才能实现。所以又提出了ideal viewport的概念，ideal viewport下用户不用缩放和滚动条就能够查看到整个页面，并且页面在不同分辨率下显示的内容大小相同。ideal viewport其实就是通过修改layout viewport的大小，让它等于设备的宽度，这个宽度可以理解为是设备独立像素，因此根据ideal viewport设计的页面，在不同分辨率的屏幕下，显示应该相同。

  > 详细资料可以参考：
  > [《移动前端开发之 viewport 的深入理解》](https://www.cnblogs.com/2050/p/3877280.html)
  > [《说说移动前端中 viewport（视口）》](https://www.html.cn/archives/5975)
  > [《移动端适配知识你到底知多少》](https://juejin.im/post/5b6d21daf265da0f9d1a2ed7#heading-14)
## 30.overflow:scroll 不能平滑滚动的问题怎么处理？

  开启硬件加速：-webkit-overflow-scrolling: touch。

  > 详细资料可以参考：
  > [《解决页面使用 overflow:scroll 在 iOS 上滑动卡顿的问题》](https://www.jianshu.com/p/1f4693d0ad2d)
## 31.有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度，这样的布局如何实现？
  （1）外层 div 使用 position：relative 高度要求自适应的 div 使用 position: absolute、top: 100px、bottom: 0、left: 0、right: 0。

  （2）使用 flex 布局，设置主轴为竖轴，第二个 div 的 flex-grow 为1。

  > 详细资料可以参考：
  > [《有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度(三种方案)》](https://blog.csdn.net/xutongbao/article/details/79408522)
## 32.常用图片格式有哪些，分别什么时候用？
  （1）jpeg（jpg）：支持的颜色比较丰富，不支持透明效果，不支持动图，一般用来显示照片。

  （2）gif：支持的颜色比较少，支持简单透明，支持动图，适用颜色单一的图片、动图。
      
  （3）png：支持的颜色丰富，支持复杂透明，不支持动图，专为网页而生。

  （4）webp：这种格式是谷歌推出的专门用来表示网页中图片的一种格式。

  优点：在相同质量的文件下，它拥有更小的文件体积。因此它非常适合于网络图片的传输，因为图片体积的减少，意味着请求时间的减小，这样会提高用户的体验。
  
  缺点：存在兼容性问题。
      
  选取图片规则：效果一样用小的，效果不一样用效果好的。

  > 详细资料可以参考：
  > [《图片格式那么多，哪种更适合你？》](https://www.cnblogs.com/xinzhao/p/5130410.html)
## 33.什么是 Cookie 隔离（请求资源的时候不要让它带 cookie 怎么做）？——使用 CDN
  网站向服务器请求的时候，会自动带上 cookie，这样增加表头信息量，使请求变慢。

  如果将静态文件都放在主域名下，那么静态文件在请求的时候也会将带有的 cookie 的数据提交给服务器，非常浪费流量，所以<mark>不如隔离开，静态资源存放在 CDN 上</mark>。

  因为 cookie 有同源策略的限制，不能跨域提交请求，故使用非主域名的时候，请求头中就不会带有 cookie，这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的，同时这种方式不会将 cookie 传入服务器，也减少了服务器对 cookie 的处理分析环节，提高了服务器对 http 请求的解析速度。

  > 详细资料可以参考：
  > [《CDN 是什么？使用 CDN 有什么优势？》](https://www.zhihu.com/question/36514327?rf=37353035)
## 34.谈谈你对 CSS 雪碧图（精灵图）的理解？
  将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 中 background 的相关属性进行背景定位。利用雪碧图能很好地减少网页的 http 请求，从而很好的提高页面的性能。

  优点：

  （1）减少HTTP请求数，极大地提高页面加载速度。

  （2）增加图片信息重复度，提高压缩比，减少图片大小。

  （3）更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现。

  缺点：

  （1）图片合并麻烦。

  （2）维护麻烦，修改一个图片可能需要重新布局整个图片。
## 35.谈谈你对圣杯布局和双飞翼布局的理解？
  圣杯布局与双飞翼布局都是三栏布局的实现形式，二者的基本思想相同：使用<mark>浮动 + 负外边距</mark>实现，但是具体的实现过程又有一些细微的差别。
  #### 圣杯布局：
  基础HTML：
  ``` html
  <div class="container">
    <div class="center"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
  ```
  实现思路：

  1. 左中右都设为左浮动，然后设置中间区域的宽度为100%，此时，左区域和右区域会跳到下一行。

  2. 通过设置 margin-left 为负值让左区域和右区域与中间区域在同一行。

  3. 通过设置父容器的 padding 值，为左右两边留出空隙。

  4. 为左右区域开启相对定位，并设置相对应的 left | right 值，让左区域和右区域分别移动到两边。

  相关代码：
  ``` css
  .container{
    width: 100%;
    height: 100%;
    padding: 0 200px;
  }
  .container > div{
      height: 100%;
      float: left;
  }
  .left, .right{
      width: 200px;
  }
  .left{
      margin-left: -100%;
      position: relative;
      /* left 值与父容器的 padding 值相等 */
      left: -200px;
  }
  .right{
      margin-left: -200px;
      position: relative;
      /* right 值与父容器的 padding 值相等 */
      right: -200px;
  }
  .center{
      width: 100%;
  }
  ```

  圣杯布局的缺点：

  主区域最小宽度不能小于左区域的宽度，否则会使左区域掉到下一行

  如果其中一列内容高度拉长，其他两列的背景并不会自动填充。(借助等高布局正padding+负margin可解决)
  #### 双飞翼布局： 
  基础HTML：
  ``` html
  <div class="container">
    <div class="center"></div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
  ```
  实现思路：

  1. .container、.left、.right 三个部分都设为左浮动，然后设置 .container 的宽度为100%，此时，.left 和 .right 会跳到下一行。

  2. 通过设置 margin-left 为负值让 .left 和 .right 与 .container 在同一行。

  3. 为 .center 设置合适的左右外边距使其分别等于 .left 和 .right 的宽度。

  相关代码：
  ``` css
  .container, .left, .right{
    height: 100%;
    float: left;
  }
  .container{
    width: 100%;
  }
  .left, .right{
    width: 200px;
  }
  .left{
      margin-left: -100%;
  }
  .right{
      margin-left: -200px;
  }
  .center{
      height: 100%;
      margin: 0 200px;
  }
  ```

  双飞翼布局的缺点：多加一层 dom 树节点，增加渲染树生成的计算量。
  #### 两种布局实现方式的对比:
  1. 两种布局都是把主区域放在文档流最前面，使主区域优先加载。

  2. 两种布局实现的基本思想相同，都是使用浮动 + 负外边距实现。

  3. 两种布局对<mark>主区域的处理方式</mark>不同：圣杯布局使用 padding 以<mark>“向外扩”</mark>的方式来处理主区域，而双飞翼布局使用 margin 以<mark>“向内缩”</mark>的方式来处理主区域，显然，双飞翼布局更加容易理解。

  > 详细的资料可以参考：
  > [《几种常见的 CSS 布局》](https://juejin.im/post/5bbcd7ff5188255c80668028#heading-12)
## 36.transition 和 animation 的区别是什么？
  transition 作用于元素的<mark>样式属性</mark>，属性值和时间的关系是一个三次贝塞尔曲线，一般结合 transforms 使用。

  animation 作用于<mark>元素本身</mark>而不是样式属性，可以使用关键帧的概念，可以实现更自由的动画效果。

  > 详细资料可以参考：
  > [《CSSanimation 与 CSStransition 有何区别？》](https://www.zhihu.com/question/19749045)
  > [《CSS3Transition 和 Animation 区别及比较》](https://blog.csdn.net/cddcj/article/details/53582334)
  > [《CSS 动画简介》](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)
  > [《CSS 动画：animation、transition、transform、translate》](https://juejin.im/post/5b137e6e51882513ac201dfb)
## 37.min-width、max-width 和 min-height、max-height 属性间的覆盖规则？
  max-width 会覆盖 width，即使 width 是内联样式或者设置了 !important。

  min-width 会覆盖 max-width，此规则发生在 min-width 和 max-width 冲突的时候。
## 38.什么是替换元素？
  通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。img、object、video、iframe、textarea、input、select、label、button 都是典型的替换元素。
## 39.margin:auto 的填充规则？
  margin 的 auto 可不是摆设，是具有强烈的计算意味的关键字，用来计算元素对应方向应该获得的剩余间距大小。但是触发 margin: auto 计算有一个前提条件，就是 width 或 height 为 auto 时，元素是具有对应方向的自动填充特性的。

  填充规则：

  （1）如果一侧定值，一侧 auto，则 auto 为剩余空间大小。

  （2）如果两侧均是auto，则平分剩余空间。
## 40.无依赖绝对定位是什么？
  未设置 left | top | right | bottom 属性值的绝对定位称为“无依赖绝对定位”。
## 41.元素的层叠顺序？
  层叠顺序，英文称作 stacking order，表示元素发生层叠时有着特定的垂直显示顺序。

  ![alt 元素的层叠顺序](https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-15.png)
## 42.层叠准则？——谁大谁上、后来居上
  （1）谁大谁上：当具有明显的层叠水平标识的时候，如生效的 z-index 属性值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。

  （2）后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。
## 43.如何实现单、多行文本溢出的省略（...）？
  ``` css
  /*单行文本溢出*/
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /*多行文本溢出*/
  p {
    position: relative;
    line-height: 1.5em;
    /*高度为需要显示的行数 * 行高，比如这里我们显示两行，则为3*/
    height: 3em;
    overflow: hidden;
  }

  p:after {
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;
  }
  ```

  > 详细资料可以参考：
  > [《【CSS/JS】如何实现单行／多行文本溢出的省略》](https://zhuanlan.zhihu.com/p/30707916)
  > [《CSS 多行文本溢出省略显示》](https://juejin.im/entry/587f453e1b69e60058555a5f)
## 44.常见的元素隐藏方式有哪些？
  （1）使用 display:none 隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。

  （2）使用 visibility:hidden 隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件。

  （3）使用 opacity:0 将元素的不透明度设置为0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。

  （4）通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。

  （5）通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。

  （6）通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。❓

  （7）通过 transform: scale(0,0) 来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

  > 详细资料可以参考：
  > [《CSS 隐藏元素的八种方法》](https://juejin.im/post/584b645a128fe10058a0d625#heading-2)
## 45.CSS 如何实现上下固定中间自适应的布局？
  基础HTML：
  ``` html
  <div class="container">
    <div class="top"></div>
    <div class="middle"></div>
    <div class="bottom"></div>
  </div>
  ```
  实现方式共有以下3种：

  （1）使用绝对定位实现：
  ``` css
  .container{
    width: 600px;
    height: 400px;
    position: relative;
  }
  .top, .bottom{
    width: 100%;
    height: 100px;
    position: absolute;
  }
  .top{
    top: 0;
  }
  .bottom{
    bottom: 0;
  }
  .middle{
    width: 100%;
    position: absolute;
    top: 100px;
    bottom: 100px;
  }
  ```
  （2）使用 flex 布局实现：
  ``` css
  .container{
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
  }
  .top, .bottom{
    width: 100%;
    height: 100px;
  }
  .middle{
      width: 100%;
      flex-grow: 1;
  }
  ```
  （3）使用 grid 布局实现：
  ``` css
  .container{
    width: 600px;
    height: 400px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px auto 100px;
  }
  ```
  ❗ 注意：这种方式最简单，不需要再为上下两边的元素单独设置样式，只需要管父元素即可

  > 详细资料可以参考：
  > [《css 实现上下固定中间自适应布局》](https://www.jianshu.com/p/30bc9751e3e8)
## 46.CSS 两栏布局的实现方式有哪些？
  两栏布局：左边固定，右边自适应。

  实现方式共有以下5种：

  （1）使用浮动 + margin：将左边元素设置左浮动，设置右边元素的 margin-left 为左元素的宽度。
  ``` css
  .container{
    height: 600px;
  }

  .left{
    width: 200px;
    height: 100%;
    float: left;
  }

  .right{
    height: 100%;
    margin-left: 200px;
  }
  ```
  （2）使用绝对定位 + margin：父元素设置相对定位，左边元素设置为绝对定位，设置右边元素的 margin-left 为左元素的宽度。
  ``` css
  .container{
    height: 600px;
    position: relative;
  }

  .left{
    width: 200px;
    height: 100%;
    position: absolute;
  }

  .right{
    height: 100%;
    margin-left: 200px;
  }
  ```
  （3）利用绝对定位：父元素设置相对定位，右边元素设置为绝对定位，设置右边元素的 left 为左元素的宽度，其余方向为0。
  ``` css
  .container{
    height: 600px;
    position: relative;
  }

  .left{
    width: 200px;
    height: 100%;
  }

  .right{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 200px;
  }
  ```
  （4）使用 flex 布局：为父元素开启 flex 布局，将右边的元素的 flex-grow 设置为1。
  ``` css
  .container{
    height: 600px;
    display: flex;
  }

  .left {
    width: 200px;
    height: 100%;
  }

  .right {
    height: 100%;
    flex-grow: 1;
  }
  ```
  （5）使用 grid 布局：为父元素开启 grid 布局，并设置 grid-template-columns: 200px auto、grid-template-rows: 100%。
  ``` css
    .container{
      height: 600px;
      display: grid;
      /* 设置列宽，这里有两列，故设置两个值 */
      grid-template-columns: 200px auto;
      /* 设置行高，这里只有一行，故设置一个值 */
      grid-template-rows: 100%;
    }
  ```
  ❗ 注意：这种方式最简单，不需要再为左右两边的元素单独设置样式，只需要管父元素即可

  > 详细资料可以参考：
  > [《两栏布局 demo 展示》](http://cavszhouyou.top/Demo-Display/TwoColumnLayout/index.html)
## 47.CSS 三栏布局的实现方式有哪些？
  三栏布局：左右固定，中间自适应。

  实现方式共有以下6种：

  （1）使用浮动 + margin：左右两栏设置对应方向的浮动，中间一栏设置左右两个方向的 margin 值。
  ``` css
  .container{
    height: 600px;
  }

  .left, .right{
    width: 200px;
    height: 100%;
  }

  .left{
    float: left;
  }

  .right{
    float: right;
  }

  .center{
    height: 100%;
    margin: 0 200px;
  }
  ```
  ❗ 注意：使用这种方式，中间一栏必须放到最后。

  （2）使用绝对定位 + margin：左右两栏设置为绝对定位，中间设置对应方向大小的 margin 值。
  ``` css
  .container{
    height: 600px;
    position: relative;
  }

  .left, .right{
    width: 200px;
    height: 100%;
    position: absolute;
  }

  .right{
    top: 0;
    right: 0;
  }

  .center{
    margin:0 200px;
    height: 100%;
  }
  ```
  （3）使用 flex 布局：为父元素开启 flex 布局，将中间一栏的 flex-grow 设置为1。
  ``` css
  .container{
    height: 600px;
    display: flex;
  }

  .left, .right{
    width: 200px;
  }

  .center {
    flex-grow: 1;
  }
  ```
  （4）使用 grid 布局：为父元素开启 grid 布局，并设置 grid-template-columns: 200px auto 200px、grid-template-rows: 100%。
  ``` css
  .container{
    height: 600px;
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-template-rows: 100%;
  }
  ```
  ❗ 注意：这种方式最简单，不需要再为左中右的元素单独设置样式，只需要管父元素即可

  （5）使用使用圣杯布局，详情参见35题。
  
  （6）使用双飞翼布局，详情参见35题。
  > 详细资料可以参考：
  > [《三栏布局 demo 展示》](http://cavszhouyou.top/Demo-Display/ThreeColumnLayout/index.html)
## 48.CSS 中不同属性设置为百分比时对应的计算基准是什么？
  公式：当前元素某CSS属性值 = 基准 * 对应的百分比

  1. 元素的 position 为 relative 和 absolute 时，top 和 bottom、left 和 right 基准分别为包含块的 height、width，元素的 position 为 fixed 时，top 和 bottom、left 和 right 基准分别为初始包含块（也就是视口）的 height、width，移动设备较为复杂，基准为 Layout viewport 的 height、width

  2. 元素的 height 和 width 设置为百分比时，基准分别为包含块的 height 和 width

  3. 元素的 margin 和 padding 设置为百分比时，基准为包含块的 width（易错）

  4. 元素的 border-width，不支持百分比

  5. 元素的 text-indent，基准为包含块的 width

  6. 元素的 border-radius，基准为分别为自身的height、width

  7. 元素的 background-size，基准为分别为自身的height、width

  8. 元素的 translateX、translateY，基准为分别为自身的height、width

  9. 元素的 line-height，基准为自身的 font-size

  10. 元素的 font-size，基准为父元素字体
