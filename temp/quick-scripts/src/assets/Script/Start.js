"use strict";
cc._RF.push(module, 'b31d4m6Q5NFI5zMsYjEK1oS', 'Start');
// Script/Start.ts

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
var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Start.prototype.start = function () {
        var gl = cc.game._renderContext;
        gl.getExtension('OES_standard_derivatives');
    };
    Start.prototype.onClickSubView = function (event, name) {
        if (!name || !SceneManager_1.default.SceneList[name]) {
            return;
        }
        SceneManager_1.default.GroupName = name;
        var scene = SceneManager_1.default.SceneList[name][0];
        cc.director.loadScene(scene);
    };
    Start = __decorate([
        ccclass
    ], Start);
    return Start;
}(cc.Component));
exports.default = Start;

cc._RF.pop();