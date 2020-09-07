"use strict";
cc._RF.push(module, '306cf+YWYdOqqK8OSwdLhAL', 'SceneManager');
// Script/SceneManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManager = /** @class */ (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BtnNode = null;
        return _this;
    }
    SceneManager.prototype.start = function () {
        cc.game.addPersistRootNode(this.node);
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this.onSceneLoaded, this);
    };
    SceneManager.prototype.onSceneLoaded = function (scene) {
        this.BtnNode.active = scene.name !== "Start";
    };
    SceneManager.SceneList = {
        "GamePlay": ["PointLight", "Smoke", "Water"],
        "Texture": ["Blur", "Fluxay", "PostTexture", "PostRenderTexture"],
        "Weather": ["Cloud", "Rain", "Snow", "Stormy"],
    };
    SceneManager.GroupName = "";
    __decorate([
        property({
            type: cc.Node
        })
    ], SceneManager.prototype, "BtnNode", void 0);
    SceneManager = __decorate([
        ccclass
    ], SceneManager);
    return SceneManager;
}(cc.Component));
exports.default = SceneManager;

cc._RF.pop();