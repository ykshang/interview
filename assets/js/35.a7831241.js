(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{488:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"模块化开发-amd、es6、commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发-amd、es6、commonjs"}},[s._v("#")]),s._v(" 模块化开发（AMD、ES6、CommonJS）")]),s._v(" "),t("p",[s._v("模块化编程是一种编程范式，它将复杂的应用程序划分为更小的、独立的、可重复使用的代码块，这些代码块被称为模块。\n每个模块都拥有其自身的功能和数据，它们通过定义清晰的接口与其他模块进行交互。"),t("br"),s._v("\n这种方法有助于代码的组织，提高了代码的复用性和可维护性，同时使得团队协作开发时可以更加清晰地分配任务。")]),s._v(" "),t("p",[t("strong",[s._v("优势")])]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("可维护性")]),s._v(" : 由于代码被分割成小块，修改一个模块时，不太可能影响到其他模块，这使得问题定位和代码修改更加简单。")]),s._v(" "),t("li",[s._v("复用性 : 模块可以独立于其他代码进行测试和重用，这减少了开发成本。")]),s._v(" "),t("li",[t("strong",[s._v("解耦")]),s._v(" : 模块之间的依赖关系被清晰地定义，减少了全局变量的使用，从而降低了代码之间的耦合度。")]),s._v(" "),t("li",[t("strong",[s._v("清晰的结构")]),s._v(" : 模块化有利于形成清晰的项目结构，使得新加入项目的成员能够更快地理解和上手。")]),s._v(" "),t("li",[s._v("测试 : 由于模块是独立的，可以更容易地进行单元测试，提高代码质量。")])]),s._v(" "),t("p",[t("strong",[s._v("在 JavaScript 中，有几种常见的方式可以实现模块化开发：")])]),s._v(" "),t("h2",{attrs:{id:"_1-命名空间模式-namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命名空间模式-namespace"}},[s._v("#")]),s._v(" 1. 命名空间模式（namespace）")]),s._v(" "),t("p",[s._v("通过创建一个某个值域下的"),t("strong",[s._v("对象")]),s._v("或**函数（闭包）**作为命名空间，将相关的变量和函数放置在该对象下。这种方式可以有效避免命名冲突，但需要手动管理命名空间，容易造成代码的冗余和不易维护。")]),s._v(" "),t("h2",{attrs:{id:"_2-amd-asynchronous-module-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-amd-asynchronous-module-definition"}},[s._v("#")]),s._v(" 2. AMD（Asynchronous Module Definition）")]),s._v(" "),t("p",[s._v("是一种异步模块定义的规范，主要用于在浏览器中异步加载模块。使用 AMD 规范的库和工具有 "),t("strong",[s._v("RequireJS")]),s._v("。它允许定义模块，并通过异步加载依赖模块，以实现模块化的开发和加载。")]),s._v(" "),t("p",[t("strong",[s._v("缺点是代码嵌套层级加深、繁琐不好维护，不如 CommonJS 和 ES6 好用")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// define.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dependency1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dependency2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("dep1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dep2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块逻辑，可以使用dep1和dep2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("doSomething")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用依赖项进行操作")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"define"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("definedModule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用define模块")]),s._v("\n  definedModule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("doSomething")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"_3-commonjs-单例模式-缓存机制-同步加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-commonjs-单例模式-缓存机制-同步加载"}},[s._v("#")]),s._v(" 3. CommonJS "),t("Badge",[s._v("单例模式")]),s._v(" "),t("Badge",[s._v("缓存机制")]),s._v(" "),t("Badge",[s._v("同步加载")])],1),s._v(" "),t("p",[s._v("是一种同步的模块加载规范，主要用于 Node.js 环境。使用 CommonJS 的模块可以直接导入和导出模块，以供其他模块使用。使用 module.exports 和 exports 导出，使用 require()导入。")]),s._v(" "),t("p",[s._v("通常依赖 node.js 环境，"),t("code",[s._v("browserify")]),s._v(" 插件主要用来将 Common.js 转化为浏览器可以识别的语法")]),s._v(" "),t("h3",{attrs:{id:"导出语法-module-exports-和-exports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出语法-module-exports-和-exports"}},[s._v("#")]),s._v(" 导出语法 module.exports 和 exports")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[t("strong",[s._v("一个文件一半就默认是一个模块，一个模块里只能有一个module.exports，但是exports可以有多个")])]),s._v(" "),t("p",[s._v("语法1 ："),t("code",[s._v("module.exports = 变量名")]),s._v(" 【只适用于导出一个变量】")]),s._v(" "),t("p",[s._v("语法2 ："),t("code",[s._v("module.exports = {key:value,key:value,xxx}")]),s._v(" 【通用】")]),s._v(" "),t("p",[s._v("语法2可以简写成 "),t("code",[s._v("module.exports = {value,value,xxx}")]),s._v(" 【直接把变量放进来】")])]),s._v(" "),t("h4",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明一个变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" abc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明一个方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("sayHello")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world 你好哈哈哈"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只能暴露一个，如果写多次，就会被覆盖 : 下面的两行只能留一行")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" abc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sayHello\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过对象的方式导出变量和方法，起别名")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("abc1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" abc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sayHello1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" sayHello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过对象的方式导出变量和方法")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  abc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  sayHello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nexports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("abc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sayHello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h3",{attrs:{id:"导入语法-require"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入语法-require"}},[s._v("#")]),s._v(" 导入语法 require")]),s._v(" "),t("p",[s._v("特点："),t("b",[s._v("单例模式")]),s._v("、"),t("b",[s._v("缓存机制")]),s._v("、"),t("b",[s._v("同步加载")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// counter.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("increment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\njs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" counter1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./counter"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" counter2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./counter"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 虽然使用require引入了两次，但是使用的是同一份实例")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("counter1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 1")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("counter2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"_4-es6-模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-es6-模块化"}},[s._v("#")]),s._v(" 4. ES6 模块化")]),s._v(" "),t("p",[s._v("在 ECMAScript 6 中，引入了原生的模块化支持。可以使用 "),t("strong",[s._v("import")]),s._v(" 关键字导入模块，使用 "),t("strong",[s._v("export")]),s._v(" 关键字导出模块。ES6 模块化有静态分析的优势，可以在编译时确定模块的依赖关系，提供更好的性能和开发体验。")]),s._v(" "),t("p",[s._v("ES6 模块化主要由 "),t("strong",[s._v("export")]),s._v("和 "),t("strong",[s._v("import")]),s._v(" 两个命令构成：")]),s._v(" "),t("h3",{attrs:{id:"导出-export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出-export"}},[s._v("#")]),s._v(" 导出 export")]),s._v(" "),t("p",[s._v("用于导出，即哪些变量、函数或类可以被外部访问。有多种形式：")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("需要注意：默认导出的时候，如果有对象或函数未被添加到导出清单里，需要使用 "),t("strong",[s._v("* as xx_name")]),s._v(" 语法引入该部分。再用 "),t("strong",[s._v("xx_name.unExportModule")]),s._v(" 去使用")])]),s._v(" "),t("h4",{attrs:{id:"_1-命名导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命名导出"}},[s._v("#")]),s._v(" 1. 命名导出")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" m1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" …"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-默认导出-每个模块只能有一个默认导出-。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-默认导出-每个模块只能有一个默认导出-。"}},[s._v("#")]),s._v(" 2. 默认导出（每个模块只能有一个默认导出）。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" expression"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" m1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" …"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_3-导出一个外部文件-相当于把一个文件引入后-再导出其内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-导出一个外部文件-相当于把一个文件引入后-再导出其内容"}},[s._v("#")]),s._v(" 3. 导出一个外部文件，相当于把一个文件引入后，再导出其内容")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" m1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"导入-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入-import"}},[s._v("#")]),s._v(" 导入 import")]),s._v(" "),t("p",[s._v("用于引入其他模块，返回的对象为 Promise，导入方式主要有：")]),s._v(" "),t("h4",{attrs:{id:"_1-按需导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-按需导入"}},[s._v("#")]),s._v(" 1. 按需导入")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" m1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-全部导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-全部导入"}},[s._v("#")]),s._v(" 2. 全部导入")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" module "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" module1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_3-动态导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态导入"}},[s._v("#")]),s._v(" 3. 动态导入")]),s._v(" "),t("p",[s._v("动态导入的优点就是按需异步加载。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./moduleA"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 module do some thing")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("除了以上提到的方式，现代的前端开发中还常用的模块化工具有 "),t("strong",[s._v("webpack")]),s._v(" 和 "),t("strong",[s._v("rollup")]),s._v("。它们可以将多个模块打包成一个文件，以"),t("strong",[s._v("减少网络请求")]),s._v("，同时支持各种模块化规范，提供了更多的功能和灵活性。也可以通过拆分模块来实现打包成多个文件，以避免"),t("strong",[s._v("文件体积过大")]),s._v("，实现"),t("strong",[s._v("按需加载")]),s._v("。")]),s._v(" "),t("p",[s._v("选择适合的模块化方式主要取决于项目的需求和环境。在现代的 JavaScript 开发中，使用 "),t("strong",[s._v("ES6 模块化是最推荐的方式")]),s._v("，但也可以根据具体情况选择其他方式。")]),s._v(" "),t("h2",{attrs:{id:"_5-es6和commonjs的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-es6和commonjs的区别"}},[s._v("#")]),s._v(" 5. ES6和CommonJS的区别")]),s._v(" "),t("h3",{attrs:{id:"_1-语法不一样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法不一样"}},[s._v("#")]),s._v(" 1. 语法不一样")]),s._v(" "),t("ul",[t("li",[s._v("CommonJS：导出模块"),t("code",[s._v("module.exports")]),s._v(" 或 "),t("code",[s._v("exports")]),s._v("，引入模块： "),t("code",[s._v("require")])]),s._v(" "),t("li",[s._v("ES6模块：导出模块"),t("code",[s._v("export")]),s._v("，引入模块"),t("code",[s._v("import")])])]),s._v(" "),t("h3",{attrs:{id:"_2-运行环境不一样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行环境不一样"}},[s._v("#")]),s._v(" 2. 运行环境不一样")]),s._v(" "),t("ul",[t("li",[s._v("CommonJS："),t("strong",[s._v("依赖Node.js环境")]),s._v(" 或者支持CommonJS的运行环境")]),s._v(" "),t("li",[s._v("ES6模块：可以直接运行在浏览器环境中，可以通过 "),t("strong",[s._v("Babel")]),s._v(" 等工具转化为浏览器可以执行的")])]),s._v(" "),t("h3",{attrs:{id:"_3-功能特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-功能特性"}},[s._v("#")]),s._v(" 3. 功能特性")]),s._v(" "),t("ul",[t("li",[s._v("CommonJS：同步加载，动态导入不方便，可以引入第三方库去实现。")]),s._v(" "),t("li",[s._v("ES6模块：异步加载，静态分析，支持运行时动态导入")])])])}),[],!1,null,null,null);t.default=e.exports}}]);