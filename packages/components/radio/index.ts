import type { App } from 'vue'
import radio from './radio.vue'
import type { SFCWithInstall } from "../../types";

radio.install = (app: App) => {
	app.component(radio.name, radio)
}

const _radio: SFCWithInstall<typeof radio> = Object.assign(radio) // 增加类型
export default _radio
