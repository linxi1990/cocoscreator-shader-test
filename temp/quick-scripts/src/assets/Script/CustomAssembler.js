"use strict";
cc._RF.push(module, '4a12fPFEB9Kk6elMeKieNpS', 'CustomAssembler');
// Script/CustomAssembler.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CustomAssembler = /** @class */ (function (_super) {
    __extends(CustomAssembler, _super);
    function CustomAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this.floatsPerVert = 5;
        _this._renderData = null;
        _this._local = null;
        return _this;
    }
    CustomAssembler.prototype.init = function (comp) {
        _super.prototype.init.call(this, comp);
        this._renderData = new cc.RenderData();
        this._renderData.init(this);
        this.initLocal();
        this.initData();
    };
    //override
    CustomAssembler.prototype.updateRenderData = function (comp) {
        if (comp._vertsDirty) {
            this.updateUVs(comp);
            this.updateVerts(comp);
            comp._vertsDirty = false;
        }
    };
    CustomAssembler.prototype.updateUVs = function (comp) {
        var uv = [0, 0, 1, 0, 0, 1, 1, 1];
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
            var srcOffset = i * 2;
            var dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset];
            verts[dstOffset + 1] = uv[srcOffset + 1];
        }
    };
    CustomAssembler.prototype.updateVerts = function (comp) {
        var node = comp.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        l = -appx;
        b = -appy;
        r = cw - appx;
        t = ch - appy;
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(comp);
    };
    Object.defineProperty(CustomAssembler.prototype, "verticesFloats", {
        get: function () {
            return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
    });
    CustomAssembler.prototype.initData = function () {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
    };
    CustomAssembler.prototype.initLocal = function () {
        this._local = [];
        this._local.length = 4;
    };
    CustomAssembler.prototype.updateColor = function (comp, color) {
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts)
            return;
        color = color || comp.node.color._val;
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        // let mycolor:cc.Color = new cc.Color(255,0,0,255); 
        for (var i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            uintVerts[i] = color;
        }
    };
    CustomAssembler.prototype.getBuffer = function () {
        return cc.renderer._handle._meshBuffer;
    };
    CustomAssembler.prototype.updateWorldVerts = function (comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var matrix = comp.node._worldMatrix;
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
        if (justTranslate) {
            // left bottom
            verts[0] = vl + tx;
            verts[1] = vb + ty;
            // right bottom
            verts[5] = vr + tx;
            verts[6] = vb + ty;
            // left top
            verts[10] = vl + tx;
            verts[11] = vt + ty;
            // right top
            verts[15] = vr + tx;
            verts[16] = vt + ty;
        }
        else {
            var al = a * vl, ar = a * vr, bl = b * vl, br = b * vr, cb = c * vb, ct = c * vt, db = d * vb, dt = d * vt;
            // left bottom
            verts[0] = al + cb + tx;
            verts[1] = bl + db + ty;
            // right bottom
            verts[5] = ar + cb + tx;
            verts[6] = br + db + ty;
            // left top
            verts[10] = al + ct + tx;
            verts[11] = bl + dt + ty;
            // right top
            verts[15] = ar + ct + tx;
            verts[16] = br + dt + ty;
        }
    };
    CustomAssembler.prototype.fillBuffers = function (comp, renderer) {
        if (renderer.worldMatDirty) {
            this.updateWorldVerts(comp);
        }
        var renderData = this._renderData;
        var vData = renderData.vDatas[0];
        var iData = renderData.iDatas[0];
        var buffer = this.getBuffer();
        var offsetInfo = buffer.request(this.verticesCount, this.indicesCount);
        // buffer data may be realloc, need get reference after request.
        // fill vertices
        var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = buffer._vData;
        if (vData.length + vertexOffset > vbuf.length) {
            vbuf.set(vData.subarray(0, this.verticesFloats), vertexOffset);
        }
        else {
            vbuf.set(vData, vertexOffset);
        }
        // fill indices
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
        for (var i = 0, l = iData.length; i < l; i++) {
            ibuf[indiceOffset++] = vertexId + iData[i];
        }
    };
    return CustomAssembler;
}(cc.Assembler));
exports.default = CustomAssembler;

cc._RF.pop();