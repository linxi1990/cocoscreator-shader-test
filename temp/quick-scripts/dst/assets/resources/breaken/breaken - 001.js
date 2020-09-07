
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