"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
var db = require('../models');
var Booking = db.booking;
var Pet = db.pet;
var PetOwner = db.petOwner;
function createHomeCareBooking(_x, _x2) {
  return _createHomeCareBooking.apply(this, arguments);
}
function _createHomeCareBooking() {
  _createHomeCareBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, petList, checkIn, checkOut, specificInstructions, checkInDate, checkOutDate, totalPrice, missingPets, _iterator, _step, petId, pet, rate, oneDay, durationInDays, petPrice, status, petOwner;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, petList = _req$body.petList, checkIn = _req$body.checkIn, checkOut = _req$body.checkOut, specificInstructions = _req$body.specificInstructions;
          checkInDate = new Date(req.body.checkIn);
          checkOutDate = new Date(req.body.checkOut);
          totalPrice = 0;
          if (!(!petList || !petList.length)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            message: "Please provide one or more pets for the booking."
          }));
        case 6:
          if (!(!(checkInDate instanceof Date) || !(checkOutDate instanceof Date))) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            message: 'Invalid date format. Please provide Date objects.'
          }));
        case 8:
          missingPets = [];
          _iterator = _createForOfIteratorHelper(petList);
          _context.prev = 10;
          _iterator.s();
        case 12:
          if ((_step = _iterator.n()).done) {
            _context.next = 40;
            break;
          }
          petId = _step.value;
          _context.next = 16;
          return Pet.findByPk(petId);
        case 16:
          pet = _context.sent;
          if (pet) {
            _context.next = 20;
            break;
          }
          missingPets.push(petId);
          return _context.abrupt("continue", 38);
        case 20:
          rate = 0;
          _context.t0 = pet.size;
          _context.next = _context.t0 === 'extra-small' ? 24 : _context.t0 === 'small' ? 26 : _context.t0 === 'medium' ? 28 : _context.t0 === 'large' ? 30 : _context.t0 === 'extra-large' ? 32 : 34;
          break;
        case 24:
          rate = 425;
          return _context.abrupt("break", 34);
        case 26:
          rate = 475;
          return _context.abrupt("break", 34);
        case 28:
          rate = 525;
          return _context.abrupt("break", 34);
        case 30:
          rate = 575;
          return _context.abrupt("break", 34);
        case 32:
          rate = 650;
          return _context.abrupt("break", 34);
        case 34:
          oneDay = 1000 * 60 * 60 * 24;
          durationInDays = Math.ceil((checkOutDate - checkInDate) / oneDay);
          petPrice = rate * durationInDays;
          totalPrice += petPrice;
        case 38:
          _context.next = 12;
          break;
        case 40:
          _context.next = 45;
          break;
        case 42:
          _context.prev = 42;
          _context.t1 = _context["catch"](10);
          _iterator.e(_context.t1);
        case 45:
          _context.prev = 45;
          _iterator.f();
          return _context.finish(45);
        case 48:
          if (!(missingPets.length < 0)) {
            _context.next = 50;
            break;
          }
          return _context.abrupt("return", res.status(404).send({
            message: "Pets with IDs ".concat(missingPets.join(', '), " not found.")
          }));
        case 50:
          status = 'pending';
          petOwner = PetOwner.findByPk(req.body.petOwnerId);
          if (petOwner.status === "old") {
            'accepted', _readOnlyError("status");
          }
          _context.prev = 53;
          _context.next = 56;
          return Booking.create({
            service_type: 'homeCare',
            petOwnerId: req.body.petOwnerId,
            checkIn: checkIn,
            checkOut: checkOut,
            total_price: totalPrice,
            petList: petList,
            status: status,
            specific_instructions: specificInstructions
          });
        case 56:
          _context.next = 62;
          break;
        case 58:
          _context.prev = 58;
          _context.t2 = _context["catch"](53);
          console.error('Failed to create booking:', _context.t2);
          return _context.abrupt("return", res.status(500).send({
            message: 'Failed to create booking.'
          }));
        case 62:
          res.send({
            message: "Home care booking created successfully! The total price is ".concat(totalPrice)
          });
        case 63:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[10, 42, 45, 48], [53, 58]]);
  }));
  return _createHomeCareBooking.apply(this, arguments);
}
function createErrandsCareBooking(_x3, _x4) {
  return _createErrandsCareBooking.apply(this, arguments);
}
function _createErrandsCareBooking() {
  _createErrandsCareBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, petList, checkIn, checkOut, specificInstructions, checkInDate, checkOutDate, totalPrice, missingPets, _iterator2, _step2, petId, pet, rate, durationInHours, additionalHours, petPrice, status, petOwner;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, petList = _req$body2.petList, checkIn = _req$body2.checkIn, checkOut = _req$body2.checkOut, specificInstructions = _req$body2.specificInstructions;
          checkInDate = new Date(req.body.checkIn);
          checkOutDate = new Date(req.body.checkOut);
          totalPrice = 0;
          if (!(!petList || !petList.length)) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(400).send({
            message: "Please provide one or more pets for the booking."
          }));
        case 6:
          if (!(!(checkInDate instanceof Date) || !(checkOutDate instanceof Date))) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(400).send({
            message: 'Invalid date format. Please provide Date objects.'
          }));
        case 8:
          missingPets = [];
          _iterator2 = _createForOfIteratorHelper(petList);
          _context2.prev = 10;
          _iterator2.s();
        case 12:
          if ((_step2 = _iterator2.n()).done) {
            _context2.next = 34;
            break;
          }
          petId = _step2.value;
          _context2.next = 16;
          return Pet.findByPk(petId);
        case 16:
          pet = _context2.sent;
          if (pet) {
            _context2.next = 20;
            break;
          }
          missingPets.push(petId);
          return _context2.abrupt("continue", 32);
        case 20:
          rate = 0;
          _context2.t0 = pet.size;
          _context2.next = _context2.t0 === 'small' ? 24 : _context2.t0 === 'medium' ? 24 : _context2.t0 === 'large' ? 26 : _context2.t0 === 'extra-large' ? 26 : 28;
          break;
        case 24:
          rate = 175;
          return _context2.abrupt("break", 28);
        case 26:
          rate = 200;
          return _context2.abrupt("break", 28);
        case 28:
          durationInHours = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60));
          additionalHours = 50 * Math.max(0, durationInHours - 4);
          petPrice = rate + additionalHours;
          totalPrice += petPrice;
        case 32:
          _context2.next = 12;
          break;
        case 34:
          _context2.next = 39;
          break;
        case 36:
          _context2.prev = 36;
          _context2.t1 = _context2["catch"](10);
          _iterator2.e(_context2.t1);
        case 39:
          _context2.prev = 39;
          _iterator2.f();
          return _context2.finish(39);
        case 42:
          if (!(missingPets.length < 0)) {
            _context2.next = 44;
            break;
          }
          return _context2.abrupt("return", res.status(404).send({
            message: "Pets with IDs ".concat(missingPets.join(', '), " not found.")
          }));
        case 44:
          status = 'pending';
          petOwner = PetOwner.findByPk(req.body.petOwnerId);
          if (petOwner.status === "old") {
            'accepted', _readOnlyError("status");
          }
          _context2.prev = 47;
          _context2.next = 50;
          return Booking.create({
            service_type: 'errandsCare',
            petOwnerId: req.body.petOwnerId,
            checkIn: checkIn,
            checkOut: checkOut,
            total_price: totalPrice,
            petList: petList,
            status: status,
            specific_instructions: specificInstructions
          });
        case 50:
          _context2.next = 56;
          break;
        case 52:
          _context2.prev = 52;
          _context2.t2 = _context2["catch"](47);
          console.error('Failed to create booking:', _context2.t2);
          return _context2.abrupt("return", res.status(500).send(_context2.t2.message));
        case 56:
          res.send({
            message: "Errands care booking created successfully! The total price is ".concat(totalPrice)
          });
        case 57:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 36, 39, 42], [47, 52]]);
  }));
  return _createErrandsCareBooking.apply(this, arguments);
}
function createDayCareBooking(_x5, _x6) {
  return _createDayCareBooking.apply(this, arguments);
}
function _createDayCareBooking() {
  _createDayCareBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body3, petList, checkIn, checkOut, specificInstructions, checkInDate, checkOutDate, totalPrice, missingPets, _iterator3, _step3, petId, pet, rate, durationInHours, additionalHours, petPrice, status, petOwner;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, petList = _req$body3.petList, checkIn = _req$body3.checkIn, checkOut = _req$body3.checkOut, specificInstructions = _req$body3.specificInstructions;
          checkInDate = new Date(req.body.checkIn);
          checkOutDate = new Date(req.body.checkOut);
          totalPrice = 0;
          if (!(!petList || !petList.length)) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(400).send({
            message: "Please provide one or more pets for the booking."
          }));
        case 6:
          if (!(!(checkInDate instanceof Date) || !(checkOutDate instanceof Date))) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(400).send({
            message: 'Invalid date format. Please provide Date objects.'
          }));
        case 8:
          missingPets = [];
          _iterator3 = _createForOfIteratorHelper(petList);
          _context3.prev = 10;
          _iterator3.s();
        case 12:
          if ((_step3 = _iterator3.n()).done) {
            _context3.next = 34;
            break;
          }
          petId = _step3.value;
          _context3.next = 16;
          return Pet.findByPk(petId);
        case 16:
          pet = _context3.sent;
          if (pet) {
            _context3.next = 20;
            break;
          }
          missingPets.push(petId);
          return _context3.abrupt("continue", 32);
        case 20:
          rate = 0;
          _context3.t0 = pet.size;
          _context3.next = _context3.t0 === 'small' ? 24 : _context3.t0 === 'medium' ? 24 : _context3.t0 === 'large' ? 26 : _context3.t0 === 'extra-large' ? 26 : 28;
          break;
        case 24:
          rate = 250;
          return _context3.abrupt("break", 28);
        case 26:
          rate = 275;
          return _context3.abrupt("break", 28);
        case 28:
          durationInHours = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60));
          additionalHours = 50 * Math.max(0, durationInHours - 10);
          petPrice = rate + additionalHours;
          totalPrice += petPrice;
        case 32:
          _context3.next = 12;
          break;
        case 34:
          _context3.next = 39;
          break;
        case 36:
          _context3.prev = 36;
          _context3.t1 = _context3["catch"](10);
          _iterator3.e(_context3.t1);
        case 39:
          _context3.prev = 39;
          _iterator3.f();
          return _context3.finish(39);
        case 42:
          if (!(missingPets.length > 0)) {
            _context3.next = 44;
            break;
          }
          return _context3.abrupt("return", res.status(404).send({
            message: "Pets with IDs ".concat(missingPets.join(', '), " not found.")
          }));
        case 44:
          status = 'pending';
          petOwner = PetOwner.findByPk(req.body.petOwnerId);
          if (petOwner.status === "old") {
            'accepted', _readOnlyError("status");
          }
          _context3.prev = 47;
          _context3.next = 50;
          return Booking.create({
            service_type: 'dayCare',
            petOwnerId: req.body.petOwnerId,
            checkIn: checkIn,
            checkOut: checkOut,
            total_price: totalPrice,
            petList: petList,
            status: status,
            specific_instructions: specificInstructions
          });
        case 50:
          _context3.next = 56;
          break;
        case 52:
          _context3.prev = 52;
          _context3.t2 = _context3["catch"](47);
          console.error('Failed to create booking:', _context3.t2);
          return _context3.abrupt("return", res.status(500).send({
            message: 'Failed to create booking.'
          }));
        case 56:
          res.send({
            message: "Daycare booking created successfully! The total price is ".concat(totalPrice)
          });
        case 57:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[10, 36, 39, 42], [47, 52]]);
  }));
  return _createDayCareBooking.apply(this, arguments);
}
function getAllBookings(_x7, _x8) {
  return _getAllBookings.apply(this, arguments);
}
function _getAllBookings() {
  _getAllBookings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var bookings;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Booking.findAll();
        case 3:
          bookings = _context4.sent;
          res.send(bookings);
          _context4.next = 11;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error('Failed to fetch bookings:', _context4.t0);
          res.status(500).send({
            message: 'Failed to fetch bookings.'
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _getAllBookings.apply(this, arguments);
}
var getBooking = function getBooking(req, res) {
  Booking.findAll({
    where: {
      petOwnerId: req.params.petOwnerId
    }
  }).then(function (booking) {
    res.send(booking);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message
    });
  });
};
var updateBooking = function updateBooking(req, res) {
  Booking.update({
    status: req.body.status
  }, {
    where: {
      id: req.params.bookingId
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "Booking status was updated successfully."
      });
    } else {
      res.send({
        message: "Cannot update Booking with id=".concat(req.params.bookingId, ". Maybe Booking was not found or req.body is empty!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message
    });
  });
};
function cancelBooking(_x9, _x10) {
  return _cancelBooking.apply(this, arguments);
}
function _cancelBooking() {
  _cancelBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var bookingId, userId, booking;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          bookingId = req.params.bookingId;
          userId = req.params.petOwnerId;
          _context5.prev = 2;
          _context5.next = 5;
          return Booking.findOne({
            where: {
              id: bookingId,
              petOwnerId: userId
            }
          });
        case 5:
          booking = _context5.sent;
          if (booking) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'Booking not found'
          }));
        case 8:
          _context5.next = 10;
          return booking.destroy();
        case 10:
          res.json({
            message: 'Successfully cancelled booking'
          });
          _context5.next = 16;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](2);
          res.send(_context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 13]]);
  }));
  return _cancelBooking.apply(this, arguments);
}
module.exports = {
  createHomeCareBooking: createHomeCareBooking,
  createErrandsCareBooking: createErrandsCareBooking,
  createDayCareBooking: createDayCareBooking,
  getBooking: getBooking,
  updateBooking: updateBooking,
  getAllBookings: getAllBookings,
  cancelBooking: cancelBooking
};