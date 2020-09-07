"use strict";
cc._RF.push(module, 'f4ee9QBS+NLeogXatIXQMy2', 'myassembler');
// resources/myassembler.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 支持原生端自定义渲染
 */
var gfx = cc.gfx;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var vfmtPosUvColor = new gfx.VertexFormat([
    { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
]);
var myassembler = /** @class */ (function (_super) {
    __extends(myassembler, _super);
    function myassembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verts = [];
        _this.quads = [];
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.floatsPerVert = 5;
        _this.renderData = null;
        return _this;
    }
    myassembler.prototype.init = function (comp) {
        _super.prototype.init.call(this, comp);
        //@ts-ignore
        var segmentCount = comp.getVertNum() - 1;
        this.verticesCount = 4 * segmentCount;
        this.indicesCount = 6 * segmentCount;
        // this.floatsPerVert = 6;
        this.initData();
    };
    myassembler.prototype.initData = function () {
        //@ts-ignore
        this.renderData = new cc.RenderData();
        this.renderData.init(this);
        var data = this.renderData;
        // createFlexData支持创建指定格式的renderData
        data.createFlexData(0, this.verticesCount, this.indicesCount, vfmtPosUvColor);
        // 顶点数固定的情况下索引不变化
        var indices = data.iDatas[0];
        var count = indices.length / 6;
        for (var i = 0, idx = 0; i < count; i++) {
            var vertextID = i * 4;
            indices[idx++] = vertextID;
            indices[idx++] = vertextID + 1;
            indices[idx++] = vertextID + 2;
            indices[idx++] = vertextID + 1;
            indices[idx++] = vertextID + 3;
            indices[idx++] = vertextID + 2;
        }
    };
    myassembler.prototype.updateRenderData = function (comp) {
        if (comp) {
            var pointNum = comp.getVertNum();
            var spaceCnt = pointNum - 1;
            this.verts.length = 0;
            this.quads.length = 0;
            var node = comp.node;
            var height = node.height;
            var width = node.width;
            // 上一个点的纹理坐标
            var lastU = 0;
            // 下一个点的纹理坐标
            var nextU = 0;
            //坐标
            var spaceX = width / spaceCnt;
            var spaceUv = 1 / spaceCnt;
            // 左下角的坐标
            var posX = -width * node.anchorX;
            var posY = -height * node.anchorY;
            if (!cc.sys.isNative) {
                var worldPos = comp.node.convertToWorldSpaceAR(cc.v2(posX, posY));
                posX = worldPos.x;
                posY = worldPos.y;
            }
            for (var i = 1; i < pointNum; i++) {
                nextU = lastU + spaceUv;
                var lb = this.verts.push({ x: posX + (i - 1) * spaceX, y: posY, u: lastU, v: 1 });
                var rb = this.verts.push({ x: posX + i * spaceX, y: posY, u: nextU, v: 1 });
                var lt = this.verts.push({ x: posX + (i - 1) * spaceX, y: posY + height, u: lastU, v: 0 });
                var rt = this.verts.push({ x: posX + i * spaceX, y: posY + height, u: nextU, v: 0 });
                this.quads.push({
                    lb: lb - 1,
                    rb: rb - 1,
                    lt: lt - 1,
                    rt: rt - 1,
                });
                lastU = nextU;
            }
            if (cc.sys.isNative) {
                var white = comp.node.color._val;
                var vertexOffset = 0;
                // 填充顶点缓冲
                var vbuf = this.renderData.vDatas[0];
                for (var i = 0, len = this.verts.length; i < len; i++) {
                    var vert = this.verts[i];
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
    };
    myassembler.prototype.fillBuffers = function (comp, renderer) {
        if (this.verts.length == 0) {
            return;
        }
        var buffer = renderer.getBuffer('mesh', vfmtPosUvColor);
        var verts = this.verts;
        var vertexCount = verts.length;
        var indiceCount = this.quads.length * 6;
        // 通过设定的顶点数量及顶点索引数量获取 buffer 的数据空间
        var offsetInfo = buffer.request(vertexCount, indiceCount);
        var vbuf = buffer._vData; //positon/uv
        var ibuf = buffer._iData; //index 
        var uintbuf = buffer._uintVData; // colors
        var vertexOffset = offsetInfo.byteOffset >> 2;
        var indiceOffset = offsetInfo.indiceOffset;
        var vertexId = offsetInfo.vertexOffset;
        var white = cc.Color.WHITE._val;
        // 填充顶点缓冲
        for (var i = 0, len = verts.length; i < len; i++) {
            var vert = verts[i];
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
        for (var i = 0, len = this.quads.length; i < len; i++) {
            var quad = this.quads[i];
            ibuf[indiceOffset++] = vertexId + quad.lb;
            ibuf[indiceOffset++] = vertexId + quad.rb;
            ibuf[indiceOffset++] = vertexId + quad.lt;
            ibuf[indiceOffset++] = vertexId + quad.rb;
            ibuf[indiceOffset++] = vertexId + quad.rt;
            ibuf[indiceOffset++] = vertexId + quad.lt;
        }
    };
    myassembler = __decorate([
        ccclass
    ], myassembler);
    return myassembler;
}(cc.Assembler));
exports.default = myassembler;

cc._RF.pop();