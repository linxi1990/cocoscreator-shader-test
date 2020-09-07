
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Example/IA/CustomIAAssembler');
require('./assets/Example/IA/CustomIARenderComponent');
require('./assets/Script/CustomAssembler');
require('./assets/Script/CustomRenderComponent');
require('./assets/Script/CustomShaderUpdate');
require('./assets/Script/SceneManager');
require('./assets/Script/SpriteShaderUpdate');
require('./assets/Script/SpriteShaderUpdatemy');
require('./assets/Script/Start');
require('./assets/Script/SubScene');
require('./assets/Shader/GamePlay/PointLight/PointLight');
require('./assets/Shader/Texture/PostRenderTexture/PostRenderTexture');
require('./assets/Shader/Weather/Cloud/Cloud');
require('./assets/Shader/Weather/Rain/Rain');
require('./assets/Shader/eraser/eraser ');
require('./assets/Shader/mixtexture/mix');
require('./assets/Shader/uvaction/uvacton');
require('./assets/Shader/water/mixtexture');
require('./assets/migration/use_reversed_rotateTo');
require('./assets/resources/SpriteShaderUpdatemy1');
require('./assets/resources/breaken/breaken - 001');
require('./assets/resources/breaken/breaken');
require('./assets/resources/dissolve/dissolve');
require('./assets/resources/fire/fire');
require('./assets/resources/liquid/liquid');
require('./assets/resources/liquid/moveban');
require('./assets/resources/main');
require('./assets/resources/myassembler');
require('./assets/resources/myrender');
require('./assets/resources/outline/outline');
require('./assets/resources/postpoint/postpoint');

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