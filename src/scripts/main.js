import Utils from "./utils/utils"
import RenderView from "./view/render"
import "../styles/style.scss"

class Main {
    constructor() {
        Utils.log("[class] Main - excute")
        this.renderInstance = new RenderView()
    }

    initialize() {
        this.renderInstance.rootRender()
    }
}

const mainInstance = new Main()
mainInstance.initialize()