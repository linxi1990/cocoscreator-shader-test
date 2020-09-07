
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