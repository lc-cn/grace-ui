import type { App } from 'vue'
import checkbox from './checkbox.vue'
import type { SFCWithInstall } from "../../types";

checkbox.install = (app: App) => {
	app.component(checkbox.name, checkbox)
}

const _checkbox: SFCWithInstall<typeof checkbox> = Object.assign(checkbox) // 增加类型
export default _checkbox
