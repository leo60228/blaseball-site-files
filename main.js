(this.webpackJsonpsite = this.webpackJsonpsite || []).push([
  [0],
  {
    124: function (e, t) {},
    128: function (e, t, a) {},
    129: function (e, t, a) {},
    134: function (e, t, a) {},
    136: function (e, t, a) {},
    137: function (e, t, a) {},
    138: function (e, t, a) {},
    139: function (e, t, a) {},
    140: function (e, t, a) {},
    141: function (e, t, a) {},
    142: function (e, t, a) {},
    143: function (e, t, a) {},
    144: function (e, t, a) {},
    145: function (e, t, a) {},
    146: function (e, t, a) {},
    147: function (e, t, a) {},
    148: function (e, t, a) {},
    149: function (e, t, a) {},
    150: function (e, t, a) {},
    151: function (e, t, a) {},
    152: function (e, t, a) {},
    153: function (e, t, a) {},
    154: function (e, t, a) {},
    155: function (e, t, a) {},
    156: function (e, t, a) {},
    157: function (e, t, a) {},
    158: function (e, t, a) {},
    159: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        o = a(17),
        i = a.n(o),
        l = (a(89), a(6)),
        s = a(11),
        c = (a(40), a(90), a(14)),
        m = function (e) {
          var t = e.path,
            a = e.className,
            n = e.background;
          return r.a.createElement(
            c.b,
            { to: { pathname: t, state: { background: n } }, className: a },
            e.children
          );
        },
        u = a(22),
        d = a(77),
        h = a.n(d)()("https://blaseball.com", {
          transports: ["websocket", "polling"],
        }),
        E = r.a.createContext({
          sim: void 0,
          standings: void 0,
          season: void 0,
          schedule: void 0,
          tomorrowSchedule: void 0,
          postseason: {
            playoffs: void 0,
            matchups: void 0,
            round: void 0,
            tomorrowMatchups: void 0,
            tomorrowRound: void 0,
          },
        }),
        p = function (e) {
          var t = e.children,
            a = Object(n.useState)({
              sim: void 0,
              standings: void 0,
              season: void 0,
              schedule: void 0,
              tomorrowSchedule: void 0,
              postseason: {
                playoffs: void 0,
                matchups: void 0,
                round: void 0,
                tomorrowMatchups: void 0,
                tomorrowRound: void 0,
              },
            }),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              return (
                h.on("gameDataUpdate", function (e) {
                  s(function (t) {
                    return Object(u.a)({}, t, {}, e);
                  });
                }),
                function () {
                  h.off("gameDataUpdate");
                }
              );
            }, []),
            r.a.createElement(E.Provider, { value: i }, t)
          );
        };
      p.context = E;
      var A = p,
        f = a(3),
        v = a.n(f),
        g = a(5),
        y = (a(15), "https://blaseball.com"),
        b = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return fetch(e, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: t,
          });
        };
      function T() {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = Object(g.a)(
          v.a.mark(function e() {
            var t, a;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch("".concat(y, "/database/globalEvents"))
                      );
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (a = e.sent), e.abrupt("return", a);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function S() {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(g.a)(
          v.a.mark(function e() {
            var t, a;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch("".concat(y, "/database/offseasonSetup"))
                      );
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (a = e.sent), e.abrupt("return", a);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function B(e) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch(
                          ""
                            .concat(y, "/database/offseasonRecap?season=")
                            .concat(t)
                        )
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function I(e) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch(
                          "".concat(y, "/database/bonusResults?ids=").concat(t)
                        )
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function k(e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch(
                          "".concat(y, "/database/decreeResults?ids=").concat(t)
                        )
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (
                        (n = e.sent), console.log(t), e.abrupt("return", n)
                      );
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 11]]
            );
          })
        )).apply(this, arguments);
      }
      function G() {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = Object(g.a)(
          v.a.mark(function e() {
            var t, a;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch("".concat(y, "/database/allTeams"))
                      );
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (a = e.sent), e.abrupt("return", a);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function D(e) {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch("".concat(y, "/database/team?id=").concat(t))
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function M(e) {
        return W.apply(this, arguments);
      }
      function W() {
        return (W = Object(g.a)(
          v.a.mark(function e(t) {
            var a, n;
            return v.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch("".concat(y, "/database/players?ids=").concat(t))
                      );
                    case 3:
                      return (a = e.sent), (e.next = 6), a.json();
                    case 6:
                      return (n = e.sent), e.abrupt("return", n);
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      var j = {
          id: "",
          email: "",
          isSignedIn: !1,
          coins: 0,
          isFetching: !0,
          favoriteTeam: void 0,
          votes: 1,
          favoriteTeamInfo: null,
          maxBetTier: 0,
          dailyCoinsTier: 0,
          lastActive: Date.now(),
          unlockedShop: !1,
          unlockedElection: !1,
        },
        x = {
          user: j,
          initUser: function () {},
          clearUser: function () {},
          refreshUser: function () {},
        },
        U = Object(n.createContext)(x),
        Y = function (e, t) {
          var a = Object(u.a)({}, e, {
            id: e._id,
            isFetching: !1,
            isSignedIn: !(!e || !e.email),
            favoriteTeamInfo: t.favoriteTeamInfo,
          });
          return (
            a.votes || (a.votes = 0),
            void 0 === a.maxBetTier && (a.maxBetTier = 0),
            void 0 === a.dailyCoinsTier && (a.dailyCoinsTier = 0),
            void 0 === a.unlockedElection && (a.unlockedElection = !1),
            void 0 === a.unlockedShop && (a.unlockedShop = !1),
            a
          );
        },
        P = function (e) {
          var t = e.children,
            a = Object(n.useState)(j),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1],
            c = function () {
              h.emit("getUserData");
            },
            m = Object(n.useCallback)(
              Object(g.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/api/getUser", { credentials: "include" })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(
                                (function () {
                                  var e = Object(g.a)(
                                    v.a.mark(function e(t) {
                                      var a;
                                      return v.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                (((a = Y(
                                                  t,
                                                  i
                                                )).isFetching = !1),
                                                void 0 === a.favoriteTeam ||
                                                  i.favoriteTeamInfo)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (
                                                (e.next = 5), D(a.favoriteTeam)
                                              );
                                            case 5:
                                              a.favoriteTeamInfo = e.sent;
                                            case 6:
                                              s(a),
                                                h.emit("setUserId", {
                                                  userId: (a && a._id) || "",
                                                }),
                                                c();
                                            case 9:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                              .catch(function (e) {
                                var t = Object(u.a)({}, i, { isFetching: !1 });
                                s(t), console.log(e);
                              })
                          );
                        case 2:
                          return e.abrupt("return", null);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            d = Object(n.useCallback)(
              Object(g.a)(
                v.a.mark(function e() {
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (t = i.favoriteTeam), (e.next = 3), D(t);
                        case 3:
                          return (
                            (i.favoriteTeamInfo = e.sent),
                            e.abrupt("return", null)
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [i]
            );
          Object(n.useEffect)(
            function () {
              void 0 === i.favoriteTeam || i.favoriteTeamInfo || d();
            },
            [i]
          ),
            Object(n.useEffect)(
              function () {
                m();
              },
              [m]
            ),
            Object(n.useEffect)(function () {
              return (
                h.on("userDataUpdate", function (e) {
                  s(function (t) {
                    return Object(u.a)({}, t, {}, e);
                  });
                }),
                function () {
                  h.off("userDataUpdate");
                }
              );
            }, []);
          var E = {
            user: i,
            initUser: m,
            clearUser: function () {
              h.emit("setUserId", { userId: "" }), s(j);
            },
            refreshUser: c,
          };
          return r.a.createElement(U.Provider, { value: E }, t);
        };
      P.context = U;
      var J = P,
        F = r.a.createContext([]),
        H = function (e) {
          var t = e.children,
            a = Object(s.g)().pathname,
            o = Object(n.useState)({}),
            i = Object(l.a)(o, 2),
            c = i[0],
            m = i[1];
          return (
            Object(n.useEffect)(
              function () {
                fetch("/api/getActiveBets", { credentials: "include" })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    var t = {};
                    e &&
                      e.length &&
                      e.forEach(function (e) {
                        var a = e.gameId;
                        a && (t[a] || (t[a] = []), t[a].push(e));
                      }),
                      m(t);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              [a]
            ),
            r.a.createElement(F.Provider, { value: c }, t)
          );
        };
      H.context = F;
      var V = H;
      function K() {
        return (K =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function q(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var z = r.a.createElement(
          "style",
          { type: "text/css" },
          "\n\t.st0{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;}\n"
        ),
        Z = r.a.createElement(
          "g",
          {
            id: "base2",
            className: "st0",
            transform: "matrix(0.7071,-0.7071,0.7071,0.7071,-16.7558,95.4764)",
          },
          r.a.createElement("rect", {
            x: 84.83,
            y: 48.54,
            width: 70.31,
            height: 70.31,
          })
        ),
        X = r.a.createElement(
          "g",
          {
            id: "base1",
            className: "st0",
            transform: "matrix(0.7071,-0.7071,0.7071,0.7071,-40.4706,152.625)",
          },
          r.a.createElement("rect", {
            x: 141.95,
            y: 105.74,
            width: 70.31,
            height: 70.31,
          })
        ),
        _ = r.a.createElement(
          "g",
          {
            id: "base3",
            className: "st0",
            transform: "matrix(0.7071,-0.7071,0.7071,0.7071,-74.0296,71.6061)",
          },
          r.a.createElement("rect", {
            x: 27.38,
            y: 105.74,
            width: 70.31,
            height: 70.31,
          })
        ),
        $ = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = q(e, ["svgRef", "title"]);
          return r.a.createElement(
            "svg",
            K(
              {
                viewBox: "0 0 255 197",
                xmlSpace: "preserve",
                style: { enableBackground: "new 0 0 240 240" },
                ref: t,
              },
              n
            ),
            a ? r.a.createElement("title", null, a) : null,
            z,
            Z,
            X,
            _
          );
        },
        ee = r.a.forwardRef(function (e, t) {
          return r.a.createElement($, K({ svgRef: t }, e));
        });
      a.p;
      function te(e) {
        var t,
          a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.2;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))
          return (
            3 == (t = e.substring(1).split("")).length &&
              (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
            "rgba(" +
              [
                ((t = "0x" + t.join("")) >> 16) & 255,
                (t >> 8) & 255,
                255 & t,
              ].join(",") +
              ",".concat(a, ")")
          );
        throw new Error("Bad Hex");
      }
      function ae() {
        var e = [0],
          t = new Date();
        if ((t.setMinutes(t.getMinutes() + 1, 0, 0), 0 == e.length)) return t;
        for (var a = !1; !a; ) {
          for (var n = t.getMinutes(), r = 0; r < e.length; r++)
            if (e[r] == n) {
              a = !0;
              break;
            }
          a || t.setMinutes(n + 1, 0, 0);
        }
        return t;
      }
      var ne,
        re = a(12),
        oe = a(80),
        ie = a(21),
        le = (a(128), a(129), a(27)),
        se = a(55);
      !(function (e) {
        e[(e.GENERIC = 1)] = "GENERIC";
      })(ne || (ne = {}));
      var ce = function (e) {
        var t = Object(s.f)(),
          a = Object(s.g)(),
          o = (a.state && a.state.background, e.isModal),
          i = e.className,
          l = e.children,
          c = e.dismissable,
          m = e.style,
          u = Object(n.useRef)(null),
          d = function () {
            document.body.classList.remove("noscroll"), t.goBack();
          };
        Object(n.useEffect)(function () {
          o && document.body.classList.add("noscroll");
          var e = function (e) {
            27 === e.keyCode && o && d();
          };
          return (
            window.addEventListener("keydown", e),
            function () {
              window.removeEventListener("keydown", e),
                document.body.classList.remove("noscroll");
            }
          );
        }, []);
        var h = Object(se.b)({
            opacity: 1,
            transform: o ? "translate(-50%, -50%)" : "none",
            from: {
              opacity: 0,
              transform: o ? "translate(-50%, -40%)" : "none",
            },
          }),
          E = "Modal";
        switch (m) {
          case ne.GENERIC:
            E += " Modal--Generic";
        }
        var p = r.a.createElement(
          se.a.div,
          {
            style: h,
            className:
              E + (o ? "" : " Modal--Static") + (i ? " ".concat(i) : ""),
            ref: u,
          },
          c &&
            o &&
            r.a.createElement(
              "button",
              {
                className: "Modal-Close",
                onClick: function () {
                  return d();
                },
              },
              r.a.createElement(le.d, null)
            ),
          l
        );
        if (o) {
          return r.a.createElement(
            "div",
            {
              className: "Modal-Background",
              onClick: function (e) {
                !c || (u && u.current && u.current.contains(e.target)) || d();
              },
            },
            p
          );
        }
        return p;
      };
      ce.defaultProps = { dismissable: !0, style: ne.GENERIC };
      var me = ce,
        ue = a(16),
        de = a(23),
        he = a(26),
        Ee = a(53),
        pe =
          (a(134),
          function () {
            return r.a.createElement(
              "div",
              { className: "LoadingSpinner-Inline" },
              r.a.createElement(Ee.a, null)
            );
          }),
        Ae = function () {
          return r.a.createElement(
            "div",
            { className: "LoadingSpinner" },
            r.a.createElement(Ee.a, null)
          );
        };
      function fe(e, t) {
        return 0.5 === e
          ? Math.round(2 * t)
          : e < 0.5
          ? Math.round(t * (2 + 555e-6 * Math.pow(100 * (0.5 - e), 2.4135)))
          : Math.round(t * (2 - 335e-6 * Math.pow(100 * (e - 0.5), 2.045)));
      }
      var ve = function (e) {
          var t = Object(ue.useToasts)().addToast,
            a = Object(n.useContext)(J.context),
            o = a.user,
            i = a.refreshUser,
            c = Object(s.f)(),
            m = Object(n.useRef)(null),
            u = Object(s.h)().gameId,
            d = Object(n.useState)(0),
            h = Object(l.a)(d, 2),
            E = h[0],
            p = h[1],
            f = Object(n.useState)(""),
            v = Object(l.a)(f, 2),
            g = v[0],
            y = v[1],
            T = Object(n.useState)(void 0),
            N = Object(l.a)(T, 2),
            S = N[0],
            w = N[1],
            B = Object(n.useContext)(A.context),
            O = function (e) {
              var t = e.target.value;
              p(t);
            };
          if (
            (Object(n.useEffect)(function () {
              var e,
                t,
                a =
                  null === (e = B.schedule) || void 0 === e
                    ? void 0
                    : e.find(function (e) {
                        return u === e._id;
                      });
              void 0 === a &&
                (a =
                  null === (t = B.tomorrowSchedule) || void 0 === t
                    ? void 0
                    : t.find(function (e) {
                        return u === e._id;
                      })),
                a && (w(a), y(a.homeTeam));
            }, []),
            void 0 === S)
          )
            return r.a.createElement(Ae, null);
          var I = [
              {
                text: null === S || void 0 === S ? void 0 : S.homeTeamNickname,
                value: null === S || void 0 === S ? void 0 : S.homeTeam,
              },
              {
                text: null === S || void 0 === S ? void 0 : S.awayTeamNickname,
                value: null === S || void 0 === S ? void 0 : S.awayTeam,
              },
            ],
            C = he.maxBetTiers[o.maxBetTier].amount,
            k = function () {
              return S ? (g === S.homeTeam ? S.homeOdds : S.awayOdds) : 0.5;
            };
          S && (g === S.homeTeam ? S.homeTeamNickname : S.awayTeamNickname),
            S && (g === S.homeTeam ? S.homeTeamColor : S.awayTeamColor);
          var R,
            G = r.a.createElement(
              "span",
              {
                style: {
                  color:
                    ((R = k()),
                    R > 0.6
                      ? "#59bd42"
                      : R > 0.5
                      ? "#93ed77"
                      : R < 0.4
                      ? "#bf3f3f"
                      : "#f28383"),
                },
                className: "Bet-Outcome-Winnings",
              },
              Math.round(100 * k()),
              "%"
            ),
            L = r.a.createElement(
              "span",
              { className: "Bet-Outcome-Winnings" },
              fe(k(), E)
            ),
            D = r.a.createElement(
              "div",
              { className: "Bet-Outcome-Wrapper" },
              "You'll have a ",
              G,
              " chance to win ",
              L,
              " coins."
            );
          return r.a.createElement(
            me,
            Object.assign({}, e, { className: "Bet" }),
            r.a.createElement(
              "div",
              { className: "Bet-Header" },
              "Place a Bet"
            ),
            r.a.createElement(
              de.a,
              {
                className: "Bet-Form",
                onSubmit: function (e) {
                  if ((e.preventDefault(), E > C))
                    t("Max bet is ".concat(C, "!"), { appearance: "error" });
                  else {
                    var a = {
                      gameId: u,
                      amount: E,
                      userId: o._id,
                      entityId: g,
                      type: "winner",
                      odds: k(),
                    };
                    b("/api/bet", JSON.stringify(a)).then(function (e) {
                      e.ok && e.status && 200 === e.status
                        ? (i(),
                          t("Bet Placed", { appearance: "success" }),
                          c.goBack())
                        : e.json().then(function (e) {
                            t(e.error || "Error", { appearance: "error" });
                          });
                    });
                  }
                },
              },
              r.a.createElement(
                "div",
                { className: "Bet-Form-Inputs" },
                r.a.createElement(
                  de.a.Group,
                  { className: "Bet-Form-Inputs-Right", controlId: "amount" },
                  r.a.createElement(
                    de.a.Group,
                    { controlId: "entityId" },
                    r.a.createElement(
                      de.a.Label,
                      null,
                      r.a.createElement(
                        "div",
                        { className: "Bet-Form-Inputs-Label" },
                        "Who will win the game?"
                      )
                    ),
                    r.a.createElement(
                      de.a.Control,
                      {
                        as: "select",
                        name: "entityId",
                        ref: m,
                        onChange: function (e) {
                          var t = e.target.value;
                          y(t);
                        },
                      },
                      I.map(function (e, t) {
                        return r.a.createElement(
                          "option",
                          { key: t, value: e.value },
                          e.text
                        );
                      })
                    )
                  ),
                  r.a.createElement(
                    de.a.Label,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "Bet-Form-Inputs-Label" },
                      "How much do you want to wager?"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "Bet-Form-Inputs-Amount" },
                    r.a.createElement(
                      "div",
                      { className: "Bet-Coin-Wrapper" },
                      r.a.createElement(ie.f, { className: "Bet-Coin-Icon" }),
                      o.coins
                    ),
                    r.a.createElement(
                      de.a.Label,
                      null,
                      r.a.createElement(
                        "div",
                        { className: "Bet-Form-Inputs-Amount-MaxBet" },
                        "Max Bet: ",
                        C
                      )
                    ),
                    r.a.createElement(de.a.Control, {
                      type: "number",
                      value: E,
                      onChange: O,
                    }),
                    r.a.createElement(de.a.Control, {
                      type: "range",
                      min: 0,
                      max: Math.min(o.coins, C),
                      value: E,
                      onChange: O,
                      step: "1",
                    })
                  )
                )
              ),
              D,
              r.a.createElement(
                "div",
                { className: "Bet-Submit-Wrapper" },
                r.a.createElement(
                  re.a,
                  {
                    className: "Bet-Submit",
                    type: "submit",
                    variant: "success",
                  },
                  "Submit"
                )
              )
            )
          );
        },
        ge = (a(136), a(19));
      function ye(e) {
        var t = e.type,
          a = null;
        switch (t) {
          case 0:
            a = r.a.createElement(ge.e, null);
            break;
          case 1:
            a = r.a.createElement(ge.c, null);
            break;
          case 2:
            a = r.a.createElement(ge.a, null);
            break;
          case 3:
            a = r.a.createElement(ge.f, null);
            break;
          case 4:
            a = r.a.createElement(ge.g, null);
            break;
          case 5:
            a = r.a.createElement(ge.h, null);
            break;
          case 6:
            a = r.a.createElement(ge.d, null);
            break;
          case 7:
            a = r.a.createElement(ge.i, null);
            break;
          case 8:
            a = r.a.createElement(ge.j, null);
            break;
          case 9:
            a = r.a.createElement(ge.k, null);
        }
        return r.a.createElement(
          "div",
          {
            className: "WeatherIcon",
            style: { color: be(t), background: Te(t) },
          },
          a
        );
      }
      function be(e) {
        switch (e) {
          case 0:
            return "#000000";
          case 1:
            return "#fffec4";
          case 2:
            return "#737373";
          case 3:
            return "#0727a8";
          case 4:
            return "#e0dac3";
          case 5:
            return "#ffffff";
          case 6:
            return "#235917";
          case 7:
            return "#3c6cba";
          case 8:
            return "#fff98a";
          case 9:
            return "#ff5cab";
        }
        return "#ffffff";
      }
      function Te(e) {
        switch (e) {
          case 0:
            return "#67678a";
          case 1:
            return "#db7900";
          case 2:
            return "#cfcfcf";
          case 3:
            return "#348e9e";
          case 4:
            return "#877652";
          case 5:
            return "#68969e";
          case 6:
            return "#92ad58";
          case 7:
            return "#002f3b";
          case 8:
            return "#ff94ff";
          case 9:
            return "#b50027";
        }
        return "#e1e1e1";
      }
      function Ne(e) {
        return e.homeScore;
      }
      function Se(e) {
        return e.awayScore;
      }
      function we(e) {
        var t = Object(n.useContext)(A.context),
          a = (function (e, t) {
            var a, n, r, o;
            if (t) {
              for (var i in t.wins)
                e.homeTeam === i && (a = t.wins[i]),
                  e.awayTeam === i && (r = t.wins[i]);
              for (var l in t.losses)
                e.homeTeam === l && (n = t.losses[l]),
                  e.awayTeam === l && (o = t.losses[l]);
            }
            return {
              homeTeamName: e.homeTeamNickname,
              homeTeamWins: void 0 === a ? "" : a.toString(),
              homeTeamLosses: void 0 === n ? "" : n.toString(),
              homeTeamScore: Ne(e).toString(),
              awayTeamName: e.awayTeamNickname,
              awayTeamWins: void 0 === r ? "" : r.toString(),
              awayTeamLosses: void 0 === o ? "" : o.toString(),
              awayTeamScore: Se(e).toString(),
            };
          })(e.data, t.standings);
        return r.a.createElement(Be, { data: e.data, metaInfo: a });
      }
      function Be(e) {
        var t,
          a,
          o,
          i = e.data,
          l = e.metaInfo,
          c = Object(n.useContext)(J.context).user,
          u = Object(n.useContext)(V.context),
          d = {
            started: (t = i).gameStart,
            complete: t.gameComplete,
            shame: t.shame,
            inning: t.inning,
            topOfInning: t.topOfInning,
            outs: t.halfInningOuts,
            balls: t.atBatBalls,
            strikes: t.atBatStrikes,
            strikesNeeded: t.topOfInning ? t.awayStrikes : t.homeStrikes,
            weather: t.weather,
          },
          h = (function (e) {
            var t, a;
            if (e.complete)
              (a = "Complete"),
                (t =
                  "Final" +
                  (e.inning <= 9 ? "" : " (".concat(e.inning + 1, ")")));
            else if (e.started)
              if (e.shame) (t = "Shame"), (a = "Shame");
              else {
                a = "Live";
                var n = e.topOfInning ? "\u25b2" : "\u25bc";
                t = "Live - ".concat(e.inning + 1, " ").concat(n);
              }
            else (t = "Upcoming"), (a = "Upcoming");
            return r.a.createElement(
              "div",
              { className: "GameWidget-StatusBar" },
              r.a.createElement(
                "div",
                {
                  className: "GameWidget-Status GameWidget-Status--".concat(a),
                },
                t
              ),
              e.started ? r.a.createElement(ye, { type: e.weather }) : null
            );
          })(d),
          E = (function (e) {
            for (var t = [], a = 0; a < 3; a++)
              t.push(
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-Dots", key: a },
                  a < e.balls ? "\u25cf" : "\u25cb"
                )
              );
            for (var n = [], o = 0; o < e.strikesNeeded - 1; o++)
              n.push(
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-Dots", key: o },
                  o < e.strikes ? "\u25cf" : "\u25cb"
                )
              );
            for (var i = [], l = 0; l < 2; l++)
              i.push(
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-Dots", key: l },
                  l < e.outs ? "\u25cf" : "\u25cb"
                )
              );
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "GameWidget-Outs-Row" },
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-Label" },
                  "Balls"
                ),
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-DotList" },
                  t
                )
              ),
              r.a.createElement(
                "div",
                { className: "GameWidget-Outs-Row" },
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-Label" },
                  "Strikes"
                ),
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-DotList" },
                  n
                )
              ),
              r.a.createElement(
                "div",
                { className: "GameWidget-Outs-Row" },
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-Label" },
                  "Outs"
                ),
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Outs-DotList" },
                  i
                )
              )
            );
          })(d),
          p = i.topOfInning ? i.awayTeamColor : i.homeTeamColor,
          A = i.topOfInning ? i.homeTeamColor : i.awayTeamColor,
          f = Ne(i),
          v = Se(i);
        function g() {
          return i.homeScore > i.awayScore ? i.homeTeam : i.awayTeam;
        }
        function y() {
          return i.homeScore > i.awayScore ? i.awayTeam : i.homeTeam;
        }
        function b(e) {
          return e === i.homeTeam
            ? i.homeTeamNickname
            : e === i.awayTeam
            ? i.awayTeamNickname
            : "Null Team";
        }
        function T(e) {
          return e === i.homeTeam
            ? i.homeTeamColor
            : e === i.awayTeam
            ? i.awayTeamColor
            : "Null Color";
        }
        (a =
          f > v && i.gameComplete
            ? { border: 2, borderColor: "#fffffff", borderStyle: "solid" }
            : {}),
          (o =
            v > f && i.gameComplete
              ? { border: 2, borderColor: "#fffffff", borderStyle: "solid" }
              : {});
        var N = (function (e) {
            for (
              var t = {
                  onFirst: !1,
                  onSecond: !1,
                  onThird: !1,
                  playerOnFirst: void 0,
                  playerOnSecond: void 0,
                  playerOnThird: void 0,
                },
                a = 0;
              a < e.baserunnerCount;
              a++
            ) {
              var n = e.baseRunners[a];
              switch (e.basesOccupied[a]) {
                case 0:
                  (t.onFirst = !0), (t.playerOnFirst = n);
                  break;
                case 1:
                  (t.onSecond = !0), (t.playerOnSecond = n);
                  break;
                case 2:
                  (t.onThird = !0), (t.playerOnThird = n);
              }
            }
            return t;
          })(i),
          S = "";
        N.onFirst && (S += " first"),
          N.onSecond && (S += " second"),
          N.onThird && (S += " third");
        var w = r.a.createElement(
            "div",
            { className: "GameWidget-Bases" + S },
            r.a.createElement(ee, { width: "100%", height: "100%" })
          ),
          B = r.a.createElement("div", { className: "GameWidget-Outs" }, E),
          O =
            d.complete || !d.started
              ? r.a.createElement("div", null)
              : r.a.createElement(
                  "div",
                  { className: "GameWidget-AtBat" },
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-PlayerLine" },
                    r.a.createElement("div", {
                      className:
                        "GameWidget-PlayerStatusIcon GameWidget-PlayerStatusIcon--Pitching",
                    }),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-PlayerStatusLabel" },
                      "Pitching"
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className: "GameWidget-PlayerLineNameWrapper",
                        style: { background: te(A, 0.5) },
                      },
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-PlayerLineName" },
                        i.topOfInning ? i.homePitcherName : i.awayPitcherName
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-PlayerLine" },
                    r.a.createElement("div", {
                      className:
                        "GameWidget-PlayerStatusIcon GameWidget-PlayerStatusIcon--Batting",
                    }),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-PlayerStatusLabel" },
                      "Batting"
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className: "GameWidget-PlayerLineNameWrapper",
                        style: { background: te(p, 0.5) },
                      },
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-PlayerLineName" },
                        (i.topOfInning ? i.awayBatterName : i.homeBatterName) ||
                          "-"
                      )
                    )
                  )
                ),
          I = Object(s.g)(),
          C = null;
        if (d.started && c.isSignedIn) C = null;
        else if (d.started) C = r.a.createElement("div", null);
        else if (c.isSignedIn) {
          var k,
            R = u[i._id],
            G = (null === R || void 0 === R ? void 0 : R.length) || 0,
            L = G > 0 ? R[0] : void 0;
          void 0 !== L &&
            (k = L.entityId === i.homeTeam ? i.homeTeamName : i.awayTeamName),
            (C = r.a.createElement(
              oe.a,
              { className: "GameWidget-Button-Centered" },
              G > 0
                ? r.a.createElement(
                    "div",
                    { className: "GameWidget-UpcomingBet" },
                    r.a.createElement(ie.f, null),
                    " ",
                    G > 0
                      ? "".concat(L.amount, " on ").concat(k)
                      : "No active bets"
                  )
                : r.a.createElement(
                    re.a,
                    { className: "GameWidget-Button", variant: "success" },
                    r.a.createElement(
                      m,
                      { background: I, path: "/bet/".concat(i._id) },
                      "Place a Bet"
                    )
                  )
            ));
        } else
          C = r.a.createElement(
            "a",
            { href: "/login" },
            r.a.createElement(
              re.a,
              { className: "GameWidget-Button", variant: "success" },
              "Login to Play"
            )
          );
        var D = null,
          Q = null;
        if (d.started) {
          var M = u[i._id],
            W =
              ((null === M || void 0 === M ? void 0 : M.length) || 0) > 0
                ? M[0]
                : void 0,
            j = void 0 !== W ? fe(W.odds, W.amount) : 0;
          (D =
            void 0 !== W && W.entityId === i.homeTeam
              ? r.a.createElement(
                  "div",
                  { className: "GameWidget-ScoreBet" },
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-ScoreBet-Bet" },
                    r.a.createElement(ie.f, null),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-ScoreBet-Amount" },
                      W.amount
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-ScoreBet-Winnings" },
                    r.a.createElement("div", {
                      className: "GameWidget-ScoreBet-Triangle",
                    }),
                    j
                  )
                )
              : null),
            (Q =
              void 0 !== W && W.entityId === i.awayTeam
                ? r.a.createElement(
                    "div",
                    { className: "GameWidget-ScoreBet" },
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-ScoreBet-Bet" },
                      r.a.createElement(ie.f, null),
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-ScoreBet-Amount" },
                        W.amount
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-ScoreBet-Winnings" },
                      r.a.createElement("div", {
                        className: "GameWidget-ScoreBet-Triangle",
                      }),
                      j
                    )
                  )
                : null);
        }
        var x,
          U = null;
        if (d.complete) {
          var Y = u[i._id],
            P =
              ((null === Y || void 0 === Y ? void 0 : Y.length) || 0) > 0
                ? Y[0]
                : void 0,
            F =
              g() === i.homeTeam
                ? i.homeOdds - i.awayOdds
                : i.awayOdds - i.homeOdds;
          U = r.a.createElement(
            "div",
            { className: "GameWidget-Outcome" },
            r.a.createElement(
              "div",
              { className: "GameWidget-Outcome-Blurb" },
              "The ",
              (x = F) > 0.25
                ? "heavily favored"
                : x > 0
                ? "favored"
                : x < -0.25
                ? "heavy underdog"
                : x < 0
                ? "underdog"
                : "",
              "\xa0",
              r.a.createElement(
                "span",
                {
                  className: "GameWidget-Outcome-Callout",
                  style: {
                    color:
                      i.homeScore > i.awayScore
                        ? i.homeTeamColor
                        : i.awayTeamColor,
                  },
                },
                i.homeScore > i.awayScore
                  ? i.homeTeamNickname
                  : i.awayTeamNickname
              ),
              "\xa0won the game."
            ),
            i.shame
              ? r.a.createElement(
                  "div",
                  { className: "GameWidget-Outcome-Blurb" },
                  "The \xa0",
                  r.a.createElement(
                    "span",
                    {
                      className: "GameWidget-Outcome-Callout",
                      style: { color: T(y()) },
                    },
                    b(y())
                  ),
                  "\xa0were ",
                  r.a.createElement(
                    "span",
                    { className: "GameWidget-Outcome-Callout" },
                    "\xa0shamed!"
                  )
                )
              : null,
            void 0 !== P
              ? r.a.createElement(
                  "div",
                  { className: "GameWidget-Outcome-Blurb" },
                  "You bet ",
                  r.a.createElement(
                    "span",
                    { className: "GameWidget-Outcome-Callout" },
                    r.a.createElement(ie.f, null),
                    "\xa0",
                    P.amount
                  ),
                  "\xa0on the \xa0",
                  r.a.createElement(
                    "span",
                    {
                      className: "GameWidget-Outcome-Callout",
                      style: { color: T(P.entityId) },
                    },
                    b(P.entityId)
                  ),
                  "\xa0and ",
                  g() == P.entityId
                    ? r.a.createElement(
                        "span",
                        null,
                        "won ",
                        r.a.createElement(
                          "span",
                          { className: "GameWidget-Outcome-Callout" },
                          r.a.createElement(ie.f, null),
                          "\xa0",
                          fe(P.odds, P.amount)
                        ),
                        "."
                      )
                    : r.a.createElement("span", null, "lost.")
                )
              : null,
            void 0 !== i.outcomes && i.outcomes.length > 0
              ? i.outcomes.map(function (e, t) {
                  return r.a.createElement(
                    "div",
                    { key: t, className: "GameWidget-Outcome-Blurb" },
                    e
                  );
                })
              : null
          );
        } else
          U = d.started
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Display-Visual" },
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-Display-Body" },
                    !d.complete &&
                      d.started &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        w,
                        B,
                        O,
                        r.a.createElement(
                          "div",
                          { className: "GameWidget-Log" },
                          i.lastUpdate
                        )
                      )
                  )
                )
              )
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Upcoming-Info" },
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-Upcoming-Header" },
                    "Game Information"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-Upcoming-InfoBody" },
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-Upcoming-Body" },
                      r.a.createElement("div", {
                        className:
                          "GameWidget-Upcoming-Icon GameWidget-Upcoming-Icon--Pitcher",
                      }),
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-Upcoming-Label" },
                        "PITCHERS"
                      ),
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-Upcoming-Content" },
                        r.a.createElement(
                          "div",
                          { className: "GameWidget-PlayerLine" },
                          r.a.createElement(
                            "div",
                            {
                              className: "GameWidget-Upcoming-Pitchers-Wrapper",
                              style: { background: te(i.awayTeamColor, 0.5) },
                            },
                            r.a.createElement(
                              "div",
                              { className: "GameWidget-PlayerLineName" },
                              i.awayPitcherName
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "GameWidget-PlayerLine" },
                          r.a.createElement(
                            "div",
                            {
                              className: "GameWidget-Upcoming-Pitchers-Wrapper",
                              style: { background: te(i.homeTeamColor, 0.5) },
                            },
                            r.a.createElement(
                              "div",
                              { className: "GameWidget-PlayerLineName" },
                              i.homePitcherName
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-Upcoming-Body" },
                      r.a.createElement(ge.b, {
                        className: "GameWidget-Upcoming-Icon",
                      }),
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-Upcoming-Label" },
                        "WEATHER"
                      ),
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-Upcoming-Weather" },
                        r.a.createElement(
                          "span",
                          { className: "GameWidget-Upcoming-WeatherLabel" },
                          (function (e) {
                            switch (e) {
                              case 0:
                                return "Void";
                              case 1:
                                return "Sunny";
                              case 2:
                                return "Overcast";
                              case 3:
                                return "Rainy";
                              case 4:
                                return "Sandstorm";
                              case 5:
                                return "Snowy";
                              case 6:
                                return "Acidic";
                              case 7:
                                return "Solar Eclipse";
                              case 8:
                                return "Glitter";
                              case 9:
                                return "Bloodwind";
                            }
                            return "";
                          })(d.weather)
                        ),
                        r.a.createElement(ye, { type: d.weather })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "GameWidget-Upcoming-Bets" },
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-Upcoming-Header" },
                    "Chances of Winning"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-Upcoming-Odds" },
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-Upcoming-OddsTeam" },
                      r.a.createElement(
                        "div",
                        {
                          className: "GameWidget-Upcoming-Favorites-Team",
                          style: {
                            color:
                              i.homeOdds > i.awayOdds
                                ? i.homeTeamColor
                                : i.awayTeamColor,
                          },
                        },
                        i.homeOdds > i.awayOdds
                          ? i.homeTeamNickname
                          : i.awayTeamNickname
                      ),
                      r.a.createElement(
                        "div",
                        {
                          className: "GameWidget-Upcoming-Favorites-Percentage",
                        },
                        (i.homeOdds > i.awayOdds
                          ? Math.round(100 * i.homeOdds)
                          : Math.round(100 * i.awayOdds)) + "%"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-Upcoming-OddsTeam" },
                      r.a.createElement(
                        "div",
                        {
                          className: "GameWidget-Upcoming-Favorites-Team",
                          style: {
                            color:
                              i.homeOdds > i.awayOdds
                                ? i.awayTeamColor
                                : i.homeTeamColor,
                          },
                        },
                        i.homeOdds > i.awayOdds
                          ? i.awayTeamNickname
                          : i.homeTeamNickname
                      ),
                      r.a.createElement(
                        "div",
                        {
                          className: "GameWidget-Upcoming-Favorites-Percentage",
                        },
                        (i.homeOdds > i.awayOdds
                          ? Math.round(100 * i.awayOdds)
                          : Math.round(100 * i.homeOdds)) + "%"
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-Upcoming-BetButtons" },
                    C
                  )
                )
              );
        var H = null;
        d.started &&
          (H = r.a.createElement(
            "div",
            { className: "GameWidget-Log" },
            r.a.createElement(
              "div",
              { className: "GameWidget-Log-Header" },
              "Game Log"
            ),
            r.a.createElement(
              "div",
              { className: "GameWidget-Log-Content" },
              i.lastUpdate
            ),
            C
          ));
        var K = d.started ? "GameWidget-Full-Live" : "GameWidget-Full-Upcoming",
          q = i.isPostseason
            ? "Game "
                .concat(i.seriesIndex, " - Best of ")
                .concat(i.seriesLength)
            : "Game ".concat(i.seriesIndex, " of ").concat(i.seriesLength);
        return r.a.createElement(
          "div",
          { className: "GameWidget ".concat(d.complete ? "IsComplete" : "") },
          r.a.createElement(
            "div",
            { className: K },
            r.a.createElement(
              "div",
              { className: "GameWidget-Header-Wrapper" },
              r.a.createElement(
                "div",
                { className: "GameWidget-Header" },
                h,
                r.a.createElement(
                  "div",
                  {
                    className:
                      "GameWidget-ScoreLabel GameWidget-ScoreLabel--Series",
                  },
                  q
                )
              ),
              r.a.createElement(
                "div",
                { className: "GameWidget-ScoreBacking" },
                r.a.createElement(
                  m,
                  {
                    background: I,
                    path: "/team/".concat(i.awayTeam),
                    className: "GameWidget-ScoreLine",
                  },
                  r.a.createElement(
                    "div",
                    {
                      className: "GameWidget-ScoreTeamColorBar",
                      style: { background: i.awayTeamColor },
                    },
                    String.fromCodePoint(Number(i.awayTeamEmoji))
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-ScoreTeam" },
                    r.a.createElement(
                      "div",
                      {
                        className: "GameWidget-ScoreName",
                        style: { color: i.awayTeamColor },
                      },
                      l.awayTeamName
                    ),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-ScoreTeamInfo" },
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-ScoreRecord" },
                        l.awayTeamWins,
                        "-",
                        l.awayTeamLosses
                      ),
                      d.started
                        ? r.a.createElement(
                            "span",
                            { className: "GameWidget-AllBetInfo" },
                            r.a.createElement(
                              "div",
                              {
                                className: "GameWidget-WinChance",
                                style: { color: i.awayTeamColor },
                              },
                              Math.round(100 * i.awayOdds),
                              "%"
                            ),
                            Q
                          )
                        : null
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-ScoreNumber", style: o },
                    l.awayTeamScore
                  )
                ),
                r.a.createElement(
                  m,
                  {
                    background: I,
                    path: "/team/".concat(i.homeTeam),
                    className: "GameWidget-ScoreLine",
                  },
                  r.a.createElement(
                    "div",
                    {
                      className: "GameWidget-ScoreTeamColorBar",
                      style: { background: i.homeTeamColor },
                    },
                    String.fromCodePoint(Number(i.homeTeamEmoji))
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-ScoreTeam" },
                    r.a.createElement(
                      "div",
                      {
                        className: "GameWidget-ScoreName",
                        style: { color: i.homeTeamColor },
                      },
                      l.homeTeamName
                    ),
                    r.a.createElement(
                      "div",
                      { className: "GameWidget-ScoreTeamInfo" },
                      r.a.createElement(
                        "div",
                        { className: "GameWidget-ScoreRecord" },
                        l.homeTeamWins,
                        "-",
                        l.homeTeamLosses
                      ),
                      d.started
                        ? r.a.createElement(
                            "span",
                            { className: "GameWidget-AllBetInfo" },
                            r.a.createElement(
                              "div",
                              {
                                className: "GameWidget-WinChance",
                                style: { color: i.homeTeamColor },
                              },
                              Math.round(100 * i.homeOdds),
                              "%"
                            ),
                            D
                          )
                        : null
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "GameWidget-ScoreNumber", style: a },
                    l.homeTeamScore
                  )
                )
              )
            ),
            U,
            H
          )
        );
      }
      function Oe(e) {
        var t = (function (e, t) {
          var a = void 0;
          if (void 0 !== t)
            for (var n = 0; n < t.length; n++)
              if (t[n].homeTeam === e.homeTeam) {
                a = t[n];
                break;
              }
          return {
            homeTeamName: e.homeTeamNickname,
            homeTeamWins: void 0 === a ? "" : a.homeWins,
            homeTeamLosses: void 0 === a ? "" : a.awayWins,
            homeTeamScore: Ne(e).toString(),
            awayTeamName: e.awayTeamNickname,
            awayTeamWins: void 0 === a ? "" : a.awayWins,
            awayTeamLosses: void 0 === a ? "" : a.homeWins,
            awayTeamScore: Se(e).toString(),
          };
        })(e.data, e.matchups);
        return r.a.createElement(Be, { data: e.data, metaInfo: t });
      }
      a(137);
      var Ie = a(37),
        Ce = a(82),
        ke = a(81),
        Re =
          (a(138),
          function (e) {
            var t,
              a = Object(n.useRef)(null),
              o = e.content,
              i = e.children,
              s = e.url,
              c = e.className,
              m = e.buttonClassname,
              d = Object(n.useState)(!1),
              h = Object(l.a)(d, 2),
              E = h[0],
              p = h[1],
              A = function () {
                clearTimeout(t), p(!0);
              },
              f = function () {
                t = setTimeout(function () {
                  p(!1);
                }, 100);
              },
              v = r.a.createElement(
                ke.a,
                { target: a.current, show: E, placement: "bottom" },
                function (e) {
                  e.placement,
                    e.scheduleUpdate,
                    e.arrowProps,
                    e.outOfBoundaries,
                    e.show;
                  var t = Object(Ce.a)(e, [
                    "placement",
                    "scheduleUpdate",
                    "arrowProps",
                    "outOfBoundaries",
                    "show",
                  ]);
                  return r.a.createElement(
                    "div",
                    Object.assign({}, t, {
                      style: Object(u.a)({}, t.style, { top: "12px" }),
                      className: "Overlay ".concat(c),
                      onMouseOver: A,
                      onMouseOut: f,
                    }),
                    r.a.createElement("div", { className: "Overlay-Arrow" }),
                    o
                  );
                }
              );
            return s
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "a",
                    {
                      href: s,
                      ref: a,
                      onMouseOver: A,
                      onMouseOut: f,
                      className: m,
                    },
                    i
                  ),
                  v
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "div",
                    { ref: a, onMouseOver: A, onMouseOut: f, className: m },
                    i
                  ),
                  v
                );
          });
      a(139);
      function Ge() {
        var e = Object(n.useState)([]),
          t = Object(l.a)(e, 2),
          a = t[0],
          o = t[1],
          i = Object(n.useState)(!1),
          s = Object(l.a)(i, 2),
          c = s[0],
          m = s[1];
        Object(n.useEffect)(function () {
          u();
        }, []);
        function u() {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = Object(g.a)(
            v.a.mark(function e() {
              var t, a, n;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), T();
                    case 2:
                      if (((t = e.sent), (a = []), void 0 !== t)) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      for (n = 0; n < t.length; n++) a.push(t[n].msg);
                      o(a), m(!0);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var h = "EventTicker-Group";
        if (c) {
          for (var E = 0, p = 0; p < a.length; p++) E += a[p].length;
          var A = E / 5;
          h +=
            A > 300
              ? " EventTicker-Group-Animating-300"
              : A > 240
              ? " EventTicker-Group-Animating-240"
              : A > 180
              ? " EventTicker-Group-Animating-180"
              : A > 120
              ? " EventTicker-Group-Animating-120"
              : " EventTicker-Group-Animating-60";
        }
        return r.a.createElement(
          "div",
          { className: "EventTicker-Display" },
          r.a.createElement("div", { className: "EventTicker-News" }, "News:"),
          r.a.createElement(
            "div",
            { className: "EventTicker-Scroll" },
            r.a.createElement(
              "div",
              {
                className: h,
                onAnimationEnd: function () {
                  m(!1), u();
                },
              },
              a.map(function (e) {
                return r.a.createElement(
                  "div",
                  { className: "EventTicker-Item" },
                  e
                );
              })
            )
          )
        );
      }
      var Le = function () {
          var e = Object(n.useContext)(J.context),
            t = e.user,
            a =
              (e.clearUser,
              Object(s.f)(),
              r.a.createElement(
                "div",
                { className: "CoinOverlay-Content" },
                r.a.createElement(
                  "div",
                  { className: "CoinOverlay-Content-Body" },
                  "Earn Coins by placing bets on upcoming games"
                )
              )),
            o = r.a.createElement(
              "div",
              { className: "CoinOverlay-Content" },
              r.a.createElement(
                "div",
                { className: "CoinOverlay-Content-Body" },
                "Buy Votes in the Shop to spend in the Offseason"
              )
            ),
            i = null;
          if (t.favoriteTeamInfo) {
            var l = String.fromCodePoint(Number(t.favoriteTeamInfo.emoji)),
              c = encodeURIComponent(
                ""
                  .concat(t.favoriteTeamInfo.slogan || "", " ")
                  .concat(l, " #blaseball")
              ),
              m = "http://twitter.com/intent/tweet?text=".concat(
                c,
                "&url=https%3A%2F%2Fblaseball.com"
              );
            i = r.a.createElement(
              "a",
              {
                target: "_blank",
                href: m,
                style: { background: t.favoriteTeamInfo.mainColor },
                className: "Navigation-FavoriteTeamEmoji",
              },
              l
            );
          }
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Re,
              {
                className: "CoinOverlay",
                buttonClassname: "Navigation-CurrencyButton",
                content: a,
                url: "/upcoming",
              },
              r.a.createElement(ie.f, null),
              "\xa0",
              t.coins
            ),
            t.unlockedElection
              ? r.a.createElement(
                  Re,
                  {
                    className: "CoinOverlay",
                    buttonClassname: "Navigation-CurrencyButton",
                    content: o,
                    url: "/shop",
                  },
                  r.a.createElement(ie.e, null),
                  "\xa0",
                  t.votes
                )
              : null,
            i,
            r.a.createElement(
              "a",
              { href: "/auth/logout", className: "Navigation-Button" },
              "Log Out"
            )
          );
        },
        De = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(Me, { isModal: !0, path: "/signup" }, "Signup"),
            r.a.createElement(Me, { isModal: !0, path: "/login" }, "Login")
          );
        };
      function Qe(e) {
        var t = Object(n.useContext)(A.context),
          a = Object(n.useContext)(J.context).user,
          o = Object(n.useState)(!1),
          i = Object(l.a)(o, 2),
          s = i[0],
          c = i[1],
          m = [];
        m.push({
          text: "League",
          path: "/",
          subpaths: ["/upcoming", "/standings"],
        }),
          a &&
            a.isSignedIn &&
            (m.push({ text: "Shop", path: "/shop", locked: !a.unlockedShop }),
            m.push({
              text: "Election",
              path: "/offseason",
              locked: !a.unlockedElection,
            }),
            t &&
              t.sim &&
              t.sim.openedBook &&
              m.push({ text: "Book", path: "/thebook" }));
        var u = a.isFetching
          ? null
          : a.isSignedIn
          ? r.a.createElement(Le, null)
          : r.a.createElement(De, null);
        return r.a.createElement(
          "header",
          { className: "Navigation" },
          r.a.createElement(
            "div",
            { className: "Navigation-Bar" },
            r.a.createElement(
              "div",
              { className: "Navigation-Bar-Section" },
              r.a.createElement(
                "h1",
                {
                  className:
                    t && t.sim && t.sim.eraTitle
                      ? "Navigation-Header-Era"
                      : "Navigation-Header",
                },
                "Blaseball",
                t && t.sim && "" !== t.sim.eraTitle
                  ? r.a.createElement(
                      "div",
                      { className: "Navigation-Bar Navigation-Era" },
                      t.sim.eraTitle
                    )
                  : null,
                r.a.createElement(
                  "div",
                  { className: "Navigation-Tag" },
                  "BETA"
                )
              ),
              r.a.createElement(
                "div",
                { className: "Navigation-Follow" },
                r.a.createElement(
                  "div",
                  { className: "Navigation-Follow-Inner" },
                  r.a.createElement(
                    "a",
                    {
                      className: "Navigation-Follow-Icon",
                      href: "https://discord.gg/3uFgJhu",
                      target: "_blank",
                    },
                    r.a.createElement(Ie.b, null)
                  ),
                  r.a.createElement(
                    "a",
                    {
                      className: "Navigation-Follow-Icon",
                      href: "https://twitter.com/blaseballcomms",
                      target: "_blank",
                    },
                    r.a.createElement(Ie.d, null)
                  )
                ),
                r.a.createElement("div", {
                  className: "Navigation-Follow-Triangle",
                })
              )
            ),
            r.a.createElement(
              "div",
              {
                className:
                  "Navigation-Bar-Section Navigation-Bar-Section--Mobile",
              },
              r.a.createElement(
                "div",
                {
                  className: "Navigation-Bar-Menu ".concat(
                    s ? "Navigation-Bar-Menu--IsOpen" : ""
                  ),
                },
                r.a.createElement(
                  "a",
                  {
                    className: "Navigation-Bar-Menu-Toggle",
                    onClick: function () {
                      return c(!s);
                    },
                  },
                  "My Account"
                ),
                r.a.createElement(
                  "div",
                  { className: "Navigation-Bar-Menu-List" },
                  u
                )
              )
            )
          ),
          t && t.sim && t.sim.openedBook ? r.a.createElement(Ge, null) : null,
          r.a.createElement(
            "div",
            { className: "Navigation-Bar" },
            r.a.createElement(
              "div",
              { className: "Navigation-Bar-Section" },
              m.map(function (e, t) {
                return r.a.createElement(
                  Me,
                  { key: t, path: e.path, subpaths: e.subpaths },
                  e.text,
                  " ",
                  e.locked ? r.a.createElement(le.a, null) : null
                );
              })
            ),
            r.a.createElement(
              "div",
              {
                className:
                  "Navigation-Bar-Section Navigation-Bar-Section--Desktop",
              },
              u
            )
          )
        );
      }
      function Me(e) {
        var t = e.path,
          a = e.isModal,
          n = e.subpaths,
          o = Object(s.g)(),
          i = o.pathname,
          l = !("/login" === i || "/signup" === i),
          c =
            i === t ||
            void 0 !==
              (null === n || void 0 === n
                ? void 0
                : n.find(function (e) {
                    return e === i;
                  }));
        return r.a.createElement(
          m,
          {
            background: l && a && o,
            path: t,
            className:
              "Navigation-Button" + (c ? " Navigation-Button-Current" : ""),
          },
          e.children
        );
      }
      function We() {
        Object(n.useContext)(A.context);
        return r.a.createElement(
          "header",
          { className: "Navigation" },
          r.a.createElement(
            "div",
            { className: "Navigation-Bar" },
            r.a.createElement(
              "div",
              { className: "Navigation-Bar-Section" },
              r.a.createElement(
                "h1",
                { className: "Navigation-Header" },
                "Blaseball",
                r.a.createElement(
                  "div",
                  { className: "Navigation-Tag" },
                  "BETA"
                )
              ),
              r.a.createElement(
                "div",
                { className: "Navigation-Follow" },
                r.a.createElement(
                  "div",
                  { className: "Navigation-Follow-Inner" },
                  r.a.createElement(
                    "a",
                    {
                      className: "Navigation-Follow-Icon",
                      href: "https://discord.gg/3uFgJhu",
                      target: "_blank",
                    },
                    r.a.createElement(Ie.b, null)
                  ),
                  r.a.createElement(
                    "a",
                    {
                      className: "Navigation-Follow-Icon",
                      href: "https://twitter.com/blaseballcomms",
                      target: "_blank",
                    },
                    r.a.createElement(Ie.d, null)
                  )
                ),
                r.a.createElement("div", {
                  className: "Navigation-Follow-Triangle",
                })
              )
            ),
            r.a.createElement(
              "div",
              {
                className:
                  "Navigation-Bar-Section Navigation-Bar-Section--Mobile",
              },
              r.a.createElement(De, null)
            )
          ),
          r.a.createElement(
            "div",
            { className: "Navigation-Bar" },
            r.a.createElement(
              "div",
              {
                className:
                  "Navigation-Bar-Section Navigation-Bar-Section--Desktop",
              },
              r.a.createElement(De, null)
            )
          )
        );
      }
      function je() {
        Object(n.useContext)(A.context);
        return r.a.createElement(
          "header",
          { className: "Navigation" },
          r.a.createElement(
            "h1",
            { className: "Navigation-Header" },
            "Blaseball",
            r.a.createElement("div", { className: "Navigation-Tag" }, "BETA")
          )
        );
      }
      a(140);
      function xe() {
        return r.a.createElement(
          "div",
          { className: "Advertisement-SiteHeader" },
          "This season is brought to you by ",
          r.a.createElement(
            "a",
            {
              className: "Advertisement-SiteHeader-Callout",
              href:
                "https://yesplz.coffee/?promo=BLASEBALL&utm_source=blaseball&utm_medium=referral&utm_campaign=blaseballweb",
            },
            "Yes Plz Coffee"
          )
        );
      }
      a(141);
      var Ue,
        Ye = function (e) {
          var t = e.dateString,
            a = Object(n.useState)(),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(
              function () {
                var e,
                  a = function () {
                    var e =
                        (new Date(Date.parse(t)).getTime() -
                          new Date().getTime()) /
                        1e3,
                      a = Math.max(Math.floor(e / 3600), 0);
                    e -= 3600 * a;
                    var n = Math.max(Math.floor(e / 60), 0);
                    e -= 60 * n;
                    var r = Math.max(Math.floor(e), 0);
                    s({ hours: a, minutes: n, seconds: r });
                  };
                return (
                  a(),
                  (e = setInterval(a, 1e3)),
                  function () {
                    clearInterval(e);
                  }
                );
              },
              [t]
            ),
            r.a.createElement(
              "span",
              { className: "Countdown" },
              r.a.createElement(
                "span",
                { className: "Countdown-Number" },
                null === i || void 0 === i ? void 0 : i.hours
              ),
              "Hours",
              r.a.createElement(
                "span",
                { className: "Countdown-Number" },
                null === i || void 0 === i ? void 0 : i.minutes
              ),
              "Minutes",
              r.a.createElement(
                "span",
                { className: "Countdown-Number" },
                null === i || void 0 === i ? void 0 : i.seconds
              ),
              "Seconds"
            )
          );
        };
      !(function (e) {
        (e[(e.Live = 0)] = "Live"), (e[(e.Upcoming = 1)] = "Upcoming");
      })(Ue || (Ue = {}));
      var Pe,
        Je = function (e) {
          var t,
            a = e.path,
            o = Object(n.useContext)(A.context),
            i = Object(n.useContext)(J.context).user,
            l = Object(n.useContext)(V.context),
            s = void 0 === o.schedule;
          function c() {
            return "/upcoming" === a ? Ue.Upcoming : Ue.Live;
          }
          if (!o.sim) return null;
          var m = c() === Ue.Upcoming ? o.tomorrowSchedule : o.schedule,
            u = c() === Ue.Live ? o.sim.day : o.sim.day + 1,
            d =
              void 0 === m
                ? null
                : r.a.createElement(
                    "ul",
                    null,
                    null ===
                      (t = (function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        if (!i || !l || void 0 === e) return e;
                        for (var t = 0; t < e.length; t++) {
                          var a = e[t],
                            n = l[a._id];
                          void 0 !== n && (e.splice(t, 1), e.splice(0, 0, a));
                        }
                        for (var r = 0; r < e.length; r++) {
                          var o = e[r];
                          (i.favoriteTeam != o.homeTeam &&
                            i.favoriteTeam != o.awayTeam) ||
                            (e.splice(r, 1), e.splice(0, 0, o));
                        }
                        return e;
                      })(m)) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return r.a.createElement(we, { key: t, data: e });
                        })
                  ),
            h =
              void 0 === m || (void 0 !== m && m.length <= 0)
                ? r.a.createElement(
                    "div",
                    { className: "DailySchedule-Body" },
                    "There are no season games scheduled for Day ",
                    u + 1,
                    "."
                  )
                : r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "DailySchedule-Countdown" },
                      c() === Ue.Upcoming
                        ? r.a.createElement(Ye, { dateString: ae().toString() })
                        : null
                    ),
                    d
                  ),
            E = void 0 !== o && void 0 !== o.sim ? o.sim.season : -1;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: "DailySchedule-Header" },
              "Season",
              r.a.createElement(
                "span",
                { className: "DailySchedule-Number" },
                E + 1
              ),
              "Day",
              r.a.createElement(
                "span",
                { className: "DailySchedule-Number" },
                u + 1
              )
            ),
            r.a.createElement(xe, null),
            r.a.createElement(
              "div",
              { className: "DailySchedule-Nav" },
              r.a.createElement(Me, { path: "/" }, "Watch Live"),
              r.a.createElement(Me, { path: "/upcoming" }, "Place Bets"),
              r.a.createElement(Me, { path: "/standings" }, "Standings")
            ),
            s ? r.a.createElement(Ae, null) : h
          );
        };
      !(function (e) {
        (e[(e.Live = 0)] = "Live"), (e[(e.Upcoming = 1)] = "Upcoming");
      })(Pe || (Pe = {}));
      var Fe = function (e) {
          var t,
            a,
            o,
            i,
            l,
            s,
            c,
            m,
            u,
            d,
            h,
            E,
            p = e.path,
            f = Object(n.useContext)(A.context),
            v = Object(n.useContext)(J.context).user,
            g = Object(n.useContext)(V.context),
            y = void 0 === f.schedule;
          if (void 0 === f.postseason.playoffs) return null;
          function b() {
            return "/upcoming" === p ? Pe.Upcoming : Pe.Live;
          }
          function T() {
            var e, t;
            return b() === Pe.Live
              ? (null === (e = f.sim) || void 0 === e ? void 0 : e.day) || -1
              : (null === (t = f.sim) || void 0 === t ? void 0 : t.day) || 0;
          }
          if (!f.sim) return null;
          var N = b() === Pe.Live ? f.schedule : f.tomorrowSchedule,
            S =
              (b() === Pe.Live ? f.sim.day : f.sim.day,
              b() === Pe.Live
                ? f.postseason.matchups
                : f.postseason.tomorrowMatchups),
            w =
              void 0 === N || (void 0 !== N && N.length <= 0)
                ? null
                : r.a.createElement(
                    "ul",
                    null,
                    null ===
                      (t = (function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        if (!v || !g || void 0 === e) return e;
                        for (var t = 0; t < e.length; t++) {
                          var a = e[t],
                            n = g[a._id];
                          void 0 !== n && (e.splice(t, 1), e.splice(0, 0, a));
                        }
                        for (var r = 0; r < e.length; r++) {
                          var o = e[r];
                          (v.favoriteTeam != o.homeTeam &&
                            v.favoriteTeam != o.awayTeam) ||
                            (e.splice(r, 1), e.splice(0, 0, o));
                        }
                        return e;
                      })(N)) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return r.a.createElement(Oe, {
                            key: t,
                            data: e,
                            matchups: S,
                          });
                        })
                  ),
            B =
              void 0 !==
              (null === f ||
              void 0 === f ||
              null === (a = f.postseason) ||
              void 0 === a ||
              null === (o = a.round) ||
              void 0 === o
                ? void 0
                : o.roundNumber)
                ? null === f ||
                  void 0 === f ||
                  null === (i = f.postseason) ||
                  void 0 === i ||
                  null === (l = i.round) ||
                  void 0 === l
                  ? void 0
                  : l.roundNumber
                : -1,
            O =
              void 0 !==
              (null === f ||
              void 0 === f ||
              null === (s = f.postseason) ||
              void 0 === s ||
              null === (c = s.tomorrowRound) ||
              void 0 === c
                ? void 0
                : c.roundNumber)
                ? null === f ||
                  void 0 === f ||
                  null === (m = f.postseason) ||
                  void 0 === m ||
                  null === (u = m.tomorrowRound) ||
                  void 0 === u
                  ? void 0
                  : u.roundNumber
                : -1,
            I = (b() === Pe.Live ? B : O) + 1;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: "DailySchedule-Header" },
              r.a.createElement(
                "div",
                { className: "DailySchedule-Header-Group" },
                (
                  null === (d = f.postseason.round) || void 0 === d
                    ? void 0
                    : d.special
                )
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      null === (h = f.postseason.round) || void 0 === h
                        ? void 0
                        : h.name,
                      "\xa0"
                    )
                  : "Postseason Round"
              ),
              (
                null === (E = f.postseason.round) || void 0 === E
                  ? void 0
                  : E.special
              )
                ? null
                : r.a.createElement(
                    "span",
                    { className: "DailySchedule-Number" },
                    I
                  ),
              "Day",
              r.a.createElement(
                "span",
                { className: "DailySchedule-Number" },
                T() + 1
              )
            ),
            r.a.createElement(xe, null),
            r.a.createElement(
              "div",
              { className: "DailySchedule-Nav" },
              r.a.createElement(Me, { path: "/" }, "Watch Live"),
              r.a.createElement(Me, { path: "/upcoming" }, "Place Bets"),
              r.a.createElement(Me, { path: "/standings" }, "Standings")
            ),
            y
              ? r.a.createElement(Ae, null)
              : r.a.createElement(
                  "div",
                  null,
                  null !== w
                    ? r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "div",
                          { className: "DailySchedule-Countdown" },
                          b() === Pe.Upcoming
                            ? r.a.createElement(Ye, {
                                dateString: ae().toString(),
                              })
                            : null
                        ),
                        r.a.createElement("ul", null, w)
                      )
                    : r.a.createElement(
                        "div",
                        { className: "DailySchedule-Body" },
                        "There are no postseason games yet scheduled for Day ",
                        T() + 1,
                        ". Check back when the current batch of games finish."
                      )
                )
          );
        },
        He =
          (a(142),
          a(143),
          r.a.createContext({
            leagues: [],
            subleagues: [],
            divisions: [],
            teams: [],
            players: [],
          })),
        Ve = function (e) {
          var t = e.children,
            a = Object(n.useState)({
              leagues: [],
              subleagues: [],
              divisions: [],
              teams: [],
              players: [],
            }),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              return (
                h.on("leagueDataUpdate", function (e) {
                  s(function (t) {
                    return Object(u.a)({}, t, {}, e);
                  });
                }),
                function () {
                  h.off("leagueDataUpdate");
                }
              );
            }, []),
            r.a.createElement(He.Provider, { value: i }, t)
          );
        };
      Ve.context = He;
      var Ke = Ve;
      function qe() {
        var e = Object(n.useContext)(A.context);
        if (!e || !e.sim) return null;
        var t = void 0 !== e.sim.season ? e.sim.season : -1;
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "div",
            { className: "DailySchedule-Header" },
            "Season",
            r.a.createElement(
              "span",
              { className: "DailySchedule-Number" },
              t + 1
            ),
            "\xa0Standings"
          ),
          r.a.createElement(xe, null),
          r.a.createElement(
            "div",
            { className: "DailySchedule-Nav" },
            r.a.createElement(Me, { path: "/" }, "Watch Live"),
            r.a.createElement(Me, { path: "/upcoming" }, "Place Bets"),
            r.a.createElement(Me, { path: "/standings" }, "Standings")
          ),
          r.a.createElement(ze, null)
        );
      }
      function ze() {
        var e = Object(n.useContext)(A.context),
          t = Object(n.useContext)(Ke.context);
        if (!e || !e.sim) return null;
        if (!t || !t.leagues) return null;
        var a = t.leagues.find(function (t) {
          var a;
          return (
            t._id ===
            (null === (a = e.season) || void 0 === a ? void 0 : a.league)
          );
        });
        if (void 0 === a) return null;
        var o = [];
        if (t)
          for (var i = 0; i < a.subleagues.length; i++)
            o.push(
              r.a.createElement(Ze, {
                key: i,
                subleague: a.subleagues[i],
                standings: e.standings,
              })
            );
        return void 0 !== a
          ? r.a.createElement(
              "div",
              { className: "Standings-League" },
              a.name,
              r.a.createElement(
                "ul",
                { className: "Standings-Subleague-Container" },
                o
              )
            )
          : r.a.createElement(Ae, null);
      }
      function Ze(e) {
        var t = Object(n.useContext)(Ke.context).subleagues.find(function (t) {
          return t._id === e.subleague;
        });
        if (void 0 === t) return null;
        for (var a = [], o = 0; o < t.divisions.length; o++)
          a.push(
            r.a.createElement(Xe, {
              key: o,
              division: t.divisions[o],
              standings: e.standings,
            })
          );
        return r.a.createElement(
          "div",
          { className: "Standings-Subleague" },
          r.a.createElement(
            "div",
            { className: "Standings-Subleague-Header" },
            t.name
          ),
          r.a.createElement(
            "ul",
            { className: "Standings-Division-Container" },
            a
          )
        );
      }
      function Xe(e) {
        var t = Object(n.useContext)(Ke.context).divisions.find(function (t) {
          return t._id === e.division;
        });
        if (void 0 === t) return null;
        for (
          var a = [], o = [], i = [], l = [], s = 0;
          s < t.teams.length;
          s++
        ) {
          for (
            var c = _e(t.teams[s], e.standings), m = !1, u = 0;
            u < o.length;
            u++
          ) {
            var d = i[u];
            if (c[0] > d) {
              o.splice(u, 0, t.teams[s]),
                i.splice(u, 0, c[0]),
                l.splice(u, 0, c[1]),
                (m = !0);
              break;
            }
          }
          m || (o.push(t.teams[s]), i.push(c[0]), l.push(c[1]));
        }
        for (var h = 0; h < o.length; h++)
          a.push(
            r.a.createElement($e, {
              key: h,
              team: o[h],
              wins: i[h],
              losses: l[h],
            })
          );
        return r.a.createElement(
          "div",
          { className: "Standings-Division" },
          r.a.createElement(
            "div",
            { className: "Standings-Division-Header" },
            e.division.name
          ),
          r.a.createElement("ul", { className: "Standings-Team-Container" }, a)
        );
      }
      function _e(e, t) {
        var a = 0,
          n = 0;
        if (void 0 !== t) {
          for (var r in t.wins)
            if (r === e) {
              a = t.wins[r];
              break;
            }
          for (var o in t.losses)
            if (o === e) {
              n = t.losses[o];
              break;
            }
        }
        return [a, n];
      }
      function $e(e) {
        var t = Object(s.g)(),
          a = Object(n.useContext)(Ke.context).teams.find(function (t) {
            return t._id === e.team;
          });
        return void 0 === a
          ? null
          : r.a.createElement(
              m,
              {
                background: t,
                path: "/team/".concat(a._id),
                className: "Standings-Team",
              },
              r.a.createElement(
                "div",
                { className: "Standings-Team-Name-Container" },
                r.a.createElement(
                  "div",
                  {
                    className: "Standings-Team-Color",
                    style: { background: a.mainColor },
                  },
                  r.a.createElement(
                    "div",
                    { className: "Standings-Team-Emoji" },
                    String.fromCodePoint(Number(a.emoji))
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "Standings-Team-Name" },
                  a.fullName
                )
              ),
              r.a.createElement(
                "div",
                {
                  className: "Standings-Team-Standings",
                  style: { color: a.mainColor },
                },
                e.wins,
                "-",
                e.losses
              )
            );
      }
      var et = function (e) {
        var t = e.sim,
          a = Object(n.useState)(),
          o = Object(l.a)(a, 2),
          i = o[0],
          s = o[1],
          c = (function () {
            var e = Object(g.a)(
              v.a.mark(function e() {
                var a, n, r, o, i;
                return v.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (void 0 === t) {
                            e.next = 22;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (a = ""),
                            (e.next = 5),
                            fetch(
                              ""
                                .concat(y, "/database/playoffs?number=")
                                .concat(t.season)
                            )
                          );
                        case 5:
                          return (n = e.sent), (e.next = 8), n.json();
                        case 8:
                          return (
                            (r = e.sent),
                            (a = r.winner),
                            (e.next = 12),
                            fetch("".concat(y, "/database/team?id=").concat(a))
                          );
                        case 12:
                          return (o = e.sent), (e.next = 15), o.json();
                        case 15:
                          (i = e.sent), s(i), (e.next = 22);
                          break;
                        case 19:
                          (e.prev = 19), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 19]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        if (
          (Object(n.useEffect)(
            function () {
              c();
            },
            [t]
          ),
          void 0 === t)
        )
          return null;
        if (void 0 === i || "" === i) return null;
        var m = void 0 !== i ? i.mainColor : "#ffffff",
          u = void 0 !== i ? i.fullName : "",
          d =
            void 0 !== i
              ? r.a.createElement(
                  "div",
                  { className: "PlayoffsEnd-Body" },
                  "Your Champions are the ",
                  r.a.createElement(
                    "span",
                    { className: "PlayoffsEnd-Callout", style: { color: m } },
                    u,
                    "!"
                  )
                )
              : null;
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "div",
            { className: "PlayoffsEnd" },
            r.a.createElement(
              "div",
              { className: "PlayoffsEnd-Header" },
              "Season ",
              t.season + 1,
              " is over."
            ),
            d,
            r.a.createElement(
              "div",
              { className: "PlayoffsEnd-End" },
              r.a.createElement(
                "a",
                { href: "/offseason" },
                "The Election ends soon! Go cast your Votes."
              )
            ),
            r.a.createElement(
              "div",
              { className: "PlayoffsEnd-End" },
              "The next season starts in..."
            ),
            r.a.createElement(Ye, { dateString: t.nextSeasonStart })
          ),
          r.a.createElement(ze, null)
        );
      };
      a(144);
      function tt() {
        return r.a.createElement(
          "div",
          { className: "About-All" },
          r.a.createElement(
            "div",
            { className: "About-Header" },
            "Welcome to Blaseball."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            "Blaseball is baseball at your mercy. Baseball perfected. Our players are inhuman. They play day and night. Rain or shine. They never grow sick. They never tire."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            "This is our gift to you \u2014 the fans. We hear your prayers at trade deadlines. We suffer your DH debates. No more. Democracy returns to blaseball. At the end of each week, you will vote on how to change the league. Everything from rules to rosters is in your hands."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            "Of course, votes aren\u2019t free. Cash is king. So do what you do best. ",
            r.a.createElement(
              "a",
              { className: "Stubs-Highlight", href: "/upcoming" },
              "Gamble."
            ),
            " Betting is allowed and encouraged. But parents fear not \u2014 your currencies and credit cards have no value here. Blaseball deals in its own dollar."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            "Seasons run Monday to Thursday. The Postseason runs on Friday. Saturday is Election Day. On Sunday, we rest."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            r.a.createElement(
              "a",
              { target: "_blank", href: "https://discord.gg/3uFgJhu" },
              "Join the official",
              r.a.createElement(
                "span",
                { className: "Stubs-Highlight" },
                "Discord"
              )
            ),
            "to commune with the rest of your kind. And take care to ",
            r.a.createElement(
              "a",
              { target: "_blank", href: "https://twitter.com/blaseballcomms" },
              "follow the commissioner on",
              r.a.createElement(
                "span",
                { className: "Stubs-Highlight" },
                "Twitter."
              )
            ),
            " We expect he\u2019ll need your help."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            r.a.createElement(
              "span",
              { className: "Stubs-Serif" },
              "A warning:"
            ),
            " beware the forbidden book."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            "Rejoice. Play ball."
          ),
          r.a.createElement(
            "div",
            { className: "About-Body" },
            r.a.createElement(
              "span",
              { className: "Stubs-Serif" },
              "\u2014  The Blaseball Gods"
            )
          )
        );
      }
      function at() {
        var e = Object(s.g)();
        return r.a.createElement(
          "div",
          { className: "About-All" },
          r.a.createElement(
            "div",
            { className: "About-Header" },
            "Welcome to Blaseball."
          ),
          r.a.createElement(
            m,
            { background: e, path: "/signup", className: "About-Ticket" },
            r.a.createElement(ie.e, null)
          ),
          r.a.createElement(
            "a",
            {
              href:
                "https://www.vice.com/en_us/article/n7w44w/blaseball-is-the-real-return-of-baseball",
              target: "_blank",
              className: "About-Quote",
            },
            "\u201cA dangerous time waster\u201d"
          ),
          r.a.createElement(
            "a",
            {
              href:
                "https://www.vice.com/en_us/article/n7w44w/blaseball-is-the-real-return-of-baseball",
              target: "_blank",
              className: "About-QuoteAuthor",
            },
            "- VICE"
          ),
          r.a.createElement(
            "a",
            {
              href: "https://megaphone.link/ZAM4811988841",
              target: "_blank",
              className: "About-Quote",
            },
            "\u201cA f***ing delight in this horrible cruel world that we live in\u201d"
          ),
          r.a.createElement(
            "a",
            {
              href: "https://megaphone.link/ZAM4811988841",
              target: "_blank",
              className: "About-QuoteAuthor",
            },
            "\u2013 FANBYTE"
          ),
          r.a.createElement(
            "a",
            {
              href: "https://twitter.com/blaseballcomms",
              target: "_blank",
              className: "About-Quote",
            },
            "\u201cVery strange\u201d"
          ),
          r.a.createElement(
            "a",
            {
              href: "https://twitter.com/blaseballcomms",
              target: "_blank",
              className: "About-QuoteAuthor",
            },
            "\u2013 A lot of people on Twitter"
          ),
          r.a.createElement(
            m,
            { background: e, path: "/signup" },
            r.a.createElement(
              re.a,
              { className: "About-Button", variant: "success" },
              r.a.createElement(
                "div",
                { className: "About-Button-Text" },
                "Play Now"
              )
            )
          ),
          r.a.createElement(
            "div",
            { className: "About-Body-Container" },
            r.a.createElement(
              "div",
              { className: "About-Body" },
              "Blaseball is baseball at your mercy. Baseball perfected. Our players are inhuman. They play day and night. Rain or shine. They never grow sick. They never tire."
            ),
            r.a.createElement(
              "div",
              { className: "About-Body" },
              "This is our gift to you \u2014 the fans. We hear your prayers at trade deadlines. We suffer your DH debates. No more. Democracy returns to the national pastime. Each week, you vote to remake the league in your own image. Everything from rules to rosters is in your hands."
            ),
            r.a.createElement(
              "div",
              { className: "About-Body" },
              "Of course, votes aren\u2019t free. Cash is king. So do what you do best. Gamble. Betting is allowed and encouraged. But parents fear not \u2014 your currencies and credit cards have no value here. Blaseball deals in its own dollar."
            ),
            r.a.createElement(
              "div",
              { className: "About-Body" },
              "Seasons run Monday to Friday. The Postseason runs on Saturday. On Sunday, we rest."
            ),
            r.a.createElement(
              "div",
              { className: "About-Body" },
              "Your first vote is on us. The fate of the league is on you."
            ),
            r.a.createElement(
              "div",
              { className: "About-Body" },
              "Rejoice. Play ball."
            ),
            r.a.createElement(
              "div",
              { className: "About-Body" },
              r.a.createElement(
                "span",
                { className: "Stubs-Serif" },
                "\u2014  The Blaseball Gods"
              )
            )
          )
        );
      }
      a(145);
      function nt(e) {
        return void 0 !== e.element
          ? e.element
          : r.a.createElement("div", { className: "Stubs-Header" }, e.text);
      }
      a(146);
      var rt = a(54);
      function ot(e) {
        for (
          var t = e / 0.2,
            a = Math.round(2 * t) / 2,
            n = Math.floor(a),
            o = Math.ceil(a),
            i = [],
            l = 0;
          l < n;
          l++
        )
          i.push(r.a.createElement(rt.a, null));
        return (
          n !== o && i.push(r.a.createElement(rt.b, null)),
          r.a.createElement("span", null, i)
        );
      }
      var it = function (e) {
        var t = Object(s.h)().nickname,
          a = Object(n.useContext)(A.context),
          o = Object(n.useContext)(Ke.context),
          i = Object(n.useState)({
            lineup: [],
            rotation: [],
            bullpen: [],
            bench: [],
          }),
          c = Object(l.a)(i, 2),
          m = c[0],
          u = c[1],
          d = o.teams.find(function (e) {
            return e._id === t;
          });
        Object(n.useEffect)(function () {
          h();
        }, []);
        var h = (function () {
          var e = Object(g.a)(
            v.a.mark(function e() {
              var t, a, n, r, o, i, l, s, c, m;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (void 0 !== d) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      for (t = [], a = 0; a < d.lineup.length; a++)
                        t.push(d.lineup[a]);
                      for (n = 0; n < d.rotation.length; n++)
                        t.push(d.rotation[n]);
                      return (e.next = 7), M(t);
                    case 7:
                      for (
                        r = e.sent,
                          o = [],
                          i = function (e) {
                            o.push(
                              r.find(function (t) {
                                return d.lineup[e] === t._id;
                              })
                            );
                          },
                          l = 0;
                        l < d.lineup.length;
                        l++
                      )
                        i(l);
                      for (
                        s = [],
                          c = function (e) {
                            s.push(
                              r.find(function (t) {
                                return d.rotation[e] === t._id;
                              })
                            );
                          },
                          m = 0;
                        m < d.rotation.length;
                        m++
                      )
                        c(m);
                      u({ lineup: o, rotation: s, bench: [], bullpen: [] });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        if (void 0 === o || void 0 === o.teams) return null;
        if (void 0 === d) return null;
        var E,
          p = d.emoji;
        if (void 0 === m) return r.a.createElement(Ae, null);
        var f = m.lineup.map(function (e) {
            return r.a.createElement(
              "li",
              { className: "Player-Line" },
              r.a.createElement(
                "div",
                { className: "Player-Header" },
                null === e || void 0 === e ? void 0 : e.name
              ),
              r.a.createElement(
                "div",
                { className: "Player-Ratings" },
                ot(
                  (function (e) {
                    return (
                      Math.pow(1 - e.tragicness, 0.01) *
                      Math.pow(e.buoyancy, 0) *
                      Math.pow(e.thwackability, 0.35) *
                      Math.pow(e.moxie, 0.075) *
                      Math.pow(e.divinity, 0.35) *
                      Math.pow(e.musclitude, 0.075) *
                      Math.pow(1 - e.patheticism, 0.05) *
                      Math.pow(e.martyrdom, 0.02)
                    );
                  })(e)
                )
              )
            );
          }),
          y = m.rotation.map(function (e) {
            return r.a.createElement(
              "li",
              { className: "Player-Line" },
              r.a.createElement(
                "div",
                { className: "Player-Header" },
                null === e || void 0 === e ? void 0 : e.name
              ),
              r.a.createElement(
                "div",
                { className: "Player-Ratings" },
                ot(
                  (function (e) {
                    return (
                      Math.pow(e.shakespearianism, 0.1) *
                      Math.pow(e.suppression, 0) *
                      Math.pow(e.unthwackability, 0.5) *
                      Math.pow(e.coldness, 0.025) *
                      Math.pow(e.overpowerment, 0.15) *
                      Math.pow(e.ruthlessness, 0.4)
                    );
                  })(e)
                )
              )
            );
          }),
          b = (function (e, t) {
            var a = 0,
              n = 0;
            if (void 0 !== t) {
              for (var r in t.wins)
                if (r === e._id) {
                  a = t.wins[r];
                  break;
                }
              for (var o in t.losses)
                if (o === e._id) {
                  n = t.losses[o];
                  break;
                }
            }
            return [a, n];
          })(d._id, null === a || void 0 === a ? void 0 : a.standings),
          T = b[1],
          N = b[0];
        return (
          (E = r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "Team-Info" },
              r.a.createElement(
                "div",
                { className: "Team-Header" },
                r.a.createElement(
                  "div",
                  {
                    style: { backgroundColor: d.mainColor },
                    className: "Team-Logo",
                  },
                  String.fromCodePoint(Number(p))
                ),
                r.a.createElement(
                  "div",
                  { className: "Team-Name-Wrapper" },
                  r.a.createElement(
                    "header",
                    { className: "Team-Name" },
                    d.fullName
                  ),
                  r.a.createElement(
                    "div",
                    { className: "Team-Slogan" },
                    r.a.createElement("i", null, '"', d.slogan, '"')
                  ),
                  r.a.createElement(
                    "div",
                    { className: "Team-Standing" },
                    "( ".concat(N, " - ").concat(T, " )")
                  )
                )
              )
            ),
            r.a.createElement(
              "div",
              { className: "Team-Content" },
              r.a.createElement(
                "div",
                { className: "Team-Section" },
                r.a.createElement(
                  "div",
                  { className: "Team-Subheader" },
                  "Lineup"
                ),
                r.a.createElement("ul", null, f)
              ),
              r.a.createElement(
                "div",
                { className: "Team-Section" },
                r.a.createElement(
                  "div",
                  { className: "Team-Subheader" },
                  "Rotation"
                ),
                r.a.createElement("ul", null, y)
              )
            )
          )),
          r.a.createElement(me, Object.assign({}, e, { className: "Team" }), E)
        );
      };
      a(147);
      function lt() {
        var e,
          t = Object(ue.useToasts)().addToast,
          a = Object(n.useState)(),
          o = Object(l.a)(a, 2),
          i = o[0],
          s = o[1],
          c = Object(n.useContext)(J.context),
          m = c.user,
          u = c.refreshUser;
        function d(e) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = Object(g.a)(
            v.a.mark(function e(a) {
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(a.amount <= m.coins || 0 === a.amount)) {
                        e.next = 6;
                        break;
                      }
                      return (
                        E(a),
                        (e.next = 4),
                        b(
                          "/api/updateCoins",
                          JSON.stringify({ amount: -a.amount })
                        )
                          .catch(function (e) {
                            t(e, { appearance: "error" });
                          })
                          .then(
                            Object(g.a)(
                              v.a.mark(function e() {
                                return v.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), p(a);
                                      case 2:
                                        t(a.toast, { appearance: "success" });
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )
                          .then(function () {
                            a.handleComplete();
                          })
                          .finally(
                            Object(g.a)(
                              v.a.mark(function e() {
                                return v.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        u(), s({ purchaseItem: void 0 });
                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )
                      );
                    case 4:
                      e.next = 7;
                      break;
                    case 6:
                      t("Insufficient coins!", { appearance: "error" });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function E(e) {
          console.log("Buying ".concat(e.name, " ...")), s({ purchaseItem: e });
        }
        function p(e) {
          return A.apply(this, arguments);
        }
        function A() {
          return (A = Object(g.a)(
            v.a.mark(function e(t) {
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.handleBuy();
                    case 2:
                      console.log("Bought ".concat(t.name, "."));
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function f(e) {
          return e.maxed
            ? "Maxed Out"
            : e.available
            ? 0 === e.amount
              ? "Get"
              : "Buy"
            : "Unavailable";
        }
        return (
          (e = m.unlockedShop
            ? (function (e) {
                var t = [];
                e.unlockedElection
                  ? t.push({
                      id: 0,
                      name: "Vote",
                      description:
                        "Each Vote can be spent in the Election to boost your team or bring important change to Blaseball.",
                      amount: 100,
                      toast: "Vote purchased. You now have ".concat(
                        e.votes + 1
                      ),
                      available: !0,
                      icon: r.a.createElement(ie.e, null),
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), b("/api/increaseVotes")
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                      handleComplete: function () {},
                    })
                  : t.push({
                      id: 0,
                      name: "Voting Rights",
                      description:
                        "Purchase access to the Election page, where you can participate in the league-wide voting.",
                      amount: 100,
                      available: !0,
                      toast: "Welcome, Voter! You have ".concat(
                        e.votes,
                        " Vote already from signing up."
                      ),
                      icon: r.a.createElement(ie.e, null),
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), b("/api/unlockElection")
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                      handleComplete: function () {},
                    });
                t.push({
                  id: 5,
                  name: "Juiced",
                  description:
                    "Grab $5 buck off your first order with our sponsor Yes Plz and get a real-life pick me up.",
                  amount: 0,
                  toast: "Enjoy the coffee.",
                  icon: r.a.createElement(ie.a, null),
                  available: !0,
                  handleBuy: (function () {
                    var e = Object(g.a)(
                      v.a.mark(function e() {
                        return v.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                  handleComplete: function () {
                    window.open(
                      "https://yesplz.coffee/?promo=BLASEBALL&utm_source=blaseball&utm_medium=referral&utm_campaign=blaseballshop"
                    );
                  },
                });
                var a = he.maxBetTiers[e.maxBetTier],
                  n = he.maxBetTiers[e.maxBetTier + 1];
                if (void 0 !== n) {
                  var o = a.amount,
                    i = he.maxBetTiers[e.maxBetTier + 1].amount;
                  t.push({
                    id: 1,
                    name: "High Roller Snake Oil",
                    description: "This invigorating oil allows you to place larger wagers on each game. Your current limit is "
                      .concat(o, ", it would increase to ")
                      .concat(i, "."),
                    amount: n.price,
                    toast: "Max Bet is now ".concat(i, "!"),
                    available: !0,
                    handleBuy: (function () {
                      var e = Object(g.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), b("/api/increaseMaxBet");
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    handleComplete: function () {},
                  });
                } else {
                  var l = a.amount;
                  t.push({
                    id: 1,
                    name: "High Roller Snake Oil",
                    description: "This invigorating oil allows you to place larger wagers on each game. Your current limit is ".concat(
                      l,
                      ", you are maxed out."
                    ),
                    maxed: !0,
                    amount: 0,
                    handleBuy: (function () {
                      var e = Object(g.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), b("/api/increaseMaxBet");
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    handleComplete: function () {},
                  });
                }
                var s = he.teamWinCoinTiers[e.dailyCoinsTier],
                  c = he.teamWinCoinTiers[e.dailyCoinsTier + 1];
                void 0 !== c
                  ? t.push({
                      id: 2,
                      name: "Passive Income Potion",
                      description: "This potion will boost the coins you earn when your team wins. Your current income per win is "
                        .concat(s.amount, ", it would increase to ")
                        .concat(c.amount, "."),
                      amount: c.price,
                      toast: "Coins per win is now ".concat(c.amount),
                      available: !0,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), b("/api/increaseDailyCoins")
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                      handleComplete: function () {},
                    })
                  : t.push({
                      id: 2,
                      name: "Passive Income Potion",
                      description: "This potion will boost the coins you earn when your team wins. Your current income per win is ".concat(
                        s.amount,
                        ", you are maxed out."
                      ),
                      maxed: !0,
                      amount: 0,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), b("/api/increaseDailyCoins")
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                      handleComplete: function () {},
                    });
                var m = 5 + Math.random() * Math.random() * 20,
                  u = Math.round(m);
                t.push({
                  id: 4,
                  name: "Beg",
                  description:
                    "If you have no coins, you may beg the Blaseball Gods to grant you more, so that you may continue gambling.",
                  amount: 0,
                  toast: "You find ".concat(u, " coins in your pocket."),
                  available: 0 === e.coins,
                  handleBuy: (function () {
                    var e = Object(g.a)(
                      v.a.mark(function e() {
                        return v.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), b("/api/logBeg");
                              case 2:
                                return (
                                  (e.next = 4),
                                  b(
                                    "/api/updateCoins",
                                    JSON.stringify({ amount: u })
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                  handleComplete: function () {},
                }),
                  e.favoriteTeamInfo &&
                    t.push({
                      id: 3,
                      name: "Fair Weather Flute",
                      description:
                        "Plays a tune that allows you to change your favorite team. Your former team will be disappointed, but understand.",
                      amount: 2e3,
                      toast: "You abandon the ".concat(
                        e.favoriteTeamInfo.nickname,
                        "."
                      ),
                      available: !0,
                      handleBuy: (function () {
                        var e = Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), b("/api/updateFavoriteTeam")
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                      handleComplete: function () {},
                    });
                return t;
              })(m)
            : (function (e) {
                var t = [];
                return (
                  t.push({
                    id: 10,
                    name: "Membership Card",
                    description: "Grants access to the entire shop.",
                    amount: 20,
                    toast: "Welcome, Shop Member!",
                    available: !0,
                    handleBuy: (function () {
                      var e = Object(g.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), b("/api/unlockShop");
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    handleComplete: function () {},
                  }),
                  t
                );
              })()),
          r.a.createElement(
            "div",
            { className: "Shop" },
            r.a.createElement("div", { className: "Shop-Header" }, "Shop"),
            r.a.createElement(
              "div",
              { className: "Shop-Description" },
              "Purchase items to enhance your Blaseball experience. New items may appear each week, so keep checking in."
            ),
            r.a.createElement(
              "div",
              { className: "Shop-Grid" },
              e.map(function (e, t) {
                return r.a.createElement(
                  "div",
                  { className: "Shop-Item", key: t },
                  r.a.createElement(
                    "div",
                    { className: "Shop-Item-Header" },
                    e.name,
                    r.a.createElement(
                      "span",
                      { className: "Shop-Item-Icon" },
                      e.icon
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "Shop-Item-Body" },
                    e.description
                  ),
                  r.a.createElement(
                    "div",
                    { className: "Shop-Item-Checkout" },
                    r.a.createElement(ie.f, { className: "Shop-Item-Coins" }),
                    r.a.createElement(
                      "div",
                      { className: "Shop-Item-Amount" },
                      (function (e) {
                        return e.maxed
                          ? "N/A"
                          : 0 === e.amount
                          ? "Free"
                          : e.amount.toString();
                      })(e)
                    ),
                    r.a.createElement(
                      "div",
                      { className: "Shop-Item-ButtonContainer" },
                      i && i.purchaseItem && i.purchaseItem.id === e.id
                        ? r.a.createElement(pe, null)
                        : (function (e) {
                            return !e.available || e.maxed
                              ? r.a.createElement(
                                  re.a,
                                  {
                                    className: "Shop-Item-Button",
                                    type: "submit",
                                    variant: "secondary",
                                    disabled: !0,
                                    onClick: function () {
                                      d(e);
                                    },
                                  },
                                  f(e)
                                )
                              : r.a.createElement(
                                  re.a,
                                  {
                                    className: "Shop-Item-Button",
                                    type: "submit",
                                    variant: "success",
                                    onClick: function () {
                                      d(e);
                                    },
                                  },
                                  f(e)
                                );
                          })(e)
                    )
                  )
                );
              })
            )
          )
        );
      }
      a(148);
      var st = function (e) {
          var t = Object(n.useContext)(J.context).refreshUser,
            a = Object(n.useState)([]),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1],
            c = Object(n.useState)(),
            m = Object(l.a)(c, 2),
            u = m[0],
            d = m[1];
          function h() {
            return (h = Object(g.a)(
              v.a.mark(function e() {
                var t;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), G();
                      case 2:
                        (t = e.sent), s(t);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          Object(n.useEffect)(function () {
            !(function () {
              h.apply(this, arguments);
            })();
          }, []);
          var E = (function () {
            var a = Object(g.a)(
              v.a.mark(function a() {
                return v.a.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.next = 2),
                          b(
                            "/api/updateFavoriteTeam",
                            JSON.stringify({ teamId: u })
                          )
                        );
                      case 2:
                        e.dismiss(), t();
                      case 4:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            );
            return function () {
              return a.apply(this, arguments);
            };
          })();
          return r.a.createElement(
            me,
            Object.assign({}, e, { className: "Welcome" }),
            r.a.createElement(
              "div",
              { className: "Welcome-Header" },
              "Welcome to Blaseball"
            ),
            r.a.createElement(
              "div",
              { className: "Welcome-Subheader" },
              "To begin, pick your favorite team"
            ),
            r.a.createElement(
              "div",
              { className: "Welcome-Teams-Wrapper" },
              r.a.createElement(
                "div",
                { className: "Welcome-Teams" },
                i
                  .sort(function (e, t) {
                    var a = e.nickname.toUpperCase(),
                      n = t.nickname.toUpperCase();
                    return a < n ? -1 : a > n ? 1 : 0;
                  })
                  .map(function (e, t) {
                    var a = u === e._id;
                    return r.a.createElement(
                      "div",
                      {
                        onClick: function () {
                          return d(e._id);
                        },
                        key: t,
                        className:
                          "Welcome-Team" + (a ? " Welcome-Team--Selected" : ""),
                      },
                      r.a.createElement(
                        "div",
                        {
                          className: "TeamLogo",
                          style: { background: e.mainColor },
                        },
                        String.fromCodePoint(e.emoji)
                      ),
                      r.a.createElement(
                        "div",
                        { className: "Welcome-Team-Name-Wrapper" },
                        r.a.createElement(
                          "div",
                          { className: "Welcome-Team-Location" },
                          e.location
                        ),
                        r.a.createElement(
                          "div",
                          { className: "Welcome-Team-Name" },
                          e.nickname
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "Welcome-Team-Overlay" },
                        r.a.createElement(Ie.a, null)
                      )
                    );
                  })
              )
            ),
            r.a.createElement("div", { className: "Welcome-Message" }, ""),
            r.a.createElement(
              "div",
              { className: "Welcome-Submit-Wrapper" },
              r.a.createElement(
                "button",
                {
                  onClick: E,
                  disabled: !u,
                  className:
                    "Welcome-Submit" + (u ? " Welcome-Submit--Ready" : ""),
                },
                "Submit"
              )
            )
          );
        },
        ct = function (e) {
          var t = Object(n.useContext)(J.context).user,
            a = Object(n.useState)(!1),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          return (
            Object(n.useEffect)(function () {
              t.isFetching ||
              (void 0 !== t.favoriteTeam && null !== t.favoriteTeam)
                ? s(!1)
                : s(!0);
            }, []),
            t && t.isSignedIn && i
              ? r.a.createElement(
                  st,
                  Object.assign({}, e, {
                    dismiss: Object(g.a)(
                      v.a.mark(function e() {
                        return v.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                s(!1);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                  })
                )
              : null
          );
        },
        mt =
          (a(149),
          function (e) {
            var t = Object(n.useContext)(J.context).initUser,
              a = Object(s.f)(),
              o = Object(ue.useToasts)().addToast,
              i = Object(s.g)(),
              l =
                i.state && i.state.background
                  ? i.state.background.pathname
                  : "",
              c = e.isModal,
              m = e.isLogin,
              u = Object(n.useRef)(null),
              d = Object(n.useRef)(null),
              h = Object(s.h)().code;
            return r.a.createElement(
              "div",
              { className: "".concat(c ? "" : "Auth-SignupWrapper") },
              !c && r.a.createElement(at, null),
              r.a.createElement(
                me,
                Object.assign({}, e, { className: "Auth" }),
                r.a.createElement(
                  "header",
                  { className: "Auth-Header" },
                  m ? "Login to Blaseball" : "Signup for Blaseball"
                ),
                r.a.createElement(
                  "form",
                  {
                    onSubmit: function (e) {
                      e.preventDefault();
                      var n = {
                        username: u.current.value,
                        password: d.current.value,
                        code: h,
                        isLogin: m,
                      };
                      b("/auth/local", JSON.stringify(n)).then(function (e) {
                        e.ok && e.status && 200 === e.status
                          ? (m ||
                              o("Account Created", { appearance: "success" }),
                            t(),
                            a.push("/"))
                          : e.json().then(function (e) {
                              o(e.error || "Error", { appearance: "error" });
                            });
                      });
                    },
                  },
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("input", {
                      ref: u,
                      className: "Auth-Input",
                      placeholder: "Email",
                      type: "text",
                      name: "username",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("input", {
                      ref: d,
                      className: "Auth-Input",
                      placeholder: "Password",
                      type: "password",
                      name: "password",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("input", {
                      className: "Auth-Submit",
                      type: "submit",
                      value: "Continue",
                    })
                  )
                ),
                r.a.createElement("div", { className: "Auth-Divider" }, "OR"),
                r.a.createElement(
                  "a",
                  {
                    className: "Auth-SocialAuth",
                    href: "auth/apple?redirectUrl=".concat(l),
                  },
                  r.a.createElement(
                    "div",
                    { className: "Auth-SocialAuth-Icon-Container" },
                    r.a.createElement(le.b, {
                      className: "Auth-SocialAuth-Icon",
                    })
                  ),
                  "Continue with Apple"
                ),
                r.a.createElement(
                  "a",
                  {
                    className: "Auth-SocialAuth",
                    href: "auth/facebook?redirectUrl=".concat(l),
                  },
                  r.a.createElement(
                    "div",
                    { className: "Auth-SocialAuth-Icon-Container" },
                    r.a.createElement(Ie.c, null)
                  ),
                  " Continue with Facebook"
                ),
                r.a.createElement(
                  "a",
                  {
                    className: "Auth-SocialAuth",
                    href: "auth/google?redirectUrl=".concat(l),
                  },
                  r.a.createElement(
                    "div",
                    { className: "Auth-SocialAuth-Icon-Container" },
                    r.a.createElement(le.c, {
                      className: "Auth-SocialAuth-Icon",
                    })
                  ),
                  "Continue with Google"
                ),
                r.a.createElement(
                  "a",
                  { className: "Auth-CTA", href: m ? "/signup" : "/login" },
                  m
                    ? "Not on Blaseball yet? Signup"
                    : "Already a member? Log in"
                )
              )
            );
          }),
        ut =
          (a(150),
          r.a.createContext({ bonuses: [], decrees: [], decreesToPass: 0 })),
        dt = function (e) {
          var t = e.children,
            a = Object(n.useState)({
              bonuses: [],
              decrees: [],
              decreesToPass: 0,
            }),
            o = Object(l.a)(a, 2),
            i = o[0],
            s = o[1];
          function c() {
            return m.apply(this, arguments);
          }
          function m() {
            return (m = Object(g.a)(
              v.a.mark(function e() {
                var t;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), S();
                      case 2:
                        (t = e.sent), s(t);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            Object(n.useEffect)(function () {
              var e = setInterval(c, 1e4);
              return (
                c(),
                function () {
                  return clearInterval(e);
                }
              );
            }, []),
            r.a.createElement(ut.Provider, { value: i }, t)
          );
        };
      dt.context = ut;
      var ht,
        Et = dt;
      a(151);
      !(function (e) {
        (e[(e.DECREE = 0)] = "DECREE"), (e[(e.BONUS = 1)] = "BONUS");
      })(ht || (ht = {}));
      var pt = function (e) {
          var t = Object(ue.useToasts)().addToast,
            a = e.entityId,
            o = e.data,
            i = e.onSubmit,
            s = Object(n.useState)(!1),
            c = Object(l.a)(s, 2),
            m = c[0],
            u = c[1];
          return !0 === m
            ? r.a.createElement(Ae, null)
            : r.a.createElement(
                re.a,
                {
                  onClick: function () {
                    u(!0);
                    var e = { entityId: a, voteType: ht.BONUS, data: o };
                    b("/api/vote", JSON.stringify(e))
                      .then(function (e) {
                        e.status && 200 === e.status
                          ? (t("Vote Placed", { appearance: "success" }), i())
                          : (t("Error", { appearance: "error" }),
                            console.log(e));
                      })
                      .finally(
                        Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    u(!1);
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      );
                  },
                  variant: "success",
                  className: "Blessings-Submit-Button",
                  disabled: !a,
                },
                "Submit Blessing Vote"
              );
        },
        At = function () {
          return r.a.createElement(
            "a",
            { href: "/login" },
            r.a.createElement(
              re.a,
              { className: "Blessings-Submit-Button" },
              "Login to Vote"
            )
          );
        },
        ft = function () {
          return r.a.createElement(
            "a",
            { href: "/welcome" },
            r.a.createElement(
              re.a,
              { className: "Blessings-Submit-Button" },
              "Pick a Favorite Team to Vote"
            )
          );
        },
        vt = function () {
          return r.a.createElement(
            "a",
            { href: "/shop" },
            r.a.createElement(
              re.a,
              { className: "Blessings-Submit-Button" },
              "Buy Another Vote"
            )
          );
        },
        gt = function (e) {
          var t = e.isActive;
          return r.a.createElement(
            "button",
            { className: "Blessings-Option-Button" },
            "Select",
            t ? "ed" : ""
          );
        },
        yt = function (e) {
          var t = e.title,
            a = e.description,
            n = e._id,
            o = e.isActive,
            i = e.onSelect;
          return r.a.createElement(
            "div",
            {
              className:
                "Blessings-Option" + (o ? " Blessings-Option-Current" : ""),
              onClick: function () {
                return i(n);
              },
            },
            r.a.createElement(
              "div",
              { className: "Blessings-Option-Header" },
              t
            ),
            r.a.createElement(
              "div",
              { className: "Blessings-Option-Description" },
              a
            ),
            r.a.createElement(gt, { isActive: o })
          );
        },
        bt = function () {
          var e = Object(n.useContext)(Et.context),
            t = Object(n.useContext)(J.context),
            a = t.user,
            o = t.refreshUser,
            i = Object(n.useState)(),
            s = Object(l.a)(i, 2),
            c = s[0],
            m = s[1],
            u = r.a.createElement(At, null);
          if (
            (a.isFetching ||
              !a.isSignedIn ||
              a.favoriteTeam ||
              (u = r.a.createElement(ft, null)),
            a.isFetching ||
              !a.isSignedIn ||
              a.votes ||
              (u = r.a.createElement(vt, null)),
            !a.isFetching && a.isSignedIn && a.favoriteTeam && a.votes)
          ) {
            var d = { team1: a.favoriteTeam };
            u = r.a.createElement(pt, {
              entityId: c,
              data: d,
              onSubmit: function () {
                o(), m(void 0);
              },
            });
          }
          return r.a.createElement(
            "div",
            { className: "Blessings" },
            r.a.createElement(
              "h2",
              { className: "Blessings-Header" },
              "Blessings"
            ),
            r.a.createElement(
              "p",
              { className: "Blessings-Description" },
              "Each Blessing will be rewarded to a randomly selected player. Vote for Blessings for chances to win them for your team."
            ),
            r.a.createElement(
              "div",
              { className: "Blessings-Container" },
              e.bonuses.map(function (e, t) {
                return r.a.createElement(
                  yt,
                  Object.assign({ key: t }, e, {
                    isActive: c === e._id,
                    onSelect: function (e) {
                      return m(e);
                    },
                  })
                );
              })
            ),
            u
          );
        };
      a(152);
      function Tt() {
        return (Tt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Nt(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var St = r.a.createElement("path", {
          d:
            "M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z",
        }),
        wt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = Nt(e, ["svgRef", "title"]);
          return r.a.createElement(
            "svg",
            Tt({ viewBox: "0 0 24 24", ref: t }, n),
            a ? r.a.createElement("title", null, a) : null,
            St
          );
        },
        Bt = r.a.forwardRef(function (e, t) {
          return r.a.createElement(wt, Tt({ svgRef: t }, e));
        });
      a.p;
      function Ot() {
        return (Ot =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function It(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var Ct = r.a.createElement("path", {
          d:
            "M7.919 17.377l-4.869-13.377h-2.05c-.266 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707 0-.552.447-1 1-1h3.45l5.469 15.025c.841.101 1.59.5 2.139 1.088l11.258-4.097.684 1.879-11.049 4.021c.032.19.049.385.049.584 0 1.932-1.569 3.5-3.5 3.5-1.932 0-3.5-1.568-3.5-3.5 0-1.363.781-2.545 1.919-3.123zm1.581 1.811c.724 0 1.312.588 1.312 1.312 0 .724-.588 1.313-1.312 1.313-.725 0-1.313-.589-1.313-1.313s.588-1.312 1.313-1.312zm13.314-6.512l-11.418 4.156-2.736-7.518 11.418-4.156 2.736 7.518zm-8.71-3.215l-2.88 1.048 1.368 3.759 7.659-2.787-1.368-3.759-2.9 1.055.684 1.879-1.879.685-.684-1.88zm2.672-4.165l-8.458 3.078-1.927-5.296 8.457-3.078 1.928 5.296zm-3.123-2.733l-4.699 1.711.56 1.537 4.698-1.71-.559-1.538z",
        }),
        kt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = It(e, ["svgRef", "title"]);
          return r.a.createElement(
            "svg",
            Ot({ viewBox: "0 0 24 24", ref: t }, n),
            a ? r.a.createElement("title", null, a) : null,
            Ct
          );
        },
        Rt = r.a.forwardRef(function (e, t) {
          return r.a.createElement(kt, Ot({ svgRef: t }, e));
        });
      a.p;
      function Gt() {
        return (Gt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Lt(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var Dt = r.a.createElement("path", {
          d:
            "M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v6h-6c-1.104 0-2 .896-2 2s.896 2 2 2h6v6h-14v-16zm9 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z",
        }),
        Qt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = Lt(e, ["svgRef", "title"]);
          return r.a.createElement(
            "svg",
            Gt({ viewBox: "0 0 24 24", ref: t }, n),
            a ? r.a.createElement("title", null, a) : null,
            Dt
          );
        },
        Mt = r.a.forwardRef(function (e, t) {
          return r.a.createElement(Qt, Gt({ svgRef: t }, e));
        });
      a.p;
      function Wt() {
        return (Wt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function jt(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var xt,
        Ut = r.a.createElement("path", {
          d:
            "M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z",
        }),
        Yt = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = jt(e, ["svgRef", "title"]);
          return r.a.createElement(
            "svg",
            Wt({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n),
            a ? r.a.createElement("title", null, a) : null,
            Ut
          );
        },
        Pt = r.a.forwardRef(function (e, t) {
          return r.a.createElement(Yt, Wt({ svgRef: t }, e));
        });
      a.p;
      !(function (e) {
        (e[(e.DECREE = 0)] = "DECREE"), (e[(e.BONUS = 1)] = "BONUS");
      })(xt || (xt = {}));
      var Jt = function (e) {
          var t = Object(ue.useToasts)().addToast,
            a = e.entityId,
            o = e.data,
            i = e.onSubmit,
            s = Object(n.useState)(!1),
            c = Object(l.a)(s, 2),
            m = c[0],
            u = c[1];
          return !0 === m
            ? r.a.createElement(Ae, null)
            : r.a.createElement(
                re.a,
                {
                  onClick: function () {
                    u(!0);
                    var e = { entityId: a, voteType: xt.DECREE, data: o };
                    b("/api/vote", JSON.stringify(e))
                      .then(function (e) {
                        e.status && 200 === e.status
                          ? (t("Vote Placed", { appearance: "success" }), i())
                          : (t("Error", { appearance: "error" }),
                            console.log(e));
                      })
                      .finally(
                        Object(g.a)(
                          v.a.mark(function e() {
                            return v.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    u(!1);
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      );
                  },
                  variant: "success",
                  className: "Decrees-Submit-Button",
                  disabled: !a,
                },
                "Submit Decree Vote"
              );
        },
        Ft = function () {
          return r.a.createElement(
            "a",
            { href: "/login" },
            r.a.createElement(
              re.a,
              { className: "Decrees-Submit-Button" },
              "Login to Vote"
            )
          );
        },
        Ht = function () {
          return r.a.createElement(
            "a",
            { href: "/welcome" },
            r.a.createElement(
              re.a,
              { className: "Decrees-Submit-Button" },
              "Pick a Favorite Team to Vote"
            )
          );
        },
        Vt = function () {
          return r.a.createElement(
            c.b,
            { to: { pathname: "/shop" } },
            r.a.createElement(
              re.a,
              { className: "Decrees-Submit-Button" },
              "Buy Another Vote"
            )
          );
        },
        Kt = function (e) {
          var t = e.isActive;
          return r.a.createElement(
            "button",
            { className: "Decrees-Option-Button" },
            "Select",
            t ? "ed" : ""
          );
        };
      function qt(e) {
        return "forbidden_book" === e
          ? r.a.createElement(Mt, { className: "Decrees-Option-Icon" })
          : "eliminate_team" === e
          ? r.a.createElement(Rt, { className: "Decrees-Option-Icon" })
          : "redistribute_wealth" === e
          ? r.a.createElement(Bt, { className: "Decrees-Option-Icon" })
          : "four_for_four" === e
          ? r.a.createElement(ie.b, { className: "Decrees-Option-Icon" })
          : "peanuts" === e
          ? r.a.createElement(ie.c, { className: "Decrees-Option-Icon" })
          : "popular_evolution" === e
          ? r.a.createElement(Pt, { className: "Decrees-Option-Icon" })
          : "enhanced_shame" === e
          ? r.a.createElement(ie.d, { className: "Decrees-Option-Icon" })
          : r.a.createElement("div", null);
      }
      var zt = function (e) {
          var t = e.title,
            a = e.description,
            n = e._id,
            o = e.isActive,
            i = e.onSelect;
          return r.a.createElement(
            "div",
            {
              className:
                "Decrees-Option" + (o ? " Decrees-Option-Current" : ""),
              onClick: function () {
                return i(n);
              },
            },
            qt(n),
            r.a.createElement("div", { className: "Decrees-Option-Header" }, t),
            a &&
              r.a.createElement(
                "p",
                { className: "Decrees-Option-Description" },
                a
              ),
            r.a.createElement(Kt, { isActive: o })
          );
        },
        Zt = function () {
          var e = Object(n.useContext)(Et.context),
            t = Object(n.useContext)(J.context),
            a = t.user,
            o = t.refreshUser,
            i = Object(n.useState)(),
            s = Object(l.a)(i, 2),
            c = s[0],
            m = s[1],
            u = Object(n.useState)(!1),
            d = Object(l.a)(u, 2),
            h = (d[0], d[1]),
            E = r.a.createElement(Ft, null);
          if (
            (a.isFetching ||
              !a.isSignedIn ||
              a.favoriteTeam ||
              (E = r.a.createElement(Ht, null)),
            a.isFetching ||
              !a.isSignedIn ||
              a.votes ||
              (E = r.a.createElement(Vt, null)),
            !a.isFetching && a.isSignedIn && a.favoriteTeam && a.votes)
          ) {
            var p = { team1: a.favoriteTeam };
            E = r.a.createElement(Jt, {
              entityId: c,
              data: p,
              onSubmit: function () {
                o(), m(void 0), h(!0);
              },
            });
          }
          return r.a.createElement(
            "div",
            { className: "Decrees" },
            r.a.createElement("h2", { className: "Decrees-Header" }, "Decrees"),
            r.a.createElement(
              "p",
              { className: "Decrees-Description" },
              "The ",
              e.decreesToPass > 1 ? e.decreesToPass : "",
              " Decree",
              e.decreesToPass > 1 ? "s" : "",
              " with the most votes from the community will go into effect."
            ),
            r.a.createElement(
              "div",
              { className: "Decrees-Container" },
              e.decrees.map(function (e, t) {
                return r.a.createElement(
                  zt,
                  Object.assign({ key: t }, e, {
                    isActive: c === e._id,
                    onSelect: function (e) {
                      return m(e);
                    },
                  })
                );
              })
            ),
            E
          );
        };
      a(153);
      function Xt() {
        var e,
          t = Object(n.useContext)(A.context),
          a = Object(n.useState)({
            recap: {
              name: "",
              voteCount: 0,
              totalDecreeVotes: 0,
              totalBonusVotes: 0,
              bonusResults: [],
              decreeResults: [],
            },
            decreeResults: [
              { description: "", decreeId: "", decreeTitle: "", totalVotes: 0 },
            ],
            bonusResults: [
              {
                description: "",
                bonusTitle: "",
                teamId: "",
                team: { mainColor: "", emoji: 0 },
                totalVotes: 0,
              },
            ],
          }),
          o = Object(l.a)(a, 2),
          i = o[0],
          s = o[1],
          c = Object(n.useState)(!1),
          m = Object(l.a)(c, 2),
          u = m[0],
          d = m[1];
        function h() {
          return (h = Object(g.a)(
            v.a.mark(function e() {
              var a, n, r, o, i, l, c, m, u, d, h, E, p, A;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        B(
                          null === (a = t.sim) || void 0 === a
                            ? void 0
                            : a.season
                        )
                      );
                    case 2:
                      if (((n = e.sent), (r = []), (o = void 0), !n)) {
                        e.next = 19;
                        break;
                      }
                      return (e.next = 8), I(n.bonusResults);
                    case 8:
                      for (
                        i = e.sent,
                          r = [],
                          l = function (e) {
                            r.push(
                              i.find(function (t) {
                                return t._id === n.bonusResults[e];
                              })
                            );
                          },
                          c = 0;
                        c < n.bonusResults.length;
                        c++
                      )
                        l(c);
                      return (e.next = 14), k(n.decreeResults);
                    case 14:
                      return (o = e.sent), (e.next = 17), G();
                    case 17:
                      for (m = e.sent, u = 0; u < i.length; u++)
                        for (d = i[u].teamId, h = 0; h < m.length; h++)
                          m[h]._id === d &&
                            ((E = m[h]),
                            (p = E.mainColor),
                            (A = E.emoji),
                            (i[u].team = { mainColor: p, emoji: A }));
                    case 19:
                      s({ recap: n, bonusResults: r, decreeResults: o });
                    case 20:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        if (
          (Object(n.useEffect)(
            function () {
              d(!0),
                (function () {
                  return h.apply(this, arguments);
                })().then(function () {
                  d(!1);
                });
            },
            [null === (e = t.sim) || void 0 === e ? void 0 : e.season]
          ),
          !t || !t.sim || !i || !i.recap)
        )
          return null;
        var E =
            i.recap.decreeResults.length > 0
              ? r.a.createElement(
                  "div",
                  { className: "Recap-Results" },
                  r.a.createElement(
                    "h2",
                    { className: "Recap-ResultsHeader" },
                    "Decrees"
                  ),
                  i.decreeResults.map(function (e, t) {
                    return r.a.createElement(
                      "div",
                      { className: "Recap-Decree-Container" },
                      r.a.createElement(
                        "div",
                        { className: "Recap-Decree-Info" },
                        r.a.createElement(
                          "div",
                          { className: "Recap-Decree-Header" },
                          e.decreeTitle
                        ),
                        r.a.createElement(
                          "div",
                          { className: "Recap-Decree-Votes" },
                          "\xa0- ",
                          e.totalVotes,
                          " Votes, ",
                          Math.round(
                            (e.totalVotes / i.recap.totalDecreeVotes) * 100
                          ),
                          "% of all Decree Votes"
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "Recap-Decree-Content" },
                        r.a.createElement(
                          "div",
                          { className: "Recap-Decree-Icon" },
                          qt(e.decreeId)
                        ),
                        r.a.createElement(
                          "div",
                          { className: "Recap-Decree-Description" },
                          e.description.split("\n").map(function (e, t) {
                            return r.a.createElement(
                              "div",
                              {
                                key: t,
                                className: "Recap-Decree-Description-Line",
                              },
                              e
                            );
                          })
                        )
                      )
                    );
                  })
                )
              : null,
          p =
            i.recap.bonusResults.length > 0
              ? r.a.createElement(
                  "div",
                  { className: "Recap-Results" },
                  r.a.createElement(
                    "h2",
                    { className: "Recap-ResultsHeader" },
                    "Blessings"
                  ),
                  i.bonusResults.length > 0
                    ? i.bonusResults.map(function (e, t) {
                        return r.a.createElement(
                          "div",
                          { key: t, className: "Recap-Blessing-Container" },
                          r.a.createElement(
                            "div",
                            { className: "Recap-Blessing-Info" },
                            r.a.createElement(
                              "div",
                              { className: "Recap-Blessing-Header" },
                              e.bonusTitle
                            ),
                            r.a.createElement(
                              "div",
                              { className: "Recap-Blessing-Votes" },
                              "\xa0- ",
                              e.totalVotes,
                              " Vote",
                              e.totalVotes > 1 ? "s" : "",
                              " Cast"
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "Recap-Blessing-Content" },
                            r.a.createElement(
                              "div",
                              {
                                className: "Recap-Blessing-Team",
                                style: { background: e.team.mainColor },
                              },
                              String.fromCodePoint(e.team.emoji)
                            ),
                            r.a.createElement(
                              "div",
                              { className: "Recap-Blessing-Description" },
                              e.description.split("\n").map(function (e, t) {
                                return r.a.createElement(
                                  "div",
                                  {
                                    key: t,
                                    className:
                                      "Recap-Blessing-Description-Line",
                                  },
                                  e
                                );
                              })
                            )
                          )
                        );
                      })
                    : r.a.createElement(
                        "div",
                        { className: "Recap-Blessing-Container" },
                        '"No Bonuses were claimed."'
                      )
                )
              : null,
          f =
            null === p && null === E
              ? r.a.createElement(
                  "div",
                  { className: "Recap-Note" },
                  "Nothing happened in this Election."
                )
              : null;
        return r.a.createElement(
          "div",
          { className: "Recap" },
          r.a.createElement(
            "div",
            { className: "Recap-Header" },
            "The Results are in."
          ),
          u
            ? r.a.createElement(Ae, null)
            : r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  { className: "Recap-Name" },
                  i.recap.name
                ),
                r.a.createElement("div", { className: "Recap-Body" }, E, p, f)
              )
        );
      }
      function _t() {
        var e = Object(n.useContext)(J.context).user,
          t = Object(n.useContext)(A.context);
        return t && t.sim
          ? 0 === t.sim.phase
            ? r.a.createElement(Xt, null)
            : e.unlockedElection
            ? r.a.createElement($t, null)
            : r.a.createElement(ta, null)
          : null;
      }
      function $t() {
        var e,
          t = Object(n.useContext)(A.context),
          a = void 0 !== t.sim && void 0 !== t.sim.season ? t.sim.season : -1;
        return r.a.createElement(
          "div",
          { className: "Offseason" },
          r.a.createElement(
            "div",
            { className: "Offseason-Info" },
            r.a.createElement(
              "div",
              { className: "Offseason-Header" },
              "Season ",
              r.a.createElement(
                "span",
                { className: "Offseason-Number" },
                a + 1
              ),
              " Election"
            ),
            r.a.createElement(
              "div",
              { className: "Offseason-Description" },
              "Votes are counted up and changes are made at the end of every week, between seasons of Blaseball. This Election ends in..."
            ),
            r.a.createElement(Ye, {
              dateString:
                null === (e = t.sim) || void 0 === e
                  ? void 0
                  : e.nextElectionEnd,
            })
          ),
          r.a.createElement(
            "div",
            { className: "Offseason-Body" },
            r.a.createElement(
              Et,
              { value: { bonuses: [], decrees: [], decreesToPass: 0 } },
              r.a.createElement(ea, null)
            )
          )
        );
      }
      function ea() {
        var e = Object(n.useContext)(Et.context);
        return void 0 === e || 0 === e.bonuses.length || 0 === e.decrees.length
          ? r.a.createElement(Ae, null)
          : r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(Zt, null),
              r.a.createElement(bt, null)
            );
      }
      function ta() {
        Object(n.useContext)(A.context);
        return r.a.createElement(
          "div",
          { className: "Offseason" },
          r.a.createElement(
            "div",
            { className: "Offseason-Info" },
            r.a.createElement(
              "div",
              { className: "Offseason-Header" },
              "Election"
            ),
            r.a.createElement(
              "div",
              { className: "Offseason-Description" },
              "Votes are counted up and changes are made at the end of every week, between seasons of Blaseball."
            ),
            r.a.createElement(
              "div",
              { className: "Offseason-Description" },
              r.a.createElement(
                c.b,
                {
                  className: "Offseason-Description-Link",
                  to: { pathname: "/shop" },
                },
                "Purchase your Voting Rights in the Shop to participate."
              )
            )
          )
        );
      }
      a(154);
      function aa(e) {
        e.season;
        var t,
          a = Object(n.useContext)(A.context);
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "div",
            { className: "GodsDay" },
            r.a.createElement(
              "div",
              { className: "GodsDay-Header" },
              "Blaseball Gods' Day"
            ),
            r.a.createElement(Ye, {
              dateString:
                null === (t = a.sim) || void 0 === t ? void 0 : t.nextPhaseTime,
            }),
            r.a.createElement(
              "div",
              { className: "GodsDay-Body" },
              "Welcome to Blaseball. The season will begin soon. Check the Election page for the results of last season's voting."
            )
          ),
          r.a.createElement(ze, null)
        );
      }
      a(155);
      var na = function () {
          return r.a.createElement(
            "div",
            { className: "Privacy" },
            r.a.createElement(
              "h1",
              { className: "Privacy-Header" },
              "Privacy Policy"
            ),
            r.a.createElement(
              "div",
              { className: "Privacy-Content" },
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Introduction"
              ),
              r.a.createElement(
                "p",
                null,
                'The Game Band ("',
                r.a.createElement("b", null, "The Game Band"),
                '" or "',
                r.a.createElement("b", null, "We"),
                '") respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes:'
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  "The types of information we may collect or that you may provide when you download, install, access, or use the Game, \u201cBLASEBALL\u201d (the \u201c",
                  r.a.createElement("b", null, "Game"),
                  '"); and'
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Our practices for collecting, using, maintaining, protecting, and disclosing that information."
                )
              ),
              r.a.createElement(
                "p",
                null,
                "This policy applies only to information we collect on the Game and in email, text, and other electronic communications sent through or in connection with the Game. This policy DOES NOT apply to information that:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement("li", null, "We collect offline, or"),
                r.a.createElement(
                  "li",
                  null,
                  "You provide to or is collected by any third party (see Third-Party Information Collection)."
                )
              ),
              r.a.createElement(
                "p",
                null,
                "Third parties may have their own privacy policies, which we encourage you to read before providing information on or through them."
              ),
              r.a.createElement(
                "p",
                null,
                "Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, do not download, register with, or use the Game. By downloading, registering with, or using this Game you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Game after we revise this policy means you accept those changes, so please check the policy periodically for updates."
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Children Under the Age of 13"
              ),
              r.a.createElement(
                "p",
                null,
                "The Game is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at",
                " ",
                r.a.createElement(
                  "a",
                  { href: "mailto:legal@thegameband.com" },
                  "legal@thegameband.com"
                ),
                "."
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Information We Collect and How We Collect It"
              ),
              r.a.createElement(
                "p",
                null,
                "We collect several types of information from and about users of the Game, from two sources:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  "You, either directly when provide it to us or automatically when you use the Game; and"
                ),
                r.a.createElement("li", null, "Third parties")
              ),
              r.a.createElement(
                "h3",
                { className: "Privacy-Miniheader" },
                "Information You Provide to Us ",
                r.a.createElement("b", null, "Directly")
              ),
              r.a.createElement(
                "p",
                null,
                "When using the Game, you may provide us with certain types of information which may include, information:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  'By which you may be personally identified, such as your name, email address, or any other identifier by which you may be contacted online or offline ("',
                  r.a.createElement("b", null, "personal information"),
                  '").'
                ),
                r.a.createElement(
                  "li",
                  null,
                  "About your internet connection, the equipment you use to access the Game, and usage details."
                )
              ),
              r.a.createElement("p", null, "This information includes: "),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  "Information you provide us when you create an account."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Information provided by your device, by which to identify it, when you download and use the Game."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Records and copies of your correspondence (including email addresses and phone numbers), if you contact us."
                )
              ),
              r.a.createElement(
                "h3",
                { className: "Privacy-Miniheader" },
                "Information Collected Automatically When You Use The Game"
              ),
              r.a.createElement(
                "p",
                null,
                "When you download, access, and use the Game it may use technology to automatically collect:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "Usage Details."),
                  " When you access and use the Game, we may automatically collect certain details of your access to and use of the Game including traffic data, logs, communication data and the resources that you access and use on or through the Game."
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "b",
                    null,
                    "Device or Computer Information."
                  ),
                  " We may collect information about your computer, mobile device and internet connection, including the device's unique device identifier, IP address, operating system, browser type, mobile network information, and the device's telephone number."
                )
              ),
              r.a.createElement(
                "p",
                null,
                "If you do not want us to collect this information do not use or download the Game or delete it from your device."
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Information Collection Technologies"
              ),
              r.a.createElement(
                "p",
                null,
                "The technologies we use for automatic information collection may include:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "Cookies (or mobile cookies)."),
                  " A cookie is a small file placed on your computer or smartphone. It may be possible to refuse to accept mobile cookies by activating the appropriate setting on your smartphone. However, if you select this setting you may be unable to access certain parts of the Game"
                )
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "How We Use Your Information"
              ),
              r.a.createElement(
                "p",
                null,
                "We use information that we collect about you or that you provide to us, including any personal information, to:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  "Provide you with the Game, and any other information, products or services that you specifically request from us."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Provide you with news and information about us and the Game."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Improve and optimize the Game and our users\u2019 experiences."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Fulfill any other purpose for which you provide it."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Notify you when Game updates are available, and of changes to any products or services we offer or provide though it."
                )
              ),
              r.a.createElement(
                "p",
                null,
                "The usage information we collect helps us to improve the Game and to deliver a better and more personalized experience by enabling us to:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  "Estimate our audience size, demographics and usage patterns."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Store information about your preferences, allowing us to tailor our services according to your individual interests."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "Recognize you when you use the Game."
                )
              ),
              r.a.createElement(
                "p",
                null,
                "For more information, see Your Rights and Choices below."
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Disclosure of Your Information"
              ),
              r.a.createElement(
                "p",
                null,
                "We may disclose aggregated information about our users, and information that does not identify any individual or device without restriction.",
                " "
              ),
              r.a.createElement(
                "p",
                null,
                "In addition, we may disclose personal information that we collect, or you provide:"
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  "To our subsidiaries and affiliates."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "To contractors, service providers, and other third parties we use to support our business."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of The Game Band's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by The Game Band about the Game users is among the assets transferred."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "To fulfill the purpose for which you provide it. "
                ),
                r.a.createElement(
                  "li",
                  null,
                  "For any other purpose disclosed by us when you provide the information."
                ),
                r.a.createElement("li", null, "With your consent."),
                r.a.createElement(
                  "li",
                  null,
                  "To comply with any court order, law, or legal process, including to respond to any government or regulatory request."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "To enforce our rights arising from any contracts entered into between you and us, including our Terms of Service."
                ),
                r.a.createElement(
                  "li",
                  null,
                  "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of The Game Band, our customers or others."
                )
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Where, How and How Long We Store Your Information"
              ),
              r.a.createElement(
                "p",
                null,
                "We store your information securely in the United States. By using the Game, you authorize us to transfer, store and process your information in the United States and any other country where we operate."
              ),
              r.a.createElement(
                "p",
                null,
                "We keep your information only for the length of time necessary to fulfill the purposes for which the information was collected. For example, if you have an account with us, we will retain the personal information associated with your account for the lifetime of your account. If applicable laws require us to store your information for a longer period, then we will keep your information for the period of time required by law. When it is no longer necessary or required for us to retain your data, we will delete it."
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Your Rights and Choices"
              ),
              r.a.createElement(
                "h3",
                { className: "Privacy-Miniheader" },
                r.a.createElement("b", null, "Data Protection Rights")
              ),
              "The laws of the European Economic Area and other territories provide their residents with certain data protection rights. If you are resident of the European Economic Area, these are your rights:",
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "The right to access"),
                  " - You have the right to request The Game Band provide you with copies of your personal data. We may charge you a small fee for this service."
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "The right to rectification"),
                  " - You have the right to request that The Game Band correct any information you believe is inaccurate. You also have the right to request The Game Band to complete information you believe is incomplete."
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "The right to be forgotten"),
                  " - You have the right to request that The Game Band erase your personal data, under certain conditions."
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "b",
                    null,
                    "The right to restrict processing"
                  ),
                  " - You have the right to request that The Game Band restrict the processing of your personal data, under certain conditions."
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "b",
                    null,
                    "The right to object to processing"
                  ),
                  " - You have the right to object to our processing of your personal data, under certain conditions."
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "The right to data portability"),
                  " - You have the right to request that The Game Band transfer the data that we have collected to another organization, or directly to you, under certain conditions."
                )
              ),
              r.a.createElement(
                "p",
                null,
                "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email:",
                " ",
                r.a.createElement(
                  "a",
                  { href: "mailto:legal@thegameband.com" },
                  "legal@thegameband.com"
                ),
                "."
              ),
              r.a.createElement(
                "h3",
                { className: "Privacy-Miniheader" },
                r.a.createElement("b", null, "Additional Data Choices")
              ),
              r.a.createElement(
                "p",
                null,
                "We strive to provide you with choices regarding the personal information you provide to us. This section describes mechanisms we provide for you to control certain uses and disclosures of over your information."
              ),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "Tracking Technologies."),
                  " You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies or block the use of other tracking technologies, some parts of the Game may then be inaccessible or not function properly."
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "Promotion by The Game Band."),
                  " If you do not want us to use your email address to promote our own or third parties' products or services, you can opt-out by clicking the unsubscribe link at the bottom of our emails and following the instructions provided.",
                  " "
                )
              ),
              r.a.createElement(
                "div",
                { className: "Privacy-Subheader" },
                "Third-Party Information Collection"
              ),
              r.a.createElement(
                "p",
                null,
                "Some content in the Game is served by third-parties. When you use the Game or its content, certain third parties may use automatic information collection technologies to collect information about you or your device."
              ),
              r.a.createElement("p", null, "These third parties include:"),
              r.a.createElement(
                "ul",
                null,
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "b",
                    null,
                    "App marketplaces where you download or sign into the Game"
                  )
                ),
                r.a.createElement(
                  "ul",
                  null,
                  r.a.createElement(
                    "li",
                    null,
                    "To Learn more about the Apple and how they collect and use your information, please visit",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://www.apple.com/legal/privacy/en-ww/" },
                      "https://www.apple.com/legal/privacy/en-ww/"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    "To Learn more about Google Play and how they collect and use your information, please visit:",
                    " ",
                    r.a.createElement(
                      "a",
                      {
                        href:
                          "https://play.google.com/about/privacy-security-deception/",
                      },
                      "https://play.google.com/about/privacy-security-deception/"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    "To learn more about the Facebook and how they collect and use your information, please visit:",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://www.facebook.com/privacy/explanation" },
                      "https://www.facebook.com/privacy/explanation"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    "To learn more about the Google and how they collect and use your information, please visit:",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://policies.google.com/privacy?hl=en-US" },
                      "https://policies.google.com/privacy?hl=en-US"
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "Wireless network providers")
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "Analytics companies")
                ),
                r.a.createElement(
                  "ul",
                  null,
                  r.a.createElement(
                    "li",
                    null,
                    "To learn more about Google Analytics and how they collect and use your information, please visit",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://marketingplatform.google.com/about/" },
                      "https://marketingplatform.google.com/about/"
                    ),
                    " ",
                    "or",
                    " ",
                    r.a.createElement(
                      "a",
                      {
                        href:
                          "https://support.google.com/analytics/answer/181881?hl=en",
                      },
                      "https://support.google.com/analytics/answer/181881?hl=en"
                    ),
                    "."
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "b",
                    null,
                    "Your mobile device manufacturer"
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement("b", null, "Your mobile service provider")
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    "b",
                    null,
                    "Our Social Media Accounts - when you interact with us on our social media accounts, the information collected is governed by the privacy policies of the relevant social media platform."
                  )
                ),
                r.a.createElement(
                  "ul",
                  null,
                  r.a.createElement(
                    "li",
                    null,
                    "To learn more about the Twitter and how they collect and use your information, please visit:",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://twitter.com/en/privacy" },
                      "https://twitter.com/en/privacy"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    "To learn more about the Facebook and how they collect and use your information, please visit:",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://www.facebook.com/privacy/explanation" },
                      "https://www.facebook.com/privacy/explanation"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    "To learn more about the Instagram and how they collect and use your information, please visit:",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://help.instagram.com/519522125107875" },
                      "https://help.instagram.com/519522125107875"
                    )
                  )
                )
              ),
              r.a.createElement(
                "p",
                null,
                "Note: the websites above are provided solely for your convenience and The Game Band is not responsible for updating them or ensuring their validity or correctness.",
                " "
              ),
              r.a.createElement(
                "p",
                null,
                "These third parties may use tracking technologies to collect information about you when you use the Game. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites, apps, and other online services websites. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.",
                " "
              ),
              r.a.createElement(
                "p",
                null,
                "We do not control these third parties' tracking technologies or how they may be used. We do not control third parties' collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly."
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Changes to Our Privacy Policy"
              ),
              r.a.createElement(
                "p",
                null,
                "We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will post the new privacy policy on this page with a notice that the privacy policy has been updated."
              ),
              r.a.createElement(
                "p",
                null,
                "The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting this privacy policy to check for any changes."
              ),
              r.a.createElement(
                "h2",
                { className: "Privacy-Subheader" },
                "Contact Information"
              ),
              r.a.createElement(
                "p",
                null,
                "To ask questions or comment about this privacy policy and our privacy practices, contact us at:"
              ),
              r.a.createElement(
                "div",
                { className: "Privacy-Contact" },
                "The Game Band",
                r.a.createElement("br", null),
                "448 S Hill St. Suite 301",
                r.a.createElement("br", null),
                "Los Angeles, CA 90013"
              )
            )
          );
        },
        ra =
          (a(156),
          function () {
            return r.a.createElement(
              "div",
              { className: "TermsOfService" },
              r.a.createElement(
                "h1",
                { className: "TermsOfService-Header" },
                "Terms of Service"
              ),
              r.a.createElement(
                "div",
                { className: "TermsOfService-Content" },
                r.a.createElement(
                  "p",
                  null,
                  "Welcome to The Game Band! These Terms of Service (",
                  r.a.createElement("b", null, "\u201cTerms\u201d"),
                  ") govern your use of our game, BLASEBALL (referred to herein as the",
                  " ",
                  r.a.createElement("b", null, "\u201cGame\u201d"),
                  ")."
                ),
                r.a.createElement(
                  "p",
                  null,
                  "The Game is a copyrighted work belonging to The Game Band (",
                  r.a.createElement("b", null, "\u201cThe Game Band\u201d"),
                  ", ",
                  r.a.createElement("b", null, "\u201cus\u201d"),
                  ", ",
                  r.a.createElement("b", null, "\u201cour\u201d"),
                  ", and ",
                  r.a.createElement("b", null, "\u201cwe\u201d"),
                  "). Certain features of the Game may be subject to additional guidelines, terms, or rules, which will be posted in the Game in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms."
                ),
                r.a.createElement(
                  "p",
                  null,
                  "These Terms of Service (these ",
                  r.a.createElement("b", null, "\u201cTerms\u201d"),
                  ") set forth the legally binding terms and conditions that govern your use of the Game. BY DOWNLOADING/INSTALLING/USING/ACCESSING THE GAME, YOU (A) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THESE TERMS; (B) REPRESENT THAT YOU ARE OF LEGAL AGE TO ENTER INTO A BINDING AGREEMENT; AND (C) ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT DOWNLOAD/ INSTALL/USE THE GAME AND DELETE IT FROM YOUR DEVICE AND DO NOT USE OR ACCESS THE SITE."
                ),
                r.a.createElement(
                  "p",
                  null,
                  "YOU MAY ONLY USE THE GAME (i) IF YOU AT OR ABOVE THE LEGAL AGE OF MAJORITY IN YOUR JURISDICTION (18 YEARS OLD IN MOST STATES) OR (ii) IF YOUR ARE BETWEEN THE AGES OF 13 AND THE LEGAL AGE OF MAJORITY WITH THE CONSENT AND UNDER THE SUPERVISION OF YOUR PARENT OR LEGAL GUARDIAN."
                ),
                r.a.createElement(
                  "p",
                  null,
                  "PERSONS UNDER THE AGE OF 13 MAY NOT USE THE GAME. PERSONS BETWEEN THE AGE OF 13 AND THE LEGAL AGE OF MAJORITY IN THEIR JURISDICTION MAY NOT USE THE GAME WITHOUT THE CONSENT AND SUPERVISION OF THEIR PARENT OR LEGAL GUARDIAN. BY USING THE GAME, YOU REPRESENT THAT YOU ARE EITHER (i) AT OR ABOVE THE LEGAL AGE OF MAJORITY IN YOUR JURISDICTION AND THAT YOU AGREE TO THESE TERMS OF SERVICE OR (ii) THAT YOU ARE BETWEEN THE AGES OF 13 AND THE LEGAL AGE OF MAJORITY, YOU HAVE THE CONSENT AND ARE UNDER THE SUPERVISION OF YOUR PARENT OR LEGAL GUARDIAN AND THAT YOU AND YOUR PARENT OR GUARDIAN AGREE TO THESE TERMS OF SERVICE. IF YOU DO NOT MEET THESE REQUIREMENTS YOU MAY NOT USE OR ACCESS THE GAME."
                ),
                r.a.createElement(
                  "p",
                  null,
                  "These terms require the use of arbitration (Section 15.2) on an individual basis to resolve disputes, rather than jury trials or class actions, and also limit the remedies available to you in the event of a dispute."
                ),
                r.a.createElement(
                  "ol",
                  null,
                  r.a.createElement(
                    "li",
                    null,
                    "Access to the Game.",
                    r.a.createElement(
                      "ol",
                      null,
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "License."),
                        ' Subject to these Terms, The Game Band grants you a limited non-transferable, non-exclusive, revocable, limited license to: download and install the Game for your personal, non-commercial use on a single gaming device owned or otherwise controlled by you ("Device") strictly in accordance with the Game\'s documentation; and to use and access the Site solely for your own personal use.'
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Certain Restrictions."),
                        " The rights granted to you in these Terms are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Game, whether in whole or in part, or any content displayed in the Game; (b) you shall not modify, translate, adapt, make derivative works of, improve, disassemble, decode, reverse compile or reverse engineer or otherwise attempt to derive or gain access to the source code of any part of the Game; (c) you shall not access the Game in order to build a similar or competitive website, product, game or service; (d) except as expressly stated herein, no part of the Game may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means; and (e) you shall not remove, disable, circumvent or otherwise create or implement any workaround to any copy protection, rights management, or security features in or protecting the Game. Unless otherwise indicated, any future release, update, or other addition to functionality of the Game shall be subject to these Terms. All copyright and other proprietary notices in the Game (or on any content displayed in the Game) must be retained on all copies thereof."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Modification."),
                        " The Game Band reserves the right, at any time, to modify, suspend, or discontinue the Game (in whole or in part) with or without notice to you. You agree that The Game Band will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Game or any part thereof."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          "b",
                          null,
                          "No Support or Maintenance."
                        ),
                        " You acknowledge and agree that The Game Band will have no obligation to provide you with any support or maintenance in connection with the Game."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Ownership."),
                        " You acknowledge and agree that the Game is provided under license, and not sold, to you. You do not acquire any ownership interest in the Game under these Terms, or any other rights thereto other than to use the Game in accordance with these Terms. The Game Band and its licensors and service providers reserve and retain their entire right, title, and interest in and to the Game, including all copyrights, trademarks, and other intellectual property rights therein or relating thereto, except as expressly granted to you in these Terms. Neither these Terms (nor your access to the Game) transfers to you or any third party any rights, title or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Section 1.1. The Game Band and its suppliers reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms."
                      )
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Accounts."),
                    r.a.createElement(
                      "ol",
                      null,
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Account Creation."),
                        " In order to use certain features of the Game, you must register for an account (",
                        r.a.createElement("b", null, '"Account"'),
                        ") and provide certain information about yourself as prompted by the account registration form (including but not limited to your full name, email address and a unique password). You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information; (c) you reside in the United States or, if you reside outside the United States, that your use of the Game will comply with applicable law in your jurisdiction. You may delete your Account at any time, for any reason, by following the instructions in the Game. The Game Band may suspend or terminate your Account in accordance with Section 14."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          "b",
                          null,
                          "Account Responsibilities. "
                        ),
                        "You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify The Game Band of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. The Game Band cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements."
                      )
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Feedback."),
                    " If you provide The Game Band with any feedback or suggestions regarding the Game (",
                    r.a.createElement("b", null, '"Feedback"'),
                    "), you hereby assign to The Game Band all rights in such Feedback and agree that The Game Band shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. The Game Band will treat any Feedback you provide to The Game Band as non-confidential and non-proprietary. You agree that you will not submit to The Game Band any information or ideas that you consider to be confidential or proprietary."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement(
                      "b",
                      null,
                      "Collection of Your Information."
                    ),
                    " You acknowledge that when you download, install, access or use the Game, The Game Band may use automatic means (including, for example, cookies and web beacons) to collect information about your device and about your use of the Game. You also may be required to provide certain information about yourself as a condition to downloading, installing, or using the Game or certain of its features or functionality. All information we collect through or in connection with this Game is subject to our",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://blaseball.com/privacy" },
                      "Privacy Policy"
                    ),
                    ". By downloading, installing, accessing, using, and providing information to or through this Game, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Device Requirements."),
                    " The Game can only be used via certain devices, like your smartphone, a list of compatible devices is provided the third-party application marketplaces (",
                    r.a.createElement("b", null, '"Marketplaces"'),
                    ") where the Game can be downloaded. Your Device must also meet the system requirements listed on the Site and/or the Marketplaces"
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Free Content."),
                    " Upon downloading the Game, users will have access to certain features of the game (",
                    r.a.createElement("b", null, '"Free Features"'),
                    "). The Game Band may add, remove, modify or otherwise change the free features at any time with or without notice to you."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Updates."),
                    " The Game Band may from time to time in its sole discretion develop and provide Game updates, which may include upgrades, bug fixes, patches, other error corrections, and/or new features (collectively, including related documentation,",
                    r.a.createElement("b", null, '"Updates"'),
                    "). Updates may also modify or delete in their entirety certain features and functionality. You agree that The Game Band has no obligation to provide any Updates or to continue to provide or enable any particular features or functionality. Based on your Device settings, when your Device is connected to the internet either:",
                    r.a.createElement(
                      "ul",
                      null,
                      r.a.createElement(
                        "li",
                        null,
                        "(a) the Game will automatically download and install all available Updates; or"
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        "(b) you may receive notice of or be prompted to download and install available Updates."
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "indented" },
                    "You will promptly download and install all Updates and acknowledge and agree that the Game or portions thereof may not properly operate should you fail to do so. You further agree that all Updates will be deemed part of the Game and be subject to all terms and conditions of these Terms."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement(
                      "b",
                      null,
                      "Virtual Goods and Virtual Money."
                    ),
                    r.a.createElement(
                      "ol",
                      null,
                      r.a.createElement(
                        "li",
                        null,
                        "The Game may include virtual currencies such as virtual coins or items or services for use with the Game (collectively",
                        " ",
                        r.a.createElement("b", null, '\u201cVirtual Items"'),
                        "). Users may be able to earn Virtual Items within the Game. You agree that once earned, Virtual Items have no monetary value and can never be exchanged for real money, real goods or real services from us or anyone else. You also agree that you will obtain the Virtual Items only from us, and not from any third party. You agree that Virtual Items are not transferrable from one person to another or one account to another, and you will not transfer or attempt to transfer any Virtual Items to any other person or account."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        "You agree that any Virtual Items that you earn, are not owned by you, but that you instead have been granted, by us, a limited personal revocable license to use such Virtual Items. You agree that any balance of Virtual Items does not reflect any stored value."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        "You understand and agree that we are not responsible for any problems or losses associated with your marketplace account, including without limitation, problems transferring Virtual Items from one device to another, restoring Virtual Items from a lost or damaged device to a different device, or any other losses of Virtual Items. The risk of loss of Virtual Items is transferred to you at the time that you earn such Virtual Item."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        "We reserve the right to control, regulate, change or remove any Virtual Items without any liability to you."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        "We may revise the requirements for earning Virtual Items through the Game at any time. We may limit the total amount of Virtual Items that may be earned at any one time, and/or limit the total amount of Virtual Items that may be held in your account in the aggregate. You are only allowed to earn Virtual Items from us or our authorized partners through the Game, and not in any other way."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        "If we suspend or terminate your account in accordance with these terms you will lose any Virtual Items that you may have accumulated, and we will not compensate you for this loss."
                      )
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Indemnification."),
                    " You agree to indemnify and hold The Game Band (and its officers, employees, and agents) harmless, including costs and attorneys\u2019 fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Game, (b) your violation of these Terms, or (c) your violation of applicable laws or regulations. The Game Band reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of The Game Band. The Game Band will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Third Party Materials."),
                    " The Game may contain links to third-party websites and services, including through third party advertising (collectively, ",
                    r.a.createElement("b", null, '"Third-Party Materials"'),
                    "). Such Third Party Materials are not under the control of The Game Band, and The Game Band is not responsible for any Third Party Materials. The Game Band provides access to these Third Party Materials only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third Party Materials. You acknowledge and agree that The Game Band is not responsible for Third Party Materials, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality, or any other aspect thereof. The Game Band does not assume and will not have any liability or responsibility to you or any other person or entity for any Third Party Materials. Third Party Materials and links thereto are provided solely as a convenience to you, and you access and use them entirely at your own risk and subject to such third parties' terms and conditions. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third Party Materials."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Release."),
                    " You hereby release and forever discharge The Game Band (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Game (including any interactions with, or act or omission of, other Game users or any Third Party Materials). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: \u201cA GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.\u201d"
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Disclaimers."),
                    ' THE GAME IS PROVIDED TO YOU "AS IS" AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE GAME BAND, ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES AND ITS AND THEIR RESPECTIVE LICENSORS AND SERVICE PROVIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO THE GAME, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE. WITHOUT LIMITATION TO THE FOREGOING, THE GAME BAND PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY KIND THAT THE GAME WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE, OR WORK WITH ANY OTHER SOFTWARE, GAMES, SYSTEMS, OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS, OR BE ERROR-FREE, ACCURATE, RELIABLE, FREE FROM HARMFUL CODE, COMPLETE, LEGAL, SAFE, ABAILABLE ON AN UNTERUPTED BASIS OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED.'
                  ),
                  r.a.createElement(
                    "div",
                    { className: "indented" },
                    "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Limitation on Liability."),
                    " TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE GAME BAND OR ITS AFFILIATES, OR ANY OF ITS OR THEIR RESPECTIVE LICENSORS OR SERVICE PROVIDERS, HAVE ANY LIABILITY ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE GAME FOR:",
                    r.a.createElement(
                      "ol",
                      { className: "alphabetical" },
                      r.a.createElement(
                        "li",
                        null,
                        "PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES, LOSS OF DATA, LOSS OF GOODWILL, BUSINESS INTERRUPTION, COMPUTER OR DEVICE FAILURE OR MALFUNCTION, OR ANY OTHER CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        "DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE AMOUNT ACTUALLY PAID BY YOU FOR THE GAME OR VIRTUAL ITEMS."
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "indented" },
                    "THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR THE GAME BAND WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU."
                  ),
                  r.a.createElement(
                    "div",
                    { className: "indented" },
                    "SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "Term and Termination."),
                    " Subject to this Section, these Terms will remain in full force and effect while you use the Game. We may suspend or terminate your rights to use the Game (including your Account) at any time for any reason at our sole discretion, including for any use of the Game in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Game will terminate immediately. You understand that any termination of your Account may involve deletion of all information and Virtual Items associated with your Account from our live databases. The Game Band will not have any liability whatsoever to you for any termination of your rights under these Terms, including for termination of your Account or deletion of your information. Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 1.2, Section 3 and Sections 6 through 15."
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement("b", null, "General"),
                    r.a.createElement(
                      "ol",
                      null,
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Changes."),
                        " These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us (if any), and/or by prominently posting notice of the changes in the Game. You are responsible for providing us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. Any changes to these Terms will be effective upon the earlier of thirty (30) calendar days following our dispatch of an e-mail notice to you (if applicable) or thirty (30) calendar days following our posting of notice of the changes in the Game. These changes will be effective immediately for new users of the Game. Continued use of the Game following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          "b",
                          null,
                          "Dispute Resolution.",
                          r.a.createElement(
                            "i",
                            null,
                            "Please read this Arbitration Agreement carefully. It is part of your contract with The Game Band and affects your rights. It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER."
                          )
                        ),
                        r.a.createElement(
                          "ol",
                          { className: "alphabetical" },
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "i",
                              null,
                              "Applicability of Arbitration Agreement."
                            ),
                            " All claims and disputes (excluding claims for injunctive or other equitable relief as set forth below) in connection with the Terms or the use of any product or service provided by The Game Band that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement. Unless otherwise agreed to, all arbitration proceedings shall be held in English. This Arbitration Agreement applies to you and The Game Band, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "i",
                              null,
                              "Notice Requirement and Informal Dispute Resolution."
                            ),
                            " ",
                            "Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute (",
                            r.a.createElement("b", null, '"Notice"'),
                            ") describing the nature and basis of the claim or dispute, and the requested relief. A Notice to The Game Band should be sent to The Game Band attn.: Terms of Service Dispute at the address listed in Section 15.12 (or such other address as may be provided by The Game Band for this purpose. After the Notice is received, you and The Game Band may attempt to resolve the claim or dispute informally. If you and The Game Band do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding. The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award, if any, to which either party is entitled."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement("i", null, "Arbitration."),
                            " You agree that any dispute, claim or controversy arising hereunder or relating in any way to these Terms and not informally resolved shall be settled by binding arbitration in the Commonwealth of Massachusetts, in accordance with the commercial arbitration rules of Judicial Arbitration and Mediation Services (",
                            r.a.createElement("b", null, '"JAMS"'),
                            "). The arbitrator shall issue a written decision specifying the basis for the award made. The party filing a claim or counterclaim in the arbitration proceeding shall pay the deposit(s) determined by JAMS with respect to such claim or counterclaim. All other costs associated with the arbitration and imposed by JAMS shall be paid as determined by the arbitrator(s) and, in absence of such determination, equally by each party to the arbitration. In addition, unless the arbitrator awards payment of reasonable attorney and other fees to a party, each party to the arbitration shall be responsible for its own attorneys' fees and other professional fees incurred in connection with the arbitration. Determinations of the arbitrator will be final and binding upon the parties to the arbitration, and judgment upon the award rendered by the arbitrator may be entered in any court having jurisdiction, or application may be made to such court for a judicial acceptance of the award and an order of enforcement, as the case may be. The arbitrator shall apply the substantive law of the Commonwealth of Massachusetts, without giving effect to its conflict of laws rules."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "i",
                              null,
                              "Waiver of Jury Trial."
                            ),
                            " THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement. Arbitration procedures are typically more limited, more efficient and less costly than rules applicable in a court and are subject to very limited review by a court. In the event any litigation should arise between you and The Game Band in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND THE GAME BAND WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "i",
                              null,
                              "Waiver of Class or Consolidated Actions."
                            ),
                            " ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement("i", null, "Confidentiality."),
                            " All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and compliance therewith, shall be strictly confidential. The parties agree to maintain confidentiality unless otherwise required by law. This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement("i", null, "Severability."),
                            " If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement("i", null, "Right to Waive."),
                            " Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted. Such waiver shall not waive or affect any other portion of this Arbitration Agreement."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "i",
                              null,
                              "Emergency Equitable Relief."
                            ),
                            " Notwithstanding the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration. A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "i",
                              null,
                              "Claims Not Subject to Arbitration."
                            ),
                            " Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party\u2019s patent, copyright, trademark or trade secrets shall not be subject to this Arbitration Agreement."
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement("i", null, "Courts."),
                            " In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within the State of California, for such purpose"
                          )
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Export."),
                        " The Game may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, reexport, or transfer, directly or indirectly, any U.S. technical data acquired from The Game Band, or any products utilizing such data, in violation of the United States export laws or regulations."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Disclosures."),
                        " The Game Band is located at the address in Section 15.12. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          "b",
                          null,
                          "Electronic Communications."
                        ),
                        " The communications between you and The Game Band use electronic means, whether you use the Game or send us emails, or whether The Game Band posts notices in the Game or communicates with you via email. For contractual purposes, you (a) consent to receive communications from The Game Band in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that The Game Band provides to you electronically satisfy any legal requirement that such communications would satisfy if it were be in a hardcopy writing. The foregoing does not affect your non-waivable rights."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Severability."),
                        " If any provision of this Agreement is illegal or unenforceable under applicable law, the remainder of the provision will be amended to achieve as closely as possible the effect of the original term and all other provisions of this Agreement will continue in full force and effect."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Governing Law."),
                        " This Agreement is governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rule."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          "b",
                          null,
                          "Limitation of Time for Claims."
                        ),
                        " ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE GAME MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES OTHERWISE SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Waiver."),
                        " No failure to exercise, and no delay in exercising, on the part of either party, any right or any power hereunder will operate as a waiver thereof, nor will any single or partial exercise of any right or power hereunder preclude further exercise of that or any other right hereunder. In the event of a conflict between this Agreement and any applicable purchase or other terms, the terms of this Agreement will govern."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Entire Terms."),
                        " These Terms constitute the entire agreement between you and us regarding the use of the Game. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word \u201cincluding\u201d means \u201cincluding without limitation\u201d. If any provision of these Terms is, for any reason, held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired, and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. Your relationship to The Game Band is that of an independent contractor, and neither party is an agent or partner of the other. These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without The Game Band\u2019 prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. The Game Band may freely assign these Terms. The terms and conditions set forth in these Terms shall be binding upon assignees."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          "b",
                          null,
                          "Copyright/Trademark Information."
                        ),
                        " Copyright \xa9 2020 The Game Band. All rights reserved. All trademarks, logos and service marks (",
                        r.a.createElement("b", null, '"Marks"'),
                        ") displayed in the Game are our property or the property of other third parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks."
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement("b", null, "Contact Information:")
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "indented" },
                    "The Game Band",
                    r.a.createElement("br", null),
                    "448 S Hill St. Suite 301",
                    r.a.createElement("br", null),
                    "Los Angeles, CA 90013",
                    r.a.createElement("br", null),
                    r.a.createElement(
                      "a",
                      { href: "mailto:legal@thegameband.com" },
                      "legal@thegameband.com"
                    )
                  )
                )
              )
            );
          });
      function oa() {
        return (oa =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ia(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var la = r.a.createElement("image", {
          id: "Ball",
          x: 87,
          y: 75,
          width: 784,
          height: 911,
          xlinkHref:
            "data:img/png;base64,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",
        }),
        sa = function (e) {
          var t = e.svgRef,
            a = e.title,
            n = ia(e, ["svgRef", "title"]);
          return r.a.createElement(
            "svg",
            oa(
              { width: 959, height: 1065, viewBox: "0 0 959 1065", ref: t },
              n
            ),
            a ? r.a.createElement("title", null, a) : null,
            la
          );
        },
        ca = r.a.forwardRef(function (e, t) {
          return r.a.createElement(sa, oa({ svgRef: t }, e));
        }),
        ma =
          (a.p,
          a(157),
          {
            notes: [],
            refreshNotes: (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
          }),
        ua = Object(n.createContext)(ma),
        da = function (e) {
          var t = e.children,
            a = Object(n.useState)([]),
            o = Object(l.a)(a, 2),
            i = o[0],
            c = o[1],
            m = (Object(s.g)().pathname, Object(ue.useToasts)().addToast),
            u = Object(n.useCallback)(
              Object(g.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/api/getUserNotifications", {
                              credentials: "include",
                            })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                e && c(e.notes);
                              })
                              .catch(function (e) {
                                c([]);
                              })
                          );
                        case 2:
                          return e.abrupt("return", null);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            d = (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            i.forEach(function (e) {
                              t.push(e._id);
                            }),
                            (e.next = 4),
                            b(
                              "/api/clearUserNotifications",
                              JSON.stringify({ noteIds: t })
                            )
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function () {
              if (i) {
                for (var e = 0; e < i.length; e++) {
                  var t = i[e];
                  m(t.message, { appearance: "info", autoDismiss: !1 });
                }
                d();
              }
            },
            [i]
          ),
            Object(n.useEffect)(function () {
              u(),
                h.on("notify", function (e) {
                  u();
                });
            }, []);
          var E = { notes: i, refreshNotes: u };
          return r.a.createElement(ua.Provider, { value: E }, t);
        };
      da.context = ua;
      var ha = da;
      a(158);
      function Ea() {
        return r.a.createElement(
          "div",
          { className: "TheBook-All" },
          r.a.createElement(
            "div",
            { className: "TheBook-Header" },
            "The Book of Blaseball"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Subheader" },
            "The Game of ",
            r.a.createElement(
              "span",
              { className: "TheBook-Subheader-Group" },
              r.a.createElement(pa, { str: "||||||||||||||||||" }),
              " and ",
              r.a.createElement(pa, { str: "|||||||||||||" })
            )
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Subheader" },
            "Official Rulebook"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-Bullet" },
            "1. Seasons"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "a. Each season of Blaseball shall last 99 games. In the case of ",
            r.a.createElement(pa, { str: "the Ultimate ||||||||" }),
            ", seasons shall ",
            r.a.createElement(pa, {
              str:
                "|||||||||||||||||, or at least until the ||||||| have ||||||||.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "b. Every day of Blaseball shall last one ",
            r.a.createElement(pa, { str: "|||||" }),
            " hour."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "c. If any games last longer than one ",
            r.a.createElement(pa, { str: "|||||" }),
            " hour, a Spillover shall occur, and all games shall be delayed until the next ",
            r.a.createElement(pa, { str: "|||||" }),
            " hour. In the case of a game lasting two ",
            r.a.createElement(pa, { str: "|||||" }),
            " hours, the ",
            r.a.createElement(pa, {
              str:
                "entire season should be ||||||||| and both teams should be ||||||||| ||||||||| |||||||| |||| for |||||| |||||||||||.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            'd. A season should start on a "Monday" and therefore conclude on a "Friday".'
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-Bullet" },
            "2. Postseasons"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "a. Each Postseason of Blaseball shall consist of 8 teams. These teams shall be the 4 best teams from each league, regardless of division. Teams will be ranked by their total wins over the season. In the case of ties, teams shall be chosen based on their ",
            r.a.createElement(pa, { str: "Divine Favor" }),
            ". ",
            r.a.createElement("i", null, "See: "),
            " ",
            r.a.createElement(pa, { str: "Divine Favor" })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            'b. The Postseason should start early on a "Saturday" and conclude within the same day. If the Postseason lasts into the following day, no ',
            r.a.createElement(pa, {
              str:
                "||||| shall be ||||||||, and both teams shall be |||||||||| |||||||| ||||||||||||.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "c. Postseason rounds should be played in best 3 of 5 game series."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "d. The home team in each Postseason game shall be ",
            r.a.createElement(pa, {
              str: "the |||||||||||, if the |||||||||||||||||||.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-Bullet" },
            "3. Elections"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "a. Participants should be allowed to Vote on the rules, rosters, and other effects of the game of Blaseball. ",
            r.a.createElement(pa, {
              str:
                "The content of such Votes shall be ||||||||||||||| ||||||||||||||||||| ||||||||| entertainment",
            }),
            "."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            r.a.createElement(
              "span",
              null,
              "b. Decrees will be decided by popular vote."
            ),
            r.a.createElement(pa, {
              str:
                "It is understood that ||||||||||||||||| will be a ||||||||||| |||||||||||, and the others shall ||||||||||||||| ||||||||||||||| ||||||||| |||||||||||||.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "c. Blessings will be decided by a raffle. ",
            r.a.createElement(pa, {
              str: "It is understood that each of these",
            }),
            " should give players ",
            r.a.createElement(pa, { str: "||||||||||||| |||||||||||" }),
            " control of the league. All won Blessings shall be processed & applied in order of the standings. "
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "c. ",
            r.a.createElement(pa, { str: "||||||||||||||||||" }),
            " may occur at the end of an Election, before Decrees and Blessings are processed. ",
            r.a.createElement(pa, { str: "Anything can happen here" }),
            ". Good luck."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            'd. Elections should end on a "Sunday," although Votes should be able to be cast on any day of the week.'
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-Bullet" },
            "4. Playing the Game"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "a. The game of Blaseball should be played between two teams."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "b. Each game should take place ",
            r.a.createElement(pa, {
              str: "at the home team's stadium |||||||||||||||||||||||.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "c. Weather: ",
            r.a.createElement(pa, {
              str: "The home team's stadium should determine the weather.",
            }),
            " In the case that ",
            r.a.createElement(pa, { str: "||||||||||||||||||||" }),
            ", a Solar Eclipse shall last until ",
            r.a.createElement(pa, { str: "||||||||||||||||||||" })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "d. There are ",
            r.a.createElement(pa, { str: "two positions" }),
            " in Blaseball, ",
            r.a.createElement(pa, { str: "||||||||||||||||||||." })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "e. When a team is on Defense, ",
            r.a.createElement(pa, {
              str:
                "all of the team's ||||||| will stand ||||||||| out in the field. Doesn't really matter where.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "f. The pitcher must throw the ball ",
            r.a.createElement(pa, { str: "with their hands." })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "g. Once the ball is in play, ",
            r.a.createElement(pa, {
              str:
                "||| |||| || ||| |||||||||| ||||| |||||||||| the outcome of the play. ||| |||| ||||||| || |||||||||||||||| |||||||||||||| ||||||| ||||||| ||||||||| ||||||||||||||| |||||||||||||||| |||||||| |||||||| unfathomable.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "h. The team with the most runs will win the game."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "i. Shame Phase: If the home team scores the winning run in the bottom of the final inning, the away team must complete the game in shame, despite being mathematically eliminated."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "j. ",
            r.a.createElement(pa, { str: "||||||||||||||||||||||" })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "k. Crying in Blaseball is ",
            r.a.createElement(pa, { str: "||||||||||." })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-Bullet" },
            "5. ",
            r.a.createElement(pa, { str: "The Gods" }),
            " and You"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "a. Should the Participants open the Forbidden Book, ",
            r.a.createElement(pa, {
              str: "The Discipline Era should begin||||||||||||||||||||||",
            }),
            " suffering ",
            r.a.createElement(pa, {
              str: "upon the league. Players shall be ",
            }),
            " banished ",
            r.a.createElement(pa, {
              str:
                "at the ||||||||||| ||||||||| |||| ||||||||||||||||. The Discipline Era",
            }),
            " shall last until ",
            r.a.createElement(pa, { str: "the Participants have atoned." })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "b. If a team wins three championships, they, and Blaseball, shall ascend."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "c. When teams are sent to ",
            r.a.createElement(pa, { str: "||||||||||| |||||||||||||" }),
            ", they shall return once ",
            r.a.createElement(pa, {
              str: "|||||||||||||||| |||||||||||||||||||||| |||||||||||||",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "d. ",
            r.a.createElement(pa, { str: "Divine Favor" }),
            ": the ",
            r.a.createElement(pa, { str: "||||" }),
            " have an internal ranking ",
            r.a.createElement(pa, {
              str:
                "of favored teams. When a team wins a Divine Favor blessing, they will be",
            }),
            " boosted to the top of the list."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "e. If at any time, ",
            r.a.createElement(pa, {
              str: "||||||||||||||| |||||||||||||||, they may |||||||||||||||",
            }),
            " one million Peanuts."
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "f. Sunglasses ",
            r.a.createElement(pa, {
              str:
                "shall be |||||||||| ||||||||||||| |||||||||||||||||. They shall provide |||||||||||||| may be ||||||||||||||||||||.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "g. Splortsmanship, splortsmanship, ",
            r.a.createElement(pa, { str: "splortsmanship." })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-Bullet" },
            "6. ",
            r.a.createElement(pa, { str: "||||||||||||" })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "a. It is known ",
            r.a.createElement(pa, {
              str:
                "that the intention of the game of Blaseball |||||||||||||||||||||||| |||||||||||||||||||| |||||||||||||| |||||||||||||||||| ||||||||||| |||||||||| would be diminished.",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            "b. ",
            r.a.createElement(pa, { str: "|||||||" }),
            ": Several entities in the ",
            r.a.createElement(pa, { str: "||||||||||||||" }),
            " shall be chosen ",
            r.a.createElement(pa, { str: "||||||||||" }),
            " to bring Blaseball to the people ",
            r.a.createElement(pa, {
              str: "|||||||||||||||||| ||||||||||||||||||",
            })
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-Bullet" },
            "Signed,"
          ),
          r.a.createElement(
            "div",
            { className: "TheBook-Line TheBook-SubBullet" },
            r.a.createElement(pa, { str: "||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "|||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "|||||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "|||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "|||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||| ||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||||| ||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "|||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||||||" }),
            ", \xa0",
            r.a.createElement(pa, { str: "||| ||||||" })
          )
        );
      }
      function pa(e) {
        var t = e.str.split(" ");
        return r.a.createElement(
          "span",
          { className: "TheBook-RedactGroup" },
          t.map(function (e) {
            return r.a.createElement(
              "div",
              { className: "TheBook-Redacted" },
              e.split("").map(function () {
                return r.a.createElement("span", null, "\xa0\xa0");
              })
            );
          })
        );
      }
      function Aa() {
        var e = Object(n.useContext)(J.context).user,
          t = Object(n.useState)(!1),
          a = Object(l.a)(t, 2),
          o = a[0],
          i = a[1];
        return (
          Object(n.useEffect)(
            function () {
              void 0 !== e && !e.isFetching && e.isSignedIn ? i(!0) : i(!1);
            },
            [e]
          ),
          void 0 !== e && e.isFetching
            ? r.a.createElement(va, null)
            : o
            ? r.a.createElement(ga, null)
            : r.a.createElement(fa, null)
        );
      }
      function fa() {
        var e = Object(s.g)(),
          t = e.state && e.state.background;
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(We, null),
          r.a.createElement(
            "div",
            { className: "Main-Body-Intro" },
            r.a.createElement(
              s.c,
              { location: t || e },
              r.a.createElement(
                s.a,
                { path: "/tos" },
                r.a.createElement(ra, null)
              ),
              r.a.createElement(
                s.a,
                { path: "/privacy" },
                r.a.createElement(na, null)
              ),
              r.a.createElement(
                s.a,
                { path: "/login" },
                r.a.createElement(mt, { isLogin: !0 })
              ),
              r.a.createElement(
                s.a,
                { path: "/signup/:code?" },
                r.a.createElement(mt, null)
              ),
              r.a.createElement(s.a, { path: "/" }, r.a.createElement(at, null))
            ),
            t &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(s.a, {
                  path: "/signup",
                  children: r.a.createElement(mt, { isModal: !0 }),
                }),
                r.a.createElement(s.a, {
                  path: "/login",
                  children: r.a.createElement(mt, { isModal: !0, isLogin: !0 }),
                }),
                r.a.createElement(s.a, {
                  path: "/team/:nickname",
                  children: r.a.createElement(it, { isModal: !0 }),
                }),
                r.a.createElement(s.a, {
                  path: "/bet/:gameId",
                  children: r.a.createElement(ve, { isModal: !0 }),
                })
              ),
            r.a.createElement(ct, { isModal: !0, dismissable: !1 })
          ),
          r.a.createElement(
            "footer",
            { className: "Main-Footer" },
            r.a.createElement(
              "div",
              { className: "Main-Footer-Links" },
              r.a.createElement(
                "a",
                { className: "Main-Footer-Link", href: "/tos" },
                "Terms of Service"
              ),
              r.a.createElement(
                "a",
                { className: "Main-Footer-Link", href: "/privacy" },
                "Privacy Policy"
              ),
              r.a.createElement(
                "a",
                { className: "Main-Footer-Link", href: ya() },
                "Advertise"
              )
            ),
            r.a.createElement(
              "a",
              {
                href: "https://twitter.com/thegameband",
                target: "_blank",
                className: "Main-Footer-Logo",
              },
              r.a.createElement(ca, null)
            )
          )
        );
      }
      function va() {
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(je, null),
          r.a.createElement("div", { className: "Main-Body" })
        );
      }
      function ga() {
        var e = Object(n.useContext)(A.context),
          t = Object(s.g)(),
          a = t.state && t.state.background,
          o = function (t, a) {
            var n,
              o,
              i,
              l =
                void 0 !== e.sim && void 0 !== e.sim.season ? e.sim.season : -1;
            switch (t) {
              case 0:
                return r.a.createElement(aa, {
                  season:
                    null === (n = e.season) || void 0 === n
                      ? void 0
                      : n.seasonNumber,
                });
              case 1:
                return r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(nt, {
                    element: r.a.createElement(
                      "div",
                      { className: "Stubs-All" },
                      r.a.createElement(
                        "div",
                        { className: "Stubs-Header" },
                        "It's the Pre-Season."
                      ),
                      r.a.createElement(Ye, {
                        dateString:
                          null === (o = e.sim) || void 0 === o
                            ? void 0
                            : o.nextPhaseTime,
                      }),
                      r.a.createElement(
                        "div",
                        { className: "Stubs-Body" },
                        "Season ",
                        l + 1,
                        " will begin soon."
                      )
                    ),
                    text: "Offseason. Check for updates on the Discord!",
                  }),
                  r.a.createElement(ze, null)
                );
              case 2:
                return r.a.createElement(Je, { path: a });
              case 3:
                return r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(nt, {
                    element: r.a.createElement(
                      "div",
                      { className: "Stubs-All" },
                      r.a.createElement(
                        "div",
                        { className: "Stubs-Header" },
                        "The Season is Over!"
                      ),
                      r.a.createElement(Ye, {
                        dateString:
                          null === (i = e.sim) || void 0 === i
                            ? void 0
                            : i.nextPhaseTime,
                      }),
                      r.a.createElement(
                        "div",
                        { className: "Stubs-Body" },
                        "Postseason ",
                        l + 1,
                        " will begin soon."
                      )
                    ),
                    text: "Offseason. Check for updates on the Discord!",
                  }),
                  r.a.createElement(ze, null)
                );
              case 4:
                return r.a.createElement(Fe, { path: a });
              case 5:
              case 6:
                return r.a.createElement(et, { sim: e.sim });
            }
            return r.a.createElement("div", null);
          };
        return r.a.createElement(
          ha,
          null,
          r.a.createElement(
            V,
            null,
            r.a.createElement(Qe, { state: e }),
            r.a.createElement(
              "div",
              { className: "Main-Body" },
              r.a.createElement(
                s.c,
                { location: a || t },
                r.a.createElement(
                  s.a,
                  { path: "/tos" },
                  r.a.createElement(ra, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/privacy" },
                  r.a.createElement(na, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/about" },
                  r.a.createElement(tt, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/shop" },
                  r.a.createElement(lt, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/thebook" },
                  r.a.createElement(Ea, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/standings" },
                  r.a.createElement(qe, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/offseason" },
                  r.a.createElement(_t, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/login" },
                  r.a.createElement(mt, { isLogin: !0 })
                ),
                r.a.createElement(
                  s.a,
                  { path: "/signup" },
                  r.a.createElement(mt, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/team/:nickname" },
                  r.a.createElement(it, null)
                ),
                r.a.createElement(
                  s.a,
                  { path: "/upcoming" },
                  e.sim && o(e.sim.phase, "/upcoming")
                ),
                r.a.createElement(
                  s.a,
                  { path: "/" },
                  e.sim && o(e.sim.phase, "/")
                )
              ),
              a &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(s.a, {
                    path: "/signup",
                    children: r.a.createElement(mt, { isModal: !0 }),
                  }),
                  r.a.createElement(s.a, {
                    path: "/login",
                    children: r.a.createElement(mt, {
                      isModal: !0,
                      isLogin: !0,
                    }),
                  }),
                  r.a.createElement(s.a, {
                    path: "/team/:nickname",
                    children: r.a.createElement(it, { isModal: !0 }),
                  }),
                  r.a.createElement(s.a, {
                    path: "/bet/:gameId",
                    children: r.a.createElement(ve, { isModal: !0 }),
                  })
                ),
              r.a.createElement(ct, { isModal: !0, dismissable: !1 })
            ),
            r.a.createElement(
              "footer",
              { className: "Main-Footer" },
              r.a.createElement(
                "div",
                { className: "Main-Footer-Links" },
                r.a.createElement(
                  "a",
                  { className: "Main-Footer-Link", href: "/tos" },
                  "Terms of Service"
                ),
                r.a.createElement(
                  "a",
                  { className: "Main-Footer-Link", href: "/privacy" },
                  "Privacy Policy"
                ),
                r.a.createElement(
                  "a",
                  { className: "Main-Footer-Link", href: ya() },
                  "Advertise"
                )
              ),
              r.a.createElement(
                "a",
                {
                  href: "https://twitter.com/thegameband",
                  target: "_blank",
                  className: "Main-Footer-Logo",
                },
                r.a.createElement(ca, null)
              )
            )
          )
        );
      }
      function ya() {
        return "mailto:sponsors@thegameband.com?subject=".concat(
          encodeURIComponent("I\u2019d like to sponsor a season of Blaseball")
        );
      }
      var ba = function () {
        return r.a.createElement(
          "div",
          { className: "Main" },
          r.a.createElement(J, null, r.a.createElement(Aa, null))
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Ta = { sim: void 0, standings: void 0, season: void 0 };
      "serviceWorker" in navigator &&
        navigator.serviceWorker.ready
          .then(function (e) {
            e.unregister();
          })
          .catch(function (e) {
            console.error(e.message);
          }),
        i.a.render(
          r.a.createElement(
            r.a.StrictMode,
            null,
            r.a.createElement(
              ue.ToastProvider,
              {
                autoDismiss: !0,
                autoDismissTimeout: 3e3,
                placement: "bottom-right",
              },
              r.a.createElement(
                A,
                { value: Ta },
                r.a.createElement(
                  Ke,
                  { value: {} },
                  r.a.createElement(c.a, null, r.a.createElement(ba, null))
                )
              )
            )
          ),
          document.getElementById("root")
        );
    },
    26: function (e) {
      e.exports = {
        maxBetTiers: [
          { price: 0, amount: 20 },
          { price: 20, amount: 40 },
          { price: 30, amount: 60 },
          { price: 40, amount: 80 },
          { price: 50, amount: 100 },
          { price: 60, amount: 120 },
          { price: 70, amount: 140 },
          { price: 80, amount: 160 },
          { price: 90, amount: 180 },
          { price: 100, amount: 200 },
          { price: 110, amount: 220 },
          { price: 120, amount: 240 },
          { price: 130, amount: 260 },
          { price: 140, amount: 280 },
          { price: 150, amount: 300 },
          { price: 160, amount: 320 },
          { price: 170, amount: 340 },
          { price: 180, amount: 360 },
          { price: 190, amount: 380 },
          { price: 200, amount: 400 },
          { price: 210, amount: 420 },
          { price: 220, amount: 440 },
          { price: 230, amount: 460 },
          { price: 240, amount: 480 },
          { price: 250, amount: 500 },
          { price: 260, amount: 520 },
          { price: 270, amount: 540 },
          { price: 280, amount: 560 },
          { price: 290, amount: 580 },
          { price: 300, amount: 600 },
          { price: 325, amount: 620 },
          { price: 350, amount: 640 },
          { price: 375, amount: 660 },
          { price: 400, amount: 680 },
          { price: 425, amount: 700 },
          { price: 450, amount: 720 },
          { price: 475, amount: 740 },
          { price: 500, amount: 760 },
          { price: 525, amount: 780 },
          { price: 550, amount: 800 },
        ],
        teamWinCoinTiers: [
          { price: 0, amount: 5 },
          { price: 20, amount: 6 },
          { price: 20, amount: 7 },
          { price: 20, amount: 8 },
          { price: 20, amount: 9 },
          { price: 25, amount: 10 },
          { price: 25, amount: 11 },
          { price: 25, amount: 12 },
          { price: 25, amount: 13 },
          { price: 25, amount: 14 },
          { price: 30, amount: 15 },
          { price: 30, amount: 16 },
          { price: 30, amount: 17 },
          { price: 30, amount: 18 },
          { price: 30, amount: 19 },
          { price: 35, amount: 20 },
          { price: 35, amount: 21 },
          { price: 35, amount: 22 },
          { price: 35, amount: 23 },
          { price: 35, amount: 24 },
          { price: 40, amount: 25 },
          { price: 40, amount: 26 },
          { price: 40, amount: 27 },
          { price: 40, amount: 28 },
          { price: 40, amount: 29 },
          { price: 45, amount: 30 },
          { price: 45, amount: 31 },
          { price: 45, amount: 32 },
          { price: 45, amount: 33 },
          { price: 45, amount: 34 },
          { price: 50, amount: 35 },
          { price: 50, amount: 36 },
          { price: 50, amount: 37 },
          { price: 50, amount: 38 },
          { price: 50, amount: 39 },
          { price: 55, amount: 40 },
          { price: 55, amount: 41 },
          { price: 55, amount: 42 },
          { price: 55, amount: 43 },
          { price: 55, amount: 44 },
          { price: 60, amount: 45 },
          { price: 60, amount: 46 },
          { price: 60, amount: 47 },
          { price: 60, amount: 48 },
          { price: 60, amount: 49 },
          { price: 70, amount: 50 },
          { price: 70, amount: 51 },
          { price: 70, amount: 52 },
          { price: 70, amount: 53 },
          { price: 70, amount: 54 },
          { price: 80, amount: 55 },
          { price: 80, amount: 56 },
          { price: 80, amount: 57 },
          { price: 80, amount: 58 },
          { price: 80, amount: 59 },
          { price: 85, amount: 60 },
        ],
      };
    },
    40: function (e, t, a) {},
    84: function (e, t, a) {
      e.exports = a(159);
    },
    89: function (e, t, a) {},
    90: function (e, t, a) {},
  },
  [[84, 1, 2]],
]);
