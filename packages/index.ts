import type { App } from 'vue'

import GrButton from './components/button'

const components:any[] = [GrButton]
/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {void}
 */
const install = function (app: App) {
	components.forEach((component) => app.component(component.name, component))
}

export { GrButton }

export default {
	install,
	...components,
}
