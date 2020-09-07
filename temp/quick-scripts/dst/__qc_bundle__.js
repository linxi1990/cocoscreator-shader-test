
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Example/IA/CustomIAAssembler');
require('./assets/Example/IA/CustomIARenderComponent');
require('./assets/Script/CustomAssembler');
require('./assets/Script/CustomRenderComponent');
require('./assets/Script/CustomShaderUpdate');
require('./assets/Script/SceneManager');
require('./assets/Script/SpriteShaderUpdate');
require('./assets/Script/SpriteShaderUpdatemy');
require('./assets/Script/Start');
require('./assets/Script/SubScene');
require('./assets/Shader/GamePlay/PointLight/PointLight');
require('./assets/Shader/Texture/PostRenderTexture/PostRenderTexture');
require('./assets/Shader/Weather/Cloud/Cloud');
require('./assets/Shader/Weather/Rain/Rain');
require('./assets/Shader/eraser/eraser ');
require('./assets/Shader/mixtexture/mix');
require('./assets/Shader/uvaction/uvacton');
require('./assets/Shader/water/mixtexture');
require('./assets/migration/use_reversed_rotateTo');
require('./assets/resources/SpriteShaderUpdatemy1');
require('./assets/resources/breaken/breaken - 001');
require('./assets/resources/breaken/breaken');
require('./assets/resources/dissolve/dissolve');
require('./assets/resources/fire/fire');
require('./assets/resources/liquid/liquid');
require('./assets/resources/liquid/moveban');
require('./assets/resources/main');
require('./assets/resources/myassembler');
require('./assets/resources/myrender');
require('./assets/resources/outline/outline');
require('./assets/resources/postpoint/postpoint');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/breaken/breaken - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc11f5O3G9FH6SBQtpPwlIS', 'breaken - 001');
// resources/breaken/breaken - 001.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Label)
        // label: cc.Label = null;
        _this._material = null;
        // @property
        // text: string = 'hello';
        _this.mixtexture = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // this._material.setProperty('mixtexture', this.mixtexture);
    };
    NewClass.prototype.touchStartCallback = function () {
        var _this = this;
        cc.loader.loadRes('breaken/breaken', cc.Material, function (err, asset) {
            if (err) {
                cc.error(err);
            }
            _this.node.getComponent(cc.Sprite).setMaterial(0, asset);
            _this.node.getComponent(cc.Sprite).markForRender(true);
            _this._material = _this.node.getComponent(cc.Sprite).sharedMaterials[0];
            _this._material.setProperty('mixtexture', _this.mixtexture);
        });
        //     this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        //     this.node.getComponent(cc.Sprite).setMaterial(0, cc.Material.getInstantiatedMaterial('2d-gray-sprite',
        //         this.node.getComponent(cc.Sprite)))
        //     this._material.setProperty('mixtexture', this.mixtexture);
        // }
    };
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "mixtexture", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxicmVha2VuXFxicmVha2VuIC0gMDAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBDQztRQXhDRyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsWUFBWTtRQUNaLDBCQUEwQjtRQUkxQixnQkFBVSxHQUFnQixJQUFJLENBQUM7O1FBOEIvQixpQkFBaUI7SUFDckIsQ0FBQztJQTlCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixvRUFBb0U7UUFDcEUsNkRBQTZEO0lBQ2pFLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFBQSxpQkFpQkM7UUFoQkcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQ3pELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakI7WUFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0RSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO1FBQ1Asd0VBQXdFO1FBQ3hFLDZHQUE2RztRQUM3Ryw4Q0FBOEM7UUFDOUMsaUVBQWlFO1FBQ2pFLElBQUk7SUFDSixDQUFDO0lBNUJEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQUM7Z0RBQzZCO0lBWGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBDNUI7SUFBRCxlQUFDO0NBMUNELEFBMENDLENBMUNxQyxFQUFFLENBQUMsU0FBUyxHQTBDakQ7a0JBMUNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgX21hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuVGV4dHVyZTJEXHJcbiAgICB9KVxyXG4gICAgbWl4dGV4dHVyZTpjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMsIHRydWUpO1xyXG4gICAgICAgIC8vIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcbiAgICAgICAgLy8gdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21peHRleHR1cmUnLCB0aGlzLm1peHRleHR1cmUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0b3VjaFN0YXJ0Q2FsbGJhY2soKXtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnYnJlYWtlbi9icmVha2VuJywgY2MuTWF0ZXJpYWwsIChlcnIsIGFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCBhc3NldCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5tYXJrRm9yUmVuZGVyKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnbWl4dGV4dHVyZScsIHRoaXMubWl4dGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNoYXJlZE1hdGVyaWFsc1swXTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWwuZ2V0SW5zdGFudGlhdGVkTWF0ZXJpYWwoJzJkLWdyYXktc3ByaXRlJyxcclxuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSlcclxuICAgIC8vICAgICB0aGlzLl9tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnbWl4dGV4dHVyZScsIHRoaXMubWl4dGV4dHVyZSk7XHJcbiAgICAvLyB9XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/uvaction/uvacton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd449c14USdGebbYpsLI7qCw', 'uvacton');
// Shader/uvaction/uvacton.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        // @property(cc.Label)
        // label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        // text: string = 'hello';
        _this._material = null;
        // LIFE-CYCLE CALLBACKS:
        _this._totaltime = 0;
        return _this;
    }
    // onLoad () {}
    NewClass.prototype.start = function () {
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // let sf = this.getComponent(cc.Sprite).spriteFrame;
        // sf.getTexture()._wrapS = cc.Texture2D.WrapMode.REPEAT;
        // sf.getTexture()._wrapT = cc.Texture2D.WrapMode.REPEAT;
        //setTexParameters(cc.Texture2D.WrapMode.REPEAT, cc.Texture2D.WrapMode.REPEAT)
    };
    NewClass.prototype.update = function (dt) {
        this._totaltime += dt;
        this._material.setProperty('time', this._totaltime);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFx1dmFjdGlvblxcdXZhY3Rvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFFSSxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBSDlCLHFFQTBCQztRQXJCRyxZQUFZO1FBQ1osMEJBQTBCO1FBRTFCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsd0JBQXdCO1FBQ3hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQWdCbkIsQ0FBQztJQWRHLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUscURBQXFEO1FBQ3JELHlEQUF5RDtRQUN6RCx5REFBeUQ7UUFDekQsOEVBQThFO0lBQ2xGLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXpCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBCNUI7SUFBRCxlQUFDO0NBMUJELEFBMEJDLENBMUJxQyxFQUFFLENBQUMsU0FBUyxHQTBCakQ7a0JBMUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBfbWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBfdG90YWx0aW1lID0gMDtcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNoYXJlZE1hdGVyaWFsc1swXTtcclxuICAgICAgICAvLyBsZXQgc2YgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgIC8vIHNmLmdldFRleHR1cmUoKS5fd3JhcFMgPSBjYy5UZXh0dXJlMkQuV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgIC8vIHNmLmdldFRleHR1cmUoKS5fd3JhcFQgPSBjYy5UZXh0dXJlMkQuV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgIC8vc2V0VGV4UGFyYW1ldGVycyhjYy5UZXh0dXJlMkQuV3JhcE1vZGUuUkVQRUFULCBjYy5UZXh0dXJlMkQuV3JhcE1vZGUuUkVQRUFUKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHRpbWUgKz0gZHQ7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RpbWUnLCB0aGlzLl90b3RhbHRpbWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Example/IA/CustomIAAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhhbXBsZVxcSUFcXEN1c3RvbUlBQXNzZW1ibGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2pDLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO0FBRWxEO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBbUNDO1FBbENHLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixTQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFnQ2pCLENBQUM7SUE5QkcsZ0NBQUksR0FBSixVQUFNLElBQUk7UUFDTixpQkFBTSxJQUFJLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7SUFDakQsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLDBDQUEwQztZQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFhLElBQUksRUFBRSxRQUFRO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFFdEIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxDQW5DOEMsRUFBRSxDQUFDLFNBQVMsR0FtQzFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBNZXNoQnVmZmVyID0gY2MuTWVzaEJ1ZmZlcjtcbmNvbnN0IElucHV0QXNzZW1ibGVyID0gY2MucmVuZGVyZXIuSW5wdXRBc3NlbWJsZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUlBQXNzZW1ibGVyIGV4dGVuZHMgY2MuQXNzZW1ibGVyIHtcbiAgICBfYnVmZmVyID0gbnVsbDtcbiAgICBfaWEgPSBudWxsO1xuICAgIF92Zm10ID0gbnVsbDtcblxuICAgIGluaXQgKGNvbXApIHtcbiAgICAgICAgc3VwZXIuaW5pdChjb21wKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lhID0gbnVsbDtcblxuICAgICAgICB0aGlzLl92Zm10ID0gY2MuZ2Z4LlZlcnRleEZvcm1hdC5YWV9VVl9Db2xvcjtcbiAgICB9XG5cbiAgICBnZXRCdWZmZXIgKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2J1ZmZlcikge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHF1YWQgYnVmZmVyIGZvciB2ZXJ0ZXggYW5kIGluZGV4XG4gICAgICAgICAgICB0aGlzLl9idWZmZXIgPSBuZXcgTWVzaEJ1ZmZlcihjYy5yZW5kZXJlci5faGFuZGxlLCB0aGlzLl92Zm10KTtcblxuICAgICAgICAgICAgdGhpcy5faWEgPSBuZXcgSW5wdXRBc3NlbWJsZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2lhLl92ZXJ0ZXhCdWZmZXIgPSB0aGlzLl9idWZmZXIuX3ZiO1xuICAgICAgICAgICAgdGhpcy5faWEuX2luZGV4QnVmZmVyID0gdGhpcy5fYnVmZmVyLl9pYjtcbiAgICAgICAgICAgIHRoaXMuX2lhLl9zdGFydCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9pYS5fY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXI7XG4gICAgfVxuICAgIFxuICAgIGZpbGxCdWZmZXJzIChjb21wLCByZW5kZXJlcikge1xuICAgICAgICBpZiAoIXRoaXMuX2lhKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlci5ub2RlID0gY29tcC5ub2RlO1xuICAgICAgICByZW5kZXJlci5tYXRlcmlhbCA9IGNvbXAuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgICAgICByZW5kZXJlci5fZmx1c2hJQSh0aGlzLl9pYSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/Weather/Rain/Rain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a9d0Fh0e9LypVmmMwy9aMC', 'Rain');
// Shader/Weather/Rain/Rain.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Rain = /** @class */ (function (_super) {
    __extends(Rain, _super);
    function Rain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this._time = 0;
        _this._material = null;
        return _this;
    }
    Rain.prototype.onEnable = function () {
        this._material = this.sprite.sharedMaterials[0];
    };
    Rain.prototype.update = function (dt) {
        if (this.node.active && this._material) {
            this.setTime(dt);
        }
    };
    Rain.prototype.setTime = function (dt) {
        this._time += dt;
        if (this._time >= 1000) {
            this._time = 0;
        }
        this._material.setProperty('time', this._time);
    };
    __decorate([
        property({
            type: cc.Sprite
        })
    ], Rain.prototype, "sprite", void 0);
    Rain = __decorate([
        ccclass
    ], Rain);
    return Rain;
}(cc.Component));
exports.default = Rain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxXZWF0aGVyXFxSYWluXFxSYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXdCQztRQXBCRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWlCckIsQ0FBQztJQWZHLHVCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxxQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUNELHNCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQW5CRDtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtTQUNsQixDQUFDO3dDQUN1QjtJQUpSLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F3QnhCO0lBQUQsV0FBQztDQXhCRCxBQXdCQyxDQXhCaUMsRUFBRSxDQUFDLFNBQVMsR0F3QjdDO2tCQXhCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgfSlcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBfdGltZSA9IDA7XG4gICAgX21hdGVyaWFsID0gbnVsbDtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuc3ByaXRlLnNoYXJlZE1hdGVyaWFsc1swXTtcbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlICYmIHRoaXMuX21hdGVyaWFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRpbWUoZHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRpbWUoZHQpIHtcbiAgICAgICAgdGhpcy5fdGltZSArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMuX3RpbWUgPj0gMTAwMCkge1xuICAgICAgICAgICAgdGhpcy5fdGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RpbWUnLCB0aGlzLl90aW1lKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/Texture/PostRenderTexture/PostRenderTexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxUZXh0dXJlXFxQb3N0UmVuZGVyVGV4dHVyZVxcUG9zdFJlbmRlclRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLCtFQUF5RTtBQUd6RTtJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXdDQztRQXBDRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFjekIsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsY0FBUSxHQUFlLElBQUksQ0FBQzs7SUFrQmhDLENBQUM7SUE1Qkcsc0JBQUkscUNBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxHQUFHO1lBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQUxBO0lBU0QsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFuQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07U0FDbEIsQ0FBQztxREFDdUI7SUFHekI7UUFEQyxRQUFRO3NEQUNnQjtJQUt6QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSwrQkFBcUI7U0FDOUIsQ0FBQzttREFHRDtJQWRnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXdDckM7SUFBRCx3QkFBQztDQXhDRCxBQXdDQyxDQXhDOEMsRUFBRSxDQUFDLFNBQVMsR0F3QzFEO2tCQXhDb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9DdXN0b21SZW5kZXJDb21wb25lbnQnXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0UmVuZGVyVGV4dHVyZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ2FtZXJhXG4gICAgfSlcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBfc3ByaXRlOmNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBDdXN0b21SZW5kZXJDb21wb25lbnRcbiAgICB9KVxuICAgIGdldCBzcHJpdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlO1xuICAgIH1cblxuICAgIHNldCBzcHJpdGUgKHZhbCkge1xuICAgICAgICB0aGlzLl9zcHJpdGUgPSB2YWw7XG4gICAgICAgIHRoaXMuaW5pdE1hdGVyaWFsKCk7XG4gICAgfVxuXG4gICAgdGV4dHVyZTpjYy5SZW5kZXJUZXh0dXJlID0gbnVsbDtcbiAgICBtYXRlcmlhbDpjYy5NYXRlcmlhbCA9IG51bGw7XG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmluaXRNYXRlcmlhbCgpO1xuICAgIH1cblxuICAgIGluaXRNYXRlcmlhbCAoKSB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSB0aGlzLnNwcml0ZS5zaGFyZWRNYXRlcmlhbHNbMF07XG5cbiAgICAgICAgaWYgKCF0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUuaW5pdFdpdGhTaXplKGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMudGV4dHVyZTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnJlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgndGV4dHVyZScsIHRoaXMudGV4dHVyZSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/GamePlay/PointLight/PointLight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '115bdAojHZNYbdP2ZowdaVa', 'PointLight');
// Shader/GamePlay/PointLight/PointLight.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomRenderComponent_1 = require("../../../Script/CustomRenderComponent");
var PointLight = /** @class */ (function (_super) {
    __extends(PointLight, _super);
    function PointLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.component = null;
        _this._material = null;
        _this._down = false;
        _this._mouse = cc.v2(0, 0);
        return _this;
    }
    PointLight.prototype.onEnable = function () {
        this._material = this.component.sharedMaterials[0];
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMove, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);
    };
    PointLight.prototype.mouseDown = function (event) {
        this._down = true;
    };
    PointLight.prototype.mouseMove = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._mouse.x = event.getLocationX() / cc.winSize.width;
        this._mouse.y = event.getLocationY() / cc.winSize.height;
        this.setMouse();
    };
    PointLight.prototype.mouseLeave = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._down = false;
    };
    PointLight.prototype.mouseUp = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._down = false;
    };
    PointLight.prototype.setMouse = function () {
        if (this.node.active && this._material) {
            this._material.setProperty('mouse', cc.v2(this._mouse));
        }
    };
    __decorate([
        property({
            type: CustomRenderComponent_1.default
        })
    ], PointLight.prototype, "component", void 0);
    PointLight = __decorate([
        ccclass
    ], PointLight);
    return PointLight;
}(cc.Component));
exports.default = PointLight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxHYW1lUGxheVxcUG9pbnRMaWdodFxcUG9pbnRMaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsK0VBQXlFO0FBR3pFO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBdURDO1FBbERHLGVBQVMsR0FBMEIsSUFBSSxDQUFDO1FBRXhDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUE4Q3pCLENBQUM7SUE1Q0csNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsT0FBTTtTQUNUO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBWSxLQUFLO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBakREO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLCtCQUFxQjtTQUM5QixDQUFDO2lEQUNzQztJQUx2QixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdUQ5QjtJQUFELGlCQUFDO0NBdkRELEFBdURDLENBdkR1QyxFQUFFLENBQUMsU0FBUyxHQXVEbkQ7a0JBdkRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmltcG9ydCBDdXN0b21SZW5kZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0L0N1c3RvbVJlbmRlckNvbXBvbmVudCdcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50TGlnaHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogQ3VzdG9tUmVuZGVyQ29tcG9uZW50XG4gICAgfSlcbiAgICBjb21wb25lbnQ6IEN1c3RvbVJlbmRlckNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBfbWF0ZXJpYWwgPSBudWxsO1xuICAgIF9kb3duID0gZmFsc2U7XG4gICAgX21vdXNlID0gY2MudjIoMCwgMCk7XG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5jb21wb25lbnQuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5tb3VzZURvd24sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5tb3VzZU1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMubW91c2VMZWF2ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5tb3VzZVVwLCB0aGlzKTtcbiAgICB9XG5cbiAgICBtb3VzZURvd24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2Rvd24gPSB0cnVlO1xuICAgIH1cblxuICAgIG1vdXNlTW92ZSAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kb3duKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbW91c2UueCA9IGV2ZW50LmdldExvY2F0aW9uWCgpIC8gY2Mud2luU2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5fbW91c2UueSA9IGV2ZW50LmdldExvY2F0aW9uWSgpIC8gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc2V0TW91c2UoKTtcbiAgICB9XG5cbiAgICBtb3VzZUxlYXZlIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX2Rvd24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZG93biA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdXNlVXAgKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fZG93bikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kb3duID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TW91c2UgKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSAmJiB0aGlzLl9tYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21vdXNlJywgY2MudjIodGhpcy5fbW91c2UpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/liquid/liquid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e479qDoDVIe6GEXR9X44VU', 'liquid');
// resources/liquid/liquid.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        // @property(cc.Label)
        // label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        // text: string = 'hello';
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.camera = null;
        _this.liquid = null;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
    };
    NewClass.prototype.touchStartCallback = function (event) {
        for (var i = 0; i < 1; i++) {
            var postion = this.node.convertToNodeSpaceAR(event.getLocation());
            var liquid = cc.instantiate(this.liquid);
            liquid.parent = this.node;
            liquid.x = postion.x;
            liquid.y = postion.y;
        }
    };
    NewClass.prototype.update = function (dt) {
        var texture = new cc.RenderTexture();
        texture.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
        this.camera.getComponent(cc.Camera).targetTexture = texture;
        this.camera.getComponent(cc.Camera).render();
        var sf = new cc.SpriteFrame(texture);
        this.node.scaleY = -1;
        this.node.getComponent(cc.Sprite).spriteFrame = sf;
    };
    __decorate([
        property({
            type: cc.Camera
        })
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property({
            type: cc.Node
        })
    ], NewClass.prototype, "liquid", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxsaXF1aWRcXGxpcXVpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFFSSxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBSDlCLHFFQThDQztRQXpDRyxZQUFZO1FBQ1osMEJBQTBCO1FBRTFCLHdCQUF3QjtRQUV4QixlQUFlO1FBSWYsWUFBTSxHQUFHLElBQUksQ0FBQztRQUtkLFlBQU0sR0FBRyxJQUFJLENBQUM7O0lBMkJsQixDQUFDO0lBekJHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQscUNBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUcsRUFBQztZQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQS9CRDtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTTtTQUNqQixDQUFDOzRDQUNZO0lBS2Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUk7U0FDZixDQUFDOzRDQUNZO0lBbkJHLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QzVCO0lBQUQsZUFBQztDQTlDRCxBQThDQyxDQTlDcUMsRUFBRSxDQUFDLFNBQVMsR0E4Q2pEO2tCQTlDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgLy8gbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuQ2FtZXJhXHJcbiAgICB9KVxyXG4gICAgY2FtZXJhID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgfSlcclxuICAgIGxpcXVpZCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnRDYWxsYmFjayhldmVudCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDE7IGkgKyspe1xyXG4gICAgICAgICAgICBsZXQgcG9zdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAgICAgbGV0IGxpcXVpZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlxdWlkKTtcclxuICAgICAgICAgICAgbGlxdWlkLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGlxdWlkLnggPSBwb3N0aW9uLng7XHJcbiAgICAgICAgICAgIGxpcXVpZC55ID0gcG9zdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xyXG5cclxuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLndpZHRoLCBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkucmVuZGVyKCk7XHJcbiAgICAgICAgbGV0IHNmID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVkgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc2Y7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af15egE90BAzYL7Jy5z3+Px', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlVG8uanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVUbyIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBQSxFQUFFLENBQUNDLFFBQUgsQ0FBWUMsUUFBWixHQUF1QixJQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIHZlcnNpb25zLlxyXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxyXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLkFjdGlvbiBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxyXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIOeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIEFjdGlvbu+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmNjLlJvdGF0ZVRvLl9yZXZlcnNlID0gdHJ1ZTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/fire/fire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cdc5UOo89Kj4igdqQOsm7n', 'fire');
