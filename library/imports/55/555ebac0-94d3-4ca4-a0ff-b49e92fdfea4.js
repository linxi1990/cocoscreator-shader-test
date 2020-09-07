"use strict";
cc._RF.push(module, '555ebrAlNNMpKD/tJ6S/f6k', 'CustomIAAssembler');
// Example/IA/CustomIAAssembler.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MeshBuffer = cc.MeshBuffer;
var InputAssembler = cc.renderer.InputAssembler;
var CustomIAAssembler = /** @class */ (function (_super) {
    __extends(CustomIAAssembler, _super);
    function CustomIAAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._buffer = null;
        _this._ia = null;
        _this._vfmt = null;
        return _this;
    }
    CustomIAAssembler.prototype.init = function (comp) {
        _super.prototype.init.call(this, comp);
        this._buffer = null;
        this._ia = null;
        this._vfmt = cc.gfx.VertexFormat.XY_UV_Color;
    };
    CustomIAAssembler.prototype.getBuffer = function () {
        if (!this._buffer) {
            // Create quad buffer for vertex and index
            this._buffer = new MeshBuffer(cc.renderer._handle, this._vfmt);
            this._ia = new InputAssembler();
            this._ia._vertexBuffer = this._buffer._vb;
            this._ia._indexBuffer = this._buffer._ib;
            this._ia._start = 0;
            this._ia._count = 0;
        }
        return this._buffer;
    };
    CustomIAAssembler.prototype.fillBuffers = function (comp, renderer) {
        if (!this._ia)
            return;
        renderer.node = comp.node;
        renderer.material = comp.sharedMaterials[0];
        renderer._flushIA(this._ia);
    };
    return CustomIAAssembler;
}(cc.Assembler));
exports.default = CustomIAAssembler;

cc._RF.pop();