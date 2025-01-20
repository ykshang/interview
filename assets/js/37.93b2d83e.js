(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{489:function(t,s,n){"use strict";n.r(s);var a=n(3),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"事件绑定、冒泡、捕获、委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定、冒泡、捕获、委托"}},[t._v("#")]),t._v(" 事件绑定、冒泡、捕获、委托")]),t._v(" "),s("p",[t._v("事件捕获和事件冒泡是JavaScript中处理事件的两种不同的机制。")]),t._v(" "),s("p",[s("strong",[t._v("事件绑定")]),t._v(" 是指给一个或一组元素注册事件监听事件，以便触发事件时可以执行对应的处理函数")]),t._v(" "),s("p",[s("strong",[t._v("事件捕获")]),t._v("是指从"),s("code",[t._v("最外层的元素")]),t._v("向"),s("code",[t._v("目标元素")]),t._v("进行 "),s("strong",[t._v("事件传递")]),t._v(" 的过程。当一个事件发生时，会先经过最外层的元素，然后逐级向下传递，直到达到最具体的元素。")]),t._v(" "),s("p",[s("strong",[t._v("事件冒泡")]),t._v("是指从"),s("code",[t._v("目标元素")]),t._v("向"),s("code",[t._v("最外层的元素")]),t._v("进行 "),s("strong",[t._v("事件传递")]),t._v(" 的过程。当一个事件发生时，会先触发最具体的元素上的事件处理函数，然后逐级向上冒泡，直到达到最外层的元素。")]),t._v(" "),s("p",[t._v("在Javascript中，事件会先通过事件捕获的阶段，然后再通过事件冒泡的阶段。")]),t._v(" "),s("p",[t._v("你可以使用event.stopPropagation()方法来停止事件的传播，这样事件就不会继续向上传播。或者你也可以使用event.preventDefault()方法来阻止事件的默认行为。")]),t._v(" "),s("p",[s("strong",[t._v("阻止事件冒泡")]),t._v(" 可以使用event对象的"),s("code",[t._v("stopPropagation()")]),t._v("方法。在事件处理程序中调用该方法可以停止事件的继续传播。例如：")]),t._v(" "),s("p",[t._v("在这个例子中，当元素被点击时，事件不会继续传播到父元素或其他元素。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他业务代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("strong",[t._v("事件委托（Event delegation）")]),t._v(" 是一种在开发中常用的处理事件的技术。它利用事件冒泡的原理，在"),s("strong",[t._v("父元素上监听事件")]),t._v("，然后通过判断"),s("strong",[t._v("事件来源")]),t._v("来执行相应的操作。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("优点")]),t._v("：使用事件委托的主要优点是减少了事件处理函数的数量，提高了性能和内存占用。当页面中有大量相似的子元素需要绑定事件时，使用事件委托可以将事件监听器绑定到父元素上，而不是每个子元素上，从而避免了为每个子元素都创建一个事件处理函数的开销。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("缺点")]),t._v("：事件委托也有一些限制，例如事件冒泡的机制和事件源的判断需要额外的处理。此外，由于事件委托将事件监听器绑定到父元素上，因此在要委托的父元素被移除时，需要手动取消事件委托。")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原生")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event.target 中可以获取到具体的触发的子元素")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" targetDom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);