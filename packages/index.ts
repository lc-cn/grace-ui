import { App } from 'vue'
import * as components from './componentList'
import {SFCWithInstall} from "./types";
export * from './componentList'
const plugin:SFCWithInstall<typeof components> = {
    ...components,
    install(app:App){
        Object.values(plugin).forEach((component:any)=>{
            if(typeof component !=='function') app.component(component.name,component)
        })
    }
}
export default plugin
