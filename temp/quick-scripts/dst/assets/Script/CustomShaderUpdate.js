
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomShaderUpdate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd155r9KaVKIovZu3yYoRZZ', 'CustomShaderUpdate');
// Script/CustomShaderUpdate.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomRenderComponent_1 = require("./CustomRenderComponent");
var SpriteShaderUpdate = /** @class */ (function (_super) {
    __extends(SpriteShaderUpdate, _super);
    function SpriteShaderUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._component = null;
        _this.limit = 1000;
        _this.step = 0.1;
        _this._material = null;
        _this._time = 0;
        return _this;
    }
    Object.defineProperty(SpriteShaderUpdate.prototype, "component", {
        get: function () {
            return this._component;
        },
        set: function (comp) {
            this._component = comp;
            if (this._component) {
                this._material = this._component.sharedMaterials[0];
            }
        },
        enumerable: false,
        configurable: true
    });
    SpriteShaderUpdate.prototype.onEnable = function () {
        if (this.component) {
            this._material = this.component.sharedMaterials[0];
        }
    };
    SpriteShaderUpdate.prototype.update = function (dt) {
        if (this._material) {
            this.setTime(dt);
        }
    };
    SpriteShaderUpdate.prototype.setTime = function (dt) {
        this._time += this.step;
        this._time = this._time >= this.limit ? 0 : this._time;
        this._material.setProperty('time', this._time);
    };
    SpriteShaderUpdate.prototype.onDisable = function () {
        this._material = null;
    };
    __decorate([
        property
    ], SpriteShaderUpdate.prototype, "_component", void 0);
    __decorate([
        property({
            type: CustomRenderComponent_1.default
        })
    ], SpriteShaderUpdate.prototype, "component", null);
    __decorate([
        property
    ], SpriteShaderUpdate.prototype, "limit", void 0);
    __decorate([
        property
    ], SpriteShaderUpdate.prototype, "step", void 0);
    SpriteShaderUpdate = __decorate([
        ccclass
    ], SpriteShaderUpdate);
    return SpriteShaderUpdate;
}(cc.Component));
exports.default = SpriteShaderUpdate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21TaGFkZXJVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLGlFQUE0RDtBQUc1RDtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQWlEQztRQTlDRyxnQkFBVSxHQUFHLElBQUksQ0FBQztRQWlCbEIsV0FBSyxHQUFHLElBQUksQ0FBQztRQUdiLFVBQUksR0FBRyxHQUFHLENBQUM7UUFFWCxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUM5QixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQXVCZCxDQUFDO0lBekNHLHNCQUFJLHlDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWUsSUFBSTtZQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RDtRQUNMLENBQUM7OztPQVBBO0lBa0JELHFDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUE3Q0Q7UUFEQyxRQUFROzBEQUNTO0lBS2xCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLCtCQUFxQjtTQUM5QixDQUFDO3VEQUdEO0lBVUQ7UUFEQyxRQUFRO3FEQUNJO0lBR2I7UUFEQyxRQUFRO29EQUNFO0lBdkJNLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBaUR0QztJQUFELHlCQUFDO0NBakRELEFBaURDLENBakQrQyxFQUFFLENBQUMsU0FBUyxHQWlEM0Q7a0JBakRvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBDdXN0b21SZW5kZXJDb21wb25lbnQgZnJvbSAnLi9DdXN0b21SZW5kZXJDb21wb25lbnQnO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlU2hhZGVyVXBkYXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICBfY29tcG9uZW50ID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBDdXN0b21SZW5kZXJDb21wb25lbnRcbiAgICB9KVxuICAgIGdldCBjb21wb25lbnQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50O1xuICAgIH1cblxuICAgIHNldCBjb21wb25lbnQgKGNvbXApIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50ID0gY29tcDtcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLl9jb21wb25lbnQuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgbGltaXQgPSAxMDAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgc3RlcCA9IDAuMTtcblxuICAgIF9tYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuICAgIF90aW1lID0gMDtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5jb21wb25lbnQuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUaW1lKGR0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbWUoZHQpIHtcbiAgICAgICAgdGhpcy5fdGltZSArPSB0aGlzLnN0ZXA7XG4gICAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLl90aW1lID49IHRoaXMubGltaXQgPyAwIDogdGhpcy5fdGltZTtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RpbWUnLCB0aGlzLl90aW1lKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gbnVsbDtcbiAgICB9XG59XG4iXX0=