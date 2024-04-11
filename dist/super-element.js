function h(e, t, l, s = {}) {
  e.addEventListener(t, (i) => {
    s.preventDefault && i.preventDefault(), l(i);
  });
}
function a() {
  this.element = document.createElement("span");
}
a.prototype.click = function(e, t) {
  h(this.element, "click", e, t);
};
a.prototype.keyUp = function(e, t) {
  h(this.element, "keyup", e, t);
};
function n(e, t = []) {
  this.element = document.createElement(e);
  for (let l = 0; l < t.length; l++) {
    const [s, i] = t[l];
    this.element.setAttribute(s, i);
  }
  Object.defineProperty(this, "color", {
    get: function() {
      return this.element.style.color;
    },
    set: (l) => {
      this.element.style.color = l;
    }
  });
}
n.prototype = Object.create(a.prototype);
n.prototype.constructor = n;
n.prototype.appendTo = function(e) {
  e.element ? e.element.append(this.element) : e.append(this.element);
};
n.prototype.remove = function() {
  this.element.remove();
};
n.prototype.disable = function() {
  this.element.setAttribute("disabled", "");
};
n.prototype.enable = function() {
  this.element.removeAttribute("disabled", "");
};
function m({ type: e, name: t, options: l = [] } = {}) {
  n.call(this, "input", l), this.element.type = e, this.element.name = t;
}
m.prototype = Object.create(n.prototype);
m.prototype.constructor = m;
function r({ type: e, content: t = "", font: l = "", fontSize: s = 16, options: i = [] } = {}) {
  n.call(this, e, i), this.element.type = e, this.element.style.fontFamily = l, this.element.style.fontSize = s + "px", this.element.innerText = t;
}
r.prototype = Object.create(n.prototype);
r.prototype.constructor = r;
r.prototype.strike = function(e) {
  e === "strike" ? this.element.style.textDecorationLine = "line-through" : e === "unStrike" && (this.element.style.textDecorationLine = "none");
};
function p({ position: e, direction: t = "", options: l = [] } = {}) {
  n.call(this, "div", l), this.element.style.display = "flex", this.element.style.flexDirection = t, e && this.alignment(e);
}
p.prototype = Object.create(n.prototype);
p.prototype.constructor = p;
p.prototype.alignment = function(e) {
  ({
    centerBoth: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "center", this.element.style.justifyContent = "center";
    },
    centerRight: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "center", this.element.style.justifyContent = "flex-end";
    },
    centerLeft: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "center", this.element.style.justifyContent = "flex-start";
    },
    top: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-start";
    },
    topCenter: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-start", this.element.style.justifyContent = "center";
    },
    topRight: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-start", this.element.style.justifyContent = "flex-end";
    },
    topLeft: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-start", this.element.style.justifyContent = "flex-start";
    },
    bottom: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-end";
    },
    bottomCenter: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-end", this.element.style.justifyContent = "center";
    },
    bottomRight: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-end", this.element.style.justifyContent = "flex-end";
    },
    bottomLeft: () => {
      this.element.style.display = "flex", this.element.style.alignItems = "flex-end", this.element.style.justifyContent = "flex-start";
    }
  })[e]();
};
function o({ options: e = [] } = {}) {
  n.call(this, "form", e);
}
o.prototype = Object.create(n.prototype);
o.prototype.getValue = function(e) {
  return new FormData(this.element).get(e);
};
o.prototype.submit = function(e, t) {
  h(this.element, "submit", e, t);
};
o.prototype.constructor = o;
function y(e, t, l) {
  n.call(this, "div"), this.element.style.backgroundColor = e, this.element.style.width = t + "px", this.element.style.height = l + "px";
}
y.prototype = Object.create(n.prototype);
y.prototype.constructor = y;
function c({ src: e, width: t, height: l, options: s = [] } = {}) {
  n.call(this, "img", s), this.element.src = e, this.element.style.width = t + "px", this.element.style.height = l + "px";
}
c.prototype = Object.create(n.prototype);
c.prototype.constructor = c;
const f = {
  input: m,
  content: r,
  display: p,
  form: o,
  box: y,
  image: c
}, u = (e, t) => new f[e](t);
export {
  u as default
};
