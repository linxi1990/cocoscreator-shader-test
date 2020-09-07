
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