// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import myassembler from './myassembler'
const renderEngine = cc.renderer.renderEngine;
const SpriteMaterial = renderEngine.SpriteMaterial;

@ccclass
export default class myrendercomponent extends cc.RenderComponent {

    // @property({
    //     type: cc.Texture2D
    // })
    // _texture:cc.Texture2D = null;

    // @property({
    //     type: cc.Texture2D
    // })
    // get texture(){
    //     return this._texture;
    // }

    // set texture(value){
    //     if(value instanceof cc.Texture2D){
    //         this._texture = value;
    //     }
    //     else{
    //         cc.warn('请正确拖入纹理资源！');
    //     }
    // }

    // uv:number[] = [];
    // _renderData = null;

    // // 组件激活时链接组件的 Assembler，处理UV数据及事件监听。
    // onEnable () {
    //     super.onEnable();
    //     this._updateAssembler();
    //     this._activateMaterial();
    //     this._calculateUV();

    //     this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onNodeSizeDirty, this);
    //     this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this._onNodeSizeDirty, this);
    // }
    // // 组件禁用时，取消事件监听
    // onDisable () {
    //     super.onDisable();


    //     this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onNodeSizeDirty, this);
    //     this.node.off(cc.Node.EventType.ANCHOR_CHANGED, this._onNodeSizeDirty, this);
    // }
    // // 节点数据变化时需要标记更新组件的渲染状态
    // _onNodeSizeDirty () {
    //     if (!this._renderData) return;
    //     // this.markForUpdateRenderData(true);
    //     this.markForRender(true);

    // }
    // // 设置组件的 Assembler
    // _updateAssembler () {
    //     let assembler = new myassembler();

    //     if (this._assembler !== assembler) {
    //         this._assembler = assembler;
    //         this._renderData = null;
    //     }

    //     if (!this._renderData) {
    //         this._renderData = this._assembler.createData(this);
    //         this._renderData.material = this.sharedMaterials[0];
    //         // this.markForUpdateRenderData(true);
    //         this.markForRender(true);
    //     }
    // }
    // // 创建用于渲染图片的材质
    // _activateMaterial () {
    //     // let material = this.sharedMaterials[0];
    //     // if (!material) {
    //     //     material = this.sharedMaterials[0] 
    //     //         = cc.renderer;
    //     // }
        
    //     // // 是否使用 Uniform 变量传递节点颜色
    //     // // material.useColor = true;
    //     // if (this._texture) {
    //     //     this.sharedMaterials[0].texture = this._texture;
    //     //     // 标记渲染组件的渲染状态
    //     //     this.markForUpdateRenderData(true);
    //     //     this.markForRender(true);
    //     // } else {
    //     //     this.disableRender();
    //     // }

    //     // this._updateMaterial(material);

    //     let material = this.sharedMaterials[0];
    //     if (!material) {
    //         this.disableRender();
    //         return;
    //     }
        
    //     material = cc.Material.getInstantiatedMaterial(material, this);
    //     this.setMaterial(0, material);
    //     this.markForRender(true);
    // }
    // // 设置纹理的 UV 数据
    // _calculateUV () {
    //     let uv = this.uv;
    //     // 设置纹理 UV 起始值
    //     let l = 0, r = 1, b = 1,t = 0;

    //     uv[0] = l;
    //     uv[1] = b;
    //     uv[2] = r;
    //     uv[3] = b;
    //     uv[4] = l;
    //     uv[5] = t;
    //     uv[6] = r;
    //     uv[7] = t;
    // }
    // update (dt) {}
}
