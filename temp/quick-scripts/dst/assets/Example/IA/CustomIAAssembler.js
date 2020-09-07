
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Example/IA/CustomIAAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '555ebrAlNNMpKD/tJ6S/f6k', 'CustomIAAssembler');
// Example/IA/CustomIAAssembler.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MeshBuffer = cc.MeshBuffer;
var InputAssembler = cc.renderer.InputAssembler;
var CustomIAAssembler = /** @class */ (function (_super) {
    __extends(CustomIAAssembler, _super);
    function CustomIAAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._buffer = null;
        _this._ia = null;
        _this._vfmt = null;
        return _this;
    }
    CustomIAAssembler.prototype.init = function (comp) {
        _super.prototype.init.call(this, comp);
        this._buffer = null;
        this._ia = null;
        this._vfmt = cc.gfx.VertexFormat.XY_UV_Color;
    };
    CustomIAAssembler.prototype.getBuffer = function () {
        if (!this._buffer) {
            // Create quad buffer for vertex and index
            this._buffer = new MeshBuffer(cc.renderer._handle, this._vfmt);
            this._ia = new InputAssembler();
            this._ia._vertexBuffer = this._buffer._vb;
            this._ia._indexBuffer = this._buffer._ib;
            this._ia._start = 0;
            this._ia._count = 0;
        }
        return this._buffer;
    };
    CustomIAAssembler.prototype.fillBuffers = function (comp, renderer) {
        if (!this._ia)
            return;
        renderer.node = comp.node;
        renderer.material = comp.sharedMaterials[0];
        renderer._flushIA(this._ia);
    };
    return CustomIAAssembler;
}(cc.Assembler));
exports.default = CustomIAAssembler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXhhbXBsZVxcSUFcXEN1c3RvbUlBQXNzZW1ibGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ2pDLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO0FBRWxEO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBbUNDO1FBbENHLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixTQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFnQ2pCLENBQUM7SUE5QkcsZ0NBQUksR0FBSixVQUFNLElBQUk7UUFDTixpQkFBTSxJQUFJLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7SUFDakQsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLDBDQUEwQztZQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFhLElBQUksRUFBRSxRQUFRO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFFdEIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxDQW5DOEMsRUFBRSxDQUFDLFNBQVMsR0FtQzFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBNZXNoQnVmZmVyID0gY2MuTWVzaEJ1ZmZlcjtcbmNvbnN0IElucHV0QXNzZW1ibGVyID0gY2MucmVuZGVyZXIuSW5wdXRBc3NlbWJsZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUlBQXNzZW1ibGVyIGV4dGVuZHMgY2MuQXNzZW1ibGVyIHtcbiAgICBfYnVmZmVyID0gbnVsbDtcbiAgICBfaWEgPSBudWxsO1xuICAgIF92Zm10ID0gbnVsbDtcblxuICAgIGluaXQgKGNvbXApIHtcbiAgICAgICAgc3VwZXIuaW5pdChjb21wKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lhID0gbnVsbDtcblxuICAgICAgICB0aGlzLl92Zm10ID0gY2MuZ2Z4LlZlcnRleEZvcm1hdC5YWV9VVl9Db2xvcjtcbiAgICB9XG5cbiAgICBnZXRCdWZmZXIgKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2J1ZmZlcikge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHF1YWQgYnVmZmVyIGZvciB2ZXJ0ZXggYW5kIGluZGV4XG4gICAgICAgICAgICB0aGlzLl9idWZmZXIgPSBuZXcgTWVzaEJ1ZmZlcihjYy5yZW5kZXJlci5faGFuZGxlLCB0aGlzLl92Zm10KTtcblxuICAgICAgICAgICAgdGhpcy5faWEgPSBuZXcgSW5wdXRBc3NlbWJsZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2lhLl92ZXJ0ZXhCdWZmZXIgPSB0aGlzLl9idWZmZXIuX3ZiO1xuICAgICAgICAgICAgdGhpcy5faWEuX2luZGV4QnVmZmVyID0gdGhpcy5fYnVmZmVyLl9pYjtcbiAgICAgICAgICAgIHRoaXMuX2lhLl9zdGFydCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9pYS5fY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXI7XG4gICAgfVxuICAgIFxuICAgIGZpbGxCdWZmZXJzIChjb21wLCByZW5kZXJlcikge1xuICAgICAgICBpZiAoIXRoaXMuX2lhKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICByZW5kZXJlci5ub2RlID0gY29tcC5ub2RlO1xuICAgICAgICByZW5kZXJlci5tYXRlcmlhbCA9IGNvbXAuc2hhcmVkTWF0ZXJpYWxzWzBdO1xuICAgICAgICByZW5kZXJlci5fZmx1c2hJQSh0aGlzLl9pYSk7XG4gICAgfVxufVxuIl19