"use strict";
cc._RF.push(module, '94208NQdWlDGaBbrhEU1DDg', 'CustomIARenderComponent');
// Example/IA/CustomIARenderComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomIAAssembler_1 = require("./CustomIAAssembler");
var CustomIARenderComponent = /** @class */ (function (_super) {
    __extends(CustomIARenderComponent, _super);
    function CustomIARenderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._texture = null;
        _this.uv = [];
        _this.local = [];
        _this.posOffset = 0;
        _this.max = 100;
        _this.direction = 1;
        _this.speed = 10;
        return _this;
    }
    Object.defineProperty(CustomIARenderComponent.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        set: function (val) {
            if (this._texture !== val) {
                this._texture = val;
                this.applyTexture();
            }
        },
        enumerable: false,
        configurable: true
    });
    CustomIARenderComponent.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this._activateMaterial();
        this.initVertexData();
    };
    //override
    CustomIARenderComponent.prototype._resetAssembler = function () {
        this.setVertsDirty(true);
        this._assembler = new CustomIAAssembler_1.default();
        this._assembler.init(this);
    };
    //override
    CustomIARenderComponent.prototype._activateMaterial = function () {
        var material = this.sharedMaterials[0];
        if (!material) {
            this.disableRender();
            return;
        }
        material = cc.Material.getInstantiatedMaterial(material, this);
        material.setProperty("texture", this.texture);
        this.setMaterial(0, material);
        this.markForRender(true);
    };
    CustomIARenderComponent.prototype.applyTexture = function () {
        var material = this.getMaterial(0);
        if (!material) {
            return;
        }
        material.setProperty("texture", this.texture);
    };
    CustomIARenderComponent.prototype.initVertexData = function () {
        var buffer = this._assembler.getBuffer();
        buffer.reset();
        buffer.request(4, 6);
        this.fillUV(buffer);
        this.fillIndices(buffer);
        this.fillVertex(buffer);
        buffer.uploadData();
        this._assembler._ia._count = 6;
    };
    CustomIARenderComponent.prototype.update = function (dt) {
        if (!this.getMaterial(0)) {
            return;
        }
        this.direction = this.posOffset >= this.max ? -1 : this.direction;
        this.direction = this.posOffset <= 0 ? 1 : this.direction;
        var step = dt * this.direction * this.speed;
        this.posOffset = this.posOffset + step;
        var buffer = this._assembler.getBuffer();
        var vbuf = buffer._vData;
        vbuf[0] += step;
        vbuf[15] -= step;
        buffer._vb.update(0, vbuf);
    };
    CustomIARenderComponent.prototype.fillUV = function (buffer) {
        var l = 0, r = 1, b = 1, t = 0;
        var vbuf = buffer._vData;
        vbuf[2] = l;
        vbuf[3] = b;
        vbuf[7] = r;
        vbuf[8] = b;
        vbuf[12] = l;
        vbuf[13] = t;
        vbuf[17] = r;
        vbuf[18] = t;
    };
    CustomIARenderComponent.prototype.fillIndices = function (buffer) {
        var iData = buffer._iData;
        iData[0] = 0;
        iData[1] = 1;
        iData[2] = 2;
        iData[3] = 1;
        iData[4] = 3;
        iData[5] = 2;
        var indicesData = new Uint16Array(iData.buffer, 0, iData.length);
        buffer._ib.update(0, indicesData);
    };
    CustomIARenderComponent.prototype.fillVertex = function (buffer) {
        var uintbuf = buffer._uintVData;
        var node = this.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch;
        var l = -appx, b = -appy, r = cw - appx, t = ch - appy;
        var local = this.local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        // color
        uintbuf[4] = this.node.color._val;
        uintbuf[9] = this.node.color._val;
        uintbuf[14] = this.node.color._val;
        uintbuf[19] = this.node.color._val;
        this.updateWorldVerts(buffer);
    };
    CustomIARenderComponent.prototype.updateWorldVerts = function (buffer) {
        this.node._updateWorldMatrix();
        var vbuf = buffer._vData;
        var local = this.local;
        var matrix = this.node._worldMatrix;
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
        if (justTranslate) {
            // left bottom
            vbuf[0] = vl + tx;
            vbuf[1] = vb + ty;
            // right bottom
            vbuf[5] = vr + tx;
            vbuf[6] = vb + ty;
            // left top
            vbuf[10] = vl + tx;
            vbuf[11] = vt + ty;
            // right top
            vbuf[15] = vr + tx;
            vbuf[16] = vt + ty;
        }
        else {
            var al = a * vl, ar = a * vr, bl = b * vl, br = b * vr, cb = c * vb, ct = c * vt, db = d * vb, dt = d * vt;
            // left bottom
            vbuf[0] = al + cb + tx;
            vbuf[1] = bl + db + ty;
            // right bottom
            vbuf[5] = ar + cb + tx;
            vbuf[6] = br + db + ty;
            // left top
            vbuf[10] = al + ct + tx;
            vbuf[11] = bl + dt + ty;
            // right top
            vbuf[15] = ar + ct + tx;
            vbuf[16] = br + dt + ty;
        }
    };
    __decorate([
        property
    ], CustomIARenderComponent.prototype, "_texture", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], CustomIARenderComponent.prototype, "texture", null);
    CustomIARenderComponent = __decorate([
        ccclass
    ], CustomIARenderComponent);
    return CustomIARenderComponent;
}(cc.RenderComponent));
exports.default = CustomIARenderComponent;

cc._RF.pop();