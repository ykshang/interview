module.exports = {
  title: '常见面试题', // 导航栏左侧的标题
  base: '/MyInterviewDocs/',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/logo.png" }] // 网页favicon
  ],
  description: '记录学习成长', // 不知道干嘛的
  markdown: {
    lineNumbers: true // 显示行号
  },
  plugins: require("./plugins"),
  themeConfig: require("./themeConfig/index") // 主题配置
}