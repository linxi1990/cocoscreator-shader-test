
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