
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