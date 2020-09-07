
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomRenderComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21SZW5kZXJDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLHFEQUErQztBQUcvQztJQUFtRCx5Q0FBa0I7SUFBckU7O0lBeUJBLENBQUM7SUF4Qkcsd0NBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxVQUFVO0lBQ1YsK0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVTtJQUNWLGlEQUFpQixHQUFqQjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixPQUFPO1NBQ1Y7UUFFRCxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBeEJnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXlCekM7SUFBRCw0QkFBQztDQXpCRCxBQXlCQyxDQXpCa0QsRUFBRSxDQUFDLGVBQWUsR0F5QnBFO2tCQXpCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgQ3VzdG9tQXNzZW1ibGVyIGZyb20gJy4vQ3VzdG9tQXNzZW1ibGVyJ1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IGV4dGVuZHMgY2MuUmVuZGVyQ29tcG9uZW50IHtcbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlTWF0ZXJpYWwoKTtcbiAgICB9XG5cbiAgICAvL292ZXJyaWRlXG4gICAgX3Jlc2V0QXNzZW1ibGVyICgpIHtcbiAgICAgICAgdGhpcy5zZXRWZXJ0c0RpcnR5KHRydWUpO1xuICAgICAgICB0aGlzLl9hc3NlbWJsZXIgPSBuZXcgQ3VzdG9tQXNzZW1ibGVyKCk7XG4gICAgICAgIHRoaXMuX2Fzc2VtYmxlci5pbml0KHRoaXMpO1xuICAgIH1cblxuICAgIC8vb3ZlcnJpZGVcbiAgICBfYWN0aXZhdGVNYXRlcmlhbCAoKSB7XG4gICAgICAgIGxldCBtYXRlcmlhbCA9IHRoaXMuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVSZW5kZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbWF0ZXJpYWwgPSBjYy5NYXRlcmlhbC5nZXRJbnN0YW50aWF0ZWRNYXRlcmlhbChtYXRlcmlhbCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2V0TWF0ZXJpYWwoMCwgbWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XG4gICAgfVxufVxuIl19