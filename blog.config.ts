import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: '研究日志',
	subtitle: '记录问题、实验与思考',
	description: '一个用于整理阅读笔记、实验记录与阶段复盘的研究日志。',
	author: { name: 'Ashripa', avatar: '/research-journal/avatar.svg', email: '', homepage: 'https://github.com/Ashripa' },
	copyright: { abbr: 'CC BY-NC-SA 4.0', name: '署名-非商业性使用-相同方式共享 4.0 国际', url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans' },
	favicon: '/research-journal/avatar.svg',
	language: 'zh-CN',
	timeEstablished: '2026-11-10',
	timeZone: 'Asia/Shanghai',
	url: 'https://ashripa.github.io/research-journal/',
	defaultCategory: '研究笔记',
}
const blogConfig = {
	...basicConfig,
	article: {
		categories: {
			研究笔记: { icon: 'tabler:notebook', color: '#7777ff' },
			论文阅读: { icon: 'tabler:book', color: '#33aaff' },
			实验记录: { icon: 'tabler:flask', color: '#33bbaa' },
			阶段复盘: { icon: 'tabler:refresh', color: '#ff7733' },
		},
		types: { tech: {}, story: {} },
		order: { date: '创建日期', updated: '更新日期' },
		useRandomPremalink: false,
		hidePostPrefix: true,
		robotsNotIndex: ['/preview', '/previews/*'],
	},
	feed: { limit: 50, enableStyle: true },
	scripts: [],
	stats: { includePaths: ['posts/%'] },
	twikoo: { envId: '', preload: '' },
}
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: blogConfig.title,
	title: blogConfig.title,
	desc: blogConfig.subtitle,
	link: blogConfig.url,
	feed: new URL('atom.xml', blogConfig.url).toString(),
	icon: new URL('avatar.svg', blogConfig.url).toString(),
	avatar: new URL('avatar.svg', blogConfig.url).toString(),
	archs: ['Nuxt', 'GitHub Pages'],
	date: blogConfig.timeEstablished,
	comment: '研究日志订阅',
}
export default blogConfig
