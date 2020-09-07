
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