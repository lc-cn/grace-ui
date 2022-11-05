import DefaultTheme from 'vitepress/theme'
import GraceUI from '../../../packages/index'
import '../../../packages/style/index.scss'
import type { Theme } from 'vitepress'

export default <Theme>{
	...DefaultTheme,
	enhanceApp({ app }) {
		// register global components
		app.use(GraceUI)
	},
}
