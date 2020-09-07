
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/Texture/PostRenderTexture/PostRenderTexture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53dafiZfGxP35uJOJL5zJ/l', 'PostRenderTexture');
// Shader/Texture/PostRenderTexture/PostRenderTexture.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomRenderComponent_1 = require("../../../Script/CustomRenderComponent");
var PostRenderTexture = /** @class */ (function (_super) {
    __extends(PostRenderTexture, _super);
    function PostRenderTexture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this._sprite = null;
        _this.texture = null;
        _this.material = null;
        return _this;
    }
    Object.defineProperty(PostRenderTexture.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (val) {
            this._sprite = val;
            this.initMaterial();
        },
        enumerable: false,
        configurable: true
    });
    PostRenderTexture.prototype.start = function () {
        this.initMaterial();
    };
    PostRenderTexture.prototype.initMaterial = function () {
        this.material = this.sprite.sharedMaterials[0];
        if (!this.texture) {
            this.texture = new cc.RenderTexture();
            this.texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height);
            this.camera.targetTexture = this.texture;
            this.camera.render();
        }
        this.sprite.spriteFrame = new cc.SpriteFrame(this.texture);
        this.material.setProperty('texture', this.texture);
    };
    __decorate([
        property({
            type: cc.Camera
        })
    ], PostRenderTexture.prototype, "camera", void 0);
    __decorate([
        property
    ], PostRenderTexture.prototype, "_sprite", void 0);
    __decorate([
        property({
            type: CustomRenderComponent_1.default
        })
    ], PostRenderTexture.prototype, "sprite", null);
    PostRenderTexture = __decorate([
        ccclass
    ], PostRenderTexture);
    return PostRenderTexture;
}(cc.Component));
exports.default = PostRenderTexture;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxUZXh0dXJlXFxQb3N0UmVuZGVyVGV4dHVyZVxcUG9zdFJlbmRlclRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLCtFQUF5RTtBQUd6RTtJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXdDQztRQXBDRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFjekIsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsY0FBUSxHQUFlLElBQUksQ0FBQzs7SUFrQmhDLENBQUM7SUE1Qkcsc0JBQUkscUNBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxHQUFHO1lBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQUxBO0lBU0QsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFuQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07U0FDbEIsQ0FBQztxREFDdUI7SUFHekI7UUFEQyxRQUFRO3NEQUNnQjtJQUt6QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSwrQkFBcUI7U0FDOUIsQ0FBQzttREFHRDtJQWRnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXdDckM7SUFBRCx3QkFBQztDQXhDRCxBQXdDQyxDQXhDOEMsRUFBRSxDQUFDLFNBQVMsR0F3QzFEO2tCQXhDb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgQ3VzdG9tUmVuZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL1NjcmlwdC9DdXN0b21SZW5kZXJDb21wb25lbnQnXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0UmVuZGVyVGV4dHVyZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ2FtZXJhXG4gICAgfSlcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBfc3ByaXRlOmNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBDdXN0b21SZW5kZXJDb21wb25lbnRcbiAgICB9KVxuICAgIGdldCBzcHJpdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlO1xuICAgIH1cblxuICAgIHNldCBzcHJpdGUgKHZhbCkge1xuICAgICAgICB0aGlzLl9zcHJpdGUgPSB2YWw7XG4gICAgICAgIHRoaXMuaW5pdE1hdGVyaWFsKCk7XG4gICAgfVxuXG4gICAgdGV4dHVyZTpjYy5SZW5kZXJUZXh0dXJlID0gbnVsbDtcbiAgICBtYXRlcmlhbDpjYy5NYXRlcmlhbCA9IG51bGw7XG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmluaXRNYXRlcmlhbCgpO1xuICAgIH1cblxuICAgIGluaXRNYXRlcmlhbCAoKSB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSB0aGlzLnNwcml0ZS5zaGFyZWRNYXRlcmlhbHNbMF07XG5cbiAgICAgICAgaWYgKCF0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUuaW5pdFdpdGhTaXplKGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMudGV4dHVyZTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnJlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgndGV4dHVyZScsIHRoaXMudGV4dHVyZSk7XG4gICAgfVxufVxuIl19