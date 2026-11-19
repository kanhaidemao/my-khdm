// ===== 网站内容配置：修改这里即可更新全站内容 =====

export const profile = {
  name: '你的名字',
  title: '前端开发者 / 数字创作者',
  intro:
    '热爱技术与设计，喜欢用代码把想法变成现实。这里是我的个人空间，记录我做过的项目和思考。',
  avatar:
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20young%20asian%20software%20developer%20portrait%2C%20professional%20photo%2C%20soft%20blue%20background%2C%20natural%20lighting%2C%20high%20quality&image_size=square_hd',
  location: '中国 · 上海'
}

export const skills = [
  'Vue 3',
  'JavaScript',
  'TypeScript',
  'HTML / CSS',
  'Node.js',
  'UI 设计',
  '响应式布局',
  'Git'
]

export const stats = [
  { num: '3+', label: '开发年限' },
  { num: '10+', label: '完成项目' },
  { num: '5+', label: '合作团队' }
]

export const works = [
  {
    id: 1,
    title: '在线任务管理工具',
    desc: '基于 Vue 3 的看板应用，支持拖拽排序、本地存储与深色模式。',
    tags: ['Vue 3', 'Pinia', '拖拽交互'],
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kanban%20task%20board%20web%20app%20interface%2C%20blue%20theme%20dashboard%20ui%20on%20laptop%20screen%2C%20clean%20modern%20design&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 2,
    title: '天气数据可视化面板',
    desc: '接入公开气象 API，用图表直观展示温度、降水与风力趋势。',
    tags: ['ECharts', 'REST API', '数据可视化'],
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=weather%20dashboard%20with%20charts%20and%20graphs%2C%20blue%20gradient%20ui%2C%20data%20visualization%20interface&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 3,
    title: '旅行相册网站',
    desc: '为朋友制作的旅行照片墙，瀑布流布局 + 全屏大图浏览体验。',
    tags: ['响应式', '相册', '动效'],
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=travel%20photo%20gallery%20website%20masonry%20layout%2C%20scenic%20photos%2C%20modern%20web%20design&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 4,
    title: '个人记账小程序',
    desc: '记录日常收支并自动生成月度报表，帮助养成储蓄习惯。',
    tags: ['小程序', '图表', '本地存储'],
    image:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20finance%20tracking%20app%20screens%2C%20blue%20ui%20with%20pie%20chart%20budget%20overview&image_size=landscape_16_9',
    link: '#'
  }
]

export const timeline = [
  { year: '2023 - 至今', text: '专注前端开发，主导多个 Web 项目从 0 到 1 上线。' },
  { year: '2022', text: '系统学习 Vue 生态与工程化，参与开源社区贡献。' },
  { year: '2021', text: '写出第一行网页代码，从此迷上创建东西的感觉。' }
]

export const contact = {
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  wechat: '你的微信号',
  bilibili: ''
}
