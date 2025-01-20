(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{521:function(t,_,v){"use strict";v.r(_);var s=v(3),e=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-协议"}},[t._v("#")]),t._v(" Http 协议")]),t._v(" "),_("h2",{attrs:{id:"_1-核心概念和工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-核心概念和工作原理"}},[t._v("#")]),t._v(" 1. 核心概念和工作原理")]),t._v(" "),_("p",[t._v("Http（超文本传输协议）是一种用于在网络上进行通信的协议。 它是用于在 Web 浏览器和 Web 服务器之间传输超文本文档的基础协议。默认使用"),_("code",[t._v("80端口")]),t._v("。")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("客户端和服务器之间的请求/响应模型")]),t._v("：客户端发送一个 Http 请求到服务器，服务器处理该请求并返回一个 Http 响应。")]),t._v(" "),_("li",[_("strong",[t._v("请求方法")]),t._v("：Http 定义了一组请求方法，包括 Get、Post、Put、Delete 等。这些方法用于指定请求的目的以及对资源的处理方式。")]),t._v(" "),_("li",[_("strong",[t._v("URL")]),t._v("（统一资源定位符）：Http 使用 URL 来标识要请求或响应的资源。URL 由协议、服务器地址、端口和资源路径组成。")]),t._v(" "),_("li",[_("strong",[t._v("请求头和响应头")]),t._v("：Http 请求和响应都包含一组头部信息。请求头包含有关请求的元数据，如请求方法、请求主机等。响应头包含关于响应的元数据，如状态码、内容类型等。")]),t._v(" "),_("li",[_("strong",[t._v("状态码")]),t._v("：Http 响应包含一个状态码，用于指示请求的处理结果。常见的状态码包括 200（请求成功）、404（未找到）和 500（服务器内部错误）等。")]),t._v(" "),_("li",[_("strong",[t._v("内容编码")]),t._v("：Http 支持使用不同的编码格式来传输数据。常见的编码方式包括 gzip、deflate 和 br 等，用于压缩数据的大小以提高传输效率。")]),t._v(" "),_("li",[_("strong",[t._v("Cookies")]),t._v(" 和"),_("strong",[t._v("Sessions")]),t._v(" ：Http 通过使用 Cookies 或 Sessions 来维护状态。Cookies 是服务器在客户端存储的小段信息，用于跟踪用户的状态，而 Sessions 是由服务器维护的与用户相关的数据。")]),t._v(" "),_("li",[_("strong",[t._v("缓存")]),t._v("：Http 允许客户端和服务器使用缓存来减少重复请求和提高性能。客户端可以使用响应头中的 Cache-Control 字段来控制缓存策略。")]),t._v(" "),_("li",[_("strong",[t._v("安全性")]),t._v("：Http 可以通过 Https（Http Secure）来提供安全的通信，使用 TLS 或 SSL 加密数据以防止窃听和篡改。")])]),t._v(" "),_("h2",{attrs:{id:"_2-请求类型有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求类型有哪些"}},[t._v("#")]),t._v(" 2. 请求类型有哪些?")]),t._v(" "),_("p",[t._v("Http 的请求方法有 Get、Post、Put 和 Delete 等。")]),t._v(" "),_("h2",{attrs:{id:"_3-分别描述一下-get、post、put-和-delete。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-分别描述一下-get、post、put-和-delete。"}},[t._v("#")]),t._v(" 3. 分别描述一下 Get、Post、Put 和 Delete。")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("Get 方法用于获取资源")]),t._v("，即从服务器端获取特定资源的信息。该方法的请求参数通过 URL 的查询字符串传递，通常用于读取数据。Get 方法是幂等的，即多次执行的结果应该是相同的，不会对资源产生影响。")]),t._v(" "),_("li",[_("strong",[t._v("Post 方法用于向服务器提交数据，以创建新的资源")]),t._v("。该方法的请求参数通常通过请求体传递，用于向服务器发送数据，比如提交表单、上传文件等。Post 方法不是幂等的，即多次执行可能会创建多个相同的资源。")]),t._v(" "),_("li",[_("strong",[t._v("Put 方法用于更新资源，即向服务器更新指定资源的信息")]),t._v("。该方法的请求参数也通过请求体传递，用于更新服务器端资源的数据。Put 方法是幂等的，即多次执行的结果应该是相同的。")]),t._v(" "),_("li",[_("strong",[t._v("Delete 方法用于删除资源，即请求服务器删除指定资源")]),t._v("。该方法通常不包含请求体，直接通过 URL 标识要删除的资源。Delete 方法是幂等的，即多次执行对同一资源的 Delete 请求不会产生额外的影响。")])]),t._v(" "),_("p",[t._v("这些 Http 请求方法在前端开发中经常被使用，掌握它们的作用和用法对于开发的网络请求非常重要。")]),t._v(" "),_("h3",{attrs:{id:"_3-1-get-请求和-post-请求的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-get-请求和-post-请求的区别"}},[t._v("#")]),t._v(" 3.1. Get 请求和 Post 请求的区别?")]),t._v(" "),_("p",[t._v("Get 请求和 Post 请求是 Http 协议中最常用的两种请求方法。")]),t._v(" "),_("p",[_("strong",[t._v("Get 请求用于从服务器获取指定资源的数据")]),t._v("。当浏览器请求一个 URL 时，它通常发送一个 Get 请求。Get 请求的参数是在请求的 URL 中以查询字符串的形式发送的。这些参数可以通过在 URL 中添加键值对来传递给服务器。Get 请求是幂等的，也就是说多次发送相同的 Get 请求不会对服务器产生任何副作用，并且可以被缓存。")]),t._v(" "),_("p",[_("strong",[t._v("Post 请求用于向服务器提交数据")]),t._v(" ，例如表单数据。Post 请求的参数是通过请求正文发送的，而不是直接在 URL 中传递。Post 请求可以发送大量数据，且不会像 Get 请求那样对 URL 长度有限制。Post 请求不是幂等的，多次发送相同的 Post 请求可能会导致服务器上的状态发生改变。")]),t._v(" "),_("h3",{attrs:{id:"_3-2-get-和-post-请求在以下方面存在区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-get-和-post-请求在以下方面存在区别"}},[t._v("#")]),t._v(" 3.2. Get 和 Post 请求在以下方面存在区别：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("参数传递方式")]),t._v("：Get 请求将参数以"),_("strong",[t._v("查询字符串")]),t._v("的形式附加到 URL 上，而 Post 请求"),_("strong",[t._v("将参数放在请求正文中")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("数据体积")]),t._v("：Get 请求的"),_("strong",[t._v("数据大小受 URL 长度限制")]),t._v("，通常用于获取少量数据；而 Post 请求可以"),_("strong",[t._v("发送大量数据")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("安全性")]),t._v("：Get 请求"),_("strong",[t._v("将参数暴露在 URL 中")]),t._v("，因此不适合传输敏感数据；Post 请求将参数放在请求正文中，相对更安全。")]),t._v(" "),_("li",[_("strong",[t._v("幂等性")]),t._v("：Get 请求是"),_("strong",[t._v("幂等")]),t._v("的，"),_("strong",[t._v("多次发送相同的 Get 请求不会对服务器产生任何副作用")]),t._v("；Post 请求不是幂等的，多次发送相同的 Post 请求可能会导致服务器状")])]),t._v(" "),_("h2",{attrs:{id:"_4-常见的状态码及其含义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-常见的状态码及其含义"}},[t._v("#")]),t._v(" 4. 常见的状态码及其含义")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("1xx（信息类状态码）：")]),t._v(" 表示请求已接收，需要客户端继续操作。")]),t._v(" "),_("ul",[_("li",[t._v("100（继续）：表示服务器已接收到请求的初始部分，客户端可以继续发送请求的剩余部分。")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("2xx（成功状态码）：")]),t._v(" 表示请求已成功被服务器接收、理解和处理。")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("200（成功）")]),t._v("：表示请求已成功。常用于 GET 和 POST 请求。")])]),t._v(" "),_("li",[_("p",[t._v("201（已创建）：表示请求已经被服务器成功处理，并且创建了新的资源。")])]),t._v(" "),_("li",[_("p",[t._v("204（无内容）：表示服务器成功处理了请求，但没有返回任何内容。")])])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("3xx（重定向状态码）：")]),t._v(" 表示需要进一步的操作才能完成请求。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("301（永久重定向）：表示请求的资源已被永久移动到新位置。")])]),t._v(" "),_("li",[_("p",[t._v("302（临时重定向）：表示请求的资源已被暂时移动到新位置。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("304（未修改）")]),t._v("：表示客户端发送的请求资源未被修改。即访问的之前的缓存")])])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("4xx（客户端错误状态码）：")]),t._v(" 表示客户端发送的请求有错误。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("400（错误请求）：表示客户端发送的请求语法有误。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("401 （未授权）")]),t._v("：表示请求需要身份验证，或者没有权限访问")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("404 （未找到）")]),t._v("：表示请求的资源不存在。一般是 js、html、css、图片等资源未找到，也有可能是暴漏给前端的接口未找到")])])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("5xx（服务器错误状态码）：")]),t._v(" 表示服务器在处理请求时发生了错误。")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("500 （服务器内部错误）")]),t._v("：表示服务器在执行请求时遇到了错误。一般为代码报错，大多数情况下为数据问题、空指针、数组下标越界等")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("502（Bad Gateway）")]),t._v("：即错误的网关 ‌，一般为后端服务接口未找到，发包的时候，缺少依赖的下游接口服务。")])]),t._v(" "),_("li",[_("p",[t._v("503 （服务不可用）：表示服务器暂时无法处理请求，通常是因为服务器过载或正在进行维护。")])])])])]),t._v(" "),_("p",[t._v("这些状态码帮助客户端了解服务器对请求的处理情况，并根据不同的状态码采取相应的操作。")]),t._v(" "),_("h2",{attrs:{id:"_5-常见的-http-头及作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-常见的-http-头及作用"}},[t._v("#")]),t._v(" 5. 常见的 HTTP 头及作用")]),t._v(" "),_("p",[_("strong",[t._v("HTTP 头是 HTTP 协议中的一部分，用于在请求和响应中传递附加的信息。")]),t._v(" HTTP 头由字段名和字段值组成，用冒号分隔，每个字段占据一行。")]),t._v(" "),_("p",[_("strong",[t._v("以下是几个常见的 HTTP 头字段及其作用：")])]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("User-Agent")]),t._v(" ：指明发送请求的客户端应用程序的类型和版本。服务器可以根据这个头字段来判断用户的设备或浏览器类型，以提供适合的内容。")]),t._v(" "),_("p",[t._v("例："),_("code",[t._v("User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Content-Type")]),t._v(" ：指定请求或响应中传输的数据的 MIME 类型。对于请求，它告诉服务器请求正文的内容类型；对于响应，它告诉浏览器响应正文的内容类型。")]),t._v(" "),_("p",[t._v("例："),_("code",[t._v("Content-Type: application/json")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Content-Length")]),t._v(" ：指定请求或响应正文的字节数。服务器可以使用此字段来确定正文的长度，从而正确解析请求或响应。")]),t._v(" "),_("p",[t._v("例："),_("code",[t._v("Content-Length: 348")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Accept")]),t._v(" ：指定客户端能够处理的响应内容类型。浏览器在发送请求时使用此字段，以告诉服务器它可以接受哪些类型的响应。")]),t._v(" "),_("p",[t._v("例："),_("code",[t._v("Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,_/_;q=0.8")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Authorization")]),t._v(" ：用于在请求中传递身份验证信息，通常用于保护需要授权访问的资源。")]),t._v(" "),_("p",[t._v("例："),_("code",[t._v("Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Cookie")]),t._v(" ：用于在请求中传递保存在客户端的会话信息。服务器可以使用此字段来识别和验证用户。")]),t._v(" "),_("p",[t._v("例："),_("code",[t._v("Cookie: sessionId=ABC123")])])])]),t._v(" "),_("h2",{attrs:{id:"_6-http-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-http-2"}},[t._v("#")]),t._v(" 6. HTTP/2")]),t._v(" "),_("p",[t._v("HTTP/2 是 HTTP 协议的一种新版本，它是对之前的 HTTP/1.1 进行改进和优化得来的。")]),t._v(" "),_("p",[_("strong",[t._v("下面是 HTTP/2 相对 HTTP/1.1 的一些改进：")])]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("多路复用")]),t._v("（Multiplexing）：HTTP/2 允许在同一个连接上进行多个请求和响应的并行传输，避免了 HTTP/1.1 中的序列化请求和阻塞的问题，提高了性能和效率。")]),t._v(" "),_("li",[_("strong",[t._v("二进制分帧")]),t._v("（Binary Framing）：HTTP/2 采用了二进制格式对请求和响应进行分帧，与 HTTP/1.1 的文本格式相比，二进制分帧更高效，并且容易解析和处理。")]),t._v(" "),_("li",[_("strong",[t._v("Header 压缩")]),t._v("（Header Compression）：HTTP/2 使用了 HPACK 算法对请求和响应的 Header 进行压缩，减少了数据的传输量，提高了性能。")]),t._v(" "),_("li",[_("strong",[t._v("服务器主动推送")]),t._v("（Server Push）：HTTP/2 支持服务器主动向客户端推送资源，避免了客户端重复发送请求的问题，加快了页面加载速度。")]),t._v(" "),_("li",[_("strong",[t._v("优先级")]),t._v("（Priority）：HTTP/2 引入了请求的优先级概念，并允许客户端设置请求的优先级，服务器可以根据优先级来决定响应的顺序，提高了响应的效率。")])]),t._v(" "),_("p",[t._v("总的来说，HTTP/2 相对于 HTTP/1.1 在性能、效率和安全性等方面都有了很大的改进，可以更好地满足现代 web 应用的需求。")]),t._v(" "),_("h2",{attrs:{id:"_7-http-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-http-3"}},[t._v("#")]),t._v(" 7. HTTP/3")]),t._v(" "),_("p",[_("strong",[t._v("HTTP/3 是一种用于传输超文本传输协议（HTTP）数据的协议。")]),t._v(" 它是由互联网工程任务组（IETF）制定的，旨在提供更快和更安全的网络通信。")]),t._v(" "),_("p",[_("strong",[t._v("HTTP/3 使用了一种名为 QUIC（Quick UDP Internet Connections）的传输协议")]),t._v("。QUIC 是一种基于用户数据报协议（UDP）的传输协议，它使用了一种称为 DTLS（Datagram Transport Layer Security）的安全协议来提供端到端的加密和认证。")]),t._v(" "),_("h3",{attrs:{id:"_7-1-quic-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-quic-协议"}},[t._v("#")]),t._v(" 7.1 Quic 协议")]),t._v(" "),_("p",[_("strong",[t._v("QUIC 相对于传统的基于传输控制协议（TCP）的 HTTP 协议有很多优势")]),t._v("。它具有更低的延迟和更好的拥塞控制机制，同时还支持多路复用（Multiplexing）和零往返时间（Zero Round Trip Time）握手等特性，从而提高了性能和用户体验。")]),t._v(" "),_("p",[t._v("需要注意的是，HTTP/3 和 QUIC 仍处于发展阶段，并且尚未被广泛部署和支持。")]),t._v(" "),_("p",[t._v("QUIC 是一种快速的、基于用户数据报协议（UDP）的传输协议，旨在解决 TCP 协议的一些问题。QUIC 通过将多个网络层协议（例如 TLS 协议）和应用层协议（例如 HTTP）合并到一个协议中，实现了更快的连接建立和数据传输。")]),t._v(" "),_("p",[_("strong",[t._v("QUIC协议相比于TCP协议，具有以下优势：")])]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("连接建立的延迟更低")]),t._v("：QUIC使用基于UDP的快速连接建立，并通过减少网络往返次数来降低延迟。")]),t._v(" "),_("li",[_("strong",[t._v("基于流的多路复用")]),t._v("：QUIC支持将数据划分为多个流，可同时发送多个流的数据。这种多路复用提高了数据传输效率，避免了TCP中的队头堵塞问题。")]),t._v(" "),_("li",[_("strong",[t._v("无连接的可靠数据传输")]),t._v("：QUIC以数据包为单位发送数据，并使用自己的可靠性机制来确保数据的可靠传输，而不依赖于TCP的可靠传输机制。")]),t._v(" "),_("li",[_("strong",[t._v("移动网络优化")]),t._v("：QUIC通过减少连接建立的延迟和传输过程中的抖动，提供了对移动网络连接的更好适应性。")])]),t._v(" "),_("p",[t._v("通过使用QUIC协议，HTTP/3改进了传输性能和用户体验，特别是在高延迟和不稳定网络环境下，可以提供更快速和可靠的连接。")])])}),[],!1,null,null,null);_.default=e.exports}}]);