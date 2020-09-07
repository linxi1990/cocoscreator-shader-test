
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTY2VuZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBc0JDO1FBVkcsYUFBTyxHQUFXLElBQUksQ0FBQzs7SUFVM0IsQ0FBQztJQVJHLDRCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBZSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQ2pELENBQUM7SUFwQmEsc0JBQVMsR0FBRztRQUN0QixVQUFVLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztRQUNqRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7S0FDakQsQ0FBQTtJQUVhLHNCQUFTLEdBQVUsRUFBRSxDQUFDO0lBS3BDO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1NBQ2hCLENBQUM7aURBQ3FCO0lBWk4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXNCaEM7SUFBRCxtQkFBQztDQXRCRCxBQXNCQyxDQXRCeUMsRUFBRSxDQUFDLFNBQVMsR0FzQnJEO2tCQXRCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIFNjZW5lTGlzdCA9IHtcbiAgICAgICAgXCJHYW1lUGxheVwiOiBbXCJQb2ludExpZ2h0XCIsIFwiU21va2VcIiwgXCJXYXRlclwiXSxcbiAgICAgICAgXCJUZXh0dXJlXCI6IFtcIkJsdXJcIiwgXCJGbHV4YXlcIiwgXCJQb3N0VGV4dHVyZVwiLCBcIlBvc3RSZW5kZXJUZXh0dXJlXCJdLFxuICAgICAgICBcIldlYXRoZXJcIjogW1wiQ2xvdWRcIiwgXCJSYWluXCIsIFwiU25vd1wiLCBcIlN0b3JteVwiXSxcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdyb3VwTmFtZTpzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgIH0pXG4gICAgQnRuTm9kZTpjYy5Ob2RlID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfU0NFTkVfTEFVTkNILCB0aGlzLm9uU2NlbmVMb2FkZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uU2NlbmVMb2FkZWQgKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuQnRuTm9kZS5hY3RpdmUgPSBzY2VuZS5uYW1lICE9PSBcIlN0YXJ0XCI7XG4gICAgfVxufSJdfQ==