/**
 * 支持原生端自定义渲染
 */
const gfx = cc.gfx;
const {ccclass, property} = cc._decorator;

let vfmtPosUvColor = new gfx.VertexFormat([
    { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
]);

interface BookVertex {
    x:number,
    y:number,
    u:number,
    v:number
}

interface BookQuad {
    lt:number,
    lb:number,
    rb:number,
    rt:number
}

@ccclass
export default class myassembler extends cc.Assembler {
    protected verts:BookVertex[] = []
    protected quads:BookQuad[] = []
    private verticesCount:number = 4;
    private indicesCount:number = 6;
    private floatsPerVert:number = 5;
    protected renderData: cc.RenderData = null;

    public init(comp: cc.RenderComponent) {
        super.init(comp);

        //@ts-ignore
        let segmentCount = comp.getVertNum() - 1;
        this.verticesCount = 4 * segmentCount;
        this.indicesCount = 6 * segmentCount;
        // this.floatsPerVert = 6;
        
        this.initData();
    }

    public initData() {
        //@ts-ignore
        this.renderData = new cc.RenderData();
        this.renderData.init(this);

        let data = this.renderData;
        // createFlexData支持创建指定格式的renderData
        data.createFlexData(0, this.verticesCount, this.indicesCount, vfmtPosUvColor);

        // 顶点数固定的情况下索引不变化
        let indices = data.iDatas[0];
        let count = indices.length / 6;
        for (let i = 0, idx = 0; i < count; i++) {
            let vertextID = i * 4;
            indices[idx++] = vertextID;
            indices[idx++] = vertextID+1;
            indices[idx++] = vertextID+2;
            indices[idx++] = vertextID+1;
            indices[idx++] = vertextID+3;
            indices[idx++] = vertextID+2;
        }
    }

    public updateRenderData(comp: any){
        if(comp){
            let pointNum: number = comp.getVertNum();
            let spaceCnt = pointNum - 1;
            this.verts.length = 0;
            this.quads.length = 0;

            let node = comp.node;
            let height = node.height;
            let width = node.width;

            // 上一个点的纹理坐标
            let lastU = 0;
            // 下一个点的纹理坐标
            let nextU = 0;
            
            //坐标
            let spaceX = width / spaceCnt;
            let spaceUv = 1 / spaceCnt;
            // 左下角的坐标
            let posX = - width * node.anchorX;
            let posY = - height * node.anchorY;
            if(!cc.sys.isNative){
                let worldPos = comp.node.convertToWorldSpaceAR(cc.v2(posX, posY));
                posX = worldPos.x;
                posY = worldPos.y;
            }
            for(let i = 1; i < pointNum; i ++){
                nextU = lastU + spaceUv;
                let lb = this.verts.push({x: posX + (i - 1) * spaceX, y: posY, u: lastU, v: 1 });
                let rb = this.verts.push({x: posX + i * spaceX, y: posY, u: nextU, v: 1 });
                let lt = this.verts.push({x: posX + (i - 1) * spaceX , y: posY + height, u: lastU, v: 0 });
                let rt = this.verts.push({x: posX + i * spaceX, y: posY + height, u: nextU, v: 0 });

                this.quads.push({
                    lb: lb - 1,
                    rb: rb - 1,
                    lt: lt - 1,
                    rt : rt - 1,
                })
                lastU = nextU;
            }
            if(cc.sys.isNative){
                let white = comp.node.color._val;
                let vertexOffset = 0;
                // 填充顶点缓冲
                let vbuf = this.renderData.vDatas[0];
                for (let i = 0, len = this.verts.length; i < len; i++) {
                    let vert = this.verts[i]
                    vbuf[vertexOffset++] = vert.x;
                    vbuf[vertexOffset++] = vert.y;
                    vbuf[vertexOffset++] = vert.u;
                    vbuf[vertexOffset++] = vert.v;
                    vbuf[vertexOffset++] = white;
                    // vertexOffset++;
                    // vbuf[vertexOffset++] = isFront;
                }
            }
            // let white = cc.Color.RED._val 
 
        }
    }

    public fillBuffers(comp:cc.RenderComponent, renderer:cc.renderer){
        if (this.verts.length == 0) {
            return
        }
        let buffer = renderer.getBuffer('mesh', vfmtPosUvColor)

        let verts = this.verts
        let vertexCount = verts.length
        let indiceCount = this.quads.length * 6
        // 通过设定的顶点数量及顶点索引数量获取 buffer 的数据空间
        let offsetInfo = buffer.request(vertexCount, indiceCount);

        let vbuf = buffer._vData //positon/uv
        let ibuf = buffer._iData //index 
        let uintbuf = buffer._uintVData // colors

        let vertexOffset = offsetInfo.byteOffset >> 2
        let indiceOffset = offsetInfo.indiceOffset
        let vertexId = offsetInfo.vertexOffset
        let white = cc.Color.WHITE._val
        // 填充顶点缓冲
        for (let i = 0, len = verts.length; i < len; i++) {
            let vert = verts[i]
            // let isFirstVert = i % 2 === 0
            // let firstVert = isFirstVert ? vert : verts[i - 1]
            // let secondVert = isFirstVert ? verts[i + 1] : vert
            // // 计算当前小矩形是正面还是背面
            // let isFront = firstVert.x < secondVert.x ? 1.0 : 0.0
            vbuf[vertexOffset++] = vert.x;
            vbuf[vertexOffset++] = vert.y;
            vbuf[vertexOffset++] = vert.u;
            vbuf[vertexOffset++] = vert.v;
            uintbuf[vertexOffset++] = white;
            // vbuf[vertexOffset++] = isFront;
        }
        // 填充索引缓冲
        for (let i = 0, len = this.quads.length; i < len; i++) {
            let quad = this.quads[i]
            ibuf[indiceOffset++] = vertexId + quad.lb
            ibuf[indiceOffset++] = vertexId + quad.rb
            ibuf[indiceOffset++] = vertexId + quad.lt

            ibuf[indiceOffset++] = vertexId + quad.rb
            ibuf[indiceOffset++] = vertexId + quad.rt
            ibuf[indiceOffset++] = vertexId + quad.lt
        }
    }
}
