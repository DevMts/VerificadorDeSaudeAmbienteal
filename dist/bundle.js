/*! For license information please see bundle.js.LICENSE.txt */
(() => { function e(t) { return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, e(t) } function t() { "use strict"; t = function () { return n }; var r, n = {}, a = Object.prototype, o = a.hasOwnProperty, i = Object.defineProperty || function (e, t, r) { e[t] = r.value }, c = "function" == typeof Symbol ? Symbol : {}, s = c.iterator || "@@iterator", u = c.asyncIterator || "@@asyncIterator", l = c.toStringTag || "@@toStringTag"; function h(e, t, r) { return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t] } try { h({}, "") } catch (r) { h = function (e, t, r) { return e[t] = r } } function f(e, t, r, n) { var a = t && t.prototype instanceof b ? t : b, o = Object.create(a.prototype), c = new A(n || []); return i(o, "_invoke", { value: j(e, r, c) }), o } function d(e, t, r) { try { return { type: "normal", arg: e.call(t, r) } } catch (e) { return { type: "throw", arg: e } } } n.wrap = f; var p = "suspendedStart", v = "suspendedYield", y = "executing", m = "completed", g = {}; function b() { } function w() { } function x() { } var E = {}; h(E, s, (function () { return this })); var k = Object.getPrototypeOf, L = k && k(k(N([]))); L && L !== a && o.call(L, s) && (E = L); var q = x.prototype = b.prototype = Object.create(E); function S(e) { ["next", "throw", "return"].forEach((function (t) { h(e, t, (function (e) { return this._invoke(t, e) })) })) } function O(t, r) { function n(a, i, c, s) { var u = d(t[a], t, i); if ("throw" !== u.type) { var l = u.arg, h = l.value; return h && "object" == e(h) && o.call(h, "__await") ? r.resolve(h.__await).then((function (e) { n("next", e, c, s) }), (function (e) { n("throw", e, c, s) })) : r.resolve(h).then((function (e) { l.value = e, c(l) }), (function (e) { return n("throw", e, c, s) })) } s(u.arg) } var a; i(this, "_invoke", { value: function (e, t) { function o() { return new r((function (r, a) { n(e, t, r, a) })) } return a = a ? a.then(o, o) : o() } }) } function j(e, t, n) { var a = p; return function (o, i) { if (a === y) throw Error("Generator is already running"); if (a === m) { if ("throw" === o) throw i; return { value: r, done: !0 } } for (n.method = o, n.arg = i; ;) { var c = n.delegate; if (c) { var s = P(c, n); if (s) { if (s === g) continue; return s } } if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) { if (a === p) throw a = m, n.arg; n.dispatchException(n.arg) } else "return" === n.method && n.abrupt("return", n.arg); a = y; var u = d(e, t, n); if ("normal" === u.type) { if (a = n.done ? m : v, u.arg === g) continue; return { value: u.arg, done: n.done } } "throw" === u.type && (a = m, n.method = "throw", n.arg = u.arg) } } } function P(e, t) { var n = t.method, a = e.iterator[n]; if (a === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = r, P(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g; var o = d(a, e.iterator, t.arg); if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, g; var i = o.arg; return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = r), t.delegate = null, g) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, g) } function T(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) } function _(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t } function A(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(T, this), this.reset(!0) } function N(t) { if (t || "" === t) { var n = t[s]; if (n) return n.call(t); if ("function" == typeof t.next) return t; if (!isNaN(t.length)) { var a = -1, i = function e() { for (; ++a < t.length;)if (o.call(t, a)) return e.value = t[a], e.done = !1, e; return e.value = r, e.done = !0, e }; return i.next = i } } throw new TypeError(e(t) + " is not iterable") } return w.prototype = x, i(q, "constructor", { value: x, configurable: !0 }), i(x, "constructor", { value: w, configurable: !0 }), w.displayName = h(x, l, "GeneratorFunction"), n.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name)) }, n.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, h(e, l, "GeneratorFunction")), e.prototype = Object.create(q), e }, n.awrap = function (e) { return { __await: e } }, S(O.prototype), h(O.prototype, u, (function () { return this })), n.AsyncIterator = O, n.async = function (e, t, r, a, o) { void 0 === o && (o = Promise); var i = new O(f(e, t, r, a), o); return n.isGeneratorFunction(t) ? i : i.next().then((function (e) { return e.done ? e.value : i.next() })) }, S(q), h(q, l, "Generator"), h(q, s, (function () { return this })), h(q, "toString", (function () { return "[object Generator]" })), n.keys = function (e) { var t = Object(e), r = []; for (var n in t) r.push(n); return r.reverse(), function e() { for (; r.length;) { var n = r.pop(); if (n in t) return e.value = n, e.done = !1, e } return e.done = !0, e } }, n.values = N, A.prototype = { constructor: A, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r) }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function (e) { if (this.done) throw e; var t = this; function n(n, a) { return c.type = "throw", c.arg = e, t.next = n, a && (t.method = "next", t.arg = r), !!a } for (var a = this.tryEntries.length - 1; a >= 0; --a) { var i = this.tryEntries[a], c = i.completion; if ("root" === i.tryLoc) return n("end"); if (i.tryLoc <= this.prev) { var s = o.call(i, "catchLoc"), u = o.call(i, "finallyLoc"); if (s && u) { if (this.prev < i.catchLoc) return n(i.catchLoc, !0); if (this.prev < i.finallyLoc) return n(i.finallyLoc) } else if (s) { if (this.prev < i.catchLoc) return n(i.catchLoc, !0) } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return n(i.finallyLoc) } } } }, abrupt: function (e, t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var n = this.tryEntries[r]; if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) { var a = n; break } } a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null); var i = a ? a.completion : {}; return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i) }, complete: function (e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var r = this.tryEntries[t]; if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), _(r), g } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var r = this.tryEntries[t]; if (r.tryLoc === e) { var n = r.completion; if ("throw" === n.type) { var a = n.arg; _(r) } return a } } throw Error("illegal catch attempt") }, delegateYield: function (e, t, n) { return this.delegate = { iterator: N(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = r), g } }, n } function r(e, t, r, n, a, o, i) { try { var c = e[o](i), s = c.value } catch (e) { return void r(e) } c.done ? t(s) : Promise.resolve(s).then(n, a) } function n(e) { return function () { var t = this, n = arguments; return new Promise((function (a, o) { var i = e.apply(t, n); function c(e) { r(i, a, o, c, s, "next", e) } function s(e) { r(i, a, o, c, s, "throw", e) } c(void 0) })) } } function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function o(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n) } } function i(e, t, r) { return t && o(e.prototype, t), r && o(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e } function c(t) { var r = function (t) { if ("object" != e(t) || !t) return t; var r = t[Symbol.toPrimitive]; if (void 0 !== r) { var n = r.call(t, "string"); if ("object" != e(n)) return n; throw new TypeError("@@toPrimitive must return a primitive value.") } return String(t) }(t); return "symbol" == e(r) ? r : r + "" } var s = function () { return i((function e(t) { a(this, e), this.aqi = t.aqi || 0, this.tp = t.tp || 0, this.ws = t.ws || 0, this.hu = t.hu || 0, this.ic = t.ic || 0 }), [{ key: "renderPage", value: (e = n(t().mark((function e() { var r, n, a, o, i = this; return t().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: try { r = document.querySelector(".percentual"), n = document.querySelector(".valor"), a = document.querySelector(".vento"), o = document.querySelector(".umidade"), r.innerText = "".concat(this.aqi, "%"), n.innerText = "".concat(this.tp, "C°"), a.innerText = "".concat(this.ws, "km/h"), o.innerText = "".concat(this.hu, "%/"), this.updateAQIBar() } catch (e) { console.error("Erro no DOM", e) } document.querySelector(".refresh").addEventListener("click", (function () { try { var e = document.querySelector("#dica"), t = i.generateTip(); e.innerText = ""; var r = t[Math.floor(Math.random() * t.length)]; e.innerText = r } catch (e) { console.error("Erro ao exibir a dica:", e) } })); try { this.updateWeatherIcon() } catch (e) { console.error("erro no icon", e) } case 3: case "end": return e.stop() } }), e, this) }))), function () { return e.apply(this, arguments) }) }, { key: "updateAQIBar", value: function () { var e = this, t = document.querySelector(".nivel-aqi"), r = document.querySelector(".estadoSaude"), n = [{ max: 50, color: "#4caf50", categoria: "Boa" }, { max: 100, color: "#ffeb3b", categoria: "Moderada" }, { max: 150, color: "#ff9800", categoria: "Não saudável para sensíveis" }, { max: 200, color: "#f44336", categoria: "Não saudável" }, { max: 300, color: "#9c27b0", categoria: "Muito não saudável" }, { max: 500, color: "#795548", categoria: "Perigoso" }].find((function (t) { return e.aqi <= t.max })); n ? (t.style.width = "".concat(this.aqi / 500 * 100, "%"), t.style.backgroundColor = n.color, r.textContent = n.categoria) : console.error("AQI fora do intervalo esperado.") } }, { key: "generateTip", value: function () { var e = []; return this.aqi <= 50 ? (e.push("O ar está limpo. A qualidade está excelente."), e.push("Aproveite para praticar exercícios ao ar livre!"), e.push("Abra as janelas e deixe o ar fresco entrar."), this.tp > 30 && this.hu > 70 ? e.push("Está quente e úmido. Use roupas leves e beba muita água.") : this.tp < 15 && this.hu < 30 ? e.push("Está frio e seco. Vista roupas quentes e use hidratante.") : e.push("O clima está agradável. Faça uma caminhada ou uma atividade ao ar livre.")) : this.aqi <= 100 ? (e.push("A qualidade do ar é moderada. Pessoas sensíveis devem ter cautela."), e.push("Considere usar máscara em locais com maior poluição."), e.push("Monitore mudanças no clima durante o dia."), this.tp > 30 ? e.push("Evite exercícios intensos ao ar livre e hidrate-se devido ao calor.") : this.tp < 10 && e.push("A temperatura está baixa. Lembre-se de se aquecer ao sair."), this.hu > 60 ? e.push("A umidade está alta. Prefira ambientes frescos e ventilados.") : this.hu < 30 && e.push("A umidade está baixa. Use um umidificador em ambientes fechados.")) : (e.push("O ar está poluído. Considere permanecer em ambientes fechados."), e.push("Feche as janelas para evitar a entrada de poluentes."), e.push("Use purificadores de ar em ambientes internos."), this.tp > 30 ? e.push("O calor é intenso. Evite a exposição ao sol por longos períodos.") : this.tp < 10 && e.push("Está frio. Mantenha-se aquecido em ambientes fechados."), this.hu > 70 ? e.push("O clima está abafado. Evite sair e use máscara se necessário.") : this.hu < 30 && e.push("A umidade está baixa. Hidrate-se constantemente.")), e.push("Sempre confira a previsão do tempo e os níveis de qualidade do ar antes de sair."), e.push("Lembre-se de hidratar-se, independente da temperatura ou umidade."), e } }, { key: "updateWeatherIcon", value: function () { var e, t = document.querySelector(".iconTemp"); switch (this.ic) { case "01d": e = '<i class="fas fa-sun"></i>'; break; case "01n": e = '<i class="fas fa-moon"></i>'; break; case "02d": e = '<i class="fas fa-cloud-sun"></i>'; break; case "02n": e = '<i class="fas fa-cloud-moon"></i>'; break; case "03d": e = '<i class="fas fa-cloud"></i>'; break; case "04d": case "04n": e = '<i class="fas fa-cloud-meatball"></i>'; break; case "09d": e = '<i class="fas fa-cloud-showers-heavy"></i>'; break; case "10d": case "10n": e = '<i class="fas fa-cloud-rain"></i>'; break; case "11d": e = '<i class="fas fa-bolt"></i>'; break; case "13d": e = '<i class="fas fa-snowflake"></i>'; break; case "50d": e = '<i class="fas fa-smog"></i>'; break; default: e = '<i class="fas fa-question-circle"></i>' }t.innerHTML = e } }]); var e }(), u = new (function () { return i((function e() { a(this, e), this.longitude = null, this.latitude = null }), [{ key: "getLocalization", value: function () { var e = this; try { navigator.geolocation.getCurrentPosition((function (t) { e.longitude = t.coords.longitude, e.latitude = t.coords.latitude })) } catch (e) { console.error("Erro ao obter localização") } } }, { key: "getQuality", value: (e = n(t().mark((function e() { var r, n, a; return t().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.prev = 0, e.next = 3, fetch("http://api.airvisual.com/v2/nearest_city?lat=".concat(this.latitude, "&lon=").concat(this.longitude, "&key=885d48e7-09ae-4583-aebf-759f3b8acae4")); case 3: if ((r = e.sent).ok) { e.next = 6; break } throw new Error("Erro na requisição: " + r.statusText); case 6: return e.next = 8, r.json(); case 8: return n = e.sent, a = { aqi: n.data.current.pollution.aqius, tp: n.data.current.weather.tp, ws: n.data.current.weather.ws, hu: n.data.current.weather.hu, ic: n.data.current.weather.ic }, e.abrupt("return", a); case 13: e.prev = 13, e.t0 = e.catch(0), console.error("Erro ao buscar qualidade do ar:", e.t0); case 16: case "end": return e.stop() } }), e, this, [[0, 13]]) }))), function () { return e.apply(this, arguments) }) }]); var e }()); u.getLocalization(), function () { var e = n(t().mark((function e() { var r; return t().wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, u.getQuality(); case 2: (r = e.sent) && new s(r).renderPage(); case 4: case "end": return e.stop() } }), e) }))); return function () { return e.apply(this, arguments) } }()() })();