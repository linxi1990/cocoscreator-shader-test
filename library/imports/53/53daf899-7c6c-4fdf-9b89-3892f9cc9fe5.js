"use strict";
cc._RF.push(module, '53dafiZfGxP35uJOJL5zJ/l', 'PostRenderTexture');
// Shader/Texture/PostRenderTexture/PostRenderTexture.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomRenderComponent_1 = require("../../../Script/CustomRenderComponent");
var PostRenderTexture = /** @class */ (function (_super) {
    __extends(PostRenderTexture, _super);
    function PostRenderTexture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this._sprite = null;
        _this.texture = null;
        _this.material = null;
        return _this;
    }
    Object.defineProperty(PostRenderTexture.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (val) {
            this._sprite = val;
            this.initMaterial();
        },
        enumerable: false,
        configurable: true
    });
    PostRenderTexture.prototype.start = function () {
        this.initMaterial();
    };
    PostRenderTexture.prototype.initMaterial = function () {
        this.material = this.sprite.sharedMaterials[0];
        if (!this.texture) {
            this.texture = new cc.RenderTexture();
            this.texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height);
            this.camera.targetTexture = this.texture;
            this.camera.render();
        }
        this.sprite.spriteFrame = new cc.SpriteFrame(this.texture);
        this.material.setProperty('texture', this.texture);
    };
    __decorate([
        property({
            type: cc.Camera
        })
    ], PostRenderTexture.prototype, "camera", void 0);
    __decorate([
        property
    ], PostRenderTexture.prototype, "_sprite", void 0);
    __decorate([
        property({
            type: CustomRenderComponent_1.default
        })
    ], PostRenderTexture.prototype, "sprite", null);
    PostRenderTexture = __decorate([
        ccclass
    ], PostRenderTexture);
    return PostRenderTexture;
}(cc.Component));
exports.default = PostRenderTexture;

cc._RF.pop();