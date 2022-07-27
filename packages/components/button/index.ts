import type { App } from 'vue'
import GrButton from './button.vue'
import type { SFCWithInstall } from '../../types'

GrButton.install = (app: App) => {
	app.component(GrButton.name, GrButton)
}

const InMeAccordionItem: SFCWithInstall<typeof GrButton> = GrButton // 增加类型
export default InMeAccordionItem
