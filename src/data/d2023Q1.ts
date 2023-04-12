const data: IDataType[] = [
  {
    name: 'shadcn/ui',
    desc: '一组可复用的 UI 组件，作者提倡通过复制的方式使用组件，而不是通过引入组件的方式',
    link: 'https://github.com/shadcn/ui',
    tags: ['rust', '算法'],
    date: '2023-01-29',
    level: 4
  },
  {
    name: 'webtty',
    desc: '基于 WebRTC 分享终端会话',
    link: 'https://github.com/maxmcd/webtty ',
    tags: ['webRtc', '远程', '终端', '工具'],
    date: '2023-01-29',
    level: 3
  },
  {
    name: 'bob',
    desc: '面向微服务场景的打包工具',
    link: 'https://bob.build/ ',
    tags: ['持续集成', '微服务', '自建服务', '工具'],
    date: '2023-01-29',
    level: 3
  },
  {
    name: 'Automatisch',
    desc: '自动化工作流工具',
    link: 'https://automatisch.io/',
    tags: ['持续集成', '自建服务', '工具'],
    date: '2023-01-29',
    level: 3
  },
  {
    name: 'Summer Afternoon',
    desc: '通过webGL开发的一个内容简单的小游戏，且支持多人在线',
    link: 'https://summer-afternoon.vlucendo.com/',
    tags: ['webGL', '好玩的', '游戏'],
    date: '2023-01-29',
    level: 3
  },

  {
    name: 'automerge',
    desc: 'CRDT 协同算法库 Automerge',
    link: 'https://automerge.org/blog/automerge-2',
    tags: ['rust', '算法'],
    date: '2023-02-05',
    level: 3
  },
  {
    name: 'Carbonyl',
    desc: '终端中运行浏览器',
    link: 'https://fathy.fr/carbonyl',
    tags: ['终端', '好玩的'],
    date: '2023-02-05',
    level: 3
  },
  {
    name: 'diy-pro-v37',
    desc: 'DIY 空气质量检测仪',
    link: 'https://www.airgradient.com/open-airgradient/instructions/diy-pro-v37/',
    tags: ['DIY', '好玩的', '文章'],
    date: '2023-02-05',
    level: 3
  },
  {
    name: 'Hermes',
    desc: '开源文档管理系统',
    link: 'https://www.hashicorp.com/blog/introducing-hermes-an-open-source-document-management-system',
    tags: ['自建服务', '文档', '工具'],
    date: '2023-02-05',
    level: 3
  },

  {
    name: 'nango',
    desc: '开箱即用 OAuth 解决方案',
    link: 'https://www.nango.dev/',
    tags: ['服务端'],
    date: '2023-02-12',
    level: 3
  },
  {
    name: 'yq',
    desc: '多种文件格式解析器',
    link: 'https://github.com/mikefarah/yq',
    tags: ['终端', '工具'],
    date: '2023-02-12',
    level: 4
  },
  {
    name: 'PhotoPrism',
    desc: '照片管理程序',
    link: 'https://www.photoprism.app/ ',
    tags: ['自建服务', '图形', 'AI'],
    date: '2023-02-12',
    level: 2
  },
  {
    name: 'grep app',
    desc: '代码搜索平台',
    link: 'https://grep.app/',
    tags: ['搜索引擎', '工具'],
    date: '2023-02-12',
    level: 2
  },
  {
    name: 'BlockNote',
    desc: 'Notion 风格的富文本编辑器',
    link: 'https://github.com/YousefED/BlockNote',
    tags: ['前端', '富文本', '编辑器'],
    date: '2023-02-12',
    level: 3
  },
  {
    name: 'Universal Summarizer',
    desc: '搜索引擎 Kagi 推出新技术',
    link: 'https://labs.kagi.com/ai/sum',
    tags: ['搜索引擎'],
    date: '2023-02-12',
    level: 2
  },
  {
    name: 'React.js: The Documentary',
    desc: 'React.JS 纪录片',
    link: 'https://www.youtube.com/watch?v=8pDqJVdNa44',
    tags: ['react', '纪录片'],
    date: '2023-02-12',
    level: 2
  },

  {
    name: 'alist',
    desc: '一个开源的文件管理程序',
    link: 'https://alist.nn.ci/',
    tags: ['工具', '自建服务', '文件管理'],
    date: '2023-02-19',
    level: 3
  },
  {
    name: 'helm',
    desc: '可视化应用管理工具',
    link: 'https://github.com/komodorio/helm-dashboard',
    tags: ['工具', '自建服务', '应用管理'],
    date: '2023-02-19',
    level: 3
  },
  {
    name: 'Rerun',
    desc: '记录计算机视觉执行过程的 SDK',
    link: 'https://www.rerun.io/',
    tags: ['视觉', 'SDK'],
    date: '2023-02-19',
    level: 3
  },
  {
    name: 'Sloth',
    desc: 'Mac GUI 应用替代lsof',
    link: 'https://github.com/sveinbjornt/Sloth',
    tags: ['应用管理', '工具'],
    date: '2023-02-19',
    level: 4
  },
  {
    name: 'bright',
    desc: '代码片段展示工具',
    link: 'https://bright.codehike.org/',
    tags: ['美化', '工具'],
    date: '2023-02-19',
    level: 4
  },
  {
    name: 'ChatGPT工作原理',
    desc: '代码片段展示工具',
    link: 'https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/',
    tags: ['ChatGPT', 'AI', '文章'],
    date: '2023-02-19',
    level: 3
  },

  {
    name: 'noya',
    desc: '新一代设计工具',
    link: 'https://www.noya.io/ ',
    tags: ['设计', '工具'],
    date: '2023-02-26',
    level: 4
  },
  {
    name: 'highlight',
    desc: '开源 Web 应用监控方案',
    link: 'https://www.highlight.io/',
    tags: ['全栈', '前端', '监控'],
    date: '2023-02-26',
    level: 4
  },
  {
    name: 'faro',
    desc: 'Grafana 开源的 Web 前端可观测性工具',
    link: 'https://grafana.com/oss/faro/',
    tags: ['监控'],
    date: '2023-02-26',
    level: 3
  },
  {
    name: 'laudspeaker',
    desc: '开源的客户旅程自动化平台',
    link: 'https://laudspeaker.com/',
    tags: ['平台', '工具'],
    date: '2023-02-26',
    level: 3
  },
  {
    name: 'Infinite Storage Glitch',
    desc: '将视频网站变为免费网盘',
    link: 'https://github.com/DvorakDwarf/Infinite-Storage-Glitch',
    tags: ['编解码', '好玩的'],
    date: '2023-02-26',
    level: 2
  },
  {
    name: 'aicommits',
    desc: '自动生成 commit message 工具',
    link: 'https://github.com/Nutlope/aicommits',
    tags: ['AI', '好玩的'],
    date: '2023-02-26',
    level: 2
  },

  {
    name: 'Service weaver 介绍',
    desc: 'Google 发布新编程框架 Service weaver 介绍',
    link: 'https://opensource.googleblog.com/2023/03/introducing-service-weaver-framework-for-writing-distributed-applications.html ',
    tags: ['自建服务', '微服务', 'Google', '文章'],
    date: '2023-03-05',
    level: 2
  },
  {
    name: 'remult',
    desc: '快速 CRUD 框架',
    link: 'https://github.com/remult/remult',
    tags: ['框架', '自建服务', '全栈'],
    date: '2023-03-05',
    level: 4
  },
  {
    name: 'ChatGPT API',
    desc: 'ChatGPT 官方 API',
    link: 'https://openai.com/blog/introducing-chatgpt-and-whisper-apis',
    tags: ['ChatGPT', 'API', 'AI'],
    date: '2023-03-05',
    level: 5
  },
  {
    name: 'Mathesar',
    desc: '开源 Postgres 数据库 GUI 管理工具',
    link: 'https://github.com/centerofci/mathesar',
    tags: ['API', 'AI'],
    date: '2023-03-05',
    level: 3
  },
  {
    name: 'Unfolder',
    desc: '将3D 模型生成折纸零件图纸的工具',
    link: 'https://www.unfolder.app/',
    tags: ['模型', '好玩的'],
    date: '2023-03-05',
    level: 3
  },
  {
    name: 'PlayWright',
    desc: 'Playwright 为 现代 web 应用提供了可靠的端到端的测试能力',
    link: 'https://github.com/microsoft/playwright/releases/tag/v1.32.0',
    tags: ['e2e', '测试'],
    date: '2023-03-26',
    level: 4
  },
  {
    name: 'typst',
    desc: '功能强大使用便捷的排版系统',
    link: 'https://github.com/typst/typst',
    tags: ['文档', '编辑器'],
    date: '2023-03-26',
    level: 3
  },
  {
    name: 'Transformer',
    desc: '在浏览器中运行 Transformer 模型',
    link: 'https://xenova.github.io/transformers.js/',
    tags: ['AI'],
    date: '2023-03-19',
    level: 3
  },
  {
    name: 'Scale',
    desc: 'Wasm 跨语言运行时',
    link: 'https://scale.sh/',
    tags: ['wasm', 'rust'],
    date: '2023-03-19',
    level: 4
  },
  {
    name: 'PgTyped',
    desc: '从 SQL 语句中推断 Typescript 类型',
    link: 'https://github.com/adelsz/pgtyped',
    tags: ['typescript', '数据库'],
    date: '2023-03-12',
    level: 4
  },
  {
    name: 'OpenDAL',
    desc: '开源通用数据接入层',
    link: 'https://github.com/datafuselabs/opendal',
    tags: ['全栈', '数据库'],
    date: '2023-03-12',
    level: 4
  },
];

export default data;
