function r() {
}
r.prototype.opacity = function() {
  this.element.animate(
    "keyframes",
    [
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    ],
    2e3
  );
};
r.prototype.keyframeDown = function() {
  this.element.animate(
    "keyframes",
    [
      {
        transform: "translateY(0%)"
      },
      {
        transform: "translateY(100%)"
      }
    ],
    { duration: 3e3, fill: "forwards" }
  );
};
function m(e, t, l, s = {}) {
  e.addEventListener(t, (o) => {
    s.preventDefault && o.preventDefault(), l(o);
  });
}
function i() {
  this.element = document.createElement("span");
}
i.prototype = Object.create(r.prototype);
i.prototype.click = function(e, t) {
  m(this.element, "click", e, t);
};
i.prototype.submit = function(e, t) {
  m(this.element, "submit", e, t);
};
i.prototype.keyUp = function(e, t) {
  m(this.element, "keyup", e, t);
};
function n(e) {
  this.element = document.createElement(e), Object.defineProperty(this, "color", {
    get: function() {
      return this.element.style.color;
    },
    set: (t) => {
      this.element.style.color = t;
    }
  });
}
n.prototype = Object.create(i.prototype);
n.prototype.appendTo = function(e) {
  e.element ? e.element.append(this.element) : e.append(this.element);
};
n.prototype.remove = function() {
  this.element.remove();
};
n.prototype.disable = function() {
  this.element.disabled = !0;
};
n.prototype.enable = function() {
  this.element.disabled = !1;
};
function h({ type: e, name: t, options: l = [] }) {
  n.call(this, "input"), this.element.type = e, this.element.name = t;
  for (let s = 0; s < l.length; s++) {
    const [o, u] = l[s];
    this.element.setAttribute(o, u);
  }
}
h.prototype = Object.create(n.prototype);
function y({ type: e, content: t = "", font: l = "", fontSize: s = 16 }) {
  n.call(this, e), this.element.style.fontFamily = l, this.element.style.fontSize = s + "px", this.element.innerText = t;
}
y.prototype = Object.create(n.prototype);
y.prototype.strike = function(e) {
  e === "strike" ? this.element.style.textDecorationLine = "line-through" : e === "unStrike" && (this.element.style.textDecorationLine = "none");
};
function p({ position: e, direction: t = "" }) {
  n.call(this, "div"), this.element.style.display = "flex", this.element.style.flexDirection = t, e && this.alignment(e);
}
p.prototype = Object.create(n.prototype);
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
function a() {
  n.call(this, "form");
}
a.prototype = Object.create(n.prototype);
a.prototype.getValue = function(e) {
  return new FormData(this.element).get(e);
};
function f(e, t, l) {
  n.call(this, "div"), this.element.style.backgroundColor = e, this.element.style.width = t + "px", this.element.style.height = l + "px";
}
f.prototype = Object.create(n.prototype);
function c({ src: e, width: t, height: l }) {
  n.call(this, "img"), this.element.src = e, this.element.style.width = t + "px", this.element.style.height = l + "px";
}
c.prototype = Object.create(n.prototype);
const d = {
  input: h,
  content: y,
  display: p,
  form: a,
  box: f,
  image: c
}, x = (e, t) => new d[e](t);
export {
  x as default
};
