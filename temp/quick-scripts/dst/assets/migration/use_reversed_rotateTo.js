
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af15egE90BAzYL7Jy5z3+Px', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlVG8uanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVUbyIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBQSxFQUFFLENBQUNDLFFBQUgsQ0FBWUMsUUFBWixHQUF1QixJQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIHZlcnNpb25zLlxyXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxyXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLkFjdGlvbiBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxyXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIOeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIEFjdGlvbu+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmNjLlJvdGF0ZVRvLl9yZXZlcnNlID0gdHJ1ZTtcclxuIl19