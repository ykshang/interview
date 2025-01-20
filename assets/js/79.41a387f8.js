(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{533:function(t,o,e){"use strict";e.r(o);var s=e(3),r=Object(s.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"同源策略、cors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#同源策略、cors"}},[t._v("#")]),t._v(" 同源策略、CORS")]),t._v(" "),o("h2",{attrs:{id:"同源策略"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),o("p",[o("strong",[t._v("同源策略")]),t._v(" 是 Web 安全的一个基本概念，它由浏览器实施，用来限制一个源（origin）的文档或脚本如何与另一个源的资源进行交互。它限制了 Web 页面中的 JavaScript 代码如何与不同源（域名、协议、端口）的资源进行交互。同源策略的实施是为了保护用户的隐私和安全，防止恶意网站通过代码进行跨站点攻击。")]),t._v(" "),o("p",[o("strong",[t._v("同源策略限制了以下操作：")])]),t._v(" "),o("ul",[o("li",[t._v("脚本访问不同源上的文档内容：JavaScript 无法直接访问来自其他域的文档对象模型（DOM），因此无法读取或操作页面上的数据。")]),t._v(" "),o("li",[t._v("跨域请求：不同源的网站之间不能直接进行 XMLHttpRequest 或 fetch 等网络请求，这是为了防止恶意网站获取用户的敏感信息或执行未经授权的操作。")]),t._v(" "),o("li",[t._v("Cookie、LocalStorage 和 IndexedDB 访问限制：不同源的页面无法读取或写入彼此的 Cookie、LocalStorage 或 IndexedDB 存储。")]),t._v(" "),o("li",[t._v("脚本访问跨源资源：脚本无法引用其他域上的资源文件（例如 JavaScript、CSS 和图像），除非目标域明确允许这样的访问。")]),t._v(" "),o("li",[t._v("同源策略可以确保用户的数据和操作受到保护，但它也带来了一些开发挑战，特别是在构建跨域应用程序时。为了克服同源策略的限制，可以使用一些解决方案，例如 JSONP、CORS、代理服务器和 WebSockets。")])]),t._v(" "),o("h1",{attrs:{id:"cors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),o("p",[o("strong",[t._v("CORS（Cross-Origin Resource Sharing）")]),t._v(" 是一种机制，允许服务器在响应中设置 HTTP 头来指定哪些源（域）具有权限访问资源。它用于解决跨域请求的安全限制问题。")]),t._v(" "),o("p",[t._v("要通过配置 HTTP 头来启用 CORS，服务器需要在响应中添加特定的 HTTP 头。")]),t._v(" "),o("p",[o("strong",[t._v("以下是常见的 CORS 相关头的配置：")])]),t._v(" "),o("ul",[o("li",[o("code",[t._v("Access-Control-Allow-Origin")]),t._v("：指定哪些源可以访问资源。可以设置为具体的域名，例如 Access-Control-Allow-Origin: https://example.com，或设置为*表示允许任何来源访问。这个头是必需的，否则默认情况下浏览器会阻止访问。")]),t._v(" "),o("li",[o("code",[t._v("Access-Control-Allow-Methods")]),t._v("：指定允许的 HTTP 方法。例如，Access-Control-Allow-Methods: GET, POST, PUT, DELETE。")]),t._v(" "),o("li",[o("code",[t._v("Access-Control-Allow-Headers")]),t._v("：指定允许的自定义 HTTP 头。例如，Access-Control-Allow-Headers: Content-Type, Authorization。")]),t._v(" "),o("li",[o("code",[t._v("Access-Control-Expose-Headers")]),t._v("：指定哪些 HTTP 头可以暴露给客户端。默认情况下，只有简单的 HTTP 头（如 Cache-Control、Content-Language、Content-Type 等）会被暴露给客户端。")])]),t._v(" "),o("p",[t._v("为了启用 CORS，服务器应该在处理请求时检查请求头中的 Origin 字段，并根据需要设置上述 CORS 相关的响应头。这样，浏览器就能根据响应头信息判断是否允许跨域请求。请注意，CORS 必须由服务器进行配置，客户端无法手动启用或禁用。")])])}),[],!1,null,null,null);o.default=r.exports}}]);