define("confluence-search-ui-plugin-main", ["react", "confluence/api/constants", "confluence/api/logger", "confluence/api/event", "confluence/meta", "react-dom", "confluence/api/url", "ajs", "wrm", "confluence/templates"], function (
    e,
    t,
    n,
    r,
    o,
    i,
    a,
    c,
    s,
    u
) {
    return (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = "/"),
            "undefined" != typeof AJS && (n.p = AJS.contextPath() + "/download/resources/com.atlassian.confluence.plugins.confluence-search-ui-plugin:assets-DEV_PSEUDO_HASH/"),
            n((n.s = 62))
        );
    })([
        function (t, n) {
            t.exports = e;
        },
        function (e, t) {
            e.exports = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            };
        },
        function (e, t, n) {
            "use strict";
            n.r(t),
                function (e, r) {
                    n.d(t, "css", function () {
                        return B;
                    }),
                        n.d(t, "keyframes", function () {
                            return He;
                        }),
                        n.d(t, "injectGlobal", function () {
                            return Ge;
                        }),
                        n.d(t, "isStyledComponent", function () {
                            return k;
                        }),
                        n.d(t, "consolidateStreamedStyles", function () {
                            return O;
                        }),
                        n.d(t, "ThemeProvider", function () {
                            return we;
                        }),
                        n.d(t, "withTheme", function () {
                            return Pe;
                        }),
                        n.d(t, "ServerStyleSheet", function () {
                            return he;
                        }),
                        n.d(t, "StyleSheetManager", function () {
                            return fe;
                        }),
                        n.d(t, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function () {
                            return Ue;
                        });
                    var o = n(51),
                        i = n.n(o),
                        a = n(0),
                        c = n.n(a),
                        s = n(37),
                        u = n.n(s),
                        l = n(52),
                        d = n.n(l),
                        f = n(4),
                        h = n.n(f),
                        p = n(38),
                        g = n.n(p),
                        m = n(53),
                        y =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  },
                        b = function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        },
                        M = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t;
                            };
                        })(),
                        v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            },
                        I = function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        },
                        x = function (e, t) {
                            var n = {};
                            for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                            return n;
                        },
                        S = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                        },
                        C = function (e) {
                            return "object" === (void 0 === e ? "undefined" : y(e)) && e.constructor === Object;
                        },
                        N = (function (e) {
                            function t(n) {
                                b(this, t);
                                for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                                var a = S(
                                    this,
                                    e.call(
                                        this,
                                        "An error occurred. See https://github.com/styled-components/styled-components/blob/master/src/utils/errors.md#" + n + " for more information. " + (o ? "Additional arguments: " + o.join(", ") : "")
                                    )
                                );
                                return S(a);
                            }
                            return I(t, e), t;
                        })(Error),
                        A = function e(t, n) {
                            return t.reduce(function (t, r) {
                                if (null == r || !1 === r || "" === r) return t;
                                if (Array.isArray(r)) return t.push.apply(t, e(r, n)), t;
                                if (r.hasOwnProperty("styledComponentId")) return t.push("." + r.styledComponentId), t;
                                if ("function" == typeof r) {
                                    if (n) {
                                        var o = r(n);
                                        if (c.a.isValidElement(o)) {
                                            var a = r.displayName || r.name;
                                            throw new N(11, a);
                                        }
                                        t.push.apply(t, e([o], n));
                                    } else t.push(r);
                                    return t;
                                }
                                return (
                                    t.push(
                                        C(r)
                                            ? (function e(t, n) {
                                                  var r = Object.keys(t)
                                                      .filter(function (e) {
                                                          var n = t[e];
                                                          return null != n && !1 !== n && "" !== n;
                                                      })
                                                      .map(function (n) {
                                                          return C(t[n]) ? e(t[n], n) : i()(n) + ": " + t[n] + ";";
                                                      })
                                                      .join(" ");
                                                  return n ? n + " {\n  " + r + "\n}" : r;
                                              })(r)
                                            : r.toString()
                                    ),
                                    t
                                );
                            }, []);
                        },
                        _ = /^\s*\/\/.*$/gm,
                        D = new u.a({ global: !1, cascade: !0, keyframe: !1, prefix: !1, compress: !1, semicolon: !0 }),
                        w = new u.a({ global: !1, cascade: !0, keyframe: !1, prefix: !0, compress: !1, semicolon: !1 }),
                        j = [],
                        T = function (e) {
                            if (-2 === e) {
                                var t = j;
                                return (j = []), t;
                            }
                        },
                        L = d()(function (e) {
                            j.push(e);
                        });
                    w.use([L, T]), D.use([L, T]);
                    var E = function (e, t, n) {
                        var r = e.join("").replace(_, "");
                        return w(n || !t ? "" : t, t && n ? n + " " + t + " { " + r + " }" : r);
                    };
                    function k(e) {
                        return "function" == typeof e && "string" == typeof e.styledComponentId;
                    }
                    function O() {}
                    var F,
                        z = function (e) {
                            return String.fromCharCode(e + (e > 25 ? 39 : 97));
                        },
                        R = function (e) {
                            var t = "",
                                n = void 0;
                            for (n = e; n > 52; n = Math.floor(n / 52)) t = z(n % 52) + t;
                            return z(n % 52) + t;
                        },
                        P = function (e, t) {
                            for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
                            return n;
                        },
                        U = Object.freeze([]),
                        Y = Object.freeze({}),
                        B = function (e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            return "function" == typeof e || C(e) ? A(P(U, [e].concat(n))) : A(P(e, n));
                        },
                        Q = (void 0 !== e && e.env.SC_ATTR) || "data-styled-components",
                        H = "__styled-components-stylesheet__",
                        G = "undefined" != typeof window && "HTMLElement" in window,
                        W = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,
                        Z = function (e) {
                            var t = "" + (e || ""),
                                n = [];
                            return (
                                t.replace(W, function (e, t, r) {
                                    return n.push({ componentId: t, matchIndex: r }), e;
                                }),
                                n.map(function (e, r) {
                                    var o = e.componentId,
                                        i = e.matchIndex,
                                        a = n[r + 1];
                                    return { componentId: o, cssFromDOM: a ? t.slice(i, a.matchIndex) : t.slice(i) };
                                })
                            );
                        },
                        q = function () {
                            return n.nc;
                        },
                        K = function (e, t, n) {
                            n && ((e[t] || (e[t] = Object.create(null)))[n] = !0);
                        },
                        J = function (e, t) {
                            e[t] = Object.create(null);
                        },
                        V = function (e) {
                            return function (t, n) {
                                return void 0 !== e[t] && e[t][n];
                            };
                        },
                        X = function (e) {
                            var t = "";
                            for (var n in e) t += Object.keys(e[n]).join(" ") + " ";
                            return t.trim();
                        },
                        $ = function (e) {
                            if (e.sheet) return e.sheet;
                            for (var t = document.styleSheets.length, n = 0; n < t; n += 1) {
                                var r = document.styleSheets[n];
                                if (r.ownerNode === e) return r;
                            }
                            throw new N(10);
                        },
                        ee = function (e, t, n) {
                            if (!t) return !1;
                            var r = e.cssRules.length;
                            try {
                                e.insertRule(t, n <= r ? n : r);
                            } catch (e) {
                                return !1;
                            }
                            return !0;
                        },
                        te = function (e) {
                            return "\n/* sc-component-id: " + e + " */\n";
                        },
                        ne = function (e, t) {
                            for (var n = 0, r = 0; r <= t; r += 1) n += e[r];
                            return n;
                        },
                        re = function (e, t) {
                            return function (n) {
                                var r = q();
                                return "<style " + [r && 'nonce="' + r + '"', Q + '="' + X(t) + '"', n].filter(Boolean).join(" ") + ">" + e() + "</style>";
                            };
                        },
                        oe = function (e, t) {
                            return function () {
                                var n,
                                    r = (((n = {})[Q] = X(t)), n),
                                    o = q();
                                return o && (r.nonce = o), c.a.createElement("style", v({}, r, { dangerouslySetInnerHTML: { __html: e() } }));
                            };
                        },
                        ie = function (e) {
                            return function () {
                                return Object.keys(e);
                            };
                        },
                        ae = function (e, t, n, r, o) {
                            return G && !n
                                ? (function (e, t) {
                                      var n = Object.create(null),
                                          r = Object.create(null),
                                          o = [],
                                          i = void 0 !== t,
                                          a = !1,
                                          c = function (e) {
                                              var t = r[e];
                                              return void 0 !== t ? t : ((r[e] = o.length), o.push(0), J(n, e), r[e]);
                                          },
                                          s = function () {
                                              var t = $(e).cssRules,
                                                  n = "";
                                              for (var i in r) {
                                                  n += te(i);
                                                  for (var a = r[i], c = ne(o, a), s = c - o[a]; s < c; s += 1) {
                                                      var u = t[s];
                                                      void 0 !== u && (n += u.cssText);
                                                  }
                                              }
                                              return n;
                                          };
                                      return {
                                          clone: function () {
                                              throw new N(5);
                                          },
                                          css: s,
                                          getIds: ie(r),
                                          hasNameForId: V(n),
                                          insertMarker: c,
                                          insertRules: function (r, s, u) {
                                              for (var l = c(r), d = $(e), f = ne(o, l), h = 0, p = [], g = s.length, m = 0; m < g; m += 1) {
                                                  var y = s[m],
                                                      b = i;
                                                  b && -1 !== y.indexOf("@import") ? p.push(y) : ee(d, y, f + h) && ((b = !1), (h += 1));
                                              }
                                              i && p.length > 0 && ((a = !0), t().insertRules(r + "-import", p)), (o[l] += h), K(n, r, u);
                                          },
                                          removeRules: function (c) {
                                              var s = r[c];
                                              if (void 0 !== s) {
                                                  var u = o[s];
                                                  !(function (e, t, n) {
                                                      for (var r = t - u, o = t; o > r; o -= 1) e.deleteRule(o);
                                                  })($(e), ne(o, s)),
                                                      (o[s] = 0),
                                                      J(n, c),
                                                      i && a && t().removeRules(c + "-import");
                                              }
                                          },
                                          sealed: !1,
                                          styleTag: e,
                                          toElement: oe(s, n),
                                          toHTML: re(s, n),
                                      };
                                  })(
                                      (function (e, t, n) {
                                          var r = document.createElement("style");
                                          r.setAttribute(Q, "");
                                          var o = q();
                                          if ((o && r.setAttribute("nonce", o), r.appendChild(document.createTextNode("")), e && !t)) e.appendChild(r);
                                          else {
                                              if (!t || !e || !t.parentNode) throw new N(6);
                                              t.parentNode.insertBefore(r, n ? t : t.nextSibling);
                                          }
                                          return r;
                                      })(e, t, r),
                                      o
                                  )
                                : (function e(t, n) {
                                      var r = void 0 === t ? Object.create(null) : t,
                                          o = void 0 === n ? Object.create(null) : n,
                                          i = function (e) {
                                              var t = o[e];
                                              return void 0 !== t ? t : (o[e] = [""]);
                                          },
                                          a = function () {
                                              var e = "";
                                              for (var t in o) {
                                                  var n = o[t][0];
                                                  n && (e += te(t) + n);
                                              }
                                              return e;
                                          };
                                      return {
                                          clone: function () {
                                              var t = (function (e) {
                                                      var t = Object.create(null);
                                                      for (var n in e) t[n] = v({}, e[n]);
                                                      return t;
                                                  })(r),
                                                  n = Object.create(null);
                                              for (var i in o) n[i] = [o[i][0]];
                                              return e(t, n);
                                          },
                                          css: a,
                                          getIds: ie(o),
                                          hasNameForId: V(r),
                                          insertMarker: i,
                                          insertRules: function (e, t, n) {
                                              (i(e)[0] += t.join(" ")), K(r, e, n);
                                          },
                                          removeRules: function (e) {
                                              var t = o[e];
                                              void 0 !== t && ((t[0] = ""), J(r, e));
                                          },
                                          sealed: !1,
                                          styleTag: null,
                                          toElement: oe(a, r),
                                          toHTML: re(a, r),
                                      };
                                  })();
                        },
                        ce = /\s+/;
                    F = G ? 1e3 : -1;
                    var se,
                        ue = 0,
                        le = void 0,
                        de = (function () {
                            function e() {
                                var t = this,
                                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G ? document.head : null,
                                    r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                b(this, e),
                                    (this.getImportRuleTag = function () {
                                        var e = t.importRuleTag;
                                        if (void 0 !== e) return e;
                                        var n = t.tags[0];
                                        return (t.importRuleTag = ae(t.target, n ? n.styleTag : null, t.forceServer, !0));
                                    }),
                                    (ue += 1),
                                    (this.id = ue),
                                    (this.forceServer = r),
                                    (this.target = r ? null : n),
                                    (this.tagMap = {}),
                                    (this.deferred = {}),
                                    (this.rehydratedNames = {}),
                                    (this.ignoreRehydratedNames = {}),
                                    (this.tags = []),
                                    (this.capacity = 1),
                                    (this.clones = []);
                            }
                            return (
                                (e.prototype.rehydrate = function () {
                                    if (!G || this.forceServer) return this;
                                    var e = [],
                                        t = [],
                                        n = !1,
                                        r = document.querySelectorAll("style[" + Q + "]"),
                                        o = r.length;
                                    if (0 === o) return this;
                                    for (var i = 0; i < o; i += 1) {
                                        var a = r[i];
                                        n || (n = !!a.getAttribute("data-styled-streamed"));
                                        for (var c = (a.getAttribute(Q) || "").trim().split(ce), s = c.length, u = 0; u < s; u += 1) {
                                            var l = c[u];
                                            this.rehydratedNames[l] = !0;
                                        }
                                        t.push.apply(t, Z(a.textContent)), e.push(a);
                                    }
                                    var d = t.length;
                                    if (0 === d) return this;
                                    var f = (function (e, t, n, r) {
                                        var o,
                                            i,
                                            a =
                                                ((o = function () {
                                                    for (var r = 0, o = n.length; r < o; r += 1) {
                                                        var i = n[r],
                                                            a = i.componentId,
                                                            c = i.cssFromDOM,
                                                            s = D("", c);
                                                        e.insertRules(a, s);
                                                    }
                                                    for (var u = 0, l = t.length; u < l; u += 1) {
                                                        var d = t[u];
                                                        d.parentNode && d.parentNode.removeChild(d);
                                                    }
                                                }),
                                                (i = !1),
                                                function () {
                                                    i || ((i = !0), o());
                                                });
                                        return (
                                            r && a(),
                                            v({}, e, {
                                                insertMarker: function (t) {
                                                    return a(), e.insertMarker(t);
                                                },
                                                insertRules: function (t, n, r) {
                                                    return a(), e.insertRules(t, n, r);
                                                },
                                            })
                                        );
                                    })(this.makeTag(null), e, t, n);
                                    (this.capacity = Math.max(1, F - d)), this.tags.push(f);
                                    for (var h = 0; h < d; h += 1) this.tagMap[t[h].componentId] = f;
                                    return this;
                                }),
                                (e.reset = function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    le = new e(void 0, t).rehydrate();
                                }),
                                (e.prototype.clone = function () {
                                    var t = new e(this.target, this.forceServer);
                                    return (
                                        this.clones.push(t),
                                        (t.tags = this.tags.map(function (e) {
                                            for (var n = e.getIds(), r = e.clone(), o = 0; o < n.length; o += 1) t.tagMap[n[o]] = r;
                                            return r;
                                        })),
                                        (t.rehydratedNames = v({}, this.rehydratedNames)),
                                        (t.deferred = v({}, this.deferred)),
                                        t
                                    );
                                }),
                                (e.prototype.sealAllTags = function () {
                                    (this.capacity = 1),
                                        this.tags.forEach(function (e) {
                                            e.sealed = !0;
                                        });
                                }),
                                (e.prototype.makeTag = function (e) {
                                    var t = e ? e.styleTag : null;
                                    return ae(this.target, t, this.forceServer, !1, this.getImportRuleTag);
                                }),
                                (e.prototype.getTagForId = function (e) {
                                    var t = this.tagMap[e];
                                    if (void 0 !== t && !t.sealed) return t;
                                    var n = this.tags[this.tags.length - 1];
                                    return (this.capacity -= 1), 0 === this.capacity && ((this.capacity = F), (n = this.makeTag(n)), this.tags.push(n)), (this.tagMap[e] = n);
                                }),
                                (e.prototype.hasId = function (e) {
                                    return void 0 !== this.tagMap[e];
                                }),
                                (e.prototype.hasNameForId = function (e, t) {
                                    if (void 0 === this.ignoreRehydratedNames[e] && this.rehydratedNames[t]) return !0;
                                    var n = this.tagMap[e];
                                    return void 0 !== n && n.hasNameForId(e, t);
                                }),
                                (e.prototype.deferredInject = function (e, t) {
                                    if (void 0 === this.tagMap[e]) {
                                        for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].deferredInject(e, t);
                                        this.getTagForId(e).insertMarker(e), (this.deferred[e] = t);
                                    }
                                }),
                                (e.prototype.inject = function (e, t, n) {
                                    for (var r = this.clones, o = 0; o < r.length; o += 1) r[o].inject(e, t, n);
                                    var i = this.getTagForId(e);
                                    if (void 0 !== this.deferred[e]) {
                                        var a = this.deferred[e].concat(t);
                                        i.insertRules(e, a, n), (this.deferred[e] = void 0);
                                    } else i.insertRules(e, t, n);
                                }),
                                (e.prototype.remove = function (e) {
                                    var t = this.tagMap[e];
                                    if (void 0 !== t) {
                                        for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].remove(e);
                                        t.removeRules(e), (this.ignoreRehydratedNames[e] = !0), (this.deferred[e] = void 0);
                                    }
                                }),
                                (e.prototype.toHTML = function () {
                                    return this.tags
                                        .map(function (e) {
                                            return e.toHTML();
                                        })
                                        .join("");
                                }),
                                (e.prototype.toReactElements = function () {
                                    var e = this.id;
                                    return this.tags.map(function (t, n) {
                                        var r = "sc-" + e + "-" + n;
                                        return Object(a.cloneElement)(t.toElement(), { key: r });
                                    });
                                }),
                                M(e, null, [
                                    {
                                        key: "master",
                                        get: function () {
                                            return le || (le = new e().rehydrate());
                                        },
                                    },
                                    {
                                        key: "instance",
                                        get: function () {
                                            return e.master;
                                        },
                                    },
                                ]),
                                e
                            );
                        })(),
                        fe = (function (e) {
                            function t() {
                                return b(this, t), S(this, e.apply(this, arguments));
                            }
                            return (
                                I(t, e),
                                (t.prototype.getChildContext = function () {
                                    var e;
                                    return ((e = {})[H] = this.sheetInstance), e;
                                }),
                                (t.prototype.componentWillMount = function () {
                                    if (this.props.sheet) this.sheetInstance = this.props.sheet;
                                    else {
                                        if (!this.props.target) throw new N(4);
                                        this.sheetInstance = new de(this.props.target);
                                    }
                                }),
                                (t.prototype.render = function () {
                                    return c.a.Children.only(this.props.children);
                                }),
                                t
                            );
                        })(a.Component);
                    fe.childContextTypes = (((se = {})[H] = h.a.oneOfType([h.a.instanceOf(de), h.a.instanceOf(he)]).isRequired), se);
                    var he = (function () {
                            function e() {
                                b(this, e), (this.masterSheet = de.master), (this.instance = this.masterSheet.clone()), (this.closed = !1);
                            }
                            return (
                                (e.prototype.complete = function () {
                                    if (!this.closed) {
                                        var e = this.masterSheet.clones.indexOf(this.instance);
                                        this.masterSheet.clones.splice(e, 1), (this.closed = !0);
                                    }
                                }),
                                (e.prototype.collectStyles = function (e) {
                                    if (this.closed) throw new N(2);
                                    return c.a.createElement(fe, { sheet: this.instance }, e);
                                }),
                                (e.prototype.getStyleTags = function () {
                                    return this.complete(), this.instance.toHTML();
                                }),
                                (e.prototype.getStyleElement = function () {
                                    return this.complete(), this.instance.toReactElements();
                                }),
                                (e.prototype.interleaveWithNodeStream = function (e) {
                                    throw new N(3);
                                }),
                                e
                            );
                        })(),
                        pe = function (e, t, n) {
                            var r = n && e.theme === n.theme;
                            return e.theme && !r ? e.theme : t;
                        },
                        ge = /[[\].#*$><+~=|^:(),"'`-]+/g,
                        me = /(^-|-$)/g;
                    function ye(e) {
                        return e.replace(ge, "-").replace(me, "");
                    }
                    function be(e) {
                        return e.displayName || e.name || "Component";
                    }
                    function Me(e) {
                        return "string" == typeof e;
                    }
                    var ve,
                        Ie,
                        xe,
                        Se = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|l(?:ip(?:Path)?|ass)|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|auto[Ff]ocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveAspectRatio|ointsAt[X-Z]|anose1)|(?:(?:allowPaymentReque|(?:fontSize|length)Adju|manife)s|strokeMiterlimi|(?:(?:specularE|e)xpon|renderingInt|asc)en|(?:specularConsta|repeatCou|fontVaria)n|d(?:iffuseConsta|esce)n|baselineShif|vectorEffec|onPointerOu|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|a(?:l(?:lowUserMedia|phabetic|t)|rabicForm|sync)|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|(?:pointerEve|keyPoi)nts|preserveAlpha|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|unicodeRange|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|mathematical|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|vAlphabetic|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|pathLength|(?:xlinkHr|glyphR)ef|innerHTML|xlinkShow|f(?:o(?:ntSize|rm?)|il(?:ter|l))|(?:tabInde|(?:sand|b)bo|viewBo)x|autoPlay|r(?:e(?:quired|sult|f))?|(?:(?:href|xml|src)La|kerni)ng|o(?:verflow|pen)|i(?:temRef|n2|s)|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|divisor|t(?:arget[XY]|o)|(?:stri|la)ng|(?:width|size)s|prefix|typeof|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|llow|s)|itemID|t(?:arget|ype)|m(?:edia|a(?:sk|x)|in)|value|width|x(?:mlns)?|size|href|k(?:ey)?|end|low|by|x[12]|y[12]|g[12]|i[dn]|f[xy]|[yz])$/,
                        Ce = RegExp.prototype.test.bind(
                            new RegExp(
                                "^(x|data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
                            )
                        ),
                        Ne = "__styled-components__",
                        Ae = Ne + "next__",
                        _e = h.a.shape({ getTheme: h.a.func, subscribe: h.a.func, unsubscribe: h.a.func }),
                        De = (((ve = {})[Ne] = h.a.func), (ve[Ae] = _e), ve),
                        we = (function (e) {
                            function t() {
                                b(this, t);
                                var n = S(this, e.call(this));
                                return (n.unsubscribeToOuterId = -1), (n.getTheme = n.getTheme.bind(n)), n;
                            }
                            return (
                                I(t, e),
                                (t.prototype.componentWillMount = function () {
                                    var e = this,
                                        t = this.context[Ae];
                                    void 0 !== t &&
                                        (this.unsubscribeToOuterId = t.subscribe(function (t) {
                                            (e.outerTheme = t), void 0 !== e.broadcast && e.publish(e.props.theme);
                                        })),
                                        (this.broadcast = (function (e) {
                                            var t = {},
                                                n = 0,
                                                r = e;
                                            return {
                                                publish: function (e) {
                                                    for (var n in ((r = e), t)) {
                                                        var o = t[n];
                                                        void 0 !== o && o(r);
                                                    }
                                                },
                                                subscribe: function (e) {
                                                    var o = n;
                                                    return (t[o] = e), (n += 1), e(r), o;
                                                },
                                                unsubscribe: function (e) {
                                                    t[e] = void 0;
                                                },
                                            };
                                        })(this.getTheme()));
                                }),
                                (t.prototype.getChildContext = function () {
                                    var e,
                                        t = this;
                                    return v(
                                        {},
                                        this.context,
                                        (((e = {})[Ae] = { getTheme: this.getTheme, subscribe: this.broadcast.subscribe, unsubscribe: this.broadcast.unsubscribe }),
                                        (e[Ne] = function (e) {
                                            var n = t.broadcast.subscribe(e);
                                            return function () {
                                                return t.broadcast.unsubscribe(n);
                                            };
                                        }),
                                        e)
                                    );
                                }),
                                (t.prototype.componentWillReceiveProps = function (e) {
                                    this.props.theme !== e.theme && this.publish(e.theme);
                                }),
                                (t.prototype.componentWillUnmount = function () {
                                    -1 !== this.unsubscribeToOuterId && this.context[Ae].unsubscribe(this.unsubscribeToOuterId);
                                }),
                                (t.prototype.getTheme = function (e) {
                                    var t = e || this.props.theme;
                                    if ("function" == typeof t) return t(this.outerTheme);
                                    if (null === t || Array.isArray(t) || "object" !== (void 0 === t ? "undefined" : y(t))) throw new N(8);
                                    return v({}, this.outerTheme, t);
                                }),
                                (t.prototype.publish = function (e) {
                                    this.broadcast.publish(this.getTheme(e));
                                }),
                                (t.prototype.render = function () {
                                    return this.props.children ? c.a.Children.only(this.props.children) : null;
                                }),
                                t
                            );
                        })(a.Component);
                    (we.childContextTypes = De), (we.contextTypes = (((Ie = {})[Ae] = _e), Ie));
                    var je = {},
                        Te = v({}, De, (((xe = {})[H] = h.a.oneOfType([h.a.instanceOf(de), h.a.instanceOf(he)])), xe)),
                        Le = {},
                        Ee = (function (e) {
                            function t() {
                                var n, r;
                                b(this, t);
                                for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                                return (n = r = S(this, e.call.apply(e, [this].concat(i)))), (r.attrs = {}), (r.state = { theme: null, generatedClassName: "" }), (r.unsubscribeId = -1), S(r, n);
                            }
                            return (
                                I(t, e),
                                (t.prototype.unsubscribeFromContext = function () {
                                    -1 !== this.unsubscribeId && this.context[Ae].unsubscribe(this.unsubscribeId);
                                }),
                                (t.prototype.buildExecutionContext = function (e, t) {
                                    var n = this.constructor.attrs,
                                        r = v({}, t, { theme: e });
                                    return void 0 === n
                                        ? r
                                        : ((this.attrs = Object.keys(n).reduce(function (e, t) {
                                              var o = n[t];
                                              return (
                                                  (e[t] =
                                                      "function" != typeof o ||
                                                      (function (e, t) {
                                                          for (var n = e; n; ) if ((n = Object.getPrototypeOf(n)) && n === t) return !0;
                                                          return !1;
                                                      })(o, a.Component)
                                                          ? o
                                                          : o(r)),
                                                  e
                                              );
                                          }, {})),
                                          v({}, r, this.attrs));
                                }),
                                (t.prototype.generateAndInjectStyles = function (e, t) {
                                    var n = this.constructor,
                                        r = n.attrs,
                                        o = n.componentStyle,
                                        i = (n.warnTooManyClasses, this.context[H] || de.master);
                                    if (o.isStatic && void 0 === r) return o.generateAndInjectStyles(je, i);
                                    var a = this.buildExecutionContext(e, t);
                                    return o.generateAndInjectStyles(a, i);
                                }),
                                (t.prototype.componentWillMount = function () {
                                    var e = this,
                                        t = this.constructor.componentStyle,
                                        n = this.context[Ae];
                                    if (t.isStatic) {
                                        var r = this.generateAndInjectStyles(je, this.props);
                                        this.setState({ generatedClassName: r });
                                    } else if (void 0 !== n) {
                                        var o = n.subscribe;
                                        this.unsubscribeId = o(function (t) {
                                            var n = pe(e.props, t, e.constructor.defaultProps),
                                                r = e.generateAndInjectStyles(n, e.props);
                                            e.setState({ theme: n, generatedClassName: r });
                                        });
                                    } else {
                                        var i = this.props.theme || Y,
                                            a = this.generateAndInjectStyles(i, this.props);
                                        this.setState({ theme: i, generatedClassName: a });
                                    }
                                }),
                                (t.prototype.componentWillReceiveProps = function (e) {
                                    var t = this;
                                    this.constructor.componentStyle.isStatic ||
                                        this.setState(function (n) {
                                            var r = pe(e, n.theme, t.constructor.defaultProps);
                                            return { theme: r, generatedClassName: t.generateAndInjectStyles(r, e) };
                                        });
                                }),
                                (t.prototype.componentWillUnmount = function () {
                                    this.unsubscribeFromContext();
                                }),
                                (t.prototype.render = function () {
                                    var e = this.props.innerRef,
                                        t = this.state.generatedClassName,
                                        n = this.constructor,
                                        r = n.styledComponentId,
                                        o = n.target,
                                        i = Me(o),
                                        c = [this.props.className, r, this.attrs.className, t].filter(Boolean).join(" "),
                                        s = v({}, this.attrs, { className: c });
                                    k(o) ? (s.innerRef = e) : (s.ref = e);
                                    var u,
                                        l = s,
                                        d = void 0;
                                    for (d in this.props)
                                        "innerRef" === d || "className" === d || (i && ((u = d), !Se.test(u) && !Ce(u.toLowerCase()))) || (l[d] = "style" === d && d in this.attrs ? v({}, this.attrs[d], this.props[d]) : this.props[d]);
                                    return Object(a.createElement)(o, l);
                                }),
                                t
                            );
                        })(a.Component);
                    function ke(e) {
                        for (var t, n = 0 | e.length, r = 0 | n, o = 0; n >= 4; )
                            (t = 1540483477 * (65535 & (t = (255 & e.charCodeAt(o)) | ((255 & e.charCodeAt(++o)) << 8) | ((255 & e.charCodeAt(++o)) << 16) | ((255 & e.charCodeAt(++o)) << 24))) + (((1540483477 * (t >>> 16)) & 65535) << 16)),
                                (r = (1540483477 * (65535 & r) + (((1540483477 * (r >>> 16)) & 65535) << 16)) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + (((1540483477 * (t >>> 16)) & 65535) << 16))),
                                (n -= 4),
                                ++o;
                        switch (n) {
                            case 3:
                                r ^= (255 & e.charCodeAt(o + 2)) << 16;
                            case 2:
                                r ^= (255 & e.charCodeAt(o + 1)) << 8;
                            case 1:
                                r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(o))) + (((1540483477 * (r >>> 16)) & 65535) << 16);
                        }
                        return (r = 1540483477 * (65535 & (r ^= r >>> 13)) + (((1540483477 * (r >>> 16)) & 65535) << 16)), (r ^= r >>> 15) >>> 0;
                    }
                    var Oe = G,
                        Fe = function e(t, n) {
                            for (var r = 0, o = t.length; r < o; r += 1) {
                                var i = t[r];
                                if (Array.isArray(i) && !e(i)) return !1;
                                if ("function" == typeof i && !k(i)) return !1;
                            }
                            if (void 0 !== n) for (var a in n) if ("function" == typeof n[a]) return !1;
                            return !0;
                        },
                        ze = r.hot && !1,
                        Re = [
                            "a",
                            "abbr",
                            "address",
                            "area",
                            "article",
                            "aside",
                            "audio",
                            "b",
                            "base",
                            "bdi",
                            "bdo",
                            "big",
                            "blockquote",
                            "body",
                            "br",
                            "button",
                            "canvas",
                            "caption",
                            "cite",
                            "code",
                            "col",
                            "colgroup",
                            "data",
                            "datalist",
                            "dd",
                            "del",
                            "details",
                            "dfn",
                            "dialog",
                            "div",
                            "dl",
                            "dt",
                            "em",
                            "embed",
                            "fieldset",
                            "figcaption",
                            "figure",
                            "footer",
                            "form",
                            "h1",
                            "h2",
                            "h3",
                            "h4",
                            "h5",
                            "h6",
                            "head",
                            "header",
                            "hgroup",
                            "hr",
                            "html",
                            "i",
                            "iframe",
                            "img",
                            "input",
                            "ins",
                            "kbd",
                            "keygen",
                            "label",
                            "legend",
                            "li",
                            "link",
                            "main",
                            "map",
                            "mark",
                            "marquee",
                            "menu",
                            "menuitem",
                            "meta",
                            "meter",
                            "nav",
                            "noscript",
                            "object",
                            "ol",
                            "optgroup",
                            "option",
                            "output",
                            "p",
                            "param",
                            "picture",
                            "pre",
                            "progress",
                            "q",
                            "rp",
                            "rt",
                            "ruby",
                            "s",
                            "samp",
                            "script",
                            "section",
                            "select",
                            "small",
                            "source",
                            "span",
                            "strong",
                            "style",
                            "sub",
                            "summary",
                            "sup",
                            "table",
                            "tbody",
                            "td",
                            "textarea",
                            "tfoot",
                            "th",
                            "thead",
                            "time",
                            "title",
                            "tr",
                            "track",
                            "u",
                            "ul",
                            "var",
                            "video",
                            "wbr",
                            "circle",
                            "clipPath",
                            "defs",
                            "ellipse",
                            "foreignObject",
                            "g",
                            "image",
                            "line",
                            "linearGradient",
                            "mask",
                            "path",
                            "pattern",
                            "polygon",
                            "polyline",
                            "radialGradient",
                            "rect",
                            "stop",
                            "svg",
                            "text",
                            "tspan",
                        ],
                        Pe = function (e) {
                            var t = "function" == typeof e && !(e.prototype && "isReactComponent" in e.prototype),
                                n = k(e) || t,
                                r = (function (t) {
                                    function r() {
                                        var e, n;
                                        b(this, r);
                                        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                                        return (e = n = S(this, t.call.apply(t, [this].concat(i)))), (n.state = Y), (n.unsubscribeId = -1), S(n, e);
                                    }
                                    return (
                                        I(r, t),
                                        (r.prototype.componentWillMount = function () {
                                            var e = this,
                                                t = this.constructor.defaultProps,
                                                n = this.context[Ae],
                                                r = pe(this.props, void 0, t);
                                            if (void 0 === n && void 0 !== r) this.setState({ theme: r });
                                            else {
                                                var o = n.subscribe;
                                                this.unsubscribeId = o(function (n) {
                                                    var r = pe(e.props, n, t);
                                                    e.setState({ theme: r });
                                                });
                                            }
                                        }),
                                        (r.prototype.componentWillReceiveProps = function (e) {
                                            var t = this.constructor.defaultProps;
                                            this.setState(function (n) {
                                                return { theme: pe(e, n.theme, t) };
                                            });
                                        }),
                                        (r.prototype.componentWillUnmount = function () {
                                            -1 !== this.unsubscribeId && this.context[Ae].unsubscribe(this.unsubscribeId);
                                        }),
                                        (r.prototype.render = function () {
                                            var t = v({ theme: this.state.theme }, this.props);
                                            return n || ((t.ref = t.innerRef), delete t.innerRef), c.a.createElement(e, t);
                                        }),
                                        r
                                    );
                                })(c.a.Component);
                            return (r.contextTypes = De), (r.displayName = "WithTheme(" + be(e) + ")"), (r.styledComponentId = "withTheme"), g()(r, e);
                        },
                        Ue = { StyleSheet: de },
                        Ye = (function (e, t, n) {
                            var r = function (t) {
                                return e(ke(t));
                            };
                            return (function () {
                                function e(t, n, r) {
                                    if ((b(this, e), (this.rules = t), (this.isStatic = !ze && Fe(t, n)), (this.componentId = r), !de.master.hasId(r))) {
                                        de.master.deferredInject(r, []);
                                    }
                                }
                                return (
                                    (e.prototype.generateAndInjectStyles = function (e, o) {
                                        var i = this.isStatic,
                                            a = this.componentId,
                                            c = this.lastClassName;
                                        if (Oe && i && void 0 !== c && o.hasNameForId(a, c)) return c;
                                        var s = t(this.rules, e),
                                            u = r(this.componentId + s.join(""));
                                        return o.hasNameForId(a, u) || o.inject(this.componentId, n(s, "." + u), u), (this.lastClassName = u), u;
                                    }),
                                    (e.generateName = function (e) {
                                        return r(e);
                                    }),
                                    e
                                );
                            })();
                        })(R, A, E),
                        Be = (function (e) {
                            return function t(n, r) {
                                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Y;
                                if (!Object(m.isValidElementType)(r)) throw new N(1, String(r));
                                var i = function () {
                                    return n(r, o, e.apply(void 0, arguments));
                                };
                                return (
                                    (i.withConfig = function (e) {
                                        return t(n, r, v({}, o, e));
                                    }),
                                    (i.attrs = function (e) {
                                        return t(n, r, v({}, o, { attrs: v({}, o.attrs || Y, e) }));
                                    }),
                                    i
                                );
                            };
                        })(B),
                        Qe = (function (e, t) {
                            return function n(r, o, i) {
                                var a = o.isClass,
                                    c = void 0 === a ? !Me(r) : a,
                                    s = o.displayName,
                                    u =
                                        void 0 === s
                                            ? (function (e) {
                                                  return Me(e) ? "styled." + e : "Styled(" + be(e) + ")";
                                              })(r)
                                            : s,
                                    l = o.componentId,
                                    d =
                                        void 0 === l
                                            ? (function (e, t, n) {
                                                  var r = "string" != typeof t ? "sc" : ye(t),
                                                      o = (Le[r] || 0) + 1;
                                                  Le[r] = o;
                                                  var i = r + "-" + e.generateName(r + o);
                                                  return void 0 !== n ? n + "-" + i : i;
                                              })(e, o.displayName, o.parentComponentId)
                                            : l,
                                    f = o.ParentComponent,
                                    h = void 0 === f ? Ee : f,
                                    p = o.rules,
                                    m = o.attrs,
                                    y = o.displayName && o.componentId ? ye(o.displayName) + "-" + o.componentId : o.componentId || d,
                                    C = new e(void 0 === p ? i : p.concat(i), m, y),
                                    N = (function (e) {
                                        function a() {
                                            return b(this, a), S(this, e.apply(this, arguments));
                                        }
                                        return (
                                            I(a, e),
                                            (a.withComponent = function (e) {
                                                var t = o.componentId,
                                                    r = x(o, ["componentId"]),
                                                    c = t && t + "-" + (Me(e) ? e : ye(be(e))),
                                                    s = v({}, r, { componentId: c, ParentComponent: a });
                                                return n(e, s, i);
                                            }),
                                            M(a, null, [
                                                {
                                                    key: "extend",
                                                    get: function () {
                                                        var e = o.rules,
                                                            c = o.componentId,
                                                            s = x(o, ["rules", "componentId"]),
                                                            u = void 0 === e ? i : e.concat(i),
                                                            l = v({}, s, { rules: u, parentComponentId: c, ParentComponent: a });
                                                        return t(n, r, l);
                                                    },
                                                },
                                            ]),
                                            a
                                        );
                                    })(h);
                                return (
                                    (N.attrs = m),
                                    (N.componentStyle = C),
                                    (N.contextTypes = Te),
                                    (N.displayName = u),
                                    (N.styledComponentId = y),
                                    (N.target = r),
                                    c && g()(N, r, { attrs: !0, componentStyle: !0, displayName: !0, extend: !0, styledComponentId: !0, target: !0, warnTooManyClasses: !0, withComponent: !0 }),
                                    N
                                );
                            };
                        })(Ye, Be),
                        He = (function (e, t, n) {
                            return function () {
                                var r = de.master,
                                    o = n.apply(void 0, arguments),
                                    i = e(ke(JSON.stringify(o).replace(/\s|\\n/g, ""))),
                                    a = "sc-keyframes-" + i;
                                return r.hasNameForId(a, i) || r.inject(a, t(o, i, "@keyframes"), i), i;
                            };
                        })(R, E, B),
                        Ge = (function (e, t) {
                            return function () {
                                var n = de.master,
                                    r = t.apply(void 0, arguments),
                                    o = "sc-global-" + ke(JSON.stringify(r));
                                n.hasId(o) || n.inject(o, e(r));
                            };
                        })(E, B),
                        We = (function (e, t) {
                            var n = function (n) {
                                return t(e, n);
                            };
                            return (
                                Re.forEach(function (e) {
                                    n[e] = n(e);
                                }),
                                n
                            );
                        })(Qe, Be);
                    t.default = We;
                }.call(this, n(145), n(146)(e));
        },
        function (e, t) {
            e.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            };
        },
        function (e, t, n) {
            e.exports = n(69)();
        },
        function (e, t, n) {
            "use strict";
            n.r(t);
            var r = {};
            n.r(r),
                n.d(r, "R50", function () {
                    return d;
                }),
                n.d(r, "R75", function () {
                    return f;
                }),
                n.d(r, "R100", function () {
                    return h;
                }),
                n.d(r, "R200", function () {
                    return p;
                }),
                n.d(r, "R300", function () {
                    return g;
                }),
                n.d(r, "R400", function () {
                    return m;
                }),
                n.d(r, "R500", function () {
                    return y;
                }),
                n.d(r, "Y50", function () {
                    return b;
                }),
                n.d(r, "Y75", function () {
                    return M;
                }),
                n.d(r, "Y100", function () {
                    return v;
                }),
                n.d(r, "Y200", function () {
                    return I;
                }),
                n.d(r, "Y300", function () {
                    return x;
                }),
                n.d(r, "Y400", function () {
                    return S;
                }),
                n.d(r, "Y500", function () {
                    return C;
                }),
                n.d(r, "G50", function () {
                    return N;
                }),
                n.d(r, "G75", function () {
                    return A;
                }),
                n.d(r, "G100", function () {
                    return _;
                }),
                n.d(r, "G200", function () {
                    return D;
                }),
                n.d(r, "G300", function () {
                    return w;
                }),
                n.d(r, "G400", function () {
                    return j;
                }),
                n.d(r, "G500", function () {
                    return T;
                }),
                n.d(r, "B50", function () {
                    return L;
                }),
                n.d(r, "B75", function () {
                    return E;
                }),
                n.d(r, "B100", function () {
                    return k;
                }),
                n.d(r, "B200", function () {
                    return O;
                }),
                n.d(r, "B300", function () {
                    return F;
                }),
                n.d(r, "B400", function () {
                    return z;
                }),
                n.d(r, "B500", function () {
                    return R;
                }),
                n.d(r, "P50", function () {
                    return P;
                }),
                n.d(r, "P75", function () {
                    return U;
                }),
                n.d(r, "P100", function () {
                    return Y;
                }),
                n.d(r, "P200", function () {
                    return B;
                }),
                n.d(r, "P300", function () {
                    return Q;
                }),
                n.d(r, "P400", function () {
                    return H;
                }),
                n.d(r, "P500", function () {
                    return G;
                }),
                n.d(r, "T50", function () {
                    return W;
                }),
                n.d(r, "T75", function () {
                    return Z;
                }),
                n.d(r, "T100", function () {
                    return q;
                }),
                n.d(r, "T200", function () {
                    return K;
                }),
                n.d(r, "T300", function () {
                    return J;
                }),
                n.d(r, "T400", function () {
                    return V;
                }),
                n.d(r, "T500", function () {
                    return X;
                }),
                n.d(r, "N0", function () {
                    return $;
                }),
                n.d(r, "N10", function () {
                    return ee;
                }),
                n.d(r, "N20", function () {
                    return te;
                }),
                n.d(r, "N30", function () {
                    return ne;
                }),
                n.d(r, "N40", function () {
                    return re;
                }),
                n.d(r, "N50", function () {
                    return oe;
                }),
                n.d(r, "N60", function () {
                    return ie;
                }),
                n.d(r, "N70", function () {
                    return ae;
                }),
                n.d(r, "N80", function () {
                    return ce;
                }),
                n.d(r, "N90", function () {
                    return se;
                }),
                n.d(r, "N100", function () {
                    return ue;
                }),
                n.d(r, "N200", function () {
                    return le;
                }),
                n.d(r, "N300", function () {
                    return de;
                }),
                n.d(r, "N400", function () {
                    return fe;
                }),
                n.d(r, "N500", function () {
                    return he;
                }),
                n.d(r, "N600", function () {
                    return pe;
                }),
                n.d(r, "N700", function () {
                    return ge;
                }),
                n.d(r, "N800", function () {
                    return me;
                }),
                n.d(r, "N900", function () {
                    return ye;
                }),
                n.d(r, "N10A", function () {
                    return be;
                }),
                n.d(r, "N20A", function () {
                    return Me;
                }),
                n.d(r, "N30A", function () {
                    return ve;
                }),
                n.d(r, "N40A", function () {
                    return Ie;
                }),
                n.d(r, "N50A", function () {
                    return xe;
                }),
                n.d(r, "N60A", function () {
                    return Se;
                }),
                n.d(r, "N70A", function () {
                    return Ce;
                }),
                n.d(r, "N80A", function () {
                    return Ne;
                }),
                n.d(r, "N90A", function () {
                    return Ae;
                }),
                n.d(r, "N100A", function () {
                    return _e;
                }),
                n.d(r, "N200A", function () {
                    return De;
                }),
                n.d(r, "N300A", function () {
                    return we;
                }),
                n.d(r, "N400A", function () {
                    return je;
                }),
                n.d(r, "N500A", function () {
                    return Te;
                }),
                n.d(r, "N600A", function () {
                    return Le;
                }),
                n.d(r, "N700A", function () {
                    return Ee;
                }),
                n.d(r, "N800A", function () {
                    return ke;
                }),
                n.d(r, "DN900", function () {
                    return Oe;
                }),
                n.d(r, "DN800", function () {
                    return Fe;
                }),
                n.d(r, "DN700", function () {
                    return ze;
                }),
                n.d(r, "DN600", function () {
                    return Re;
                }),
                n.d(r, "DN500", function () {
                    return Pe;
                }),
                n.d(r, "DN400", function () {
                    return Ue;
                }),
                n.d(r, "DN300", function () {
                    return Ye;
                }),
                n.d(r, "DN200", function () {
                    return Be;
                }),
                n.d(r, "DN100", function () {
                    return Qe;
                }),
                n.d(r, "DN90", function () {
                    return He;
                }),
                n.d(r, "DN80", function () {
                    return Ge;
                }),
                n.d(r, "DN70", function () {
                    return We;
                }),
                n.d(r, "DN60", function () {
                    return Ze;
                }),
                n.d(r, "DN50", function () {
                    return qe;
                }),
                n.d(r, "DN40", function () {
                    return Ke;
                }),
                n.d(r, "DN30", function () {
                    return Je;
                }),
                n.d(r, "DN20", function () {
                    return Ve;
                }),
                n.d(r, "DN10", function () {
                    return Xe;
                }),
                n.d(r, "DN0", function () {
                    return $e;
                }),
                n.d(r, "DN800A", function () {
                    return et;
                }),
                n.d(r, "DN700A", function () {
                    return tt;
                }),
                n.d(r, "DN600A", function () {
                    return nt;
                }),
                n.d(r, "DN500A", function () {
                    return rt;
                }),
                n.d(r, "DN400A", function () {
                    return ot;
                }),
                n.d(r, "DN300A", function () {
                    return it;
                }),
                n.d(r, "DN200A", function () {
                    return at;
                }),
                n.d(r, "DN100A", function () {
                    return ct;
                }),
                n.d(r, "DN90A", function () {
                    return st;
                }),
                n.d(r, "DN80A", function () {
                    return ut;
                }),
                n.d(r, "DN70A", function () {
                    return lt;
                }),
                n.d(r, "DN60A", function () {
                    return dt;
                }),
                n.d(r, "DN50A", function () {
                    return ft;
                }),
                n.d(r, "DN40A", function () {
                    return ht;
                }),
                n.d(r, "DN30A", function () {
                    return pt;
                }),
                n.d(r, "DN20A", function () {
                    return gt;
                }),
                n.d(r, "DN10A", function () {
                    return mt;
                }),
                n.d(r, "background", function () {
                    return yt;
                }),
                n.d(r, "backgroundActive", function () {
                    return bt;
                }),
                n.d(r, "backgroundHover", function () {
                    return Mt;
                }),
                n.d(r, "backgroundOnLayer", function () {
                    return vt;
                }),
                n.d(r, "text", function () {
                    return It;
                }),
                n.d(r, "textHover", function () {
                    return xt;
                }),
                n.d(r, "textActive", function () {
                    return St;
                }),
                n.d(r, "subtleText", function () {
                    return Ct;
                }),
                n.d(r, "placeholderText", function () {
                    return Nt;
                }),
                n.d(r, "heading", function () {
                    return At;
                }),
                n.d(r, "subtleHeading", function () {
                    return _t;
                }),
                n.d(r, "codeBlock", function () {
                    return Dt;
                }),
                n.d(r, "link", function () {
                    return wt;
                }),
                n.d(r, "linkHover", function () {
                    return jt;
                }),
                n.d(r, "linkActive", function () {
                    return Tt;
                }),
                n.d(r, "linkOutline", function () {
                    return Lt;
                }),
                n.d(r, "primary", function () {
                    return Et;
                }),
                n.d(r, "blue", function () {
                    return kt;
                }),
                n.d(r, "teal", function () {
                    return Ot;
                }),
                n.d(r, "purple", function () {
                    return Ft;
                }),
                n.d(r, "red", function () {
                    return zt;
                }),
                n.d(r, "yellow", function () {
                    return Rt;
                }),
                n.d(r, "green", function () {
                    return Pt;
                }),
                n.d(r, "colorPalette8", function () {
                    return Ut;
                }),
                n.d(r, "colorPalette16", function () {
                    return Yt;
                }),
                n.d(r, "colorPalette24", function () {
                    return Bt;
                }),
                n.d(r, "colorPalette", function () {
                    return Qt;
                });
            var o = {};
            n.r(o),
                n.d(o, "e100", function () {
                    return Ht;
                }),
                n.d(o, "e200", function () {
                    return Gt;
                }),
                n.d(o, "e300", function () {
                    return Wt;
                }),
                n.d(o, "e400", function () {
                    return Zt;
                }),
                n.d(o, "e500", function () {
                    return qt;
                });
            var i = {};
            n.r(i),
                n.d(i, "h900", function () {
                    return Jt;
                }),
                n.d(i, "h800", function () {
                    return Vt;
                }),
                n.d(i, "h700", function () {
                    return Xt;
                }),
                n.d(i, "h600", function () {
                    return $t;
                }),
                n.d(i, "h500", function () {
                    return en;
                }),
                n.d(i, "h400", function () {
                    return tn;
                }),
                n.d(i, "h300", function () {
                    return nn;
                }),
                n.d(i, "h200", function () {
                    return rn;
                }),
                n.d(i, "h100", function () {
                    return on;
                });
            var a = {};
            n.r(a),
                n.d(a, "add", function () {
                    return an;
                }),
                n.d(a, "subtract", function () {
                    return cn;
                }),
                n.d(a, "multiply", function () {
                    return sn;
                }),
                n.d(a, "divide", function () {
                    return un;
                });
            var c = n(2),
                s = n(18),
                u = n.n(s),
                l = n(6),
                d = "#FFEBE6",
                f = "#FFBDAD",
                h = "#FF8F73",
                p = "#FF7452",
                g = "#FF5630",
                m = "#DE350B",
                y = "#BF2600",
                b = "#FFFAE6",
                M = "#FFF0B3",
                v = "#FFE380",
                I = "#FFC400",
                x = "#FFAB00",
                S = "#FF991F",
                C = "#FF8B00",
                N = "#E3FCEF",
                A = "#ABF5D1",
                _ = "#79F2C0",
                D = "#57D9A3",
                w = "#36B37E",
                j = "#00875A",
                T = "#006644",
                L = "#DEEBFF",
                E = "#B3D4FF",
                k = "#4C9AFF",
                O = "#2684FF",
                F = "#0065FF",
                z = "#0052CC",
                R = "#0747A6",
                P = "#EAE6FF",
                U = "#C0B6F2",
                Y = "#998DD9",
                B = "#8777D9",
                Q = "#6554C0",
                H = "#5243AA",
                G = "#403294",
                W = "#E6FCFF",
                Z = "#B3F5FF",
                q = "#79E2F2",
                K = "#00C7E6",
                J = "#00B8D9",
                V = "#00A3BF",
                X = "#008DA6",
                $ = "#FFFFFF",
                ee = "#FAFBFC",
                te = "#F4F5F7",
                ne = "#EBECF0",
                re = "#DFE1E6",
                oe = "#C1C7D0",
                ie = "#B3BAC5",
                ae = "#A5ADBA",
                ce = "#97A0AF",
                se = "#8993A4",
                ue = "#7A869A",
                le = "#6B778C",
                de = "#5E6C84",
                fe = "#505F79",
                he = "#42526E",
                pe = "#344563",
                ge = "#253858",
                me = "#172B4D",
                ye = "#091E42",
                be = "rgba(9, 30, 66, 0.02)",
                Me = "rgba(9, 30, 66, 0.04)",
                ve = "rgba(9, 30, 66, 0.08)",
                Ie = "rgba(9, 30, 66, 0.13)",
                xe = "rgba(9, 30, 66, 0.25)",
                Se = "rgba(9, 30, 66, 0.31)",
                Ce = "rgba(9, 30, 66, 0.36)",
                Ne = "rgba(9, 30, 66, 0.42)",
                Ae = "rgba(9, 30, 66, 0.48)",
                _e = "rgba(9, 30, 66, 0.54)",
                De = "rgba(9, 30, 66, 0.60)",
                we = "rgba(9, 30, 66, 0.66)",
                je = "rgba(9, 30, 66, 0.71)",
                Te = "rgba(9, 30, 66, 0.77)",
                Le = "rgba(9, 30, 66, 0.82)",
                Ee = "rgba(9, 30, 66, 0.89)",
                ke = "rgba(9, 30, 66, 0.95)",
                Oe = "#E6EDFA",
                Fe = "#DCE5F5",
                ze = "#CED9EB",
                Re = "#B8C7E0",
                Pe = "#ABBBD6",
                Ue = "#9FB0CC",
                Ye = "#8C9CB8",
                Be = "#7988A3",
                Qe = "#67758F",
                He = "#56637A",
                Ge = "#455166",
                We = "#3B475C",
                Ze = "#313D52",
                qe = "#283447",
                Ke = "#202B3D",
                Je = "#1B2638",
                Ve = "#121A29",
                Xe = "#0E1624",
                $e = "#0D1424",
                et = "rgba(13, 20, 36, 0.06)",
                tt = "rgba(13, 20, 36, 0.14)",
                nt = "rgba(13, 20, 36, 0.18)",
                rt = "rgba(13, 20, 36, 0.29)",
                ot = "rgba(13, 20, 36, 0.36)",
                it = "rgba(13, 20, 36, 0.40)",
                at = "rgba(13, 20, 36, 0.47)",
                ct = "rgba(13, 20, 36, 0.53)",
                st = "rgba(13, 20, 36, 0.63)",
                ut = "rgba(13, 20, 36, 0.73)",
                lt = "rgba(13, 20, 36, 0.78)",
                dt = "rgba(13, 20, 36, 0.81)",
                ft = "rgba(13, 20, 36, 0.85)",
                ht = "rgba(13, 20, 36, 0.89)",
                pt = "rgba(13, 20, 36, 0.92)",
                gt = "rgba(13, 20, 36, 0.95)",
                mt = "rgba(13, 20, 36, 0.97)",
                yt = Object(l.a)({ light: $, dark: Je }),
                bt = Object(l.a)({ light: L, dark: E }),
                Mt = Object(l.a)({ light: ne, dark: We }),
                vt = Object(l.a)({ light: $, dark: qe }),
                It = Object(l.a)({ light: ye, dark: Re }),
                xt = Object(l.a)({ light: me, dark: Re }),
                St = Object(l.a)({ light: z, dark: z }),
                Ct = Object(l.a)({ light: le, dark: Ye }),
                Nt = Object(l.a)({ light: ue, dark: Be }),
                At = Object(l.a)({ light: me, dark: Re }),
                _t = Object(l.a)({ light: le, dark: Ye }),
                Dt = Object(l.a)({ light: te, dark: qe }),
                wt = Object(l.a)({ light: z, dark: k }),
                jt = Object(l.a)({ light: F, dark: O }),
                Tt = Object(l.a)({ light: R, dark: k }),
                Lt = Object(l.a)({ light: k, dark: O }),
                Et = Object(l.a)({ light: z, dark: k }),
                kt = Object(l.a)({ light: z, dark: k }),
                Ot = Object(l.a)({ light: J, dark: K }),
                Ft = Object(l.a)({ light: Q, dark: Y }),
                zt = Object(l.a)({ light: g, dark: g }),
                Rt = Object(l.a)({ light: x, dark: x }),
                Pt = Object(l.a)({ light: w, dark: w }),
                Ut = [
                    { background: me, text: $ },
                    { background: m, text: $ },
                    { background: H, text: P },
                    { background: z, text: E },
                    { background: J, text: me },
                    { background: j, text: $ },
                    { background: S, text: me },
                    { background: ae, text: me },
                ],
                Yt = Ut.concat([
                    { background: he, text: $ },
                    { background: h, text: me },
                    { background: U, text: me },
                    { background: k, text: me },
                    { background: q, text: me },
                    { background: _, text: T },
                    { background: I, text: me },
                    { background: $, text: me },
                ]),
                Bt = u()(Yt).concat([
                    { background: ue, text: $ },
                    { background: re, text: me },
                    { background: oe, text: y },
                    { background: P, text: G },
                    { background: L, text: R },
                    { background: Z, text: me },
                    { background: N, text: T },
                    { background: M, text: me },
                ]),
                Qt = function () {
                    switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "8") {
                        case "8":
                            return Ut;
                        case "16":
                            return Yt;
                        case "24":
                            return Bt;
                        default:
                            throw new Error("The only available color palette is 8, 16, 24");
                    }
                },
                Ht = Object(l.a)({ light: "box-shadow: 0 1px 1px ".concat(xe, ", 0 0 1px 0 ").concat(Se, ";"), dark: "box-shadow: 0 1px 1px ".concat(ft, ", 0 0 1px ").concat(dt, ";") }),
                Gt = Object(l.a)({ light: "box-shadow: 0 4px 8px -2px ".concat(xe, ", 0 0 1px ").concat(Se, ";"), dark: "box-shadow: 0 4px 8px -2px ".concat(ft, ", 0 0 1px ").concat(dt, ";") }),
                Wt = Object(l.a)({ light: "box-shadow: 0 8px 16px -4px ".concat(xe, ", 0 0 1px ").concat(Se, ";"), dark: "box-shadow: 0 8px 16px -4px ".concat(ft, ", 0 0 1px ").concat(dt, ";") }),
                Zt = Object(l.a)({ light: "box-shadow: 0 12px 24px -6px ".concat(xe, ", 0 0 1px ").concat(Se, ";"), dark: "box-shadow: 0 12px 24px -6px ".concat(ft, ", 0 0 1px ").concat(dt, ";") }),
                qt = Object(l.a)({ light: "box-shadow: 0 20px 32px -8px ".concat(xe, ", 0 0 1px ").concat(Se, ";"), dark: "box-shadow: 0 20px 32px -8px ".concat(ft, ", 0 0 1px ").concat(dt, ";") }),
                Kt = function (e, t) {
                    return "\n  font-size: ".concat(e / tr(), "em;\n  font-style: inherit;\n  line-height: ").concat(t / e, ";\n");
                },
                Jt = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], Kt(35, 40), At, 6.5 * er());
                },
                Vt = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], Kt(29, 32), At, 5 * er());
                },
                Xt = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], Kt(24, 28), At, 5 * er());
                },
                $t = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n"], Kt(20, 24), At, 3.5 * er());
                },
                en = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n"], Kt(16, 20), At, 3 * er());
                },
                tn = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n"], Kt(14, 16), At, 2 * er());
                },
                nn = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n"], Kt(12, 16), At, 2.5 * er());
                },
                rn = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n"], Kt(12, 16), _t, 2 * er());
                },
                on = function () {
                    return Object(c.css)(["\n  ", " color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n"], Kt(11, 16), _t, 2 * er());
                };
            function an(e, t) {
                return function (n) {
                    return e(n) + t;
                };
            }
            function cn(e, t) {
                return function (n) {
                    return e(n) - t;
                };
            }
            function sn(e, t) {
                return function (n) {
                    return e(n) * t;
                };
            }
            function un(e, t) {
                return function (n) {
                    return e(n) / t;
                };
            }
            var ln = n(26),
                dn = n(8),
                fn = n.n(dn),
                hn = n(9),
                pn = n.n(hn),
                gn = n(12),
                mn = n.n(gn),
                yn = n(7),
                bn = n.n(yn),
                Mn = n(13),
                vn = n.n(Mn),
                In = n(3),
                xn = n.n(In),
                Sn = n(1),
                Cn = n.n(Sn),
                Nn = n(0),
                An = n.n(Nn),
                _n = n(4),
                Dn = n.n(_n),
                wn = n(32),
                jn = n.n(wn),
                Tn = n(25),
                Ln = n(15),
                En = n.n(Ln);
            function kn(e) {
                var t = function (e, t) {
                        return e(t);
                    },
                    n = Object(Nn.createContext)(e);
                return {
                    Consumer: function (e) {
                        e.children;
                        var r = En()(e, ["children"]);
                        return An.a.createElement(n.Consumer, null, function (n) {
                            var o = n || t;
                            return e.children(o(r));
                        });
                    },
                    Provider: function (e) {
                        return An.a.createElement(n.Consumer, null, function (r) {
                            var o = e.value || t;
                            return An.a.createElement(
                                n.Provider,
                                {
                                    value: function (e) {
                                        return o(r, e);
                                    },
                                },
                                e.children
                            );
                        });
                    },
                };
            }
            var On = kn(function () {
                return { mode: "light" };
            });
            function Fn(e) {
                var t = yt(e);
                return "\n    body { background: ".concat(t, "; }\n  ");
            }
            function zn(e) {
                return { theme: Cn()({}, Tn.a, { mode: e }) };
            }
            var Rn = c.default.div.withConfig({ displayName: "AtlaskitThemeProvider__LegacyReset", componentId: "sc-431dkp-0" })(
                    [
                        "\n  background-color: ",
                        ";\n  color: ",
                        ";\n\n  a {\n    color: ",
                        ";\n  }\n  a:hover {\n    color: ",
                        ";\n  }\n  a:active {\n    color: ",
                        ";\n  }\n  a:focus {\n    outline-color: ",
                        ";\n  }\n  h1 {\n    color: ",
                        ";\n  }\n  h2 {\n    color: ",
                        ";\n  }\n  h3 {\n    color: ",
                        ";\n  }\n  h4 {\n    color: ",
                        ";\n  }\n  h5 {\n    color: ",
                        ";\n  }\n  h6 {\n    color: ",
                        ";\n  }\n  small {\n    color: ",
                        ";\n  }\n",
                    ],
                    yt,
                    It,
                    wt,
                    jt,
                    Tt,
                    Lt,
                    At,
                    At,
                    At,
                    At,
                    At,
                    _t,
                    Ct
                ),
                Pn = (function (e) {
                    function t(e) {
                        var n;
                        return fn()(this, t), (n = mn()(this, bn()(t).call(this, e))), Cn()(xn()(xn()(n)), "stylesheet", void 0), (n.state = zn(e.mode)), n;
                    }
                    return (
                        vn()(t, e),
                        pn()(t, [
                            {
                                key: "getChildContext",
                                value: function () {
                                    return { hasAtlaskitThemeProvider: !0 };
                                },
                            },
                            {
                                key: "componentWillMount",
                                value: function () {
                                    if (!this.context.hasAtlaskitThemeProvider && jn.a.canUseDOM) {
                                        var e = Fn(this.state);
                                        (this.stylesheet = document.createElement("style")), (this.stylesheet.type = "text/css"), (this.stylesheet.innerHTML = e), document && document.head && document.head.appendChild(this.stylesheet);
                                    }
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    if (e.mode !== this.props.mode) {
                                        var t = zn(e.mode);
                                        if (this.stylesheet) {
                                            var n = Fn(t);
                                            this.stylesheet.innerHTML = n;
                                        }
                                        this.setState(t);
                                    }
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.stylesheet && document && document.head && (document.head.removeChild(this.stylesheet), delete this.stylesheet);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.children,
                                        t = this.state.theme;
                                    return An.a.createElement(
                                        On.Provider,
                                        {
                                            value: function () {
                                                return { mode: t[Tn.a].mode };
                                            },
                                        },
                                        An.a.createElement(c.ThemeProvider, { theme: t }, An.a.createElement(Rn, null, e))
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(Nn.Component);
            Cn()(Pn, "defaultProps", { mode: Tn.b }), Cn()(Pn, "childContextTypes", { hasAtlaskitThemeProvider: Dn.a.bool }), Cn()(Pn, "contextTypes", { hasAtlaskitThemeProvider: Dn.a.bool });
            var Un = n(14),
                Yn = n.n(Un),
                Bn = n(22),
                Qn = n.n(Bn),
                Hn = function (e) {
                    var t = e.children,
                        n = e.props,
                        r = e.theme,
                        o = "object" === Qn()(n) ? "default" : n,
                        i = "object" === Qn()(n) ? Yn()({}, n) : {};
                    return (
                        Object.keys(r).forEach(function (e) {
                            e in i || (i[e] = r[e]({ appearance: o }));
                        }),
                        t(i)
                    );
                },
                Gn = n(16),
                Wn = n.n(Gn),
                Zn = function (e) {
                    return function (t) {
                        return t[e] || t.textColor;
                    };
                },
                qn = c.default.div.withConfig({ displayName: "Reset__Div", componentId: "sc-15i6ali-0" })(["\n  ", ";\n"], function (e) {
                    return Object(c.css)(
                        [
                            "\n    background-color: ",
                            ";\n    color: ",
                            ";\n\n    a {\n      color: ",
                            ";\n    }\n    a:hover {\n      color: ",
                            ";\n    }\n    a:active {\n      color: ",
                            ";\n    }\n    a:focus {\n      outline-color: ",
                            ";\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5 {\n      color: ",
                            ";\n    }\n    h6 {\n      color: ",
                            ";\n    }\n    small {\n      color: ",
                            ";\n    }\n  ",
                        ],
                        e.backgroundColor,
                        e.textColor,
                        Zn("linkColor"),
                        Zn("linkColorHover"),
                        Zn("linkColorActive"),
                        Zn("linkColorOutline"),
                        Zn("headingColor"),
                        Zn("subtleHeadingColor"),
                        Zn("subtleTextColor")
                    );
                }),
                Kn = kn(function () {
                    return { backgroundColor: $, linkColor: z, linkColorHover: F, linkColorActive: R, linkColorOutline: k, headingColor: me, subtleHeadingColor: le, subtleTextColor: le, textColor: ye };
                });
            function Jn(e) {
                return An.a.createElement(
                    Kn.Provider,
                    { value: e.theme },
                    An.a.createElement(Kn.Consumer, null, function (t) {
                        return An.a.createElement(qn, Wn()({}, Yn()({}, t, { mode: void 0 }), e), e.children);
                    })
                );
            }
            function Vn(e) {
                return function (t) {
                    return An.a.createElement(On.Consumer, null, function (n) {
                        return An.a.createElement(e, Wn()({}, t, { theme: n }));
                    });
                };
            }
            n.d(t, "AtlasKitThemeProvider", function () {
                return Xn;
            }),
                n.d(t, "borderRadius", function () {
                    return $n;
                }),
                n.d(t, "gridSize", function () {
                    return er;
                }),
                n.d(t, "fontSize", function () {
                    return tr;
                }),
                n.d(t, "fontSizeSmall", function () {
                    return nr;
                }),
                n.d(t, "fontFamily", function () {
                    return rr;
                }),
                n.d(t, "codeFontFamily", function () {
                    return or;
                }),
                n.d(t, "focusRing", function () {
                    return ir;
                }),
                n.d(t, "noFocusRing", function () {
                    return ar;
                }),
                n.d(t, "layers", function () {
                    return cr;
                }),
                n.d(t, "assistive", function () {
                    return sr;
                }),
                n.d(t, "colors", function () {
                    return r;
                }),
                n.d(t, "elevation", function () {
                    return o;
                }),
                n.d(t, "typography", function () {
                    return i;
                }),
                n.d(t, "math", function () {
                    return a;
                }),
                n.d(t, "getTheme", function () {
                    return ln.a;
                }),
                n.d(t, "themed", function () {
                    return l.a;
                }),
                n.d(t, "AtlaskitThemeProvider", function () {
                    return Pn;
                }),
                n.d(t, "Appearance", function () {
                    return Hn;
                }),
                n.d(t, "ResetTheme", function () {
                    return Kn;
                }),
                n.d(t, "Reset", function () {
                    return Jn;
                }),
                n.d(t, "default", function () {
                    return On;
                }),
                n.d(t, "withTheme", function () {
                    return Vn;
                }),
                n.d(t, "createTheme", function () {
                    return kn;
                });
            var Xn = Pn,
                $n = function () {
                    return 3;
                },
                er = function () {
                    return 8;
                },
                tr = function () {
                    return 14;
                },
                nr = function () {
                    return 11;
                },
                rr = function () {
                    return '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
                },
                or = function () {
                    return '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace';
                },
                ir = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er() / 4;
                    return "\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 0px ".concat(t, "px ").concat(e, ";\n  }\n");
                },
                ar = function () {
                    return "\n  box-shadow: none;\n";
                },
                cr = {
                    card: function () {
                        return 100;
                    },
                    dialog: function () {
                        return 200;
                    },
                    navigation: function () {
                        return 300;
                    },
                    layer: function () {
                        return 400;
                    },
                    blanket: function () {
                        return 500;
                    },
                    modal: function () {
                        return 510;
                    },
                    flag: function () {
                        return 600;
                    },
                    spotlight: function () {
                        return 700;
                    },
                    tooltip: function () {
                        return 800;
                    },
                },
                sr = function () {
                    return Object(c.css)([
                        "\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n",
                    ]);
                };
        },
        function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return o;
            });
            var r = n(26);
            function o(e, t) {
                if ("string" == typeof e)
                    return (
                        (n = e),
                        (o = t),
                        function (e) {
                            var t = Object(r.a)(e);
                            if (e && e[n] && o) {
                                var i = o[e[n]];
                                if (i) return i[t.mode];
                            }
                            return "";
                        }
                    );
                var n,
                    o,
                    i = e;
                return function (e) {
                    var t = Object(r.a)(e);
                    return i[t.mode];
                };
            }
        },
        function (e, t) {
            function n(t) {
                return (
                    (e.exports = n = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    n(t)
                );
            }
            e.exports = n;
        },
        function (e, t) {
            e.exports = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function (e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            e.exports = function (e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e;
            };
        },
        function (e, t) {
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n,
                                    r = e[1] || "",
                                    o = e[3];
                                if (!o) return r;
                                if (t && "function" == typeof btoa) {
                                    var i = ((n = o), "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                        a = o.sources.map(function (e) {
                                            return "/*# sourceURL=" + o.sourceRoot + e + " */";
                                        });
                                    return [r].concat(a).concat([i]).join("\n");
                                }
                                return [r].join("\n");
                            })(t, e);
                            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                        }).join("");
                    }),
                    (t.i = function (e, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            "number" == typeof i && (r[i] = !0);
                        }
                        for (o = 0; o < e.length; o++) {
                            var a = e[o];
                            ("number" == typeof a[0] && r[a[0]]) || (n && !a[2] ? (a[2] = n) : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t, n) {
            var r,
                o,
                i = {},
                a =
                    ((r = function () {
                        return window && document && document.all && !window.atob;
                    }),
                    function () {
                        return void 0 === o && (o = r.apply(this, arguments)), o;
                    }),
                c = (function (e) {
                    var t = {};
                    return function (e) {
                        if ("function" == typeof e) return e();
                        if (void 0 === t[e]) {
                            var n = function (e) {
                                return document.querySelector(e);
                            }.call(this, e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    };
                })(),
                s = null,
                u = 0,
                l = [],
                d = n(67);
            function f(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = i[r.id];
                    if (o) {
                        o.refs++;
                        for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                        for (; a < r.parts.length; a++) o.parts.push(b(r.parts[a], t));
                    } else {
                        var c = [];
                        for (a = 0; a < r.parts.length; a++) c.push(b(r.parts[a], t));
                        i[r.id] = { id: r.id, refs: 1, parts: c };
                    }
                }
            }
            function h(e, t) {
                for (var n = [], r = {}, o = 0; o < e.length; o++) {
                    var i = e[o],
                        a = t.base ? i[0] + t.base : i[0],
                        c = { css: i[1], media: i[2], sourceMap: i[3] };
                    r[a] ? r[a].parts.push(c) : n.push((r[a] = { id: a, parts: [c] }));
                }
                return n;
            }
            function p(e, t) {
                var n = c(e.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = l[l.length - 1];
                if ("top" === e.insertAt) r ? (r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)) : n.insertBefore(t, n.firstChild), l.push(t);
                else if ("bottom" === e.insertAt) n.appendChild(t);
                else {
                    if ("object" != typeof e.insertAt || !e.insertAt.before)
                        throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = c(e.insertInto + " " + e.insertAt.before);
                    n.insertBefore(t, o);
                }
            }
            function g(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var t = l.indexOf(e);
                t >= 0 && l.splice(t, 1);
            }
            function m(e) {
                var t = document.createElement("style");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), y(t, e.attrs), p(e, t), t;
            }
            function y(e, t) {
                Object.keys(t).forEach(function (n) {
                    e.setAttribute(n, t[n]);
                });
            }
            function b(e, t) {
                var n, r, o, i;
                if (t.transform && e.css) {
                    if (!(i = t.transform(e.css))) return function () {};
                    e.css = i;
                }
                if (t.singleton) {
                    var a = u++;
                    (n = s || (s = m(t))), (r = I.bind(null, n, a, !1)), (o = I.bind(null, n, a, !0));
                } else
                    e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                        ? ((n = (function (e) {
                              var t = document.createElement("link");
                              return void 0 === e.attrs.type && (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), y(t, e.attrs), p(e, t), t;
                          })(t)),
                          (r = function (e, t, n) {
                              var r = n.css,
                                  o = n.sourceMap,
                                  i = void 0 === t.convertToAbsoluteUrls && o;
                              (t.convertToAbsoluteUrls || i) && (r = d(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                              var a = new Blob([r], { type: "text/css" }),
                                  c = e.href;
                              (e.href = URL.createObjectURL(a)), c && URL.revokeObjectURL(c);
                          }.bind(null, n, t)),
                          (o = function () {
                              g(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = m(t)),
                          (r = function (e, t) {
                              var n = t.css,
                                  r = t.media;
                              if ((r && e.setAttribute("media", r), e.styleSheet)) e.styleSheet.cssText = n;
                              else {
                                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                                  e.appendChild(document.createTextNode(n));
                              }
                          }.bind(null, n)),
                          (o = function () {
                              g(n);
                          }));
                return (
                    r(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function (e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}), t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var n = h(e, t);
                return (
                    f(n, t),
                    function (e) {
                        for (var r = [], o = 0; o < n.length; o++) {
                            var a = n[o];
                            (c = i[a.id]).refs--, r.push(c);
                        }
                        for (e && f(h(e, t), t), o = 0; o < r.length; o++) {
                            var c;
                            if (0 === (c = r[o]).refs) {
                                for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                                delete i[c.id];
                            }
                        }
                    }
                );
            };
            var M,
                v =
                    ((M = []),
                    function (e, t) {
                        return (M[e] = t), M.filter(Boolean).join("\n");
                    });
            function I(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = v(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
        },
        function (e, t, n) {
            var r = n(22),
                o = n(3);
            e.exports = function (e, t) {
                return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t;
            };
        },
        function (e, t, n) {
            var r = n(140);
            e.exports = function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
            };
        },
        function (e, t, n) {
            var r = n(1);
            e.exports = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        o.forEach(function (t) {
                            r(e, t, n[t]);
                        });
                }
                return e;
            };
        },
        function (e, t, n) {
            var r = n(152);
            e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                    o,
                    i = r(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            };
        },
        function (e, t) {
            function n() {
                return (
                    (e.exports = n =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    n.apply(this, arguments)
                );
            }
            e.exports = n;
        },
        function (e, n) {
            e.exports = t;
        },
        function (e, t, n) {
            var r = n(149),
                o = n(150),
                i = n(151);
            e.exports = function (e) {
                return r(e) || o(e) || i();
            };
        },
        function (e) {
            e.exports = { a: "@atlaskit/toggle", b: "5.0.15" };
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                e.exports = ("object" == typeof self && self.self === self && self) || ("object" == typeof t && t.global === t && t) || this;
            }.call(this, n(33)));
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(17), n(27), n(20), n(23)]),
                void 0 ===
                    (o = function (e, t, n, r, o) {
                        "use strict";
                        (e.fetchWrapper = p),
                            (e.fetchWrapperCancellable = function (e, t, n) {
                                var r = new AbortController(),
                                    o = p(e, t, d({}, n, { signal: r.signal }));
                                return Object.assign(o, {
                                    cancel: function () {
                                        return r.abort();
                                    },
                                });
                            });
                        var i,
                            a = t.CONTEXT_PATH,
                            c = ((i = n), i && i.__esModule ? i : { default: i }).default,
                            s = r.window,
                            u = o.SEARCH_UI_FETCH_ERROR,
                            l = o.triggerAnalytic,
                            d =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                },
                            f = new Headers();
                        f.append("pragma", "no-cache"), f.append("cache-control", "no-cache, no-store, must-revalidate"), f.append("expires", 0);
                        var h = { credentials: "same-origin", cache: "no-store", headers: f };
                        function p(e, t, n) {
                            var r = Object.keys(t)
                                    .map(function (e) {
                                        return e + "=" + encodeURIComponent(t[e]);
                                    })
                                    .join("&"),
                                o = "" + a + e + (r ? "?" + r : ""),
                                i = d({}, h, n);
                            return fetch(o, i)
                                .then(function (e) {
                                    if (401 === e.status || 403 === e.status) return s.location.assign(a + "/login.action"), new Promise(function () {});
                                    if (e.ok) return e.json();
                                    throw (l(u, { httpStatus: e.status }), new Error("Network response failed with " + e.status + "."));
                                })
                                .catch(function (e) {
                                    if ("AbortError" !== e.name) throw (c.error({ error: e, url: o }), e);
                                });
                        }
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function r(t) {
                return (
                    "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                        ? (e.exports = r = function (e) {
                              return n(e);
                          })
                        : (e.exports = r = function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
                          }),
                    r(t)
                );
            }
            e.exports = r;
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(39), n(72)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        e.SEARCH_UI_FETCH_ERROR = e.SEARCH_UI_OPEN_SEARCH_EXTENSION_POINT_RESULT = e.SEARCH_UI_OPEN_SEARCH_RESULT = e.SEARCH_UI_OPEN_RECENT_CONTENT = e.SEARCH_UI_OPEN_RECENT_SPACE = e.SEARCH_UI_GO_TO_ADVANCE_SEARCH = e.SEARCH_UI_OPEN = e.generateUUID = e.configAnalyticURL = e.triggerAnalytic = void 0;
                        var r,
                            o = t.trigger,
                            i = ((r = n), r && r.__esModule ? r : { default: r }).default;
                        (e.triggerAnalytic = function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            o("analytics", { name: e, data: t });
                        }),
                            (e.configAnalyticURL = function (e, t) {
                                var n = i.parse(e);
                                return n.queryParams ? (n.queryParams.searchId = [t]) : (n.queryParams = { searchId: [t] }), i.format(n);
                            }),
                            (e.generateUUID = function () {
                                return Math.random().toString(36).toUpperCase().substr(2, 9);
                            }),
                            (e.SEARCH_UI_OPEN = "confluence-search-ui-open"),
                            (e.SEARCH_UI_GO_TO_ADVANCE_SEARCH = "confluence-search-ui-go-to-advance-search"),
                            (e.SEARCH_UI_OPEN_RECENT_SPACE = "confluence-search-ui-open-recent-space"),
                            (e.SEARCH_UI_OPEN_RECENT_CONTENT = "confluence-search-ui-open-recent-content"),
                            (e.SEARCH_UI_OPEN_SEARCH_RESULT = "confluence-search-ui-open-search-result"),
                            (e.SEARCH_UI_OPEN_SEARCH_EXTENSION_POINT_RESULT = "confluence-search-ui-open-search-extension-point-result"),
                            (e.SEARCH_UI_FETCH_ERROR = "confluence-search-ui-fetch-error");
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(77), n(78)]),
                void 0 ===
                    (o = function (e, t, n, r) {
                        "use strict";
                        var o,
                            i = ((o = n), o && o.__esModule ? o : { default: o }).default,
                            a = {};
                        Object.assign(a, r.data.claim("com.atlassian.confluence.plugins.confluence-search-ui-plugin:confluence-search-ui-plugin-resources.i18n-data")),
                            (t.default = {
                                get: function (e, t) {
                                    var n = a[e] || e;
                                    try {
                                        n = t ? i.format.apply(null, [n].concat(t)) : i.format.apply(null, [n]);
                                    } catch (e) {}
                                    return n;
                                },
                            }),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r;
            }),
                n.d(t, "b", function () {
                    return o;
                });
            var r = "__ATLASKIT_THEME__",
                o = "light";
        },
        function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return o;
            });
            var r = { mode: n(25).b };
            function o(e) {
                return e && e.theme && e.theme.__ATLASKIT_THEME__ ? e.theme.__ATLASKIT_THEME__ : e && e.theme && e.theme.mode ? e.theme : r;
            }
        },
        function (e, t) {
            e.exports = n;
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(20)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        (e.handleKeyDownOnListItem = function (e) {
                            (function (e) {
                                if (i(e)) {
                                    if (o.querySelector(".search-drawer-list-item") === n.activeElement) return void o.querySelector("#search-filter-input").focus();
                                    var t = n.activeElement.previousElementSibling;
                                    if (!t || ("A" !== t.tagName && "BUTTON" !== t.tagName)) {
                                        var r = n.activeElement.parentElement,
                                            a = r && r.previousElementSibling && r.previousElementSibling.querySelector("a:last-child");
                                        a && a.focus();
                                    } else t.focus();
                                }
                            })(e),
                                (function (e) {
                                    if (a(e)) {
                                        var t = n.activeElement.nextElementSibling;
                                        if (t) t.focus();
                                        else {
                                            var r = n.activeElement.parentElement,
                                                o = r && r.nextElementSibling && r.nextElementSibling.querySelector("a");
                                            o && o.focus();
                                        }
                                    }
                                })(e),
                                c({ event: e });
                        }),
                            (e.handleKeyDownOnTypeahead = function (e) {
                                !(function (e) {
                                    if (a(e)) {
                                        var t = o.querySelector("div[class*=search-content-container] a.search-drawer-list-item");
                                        t && t.focus(), e.preventDefault();
                                    }
                                })(e);
                            }),
                            (e.focusFirstMenuItem = function (e) {
                                if (a(e)) {
                                    var t = n.activeElement.nextElementSibling && n.activeElement.nextElementSibling.querySelector("[role=menuitem]");
                                    t && t.focus();
                                }
                                c({ event: e });
                            }),
                            (e.focusSiblingMenuItem = function (e) {
                                var t = o.querySelectorAll("[class^=CheckboxListItem] input, button[role=menuitem]"),
                                    r = Array.prototype.indexOf.call(t, n.activeElement);
                                if (!(r < 0)) {
                                    if (i(e))
                                        if (0 === r) {
                                            var s = o.querySelector("[class^=SearchSelect] input[type=text]");
                                            s && s.focus();
                                        } else t[r - 1].focus();
                                    else a(e) && r < t.length - 1 && t[r + 1].focus();
                                    c({ event: e });
                                }
                            }),
                            (e.addTabKeyEventHandler = function (e) {
                                e.addEventListener("keydown", l), (o = e);
                            }),
                            (e.removeTabKeyEventHandler = function () {
                                o.removeEventListener("keydown", l), (o = null), (s = null), (u = null);
                            }),
                            (e.updateFocusableElements = function () {
                                if (o) {
                                    var e = o.querySelectorAll("a, button, textarea, input, select"),
                                        t = r(e, 1);
                                    (s = t[0]), (u = e[e.length - 1]);
                                }
                            });
                        var n = t.document,
                            r = function (e, t) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e))
                                    return (function (e, t) {
                                        var n = [],
                                            r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                        } catch (e) {
                                            (o = !0), (i = e);
                                        } finally {
                                            try {
                                                !r && c.return && c.return();
                                            } finally {
                                                if (o) throw i;
                                            }
                                        }
                                        return n;
                                    })(e, t);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance");
                            },
                            o = null;
                        function i(e) {
                            return 38 === e.keyCode;
                        }
                        function a(e) {
                            return 40 === e.keyCode;
                        }
                        function c(e) {
                            !(function (e) {
                                var t = e.event;
                                e.keys.indexOf(t.keyCode) > -1 && t.preventDefault();
                            })({ event: e.event, keys: [37, 38, 39, 40] });
                        }
                        var s = null,
                            u = null;
                        function l(e) {
                            (function (e) {
                                return 9 === e.keyCode;
                            })(e) && (e.shiftKey ? n.activeElement === s && (u.focus(), e.preventDefault()) : n.activeElement === u && (s.focus(), e.preventDefault()));
                        }
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(44)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        (e.isAllowedToBrowseUsers = function () {
                            return r.get("remote-user-has-browse-users-permission");
                        }),
                            (e.isCurrentUserAdmin = function () {
                                return !0 === r.get("is-confluence-admin");
                            }),
                            (e.isCurrentUserAnonymous = function () {
                                return !r.get("remote-user");
                            }),
                            (e.getCurrentUserMeta = function () {
                                return { id: r.get("remote-user"), text: r.get("current-user-fullname"), imageUrl: r.get("static-resource-url-prefix") + r.get("current-user-avatar-url"), value: r.get("remote-user") };
                            });
                        var n,
                            r = ((n = t), n && n.__esModule ? n : { default: n }).default;
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(31), n(4), n(0), n(99)]),
                void 0 ===
                    (o = function (e, t, n, r, o) {
                        "use strict";
                        var i = s(n).default,
                            a = s(r).default,
                            c = s(o).default;
                        function s(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var u = {
                            "./CaptionedImage.css": {
                                image: "CaptionedImage_image__34q91",
                                caption: "CaptionedImage_caption__3ZFVQ",
                                "empty-recent-items": "CaptionedImage_empty-recent-items__12m58",
                                "empty-search-content": "CaptionedImage_empty-search-content__2oUyN",
                                "error-search-content": "CaptionedImage_error-search-content__188TM",
                            },
                        };
                        function l(e) {
                            var t = e.imageClass,
                                n = e.caption;
                            return c.createElement("div", { className: "captioned-image-component" }, c.createElement("div", { className: i("image " + t, u) }), c.createElement("p", { className: "CaptionedImage_caption__3ZFVQ" }, n));
                        }
                        (l.propTypes = { imageClass: a.oneOf(["empty-recent-items", "empty-search-content", "error-search-content"]).isRequired, caption: a.oneOfType([a.string, a.element]).isRequired }),
                            (t.default = l),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function (e, t, n) {
                    var r = Object.keys(t),
                        o = (n && n.handleMissingStyleName) || "throw";
                    return e
                        .split(" ")
                        .filter(function (e) {
                            return e;
                        })
                        .map(function (e) {
                            if (
                                (function (e) {
                                    return -1 !== e.indexOf(".");
                                })(e)
                            )
                                return (function (e, t, n) {
                                    var r = e.split("."),
                                        o = r[0],
                                        i = r[1],
                                        a = n || "throw";
                                    if (!i) {
                                        if ("throw" === a) throw new Error("Invalid style name: " + e);
                                        if ("warn" !== a) return null;
                                        console.warn("Invalid style name: " + e);
                                    }
                                    if (!t[o]) {
                                        if ("throw" === a) throw new Error("CSS module import does not exist: " + o);
                                        if ("warn" !== a) return null;
                                        console.warn("CSS module import does not exist: " + o);
                                    }
                                    if (!t[o][i]) {
                                        if ("throw" === a) throw new Error("CSS module does not exist: " + i);
                                        if ("warn" !== a) return null;
                                        console.warn("CSS module does not exist: " + i);
                                    }
                                    return t[o][i];
                                })(e, t, o);
                            if (0 === r.length) throw new Error("Cannot use styleName attribute for style name '" + e + "' without importing at least one stylesheet.");
                            if (r.length > 1) throw new Error("Cannot use anonymous style name '" + e + "' with more than one stylesheet import.");
                            var n = t[r[0]];
                            if (!n[e]) {
                                if ("throw" === o) throw new Error("Could not resolve the styleName '" + e + "'.");
                                "warn" === o && console.warn("Could not resolve the styleName '" + e + "'.");
                            }
                            return n[e];
                        })
                        .filter(function (e) {
                            return e;
                        })
                        .join(" ");
                });
        },
        function (e, t, n) {
            var r;
            !(function () {
                "use strict";
                var o = !("undefined" == typeof window || !window.document || !window.document.createElement),
                    i = { canUseDOM: o, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: o && !(!window.addEventListener && !window.attachEvent), canUseViewport: o && !!window.screen };
                void 0 ===
                    (r = function () {
                        return i;
                    }.call(t, n, t, e)) || (e.exports = r);
            })();
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (e) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            var r;
            void 0 ===
                (r = function (e) {
                    "use strict";
                    e.escapeCqlField = function (e) {
                        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                    };
                }.apply(t, [t])) || (e.exports = r);
        },
        function (e, t) {
            e.exports = function (e) {
                return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e);
            };
        },
        function (e, t, n) {
            var r = n(141),
                o = n(142),
                i = o;
            (i.v1 = r), (i.v4 = o), (e.exports = i);
        },
        function (e, t, n) {
            e.exports = (function e(t) {
                "use strict";
                var n = /^\0+/g,
                    r = /[\0\r\f]/g,
                    o = /: */g,
                    i = /zoo|gra/,
                    a = /([,: ])(transform)/g,
                    c = /,+\s*(?![^(]*[)])/g,
                    s = / +\s*(?![^(]*[)])/g,
                    u = / *[\0] */g,
                    l = /,\r+?/g,
                    d = /([\t\r\n ])*\f?&/g,
                    f = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
                    h = /\W+/g,
                    p = /@(k\w+)\s*(\S*)\s*/,
                    g = /::(place)/g,
                    m = /:(read-only)/g,
                    y = /\s+(?=[{\];=:>])/g,
                    b = /([[}=:>])\s+/g,
                    M = /(\{[^{]+?);(?=\})/g,
                    v = /\s{2,}/g,
                    I = /([^\(])(:+) */g,
                    x = /[svh]\w+-[tblr]{2}/,
                    S = /\(\s*(.*)\s*\)/g,
                    C = /([\s\S]*?);/g,
                    N = /-self|flex-/g,
                    A = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                    _ = /stretch|:\s*\w+\-(?:conte|avail)/,
                    D = /([^-])(image-set\()/,
                    w = "-webkit-",
                    j = "-moz-",
                    T = "-ms-",
                    L = 59,
                    E = 125,
                    k = 123,
                    O = 40,
                    F = 41,
                    z = 91,
                    R = 93,
                    P = 10,
                    U = 13,
                    Y = 9,
                    B = 64,
                    Q = 32,
                    H = 38,
                    G = 45,
                    W = 95,
                    Z = 42,
                    q = 44,
                    K = 58,
                    J = 39,
                    V = 34,
                    X = 47,
                    $ = 62,
                    ee = 43,
                    te = 126,
                    ne = 0,
                    re = 12,
                    oe = 11,
                    ie = 107,
                    ae = 109,
                    ce = 115,
                    se = 112,
                    ue = 111,
                    le = 105,
                    de = 99,
                    fe = 100,
                    he = 112,
                    pe = 1,
                    ge = 1,
                    me = 0,
                    ye = 1,
                    be = 1,
                    Me = 1,
                    ve = 0,
                    Ie = 0,
                    xe = 0,
                    Se = [],
                    Ce = [],
                    Ne = 0,
                    Ae = null,
                    _e = -2,
                    De = -1,
                    we = 0,
                    je = 1,
                    Te = 2,
                    Le = 3,
                    Ee = 0,
                    ke = 1,
                    Oe = "",
                    Fe = "",
                    ze = "";
                function Re(e, t, o, i, a) {
                    for (
                        var c,
                            s,
                            l = 0,
                            d = 0,
                            f = 0,
                            h = 0,
                            y = 0,
                            b = 0,
                            M = 0,
                            v = 0,
                            x = 0,
                            C = 0,
                            N = 0,
                            A = 0,
                            _ = 0,
                            D = 0,
                            W = 0,
                            ve = 0,
                            Ce = 0,
                            Ae = 0,
                            _e = 0,
                            De = o.length,
                            Ue = De - 1,
                            We = "",
                            Ze = "",
                            qe = "",
                            Ke = "",
                            Je = "",
                            Ve = "";
                        W < De;

                    ) {
                        if (((M = o.charCodeAt(W)), W === Ue && d + h + f + l !== 0 && (0 !== d && (M = d === X ? P : X), (h = f = l = 0), De++, Ue++), d + h + f + l === 0)) {
                            if (W === Ue && (ve > 0 && (Ze = Ze.replace(r, "")), Ze.trim().length > 0)) {
                                switch (M) {
                                    case Q:
                                    case Y:
                                    case L:
                                    case U:
                                    case P:
                                        break;
                                    default:
                                        Ze += o.charAt(W);
                                }
                                M = L;
                            }
                            if (1 === Ce)
                                switch (M) {
                                    case k:
                                    case E:
                                    case L:
                                    case V:
                                    case J:
                                    case O:
                                    case F:
                                    case q:
                                        Ce = 0;
                                    case Y:
                                    case U:
                                    case P:
                                    case Q:
                                        break;
                                    default:
                                        for (Ce = 0, _e = W, y = M, W--, M = L; _e < De; )
                                            switch (o.charCodeAt(_e++)) {
                                                case P:
                                                case U:
                                                case L:
                                                    ++W, (M = y), (_e = De);
                                                    break;
                                                case K:
                                                    ve > 0 && (++W, (M = y));
                                                case k:
                                                    _e = De;
                                            }
                                }
                            switch (M) {
                                case k:
                                    for (y = (Ze = Ze.trim()).charCodeAt(0), N = 1, _e = ++W; W < De; ) {
                                        switch ((M = o.charCodeAt(W))) {
                                            case k:
                                                N++;
                                                break;
                                            case E:
                                                N--;
                                                break;
                                            case X:
                                                switch ((b = o.charCodeAt(W + 1))) {
                                                    case Z:
                                                    case X:
                                                        W = Ge(b, W, Ue, o);
                                                }
                                                break;
                                            case z:
                                                M++;
                                            case O:
                                                M++;
                                            case V:
                                            case J:
                                                for (; W++ < Ue && o.charCodeAt(W) !== M; );
                                        }
                                        if (0 === N) break;
                                        W++;
                                    }
                                    switch (((qe = o.substring(_e, W)), y === ne && (y = (Ze = Ze.replace(n, "").trim()).charCodeAt(0)), y)) {
                                        case B:
                                            switch ((ve > 0 && (Ze = Ze.replace(r, "")), (b = Ze.charCodeAt(1)))) {
                                                case fe:
                                                case ae:
                                                case ce:
                                                case G:
                                                    c = t;
                                                    break;
                                                default:
                                                    c = Se;
                                            }
                                            if (
                                                ((_e = (qe = Re(t, c, qe, b, a + 1)).length),
                                                xe > 0 && 0 === _e && (_e = Ze.length),
                                                Ne > 0 && ((c = Pe(Se, Ze, Ae)), (s = He(Le, qe, c, t, ge, pe, _e, b, a, i)), (Ze = c.join("")), void 0 !== s && 0 === (_e = (qe = s.trim()).length) && ((b = 0), (qe = ""))),
                                                _e > 0)
                                            )
                                                switch (b) {
                                                    case ce:
                                                        Ze = Ze.replace(S, Qe);
                                                    case fe:
                                                    case ae:
                                                    case G:
                                                        qe = Ze + "{" + qe + "}";
                                                        break;
                                                    case ie:
                                                        (qe = (Ze = Ze.replace(p, "$1 $2" + (ke > 0 ? Oe : ""))) + "{" + qe + "}"), (qe = 1 === be || (2 === be && Be("@" + qe, 3)) ? "@" + w + qe + "@" + qe : "@" + qe);
                                                        break;
                                                    default:
                                                        (qe = Ze + qe), i === he && ((Ke += qe), (qe = ""));
                                                }
                                            else qe = "";
                                            break;
                                        default:
                                            qe = Re(t, Pe(t, Ze, Ae), qe, i, a + 1);
                                    }
                                    (Je += qe), (A = 0), (Ce = 0), (D = 0), (ve = 0), (Ae = 0), (_ = 0), (Ze = ""), (qe = ""), (M = o.charCodeAt(++W));
                                    break;
                                case E:
                                case L:
                                    if ((_e = (Ze = (ve > 0 ? Ze.replace(r, "") : Ze).trim()).length) > 1)
                                        switch (
                                            (0 === D && ((y = Ze.charCodeAt(0)) === G || (y > 96 && y < 123)) && (_e = (Ze = Ze.replace(" ", ":")).length),
                                            Ne > 0 && void 0 !== (s = He(je, Ze, t, e, ge, pe, Ke.length, i, a, i)) && 0 === (_e = (Ze = s.trim()).length) && (Ze = "\0\0"),
                                            (y = Ze.charCodeAt(0)),
                                            (b = Ze.charCodeAt(1)),
                                            y)
                                        ) {
                                            case ne:
                                                break;
                                            case B:
                                                if (b === le || b === de) {
                                                    Ve += Ze + o.charAt(W);
                                                    break;
                                                }
                                            default:
                                                if (Ze.charCodeAt(_e - 1) === K) break;
                                                Ke += Ye(Ze, y, b, Ze.charCodeAt(2));
                                        }
                                    (A = 0), (Ce = 0), (D = 0), (ve = 0), (Ae = 0), (Ze = ""), (M = o.charCodeAt(++W));
                            }
                        }
                        switch (M) {
                            case U:
                            case P:
                                if (d + h + f + l + Ie === 0)
                                    switch (C) {
                                        case F:
                                        case J:
                                        case V:
                                        case B:
                                        case te:
                                        case $:
                                        case Z:
                                        case ee:
                                        case X:
                                        case G:
                                        case K:
                                        case q:
                                        case L:
                                        case k:
                                        case E:
                                            break;
                                        default:
                                            D > 0 && (Ce = 1);
                                    }
                                d === X ? (d = 0) : ye + A === 0 && i !== ie && Ze.length > 0 && ((ve = 1), (Ze += "\0")), Ne * Ee > 0 && He(we, Ze, t, e, ge, pe, Ke.length, i, a, i), (pe = 1), ge++;
                                break;
                            case L:
                            case E:
                                if (d + h + f + l === 0) {
                                    pe++;
                                    break;
                                }
                            default:
                                switch ((pe++, (We = o.charAt(W)), M)) {
                                    case Y:
                                    case Q:
                                        if (h + l + d === 0)
                                            switch (v) {
                                                case q:
                                                case K:
                                                case Y:
                                                case Q:
                                                    We = "";
                                                    break;
                                                default:
                                                    M !== Q && (We = " ");
                                            }
                                        break;
                                    case ne:
                                        We = "\\0";
                                        break;
                                    case re:
                                        We = "\\f";
                                        break;
                                    case oe:
                                        We = "\\v";
                                        break;
                                    case H:
                                        h + d + l === 0 && ye > 0 && ((Ae = 1), (ve = 1), (We = "\f" + We));
                                        break;
                                    case 108:
                                        if (h + d + l + me === 0 && D > 0)
                                            switch (W - D) {
                                                case 2:
                                                    v === se && o.charCodeAt(W - 3) === K && (me = v);
                                                case 8:
                                                    x === ue && (me = x);
                                            }
                                        break;
                                    case K:
                                        h + d + l === 0 && (D = W);
                                        break;
                                    case q:
                                        d + f + h + l === 0 && ((ve = 1), (We += "\r"));
                                        break;
                                    case V:
                                    case J:
                                        0 === d && (h = h === M ? 0 : 0 === h ? M : h);
                                        break;
                                    case z:
                                        h + d + f === 0 && l++;
                                        break;
                                    case R:
                                        h + d + f === 0 && l--;
                                        break;
                                    case F:
                                        h + d + l === 0 && f--;
                                        break;
                                    case O:
                                        if (h + d + l === 0) {
                                            if (0 === A)
                                                switch (2 * v + 3 * x) {
                                                    case 533:
                                                        break;
                                                    default:
                                                        (N = 0), (A = 1);
                                                }
                                            f++;
                                        }
                                        break;
                                    case B:
                                        d + f + h + l + D + _ === 0 && (_ = 1);
                                        break;
                                    case Z:
                                    case X:
                                        if (h + l + f > 0) break;
                                        switch (d) {
                                            case 0:
                                                switch (2 * M + 3 * o.charCodeAt(W + 1)) {
                                                    case 235:
                                                        d = X;
                                                        break;
                                                    case 220:
                                                        (_e = W), (d = Z);
                                                }
                                                break;
                                            case Z:
                                                M === X && v === Z && _e + 2 !== W && (33 === o.charCodeAt(_e + 2) && (Ke += o.substring(_e, W + 1)), (We = ""), (d = 0));
                                        }
                                }
                                if (0 === d) {
                                    if (ye + h + l + _ === 0 && i !== ie && M !== L)
                                        switch (M) {
                                            case q:
                                            case te:
                                            case $:
                                            case ee:
                                            case F:
                                            case O:
                                                if (0 === A) {
                                                    switch (v) {
                                                        case Y:
                                                        case Q:
                                                        case P:
                                                        case U:
                                                            We += "\0";
                                                            break;
                                                        default:
                                                            We = "\0" + We + (M === q ? "" : "\0");
                                                    }
                                                    ve = 1;
                                                } else
                                                    switch (M) {
                                                        case O:
                                                            D + 7 === W && 108 === v && (D = 0), (A = ++N);
                                                            break;
                                                        case F:
                                                            0 == (A = --N) && ((ve = 1), (We += "\0"));
                                                    }
                                                break;
                                            case Y:
                                            case Q:
                                                switch (v) {
                                                    case ne:
                                                    case k:
                                                    case E:
                                                    case L:
                                                    case q:
                                                    case re:
                                                    case Y:
                                                    case Q:
                                                    case P:
                                                    case U:
                                                        break;
                                                    default:
                                                        0 === A && ((ve = 1), (We += "\0"));
                                                }
                                        }
                                    (Ze += We), M !== Q && M !== Y && (C = M);
                                }
                        }
                        (x = v), (v = M), W++;
                    }
                    if (((_e = Ke.length), xe > 0 && 0 === _e && 0 === Je.length && (0 === t[0].length) == 0 && (i !== ae || (1 === t.length && (ye > 0 ? Fe : ze) === t[0])) && (_e = t.join(",").length + 2), _e > 0)) {
                        if (
                            ((c =
                                0 === ye && i !== ie
                                    ? (function (e) {
                                          for (var t, n, o = 0, i = e.length, a = Array(i); o < i; ++o) {
                                              for (var c = e[o].split(u), s = "", l = 0, d = 0, f = 0, h = 0, p = c.length; l < p; ++l)
                                                  if (!(0 === (d = (n = c[l]).length) && p > 1)) {
                                                      if (((f = s.charCodeAt(s.length - 1)), (h = n.charCodeAt(0)), (t = ""), 0 !== l))
                                                          switch (f) {
                                                              case Z:
                                                              case te:
                                                              case $:
                                                              case ee:
                                                              case Q:
                                                              case O:
                                                                  break;
                                                              default:
                                                                  t = " ";
                                                          }
                                                      switch (h) {
                                                          case H:
                                                              n = t + Fe;
                                                          case te:
                                                          case $:
                                                          case ee:
                                                          case Q:
                                                          case F:
                                                          case O:
                                                              break;
                                                          case z:
                                                              n = t + n + Fe;
                                                              break;
                                                          case K:
                                                              switch (2 * n.charCodeAt(1) + 3 * n.charCodeAt(2)) {
                                                                  case 530:
                                                                      if (Me > 0) {
                                                                          n = t + n.substring(8, d - 1);
                                                                          break;
                                                                      }
                                                                  default:
                                                                      (l < 1 || c[l - 1].length < 1) && (n = t + Fe + n);
                                                              }
                                                              break;
                                                          case q:
                                                              t = "";
                                                          default:
                                                              n = d > 1 && n.indexOf(":") > 0 ? t + n.replace(I, "$1" + Fe + "$2") : t + n + Fe;
                                                      }
                                                      s += n;
                                                  }
                                              a[o] = s.replace(r, "").trim();
                                          }
                                          return a;
                                      })(t)
                                    : t),
                            Ne > 0 && void 0 !== (s = He(Te, Ke, c, e, ge, pe, _e, i, a, i)) && 0 === (Ke = s).length)
                        )
                            return Ve + Ke + Je;
                        if (((Ke = c.join(",") + "{" + Ke + "}"), be * me != 0)) {
                            switch ((2 !== be || Be(Ke, 2) || (me = 0), me)) {
                                case ue:
                                    Ke = Ke.replace(m, ":" + j + "$1") + Ke;
                                    break;
                                case se:
                                    Ke = Ke.replace(g, "::" + w + "input-$1") + Ke.replace(g, "::" + j + "$1") + Ke.replace(g, ":" + T + "input-$1") + Ke;
                            }
                            me = 0;
                        }
                    }
                    return Ve + Ke + Je;
                }
                function Pe(e, t, n) {
                    var r = t.trim().split(l),
                        o = r,
                        i = r.length,
                        a = e.length;
                    switch (a) {
                        case 0:
                        case 1:
                            for (var c = 0, s = 0 === a ? "" : e[0] + " "; c < i; ++c) o[c] = Ue(s, o[c], n, a).trim();
                            break;
                        default:
                            c = 0;
                            var u = 0;
                            for (o = []; c < i; ++c) for (var d = 0; d < a; ++d) o[u++] = Ue(e[d] + " ", r[c], n, a).trim();
                    }
                    return o;
                }
                function Ue(e, t, n, r) {
                    var o = t,
                        i = o.charCodeAt(0);
                    switch ((i < 33 && (i = (o = o.trim()).charCodeAt(0)), i)) {
                        case H:
                            switch (ye + r) {
                                case 0:
                                case 1:
                                    if (0 === e.trim().length) break;
                                default:
                                    return o.replace(d, "$1" + e.trim());
                            }
                            break;
                        case K:
                            switch (o.charCodeAt(1)) {
                                case 103:
                                    if (Me > 0 && ye > 0) return o.replace(f, "$1").replace(d, "$1" + ze);
                                    break;
                                default:
                                    return e.trim() + o.replace(d, "$1" + e.trim());
                            }
                        default:
                            if (n * ye > 0 && o.indexOf("\f") > 0) return o.replace(d, (e.charCodeAt(0) === K ? "" : "$1") + e.trim());
                    }
                    return e + o;
                }
                function Ye(e, t, n, r) {
                    var u,
                        l = 0,
                        d = e + ";",
                        f = 2 * t + 3 * n + 4 * r;
                    if (944 === f)
                        return (function (e) {
                            var t = e.length,
                                n = e.indexOf(":", 9) + 1,
                                r = e.substring(0, n).trim(),
                                o = e.substring(n, t - 1).trim();
                            switch (e.charCodeAt(9) * ke) {
                                case 0:
                                    break;
                                case G:
                                    if (110 !== e.charCodeAt(10)) break;
                                default:
                                    var i = o.split(((o = ""), c)),
                                        a = 0;
                                    for (n = 0, t = i.length; a < t; n = 0, ++a) {
                                        for (var u = i[a], l = u.split(s); (u = l[n]); ) {
                                            var d = u.charCodeAt(0);
                                            if (1 === ke && ((d > B && d < 90) || (d > 96 && d < 123) || d === W || (d === G && u.charCodeAt(1) !== G)))
                                                switch (isNaN(parseFloat(u)) + (-1 !== u.indexOf("("))) {
                                                    case 1:
                                                        switch (u) {
                                                            case "infinite":
                                                            case "alternate":
                                                            case "backwards":
                                                            case "running":
                                                            case "normal":
                                                            case "forwards":
                                                            case "both":
                                                            case "none":
                                                            case "linear":
                                                            case "ease":
                                                            case "ease-in":
                                                            case "ease-out":
                                                            case "ease-in-out":
                                                            case "paused":
                                                            case "reverse":
                                                            case "alternate-reverse":
                                                            case "inherit":
                                                            case "initial":
                                                            case "unset":
                                                            case "step-start":
                                                            case "step-end":
                                                                break;
                                                            default:
                                                                u += Oe;
                                                        }
                                                }
                                            l[n++] = u;
                                        }
                                        o += (0 === a ? "" : ",") + l.join(" ");
                                    }
                            }
                            return (o = r + o + ";"), 1 === be || (2 === be && Be(o, 1)) ? w + o + o : o;
                        })(d);
                    if (0 === be || (2 === be && !Be(d, 1))) return d;
                    switch (f) {
                        case 1015:
                            return 97 === d.charCodeAt(10) ? w + d + d : d;
                        case 951:
                            return 116 === d.charCodeAt(3) ? w + d + d : d;
                        case 963:
                            return 110 === d.charCodeAt(5) ? w + d + d : d;
                        case 1009:
                            if (100 !== d.charCodeAt(4)) break;
                        case 969:
                        case 942:
                            return w + d + d;
                        case 978:
                            return w + d + j + d + d;
                        case 1019:
                        case 983:
                            return w + d + j + d + T + d + d;
                        case 883:
                            return d.charCodeAt(8) === G ? w + d + d : d.indexOf("image-set(", 11) > 0 ? d.replace(D, "$1" + w + "$2") + d : d;
                        case 932:
                            if (d.charCodeAt(4) === G)
                                switch (d.charCodeAt(5)) {
                                    case 103:
                                        return w + "box-" + d.replace("-grow", "") + w + d + T + d.replace("grow", "positive") + d;
                                    case 115:
                                        return w + d + T + d.replace("shrink", "negative") + d;
                                    case 98:
                                        return w + d + T + d.replace("basis", "preferred-size") + d;
                                }
                            return w + d + T + d + d;
                        case 964:
                            return w + d + T + "flex-" + d + d;
                        case 1023:
                            if (99 !== d.charCodeAt(8)) break;
                            return (u = d.substring(d.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")), w + "box-pack" + u + w + d + T + "flex-pack" + u + d;
                        case 1005:
                            return i.test(d) ? d.replace(o, ":" + w) + d.replace(o, ":" + j) + d : d;
                        case 1e3:
                            switch (((l = (u = d.substring(13).trim()).indexOf("-") + 1), u.charCodeAt(0) + u.charCodeAt(l))) {
                                case 226:
                                    u = d.replace(x, "tb");
                                    break;
                                case 232:
                                    u = d.replace(x, "tb-rl");
                                    break;
                                case 220:
                                    u = d.replace(x, "lr");
                                    break;
                                default:
                                    return d;
                            }
                            return w + d + T + u + d;
                        case 1017:
                            if (-1 === d.indexOf("sticky", 9)) return d;
                        case 975:
                            switch (((l = (d = e).length - 10), (f = (u = (33 === d.charCodeAt(l) ? d.substring(0, l) : d).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | u.charCodeAt(7))))) {
                                case 203:
                                    if (u.charCodeAt(8) < 111) break;
                                case 115:
                                    d = d.replace(u, w + u) + ";" + d;
                                    break;
                                case 207:
                                case 102:
                                    d = d.replace(u, w + (f > 102 ? "inline-" : "") + "box") + ";" + d.replace(u, w + u) + ";" + d.replace(u, T + u + "box") + ";" + d;
                            }
                            return d + ";";
                        case 938:
                            if (d.charCodeAt(5) === G)
                                switch (d.charCodeAt(6)) {
                                    case 105:
                                        return (u = d.replace("-items", "")), w + d + w + "box-" + u + T + "flex-" + u + d;
                                    case 115:
                                        return w + d + T + "flex-item-" + d.replace(N, "") + d;
                                    default:
                                        return w + d + T + "flex-line-pack" + d.replace("align-content", "").replace(N, "") + d;
                                }
                            break;
                        case 973:
                        case 989:
                            if (d.charCodeAt(3) !== G || 122 === d.charCodeAt(4)) break;
                        case 931:
                        case 953:
                            if (!0 === _.test(e))
                                return 115 === (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                                    ? Ye(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch")
                                    : d.replace(u, w + u) + d.replace(u, j + u.replace("fill-", "")) + d;
                            break;
                        case 962:
                            if (((d = w + d + (102 === d.charCodeAt(5) ? T + d : "") + d), n + r === 211 && 105 === d.charCodeAt(13) && d.indexOf("transform", 10) > 0))
                                return d.substring(0, d.indexOf(";", 27) + 1).replace(a, "$1" + w + "$2") + d;
                    }
                    return d;
                }
                function Be(e, t) {
                    var n = e.indexOf(1 === t ? ":" : "{"),
                        r = e.substring(0, 3 !== t ? n : 10),
                        o = e.substring(n + 1, e.length - 1);
                    return Ae(2 !== t ? r : r.replace(A, "$1"), o, t);
                }
                function Qe(e, t) {
                    var n = Ye(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                    return n !== t + ";" ? n.replace(C, " or ($1)").substring(4) : "(" + t + ")";
                }
                function He(e, t, n, r, o, i, a, c, s, u) {
                    for (var l, d = 0, f = t; d < Ne; ++d)
                        switch ((l = Ce[d].call(Ze, e, f, n, r, o, i, a, c, s, u))) {
                            case void 0:
                            case !1:
                            case !0:
                            case null:
                                break;
                            default:
                                f = l;
                        }
                    if (f !== t) return f;
                }
                function Ge(e, t, n, r) {
                    for (var o = t + 1; o < n; ++o)
                        switch (r.charCodeAt(o)) {
                            case X:
                                if (e === Z && r.charCodeAt(o - 1) === Z && t + 2 !== o) return o + 1;
                                break;
                            case P:
                                if (e === X) return o + 1;
                        }
                    return o;
                }
                function We(e) {
                    for (var t in e) {
                        var n = e[t];
                        switch (t) {
                            case "keyframe":
                                ke = 0 | n;
                                break;
                            case "global":
                                Me = 0 | n;
                                break;
                            case "cascade":
                                ye = 0 | n;
                                break;
                            case "compress":
                                ve = 0 | n;
                                break;
                            case "semicolon":
                                Ie = 0 | n;
                                break;
                            case "preserve":
                                xe = 0 | n;
                                break;
                            case "prefix":
                                (Ae = null), n ? ("function" != typeof n ? (be = 1) : ((be = 2), (Ae = n))) : (be = 0);
                        }
                    }
                    return We;
                }
                function Ze(t, n) {
                    if (void 0 !== this && this.constructor === Ze) return e(t);
                    var o = t,
                        i = o.charCodeAt(0);
                    i < 33 && (i = (o = o.trim()).charCodeAt(0)), ke > 0 && (Oe = o.replace(h, i === z ? "" : "-")), (i = 1), 1 === ye ? (ze = o) : (Fe = o);
                    var a,
                        c = [ze];
                    Ne > 0 && void 0 !== (a = He(De, n, c, c, ge, pe, 0, 0, 0, 0)) && "string" == typeof a && (n = a);
                    var s = Re(Se, c, n, 0, 0);
                    return (
                        Ne > 0 && void 0 !== (a = He(_e, s, c, c, ge, pe, s.length, 0, 0, 0)) && "string" != typeof (s = a) && (i = 0),
                        (Oe = ""),
                        (ze = ""),
                        (Fe = ""),
                        (me = 0),
                        (ge = 1),
                        (pe = 1),
                        ve * i == 0 ? s : s.replace(r, "").replace(y, "").replace(b, "$1").replace(M, "$1").replace(v, " ")
                    );
                }
                return (
                    (Ze.use = function e(t) {
                        switch (t) {
                            case void 0:
                            case null:
                                Ne = Ce.length = 0;
                                break;
                            default:
                                if ("function" == typeof t) Ce[Ne++] = t;
                                else if ("object" == typeof t) for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                                else Ee = 0 | !!t;
                        }
                        return e;
                    }),
                    (Ze.set = We),
                    void 0 !== t && We(t),
                    Ze
                );
            })(null);
        },
        function (e, t, n) {
            "use strict";
            var r = { childContextTypes: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
                o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
                i = Object.defineProperty,
                a = Object.getOwnPropertyNames,
                c = Object.getOwnPropertySymbols,
                s = Object.getOwnPropertyDescriptor,
                u = Object.getPrototypeOf,
                l = u && u(Object);
            e.exports = function e(t, n, d) {
                if ("string" != typeof n) {
                    if (l) {
                        var f = u(n);
                        f && f !== l && e(t, f, d);
                    }
                    var h = a(n);
                    c && (h = h.concat(c(n)));
                    for (var p = 0; p < h.length; ++p) {
                        var g = h[p];
                        if (!(r[g] || o[g] || (d && d[g]))) {
                            var m = s(n, g);
                            try {
                                i(t, g, m);
                            } catch (e) {}
                        }
                    }
                    return t;
                }
                return t;
            };
        },
        function (e, t) {
            e.exports = r;
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(21)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.getRecentSpaces = function (e) {
                            return n(r, { limit: 5 }, e);
                        };
                        var n = t.fetchWrapperCancellable,
                            r = "/rest/ia/latest/spacesmenu/recent";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r;
            void 0 ===
                (r = function (e) {
                    "use strict";
                    e.decodeHtmlEntity = function (e) {
                        return e
                            .replace(/&amp;/g, "&")
                            .replace(/&quot;/g, '"')
                            .replace(/&#39;/g, "'")
                            .replace(/&lt;/g, "<")
                            .replace(/&gt;/g, ">");
                    };
                }.apply(t, [t])) || (e.exports = r);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(27), n(43)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        e.BaseFilterStore = void 0;
                        var r,
                            o = ((r = t), r && r.__esModule ? r : { default: r }).default,
                            i = n.ThrottleDebounceService,
                            a = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })();
                        e.BaseFilterStore = (function () {
                            function e(t) {
                                var n = this,
                                    r = t.onChange,
                                    o = t.onFetching,
                                    a = t.onFilterChange,
                                    c = t.onResultsChange,
                                    s = t.onFetchError,
                                    u = t.onBeforeFetching,
                                    l = t.onBeforeFetchingCanceled;
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, e),
                                    (this._events = { onChange: r, onFilterChange: a, onResultsChange: c, onFetchError: s, onFetching: o, onBeforeFetching: u, onBeforeFetchingCanceled: l }),
                                    (this._isLoading = !1),
                                    (this._activeSearchPromises = new Set()),
                                    this._clearResultsSum(),
                                    (this._autoFetchOnFiltersChange = !1),
                                    (this._filters = this._getEmptyFilter()),
                                    (this.throttledDebounceExecute = new i({
                                        callback: function () {
                                            return n.executeFetchResults();
                                        },
                                    })),
                                    (this.defaultFetchStart = 0),
                                    (this.getTotalSize = this.getTotalSize.bind(this)),
                                    (this.getResults = this.getResults.bind(this)),
                                    (this.isFetching = this.isFetching.bind(this)),
                                    (this.fetchResults = this.fetchResults.bind(this)),
                                    (this.getFilter = this.getFilter.bind(this)),
                                    (this.setFilter = this.setFilter.bind(this)),
                                    (this.startAutoFetchOnFiltersChange = this.startAutoFetchOnFiltersChange.bind(this)),
                                    (this.stopAutoFetchOnFiltersChange = this.stopAutoFetchOnFiltersChange.bind(this)),
                                    (this._getFetchStart = this._getFetchStart.bind(this)),
                                    (this.isFetchingOnSameFilter = this.isFetchingOnSameFilter.bind(this)),
                                    (this.cancelCallbackAndPromises = this.cancelCallbackAndPromises.bind(this));
                            }
                            return (
                                a(e, [
                                    {
                                        key: "cancelCallbackAndPromises",
                                        value: function () {
                                            this._activeSearchPromises.forEach(function (e) {
                                                return e.cancel();
                                            }),
                                                this._activeSearchPromises.clear(),
                                                this.throttledDebounceExecute.cancel();
                                        },
                                    },
                                    {
                                        key: "isFetchingOnSameFilter",
                                        value: function () {
                                            return this.getFilter() === this._resultsSum.fetchFilter;
                                        },
                                    },
                                    {
                                        key: "startAutoFetchOnFiltersChange",
                                        value: function () {
                                            this._autoFetchOnFiltersChange = !0;
                                        },
                                    },
                                    {
                                        key: "stopAutoFetchOnFiltersChange",
                                        value: function () {
                                            this._autoFetchOnFiltersChange = !1;
                                        },
                                    },
                                    {
                                        key: "_clearResultsSum",
                                        value: function () {
                                            this._resultsSum = { isCanceled: !1, fetchFilter: void 0, results: [], totalSize: 0 };
                                        },
                                    },
                                    {
                                        key: "getTotalSize",
                                        value: function () {
                                            return this._resultsSum.totalSize;
                                        },
                                    },
                                    {
                                        key: "getResults",
                                        value: function () {
                                            return this._resultsSum.results;
                                        },
                                    },
                                    {
                                        key: "isResultsCanceled",
                                        value: function () {
                                            return !!this._resultsSum.isCanceled;
                                        },
                                    },
                                    {
                                        key: "getResultsExtra",
                                        value: function () {
                                            return this._resultsSum.extra;
                                        },
                                    },
                                    {
                                        key: "getFilter",
                                        value: function () {
                                            return this._filters;
                                        },
                                    },
                                    {
                                        key: "setFilter",
                                        value: function (e) {
                                            var t = this._filters;
                                            (this._filters = e), this._onFilterChanged({ prevFilter: t, newFilter: e }), (this._isLoading = !0);
                                        },
                                    },
                                    {
                                        key: "_setThrottledDebounceExecuteMode",
                                        value: function () {
                                            throw new Error("this is an abstract method");
                                        },
                                    },
                                    {
                                        key: "_setEmptyFilter",
                                        value: function () {
                                            throw new Error("this is an abstract method");
                                        },
                                    },
                                    {
                                        key: "_doFetch",
                                        value: function (e) {
                                            var t = e.start,
                                                n = e.fetchFilter;
                                            throw new Error("this is an abstract method", { start: t, fetchFilter: n });
                                        },
                                    },
                                    {
                                        key: "_getEmptyFilter",
                                        value: function () {
                                            throw new Error("this is an abstract method");
                                        },
                                    },
                                    {
                                        key: "isFetching",
                                        value: function () {
                                            return this._activeSearchPromises.size > 0;
                                        },
                                    },
                                    {
                                        key: "isLoading",
                                        value: function () {
                                            return this._isLoading;
                                        },
                                    },
                                    {
                                        key: "fetchResults",
                                        value: function () {
                                            this.throttledDebounceExecute.execute();
                                        },
                                    },
                                    {
                                        key: "_onFilterChanged",
                                        value: function (e) {
                                            var t = e.prevFilter;
                                            this._setThrottledDebounceExecuteMode();
                                            var n = this._events,
                                                r = n.onFilterChange,
                                                o = n.onChange;
                                            r({ prevFilter: t, filter: this.getFilter() }), o(), this._autoFetchOnFiltersChange && this.fetchResults();
                                        },
                                    },
                                    {
                                        key: "_getFetchStart",
                                        value: function () {
                                            return this.defaultFetchStart;
                                        },
                                    },
                                    {
                                        key: "_handleOnBeforeFetching",
                                        value: function () {
                                            var e = this._events,
                                                t = e.onBeforeFetching,
                                                n = e.onBeforeFetchingCanceled,
                                                r = !1;
                                            return t
                                                ? (t({
                                                      cancelable: !0,
                                                      preventDefault: function () {
                                                          r = !0;
                                                      },
                                                  }),
                                                  r && n && n(),
                                                  { isFetchCanceled: r })
                                                : { isFetchCanceled: r };
                                        },
                                    },
                                    {
                                        key: "_getOnBeforeFetchingCanceledFetchPromise",
                                        value: function () {
                                            return Object.assign(Promise.resolve({ totalSize: 0, start: 0, results: [], isCanceled: !0 }), { cancel: function () {} });
                                        },
                                    },
                                    {
                                        key: "executeFetchResults",
                                        value: function () {
                                            var e = this,
                                                t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).extendPromiseProperties,
                                                n = this.getFilter(),
                                                r = this._getFetchStart(),
                                                i = this._handleOnBeforeFetching().isFetchCanceled,
                                                a = i ? this._getOnBeforeFetchingCanceledFetchPromise() : this._doFetch({ start: r, fetchFilter: n }),
                                                c = a
                                                    .then(function (t) {
                                                        e._activeSearchPromises.delete(c), n === e.getFilter() && (e.cancelCallbackAndPromises(), e._setResponseJson({ responseJson: t || { isCanceled: !0 }, fetchFilter: n }));
                                                    })
                                                    .catch(function (t) {
                                                        e._activeSearchPromises.delete(c), o.log(t), (e._isLoading = !1), e._events.onFetchError(t);
                                                    });
                                            return Object.assign(c, t), this._activeSearchPromises.add(c), i || this._events.onFetching(), (c.cancel = a.cancel), c;
                                        },
                                    },
                                    {
                                        key: "_setResponseJson",
                                        value: function (e) {
                                            var t = e.responseJson,
                                                n = e.fetchFilter,
                                                r = this.getResults();
                                            this.mergeResponse({ responseJson: t, fetchFilter: n }), (this._isLoading = !1), this._events.onResultsChange({ results: this.getResults(), prevResut: r }), this._events.onChange();
                                        },
                                    },
                                    {
                                        key: "mergeResponse",
                                        value: function (e) {
                                            var t = e.responseJson,
                                                n = e.fetchFilter,
                                                r = t.isCanceled,
                                                o = void 0 !== r && r,
                                                i = t.totalSize,
                                                a = t.start,
                                                c = t.results,
                                                s = t.extra;
                                            if (o) this._resultsSum = { isCanceled: o, extra: s, fetchFilter: n, totalSize: 0, results: [] };
                                            else {
                                                var u =
                                                    this._resultsSum.fetchFilter === n
                                                        ? [].concat(
                                                              (function (e) {
                                                                  if (Array.isArray(e)) {
                                                                      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                                                      return n;
                                                                  }
                                                                  return Array.from(e);
                                                              })(this._resultsSum.results)
                                                          )
                                                        : [];
                                                c.forEach(function (e, t) {
                                                    u[t + a] = e;
                                                }),
                                                    (this._resultsSum = { isCanceled: o, extra: s, fetchFilter: n, totalSize: i, results: u });
                                            }
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(87), n(88)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        e.ThrottleDebounceService = void 0;
                        var r = i(t).default,
                            o = i(n).default;
                        function i(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var a = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t;
                            };
                        })();
                        e.ThrottleDebounceService = (function () {
                            function e(t) {
                                var n = t.callback,
                                    i = t.throttleWait,
                                    a = void 0 === i ? 300 : i,
                                    c = t.debounceWait,
                                    s = void 0 === c ? 500 : c;
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, e),
                                    (this.context = { callback: n }),
                                    (this.callbackThrottled = o(this._callbackCancelable, a)),
                                    (this.callbackDebounced = r(this._callbackCancelable, s)),
                                    (this._callback = this.callbackThrottled);
                            }
                            return (
                                a(e, [
                                    {
                                        key: "setThrottledMode",
                                        value: function () {
                                            this._callback !== this.callbackThrottled && (this._callback.cancel(), (this._callback = this.callbackThrottled));
                                        },
                                    },
                                    {
                                        key: "setDebounceMode",
                                        value: function () {
                                            this._callback !== this.callbackDebounced && (this._callback.cancel(), (this._callback = this.callbackDebounced));
                                        },
                                    },
                                    {
                                        key: "execute",
                                        value: function () {
                                            this._callback();
                                        },
                                    },
                                    {
                                        key: "cancel",
                                        value: function () {
                                            this._clearActivePromise(), this._callback.cancel();
                                        },
                                    },
                                    {
                                        key: "_callbackCancelable",
                                        value: function () {
                                            this._clearActivePromise(), (this._activePromise = this.context.callback());
                                        },
                                    },
                                    {
                                        key: "_clearActivePromise",
                                        value: function () {
                                            this._activePromise && this._activePromise.cancel && (this._activePromise.cancel(), (this._activePromise = null));
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            e.exports = o;
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(31), n(4), n(0), n(126), n(127)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i) {
                        "use strict";
                        var a = d(n).default,
                            c = d(r).default,
                            s = d(o).default,
                            u = o.Component,
                            l = d(i).default;
                        function d(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var f = {
                                "./SearchContentItem.css": {
                                    "search-content-item-component": "SearchContentItem_search-content-item-component__1k0hr",
                                    "content-text-container": "SearchContentItem_content-text-container__3tL5v",
                                    "content-image-container": "SearchContentItem_content-image-container__3uA1n",
                                    "content-default-image": "SearchContentItem_content-default-image__Fq_8K",
                                    "content-image": "SearchContentItem_content-image__2MAdK",
                                    "content-image-round": "SearchContentItem_content-image-round__1zwb6",
                                    "content-title": "SearchContentItem_content-title__tMLba",
                                    "content-subtitle": "SearchContentItem_content-subtitle__3bwT6",
                                    "content-body": "SearchContentItem_content-body__2ATd3",
                                },
                            },
                            h = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            p = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (n.onClick = n.onClick.bind(n)), n;
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, u),
                                    h(t, [
                                        {
                                            key: "onClick",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.position;
                                                (0, e.onClickSearchResult)(t);
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.iconCssClass,
                                                    n = e.url,
                                                    r = e.title,
                                                    o = e.subtitle,
                                                    i = e.date,
                                                    c = e.body,
                                                    u = e.imageUrl,
                                                    d = e.isImageRound,
                                                    h = e.onKeyDown,
                                                    p = r.replace(/(@@@hl@@@|@@@endhl@@@)/gm, "");
                                                return s.createElement(
                                                    "a",
                                                    { className: "search-drawer-list-item search-content-item-component SearchContentItem_search-content-item-component__1k0hr", href: n, onClick: this.onClick, onKeyDown: h },
                                                    s.createElement(
                                                        "div",
                                                        { className: "SearchContentItem_content-image-container__3uA1n" },
                                                        u && s.createElement("img", { src: u, alt: "avatar", className: a("content-image " + (d ? "content-image-round" : ""), f) }),
                                                        !u && s.createElement("div", { className: (t ? t + " " : "") + a("content-image " + (t ? "" : "content-default-image"), f) })
                                                    ),
                                                    s.createElement(
                                                        "div",
                                                        { className: "SearchContentItem_content-text-container__3tL5v" },
                                                        s.createElement("div", { className: "SearchContentItem_content-title__tMLba", title: p }, s.createElement(l, { content: r })),
                                                        s.createElement("div", { className: "SearchContentItem_content-subtitle__3bwT6" }, o && s.createElement("strong", null, o), s.createElement("span", null, i)),
                                                        c && s.createElement("div", { className: "SearchContentItem_content-body__2ATd3" }, s.createElement(l, { content: c }))
                                                    )
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (p.defaultProps = { subtitle: "", date: "", iconCssClass: "", imageUrl: "", body: "", isImageRound: !1, position: 0 }),
                            (p.propTypes = {
                                position: c.number,
                                url: c.string.isRequired,
                                title: c.string.isRequired,
                                subtitle: c.string,
                                date: c.string,
                                iconCssClass: c.string,
                                imageUrl: c.string,
                                body: c.string,
                                isImageRound: c.bool,
                                onClickSearchResult: c.func,
                                onKeyDown: c.func,
                            }),
                            (t.default = p),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            var n =
                ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                ("undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
            if (n) {
                var r = new Uint8Array(16);
                e.exports = function () {
                    return n(r), r;
                };
            } else {
                var o = new Array(16);
                e.exports = function () {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), (o[t] = (e >>> ((3 & t) << 3)) & 255);
                    return o;
                };
            }
        },
        function (e, t) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            e.exports = function (e, t) {
                var r = t || 0,
                    o = n;
                return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("");
            };
        },
        function (e, t, n) {
            "use strict";
            var r = n(143),
                o = n(144);
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.size = t.default = t.IconWrapper = void 0);
            var i = o(n(1)),
                a = o(n(8)),
                c = o(n(9)),
                s = o(n(12)),
                u = o(n(7)),
                l = o(n(13)),
                d = r(n(0)),
                f = o(n(2)),
                h = o(n(36)),
                p = n(5),
                g = n(153),
                m = function (e) {
                    return e.size ? "height: ".concat(g.sizes[e.size], "; width: ").concat(g.sizes[e.size], ";") : null;
                },
                y = f.default.span.withConfig({ displayName: "Icon__IconWrapper", componentId: "dyhwwi-0" })(
                    [
                        "\n  ",
                        " color: ",
                        ";\n  display: inline-block;\n  fill: ",
                        ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ",
                        " max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n",
                    ],
                    m,
                    function (e) {
                        return e.primaryColor || "currentColor";
                    },
                    function (e) {
                        return e.secondaryColor || p.colors.background;
                    },
                    m
                );
            t.IconWrapper = y;
            var b = (function (e) {
                function t() {
                    return (0, a.default)(this, t), (0, s.default)(this, (0, u.default)(t).apply(this, arguments));
                }
                return (
                    (0, l.default)(t, e),
                    (0, c.default)(
                        t,
                        [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        n = e.glyph,
                                        r = e.dangerouslySetGlyph,
                                        o = e.primaryColor,
                                        i = e.secondaryColor,
                                        a = e.size;
                                    return r
                                        ? d.default.createElement(y, { primaryColor: o, secondaryColor: i, size: a, "aria-label": this.props.label, dangerouslySetInnerHTML: { __html: t.insertDynamicGradientID(r) } })
                                        : d.default.createElement(y, { primaryColor: o, secondaryColor: i, size: a, "aria-label": this.props.label }, n ? d.default.createElement(n, { role: "presentation" }) : null);
                                },
                            },
                        ],
                        [
                            {
                                key: "insertDynamicGradientID",
                                value: function (e) {
                                    var t = (0, h.default)();
                                    return e.replace(/id="([^"]+)-idPlaceholder"/g, "id=$1-".concat(t)).replace(/fill="url\(#([^"]+)-idPlaceholder\)"/g, 'fill="url(#$1-'.concat(t, ')"'));
                                },
                            },
                        ]
                    ),
                    t
                );
            })(d.Component);
            t.default = b;
            var M = Object.keys(g.sizes).reduce(function (e, t) {
                return Object.assign(e, (0, i.default)({}, t, t));
            }, {});
            t.size = M;
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(39)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.AJSEventsHelper = void 0;
                        var n,
                            r = ((n = t), n && n.__esModule ? n : { default: n }).default,
                            o = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })();
                        e.AJSEventsHelper = (function () {
                            function e() {
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, e);
                            }
                            return (
                                o(e, null, [
                                    {
                                        key: "trigger",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                t = e.eventType,
                                                n = e.extraParameters;
                                            if (!t) throw new Error("AJSEventsHelper.trigger: eventType is mandatory");
                                            r.trigger("confluence-search-ui-plugin." + t, n);
                                        },
                                    },
                                    {
                                        key: "triggerShowPanelEvent",
                                        value: function () {
                                            e.trigger({ eventType: "show-search-panel" });
                                        },
                                    },
                                    {
                                        key: "triggerHidePanelEvent",
                                        value: function () {
                                            e.trigger({ eventType: "hide-search-panel" });
                                        },
                                    },
                                    {
                                        key: "triggerCodeInitializedEvent",
                                        value: function () {
                                            e.trigger({ eventType: "js-code-initialized" });
                                        },
                                    },
                                    {
                                        key: "triggerInitializedEvent",
                                        value: function () {
                                            e.trigger({ eventType: "initialized" });
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var r = i(n(0)),
                o = i(n(48));
            function i(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function a() {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var c = function (e) {
                return r.default.createElement(
                    o.default,
                    a(
                        {
                            dangerouslySetGlyph:
                                '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M6.735 12.322a1 1 0 0 0-1.47 1.356l3.612 3.919c.537.526 1.337.526 1.834.03l.364-.359a2335.638 2335.638 0 0 0 3.939-3.883l.04-.04a492.598 492.598 0 0 0 3.658-3.643 1 1 0 0 0-1.424-1.404 518.42 518.42 0 0 1-3.64 3.625l-.04.04a2049.114 2049.114 0 0 1-3.775 3.722l-3.098-3.363z" fill="currentColor"/></svg>',
                        },
                        e
                    )
                );
            };
            c.displayName = "CheckIcon";
            var s = c;
            t.default = s;
        },
        function (e, t, n) {
            "use strict";
            var r = n(147),
                o = /^ms-/;
            e.exports = function (e) {
                return r(e).replace(o, "-ms-");
            };
        },
        function (e, t, n) {
            e.exports = (function () {
                "use strict";
                return function (e) {
                    function t(t) {
                        if (t)
                            try {
                                e(t + "}");
                            } catch (e) {}
                    }
                    return function (n, r, o, i, a, c, s, u, l, d) {
                        switch (n) {
                            case 1:
                                if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                break;
                            case 2:
                                if (0 === u) return r + "/*|*/";
                                break;
                            case 3:
                                switch (u) {
                                    case 102:
                                    case 112:
                                        return e(o[0] + r), "";
                                    default:
                                        return r + (0 === d ? "/*|*/" : "");
                                }
                            case -2:
                                r.split("/*|*/}").forEach(t);
                        }
                    };
                };
            })();
        },
        function (e, t, n) {
            "use strict";
            e.exports = n(148);
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var r = i(n(0)),
                o = i(n(48));
            function i(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function a() {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var c = function (e) {
                return r.default.createElement(
                    o.default,
                    a(
                        {
                            dangerouslySetGlyph:
                                '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z" fill="currentColor"/></svg>',
                        },
                        e
                    )
                );
            };
            c.displayName = "CrossIcon";
            var s = c;
            t.default = s;
        },
        function (e, t, n) {
            n(7);
            var r = n(154);
            function o(t, n, i) {
                return (
                    "undefined" != typeof Reflect && Reflect.get
                        ? (e.exports = o = Reflect.get)
                        : (e.exports = o = function (e, t, n) {
                              var o = r(e, t);
                              if (o) {
                                  var i = Object.getOwnPropertyDescriptor(o, t);
                                  return i.get ? i.get.call(n) : i.value;
                              }
                          }),
                    o(t, n, i || t)
                );
            }
            e.exports = o;
        },
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(0), n(63), n(20), n(64), n(49)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i, a) {
                        "use strict";
                        var c = d(n).default,
                            s = r.render,
                            u = o.document,
                            l = d(i).default;
                        function d(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        a.AJSEventsHelper.triggerCodeInitializedEvent(),
                            (t.default = {
                                init: function () {
                                    var e = u.createElement("div");
                                    u.body.appendChild(e), s(c.createElement(l, null), e);
                                },
                            }),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            e.exports = i;
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(0), n(20), n(65), n(68), n(163), n(166), n(49), n(23), n(28)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i, a, c, s, u, l) {
                        "use strict";
                        var d = S(n).default,
                            f = n.Component,
                            h = r.document,
                            p = S(o).default,
                            g = S(i).default,
                            m = S(a).default,
                            y = S(c).default,
                            b = s.AJSEventsHelper,
                            M = u.SEARCH_UI_OPEN,
                            v = u.triggerAnalytic,
                            I = l.addTabKeyEventHandler,
                            x = l.removeTabKeyEventHandler;
                        function S(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var C = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            N = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (
                                        (n.state = { isPanelShown: !1, searchTerm: "" }),
                                        (n.inputElement = h.getElementById("quick-search-query")),
                                        (n.showSearchPanel = n.showSearchPanel.bind(n)),
                                        (n.hideSearchPanel = n.hideSearchPanel.bind(n)),
                                        (n.app = d.createRef()),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, f),
                                    C(t, [
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                this.inputElement.addEventListener("focus", this.showSearchPanel),
                                                    this.inputElement.addEventListener("click", this.showSearchPanel),
                                                    b.triggerInitializedEvent(),
                                                    this.showSearchPanel(),
                                                    I(this.app.current);
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                this.inputElement.removeEventListener("focus", this.showSearchPanel), this.inputElement.removeEventListener("click", this.showSearchPanel), x();
                                            },
                                        },
                                        {
                                            key: "showSearchPanel",
                                            value: function () {
                                                var e = this;
                                                this.setState({ isPanelShown: !0, searchTerm: this.inputElement.value }, function () {
                                                    (e.inputElement.value = ""), h.body.classList.add("confluence-search-ui"), b.triggerShowPanelEvent(), v(M), y.use();
                                                });
                                            },
                                        },
                                        {
                                            key: "hideSearchPanel",
                                            value: function () {
                                                this.setState({ isPanelShown: !1 }, function () {
                                                    h.body.classList.remove("confluence-search-ui"), b.triggerHidePanelEvent(), y.unuse();
                                                });
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.state,
                                                    t = e.isPanelShown,
                                                    n = e.searchTerm;
                                                return d.createElement(
                                                    "div",
                                                    { className: p["search-ui-app"], ref: this.app },
                                                    t ? d.createElement(m, { onPanelHide: this.hideSearchPanel }, d.createElement(g, { initSearchTerm: n })) : null
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (t.default = N), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(66);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".App_search-ui-app__1LGa5 {\n    color: #42526E;\n}\n\n.App_search-ui-app__1LGa5 a:hover {\n    color: #0065ff;\n    text-decoration: underline;\n}\n\n.App_search-ui-app__1LGa5 input[type='text'] {\n    border: 0;\n    color: #42526e;\n    padding: 0;\n    margin: 0;\n    background: white;\n}\n\n.App_search-ui-app__1LGa5 input[type='text']:focus {\n    color: #172B4D;\n    outline: 0;\n    background: white;\n}\n\n.App_search-ui-app__1LGa5 input[type='text']::-webkit-input-placeholder {\n    color: #8993A4;\n    font-weight: 400;\n}\n\n.App_search-ui-app__1LGa5 input[type='text']:-ms-input-placeholder {\n    color: #8993A4;\n    font-weight: 400;\n}\n\n.App_search-ui-app__1LGa5 input[type='text']::-ms-input-placeholder {\n    color: #8993A4;\n    font-weight: 400;\n}\n\n.App_search-ui-app__1LGa5 input[type='text']::placeholder {\n    color: #8993A4;\n    font-weight: 400;\n}\n\n.App_search-ui-app__1LGa5 [class^='confluence-icon-'] {\n    margin-top: 1px;\n}\n",
                "",
            ]),
                (t.locals = { "search-ui-app": "App_search-ui-app__1LGa5" });
        },
        function (e, t) {
            e.exports = function (e) {
                var t = "undefined" != typeof window && window.location;
                if (!t) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var n = t.protocol + "//" + t.host,
                    r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                    var o,
                        i = t
                            .trim()
                            .replace(/^"(.*)"$/, function (e, t) {
                                return t;
                            })
                            .replace(/^'(.*)'$/, function (e, t) {
                                return t;
                            });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : ((o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, "")), "url(" + JSON.stringify(o) + ")");
                });
            };
        },
        function (e, t, n) {
            var r, o;
            (r = [
                e,
                t,
                n(17),
                n(27),
                n(4),
                n(0),
                n(20),
                n(71),
                n(73),
                n(74),
                n(40),
                n(75),
                n(76),
                n(79),
                n(80),
                n(81),
                n(82),
                n(83),
                n(84),
                n(24),
                n(85),
                n(89),
                n(23),
                n(28),
                n(96),
                n(29),
                n(98),
                n(30),
                n(104),
                n(105),
                n(124),
                n(139),
                n(161),
            ]),
                void 0 ===
                    (o = function (e, t, n, r, o, i, a, c, s, u, l, d, f, h, p, g, m, y, b, M, v, I, x, S, C, N, A, _, D, w, j, T) {
                        "use strict";
                        var L = n.CONTEXT_PATH,
                            E = be(r).default,
                            k = be(o).default,
                            O = be(i).default,
                            F = i.Component,
                            z = a.window,
                            R = c.getContentTypes,
                            P = s.getContributors,
                            U = u.getLabels,
                            Y = u.getSpaceCategories,
                            B = l.getRecentSpaces,
                            Q = d.getSpaces,
                            H = be(f).default,
                            G = h.mapContentNameSearchItem,
                            W = be(p).default,
                            Z = be(g).default,
                            q = be(m).default,
                            K = be(y).default,
                            J = b.mapRecentSpacesToCheckboxes,
                            V = b.mapSearchSpacesToCheckboxes,
                            X = be(M).default,
                            $ = v.ContentNameSearchStore,
                            ee = I.SearchFilterStore,
                            te = x.generateUUID,
                            ne = x.SEARCH_UI_GO_TO_ADVANCE_SEARCH,
                            re = x.triggerAnalytic,
                            oe = S.handleKeyDownOnListItem,
                            ie = S.handleKeyDownOnTypeahead,
                            ae = S.updateFocusableElements,
                            ce = C.getHelpTitle,
                            se = C.getHelpUrl,
                            ue = N.getCurrentUserMeta,
                            le = N.isAllowedToBrowseUsers,
                            de = N.isCurrentUserAnonymous,
                            fe = A.reorderToCurrentSpaceFirst,
                            he = be(_).default,
                            pe = be(D).default,
                            ge = be(w).default,
                            me = be(j).default,
                            ye = be(T).default;
                        function be(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        function Me(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n;
                            }
                            return Array.from(e);
                        }
                        var ve = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            Ie = { id: "", text: X.get("search.ui.filter.date.all.text"), value: "" },
                            xe = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (
                                        n._initFilterStores(),
                                        (n.initContributors = []),
                                        (n.defaultTypeIds = []),
                                        (n.isRequestDiscarded = !0),
                                        (n.helpLinkContext = { title: ce(), url: se() }),
                                        (n._i18n = {
                                            typeaheadLabel: X.get("search.ui.input.label"),
                                            filtersHeading: X.get("search.ui.filters.heading"),
                                            advancedSearchLinkText: X.get("search.ui.advanced.search.link.text"),
                                            filterLabel: " " + X.get("search.ui.filter.label"),
                                            spaceButtonText: X.get("search.ui.filter.space.button.text"),
                                            spaceInputLabel: X.get("search.ui.filter.space.input.label"),
                                            currentSpaceLabel: X.get("search.ui.filter.space.current.label"),
                                            archiveToggleLabel: X.get("search.ui.filter.space.archive.label"),
                                            contributorButtonText: X.get("search.ui.filter.contributor.button.text"),
                                            contributorInputLabel: X.get("search.ui.filter.contributor.input.label"),
                                            spaceInitHeading: X.get("search.ui.filter.space.init.heading"),
                                            contentTypeButtonText: X.get("search.ui.filter.content.type.button.text"),
                                            clearSelectedTitle: X.get("search.ui.filter.clear.selected"),
                                            dateFilterButtonText: X.get("search.ui.filter.date.button.text"),
                                            dateFilterHeading: X.get("search.ui.filter.date.heading"),
                                            dateFilterHourText: X.get("search.ui.filter.date.hour.text"),
                                            dateFilterWeekText: X.get("search.ui.filter.date.week.text"),
                                            dateFilterMonthText: X.get("search.ui.filter.date.month.text"),
                                            dateFilterYearText: X.get("search.ui.filter.date.year.text"),
                                            labelFilterButtonText: X.get("search.ui.filter.label.button.text"),
                                            labelFilterInputLabel: X.get("search.ui.filter.label.input.label"),
                                            spaceCategoryFilterButtonText: X.get("search.ui.filter.space.category.button.text"),
                                            spaceCategoryFilterInputLabel: X.get("search.ui.filter.space.category.input.label"),
                                            searchUIGenericError: X.get("search.ui.generic.error"),
                                            notFoundText: X.get("search.ui.filter.no.result.text"),
                                            closeSearchDialogueText: X.get("su.custom.search.close.text"),
                                        }),
                                        (n.state = {
                                            showContributorFilter: le(),
                                            encodedCqlQuery: "",
                                            searchTerm: "",
                                            isLoading: !1,
                                            isLoadingMore: !1,
                                            isLoadingContentNameItems: !1,
                                            showRecentPanel: !0,
                                            hasError: !1,
                                            searchId: "",
                                            recentSpaces: [],
                                            searchResults: [],
                                            contentTypes: [],
                                            searchFilterStoreIsNoFetchFilter: !0,
                                            searchFilterStoreIsNoFetchFilterWithoutSearchText: !0,
                                            selectedFilters: t.createEmptySelectedFilters(),
                                        }),
                                        (n.pendingCancellablePromises = new Set()),
                                        (n.clearSearchTerm = n.clearSearchTerm.bind(n)),
                                        (n._onLoadAllTopItemsClicked = n._onLoadAllTopItemsClicked.bind(n)),
                                        (n._clearFiltersWithoutSearchText = n._clearFiltersWithoutSearchText.bind(n)),
                                        (n.inputRef = O.createRef()),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, F),
                                    ve(t, null, [
                                        {
                                            key: "createEmptySelectedFilters",
                                            value: function () {
                                                return { spaces: new Set(), contributors: new Set(), contentTypes: new Set(), date: new Set([Ie.id]), labels: new Set(), spaceCategory: new Set() };
                                            },
                                        },
                                    ]),
                                    ve(
                                        t,
                                        [
                                            {
                                                key: "componentDidMount",
                                                value: function () {
                                                    var e = this,
                                                        t = this.props.initSearchTerm;
                                                    if (!de()) {
                                                        this.initContributors = [ue()];
                                                        var n = B();
                                                        this.pendingCancellablePromises.add(n),
                                                            n
                                                                .then(function (t) {
                                                                    if ((e.pendingCancellablePromises.delete(n), t)) {
                                                                        var r = fe(t),
                                                                            o = t === r ? void 0 : r[0];
                                                                        e.setState({ recentSpaces: J({ spaces: r, currentSpaceLozengeText: e._i18n.currentSpaceLabel, currentSpace: o }) });
                                                                    }
                                                                })
                                                                .catch(function () {
                                                                    return e.pendingCancellablePromises.delete(n);
                                                                });
                                                    }
                                                    var r = R();
                                                    this.pendingCancellablePromises.add(r),
                                                        r
                                                            .then(function (t) {
                                                                if ((e.pendingCancellablePromises.delete(r), t)) {
                                                                    var n = W(t);
                                                                    e.setState({ contentTypes: n }),
                                                                        (e.defaultTypeIds = n
                                                                            .filter(function (e) {
                                                                                return "comment" !== e.id;
                                                                            })
                                                                            .map(function (e) {
                                                                                return e.id;
                                                                            })),
                                                                        e.searchFilterStore.setNoFetchFilter({ contentTypes: e.defaultTypeIds }),
                                                                        e.searchFilterStore.setFilter({ contentTypes: e.defaultTypeIds });
                                                                }
                                                            })
                                                            .catch(function () {
                                                                return e.pendingCancellablePromises.delete(r);
                                                            }),
                                                        this.inputRef.current.focus(),
                                                        this.inputRef.current.click(),
                                                        t && ((this.inputRef.current.value = t), this.setState({ isLoading: !0 }), this.setSearchFilter.searchText({ target: { value: t } }));
                                                },
                                            },
                                            {
                                                key: "componentWillUnmount",
                                                value: function () {
                                                    this.pendingCancellablePromises.forEach(function (e) {
                                                        return e.cancel();
                                                    }),
                                                        this._clearStores();
                                                },
                                            },
                                            {
                                                key: "clearSearchTerm",
                                                value: function () {
                                                    this.setSearchFilter.searchText({ target: { value: "" } }), this.inputRef.current.focus();
                                                },
                                            },
                                            {
                                                key: "_clearStores",
                                                value: function () {
                                                    this.searchFilterStore.cancelCallbackAndPromises(), this.contentNameSearchStore.cancelCallbackAndPromises();
                                                },
                                            },
                                            {
                                                key: "_calcFetchingState",
                                                value: function () {
                                                    var e = this.contentNameSearchStore.isLoading(),
                                                        t = this.searchFilterStore.isFetchingMore(),
                                                        n = !t && (this.searchFilterStore.isLoading() || this.contentNameSearchStore.isLoading());
                                                    this.setState({ isLoading: n, isLoadingMore: t, isLoadingContentNameItems: e }, ae);
                                                },
                                            },
                                            {
                                                key: "_initFilterStores",
                                                value: function () {
                                                    var e = this;
                                                    (this.contentNameSearchStore = new $({
                                                        onChange: function () {
                                                            e._calcFetchingState();
                                                        },
                                                        onFilterChange: function () {
                                                            e._calcFetchingState();
                                                        },
                                                        onFetching: function () {
                                                            e._calcFetchingState();
                                                        },
                                                        onResultsChange: function () {
                                                            if (!e.isRequestDiscarded) {
                                                                var t = e.contentNameSearchStore.getResults().map(G);
                                                                e.setState({ contentNameSearchHasError: !1, contentNameSearchContents: t }), e._calcFetchingState();
                                                            }
                                                        },
                                                        onFetchError: function (t) {
                                                            e.setState({ contentNameSearchHasError: !0 }), e._calcFetchingState(), E.error(t);
                                                        },
                                                    })),
                                                        (this.searchFilterStore = new ee({
                                                            onChange: function () {},
                                                            onFilterChange: function () {},
                                                            onBeforeFetchingCanceled: function () {
                                                                e.contentNameSearchStore.startAutoFetchOnFiltersChange(),
                                                                    e.contentNameSearchStore.setFilter({ searchText: e.searchFilterStore.getFilter().searchText }),
                                                                    e._calcFetchingState();
                                                            },
                                                            onFetching: function () {
                                                                e.contentNameSearchStore.startAutoFetchOnFiltersChange(),
                                                                    e.contentNameSearchStore.setFilter({ searchText: e.searchFilterStore.getFilter().searchText }),
                                                                    e._calcFetchingState();
                                                            },
                                                            onResultsChange: function () {
                                                                if (((e.isRequestDiscarded = e.searchFilterStore.isResultsCanceled()), e._calcFetchingState(), !e.isRequestDiscarded)) {
                                                                    var t = te(),
                                                                        n = e.searchFilterStore.getResults(),
                                                                        r = H({ results: n }, t),
                                                                        o = e.searchFilterStore.getTotalSize();
                                                                    e.setState({ searchResults: r, totalSize: o, searchId: t, hasError: !1 }, ae);
                                                                }
                                                            },
                                                            onFetchError: function (t) {
                                                                e.setState({ hasError: !0 }), e._calcFetchingState(), E.error(t);
                                                            },
                                                        })),
                                                        (this.setSearchFilter = {
                                                            setFilter: function (t) {
                                                                if (z.navigator.onLine) {
                                                                    e.searchFilterStore.startAutoFetchOnFiltersChange(), e.searchFilterStore.setFilter(t), e._calcFetchingState(), (e.isRequestDiscarded = !1);
                                                                    var n = e.searchFilterStore.isNoFetchFilter(),
                                                                        r = e.searchFilterStore.isNoFetchFilter({ withSearchText: !1 }),
                                                                        o = !n;
                                                                    e.setState({
                                                                        hasError: !1,
                                                                        searchFilterStoreIsNoFetchFilter: n,
                                                                        searchFilterStoreIsNoFetchFilterWithoutSearchText: r,
                                                                        isLoading: o || e.contentNameSearchStore.isLoading(),
                                                                        showRecentPanel: !o,
                                                                        encodedCqlQuery: encodeURIComponent(e.searchFilterStore.getCqlQuery()),
                                                                    });
                                                                } else e.setState({ hasError: !0 });
                                                            },
                                                            searchText: function (t) {
                                                                var n = t.target.value;
                                                                return e.setState({ searchTerm: n }, function () {
                                                                    return e.setSearchFilter.setFilter({ searchText: n });
                                                                });
                                                            },
                                                            spaces: function (t) {
                                                                e.contentNameSearchStore.disable(), e.setSearchFilter.setFilter({ spaces: [].concat(Me(t)) });
                                                            },
                                                            contributors: function (t) {
                                                                e.contentNameSearchStore.disable(), e.setSearchFilter.setFilter({ contributors: [].concat(Me(t)) });
                                                            },
                                                            contentTypesIds: function (t) {
                                                                e.contentNameSearchStore.disable(), t.size ? e.setSearchFilter.setFilter({ contentTypes: [].concat(Me(t)) }) : e.setSearchFilter.setFilter({ contentTypes: e.defaultTypeIds });
                                                            },
                                                            date: function (t) {
                                                                e.contentNameSearchStore.disable(), e.setSearchFilter.setFilter({ date: t.value });
                                                            },
                                                            labels: function (t) {
                                                                e.contentNameSearchStore.disable(), e.setSearchFilter.setFilter({ labels: [].concat(Me(t)) });
                                                            },
                                                            spaceCategories: function (t) {
                                                                e.contentNameSearchStore.disable(), e.setSearchFilter.setFilter({ spaceCategories: [].concat(Me(t)) });
                                                            },
                                                            archive: function (t) {
                                                                e.contentNameSearchStore.disable(), e.setSearchFilter.setFilter({ archive: t.target.checked });
                                                            },
                                                        });
                                                },
                                            },
                                            {
                                                key: "_clearFiltersWithoutSearchText",
                                                value: function () {
                                                    var e = this;
                                                    this.setState({ selectedFilters: t.createEmptySelectedFilters() }, function () {
                                                        return e.inputRef.current.focus();
                                                    });
                                                },
                                            },
                                            {
                                                key: "_onLoadAllTopItemsClicked",
                                                value: function () {
                                                    this.contentNameSearchStore.isEnabled() && this.contentNameSearchStore.loadAllTopItems();
                                                },
                                            },
                                            {
                                                key: "_getNoItemsFoundLabel",
                                                value: function () {
                                                    var e = this.state,
                                                        t = e.searchTerm;
                                                    return e.searchFilterStoreIsNoFetchFilterWithoutSearchText
                                                        ? X.get("search.ui.search.results.empty", t)
                                                        : O.createElement(
                                                              O.Fragment,
                                                              null,
                                                              X.get("search.ui.search.results.clear.line1"),
                                                              O.createElement("br", null),
                                                              X.get("search.ui.search.results.clear.line2"),
                                                              O.createElement(
                                                                  "button",
                                                                  { className: "aui-button aui-button-link SearchContainer_empty-search-clear-filter-button__mtqCF", type: "button", onClick: this._clearFiltersWithoutSearchText },
                                                                  X.get("search.ui.search.results.clear.button")
                                                              )
                                                          );
                                                },
                                            },
                                            {
                                                key: "render",
                                                value: function () {
                                                    var e = this.state,
                                                        n = e.contentNameSearchHasError,
                                                        r = e.contentNameSearchContents,
                                                        o = e.isLoadingContentNameItems,
                                                        i = e.showRecentPanel,
                                                        a = e.isLoading,
                                                        c = e.recentSpaces,
                                                        s = e.contentTypes,
                                                        u = e.searchResults,
                                                        l = e.isLoadingMore,
                                                        d = e.totalSize,
                                                        f = e.searchTerm,
                                                        h = e.searchId,
                                                        p = e.hasError,
                                                        g = e.encodedCqlQuery,
                                                        m = e.showContributorFilter,
                                                        y = e.searchFilterStoreIsNoFetchFilter,
                                                        b = e.selectedFilters,
                                                        M = y ? "" : "cql=" + g + "&",
                                                        v = {
                                                            items: r,
                                                            isLoading: o,
                                                            hasError: n,
                                                            isEnabled: this.contentNameSearchStore.isEnabled(),
                                                            isAllTopItemsLoaded: this.contentNameSearchStore.isAllTopItemsLoaded(),
                                                            isMoreItemsAvailable: this.contentNameSearchStore.isMoreItemsAvailable(),
                                                            onLoadAllTopItemsClicked: this._onLoadAllTopItemsClicked,
                                                        },
                                                        I = this._i18n,
                                                        x = this.helpLinkContext;
                                                    return O.createElement(
                                                        "div",
                                                        { className: "search-container-component" },
                                                        O.createElement(
                                                            "div",
                                                            { className: "SearchContainer_search-typeahead-container__27oDw" },
                                                            O.createElement(
                                                                "div",
                                                                { className: "SearchContainer_search-typeahead-inner__Y4xnr" },
                                                                O.createElement("input", {
                                                                    id: "search-filter-input",
                                                                    type: "text",
                                                                    value: f,
                                                                    "aria-label": I.typeaheadLabel,
                                                                    placeholder: I.typeaheadLabel,
                                                                    onChange: this.setSearchFilter.searchText,
                                                                    ref: this.inputRef,
                                                                    onKeyDown: ie,
                                                                    maxLength: "2048",
                                                                    autoComplete: "off",
                                                                }),
                                                                O.createElement(
                                                                    "span",
                                                                    { className: "SearchContainer_input-icon__w2iG7" },
                                                                    !f && O.createElement("span", { className: "aui-icon aui-icon-small aui-iconfont-search" }),
                                                                    f &&
                                                                        O.createElement(
                                                                            "button",
                                                                            { type: "button", id: "search-ui-input-clear-button", className: "aui-icon aui-icon-small aui-iconfont-cross", onClick: this.clearSearchTerm },
                                                                            X.clearButtonText
                                                                        )
                                                                )
                                                            )
                                                        ),
                                                        O.createElement(
                                                            "div",
                                                            { className: "SearchContainer_search-filter-list-container__2-0j7" },
                                                            O.createElement("div", { className: "aui-nav-heading SearchContainer_aui-nav-heading__3tN94" }, I.filtersHeading),
                                                            O.createElement(ye, {
                                                                icon: "aui-iconfont-folder-filled",
                                                                idPrefix: "content-space-",
                                                                buttonText: I.spaceButtonText,
                                                                inputLabel: I.spaceInputLabel,
                                                                placeholder: I.spaceInputLabel,
                                                                label: I.spaceButtonText + I.filterLabel,
                                                                showFilter: !0,
                                                                showHeading: !0,
                                                                initHeading: I.spaceInitHeading,
                                                                clearSelectedTitle: I.clearSelectedTitle,
                                                                initItems: c,
                                                                typeaheadApi: Q,
                                                                checkboxMapper: V,
                                                                onItemSelect: this.setSearchFilter.spaces,
                                                                notFoundText: I.notFoundText,
                                                                isToggleShown: !0,
                                                                onToggleChange: this.setSearchFilter.archive,
                                                                toggleId: "search-panel-archived-spaces-toggle",
                                                                toggleLabel: I.archiveToggleLabel,
                                                                selectedItemsIds: b.spaces,
                                                            }),
                                                            m &&
                                                                O.createElement(ye, {
                                                                    icon: "aui-iconfont-person-circle",
                                                                    idPrefix: "content-contributor-",
                                                                    buttonText: I.contributorButtonText,
                                                                    inputLabel: I.contributorInputLabel,
                                                                    placeholder: I.contributorInputLabel,
                                                                    label: I.contributorButtonText + I.filterLabel,
                                                                    showFilter: !0,
                                                                    showHeading: !0,
                                                                    isRound: !0,
                                                                    initHeading: "",
                                                                    clearSelectedTitle: I.clearSelectedTitle,
                                                                    initItems: this.initContributors,
                                                                    typeaheadApi: P,
                                                                    checkboxMapper: Z,
                                                                    onItemSelect: this.setSearchFilter.contributors,
                                                                    notFoundText: I.notFoundText,
                                                                    selectedItemsIds: b.contributors,
                                                                }),
                                                            O.createElement(ye, {
                                                                icon: "aui-iconfont-image",
                                                                idPrefix: "content-type-",
                                                                buttonText: I.contentTypeButtonText,
                                                                label: I.contentTypeButtonText + I.filterLabel,
                                                                showFilter: !1,
                                                                showHeading: !1,
                                                                initItems: s,
                                                                checkboxMapper: W,
                                                                onItemSelect: this.setSearchFilter.contentTypesIds,
                                                                initSelectedItems: [],
                                                                selectedItemsIds: b.contentTypes,
                                                            }),
                                                            O.createElement(ye, {
                                                                icon: "aui-iconfont-calendar",
                                                                idPrefix: "date-",
                                                                buttonText: I.dateFilterButtonText,
                                                                label: I.dateFilterButtonText + I.filterLabel,
                                                                showFilter: !1,
                                                                showHeading: !0,
                                                                initHeading: I.dateFilterHeading,
                                                                initItems: [
                                                                    { id: 'now("-1d")', text: I.dateFilterHourText, value: 'now("-1d")' },
                                                                    { id: 'now("-1w")', text: I.dateFilterWeekText, value: 'now("-1w")' },
                                                                    { id: 'now("-1M")', text: I.dateFilterMonthText, value: 'now("-1M")' },
                                                                    { id: 'now("-1y")', text: I.dateFilterYearText, value: 'now("-1y")' },
                                                                    Ie,
                                                                ],
                                                                checkboxMapper: q,
                                                                onItemSelect: this.setSearchFilter.date,
                                                                hasCheckbox: !1,
                                                                selectedItemsIds: b.date,
                                                            }),
                                                            O.createElement(ye, {
                                                                icon: "aui-iconfont-tag",
                                                                idPrefix: "label-",
                                                                buttonText: I.labelFilterButtonText,
                                                                inputLabel: I.labelFilterInputLabel,
                                                                placeholder: I.labelFilterInputLabel,
                                                                label: I.labelFilterButtonText + I.labelFilterInputLabel,
                                                                showFilter: !0,
                                                                clearSelectedTitle: I.clearSelectedTitle,
                                                                typeaheadApi: U,
                                                                checkboxMapper: K,
                                                                onItemSelect: this.setSearchFilter.labels,
                                                                notFoundText: I.notFoundText,
                                                                selectedItemsIds: b.labels,
                                                            }),
                                                            O.createElement(ye, {
                                                                icon: "aui-iconfont-submodule",
                                                                idPrefix: "space-category-",
                                                                buttonText: I.spaceCategoryFilterButtonText,
                                                                inputLabel: I.spaceCategoryFilterInputLabel,
                                                                placeholder: I.spaceCategoryFilterInputLabel,
                                                                label: I.labelFilterButtonText + I.spaceCategoryFilterInputLabel,
                                                                showFilter: !0,
                                                                clearSelectedTitle: I.clearSelectedTitle,
                                                                typeaheadApi: Y,
                                                                checkboxMapper: K,
                                                                onItemSelect: this.setSearchFilter.spaceCategories,
                                                                notFoundText: I.notFoundText,
                                                                selectedItemsIds: b.spaceCategory,
                                                            }),
                                                            O.createElement(
                                                                "a",
                                                                {
                                                                    className: "SearchContainer_more-options__6KHOW",
                                                                    href: L + "/dosearchsite.action?" + M + "includeArchivedSpaces=" + this.searchFilterStore.getFilter().archive,
                                                                    onClick: t.onClickAdvanceFilter,
                                                                },
                                                                I.advancedSearchLinkText
                                                            ),
                                                            O.createElement(
                                                                "div",
                                                                { className: "SU_CUSTOM_CLOSE_DIALOGUE_CONTAINER" },
                                                                O.createElement("div", { className: "SU_CUSTOM_CLOSE_DIALOGUE_INNER" }, O.createElement("span", { className: "SU_CUSTOM_CLOSE_DIALOGUE_TEXT" }, I.closeSearchDialogueText))
                                                            )
                                                        ),
                                                        O.createElement(
                                                            "div",
                                                            { className: "SearchContainer_search-content-container__2NKaj" },
                                                            O.createElement("a", { className: "SearchContainer_search-help-link__YyZVM", href: x.url, target: "_blank", rel: "noopener noreferrer" }, x.title),
                                                            p
                                                                ? O.createElement(he, { imageClass: "error-search-content", caption: I.searchUIGenericError })
                                                                : O.createElement(
                                                                      pe,
                                                                      null,
                                                                      a && !i && O.createElement("aui-spinner", null),
                                                                      i && !a && O.createElement(ge, { onKeyDown: oe }),
                                                                      !a &&
                                                                          !i &&
                                                                          void 0 !== d &&
                                                                          O.createElement(me, {
                                                                              searchItems: u,
                                                                              totalSize: d,
                                                                              loadMoreItems: this.searchFilterStore.fetchMore,
                                                                              isLoadingMore: l,
                                                                              searchId: h,
                                                                              searchFilters: this.searchFilterStore.getFilter(),
                                                                              contentNameSearchItemsContext: v,
                                                                              noItemsFoundLabel: this._getNoItemsFoundLabel(),
                                                                              onKeyDown: oe,
                                                                          })
                                                                  )
                                                        )
                                                    );
                                                },
                                            },
                                        ],
                                        [
                                            {
                                                key: "onClickAdvanceFilter",
                                                value: function () {
                                                    re(ne);
                                                },
                                            },
                                        ]
                                    ),
                                    t
                                );
                            })();
                        (xe.propTypes = { initSearchTerm: k.string }), (xe.defaultProps = { initSearchTerm: "" }), (t.default = xe), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            "use strict";
            var r = n(70);
            function o() {}
            function i() {}
            (i.resetWarningCache = o),
                (e.exports = function () {
                    function e(e, t, n, o, i, a) {
                        if (a !== r) {
                            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw ((c.name = "Invariant Violation"), c);
                        }
                    }
                    function t() {
                        return e;
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: o,
                    };
                    return (n.PropTypes = n), n;
                });
        },
        function (e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(21)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.getContentTypes = function (e) {
                            return n(r, { category: "all" }, e);
                        };
                        var n = t.fetchWrapperCancellable,
                            r = "/rest/cql/contenttypes";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            e.exports = a;
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(34), n(21)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        e.getContributors = function (e, t) {
                            var n = r(e.trim());
                            return o(i, { cql: '(title ~ "' + n + '*" OR user ~ "' + n + '*") AND type = "user"', expand: "space.icon", start: 0, limit: 5, excerpt: "highlight", includeArchivedSpaces: !1, src: "next.ui.search" }, t);
                        };
                        var r = t.escapeCqlField,
                            o = n.fetchWrapper,
                            i = "/rest/api/search";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(21)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        (e.getLabels = function (e, t) {
                            return n(r, { query: e, maxResults: 5, ignoreRelated: !0 }, t);
                        }),
                            (e.getSpaceCategories = function (e, t) {
                                return n(r, { query: e, maxResults: 5, ignoreRelated: !0, isTeamLabel: !0 }, t);
                            });
                        var n = t.fetchWrapper,
                            r = "/labels/autocompletelabel.action";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(34), n(21)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        e.getSpaces = function (e, t) {
                            var n = r(e.trim());
                            return o(i, { cql: '(title ~ "' + n + '" OR title ~ "' + n + '*") AND type = "space"', expand: "space.icon", start: 0, limit: 5, excerpt: "highlight", includeArchivedSpaces: !1, src: "next.ui.search" }, t);
                        };
                        var r = t.escapeCqlField,
                            o = n.fetchWrapper,
                            i = "/rest/api/search";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(17), n(24), n(23), n(41)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i) {
                        "use strict";
                        var a,
                            c = n.CONTEXT_PATH,
                            s = ((a = r), a && a.__esModule ? a : { default: a }).default,
                            u = o.configAnalyticURL,
                            l = i.decodeHtmlEntity,
                            d = "user",
                            f = s.get("search.ui.result.subtitle.space"),
                            h = s.get("search.ui.result.subtitle.user"),
                            p = s.get("search.ui.result.subtitle.calendar");
                        (t.default = function (e, t) {
                            return e.results.map(function (e) {
                                return (function (e, t) {
                                    var n = e.content,
                                        r = e.entityType,
                                        o = e.title,
                                        i = e.url,
                                        a = e.excerpt,
                                        s = e.iconCssClass,
                                        g = e.friendlyLastModified,
                                        m = e.space,
                                        y = e.user,
                                        b = "",
                                        M = "",
                                        v = "";
                                    return (
                                        "space" === r
                                            ? ((b = f), (M = c + m.icon.path))
                                            : r === d
                                            ? ((b = h), (M = y.profilePicture.path.replace("/_" + c, "/_")))
                                            : "com.atlassian.confluence.extra.team-calendars:space-calendars-view-content-type" === n.type
                                            ? (b = p)
                                            : "com.atlassian.confluence.plugins.confluence-questions:question" === n.type || "com.atlassian.confluence.plugins.confluence-questions:answer" === n.type
                                            ? (v = g)
                                            : ((v = g),
                                              e.breadcrumbs && e.breadcrumbs.length > 0
                                                  ? (b = e.breadcrumbs
                                                        .map(function (e) {
                                                            return e.label;
                                                        })
                                                        .join("/"))
                                                  : e.resultGlobalContainer && ((b = e.resultGlobalContainer.title), e.resultParentContainer && (b = b + " / ... / " + e.resultParentContainer.title))),
                                        { url: u(c + i, t), imageUrl: M, isImageRound: r === d, subtitle: b, iconCssClass: s, title: l(o), body: l(a), date: v }
                                    );
                                })(e, t);
                            });
                        }),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            e.exports = c;
        },
        function (e, t) {
            e.exports = s;
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(20), n(41)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        e.mapContentNameSearchItem = function (e) {
                            var t = e.id,
                                n = e.name,
                                i = e.spaceName,
                                a = e.href,
                                c = e.className;
                            return {
                                id: t,
                                subtitle: "admin-item" === c ? o(i) : "",
                                url: r.location.origin + a,
                                iconCssClass: " " + c + "  map-content-name-search-item ",
                                entityType: "content-name-search-item",
                                title: o(n),
                                content: { type: c },
                            };
                        };
                        var r = t.document,
                            o = n.decodeHtmlEntity;
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r;
            void 0 ===
                (r = function (e, t) {
                    "use strict";
                    (t.default = function (e) {
                        return e.map(function (e) {
                            return { id: e.type, text: e.label, value: e.type };
                        });
                    }),
                        (e.exports = t.default);
                }.apply(t, [e, t])) || (e.exports = r);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(17)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        var r = n.CONTEXT_PATH;
                        (t.default = function (e) {
                            return e.results.map(function (e) {
                                return { id: e.user.username, text: e.user.displayName, imageUrl: e.user.profilePicture.path.replace("/_" + r, "/_"), value: e.user.username };
                            });
                        }),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r;
            void 0 ===
                (r = function (e, t) {
                    "use strict";
                    (t.default = function (e) {
                        return e.map(function (e) {
                            return { id: e.key, text: e.name, imageUrl: e.logo, value: e.key };
                        });
                    }),
                        (e.exports = t.default);
                }.apply(t, [e, t])) || (e.exports = r);
        },
        function (e, t, n) {
            var r;
            void 0 ===
                (r = function (e, t) {
                    "use strict";
                    (t.default = function (e) {
                        return e.contentNameMatches.length
                            ? e.contentNameMatches[0].map(function (e) {
                                  return { id: e.name, text: e.name, value: e.name };
                              })
                            : [];
                    }),
                        (e.exports = t.default);
                }.apply(t, [e, t])) || (e.exports = r);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(17)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.mapSearchSpacesToCheckboxes = e.mapRecentSpacesToCheckboxes = void 0;
                        var n = t.CONTEXT_PATH;
                        (e.mapRecentSpacesToCheckboxes = function (e) {
                            var t = e.spaces,
                                n = e.currentSpace,
                                r = e.currentSpaceLozengeText;
                            return t.map(function (e) {
                                return { id: e.key, text: e.name, imageUrl: e.logo, value: e.key, lozengeText: e === n ? r : void 0 };
                            });
                        }),
                            (e.mapSearchSpacesToCheckboxes = function (e) {
                                return e.results.map(function (e) {
                                    return { id: e.space.key, text: e.space.name, imageUrl: e.space.icon ? n + e.space.icon.path : "", value: e.space.key };
                                });
                            });
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(86), n(42)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        e.ContentNameSearchStore = e.FETCH_CONTEXT = void 0;
                        var r = t.getContentNames,
                            o = n.BaseFilterStore,
                            i = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            a = (e.FETCH_CONTEXT = { firstFetchLimit: 10, allFetchLimit: 100 });
                        e.ContentNameSearchStore = (function (e) {
                            function t(e) {
                                var n = e.onChange,
                                    r = e.onFetching,
                                    o = e.onFilterChange,
                                    i = e.onResultsChange,
                                    a = e.onFetchError;
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, t);
                                var c = (function (e, t) {
                                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                })(
                                    this,
                                    (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                                        onChange: n,
                                        onFetching: r,
                                        onFilterChange: o,
                                        onResultsChange: i,
                                        onFetchError: a,
                                        onBeforeFetching: function (e) {
                                            var t = e.cancelable,
                                                n = e.preventDefault;
                                            return c._onBeforeFetching({ cancelable: t, preventDefault: n });
                                        },
                                    })
                                );
                                return (c.loadAllTopItems = c.loadAllTopItems.bind(c)), (c._isEnabled = !0), c;
                            }
                            return (
                                (function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, o),
                                i(t, [
                                    {
                                        key: "_onBeforeFetching",
                                        value: function (e) {
                                            var t = e.cancelable,
                                                n = e.preventDefault;
                                            t && ((this.isEnabled() && !this.isNoFetchFilter()) || n());
                                        },
                                    },
                                    {
                                        key: "isNoFetchFilter",
                                        value: function () {
                                            return !this.getFilter().searchText;
                                        },
                                    },
                                    {
                                        key: "isEnabled",
                                        value: function () {
                                            return this._isEnabled;
                                        },
                                    },
                                    {
                                        key: "disable",
                                        value: function () {
                                            this._isEnabled = !1;
                                        },
                                    },
                                    {
                                        key: "enable",
                                        value: function () {
                                            this._isEnabled = !0;
                                        },
                                    },
                                    {
                                        key: "loadAllTopItems",
                                        value: function () {
                                            this.fetchResults();
                                        },
                                    },
                                    {
                                        key: "isMoreItemsAvailable",
                                        value: function () {
                                            var e = this.getResults();
                                            return e && e.length < this.getTotalSize();
                                        },
                                    },
                                    {
                                        key: "isAllTopItemsLoaded",
                                        value: function () {
                                            return (this.getResultsExtra() || {}).limit === a.allFetchLimit;
                                        },
                                    },
                                    {
                                        key: "setFilter",
                                        value: function (e) {
                                            var n = e.searchText,
                                                r = void 0 === n ? this._filters.searchText : n;
                                            this._filters.searchText !== r &&
                                                (function e(t, n, r) {
                                                    null === t && (t = Function.prototype);
                                                    var o = Object.getOwnPropertyDescriptor(t, n);
                                                    if (void 0 === o) {
                                                        var i = Object.getPrototypeOf(t);
                                                        return null === i ? void 0 : e(i, n, r);
                                                    }
                                                    if ("value" in o) return o.value;
                                                    var a = o.get;
                                                    return void 0 !== a ? a.call(r) : void 0;
                                                })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setFilter", this).call(this, { searchText: r });
                                        },
                                    },
                                    {
                                        key: "_getEmptyFilter",
                                        value: function () {
                                            return { searchText: "" };
                                        },
                                    },
                                    {
                                        key: "_setThrottledDebounceExecuteMode",
                                        value: function () {
                                            var e = this._filters.searchText,
                                                t = this.throttledDebounceExecute;
                                            e.length < 5 ? t.setThrottledMode() : t.setDebounceMode();
                                        },
                                    },
                                    {
                                        key: "_doFetch",
                                        value: function (e) {
                                            var t = e.start,
                                                n = e.fetchFilter.searchText,
                                                o = this.isFetchingOnSameFilter() ? a.allFetchLimit : a.firstFetchLimit,
                                                i = r(n, o),
                                                c = i.cancel,
                                                s = i.then(function (e) {
                                                    var n;
                                                    if (e) {
                                                        var r = e.contentNameMatches,
                                                            i = e.totalSize,
                                                            a = (n = []).concat
                                                                .apply(
                                                                    n,
                                                                    (function (e) {
                                                                        if (Array.isArray(e)) {
                                                                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                                                            return n;
                                                                        }
                                                                        return Array.from(e);
                                                                    })(r)
                                                                )
                                                                .map(function (e) {
                                                                    return { id: e.id, name: e.name, spaceName: e.spaceName, href: e.href, className: e.className, icon: e.icon };
                                                                });
                                                        return { totalSize: i, start: t, results: a, extra: { limit: o } };
                                                    }
                                                });
                                            return (s.cancel = c), s;
                                        },
                                    },
                                ]),
                                t
                            );
                        })();
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(21)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.getContentNames = function (e, t, o) {
                            return n(r, { query: e, limit: t, src: "next.ui.search" }, o);
                        };
                        var n = t.fetchWrapperCancellable,
                            r = "/rest/quicknav/1/search";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            (function (t) {
                var n = NaN,
                    r = "[object Symbol]",
                    o = /^\s+|\s+$/g,
                    i = /^[-+]0x[0-9a-f]+$/i,
                    a = /^0b[01]+$/i,
                    c = /^0o[0-7]+$/i,
                    s = parseInt,
                    u = "object" == typeof t && t && t.Object === Object && t,
                    l = "object" == typeof self && self && self.Object === Object && self,
                    d = u || l || Function("return this")(),
                    f = Object.prototype.toString,
                    h = Math.max,
                    p = Math.min,
                    g = function () {
                        return d.Date.now();
                    };
                function m(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function y(e) {
                    if ("number" == typeof e) return e;
                    if (
                        (function (e) {
                            return (
                                "symbol" == typeof e ||
                                ((function (e) {
                                    return !!e && "object" == typeof e;
                                })(e) &&
                                    f.call(e) == r)
                            );
                        })(e)
                    )
                        return n;
                    if (m(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = m(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(o, "");
                    var u = a.test(e);
                    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : i.test(e) ? n : +e;
                }
                e.exports = function (e, t, n) {
                    var r,
                        o,
                        i,
                        a,
                        c,
                        s,
                        u = 0,
                        l = !1,
                        d = !1,
                        f = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    function b(t) {
                        var n = r,
                            i = o;
                        return (r = o = void 0), (u = t), (a = e.apply(i, n));
                    }
                    function M(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || (d && e - u >= i);
                    }
                    function v() {
                        var e = g();
                        if (M(e)) return I(e);
                        c = setTimeout(
                            v,
                            (function (e) {
                                var n = t - (e - s);
                                return d ? p(n, i - (e - u)) : n;
                            })(e)
                        );
                    }
                    function I(e) {
                        return (c = void 0), f && r ? b(e) : ((r = o = void 0), a);
                    }
                    function x() {
                        var e = g(),
                            n = M(e);
                        if (((r = arguments), (o = this), (s = e), n)) {
                            if (void 0 === c)
                                return (function (e) {
                                    return (u = e), (c = setTimeout(v, t)), l ? b(e) : a;
                                })(s);
                            if (d) return (c = setTimeout(v, t)), b(s);
                        }
                        return void 0 === c && (c = setTimeout(v, t)), a;
                    }
                    return (
                        (t = y(t) || 0),
                        m(n) && ((l = !!n.leading), (i = (d = "maxWait" in n) ? h(y(n.maxWait) || 0, t) : i), (f = "trailing" in n ? !!n.trailing : f)),
                        (x.cancel = function () {
                            void 0 !== c && clearTimeout(c), (u = 0), (r = s = o = c = void 0);
                        }),
                        (x.flush = function () {
                            return void 0 === c ? a : I(g());
                        }),
                        x
                    );
                };
            }.call(this, n(33)));
        },
        function (e, t, n) {
            (function (t) {
                var n = "Expected a function",
                    r = NaN,
                    o = "[object Symbol]",
                    i = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    c = /^0b[01]+$/i,
                    s = /^0o[0-7]+$/i,
                    u = parseInt,
                    l = "object" == typeof t && t && t.Object === Object && t,
                    d = "object" == typeof self && self && self.Object === Object && self,
                    f = l || d || Function("return this")(),
                    h = Object.prototype.toString,
                    p = Math.max,
                    g = Math.min,
                    m = function () {
                        return f.Date.now();
                    };
                function y(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function b(e) {
                    if ("number" == typeof e) return e;
                    if (
                        (function (e) {
                            return (
                                "symbol" == typeof e ||
                                ((function (e) {
                                    return !!e && "object" == typeof e;
                                })(e) &&
                                    h.call(e) == o)
                            );
                        })(e)
                    )
                        return r;
                    if (y(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = y(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(i, "");
                    var n = c.test(e);
                    return n || s.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e;
                }
                e.exports = function (e, t, r) {
                    var o = !0,
                        i = !0;
                    if ("function" != typeof e) throw new TypeError(n);
                    return (
                        y(r) && ((o = "leading" in r ? !!r.leading : o), (i = "trailing" in r ? !!r.trailing : i)),
                        (function (e, t, r) {
                            var o,
                                i,
                                a,
                                c,
                                s,
                                u,
                                l = 0,
                                d = !1,
                                f = !1,
                                h = !0;
                            if ("function" != typeof e) throw new TypeError(n);
                            function M(t) {
                                var n = o,
                                    r = i;
                                return (o = i = void 0), (l = t), (c = e.apply(r, n));
                            }
                            function v(e) {
                                var n = e - u;
                                return void 0 === u || n >= t || n < 0 || (f && e - l >= a);
                            }
                            function I() {
                                var e = m();
                                if (v(e)) return x(e);
                                s = setTimeout(
                                    I,
                                    (function (e) {
                                        var n = t - (e - u);
                                        return f ? g(n, a - (e - l)) : n;
                                    })(e)
                                );
                            }
                            function x(e) {
                                return (s = void 0), h && o ? M(e) : ((o = i = void 0), c);
                            }
                            function S() {
                                var e = m(),
                                    n = v(e);
                                if (((o = arguments), (i = this), (u = e), n)) {
                                    if (void 0 === s)
                                        return (function (e) {
                                            return (l = e), (s = setTimeout(I, t)), d ? M(e) : c;
                                        })(u);
                                    if (f) return (s = setTimeout(I, t)), M(u);
                                }
                                return void 0 === s && (s = setTimeout(I, t)), c;
                            }
                            return (
                                (t = b(t) || 0),
                                y(r) && ((d = !!r.leading), (a = (f = "maxWait" in r) ? p(b(r.maxWait) || 0, t) : a), (h = "trailing" in r ? !!r.trailing : h)),
                                (S.cancel = function () {
                                    void 0 !== s && clearTimeout(s), (l = 0), (o = u = i = s = void 0);
                                }),
                                (S.flush = function () {
                                    return void 0 === s ? c : x(m());
                                }),
                                S
                            );
                        })(e, t, { leading: o, maxWait: t, trailing: i })
                    );
                };
            }.call(this, n(33)));
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(90), n(91), n(95)]),
                void 0 ===
                    (o = function (e, t, n, r) {
                        "use strict";
                        e.SearchFilterStore = void 0;
                        var o = t.getContentSearch,
                            i = n.createSearchCQLRequest,
                            a = r.BaseFetchMoreFilterStore,
                            c =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                },
                            s = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })();
                        e.SearchFilterStore = (function (e) {
                            function t(e) {
                                var n = e.onChange,
                                    r = e.onFetching,
                                    o = e.onFilterChange,
                                    i = e.onResultsChange,
                                    a = e.onFetchError,
                                    c = e.limit,
                                    s = e.onBeforeFetchingCanceled;
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, t);
                                var u = (function (e, t) {
                                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                })(
                                    this,
                                    (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                                        onChange: n,
                                        onFetching: r,
                                        onFilterChange: o,
                                        onResultsChange: i,
                                        onFetchError: a,
                                        onBeforeFetchingCanceled: s,
                                        onBeforeFetching: function (e) {
                                            var t = e.cancelable,
                                                n = e.preventDefault;
                                            return u._onBeforeFetching({ cancelable: t, preventDefault: n });
                                        },
                                    })
                                );
                                return (u._limit = c), (u._noFetch = { cqlQuery: "", cqlQueryWithoutSearchText: "" }), u;
                            }
                            return (
                                (function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, a),
                                s(
                                    t,
                                    [
                                        {
                                            key: "_onBeforeFetching",
                                            value: function (e) {
                                                var t = e.cancelable,
                                                    n = e.preventDefault;
                                                t && this.isNoFetchFilter() && n();
                                            },
                                        },
                                        {
                                            key: "isNoFetchFilter",
                                            value: function () {
                                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).withSearchText,
                                                    t = void 0 === e || e,
                                                    n = this.getFilter(),
                                                    r = t ? n.cqlQuery : n.cqlQueryWithoutSearchText,
                                                    o = this._noFetch,
                                                    i = t ? o.cqlQuery : o.cqlQueryWithoutSearchText;
                                                return "" === r || r === i;
                                            },
                                        },
                                        {
                                            key: "setNoFetchFilter",
                                            value: function (e) {
                                                var n = e.searchText,
                                                    r = void 0 === n ? "" : n,
                                                    o = e.spaces,
                                                    i = void 0 === o ? [] : o,
                                                    a = e.contributors,
                                                    s = void 0 === a ? [] : a,
                                                    u = e.contentTypes,
                                                    l = void 0 === u ? [] : u,
                                                    d = e.date,
                                                    f = void 0 === d ? "" : d,
                                                    h = e.title,
                                                    p = void 0 === h ? "" : h,
                                                    g = e.labels,
                                                    m = void 0 === g ? [] : g,
                                                    y = e.spaceCategories,
                                                    b = { searchText: r, spaces: i, contributors: s, contentTypes: l, date: f, title: p, labels: m, spaceCategories: void 0 === y ? [] : y };
                                                this._noFetch = { cqlQuery: t.getCQLQuery(b), cqlQueryWithoutSearchText: t.getCQLQuery(c({}, b, { searchText: "" })) };
                                            },
                                        },
                                        {
                                            key: "setFilter",
                                            value: function (e) {
                                                var n = e.searchText,
                                                    r = void 0 === n ? this._filters.searchText : n,
                                                    o = e.spaces,
                                                    i = void 0 === o ? this._filters.spaces : o,
                                                    a = e.contributors,
                                                    c = void 0 === a ? this._filters.contributors : a,
                                                    s = e.contentTypes,
                                                    u = void 0 === s ? this._filters.contentTypes : s,
                                                    l = e.date,
                                                    d = void 0 === l ? this._filters.date : l,
                                                    f = e.archive,
                                                    h = void 0 === f ? this._filters.archive : f,
                                                    p = e.title,
                                                    g = void 0 === p ? this._filters.title : p,
                                                    m = e.labels,
                                                    y = void 0 === m ? this._filters.labels : m,
                                                    b = e.spaceCategories,
                                                    M = void 0 === b ? this._filters.spaceCategories : b,
                                                    v = t.getCQLQuery({ searchText: r, spaces: i, contributors: c, contentTypes: u, date: d, title: g, labels: y, spaceCategories: M }),
                                                    I = t.getCQLQuery({ searchText: "", spaces: i, contributors: c, contentTypes: u, date: d, title: g, labels: y, spaceCategories: M });
                                                (function e(t, n, r) {
                                                    null === t && (t = Function.prototype);
                                                    var o = Object.getOwnPropertyDescriptor(t, n);
                                                    if (void 0 === o) {
                                                        var i = Object.getPrototypeOf(t);
                                                        return null === i ? void 0 : e(i, n, r);
                                                    }
                                                    if ("value" in o) return o.value;
                                                    var a = o.get;
                                                    return void 0 !== a ? a.call(r) : void 0;
                                                })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setFilter", this).call(this, {
                                                    title: g,
                                                    searchText: r,
                                                    spaces: i,
                                                    contributors: c,
                                                    contentTypes: u,
                                                    date: d,
                                                    cqlQuery: v,
                                                    cqlQueryWithoutSearchText: I,
                                                    archive: h,
                                                    labels: y,
                                                    spaceCategories: M,
                                                });
                                            },
                                        },
                                        {
                                            key: "getCqlQuery",
                                            value: function () {
                                                return (this.getFilter() || { cqlQuery: "" }).cqlQuery;
                                            },
                                        },
                                        {
                                            key: "_getEmptyFilter",
                                            value: function () {
                                                return { title: "", searchText: "", spaces: [], contributors: [], contentTypes: [], date: "", archive: !1, labels: [], spaceCategories: [] };
                                            },
                                        },
                                        {
                                            key: "_setThrottledDebounceExecuteMode",
                                            value: function () {
                                                var e = this._filters.searchText,
                                                    t = this.throttledDebounceExecute;
                                                e.length < 5 ? t.setThrottledMode() : t.setDebounceMode();
                                            },
                                        },
                                        {
                                            key: "_doFetch",
                                            value: function (e) {
                                                var t = e.start,
                                                    n = e.fetchFilter,
                                                    r = n.cqlQuery,
                                                    i = n.archive;
                                                return o({ start: t, cql: r, includeArchivedSpaces: i, limit: this._limit });
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            key: "getCQLQuery",
                                            value: function (e) {
                                                var t = e.searchText,
                                                    n = e.spaces,
                                                    r = e.contributors,
                                                    o = e.contentTypes,
                                                    a = e.date,
                                                    c = e.title,
                                                    s = e.labels,
                                                    u = e.spaceCategories,
                                                    l = i();
                                                return (
                                                    (l.fields.siteSearch.value = t),
                                                    (l.fields.space.value = n),
                                                    (l.fields.contributor.value = r),
                                                    (l.fields.type.value = o),
                                                    (l.fields.date.value = a),
                                                    (l.fields.title.value = c),
                                                    (l.fields.labels.value = s),
                                                    (l.fields.spaceCategories.value = u),
                                                    l.build()
                                                );
                                            },
                                        },
                                    ]
                                ),
                                t
                            );
                        })();
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(21)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.getContentSearch = function (e, t) {
                            var o = e.cql,
                                i = e.start,
                                a = void 0 === i ? 0 : i,
                                c = e.limit,
                                s = void 0 === c ? 20 : c,
                                u = e.includeArchivedSpaces;
                            return n(r, { cql: o, start: a, limit: s, excerpt: "highlight", expand: "space.icon", includeArchivedSpaces: void 0 !== u && u, src: "next.ui.search" }, t);
                        };
                        var n = t.fetchWrapperCancellable,
                            r = "/rest/api/search";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(92), n(93), n(94)]),
                void 0 ===
                    (o = function (e, t, n, r) {
                        "use strict";
                        e.createSearchCQLRequest = function () {
                            return new a({ mainField: s, fields: { date: f, siteSearch: s, space: u, contributor: l, type: d, title: h, labels: p, spaceCategories: g } });
                        };
                        var o = c(t).default,
                            i = c(n).default,
                            a = c(r).default;
                        function c(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var s = new o({ name: "siteSearch", operator: "~", isEscapedValue: !0 }),
                            u = new i({ name: "space", operator: "in" }),
                            l = new i({ name: "contributor", operator: "in" }),
                            d = new i({ name: "type", operator: "in" }),
                            f = new o({ name: "lastmodified", operator: ">=", noQuotes: !0 }),
                            h = new o({ name: "title", operator: "~", isEscapedValue: !0 }),
                            p = new i({ name: "label", operator: "in" }),
                            g = new i({ name: "space.category", operator: "in" });
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(34)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        var r = n.escapeCqlField,
                            o = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            i = (function () {
                                function e(t) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, e),
                                        (this.props = t),
                                        (this.text = this.props.value || "");
                                }
                                return (
                                    o(e, [
                                        {
                                            key: "isEmpty",
                                            value: function () {
                                                return !this.value.trim();
                                            },
                                        },
                                        {
                                            key: "build",
                                            value: function () {
                                                if (this.isEmpty()) return "";
                                                var e = this.props.isEscapedValue ? r(this.text) : this.text;
                                                return this.props.noQuotes ? this.props.name + " " + this.props.operator + " " + e : this.props.name + " " + this.props.operator + ' "' + e + '"';
                                            },
                                        },
                                        {
                                            key: "value",
                                            set: function (e) {
                                                this.text = e;
                                            },
                                            get: function () {
                                                return this.text;
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })();
                        (t.default = i), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(4)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        var r,
                            o = ((r = n), r && r.__esModule ? r : { default: r }).default,
                            i = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            a = (function () {
                                function e(t) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, e),
                                        (this.props = t),
                                        (this.items = []);
                                }
                                return (
                                    i(e, [
                                        {
                                            key: "isEmpty",
                                            value: function () {
                                                return 0 === this.items.length;
                                            },
                                        },
                                        {
                                            key: "build",
                                            value: function () {
                                                return this.isEmpty()
                                                    ? ""
                                                    : this.props.name +
                                                          " " +
                                                          this.props.operator +
                                                          " (" +
                                                          []
                                                              .concat(
                                                                  (function (e) {
                                                                      if (Array.isArray(e)) {
                                                                          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                                                          return n;
                                                                      }
                                                                      return Array.from(e);
                                                                  })(this.items)
                                                              )
                                                              .map(function (e) {
                                                                  return '"' + e + '"';
                                                              })
                                                              .join(",") +
                                                          ")";
                                            },
                                        },
                                        {
                                            key: "value",
                                            set: function (e) {
                                                this.items = e;
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })();
                        (a.propTypes = { name: o.string.isRequired, operator: o.oneOf(["in", "not in"]).isRequired }), (t.default = a), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r;
            void 0 ===
                (r = function (e, t) {
                    "use strict";
                    var n = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t;
                            };
                        })(),
                        r = (function () {
                            function e(t) {
                                var n = t.mainField,
                                    r = t.fields,
                                    o = t.fieldsToIgnoreOnIsEmpty,
                                    i = void 0 === o ? [] : o;
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, e),
                                    (this.props = { mainField: n, fields: r, fieldsToIgnoreOnIsEmpty: new Set(i) });
                            }
                            return (
                                n(e, [
                                    {
                                        key: "isEmpty",
                                        value: function () {
                                            var e = this,
                                                t = this.props.fieldsToIgnoreOnIsEmpty;
                                            return Object.keys(this.props.fields)
                                                .filter(function (e) {
                                                    return !t.has(e);
                                                })
                                                .map(function (t) {
                                                    return e.props.fields[t];
                                                })
                                                .every(function (e) {
                                                    return e.isEmpty();
                                                });
                                        },
                                    },
                                    {
                                        key: "build",
                                        value: function () {
                                            return this.isEmpty()
                                                ? ""
                                                : Object.values(this.props.fields)
                                                      .filter(function (e) {
                                                          return !e.isEmpty();
                                                      })
                                                      .map(function (e) {
                                                          return e.build();
                                                      })
                                                      .join(" AND ");
                                        },
                                    },
                                    {
                                        key: "fields",
                                        get: function () {
                                            return this.props.fields;
                                        },
                                    },
                                    {
                                        key: "mainField",
                                        get: function () {
                                            return this.props.mainField;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                    (t.default = r), (e.exports = t.default);
                }.apply(t, [e, t])) || (e.exports = r);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(42)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.BaseFetchMoreFilterStore = void 0;
                        var n = t.BaseFilterStore,
                            r = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })();
                        e.BaseFetchMoreFilterStore = (function (e) {
                            function t(e) {
                                var n = e.onChange,
                                    r = e.onFetching,
                                    o = e.onFilterChange,
                                    i = e.onResultsChange,
                                    a = e.onFetchError,
                                    c = e.onBeforeFetching,
                                    s = e.onBeforeFetchingCanceled;
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, t);
                                var u = (function (e, t) {
                                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { onChange: n, onFetching: r, onFilterChange: o, onResultsChange: i, onFetchError: a, onBeforeFetching: c, onBeforeFetchingCanceled: s }));
                                return (u.fetchMore = u.fetchMore.bind(u)), u;
                            }
                            return (
                                (function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, n),
                                r(t, [
                                    {
                                        key: "executeFetchResults",
                                        value: function () {
                                            return (function e(t, n, r) {
                                                null === t && (t = Function.prototype);
                                                var o = Object.getOwnPropertyDescriptor(t, n);
                                                if (void 0 === o) {
                                                    var i = Object.getPrototypeOf(t);
                                                    return null === i ? void 0 : e(i, n, r);
                                                }
                                                if ("value" in o) return o.value;
                                                var a = o.get;
                                                return void 0 !== a ? a.call(r) : void 0;
                                            })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "executeFetchResults", this).call(this, { extendPromiseProperties: { isLoadingMore: this.isFetchingOnSameFilter() } });
                                        },
                                    },
                                    {
                                        key: "fetchMore",
                                        value: function () {
                                            this.fetchResults();
                                        },
                                    },
                                    {
                                        key: "isFetchingMore",
                                        value: function () {
                                            return []
                                                .concat(
                                                    (function (e) {
                                                        if (Array.isArray(e)) {
                                                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                                            return n;
                                                        }
                                                        return Array.from(e);
                                                    })(this._activeSearchPromises)
                                                )
                                                .some(function (e) {
                                                    return !!e.isLoadingMore;
                                                });
                                        },
                                    },
                                    {
                                        key: "_getIsLoadingMore",
                                        value: function () {
                                            return this.getFilter() === this._resultsSum.fetchFilter;
                                        },
                                    },
                                    {
                                        key: "_getFetchStart",
                                        value: function () {
                                            return this._getIsLoadingMore() ? this._resultsSum.results.length : 0;
                                        },
                                    },
                                ]),
                                t
                            );
                        })();
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(97), n(24)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        (e.getHelpUrl = function () {
                            return o.helpUrl();
                        }),
                            (e.getHelpTitle = function () {
                                return i.get("help.search.ui.link.title");
                            });
                        var r,
                            o = t.SearchUI,
                            i = ((r = n), r && r.__esModule ? r : { default: r }).default;
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            e.exports = u;
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(44)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.reorderToCurrentSpaceFirst = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = r.get("space-key");
                            if (!t) return e;
                            var n = e.find(function (e) {
                                return e.key === t;
                            });
                            return n
                                ? [n].concat(
                                      (function (e) {
                                          if (Array.isArray(e)) {
                                              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                              return n;
                                          }
                                          return Array.from(e);
                                      })(
                                          e.filter(function (e) {
                                              return e !== n;
                                          })
                                      )
                                  )
                                : e;
                        };
                        var n,
                            r = ((n = t), n && n.__esModule ? n : { default: n }).default;
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(100);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            var r = n(35);
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".CaptionedImage_image__34q91 {\n    height: 240px;\n    margin-top: 130px;\n}\n\n.CaptionedImage_caption__3ZFVQ {\n    color: #42526E;\n    text-align: center;\n    font-weight: 500;\n    margin: 40px;\n    word-wrap: break-word;\n}\n\n.CaptionedImage_empty-recent-items__12m58 {\n    background: url(" +
                    r(n(101)) +
                    ") no-repeat center;\n}\n\n.CaptionedImage_empty-search-content__2oUyN {\n    background: url(" +
                    r(n(102)) +
                    ") no-repeat center;\n}\n\n.CaptionedImage_error-search-content__188TM {\n    background: url(" +
                    r(n(103)) +
                    ") no-repeat center;\n}\n",
                "",
            ]),
                (t.locals = {
                    image: "CaptionedImage_image__34q91",
                    caption: "CaptionedImage_caption__3ZFVQ",
                    "empty-recent-items": "CaptionedImage_empty-recent-items__12m58",
                    "empty-search-content": "CaptionedImage_empty-search-content__2oUyN",
                    "error-search-content": "CaptionedImage_error-search-content__188TM",
                });
        },
        function (e, t, n) {
            e.exports = n.p + "e84558f70ce742e07cff8aedde25f73a.svg";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE0LjIyJSIgeTE9Ijg1LjM2NSUiIHgyPSI4NS4yNTclIiB5Mj0iMTQuNjUxJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNDMUM3RDAiIG9mZnNldD0iNTYlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0U5RUJFRiIgc3RvcC1vcGFjaXR5PSIuNSIgb2Zmc2V0PSI5NyUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNNzYuMzM3IDEzOS44NzdjLS42MzUgMC0xLjI2OC4wMTQtMS44OTkuMDQxYTEuNiAxLjYgMCAwIDEtLjA2OC0zLjE5OWguMDQ4YTU5Ljg0IDU5Ljg0IDAgMCAwIDEyLjA3NC0xLjI5MyAxLjYwMiAxLjYwMiAwIDAgMSAuNjggMy4xMzEgNjMuMDMzIDYzLjAzMyAwIDAgMS0xMC44MzUgMS4zMnptLTEwLjU1Ni0uNTU4YTEuNjQgMS42NCAwIDAgMS0uMjggMCA2Mi4wNzMgNjIuMDczIDAgMCAxLTEyLjQzNS0zLjA1NiAxLjYwMiAxLjYwMiAwIDEgMSAxLjA4My0zLjAxNSA1OC44NiA1OC44NiAwIDAgMCAxMS43ODggMi45MDYgMS42IDEuNiAwIDAgMS0uMTYzIDMuMTg2bC4wMDctLjAyem0yOS40NzgtMy4xNzhhMS42IDEuNiAwIDAgMS0uNjEzLTMuMTA0IDU5LjAzIDU5LjAzIDAgMCAwIDEwLjg5LTUuMzU2IDEuNjA1IDEuNjA1IDAgMCAxIDEuNzAyIDIuNzIyIDYyLjMwNSA2Mi4zMDUgMCAwIDEtMTEuNDgzIDUuNjUgMS42MiAxLjYyIDAgMCAxLS40OTYuMTA4di0uMDJ6bS00OS41NzctMy4zMjhjLS4yOC4wMS0uNTU3LS4wNTQtLjgwMy0uMTg0YTYyLjcyIDYyLjcyIDAgMCAxLTEwLjYyNS03LjEzMyAxLjYgMS42IDAgMCAxIDIuMDQyLTIuNDY0IDU5LjQ3MyA1OS40NzMgMCAwIDAgMTAuMDg3IDYuNzU5IDEuNiAxLjYgMCAwIDEtLjY4IDMuMDE1bC0uMDIxLjAwN3pNMjkuMDQgMTE5Ljg0N2ExLjYgMS42IDAgMCAxLTEuMjQ1LS41MjQgNjIuNjE4IDYyLjYxOCAwIDAgMS03LjU2Mi0xMC4zMjYgMS42MDIgMS42MDIgMCAwIDEgMi43NjMtMS42MiA1OS40MzIgNTkuNDMyIDAgMCAwIDcuMTc0IDkuNzk1IDEuNiAxLjYgMCAwIDEtMS4xMyAyLjY3NXptOTcuOTUtMTAuNTc3YTEuNiAxLjYgMCAwIDEtMS40NDMtMi4zOTYgNTkuMDY1IDU5LjA2NSAwIDAgMCA0LjkxNC0xMS4xMTUgMS42MDIgMS42MDIgMCAxIDEgMy4wNDkuOTg3IDYyLjI0MyA2Mi4yNDMgMCAwIDEtNS4xODYgMTEuNyAxLjYgMS42IDAgMCAxLTEuMzM0LjgyNHptLTEwOS4xNzMtNy4yOTdhMS42IDEuNiAwIDAgMS0xLjU2Ni0xIDYyLjE2OSA2Mi4xNjkgMCAwIDEtMy41MzktMTIuMjkyIDEuNjAxIDEuNjAxIDAgMSAxIDMuMTUxLS41NzJjLjczIDMuOTkzIDEuODcxIDcuOSAzLjQwMyAxMS42NmExLjYgMS42IDAgMCAxLTEuNDI5IDIuMjA0aC0uMDJ6bTExNi4zMTItMTIuNTc4YTEuNiAxLjYgMCAwIDEtMS42MzMtMS44NzFjLjY4Ni00IC45NjItOC4wNi44MjMtMTIuMTE2di0uMTM2YTEuNiAxLjYgMCAxIDEgMy4yLS4xMTV2LjEzNmE2Mi44NDIgNjIuODQyIDAgMCAxLS44NTEgMTIuNzY4IDEuNiAxLjYgMCAwIDEtMS41MzkgMS4zMjd2LjAwN3pNMTMuNDA2IDgxLjI5YTEuNTcyIDEuNTcyIDAgMCAxLTEuNjU0LTEuNTExdi0uMDY4YTYyLjg1IDYyLjg1IDAgMCAxIC44MzgtMTIuNyAxLjYwMiAxLjYwMiAwIDEgMSAzLjE1OC41MzcgNTkuNjc3IDU5LjY3NyAwIDAgMC0uNzk3IDEyLjA0NyAxLjYyNyAxLjYyNyAwIDAgMS0xLjU0NSAxLjY5NXpNMTM0IDY4LjE0NmExLjYgMS42IDAgMCAxLTEuNjI3LTEuMzE0IDU4Ljk0MiA1OC45NDIgMCAwIDAtMy40MDMtMTEuNjUyIDEuNjEyIDEuNjEyIDAgMCAxIDIuOTg4LTEuMjExIDYyLjE3NSA2Mi4xNzUgMCAwIDEgMy41NzMgMTIuMjkyIDEuNiAxLjYgMCAwIDEtMS4yODYgMS44NjVsLS4yNDUuMDJ6bS0xMTcuNzAxLTcuNzhhMS42IDEuNiAwIDAgMS0xLjU4LTIuMDQxIDYyLjI3IDYyLjI3IDAgMCAxIDUuMTc0LTExLjcwNyAxLjYwMiAxLjYwMiAwIDAgMSAyLjc4MyAxLjU4NiA1OS4wNjUgNTkuMDY1IDAgMCAwLTQuOTA3IDExLjEwOCAxLjYgMS42IDAgMCAxLTEuNDcgMS4wNTR6TTEyNi42NjMgNDguMzZhMS42IDEuNiAwIDAgMS0xLjQzNi0uNzkgNTkuNDA1IDU5LjQwNSAwIDAgMC03LjE4OC05Ljc4NyAxLjYgMS42IDAgMSAxIDIuMzQ4LTIuMTUgNjIuNjE4IDYyLjYxOCAwIDAgMSA3LjU3NiAxMC4zMTEgMS42IDEuNiAwIDAgMS0xLjMyIDIuNDFsLjAyLjAwNnpNMjYuMTk1IDQxLjc0NWExLjYgMS42IDAgMCAxLTEuMzItMi41ODcgNjIuOTEgNjIuOTEgMCAwIDEgOC44NDgtOS4yMzYgMS42IDEuNiAwIDEgMSAyLjA0MiAyLjQzNyA1OS43MzIgNTkuNzMyIDAgMCAwLTguMzY1IDguNzY2IDEuNiAxLjYgMCAwIDEtMS4yMDUuNjJ6bTg2Ljc4Ny05LjQ2OGExLjU5MyAxLjU5MyAwIDAgMS0xLjA3NS0uMzY4IDU5LjU0MSA1OS41NDEgMCAwIDAtMTAuMDk0LTYuNzU4IDEuNjAxIDEuNjAxIDAgMCAxIDEuNDk3LTIuODMyIDYyLjc2OCA2Mi43NjggMCAwIDEgMTAuNjMyIDcuMTIgMS42IDEuNiAwIDAgMS0uOTY3IDIuODMxbC4wMDcuMDA3em0tNzEuMTI1LTQuNjk2YTEuNiAxLjYgMCAwIDEtLjkxMi0yLjk1NCA2Mi4yNyA2Mi4yNyAwIDAgMSAxMS40ODItNS42NjMgMS42IDEuNiAwIDAgMSAxLjExIDMuMDAxIDU5LjA1OCA1OS4wNTggMCAwIDAtMTAuODkgNS4zN2MtLjIzOC4xNS0uNTEuMjM1LS43OS4yNDZ6bTUyLjc3NS01Ljc2NWExLjYgMS42IDAgMCAxLS41OTItLjA5NiA1OC45OSA1OC45OSAwIDAgMC0xMS43NjgtMi44NzIgMS42IDEuNiAwIDEgMSAuNDM2LTMuMTcyIDYyLjE0OCA2Mi4xNDggMCAwIDEgMTIuNDM1IDMuMDM2IDEuNiAxLjYgMCAwIDEtLjQ4MyAzLjExbC0uMDI4LS4wMDZ6bS0zMy4yMTQtMi4xNzhhMS42IDEuNiAwIDAgMS0uMzg4LTMuMTY1IDYzLjQzNSA2My40MzUgMCAwIDEgMTIuNzItMS4zNjEgMS42IDEuNiAwIDEgMSAuMDY5IDMuMTk4aC0uMDQ4YTU5LjczOSA1OS43MzkgMCAwIDAtMTIuMDc0IDEuMzA3IDEuNjEzIDEuNjEzIDAgMCAxLS4yOC4wMnoiIG9wYWNpdHk9Ii4zIiBmaWxsPSIjQjNCQUM1Ii8+PHBhdGggZD0iTTEzNC41NDUgMzMuOTUxYS4zNTQuMzU0IDAgMCAxLS4yNjYtLjM4YzAtLjEwNS4wMTQtLjIwNy4wNC0uMzA3LjAzMy0uMjEuMDc3LS40Mi4xMy0uNjI2YTUuMTggNS4xOCAwIDAgMSAxLjExNi0yLjEwMyA1Ljk0MiA1Ljk0MiAwIDAgMSAyLjMxNS0xLjUzOWwxLjY4OC0uNjhhMi44OTMgMi44OTMgMCAwIDAgMS44NzEtMS45OCAyLjk1IDIuOTUgMCAwIDAgLjA4Mi0xLjAyOSAyLjM4MiAyLjM4MiAwIDAgMC0uMzItLjk5MyAyLjc3NyAyLjc3NyAwIDAgMC0uNzctLjgzIDMuNjE0IDMuNjE0IDAgMCAwLTEuMjMxLS41NTkgMi45NiAyLjk2IDAgMCAwLTEuNDIzLS4wNjFjLS40MDUuMDg4LS43ODcuMjYtMS4xMjMuNTA0YTMuMDkgMy4wOSAwIDAgMC0uODE2LjkyNSA0LjQ3MiA0LjQ3MiAwIDAgMC0uNDk3IDEuMTcgOS4yMjIgOS4yMjIgMCAwIDAtLjA4Mi4zNTUuNTQ1LjU0NSAwIDAgMS0uNjguNDE1bC0yLjYyLS44MTdhLjUzOC41MzggMCAwIDEtLjM4OS0uNTY1YzAtLjA4MS4wMTItLjE2My4wMzQtLjI0NS4wNDEtLjIzMS4wODktLjQ1OC4xNDMtLjY4YTYuNTA3IDYuNTA3IDAgMCAxIDEuMDQxLTIuMTg1IDYuMDM3IDYuMDM3IDAgMCAxIDEuODE4LTEuNjU0IDYuNjE2IDYuNjE2IDAgMCAxIDIuNDY0LS44NDQgNy42MDMgNy42MDMgMCAwIDEgMy4wMjguMjMxIDguNTU1IDguNTU1IDAgMCAxIDIuODYgMS4yODcgNy4wMzggNy4wMzggMCAwIDEgMS44MjMgMS44NzEgNS40MyA1LjQzIDAgMCAxIC44MyAyLjIxM2MuMTEuNzYzLjA2NiAxLjU0LS4xMjkgMi4yODZhNS42NzYgNS42NzYgMCAwIDEtMS41NzkgMi43OTggOC4xIDguMSAwIDAgMS0yLjY4OCAxLjYyNmwtMS40MjMuNTM4YTMuNDg1IDMuNDg1IDAgMCAwLTEuNDk3Ljk0IDMuOSAzLjkgMCAwIDAtLjc5IDEuMzU0LjM1NC4zNTQgMCAwIDEtLjQyOS4yMjVsLTIuNTMxLS42NnptLTIuMDgzIDMuOTk2YTIuMzYyIDIuMzYyIDAgMCAxIDEuMTEtMS40NzcgMi4yODcgMi4yODcgMCAwIDEgMS44MjMtLjI1OSAyLjQzIDIuNDMgMCAwIDEgMS43MyAyLjk2QTIuMjg3IDIuMjg3IDAgMCAxIDEzNiA0MC42MjlhMi4zNjIgMi4zNjIgMCAwIDEtMS44My4yMzggMi4zODIgMi4zODIgMCAwIDEtMS43MS0yLjkyNnYuMDA3ek0xNy4yOCAyNS4xOTJhLjM1NC4zNTQgMCAwIDEtLjI0LS4zOTVjMC0uMTA1LjAyMS0uMjA3LjA2Mi0uMzA2YTYuMzUgNi4zNSAwIDAgMSAuMTc3LS42MTMgNS4xOCA1LjE4IDAgMCAxIDEuMjYtMi4wNDIgNS45NDIgNS45NDIgMCAwIDEgMi40MTUtMS4zNjFsMS43My0uNTcyYTIuODkzIDIuODkzIDAgMCAwIDItMS44NThjLjExLS4zMjkuMTYtLjY3NC4xNS0xLjAyYTIuMzgyIDIuMzgyIDAgMCAwLS4yNTItMS4wMTUgMi43NzcgMi43NzcgMCAwIDAtLjY4LS44NzggMy42MTQgMy42MTQgMCAwIDAtMS4xOTItLjY0IDMuMDAyIDMuMDAyIDAgMCAwLTIuNjE0LjI3MiAzLjEwNCAzLjEwNCAwIDAgMC0uODc3Ljg1OCA0LjQ1OCA0LjQ1OCAwIDAgMC0uNjc0IDEuNDg0LjU0NS41NDUgMCAwIDEtLjcyOC4zOGwtMi41MzktLjk4YS41MzguNTM4IDAgMCAxLS4zNDctLjU5MS42LjYgMCAwIDEgLjA1NC0uMjQ1IDkuNTMgOS41MyAwIDAgMSAuMTktLjY4MSA2LjUwNyA2LjUwNyAwIDAgMSAxLjE5Mi0yLjExIDYuMDM3IDYuMDM3IDAgMCAxIDEuOTI2LTEuNTE4IDYuNjE2IDYuNjE2IDAgMCAxIDIuNTEyLS42OGMxLjAyLS4wNTggMi4wNC4wOSAzLjAwMS40MzVhOC41NTUgOC41NTUgMCAwIDEgMi43NyAxLjQ3NyA3LjAzOCA3LjAzOCAwIDAgMSAxLjY5NSAxLjk5NGMuMzkuNjk1LjYyMiAxLjQ2Ni42OCAyLjI2LjA1OC43Ny0uMDQgMS41NDItLjI4NSAyLjI3M2E1LjY3NiA1LjY3NiAwIDAgMS0xLjc3IDIuNjgyIDguMSA4LjEgMCAwIDEtMi43OSAxLjQ0M2wtMS40NTcuNDM2YTMuNDcgMy40NyAwIDAgMC0xLjU1OC44MzdjLS4xODYuMTgtLjM1My4zNzgtLjQ5Ny41OTJhMy45IDMuOSAwIDAgMC0uMzgxLjY4LjM1NC4zNTQgMCAwIDEtLjQ0My4xOThsLTIuNDktLjc5NnptLTIuMzUgMy44NjZhMi4zNjIgMi4zNjIgMCAwIDEgMS4yMDYtMS40MDMgMi4yODcgMi4yODcgMCAwIDEgMS44MzctLjEzNiAyLjQzIDIuNDMgMCAwIDEgMS41MjUgMy4wN2MtLjIuNjAzLS42NCAxLjA5Ni0xLjIxOCAxLjM2MWEyLjM2IDIuMzYgMCAwIDEtMS44NDUuMTE2IDIuMzgyIDIuMzgyIDAgMCAxLTEuNTA0LTMuMDA4em0tMS44MTYgMTA0LjM5NGEuMzU0LjM1NCAwIDAgMS0uNDM2LS4xNTZsLS4xNDMtLjI4YTYuMzUgNi4zNSAwIDAgMS0uMjUyLS41ODUgNS4xOCA1LjE4IDAgMCAxLS4yOTItMi4zNjEgNS45NDIgNS45NDIgMCAwIDEgMS4wMTQtMi41OTRsLjk4Ny0xLjUzMWEyLjg5MyAyLjg5MyAwIDAgMC0uMTM3LTMuNjE0IDIuMzgyIDIuMzgyIDAgMCAwLS44My0uNjMzIDIuNzc3IDIuNzc3IDAgMCAwLTEuMTEtLjIzOCAzLjYxNCAzLjYxNCAwIDAgMC0xLjM2LjI1MiAyLjk2IDIuOTYgMCAwIDAtMS4yMDUuNzY5IDIuOTk5IDIuOTk5IDAgMCAwLS41ODYgMS4wODljLS4xMy4zOTItLjE4MS44MDYtLjE1IDEuMjE4YTQuNDU4IDQuNDU4IDAgMCAwIC40MDIgMS41NzkuNTQ1LjU0NSAwIDAgMS0uMzI2Ljc0MmwtMi41ODcuODQ0YS41MzguNTM4IDAgMCAxLS42NC0uMjQ1bC0uMTAyLS4yMjVhNy4zODUgNy4zODUgMCAwIDEtLjI2NS0uNjI2IDYuNTA3IDYuNTA3IDAgMCAxLS40MTUtMi4zOTYgNi4wMzcgNi4wMzcgMCAwIDEgLjUzNy0yLjM5NiA2LjYxNiA2LjYxNiAwIDAgMSAxLjUwNS0yLjEwMyA3LjYwMyA3LjYwMyAwIDAgMSAyLjYxMy0xLjU0NSA4LjU1NSA4LjU1NSAwIDAgMSAzLjA3Ny0uNTkyIDcuMDM4IDcuMDM4IDAgMCAxIDIuNTcyLjQ4M2MuNzQxLjMwNSAxLjQwNi43NyAxLjk0NyAxLjM2MmE1Ljc4NSA1Ljc4NSAwIDAgMSAxLjIzMiAxLjk1MyA1LjY4IDUuNjggMCAwIDEgLjMxMyAzLjE5OSA4LjEgOC4xIDAgMCAxLTEuMjY2IDIuODc5bC0uODU4IDEuMjZhMy40ODUgMy40ODUgMCAwIDAtLjY4IDEuNjI2IDMuNzQzIDMuNzQzIDAgMCAwIDAgLjc2OSAzLjkgMy45IDAgMCAwIC4xNS43ODMuMzU0LjM1NCAwIDAgMS0uMjUyLjM3NGwtMi40NTcuOTR6bS41ODUgNC40NzJjLS4yMzMtLjYtLjIxLTEuMjY4LjA2MS0xLjg1MS4yNTYtLjU5My43NS0xLjA1IDEuMzYxLTEuMjZhMi40MyAyLjQzIDAgMCAxIDMuMTE4IDEuNDM3IDIuMjg3IDIuMjg3IDAgMCAxLS4wODIgMS44MzcgMi4zNjIgMi4zNjIgMCAwIDEtMS4zNjEgMS4yNDYgMi4zODIgMi4zODIgMCAwIDEtMy4wNzctMS40MTZsLS4wMi4wMDd6IiBvcGFjaXR5PSIuMyIgZmlsbD0iI0MxQzdEMCIvPjxwYXRoIGQ9Ik0xMDYuMzQgMTAxLjYwNmwtNC44NjctNC43MTctNi41NTUgNi44MDYgNC44NjcgNC43MTdhOS4xNDggOS4xNDggMCAwIDEgMi41MjUgNC40MTcgOS4xNDggOS4xNDggMCAwIDAgMi41MjUgNC40MThsMTkuNzM4IDE5LjEyNWE3LjU0MSA3LjU0MSAwIDEgMCAxMC40OTYtMTAuODM1TDExNS4zMyAxMDYuNDFhOS4xNDggOS4xNDggMCAwIDAtNC40OTktMi4zODIgOS4xNDggOS4xNDggMCAwIDEtNC40OTItMi40MjN6IiBmaWxsPSIjQ0ZENERCIi8+PHBhdGggZD0iTTExMC42NCAxMDMuOTI3YTkuMTQ4IDkuMTQ4IDAgMCAxLTQuMjk0LTIuMzM1bC0xLjQ4NC0xLjQzNmE0LjcyNSA0LjcyNSAwIDAgMC02LjU1NCA2LjgwNmwxLjQ4NCAxLjQzNmE5LjE0OCA5LjE0OCAwIDAgMSAyLjQ3IDQuMjE0IDM5Ljc4MyAzOS43ODMgMCAwIDAgOC4zNzktOC42ODV6IiBmaWxsPSIjREZFMUU1IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bXVsdGlwbHkiLz48cGF0aCBkPSJNNzAuMTA1IDEwNi44NTljLTIxLjYzMy4xNTUtMzkuMzUtMTcuMTUxLTM5LjctMzguNzgyLS4zNTEtMjEuNjMgMTYuNzk0LTM5LjUwMiAzOC40Mi00MC4wNDlhMzkuMTYzIDM5LjE2MyAwIDAgMSAyOC4wNTYgMTEuMDk1IDM5LjQyMiAzOS40MjIgMCAwIDEtMjYuNzc2IDY3LjczNnptLTEuMTU3LTY5LjQyNEM1NC42MyAzNy42NjcgNDIuNDcgNDcuOTggMzkuOTA1IDYyLjA2OWMtMi41NjYgMTQuMDg4IDUuMTc3IDI4LjAyNiAxOC40OTQgMzMuMjkgMTMuMzE3IDUuMjY1IDI4LjQ5OC4zOSAzNi4yNi0xMS42NDMgNy43NjEtMTIuMDM0IDUuOTQyLTI3Ljg3NS00LjM0Ni0zNy44MzVhMjkuODE4IDI5LjgxOCAwIDAgMC0yMS4zNjUtOC40NDZ6IiBmaWxsPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDEwKSIvPjxwYXRoIGQ9Ik04NS42MiA2OC42ODRsLTMuNjM0LTMuNTUzYTEuMzYxIDEuMzYxIDAgMCAwLTEuOTI2IDBsLTYuNjM2IDYuODA2LTYuODA2LTYuNjg0YTEuMzYxIDEuMzYxIDAgMCAwLTEuOTI2IDBsLTMuNTc0IDMuNjM1YTEuMzYxIDEuMzYxIDAgMCAwIDAgMS45MjZsNi44MDcgNi42NjMtNi42NjQgNi44MDdhMS4zNjEgMS4zNjEgMCAwIDAgMCAxLjkyNmwzLjYzNSAzLjU3M2ExLjM2MSAxLjM2MSAwIDAgMCAxLjkyNiAwbDYuNjYzLTYuODA2IDYuODA3IDYuNjYzYTEuMzYxIDEuMzYxIDAgMCAwIDEuOTI2IDBsMy41NzMtMy42MzRhMS4zNjEgMS4zNjEgMCAwIDAgMC0xLjkyNmwtNi44MDYtNi42NjQgNi42NjMtNi44MDZhMS4zNjEgMS4zNjEgMCAwIDAtLjAyNy0xLjkyNnoiIGZpbGw9IiNDMUM3RDAiLz48L2c+PC9zdmc+";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9Ii0zNi45MDQlIiB5MT0iNzIuMTAxJSIgeDI9IjczLjUyOCUiIHkyPSIzNi41NTglIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iLjEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNC4yMiUiIHkxPSI4NS4zNjUlIiB4Mj0iODUuMjU3JSIgeTI9IjE0LjY1MSUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjQzFDN0QwIiBvZmZzZXQ9IjU2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiNFOUVCRUYiIHN0b3Atb3BhY2l0eT0iLjUiIG9mZnNldD0iOTclIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOTYuMzMyIDExMC4yOTVsLTYuNDA5LTMuODgxLTUuMzk4IDguOTEzIDYuNDA5IDMuODgyYTEwLjExMyAxMC4xMTMgMCAwIDEgMy44MSA0LjEzNyAxMC4xMTMgMTAuMTEzIDAgMCAwIDMuODEyIDQuMTM4bDI2IDE1Ljc0N2E4LjM0IDguMzQgMCAxIDAgOC42NC0xNC4yNjZsLTI2LTE1Ljc0OGExMC4xMTMgMTAuMTEzIDAgMCAwLTUuNDMyLTEuNDYgMTAuMTEzIDEwLjExMyAwIDAgMS01LjQzMi0xLjQ2MnoiIGZpbGw9IiNDRkQ0REIiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05Ni4zMzIgMTEwLjI5NWwtMS45NTItMS4xODJhNS4yMSA1LjIxIDAgMSAwLTUuMzk5IDguOTEzbDEuOTUyIDEuMTgzYTEwLjExMyAxMC4xMTMgMCAwIDEgMy44MTIgNC4xMzcgMTAuMTEzIDEwLjExMyAwIDAgMCAzLjgxIDQuMTM4bDI2IDE1Ljc0N2E4LjM0IDguMzQgMCAxIDAgOC42NDEtMTQuMjY2bC0yNi0xNS43NDhhMTAuMTEzIDEwLjExMyAwIDAgMC01LjQzMi0xLjQ2IDEwLjExMyAxMC4xMTMgMCAwIDEtNS40MzItMS40NjJ6IiBmaWxsPSIjQzFDN0QwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMTAxLjUzOCAxMTEuNzUzYTEwLjExIDEwLjExIDAgMCAxLTUuMjA2LTEuNDU4bC0xLjk1Mi0xLjE4MmE1LjIxIDUuMjEgMCAxIDAtNS4zOTggOC45MTNsMS45NTIgMS4xODNhMTAuMTEgMTAuMTEgMCAwIDEgMy42OTkgMy45MyA0My45NzYgNDMuOTc2IDAgMCAwIDYuOTA1LTExLjM4NnoiIGZpbGw9IiNBNUFEQkEiIGZpbGwtcnVsZT0ibm9uemVybyIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ii8+PHBhdGggZD0iTTI2LjU0NCA3NS4xNzdjLTkuNDkzIDE1LjY3NC00LjQ4MyAzNi4wNzUgMTEuMTkgNDUuNTY5IDE1LjY3NCA5LjQ5MyAzNi4wNzUgNC40ODMgNDUuNTY5LTExLjE5IDkuNDkzLTE1LjY3NCA0LjQ4My0zNi4wNzYtMTEuMTktNDUuNTctMTUuNjc0LTkuNDkzLTM2LjA3Ni00LjQ4Mi00NS41NyAxMS4xOTF6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNDEuMTE0IDExOS41ODhjMTQuODg5LTMuNjYgMjUuMzM1LTE3LjA0IDI1LjI3Mi0zMi4zNzJhMzEuODQxIDMxLjg0MSAwIDAgMS0zLjI5NyAxLjQ3N2MtMTAuMTc4IDMuODY0LTE5LjI0MyAxLjM2OC0yMy42NTcuMDg1LTEzLjI0Mi0zLjg1LTE2LjA2Ny0xMS4yNjQtMjUuMzA0LTE1LjkzM2EzMS4zMTIgMzEuMzEyIDAgMCAwLTkuMTM1LTIuOTM2Yy0uMDU2LjA5LS4xMTYuMTc3LS4xNzEuMjY4YTMzLjE4IDMzLjE4IDAgMCAwIDM2LjI5MiA0OS40MXoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuNzIyIDUpIi8+PHBhdGggZmlsbD0iI0IzQkFDNSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNzIuNDEgODMuMTVsLTcuMjQtNy4xMS05Ljg4NyAxMC4wNjgtMTAuMDY3LTkuODg4LTcuMTEgNy4yMzggMTAuMDY4IDkuODg4LTkuODg4IDEwLjA2OCA3LjIzOCA3LjExIDkuODg4LTEwLjA2OCAxMC4wNjcgOS44ODggNy4xMS03LjIzOC0xMC4wNjgtOS44ODh6Ii8+PHBhdGggZD0iTTYxLjYzMiAyNC4wNTdMNTUuMDQgNS4yOTNhLjQzNy40MzcgMCAwIDAtLjg0Ni4wOTRsLTIuMTI2IDE4LjE4NS00LjIwNC0uNDkxYS40MzcuNDM3IDAgMCAwLS40NjMuNTc5bDYuNTkyIDE4Ljc2NGEuNDM3LjQzNyAwIDAgMCAuODQ3LS4wOTRsMi4xMjUtMTguMTg2IDQuMjA0LjQ5MmEuNDM3LjQzNyAwIDAgMCAuNDYzLS41OHpNNDAuODg4IDM1Ljk4bC04LjE5NC01LjU5NGEuMTkyLjE5MiAwIDAgMC0uMjc1LjI1NGw0LjUwNiA3LjkxNS0xLjg0MSAxLjA0OGEuMTkyLjE5MiAwIDAgMC0uMDEzLjMyNmw4LjE5NCA1LjU5NGEuMTkyLjE5MiAwIDAgMCAuMjc1LS4yNTRsLTQuNTA2LTcuOTE1IDEuODQxLTEuMDQ4YS4xOTIuMTkyIDAgMCAwIC4wMTMtLjMyNnoiIGZpbGw9IiNDMUM3RDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik03NS45MDMgMjguMzYzYy0uNDUgMS4zNDUtNi4zMTUtLjYyLTYuNzY2LjcyNC0uNDUgMS4zNDUgNS40MTUgMy4zMSA0Ljk2NSA0LjY1My0uNDUgMS4zNDQtNi4zMTUtLjYyLTYuNzY2LjcyNC0uNDUgMS4zNDUgNS40MTQgMy4zMSA0Ljk2MyA0LjY1NS0uNDUgMS4zNDYtNi4zMTUtLjYxOC02Ljc2Ni43MjgtLjQ1MSAxLjM0NiA1LjQxMyAzLjMxMSA0Ljk2MiA0LjY1OG0xOS4xNjYtLjc5OGMtMS4wMzYuOTY5LTUuMDkzLTMuMzczLTYuMTI5LTIuNDA1LTEuMDM2Ljk2OCAzLjAyMSA1LjMxIDEuOTg1IDYuMjc4LTEuMDM2Ljk2OS01LjA5My0zLjM3My02LjEyOS0yLjQwNS0uNDguNDQ5LjEzNSAxLjYyNC44MyAyLjg1Mm0tNTguNDItNC4yMjhjMS40MDcuMTcyLjY4NSA2LjA3IDIuMDkzIDYuMjQyIDEuNDA3LjE3MiAyLjEyOS01LjcyNiAzLjUzNy01LjU1NCAxLjQwNy4xNzMuNjg1IDYuMDcgMi4wOTIgNi4yNDMuNjUzLjA4IDEuMTU5LTEuMTQ2IDEuNjUzLTIuNDY3IiBzdHJva2U9IiNERkUxRTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTQzLjc0NyAxMzAuOTNDMTkuOTEyIDEzMS4xMDMuMzkzIDExMi4wMzUuMDA2IDg4LjIwMy0uMzgxIDY0LjM3IDE4LjUxIDQ0LjY3OCA0Mi4zMzcgNDQuMDc2QTQzLjE1IDQzLjE1IDAgMCAxIDczLjI1IDU2LjI5OWE0My40MzUgNDMuNDM1IDAgMCAxLTI5LjUwMiA3NC42MzJ6bS0xLjI3NS03Ni40OWMtMTUuNzc1LjI1Ni0yOS4xNzMgMTEuNjItMzIgMjcuMTQxLTIuODI2IDE1LjUyMiA1LjcwNiAzMC44OCAyMC4zNzggMzYuNjggMTQuNjcyIDUuOCAzMS4zOTkuNDMgMzkuOTUtMTIuODMgOC41NTItMTMuMjU4IDYuNTQ3LTMwLjcxLTQuNzg4LTQxLjY4NWEzMi44NTQgMzIuODU0IDAgMCAwLTIzLjU0LTkuMzA2eiIgZmlsbD0idXJsKCNiKSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMiA1KSIvPjwvZz48L3N2Zz4=";
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(4), n(0), n(30), n(24)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i) {
                        "use strict";
                        var a = d(n).default,
                            c = d(r).default,
                            s = r.Component,
                            u = d(o).default,
                            l = d(i).default;
                        function d(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var f = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            h = (function (e) {
                                function t() {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var e = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                                    return (e.state = { hasError: !1 }), e;
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, s),
                                    f(t, [
                                        {
                                            key: "componentDidCatch",
                                            value: function () {
                                                this.setState({ hasError: !0 });
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                return this.state.hasError ? c.createElement(u, { imageClass: "error-search-content", caption: l.get("search.ui.generic.error") }) : this.props.children;
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (h.propTypes = { children: a.node.isRequired }), (t.default = h), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(17), n(4), n(0), n(106), n(40), n(24), n(29), n(30), n(107), n(110), n(113), n(116), n(119), n(28), n(122)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i, a, c, s, u, l, d, f, h, p, g) {
                        "use strict";
                        var m = n.CONTEXT_PATH,
                            y = T(r).default,
                            b = T(o).default,
                            M = o.Component,
                            v = i.getRecentContents,
                            I = a.getRecentSpaces,
                            x = T(c).default,
                            S = s.isCurrentUserAnonymous,
                            C = T(u).default,
                            N = T(l).default,
                            A = T(d).default,
                            _ = T(f).default,
                            D = T(h).default,
                            w = T(p).default,
                            j = g.updateFocusableElements;
                        function T(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var L = function (e, t) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e))
                                    return (function (e, t) {
                                        var n = [],
                                            r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                        } catch (e) {
                                            (o = !0), (i = e);
                                        } finally {
                                            try {
                                                !r && c.return && c.return();
                                            } finally {
                                                if (o) throw i;
                                            }
                                        }
                                        return n;
                                    })(e, t);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance");
                            },
                            E = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            k = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (
                                        (n.state = {
                                            recentSpaceItems: [],
                                            recentContentItems: [],
                                            errorRetrievingRecentItems: null,
                                            isRecentContentsLoading: !1,
                                            isRecentSpacesLoading: !1,
                                            isAnonymous: !1,
                                            caption: "",
                                            isViewMoreLinkShown: !1,
                                        }),
                                        (n.activeCancellablePromises = new Set()),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, M),
                                    E(t, [
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                S()
                                                    ? this.setState({ isAnonymous: !0, caption: x.get("search.ui.recent.items.anonymous") })
                                                    : (this.setState({ isRecentContentsLoading: !0, isRecentSpacesLoading: !0, caption: x.get("search.ui.recent.items.empty") }), this._loadRecentItems());
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                this.activeCancellablePromises.forEach(function (e) {
                                                    return e.cancel();
                                                }),
                                                    (this.isComponentUnmounted = !0);
                                            },
                                        },
                                        {
                                            key: "_fetchRecentContents",
                                            value: function () {
                                                var e = this,
                                                    t = v();
                                                return (
                                                    this.activeCancellablePromises.add(t),
                                                    t
                                                        .then(function (t) {
                                                            if (t) return t.length >= 10 && e.setState({ isViewMoreLinkShown: !0 }), { recentContentItems: t };
                                                        })
                                                        .catch(function (e) {
                                                            return { getRecentContentsError: e };
                                                        })
                                                        .then(function (n) {
                                                            return e.activeCancellablePromises.delete(t), n;
                                                        })
                                                );
                                            },
                                        },
                                        {
                                            key: "_fetchRecentSpaces",
                                            value: function () {
                                                var e = this,
                                                    t = I();
                                                return (
                                                    this.activeCancellablePromises.add(t),
                                                    t
                                                        .then(function (e) {
                                                            return { recentSpaceItems: e };
                                                        })
                                                        .catch(function (e) {
                                                            return { getRecentSpacesError: e };
                                                        })
                                                        .then(function (n) {
                                                            return e.activeCancellablePromises.delete(t), n;
                                                        })
                                                );
                                            },
                                        },
                                        {
                                            key: "_handleFetchResult",
                                            value: function (e) {
                                                var t = e.getRecentContentsError,
                                                    n = e.recentContentItems,
                                                    r = void 0 === n ? [] : n,
                                                    o = e.getRecentSpacesError,
                                                    i = e.recentSpaceItems,
                                                    a = void 0 === i ? [] : i;
                                                this.isComponentUnmounted ||
                                                    (this.setState({ isRecentContentsLoading: !1, recentContentItems: r, isRecentSpacesLoading: !1, recentSpaceItems: a }),
                                                    (t || o) &&
                                                        (t ? [] : r).length + (o ? [] : a).length === 0 &&
                                                        this.setState({ errorRetrievingRecentItems: new Error("RecentItemsContainer._handleFetchResult: Error retrieving recent items ") }));
                                            },
                                        },
                                        {
                                            key: "_loadRecentItems",
                                            value: function () {
                                                var e = this,
                                                    t = this.props.onInitialDataRetrieved;
                                                Promise.all([this._fetchRecentContents(), this._fetchRecentSpaces()])
                                                    .then(function (t) {
                                                        var n = L(t, 2),
                                                            r = n[0],
                                                            o = (r = void 0 === r ? {} : r).getRecentContentsError,
                                                            i = r.recentContentItems,
                                                            a = n[1],
                                                            c = (a = void 0 === a ? {} : a).getRecentSpacesError,
                                                            s = a.recentSpaceItems;
                                                        return e._handleFetchResult({ getRecentContentsError: o, recentContentItems: i, getRecentSpacesError: c, recentSpaceItems: s });
                                                    })
                                                    .then(function () {
                                                        t && t(), j();
                                                    });
                                            },
                                        },
                                        {
                                            key: "isEmptyState",
                                            value: function () {
                                                var e = this.state,
                                                    t = e.isAnonymous,
                                                    n = e.recentContentItems,
                                                    r = e.recentSpaceItems;
                                                return !0 === t || (0 === n.length && 0 === r.length && this.isNotLoading());
                                            },
                                        },
                                        {
                                            key: "isNotLoading",
                                            value: function () {
                                                var e = this.state,
                                                    t = e.isRecentSpacesLoading,
                                                    n = e.isRecentContentsLoading;
                                                return !t && !n;
                                            },
                                        },
                                        {
                                            key: "renderLoadingItems",
                                            value: function () {
                                                var e = this.state,
                                                    t = e.isRecentContentsLoading,
                                                    n = e.recentContentItems,
                                                    r = e.isRecentSpacesLoading,
                                                    o = e.recentSpaceItems,
                                                    i = e.isViewMoreLinkShown,
                                                    a = this.props.onKeyDown,
                                                    c = Array(10).fill(null),
                                                    s = Array(5).fill(null);
                                                return b.createElement(
                                                    b.Fragment,
                                                    null,
                                                    t &&
                                                        b.createElement(
                                                            N,
                                                            { id: "recent-view-items-section", title: x.get("search.ui.recent.pages") },
                                                            c.map(function (e, t) {
                                                                return b.createElement(_, { key: t });
                                                            })
                                                        ),
                                                    !!n.length &&
                                                        b.createElement(
                                                            N,
                                                            { id: "recent-view-items-section", title: x.get("search.ui.recent.pages") },
                                                            n.map(function (e) {
                                                                return b.createElement(A, { key: e.id, payload: e, onKeyDown: a });
                                                            })
                                                        ),
                                                    i &&
                                                        b.createElement(
                                                            "div",
                                                            { className: "RecentItemsContainer_recent-page-container__3ic8-" },
                                                            b.createElement("a", { id: "search-panel-recent-page-link", href: m + "/dashboard.action#recently-viewed", onKeyDown: a }, x.get("search.ui.recent.link.text"))
                                                        ),
                                                    r &&
                                                        b.createElement(
                                                            N,
                                                            { id: "recent-space-items-section", title: x.get("search.ui.recent.spaces") },
                                                            s.map(function (e, t) {
                                                                return b.createElement(w, { key: t });
                                                            })
                                                        ),
                                                    !!o.length &&
                                                        b.createElement(
                                                            N,
                                                            { id: "recent-space-items-section", title: x.get("search.ui.recent.spaces") },
                                                            o.map(function (e) {
                                                                return b.createElement(D, { key: e.key, payload: e, onKeyDown: a });
                                                            })
                                                        )
                                                );
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.state,
                                                    t = e.errorRetrievingRecentItems,
                                                    n = e.caption;
                                                if (t) throw t;
                                                return b.createElement(b.Fragment, null, this.isEmptyState() ? b.createElement(C, { imageClass: "empty-recent-items", caption: n }) : this.renderLoadingItems());
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (k.propTypes = { onKeyDown: y.func, onInitialDataRetrieved: y.func }), (t.default = k), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(21)]),
                void 0 ===
                    (o = function (e, t) {
                        "use strict";
                        e.getRecentContents = function () {
                            return n(r, { limit: 10 });
                        };
                        var n = t.fetchWrapperCancellable,
                            r = "/rest/recentlyviewed/latest/recent";
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(4), n(0), n(108)]),
                void 0 ===
                    (o = function (e, t, n, r) {
                        "use strict";
                        var o = a(n).default,
                            i = a(r).default;
                        function a(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        function c(e) {
                            var t = e.id,
                                n = e.title,
                                r = e.children;
                            return i.createElement("div", { id: t, className: "ListWithHeading_list-with-heading-component__1HKAv" }, i.createElement("div", { className: "aui-nav-heading ListWithHeading_aui-nav-heading__3lLpe" }, n), r);
                        }
                        (c.propTypes = { id: o.string.isRequired, title: o.string.isRequired, children: o.node.isRequired }), (t.default = c), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(109);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".ListWithHeading_list-with-heading-component__1HKAv {\n    margin-top: 15px;\n    padding-right: 15px;\n}\n\n.ListWithHeading_aui-nav-heading__3lLpe {\n    margin-left: 10px;\n    margin-bottom: 10px;\n}\n",
                "",
            ]),
                (t.locals = { "list-with-heading-component": "ListWithHeading_list-with-heading-component__1HKAv", "aui-nav-heading": "ListWithHeading_aui-nav-heading__3lLpe" });
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(17), n(4), n(0), n(23), n(111)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i) {
                        "use strict";
                        var a = n.CONTEXT_PATH,
                            c = d(r).default,
                            s = d(o).default,
                            u = i.SEARCH_UI_OPEN_RECENT_CONTENT,
                            l = i.triggerAnalytic;
                        function d(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        function f() {
                            l(u);
                        }
                        function h(e) {
                            var t = e.payload,
                                n = e.onKeyDown,
                                r = "confluence-icon-" + t.type;
                            return s.createElement(
                                "a",
                                { className: "search-drawer-list-item RecentContentItem_result-item-container__iBkZU", href: a + t.url, onClick: f, onKeyDown: n },
                                s.createElement("div", { className: r }),
                                s.createElement(
                                    "div",
                                    { className: "RecentContentItem_result-title-group__2VhcL" },
                                    s.createElement("div", { className: "RecentContentItem_result-item-title__f9hg-", title: t.title }, t.title),
                                    s.createElement("div", { className: "RecentContentItem_result-item-metadata__1a_7Y" }, t.space)
                                )
                            );
                        }
                        (h.propTypes = { payload: c.shape({ title: c.string.isRequired, url: c.string.isRequired, type: c.string.isRequired, space: c.string.isRequired }).isRequired, onKeyDown: c.func }),
                            (t.default = h),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(112);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                /* SU CUSTOM: Removed .RecentContentItem_result-item-container__iBkZU:focus */
                /*            Added .RecentContentItem_result-item-container__iBkZU:focus - Outline-Offset */
                '.RecentContentItem_result-item-container__iBkZU {\n    display: flex;\n    padding: 8px 20px;\n}\n\n.RecentContentItem_result-item-container__iBkZU:hover {\n    background: #f4f5f7;\n    border-radius: 3px;\n    outline: 0;\n}\n\n.RecentContentItem_result-item-container__iBkZU:focus {\n    outline-offset: -2px\n}\n\na.RecentContentItem_result-item-container__iBkZU:hover {\n    text-decoration: none;\n}\n\n.RecentContentItem_result-item-container__iBkZU [class^="confluence-icon-"] {\n    width: 24px;\n    height: 24px;\n    background-size: cover;\n}\n\n.RecentContentItem_result-title-group__2VhcL {\n    margin-left: 15px;\n    width: 440px;\n}\n\n.RecentContentItem_result-item-title__f9hg- {\n    color: #172b4d;\n    line-height: 16px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.RecentContentItem_result-item-metadata__1a_7Y {\n    line-height: 14px;\n    font-size: 12px;\n    color: #42526E;\n    font-weight: 500;\n    margin-top: 2px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n',
                "",
            ]),
                (t.locals = {
                    "result-item-container": "RecentContentItem_result-item-container__iBkZU",
                    "result-title-group": "RecentContentItem_result-title-group__2VhcL",
                    "result-item-title": "RecentContentItem_result-item-title__f9hg-",
                    "result-item-metadata": "RecentContentItem_result-item-metadata__1a_7Y",
                });
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(0), n(114)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        var r,
                            o = ((r = n), r && r.__esModule ? r : { default: r }).default;
                        (t.default = function () {
                            return o.createElement(
                                "div",
                                { className: "RecentContentLoadingItem_recent-content-component__2cJSm" },
                                o.createElement("div", { className: "RecentContentLoadingItem_confluence-icon-loading__1G_3b" }),
                                o.createElement("div", { className: "RecentContentLoadingItem_result-item-title-loading__1rMRx" }),
                                o.createElement("div", { className: "RecentContentLoadingItem_result-item-metadata-loading__81MqS" })
                            );
                        }),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(115);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".RecentContentLoadingItem_recent-content-component__2cJSm {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n.RecentContentLoadingItem_confluence-icon-loading__1G_3b {\n    background-color: #f5f5f5;\n    width: 24px;\n    float: left;\n    margin-left: 20px;\n    height: 24px;\n}\n\n.RecentContentLoadingItem_result-item-title-loading__1rMRx {\n    background-color: #f5f5f5;\n    height: 16px;\n    width: 60%;\n    margin-left: 50px;\n}\n\n.RecentContentLoadingItem_result-item-metadata-loading__81MqS {\n    background-color: #f5f5f5;\n    width: 40%;\n    height: 14px;\n    margin-top: 2px;\n    margin-left: 50px;\n}\n",
                "",
            ]),
                (t.locals = {
                    "recent-content-component": "RecentContentLoadingItem_recent-content-component__2cJSm",
                    "confluence-icon-loading": "RecentContentLoadingItem_confluence-icon-loading__1G_3b",
                    "result-item-title-loading": "RecentContentLoadingItem_result-item-title-loading__1rMRx",
                    "result-item-metadata-loading": "RecentContentLoadingItem_result-item-metadata-loading__81MqS",
                });
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(17), n(4), n(0), n(23), n(117)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i) {
                        "use strict";
                        var a = n.CONTEXT_PATH,
                            c = d(r).default,
                            s = d(o).default,
                            u = i.SEARCH_UI_OPEN_RECENT_SPACE,
                            l = i.triggerAnalytic;
                        function d(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        function f() {
                            l(u);
                        }
                        function h(e) {
                            var t = e.payload,
                                n = e.onKeyDown;
                            return s.createElement(
                                "a",
                                { className: "search-drawer-list-item RecentSpaceItem_recent-space-item-component__1oCK5", href: a + t.href, onClick: f, onKeyDown: n },
                                s.createElement("img", { className: "RecentSpaceItem_recent-space-item-icon__3NSIm", src: t.logo, alt: "space icon" }),
                                s.createElement("div", { className: "RecentSpaceItem_recent-space-title__qUP_R", title: t.name }, t.name)
                            );
                        }
                        (h.propTypes = { payload: c.shape({ name: c.string.isRequired, href: c.string.isRequired, logo: c.string.isRequired }).isRequired, onKeyDown: c.func }), (t.default = h), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(118);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                /* SU CUSTOM */
                /* Removed outline from .RecentSpaceItem_recent-space-item-component__1oCK5 */
                /* Added Outline-Offset */
                ".RecentSpaceItem_recent-space-item-component__1oCK5 {\n    display: flex;\n    align-items: center;\n    padding: 8px 20px;\n}\n\n.RecentSpaceItem_recent-space-item-component__1oCK5, .RecentSpaceItem_recent-space-item-component__1oCK5:hover, .RecentSpaceItem_recent-space-item-component__1oCK5:focus {\n    border-radius: 3px;\n    color: #172B4D;\n}\n\n.RecentSpaceItem_recent-space-item-component__1oCK5:focus {\n    outline-offset: -2px\n}\n\na.RecentSpaceItem_recent-space-item-component__1oCK5:hover{\n    text-decoration: none;\n}\n\n.RecentSpaceItem_recent-space-item-component__1oCK5:hover, .RecentSpaceItem_recent-space-item-component__1oCK5:focus {\n    background: #f4f5f7;\n}\n\n.RecentSpaceItem_recent-space-item-component__1oCK5:hover {\n    outline: 0;\n}\n\n.RecentSpaceItem_recent-space-item-icon__3NSIm {\n    width: 24px;\n    height: 24px;\n    border-radius: 3px;\n    margin-right: 15px;\n}\n\n.RecentSpaceItem_recent-space-title__qUP_R {\n    color: #172b4d;\n    display: inline-block;\n    font-weight: 500;\n    margin-bottom: 5px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 455px;\n}\n",
                "",
            ]),
                (t.locals = {
                    "recent-space-item-component": "RecentSpaceItem_recent-space-item-component__1oCK5",
                    "recent-space-item-icon": "RecentSpaceItem_recent-space-item-icon__3NSIm",
                    "recent-space-title": "RecentSpaceItem_recent-space-title__qUP_R",
                });
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(0), n(120)]),
                void 0 ===
                    (o = function (e, t, n) {
                        "use strict";
                        var r,
                            o = ((r = n), r && r.__esModule ? r : { default: r }).default;
                        (t.default = function () {
                            return o.createElement(
                                "div",
                                { className: "RecentSpaceLoadingItem_recent-space-item-component__3_Yra" },
                                o.createElement("div", { className: "RecentSpaceLoadingItem_recent-space-item-icon-loading__38bx_" }),
                                o.createElement("div", { className: "RecentSpaceLoadingItem_recent-space-title-loading__11GMh" })
                            );
                        }),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(121);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".RecentSpaceLoadingItem_recent-space-item-component__3_Yra {\n    margin-bottom: 10px;\n}\n\n.RecentSpaceLoadingItem_recent-space-item-icon-loading__38bx_ {\n    display: inline-block;\n    background-color: #f5f5f5;\n    height: 24px;\n    width: 24px;\n    margin-left: 20px;\n}\n\n.RecentSpaceLoadingItem_recent-space-title-loading__11GMh {\n    display: inline-block;\n    background-color: #f5f5f5;\n    height: 18px;\n    width: 56%;\n    margin-bottom: 3px;\n    margin-left: 15px;\n}\n",
                "",
            ]),
                (t.locals = {
                    "recent-space-item-component": "RecentSpaceLoadingItem_recent-space-item-component__3_Yra",
                    "recent-space-item-icon-loading": "RecentSpaceLoadingItem_recent-space-item-icon-loading__38bx_",
                    "recent-space-title-loading": "RecentSpaceLoadingItem_recent-space-title-loading__11GMh",
                });
        },
        function (e, t, n) {
            var r = n(123);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".RecentItemsContainer_recent-page-container__3ic8- a {\n    display: block;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n    color: #505F79;\n}\n\n.RecentItemsContainer_recent-page-container__3ic8- a:focus{\n    background: #f4f5f7;\n    outline: 0;\n}\n",
                "",
            ]),
                (t.locals = { "recent-page-container": "RecentItemsContainer_recent-page-container__3ic8-" });
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(17), n(4), n(0), n(24), n(23), n(29), n(30), n(125), n(132), n(45), n(135)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i, a, c, s, u, l, d) {
                        "use strict";
                        var f = n.CONTEXT_PATH,
                            h = N(r).default,
                            p = N(o).default,
                            g = o.Component,
                            m = N(i).default,
                            y = a.SEARCH_UI_OPEN_SEARCH_EXTENSION_POINT_RESULT,
                            b = a.SEARCH_UI_OPEN_SEARCH_RESULT,
                            M = a.triggerAnalytic,
                            v = c.isCurrentUserAnonymous,
                            I = N(s).default,
                            x = u.ContentNameSearchItemsPanel,
                            S = N(l).default,
                            C = N(d).default;
                        function N(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var A =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                },
                            _ = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            D = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (
                                        (n.onClickSearchResult = n.onClickSearchResult.bind(n)),
                                        (n.onClickContentNameSearchItem = n.onClickContentNameSearchItem.bind(n)),
                                        (n._i18n = { loadMoreText: m.get("search.ui.infinite.scroll.button.text") }),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, g),
                                    _(t, [
                                        {
                                            key: "onClickContentNameSearchItem",
                                            value: function (e) {
                                                var t = this._getExtensionPointAnalyticsContext({ position: e });
                                                M(y, t);
                                            },
                                        },
                                        {
                                            key: "onClickSearchResult",
                                            value: function (e) {
                                                var t = this._getAnalyticsContext({ position: e });
                                                M(b, t);
                                            },
                                        },
                                        {
                                            key: "_getContentNameSearchItemsDelta",
                                            value: function () {
                                                var e = this.props.contentNameSearchItemsContext || {},
                                                    t = e.items,
                                                    n = e.hasError,
                                                    r = e.isLoading;
                                                return e.isEnabled && t && !n && !r ? t.length : 0;
                                            },
                                        },
                                        {
                                            key: "_getExtensionPointAnalyticsContext",
                                            value: function (e) {
                                                var t = e.position,
                                                    n = this._getAnalyticsContext({ position: t }),
                                                    r = this.props.contentNameSearchItemsContext.items;
                                                return (n.contentType = r[t] && r[t].content.type), n;
                                            },
                                        },
                                        {
                                            key: "_getAnalyticsContext",
                                            value: function (e) {
                                                var t = e.position,
                                                    n = this.props,
                                                    r = n.searchId,
                                                    o = n.searchFilters;
                                                return {
                                                    searchId: r,
                                                    position: t,
                                                    spaces: o.spaces.length,
                                                    contributors: o.contributors.length,
                                                    contentTypes: o.contentTypes.join(","),
                                                    date: o.date,
                                                    labels: o.labels.length,
                                                    spaceCategories: o.spaceCategories.length,
                                                };
                                            },
                                        },
                                        {
                                            key: "renderSearchItems",
                                            value: function () {
                                                var e = this,
                                                    t = this.props,
                                                    n = t.totalSize,
                                                    r = t.searchItems,
                                                    o = t.loadMoreItems,
                                                    i = t.isLoadingMore,
                                                    a = t.contentNameSearchItemsContext,
                                                    c = t.onKeyDown,
                                                    s = this._i18n,
                                                    u = v()
                                                        ? "<span>" + m.get("search.ui.search.result.anonymous", [n, '<a href="' + f + '/login.action">', "</a>"]) + "</span>"
                                                        : "<span>" + m.get("search.ui.search.result", [n + this._getContentNameSearchItemsDelta()]) + "</span>";
                                                return p.createElement(
                                                    "div",
                                                    { id: "search-result-container", className: "SearchItemsPanel_search-items-container__1zmZm" },
                                                    p.createElement("div", { className: "SearchItemsPanel_search-result-heading__3sMUN", dangerouslySetInnerHTML: { __html: u } }),
                                                    p.createElement(S, {
                                                        cssClass: "search-section-items",
                                                        headerPanel: a.isEnabled
                                                            ? p.createElement(x, {
                                                                  hasError: a.hasError,
                                                                  items: a.items,
                                                                  isLoading: a.isLoading,
                                                                  isAllTopItemsLoaded: a.isAllTopItemsLoaded,
                                                                  isMoreItemsAvailable: a.isMoreItemsAvailable,
                                                                  onLoadAllTopItemsClicked: a.onLoadAllTopItemsClicked,
                                                                  onItemClicked: this.onClickContentNameSearchItem,
                                                                  onKeyDown: c,
                                                              })
                                                            : void 0,
                                                        items: r.map(function (t, n) {
                                                            return p.createElement(C, A({ key: n, position: n + 1, onClickSearchResult: e.onClickSearchResult }, t, { onKeyDown: c }));
                                                        }),
                                                        next: o,
                                                        hasMore: r.length < n,
                                                        loadMoreText: s.loadMoreText,
                                                        isLoadingMore: i,
                                                        startLoadingDistancePoint: 70,
                                                    })
                                                );
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.totalSize,
                                                    n = e.noItemsFoundLabel;
                                                return p.createElement(
                                                    "div",
                                                    null,
                                                    0 === t && 0 === this._getContentNameSearchItemsDelta() ? p.createElement(I, { imageClass: "empty-search-content", caption: n }) : this.renderSearchItems()
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (D.propTypes = {
                            searchItems: h.arrayOf(h.shape({ title: h.string.isRequired, url: h.string.isRequired, iconCssClass: h.string, subtitle: h.string, body: h.string, date: h.string })),
                            totalSize: h.number.isRequired,
                            loadMoreItems: h.func,
                            isLoadingMore: h.bool,
                            searchId: h.string,
                            searchFilters: h.shape({ searchText: h.string, spaces: h.arrayOf(h.string), contributors: h.arrayOf(h.string), contentTypes: h.arrayOf(h.string), date: h.string }),
                            contentNameSearchItemsContext: h.shape({
                                items: h.arrayOf(h.shape({ title: h.string.isRequired, url: h.string.isRequired, iconCssClass: h.string, subtitle: h.string, body: h.string, date: h.string })),
                                hasError: h.bool,
                                onLoadAllTopItemsClicked: h.func,
                                isLoading: h.bool,
                                isAllTopItemsLoaded: h.bool,
                                isMoreItemsAvailable: h.bool,
                                isEnabled: h.bool,
                            }),
                            onClick: h.func,
                            noItemsFoundLabel: h.oneOfType([h.string, h.element]).isRequired,
                            onKeyDown: h.func,
                        }),
                            (t.default = D),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(4), n(0), n(45), n(24), n(29), n(130)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i) {
                        "use strict";
                        e.ContentNameSearchItemsPanel = void 0;
                        var a = f(t).default,
                            c = f(n).default,
                            s = n.Component,
                            u = f(r).default,
                            l = f(o).default,
                            d = i.isCurrentUserAdmin;
                        function f(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var h =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                },
                            p = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            g = (e.ContentNameSearchItemsPanel = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (
                                        (n.state = { loadAllTopItemsButtonText: "" }),
                                        (n.mapItem = n.mapItem.bind(n)),
                                        (n._i18n = {
                                            loadAllTopItemsAdminButtonText: l.get("search.ui.content.name.search.items.panel.load.all.top.items.admin.button.text"),
                                            loadAllTopItemsButtonText: l.get("search.ui.content.name.search.items.panel.load.all.top.items.button.text"),
                                        }),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, s),
                                    p(t, [
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                this.setState({ loadAllTopItemsButtonText: this.getLoadAllTopItemsButtonText() });
                                            },
                                        },
                                        {
                                            key: "getLoadAllTopItemsButtonText",
                                            value: function () {
                                                return d() ? this._i18n.loadAllTopItemsAdminButtonText : this._i18n.loadAllTopItemsButtonText;
                                            },
                                        },
                                        {
                                            key: "mapItem",
                                            value: function (e, t) {
                                                var n = this.props,
                                                    r = n.onItemClicked,
                                                    o = n.onKeyDown;
                                                return c.createElement(u, h({ key: t, position: t + 1, onClickSearchResult: r, onKeyDown: o }, e));
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.isLoading,
                                                    n = e.items,
                                                    r = e.isMoreItemsAvailable,
                                                    o = e.isAllTopItemsLoaded,
                                                    i = e.onLoadAllTopItemsClicked,
                                                    a = e.hasError,
                                                    s = e.onKeyDown,
                                                    u = this.state.loadAllTopItemsButtonText,
                                                    l = !a && !t && r && !o;
                                                return c.createElement(
                                                    c.Fragment,
                                                    null,
                                                    !a && !t && n.map(this.mapItem),
                                                    l && c.createElement("button", { className: "ContentNameSearchItemsPanel_content-name-search-items-panel-button__2avXE", type: "button", onClick: i, onKeyDown: s }, u)
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })());
                        (g.defaultProps = { items: [] }),
                            (g.propTypes = {
                                items: a.arrayOf(a.shape({ title: a.string.isRequired, url: a.string.isRequired, iconCssClass: a.string, subtitle: a.string, body: a.string, date: a.string })),
                                hasError: a.bool,
                                onLoadAllTopItemsClicked: a.func,
                                onItemClicked: a.func,
                                isLoading: a.bool,
                                isAllTopItemsLoaded: a.bool,
                                isMoreItemsAvailable: a.bool,
                                onKeyDown: a.func,
                            });
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(4), n(0)]),
                void 0 ===
                    (o = function (e, t, n, r) {
                        "use strict";
                        var o = a(n).default,
                            i = a(r).default;
                        function a(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        function c(e) {
                            var t = e.content,
                                n = [],
                                r = t.match(/@@@hl@@@.*?@@@endhl@@@/g);
                            if (null === r || 0 === r.length) n.push({ highlight: !1, content: t });
                            else {
                                var o = t;
                                r.forEach(function (e) {
                                    var t = o.indexOf(e);
                                    if (t > 0) {
                                        var r = o.substring(0, t);
                                        n.push({ highlight: !1, content: r }), (o = o.substring(t));
                                    }
                                    var i = e.replace(/@@@hl@@@/g, "");
                                    (i = i.replace(/@@@endhl@@@/g, "")), n.push({ highlight: !0, content: i }), (o = o.substring(e.length));
                                }),
                                    o.length > 0 && n.push({ highlight: !1, content: o });
                            }
                            var a = n.map(function (e, t) {
                                return e.highlight ? i.createElement("strong", { key: t }, e.content) : e.content;
                            });
                            return i.createElement("span", null, a);
                        }
                        (c.propTypes = { content: o.string.isRequired }), (t.default = c), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(128);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            var r = n(35);
            (t = e.exports = n(10)(!1)).push([
                e.i,
                /* SU CUSTOM: Removed inline styles for .SearchContentItem_search-content-item-component__1k0hr outline */
                ".SearchContentItem_search-content-item-component__1k0hr {\n    display: flex;\n    padding: 8px 20px;\n}\n\n.SearchContentItem_search-content-item-component__1k0hr:hover, .SearchContentItem_search-content-item-component__1k0hr:focus {\n    background: #f4f5f7;\n    border-radius: 3px;\n}\n\n.SearchContentItem_search-content-item-component__1k0hr:focus {\n    outline-offset: -2px;\n}\n\na.SearchContentItem_search-content-item-component__1k0hr:hover{\n    text-decoration: none;\n}\n\n.SearchContentItem_content-text-container__3tL5v {\n    overflow: hidden;\n}\n\n.SearchContentItem_content-image-container__3uA1n {\n    flex-basis: 24px;\n    height: 24px;\n    flex-shrink: 0;\n    margin-right: 15px;\n}\n\n.SearchContentItem_content-default-image__Fq_8K {\n    background-image: url(" +
                    r(n(129)) +
                    ");\n}\n\n.SearchContentItem_content-image__2MAdK {\n    width: 24px;\n    height: 24px;\n    border-radius: 2px;\n}\n\ndiv.SearchContentItem_content-image__2MAdK {\n    background-size: cover;\n}\n\nimg.SearchContentItem_content-image__2MAdK{\n    vertical-align: bottom;\n}\n\n.SearchContentItem_content-image-round__1zwb6 {\n    border-radius: 12px;\n}\n\n.SearchContentItem_content-title__tMLba {\n    color: #172b4d;\n    line-height: 16px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.SearchContentItem_content-subtitle__3bwT6 {\n    line-height: 14px;\n    font-size: 12px;\n    color: #42526E;\n    margin-top: 4px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.SearchContentItem_content-subtitle__3bwT6 strong {\n    font-weight: 500;\n    margin-right: 10px;\n}\n\n.SearchContentItem_content-body__2ATd3 {\n    line-height: 20px;\n    margin-top: 2px;\n    color: #42526E;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: 40px;\n    // IE & Firefox will not see the ellipsis\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n}\n",
                "",
            ]),
                (t.locals = {
                    "search-content-item-component": "SearchContentItem_search-content-item-component__1k0hr",
                    "content-text-container": "SearchContentItem_content-text-container__3tL5v",
                    "content-image-container": "SearchContentItem_content-image-container__3uA1n",
                    "content-default-image": "SearchContentItem_content-default-image__Fq_8K",
                    "content-image": "SearchContentItem_content-image__2MAdK",
                    "content-image-round": "SearchContentItem_content-image-round__1zwb6",
                    "content-title": "SearchContentItem_content-title__tMLba",
                    "content-subtitle": "SearchContentItem_content-subtitle__3bwT6",
                    "content-body": "SearchContentItem_content-body__2ATd3",
                });
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0yLjk4IDMuNzk4bDMuOTc3LTIuMzUyYy42LS4zNTUgMS40ODgtLjM1NCAyLjA4NiAwbDMuOTc3IDIuMzUyYy42LjM1NSAxLjA0MiAxLjE0MiAxLjA0MiAxLjg1djQuNzA0YzAgLjcxLS40NDQgMS40OTYtMS4wNDIgMS44NWwtMy45NzcgMi4zNTJjLS42LjM1NS0xLjQ4OC4zNTQtMi4wODYgMEwyLjk4IDEyLjIwMmMtLjYtLjM1NS0xLjA0Mi0xLjE0Mi0xLjA0Mi0xLjg1VjUuNjQ4YzAtLjcxLjQ0NC0xLjQ5NiAxLjA0Mi0xLjg1em01LjI5OC0uOTk1Yy0uMTI2LS4wNzUtLjQzLS4wNzUtLjU1NiAwTDMuNzQ1IDUuMTU1Yy0uMTI1LjA3NC0uMjc4LjM0NC0uMjc4LjQ5M3Y0LjcwNGMwIC4xNDkuMTUyLjQxOS4yNzguNDkzbDMuOTc3IDIuMzUyYy4xMjYuMDc1LjQzLjA3NS41NTYgMGwzLjk3Ny0yLjM1MmMuMTI1LS4wNzQuMjc4LS4zNDQuMjc4LS40OTNWNS42NDhjMC0uMTQ5LS4xNTItLjQxOS0uMjc4LS40OTNMOC4yNzggMi44MDN6TTggMTEuMDNhMy4wMzEgMy4wMzEgMCAxIDEgMC02LjA2IDMuMDMxIDMuMDMxIDAgMCAxIDAgNi4wNjJ6bTAtMS41MTVhMS41MTYgMS41MTYgMCAxIDAgMC0zLjAzMiAxLjUxNiAxLjUxNiAwIDAgMCAwIDMuMDMyeiIgaWQ9ImEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjQTVBREJBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjIiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDQpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiM0MjUyNkUiIHhsaW5rOmhyZWY9IiNhIi8+PGcgbWFzaz0idXJsKCNiKSIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
        },
        function (e, t, n) {
            var r = n(131);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".ContentNameSearchItemsPanel_content-name-search-items-panel-button__2avXE {\n    border: 0;\n    outline: 0;\n    color: #7A8598;\n    font-size: 14px;\n    width: 100%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: 59px;\n    margin-top: 7px;\n    margin-bottom: 22px;\n    text-align: left;\n    cursor: pointer;\n}\n\n.ContentNameSearchItemsPanel_content-name-search-items-panel-button__2avXE:focus {\n    background: #f4f5f7;\n}\n\ndiv.ContentNameSearchItemsPanel_content-name-search-items-panel-spinner__pIlmZ aui-spinner {\n    margin: 40px auto;\n}\n",
                "",
            ]),
                (t.locals = {
                    "content-name-search-items-panel-button": "ContentNameSearchItemsPanel_content-name-search-items-panel-button__2avXE",
                    "content-name-search-items-panel-spinner": "ContentNameSearchItemsPanel_content-name-search-items-panel-spinner__pIlmZ",
                });
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(4), n(0), n(133)]),
                void 0 ===
                    (o = function (e, t, n, r) {
                        "use strict";
                        var o = c(n).default,
                            i = c(r).default,
                            a = r.Component;
                        function c(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var s = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            u = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (n.handleScroll = n.handleScroll.bind(n)), (n.scroll = i.createRef()), (n.loadMoreResults = n.loadMoreResults.bind(n)), n;
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, a),
                                    s(t, [
                                        {
                                            key: "handleScroll",
                                            value: function () {
                                                var e = this.props.startLoadingDistancePoint,
                                                    t = this.scroll.current,
                                                    n = t.scrollTop;
                                                t.scrollHeight - (n + t.clientHeight) < e && this.loadMoreResults();
                                            },
                                        },
                                        {
                                            key: "loadMoreResults",
                                            value: function (e) {
                                                var t = this.props,
                                                    n = t.hasMore,
                                                    r = t.isLoadingMore,
                                                    o = t.next;
                                                if ((n && !r && o(), e && (13 === e.keyCode || 32 === e.keyCode))) {
                                                    var i = this.scroll.current.querySelectorAll(".search-drawer-list-item");
                                                    i.length && i[i.length - 1].focus();
                                                }
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.cssClass,
                                                    n = e.items,
                                                    r = e.headerPanel,
                                                    o = e.loader,
                                                    a = e.isLoadingMore,
                                                    c = e.hasMore,
                                                    s = e.loadMoreText;
                                                return i.createElement(
                                                    "div",
                                                    { ref: this.scroll, className: (t ? (t || "") + " " : "") + "InfiniteScroll_infinite-scroll-component__3MKrM", onScroll: this.handleScroll },
                                                    r,
                                                    n,
                                                    c &&
                                                        !a &&
                                                        i.createElement(
                                                            "div",
                                                            { className: "InfiniteScroll_infinite-scroll-load-more__5oTps" },
                                                            i.createElement("button", { type: "button", className: "aui-button", onClick: this.loadMoreResults, onKeyDown: this.loadMoreResults }, s)
                                                        ),
                                                    a && (o || i.createElement("aui-spinner", { class: "spinner" }))
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (u.propTypes = {
                            cssClass: o.string,
                            loader: o.objectOf(o.any),
                            next: o.func,
                            hasMore: o.bool,
                            isLoadingMore: o.bool,
                            loadMoreText: o.string,
                            items: o.arrayOf(o.any),
                            headerPanel: o.element,
                            startLoadingDistancePoint: o.number,
                        }),
                            (t.default = u),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(134);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".InfiniteScroll_infinite-scroll-component__3MKrM .spinner {\n    margin: 20px auto;\n}\n\n.InfiniteScroll_infinite-scroll-load-more__5oTps {\n    padding: 10px 0;\n    text-align: center;\n}\n",
                "",
            ]),
                (t.locals = { "infinite-scroll-component": "InfiniteScroll_infinite-scroll-component__3MKrM", "infinite-scroll-load-more": "InfiniteScroll_infinite-scroll-load-more__5oTps" });
        },
        function (e, t, n) {
            var r = n(136);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            var r = n(35);
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".SearchItemsPanel_search-result-heading__3sMUN {\n    margin: 15px 20px 10px;\n    color: #6B778C;\n    font-size: 13px;\n    font-weight: 500;\n}\n\n.SearchItemsPanel_search-items-container__1zmZm .search-section-items {\n    padding-right: 15px;\n    max-height: calc(100vh - 110px);\n    overflow-y: auto;\n}\n\n.SearchItemsPanel_search-items-container__1zmZm .map-content-name-search-item {\n    background-image: url(" +
                    r(n(137)) +
                    ");\n}\n\n.SearchItemsPanel_search-items-container__1zmZm .map-content-name-search-item.admin-item {\n    background-image: url(" +
                    r(n(138)) +
                    ");\n}\n",
                "",
            ]),
                (t.locals = { "search-result-heading": "SearchItemsPanel_search-result-heading__3sMUN", "search-items-container": "SearchItemsPanel_search-items-container__1zmZm" });
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0yLjk4IDMuNzk4bDMuOTc3LTIuMzUyYy42LS4zNTUgMS40ODgtLjM1NCAyLjA4NiAwbDMuOTc3IDIuMzUyYy42LjM1NSAxLjA0MiAxLjE0MiAxLjA0MiAxLjg1djQuNzA0YzAgLjcxLS40NDQgMS40OTYtMS4wNDIgMS44NWwtMy45NzcgMi4zNTJjLS42LjM1NS0xLjQ4OC4zNTQtMi4wODYgMEwyLjk4IDEyLjIwMmMtLjYtLjM1NS0xLjA0Mi0xLjE0Mi0xLjA0Mi0xLjg1VjUuNjQ4YzAtLjcxLjQ0NC0xLjQ5NiAxLjA0Mi0xLjg1em01LjI5OC0uOTk1Yy0uMTI2LS4wNzUtLjQzLS4wNzUtLjU1NiAwTDMuNzQ1IDUuMTU1Yy0uMTI1LjA3NC0uMjc4LjM0NC0uMjc4LjQ5M3Y0LjcwNGMwIC4xNDkuMTUyLjQxOS4yNzguNDkzbDMuOTc3IDIuMzUyYy4xMjYuMDc1LjQzLjA3NS41NTYgMGwzLjk3Ny0yLjM1MmMuMTI1LS4wNzQuMjc4LS4zNDQuMjc4LS40OTNWNS42NDhjMC0uMTQ5LS4xNTItLjQxOS0uMjc4LS40OTNMOC4yNzggMi44MDN6TTggMTEuMDNhMy4wMzEgMy4wMzEgMCAxIDEgMC02LjA2IDMuMDMxIDMuMDMxIDAgMCAxIDAgNi4wNjJ6bTAtMS41MTVhMS41MTYgMS41MTYgMCAxIDAgMC0zLjAzMiAxLjUxNiAxLjUxNiAwIDAgMCAwIDMuMDMyeiIgaWQ9ImEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjQTVBREJBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjIiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDQpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiM0MjUyNkUiIHhsaW5rOmhyZWY9IiNhIi8+PGcgbWFzaz0idXJsKCNiKSIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
        },
        function (e, t) {
            e.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjN0E4NjlBIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIyIi8+PHBhdGggZD0iTTEyLjAwMSAxNi44MjhhNC44MyA0LjgzIDAgMSAxIDAtOS42NTkgNC44MyA0LjgzIDAgMCAxIDAgOS42NTltOC4wOC0zLjAxYTEuOTI2IDEuOTI2IDAgMCAxLTEuMy0xLjgyYzAtLjg0NS41NDQtMS41NTcgMS4yOTktMS44MmEuNDYzLjQ2MyAwIDAgMCAuMzA0LS41NTQgOC42MzggOC42MzggMCAwIDAtLjgwNy0xLjkyNC40Ni40NiAwIDAgMC0uNTc4LS4xODggMS45NyAxLjk3IDAgMCAxLTEuMjQ2LjA3OCAxLjkyIDEuOTIgMCAwIDEtMS4zNTUtMS4zNDggMS45NjkgMS45NjkgMCAwIDEgLjA3NC0xLjI1Mi40NjIuNDYyIDAgMCAwLS4xOS0uNTc2IDguNjcgOC42NyAwIDAgMC0xLjkwNi0uNzk4LjQ2Mi40NjIgMCAwIDAtLjU1NS4zMDMgMS45MjYgMS45MjYgMCAwIDEtMS44MiAxLjMgMS45MjUgMS45MjUgMCAwIDEtMS44MTktMS4yOTkuNDY1LjQ2NSAwIDAgMC0uNTU1LS4zMDQgOC42MjggOC42MjggMCAwIDAtMS45MzUuODEzLjQ1My40NTMgMCAwIDAtLjE5LjU2MkExLjkzMyAxLjkzMyAwIDAgMSA0Ljk5NiA3LjUyYS40NjIuNDYyIDAgMCAwLS41NzYuMTg5IDguNjUgOC42NSAwIDAgMC0uODA0IDEuOTI1Yy0uMDY2LjIzLjA3Mi40Ny4yOTcuNTUyYTEuOTI1IDEuOTI1IDAgMCAxLS4wMDEgMy42MjQuNDYyLjQ2MiAwIDAgMC0uMjk3LjU1MiA4LjY4IDguNjggMCAwIDAgLjY5OCAxLjcyOC40Ni40NiAwIDAgMCAuNjAzLjE4N2MuNTc0LS4yNjQgMS4yOTYtLjI1NSAyLjAzMS4yMy4xMTMuMDc0LjIxNy4xNzguMjkyLjI5LjUwOC43NzIuNDk0IDEuNTI2LjE5IDIuMTEyYS40NTcuNDU3IDAgMCAwIC4xNjMuNjA2Yy42MzEuMzcgMS4zMTUuNjYzIDIuMDM2Ljg2NmEuNDU4LjQ1OCAwIDAgMCAuNTUtLjMwMkExLjkyNiAxLjkyNiAwIDAgMSAxMiAxOC43NzNjLjg0OCAwIDEuNTYzLjU0NyAxLjgyMiAxLjMwNmEuNDU4LjQ1OCAwIDAgMCAuNTUuMzAyIDguNjU1IDguNjU1IDAgMCAwIDIuMDEzLS44NTIuNDU3LjQ1NyAwIDAgMCAuMTYtLjYxYy0uMzA2LS41ODctLjMyNC0xLjM0NS4xODUtMi4xMTkuMDc1LS4xMTIuMTc5LS4yMTcuMjkyLS4yOTIuNzQ1LS40OTMgMS40NzQtLjQ5NSAyLjA1Mi0uMjIyYS40Ni40NiAwIDAgMCAuNjA2LS4xODNjLjI5My0uNTQ1LjUzLTEuMTI0LjcwMy0xLjczMWEuNDYyLjQ2MiAwIDAgMC0uMzAzLS41NTMiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+";
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(31), n(168), n(4), n(0), n(20), n(28), n(155), n(156), n(159)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i, a, c, s, u) {
                        "use strict";
                        var l = v(n).default,
                            d = v(r).default,
                            f = v(o).default,
                            h = v(i).default,
                            p = i.Component,
                            g = a.document,
                            m = c.focusFirstMenuItem,
                            y = c.focusSiblingMenuItem,
                            b = s.TypeaheadForwardRef,
                            M = v(u).default;
                        function v(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var I = {
                            "./SearchSelect.css": {
                                "search-select-component": "SearchSelect_search-select-component__11Flk",
                                "aui-button": "SearchSelect_aui-button__39D_N",
                                "aui-icon": "SearchSelect_aui-icon__3qUvu",
                                "icon-left": "SearchSelect_icon-left__1dMR2",
                                "icon-right": "SearchSelect_icon-right__SmdXZ",
                                "search-filter-drop-down": "SearchSelect_search-filter-drop-down__4TTsO",
                                "show-filter": "SearchSelect_show-filter__2f8aZ",
                                "checkbox-list": "SearchSelect_checkbox-list__1Z0MW",
                                "search-ui-filter-button": "SearchSelect_search-ui-filter-button__3nypb",
                                "clear-selected-items": "SearchSelect_clear-selected-items__C7tnL",
                                "not-found-message": "SearchSelect_not-found-message__1M8sH",
                                "toggle-container": "SearchSelect_toggle-container__wX27b",
                                toggle: "SearchSelect_toggle__2VSnc",
                            },
                        };
                        function x(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n;
                            }
                            return Array.from(e);
                        }
                        var S = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            C = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                                        r = n.props,
                                        o = r.buttonText,
                                        i = r.showFilter,
                                        a = r.selectedItemsIds;
                                    return (
                                        (n.selectedItemsIds = a),
                                        (n.state = {
                                            isLoading: !1,
                                            isExpanded: !1,
                                            isNotFound: !1,
                                            isError: !1,
                                            dropDownItems: [],
                                            dropDownItemsSelected: [],
                                            initItemsFiltered: [],
                                            dropDownItemsFilter: [],
                                            buttonText: o,
                                            searchTerm: "",
                                            isToggled: !1,
                                        }),
                                        (n.toggleDropDownList = n.toggleDropDownList.bind(n)),
                                        (n.hideDropDownList = n.hideDropDownList.bind(n)),
                                        (n.hideDropDownListOnEsc = n.hideDropDownListOnEsc.bind(n)),
                                        (n.handleOnChange = n.handleOnChange.bind(n)),
                                        (n.handleOnRespond = n.handleOnRespond.bind(n)),
                                        (n.handleOnError = n.handleOnError.bind(n)),
                                        (n.handleCheckboxClick = n.handleCheckboxClick.bind(n)),
                                        (n.handleOnClearSelected = n.handleOnClearSelected.bind(n)),
                                        (n.updateData = n.updateData.bind(n)),
                                        (n.renderInitItem = n.renderInitItem.bind(n)),
                                        (n.renderSearchItem = n.renderSearchItem.bind(n)),
                                        (n.updateFilterData = n.updateFilterData.bind(n)),
                                        (n.onTypeHeadChanged = n.onTypeHeadChanged.bind(n)),
                                        (n.isTypeaheadEmpty = n.isTypeaheadEmpty.bind(n)),
                                        (n.handleOnToggle = n.handleOnToggle.bind(n)),
                                        (n.wrapperRef = h.createRef()),
                                        (n.buttonRef = h.createRef()),
                                        (n.inputRef = i ? h.createRef() : null),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, p),
                                    S(t, [
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                this.updateData(!1),
                                                    g.addEventListener("mousedown", this.hideDropDownList),
                                                    g.addEventListener("focusout", this.hideDropDownList),
                                                    this.wrapperRef.current.addEventListener("keydown", this.hideDropDownListOnEsc);
                                            },
                                        },
                                        {
                                            key: "componentDidUpdate",
                                            value: function (e) {
                                                var t = this.props,
                                                    n = t.initItems,
                                                    r = t.initSelectedItems,
                                                    o = t.selectedItemsIds;
                                                ((n.length > 0 && 0 === e.initItems.length) || (r && r.length && !e.initSelectedItems)) && this.updateData(), e.selectedItemsIds !== o && this._syncNewSelectedItemsIds();
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                g.removeEventListener("mousedown", this.hideDropDownList),
                                                    g.removeEventListener("focusout", this.hideDropDownList),
                                                    this.wrapperRef.current.removeEventListener("keydown", this.hideDropDownListOnEsc);
                                            },
                                        },
                                        {
                                            key: "onTypeHeadChanged",
                                            value: function (e) {
                                                var t = e.value;
                                                this.setState({ searchTerm: t });
                                            },
                                        },
                                        {
                                            key: "handleOnToggle",
                                            value: function (e) {
                                                (0, this.props.onToggleChange)(e), this.setState({ isToggled: e.currentTarget.checked });
                                            },
                                        },
                                        {
                                            key: "updateData",
                                            value: function (e) {
                                                var t = this,
                                                    n = this.props,
                                                    r = n.initItems,
                                                    o = n.initSelectedItems;
                                                if ((r && e ? this.setState({ dropDownItems: r }, this.updateFilterData) : this.updateFilterData(), o && o.length > 0)) {
                                                    var i = [];
                                                    o.forEach(function (e) {
                                                        i.push(e), t.selectedItemsIds.add(e.id);
                                                    }),
                                                        this.setState({ dropDownItemsSelected: i }, this.updateFilterData);
                                                }
                                            },
                                        },
                                        {
                                            key: "updateFilterData",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.initItems,
                                                    n = e.showFilter,
                                                    r = e.buttonText,
                                                    o = this.state,
                                                    i = o.dropDownItems,
                                                    a = o.dropDownItemsSelected,
                                                    c = t.length
                                                        ? t.filter(function (e) {
                                                              return (
                                                                  !n ||
                                                                  !a.find(function (t) {
                                                                      return t.id === e.id;
                                                                  })
                                                              );
                                                          })
                                                        : [],
                                                    s = i.filter(function (e) {
                                                        return (
                                                            !n ||
                                                            !a.find(function (t) {
                                                                return t.id === e.id;
                                                            })
                                                        );
                                                    }),
                                                    u = r;
                                                a.length > 0 &&
                                                    (u = a
                                                        .map(function (e) {
                                                            return e.text;
                                                        })
                                                        .join(", ")),
                                                    this.setState({ initItemsFiltered: c, dropDownItemsFilter: s, buttonText: u });
                                            },
                                        },
                                        {
                                            key: "hideDropDownList",
                                            value: function (e) {
                                                this.state.isExpanded &&
                                                    ((!e.relatedTarget && this.wrapperRef.current.contains(e.target)) ||
                                                        (e.relatedTarget && this.wrapperRef.current.contains(e.relatedTarget)) ||
                                                        this.setState({ isExpanded: !1, searchTerm: "" }));
                                            },
                                        },
                                        {
                                            key: "hideDropDownListOnEsc",
                                            value: function (e) {
                                                this.state.isExpanded &&
                                                    27 === e.keyCode &&
                                                    this.wrapperRef.current.contains(e.target) &&
                                                    (this.setState({ isExpanded: !1, searchTerm: "" }), this.buttonRef.current.focus(), e.stopPropagation());
                                            },
                                        },
                                        {
                                            key: "toggleDropDownList",
                                            value: function () {
                                                var e = this,
                                                    t = this.state.isExpanded,
                                                    n = this.props.showFilter;
                                                this.setState({ isExpanded: !t }, function () {
                                                    t || (e.setState({ searchTerm: "" }), n && (e.inputRef.current.focus(), e.inputRef.current.click()));
                                                });
                                            },
                                        },
                                        {
                                            key: "handleOnChange",
                                            value: function (e) {
                                                e.trim() ? this.setState({ isLoading: !0 }) : this.setState({ isLoading: !1 }), this.setState({ searchTerm: e, isError: !1, dropDownItemsFilter: [] });
                                            },
                                        },
                                        {
                                            key: "handleOnRespond",
                                            value: function (e) {
                                                var t = (0, this.props.checkboxMapper)(e),
                                                    n = 0 === t.length;
                                                this.setState({ isLoading: !1, isNotFound: n, isError: !1, dropDownItems: t }, this.updateFilterData);
                                            },
                                        },
                                        {
                                            key: "handleOnError",
                                            value: function () {
                                                this.setState({ isError: !0, isLoading: !1 });
                                            },
                                        },
                                        {
                                            key: "isTypeaheadEmpty",
                                            value: function () {
                                                var e = this.state.searchTerm;
                                                return !e || 0 === e.trim().length;
                                            },
                                        },
                                        {
                                            key: "_syncNewSelectedItemsIds",
                                            value: function () {
                                                var e = this.state.dropDownItems,
                                                    t = this.props,
                                                    n = t.hasCheckbox,
                                                    r = t.selectedItemsIds,
                                                    o = t.onItemSelect,
                                                    i = t.buttonText,
                                                    a = t.initItems,
                                                    c = new Set(
                                                        e.map(function (e) {
                                                            return e.id;
                                                        })
                                                    ),
                                                    s = [].concat(
                                                        x(e),
                                                        x(
                                                            a.filter(function (e) {
                                                                return !c.has(e.id);
                                                            })
                                                        )
                                                    );
                                                this.selectedItemsIds = r;
                                                var u = s.filter(function (e) {
                                                    return r.has(e.id);
                                                });
                                                if (n) o(this.selectedItemsIds), this.setState({ dropDownItemsSelected: u }, this.updateFilterData);
                                                else {
                                                    var l = u[0];
                                                    o(l || {}), this.setState({ buttonText: l ? l.text : i });
                                                }
                                            },
                                        },
                                        {
                                            key: "handleCheckboxClick",
                                            value: function (e) {
                                                var t = this.state,
                                                    n = t.dropDownItemsSelected,
                                                    r = t.dropDownItems,
                                                    o = this.props,
                                                    i = o.initItems,
                                                    a = o.onItemSelect,
                                                    c = n.slice();
                                                if (e.checked) {
                                                    this.selectedItemsIds.add(e.value);
                                                    var s = r.concat(i).find(function (t) {
                                                        return t.id === e.value;
                                                    });
                                                    s && c.push(s), a(this.selectedItemsIds), this.setState({ dropDownItemsSelected: c }, this.updateFilterData);
                                                } else if (e.selected) this.selectedItemsIds.clear(), this.selectedItemsIds.add(e.selected), a(e.selected), this.setState({ buttonText: e.selected.text });
                                                else {
                                                    this.selectedItemsIds.delete(e.value);
                                                    var u = c.findIndex(function (t) {
                                                        return t.id === e.value;
                                                    });
                                                    u > -1 && c.splice(u, 1), a(this.selectedItemsIds), this.setState({ dropDownItemsSelected: c }, this.updateFilterData);
                                                }
                                                this.toggleDropDownList(), this.buttonRef.current.focus();
                                            },
                                        },
                                        {
                                            key: "handleOnClearSelected",
                                            value: function () {
                                                var e = this.props.onItemSelect;
                                                this.selectedItemsIds.clear(), this.setState({ dropDownItemsSelected: [] }, this.updateFilterData), e(this.selectedItemsIds), this.toggleDropDownList(), this.buttonRef.current.focus();
                                            },
                                        },
                                        {
                                            key: "renderInitItem",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.showHeading,
                                                    n = e.initHeading,
                                                    r = this.state.initItemsFiltered;
                                                return h.createElement(h.Fragment, null, t && r.length > 0 && h.createElement("div", { className: "aui-nav-heading" }, n), this.renderCheckboxListItem(r));
                                            },
                                        },
                                        {
                                            key: "renderSearchItem",
                                            value: function () {
                                                var e = this.state.dropDownItemsFilter;
                                                return h.createElement(h.Fragment, null, this.renderCheckboxListItem(e));
                                            },
                                        },
                                        {
                                            key: "renderCheckboxListItem",
                                            value: function (e) {
                                                var t = this,
                                                    n = this.props,
                                                    r = n.idPrefix,
                                                    o = n.isRound,
                                                    i = n.hasCheckbox,
                                                    a = n.initHeading;
                                                return e.map(function (e) {
                                                    return h.createElement(M, { key: e.id, idPrefix: r, item: e, name: a, isRound: o, onClick: t.handleCheckboxClick, checked: t.selectedItemsIds.has(e.id), hasCheckbox: i, onKeyDown: y });
                                                });
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this,
                                                    t = this.props,
                                                    n = t.icon,
                                                    r = t.idPrefix,
                                                    o = t.showFilter,
                                                    i = t.showHeading,
                                                    a = t.label,
                                                    c = t.inputLabel,
                                                    s = t.placeholder,
                                                    u = t.clearSelectedTitle,
                                                    f = t.isRound,
                                                    p = t.notFoundText,
                                                    g = t.isToggleShown,
                                                    v = t.toggleId,
                                                    x = t.toggleLabel,
                                                    S = t.typeaheadApi,
                                                    C = this.state,
                                                    N = C.isExpanded,
                                                    A = C.buttonText,
                                                    _ = C.dropDownItemsSelected,
                                                    D = C.isLoading,
                                                    w = C.isNotFound,
                                                    j = C.isError,
                                                    T = C.isToggled,
                                                    L = C.searchTerm,
                                                    E = "aui-button" + (N ? " active" : ""),
                                                    k = n ? " " + n : "",
                                                    O = (r || "") + "search-filter-button",
                                                    F = (r || "") + "filter-input",
                                                    z = (r || "") + "filter-dropdown",
                                                    R = (r || "") + "filter-checkbox-list",
                                                    P = (r || "") + "filter-clear-button";
                                                return h.createElement(
                                                    "div",
                                                    { className: "SearchSelect_search-select-component__11Flk", ref: this.wrapperRef },
                                                    h.createElement(
                                                        "button",
                                                        {
                                                            type: "button",
                                                            id: O,
                                                            className: (E ? E + " " : "") + "SearchSelect_aui-button__39D_N SearchSelect_search-ui-filter-button__3nypb",
                                                            title: A,
                                                            onClick: this.toggleDropDownList,
                                                            onKeyDown: m,
                                                            "aria-label": a,
                                                            "aria-haspopup": "true",
                                                            "aria-expanded": N,
                                                            ref: this.buttonRef,
                                                        },
                                                        h.createElement("span", { className: "aui-icon aui-icon-small" + k + " SearchSelect_icon-left__1dMR2" }),
                                                        A,
                                                        h.createElement("span", { className: "aui-icon aui-icon-small aui-iconfont-chevron-down SearchSelect_icon-right__SmdXZ" })
                                                    ),
                                                    N &&
                                                        h.createElement(
                                                            "div",
                                                            { id: z, className: l("search-filter-drop-down" + (o ? " show-filter" : ""), I) },
                                                            o &&
                                                                h.createElement(b, {
                                                                    id: F,
                                                                    label: c,
                                                                    placeholder: s,
                                                                    api: S,
                                                                    onChange: this.handleOnChange,
                                                                    onRespond: this.handleOnRespond,
                                                                    onError: this.handleOnError,
                                                                    ref: this.inputRef,
                                                                    onKeyDown: m,
                                                                }),
                                                            D && h.createElement("aui-spinner", { size: "small" }),
                                                            h.createElement(
                                                                "div",
                                                                { id: R, className: (D ? "loading-result" : "loaded-result") + " SearchSelect_checkbox-list__1Z0MW" },
                                                                _.length > 0 &&
                                                                    h.createElement(
                                                                        h.Fragment,
                                                                        null,
                                                                        i &&
                                                                            h.createElement(
                                                                                "div",
                                                                                {
                                                                                    id: P,
                                                                                    role: "button",
                                                                                    tabIndex: "0",
                                                                                    className: "aui-nav-heading SearchSelect_clear-selected-items__C7tnL",
                                                                                    onClick: this.handleOnClearSelected,
                                                                                    onKeyPress: this.handleOnClearSelected,
                                                                                },
                                                                                u
                                                                            ),
                                                                        o &&
                                                                            _.map(function (t) {
                                                                                return h.createElement(M, { key: t.id, idPrefix: r, item: t, isRound: f, onClick: e.handleCheckboxClick, checked: e.selectedItemsIds.has(t.id), onKeyDown: y });
                                                                            })
                                                                    ),
                                                                this.isTypeaheadEmpty() ? this.renderInitItem() : this.renderSearchItem(),
                                                                !D && (w || j) && L && h.createElement("div", { className: "SearchSelect_not-found-message__1M8sH" }, p)
                                                            ),
                                                            g &&
                                                                h.createElement(
                                                                    "div",
                                                                    { className: "SearchSelect_toggle-container__wX27b" },
                                                                    h.createElement("span", { id: v, className: "SearchSelect_toggle__2VSnc" }, h.createElement(d, { label: x, isDefaultChecked: T, onChange: this.handleOnToggle })),
                                                                    h.createElement("span", null, x)
                                                                )
                                                        )
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (C.defaultProps = { hasCheckbox: !0, isToggleShown: !1, initItems: [], selectedItemsIds: new Set() }),
                            (C.propTypes = {
                                selectedItemsIds: f.instanceOf(Set),
                                buttonText: f.string.isRequired,
                                checkboxMapper: f.func,
                                icon: f.string.isRequired,
                                idPrefix: f.string,
                                showFilter: f.bool,
                                showHeading: f.bool,
                                label: f.string,
                                inputLabel: f.string,
                                placeholder: f.string,
                                typeaheadApi: f.func,
                                initHeading: f.string,
                                initItems: f.arrayOf(f.shape({ id: f.oneOfType([f.number, f.string]).isRequired, text: f.string.isRequired, imageUrl: f.string })),
                                isRound: f.bool,
                                onItemSelect: f.func.isRequired,
                                clearSelectedTitle: f.string,
                                initSelectedItems: f.arrayOf(f.shape({ id: f.string.isRequired, text: f.string.isRequired, imageUrl: f.string })),
                                hasCheckbox: f.bool,
                                notFoundText: f.string,
                                isToggleShown: f.bool,
                                onToggleChange: f.func,
                                toggleLabel: f.string,
                                toggleId: f.string,
                            }),
                            (t.default = C),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t) {
            function n(t, r) {
                return (
                    (e.exports = n =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        }),
                    n(t, r)
                );
            }
            e.exports = n;
        },
        function (e, t, n) {
            var r,
                o,
                i = n(46),
                a = n(47),
                c = 0,
                s = 0;
            e.exports = function (e, t, n) {
                var u = (t && n) || 0,
                    l = t || [],
                    d = (e = e || {}).node || r,
                    f = void 0 !== e.clockseq ? e.clockseq : o;
                if (null == d || null == f) {
                    var h = i();
                    null == d && (d = r = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]), null == f && (f = o = 16383 & ((h[6] << 8) | h[7]));
                }
                var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
                    g = void 0 !== e.nsecs ? e.nsecs : s + 1,
                    m = p - c + (g - s) / 1e4;
                if ((m < 0 && void 0 === e.clockseq && (f = (f + 1) & 16383), (m < 0 || p > c) && void 0 === e.nsecs && (g = 0), g >= 1e4)) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                (c = p), (s = g), (o = f);
                var y = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
                (l[u++] = (y >>> 24) & 255), (l[u++] = (y >>> 16) & 255), (l[u++] = (y >>> 8) & 255), (l[u++] = 255 & y);
                var b = ((p / 4294967296) * 1e4) & 268435455;
                (l[u++] = (b >>> 8) & 255), (l[u++] = 255 & b), (l[u++] = ((b >>> 24) & 15) | 16), (l[u++] = (b >>> 16) & 255), (l[u++] = (f >>> 8) | 128), (l[u++] = 255 & f);
                for (var M = 0; M < 6; ++M) l[u + M] = d[M];
                return t || a(l);
            };
        },
        function (e, t, n) {
            var r = n(46),
                o = n(47);
            e.exports = function (e, t, n) {
                var i = (t && n) || 0;
                "string" == typeof e && ((t = "binary" === e ? new Array(16) : null), (e = null));
                var a = (e = e || {}).random || (e.rng || r)();
                if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) for (var c = 0; c < 16; ++c) t[i + c] = a[c];
                return t || o(a);
            };
        },
        function (e, t) {
            e.exports = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
                        }
                return (t.default = e), t;
            };
        },
        function (e, t) {
            e.exports = function (e) {
                return e && e.__esModule ? e : { default: e };
            };
        },
        function (e, t) {
            var n,
                r,
                o = (e.exports = {});
            function i() {
                throw new Error("setTimeout has not been defined");
            }
            function a() {
                throw new Error("clearTimeout has not been defined");
            }
            function c(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
                try {
                    return n(e, 0);
                } catch (t) {
                    try {
                        return n.call(null, e, 0);
                    } catch (t) {
                        return n.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                    n = i;
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                    r = a;
                }
            })();
            var s,
                u = [],
                l = !1,
                d = -1;
            function f() {
                l && s && ((l = !1), s.length ? (u = s.concat(u)) : (d = -1), u.length && h());
            }
            function h() {
                if (!l) {
                    var e = c(f);
                    l = !0;
                    for (var t = u.length; t; ) {
                        for (s = u, u = []; ++d < t; ) s && s[d].run();
                        (d = -1), (t = u.length);
                    }
                    (s = null),
                        (l = !1),
                        (function (e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                            try {
                                r(e);
                            } catch (t) {
                                try {
                                    return r.call(null, e);
                                } catch (t) {
                                    return r.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function p(e, t) {
                (this.fun = e), (this.array = t);
            }
            function g() {}
            (o.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new p(e, t)), 1 !== u.length || l || c(h);
            }),
                (p.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = g),
                (o.addListener = g),
                (o.once = g),
                (o.off = g),
                (o.removeListener = g),
                (o.removeAllListeners = g),
                (o.emit = g),
                (o.prependListener = g),
                (o.prependOnceListener = g),
                (o.listeners = function (e) {
                    return [];
                }),
                (o.binding = function (e) {
                    throw new Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                    return "/";
                }),
                (o.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                    return 0;
                });
        },
        function (e, t) {
            e.exports = function (e) {
                if (!e.webpackPolyfill) {
                    var t = Object.create(e);
                    t.children || (t.children = []),
                        Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return t.l;
                            },
                        }),
                        Object.defineProperty(t, "id", {
                            enumerable: !0,
                            get: function () {
                                return t.i;
                            },
                        }),
                        Object.defineProperty(t, "exports", { enumerable: !0 }),
                        (t.webpackPolyfill = 1);
                }
                return t;
            };
        },
        function (e, t, n) {
            "use strict";
            var r = /([A-Z])/g;
            e.exports = function (e) {
                return e.replace(r, "-$1").toLowerCase();
            };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = "function" == typeof Symbol && Symbol.for,
                o = r ? Symbol.for("react.element") : 60103,
                i = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                c = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                u = r ? Symbol.for("react.provider") : 60109,
                l = r ? Symbol.for("react.context") : 60110,
                d = r ? Symbol.for("react.async_mode") : 60111,
                f = r ? Symbol.for("react.forward_ref") : 60112,
                h = r ? Symbol.for("react.timeout") : 60113;
            function p(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case o:
                            switch ((e = e.type)) {
                                case d:
                                case a:
                                case s:
                                case c:
                                    return e;
                                default:
                                    switch ((e = e && e.$$typeof)) {
                                        case l:
                                        case f:
                                        case u:
                                            return e;
                                        default:
                                            return t;
                                    }
                            }
                        case i:
                            return t;
                    }
                }
            }
            (t.typeOf = p),
                (t.AsyncMode = d),
                (t.ContextConsumer = l),
                (t.ContextProvider = u),
                (t.Element = o),
                (t.ForwardRef = f),
                (t.Fragment = a),
                (t.Profiler = s),
                (t.Portal = i),
                (t.StrictMode = c),
                (t.isValidElementType = function (e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === c || e === h || ("object" == typeof e && null !== e && (e.$$typeof === u || e.$$typeof === l || e.$$typeof === f));
                }),
                (t.isAsyncMode = function (e) {
                    return p(e) === d;
                }),
                (t.isContextConsumer = function (e) {
                    return p(e) === l;
                }),
                (t.isContextProvider = function (e) {
                    return p(e) === u;
                }),
                (t.isElement = function (e) {
                    return "object" == typeof e && null !== e && e.$$typeof === o;
                }),
                (t.isForwardRef = function (e) {
                    return p(e) === f;
                }),
                (t.isFragment = function (e) {
                    return p(e) === a;
                }),
                (t.isProfiler = function (e) {
                    return p(e) === s;
                }),
                (t.isPortal = function (e) {
                    return p(e) === i;
                }),
                (t.isStrictMode = function (e) {
                    return p(e) === c;
                });
        },
        function (e, t) {
            e.exports = function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            };
        },
        function (e, t) {
            e.exports = function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            };
        },
        function (e, t) {
            e.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            };
        },
        function (e, t) {
            e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
            };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.sizes = void 0), (t.sizes = { small: "16px", medium: "24px", large: "32px", xlarge: "48px" });
        },
        function (e, t, n) {
            var r = n(7);
            e.exports = function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)); );
                return e;
            };
        },
        function (e, t, n) {
            var r, o;
            (r = [t, n(27), n(4), n(0), n(43)]),
                void 0 ===
                    (o = function (e, t, n, r, o) {
                        "use strict";
                        e.TypeaheadForwardRef = e.Typeahead = void 0;
                        var i = l(t).default,
                            a = l(n).default,
                            c = l(r).default,
                            s = r.Component,
                            u = o.ThrottleDebounceService;
                        function l(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var d =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                    }
                                    return e;
                                },
                            f = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            h = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (
                                        (n.controller = new AbortController()),
                                        (n.handleChange = n.handleChange.bind(n)),
                                        (n.throttledDebounceService = new u({
                                            callback: function () {
                                                return n.fetch(n.queryTrimmed);
                                            },
                                        })),
                                        n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, s),
                                    f(t, [
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                this.throttledDebounceService.cancel(), this.controller.abort();
                                            },
                                        },
                                        {
                                            key: "handleChange",
                                            value: function (e) {
                                                var t = this.props.onChange,
                                                    n = e.target.value;
                                                (this.queryTrimmed = n.trim()),
                                                    t(n),
                                                    this.throttledDebounceService.cancel(),
                                                    this.controller.abort(),
                                                    (this.controller = new AbortController()),
                                                    this.queryTrimmed.length > 0
                                                        ? (n.length < 5 || n.endsWith(" ") ? this.throttledDebounceService.setThrottledMode() : this.throttledDebounceService.setDebounceMode(), this.throttledDebounceService.execute())
                                                        : this.throttledDebounceService.cancel();
                                            },
                                        },
                                        {
                                            key: "fetch",
                                            value: function (e) {
                                                var t = this.props,
                                                    n = t.onRespond,
                                                    r = t.onError;
                                                (0, t.api)(e, { signal: this.controller.signal })
                                                    .then(function (e) {
                                                        e && n(e);
                                                    })
                                                    .catch(function (e) {
                                                        r(e), i.log(e);
                                                    });
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.id,
                                                    n = e.label,
                                                    r = e.placeholder,
                                                    o = e.onKeyDown,
                                                    i = e.forwardedRef;
                                                return c.createElement("input", {
                                                    id: t,
                                                    className: "typeahead-component",
                                                    type: "text",
                                                    onChange: this.handleChange,
                                                    onKeyDown: o,
                                                    placeholder: r,
                                                    "aria-label": n,
                                                    ref: i,
                                                    maxLength: "2048",
                                                    autoComplete: "off",
                                                });
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(),
                            p = c.forwardRef(function (e, t) {
                                return c.createElement(h, d({}, e, { forwardedRef: t }));
                            });
                        (h.propTypes = { id: a.string, label: a.string, placeholder: a.string, api: a.func, onChange: a.func, onRespond: a.func, onError: a.func, onKeyDown: a.func, forwardedRef: a.oneOfType([a.func, a.object]) }),
                            (h.defaultProps = { id: "", label: "", placeholder: "", api: function () {}, onChange: function () {}, onRespond: function () {}, onError: function () {}, onKeyDown: function () {} }),
                            (e.Typeahead = h),
                            (e.TypeaheadForwardRef = p);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(31), n(0), n(4), n(169), n(157)]),
                void 0 ===
                    (o = function (e, t, n, r, o, i) {
                        "use strict";
                        var a = d(n).default,
                            c = d(r).default,
                            s = r.Component,
                            u = d(o).default,
                            l = d(i).default;
                        function d(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var f = {
                                "./CheckboxListItem.css": {
                                    "checkbox-list-item-component": "CheckboxListItem_checkbox-list-item-component__3FNWN",
                                    focus: "CheckboxListItem_focus__2-38p",
                                    "img-round": "CheckboxListItem_img-round__3e1Sr",
                                    "checkbox-list-item-text": "CheckboxListItem_checkbox-list-item-text__2pijI",
                                },
                            },
                            h = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            p = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (
                                        (n.checkboxRef = c.createRef()), (n.state = { isTabbed: !1 }), (n.handleOnSelect = n.handleOnSelect.bind(n)), (n.handleOnCheck = n.handleOnCheck.bind(n)), (n.toggleFocus = n.toggleFocus.bind(n)), n
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, s),
                                    h(
                                        t,
                                        [
                                            {
                                                key: "handleOnCheck",
                                                value: function () {
                                                    (0, this.props.onClick)({ value: this.checkboxRef.current.value, checked: this.checkboxRef.current.checked });
                                                },
                                            },
                                            {
                                                key: "handleOnSelect",
                                                value: function () {
                                                    var e = this.props;
                                                    (0, e.onClick)({ selected: e.item });
                                                },
                                            },
                                            {
                                                key: "toggleFocus",
                                                value: function () {
                                                    this.setState(function (e) {
                                                        return { isTabbed: !e.isTabbed };
                                                    });
                                                },
                                            },
                                            {
                                                key: "render",
                                                value: function () {
                                                    var e = this.props,
                                                        n = e.item,
                                                        r = n.id,
                                                        o = n.imageUrl,
                                                        i = n.text,
                                                        s = n.value,
                                                        u = n.lozengeText,
                                                        l = e.isRound,
                                                        d = e.name,
                                                        h = e.checked,
                                                        p = e.idPrefix,
                                                        g = e.hasCheckbox,
                                                        m = e.onKeyDown,
                                                        y = e.isFocused,
                                                        b = this.state.isTabbed,
                                                        M = (p || "") + r,
                                                        v = y || b ? " focus" : "";
                                                    return c.createElement(
                                                        c.Fragment,
                                                        null,
                                                        g
                                                            ? c.createElement(
                                                                  "label",
                                                                  { htmlFor: M, className: a("checkbox-list-item-component " + v, f) },
                                                                  c.createElement("input", {
                                                                      type: "checkbox",
                                                                      role: "menuitem",
                                                                      id: M,
                                                                      name: d,
                                                                      value: s,
                                                                      onClick: this.handleOnCheck,
                                                                      onFocus: this.toggleFocus,
                                                                      onBlur: this.toggleFocus,
                                                                      defaultChecked: h,
                                                                      ref: this.checkboxRef,
                                                                      onKeyDown: m,
                                                                  }),
                                                                  o && c.createElement("img", { src: o, alt: "avatar", className: a(l ? "img-round" : "", f) }),
                                                                  c.createElement("span", { tabIndex: "-1", className: "CheckboxListItem_checkbox-list-item-text__2pijI" }, i),
                                                                  t.getLozengeComponent(u)
                                                              )
                                                            : c.createElement(
                                                                  "div",
                                                                  { className: a("checkbox-list-item-component " + v, f) },
                                                                  c.createElement(
                                                                      "button",
                                                                      { type: "button", role: "menuitem", onClick: this.handleOnSelect, onFocus: this.toggleFocus, onBlur: this.toggleFocus, onKeyDown: m },
                                                                      c.createElement("div", { className: "CheckboxListItem_checkbox-list-item-text__2pijI" }, i),
                                                                      t.getLozengeComponent(u)
                                                                  )
                                                              )
                                                    );
                                                },
                                            },
                                        ],
                                        [
                                            {
                                                key: "getLozengeComponent",
                                                value: function (e) {
                                                    return e && c.createElement("span", { className: "checkbox-list-item-component--lozenge-text" }, c.createElement(l, { appearance: "inprogress" }, e));
                                                },
                                            },
                                        ]
                                    ),
                                    t
                                );
                            })();
                        (p.propTypes = {
                            item: u.shape({ id: u.oneOfType([u.number, u.string]).isRequired, text: u.string.isRequired, imageUrl: u.string }).isRequired,
                            hasCheckbox: u.bool,
                            name: u.string,
                            isRound: u.bool,
                            onClick: u.func.isRequired,
                            checked: u.bool,
                            idPrefix: u.string,
                            isFocused: u.bool,
                            onKeyDown: u.func,
                        }),
                            (p.defaultProps = { hasCheckbox: !0, isFocused: !1 }),
                            (t.default = p),
                            (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(158);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                '.CheckboxListItem_checkbox-list-item-component__3FNWN {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n\nlabel.CheckboxListItem_checkbox-list-item-component__3FNWN {\n    padding: 7px 10px;\n}\n\n.CheckboxListItem_checkbox-list-item-component__3FNWN.CheckboxListItem_focus__2-38p {\n    background: #f4f5f7;\n}\n\n.CheckboxListItem_checkbox-list-item-component__3FNWN:hover {\n    background: #f4f5f7;\n}\n\n.CheckboxListItem_checkbox-list-item-component__3FNWN [role=menuitem]:focus {\n    outline: 0;\n}\n\n.CheckboxListItem_checkbox-list-item-component__3FNWN input[type="checkbox"] {\n    margin-right: 10px;\n    /* fix safari wrong width when text overflows */\n    flex-shrink: 0;\n}\n\n.CheckboxListItem_checkbox-list-item-component__3FNWN button {\n    font-size: 14px;\n    width: 100%;\n    padding: 7px 10px;\n    border: 0;\n    background: none;\n    color: #344563;\n    cursor: pointer;\n}\n\n.CheckboxListItem_checkbox-list-item-component__3FNWN img {\n    border-radius: 2px;\n    margin-right: 10px;\n    flex-basis: 24px;\n    height: 24px;\n}\n\nimg.CheckboxListItem_img-round__3e1Sr {\n    border-radius: 12px;\n}\n\n.CheckboxListItem_checkbox-list-item-text__2pijI {\n    flex-grow: 1;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: left;\n    text-overflow: ellipsis;\n}\n',
                "",
            ]),
                (t.locals = {
                    "checkbox-list-item-component": "CheckboxListItem_checkbox-list-item-component__3FNWN",
                    focus: "CheckboxListItem_focus__2-38p",
                    "img-round": "CheckboxListItem_img-round__3e1Sr",
                    "checkbox-list-item-text": "CheckboxListItem_checkbox-list-item-text__2pijI",
                });
        },
        function (e, t, n) {
            var r = n(160);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                '.SearchSelect_search-select-component__11Flk {\n    position: relative;\n    margin-bottom: 10px;\n}\n\n.SearchSelect_search-select-component__11Flk aui-spinner {\n    position: absolute;\n    right: 10px;\n    top: 25px;\n    margin-top: -15px;\n}\n\n.SearchSelect_search-select-component__11Flk .typeahead-component[type="text"] {\n    box-sizing: border-box;\n    margin-top: 15px;\n    padding-bottom: 5px;\n    padding-right: 25px;\n    font-weight: 500;\n    width: 100%;\n    font-size: 14px;\n    border-bottom: solid 2px white;\n}\n\n.SearchSelect_search-select-component__11Flk .typeahead-component[type="text"]:focus {\n    color: #172B4D;\n    border-bottom: solid 2px #2684FF;\n}\n\n.SearchSelect_search-select-component__11Flk .typeahead-component[type="text"]::-ms-clear {\n    display: none;\n }\n\n.SearchSelect_aui-button__39D_N {\n    position: relative;\n    width: 100%;\n    text-align: left;\n}\n\n.SearchSelect_aui-icon__3qUvu::before {\n    font-size: 20px;\n}\n\n.SearchSelect_aui-button__39D_N .SearchSelect_icon-left__1dMR2 {\n    vertical-align: text-bottom;\n    margin-right: 10px;\n    color: #B3BAC5;\n}\n\n.SearchSelect_icon-right__SmdXZ {\n    position: absolute;\n    top: 6px;\n    right: 5px;\n}\n\n.SearchSelect_search-filter-drop-down__4TTsO {\n    position: absolute;\n    box-sizing: border-box;\n    max-height: 340px;\n    width: 100%;\n    padding: 0 10px;\n    left: 0px;\n    top: 35px;\n    background-color: white;\n    border-radius: 3px;\n    box-shadow: 0px 4px 8px -2px rgba(9,30,66,0.25), 0px 0px 1px rgba(9,30,66,0.13), 1px 0px 1px rgba(9,30,66,0.13), -1px 0px 1px rgba(9,30,66,0.13), 0px -1px 1px rgba(9,30,66,0.13);\n    color: #344563;\n    overflow: auto;\n    z-index: 1;\n}\n\n.SearchSelect_show-filter__2f8aZ.SearchSelect_search-filter-drop-down__4TTsO {\n    width: 330px;\n}\n\n.SearchSelect_checkbox-list__1Z0MW {\n    padding: 10px 0;\n    margin: 0 -10px;\n    overflow: auto;\n    max-height: 210px;\n}\n\n.SearchSelect_search-ui-filter-button__3nypb {\n    padding-right: 20px;\n    overflow-x: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%; /* fix safari long text bug that miscount div width */\n}\n\n.SearchSelect_clear-selected-items__C7tnL {\n    font-size: 14px;\n    font-weight: 400;\n    text-transform: none;\n    color: #0052CC;\n}\n\n.SearchSelect_clear-selected-items__C7tnL:hover {\n    cursor: pointer;\n}\n\n.SearchSelect_not-found-message__1M8sH {\n    padding: 0px 10px;\n    flex-grow: 1;\n    overflow-x: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.SearchSelect_clear-selected-items__C7tnL ~ .SearchSelect_not-found-message__1M8sH {\n    padding: 7px 10px;\n}\n\n.SearchSelect_toggle-container__wX27b {\n    padding-left: 5px;\n    padding-top: 5px;\n    margin: 0 -10px;\n    border-top: #DFE1E6 1px solid;\n}\n\n.SearchSelect_toggle__2VSnc {\n    display: inline-block;\n    vertical-align: middle;\n    height: 32px;\n    margin-right: 5px;\n}\n',
                "",
            ]),
                (t.locals = {
                    "search-select-component": "SearchSelect_search-select-component__11Flk",
                    "aui-button": "SearchSelect_aui-button__39D_N",
                    "aui-icon": "SearchSelect_aui-icon__3qUvu",
                    "icon-left": "SearchSelect_icon-left__1dMR2",
                    "icon-right": "SearchSelect_icon-right__SmdXZ",
                    "search-filter-drop-down": "SearchSelect_search-filter-drop-down__4TTsO",
                    "show-filter": "SearchSelect_show-filter__2f8aZ",
                    "checkbox-list": "SearchSelect_checkbox-list__1Z0MW",
                    "search-ui-filter-button": "SearchSelect_search-ui-filter-button__3nypb",
                    "clear-selected-items": "SearchSelect_clear-selected-items__C7tnL",
                    "not-found-message": "SearchSelect_not-found-message__1M8sH",
                    "toggle-container": "SearchSelect_toggle-container__wX27b",
                    toggle: "SearchSelect_toggle__2VSnc",
                });
        },
        function (e, t, n) {
            var r = n(162);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".SearchContainer_search-typeahead-container__27oDw {\n    margin-left: 220px;\n    width: 550px;\n    position: relative;\n}\n\n.SearchContainer_search-typeahead-inner__Y4xnr {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.SearchContainer_search-help-link__YyZVM {\n    float: right;\n    font-size: 13px;\n    margin-top: 15px;\n    margin-right: 15px;\n}\n\n.SearchContainer_search-filter-list-container__2-0j7 {\n    float: left;\n    width: 180px;\n    margin-top: 15px;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.SearchContainer_search-select-component__-djS2 {\n    margin-top: 10px;\n}\n\n.SearchContainer_aui-nav-heading__3tN94 {\n    padding: 0;\n    margin-left: 0;\n    margin-bottom: 15px;\n}\n\n.SearchContainer_search-content-container__2NKaj {\n    position: relative;\n    height: calc(100vh - 55px);\n    width: 550px;\n    overflow: auto;\n}\n\n.SearchContainer_search-content-container__2NKaj aui-spinner {\n    margin: 80px auto 0;\n    position: relative;\n}\n\n.SearchContainer_search-typeahead-container__27oDw input[type='text'] {\n    box-sizing: border-box;\n    margin-top: 30px;\n    padding-left: 5px;\n    padding-bottom: 4px;\n    padding-right: 20px;\n    width: 100%;\n    background-color: white;\n    color: #42526e;\n    border: solid 2px white;\n    border-top: 0;\n    border-left: 0;\n    border-right: 0;\n    border-radius: 0;\n    font-size: 20px;\n}\n\n.SearchContainer_search-typeahead-container__27oDw input[type='text']:focus {\n    background-color: white;\n    color: #172B4D;\n    border-bottom: solid 2px #2684FF;\n    box-sizing: border-box;\n}\n\n.SearchContainer_search-typeahead-container__27oDw input[type='text']::-webkit-input-placeholder {\n    color: #8993A4;\n}\n\n.SearchContainer_search-typeahead-container__27oDw input[type='text']:-ms-input-placeholder {\n    color: #8993A4;\n}\n\n.SearchContainer_search-typeahead-container__27oDw input[type='text']::-ms-input-placeholder {\n    color: #8993A4;\n}\n\n.SearchContainer_search-typeahead-container__27oDw input[type='text']::placeholder {\n    color: #8993A4;\n}\n\n.SearchContainer_search-typeahead-container__27oDw input[type='text']::-ms-clear {\n    display: none;\n}\n\n.SearchContainer_input-icon__w2iG7 {\n    position: absolute;\n    bottom: 5px;\n    right: 19px;\n}\n\n.SearchContainer_input-icon__w2iG7 + *::before {\n    color: #6C798F;\n    font-size: 20px;\n    margin-top: -12px;\n}\n\n.SearchContainer_input-icon__w2iG7 button {\n    background: none;\n    cursor: pointer;\n}\n\na.SearchContainer_more-options__6KHOW {\n    color: #505F79;\n}\n\n/* Hide the \"Current\" lozenge-text on selected spaces  */\n.SearchContainer_search-filter-list-container__2-0j7 #content-space-filter-checkbox-list\n[class^=\"SearchSelect_selected-list\"] .checkbox-list-item-component--lozenge-text {\n    display: none;\n}\n\n.SearchContainer_empty-search-clear-filter-button__mtqCF {\n    margin-left: 2px;\n}\n",
                "",
            ]),
                (t.locals = {
                    "search-typeahead-container": "SearchContainer_search-typeahead-container__27oDw",
                    "search-typeahead-inner": "SearchContainer_search-typeahead-inner__Y4xnr",
                    "search-help-link": "SearchContainer_search-help-link__YyZVM",
                    "search-filter-list-container": "SearchContainer_search-filter-list-container__2-0j7",
                    "search-select-component": "SearchContainer_search-select-component__-djS2",
                    "aui-nav-heading": "SearchContainer_aui-nav-heading__3tN94",
                    "search-content-container": "SearchContainer_search-content-container__2NKaj",
                    "input-icon": "SearchContainer_input-icon__w2iG7",
                    "more-options": "SearchContainer_more-options__6KHOW",
                    "empty-search-clear-filter-button": "SearchContainer_empty-search-clear-filter-button__mtqCF",
                });
        },
        function (e, t, n) {
            var r, o;
            (r = [e, t, n(0), n(4), n(20), n(164)]),
                void 0 ===
                    (o = function (e, t, n, r, o) {
                        "use strict";
                        var i = u(n).default,
                            a = n.Component,
                            c = u(r).default,
                            s = o.document;
                        function u(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        var l = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, n, r) {
                                    return n && e(t.prototype, n), r && e(t, r), t;
                                };
                            })(),
                            d = (function (e) {
                                function t(e) {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t);
                                    var n = (function (e, t) {
                                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                    return (n.handleClick = n.handleClick.bind(n)), (n.stopPropagation = n.stopPropagation.bind(n)), (n.handleKeyDown = n.handleKeyDown.bind(n)), n;
                                }
                                return (
                                    (function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, a),
                                    l(t, [
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                s.addEventListener("keydown", this.handleKeyDown);
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                s.removeEventListener("keydown", this.handleKeyDown);
                                            },
                                        },
                                        {
                                            key: "handleKeyDown",
                                            value: function (e) {
                                                var t = this.props.onPanelHide;
                                                27 === e.keyCode && t();
                                            },
                                        },
                                        {
                                            key: "handleClick",
                                            value: function () {
                                                (0, this.props.onPanelHide)();
                                            },
                                        },
                                        {
                                            key: "stopPropagation",
                                            value: function (e) {
                                                e.stopPropagation();
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props.children;
                                                return i.createElement(
                                                    "div",
                                                    { role: "presentation", className: "SearchDrawerPanel_drawer-panel-mask__pR0MJ", onClick: this.handleClick },
                                                    i.createElement("div", { role: "presentation", className: "SearchDrawerPanel_drawer-panel-content__2uGQD", onClick: this.stopPropagation }, e)
                                                );
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        (d.propTypes = { children: c.node.isRequired, onPanelHide: c.func.isRequired }), (t.default = d), (e.exports = t.default);
                    }.apply(t, r)) || (e.exports = o);
        },
        function (e, t, n) {
            var r = n(165);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(11)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            (t = e.exports = n(10)(!1)).push([
                e.i,
                ".SearchDrawerPanel_drawer-panel-mask__pR0MJ {\n    background-color: rgba(0, 0, 0, 0.54); /* from atlaskit */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    -webkit-animation-duration: 220ms;\n            animation-duration: 220ms;\n    -webkit-animation-name: SearchDrawerPanel_fadeIn__1Twdj;\n            animation-name: SearchDrawerPanel_fadeIn__1Twdj;\n    z-index: 2003; /* from existing z-index */\n}\n\n.SearchDrawerPanel_drawer-panel-content__2uGQD {\n    background: white;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    -webkit-animation-duration: 220ms;\n            animation-duration: 220ms;\n    -webkit-animation-name: SearchDrawerPanel_slide__3yNkz;\n            animation-name: SearchDrawerPanel_slide__3yNkz;\n}\n",
                "",
            ]),
                (t.locals = {
                    "drawer-panel-mask": "SearchDrawerPanel_drawer-panel-mask__pR0MJ",
                    fadeIn: "SearchDrawerPanel_fadeIn__1Twdj",
                    "drawer-panel-content": "SearchDrawerPanel_drawer-panel-content__2uGQD",
                    slide: "SearchDrawerPanel_slide__3yNkz",
                });
        },
        function (e, t, n) {
            var r,
                o = 0,
                i = n(167);
            "string" == typeof i && (i = [[e.i, i, ""]]),
                i.locals && (t.locals = i.locals),
                (t.use = t.ref = function () {
                    return o++ || (r = n(11)(i, { hmr: !0 })), t;
                }),
                (t.unuse = t.unref = function () {
                    o > 0 && !--o && (r(), (r = null));
                });
        },
        function (e, t, n) {
            (e.exports = n(10)(!1)).push([e.i, ".confluence-search-ui {\n    overflow: hidden;\n}\n", ""]);
        },
        function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(14),
                o = n.n(r),
                i = n(8),
                a = n.n(i),
                c = n(9),
                s = n.n(c),
                u = n(12),
                l = n.n(u),
                d = n(7),
                f = n.n(d),
                h = n(13),
                p = n.n(h),
                g = n(3),
                m = n.n(g),
                y = n(1),
                b = n.n(y),
                M = n(36),
                v = n.n(M),
                I = n(0),
                x = n.n(I),
                S = n(16),
                C = n.n(S),
                N = n(15),
                A = n.n(N),
                _ = n(18),
                D = n.n(_),
                w = n(4),
                j = n.n(w),
                T = { getAtlaskitAnalyticsContext: j.a.func },
                L = (function (e) {
                    function t() {
                        var e, n;
                        a()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (
                            (n = l()(this, (e = f()(t)).call.apply(e, [this].concat(o)))),
                            b()(m()(m()(n)), "getChildContext", function () {
                                return { getAtlaskitAnalyticsContext: n.getAnalyticsContext };
                            }),
                            b()(m()(m()(n)), "getAnalyticsContext", function () {
                                var e = n.props.data,
                                    t = n.context.getAtlaskitAnalyticsContext,
                                    r = ("function" == typeof t && t()) || [];
                                return D()(r).concat([e]);
                            }),
                            n
                        );
                    }
                    return (
                        p()(t, e),
                        s()(t, [
                            {
                                key: "render",
                                value: function () {
                                    return I.Children.only(this.props.children);
                                },
                            },
                        ]),
                        t
                    );
                })(I.Component);
            b()(L, "contextTypes", T), b()(L, "childContextTypes", T);
            var E = n(55),
                k = n.n(E),
                O = n(22),
                F = n.n(O),
                z = (function () {
                    function e(t) {
                        var n = this;
                        a()(this, e),
                            b()(this, "payload", void 0),
                            b()(this, "clone", function () {
                                return new e({ payload: JSON.parse(JSON.stringify(n.payload)) });
                            }),
                            (this.payload = t.payload);
                    }
                    return (
                        s()(e, [
                            {
                                key: "update",
                                value: function (e) {
                                    return "function" == typeof e ? (this.payload = e(this.payload)) : "object" === F()(e) && (this.payload = o()({}, this.payload, e)), this;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                R = console.warn,
                P = (function (e) {
                    function t(e) {
                        var n;
                        return (
                            a()(this, t),
                            (n = l()(this, f()(t).call(this, e))),
                            b()(m()(m()(n)), "context", void 0),
                            b()(m()(m()(n)), "handlers", void 0),
                            b()(m()(m()(n)), "hasFired", void 0),
                            b()(m()(m()(n)), "clone", function () {
                                return n.hasFired ? (R("Cannot clone an event after it's been fired."), null) : new t({ context: D()(n.context), handlers: D()(n.handlers), payload: JSON.parse(JSON.stringify(n.payload)) });
                            }),
                            b()(m()(m()(n)), "fire", function (e) {
                                n.hasFired
                                    ? R("Cannot fire an event twice.")
                                    : (n.handlers.forEach(function (t) {
                                          t(m()(m()(n)), e);
                                      }),
                                      (n.hasFired = !0));
                            }),
                            (n.context = e.context || []),
                            (n.handlers = e.handlers || []),
                            (n.hasFired = !1),
                            n
                        );
                    }
                    return (
                        p()(t, e),
                        s()(t, [
                            {
                                key: "update",
                                value: function (e) {
                                    return this.hasFired ? (R("Cannot update an event after it's been fired."), this) : k()(f()(t.prototype), "update", this).call(this, e);
                                },
                            },
                        ]),
                        t
                    );
                })(z),
                U = (function (e) {
                    function t() {
                        var e, n;
                        a()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (
                            (n = l()(this, (e = f()(t)).call.apply(e, [this].concat(o)))),
                            b()(m()(m()(n)), "createAnalyticsEvent", function (e) {
                                var t = n.context,
                                    r = t.getAtlaskitAnalyticsEventHandlers,
                                    o = t.getAtlaskitAnalyticsContext,
                                    i = ("function" == typeof o && o()) || [],
                                    a = ("function" == typeof r && r()) || [];
                                return new P({ context: i, handlers: a, payload: e });
                            }),
                            n
                        );
                    }
                    return (
                        p()(t, e),
                        s()(t, [
                            {
                                key: "render",
                                value: function () {
                                    return this.props.children(this.createAnalyticsEvent);
                                },
                            },
                        ]),
                        t
                    );
                })(I.Component);
            b()(U, "contextTypes", { getAtlaskitAnalyticsEventHandlers: j.a.func, getAtlaskitAnalyticsContext: j.a.func });
            var Y = function (e, t, n, r) {
                    return function () {
                        var o = "function" == typeof t ? t(r, n) : r(t),
                            i = n[e];
                        if (i) {
                            for (var a = arguments.length, c = new Array(a), s = 0; s < a; s++) c[s] = arguments[s];
                            i.apply(void 0, c.concat([o]));
                        }
                    };
                },
                B = function (e, t) {
                    return Object.keys(e).reduce(function (n, r) {
                        return o()({}, n, b()({}, r, t(r, e[r])));
                    }, {});
                };
            var Q = n(54),
                H = n.n(Q),
                G = n(50),
                W = n.n(G),
                Z = n(19),
                q = n(2),
                K = n(5),
                J = { regular: { height: 2 * Object(K.gridSize)(), width: 4 * Object(K.gridSize)() }, large: { height: 2 * Object(K.gridSize)() + Object(K.gridSize)() / 2, width: 5 * Object(K.gridSize)() } },
                V = Object(K.gridSize)() / 4,
                X = function (e) {
                    var t = e.size;
                    return J[t].height;
                },
                $ = function (e) {
                    var t = e.size;
                    return J[t].width;
                },
                ee = q.default.label.withConfig({ displayName: "Label", componentId: "ejxk2a-0" })(["\n  display: inline-block;\n  padding: ", ";\n"], "2px"),
                te = q.default.input.withConfig({ displayName: "Input", componentId: "sc-1ovlrjp-0" })(["\n  opacity: 0;\n  position: absolute;\n\n  &:focus {\n    outline: none !important;\n  }\n"]),
                ne = n(6),
                re = {
                    bgChecked: Object(ne.a)({ light: K.colors.G400, dark: K.colors.G300 }),
                    bgCheckedHover: Object(ne.a)({ light: K.colors.G300, dark: K.colors.G200 }),
                    bgCheckedDisabled: Object(ne.a)({ light: K.colors.N20, dark: K.colors.DN70 }),
                    bgUnchecked: Object(ne.a)({ light: K.colors.N200, dark: K.colors.DN70 }),
                    bgUncheckedHover: Object(ne.a)({ light: K.colors.N70, dark: K.colors.DN60 }),
                    bgUncheckedDisabled: Object(ne.a)({ light: K.colors.N20, dark: K.colors.DN70 }),
                },
                oe = q.default.div.withConfig({ displayName: "Slide", componentId: "bnah1s-0" })(
                    [
                        "\n  background-clip: content-box;\n  background-color: ",
                        ";\n  border-radius: ",
                        "px;\n  border: ",
                        " solid ",
                        ";\n  display: block;\n  height: ",
                        "px;\n  padding: ",
                        ";\n  position: relative;\n  transition: ",
                        ";\n  width: ",
                        "px;\n\n  ",
                        ";\n",
                    ],
                    function (e) {
                        var t = e.isChecked,
                            n = e.isDisabled,
                            r = A()(e, ["isChecked", "isDisabled"]),
                            o = re.bgUnchecked;
                        return t && (o = re.bgChecked), n && !t && (o = re.bgUncheckedDisabled), n && t && (o = re.bgCheckedDisabled), o(r);
                    },
                    X,
                    "2px",
                    function (e) {
                        var t = e.isFocused,
                            n = A()(e, ["isFocused"]);
                        return t ? Object(ne.a)({ light: K.colors.B100, dark: K.colors.B75 })(n) : "transparent";
                    },
                    X,
                    "2px",
                    "0.2s",
                    $,
                    function (e) {
                        var t,
                            n = e.isChecked,
                            r = e.isDisabled,
                            o = A()(e, ["isChecked", "isDisabled"]);
                        return (
                            r || (t = n ? re.bgCheckedHover : re.bgUncheckedHover),
                            Object(q.css)(["\n    &:hover {\n      ", ";\n      cursor: ", ";\n    }\n  "], t ? Object(q.css)(["\n            background-color: ", ";\n          "], t(o)) : "", r ? "not-allowed" : "pointer")
                        );
                    }
                ),
                ie = Object(ne.a)({ light: K.colors.N0, dark: K.colors.DN600 }),
                ae = Object(ne.a)({ light: K.colors.N70, dark: K.colors.DN30 }),
                ce = q.default.div.withConfig({ displayName: "Inner", componentId: "sc-15bw73o-0" })(
                    ["\n  color: ", ";\n  display: flex;\n  flex-direction: ", ";\n  height: 100%;\n  transition: ", ";\n  width: 100%;\n"],
                    function (e) {
                        return e.isDisabled ? ae : ie;
                    },
                    function (e) {
                        return e.isChecked ? "row" : "row-reverse";
                    },
                    "0.2s"
                ),
                se = Object(ne.a)({ light: K.colors.N0, dark: K.colors.DN600 }),
                ue = Object(ne.a)({ light: K.colors.N0, dark: K.colors.DN0 }),
                le = Object(ne.a)({ light: K.colors.N0, dark: K.colors.DN0 }),
                de = q.default.span.withConfig({ displayName: "Handle", componentId: "n2edb7-0" })(
                    ["\n  background-color: ", ";\n  border-radius: 50%;\n  bottom: ", "px;\n  content: '';\n  height: ", "px;\n  left: ", "px;\n  position: absolute;\n  transform: ", ";\n  transition: ", ";\n  width: ", "px;\n"],
                    function (e) {
                        var t = e.isChecked,
                            n = e.isDisabled,
                            r = A()(e, ["isChecked", "isDisabled"]);
                        return n ? le(r) : t ? ue(r) : se(r);
                    },
                    2 * V,
                    function (e) {
                        return X(e) - 2 * V;
                    },
                    2 * V,
                    function (e) {
                        var t = e.isChecked,
                            n = e.size;
                        return t ? "translateX(".concat(X({ size: n }), "px)") : "initial";
                    },
                    "0.2s",
                    function (e) {
                        return X(e) - 2 * V;
                    }
                ),
                fe = "".concat(V / 2, "px"),
                he = q.default.div.withConfig({ displayName: "IconWrapper", componentId: "sc-1y3jy9j-0" })(
                    ["\n  display: flex;\n  max-width: ", "px;\n  align-items: center;\n  ", ";\n  color: ", ";\n  ", ";\n"],
                    function (e) {
                        return $(e) / 2;
                    },
                    function (e) {
                        return e.isChecked ? "\n    padding-left: ".concat(fe, ";\n    padding-right: 0;\n  ") : "\n    padding-left: 0;\n    padding-right: ".concat(fe, ";\n  ");
                    },
                    function (e) {
                        return e.isChecked ? Object(ne.a)({ light: "inherit", dark: K.colors.DN30 }) : Object(ne.a)({ light: "inherit", dark: K.colors.DN600 });
                    },
                    function (e) {
                        return "large" === e.size ? "> span { height: 20px; width: 20px; }" : "";
                    }
                ),
                pe = { isDisabled: !1, onBlur: function () {}, onChange: function () {}, onFocus: function () {}, size: "regular", label: "", name: "", value: "" },
                ge = (function (e) {
                    function t() {
                        var e, n;
                        a()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (
                            (n = l()(this, (e = f()(t)).call.apply(e, [this].concat(o)))),
                            b()(m()(m()(n)), "state", { isFocused: !1 }),
                            b()(m()(m()(n)), "handleBlur", function (e) {
                                n.setState({ isFocused: !1 }), n.props.onBlur(e);
                            }),
                            b()(m()(m()(n)), "handleFocus", function (e) {
                                n.setState({ isFocused: !0 }), n.props.onFocus(e);
                            }),
                            b()(m()(m()(n)), "handleChange", function (e) {
                                n.props.isDisabled || n.props.onChange(e);
                            }),
                            n
                        );
                    }
                    return (
                        p()(t, e),
                        s()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.isChecked,
                                        n = e.isDisabled,
                                        r = e.label,
                                        o = e.name,
                                        i = e.size,
                                        a = e.value,
                                        c = { isChecked: t, isDisabled: n, isFocused: this.state.isFocused, size: i },
                                        s = t ? W.a : H.a,
                                        u = v()();
                                    return x.a.createElement(
                                        ee,
                                        { size: i, isDisabled: n, htmlFor: u },
                                        x.a.createElement(te, { checked: t, disabled: n, id: u, name: o, onBlur: this.handleBlur, onChange: this.handleChange, onFocus: this.handleFocus, type: "checkbox", value: a }),
                                        x.a.createElement(
                                            oe,
                                            c,
                                            x.a.createElement(
                                                ce,
                                                c,
                                                x.a.createElement(de, { isChecked: t, isDisabled: n, size: i }),
                                                x.a.createElement(he, { isChecked: t, size: i }, x.a.createElement(s, { label: r || (t ? "Uncheck" : "Check"), size: "large" === i ? null : "small", primaryColor: "inherit" }))
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(I.Component);
            b()(ge, "defaultProps", o()({}, pe, { isChecked: !1 }));
            var me =
                    ("atlaskit",
                    function (e) {
                        return function (t) {
                            var n = t(e);
                            return n.clone().fire("atlaskit"), n;
                        };
                    }),
                ye = (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function (t) {
                        var n = x.a.forwardRef(function (n, r) {
                            var i = n.analyticsContext,
                                a = void 0 === i ? {} : i,
                                c = A()(n, ["analyticsContext"]),
                                s = o()({}, e, a);
                            return x.a.createElement(L, { data: s }, x.a.createElement(t, C()({}, c, { ref: r })));
                        });
                        return (n.displayName = "WithAnalyticsContext(".concat(t.displayName || t.name, ")")), n;
                    };
                })({ componentName: "toggle", packageName: Z.a, packageVersion: Z.b })(
                    (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return function (t) {
                            var n = x.a.forwardRef(function (n, r) {
                                return x.a.createElement(U, null, function (o) {
                                    var i = B(e, function (e, t) {
                                        return Y(e, t, n, o);
                                    });
                                    return x.a.createElement(t, C()({}, n, i, { createAnalyticsEvent: o, ref: r }));
                                });
                            });
                            return (n.displayName = "WithAnalyticsEvents(".concat(t.displayName || t.name, ")")), n;
                        };
                    })({
                        onBlur: me({ action: "blurred", actionSubject: "toggle", attributes: { componentName: "toggle", packageName: Z.a, packageVersion: Z.b } }),
                        onChange: me({ action: "changed", actionSubject: "toggle", attributes: { componentName: "toggle", packageName: Z.a, packageVersion: Z.b } }),
                        onFocus: me({ action: "focused", actionSubject: "toggle", attributes: { componentName: "toggle", packageName: Z.a, packageVersion: Z.b } }),
                    })(ge)
                ),
                be = (function (e) {
                    function t() {
                        var e, n;
                        a()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (
                            (n = l()(this, (e = f()(t)).call.apply(e, [this].concat(o)))),
                            b()(m()(m()(n)), "state", { isChecked: n.props.isDefaultChecked }),
                            b()(m()(m()(n)), "onChange", function (e) {
                                n.setState({ isChecked: !n.state.isChecked }), n.props.onChange(e);
                            }),
                            n
                        );
                    }
                    return (
                        p()(t, e),
                        s()(t, [
                            {
                                key: "render",
                                value: function () {
                                    return x.a.createElement(ye, C()({}, this.props, { isChecked: this.state.isChecked, onChange: this.onChange }));
                                },
                            },
                        ]),
                        t
                    );
                })(I.Component);
            b()(be, "defaultProps", o()({}, pe, { isDefaultChecked: !1 })),
                n.d(t, "ToggleStateless", function () {
                    return ye;
                }),
                n.d(t, "default", function () {
                    return be;
                });
        },
        function (e, t, n) {
            "use strict";
            n.r(t);
            var r = {};
            n.r(r),
                n.d(r, "R50", function () {
                    return N;
                }),
                n.d(r, "R75", function () {
                    return A;
                }),
                n.d(r, "R100", function () {
                    return _;
                }),
                n.d(r, "R200", function () {
                    return D;
                }),
                n.d(r, "R300", function () {
                    return w;
                }),
                n.d(r, "R400", function () {
                    return j;
                }),
                n.d(r, "R500", function () {
                    return T;
                }),
                n.d(r, "Y50", function () {
                    return L;
                }),
                n.d(r, "Y75", function () {
                    return E;
                }),
                n.d(r, "Y100", function () {
                    return k;
                }),
                n.d(r, "Y200", function () {
                    return O;
                }),
                n.d(r, "Y300", function () {
                    return F;
                }),
                n.d(r, "Y400", function () {
                    return z;
                }),
                n.d(r, "Y500", function () {
                    return R;
                }),
                n.d(r, "G50", function () {
                    return P;
                }),
                n.d(r, "G75", function () {
                    return U;
                }),
                n.d(r, "G100", function () {
                    return Y;
                }),
                n.d(r, "G200", function () {
                    return B;
                }),
                n.d(r, "G300", function () {
                    return Q;
                }),
                n.d(r, "G400", function () {
                    return H;
                }),
                n.d(r, "G500", function () {
                    return G;
                }),
                n.d(r, "B50", function () {
                    return W;
                }),
                n.d(r, "B75", function () {
                    return Z;
                }),
                n.d(r, "B100", function () {
                    return q;
                }),
                n.d(r, "B200", function () {
                    return K;
                }),
                n.d(r, "B300", function () {
                    return J;
                }),
                n.d(r, "B400", function () {
                    return V;
                }),
                n.d(r, "B500", function () {
                    return X;
                }),
                n.d(r, "P50", function () {
                    return $;
                }),
                n.d(r, "P75", function () {
                    return ee;
                }),
                n.d(r, "P100", function () {
                    return te;
                }),
                n.d(r, "P200", function () {
                    return ne;
                }),
                n.d(r, "P300", function () {
                    return re;
                }),
                n.d(r, "P400", function () {
                    return oe;
                }),
                n.d(r, "P500", function () {
                    return ie;
                }),
                n.d(r, "T50", function () {
                    return ae;
                }),
                n.d(r, "T75", function () {
                    return ce;
                }),
                n.d(r, "T100", function () {
                    return se;
                }),
                n.d(r, "T200", function () {
                    return ue;
                }),
                n.d(r, "T300", function () {
                    return le;
                }),
                n.d(r, "T400", function () {
                    return de;
                }),
                n.d(r, "T500", function () {
                    return fe;
                }),
                n.d(r, "N0", function () {
                    return he;
                }),
                n.d(r, "N10", function () {
                    return pe;
                }),
                n.d(r, "N20", function () {
                    return ge;
                }),
                n.d(r, "N30", function () {
                    return me;
                }),
                n.d(r, "N40", function () {
                    return ye;
                }),
                n.d(r, "N50", function () {
                    return be;
                }),
                n.d(r, "N60", function () {
                    return Me;
                }),
                n.d(r, "N70", function () {
                    return ve;
                }),
                n.d(r, "N80", function () {
                    return Ie;
                }),
                n.d(r, "N90", function () {
                    return xe;
                }),
                n.d(r, "N100", function () {
                    return Se;
                }),
                n.d(r, "N200", function () {
                    return Ce;
                }),
                n.d(r, "N300", function () {
                    return Ne;
                }),
                n.d(r, "N400", function () {
                    return Ae;
                }),
                n.d(r, "N500", function () {
                    return _e;
                }),
                n.d(r, "N600", function () {
                    return De;
                }),
                n.d(r, "N700", function () {
                    return we;
                }),
                n.d(r, "N800", function () {
                    return je;
                }),
                n.d(r, "N900", function () {
                    return Te;
                }),
                n.d(r, "N10A", function () {
                    return Le;
                }),
                n.d(r, "N20A", function () {
                    return Ee;
                }),
                n.d(r, "N30A", function () {
                    return ke;
                }),
                n.d(r, "N40A", function () {
                    return Oe;
                }),
                n.d(r, "N50A", function () {
                    return Fe;
                }),
                n.d(r, "N60A", function () {
                    return ze;
                }),
                n.d(r, "N70A", function () {
                    return Re;
                }),
                n.d(r, "N80A", function () {
                    return Pe;
                }),
                n.d(r, "N90A", function () {
                    return Ue;
                }),
                n.d(r, "N100A", function () {
                    return Ye;
                }),
                n.d(r, "N200A", function () {
                    return Be;
                }),
                n.d(r, "N300A", function () {
                    return Qe;
                }),
                n.d(r, "N400A", function () {
                    return He;
                }),
                n.d(r, "N500A", function () {
                    return Ge;
                }),
                n.d(r, "N600A", function () {
                    return We;
                }),
                n.d(r, "N700A", function () {
                    return Ze;
                }),
                n.d(r, "N800A", function () {
                    return qe;
                }),
                n.d(r, "DN900", function () {
                    return Ke;
                }),
                n.d(r, "DN800", function () {
                    return Je;
                }),
                n.d(r, "DN700", function () {
                    return Ve;
                }),
                n.d(r, "DN600", function () {
                    return Xe;
                }),
                n.d(r, "DN500", function () {
                    return $e;
                }),
                n.d(r, "DN400", function () {
                    return et;
                }),
                n.d(r, "DN300", function () {
                    return tt;
                }),
                n.d(r, "DN200", function () {
                    return nt;
                }),
                n.d(r, "DN100", function () {
                    return rt;
                }),
                n.d(r, "DN90", function () {
                    return ot;
                }),
                n.d(r, "DN80", function () {
                    return it;
                }),
                n.d(r, "DN70", function () {
                    return at;
                }),
                n.d(r, "DN60", function () {
                    return ct;
                }),
                n.d(r, "DN50", function () {
                    return st;
                }),
                n.d(r, "DN40", function () {
                    return ut;
                }),
                n.d(r, "DN30", function () {
                    return lt;
                }),
                n.d(r, "DN20", function () {
                    return dt;
                }),
                n.d(r, "DN10", function () {
                    return ft;
                }),
                n.d(r, "DN0", function () {
                    return ht;
                }),
                n.d(r, "DN800A", function () {
                    return pt;
                }),
                n.d(r, "DN700A", function () {
                    return gt;
                }),
                n.d(r, "DN600A", function () {
                    return mt;
                }),
                n.d(r, "DN500A", function () {
                    return yt;
                }),
                n.d(r, "DN400A", function () {
                    return bt;
                }),
                n.d(r, "DN300A", function () {
                    return Mt;
                }),
                n.d(r, "DN200A", function () {
                    return vt;
                }),
                n.d(r, "DN100A", function () {
                    return It;
                }),
                n.d(r, "DN90A", function () {
                    return xt;
                }),
                n.d(r, "DN80A", function () {
                    return St;
                }),
                n.d(r, "DN70A", function () {
                    return Ct;
                }),
                n.d(r, "DN60A", function () {
                    return Nt;
                }),
                n.d(r, "DN50A", function () {
                    return At;
                }),
                n.d(r, "DN40A", function () {
                    return _t;
                }),
                n.d(r, "DN30A", function () {
                    return Dt;
                }),
                n.d(r, "DN20A", function () {
                    return wt;
                }),
                n.d(r, "DN10A", function () {
                    return jt;
                }),
                n.d(r, "background", function () {
                    return Tt;
                }),
                n.d(r, "backgroundActive", function () {
                    return Lt;
                }),
                n.d(r, "backgroundHover", function () {
                    return Et;
                }),
                n.d(r, "backgroundOnLayer", function () {
                    return kt;
                }),
                n.d(r, "text", function () {
                    return Ot;
                }),
                n.d(r, "textHover", function () {
                    return Ft;
                }),
                n.d(r, "textActive", function () {
                    return zt;
                }),
                n.d(r, "subtleText", function () {
                    return Rt;
                }),
                n.d(r, "placeholderText", function () {
                    return Pt;
                }),
                n.d(r, "heading", function () {
                    return Ut;
                }),
                n.d(r, "subtleHeading", function () {
                    return Yt;
                }),
                n.d(r, "codeBlock", function () {
                    return Bt;
                }),
                n.d(r, "link", function () {
                    return Qt;
                }),
                n.d(r, "linkHover", function () {
                    return Ht;
                }),
                n.d(r, "linkActive", function () {
                    return Gt;
                }),
                n.d(r, "linkOutline", function () {
                    return Wt;
                }),
                n.d(r, "primary", function () {
                    return Zt;
                }),
                n.d(r, "blue", function () {
                    return qt;
                }),
                n.d(r, "teal", function () {
                    return Kt;
                }),
                n.d(r, "purple", function () {
                    return Jt;
                }),
                n.d(r, "red", function () {
                    return Vt;
                }),
                n.d(r, "yellow", function () {
                    return Xt;
                }),
                n.d(r, "green", function () {
                    return $t;
                }),
                n.d(r, "colorPalette8", function () {
                    return en;
                }),
                n.d(r, "colorPalette16", function () {
                    return tn;
                }),
                n.d(r, "colorPalette24", function () {
                    return nn;
                }),
                n.d(r, "colorPalette", function () {
                    return rn;
                });
            var o = n(8),
                i = n.n(o),
                a = n(9),
                c = n.n(a),
                s = n(12),
                u = n.n(s),
                l = n(7),
                d = n.n(l),
                f = n(13),
                h = n.n(f),
                p = n(1),
                g = n.n(p),
                m = n(0),
                y = n.n(m),
                b = n(2),
                M = n(18),
                v = n.n(M),
                I = "__ATLASKIT_THEME__",
                x = { mode: "light" };
            function S(e) {
                return e && e.theme && e.theme.__ATLASKIT_THEME__ ? e.theme.__ATLASKIT_THEME__ : e && e.theme && e.theme.mode ? e.theme : x;
            }
            function C(e, t) {
                if ("string" == typeof e)
                    return (
                        (n = e),
                        (r = t),
                        function (e) {
                            var t = S(e);
                            if (e && e[n] && r) {
                                var o = r[e[n]];
                                if (o) return o[t.mode];
                            }
                            return "";
                        }
                    );
                var n,
                    r,
                    o = e;
                return function (e) {
                    var t = S(e);
                    return o[t.mode];
                };
            }
            var N = "#FFEBE6",
                A = "#FFBDAD",
                _ = "#FF8F73",
                D = "#FF7452",
                w = "#FF5630",
                j = "#DE350B",
                T = "#BF2600",
                L = "#FFFAE6",
                E = "#FFF0B3",
                k = "#FFE380",
                O = "#FFC400",
                F = "#FFAB00",
                z = "#FF991F",
                R = "#FF8B00",
                P = "#E3FCEF",
                U = "#ABF5D1",
                Y = "#79F2C0",
                B = "#57D9A3",
                Q = "#36B37E",
                H = "#00875A",
                G = "#006644",
                W = "#DEEBFF",
                Z = "#B3D4FF",
                q = "#4C9AFF",
                K = "#2684FF",
                J = "#0065FF",
                V = "#0052CC",
                X = "#0747A6",
                $ = "#EAE6FF",
                ee = "#C0B6F2",
                te = "#998DD9",
                ne = "#8777D9",
                re = "#6554C0",
                oe = "#5243AA",
                ie = "#403294",
                ae = "#E6FCFF",
                ce = "#B3F5FF",
                se = "#79E2F2",
                ue = "#00C7E6",
                le = "#00B8D9",
                de = "#00A3BF",
                fe = "#008DA6",
                he = "#FFFFFF",
                pe = "#FAFBFC",
                ge = "#F4F5F7",
                me = "#EBECF0",
                ye = "#DFE1E6",
                be = "#C1C7D0",
                Me = "#B3BAC5",
                ve = "#A5ADBA",
                Ie = "#97A0AF",
                xe = "#8993A4",
                Se = "#7A869A",
                Ce = "#6B778C",
                Ne = "#5E6C84",
                Ae = "#505F79",
                _e = "#42526E",
                De = "#344563",
                we = "#253858",
                je = "#172B4D",
                Te = "#091E42",
                Le = "rgba(9, 30, 66, 0.02)",
                Ee = "rgba(9, 30, 66, 0.04)",
                ke = "rgba(9, 30, 66, 0.08)",
                Oe = "rgba(9, 30, 66, 0.13)",
                Fe = "rgba(9, 30, 66, 0.25)",
                ze = "rgba(9, 30, 66, 0.31)",
                Re = "rgba(9, 30, 66, 0.36)",
                Pe = "rgba(9, 30, 66, 0.42)",
                Ue = "rgba(9, 30, 66, 0.48)",
                Ye = "rgba(9, 30, 66, 0.54)",
                Be = "rgba(9, 30, 66, 0.60)",
                Qe = "rgba(9, 30, 66, 0.66)",
                He = "rgba(9, 30, 66, 0.71)",
                Ge = "rgba(9, 30, 66, 0.77)",
                We = "rgba(9, 30, 66, 0.82)",
                Ze = "rgba(9, 30, 66, 0.89)",
                qe = "rgba(9, 30, 66, 0.95)",
                Ke = "#E6EDFA",
                Je = "#DCE5F5",
                Ve = "#CED9EB",
                Xe = "#B8C7E0",
                $e = "#ABBBD6",
                et = "#9FB0CC",
                tt = "#8C9CB8",
                nt = "#7988A3",
                rt = "#67758F",
                ot = "#56637A",
                it = "#455166",
                at = "#3B475C",
                ct = "#313D52",
                st = "#283447",
                ut = "#202B3D",
                lt = "#1B2638",
                dt = "#121A29",
                ft = "#0E1624",
                ht = "#0D1424",
                pt = "rgba(13, 20, 36, 0.06)",
                gt = "rgba(13, 20, 36, 0.14)",
                mt = "rgba(13, 20, 36, 0.18)",
                yt = "rgba(13, 20, 36, 0.29)",
                bt = "rgba(13, 20, 36, 0.36)",
                Mt = "rgba(13, 20, 36, 0.40)",
                vt = "rgba(13, 20, 36, 0.47)",
                It = "rgba(13, 20, 36, 0.53)",
                xt = "rgba(13, 20, 36, 0.63)",
                St = "rgba(13, 20, 36, 0.73)",
                Ct = "rgba(13, 20, 36, 0.78)",
                Nt = "rgba(13, 20, 36, 0.81)",
                At = "rgba(13, 20, 36, 0.85)",
                _t = "rgba(13, 20, 36, 0.89)",
                Dt = "rgba(13, 20, 36, 0.92)",
                wt = "rgba(13, 20, 36, 0.95)",
                jt = "rgba(13, 20, 36, 0.97)",
                Tt = C({ light: he, dark: lt }),
                Lt = C({ light: W, dark: Z }),
                Et = C({ light: me, dark: at }),
                kt = C({ light: he, dark: st }),
                Ot = C({ light: Te, dark: Xe }),
                Ft = C({ light: je, dark: Xe }),
                zt = C({ light: V, dark: V }),
                Rt = C({ light: Ce, dark: tt }),
                Pt = C({ light: Se, dark: nt }),
                Ut = C({ light: je, dark: Xe }),
                Yt = C({ light: Ce, dark: tt }),
                Bt = C({ light: ge, dark: st }),
                Qt = C({ light: V, dark: q }),
                Ht = C({ light: J, dark: K }),
                Gt = C({ light: X, dark: q }),
                Wt = C({ light: q, dark: K }),
                Zt = C({ light: V, dark: q }),
                qt = C({ light: V, dark: q }),
                Kt = C({ light: le, dark: ue }),
                Jt = C({ light: re, dark: te }),
                Vt = C({ light: w, dark: w }),
                Xt = C({ light: F, dark: F }),
                $t = C({ light: Q, dark: Q }),
                en = [
                    { background: je, text: he },
                    { background: j, text: he },
                    { background: oe, text: $ },
                    { background: V, text: Z },
                    { background: le, text: je },
                    { background: H, text: he },
                    { background: z, text: je },
                    { background: ve, text: je },
                ],
                tn = en.concat([
                    { background: _e, text: he },
                    { background: _, text: je },
                    { background: ee, text: je },
                    { background: q, text: je },
                    { background: se, text: je },
                    { background: Y, text: G },
                    { background: O, text: je },
                    { background: he, text: je },
                ]),
                nn = v()(tn).concat([
                    { background: Se, text: he },
                    { background: ye, text: je },
                    { background: be, text: T },
                    { background: $, text: ie },
                    { background: W, text: X },
                    { background: ce, text: je },
                    { background: P, text: G },
                    { background: E, text: je },
                ]),
                rn = function () {
                    switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "8") {
                        case "8":
                            return en;
                        case "16":
                            return tn;
                        case "24":
                            return nn;
                        default:
                            throw new Error("The only available color palette is 8, 16, 24");
                    }
                },
                on = n(3),
                an = n.n(on),
                cn = n(4),
                sn = n.n(cn),
                un = n(32),
                ln = n.n(un),
                dn = n(15),
                fn = n.n(dn);
            function hn(e) {
                var t = function (e, t) {
                        return e(t);
                    },
                    n = Object(m.createContext)(e);
                return {
                    Consumer: function (e) {
                        e.children;
                        var r = fn()(e, ["children"]);
                        return y.a.createElement(n.Consumer, null, function (n) {
                            var o = n || t;
                            return e.children(o(r));
                        });
                    },
                    Provider: function (e) {
                        return y.a.createElement(n.Consumer, null, function (r) {
                            var o = e.value || t;
                            return y.a.createElement(
                                n.Provider,
                                {
                                    value: function (e) {
                                        return o(r, e);
                                    },
                                },
                                e.children
                            );
                        });
                    },
                };
            }
            var pn = hn(function () {
                return { mode: "light" };
            });
            function gn(e) {
                var t = Tt(e);
                return "\n    body { background: ".concat(t, "; }\n  ");
            }
            function mn(e) {
                return { theme: g()({}, I, { mode: e }) };
            }
            var yn = b.default.div.withConfig({ displayName: "AtlaskitThemeProvider__LegacyReset", componentId: "sc-431dkp-0" })(
                    [
                        "\n  background-color: ",
                        ";\n  color: ",
                        ";\n\n  a {\n    color: ",
                        ";\n  }\n  a:hover {\n    color: ",
                        ";\n  }\n  a:active {\n    color: ",
                        ";\n  }\n  a:focus {\n    outline-color: ",
                        ";\n  }\n  h1 {\n    color: ",
                        ";\n  }\n  h2 {\n    color: ",
                        ";\n  }\n  h3 {\n    color: ",
                        ";\n  }\n  h4 {\n    color: ",
                        ";\n  }\n  h5 {\n    color: ",
                        ";\n  }\n  h6 {\n    color: ",
                        ";\n  }\n  small {\n    color: ",
                        ";\n  }\n",
                    ],
                    Tt,
                    Ot,
                    Qt,
                    Ht,
                    Gt,
                    Wt,
                    Ut,
                    Ut,
                    Ut,
                    Ut,
                    Ut,
                    Yt,
                    Rt
                ),
                bn = (function (e) {
                    function t(e) {
                        var n;
                        return i()(this, t), (n = u()(this, d()(t).call(this, e))), g()(an()(an()(n)), "stylesheet", void 0), (n.state = mn(e.mode)), n;
                    }
                    return (
                        h()(t, e),
                        c()(t, [
                            {
                                key: "getChildContext",
                                value: function () {
                                    return { hasAtlaskitThemeProvider: !0 };
                                },
                            },
                            {
                                key: "componentWillMount",
                                value: function () {
                                    if (!this.context.hasAtlaskitThemeProvider && ln.a.canUseDOM) {
                                        var e = gn(this.state);
                                        (this.stylesheet = document.createElement("style")), (this.stylesheet.type = "text/css"), (this.stylesheet.innerHTML = e), document && document.head && document.head.appendChild(this.stylesheet);
                                    }
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    if (e.mode !== this.props.mode) {
                                        var t = mn(e.mode);
                                        if (this.stylesheet) {
                                            var n = gn(t);
                                            this.stylesheet.innerHTML = n;
                                        }
                                        this.setState(t);
                                    }
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.stylesheet && document && document.head && (document.head.removeChild(this.stylesheet), delete this.stylesheet);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.children,
                                        t = this.state.theme;
                                    return y.a.createElement(
                                        pn.Provider,
                                        {
                                            value: function () {
                                                return { mode: t[I].mode };
                                            },
                                        },
                                        y.a.createElement(b.ThemeProvider, { theme: t }, y.a.createElement(yn, null, e))
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
            g()(bn, "defaultProps", { mode: "light" }), g()(bn, "childContextTypes", { hasAtlaskitThemeProvider: sn.a.bool }), g()(bn, "contextTypes", { hasAtlaskitThemeProvider: sn.a.bool });
            var Mn = b.default.span.withConfig({ displayName: "styledContainer", componentId: "sc-1vjy1uk-0" })(
                    [
                        "\n  ",
                        ";\n  border-radius: ",
                        "px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n  max-width: 100%;\n  padding: 2px 0 3px 0;\n  text-transform: uppercase;\n  vertical-align: baseline;\n",
                    ],
                    function (e) {
                        return "\n    background-color: ".concat(e.backgroundColor, ";\n    color: ").concat(e.textColor, ";\n  ");
                    },
                    3
                ),
                vn = "".concat(4, "px"),
                In = b.default.span.withConfig({ displayName: "styledContent", componentId: "ku88a7-0" })(
                    ["\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n  padding: 0 ", ";\n  max-width: ", ";\n  width: 100%;\n"],
                    vn,
                    function (e) {
                        return "number" == typeof e.maxWidth ? "".concat(e.maxWidth, "px") : e.maxWidth;
                    }
                ),
                xn = n(22),
                Sn = n.n(xn),
                Cn = n(14),
                Nn = n.n(Cn),
                An = {
                    default: { light: r.N40, dark: r.N40 },
                    inprogress: { light: r.B50, dark: r.B50 },
                    moved: { light: r.Y75, dark: r.Y75 },
                    new: { light: r.P50, dark: r.P50 },
                    removed: { light: r.R50, dark: r.R50 },
                    success: { light: r.G50, dark: r.G50 },
                },
                _n = {
                    default: { light: r.N500, dark: r.N500 },
                    inprogress: { light: r.B500, dark: r.B500 },
                    moved: { light: r.N800, dark: r.N800 },
                    new: { light: r.P500, dark: r.P500 },
                    removed: { light: r.R500, dark: r.R500 },
                    success: { light: r.G500, dark: r.G500 },
                },
                Dn = {
                    default: { light: r.N500, dark: r.N500 },
                    inprogress: { light: r.B400, dark: r.B400 },
                    moved: { light: r.Y500, dark: r.Y500 },
                    new: { light: r.P400, dark: r.P400 },
                    removed: { light: r.R400, dark: r.R400 },
                    success: { light: r.G400, dark: r.G400 },
                },
                wn = {
                    default: { light: r.N0, dark: r.N0 },
                    inprogress: { light: r.N0, dark: r.N0 },
                    moved: { light: r.N800, dark: r.N800 },
                    new: { light: r.N0, dark: r.N0 },
                    removed: { light: r.N0, dark: r.N0 },
                    success: { light: r.N0, dark: r.N0 },
                },
                jn = hn(function (e) {
                    var t = e.appearance,
                        n = e.isBold,
                        r = e.maxWidth;
                    return Nn()(
                        {},
                        "object" === Sn()(t) ? Nn()({ backgroundColor: (n ? Dn : An).default.light, textColor: (n ? wn : _n).default.light }, t) : { backgroundColor: (n ? Dn[t] : An[t]).light, textColor: (n ? wn[t] : _n[t]).light },
                        { maxWidth: r }
                    );
                }),
                Tn = (function (e) {
                    function t() {
                        return i()(this, t), u()(this, d()(t).apply(this, arguments));
                    }
                    return (
                        h()(t, e),
                        c()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props;
                                    return y.a.createElement(
                                        jn.Provider,
                                        { value: e.theme },
                                        y.a.createElement(jn.Consumer, e, function (t) {
                                            return y.a.createElement(Mn, t, y.a.createElement(In, t, e.children));
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.PureComponent);
            g()(Tn, "defaultProps", { isBold: !1, appearance: "default", maxWidth: 200 }),
                n.d(t, "default", function () {
                    return Tn;
                });
        },
    ]);
});