
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