"use strict";
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