// resources/fire/fire.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        // @property(cc.Label)
        // label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        // text: string = 'hello';
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this._material = null;
        _this._time = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    //
    NewClass.prototype.update = function (dt) {
        this._time += 0.1;
        this._time = this._time >= 1000 ? 0 : this._time;
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        this._material.setProperty('time', this._time);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxmaXJlXFxmaXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUVJLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFIOUIscUVBMEJDO1FBckJHLFlBQVk7UUFDWiwwQkFBMEI7UUFFMUIsd0JBQXdCO1FBRXhCLGVBQWU7UUFDZixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBYWQsQ0FBQztJQVpHLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsRUFBRTtJQUNGLHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXpCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBCNUI7SUFBRCxlQUFDO0NBMUJELEFBMEJDLENBMUJxQyxFQUFFLENBQUMsU0FBUyxHQTBCakQ7a0JBMUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIF9tYXRlcmlhbCA9IG51bGw7XHJcblxyXG4gICAgX3RpbWUgPSAwO1xyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuX3RpbWUgKz0gMC4xO1xyXG4gICAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLl90aW1lID49IDEwMDAgPyAwIDogdGhpcy5fdGltZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2hhcmVkTWF0ZXJpYWxzWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KCd0aW1lJywgdGhpcy5fdGltZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/dissolve/dissolve.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '848b839dihL2ZHlq6Nus6W1', 'dissolve');
// resources/dissolve/dissolve.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        // @property(cc.Label)
        // label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        // text: string = 'hello';
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.nosisetexture = null;
        _this.u_lut = null;
        _this._material = null;
        _this._start = false;
        _this._time = 0;
        return _this;
    }
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
    };
    //动态赋值材质
    NewClass.prototype.touchStartCallback = function () {
        var _this = this;
        cc.loader.loadRes('dissolve/dissolve', cc.Material, function (err, asset) {
            if (err) {
                cc.error(err);
            }
            _this.node.getComponent(cc.Sprite).setMaterial(0, asset);
            _this.node.getComponent(cc.Sprite).markForRender(true);
            _this._material = _this.node.getComponent(cc.Sprite).getMaterial(0);
            _this._material.setProperty('nosisetexture', _this.nosisetexture);
            _this._material.setProperty('u_lut', _this.u_lut);
            _this._start = true;
        });
    };
    NewClass.prototype.update = function (dt) {
        if (this._start) {
            this._time += 0.1;
            this._time = this._time >= 1000 ? 0 : this._time;
            this._material = this.getComponent(cc.Sprite).getMaterial(0);
            this._material.setProperty('time', this._time);
        }
    };
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "nosisetexture", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "u_lut", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxkaXNzb2x2ZVxcZGlzc29sdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBRUksc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUg5QixxRUF3REM7UUFuREcsWUFBWTtRQUNaLDBCQUEwQjtRQUUxQix3QkFBd0I7UUFFeEIsZUFBZTtRQUlmLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUtsQyxXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQWlDZCxDQUFDO0lBL0JHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixvRUFBb0U7SUFDeEUsQ0FBQztJQUVELFFBQVE7SUFDUixxQ0FBa0IsR0FBbEI7UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSztZQUMzRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1lBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTdELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBekNEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQUM7bURBQ2dDO0lBS2xDO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQUM7MkNBQ3dCO0lBbkJULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3RDVCO0lBQUQsZUFBQztDQXhERCxBQXdEQyxDQXhEcUMsRUFBRSxDQUFDLFNBQVMsR0F3RGpEO2tCQXhEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgLy8gbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuVGV4dHVyZTJEXHJcbiAgICB9KVxyXG4gICAgbm9zaXNldGV4dHVyZTpjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuVGV4dHVyZTJEXHJcbiAgICB9KVxyXG4gICAgdV9sdXQ6Y2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcbiAgICBfbWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgX3N0YXJ0ID0gZmFsc2U7XHJcbiAgICBfdGltZSA9IDA7XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydENhbGxiYWNrLCB0aGlzLCB0cnVlKTtcclxuICAgICAgICAvLyB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2hhcmVkTWF0ZXJpYWxzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqo5oCB6LWL5YC85p2Q6LSoXHJcbiAgICB0b3VjaFN0YXJ0Q2FsbGJhY2soKXtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZGlzc29sdmUvZGlzc29sdmUnLCBjYy5NYXRlcmlhbCwgKGVyciwgYXNzZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGFzc2V0KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ25vc2lzZXRleHR1cmUnLCB0aGlzLm5vc2lzZXRleHR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5zZXRQcm9wZXJ0eSgndV9sdXQnLCB0aGlzLnVfbHV0KTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLl9zdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWUgKz0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lID0gdGhpcy5fdGltZSA+PSAxMDAwID8gMCA6IHRoaXMuX3RpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KCd0aW1lJywgdGhpcy5fdGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/outline/outline.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02827uHC9tLy6GMyul5qhza', 'outline');
// resources/outline/outline.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxvdXRsaW5lXFxvdXRsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/postpoint/postpoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1458zImMZFto37MpRkOkR7', 'postpoint');
// resources/postpoint/postpoint.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.mixtexture = null;
        _this._material = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchStartCallback, this, true);
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        this._material.setProperty('mixtexture', this.mixtexture);
    };
    NewClass.prototype.touchStartCallback = function (event) {
        // let postion = this.node.convertToNodeSpaceAR(event.getLocation());
        // let uvxoffset = (postion.x + this.node.width / 2) / this.node.width;
        // let uvyoffset = (-postion.y + this.node.height / 2) / this.node.height;
        // console.log(uvxoffset);
        // console.log(uvyoffset);
        var postion = event.getLocation();
        var uvxoffset = postion.x / this.node.width;
        var uvyoffset = postion.y / this.node.height;
        this._material.setProperty('pos', new cc.Vec2(uvxoffset, uvyoffset));
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "mixtexture", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxwb3N0cG9pbnRcXHBvc3Rwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3Q0M7UUFyQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBS3ZCLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQUcsSUFBSSxDQUFDOztRQTBCakIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQscUNBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIscUVBQXFFO1FBQ3JFLHVFQUF1RTtRQUN2RSwwRUFBMEU7UUFDMUUsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUUxQixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTdDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQWxDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQUt2QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUztTQUNwQixDQUFDO2dEQUM2QjtJQVhkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3QzVCO0lBQUQsZUFBQztDQXhDRCxBQXdDQyxDQXhDcUMsRUFBRSxDQUFDLFNBQVMsR0F3Q2pEO2tCQXhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOmNjLlRleHR1cmUyRFxyXG4gICAgfSlcclxuICAgIG1peHRleHR1cmU6Y2MuVGV4dHVyZTJEID0gbnVsbDtcclxuXHJcbiAgICBfbWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21peHRleHR1cmUnLCB0aGlzLm1peHRleHR1cmUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0b3VjaFN0YXJ0Q2FsbGJhY2soZXZlbnQpe1xyXG4gICAgICAgIC8vIGxldCBwb3N0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIC8vIGxldCB1dnhvZmZzZXQgPSAocG9zdGlvbi54ICsgdGhpcy5ub2RlLndpZHRoIC8gMikgLyB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgLy8gbGV0IHV2eW9mZnNldCA9ICgtcG9zdGlvbi55ICsgdGhpcy5ub2RlLmhlaWdodCAvIDIpIC8gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dnhvZmZzZXQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHV2eW9mZnNldCk7XHJcblxyXG4gICAgICAgIGxldCBwb3N0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgdXZ4b2Zmc2V0ID0gcG9zdGlvbi54IC8gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgIGxldCB1dnlvZmZzZXQgPSBwb3N0aW9uLnkgLyB0aGlzLm5vZGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zZXRQcm9wZXJ0eSgncG9zJywgbmV3IGNjLlZlYzIodXZ4b2Zmc2V0LCB1dnlvZmZzZXQpKTtcclxuICAgIH0gIFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/mixtexture/mix.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39befXoNtZOX5tbpm08ZYFV', 'mix');
// Shader/mixtexture/mix.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        // @property
        // text: string = 'hello';
        _this.mixtexture = null;
        _this._material = null;
        _this._totaltime = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        this._material.setProperty('mixtexture', this.mixtexture);
    };
    NewClass.prototype.update = function (dt) {
        this._totaltime += dt;
        this._material.setProperty('time', this._totaltime);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "mixtexture", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxtaXh0ZXh0dXJlXFxtaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNEJDO1FBekJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsWUFBWTtRQUNaLDBCQUEwQjtRQUsxQixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLENBQUMsQ0FBQzs7SUFjbkIsQ0FBQztJQWJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFRdkI7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVM7U0FDcEIsQ0FBQztnREFDNkI7SUFYZCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEI1QjtJQUFELGVBQUM7Q0E1QkQsQUE0QkMsQ0E1QnFDLEVBQUUsQ0FBQyxTQUFTLEdBNEJqRDtrQkE1Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTpjYy5UZXh0dXJlMkRcclxuICAgIH0pXHJcbiAgICBtaXh0ZXh0dXJlOmNjLlRleHR1cmUyRCA9IG51bGw7XHJcblxyXG4gICAgX21hdGVyaWFsID0gbnVsbDtcclxuICAgIF90b3RhbHRpbWUgPSAwO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21peHRleHR1cmUnLCB0aGlzLm1peHRleHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHRpbWUgKz0gZHQ7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RpbWUnLCB0aGlzLl90b3RhbHRpbWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/water/mixtexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e79b6MTUQhKkIWsqSPQvVl7', 'mixtexture');
// Shader/water/mixtexture.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._material = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this._totaltime = 0;
        return _this;
    }
    NewClass.prototype.onEnable = function () {
        this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // this._material.setProperty('inTexture', );
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, true);
    };
    NewClass.prototype.touchStartCallback = function (event) {
        var postion = this.node.convertToNodeSpaceAR(event.getLocation());
        postion.x += this.node.width / 2;
        postion.y = this.node.height / 2 - postion.y;
        console.log(postion.x / this.node.width + "////" + postion.y / this.node.height);
        this._totaltime = 0;
        this._material.setProperty('time', this._totaltime);
        this._material.setProperty('postion', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
    };
    NewClass.prototype.touchMoveCallback = function (event) {
        var postion = this.node.convertToNodeSpaceAR(event.getLocation());
        postion.x += this.node.width / 2;
        postion.y = this.node.height / 2 - postion.y;
        console.log(postion.x / this.node.width + "////" + postion.y / this.node.height);
        this._totaltime = 0;
        this._material.setProperty('time', this._totaltime);
        this._material.setProperty('postion', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
    };
    NewClass.prototype.update = function (dt) {
        this._totaltime += 0.01;
        this._totaltime = this._totaltime >= 1000 ? 0 : this._totaltime;
        // this._totaltime += dt;
        // if(this._totaltime > 1){
        //     this._totaltime -= 1;
        // }
        this._material.setProperty('time', this._totaltime);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFx3YXRlclxcbWl4dGV4dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2Q0M7UUE1Q0csZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQix3QkFBd0I7UUFFeEIsZUFBZTtRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQXdDbkIsQ0FBQztJQXRDRywyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEIsVUFBbUIsS0FBSztRQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxvQ0FBaUIsR0FBakIsVUFBa0IsS0FBSztRQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoRSx5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixJQUFJO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBNUNnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkM1QjtJQUFELGVBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNkNqRDtrQkE3Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgX21hdGVyaWFsID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgX3RvdGFsdGltZSA9IDA7XHJcblxyXG4gICAgb25FbmFibGUgKCkge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcbiAgICAgICAgLy8gdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2luVGV4dHVyZScsICk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnRDYWxsYmFjaywgdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlQ2FsbGJhY2ssIHRoaXMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoU3RhcnRDYWxsYmFjayhldmVudCl7XHJcbiAgICAgICAgbGV0IHBvc3Rpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgcG9zdGlvbi54ICs9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgcG9zdGlvbi55ID0gdGhpcy5ub2RlLmhlaWdodCAvIDIgLSBwb3N0aW9uLnk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9zdGlvbi54IC8gdGhpcy5ub2RlLndpZHRoICsgXCIvLy8vXCIgKyBwb3N0aW9uLnkgLyB0aGlzLm5vZGUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl90b3RhbHRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KCd0aW1lJywgdGhpcy5fdG90YWx0aW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3Bvc3Rpb24nLCBjYy52Mihwb3N0aW9uLnggLyB0aGlzLm5vZGUud2lkdGgsIHBvc3Rpb24ueSAvIHRoaXMubm9kZS5oZWlnaHQpKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaE1vdmVDYWxsYmFjayhldmVudCl7XHJcbiAgICAgICAgbGV0IHBvc3Rpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgcG9zdGlvbi54ICs9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgcG9zdGlvbi55ID0gdGhpcy5ub2RlLmhlaWdodCAvIDIgLSBwb3N0aW9uLnk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9zdGlvbi54IC8gdGhpcy5ub2RlLndpZHRoICsgXCIvLy8vXCIgKyBwb3N0aW9uLnkgLyB0aGlzLm5vZGUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl90b3RhbHRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KCd0aW1lJywgdGhpcy5fdG90YWx0aW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3Bvc3Rpb24nLCBjYy52Mihwb3N0aW9uLnggLyB0aGlzLm5vZGUud2lkdGgsIHBvc3Rpb24ueSAvIHRoaXMubm9kZS5oZWlnaHQpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWx0aW1lICs9IDAuMDE7XHJcbiAgICAgICAgdGhpcy5fdG90YWx0aW1lID0gdGhpcy5fdG90YWx0aW1lID49IDEwMDAgPyAwIDogdGhpcy5fdG90YWx0aW1lO1xyXG4gICAgICAgIC8vIHRoaXMuX3RvdGFsdGltZSArPSBkdDtcclxuICAgICAgICAvLyBpZih0aGlzLl90b3RhbHRpbWUgPiAxKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fdG90YWx0aW1lIC09IDE7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KCd0aW1lJywgdGhpcy5fdG90YWx0aW1lKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpriteShaderUpdate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fba57DFKJMw6YH1WyqbUj0', 'SpriteShaderUpdate');
// Script/SpriteShaderUpdate.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpriteShaderUpdate = /** @class */ (function (_super) {
    __extends(SpriteShaderUpdate, _super);
    function SpriteShaderUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sprite = null;
        _this.limit = 1000;
        _this.step = 0.1;
        _this._material = null;
        _this._time = 0;
        return _this;
    }
    Object.defineProperty(SpriteShaderUpdate.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (spr) {
            this._sprite = spr;
            if (this._sprite) {
                this._material = this._sprite.sharedMaterials[0];
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    SpriteShaderUpdate.prototype.onEnable = function () {
        if (this.sprite) {
            this._material = this.sprite.sharedMaterials[0];
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
    ], SpriteShaderUpdate.prototype, "_sprite", void 0);
    __decorate([
        property({
            type: cc.Sprite
        })
    ], SpriteShaderUpdate.prototype, "sprite", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTcHJpdGVTaGFkZXJVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBa0RDO1FBL0NHLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFrQmYsV0FBSyxHQUFHLElBQUksQ0FBQztRQUdiLFVBQUksR0FBRyxHQUFHLENBQUM7UUFFWCxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUM5QixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQXVCZCxDQUFDO0lBMUNHLHNCQUFJLHNDQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVksR0FBRztZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0wsQ0FBQzs7O09BUEE7SUFBQSxDQUFDO0lBbUJGLHFDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQTlDRDtRQURDLFFBQVE7dURBQ007SUFLZjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtTQUNsQixDQUFDO29EQUdEO0lBV0Q7UUFEQyxRQUFRO3FEQUNJO0lBR2I7UUFEQyxRQUFRO29EQUNFO0lBeEJNLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBa0R0QztJQUFELHlCQUFDO0NBbERELEFBa0RDLENBbEQrQyxFQUFFLENBQUMsU0FBUyxHQWtEM0Q7a0JBbERvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlU2hhZGVyVXBkYXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBfc3ByaXRlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVcclxuICAgIH0pXHJcbiAgICBnZXQgc3ByaXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldCBzcHJpdGUgKHNwcikge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHNwcjtcclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5fc3ByaXRlLnNoYXJlZE1hdGVyaWFsc1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbGltaXQgPSAxMDAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3RlcCA9IDAuMTtcclxuXHJcbiAgICBfbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIF90aW1lID0gMDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLnNwcml0ZS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXRlcmlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpbWUoZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lKGR0KSB7XHJcbiAgICAgICAgdGhpcy5fdGltZSArPSB0aGlzLnN0ZXA7XHJcbiAgICAgICAgdGhpcy5fdGltZSA9IHRoaXMuX3RpbWUgPj0gdGhpcy5saW1pdCA/IDAgOiB0aGlzLl90aW1lO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KCd0aW1lJywgdGhpcy5fdGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SubScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1eb98g8xH1KD4jUvum2w5LZ', 'SubScene');
// Script/SubScene.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManager_1 = require("./SceneManager");
var SubScene = /** @class */ (function (_super) {
    __extends(SubScene, _super);
    function SubScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.max = 0;
        return _this;
    }
    SubScene.prototype.onEnable = function () {
        this.max = SceneManager_1.default.SceneList[SceneManager_1.default.GroupName].length;
    };
    SubScene.prototype.clickPrev = function () {
        this.index--;
        if (this.index < 0) {
            this.index = this.max - 1;
        }
        var scene = SceneManager_1.default.SceneList[SceneManager_1.default.GroupName][this.index];
        cc.director.loadScene(scene);
    };
    SubScene.prototype.clickReturn = function () {
        this.index = 0;
        cc.director.loadScene("Start");
    };
    SubScene.prototype.clickNext = function () {
        this.index++;
        if (this.index >= this.max) {
            this.index = 0;
        }
        var scene = SceneManager_1.default.SceneList[SceneManager_1.default.GroupName][this.index];
        cc.director.loadScene(scene);
    };
    SubScene = __decorate([
        ccclass
    ], SubScene);
    return SubScene;
}(cc.Component));
exports.default = SubScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTdWJTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsK0NBQXlDO0FBR3pDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUNDO1FBL0JXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsU0FBRyxHQUFXLENBQUMsQ0FBQzs7SUE4QjVCLENBQUM7SUE1QkcsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsc0JBQVksQ0FBQyxTQUFTLENBQUMsc0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckUsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLEtBQUssR0FBRyxzQkFBWSxDQUFDLFNBQVMsQ0FBQyxzQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUVELElBQUksS0FBSyxHQUFHLHNCQUFZLENBQUMsU0FBUyxDQUFDLHNCQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFoQ2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQzVCO0lBQUQsZUFBQztDQWpDRCxBQWlDQyxDQWpDcUMsRUFBRSxDQUFDLFNBQVMsR0FpQ2pEO2tCQWpDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gJy4vU2NlbmVNYW5hZ2VyJ1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG1heDogbnVtYmVyID0gMDtcblxuICAgIG9uRW5hYmxlICgpIHtcbiAgICAgICAgdGhpcy5tYXggPSBTY2VuZU1hbmFnZXIuU2NlbmVMaXN0W1NjZW5lTWFuYWdlci5Hcm91cE5hbWVdLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjbGlja1ByZXYgKCkge1xuICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMubWF4IC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzY2VuZSA9IFNjZW5lTWFuYWdlci5TY2VuZUxpc3RbU2NlbmVNYW5hZ2VyLkdyb3VwTmFtZV1bdGhpcy5pbmRleF07XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSk7XG4gICAgfVxuXG4gICAgY2xpY2tSZXR1cm4gKCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU3RhcnRcIik7XG4gICAgfVxuXG4gICAgY2xpY2tOZXh0ICgpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2NlbmUgPSBTY2VuZU1hbmFnZXIuU2NlbmVMaXN0W1NjZW5lTWFuYWdlci5Hcm91cE5hbWVdW3RoaXMuaW5kZXhdO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/Weather/Cloud/Cloud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41e1d/jwi9LMLP+HSey+FhV', 'Cloud');
// Shader/Weather/Cloud/Cloud.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Rain = /** @class */ (function (_super) {
    __extends(Rain, _super);
    function Rain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this._time = 0;
        _this._material = null;
        return _this;
    }
    Rain.prototype.onEnable = function () {
        this._material = this.sprite.sharedMaterials[0];
    };
    Rain.prototype.update = function (dt) {
        if (this.node.active && this._material) {
            this.setTime(dt);
        }
    };
    Rain.prototype.setTime = function (dt) {
        this._time += dt;
        if (this._time >= 1000) {
            this._time = 0;
        }
        this._material.setProperty('time', this._time);
    };
    __decorate([
        property({
            type: cc.Sprite
        })
    ], Rain.prototype, "sprite", void 0);
    Rain = __decorate([
        ccclass
    ], Rain);
    return Rain;
}(cc.Component));
exports.default = Rain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxXZWF0aGVyXFxDbG91ZFxcQ2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBd0JDO1FBcEJHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBaUJyQixDQUFDO0lBZkcsdUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELHFCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBQ0Qsc0JBQU8sR0FBUCxVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBbkJEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7d0NBQ3VCO0lBSlIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXdCeEI7SUFBRCxXQUFDO0NBeEJELEFBd0JDLENBeEJpQyxFQUFFLENBQUMsU0FBUyxHQXdCN0M7a0JBeEJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICB9KVxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIF90aW1lID0gMDtcbiAgICBfbWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5zcHJpdGUuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgJiYgdGhpcy5fbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZShkdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZShkdCkge1xuICAgICAgICB0aGlzLl90aW1lICs9IGR0O1xuICAgICAgICBpZiAodGhpcy5fdGltZSA+PSAxMDAwKSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zZXRQcm9wZXJ0eSgndGltZScsIHRoaXMuX3RpbWUpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '306cf+YWYdOqqK8OSwdLhAL', 'SceneManager');
// Script/SceneManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManager = /** @class */ (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BtnNode = null;
        return _this;
    }
    SceneManager.prototype.start = function () {
        cc.game.addPersistRootNode(this.node);
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this.onSceneLoaded, this);
    };
    SceneManager.prototype.onSceneLoaded = function (scene) {
        this.BtnNode.active = scene.name !== "Start";
    };
    SceneManager.SceneList = {
        "GamePlay": ["PointLight", "Smoke", "Water"],
        "Texture": ["Blur", "Fluxay", "PostTexture", "PostRenderTexture"],
        "Weather": ["Cloud", "Rain", "Snow", "Stormy"],
    };
    SceneManager.GroupName = "";
    __decorate([
        property({
            type: cc.Node
        })
    ], SceneManager.prototype, "BtnNode", void 0);
    SceneManager = __decorate([
        ccclass
    ], SceneManager);
    return SceneManager;
}(cc.Component));
exports.default = SceneManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTY2VuZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBc0JDO1FBVkcsYUFBTyxHQUFXLElBQUksQ0FBQzs7SUFVM0IsQ0FBQztJQVJHLDRCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBZSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQ2pELENBQUM7SUFwQmEsc0JBQVMsR0FBRztRQUN0QixVQUFVLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztRQUNqRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7S0FDakQsQ0FBQTtJQUVhLHNCQUFTLEdBQVUsRUFBRSxDQUFDO0lBS3BDO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1NBQ2hCLENBQUM7aURBQ3FCO0lBWk4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXNCaEM7SUFBRCxtQkFBQztDQXRCRCxBQXNCQyxDQXRCeUMsRUFBRSxDQUFDLFNBQVMsR0FzQnJEO2tCQXRCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIFNjZW5lTGlzdCA9IHtcbiAgICAgICAgXCJHYW1lUGxheVwiOiBbXCJQb2ludExpZ2h0XCIsIFwiU21va2VcIiwgXCJXYXRlclwiXSxcbiAgICAgICAgXCJUZXh0dXJlXCI6IFtcIkJsdXJcIiwgXCJGbHV4YXlcIiwgXCJQb3N0VGV4dHVyZVwiLCBcIlBvc3RSZW5kZXJUZXh0dXJlXCJdLFxuICAgICAgICBcIldlYXRoZXJcIjogW1wiQ2xvdWRcIiwgXCJSYWluXCIsIFwiU25vd1wiLCBcIlN0b3JteVwiXSxcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdyb3VwTmFtZTpzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgIH0pXG4gICAgQnRuTm9kZTpjYy5Ob2RlID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfU0NFTkVfTEFVTkNILCB0aGlzLm9uU2NlbmVMb2FkZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uU2NlbmVMb2FkZWQgKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuQnRuTm9kZS5hY3RpdmUgPSBzY2VuZS5uYW1lICE9PSBcIlN0YXJ0XCI7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b31d4m6Q5NFI5zMsYjEK1oS', 'Start');
// Script/Start.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManager_1 = require("./SceneManager");
var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Start.prototype.start = function () {
        var gl = cc.game._renderContext;
        gl.getExtension('OES_standard_derivatives');
    };
    Start.prototype.onClickSubView = function (event, name) {
        if (!name || !SceneManager_1.default.SceneList[name]) {
            return;
        }
        SceneManager_1.default.GroupName = name;
        var scene = SceneManager_1.default.SceneList[name][0];
        cc.director.loadScene(scene);
    };
    Start = __decorate([
        ccclass
    ], Start);
    return Start;
}(cc.Component));
exports.default = Start;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsK0NBQXlDO0FBR3pDO0lBQW1DLHlCQUFZO0lBQS9DOztJQWdCQSxDQUFDO0lBZkcscUJBQUssR0FBTDtRQUNJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsOEJBQWMsR0FBZCxVQUFnQixLQUFLLEVBQUUsSUFBSTtRQUN2QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsc0JBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsT0FBTTtTQUNUO1FBRUQsc0JBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksS0FBSyxHQUFHLHNCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFmZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWdCekI7SUFBRCxZQUFDO0NBaEJELEFBZ0JDLENBaEJrQyxFQUFFLENBQUMsU0FBUyxHQWdCOUM7a0JBaEJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSAnLi9TY2VuZU1hbmFnZXInXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgc3RhcnQgKCkge1xuICAgICAgICB2YXIgZ2wgPSBjYy5nYW1lLl9yZW5kZXJDb250ZXh0O1xuICAgICAgICBnbC5nZXRFeHRlbnNpb24oJ09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcycpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTdWJWaWV3IChldmVudCwgbmFtZSkge1xuICAgICAgICBpZiAoIW5hbWUgfHwgIVNjZW5lTWFuYWdlci5TY2VuZUxpc3RbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuXG4gICAgICAgIFNjZW5lTWFuYWdlci5Hcm91cE5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGxldCBzY2VuZSA9IFNjZW5lTWFuYWdlci5TY2VuZUxpc3RbbmFtZV1bMF07XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/myassembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxteWFzc2VtYmxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ2IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0lBQzNELEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFO0NBQy9FLENBQUMsQ0FBQztBQWlCSDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXlKQztRQXhKYSxXQUFLLEdBQWdCLEVBQUUsQ0FBQTtRQUN2QixXQUFLLEdBQWMsRUFBRSxDQUFBO1FBQ3ZCLG1CQUFhLEdBQVUsQ0FBQyxDQUFDO1FBQ3pCLGtCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBQ3hCLG1CQUFhLEdBQVUsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQWtCLElBQUksQ0FBQzs7SUFtSi9DLENBQUM7SUFqSlUsMEJBQUksR0FBWCxVQUFZLElBQXdCO1FBQ2hDLGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsQ0FBQztRQUVqQixZQUFZO1FBQ1osSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLDBCQUEwQjtRQUUxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxZQUFZO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFOUUsaUJBQWlCO1FBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLFNBQVMsR0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFDLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFTSxzQ0FBZ0IsR0FBdkIsVUFBd0IsSUFBUztRQUM3QixJQUFHLElBQUksRUFBQztZQUNKLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN6QyxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFdkIsWUFBWTtZQUNaLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLFlBQVk7WUFDWixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxJQUFJO1lBQ0osSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUM5QixJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQzNCLFNBQVM7WUFDVCxJQUFJLElBQUksR0FBRyxDQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xDLElBQUksSUFBSSxHQUFHLENBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkMsSUFBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDO2dCQUNoQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNyQjtZQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFHLEVBQUM7Z0JBQzlCLEtBQUssR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakYsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsTUFBTSxFQUFFLENB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QUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQTtZQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQTtTQUM1QztJQUNMLENBQUM7SUF4SmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5Si9CO0lBQUQsa0JBQUM7Q0F6SkQsQUF5SkMsQ0F6SndDLEVBQUUsQ0FBQyxTQUFTLEdBeUpwRDtrQkF6Sm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5pSv5oyB5Y6f55Sf56uv6Ieq5a6a5LmJ5riy5p+TXHJcbiAqL1xyXG5jb25zdCBnZnggPSBjYy5nZng7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxubGV0IHZmbXRQb3NVdkNvbG9yID0gbmV3IGdmeC5WZXJ0ZXhGb3JtYXQoW1xyXG4gICAgeyBuYW1lOiBnZnguQVRUUl9QT1NJVElPTiwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9GTE9BVDMyLCBudW06IDIgfSxcclxuICAgIHsgbmFtZTogZ2Z4LkFUVFJfVVYwLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMiB9LFxyXG4gICAgeyBuYW1lOiBnZnguQVRUUl9DT0xPUiwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9VSU5UOCwgbnVtOiA0LCBub3JtYWxpemU6IHRydWUgfSxcclxuXSk7XHJcblxyXG5pbnRlcmZhY2UgQm9va1ZlcnRleCB7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyLFxyXG4gICAgdTpudW1iZXIsXHJcbiAgICB2Om51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm9va1F1YWQge1xyXG4gICAgbHQ6bnVtYmVyLFxyXG4gICAgbGI6bnVtYmVyLFxyXG4gICAgcmI6bnVtYmVyLFxyXG4gICAgcnQ6bnVtYmVyXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG15YXNzZW1ibGVyIGV4dGVuZHMgY2MuQXNzZW1ibGVyIHtcclxuICAgIHByb3RlY3RlZCB2ZXJ0czpCb29rVmVydGV4W10gPSBbXVxyXG4gICAgcHJvdGVjdGVkIHF1YWRzOkJvb2tRdWFkW10gPSBbXVxyXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlc0NvdW50Om51bWJlciA9IDQ7XHJcbiAgICBwcml2YXRlIGluZGljZXNDb3VudDpudW1iZXIgPSA2O1xyXG4gICAgcHJpdmF0ZSBmbG9hdHNQZXJWZXJ0Om51bWJlciA9IDU7XHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogY2MuUmVuZGVyRGF0YSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGluaXQoY29tcDogY2MuUmVuZGVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChjb21wKTtcclxuXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgbGV0IHNlZ21lbnRDb3VudCA9IGNvbXAuZ2V0VmVydE51bSgpIC0gMTtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzQ291bnQgPSA0ICogc2VnbWVudENvdW50O1xyXG4gICAgICAgIHRoaXMuaW5kaWNlc0NvdW50ID0gNiAqIHNlZ21lbnRDb3VudDtcclxuICAgICAgICAvLyB0aGlzLmZsb2F0c1BlclZlcnQgPSA2O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhID0gbmV3IGNjLlJlbmRlckRhdGEoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckRhdGEuaW5pdCh0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnJlbmRlckRhdGE7XHJcbiAgICAgICAgLy8gY3JlYXRlRmxleERhdGHmlK/mjIHliJvlu7rmjIflrprmoLzlvI/nmoRyZW5kZXJEYXRhXHJcbiAgICAgICAgZGF0YS5jcmVhdGVGbGV4RGF0YSgwLCB0aGlzLnZlcnRpY2VzQ291bnQsIHRoaXMuaW5kaWNlc0NvdW50LCB2Zm10UG9zVXZDb2xvcik7XHJcblxyXG4gICAgICAgIC8vIOmhtueCueaVsOWbuuWumueahOaDheWGteS4i+e0ouW8leS4jeWPmOWMllxyXG4gICAgICAgIGxldCBpbmRpY2VzID0gZGF0YS5pRGF0YXNbMF07XHJcbiAgICAgICAgbGV0IGNvdW50ID0gaW5kaWNlcy5sZW5ndGggLyA2O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpZHggPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdmVydGV4dElEID0gaSAqIDQ7XHJcbiAgICAgICAgICAgIGluZGljZXNbaWR4KytdID0gdmVydGV4dElEO1xyXG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCsxO1xyXG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCsyO1xyXG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCsxO1xyXG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCszO1xyXG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCsyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlUmVuZGVyRGF0YShjb21wOiBhbnkpe1xyXG4gICAgICAgIGlmKGNvbXApe1xyXG4gICAgICAgICAgICBsZXQgcG9pbnROdW06IG51bWJlciA9IGNvbXAuZ2V0VmVydE51bSgpO1xyXG4gICAgICAgICAgICBsZXQgc3BhY2VDbnQgPSBwb2ludE51bSAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMudmVydHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5xdWFkcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjb21wLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gbm9kZS53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4iuS4gOS4queCueeahOe6ueeQhuWdkOagh1xyXG4gICAgICAgICAgICBsZXQgbGFzdFUgPSAwO1xyXG4gICAgICAgICAgICAvLyDkuIvkuIDkuKrngrnnmoTnurnnkIblnZDmoIdcclxuICAgICAgICAgICAgbGV0IG5leHRVID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCBzcGFjZVggPSB3aWR0aCAvIHNwYWNlQ250O1xyXG4gICAgICAgICAgICBsZXQgc3BhY2VVdiA9IDEgLyBzcGFjZUNudDtcclxuICAgICAgICAgICAgLy8g5bem5LiL6KeS55qE5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gLSB3aWR0aCAqIG5vZGUuYW5jaG9yWDtcclxuICAgICAgICAgICAgbGV0IHBvc1kgPSAtIGhlaWdodCAqIG5vZGUuYW5jaG9yWTtcclxuICAgICAgICAgICAgaWYoIWNjLnN5cy5pc05hdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgd29ybGRQb3MgPSBjb21wLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHBvc1gsIHBvc1kpKTtcclxuICAgICAgICAgICAgICAgIHBvc1ggPSB3b3JsZFBvcy54O1xyXG4gICAgICAgICAgICAgICAgcG9zWSA9IHdvcmxkUG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IHBvaW50TnVtOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIG5leHRVID0gbGFzdFUgKyBzcGFjZVV2O1xyXG4gICAgICAgICAgICAgICAgbGV0IGxiID0gdGhpcy52ZXJ0cy5wdXNoKHt4OiBwb3NYICsgKGkgLSAxKSAqIHNwYWNlWCwgeTogcG9zWSwgdTogbGFzdFUsIHY6IDEgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSB0aGlzLnZlcnRzLnB1c2goe3g6IHBvc1ggKyBpICogc3BhY2VYLCB5OiBwb3NZLCB1OiBuZXh0VSwgdjogMSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBsdCA9IHRoaXMudmVydHMucHVzaCh7eDogcG9zWCArIChpIC0gMSkgKiBzcGFjZVggLCB5OiBwb3NZICsgaGVpZ2h0LCB1OiBsYXN0VSwgdjogMCB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBydCA9IHRoaXMudmVydHMucHVzaCh7eDogcG9zWCArIGkgKiBzcGFjZVgsIHk6IHBvc1kgKyBoZWlnaHQsIHU6IG5leHRVLCB2OiAwIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucXVhZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGI6IGxiIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICByYjogcmIgLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGx0OiBsdCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcnQgOiBydCAtIDEsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbGFzdFUgPSBuZXh0VTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjYy5zeXMuaXNOYXRpdmUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHdoaXRlID0gY29tcC5ub2RlLmNvbG9yLl92YWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmVydGV4T2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIOWhq+WFhemhtueCuee8k+WGslxyXG4gICAgICAgICAgICAgICAgbGV0IHZidWYgPSB0aGlzLnJlbmRlckRhdGEudkRhdGFzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMudmVydHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmVydCA9IHRoaXMudmVydHNbaV1cclxuICAgICAgICAgICAgICAgICAgICB2YnVmW3ZlcnRleE9mZnNldCsrXSA9IHZlcnQueDtcclxuICAgICAgICAgICAgICAgICAgICB2YnVmW3ZlcnRleE9mZnNldCsrXSA9IHZlcnQueTtcclxuICAgICAgICAgICAgICAgICAgICB2YnVmW3ZlcnRleE9mZnNldCsrXSA9IHZlcnQudTtcclxuICAgICAgICAgICAgICAgICAgICB2YnVmW3ZlcnRleE9mZnNldCsrXSA9IHZlcnQudjtcclxuICAgICAgICAgICAgICAgICAgICB2YnVmW3ZlcnRleE9mZnNldCsrXSA9IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZlcnRleE9mZnNldCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZidWZbdmVydGV4T2Zmc2V0KytdID0gaXNGcm9udDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsZXQgd2hpdGUgPSBjYy5Db2xvci5SRUQuX3ZhbCBcclxuIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsbEJ1ZmZlcnMoY29tcDpjYy5SZW5kZXJDb21wb25lbnQsIHJlbmRlcmVyOmNjLnJlbmRlcmVyKXtcclxuICAgICAgICBpZiAodGhpcy52ZXJ0cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IHJlbmRlcmVyLmdldEJ1ZmZlcignbWVzaCcsIHZmbXRQb3NVdkNvbG9yKVxyXG5cclxuICAgICAgICBsZXQgdmVydHMgPSB0aGlzLnZlcnRzXHJcbiAgICAgICAgbGV0IHZlcnRleENvdW50ID0gdmVydHMubGVuZ3RoXHJcbiAgICAgICAgbGV0IGluZGljZUNvdW50ID0gdGhpcy5xdWFkcy5sZW5ndGggKiA2XHJcbiAgICAgICAgLy8g6YCa6L+H6K6+5a6a55qE6aG254K55pWw6YeP5Y+K6aG254K557Si5byV5pWw6YeP6I635Y+WIGJ1ZmZlciDnmoTmlbDmja7nqbrpl7RcclxuICAgICAgICBsZXQgb2Zmc2V0SW5mbyA9IGJ1ZmZlci5yZXF1ZXN0KHZlcnRleENvdW50LCBpbmRpY2VDb3VudCk7XHJcblxyXG4gICAgICAgIGxldCB2YnVmID0gYnVmZmVyLl92RGF0YSAvL3Bvc2l0b24vdXZcclxuICAgICAgICBsZXQgaWJ1ZiA9IGJ1ZmZlci5faURhdGEgLy9pbmRleCBcclxuICAgICAgICBsZXQgdWludGJ1ZiA9IGJ1ZmZlci5fdWludFZEYXRhIC8vIGNvbG9yc1xyXG5cclxuICAgICAgICBsZXQgdmVydGV4T2Zmc2V0ID0gb2Zmc2V0SW5mby5ieXRlT2Zmc2V0ID4+IDJcclxuICAgICAgICBsZXQgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXRcclxuICAgICAgICBsZXQgdmVydGV4SWQgPSBvZmZzZXRJbmZvLnZlcnRleE9mZnNldFxyXG4gICAgICAgIGxldCB3aGl0ZSA9IGNjLkNvbG9yLldISVRFLl92YWxcclxuICAgICAgICAvLyDloavlhYXpobbngrnnvJPlhrJcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmVydHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHZlcnQgPSB2ZXJ0c1tpXVxyXG4gICAgICAgICAgICAvLyBsZXQgaXNGaXJzdFZlcnQgPSBpICUgMiA9PT0gMFxyXG4gICAgICAgICAgICAvLyBsZXQgZmlyc3RWZXJ0ID0gaXNGaXJzdFZlcnQgPyB2ZXJ0IDogdmVydHNbaSAtIDFdXHJcbiAgICAgICAgICAgIC8vIGxldCBzZWNvbmRWZXJ0ID0gaXNGaXJzdFZlcnQgPyB2ZXJ0c1tpICsgMV0gOiB2ZXJ0XHJcbiAgICAgICAgICAgIC8vIC8vIOiuoeeul+W9k+WJjeWwj+efqeW9ouaYr+ato+mdoui/mOaYr+iDjOmdolxyXG4gICAgICAgICAgICAvLyBsZXQgaXNGcm9udCA9IGZpcnN0VmVydC54IDwgc2Vjb25kVmVydC54ID8gMS4wIDogMC4wXHJcbiAgICAgICAgICAgIHZidWZbdmVydGV4T2Zmc2V0KytdID0gdmVydC54O1xyXG4gICAgICAgICAgICB2YnVmW3ZlcnRleE9mZnNldCsrXSA9IHZlcnQueTtcclxuICAgICAgICAgICAgdmJ1Zlt2ZXJ0ZXhPZmZzZXQrK10gPSB2ZXJ0LnU7XHJcbiAgICAgICAgICAgIHZidWZbdmVydGV4T2Zmc2V0KytdID0gdmVydC52O1xyXG4gICAgICAgICAgICB1aW50YnVmW3ZlcnRleE9mZnNldCsrXSA9IHdoaXRlO1xyXG4gICAgICAgICAgICAvLyB2YnVmW3ZlcnRleE9mZnNldCsrXSA9IGlzRnJvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWhq+WFhee0ouW8lee8k+WGslxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnF1YWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWFkID0gdGhpcy5xdWFkc1tpXVxyXG4gICAgICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgcXVhZC5sYlxyXG4gICAgICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgcXVhZC5yYlxyXG4gICAgICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgcXVhZC5sdFxyXG5cclxuICAgICAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIHF1YWQucmJcclxuICAgICAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIHF1YWQucnRcclxuICAgICAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIHF1YWQubHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '873fd3UGotKsbgWhhBeGvwb', 'main');
// resources/main.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxtYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1CQztRQWhCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBWXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUVuRCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUNBLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtQjVCO0lBQUQsZUFBQztDQW5CRCxBQW1CQyxDQW5CcUMsRUFBRSxDQUFDLFNBQVMsR0FtQmpEO2tCQW5Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/myrender.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '664a4Bs8OFHKJy0A8lLSL7W', 'myrender');
// resources/myrender.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var myassembler_1 = require("./myassembler");
var myrender = /** @class */ (function (_super) {
    __extends(myrender, _super);
    function myrender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vertNum = 10;
        return _this;
    }
    // onLoad () {}
    myrender.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this.setVertsDirty();
    };
    /**
     * 初始化assembler
     */
    myrender.prototype._resetAssembler = function () {
        var assembler = this._assembler = new myassembler_1.default();
        assembler.init(this);
    };
    /**
     * 获取每条边顶点数量
     */
    myrender.prototype.getVertNum = function () {
        return this.vertNum;
    };
    __decorate([
        property({ displayName: "每条边上的顶点数量" })
    ], myrender.prototype, "vertNum", void 0);
    myrender = __decorate([
        ccclass
    ], myrender);
    return myrender;
}(cc.RenderComponent));
exports.default = myrender;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxteXJlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsNkNBQXdDO0FBR3hDO0lBQXNDLDRCQUFrQjtJQUF4RDtRQUFBLHFFQXlCQztRQXRCVSxhQUFPLEdBQVUsRUFBRSxDQUFDOztJQXNCL0IsQ0FBQztJQXBCRyxlQUFlO0lBRWYsMkJBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQ0FBZSxHQUF0QjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUE7UUFDbkQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBQ0Q7O09BRUc7SUFDSCw2QkFBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLENBQUM7NkNBQ1Q7SUFIVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUI1QjtJQUFELGVBQUM7Q0F6QkQsQUF5QkMsQ0F6QnFDLEVBQUUsQ0FBQyxlQUFlLEdBeUJ2RDtrQkF6Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IG15YXNzZW1ibGVyIGZyb20gXCIuL215YXNzZW1ibGVyXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBteXJlbmRlciBleHRlbmRzIGNjLlJlbmRlckNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtkaXNwbGF5TmFtZTpcIuavj+adoei+ueS4iueahOmhtueCueaVsOmHj1wifSlcclxuICAgIHB1YmxpYyB2ZXJ0TnVtOm51bWJlciA9IDEwO1xyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlICgpIHtcclxuICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0VmVydHNEaXJ0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWYXNzZW1ibGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfcmVzZXRBc3NlbWJsZXIoKSB7XHJcbiAgICAgICAgbGV0IGFzc2VtYmxlciA9IHRoaXMuX2Fzc2VtYmxlciA9IG5ldyBteWFzc2VtYmxlcigpXHJcbiAgICAgICAgYXNzZW1ibGVyLmluaXQodGhpcylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q+P5p2h6L656aG254K55pWw6YePXHJcbiAgICAgKi9cclxuICAgIGdldFZlcnROdW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy52ZXJ0TnVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/breaken/breaken.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de904Pq+BFMqYigCdN04Vfs', 'breaken');
// resources/breaken/breaken.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Label)
        // label: cc.Label = null;
        _this._material = null;
        // @property
        // text: string = 'hello';
        _this.mixtexture = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        // this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        // this._material.setProperty('mixtexture', this.mixtexture);
    };
    NewClass.prototype.touchStartCallback = function () {
        var _this = this;
        cc.loader.loadRes('breaken/breaken', cc.Material, function (err, asset) {
            if (err) {
                cc.error(err);
            }
            _this._material = _this.getComponent(cc.Sprite).sharedMaterials[0];
            asset.setProperty('texture', _this.mixtexture);
            _this.node.getComponent(cc.Sprite).setMaterial(0, asset);
        });
        //     this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
        //     this.node.getComponent(cc.Sprite).setMaterial(0, cc.Material.getInstantiatedMaterial('2d-gray-sprite',
        //         this.node.getComponent(cc.Sprite)))
        //     this._material.setProperty('mixtexture', this.mixtexture);
        // }
    };
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "mixtexture", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxicmVha2VuXFxicmVha2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVDQztRQXJDRyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsWUFBWTtRQUNaLDBCQUEwQjtRQUkxQixnQkFBVSxHQUFnQixJQUFJLENBQUM7O1FBMkIvQixpQkFBaUI7SUFDckIsQ0FBQztJQTNCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixvRUFBb0U7UUFDcEUsNkRBQTZEO0lBQ2pFLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSztZQUN6RCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO1FBQ1Asd0VBQXdFO1FBQ3hFLDZHQUE2RztRQUM3Ryw4Q0FBOEM7UUFDOUMsaUVBQWlFO1FBQ2pFLElBQUk7SUFDSixDQUFDO0lBekJEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTO1NBQ3BCLENBQUM7Z0RBQzZCO0lBWGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVDNUI7SUFBRCxlQUFDO0NBdkNELEFBdUNDLENBdkNxQyxFQUFFLENBQUMsU0FBUyxHQXVDakQ7a0JBdkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICAvLyBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgX21hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuVGV4dHVyZTJEXHJcbiAgICB9KVxyXG4gICAgbWl4dGV4dHVyZTpjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMsIHRydWUpO1xyXG4gICAgICAgIC8vIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcbiAgICAgICAgLy8gdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21peHRleHR1cmUnLCB0aGlzLm1peHRleHR1cmUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0b3VjaFN0YXJ0Q2FsbGJhY2soKXtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnYnJlYWtlbi9icmVha2VuJywgY2MuTWF0ZXJpYWwsIChlcnIsIGFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNoYXJlZE1hdGVyaWFsc1swXTtcclxuICAgICAgICAgICAgYXNzZXQuc2V0UHJvcGVydHkoJ3RleHR1cmUnLCB0aGlzLm1peHRleHR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2V0TWF0ZXJpYWwoMCwgYXNzZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgLy8gICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaGFyZWRNYXRlcmlhbHNbMF07XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsLmdldEluc3RhbnRpYXRlZE1hdGVyaWFsKCcyZC1ncmF5LXNwcml0ZScsXHJcbiAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpXHJcbiAgICAvLyAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21peHRleHR1cmUnLCB0aGlzLm1peHRleHR1cmUpO1xyXG4gICAgLy8gfVxyXG4gICAgfSAgIFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpriteShaderUpdatemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8db2dKgX9VGa7R4jLKixd3g', 'SpriteShaderUpdatemy');
// Script/SpriteShaderUpdatemy.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpriteShaderUpdate = /** @class */ (function (_super) {
    __extends(SpriteShaderUpdate, _super);
    function SpriteShaderUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sprite = null;
        _this.limit = 1000;
        _this.step = 0.1;
        _this._material = null;
        _this._time = 0;
        return _this;
    }
    Object.defineProperty(SpriteShaderUpdate.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (spr) {
            this._sprite = spr;
            if (this._sprite) {
                this._material = this._sprite.sharedMaterials[0];
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    SpriteShaderUpdate.prototype.onEnable = function () {
        this._material = this.getComponent('myrender').getMaterial(0);
    };
    SpriteShaderUpdate.prototype.update = function (dt) {
        // if (this.sprite) {
        //     this._material = this.sprite.sharedMaterials[0];
        // }
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
    ], SpriteShaderUpdate.prototype, "_sprite", void 0);
    __decorate([
        property({
            type: cc.Sprite
        })
    ], SpriteShaderUpdate.prototype, "sprite", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTcHJpdGVTaGFkZXJVcGRhdGVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUFtREM7UUFoREcsYUFBTyxHQUFHLElBQUksQ0FBQztRQWtCZixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBR2IsVUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVYLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBQzlCLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBd0JkLENBQUM7SUEzQ0csc0JBQUksc0NBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxHQUFHO1lBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7UUFDTCxDQUFDOzs7T0FQQTtJQUFBLENBQUM7SUFtQkYscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wscUJBQXFCO1FBQ3JCLHVEQUF1RDtRQUN2RCxJQUFJO1FBQ0osSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQS9DRDtRQURDLFFBQVE7dURBQ007SUFLZjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtTQUNsQixDQUFDO29EQUdEO0lBV0Q7UUFEQyxRQUFRO3FEQUNJO0lBR2I7UUFEQyxRQUFRO29EQUNFO0lBeEJNLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBbUR0QztJQUFELHlCQUFDO0NBbkRELEFBbURDLENBbkQrQyxFQUFFLENBQUMsU0FBUyxHQW1EM0Q7a0JBbkRvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlU2hhZGVyVXBkYXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBfc3ByaXRlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5TcHJpdGVcclxuICAgIH0pXHJcbiAgICBnZXQgc3ByaXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldCBzcHJpdGUgKHNwcikge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHNwcjtcclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5fc3ByaXRlLnNoYXJlZE1hdGVyaWFsc1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbGltaXQgPSAxMDAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3RlcCA9IDAuMTtcclxuXHJcbiAgICBfbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIF90aW1lID0gMDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuZ2V0Q29tcG9uZW50KCdteXJlbmRlcicpLmdldE1hdGVyaWFsKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnNwcml0ZSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuc3ByaXRlLnNoYXJlZE1hdGVyaWFsc1swXTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZShkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWUoZHQpIHtcclxuICAgICAgICB0aGlzLl90aW1lICs9IHRoaXMuc3RlcDtcclxuICAgICAgICB0aGlzLl90aW1lID0gdGhpcy5fdGltZSA+PSB0aGlzLmxpbWl0ID8gMCA6IHRoaXMuX3RpbWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RpbWUnLCB0aGlzLl90aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SpriteShaderUpdatemy1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '960b6yUXu1G1pmet2nTDz1e', 'SpriteShaderUpdatemy1');
// resources/SpriteShaderUpdatemy1.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SpriteShaderUpdate = /** @class */ (function (_super) {
    __extends(SpriteShaderUpdate, _super);
    function SpriteShaderUpdate() {
        // @property
        // _sprite = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property({
        //     type: cc.Sprite
        // })
        // get sprite() {
        //     return this._sprite;
        // };
        // set sprite (spr) {
        //     this._sprite = spr;
        //     if (this._sprite) {
        //         this._material = this.getMaterial(0);
        //     }
        // }
        _this.limit = 1000;
        _this.step = 0.1;
        _this._material = null;
        _this._time = 0;
        return _this;
    }
    SpriteShaderUpdate.prototype.onEnable = function () {
        this._material = this.getComponent('myrender').getMaterial(0);
    };
    SpriteShaderUpdate.prototype.update = function (dt) {
        // if (this.sprite) {
        //     this._material = this.sprite.sharedMaterials[0];
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTcHJpdGVTaGFkZXJVcGRhdGVteTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBRUksWUFBWTtRQUNaLGtCQUFrQjtRQUh0QixxRUFtREM7UUE5Q0csY0FBYztRQUNkLHNCQUFzQjtRQUN0QixLQUFLO1FBQ0wsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQixLQUFLO1FBRUwscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsZ0RBQWdEO1FBQ2hELFFBQVE7UUFDUixJQUFJO1FBSUosV0FBSyxHQUFHLElBQUksQ0FBQztRQUdiLFVBQUksR0FBRyxHQUFHLENBQUM7UUFFWCxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUM5QixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQXdCZCxDQUFDO0lBdEJHLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLHFCQUFxQjtRQUNyQix1REFBdUQ7UUFDdkQsSUFBSTtRQUNKLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUE3QkQ7UUFEQyxRQUFRO3FEQUNJO0lBR2I7UUFEQyxRQUFRO29EQUNFO0lBeEJNLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBbUR0QztJQUFELHlCQUFDO0NBbkRELEFBbURDLENBbkQrQyxFQUFFLENBQUMsU0FBUyxHQW1EM0Q7a0JBbkRvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlU2hhZGVyVXBkYXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBfc3ByaXRlID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8gQHByb3BlcnR5KHtcclxuICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVcclxuICAgIC8vIH0pXHJcbiAgICAvLyBnZXQgc3ByaXRlKCkge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHNldCBzcHJpdGUgKHNwcikge1xyXG4gICAgLy8gICAgIHRoaXMuX3Nwcml0ZSA9IHNwcjtcclxuICAgIC8vICAgICBpZiAodGhpcy5fc3ByaXRlKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5nZXRNYXRlcmlhbCgwKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbGltaXQgPSAxMDAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3RlcCA9IDAuMTtcclxuXHJcbiAgICBfbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIF90aW1lID0gMDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuZ2V0Q29tcG9uZW50KCdteXJlbmRlcicpLmdldE1hdGVyaWFsKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnNwcml0ZSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuc3ByaXRlLnNoYXJlZE1hdGVyaWFsc1swXTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZShkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWUoZHQpIHtcclxuICAgICAgICB0aGlzLl90aW1lICs9IHRoaXMuc3RlcDtcclxuICAgICAgICB0aGlzLl90aW1lID0gdGhpcy5fdGltZSA+PSB0aGlzLmxpbWl0ID8gMCA6IHRoaXMuX3RpbWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RpbWUnLCB0aGlzLl90aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/liquid/moveban.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67aa1NVnq9CU47MZDLb00YV', 'moveban');
// resources/liquid/moveban.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property(cc.Label)
    // label: cc.Label = null;
    // @property
    // text: string = 'hello';
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, true);
    };
    NewClass.prototype.touchMoveCallback = function (event) {
        var postion = this.node.convertToNodeSpaceAR(event.getLocation());
        // let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.node.x = postion.x;
        this.node.y = postion.y;
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxsaXF1aWRcXG1vdmViYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQXVCQSxDQUFDO0lBckJHLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFFMUIsWUFBWTtJQUNaLDBCQUEwQjtJQUUxQix3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVuRixDQUFDO0lBQ0Qsb0NBQWlCLEdBQWpCLFVBQWtCLEtBQUs7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNsRSxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFyQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QjVCO0lBQUQsZUFBQztDQXZCRCxBQXVCQyxDQXZCcUMsRUFBRSxDQUFDLFNBQVMsR0F1QmpEO2tCQXZCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgLy8gbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUNhbGxiYWNrLCB0aGlzLCB0cnVlKTtcclxuXHJcbiAgICB9XHJcbiAgICB0b3VjaE1vdmVDYWxsYmFjayhldmVudCl7XHJcbiAgICAgICAgbGV0IHBvc3Rpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IHBvc3Rpb24ueDtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IHBvc3Rpb24ueTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21Bc3NlbWJsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBMktDO1FBMUtHLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQW1LbEIsQ0FBQztJQWpLRyw4QkFBSSxHQUFKLFVBQU0sSUFBSTtRQUNOLGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7SUFDViwwQ0FBZ0IsR0FBaEIsVUFBa0IsSUFBSTtRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVyxJQUFJO1FBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVB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QUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNsRTthQUNJO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakM7UUFFRCxlQUFlO1FBQ2YsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFDcEIsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLEVBQ3RDLFFBQVEsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBM0tBLEFBMktDLENBM0s0QyxFQUFFLENBQUMsU0FBUyxHQTJLeEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Bc3NlbWJsZXIgZXh0ZW5kcyBjYy5Bc3NlbWJsZXIge1xuICAgIHZlcnRpY2VzQ291bnQgPSA0O1xuICAgIGluZGljZXNDb3VudCA9IDY7XG4gICAgdXZPZmZzZXQgPSAyO1xuICAgIGNvbG9yT2Zmc2V0ID0gNDtcbiAgICBmbG9hdHNQZXJWZXJ0ID0gNTtcblxuICAgIF9yZW5kZXJEYXRhID0gbnVsbDtcbiAgICBfbG9jYWwgPSBudWxsO1xuXG4gICAgaW5pdCAoY29tcCkge1xuICAgICAgICBzdXBlci5pbml0KGNvbXApO1xuICAgICAgICB0aGlzLl9yZW5kZXJEYXRhID0gbmV3IGNjLlJlbmRlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyRGF0YS5pbml0KHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW5pdExvY2FsKCk7XG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgICB9XG5cbiAgICAvL292ZXJyaWRlXG4gICAgdXBkYXRlUmVuZGVyRGF0YSAoY29tcCkge1xuICAgICAgICBpZiAoY29tcC5fdmVydHNEaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVVnMoY29tcCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZlcnRzKGNvbXApO1xuICAgICAgICAgICAgY29tcC5fdmVydHNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVVZzIChjb21wKSB7XG4gICAgICAgIGxldCB1diA9IFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxXTtcbiAgICAgICAgbGV0IHV2T2Zmc2V0ID0gdGhpcy51dk9mZnNldDtcbiAgICAgICAgbGV0IGZsb2F0c1BlclZlcnQgPSB0aGlzLmZsb2F0c1BlclZlcnQ7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNyY09mZnNldCA9IGkgKiAyO1xuICAgICAgICAgICAgbGV0IGRzdE9mZnNldCA9IGZsb2F0c1BlclZlcnQgKiBpICsgdXZPZmZzZXQ7XG4gICAgICAgICAgICB2ZXJ0c1tkc3RPZmZzZXRdID0gdXZbc3JjT2Zmc2V0XTtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldCArIDFdID0gdXZbc3JjT2Zmc2V0ICsgMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVWZXJ0cyAoY29tcCkge1xuICAgICAgICBsZXQgbm9kZSA9IGNvbXAubm9kZSxcbiAgICAgICAgICAgIGN3ID0gbm9kZS53aWR0aCwgY2ggPSBub2RlLmhlaWdodCxcbiAgICAgICAgICAgIGFwcHggPSBub2RlLmFuY2hvclggKiBjdywgYXBweSA9IG5vZGUuYW5jaG9yWSAqIGNoLFxuICAgICAgICAgICAgbCwgYiwgciwgdDtcblxuICAgICAgICBsID0gLSBhcHB4O1xuICAgICAgICBiID0gLSBhcHB5O1xuICAgICAgICByID0gY3cgLSBhcHB4O1xuICAgICAgICB0ID0gY2ggLSBhcHB5O1xuXG4gICAgICAgIGxldCBsb2NhbCA9IHRoaXMuX2xvY2FsO1xuICAgICAgICBsb2NhbFswXSA9IGw7XG4gICAgICAgIGxvY2FsWzFdID0gYjtcbiAgICAgICAgbG9jYWxbMl0gPSByO1xuICAgICAgICBsb2NhbFszXSA9IHQ7XG4gICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0cyhjb21wKTtcbiAgICB9XG5cbiAgICBnZXQgdmVydGljZXNGbG9hdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc0NvdW50ICogdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgIH1cblxuICAgIGluaXREYXRhICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9yZW5kZXJEYXRhO1xuICAgICAgICBkYXRhLmNyZWF0ZVF1YWREYXRhKDAsIHRoaXMudmVydGljZXNGbG9hdHMsIHRoaXMuaW5kaWNlc0NvdW50KTtcbiAgICB9XG5cbiAgICBpbml0TG9jYWwgKCkge1xuICAgICAgICB0aGlzLl9sb2NhbCA9IFtdO1xuICAgICAgICB0aGlzLl9sb2NhbC5sZW5ndGggPSA0O1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbG9yIChjb21wLCBjb2xvcikge1xuICAgICAgICBsZXQgdWludFZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS51aW50VkRhdGFzWzBdO1xuICAgICAgICBpZiAoIXVpbnRWZXJ0cykgcmV0dXJuO1xuICAgICAgICBjb2xvciA9IGNvbG9yIHx8Y29tcC5ub2RlLmNvbG9yLl92YWw7XG4gICAgICAgIGxldCBmbG9hdHNQZXJWZXJ0ID0gdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgICAgICBsZXQgY29sb3JPZmZzZXQgPSB0aGlzLmNvbG9yT2Zmc2V0O1xuICAgICAgICAvLyBsZXQgbXljb2xvcjpjYy5Db2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMCwwLDI1NSk7IFxuICAgICAgICBmb3IgKGxldCBpID0gY29sb3JPZmZzZXQsIGwgPSB1aW50VmVydHMubGVuZ3RoOyBpIDwgbDsgaSArPSBmbG9hdHNQZXJWZXJ0KSB7XG4gICAgICAgICAgICB1aW50VmVydHNbaV0gPSBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJ1ZmZlciAoKSB7XG4gICAgICAgIHJldHVybiBjYy5yZW5kZXJlci5faGFuZGxlLl9tZXNoQnVmZmVyO1xuICAgIH1cblxuICAgIHVwZGF0ZVdvcmxkVmVydHMgKGNvbXApIHtcbiAgICAgICAgbGV0IGxvY2FsID0gdGhpcy5fbG9jYWw7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuXG4gICAgICAgIGxldCBtYXRyaXggPSBjb21wLm5vZGUuX3dvcmxkTWF0cml4O1xuICAgICAgICBsZXQgbWF0cml4bSA9IG1hdHJpeC5tLFxuICAgICAgICAgICAgYSA9IG1hdHJpeG1bMF0sIGIgPSBtYXRyaXhtWzFdLCBjID0gbWF0cml4bVs0XSwgZCA9IG1hdHJpeG1bNV0sXG4gICAgICAgICAgICB0eCA9IG1hdHJpeG1bMTJdLCB0eSA9IG1hdHJpeG1bMTNdO1xuXG4gICAgICAgIGxldCB2bCA9IGxvY2FsWzBdLCB2ciA9IGxvY2FsWzJdLFxuICAgICAgICAgICAgdmIgPSBsb2NhbFsxXSwgdnQgPSBsb2NhbFszXTtcbiAgICAgICAgXG4gICAgICAgIGxldCBqdXN0VHJhbnNsYXRlID0gYSA9PT0gMSAmJiBiID09PSAwICYmIGMgPT09IDAgJiYgZCA9PT0gMTtcblxuICAgICAgICBpZiAoanVzdFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgLy8gbGVmdCBib3R0b21cbiAgICAgICAgICAgIHZlcnRzWzBdID0gdmwgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzWzFdID0gdmIgKyB0eTtcbiAgICAgICAgICAgIC8vIHJpZ2h0IGJvdHRvbVxuICAgICAgICAgICAgdmVydHNbNV0gPSB2ciArIHR4O1xuICAgICAgICAgICAgdmVydHNbNl0gPSB2YiArIHR5O1xuICAgICAgICAgICAgLy8gbGVmdCB0b3BcbiAgICAgICAgICAgIHZlcnRzWzEwXSA9IHZsICsgdHg7XG4gICAgICAgICAgICB2ZXJ0c1sxMV0gPSB2dCArIHR5O1xuICAgICAgICAgICAgLy8gcmlnaHQgdG9wXG4gICAgICAgICAgICB2ZXJ0c1sxNV0gPSB2ciArIHR4O1xuICAgICAgICAgICAgdmVydHNbMTZdID0gdnQgKyB0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhbCA9IGEgKiB2bCwgYXIgPSBhICogdnIsXG4gICAgICAgICAgICBibCA9IGIgKiB2bCwgYnIgPSBiICogdnIsXG4gICAgICAgICAgICBjYiA9IGMgKiB2YiwgY3QgPSBjICogdnQsXG4gICAgICAgICAgICBkYiA9IGQgKiB2YiwgZHQgPSBkICogdnQ7XG5cbiAgICAgICAgICAgIC8vIGxlZnQgYm90dG9tXG4gICAgICAgICAgICB2ZXJ0c1swXSA9IGFsICsgY2IgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzWzFdID0gYmwgKyBkYiArIHR5O1xuICAgICAgICAgICAgLy8gcmlnaHQgYm90dG9tXG4gICAgICAgICAgICB2ZXJ0c1s1XSA9IGFyICsgY2IgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzWzZdID0gYnIgKyBkYiArIHR5O1xuICAgICAgICAgICAgLy8gbGVmdCB0b3BcbiAgICAgICAgICAgIHZlcnRzWzEwXSA9IGFsICsgY3QgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzWzExXSA9IGJsICsgZHQgKyB0eTtcbiAgICAgICAgICAgIC8vIHJpZ2h0IHRvcFxuICAgICAgICAgICAgdmVydHNbMTVdID0gYXIgKyBjdCArIHR4O1xuICAgICAgICAgICAgdmVydHNbMTZdID0gYnIgKyBkdCArIHR5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlsbEJ1ZmZlcnMgKGNvbXAsIHJlbmRlcmVyKSB7XG4gICAgICAgIGlmIChyZW5kZXJlci53b3JsZE1hdERpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdvcmxkVmVydHMoY29tcCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVuZGVyRGF0YSA9IHRoaXMuX3JlbmRlckRhdGE7XG4gICAgICAgIGxldCB2RGF0YSA9IHJlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBsZXQgaURhdGEgPSByZW5kZXJEYXRhLmlEYXRhc1swXTtcblxuICAgICAgICBsZXQgYnVmZmVyID0gdGhpcy5nZXRCdWZmZXIoKTtcbiAgICAgICAgbGV0IG9mZnNldEluZm8gPSBidWZmZXIucmVxdWVzdCh0aGlzLnZlcnRpY2VzQ291bnQsIHRoaXMuaW5kaWNlc0NvdW50KTtcblxuICAgICAgICAvLyBidWZmZXIgZGF0YSBtYXkgYmUgcmVhbGxvYywgbmVlZCBnZXQgcmVmZXJlbmNlIGFmdGVyIHJlcXVlc3QuXG5cbiAgICAgICAgLy8gZmlsbCB2ZXJ0aWNlc1xuICAgICAgICBsZXQgdmVydGV4T2Zmc2V0ID0gb2Zmc2V0SW5mby5ieXRlT2Zmc2V0ID4+IDIsXG4gICAgICAgICAgICB2YnVmID0gYnVmZmVyLl92RGF0YTtcblxuICAgICAgICBpZiAodkRhdGEubGVuZ3RoICsgdmVydGV4T2Zmc2V0ID4gdmJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZidWYuc2V0KHZEYXRhLnN1YmFycmF5KDAsIHRoaXMudmVydGljZXNGbG9hdHMpLCB2ZXJ0ZXhPZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmJ1Zi5zZXQodkRhdGEsIHZlcnRleE9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaWxsIGluZGljZXNcbiAgICAgICAgbGV0IGlidWYgPSBidWZmZXIuX2lEYXRhLFxuICAgICAgICAgICAgaW5kaWNlT2Zmc2V0ID0gb2Zmc2V0SW5mby5pbmRpY2VPZmZzZXQsXG4gICAgICAgICAgICB2ZXJ0ZXhJZCA9IG9mZnNldEluZm8udmVydGV4T2Zmc2V0O1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGlEYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWJ1ZltpbmRpY2VPZmZzZXQrK10gPSB2ZXJ0ZXhJZCArIGlEYXRhW2ldO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Example/IA/CustomIARenderComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhhbXBsZVxcSUFcXEN1c3RvbUlBUmVuZGVyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyx5REFBbUQ7QUFHbkQ7SUFBcUQsMkNBQWtCO0lBQXZFO1FBQUEscUVBcU1DO1FBbk1HLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFnQmhCLFFBQUUsR0FBRyxFQUFFLENBQUM7UUFDUixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFNBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsV0FBSyxHQUFHLEVBQUUsQ0FBQzs7SUE4S2YsQ0FBQztJQTlMRyxzQkFBSSw0Q0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFhLEdBQUc7WUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQzs7O09BUEE7SUFlRCwwQ0FBUSxHQUFSO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVO0lBQ1YsaURBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDJCQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7SUFDVixtREFBaUIsR0FBakI7UUFDSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsT0FBTztTQUNWO1FBRUQsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4Q0FBWSxHQUFaO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTTtTQUNUO1FBRUQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnREFBYyxHQUFkO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixPQUFNO1NBQ1Q7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFekIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO1FBRWpCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFRLE1BQU07UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUV6QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFhLE1BQU07UUFDZixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUViLElBQUksV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBWSxNQUFNO1FBQ2QsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDakMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVuRCxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQ2IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWIsUUFBUTtRQUNSLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDbEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxrREFBZ0IsR0FBaEIsVUFBa0IsTUFBTTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFL0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ2xCLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQzlELEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2QyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDNUIsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLElBQUksYUFBYSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0QsSUFBSSxhQUFhLEVBQUU7WUFDZixjQUFjO1lBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDbEIsZUFBZTtZQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFFO1lBQ25CLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLFdBQVc7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNuQixZQUFZO1lBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNILElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQzVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUN4QixFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFDeEIsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFekIsY0FBYztZQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDdkIsZUFBZTtZQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDdkIsV0FBVztZQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDeEIsWUFBWTtZQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBbE1EO1FBREMsUUFBUTs2REFDTztJQUtoQjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztTQUNyQixDQUFDOzBEQUdEO0lBVGdCLHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBcU0zQztJQUFELDhCQUFDO0NBck1ELEFBcU1DLENBck1vRCxFQUFFLENBQUMsZUFBZSxHQXFNdEU7a0JBck1vQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBDdXN0b21JQUFzc2VtYmxlciBmcm9tICcuL0N1c3RvbUlBQXNzZW1ibGVyJ1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tSUFSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eVxuICAgIF90ZXh0dXJlID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5UZXh0dXJlMkRcbiAgICB9KVxuICAgIGdldCB0ZXh0dXJlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gICAgfVxuXG4gICAgc2V0IHRleHR1cmUgKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZSAhPT0gdmFsKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5hcHBseVRleHR1cmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHV2ID0gW107XG4gICAgbG9jYWwgPSBbXTtcbiAgICBwb3NPZmZzZXQgPSAwO1xuICAgIG1heCA9IDEwMDtcbiAgICBkaXJlY3Rpb24gPSAxO1xuICAgIHNwZWVkID0gMTA7XG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZU1hdGVyaWFsKCk7XG5cbiAgICAgICAgdGhpcy5pbml0VmVydGV4RGF0YSgpO1xuICAgIH1cblxuICAgIC8vb3ZlcnJpZGVcbiAgICBfcmVzZXRBc3NlbWJsZXIgKCkge1xuICAgICAgICB0aGlzLnNldFZlcnRzRGlydHkodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Fzc2VtYmxlciA9IG5ldyBDdXN0b21JQUFzc2VtYmxlcigpO1xuICAgICAgICB0aGlzLl9hc3NlbWJsZXIuaW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvL292ZXJyaWRlXG4gICAgX2FjdGl2YXRlTWF0ZXJpYWwgKCkge1xuICAgICAgICBsZXQgbWF0ZXJpYWwgPSB0aGlzLnNoYXJlZE1hdGVyaWFsc1swXTtcbiAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUmVuZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1hdGVyaWFsID0gY2MuTWF0ZXJpYWwuZ2V0SW5zdGFudGlhdGVkTWF0ZXJpYWwobWF0ZXJpYWwsIHRoaXMpO1xuICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInRleHR1cmVcIiwgdGhpcy50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgIHRoaXMubWFya0ZvclJlbmRlcih0cnVlKTtcbiAgICB9XG5cbiAgICBhcHBseVRleHR1cmUgKCkge1xuICAgICAgICBsZXQgbWF0ZXJpYWwgPSB0aGlzLmdldE1hdGVyaWFsKDApO1xuICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwidGV4dHVyZVwiLCB0aGlzLnRleHR1cmUpO1xuICAgIH1cblxuICAgIGluaXRWZXJ0ZXhEYXRhICgpIHtcbiAgICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuX2Fzc2VtYmxlci5nZXRCdWZmZXIoKTtcbiAgICAgICAgYnVmZmVyLnJlc2V0KCk7XG4gICAgICAgIGJ1ZmZlci5yZXF1ZXN0KDQsIDYpO1xuXG4gICAgICAgIHRoaXMuZmlsbFVWKGJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZmlsbEluZGljZXMoYnVmZmVyKTtcbiAgICAgICAgdGhpcy5maWxsVmVydGV4KGJ1ZmZlcik7XG5cbiAgICAgICAgYnVmZmVyLnVwbG9hZERhdGEoKTtcblxuICAgICAgICB0aGlzLl9hc3NlbWJsZXIuX2lhLl9jb3VudCA9IDY7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TWF0ZXJpYWwoMCkpIHsgXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5wb3NPZmZzZXQgPj0gdGhpcy5tYXggPyAtMSA6IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMucG9zT2Zmc2V0IDw9IDAgPyAxIDogdGhpcy5kaXJlY3Rpb247XG4gICAgICAgIGxldCBzdGVwID0gZHQgKiB0aGlzLmRpcmVjdGlvbiAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMucG9zT2Zmc2V0ID0gdGhpcy5wb3NPZmZzZXQgKyBzdGVwO1xuXG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLl9hc3NlbWJsZXIuZ2V0QnVmZmVyKCk7XG4gICAgICAgIGxldCB2YnVmID0gYnVmZmVyLl92RGF0YTtcbiAgXG4gICAgICAgIHZidWZbMF0gKz0gc3RlcDtcbiAgICAgICAgdmJ1ZlsxNV0gLT0gc3RlcDtcblxuICAgICAgICBidWZmZXIuX3ZiLnVwZGF0ZSgwLCB2YnVmKTtcbiAgICB9XG5cbiAgICBmaWxsVVYgKGJ1ZmZlcikge1xuICAgICAgICBsZXQgbCA9IDAsIHIgPSAxLCBiID0gMSwgdCA9IDA7XG4gICAgICAgIGxldCB2YnVmID0gYnVmZmVyLl92RGF0YTtcblxuICAgICAgICB2YnVmWzJdID0gbDtcbiAgICAgICAgdmJ1ZlszXSA9IGI7XG4gICAgICAgIHZidWZbN10gPSByO1xuICAgICAgICB2YnVmWzhdID0gYjtcbiAgICAgICAgdmJ1ZlsxMl0gPSBsO1xuICAgICAgICB2YnVmWzEzXSA9IHQ7XG4gICAgICAgIHZidWZbMTddID0gcjtcbiAgICAgICAgdmJ1ZlsxOF0gPSB0O1xuICAgIH1cblxuICAgIGZpbGxJbmRpY2VzIChidWZmZXIpIHtcbiAgICAgICAgbGV0IGlEYXRhID0gYnVmZmVyLl9pRGF0YTtcbiAgICAgICAgaURhdGFbMF0gPSAwO1xuICAgICAgICBpRGF0YVsxXSA9IDE7XG4gICAgICAgIGlEYXRhWzJdID0gMjtcbiAgICAgICAgaURhdGFbM10gPSAxO1xuICAgICAgICBpRGF0YVs0XSA9IDM7XG4gICAgICAgIGlEYXRhWzVdID0gMjtcblxuICAgICAgICBsZXQgaW5kaWNlc0RhdGEgPSBuZXcgVWludDE2QXJyYXkoaURhdGEuYnVmZmVyLCAwLCBpRGF0YS5sZW5ndGgpO1xuICAgICAgICBidWZmZXIuX2liLnVwZGF0ZSgwLCBpbmRpY2VzRGF0YSk7XG4gICAgfVxuXG4gICAgZmlsbFZlcnRleCAoYnVmZmVyKSB7XG4gICAgICAgIGxldCB1aW50YnVmID0gYnVmZmVyLl91aW50VkRhdGE7XG4gICAgICAgIFxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgY3cgPSBub2RlLndpZHRoLCBjaCA9IG5vZGUuaGVpZ2h0LFxuICAgICAgICBhcHB4ID0gbm9kZS5hbmNob3JYICogY3csIGFwcHkgPSBub2RlLmFuY2hvclkgKiBjaDtcblxuICAgICAgICBsZXQgbCA9IC0gYXBweCxcbiAgICAgICAgICAgIGIgPSAtIGFwcHksXG4gICAgICAgICAgICByID0gY3cgLSBhcHB4LFxuICAgICAgICAgICAgdCA9IGNoIC0gYXBweTtcblxuICAgICAgICBsZXQgbG9jYWwgPSB0aGlzLmxvY2FsO1xuICAgICAgICBsb2NhbFswXSA9IGw7XG4gICAgICAgIGxvY2FsWzFdID0gYjtcbiAgICAgICAgbG9jYWxbMl0gPSByO1xuICAgICAgICBsb2NhbFszXSA9IHQ7XG5cbiAgICAgICAgLy8gY29sb3JcbiAgICAgICAgdWludGJ1Zls0XSA9IHRoaXMubm9kZS5jb2xvci5fdmFsO1xuICAgICAgICB1aW50YnVmWzldID0gdGhpcy5ub2RlLmNvbG9yLl92YWw7XG4gICAgICAgIHVpbnRidWZbMTRdID0gdGhpcy5ub2RlLmNvbG9yLl92YWw7XG4gICAgICAgIHVpbnRidWZbMTldID0gdGhpcy5ub2RlLmNvbG9yLl92YWw7XG5cbiAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKGJ1ZmZlcik7XG4gICAgfVxuXG4gICAgdXBkYXRlV29ybGRWZXJ0cyAoYnVmZmVyKSB7XG5cbiAgICAgICAgdGhpcy5ub2RlLl91cGRhdGVXb3JsZE1hdHJpeCgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHZidWYgPSBidWZmZXIuX3ZEYXRhO1xuICAgICAgICBsZXQgbG9jYWwgPSB0aGlzLmxvY2FsO1xuICAgICAgICBsZXQgbWF0cml4ID0gdGhpcy5ub2RlLl93b3JsZE1hdHJpeDtcbiAgICAgICAgbGV0IG1hdHJpeG0gPSBtYXRyaXgubSxcbiAgICAgICAgICAgIGEgPSBtYXRyaXhtWzBdLCBiID0gbWF0cml4bVsxXSwgYyA9IG1hdHJpeG1bNF0sIGQgPSBtYXRyaXhtWzVdLFxuICAgICAgICAgICAgdHggPSBtYXRyaXhtWzEyXSwgdHkgPSBtYXRyaXhtWzEzXTtcblxuICAgICAgICBsZXQgdmwgPSBsb2NhbFswXSwgdnIgPSBsb2NhbFsyXSxcbiAgICAgICAgICAgIHZiID0gbG9jYWxbMV0sIHZ0ID0gbG9jYWxbM107XG4gICAgICAgIFxuICAgICAgICBsZXQganVzdFRyYW5zbGF0ZSA9IGEgPT09IDEgJiYgYiA9PT0gMCAmJiBjID09PSAwICYmIGQgPT09IDE7XG5cbiAgICAgICAgaWYgKGp1c3RUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIC8vIGxlZnQgYm90dG9tXG4gICAgICAgICAgICB2YnVmWzBdID0gdmwgKyB0eDtcbiAgICAgICAgICAgIHZidWZbMV0gPSB2YiArIHR5O1xuICAgICAgICAgICAgLy8gcmlnaHQgYm90dG9tXG4gICAgICAgICAgICB2YnVmWzVdID0gdnIgKyB0eCA7XG4gICAgICAgICAgICB2YnVmWzZdID0gdmIgKyB0eTtcbiAgICAgICAgICAgIC8vIGxlZnQgdG9wXG4gICAgICAgICAgICB2YnVmWzEwXSA9IHZsICsgdHg7XG4gICAgICAgICAgICB2YnVmWzExXSA9IHZ0ICsgdHk7XG4gICAgICAgICAgICAvLyByaWdodCB0b3BcbiAgICAgICAgICAgIHZidWZbMTVdID0gdnIgKyB0eDtcbiAgICAgICAgICAgIHZidWZbMTZdID0gdnQgKyB0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhbCA9IGEgKiB2bCwgYXIgPSBhICogdnIsXG4gICAgICAgICAgICBibCA9IGIgKiB2bCwgYnIgPSBiICogdnIsXG4gICAgICAgICAgICBjYiA9IGMgKiB2YiwgY3QgPSBjICogdnQsXG4gICAgICAgICAgICBkYiA9IGQgKiB2YiwgZHQgPSBkICogdnQ7XG5cbiAgICAgICAgICAgIC8vIGxlZnQgYm90dG9tXG4gICAgICAgICAgICB2YnVmWzBdID0gYWwgKyBjYiArIHR4O1xuICAgICAgICAgICAgdmJ1ZlsxXSA9IGJsICsgZGIgKyB0eTtcbiAgICAgICAgICAgIC8vIHJpZ2h0IGJvdHRvbVxuICAgICAgICAgICAgdmJ1Zls1XSA9IGFyICsgY2IgKyB0eDtcbiAgICAgICAgICAgIHZidWZbNl0gPSBiciArIGRiICsgdHk7XG4gICAgICAgICAgICAvLyBsZWZ0IHRvcFxuICAgICAgICAgICAgdmJ1ZlsxMF0gPSBhbCArIGN0ICsgdHg7XG4gICAgICAgICAgICB2YnVmWzExXSA9IGJsICsgZHQgKyB0eTtcbiAgICAgICAgICAgIC8vIHJpZ2h0IHRvcFxuICAgICAgICAgICAgdmJ1ZlsxNV0gPSBhciArIGN0ICsgdHg7XG4gICAgICAgICAgICB2YnVmWzE2XSA9IGJyICsgZHQgKyB0eTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/eraser/eraser .js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07e10rvNd1NSbkbRMIuwTsX', 'eraser ');
// Shader/eraser/eraser .ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._graphics = null;
        _this.camera = null;
        _this.sp = null;
        _this.eraserSp = null;
        // @property(cc.Label)
        // label: cc.Label = null;
        // @property
        // text: string = 'hello';
        _this._material = null;
        _this._texture = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, true);
        this._texture = new cc.RenderTexture();
        // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
        this._texture.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
        this.camera.getComponent(cc.Camera).targetTexture = this._texture;
        this.camera.getComponent(cc.Camera).render();
    };
    NewClass.prototype.onEnable = function () {
    };
    NewClass.prototype.touchStartCallback = function (event) {
    };
    NewClass.prototype.touchMoveCallback = function (event) {
        var postion = this.node.convertToNodeSpaceAR(event.getLocation());
        var x = event.getLocationX() / this.node.width;
        var y = event.getLocationY() / this.node.height;
        //this._material.setProperty('position', cc.v2(postion.x / this.node.width, postion.y / this.node.height));
        this._graphics = this.getComponent(cc.Graphics);
        // this._graphics.clear();
        this._graphics.circle(postion.x, postion.y, 20);
        // this._graphics.moveTo(postion.x, postion.y);
        this._graphics.fillColor = cc.Color.RED;
        this._graphics.fill();
        // console.log(postion.x + "////" + postion.y);
        this._material = this.eraserSp.getComponent(cc.Sprite).getMaterial(0);
        this._material.setProperty('mixtexture', this._texture);
        this._material.setProperty('isOpen', 1.0);
    };
    NewClass.prototype.update = function (dt) {
    };
    __decorate([
        property({
            type: cc.Graphics
        })
    ], NewClass.prototype, "_graphics", void 0);
    __decorate([
        property({
            type: cc.Camera
        })
    ], NewClass.prototype, "camera", void 0);
    __decorate([
        property({
            type: cc.Sprite
        })
    ], NewClass.prototype, "sp", void 0);
    __decorate([
        property({
            type: cc.Sprite
        })
    ], NewClass.prototype, "eraserSp", void 0);
    __decorate([
        property({
            type: cc.Texture2D
        })
    ], NewClass.prototype, "_texture", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxlcmFzZXJcXGVyYXNlciAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7O0FBRTdGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMkVDO1FBdkVHLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFLakIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUtkLFFBQUUsR0FBRyxJQUFJLENBQUM7UUFLVixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFFMUIsWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBS2pCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBNkNwQixDQUFDO0lBMUNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELDJCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQscUNBQWtCLEdBQWxCLFVBQW1CLEtBQUs7SUFDeEIsQ0FBQztJQUVELG9DQUFpQixHQUFqQixVQUFrQixLQUFLO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVoRCwyR0FBMkc7UUFDM0csSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELCtDQUErQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLCtDQUErQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBUSxFQUFFO0lBQ1YsQ0FBQztJQXRFRDtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsUUFBUTtTQUNuQixDQUFDOytDQUNlO0lBS2pCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNO1NBQ2pCLENBQUM7NENBQ1k7SUFLZDtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTTtTQUNqQixDQUFDO3dDQUNRO0lBS1Y7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRSxDQUFDLE1BQU07U0FDakIsQ0FBQzs4Q0FDYztJQVdoQjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztTQUNyQixDQUFDOzhDQUNjO0lBOUJDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyRTVCO0lBQUQsZUFBQztDQTNFRCxBQTJFQyxDQTNFcUMsRUFBRSxDQUFDLFNBQVMsR0EyRWpEO2tCQTNFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuR3JhcGhpY3NcclxuICAgIH0pXHJcbiAgICBfZ3JhcGhpY3MgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTpjYy5DYW1lcmFcclxuICAgIH0pXHJcbiAgICBjYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTpjYy5TcHJpdGVcclxuICAgIH0pXHJcbiAgICBzcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOmNjLlNwcml0ZVxyXG4gICAgfSlcclxuICAgIGVyYXNlclNwID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIC8vIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG4gICAgX21hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlRleHR1cmUyRFxyXG4gICAgfSlcclxuICAgIF90ZXh0dXJlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUNhbGxiYWNrLCB0aGlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICAvLyDlpoLmnpzmiKrlm77lhoXlrrnkuK3kuI3ljIXlkKsgTWFzayDnu4Tku7bvvIzlj6/ku6XkuI3nlKjkvKDpgJLnrKzkuInkuKrlj4LmlbBcclxuICAgICAgICB0aGlzLl90ZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLndpZHRoLCBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkudGFyZ2V0VGV4dHVyZSA9IHRoaXMuX3RleHR1cmU7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKXtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0Q2FsbGJhY2soZXZlbnQpe1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoTW92ZUNhbGxiYWNrKGV2ZW50KXtcclxuICAgICAgICBsZXQgcG9zdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSBldmVudC5nZXRMb2NhdGlvblgoKSAvIHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBsZXQgeSA9IGV2ZW50LmdldExvY2F0aW9uWSgpIC8gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICAvL3RoaXMuX21hdGVyaWFsLnNldFByb3BlcnR5KCdwb3NpdGlvbicsIGNjLnYyKHBvc3Rpb24ueCAvIHRoaXMubm9kZS53aWR0aCwgcG9zdGlvbi55IC8gdGhpcy5ub2RlLmhlaWdodCkpO1xyXG4gICAgICAgIHRoaXMuX2dyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIC8vIHRoaXMuX2dyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fZ3JhcGhpY3MuY2lyY2xlKHBvc3Rpb24ueCwgcG9zdGlvbi55LCAyMCk7XHJcbiAgICAgICAgLy8gdGhpcy5fZ3JhcGhpY3MubW92ZVRvKHBvc3Rpb24ueCwgcG9zdGlvbi55KTtcclxuICAgICAgICB0aGlzLl9ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgdGhpcy5fZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvc3Rpb24ueCArIFwiLy8vL1wiICsgcG9zdGlvbi55KTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IHRoaXMuZXJhc2VyU3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCk7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21peHRleHR1cmUnLCB0aGlzLl90ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnaXNPcGVuJywgMS4wKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
