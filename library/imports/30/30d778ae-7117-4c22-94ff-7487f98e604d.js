"use strict";
cc._RF.push(module, '30d77iucRdMIpT/dIf5jmBN', 'CustomRenderComponent');
// Script/CustomRenderComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomAssembler_1 = require("./CustomAssembler");
var CustomRenderComponent = /** @class */ (function (_super) {
    __extends(CustomRenderComponent, _super);
    function CustomRenderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomRenderComponent.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this._activateMaterial();
    };
    //override
    CustomRenderComponent.prototype._resetAssembler = function () {
        this.setVertsDirty(true);
        this._assembler = new CustomAssembler_1.default();
        this._assembler.init(this);
    };
    //override
    CustomRenderComponent.prototype._activateMaterial = function () {
        var material = this.sharedMaterials[0];
        if (!material) {
            this.disableRender();
            return;
        }
        material = cc.Material.getInstantiatedMaterial(material, this);
        this.setMaterial(0, material);
        this.markForRender(true);
    };
    CustomRenderComponent = __decorate([
        ccclass
    ], CustomRenderComponent);
    return CustomRenderComponent;
}(cc.RenderComponent));
exports.default = CustomRenderComponent;

cc._RF.pop();