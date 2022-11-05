import type { UserConfig } from 'vitepress'

function getDemoSidebar() {
	return [
		{
			text: '基础组件',
			children: [
				{
					text: 'button',
					link: '/components/button',
				},
				{
					text: 'icon',
					link: '/components/icon',
				},
			],
		},
		{
			text:'表单组件',
			children: [
				{
					text: 'input',
					link: '/components/input',
				},
				{
					text: 'checkbox',
					link: '/components/checkbox',
				},
				{
					text: 'radio',
					link: '/components/radio',
				},
			]
		}
	]
}

const config: UserConfig = {
	lang: 'zh-CN',
	title: 'GraceUI',
	description: 'Just playing around.',
	themeConfig: {
		// 展示搜索框
		algolia: {
			appKey: '',
			indexName: '',
			searchParameters: {
				faeFilters: ['tags:guide,api'],
			},
		},
		nav: [
			{
				text: '首页',
				link: '/',
			},
			{
				text: '组件',
				link: '/components/button',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/liucl-cn/grace-ui',
			},
		],
		// 侧边栏
		sidebar: {
			'/components/': getDemoSidebar(),
		},
	},
	markdown: {
		config: (md) => {
			const { demoBlockPlugin } = require('vitepress-theme-demoblock')
			md.use(demoBlockPlugin)
		},
	},
}

export default config
