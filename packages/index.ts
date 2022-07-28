import { App } from 'vue'
import * as components from './componentList'
import {SFCWithInstall} from "./types";
export * from './componentList'
const plugin:SFCWithInstall<typeof components> = {
    ...components,
    install(app:App){
        Object.entries(components).forEach(([name,component])=>{
            if(typeof component !=='function') app.component(name,component)
        })
    }
}
export default plugin
