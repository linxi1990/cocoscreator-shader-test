"use strict";
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