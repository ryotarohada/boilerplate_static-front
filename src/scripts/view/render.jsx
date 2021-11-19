import ReactDOM from "react-dom"
import Utils from "../utils/utils"
import App from "./App"

export default class RenderView {
    
    constructor() {
        Utils.log(`[class] ${this.constructor.name} - excute`)
    }

    rootRender() {
        ReactDOM.render(
            <App/>,
            document.querySelector("[data-react-root]")
        )
    }
}