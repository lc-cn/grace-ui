import type { App } from 'vue'
import buttonGroup from './buttonGroup.vue'
import type { SFCWithInstall } from "../../types";

buttonGroup.install = (app: App) => {
	app.component(buttonGroup.name, buttonGroup)
}

const _buttonGroup: SFCWithInstall<typeof buttonGroup> = Object.assign(buttonGroup) // 增加类型
export default _buttonGroup
