
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shader/GamePlay/PointLight/PointLight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '115bdAojHZNYbdP2ZowdaVa', 'PointLight');
// Shader/GamePlay/PointLight/PointLight.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomRenderComponent_1 = require("../../../Script/CustomRenderComponent");
var PointLight = /** @class */ (function (_super) {
    __extends(PointLight, _super);
    function PointLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.component = null;
        _this._material = null;
        _this._down = false;
        _this._mouse = cc.v2(0, 0);
        return _this;
    }
    PointLight.prototype.onEnable = function () {
        this._material = this.component.sharedMaterials[0];
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMove, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);
    };
    PointLight.prototype.mouseDown = function (event) {
        this._down = true;
    };
    PointLight.prototype.mouseMove = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._mouse.x = event.getLocationX() / cc.winSize.width;
        this._mouse.y = event.getLocationY() / cc.winSize.height;
        this.setMouse();
    };
    PointLight.prototype.mouseLeave = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._down = false;
    };
    PointLight.prototype.mouseUp = function (event) {
        if (!this._down) {
            event.stopPropagation();
            return;
        }
        this._down = false;
    };
    PointLight.prototype.setMouse = function () {
        if (this.node.active && this._material) {
            this._material.setProperty('mouse', cc.v2(this._mouse));
        }
    };
    __decorate([
        property({
            type: CustomRenderComponent_1.default
        })
    ], PointLight.prototype, "component", void 0);
    PointLight = __decorate([
        ccclass
    ], PointLight);
    return PointLight;
}(cc.Component));
exports.default = PointLight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyXFxHYW1lUGxheVxcUG9pbnRMaWdodFxcUG9pbnRMaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsK0VBQXlFO0FBR3pFO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBdURDO1FBbERHLGVBQVMsR0FBMEIsSUFBSSxDQUFDO1FBRXhDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUE4Q3pCLENBQUM7SUE1Q0csNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsT0FBTTtTQUNUO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBWSxLQUFLO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBakREO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLCtCQUFxQjtTQUM5QixDQUFDO2lEQUNzQztJQUx2QixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdUQ5QjtJQUFELGlCQUFDO0NBdkRELEFBdURDLENBdkR1QyxFQUFFLENBQUMsU0FBUyxHQXVEbkQ7a0JBdkRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmltcG9ydCBDdXN0b21SZW5kZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0L0N1c3RvbVJlbmRlckNvbXBvbmVudCdcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50TGlnaHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogQ3VzdG9tUmVuZGVyQ29tcG9uZW50XG4gICAgfSlcbiAgICBjb21wb25lbnQ6IEN1c3RvbVJlbmRlckNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBfbWF0ZXJpYWwgPSBudWxsO1xuICAgIF9kb3duID0gZmFsc2U7XG4gICAgX21vdXNlID0gY2MudjIoMCwgMCk7XG5cbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5jb21wb25lbnQuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5tb3VzZURvd24sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5tb3VzZU1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMubW91c2VMZWF2ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5tb3VzZVVwLCB0aGlzKTtcbiAgICB9XG5cbiAgICBtb3VzZURvd24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2Rvd24gPSB0cnVlO1xuICAgIH1cblxuICAgIG1vdXNlTW92ZSAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kb3duKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbW91c2UueCA9IGV2ZW50LmdldExvY2F0aW9uWCgpIC8gY2Mud2luU2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5fbW91c2UueSA9IGV2ZW50LmdldExvY2F0aW9uWSgpIC8gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc2V0TW91c2UoKTtcbiAgICB9XG5cbiAgICBtb3VzZUxlYXZlIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX2Rvd24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZG93biA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdXNlVXAgKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fZG93bikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kb3duID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TW91c2UgKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSAmJiB0aGlzLl9tYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21vdXNlJywgY2MudjIodGhpcy5fbW91c2UpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==