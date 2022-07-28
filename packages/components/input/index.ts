import type { App } from 'vue'
import input from './input.vue'
import type { SFCWithInstall } from "../../types";

input.install = (app: App) => {
	app.component(input.name, input)
}

const _input: SFCWithInstall<typeof input> = Object.assign(input) // 增加类型
export default _input
