<!-- 1.void 0 => undefined
2.console 研究, throwException -->
#工程创建

a.基础框架搭建, 技术选型
0.webpack组织 ✅
1.git init ✅
2.npm init ✅
3.es6 ✅
4.react/inferno/angular/vue/... ✅(仅仅inferno, router)
5.ts ✅
6.less ✅
7.模板 ✅
8.tslint/eslint
9.mock
10.axios
11.结构布局
  (1)多入口编译成不同输出✅
  (2)mock等...
  (3)模板等...

b.框架常用解决方案搭建
1.pc和移动端选型(或者直接响应式), viewpoint
2.通信标准和方案, axios
3.测试方案(测试环境搭建, 单元测试, mock)
4.安全
5.性能
6.部署
7.开发框架/方式确定(koa, webpack, 热加载...)
8.自动化(gulp/grunt/webpack)
9.ui标准确定
10.规则引擎场景
11.兼容性
12.seo
13.埋点
14.监控/分析
15.字符编码
16.国际化
17.polyfill

#帮助
1.项目级开发
  (1)utils
  (2)components
   --Scroller
   --viewpoint
   --fastclick
   ...
2.cli开发
3.浏览器插件开发(油猴等)
4.npm插件开发(link 协同)
5.chrome插件开发
6.node中间件开发
7.vscode插件开发
8.loader开发(webpack)
9.plugins开发(webpack)

#具体问题解决方案
1.类/方法修饰器
2.各种文件上传/操作
3.ssl
4.数据库
5.图表(饼图, 立体图...)

#辅助解决问题
1.抓包
2.调试
3.vscode
4.postman


#其他
微信公众号
微信/支付宝小程序
native
react-native
爬虫
站内搜索


#####需要的储备#####
后端服务
设计模式
h5
package(-lock).json
error/excpetion
富文本编辑
拖拽
滚动
动画
动画设计原理, 16ms, 缓动函数等
画布
源码
babel
redux
unix
zepto
jquery源码
图片/视频处理/识别
算法
http协议
实时通讯, socket
js基础
shell
node_modules
require
bridge
buddle.js map
内网穿透
nginx
easyUI/amzingUI...
mocha
日历
钩子函数/回调函数区别
字体/服务端导入, woff, @font-face
node环境区分

1.@type类型 ?



todo
1.baseComponent
2.router
3.模板文件
4.node服务器
5.keys为什么是有必要的
6.基于路由的代码分割
7.实例
8.tsc 编译报错: 'rootDir' is expected to contain all source files.
9.node_modules @
10.接入ts

11.组件的绝对宽高, 避免flex兼容性问题
12.svg
13.虚拟键盘


生成模块代码
根据编译时指定的模块目标参数，编译器会生成相应的供Node.js (CommonJS)，Require.js (AMD)，UMD，SystemJS或ECMAScript 2015 native modules (ES6)模块加载系统使用的代码。 想要了解生成代码中 define，require 和 register的意义，请参考相应模块加载器的文档。