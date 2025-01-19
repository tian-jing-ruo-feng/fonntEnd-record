(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{351:function(t,s,e){"use strict";e.r(s);var a=e(17),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"其他常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他常见问题"}},[t._v("#")]),t._v(" 其他常见问题")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[s("em",[t._v("【讨论题】谈一谈 Node 和 Web 的事件循环（EventLoop）机制的异同")])])]),t._v(" "),s("p",[s("strong",[t._v("题目描述：")]),t._v("\n通过前面章节，我们了解到 Lerna 源码中利用了 EventLoop 机制将脚手架初始化和命令执行逻辑解耦，这是 EventLoop 的一个典型应用，然而 Node.js 的 EventLoop 和 Web 的 EventLoop 并不相同，你知道他们之间有哪些差异吗？你是否在实际项目中应用过 Node.js 的 setImmediate 和 process.nextTick 方法？如果有，请分享你在哪些场景下使用了这些方法，并指出你为什么在这种场景使用，它会带来什么好处？")]),t._v(" "),s("p",[s("strong",[t._v("关键提炼：")])]),t._v(" "),s("ol",[s("li",[t._v("Node.js 事件循环：http://nodejs.cn/learn/the-nodejs-event-loop")]),t._v(" "),s("li",[t._v("什么是 process.nextTick：http://nodejs.cn/learn/understanding-process-nexttick")]),t._v(" "),s("li",[t._v("什么是 setImmediate：http://nodejs.cn/learn/understanding-setimmediate")]),t._v(" "),s("li",[t._v("Web 和 Node.js 事件循环对比：http://www.ruanyifeng.com/blog/2014/10/event-loop.html")])]),t._v(" "),s("h4",{attrs:{id:"nodejs-事件轮询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-事件轮询"}},[t._v("#")]),t._v(" "),s("code",[t._v("Nodejs")]),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#process-nexttick",title:"Nodejs Event Loop",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件轮询"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("共"),s("strong",[t._v("六")]),t._v("阶段： "),s("strong",[t._v("timer")]),t._v(" -> "),s("strong",[t._v("Pending I/O callbacks")]),t._v(" -> "),s("strong",[t._v("Idle, prepare")]),t._v(" -> "),s("strong",[t._v("Poll")]),t._v(" -> "),s("strong",[t._v("Check")]),t._v(" -> "),s("strong",[t._v("Close callbacks")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b04e82718ead4bd09ee9b8aaaaa4b414~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:"事件循环"}})]),t._v(" "),s("ol",[s("li",[s("h3",{attrs:{id:"timer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timer"}},[t._v("#")]),t._v(" timer")])])]),t._v(" "),s("p",[t._v("​ 定时器阶段，处理"),s("code",[t._v("setTimeout")]),t._v("和"),s("code",[t._v("setInterval")]),t._v("的回调函数。进入这个阶段，主线程会检查当前时间是否满足定时器的条件，满足则执行回调函数，否则离开这个阶段。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("h3",{attrs:{id:"pending-i-o-callbacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pending-i-o-callbacks"}},[t._v("#")]),t._v(" Pending I/O callbacks")]),t._v(" "),s("p",[t._v("​ 除了以下操作")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("setTimeout()")]),t._v("和"),s("code",[t._v("setInterval()")]),t._v("的回调函数。（它们在 timer 阶段执行）")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("setImmediate()")]),t._v("的回调函数。（它在 Check 阶段执行）")])]),t._v(" "),s("li",[s("p",[t._v("用于关闭请求的回调函数，例如"),s("code",[t._v("socket.on('close', ...)")]),t._v("。（它是在 Close callbacks 阶段执行）")]),t._v(" "),s("p",[t._v("其他的回调函数都是在这个阶段执行。")])])])]),t._v(" "),s("li",[s("h3",{attrs:{id:"idle-prepare"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idle-prepare"}},[t._v("#")]),t._v(" Idle, prepare")]),t._v(" "),s("p",[t._v("​ 该阶段只供"),s("code",[t._v("libuv")]),t._v("内部调用，可以忽略。")])]),t._v(" "),s("li",[s("h3",{attrs:{id:"poll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[t._v("#")]),t._v(" Poll")]),t._v(" "),s("p",[t._v("​ 这个阶段是轮询阶段，用于等待还未返回的 I/O 事件，例如服务器的回应，用户鼠标事件等等。这个阶段耗时会比较长。如果没有其他异步任务要处理（比如到期的定时器），会一直停留在这个阶段，等待 I/O 请求返回结果。")])]),t._v(" "),s("li",[s("h3",{attrs:{id:"check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[t._v("#")]),t._v(" Check")]),t._v(" "),s("p",[t._v("​ 该阶段执行"),s("code",[t._v("setImmediate()")]),t._v("的回调函数。")])]),t._v(" "),s("li",[s("h3",{attrs:{id:"close-callbacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#close-callbacks"}},[t._v("#")]),t._v(" Close callbacks")]),t._v(" "),s("p",[t._v("​ 该阶段执行关闭请求的回调函数。比如"),s("code",[t._v("socket.on('close', ...)")]),t._v("。")])])]),t._v(" "),s("h3",{attrs:{id:"微任务-vs-宏任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微任务-vs-宏任务"}},[t._v("#")]),t._v(" 微任务 VS 宏任务")]),t._v(" "),s("p",[t._v("​ 为了解决同步问题（前一个操作耗时问题，导致不能再执行下去），JavaScript 引入了"),s("strong",[t._v("异步")]),t._v("的概念。除了主线程上的同步操作外，JavaScript 还有个"),s("strong",[t._v("任务队列（task queue)")]),t._v("。所有的大开销的任务我们都可以通过异步函数包裹一下，通过回调函数的方式去触发，我们只需要先把大开销的操作任务扔到"),s("strong",[t._v("任务队列")]),t._v("中，等待主线程上的同步任务执行完毕后，再去"),s("strong",[t._v("轮询")]),t._v("任务队列中的事件，满足执行条件的事件放到主线程上去执行。")]),t._v(" "),s("p",[t._v("​ "),s("code",[t._v("js")]),t._v("将异步任务划分为微任务和宏任务，微任务会在宏任务之前执行（因为每次从主线程切换到任务队列时，"),s("strong",[t._v("都会优先遍历微任务队列，后遍历宏任务队列")]),t._v("）。")]),t._v(" "),s("p",[t._v("​ "),s("strong",[s("em",[t._v("注意：只有微任务队列为空时，才会遍历宏任务队列，并且每次从主线程切入任务队列时，都会优先遍历一边微任务队列。")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 宏任务")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微任务")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行结果: 1 2 3 4")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("宏任务 Macro Task")]),t._v(" "),s("th"),t._v(" "),s("th"),t._v(" "),s("th",[t._v("微任务 Micro Task")]),t._v(" "),s("th"),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("名称")]),t._v(" "),s("td",[t._v("浏览器")]),t._v(" "),s("td",[t._v("Node")]),t._v(" "),s("td",[t._v("名称")]),t._v(" "),s("td",[t._v("浏览器")]),t._v(" "),s("td",[t._v("Node")])]),t._v(" "),s("tr",[s("td",[t._v("I/O 操作")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[s("code",[t._v("process.nextTick()")]),t._v("(优先推荐使用"),s("code",[t._v("queueMicroTask()")]),t._v(")")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("√")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("setTimeout")])]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[s("code",[t._v("Promise.then catch finally")])]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("√")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("setInterval")])]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[s("code",[t._v("MutationObserver")]),t._v("(接口提供了监视对 DOM 树所做更改的能力)")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("×")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("setImmediate")])]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("requestAnimationFrame")]),s("br"),t._v("告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"process-nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick"}},[t._v("#")]),t._v(" "),s("code",[t._v("process.nextTick")])]),t._v(" "),s("p",[t._v("node 中特有的异步方法，属于"),s("strong",[t._v("微任务")]),t._v("，但是"),s("strong",[t._v("在微任务中，它的执行时机是最早的")]),t._v("，比"),s("code",[t._v("Promise.then")]),t._v("还早。")]),t._v(" "),s("h3",{attrs:{id:"setimmediate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setimmediate"}},[t._v("#")]),t._v(" "),s("code",[t._v("setImmediate")])]),t._v(" "),s("p",[t._v("node 中特有的异步操作，只支持 node 端，属于"),s("strong",[t._v("宏任务")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"settimeout-vs-setimmediate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-vs-setimmediate"}},[t._v("#")]),t._v(" "),s("code",[t._v("setTimeout VS setImmediate")])]),t._v(" "),s("p",[s("strong",[t._v("setTimeout")]),t._v(" 和 "),s("strong",[t._v("setImmediate")]),t._v(" 都是用于调度异步任务的函数，但它们在执行时机上有所不同。以下是它们的区别和使用场景：")]),t._v(" "),s("p",[s("strong",[t._v("setTimeout")])]),t._v(" "),s("p",[s("strong",[t._v("用法：")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"nodejs-vs-web事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-vs-web事件循环"}},[t._v("#")]),t._v(" "),s("code",[t._v("Nodejs VS Web")]),t._v("事件循环")]),t._v(" "),s("h3",{attrs:{id:"进程-线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程-线程"}},[t._v("#")]),t._v(" 进程&线程")]),t._v(" "),s("p",[s("strong",[t._v("线程和进程：线程时最小的执行单位，而进程有至少一个线程组成。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);