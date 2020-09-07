"use strict";
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