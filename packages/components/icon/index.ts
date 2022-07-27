import type { App } from 'vue'
import icon from './icon.vue'
import type { SFCWithInstall } from "../../types";

icon.install = (app: App) => {
	app.component(icon.name, icon)
}

const _icon: SFCWithInstall<typeof icon> = Object.assign(icon) // 增加类型
export default _icon
