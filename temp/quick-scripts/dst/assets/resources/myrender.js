
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