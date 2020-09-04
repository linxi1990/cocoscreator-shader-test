// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import myassembler from "./myassembler";

@ccclass
export default class myrender extends cc.RenderComponent {

    @property({displayName:"每条边上的顶点数量"})
    public vertNum:number = 10;

    // onLoad () {}

    onEnable () {
        super.onEnable();
        this.setVertsDirty();
    }

    /**
     * 初始化assembler
     */
    public _resetAssembler() {
        let assembler = this._assembler = new myassembler()
        assembler.init(this)
    }
    /**
     * 获取每条边顶点数量
     */
    getVertNum(){
        return this.vertNum;
    }
}
