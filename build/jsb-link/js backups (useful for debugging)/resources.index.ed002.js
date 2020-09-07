window.__require = function t(e, r, o) {
function i(n, a) {
if (!r[n]) {
if (!e[n]) {
var s = n.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (c) return c(s, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = s;
}
var u = r[n] = {
exports: {}
};
e[n][0].call(u.exports, function(t) {
return i(e[n][1][t] || t);
}, u, u.exports, t, e, r, o);
}
return r[n].exports;
}
for (var c = "function" == typeof __require && __require, n = 0; n < o.length; n++) i(o[n]);
return i;
}({
SpriteShaderUpdatemy1: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "960b6yUXu1G1pmet2nTDz1e", "SpriteShaderUpdatemy1");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.limit = 1e3;
e.step = .1;
e._material = null;
e._time = 0;
return e;
}
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
__decorate([ c ], e.prototype, "limit", void 0);
__decorate([ c ], e.prototype, "step", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ],
"breaken - 001": [ function(t, e, r) {
"use strict";
cc._RF.push(e, "dc11f5O3G9FH6SBQtpPwlIS", "breaken - 001");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._material = null;
e.mixtexture = null;
return e;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, !0);
};
e.prototype.touchStartCallback = function() {
var t = this;
cc.loader.loadRes("breaken/breaken", cc.Material, function(e, r) {
e && cc.error(e);
t.node.getComponent(cc.Sprite).setMaterial(0, r);
t.node.getComponent(cc.Sprite).markForRender(!0);
t._material = t.node.getComponent(cc.Sprite).sharedMaterials[0];
t._material.setProperty("mixtexture", t.mixtexture);
});
};
__decorate([ c({
type: cc.Texture2D
}) ], e.prototype, "mixtexture", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ],
breaken: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "de904Pq+BFMqYigCdN04Vfs", "breaken");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._material = null;
e.mixtexture = null;
return e;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, !0);
};
e.prototype.touchStartCallback = function() {
var t = this;
cc.loader.loadRes("breaken/breaken", cc.Material, function(e, r) {
e && cc.error(e);
t._material = t.getComponent(cc.Sprite).sharedMaterials[0];
r.setProperty("texture", t.mixtexture);
t.node.getComponent(cc.Sprite).setMaterial(0, r);
});
};
__decorate([ c({
type: cc.Texture2D
}) ], e.prototype, "mixtexture", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ],
dissolve: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "848b839dihL2ZHlq6Nus6W1", "dissolve");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nosisetexture = null;
e.u_lut = null;
e._material = null;
e._start = !1;
e._time = 0;
return e;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, !0);
};
e.prototype.touchStartCallback = function() {
var t = this;
cc.loader.loadRes("dissolve/dissolve", cc.Material, function(e, r) {
e && cc.error(e);
t.node.getComponent(cc.Sprite).setMaterial(0, r);
t.node.getComponent(cc.Sprite).markForRender(!0);
t._material = t.node.getComponent(cc.Sprite).getMaterial(0);
t._material.setProperty("nosisetexture", t.nosisetexture);
t._material.setProperty("u_lut", t.u_lut);
t._start = !0;
});
};
e.prototype.update = function() {
if (this._start) {
this._time += .1;
this._time = this._time >= 1e3 ? 0 : this._time;
this._material = this.getComponent(cc.Sprite).getMaterial(0);
this._material.setProperty("time", this._time);
}
};
__decorate([ c({
type: cc.Texture2D
}) ], e.prototype, "nosisetexture", void 0);
__decorate([ c({
type: cc.Texture2D
}) ], e.prototype, "u_lut", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ],
fire: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3cdc5UOo89Kj4igdqQOsm7n", "fire");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = (o.property, function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._material = null;
e._time = 0;
return e;
}
e.prototype.start = function() {};
e.prototype.update = function() {
this._time += .1;
this._time = this._time >= 1e3 ? 0 : this._time;
this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
this._material.setProperty("time", this._time);
};
return __decorate([ i ], e);
}(cc.Component));
r.default = c;
cc._RF.pop();
}, {} ],
liquid: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2e479qDoDVIe6GEXR9X44VU", "liquid");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.camera = null;
e.liquid = null;
return e;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartCallback, this, !0);
};
e.prototype.touchStartCallback = function(t) {
for (var e = 0; e < 1; e++) {
var r = this.node.convertToNodeSpaceAR(t.getLocation()), o = cc.instantiate(this.liquid);
o.parent = this.node;
o.x = r.x;
o.y = r.y;
}
};
e.prototype.update = function() {
var t = new cc.RenderTexture();
t.initWithSize(cc.view.getViewportRect().width, cc.view.getViewportRect().height);
this.camera.getComponent(cc.Camera).targetTexture = t;
this.camera.getComponent(cc.Camera).render();
var e = new cc.SpriteFrame(t);
this.node.scaleY = -1;
this.node.getComponent(cc.Sprite).spriteFrame = e;
};
__decorate([ c({
type: cc.Camera
}) ], e.prototype, "camera", void 0);
__decorate([ c({
type: cc.Node
}) ], e.prototype, "liquid", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ],
main: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "873fd3UGotKsbgWhhBeGvwb", "main");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.onLoad = function() {
cc.director.getPhysicsManager().enabled = !0;
};
e.prototype.start = function() {};
__decorate([ c(cc.Label) ], e.prototype, "label", void 0);
__decorate([ c ], e.prototype, "text", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ],
moveban: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "67aa1NVnq9CU47MZDLb00YV", "moveban");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = (o.property, function(t) {
__extends(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveCallback, this, !0);
};
e.prototype.touchMoveCallback = function(t) {
var e = this.node.convertToNodeSpaceAR(t.getLocation());
this.node.x = e.x;
this.node.y = e.y;
};
return __decorate([ i ], e);
}(cc.Component));
r.default = c;
cc._RF.pop();
}, {} ],
myassembler: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f4ee9QBS+NLeogXatIXQMy2", "myassembler");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc.gfx, i = cc._decorator, c = i.ccclass, n = (i.property, new o.VertexFormat([ {
name: o.ATTR_POSITION,
type: o.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: o.ATTR_UV0,
type: o.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: o.ATTR_COLOR,
type: o.ATTR_TYPE_UINT8,
num: 4,
normalize: !0
} ])), a = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.verts = [];
e.quads = [];
e.verticesCount = 4;
e.indicesCount = 6;
e.floatsPerVert = 5;
e.renderData = null;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
var r = e.getVertNum() - 1;
this.verticesCount = 4 * r;
this.indicesCount = 6 * r;
this.initData();
};
e.prototype.initData = function() {
this.renderData = new cc.RenderData();
this.renderData.init(this);
var t = this.renderData;
t.createFlexData(0, this.verticesCount, this.indicesCount, n);
for (var e = t.iDatas[0], r = e.length / 6, o = 0, i = 0; o < r; o++) {
var c = 4 * o;
e[i++] = c;
e[i++] = c + 1;
e[i++] = c + 2;
e[i++] = c + 1;
e[i++] = c + 3;
e[i++] = c + 2;
}
};
e.prototype.updateRenderData = function(t) {
if (t) {
var e = t.getVertNum(), r = e - 1;
this.verts.length = 0;
this.quads.length = 0;
var o = t.node, i = o.height, c = o.width, n = 0, a = 0, s = c / r, p = 1 / r, u = -c * o.anchorX, l = -i * o.anchorY;
if (!cc.sys.isNative) {
var _ = t.node.convertToWorldSpaceAR(cc.v2(u, l));
u = _.x;
l = _.y;
}
for (var d = 1; d < e; d++) {
a = n + p;
var h = this.verts.push({
x: u + (d - 1) * s,
y: l,
u: n,
v: 1
}), y = this.verts.push({
x: u + d * s,
y: l,
u: a,
v: 1
}), m = this.verts.push({
x: u + (d - 1) * s,
y: l + i,
u: n,
v: 0
}), f = this.verts.push({
x: u + d * s,
y: l + i,
u: a,
v: 0
});
this.quads.push({
lb: h - 1,
rb: y - 1,
lt: m - 1,
rt: f - 1
});
n = a;
}
if (cc.sys.isNative) for (var v = t.node.color._val, x = 0, b = this.renderData.vDatas[0], C = (d = 0, 
this.verts.length); d < C; d++) {
var T = this.verts[d];
b[x++] = T.x;
b[x++] = T.y;
b[x++] = T.u;
b[x++] = T.v;
b[x++] = v;
}
}
};
e.prototype.fillBuffers = function(t, e) {
if (0 != this.verts.length) {
for (var r = e.getBuffer("mesh", n), o = this.verts, i = o.length, c = 6 * this.quads.length, a = r.request(i, c), s = r._vData, p = r._iData, u = r._uintVData, l = a.byteOffset >> 2, _ = a.indiceOffset, d = a.vertexOffset, h = cc.Color.WHITE._val, y = 0, m = o.length; y < m; y++) {
var f = o[y];
s[l++] = f.x;
s[l++] = f.y;
s[l++] = f.u;
s[l++] = f.v;
u[l++] = h;
}
for (y = 0, m = this.quads.length; y < m; y++) {
var v = this.quads[y];
p[_++] = d + v.lb;
p[_++] = d + v.rb;
p[_++] = d + v.lt;
p[_++] = d + v.rb;
p[_++] = d + v.rt;
p[_++] = d + v.lt;
}
}
};
return __decorate([ c ], e);
}(cc.Assembler);
r.default = a;
cc._RF.pop();
}, {} ],
myrender: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "664a4Bs8OFHKJy0A8lLSL7W", "myrender");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = t("./myassembler"), a = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.vertNum = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
this.setVertsDirty();
};
e.prototype._resetAssembler = function() {
(this._assembler = new n.default()).init(this);
};
e.prototype.getVertNum = function() {
return this.vertNum;
};
__decorate([ c({
displayName: "每条边上的顶点数量"
}) ], e.prototype, "vertNum", void 0);
return __decorate([ i ], e);
}(cc.RenderComponent);
r.default = a;
cc._RF.pop();
}, {
"./myassembler": "myassembler"
} ],
outline: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "02827uHC9tLy6GMyul5qhza", "outline");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
__decorate([ c(cc.Label) ], e.prototype, "label", void 0);
__decorate([ c ], e.prototype, "text", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ],
postpoint: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a1458zImMZFto37MpRkOkR7", "postpoint");
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, c = o.property, n = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
e.mixtexture = null;
e._material = null;
return e;
}
e.prototype.start = function() {
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchStartCallback, this, !0);
this._material = this.getComponent(cc.Sprite).sharedMaterials[0];
this._material.setProperty("mixtexture", this.mixtexture);
};
e.prototype.touchStartCallback = function(t) {
var e = t.getLocation(), r = e.x / this.node.width, o = e.y / this.node.height;
this._material.setProperty("pos", new cc.Vec2(r, o));
};
__decorate([ c(cc.Label) ], e.prototype, "label", void 0);
__decorate([ c ], e.prototype, "text", void 0);
__decorate([ c({
type: cc.Texture2D
}) ], e.prototype, "mixtexture", void 0);
return __decorate([ i ], e);
}(cc.Component);
r.default = n;
cc._RF.pop();
}, {} ]
}, {}, [ "SpriteShaderUpdatemy1", "breaken - 001", "breaken", "dissolve", "fire", "liquid", "moveban", "main", "myassembler", "myrender", "outline", "postpoint" ]);