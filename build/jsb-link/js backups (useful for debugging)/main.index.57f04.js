window.__require = function t(e, i, r) {
function o(s, a) {
if (!i[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = i[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return o(e[s][1][t] || t);
}, u, u.exports, t, e, i, r);
}
return i[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < r.length; s++) o(r[s]);
return o;
}({
Cloud: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "41e1d/jwi9LMLP+HSey+FhV", "Cloud");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprite = null;
e._time = 0;
e._material = null;
return e;
}
e.prototype.onEnable = function() {
this._material = this.sprite.sharedMaterials[0];
};
e.prototype.update = function(t) {
this.node.active && this._material && this.setTime(t);
};
e.prototype.setTime = function(t) {
this._time += t;
this._time >= 1e3 && (this._time = 0);
this._material.setProperty("time", this._time);
};
__decorate([ n({
type: cc.Sprite
}) ], e.prototype, "sprite", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
CustomAssembler: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4a12fPFEB9Kk6elMeKieNpS", "CustomAssembler");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.verticesCount = 4;
e.indicesCount = 6;
e.uvOffset = 2;
e.colorOffset = 4;
e.floatsPerVert = 5;
e._renderData = null;
e._local = null;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
this._renderData = new cc.RenderData();
this._renderData.init(this);
this.initLocal();
this.initData();
};
e.prototype.updateRenderData = function(t) {
if (t._vertsDirty) {
this.updateUVs(t);
this.updateVerts(t);
t._vertsDirty = !1;
}
};
e.prototype.updateUVs = function() {
for (var t = [ 0, 0, 1, 0, 0, 1, 1, 1 ], e = this.uvOffset, i = this.floatsPerVert, r = this._renderData.vDatas[0], o = 0; o < 4; o++) {
var n = 2 * o, s = i * o + e;
r[s] = t[n];
r[s + 1] = t[n + 1];
}
};
e.prototype.updateVerts = function(t) {
var e, i, r, o, n = t.node, s = n.width, a = n.height, c = n.anchorX * s, p = n.anchorY * a;
e = -c;
i = -p;
r = s - c;
o = a - p;
var u = this._local;
u[0] = e;
u[1] = i;
u[2] = r;
u[3] = o;
this.updateWorldVerts(t);
};
Object.defineProperty(e.prototype, "verticesFloats", {
get: function() {
return this.verticesCount * this.floatsPerVert;
},
enumerable: !1,
configurable: !0
});
e.prototype.initData = function() {
this._renderData.createQuadData(0, this.verticesFloats, this.indicesCount);
};
e.prototype.initLocal = function() {
this._local = [];
this._local.length = 4;
};
e.prototype.updateColor = function(t, e) {
var i = this._renderData.uintVDatas[0];
if (i) {
e = e || t.node.color._val;
for (var r = this.floatsPerVert, o = this.colorOffset, n = i.length; o < n; o += r) i[o] = e;
}
};
e.prototype.getBuffer = function() {
return cc.renderer._handle._meshBuffer;
};
e.prototype.updateWorldVerts = function(t) {
var e = this._local, i = this._renderData.vDatas[0], r = t.node._worldMatrix.m, o = r[0], n = r[1], s = r[4], a = r[5], c = r[12], p = r[13], u = e[0], l = e[2], h = e[1], _ = e[3];
if (1 === o && 0 === n && 0 === s && 1 === a) {
i[0] = u + c;
i[1] = h + p;
i[5] = l + c;
i[6] = h + p;
i[10] = u + c;
i[11] = _ + p;
i[15] = l + c;
i[16] = _ + p;
} else {
var d = o * u, f = o * l, m = n * u, y = n * l, v = s * h, b = s * _, x = a * h, C = a * _;
i[0] = d + v + c;
i[1] = m + x + p;
i[5] = f + v + c;
i[6] = y + x + p;
i[10] = d + b + c;
i[11] = m + C + p;
i[15] = f + b + c;
i[16] = y + C + p;
}
};
e.prototype.fillBuffers = function(t, e) {
e.worldMatDirty && this.updateWorldVerts(t);
var i = this._renderData, r = i.vDatas[0], o = i.iDatas[0], n = this.getBuffer(), s = n.request(this.verticesCount, this.indicesCount), a = s.byteOffset >> 2, c = n._vData;
r.length + a > c.length ? c.set(r.subarray(0, this.verticesFloats), a) : c.set(r, a);
for (var p = n._iData, u = s.indiceOffset, l = s.vertexOffset, h = 0, _ = o.length; h < _; h++) p[u++] = l + o[h];
};
return e;
}(cc.Assembler);
i.default = r;
cc._RF.pop();
}, {} ],
CustomIAAssembler: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "555ebrAlNNMpKD/tJ6S/f6k", "CustomIAAssembler");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc.MeshBuffer, o = cc.renderer.InputAssembler, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._buffer = null;
e._ia = null;
e._vfmt = null;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
this._buffer = null;
this._ia = null;
this._vfmt = cc.gfx.VertexFormat.XY_UV_Color;
};
e.prototype.getBuffer = function() {
if (!this._buffer) {
this._buffer = new r(cc.renderer._handle, this._vfmt);
this._ia = new o();
this._ia._vertexBuffer = this._buffer._vb;
this._ia._indexBuffer = this._buffer._ib;
this._ia._start = 0;
this._ia._count = 0;
}
return this._buffer;
};
e.prototype.fillBuffers = function(t, e) {
if (this._ia) {
e.node = t.node;
e.material = t.sharedMaterials[0];
e._flushIA(this._ia);
}
};
return e;
}(cc.Assembler);
i.default = n;
cc._RF.pop();
}, {} ],
CustomIARenderComponent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "94208NQdWlDGaBbrhEU1DDg", "CustomIARenderComponent");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = t("./CustomIAAssembler"), a = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._texture = null;
e.uv = [];
e.local = [];
e.posOffset = 0;
e.max = 100;
e.direction = 1;
e.speed = 10;
return e;
}
Object.defineProperty(e.prototype, "texture", {
get: function() {
return this._texture;
},
set: function(t) {
if (this._texture !== t) {
this._texture = t;
this.applyTexture();
}
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
this._activateMaterial();
this.initVertexData();
};
e.prototype._resetAssembler = function() {
this.setVertsDirty(!0);
this._assembler = new s.default();
this._assembler.init(this);
};
e.prototype._activateMaterial = function() {
var t = this.sharedMaterials[0];
if (t) {
(t = cc.Material.getInstantiatedMaterial(t, this)).setProperty("texture", this.texture);
this.setMaterial(0, t);
this.markForRender(!0);
} else this.disableRender();
};
e.prototype.applyTexture = function() {
var t = this.getMaterial(0);
t && t.setProperty("texture", this.texture);
};
e.prototype.initVertexData = function() {
var t = this._assembler.getBuffer();
t.reset();
t.request(4, 6);
this.fillUV(t);
this.fillIndices(t);
this.fillVertex(t);
t.uploadData();
this._assembler._ia._count = 6;
};
e.prototype.update = function(t) {
if (this.getMaterial(0)) {
this.direction = this.posOffset >= this.max ? -1 : this.direction;
this.direction = this.posOffset <= 0 ? 1 : this.direction;
var e = t * this.direction * this.speed;
this.posOffset = this.posOffset + e;
var i = this._assembler.getBuffer(), r = i._vData;
r[0] += e;
r[15] -= e;
i._vb.update(0, r);
}
};
e.prototype.fillUV = function(t) {
var e = t._vData;
e[2] = 0;
e[3] = 1;
e[7] = 1;
e[8] = 1;
e[12] = 0;
e[13] = 0;
e[17] = 1;
e[18] = 0;
};
e.prototype.fillIndices = function(t) {
var e = t._iData;
e[0] = 0;
e[1] = 1;
e[2] = 2;
e[3] = 1;
e[4] = 3;
e[5] = 2;
var i = new Uint16Array(e.buffer, 0, e.length);
t._ib.update(0, i);
};
e.prototype.fillVertex = function(t) {
var e = t._uintVData, i = this.node, r = i.width, o = i.height, n = i.anchorX * r, s = i.anchorY * o, a = -n, c = -s, p = r - n, u = o - s, l = this.local;
l[0] = a;
l[1] = c;
l[2] = p;
l[3] = u;
e[4] = this.node.color._val;
e[9] = this.node.color._val;
e[14] = this.node.color._val;
e[19] = this.node.color._val;
this.updateWorldVerts(t);
};
e.prototype.updateWorldVerts = function(t) {
this.node._updateWorldMatrix();
var e = t._vData, i = this.local, r = this.node._worldMatrix.m, o = r[0], n = r[1], s = r[4], a = r[5], c = r[12], p = r[13], u = i[0], l = i[2], h = i[1], _ = i[3];
if (1 === o && 0 === n && 0 === s && 1 === a) {
e[0] = u + c;
e[1] = h + p;
e[5] = l + c;
e[6] = h + p;
e[10] = u + c;
e[11] = _ + p;
e[15] = l + c;
e[16] = _ + p;
} else {
var d = o * u, f = o * l, m = n * u, y = n * l, v = s * h, b = s * _, x = a * h, C = a * _;
e[0] = d + v + c;
e[1] = m + x + p;
e[5] = f + v + c;
e[6] = y + x + p;
e[10] = d + b + c;
e[11] = m + C + p;
e[15] = f + b + c;
e[16] = y + C + p;
}
};
__decorate([ n ], e.prototype, "_texture", void 0);
__decorate([ n({
type: cc.Texture2D
}) ], e.prototype, "texture", null);
return __decorate([ o ], e);
}(cc.RenderComponent);
i.default = a;
cc._RF.pop();
}, {
"./CustomIAAssembler": "CustomIAAssembler"
} ],
CustomRenderComponent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "30d77iucRdMIpT/dIf5jmBN", "CustomRenderComponent");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = (r.property, t("./CustomAssembler")), s = function(t) {
__extends(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
this._activateMaterial();
};
e.prototype._resetAssembler = function() {
this.setVertsDirty(!0);
this._assembler = new n.default();
this._assembler.init(this);
};
e.prototype._activateMaterial = function() {
var t = this.sharedMaterials[0];
if (t) {
t = cc.Material.getInstantiatedMaterial(t, this);
this.setMaterial(0, t);
this.markForRender(!0);
} else this.disableRender();
};
return __decorate([ o ], e);
}(cc.RenderComponent);
i.default = s;
cc._RF.pop();
}, {
"./CustomAssembler": "CustomAssembler"
} ],
CustomShaderUpdate: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "cd155r9KaVKIovZu3yYoRZZ", "CustomShaderUpdate");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = t("./CustomRenderComponent"), a = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._component = null;
e.limit = 1e3;
e.step = .1;
e._material = null;
e._time = 0;
return e;
}
Object.defineProperty(e.prototype, "component", {
get: function() {
return this._component;
},
set: function(t) {
this._component = t;
this._component && (this._material = this._component.sharedMaterials[0]);
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
this.component && (this._material = this.component.sharedMaterials[0]);
};
e.prototype.update = function(t) {
this._material && this.setTime(t);
};
e.prototype.setTime = function() {
this._time += this.step;
this._time = this._time >= this.limit ? 0 : this._time;
this._material.setProperty("time", this._time);
};
e.prototype.onDisable = function() {
this._material = null;
};
__decorate([ n ], e.prototype, "_component", void 0);
__decorate([ n({
type: s.default
}) ], e.prototype, "component", null);
__decorate([ n ], e.prototype, "limit", void 0);
__decorate([ n ], e.prototype, "step", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = a;
cc._RF.pop();
}, {
"./CustomRenderComponent": "CustomRenderComponent"
} ],
PointLight: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "115bdAojHZNYbdP2ZowdaVa", "PointLight");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = t("../../../Script/CustomRenderComponent"), a = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.component = null;
e._material = null;
e._down = !1;
e._mouse = cc.v2(0, 0);
return e;
}
e.prototype.onEnable = function() {
this._material = this.component.sharedMaterials[0];
this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMove, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
this.node.on(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);
};
e.prototype.mouseDown = function() {
this._down = !0;
};
e.prototype.mouseMove = function(t) {
if (this._down) {
this._mouse.x = t.getLocationX() / cc.winSize.width;
this._mouse.y = t.getLocationY() / cc.winSize.height;
this.setMouse();
} else t.stopPropagation();
};
e.prototype.mouseLeave = function(t) {
this._down ? this._down = !1 : t.stopPropagation();
};
e.prototype.mouseUp = function(t) {
this._down ? this._down = !1 : t.stopPropagation();
};
e.prototype.setMouse = function() {
this.node.active && this._material && this._material.setProperty("mouse", cc.v2(this._mouse));
};
__decorate([ n({
type: s.default
}) ], e.prototype, "component", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = a;
cc._RF.pop();
}, {
"../../../Script/CustomRenderComponent": "CustomRenderComponent"
} ],
PostRenderTexture: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "53dafiZfGxP35uJOJL5zJ/l", "PostRenderTexture");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = t("../../../Script/CustomRenderComponent"), a = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.camera = null;
e._sprite = null;
e.texture = null;
e.material = null;
return e;
}
Object.defineProperty(e.prototype, "sprite", {
get: function() {
return this._sprite;
},
set: function(t) {
this._sprite = t;
this.initMaterial();
},
enumerable: !1,
configurable: !0
});
e.prototype.start = function() {
this.initMaterial();
};
e.prototype.initMaterial = function() {
this.material = this.sprite.sharedMaterials[0];
if (!this.texture) {
this.texture = new cc.RenderTexture();
this.texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height);
this.camera.targetTexture = this.texture;
this.camera.render();
}
this.sprite.spriteFrame = new cc.SpriteFrame(this.texture);
this.material.setProperty("texture", this.texture);
};
__decorate([ n({
type: cc.Camera
}) ], e.prototype, "camera", void 0);
__decorate([ n ], e.prototype, "_sprite", void 0);
__decorate([ n({
type: s.default
}) ], e.prototype, "sprite", null);
return __decorate([ o ], e);
}(cc.Component);
i.default = a;
cc._RF.pop();
}, {
"../../../Script/CustomRenderComponent": "CustomRenderComponent"
} ],
Rain: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4a9d0Fh0e9LypVmmMwy9aMC", "Rain");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprite = null;
e._time = 0;
e._material = null;
return e;
}
e.prototype.onEnable = function() {
this._material = this.sprite.sharedMaterials[0];
};
e.prototype.update = function(t) {
this.node.active && this._material && this.setTime(t);
};
e.prototype.setTime = function(t) {
this._time += t;
this._time >= 1e3 && (this._time = 0);
this._material.setProperty("time", this._time);
};
__decorate([ n({
type: cc.Sprite
}) ], e.prototype, "sprite", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
SceneManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "306cf+YWYdOqqK8OSwdLhAL", "SceneManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.BtnNode = null;
return e;
}
e.prototype.start = function() {
cc.game.addPersistRootNode(this.node);
cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this.onSceneLoaded, this);
};
e.prototype.onSceneLoaded = function(t) {
this.BtnNode.active = "Start" !== t.name;
};
e.SceneList = {
GamePlay: [ "PointLight", "Smoke", "Water" ],
Texture: [ "Blur", "Fluxay", "PostTexture", "PostRenderTexture" ],
Weather: [ "Cloud", "Rain", "Snow", "Stormy" ]
};
e.GroupName = "";
__decorate([ n({
type: cc.Node
}) ], e.prototype, "BtnNode", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
SpriteShaderUpdatemy: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8db2dKgX9VGa7R4jLKixd3g", "SpriteShaderUpdatemy");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._sprite = null;
e.limit = 1e3;
e.step = .1;
e._material = null;
e._time = 0;
return e;
}
Object.defineProperty(e.prototype, "sprite", {
get: function() {
return this._sprite;
},
set: function(t) {
this._sprite = t;
this._sprite && (this._material = this._sprite.sharedMaterials[0]);
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
this._material = this.getComponent("myrender").getMaterial(0);
};
e.prototype.update = function(t) {
this._material && this.setTime(t);
};
e.prototype.setTime = function() {
this._time += this.step;
this._time = this._time >= this.limit ? 0 : this._time;
this._material.setProperty("time", this._time);
};
e.prototype.onDisable = function() {
this._material = null;
};
__decorate([ n ], e.prototype, "_sprite", void 0);
__decorate([ n({
type: cc.Sprite
}) ], e.prototype, "sprite", null);
__decorate([ n ], e.prototype, "limit", void 0);
__decorate([ n ], e.prototype, "step", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
SpriteShaderUpdate: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5fba57DFKJMw6YH1WyqbUj0", "SpriteShaderUpdate");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._sprite = null;
e.limit = 1e3;
e.step = .1;
e._material = null;
e._time = 0;
return e;
}
Object.defineProperty(e.prototype, "sprite", {
get: function() {
return this._sprite;
},
set: function(t) {
this._sprite = t;
this._sprite && (this._material = this._sprite.sharedMaterials[0]);
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
this.sprite && (this._material = this.sprite.sharedMaterials[0]);
};
e.prototype.update = function(t) {
this._material && this.setTime(t);
};
e.prototype.setTime = function() {
this._time += this.step;
this._time = this._time >= this.limit ? 0 : this._time;
this._material.setProperty("time", this._time);
};
e.prototype.onDisable = function() {
this._material = null;
};
__decorate([ n ], e.prototype, "_sprite", void 0);
__decorate([ n({
type: cc.Sprite
}) ], e.prototype, "sprite", null);
__decorate([ n ], e.prototype, "limit", void 0);
__decorate([ n ], e.prototype, "step", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
Start: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b31d4m6Q5NFI5zMsYjEK1oS", "Start");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = (r.property, t("./SceneManager")), s = function(t) {
__extends(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
cc.game._renderContext.getExtension("OES_standard_derivatives");
};
e.prototype.onClickSubView = function(t, e) {
if (e && n.default.SceneList[e]) {
n.default.GroupName = e;
var i = n.default.SceneList[e][0];
cc.director.loadScene(i);
}
};
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {
"./SceneManager": "SceneManager"
} ],
SubScene: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1eb98g8xH1KD4jUvum2w5LZ", "SubScene");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = (r.property, t("./SceneManager")), s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.index = 0;
e.max = 0;
return e;
}
e.prototype.onEnable = function() {
this.max = n.default.SceneList[n.default.GroupName].length;
};
e.prototype.clickPrev = function() {
this.index--;
this.index < 0 && (this.index = this.max - 1);
var t = n.default.SceneList[n.default.GroupName][this.index];
cc.director.loadScene(t);
};
e.prototype.clickReturn = function() {
this.index = 0;
cc.director.loadScene("Start");
};
e.prototype.clickNext = function() {
this.index++;
this.index >= this.max && (this.index = 0);
var t = n.default.SceneList[n.default.GroupName][this.index];
cc.director.loadScene(t);
};
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {
"./SceneManager": "SceneManager"
} ],
"eraser ": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "07e10rvNd1NSbkbRMIuwTsX", "eraser ");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._graphics = null;
e.camera = null;
e.sp = null;
e.eraserSp = null;
e._material = null;
e._texture = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, !0);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, !0);
this._texture = new cc.RenderTexture();
this._texture.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
this.camera.getComponent(cc.Camera).targetTexture = this._texture;
this.camera.getComponent(cc.Camera).render();
};
e.prototype.onEnable = function() {};
e.prototype.touchStartCallback = function() {};
e.prototype.touchMoveCallback = function(t) {
var e = this.node.convertToNodeSpaceAR(t.getLocation());
t.getLocationX(), this.node.width, t.getLocationY(), this.node.height;
this._graphics = this.getComponent(cc.Graphics);
this._graphics.circle(e.x, e.y, 20);
this._graphics.fillColor = cc.Color.RED;
this._graphics.fill();
this._material = this.eraserSp.getComponent(cc.Sprite).getMaterial(0);
this._material.setProperty("mixtexture", this._texture);
this._material.setProperty("isOpen", 1);
};
e.prototype.update = function() {};
__decorate([ n({
type: cc.Graphics
}) ], e.prototype, "_graphics", void 0);
__decorate([ n({
type: cc.Camera
}) ], e.prototype, "camera", void 0);
__decorate([ n({
type: cc.Sprite
}) ], e.prototype, "sp", void 0);
__decorate([ n({
type: cc.Sprite
}) ], e.prototype, "eraserSp", void 0);
__decorate([ n({
type: cc.Texture2D
}) ], e.prototype, "_texture", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
mixtexture: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e79b6MTUQhKkIWsqSPQvVl7", "mixtexture");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = (r.property, function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._material = null;
e._totaltime = 0;
return e;
}
e.prototype.onEnable = function() {
this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, !0);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, !0);
};
e.prototype.touchStartCallback = function(t) {
var e = this.node.convertToNodeSpaceAR(t.getLocation());
e.x += this.node.width / 2;
e.y = this.node.height / 2 - e.y;
console.log(e.x / this.node.width + "////" + e.y / this.node.height);
this._totaltime = 0;
this._material.setProperty("time", this._totaltime);
this._material.setProperty("postion", cc.v2(e.x / this.node.width, e.y / this.node.height));
};
e.prototype.touchMoveCallback = function(t) {
var e = this.node.convertToNodeSpaceAR(t.getLocation());
e.x += this.node.width / 2;
e.y = this.node.height / 2 - e.y;
console.log(e.x / this.node.width + "////" + e.y / this.node.height);
this._totaltime = 0;
this._material.setProperty("time", this._totaltime);
this._material.setProperty("postion", cc.v2(e.x / this.node.width, e.y / this.node.height));
};
e.prototype.update = function() {
this._totaltime += .01;
this._totaltime = this._totaltime >= 1e3 ? 0 : this._totaltime;
this._material.setProperty("time", this._totaltime);
};
return __decorate([ o ], e);
}(cc.Component));
i.default = n;
cc._RF.pop();
}, {} ],
mix: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "39befXoNtZOX5tbpm08ZYFV", "mix");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = r.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.mixtexture = null;
e._material = null;
e._totaltime = 0;
return e;
}
e.prototype.start = function() {
this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
this._material.setProperty("mixtexture", this.mixtexture);
};
e.prototype.update = function(t) {
this._totaltime += t;
this._material.setProperty("time", this._totaltime);
};
__decorate([ n(cc.Label) ], e.prototype, "label", void 0);
__decorate([ n({
type: cc.Texture2D
}) ], e.prototype, "mixtexture", void 0);
return __decorate([ o ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
use_reversed_rotateTo: [ function(t, e) {
"use strict";
cc._RF.push(e, "af15egE90BAzYL7Jy5z3+Px", "use_reversed_rotateTo");
cc.RotateTo._reverse = !0;
cc._RF.pop();
}, {} ],
uvacton: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d449c14USdGebbYpsLI7qCw", "uvacton");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, o = r.ccclass, n = (r.property, function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._material = null;
e._totaltime = 0;
return e;
}
e.prototype.start = function() {
this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
};
e.prototype.update = function(t) {
this._totaltime += t;
this._material.setProperty("time", this._totaltime);
};
return __decorate([ o ], e);
}(cc.Component));
i.default = n;
cc._RF.pop();
}, {} ]
}, {}, [ "CustomIAAssembler", "CustomIARenderComponent", "CustomAssembler", "CustomRenderComponent", "CustomShaderUpdate", "SceneManager", "SpriteShaderUpdate", "SpriteShaderUpdatemy", "Start", "SubScene", "PointLight", "PostRenderTexture", "Cloud", "Rain", "eraser ", "mix", "uvacton", "mixtexture", "use_reversed_rotateTo" ]);