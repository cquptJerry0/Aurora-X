/**
 * @vue/shared v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ls(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const ee = {},
  Rt = [],
  ke = () => {},
  Mo = () => !1,
  en = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ns = (e) => e.startsWith('onUpdate:'),
  he = Object.assign,
  Fs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Io = Object.prototype.hasOwnProperty,
  Q = (e, t) => Io.call(e, t),
  K = Array.isArray,
  Ot = (e) => Ln(e) === '[object Map]',
  Yr = (e) => Ln(e) === '[object Set]',
  q = (e) => typeof e == 'function',
  oe = (e) => typeof e == 'string',
  Ze = (e) => typeof e == 'symbol',
  se = (e) => e !== null && typeof e == 'object',
  zr = (e) => (se(e) || q(e)) && q(e.then) && q(e.catch),
  Jr = Object.prototype.toString,
  Ln = (e) => Jr.call(e),
  Po = (e) => Ln(e).slice(8, -1),
  Qr = (e) => Ln(e) === '[object Object]',
  Hs = (e) =>
    oe(e) &&
    e !== 'NaN' &&
    e[0] !== '-' &&
    '' + parseInt(e, 10) === e,
  Mt = Ls(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Nn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Lo = /-(\w)/g,
  Ne = Nn((e) =>
    e.replace(Lo, (t, n) => (n ? n.toUpperCase() : ''))
  ),
  No = /\B([A-Z])/g,
  ct = Nn((e) => e.replace(No, '-$1').toLowerCase()),
  Fn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  bn = Nn((e) => (e ? `on${Fn(e)}` : '')),
  it = (e, t) => !Object.is(e, t),
  zn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Zr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  Fo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Ho = (e) => {
    const t = oe(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let ir
const Hn = () =>
  ir ||
  (ir =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Ds(e) {
  if (K(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = oe(s) ? Vo(s) : Ds(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (oe(e) || se(e)) return e
}
const Do = /;(?![^(]*\))/g,
  $o = /:([^]+)/,
  jo = /\/\*[^]*?\*\//g
function Vo(e) {
  const t = {}
  return (
    e
      .replace(jo, '')
      .split(Do)
      .forEach((n) => {
        if (n) {
          const s = n.split($o)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function $s(e) {
  let t = ''
  if (oe(e)) t = e
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = $s(e[n])
      s && (t += s + ' ')
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Wo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  ko = Ls(Wo)
function ei(e) {
  return !!e || e === ''
}
const ti = (e) => !!(e && e.__v_isRef === !0),
  Uo = (e) =>
    oe(e)
      ? e
      : e == null
        ? ''
        : K(e) ||
            (se(e) && (e.toString === Jr || !q(e.toString)))
          ? ti(e)
            ? Uo(e.value)
            : JSON.stringify(e, ni, 2)
          : String(e),
  ni = (e, t) =>
    ti(t)
      ? ni(e, t.value)
      : Ot(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Jn(s, i) + ' =>'] = r), n),
              {}
            ),
          }
        : Yr(t)
          ? {
              [`Set(${t.size})`]: [...t.values()].map((n) =>
                Jn(n)
              ),
            }
          : Ze(t)
            ? Jn(t)
            : se(t) && !K(t) && !Qr(t)
              ? String(t)
              : t,
  Jn = (e, t = '') => {
    var n
    return Ze(e)
      ? `Symbol(${(n = e.description) != null ? n : t})`
      : e
  }
/**
 * @vue/reactivity v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ve
class Bo {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = ve),
      !t &&
        ve &&
        (this.index =
          (ve.scopes || (ve.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = ve
      try {
        return (ve = this), t()
      } finally {
        ve = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = ve), (ve = this))
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((ve = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop()
      for (
        this.effects.length = 0, n = 0, s = this.cleanups.length;
        n < s;
        n++
      )
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r),
          (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function si() {
  return ve
}
function Ko(e, t = !1) {
  ve && ve.cleanups.push(e)
}
let ne
const Qn = new WeakSet()
class ri {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ve && ve.active && ve.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65),
      Qn.has(this) && (Qn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) ||
      this.flags & 8 ||
      oi(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), or(this), li(this)
    const t = ne,
      n = He
    ;(ne = this), (He = !0)
    try {
      return this.fn()
    } finally {
      ci(this), (ne = t), (He = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ws(t)
      ;(this.deps = this.depsTail = void 0),
        or(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Qn.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    _s(this) && this.run()
  }
  get dirty() {
    return _s(this)
  }
}
let ii = 0,
  Wt,
  kt
function oi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = kt), (kt = e)
    return
  }
  ;(e.next = Wt), (Wt = e)
}
function js() {
  ii++
}
function Vs() {
  if (--ii > 0) return
  if (kt) {
    let t = kt
    for (kt = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; Wt; ) {
    let t = Wt
    for (Wt = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function li(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function ci(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1
      ? (s === n && (n = r), Ws(s), qo(s))
      : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function _s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed &&
        (ai(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function ai(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === qt) ||
    ((e.globalVersion = qt),
    !e.isSSR &&
      e.flags & 128 &&
      ((!e.deps && !e._dirty) || !_s(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = ne,
    s = He
  ;(ne = e), (He = !0)
  try {
    li(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || it(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(ne = n), (He = s), ci(e), (e.flags &= -3)
  }
}
function Ws(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) Ws(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function qo(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let He = !0
const fi = []
function Ye() {
  fi.push(He), (He = !1)
}
function ze() {
  const e = fi.pop()
  He = e === void 0 ? !0 : e
}
function or(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = ne
    ne = void 0
    try {
      t()
    } finally {
      ne = n
    }
  }
}
let qt = 0
class Go {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class Dn {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!ne || !He || ne === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ne)
      (n = this.activeLink = new Go(ne, this)),
        ne.deps
          ? ((n.prevDep = ne.depsTail),
            (ne.depsTail.nextDep = n),
            (ne.depsTail = n))
          : (ne.deps = ne.depsTail = n),
        ui(n)
    else if (
      n.version === -1 &&
      ((n.version = this.version), n.nextDep)
    ) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ne.depsTail),
        (n.nextDep = void 0),
        (ne.depsTail.nextDep = n),
        (ne.depsTail = n),
        ne.deps === n && (ne.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, qt++, this.notify(t)
  }
  notify(t) {
    js()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      Vs()
    }
  }
}
function ui(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) ui(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)),
      (e.dep.subs = e)
  }
}
const Tn = new WeakMap(),
  gt = Symbol(''),
  ws = Symbol(''),
  Gt = Symbol('')
function be(e, t, n) {
  if (He && ne) {
    let s = Tn.get(e)
    s || Tn.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Dn())), (r.map = s), (r.key = n)),
      r.track()
  }
}
function Ge(e, t, n, s, r, i) {
  const o = Tn.get(e)
  if (!o) {
    qt++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((js(), t === 'clear')) o.forEach(l)
  else {
    const c = K(e),
      f = c && Hs(n)
    if (c && n === 'length') {
      const a = Number(s)
      o.forEach((h, v) => {
        ;(v === 'length' || v === Gt || (!Ze(v) && v >= a)) &&
          l(h)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)),
        f && l(o.get(Gt)),
        t)
      ) {
        case 'add':
          c
            ? f && l(o.get('length'))
            : (l(o.get(gt)), Ot(e) && l(o.get(ws)))
          break
        case 'delete':
          c || (l(o.get(gt)), Ot(e) && l(o.get(ws)))
          break
        case 'set':
          Ot(e) && l(o.get(gt))
          break
      }
  }
  Vs()
}
function Xo(e, t) {
  const n = Tn.get(e)
  return n && n.get(t)
}
function Tt(e) {
  const t = J(e)
  return t === e
    ? t
    : (be(t, 'iterate', Gt), Ie(e) ? t : t.map(pe))
}
function $n(e) {
  return be((e = J(e)), 'iterate', Gt), e
}
const Yo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zn(this, Symbol.iterator, pe)
  },
  concat(...e) {
    return Tt(this).concat(...e.map((t) => (K(t) ? Tt(t) : t)))
  },
  entries() {
    return Zn(this, 'entries', (e) => ((e[1] = pe(e[1])), e))
  },
  every(e, t) {
    return Be(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Be(this, 'filter', e, t, (n) => n.map(pe), arguments)
  },
  find(e, t) {
    return Be(this, 'find', e, t, pe, arguments)
  },
  findIndex(e, t) {
    return Be(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Be(this, 'findLast', e, t, pe, arguments)
  },
  findLastIndex(e, t) {
    return Be(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Be(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return es(this, 'includes', e)
  },
  indexOf(...e) {
    return es(this, 'indexOf', e)
  },
  join(e) {
    return Tt(this).join(e)
  },
  lastIndexOf(...e) {
    return es(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Be(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Dt(this, 'pop')
  },
  push(...e) {
    return Dt(this, 'push', e)
  },
  reduce(e, ...t) {
    return lr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return lr(this, 'reduceRight', e, t)
  },
  shift() {
    return Dt(this, 'shift')
  },
  some(e, t) {
    return Be(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Dt(this, 'splice', e)
  },
  toReversed() {
    return Tt(this).toReversed()
  },
  toSorted(e) {
    return Tt(this).toSorted(e)
  },
  toSpliced(...e) {
    return Tt(this).toSpliced(...e)
  },
  unshift(...e) {
    return Dt(this, 'unshift', e)
  },
  values() {
    return Zn(this, 'values', pe)
  },
}
function Zn(e, t, n) {
  const s = $n(e),
    r = s[t]()
  return (
    s !== e &&
      !Ie(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const zo = Array.prototype
function Be(e, t, n, s, r, i) {
  const o = $n(e),
    l = o !== e && !Ie(e),
    c = o[t]
  if (c !== zo[t]) {
    const h = c.apply(e, i)
    return l ? pe(h) : h
  }
  let f = n
  o !== e &&
    (l
      ? (f = function (h, v) {
          return n.call(this, pe(h), v, e)
        })
      : n.length > 2 &&
        (f = function (h, v) {
          return n.call(this, h, v, e)
        }))
  const a = c.call(o, f, s)
  return l && r ? r(a) : a
}
function lr(e, t, n, s) {
  const r = $n(e)
  let i = n
  return (
    r !== e &&
      (Ie(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, pe(l), c, e)
          })),
    r[t](i, ...s)
  )
}
function es(e, t, n) {
  const s = J(e)
  be(s, 'iterate', Gt)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Bs(n[0])
    ? ((n[0] = J(n[0])), s[t](...n))
    : r
}
function Dt(e, t, n = []) {
  Ye(), js()
  const s = J(e)[t].apply(e, n)
  return Vs(), ze(), s
}
const Jo = Ls('__proto__,__v_isRef,__isVue'),
  di = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ze)
  )
function Qo(e) {
  Ze(e) || (e = String(e))
  const t = J(this)
  return be(t, 'has', e), t.hasOwnProperty(e)
}
class hi {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? cl : vi) : i ? mi : gi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = K(t)
    if (!r) {
      let c
      if (o && (c = Yo[n])) return c
      if (n === 'hasOwnProperty') return Qo
    }
    const l = Reflect.get(t, n, de(t) ? t : s)
    return (Ze(n) ? di.has(n) : Jo(n)) ||
      (r || be(t, 'get', n), i)
      ? l
      : de(l)
        ? o && Hs(n)
          ? l
          : l.value
        : se(l)
          ? r
            ? jn(l)
            : Pt(l)
          : l
  }
}
class pi extends hi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const c = ot(i)
      if (
        (!Ie(s) && !ot(s) && ((i = J(i)), (s = J(s))),
        !K(t) && de(i) && !de(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = K(t) && Hs(n) ? Number(n) < t.length : Q(t, n),
      l = Reflect.set(t, n, s, de(t) ? t : r)
    return (
      t === J(r) &&
        (o
          ? it(s, i) && Ge(t, 'set', n, s)
          : Ge(t, 'add', n, s)),
      l
    )
  }
  deleteProperty(t, n) {
    const s = Q(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && Ge(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Ze(n) || !di.has(n)) && be(t, 'has', n), s
  }
  ownKeys(t) {
    return (
      be(t, 'iterate', K(t) ? 'length' : gt), Reflect.ownKeys(t)
    )
  }
}
class Zo extends hi {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const el = new pi(),
  tl = new Zo(),
  nl = new pi(!0)
const Ss = (e) => e,
  an = (e) => Reflect.getPrototypeOf(e)
function sl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = J(r),
      o = Ot(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      f = r[e](...s),
      a = n ? Ss : t ? En : pe
    return (
      !t && be(i, 'iterate', c ? ws : gt),
      {
        next() {
          const { value: h, done: v } = f.next()
          return v
            ? { value: h, done: v }
            : { value: l ? [a(h[0]), a(h[1])] : a(h), done: v }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function fn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function rl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      e || (it(r, l) && be(o, 'get', r), be(o, 'get', l))
      const { has: c } = an(o),
        f = t ? Ss : e ? En : pe
      if (c.call(o, r)) return f(i.get(r))
      if (c.call(o, l)) return f(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return (
        !e && be(J(r), 'iterate', gt), Reflect.get(r, 'size', r)
      )
    },
    has(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r)
      return (
        e || (it(r, l) && be(o, 'has', r), be(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = J(l),
        f = t ? Ss : e ? En : pe
      return (
        !e && be(c, 'iterate', gt),
        l.forEach((a, h) => r.call(i, f(a), f(h), o))
      )
    },
  }
  return (
    he(
      n,
      e
        ? {
            add: fn('add'),
            set: fn('set'),
            delete: fn('delete'),
            clear: fn('clear'),
          }
        : {
            add(r) {
              !t && !Ie(r) && !ot(r) && (r = J(r))
              const i = J(this)
              return (
                an(i).has.call(i, r) ||
                  (i.add(r), Ge(i, 'add', r, r)),
                this
              )
            },
            set(r, i) {
              !t && !Ie(i) && !ot(i) && (i = J(i))
              const o = J(this),
                { has: l, get: c } = an(o)
              let f = l.call(o, r)
              f || ((r = J(r)), (f = l.call(o, r)))
              const a = c.call(o, r)
              return (
                o.set(r, i),
                f
                  ? it(i, a) && Ge(o, 'set', r, i)
                  : Ge(o, 'add', r, i),
                this
              )
            },
            delete(r) {
              const i = J(this),
                { has: o, get: l } = an(i)
              let c = o.call(i, r)
              c || ((r = J(r)), (c = o.call(i, r))),
                l && l.call(i, r)
              const f = i.delete(r)
              return c && Ge(i, 'delete', r, void 0), f
            },
            clear() {
              const r = J(this),
                i = r.size !== 0,
                o = r.clear()
              return i && Ge(r, 'clear', void 0, void 0), o
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach(
      (r) => {
        n[r] = sl(r, e, t)
      }
    ),
    n
  )
}
function ks(e, t) {
  const n = rl(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(Q(n, r) && r in s ? n : s, r, i)
}
const il = { get: ks(!1, !1) },
  ol = { get: ks(!1, !0) },
  ll = { get: ks(!0, !1) }
const gi = new WeakMap(),
  mi = new WeakMap(),
  vi = new WeakMap(),
  cl = new WeakMap()
function al(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function fl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : al(Po(e))
}
function Pt(e) {
  return ot(e) ? e : Us(e, !1, el, il, gi)
}
function ul(e) {
  return Us(e, !1, nl, ol, mi)
}
function jn(e) {
  return Us(e, !0, tl, ll, vi)
}
function Us(e, t, n, s, r) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = fl(e)
  if (i === 0) return e
  const o = r.get(e)
  if (o) return o
  const l = new Proxy(e, i === 2 ? s : n)
  return r.set(e, l), l
}
function mt(e) {
  return ot(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ot(e) {
  return !!(e && e.__v_isReadonly)
}
function Ie(e) {
  return !!(e && e.__v_isShallow)
}
function Bs(e) {
  return e ? !!e.__v_raw : !1
}
function J(e) {
  const t = e && e.__v_raw
  return t ? J(t) : e
}
function _n(e) {
  return (
    !Q(e, '__v_skip') &&
      Object.isExtensible(e) &&
      Zr(e, '__v_skip', !0),
    e
  )
}
const pe = (e) => (se(e) ? Pt(e) : e),
  En = (e) => (se(e) ? jn(e) : e)
function de(e) {
  return e ? e.__v_isRef === !0 : !1
}
function Ue(e) {
  return yi(e, !1)
}
function Pe(e) {
  return yi(e, !0)
}
function yi(e, t) {
  return de(e) ? e : new dl(e, t)
}
class dl {
  constructor(t, n) {
    ;(this.dep = new Dn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : pe(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ie(t) || ot(t)
    ;(t = s ? t : J(t)),
      it(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : pe(t)),
        this.dep.trigger())
  }
}
function Ks(e) {
  return de(e) ? e.value : e
}
function le(e) {
  return q(e) ? e() : Ks(e)
}
const hl = {
  get: (e, t, n) =>
    t === '__v_raw' ? e : Ks(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return de(r) && !de(n)
      ? ((r.value = n), !0)
      : Reflect.set(e, t, n, s)
  },
}
function bi(e) {
  return mt(e) ? e : new Proxy(e, hl)
}
class pl {
  constructor(t) {
    ;(this.__v_isRef = !0), (this._value = void 0)
    const n = (this.dep = new Dn()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n))
    ;(this._get = s), (this._set = r)
  }
  get value() {
    return (this._value = this._get())
  }
  set value(t) {
    this._set(t)
  }
}
function gl(e) {
  return new pl(e)
}
class ml {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Xo(J(this._object), this._key)
  }
}
class vl {
  constructor(t) {
    ;(this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function yl(e, t, n) {
  return de(e)
    ? e
    : q(e)
      ? new vl(e)
      : se(e) && arguments.length > 1
        ? bl(e, t, n)
        : Ue(e)
}
function bl(e, t, n) {
  const s = e[t]
  return de(s) ? s : new ml(e, t, n)
}
class _l {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Dn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = qt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ne !== this))
      return oi(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return (
      ai(this), t && (t.version = this.dep.version), this._value
    )
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function wl(e, t, n = !1) {
  let s, r
  return (
    q(e) ? (s = e) : ((s = e.get), (r = e.set)), new _l(s, r, n)
  )
}
const un = {},
  Cn = new WeakMap()
let ht
function Sl(e, t = !1, n = ht) {
  if (n) {
    let s = Cn.get(n)
    s || Cn.set(n, (s = [])), s.push(e)
  }
}
function xl(e, t, n = ee) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    f = (g) =>
      r ? g : Ie(g) || r === !1 || r === 0 ? Xe(g, 1) : Xe(g)
  let a,
    h,
    v,
    y,
    x = !1,
    _ = !1
  if (
    (de(e)
      ? ((h = () => e.value), (x = Ie(e)))
      : mt(e)
        ? ((h = () => f(e)), (x = !0))
        : K(e)
          ? ((_ = !0),
            (x = e.some((g) => mt(g) || Ie(g))),
            (h = () =>
              e.map((g) => {
                if (de(g)) return g.value
                if (mt(g)) return f(g)
                if (q(g)) return c ? c(g, 2) : g()
              })))
          : q(e)
            ? t
              ? (h = c ? () => c(e, 2) : e)
              : (h = () => {
                  if (v) {
                    Ye()
                    try {
                      v()
                    } finally {
                      ze()
                    }
                  }
                  const g = ht
                  ht = a
                  try {
                    return c ? c(e, 3, [y]) : e(y)
                  } finally {
                    ht = g
                  }
                })
            : (h = ke),
    t && r)
  ) {
    const g = h,
      I = r === !0 ? 1 / 0 : r
    h = () => Xe(g(), I)
  }
  const V = si(),
    L = () => {
      a.stop(), V && V.active && Fs(V.effects, a)
    }
  if (i && t) {
    const g = t
    t = (...I) => {
      g(...I), L()
    }
  }
  let D = _ ? new Array(e.length).fill(un) : un
  const p = (g) => {
    if (!(!(a.flags & 1) || (!a.dirty && !g)))
      if (t) {
        const I = a.run()
        if (
          r ||
          x ||
          (_ ? I.some((k, O) => it(k, D[O])) : it(I, D))
        ) {
          v && v()
          const k = ht
          ht = a
          try {
            const O = [
              I,
              D === un ? void 0 : _ && D[0] === un ? [] : D,
              y,
            ]
            c ? c(t, 3, O) : t(...O), (D = I)
          } finally {
            ht = k
          }
        }
      } else a.run()
  }
  return (
    l && l(p),
    (a = new ri(h)),
    (a.scheduler = o ? () => o(p, !1) : p),
    (y = (g) => Sl(g, !1, a)),
    (v = a.onStop =
      () => {
        const g = Cn.get(a)
        if (g) {
          if (c) c(g, 4)
          else for (const I of g) I()
          Cn.delete(a)
        }
      }),
    t
      ? s
        ? p(!0)
        : (D = a.run())
      : o
        ? o(p.bind(null, !0), !0)
        : a.run(),
    (L.pause = a.pause.bind(a)),
    (L.resume = a.resume.bind(a)),
    (L.stop = L),
    L
  )
}
function Xe(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !se(e) ||
    e.__v_skip ||
    ((n = n || new Set()), n.has(e))
  )
    return e
  if ((n.add(e), t--, de(e))) Xe(e.value, t, n)
  else if (K(e))
    for (let s = 0; s < e.length; s++) Xe(e[s], t, n)
  else if (Yr(e) || Ot(e))
    e.forEach((s) => {
      Xe(s, t, n)
    })
  else if (Qr(e)) {
    for (const s in e) Xe(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) &&
        Xe(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function tn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    nn(r, t, n)
  }
}
function De(e, t, n, s) {
  if (q(e)) {
    const r = tn(e, t, n, s)
    return (
      r &&
        zr(r) &&
        r.catch((i) => {
          nn(i, t, n)
        }),
      r
    )
  }
  if (K(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(De(e[i], t, n, s))
    return r
  }
}
function nn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || ee
  if (t) {
    let l = t.parent
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const a = l.ec
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, c, f) === !1) return
      }
      l = l.parent
    }
    if (i) {
      Ye(), tn(i, null, 10, [e, c, f]), ze()
      return
    }
  }
  Tl(e, n, r, s, o)
}
function Tl(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const we = []
let Ve = -1
const It = []
let nt = null,
  Ct = 0
const _i = Promise.resolve()
let An = null
function Vn(e) {
  const t = An || _i
  return e ? t.then(this ? e.bind(this) : e) : t
}
function El(e) {
  let t = Ve + 1,
    n = we.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = we[s],
      i = Xt(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function qs(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e),
      n = we[we.length - 1]
    !n || (!(e.flags & 2) && t >= Xt(n))
      ? we.push(e)
      : we.splice(El(t), 0, e),
      (e.flags |= 1),
      wi()
  }
}
function wi() {
  An || (An = _i.then(Si))
}
function Cl(e) {
  K(e)
    ? It.push(...e)
    : nt && e.id === -1
      ? nt.splice(Ct + 1, 0, e)
      : e.flags & 1 || (It.push(e), (e.flags |= 1)),
    wi()
}
function cr(e, t, n = Ve + 1) {
  for (; n < we.length; n++) {
    const s = we[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      we.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function Rn(e) {
  if (It.length) {
    const t = [...new Set(It)].sort((n, s) => Xt(n) - Xt(s))
    if (((It.length = 0), nt)) {
      nt.push(...t)
      return
    }
    for (nt = t, Ct = 0; Ct < nt.length; Ct++) {
      const n = nt[Ct]
      n.flags & 4 && (n.flags &= -2),
        n.flags & 8 || n(),
        (n.flags &= -2)
    }
    ;(nt = null), (Ct = 0)
  }
}
const Xt = (e) =>
  e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id
function Si(e) {
  try {
    for (Ve = 0; Ve < we.length; Ve++) {
      const t = we[Ve]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        tn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ve < we.length; Ve++) {
      const t = we[Ve]
      t && (t.flags &= -2)
    }
    ;(Ve = -1),
      (we.length = 0),
      Rn(),
      (An = null),
      (we.length || It.length) && Si()
  }
}
let ue = null,
  xi = null
function On(e) {
  const t = ue
  return (ue = e), (xi = (e && e.type.__scopeId) || null), t
}
function Al(e, t = ue, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && _r(-1)
    const i = On(t)
    let o
    try {
      o = e(...r)
    } finally {
      On(i), s._d && _r(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function hf(e, t) {
  if (ue === null) return e
  const n = Kn(ue),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r]
    i &&
      (q(i) && (i = { mounted: i, updated: i }),
      i.deep && Xe(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }))
  }
  return e
}
function We(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (Ye(), De(c, n, 8, [e.el, l, e, t]), ze())
  }
}
const Rl = Symbol('_vte'),
  Ti = (e) => e.__isTeleport,
  st = Symbol('_leaveCb'),
  dn = Symbol('_enterCb')
function Ol() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Nt(() => {
      e.isMounted = !0
    }),
    Ii(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Re = [Function, Array],
  Ei = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Re,
    onEnter: Re,
    onAfterEnter: Re,
    onEnterCancelled: Re,
    onBeforeLeave: Re,
    onLeave: Re,
    onAfterLeave: Re,
    onLeaveCancelled: Re,
    onBeforeAppear: Re,
    onAppear: Re,
    onAfterAppear: Re,
    onAppearCancelled: Re,
  },
  Ci = (e) => {
    const t = e.subTree
    return t.component ? Ci(t.component) : t
  },
  Ml = {
    name: 'BaseTransition',
    props: Ei,
    setup(e, { slots: t }) {
      const n = rn(),
        s = Ol()
      return () => {
        const r = t.default && Oi(t.default(), !0)
        if (!r || !r.length) return
        const i = Ai(r),
          o = J(e),
          { mode: l } = o
        if (s.isLeaving) return ts(i)
        const c = ar(i)
        if (!c) return ts(i)
        let f = xs(c, o, s, n, (h) => (f = h))
        c.type !== ge && Yt(c, f)
        let a = n.subTree && ar(n.subTree)
        if (
          a &&
          a.type !== ge &&
          !pt(c, a) &&
          Ci(n).type !== ge
        ) {
          let h = xs(a, o, s, n)
          if ((Yt(a, h), l === 'out-in' && c.type !== ge))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete h.afterLeave,
                  (a = void 0)
              }),
              ts(i)
            )
          l === 'in-out' && c.type !== ge
            ? (h.delayLeave = (v, y, x) => {
                const _ = Ri(s, a)
                ;(_[String(a.key)] = a),
                  (v[st] = () => {
                    y(),
                      (v[st] = void 0),
                      delete f.delayedLeave,
                      (a = void 0)
                  }),
                  (f.delayedLeave = () => {
                    x(), delete f.delayedLeave, (a = void 0)
                  })
              })
            : (a = void 0)
        } else a && (a = void 0)
        return i
      }
    },
  }
function Ai(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ge) {
        t = n
        break
      }
  }
  return t
}
const Il = Ml
function Ri(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function xs(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: f,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: v,
      onLeave: y,
      onAfterLeave: x,
      onLeaveCancelled: _,
      onBeforeAppear: V,
      onAppear: L,
      onAfterAppear: D,
      onAppearCancelled: p,
    } = t,
    g = String(e.key),
    I = Ri(n, e),
    k = (C, P) => {
      C && De(C, s, 9, P)
    },
    O = (C, P) => {
      const A = P[1]
      k(C, P),
        K(C)
          ? C.every((b) => b.length <= 1) && A()
          : C.length <= 1 && A()
    },
    B = {
      mode: o,
      persisted: l,
      beforeEnter(C) {
        let P = c
        if (!n.isMounted)
          if (i) P = V || c
          else return
        C[st] && C[st](!0)
        const A = I[g]
        A && pt(e, A) && A.el[st] && A.el[st](), k(P, [C])
      },
      enter(C) {
        let P = f,
          A = a,
          b = h
        if (!n.isMounted)
          if (i) (P = L || f), (A = D || a), (b = p || h)
          else return
        let F = !1
        const Y = (C[dn] = (re) => {
          F ||
            ((F = !0),
            re ? k(b, [C]) : k(A, [C]),
            B.delayedLeave && B.delayedLeave(),
            (C[dn] = void 0))
        })
        P ? O(P, [C, Y]) : Y()
      },
      leave(C, P) {
        const A = String(e.key)
        if ((C[dn] && C[dn](!0), n.isUnmounting)) return P()
        k(v, [C])
        let b = !1
        const F = (C[st] = (Y) => {
          b ||
            ((b = !0),
            P(),
            Y ? k(_, [C]) : k(x, [C]),
            (C[st] = void 0),
            I[A] === e && delete I[A])
        })
        ;(I[A] = e), y ? O(y, [C, F]) : F()
      },
      clone(C) {
        const P = xs(C, t, n, s, r)
        return r && r(P), P
      },
    }
  return B
}
function ts(e) {
  if (sn(e)) return (e = lt(e)), (e.children = null), e
}
function ar(e) {
  if (!sn(e))
    return Ti(e.type) && e.children ? Ai(e.children) : e
  if (e.component) return e.component.subTree
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && q(n.default)) return n.default()
  }
}
function Yt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Yt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Oi(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l =
      n == null
        ? o.key
        : String(n) + String(o.key != null ? o.key : i)
    o.type === Se
      ? (o.patchFlag & 128 && r++,
        (s = s.concat(Oi(o.children, t, l))))
      : (t || o.type !== ge) &&
        s.push(l != null ? lt(o, { key: l }) : o)
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Gs(e, t) {
  return q(e) ? he({ name: e.name }, t, { setup: e }) : e
}
function Xs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function zt(e, t, n, s, r = !1) {
  if (K(e)) {
    e.forEach((x, _) => zt(x, t && (K(t) ? t[_] : t), n, s, r))
    return
  }
  if (vt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      zt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? Kn(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    f = t && t.r,
    a = l.refs === ee ? (l.refs = {}) : l.refs,
    h = l.setupState,
    v = J(h),
    y = h === ee ? () => !1 : (x) => Q(v, x)
  if (
    (f != null &&
      f !== c &&
      (oe(f)
        ? ((a[f] = null), y(f) && (h[f] = null))
        : de(f) && (f.value = null)),
    q(c))
  )
    tn(c, l, 12, [o, a])
  else {
    const x = oe(c),
      _ = de(c)
    if (x || _) {
      const V = () => {
        if (e.f) {
          const L = x ? (y(c) ? h[c] : a[c]) : c.value
          r
            ? K(L) && Fs(L, i)
            : K(L)
              ? L.includes(i) || L.push(i)
              : x
                ? ((a[c] = [i]), y(c) && (h[c] = a[c]))
                : ((c.value = [i]), e.k && (a[e.k] = c.value))
        } else
          x
            ? ((a[c] = o), y(c) && (h[c] = o))
            : _ && ((c.value = o), e.k && (a[e.k] = o))
      }
      o ? ((V.id = -1), Ce(V, n)) : V()
    }
  }
}
let fr = !1
const Et = () => {
    fr ||
      (console.error(
        'Hydration completed but contains mismatches.'
      ),
      (fr = !0))
  },
  Pl = (e) =>
    e.namespaceURI.includes('svg') &&
    e.tagName !== 'foreignObject',
  Ll = (e) => e.namespaceURI.includes('MathML'),
  hn = (e) => {
    if (e.nodeType === 1) {
      if (Pl(e)) return 'svg'
      if (Ll(e)) return 'mathml'
    }
  },
  At = (e) => e.nodeType === 8
function Nl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: f,
      },
    } = e,
    a = (p, g) => {
      if (!g.hasChildNodes()) {
        n(null, p, g), Rn(), (g._vnode = p)
        return
      }
      h(g.firstChild, p, null, null, null), Rn(), (g._vnode = p)
    },
    h = (p, g, I, k, O, B = !1) => {
      B = B || !!g.dynamicChildren
      const C = At(p) && p.data === '[',
        P = () => _(p, g, I, k, O, C),
        { type: A, ref: b, shapeFlag: F, patchFlag: Y } = g
      let re = p.nodeType
      ;(g.el = p),
        Y === -2 && ((B = !1), (g.dynamicChildren = null))
      let W = null
      switch (A) {
        case _t:
          re !== 3
            ? g.children === ''
              ? (c((g.el = r('')), o(p), p), (W = p))
              : (W = P())
            : (p.data !== g.children &&
                (Et(), (p.data = g.children)),
              (W = i(p)))
          break
        case ge:
          D(p)
            ? ((W = i(p)),
              L((g.el = p.content.firstChild), p, I))
            : re !== 8 || C
              ? (W = P())
              : (W = i(p))
          break
        case Bt:
          if (
            (C && ((p = i(p)), (re = p.nodeType)),
            re === 1 || re === 3)
          ) {
            W = p
            const X = !g.children.length
            for (let $ = 0; $ < g.staticCount; $++)
              X &&
                (g.children +=
                  W.nodeType === 1 ? W.outerHTML : W.data),
                $ === g.staticCount - 1 && (g.anchor = W),
                (W = i(W))
            return C ? i(W) : W
          } else P()
          break
        case Se:
          C ? (W = x(p, g, I, k, O, B)) : (W = P())
          break
        default:
          if (F & 1)
            (re !== 1 ||
              g.type.toLowerCase() !==
                p.tagName.toLowerCase()) &&
            !D(p)
              ? (W = P())
              : (W = v(p, g, I, k, O, B))
          else if (F & 6) {
            g.slotScopeIds = O
            const X = o(p)
            if (
              (C
                ? (W = V(p))
                : At(p) && p.data === 'teleport start'
                  ? (W = V(p, p.data, 'teleport end'))
                  : (W = i(p)),
              t(g, X, null, I, k, hn(X), B),
              vt(g) && !g.type.__asyncResolved)
            ) {
              let $
              C
                ? (($ = ce(Se)),
                  ($.anchor = W
                    ? W.previousSibling
                    : X.lastChild))
                : ($ = p.nodeType === 3 ? oo('') : ce('div')),
                ($.el = p),
                (g.component.subTree = $)
            }
          } else
            F & 64
              ? re !== 8
                ? (W = P())
                : (W = g.type.hydrate(p, g, I, k, O, B, e, y))
              : F & 128 &&
                (W = g.type.hydrate(
                  p,
                  g,
                  I,
                  k,
                  hn(o(p)),
                  O,
                  B,
                  e,
                  h
                ))
      }
      return b != null && zt(b, null, k, g), W
    },
    v = (p, g, I, k, O, B) => {
      B = B || !!g.dynamicChildren
      const {
          type: C,
          props: P,
          patchFlag: A,
          shapeFlag: b,
          dirs: F,
          transition: Y,
        } = g,
        re = C === 'input' || C === 'option'
      if (re || A !== -1) {
        F && We(g, null, I, 'created')
        let W = !1
        if (D(p)) {
          W =
            Xi(null, Y) &&
            I &&
            I.vnode.props &&
            I.vnode.props.appear
          const $ = p.content.firstChild
          W && Y.beforeEnter($), L($, p, I), (g.el = p = $)
        }
        if (b & 16 && !(P && (P.innerHTML || P.textContent))) {
          let $ = y(p.firstChild, g, p, I, k, O, B)
          for (; $; ) {
            pn(p, 1) || Et()
            const ae = $
            ;($ = $.nextSibling), l(ae)
          }
        } else if (b & 8) {
          let $ = g.children
          $[0] ===
            `
` &&
            (p.tagName === 'PRE' || p.tagName === 'TEXTAREA') &&
            ($ = $.slice(1)),
            p.textContent !== $ &&
              (pn(p, 0) || Et(), (p.textContent = g.children))
        }
        if (P) {
          if (re || !B || A & 48) {
            const $ = p.tagName.includes('-')
            for (const ae in P)
              ((re &&
                (ae.endsWith('value') ||
                  ae === 'indeterminate')) ||
                (en(ae) && !Mt(ae)) ||
                ae[0] === '.' ||
                $) &&
                s(p, ae, null, P[ae], void 0, I)
          } else if (P.onClick)
            s(p, 'onClick', null, P.onClick, void 0, I)
          else if (A & 4 && mt(P.style))
            for (const $ in P.style) P.style[$]
        }
        let X
        ;(X = P && P.onVnodeBeforeMount) && Oe(X, I, g),
          F && We(g, null, I, 'beforeMount'),
          ((X = P && P.onVnodeMounted) || F || W) &&
            no(() => {
              X && Oe(X, I, g),
                W && Y.enter(p),
                F && We(g, null, I, 'mounted')
            }, k)
      }
      return p.nextSibling
    },
    y = (p, g, I, k, O, B, C) => {
      C = C || !!g.dynamicChildren
      const P = g.children,
        A = P.length
      for (let b = 0; b < A; b++) {
        const F = C ? P[b] : (P[b] = Me(P[b])),
          Y = F.type === _t
        p
          ? (Y &&
              !C &&
              b + 1 < A &&
              Me(P[b + 1]).type === _t &&
              (c(r(p.data.slice(F.children.length)), I, i(p)),
              (p.data = F.children)),
            (p = h(p, F, k, O, B, C)))
          : Y && !F.children
            ? c((F.el = r('')), I)
            : (pn(I, 1) || Et(),
              n(null, F, I, null, k, O, hn(I), B))
      }
      return p
    },
    x = (p, g, I, k, O, B) => {
      const { slotScopeIds: C } = g
      C && (O = O ? O.concat(C) : C)
      const P = o(p),
        A = y(i(p), g, P, I, k, O, B)
      return A && At(A) && A.data === ']'
        ? i((g.anchor = A))
        : (Et(), c((g.anchor = f(']')), P, A), A)
    },
    _ = (p, g, I, k, O, B) => {
      if ((pn(p.parentElement, 1) || Et(), (g.el = null), B)) {
        const A = V(p)
        for (;;) {
          const b = i(p)
          if (b && b !== A) l(b)
          else break
        }
      }
      const C = i(p),
        P = o(p)
      return (
        l(p),
        n(null, g, P, C, I, k, hn(P), O),
        I && ((I.vnode.el = g.el), eo(I, g.el)),
        C
      )
    },
    V = (p, g = '[', I = ']') => {
      let k = 0
      for (; p; )
        if (
          ((p = i(p)),
          p && At(p) && (p.data === g && k++, p.data === I))
        ) {
          if (k === 0) return i(p)
          k--
        }
      return p
    },
    L = (p, g, I) => {
      const k = g.parentNode
      k && k.replaceChild(p, g)
      let O = I
      for (; O; )
        O.vnode.el === g && (O.vnode.el = O.subTree.el = p),
          (O = O.parent)
    },
    D = (p) => p.nodeType === 1 && p.tagName === 'TEMPLATE'
  return [a, h]
}
const ur = 'data-allow-mismatch',
  Fl = {
    0: 'text',
    1: 'children',
    2: 'class',
    3: 'style',
    4: 'attribute',
  }
function pn(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(ur); ) e = e.parentElement
  const n = e && e.getAttribute(ur)
  if (n == null) return !1
  if (n === '') return !0
  {
    const s = n.split(',')
    return t === 0 && s.includes('children')
      ? !0
      : n.split(',').includes(Fl[t])
  }
}
Hn().requestIdleCallback
Hn().cancelIdleCallback
function Hl(e, t) {
  if (At(e) && e.data === '[') {
    let n = 1,
      s = e.nextSibling
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1) break
      } else if (At(s))
        if (s.data === ']') {
          if (--n === 0) break
        } else s.data === '[' && n++
      s = s.nextSibling
    }
  } else t(e)
}
const vt = (e) => !!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */ function pf(e) {
  q(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    hydrate: i,
    timeout: o,
    suspensible: l = !0,
    onError: c,
  } = e
  let f = null,
    a,
    h = 0
  const v = () => (h++, (f = null), y()),
    y = () => {
      let x
      return (
        f ||
        (x = f =
          t()
            .catch((_) => {
              if (
                ((_ =
                  _ instanceof Error ? _ : new Error(String(_))),
                c)
              )
                return new Promise((V, L) => {
                  c(
                    _,
                    () => V(v()),
                    () => L(_),
                    h + 1
                  )
                })
              throw _
            })
            .then((_) =>
              x !== f && f
                ? f
                : (_ &&
                    (_.__esModule ||
                      _[Symbol.toStringTag] === 'Module') &&
                    (_ = _.default),
                  (a = _),
                  _)
            ))
      )
    }
  return Gs({
    name: 'AsyncComponentWrapper',
    __asyncLoader: y,
    __asyncHydrate(x, _, V) {
      const L = i
        ? () => {
            const D = i(V, (p) => Hl(x, p))
            D && (_.bum || (_.bum = [])).push(D)
          }
        : V
      a ? L() : y().then(() => !_.isUnmounted && L())
    },
    get __asyncResolved() {
      return a
    },
    setup() {
      const x = fe
      if ((Xs(x), a)) return () => ns(a, x)
      const _ = (p) => {
        ;(f = null), nn(p, x, 13, !s)
      }
      if ((l && x.suspense) || Lt)
        return y()
          .then((p) => () => ns(p, x))
          .catch(
            (p) => (_(p), () => (s ? ce(s, { error: p }) : null))
          )
      const V = Ue(!1),
        L = Ue(),
        D = Ue(!!r)
      return (
        r &&
          setTimeout(() => {
            D.value = !1
          }, r),
        o != null &&
          setTimeout(() => {
            if (!V.value && !L.value) {
              const p = new Error(
                `Async component timed out after ${o}ms.`
              )
              _(p), (L.value = p)
            }
          }, o),
        y()
          .then(() => {
            ;(V.value = !0),
              x.parent && sn(x.parent.vnode) && x.parent.update()
          })
          .catch((p) => {
            _(p), (L.value = p)
          }),
        () => {
          if (V.value && a) return ns(a, x)
          if (L.value && s) return ce(s, { error: L.value })
          if (n && !D.value) return ce(n)
        }
      )
    },
  })
}
function ns(e, t) {
  const { ref: n, props: s, children: r, ce: i } = t.vnode,
    o = ce(e, s, r)
  return (o.ref = n), (o.ce = i), delete t.vnode.ce, o
}
const sn = (e) => e.type.__isKeepAlive
function Dl(e, t) {
  Mi(e, 'a', t)
}
function $l(e, t) {
  Mi(e, 'da', t)
}
function Mi(e, t, n = fe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Wn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; )
      sn(r.parent.vnode) && jl(s, t, n, r), (r = r.parent)
  }
}
function jl(e, t, n, s) {
  const r = Wn(t, e, s, !0)
  kn(() => {
    Fs(s[t], r)
  }, n)
}
function Wn(e, t, n = fe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Ye()
          const l = on(n),
            c = De(t, n, e, o)
          return l(), ze(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const et =
    (e) =>
    (t, n = fe) => {
      ;(!Lt || e === 'sp') && Wn(e, (...s) => t(...s), n)
    },
  Vl = et('bm'),
  Nt = et('m'),
  Wl = et('bu'),
  kl = et('u'),
  Ii = et('bum'),
  kn = et('um'),
  Ul = et('sp'),
  Bl = et('rtg'),
  Kl = et('rtc')
function ql(e, t = fe) {
  Wn('ec', e, t)
}
const Pi = 'components'
function gf(e, t) {
  return Ni(Pi, e, !0, t) || e
}
const Li = Symbol.for('v-ndc')
function mf(e) {
  return oe(e) ? Ni(Pi, e, !1) || e : e || Li
}
function Ni(e, t, n = !0, s = !1) {
  const r = ue || fe
  if (r) {
    const i = r.type
    {
      const l = Mc(i, !1)
      if (l && (l === t || l === Ne(t) || l === Fn(Ne(t))))
        return i
    }
    const o = dr(r[e] || i[e], t) || dr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function dr(e, t) {
  return e && (e[t] || e[Ne(t)] || e[Fn(Ne(t))])
}
function vf(e, t, n, s) {
  let r
  const i = n,
    o = K(e)
  if (o || oe(e)) {
    const l = o && mt(e)
    let c = !1,
      f = !1
    l && ((c = !Ie(e)), (f = ot(e)), (e = $n(e))),
      (r = new Array(e.length))
    for (let a = 0, h = e.length; a < h; a++)
      r[a] = t(
        c ? (f ? En(pe(e[a])) : pe(e[a])) : e[a],
        a,
        void 0,
        i
      )
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
  } else if (se(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (l, c) => t(l, c, void 0, i))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, f = l.length; c < f; c++) {
        const a = l[c]
        r[c] = t(e[a], a, c, i)
      }
    }
  else r = []
  return r
}
function yf(e, t, n = {}, s, r) {
  if (ue.ce || (ue.parent && vt(ue.parent) && ue.parent.ce))
    return (
      t !== 'default' && (n.name = t),
      Rs(),
      Os(Se, null, [ce('slot', n, s && s())], 64)
    )
  let i = e[t]
  i && i._c && (i._d = !1), Rs()
  const o = i && Fi(i(n)),
    l = n.key || (o && o.key),
    c = Os(
      Se,
      {
        key:
          (l && !Ze(l) ? l : `_${t}`) + (!o && s ? '_fb' : ''),
      },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    )
  return (
    !r && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']),
    i && i._c && (i._d = !0),
    c
  )
}
function Fi(e) {
  return e.some((t) =>
    Qt(t)
      ? !(t.type === ge || (t.type === Se && !Fi(t.children)))
      : !0
  )
    ? e
    : null
}
function bf(e, t) {
  const n = {}
  for (const s in e)
    n[/[A-Z]/.test(s) ? `on:${s}` : bn(s)] = e[s]
  return n
}
const Ts = (e) => (e ? (lo(e) ? Kn(e) : Ts(e.parent)) : null),
  Ut = he(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ts(e.parent),
    $root: (e) => Ts(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Di(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        qs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Vn.bind(e.proxy)),
    $watch: (e) => pc.bind(e),
  }),
  ss = (e, t) => e !== ee && !e.__isScriptSetup && Q(e, t),
  Gl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e
      let f
      if (t[0] !== '$') {
        const y = o[t]
        if (y !== void 0)
          switch (y) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (ss(s, t)) return (o[t] = 1), s[t]
          if (r !== ee && Q(r, t)) return (o[t] = 2), r[t]
          if ((f = e.propsOptions[0]) && Q(f, t))
            return (o[t] = 3), i[t]
          if (n !== ee && Q(n, t)) return (o[t] = 4), n[t]
          Es && (o[t] = 0)
        }
      }
      const a = Ut[t]
      let h, v
      if (a)
        return t === '$attrs' && be(e.attrs, 'get', ''), a(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ee && Q(n, t)) return (o[t] = 4), n[t]
      if (((v = c.config.globalProperties), Q(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return ss(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && Q(s, t)
          ? ((s[t] = n), !0)
          : Q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o
    ) {
      let l
      return (
        !!n[o] ||
        (e !== ee && Q(e, o)) ||
        ss(t, o) ||
        ((l = i[0]) && Q(l, o)) ||
        Q(s, o) ||
        Q(Ut, o) ||
        Q(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function _f() {
  return Xl().slots
}
function Xl() {
  const e = rn()
  return e.setupContext || (e.setupContext = ao(e))
}
function hr(e) {
  return K(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Es = !0
function Yl(e) {
  const t = Di(e),
    n = e.proxy,
    s = e.ctx
  ;(Es = !1), t.beforeCreate && pr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: f,
    created: a,
    beforeMount: h,
    mounted: v,
    beforeUpdate: y,
    updated: x,
    activated: _,
    deactivated: V,
    beforeDestroy: L,
    beforeUnmount: D,
    destroyed: p,
    unmounted: g,
    render: I,
    renderTracked: k,
    renderTriggered: O,
    errorCaptured: B,
    serverPrefetch: C,
    expose: P,
    inheritAttrs: A,
    components: b,
    directives: F,
    filters: Y,
  } = t
  if ((f && zl(f, s, null), o))
    for (const X in o) {
      const $ = o[X]
      q($) && (s[X] = $.bind(n))
    }
  if (r) {
    const X = r.call(n, n)
    se(X) && (e.data = Pt(X))
  }
  if (((Es = !0), i))
    for (const X in i) {
      const $ = i[X],
        ae = q($)
          ? $.bind(n, n)
          : q($.get)
            ? $.get.bind(n, n)
            : ke,
        ln = !q($) && q($.set) ? $.set.bind(n) : ke,
        at = ie({ get: ae, set: ln })
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: ($e) => (at.value = $e),
      })
    }
  if (l) for (const X in l) Hi(l[X], s, n, X)
  if (c) {
    const X = q(c) ? c.call(n) : c
    Reflect.ownKeys(X).forEach(($) => {
      nc($, X[$])
    })
  }
  a && pr(a, e, 'c')
  function W(X, $) {
    K($) ? $.forEach((ae) => X(ae.bind(n))) : $ && X($.bind(n))
  }
  if (
    (W(Vl, h),
    W(Nt, v),
    W(Wl, y),
    W(kl, x),
    W(Dl, _),
    W($l, V),
    W(ql, B),
    W(Kl, k),
    W(Bl, O),
    W(Ii, D),
    W(kn, g),
    W(Ul, C),
    K(P))
  )
    if (P.length) {
      const X = e.exposed || (e.exposed = {})
      P.forEach(($) => {
        Object.defineProperty(X, $, {
          get: () => n[$],
          set: (ae) => (n[$] = ae),
        })
      })
    } else e.exposed || (e.exposed = {})
  I && e.render === ke && (e.render = I),
    A != null && (e.inheritAttrs = A),
    b && (e.components = b),
    F && (e.directives = F),
    C && Xs(e)
}
function zl(e, t, n = ke) {
  K(e) && (e = Cs(e))
  for (const s in e) {
    const r = e[s]
    let i
    se(r)
      ? 'default' in r
        ? (i = bt(r.from || s, r.default, !0))
        : (i = bt(r.from || s))
      : (i = bt(r)),
      de(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i)
  }
}
function pr(e, t, n) {
  De(
    K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  )
}
function Hi(e, t, n, s) {
  let r = s.includes('.') ? Qi(n, s) : () => n[s]
  if (oe(e)) {
    const i = t[e]
    q(i) && Le(r, i)
  } else if (q(e)) Le(r, e.bind(n))
  else if (se(e))
    if (K(e)) e.forEach((i) => Hi(i, t, n, s))
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler]
      q(i) && Le(r, i, e)
    }
}
function Di(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((f) => Mn(c, f, o, !0)),
          Mn(c, t, o)),
    se(t) && i.set(t, c),
    c
  )
}
function Mn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && Mn(e, i, n, !0), r && r.forEach((o) => Mn(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Jl[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Jl = {
  data: gr,
  props: mr,
  emits: mr,
  methods: Vt,
  computed: Vt,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: Vt,
  directives: Vt,
  watch: Zl,
  provide: gr,
  inject: Ql,
}
function gr(e, t) {
  return t
    ? e
      ? function () {
          return he(
            q(e) ? e.call(this, this) : e,
            q(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function Ql(e, t) {
  return Vt(Cs(e), Cs(t))
}
function Cs(e) {
  if (K(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Vt(e, t) {
  return e ? he(Object.create(null), e, t) : t
}
function mr(e, t) {
  return e
    ? K(e) && K(t)
      ? [...new Set([...e, ...t])]
      : he(Object.create(null), hr(e), hr(t ?? {}))
    : t
}
function Zl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = he(Object.create(null), e)
  for (const s in t) n[s] = _e(e[s], t[s])
  return n
}
function $i() {
  return {
    app: null,
    config: {
      isNativeTag: Mo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let ec = 0
function tc(e, t) {
  return function (s, r = null) {
    q(s) || (s = he({}, s)), r != null && !se(r) && (r = null)
    const i = $i(),
      o = new WeakSet(),
      l = []
    let c = !1
    const f = (i.app = {
      _uid: ec++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Pc,
      get config() {
        return i.config
      },
      set config(a) {},
      use(a, ...h) {
        return (
          o.has(a) ||
            (a && q(a.install)
              ? (o.add(a), a.install(f, ...h))
              : q(a) && (o.add(a), a(f, ...h))),
          f
        )
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), f
      },
      component(a, h) {
        return h ? ((i.components[a] = h), f) : i.components[a]
      },
      directive(a, h) {
        return h ? ((i.directives[a] = h), f) : i.directives[a]
      },
      mount(a, h, v) {
        if (!c) {
          const y = f._ceVNode || ce(s, r)
          return (
            (y.appContext = i),
            v === !0 ? (v = 'svg') : v === !1 && (v = void 0),
            h && t ? t(y, a) : e(y, a, v),
            (c = !0),
            (f._container = a),
            (a.__vue_app__ = f),
            Kn(y.component)
          )
        }
      },
      onUnmount(a) {
        l.push(a)
      },
      unmount() {
        c &&
          (De(l, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__)
      },
      provide(a, h) {
        return (i.provides[a] = h), f
      },
      runWithContext(a) {
        const h = yt
        yt = f
        try {
          return a()
        } finally {
          yt = h
        }
      },
    })
    return f
  }
}
let yt = null
function nc(e, t) {
  if (fe) {
    let n = fe.provides
    const s = fe.parent && fe.parent.provides
    s === n && (n = fe.provides = Object.create(s)), (n[e] = t)
  }
}
function bt(e, t, n = !1) {
  const s = fe || ue
  if (s || yt) {
    const r = yt
      ? yt._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1)
      return n && q(t) ? t.call(s && s.proxy) : t
  }
}
function ji() {
  return !!(fe || ue || yt)
}
const Vi = {},
  Wi = () => Object.create(Vi),
  ki = (e) => Object.getPrototypeOf(e) === Vi
function sc(e, t, n, s = !1) {
  const r = {},
    i = Wi()
  ;(e.propsDefaults = Object.create(null)), Ui(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n
    ? (e.props = s ? r : ul(r))
    : e.type.props
      ? (e.props = r)
      : (e.props = i),
    (e.attrs = i)
}
function rc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = J(r),
    [c] = e.propsOptions
  let f = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps
      for (let h = 0; h < a.length; h++) {
        let v = a[h]
        if (Bn(e.emitsOptions, v)) continue
        const y = t[v]
        if (c)
          if (Q(i, v)) y !== i[v] && ((i[v] = y), (f = !0))
          else {
            const x = Ne(v)
            r[x] = As(c, l, x, y, e, !1)
          }
        else y !== i[v] && ((i[v] = y), (f = !0))
      }
    }
  } else {
    Ui(e, t, r, i) && (f = !0)
    let a
    for (const h in l)
      (!t || (!Q(t, h) && ((a = ct(h)) === h || !Q(t, a)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[a] !== void 0) &&
            (r[h] = As(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l)
      for (const h in i)
        (!t || !Q(t, h)) && (delete i[h], (f = !0))
  }
  f && Ge(e.attrs, 'set', '')
}
function Ui(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (Mt(c)) continue
      const f = t[c]
      let a
      r && Q(r, (a = Ne(c)))
        ? !i || !i.includes(a)
          ? (n[a] = f)
          : ((l || (l = {}))[a] = f)
        : Bn(e.emitsOptions, c) ||
          ((!(c in s) || f !== s[c]) && ((s[c] = f), (o = !0)))
    }
  if (i) {
    const c = J(n),
      f = l || ee
    for (let a = 0; a < i.length; a++) {
      const h = i[a]
      n[h] = As(r, c, h, f[h], e, !Q(f, h))
    }
  }
  return o
}
function As(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = Q(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && q(c)) {
        const { propsDefaults: f } = r
        if (n in f) s = f[n]
        else {
          const a = on(r)
          ;(s = f[n] = c.call(null, t)), a()
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] &&
      (i && !l
        ? (s = !1)
        : o[1] && (s === '' || s === ct(n)) && (s = !0))
  }
  return s
}
const ic = new WeakMap()
function Bi(e, t, n = !1) {
  const s = n ? ic : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!q(e)) {
    const a = (h) => {
      c = !0
      const [v, y] = Bi(h, t, !0)
      he(o, v), y && l.push(...y)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!i && !c) return se(e) && s.set(e, Rt), Rt
  if (K(i))
    for (let a = 0; a < i.length; a++) {
      const h = Ne(i[a])
      vr(h) && (o[h] = ee)
    }
  else if (i)
    for (const a in i) {
      const h = Ne(a)
      if (vr(h)) {
        const v = i[a],
          y = (o[h] = K(v) || q(v) ? { type: v } : he({}, v)),
          x = y.type
        let _ = !1,
          V = !0
        if (K(x))
          for (let L = 0; L < x.length; ++L) {
            const D = x[L],
              p = q(D) && D.name
            if (p === 'Boolean') {
              _ = !0
              break
            } else p === 'String' && (V = !1)
          }
        else _ = q(x) && x.name === 'Boolean'
        ;(y[0] = _),
          (y[1] = V),
          (_ || Q(y, 'default')) && l.push(h)
      }
    }
  const f = [o, l]
  return se(e) && s.set(e, f), f
}
function vr(e) {
  return e[0] !== '$' && !Mt(e)
}
const Ys = (e) => e[0] === '_' || e === '$stable',
  zs = (e) => (K(e) ? e.map(Me) : [Me(e)]),
  oc = (e, t, n) => {
    if (t._n) return t
    const s = Al((...r) => zs(t(...r)), n)
    return (s._c = !1), s
  },
  Ki = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ys(r)) continue
      const i = e[r]
      if (q(i)) t[r] = oc(r, i, s)
      else if (i != null) {
        const o = zs(i)
        t[r] = () => o
      }
    }
  },
  qi = (e, t) => {
    const n = zs(t)
    e.slots.default = () => n
  },
  Gi = (e, t, n) => {
    for (const s in t) (n || !Ys(s)) && (e[s] = t[s])
  },
  lc = (e, t, n) => {
    const s = (e.slots = Wi())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Gi(s, t, n), n && Zr(s, '_', r, !0)) : Ki(t, s)
    } else t && qi(e, t)
  },
  cc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ee
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : Gi(r, t, n)
        : ((i = !t.$stable), Ki(t, r)),
        (o = t)
    } else t && (qi(e, t), (o = { default: 1 }))
    if (i)
      for (const l in r) !Ys(l) && o[l] == null && delete r[l]
  },
  Ce = no
function ac(e) {
  return fc(e, Nl)
}
function fc(e, t) {
  const n = Hn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: a,
      parentNode: h,
      nextSibling: v,
      setScopeId: y = ke,
      insertStaticContent: x,
    } = e,
    _ = (
      u,
      d,
      m,
      T = null,
      w = null,
      S = null,
      N = void 0,
      M = null,
      R = !!d.dynamicChildren
    ) => {
      if (u === d) return
      u &&
        !pt(u, d) &&
        ((T = cn(u)), $e(u, w, S, !0), (u = null)),
        d.patchFlag === -2 &&
          ((R = !1), (d.dynamicChildren = null))
      const { type: E, ref: U, shapeFlag: H } = d
      switch (E) {
        case _t:
          V(u, d, m, T)
          break
        case ge:
          L(u, d, m, T)
          break
        case Bt:
          u == null && D(d, m, T, N)
          break
        case Se:
          b(u, d, m, T, w, S, N, M, R)
          break
        default:
          H & 1
            ? I(u, d, m, T, w, S, N, M, R)
            : H & 6
              ? F(u, d, m, T, w, S, N, M, R)
              : (H & 64 || H & 128) &&
                E.process(u, d, m, T, w, S, N, M, R, xt)
      }
      U != null && w && zt(U, u && u.ref, S, d || u, !d)
    },
    V = (u, d, m, T) => {
      if (u == null) s((d.el = l(d.children)), m, T)
      else {
        const w = (d.el = u.el)
        d.children !== u.children && f(w, d.children)
      }
    },
    L = (u, d, m, T) => {
      u == null
        ? s((d.el = c(d.children || '')), m, T)
        : (d.el = u.el)
    },
    D = (u, d, m, T) => {
      ;[u.el, u.anchor] = x(u.children, d, m, T, u.el, u.anchor)
    },
    p = ({ el: u, anchor: d }, m, T) => {
      let w
      for (; u && u !== d; ) (w = v(u)), s(u, m, T), (u = w)
      s(d, m, T)
    },
    g = ({ el: u, anchor: d }) => {
      let m
      for (; u && u !== d; ) (m = v(u)), r(u), (u = m)
      r(d)
    },
    I = (u, d, m, T, w, S, N, M, R) => {
      d.type === 'svg'
        ? (N = 'svg')
        : d.type === 'math' && (N = 'mathml'),
        u == null
          ? k(d, m, T, w, S, N, M, R)
          : C(u, d, w, S, N, M, R)
    },
    k = (u, d, m, T, w, S, N, M) => {
      let R, E
      const {
        props: U,
        shapeFlag: H,
        transition: j,
        dirs: G,
      } = u
      if (
        ((R = u.el = o(u.type, S, U && U.is, U)),
        H & 8
          ? a(R, u.children)
          : H & 16 &&
            B(u.children, R, null, T, w, rs(u, S), N, M),
        G && We(u, null, T, 'created'),
        O(R, u, u.scopeId, N, T),
        U)
      ) {
        for (const te in U)
          te !== 'value' &&
            !Mt(te) &&
            i(R, te, null, U[te], S, T)
        'value' in U && i(R, 'value', null, U.value, S),
          (E = U.onVnodeBeforeMount) && Oe(E, T, u)
      }
      G && We(u, null, T, 'beforeMount')
      const z = Xi(w, j)
      z && j.beforeEnter(R),
        s(R, d, m),
        ((E = U && U.onVnodeMounted) || z || G) &&
          Ce(() => {
            E && Oe(E, T, u),
              z && j.enter(R),
              G && We(u, null, T, 'mounted')
          }, w)
    },
    O = (u, d, m, T, w) => {
      if ((m && y(u, m), T))
        for (let S = 0; S < T.length; S++) y(u, T[S])
      if (w) {
        let S = w.subTree
        if (
          d === S ||
          (to(S.type) &&
            (S.ssContent === d || S.ssFallback === d))
        ) {
          const N = w.vnode
          O(u, N, N.scopeId, N.slotScopeIds, w.parent)
        }
      }
    },
    B = (u, d, m, T, w, S, N, M, R = 0) => {
      for (let E = R; E < u.length; E++) {
        const U = (u[E] = M ? rt(u[E]) : Me(u[E]))
        _(null, U, d, m, T, w, S, N, M)
      }
    },
    C = (u, d, m, T, w, S, N) => {
      const M = (d.el = u.el)
      let { patchFlag: R, dynamicChildren: E, dirs: U } = d
      R |= u.patchFlag & 16
      const H = u.props || ee,
        j = d.props || ee
      let G
      if (
        (m && ft(m, !1),
        (G = j.onVnodeBeforeUpdate) && Oe(G, m, d, u),
        U && We(d, u, m, 'beforeUpdate'),
        m && ft(m, !0),
        ((H.innerHTML && j.innerHTML == null) ||
          (H.textContent && j.textContent == null)) &&
          a(M, ''),
        E
          ? P(u.dynamicChildren, E, M, m, T, rs(d, w), S)
          : N || $(u, d, M, null, m, T, rs(d, w), S, !1),
        R > 0)
      ) {
        if (R & 16) A(M, H, j, m, w)
        else if (
          (R & 2 &&
            H.class !== j.class &&
            i(M, 'class', null, j.class, w),
          R & 4 && i(M, 'style', H.style, j.style, w),
          R & 8)
        ) {
          const z = d.dynamicProps
          for (let te = 0; te < z.length; te++) {
            const Z = z[te],
              xe = H[Z],
              me = j[Z]
            ;(me !== xe || Z === 'value') &&
              i(M, Z, xe, me, w, m)
          }
        }
        R & 1 && u.children !== d.children && a(M, d.children)
      } else !N && E == null && A(M, H, j, m, w)
      ;((G = j.onVnodeUpdated) || U) &&
        Ce(() => {
          G && Oe(G, m, d, u), U && We(d, u, m, 'updated')
        }, T)
    },
    P = (u, d, m, T, w, S, N) => {
      for (let M = 0; M < d.length; M++) {
        const R = u[M],
          E = d[M],
          U =
            R.el &&
            (R.type === Se || !pt(R, E) || R.shapeFlag & 70)
              ? h(R.el)
              : m
        _(R, E, U, null, T, w, S, N, !0)
      }
    },
    A = (u, d, m, T, w) => {
      if (d !== m) {
        if (d !== ee)
          for (const S in d)
            !Mt(S) && !(S in m) && i(u, S, d[S], null, w, T)
        for (const S in m) {
          if (Mt(S)) continue
          const N = m[S],
            M = d[S]
          N !== M && S !== 'value' && i(u, S, M, N, w, T)
        }
        'value' in m && i(u, 'value', d.value, m.value, w)
      }
    },
    b = (u, d, m, T, w, S, N, M, R) => {
      const E = (d.el = u ? u.el : l('')),
        U = (d.anchor = u ? u.anchor : l(''))
      let {
        patchFlag: H,
        dynamicChildren: j,
        slotScopeIds: G,
      } = d
      G && (M = M ? M.concat(G) : G),
        u == null
          ? (s(E, m, T),
            s(U, m, T),
            B(d.children || [], m, U, w, S, N, M, R))
          : H > 0 && H & 64 && j && u.dynamicChildren
            ? (P(u.dynamicChildren, j, m, w, S, N, M),
              (d.key != null || (w && d === w.subTree)) &&
                Yi(u, d, !0))
            : $(u, d, m, U, w, S, N, M, R)
    },
    F = (u, d, m, T, w, S, N, M, R) => {
      ;(d.slotScopeIds = M),
        u == null
          ? d.shapeFlag & 512
            ? w.ctx.activate(d, m, T, N, R)
            : Y(d, m, T, w, S, N, R)
          : re(u, d, R)
    },
    Y = (u, d, m, T, w, S, N) => {
      const M = (u.component = Cc(u, T, w))
      if (
        (sn(u) && (M.ctx.renderer = xt),
        Ac(M, !1, N),
        M.asyncDep)
      ) {
        if ((w && w.registerDep(M, W, N), !u.el)) {
          const R = (M.subTree = ce(ge))
          L(null, R, d, m)
        }
      } else W(M, u, d, m, w, S, N)
    },
    re = (u, d, m) => {
      const T = (d.component = u.component)
      if (bc(u, d, m))
        if (T.asyncDep && !T.asyncResolved) {
          X(T, d, m)
          return
        } else (T.next = d), T.update()
      else (d.el = u.el), (T.vnode = d)
    },
    W = (u, d, m, T, w, S, N) => {
      const M = () => {
        if (u.isMounted) {
          let { next: H, bu: j, u: G, parent: z, vnode: te } = u
          {
            const Te = zi(u)
            if (Te) {
              H && ((H.el = te.el), X(u, H, N)),
                Te.asyncDep.then(() => {
                  u.isUnmounted || M()
                })
              return
            }
          }
          let Z = H,
            xe
          ft(u, !1),
            H ? ((H.el = te.el), X(u, H, N)) : (H = te),
            j && zn(j),
            (xe = H.props && H.props.onVnodeBeforeUpdate) &&
              Oe(xe, z, H, te),
            ft(u, !0)
          const me = is(u),
            Fe = u.subTree
          ;(u.subTree = me),
            _(Fe, me, h(Fe.el), cn(Fe), u, w, S),
            (H.el = me.el),
            Z === null && eo(u, me.el),
            G && Ce(G, w),
            (xe = H.props && H.props.onVnodeUpdated) &&
              Ce(() => Oe(xe, z, H, te), w)
        } else {
          let H
          const { el: j, props: G } = d,
            { bm: z, m: te, parent: Z, root: xe, type: me } = u,
            Fe = vt(d)
          if (
            (ft(u, !1),
            z && zn(z),
            !Fe &&
              (H = G && G.onVnodeBeforeMount) &&
              Oe(H, Z, d),
            ft(u, !0),
            j && Yn)
          ) {
            const Te = () => {
              ;(u.subTree = is(u)), Yn(j, u.subTree, u, w, null)
            }
            Fe && me.__asyncHydrate
              ? me.__asyncHydrate(j, u, Te)
              : Te()
          } else {
            xe.ce && xe.ce._injectChildStyle(me)
            const Te = (u.subTree = is(u))
            _(null, Te, m, T, u, w, S), (d.el = Te.el)
          }
          if (
            (te && Ce(te, w), !Fe && (H = G && G.onVnodeMounted))
          ) {
            const Te = d
            Ce(() => Oe(H, Z, Te), w)
          }
          ;(d.shapeFlag & 256 ||
            (Z && vt(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
            u.a &&
            Ce(u.a, w),
            (u.isMounted = !0),
            (d = m = T = null)
        }
      }
      u.scope.on()
      const R = (u.effect = new ri(M))
      u.scope.off()
      const E = (u.update = R.run.bind(R)),
        U = (u.job = R.runIfDirty.bind(R))
      ;(U.i = u),
        (U.id = u.uid),
        (R.scheduler = () => qs(U)),
        ft(u, !0),
        E()
    },
    X = (u, d, m) => {
      d.component = u
      const T = u.vnode.props
      ;(u.vnode = d),
        (u.next = null),
        rc(u, d.props, T, m),
        cc(u, d.children, m),
        Ye(),
        cr(u),
        ze()
    },
    $ = (u, d, m, T, w, S, N, M, R = !1) => {
      const E = u && u.children,
        U = u ? u.shapeFlag : 0,
        H = d.children,
        { patchFlag: j, shapeFlag: G } = d
      if (j > 0) {
        if (j & 128) {
          ln(E, H, m, T, w, S, N, M, R)
          return
        } else if (j & 256) {
          ae(E, H, m, T, w, S, N, M, R)
          return
        }
      }
      G & 8
        ? (U & 16 && Ft(E, w, S), H !== E && a(m, H))
        : U & 16
          ? G & 16
            ? ln(E, H, m, T, w, S, N, M, R)
            : Ft(E, w, S, !0)
          : (U & 8 && a(m, ''),
            G & 16 && B(H, m, T, w, S, N, M, R))
    },
    ae = (u, d, m, T, w, S, N, M, R) => {
      ;(u = u || Rt), (d = d || Rt)
      const E = u.length,
        U = d.length,
        H = Math.min(E, U)
      let j
      for (j = 0; j < H; j++) {
        const G = (d[j] = R ? rt(d[j]) : Me(d[j]))
        _(u[j], G, m, null, w, S, N, M, R)
      }
      E > U
        ? Ft(u, w, S, !0, !1, H)
        : B(d, m, T, w, S, N, M, R, H)
    },
    ln = (u, d, m, T, w, S, N, M, R) => {
      let E = 0
      const U = d.length
      let H = u.length - 1,
        j = U - 1
      for (; E <= H && E <= j; ) {
        const G = u[E],
          z = (d[E] = R ? rt(d[E]) : Me(d[E]))
        if (pt(G, z)) _(G, z, m, null, w, S, N, M, R)
        else break
        E++
      }
      for (; E <= H && E <= j; ) {
        const G = u[H],
          z = (d[j] = R ? rt(d[j]) : Me(d[j]))
        if (pt(G, z)) _(G, z, m, null, w, S, N, M, R)
        else break
        H--, j--
      }
      if (E > H) {
        if (E <= j) {
          const G = j + 1,
            z = G < U ? d[G].el : T
          for (; E <= j; )
            _(
              null,
              (d[E] = R ? rt(d[E]) : Me(d[E])),
              m,
              z,
              w,
              S,
              N,
              M,
              R
            ),
              E++
        }
      } else if (E > j) for (; E <= H; ) $e(u[E], w, S, !0), E++
      else {
        const G = E,
          z = E,
          te = new Map()
        for (E = z; E <= j; E++) {
          const Ee = (d[E] = R ? rt(d[E]) : Me(d[E]))
          Ee.key != null && te.set(Ee.key, E)
        }
        let Z,
          xe = 0
        const me = j - z + 1
        let Fe = !1,
          Te = 0
        const Ht = new Array(me)
        for (E = 0; E < me; E++) Ht[E] = 0
        for (E = G; E <= H; E++) {
          const Ee = u[E]
          if (xe >= me) {
            $e(Ee, w, S, !0)
            continue
          }
          let je
          if (Ee.key != null) je = te.get(Ee.key)
          else
            for (Z = z; Z <= j; Z++)
              if (Ht[Z - z] === 0 && pt(Ee, d[Z])) {
                je = Z
                break
              }
          je === void 0
            ? $e(Ee, w, S, !0)
            : ((Ht[je - z] = E + 1),
              je >= Te ? (Te = je) : (Fe = !0),
              _(Ee, d[je], m, null, w, S, N, M, R),
              xe++)
        }
        const sr = Fe ? uc(Ht) : Rt
        for (Z = sr.length - 1, E = me - 1; E >= 0; E--) {
          const Ee = z + E,
            je = d[Ee],
            rr = Ee + 1 < U ? d[Ee + 1].el : T
          Ht[E] === 0
            ? _(null, je, m, rr, w, S, N, M, R)
            : Fe &&
              (Z < 0 || E !== sr[Z] ? at(je, m, rr, 2) : Z--)
        }
      }
    },
    at = (u, d, m, T, w = null) => {
      const {
        el: S,
        type: N,
        transition: M,
        children: R,
        shapeFlag: E,
      } = u
      if (E & 6) {
        at(u.component.subTree, d, m, T)
        return
      }
      if (E & 128) {
        u.suspense.move(d, m, T)
        return
      }
      if (E & 64) {
        N.move(u, d, m, xt)
        return
      }
      if (N === Se) {
        s(S, d, m)
        for (let H = 0; H < R.length; H++) at(R[H], d, m, T)
        s(u.anchor, d, m)
        return
      }
      if (N === Bt) {
        p(u, d, m)
        return
      }
      if (T !== 2 && E & 1 && M)
        if (T === 0)
          M.beforeEnter(S), s(S, d, m), Ce(() => M.enter(S), w)
        else {
          const { leave: H, delayLeave: j, afterLeave: G } = M,
            z = () => {
              u.ctx.isUnmounted ? r(S) : s(S, d, m)
            },
            te = () => {
              H(S, () => {
                z(), G && G()
              })
            }
          j ? j(S, z, te) : te()
        }
      else s(S, d, m)
    },
    $e = (u, d, m, T = !1, w = !1) => {
      const {
        type: S,
        props: N,
        ref: M,
        children: R,
        dynamicChildren: E,
        shapeFlag: U,
        patchFlag: H,
        dirs: j,
        cacheIndex: G,
      } = u
      if (
        (H === -2 && (w = !1),
        M != null && (Ye(), zt(M, null, m, u, !0), ze()),
        G != null && (d.renderCache[G] = void 0),
        U & 256)
      ) {
        d.ctx.deactivate(u)
        return
      }
      const z = U & 1 && j,
        te = !vt(u)
      let Z
      if (
        (te && (Z = N && N.onVnodeBeforeUnmount) && Oe(Z, d, u),
        U & 6)
      )
        Oo(u.component, m, T)
      else {
        if (U & 128) {
          u.suspense.unmount(m, T)
          return
        }
        z && We(u, null, d, 'beforeUnmount'),
          U & 64
            ? u.type.remove(u, d, m, xt, T)
            : E && !E.hasOnce && (S !== Se || (H > 0 && H & 64))
              ? Ft(E, d, m, !1, !0)
              : ((S === Se && H & 384) || (!w && U & 16)) &&
                Ft(R, d, m),
          T && tr(u)
      }
      ;((te && (Z = N && N.onVnodeUnmounted)) || z) &&
        Ce(() => {
          Z && Oe(Z, d, u), z && We(u, null, d, 'unmounted')
        }, m)
    },
    tr = (u) => {
      const { type: d, el: m, anchor: T, transition: w } = u
      if (d === Se) {
        Ro(m, T)
        return
      }
      if (d === Bt) {
        g(u)
        return
      }
      const S = () => {
        r(m), w && !w.persisted && w.afterLeave && w.afterLeave()
      }
      if (u.shapeFlag & 1 && w && !w.persisted) {
        const { leave: N, delayLeave: M } = w,
          R = () => N(m, S)
        M ? M(u.el, S, R) : R()
      } else S()
    },
    Ro = (u, d) => {
      let m
      for (; u !== d; ) (m = v(u)), r(u), (u = m)
      r(d)
    },
    Oo = (u, d, m) => {
      const {
        bum: T,
        scope: w,
        job: S,
        subTree: N,
        um: M,
        m: R,
        a: E,
        parent: U,
        slots: { __: H },
      } = u
      yr(R),
        yr(E),
        T && zn(T),
        U &&
          K(H) &&
          H.forEach((j) => {
            U.renderCache[j] = void 0
          }),
        w.stop(),
        S && ((S.flags |= 8), $e(N, u, d, m)),
        M && Ce(M, d),
        Ce(() => {
          u.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    Ft = (u, d, m, T = !1, w = !1, S = 0) => {
      for (let N = S; N < u.length; N++) $e(u[N], d, m, T, w)
    },
    cn = (u) => {
      if (u.shapeFlag & 6) return cn(u.component.subTree)
      if (u.shapeFlag & 128) return u.suspense.next()
      const d = v(u.anchor || u.el),
        m = d && d[Rl]
      return m ? v(m) : d
    }
  let Gn = !1
  const nr = (u, d, m) => {
      u == null
        ? d._vnode && $e(d._vnode, null, null, !0)
        : _(d._vnode || null, u, d, null, null, null, m),
        (d._vnode = u),
        Gn || ((Gn = !0), cr(), Rn(), (Gn = !1))
    },
    xt = {
      p: _,
      um: $e,
      m: at,
      r: tr,
      mt: Y,
      mc: B,
      pc: $,
      pbc: P,
      n: cn,
      o: e,
    }
  let Xn, Yn
  return (
    t && ([Xn, Yn] = t(xt)),
    { render: nr, hydrate: Xn, createApp: tc(nr, Xn) }
  )
}
function rs({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function ft({ effect: e, job: t }, n) {
  n
    ? ((e.flags |= 32), (t.flags |= 4))
    : ((e.flags &= -33), (t.flags &= -5))
}
function Xi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Yi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (K(s) && K(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = rt(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Yi(o, l)),
        l.type === _t && (l.el = o.el),
        l.type === ge && !l.el && (l.el = o.el)
    }
}
function uc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const f = e[s]
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < f ? (i = l + 1) : (o = l)
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    (n[i] = o), (o = t[o])
  return n
}
function zi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : zi(t)
}
function yr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const dc = Symbol.for('v-scx'),
  hc = () => bt(dc)
function Ji(e, t) {
  return Un(e, null, t)
}
function wf(e, t) {
  return Un(e, null, { flush: 'post' })
}
function Le(e, t, n) {
  return Un(e, t, n)
}
function Un(e, t, n = ee) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = he({}, n),
    c = (t && s) || (!t && i !== 'post')
  let f
  if (Lt) {
    if (i === 'sync') {
      const y = hc()
      f = y.__watcherHandles || (y.__watcherHandles = [])
    } else if (!c) {
      const y = () => {}
      return (y.stop = ke), (y.resume = ke), (y.pause = ke), y
    }
  }
  const a = fe
  l.call = (y, x, _) => De(y, a, x, _)
  let h = !1
  i === 'post'
    ? (l.scheduler = (y) => {
        Ce(y, a && a.suspense)
      })
    : i !== 'sync' &&
      ((h = !0),
      (l.scheduler = (y, x) => {
        x ? y() : qs(y)
      })),
    (l.augmentJob = (y) => {
      t && (y.flags |= 4),
        h && ((y.flags |= 2), a && ((y.id = a.uid), (y.i = a)))
    })
  const v = xl(e, t, l)
  return Lt && (f ? f.push(v) : c && v()), v
}
function pc(e, t, n) {
  const s = this.proxy,
    r = oe(e)
      ? e.includes('.')
        ? Qi(s, e)
        : () => s[e]
      : e.bind(s, s)
  let i
  q(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = on(this),
    l = Un(r, i.bind(s), n)
  return o(), l
}
function Qi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const gc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] ||
      e[`${Ne(t)}Modifiers`] ||
      e[`${ct(t)}Modifiers`]
function mc(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ee
  let r = n
  const i = t.startsWith('update:'),
    o = i && gc(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((a) => (oe(a) ? a.trim() : a))),
    o.number && (r = n.map(Fo)))
  let l,
    c = s[(l = bn(t))] || s[(l = bn(Ne(t)))]
  !c && i && (c = s[(l = bn(ct(t)))]), c && De(c, e, 6, r)
  const f = s[l + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), De(f, e, 6, r)
  }
}
function Zi(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!q(e)) {
    const c = (f) => {
      const a = Zi(f, t, !0)
      a && ((l = !0), he(o, a))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (se(e) && s.set(e, null), null)
    : (K(i) ? i.forEach((c) => (o[c] = null)) : he(o, i),
      se(e) && s.set(e, o),
      o)
}
function Bn(e, t) {
  return !e || !en(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Q(e, t[0].toLowerCase() + t.slice(1)) ||
        Q(e, ct(t)) ||
        Q(e, t))
}
function is(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: f,
      renderCache: a,
      props: h,
      data: v,
      setupState: y,
      ctx: x,
      inheritAttrs: _,
    } = e,
    V = On(e)
  let L, D
  try {
    if (n.shapeFlag & 4) {
      const g = r || s,
        I = g
      ;(L = Me(f.call(I, g, a, h, y, v, x))), (D = l)
    } else {
      const g = t
      ;(L = Me(
        g.length > 1
          ? g(h, { attrs: l, slots: o, emit: c })
          : g(h, null)
      )),
        (D = t.props ? l : vc(l))
    }
  } catch (g) {
    ;(Kt.length = 0), nn(g, e, 1), (L = ce(ge))
  }
  let p = L
  if (D && _ !== !1) {
    const g = Object.keys(D),
      { shapeFlag: I } = p
    g.length &&
      I & 7 &&
      (i && g.some(Ns) && (D = yc(D, i)), (p = lt(p, D, !1, !0)))
  }
  return (
    n.dirs &&
      ((p = lt(p, null, !1, !0)),
      (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Yt(p, n.transition),
    (L = p),
    On(V),
    L
  )
}
const vc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || en(n)) &&
        ((t || (t = {}))[n] = e[n])
    return t
  },
  yc = (e, t) => {
    const n = {}
    for (const s in e)
      (!Ns(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function bc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    f = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? br(s, o, f) : !!o
    if (c & 8) {
      const a = t.dynamicProps
      for (let h = 0; h < a.length; h++) {
        const v = a[h]
        if (o[v] !== s[v] && !Bn(f, v)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? br(s, o, f)
            : !0
          : !!o
  return !1
}
function br(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Bn(n, i)) return !0
  }
  return !1
}
function eo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if (
      (s.suspense &&
        s.suspense.activeBranch === e &&
        (s.el = e.el),
      s === e)
    )
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const to = (e) => e.__isSuspense
function no(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Cl(e)
}
const Se = Symbol.for('v-fgt'),
  _t = Symbol.for('v-txt'),
  ge = Symbol.for('v-cmt'),
  Bt = Symbol.for('v-stc'),
  Kt = []
let Ae = null
function Rs(e = !1) {
  Kt.push((Ae = e ? null : []))
}
function _c() {
  Kt.pop(), (Ae = Kt[Kt.length - 1] || null)
}
let Jt = 1
function _r(e, t = !1) {
  ;(Jt += e), e < 0 && Ae && t && (Ae.hasOnce = !0)
}
function so(e) {
  return (
    (e.dynamicChildren = Jt > 0 ? Ae || Rt : null),
    _c(),
    Jt > 0 && Ae && Ae.push(e),
    e
  )
}
function Sf(e, t, n, s, r, i) {
  return so(io(e, t, n, s, r, i, !0))
}
function Os(e, t, n, s, r) {
  return so(ce(e, t, n, s, r, !0))
}
function Qt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function pt(e, t) {
  return e.type === t.type && e.key === t.key
}
const ro = ({ key: e }) => e ?? null,
  wn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? oe(e) || de(e) || q(e)
        ? { i: ue, r: e, k: t, f: !!n }
        : e
      : null
  )
function io(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Se ? 0 : 1,
  o = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ro(t),
    ref: t && wn(t),
    scopeId: xi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ue,
  }
  return (
    l
      ? (Js(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= oe(n) ? 8 : 16),
    Jt > 0 &&
      !o &&
      Ae &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ae.push(c),
    c
  )
}
const ce = wc
function wc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Li) && (e = ge), Qt(e))) {
    const l = lt(e, t, !0)
    return (
      n && Js(l, n),
      Jt > 0 &&
        !i &&
        Ae &&
        (l.shapeFlag & 6 ? (Ae[Ae.indexOf(e)] = l) : Ae.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Ic(e) && (e = e.__vccOpts), t)) {
    t = Sc(t)
    let { class: l, style: c } = t
    l && !oe(l) && (t.class = $s(l)),
      se(c) &&
        (Bs(c) && !K(c) && (c = he({}, c)), (t.style = Ds(c)))
  }
  const o = oe(e)
    ? 1
    : to(e)
      ? 128
      : Ti(e)
        ? 64
        : se(e)
          ? 4
          : q(e)
            ? 2
            : 0
  return io(e, t, n, s, r, o, i, !0)
}
function Sc(e) {
  return e ? (Bs(e) || ki(e) ? he({}, e) : e) : null
}
function lt(e, t, n = !1, s = !1) {
  const {
      props: r,
      ref: i,
      patchFlag: o,
      children: l,
      transition: c,
    } = e,
    f = t ? xc(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && ro(f),
      ref:
        t && t.ref
          ? n && i
            ? K(i)
              ? i.concat(wn(t))
              : [i, wn(t)]
            : wn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag:
        t && e.type !== Se ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && lt(e.ssContent),
      ssFallback: e.ssFallback && lt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return c && s && Yt(a, c.clone(a)), a
}
function oo(e = ' ', t = 0) {
  return ce(_t, null, e, t)
}
function xf(e, t) {
  const n = ce(Bt, null, e)
  return (n.staticCount = t), n
}
function Tf(e = '', t = !1) {
  return t ? (Rs(), Os(ge, null, e)) : ce(ge, null, e)
}
function Me(e) {
  return e == null || typeof e == 'boolean'
    ? ce(ge)
    : K(e)
      ? ce(Se, null, e.slice())
      : Qt(e)
        ? rt(e)
        : ce(_t, null, String(e))
}
function rt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo
    ? e
    : lt(e)
}
function Js(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (K(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Js(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !ki(t)
        ? (t._ctx = ue)
        : r === 3 &&
          ue &&
          (ue.slots._ === 1
            ? (t._ = 1)
            : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    q(t)
      ? ((t = { default: t, _ctx: ue }), (n = 32))
      : ((t = String(t)),
        s & 64 ? ((n = 16), (t = [oo(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function xc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = $s([t.class, s.class]))
      else if (r === 'style') t.style = Ds([t.style, s.style])
      else if (en(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(K(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Oe(e, t, n, s = null) {
  De(e, t, 7, [n, s])
}
const Tc = $i()
let Ec = 0
function Cc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Tc,
    i = {
      uid: Ec++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Bo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Bi(s, r),
      emitsOptions: Zi(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = mc.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let fe = null
const rn = () => fe || ue
let In, Ms
{
  const e = Hn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(In = t('__VUE_INSTANCE_SETTERS__', (n) => (fe = n))),
    (Ms = t('__VUE_SSR_SETTERS__', (n) => (Lt = n)))
}
const on = (e) => {
    const t = fe
    return (
      In(e),
      e.scope.on(),
      () => {
        e.scope.off(), In(t)
      }
    )
  },
  wr = () => {
    fe && fe.scope.off(), In(null)
  }
function lo(e) {
  return e.vnode.shapeFlag & 4
}
let Lt = !1
function Ac(e, t = !1, n = !1) {
  t && Ms(t)
  const { props: s, children: r } = e.vnode,
    i = lo(e)
  sc(e, s, i, t), lc(e, r, n || t)
  const o = i ? Rc(e, t) : void 0
  return t && Ms(!1), o
}
function Rc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)),
    (e.proxy = new Proxy(e.ctx, Gl))
  const { setup: s } = n
  if (s) {
    Ye()
    const r = (e.setupContext = s.length > 1 ? ao(e) : null),
      i = on(e),
      o = tn(s, e, 0, [e.props, r]),
      l = zr(o)
    if ((ze(), i(), (l || e.sp) && !vt(e) && Xs(e), l)) {
      if ((o.then(wr, wr), t))
        return o
          .then((c) => {
            Sr(e, c)
          })
          .catch((c) => {
            nn(c, e, 0)
          })
      e.asyncDep = o
    } else Sr(e, o)
  } else co(e)
}
function Sr(e, t, n) {
  q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = bi(t)),
    co(e)
}
function co(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || ke)
  {
    const r = on(e)
    Ye()
    try {
      Yl(e)
    } finally {
      ze(), r()
    }
  }
}
const Oc = {
  get(e, t) {
    return be(e, 'get', ''), e[t]
  },
}
function ao(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Oc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Kn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(bi(_n(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Ut) return Ut[n](e)
          },
          has(t, n) {
            return n in t || n in Ut
          },
        }))
    : e.proxy
}
function Mc(e, t = !0) {
  return q(e)
    ? e.displayName || e.name
    : e.name || (t && e.__name)
}
function Ic(e) {
  return q(e) && '__vccOpts' in e
}
const ie = (e, t) => wl(e, t, Lt)
function Is(e, t, n) {
  const s = arguments.length
  return s === 2
    ? se(t) && !K(t)
      ? Qt(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Qt(n) && (n = [n]),
      ce(e, t, n))
}
const Pc = '3.5.14'
/**
 * @vue/runtime-dom v3.5.14
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ps
const xr = typeof window < 'u' && window.trustedTypes
if (xr)
  try {
    Ps = xr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const fo = Ps ? (e) => Ps.createHTML(e) : (e) => e,
  Lc = 'http://www.w3.org/2000/svg',
  Nc = 'http://www.w3.org/1998/Math/MathML',
  qe = typeof document < 'u' ? document : null,
  Tr = qe && qe.createElement('template'),
  Fc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? qe.createElementNS(Lc, e)
          : t === 'mathml'
            ? qe.createElementNS(Nc, e)
            : n
              ? qe.createElement(e, { is: n })
              : qe.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => qe.createTextNode(e),
    createComment: (e) => qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Tr.innerHTML = fo(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e
        )
        const l = Tr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  tt = 'transition',
  $t = 'animation',
  Zt = Symbol('_vtc'),
  uo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Hc = he({}, Ei, uo),
  Dc = (e) => (
    (e.displayName = 'Transition'), (e.props = Hc), e
  ),
  Ef = Dc((e, { slots: t }) => Is(Il, $c(e), t)),
  ut = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Er = (e) =>
    e ? (K(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1
function $c(e) {
  const t = {}
  for (const b in e) b in uo || (t[b] = e[b])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: f = o,
      appearToClass: a = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: y = `${n}-leave-to`,
    } = e,
    x = jc(r),
    _ = x && x[0],
    V = x && x[1],
    {
      onBeforeEnter: L,
      onEnter: D,
      onEnterCancelled: p,
      onLeave: g,
      onLeaveCancelled: I,
      onBeforeAppear: k = L,
      onAppear: O = D,
      onAppearCancelled: B = p,
    } = t,
    C = (b, F, Y, re) => {
      ;(b._enterCancelled = re),
        dt(b, F ? a : l),
        dt(b, F ? f : o),
        Y && Y()
    },
    P = (b, F) => {
      ;(b._isLeaving = !1),
        dt(b, h),
        dt(b, y),
        dt(b, v),
        F && F()
    },
    A = (b) => (F, Y) => {
      const re = b ? O : D,
        W = () => C(F, b, Y)
      ut(re, [F, W]),
        Cr(() => {
          dt(F, b ? c : i),
            Ke(F, b ? a : l),
            Er(re) || Ar(F, s, _, W)
        })
    }
  return he(t, {
    onBeforeEnter(b) {
      ut(L, [b]), Ke(b, i), Ke(b, o)
    },
    onBeforeAppear(b) {
      ut(k, [b]), Ke(b, c), Ke(b, f)
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(b, F) {
      b._isLeaving = !0
      const Y = () => P(b, F)
      Ke(b, h),
        b._enterCancelled ? (Ke(b, v), Mr()) : (Mr(), Ke(b, v)),
        Cr(() => {
          b._isLeaving &&
            (dt(b, h), Ke(b, y), Er(g) || Ar(b, s, V, Y))
        }),
        ut(g, [b, Y])
    },
    onEnterCancelled(b) {
      C(b, !1, void 0, !0), ut(p, [b])
    },
    onAppearCancelled(b) {
      C(b, !0, void 0, !0), ut(B, [b])
    },
    onLeaveCancelled(b) {
      P(b), ut(I, [b])
    },
  })
}
function jc(e) {
  if (e == null) return null
  if (se(e)) return [os(e.enter), os(e.leave)]
  {
    const t = os(e)
    return [t, t]
  }
}
function os(e) {
  return Ho(e)
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Zt] || (e[Zt] = new Set())).add(t)
}
function dt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[Zt]
  n && (n.delete(t), n.size || (e[Zt] = void 0))
}
function Cr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Vc = 0
function Ar(e, t, n, s) {
  const r = (e._endId = ++Vc),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = Wc(e, t)
  if (!o) return s()
  const f = o + 'end'
  let a = 0
  const h = () => {
      e.removeEventListener(f, v), i()
    },
    v = (y) => {
      y.target === e && ++a >= c && h()
    }
  setTimeout(() => {
    a < c && h()
  }, l + 1),
    e.addEventListener(f, v)
}
function Wc(e, t) {
  const n = window.getComputedStyle(e),
    s = (x) => (n[x] || '').split(', '),
    r = s(`${tt}Delay`),
    i = s(`${tt}Duration`),
    o = Rr(r, i),
    l = s(`${$t}Delay`),
    c = s(`${$t}Duration`),
    f = Rr(l, c)
  let a = null,
    h = 0,
    v = 0
  t === tt
    ? o > 0 && ((a = tt), (h = o), (v = i.length))
    : t === $t
      ? f > 0 && ((a = $t), (h = f), (v = c.length))
      : ((h = Math.max(o, f)),
        (a = h > 0 ? (o > f ? tt : $t) : null),
        (v = a ? (a === tt ? i.length : c.length) : 0))
  const y =
    a === tt &&
    /\b(transform|all)(,|$)/.test(s(`${tt}Property`).toString())
  return { type: a, timeout: h, propCount: v, hasTransform: y }
}
function Rr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Or(n) + Or(e[s])))
}
function Or(e) {
  return e === 'auto'
    ? 0
    : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Mr() {
  return document.body.offsetHeight
}
function kc(e, t, n) {
  const s = e[Zt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const Pn = Symbol('_vod'),
  ho = Symbol('_vsh'),
  Cf = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Pn] =
        e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : jt(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), jt(e, !0), s.enter(e))
            : s.leave(e, () => {
                jt(e, !1)
              })
          : jt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      jt(e, t)
    },
  }
function jt(e, t) {
  ;(e.style.display = t ? e[Pn] : 'none'), (e[ho] = !t)
}
const Uc = Symbol(''),
  Bc = /(^|;)\s*display\s*:/
function Kc(e, t, n) {
  const s = e.style,
    r = oe(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && Sn(s, l, '')
        }
      else for (const o in t) n[o] == null && Sn(s, o, '')
    for (const o in n)
      o === 'display' && (i = !0), Sn(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[Uc]
      o && (n += ';' + o), (s.cssText = n), (i = Bc.test(n))
    }
  } else t && e.removeAttribute('style')
  Pn in e &&
    ((e[Pn] = i ? s.display : ''), e[ho] && (s.display = 'none'))
}
const Ir = /\s*!important$/
function Sn(e, t, n) {
  if (K(n)) n.forEach((s) => Sn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--')))
    e.setProperty(t, n)
  else {
    const s = qc(e, t)
    Ir.test(n)
      ? e.setProperty(ct(s), n.replace(Ir, ''), 'important')
      : (e[s] = n)
  }
}
const Pr = ['Webkit', 'Moz', 'ms'],
  ls = {}
function qc(e, t) {
  const n = ls[t]
  if (n) return n
  let s = Ne(t)
  if (s !== 'filter' && s in e) return (ls[t] = s)
  s = Fn(s)
  for (let r = 0; r < Pr.length; r++) {
    const i = Pr[r] + s
    if (i in e) return (ls[t] = i)
  }
  return t
}
const Lr = 'http://www.w3.org/1999/xlink'
function Nr(e, t, n, s, r, i = ko(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Lr, t.slice(6, t.length))
      : e.setAttributeNS(Lr, t, n)
    : n == null || (i && !ei(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : Ze(n) ? String(n) : n)
}
function Fr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? fo(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l =
        i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c =
        n == null
          ? e.type === 'checkbox'
            ? 'on'
            : ''
          : String(n)
    ;(l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = ei(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function Gc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Xc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Hr = Symbol('_vei')
function Yc(e, t, n, s, r = null) {
  const i = e[Hr] || (e[Hr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = zc(t)
    if (s) {
      const f = (i[t] = Zc(s, r))
      Gc(e, l, f, c)
    } else o && (Xc(e, l, o, c), (i[t] = void 0))
  }
}
const Dr = /(?:Once|Passive|Capture)$/
function zc(e) {
  let t
  if (Dr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Dr)); )
      (e = e.slice(0, e.length - s[0].length)),
        (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : ct(e.slice(2)), t]
}
let cs = 0
const Jc = Promise.resolve(),
  Qc = () => cs || (Jc.then(() => (cs = 0)), (cs = Date.now()))
function Zc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    De(ea(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Qc()), n
}
function ea(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const $r = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ta = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? kc(e, s, o)
      : t === 'style'
        ? Kc(e, n, s)
        : en(t)
          ? Ns(t) || Yc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : na(e, t, s, o)
              )
            ? (Fr(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' ||
                  t === 'checked' ||
                  t === 'selected') &&
                Nr(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !oe(s))
              ? Fr(e, Ne(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Nr(e, t, s, o))
  }
function na(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && $r(t) && q(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (
      r === 'IMG' ||
      r === 'VIDEO' ||
      r === 'CANVAS' ||
      r === 'SOURCE'
    )
      return !1
  }
  return $r(t) && oe(n) ? !1 : t in e
}
const sa = ['ctrl', 'shift', 'alt', 'meta'],
  ra = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) =>
      sa.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Af = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = ra[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  ia = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Rf = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = ct(r.key)
        if (t.some((o) => o === i || ia[o] === i)) return e(r)
      })
    )
  },
  oa = he({ patchProp: ta }, Fc)
let as,
  jr = !1
function la() {
  return (as = jr ? as : ac(oa)), (jr = !0), as
}
const Of = (...e) => {
  const t = la().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = aa(s)
      if (r) return n(r, !0, ca(r))
    }),
    t
  )
}
function ca(e) {
  if (e instanceof SVGElement) return 'svg'
  if (
    typeof MathMLElement == 'function' &&
    e instanceof MathMLElement
  )
    return 'mathml'
}
function aa(e) {
  return oe(e) ? document.querySelector(e) : e
}
const fa = window.__VP_SITE_DATA__
function po(e) {
  return si() ? (Ko(e), !0) : !1
}
const fs = new WeakMap(),
  ua = (...e) => {
    var t
    const n = e[0],
      s = (t = rn()) == null ? void 0 : t.proxy
    if (s == null && !ji())
      throw new Error('injectLocal must be called in setup')
    return s && fs.has(s) && n in fs.get(s)
      ? fs.get(s)[n]
      : bt(...e)
  },
  go = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' &&
  globalThis instanceof WorkerGlobalScope
const da = Object.prototype.toString,
  ha = (e) => da.call(e) === '[object Object]',
  St = () => {},
  Vr = pa()
function pa() {
  var e, t
  return (
    go &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent
        )))
  )
}
function Qs(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), {
          fn: t,
          thisArg: this,
          args: s,
        })
      )
        .then(r)
        .catch(i)
    })
  }
  return n
}
const mo = (e) => e()
function ga(e, t = {}) {
  let n,
    s,
    r = St
  const i = (c) => {
    clearTimeout(c), r(), (r = St)
  }
  let o
  return (c) => {
    const f = le(e),
      a = le(t.maxWait)
    return (
      n && i(n),
      f <= 0 || (a !== void 0 && a <= 0)
        ? (s && (i(s), (s = null)), Promise.resolve(c()))
        : new Promise((h, v) => {
            ;(r = t.rejectOnCancel ? v : h),
              (o = c),
              a &&
                !s &&
                (s = setTimeout(() => {
                  n && i(n), (s = null), h(o())
                }, a)),
              (n = setTimeout(() => {
                s && i(s), (s = null), h(c())
              }, f))
          })
    )
  }
}
function ma(...e) {
  let t = 0,
    n,
    s = !0,
    r = St,
    i,
    o,
    l,
    c,
    f
  !de(e[0]) && typeof e[0] == 'object'
    ? ({
        delay: o,
        trailing: l = !0,
        leading: c = !0,
        rejectOnCancel: f = !1,
      } = e[0])
    : ([o, l = !0, c = !0, f = !1] = e)
  const a = () => {
    n && (clearTimeout(n), (n = void 0), r(), (r = St))
  }
  return (v) => {
    const y = le(o),
      x = Date.now() - t,
      _ = () => (i = v())
    return (
      a(),
      y <= 0
        ? ((t = Date.now()), _())
        : (x > y && (c || !s)
            ? ((t = Date.now()), _())
            : l &&
              (i = new Promise((V, L) => {
                ;(r = f ? L : V),
                  (n = setTimeout(
                    () => {
                      ;(t = Date.now()), (s = !0), V(_()), a()
                    },
                    Math.max(0, y - x)
                  ))
              })),
          !c && !n && (n = setTimeout(() => (s = !0), y)),
          (s = !1),
          i)
    )
  }
}
function va(e = mo, t = {}) {
  const { initialState: n = 'active' } = t,
    s = Zs(n === 'active')
  function r() {
    s.value = !1
  }
  function i() {
    s.value = !0
  }
  const o = (...l) => {
    s.value && e(...l)
  }
  return { isActive: jn(s), pause: r, resume: i, eventFilter: o }
}
function Wr(e) {
  return e.endsWith('rem')
    ? Number.parseFloat(e) * 16
    : Number.parseFloat(e)
}
function ya(e) {
  return rn()
}
function us(e) {
  return Array.isArray(e) ? e : [e]
}
function Zs(...e) {
  if (e.length !== 1) return yl(...e)
  const t = e[0]
  return typeof t == 'function'
    ? jn(gl(() => ({ get: t, set: St })))
    : Ue(t)
}
function ba(e, t = 200, n = {}) {
  return Qs(ga(t, n), e)
}
function _a(e, t = 200, n = !1, s = !0, r = !1) {
  return Qs(ma(t, n, s, r), e)
}
function wa(e, t, n = {}) {
  const { eventFilter: s = mo, ...r } = n
  return Le(e, Qs(s, t), r)
}
function Sa(e, t, n = {}) {
  const { eventFilter: s, initialState: r = 'active', ...i } = n,
    {
      eventFilter: o,
      pause: l,
      resume: c,
      isActive: f,
    } = va(s, { initialState: r })
  return {
    stop: wa(e, t, { ...i, eventFilter: o }),
    pause: l,
    resume: c,
    isActive: f,
  }
}
function qn(e, t = !0, n) {
  ya() ? Nt(e, n) : t ? e() : Vn(e)
}
function xa(e, t, n) {
  return Le(e, t, { ...n, immediate: !0 })
}
const Je = go ? window : void 0
function er(e) {
  var t
  const n = le(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function Qe(...e) {
  const t = [],
    n = () => {
      t.forEach((l) => l()), (t.length = 0)
    },
    s = (l, c, f, a) => (
      l.addEventListener(c, f, a),
      () => l.removeEventListener(c, f, a)
    ),
    r = ie(() => {
      const l = us(le(e[0])).filter((c) => c != null)
      return l.every((c) => typeof c != 'string') ? l : void 0
    }),
    i = xa(
      () => {
        var l, c
        return [
          (c =
            (l = r.value) == null
              ? void 0
              : l.map((f) => er(f))) != null
            ? c
            : [Je].filter((f) => f != null),
          us(le(r.value ? e[1] : e[0])),
          us(Ks(r.value ? e[2] : e[1])),
          le(r.value ? e[3] : e[2]),
        ]
      },
      ([l, c, f, a]) => {
        if (
          (n(),
          !(l != null && l.length) ||
            !(c != null && c.length) ||
            !(f != null && f.length))
        )
          return
        const h = ha(a) ? { ...a } : a
        t.push(
          ...l.flatMap((v) =>
            c.flatMap((y) => f.map((x) => s(v, y, x, h)))
          )
        )
      },
      { flush: 'post' }
    ),
    o = () => {
      i(), n()
    }
  return po(n), o
}
function Ta() {
  const e = Pe(!1),
    t = rn()
  return (
    t &&
      Nt(() => {
        e.value = !0
      }, t),
    e
  )
}
function Ea(e) {
  const t = Ta()
  return ie(() => (t.value, !!e()))
}
function Ca(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function Mf(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const {
      target: r = Je,
      eventName: i = 'keydown',
      passive: o = !1,
      dedupe: l = !1,
    } = s,
    c = Ca(t)
  return Qe(
    r,
    i,
    (a) => {
      ;(a.repeat && le(l)) || (c(a) && n(a))
    },
    o
  )
}
const Aa = Symbol('vueuse-ssr-width')
function Ra() {
  const e = ji() ? ua(Aa, null) : null
  return typeof e == 'number' ? e : void 0
}
function vo(e, t = {}) {
  const { window: n = Je, ssrWidth: s = Ra() } = t,
    r = Ea(
      () =>
        n &&
        'matchMedia' in n &&
        typeof n.matchMedia == 'function'
    ),
    i = Pe(typeof s == 'number'),
    o = Pe(),
    l = Pe(!1),
    c = (f) => {
      l.value = f.matches
    }
  return (
    Ji(() => {
      if (i.value) {
        i.value = !r.value
        const f = le(e).split(',')
        l.value = f.some((a) => {
          const h = a.includes('not all'),
            v = a.match(
              /\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/
            ),
            y = a.match(
              /\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/
            )
          let x = !!(v || y)
          return (
            v && x && (x = s >= Wr(v[1])),
            y && x && (x = s <= Wr(y[1])),
            h ? !x : x
          )
        })
        return
      }
      r.value &&
        ((o.value = n.matchMedia(le(e))),
        (l.value = o.value.matches))
    }),
    Qe(o, 'change', c, { passive: !0 }),
    ie(() => l.value)
  )
}
const gn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  mn = '__vueuse_ssr_handlers__',
  Oa = Ma()
function Ma() {
  return mn in gn || (gn[mn] = gn[mn] || {}), gn[mn]
}
function yo(e, t) {
  return Oa[e] || t
}
function bo(e) {
  return vo('(prefers-color-scheme: dark)', e)
}
function Ia(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const Pa = {
    boolean: {
      read: (e) => e === 'true',
      write: (e) => String(e),
    },
    object: {
      read: (e) => JSON.parse(e),
      write: (e) => JSON.stringify(e),
    },
    number: {
      read: (e) => Number.parseFloat(e),
      write: (e) => String(e),
    },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: {
      read: (e) => new Date(e),
      write: (e) => e.toISOString(),
    },
  },
  kr = 'vueuse-storage'
function La(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: f = !1,
      shallow: a,
      window: h = Je,
      eventFilter: v,
      onError: y = (A) => {
        console.error(A)
      },
      initOnMounted: x,
    } = s,
    _ = (a ? Pe : Ue)(typeof t == 'function' ? t() : t),
    V = ie(() => le(e))
  if (!n)
    try {
      n = yo('getDefaultStorage', () => {
        var A
        return (A = Je) == null ? void 0 : A.localStorage
      })()
    } catch (A) {
      y(A)
    }
  if (!n) return _
  const L = le(t),
    D = Ia(L),
    p = (r = s.serializer) != null ? r : Pa[D],
    { pause: g, resume: I } = Sa(_, () => O(_.value), {
      flush: i,
      deep: o,
      eventFilter: v,
    })
  Le(V, () => C(), { flush: i }),
    h &&
      l &&
      qn(() => {
        n instanceof Storage
          ? Qe(h, 'storage', C, { passive: !0 })
          : Qe(h, kr, P),
          x && C()
      }),
    x || C()
  function k(A, b) {
    if (h) {
      const F = {
        key: V.value,
        oldValue: A,
        newValue: b,
        storageArea: n,
      }
      h.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent('storage', F)
          : new CustomEvent(kr, { detail: F })
      )
    }
  }
  function O(A) {
    try {
      const b = n.getItem(V.value)
      if (A == null) k(b, null), n.removeItem(V.value)
      else {
        const F = p.write(A)
        b !== F && (n.setItem(V.value, F), k(b, F))
      }
    } catch (b) {
      y(b)
    }
  }
  function B(A) {
    const b = A ? A.newValue : n.getItem(V.value)
    if (b == null)
      return c && L != null && n.setItem(V.value, p.write(L)), L
    if (!A && f) {
      const F = p.read(b)
      return typeof f == 'function'
        ? f(F, L)
        : D === 'object' && !Array.isArray(F)
          ? { ...L, ...F }
          : F
    } else return typeof b != 'string' ? b : p.read(b)
  }
  function C(A) {
    if (!(A && A.storageArea !== n)) {
      if (A && A.key == null) {
        _.value = L
        return
      }
      if (!(A && A.key !== V.value)) {
        g()
        try {
          ;(A == null ? void 0 : A.newValue) !==
            p.write(_.value) && (_.value = B(A))
        } catch (b) {
          y(b)
        } finally {
          A ? Vn(I) : I()
        }
      }
    }
  }
  function P(A) {
    C(A.detail)
  }
  return _
}
const Na =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function Fa(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = Je,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: f,
      disableTransition: a = !0,
    } = e,
    h = {
      auto: '',
      light: 'light',
      dark: 'dark',
      ...(e.modes || {}),
    },
    v = bo({ window: r }),
    y = ie(() => (v.value ? 'dark' : 'light')),
    x =
      c ||
      (o == null
        ? Zs(s)
        : La(o, s, i, { window: r, listenToStorageChanges: l })),
    _ = ie(() => (x.value === 'auto' ? y.value : x.value)),
    V = yo('updateHTMLAttrs', (g, I, k) => {
      const O =
        typeof g == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(g)
          : er(g)
      if (!O) return
      const B = new Set(),
        C = new Set()
      let P = null
      if (I === 'class') {
        const b = k.split(/\s/g)
        Object.values(h)
          .flatMap((F) => (F || '').split(/\s/g))
          .filter(Boolean)
          .forEach((F) => {
            b.includes(F) ? B.add(F) : C.add(F)
          })
      } else P = { key: I, value: k }
      if (B.size === 0 && C.size === 0 && P === null) return
      let A
      a &&
        ((A = r.document.createElement('style')),
        A.appendChild(document.createTextNode(Na)),
        r.document.head.appendChild(A))
      for (const b of B) O.classList.add(b)
      for (const b of C) O.classList.remove(b)
      P && O.setAttribute(P.key, P.value),
        a &&
          (r.getComputedStyle(A).opacity,
          document.head.removeChild(A))
    })
  function L(g) {
    var I
    V(t, n, (I = h[g]) != null ? I : g)
  }
  function D(g) {
    e.onChanged ? e.onChanged(g, L) : L(g)
  }
  Le(_, D, { flush: 'post', immediate: !0 }),
    qn(() => D(_.value))
  const p = ie({
    get() {
      return f ? x.value : _.value
    },
    set(g) {
      x.value = g
    },
  })
  return Object.assign(p, { store: x, system: y, state: _ })
}
function Ha(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '' } = e,
    s = Fa({
      ...e,
      onChanged: (o, l) => {
        var c
        e.onChanged
          ? (c = e.onChanged) == null ||
            c.call(e, o === 'dark', l, o)
          : l(o)
      },
      modes: { dark: t, light: n },
    }),
    r = ie(() => s.system.value)
  return ie({
    get() {
      return s.value === 'dark'
    },
    set(o) {
      const l = o ? 'dark' : 'light'
      r.value === l ? (s.value = 'auto') : (s.value = l)
    },
  })
}
function ds(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e
}
const Ur = 1
function Da(e, t = {}) {
  const {
      throttle: n = 0,
      idle: s = 200,
      onStop: r = St,
      onScroll: i = St,
      offset: o = { left: 0, right: 0, top: 0, bottom: 0 },
      eventListenerOptions: l = { capture: !1, passive: !0 },
      behavior: c = 'auto',
      window: f = Je,
      onError: a = (O) => {
        console.error(O)
      },
    } = t,
    h = Pe(0),
    v = Pe(0),
    y = ie({
      get() {
        return h.value
      },
      set(O) {
        _(O, void 0)
      },
    }),
    x = ie({
      get() {
        return v.value
      },
      set(O) {
        _(void 0, O)
      },
    })
  function _(O, B) {
    var C, P, A, b
    if (!f) return
    const F = le(e)
    if (!F) return
    ;(A = F instanceof Document ? f.document.body : F) == null ||
      A.scrollTo({
        top: (C = le(B)) != null ? C : x.value,
        left: (P = le(O)) != null ? P : y.value,
        behavior: le(c),
      })
    const Y =
      ((b = F == null ? void 0 : F.document) == null
        ? void 0
        : b.documentElement) ||
      (F == null ? void 0 : F.documentElement) ||
      F
    y != null && (h.value = Y.scrollLeft),
      x != null && (v.value = Y.scrollTop)
  }
  const V = Pe(!1),
    L = Pt({ left: !0, right: !1, top: !0, bottom: !1 }),
    D = Pt({ left: !1, right: !1, top: !1, bottom: !1 }),
    p = (O) => {
      V.value &&
        ((V.value = !1),
        (D.left = !1),
        (D.right = !1),
        (D.top = !1),
        (D.bottom = !1),
        r(O))
    },
    g = ba(p, n + s),
    I = (O) => {
      var B
      if (!f) return
      const C =
          ((B = O == null ? void 0 : O.document) == null
            ? void 0
            : B.documentElement) ||
          (O == null ? void 0 : O.documentElement) ||
          er(O),
        {
          display: P,
          flexDirection: A,
          direction: b,
        } = getComputedStyle(C),
        F = b === 'rtl' ? -1 : 1,
        Y = C.scrollLeft
      ;(D.left = Y < h.value), (D.right = Y > h.value)
      const re = Math.abs(Y * F) <= (o.left || 0),
        W =
          Math.abs(Y * F) + C.clientWidth >=
          C.scrollWidth - (o.right || 0) - Ur
      P === 'flex' && A === 'row-reverse'
        ? ((L.left = W), (L.right = re))
        : ((L.left = re), (L.right = W)),
        (h.value = Y)
      let X = C.scrollTop
      O === f.document && !X && (X = f.document.body.scrollTop),
        (D.top = X < v.value),
        (D.bottom = X > v.value)
      const $ = Math.abs(X) <= (o.top || 0),
        ae =
          Math.abs(X) + C.clientHeight >=
          C.scrollHeight - (o.bottom || 0) - Ur
      P === 'flex' && A === 'column-reverse'
        ? ((L.top = ae), (L.bottom = $))
        : ((L.top = $), (L.bottom = ae)),
        (v.value = X)
    },
    k = (O) => {
      var B
      if (!f) return
      const C =
        (B = O.target.documentElement) != null ? B : O.target
      I(C), (V.value = !0), g(O), i(O)
    }
  return (
    Qe(e, 'scroll', n ? _a(k, n, !0, !1) : k, l),
    qn(() => {
      try {
        const O = le(e)
        if (!O) return
        I(O)
      } catch (O) {
        a(O)
      }
    }),
    Qe(e, 'scrollend', p, l),
    {
      x: y,
      y: x,
      isScrolling: V,
      arrivedState: L,
      directions: D,
      measure() {
        const O = le(e)
        f && O && I(O)
      },
    }
  )
}
function _o(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : _o(n)
  }
}
function $a(e) {
  const t = e || window.event,
    n = t.target
  return _o(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const hs = new WeakMap()
function If(e, t = !1) {
  const n = Pe(t)
  let s = null,
    r = ''
  Le(
    Zs(e),
    (l) => {
      const c = ds(le(l))
      if (c) {
        const f = c
        if (
          (hs.get(f) || hs.set(f, f.style.overflow),
          f.style.overflow !== 'hidden' &&
            (r = f.style.overflow),
          f.style.overflow === 'hidden')
        )
          return (n.value = !0)
        if (n.value) return (f.style.overflow = 'hidden')
      }
    },
    { immediate: !0 }
  )
  const i = () => {
      const l = ds(le(e))
      !l ||
        n.value ||
        (Vr &&
          (s = Qe(
            l,
            'touchmove',
            (c) => {
              $a(c)
            },
            { passive: !1 }
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      const l = ds(le(e))
      !l ||
        !n.value ||
        (Vr && (s == null || s()),
        (l.style.overflow = r),
        hs.delete(l),
        (n.value = !1))
    }
  return (
    po(o),
    ie({
      get() {
        return n.value
      },
      set(l) {
        l ? i() : o()
      },
    })
  )
}
function Pf(e = {}) {
  const { window: t = Je, ...n } = e
  return Da(t, n)
}
function Lf(e = {}) {
  const {
      window: t = Je,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = 'inner',
    } = e,
    l = Pe(n),
    c = Pe(s),
    f = () => {
      if (t)
        if (o === 'outer')
          (l.value = t.outerWidth), (c.value = t.outerHeight)
        else if (o === 'visual' && t.visualViewport) {
          const {
            width: h,
            height: v,
            scale: y,
          } = t.visualViewport
          ;(l.value = Math.round(h * y)),
            (c.value = Math.round(v * y))
        } else
          i
            ? ((l.value = t.innerWidth),
              (c.value = t.innerHeight))
            : ((l.value =
                t.document.documentElement.clientWidth),
              (c.value =
                t.document.documentElement.clientHeight))
    }
  f(), qn(f)
  const a = { passive: !0 }
  if (
    (Qe('resize', f, a),
    t &&
      o === 'visual' &&
      t.visualViewport &&
      Qe(t.visualViewport, 'resize', f, a),
    r)
  ) {
    const h = vo('(orientation: portrait)')
    Le(h, () => f())
  }
  return { width: l, height: c }
}
const ps = {}
var gs = {}
const wo = /^(?:[a-z]+:|\/\/)/i,
  ja = 'vitepress-theme-appearance',
  Va = /#.*$/,
  Wa = /[?#].*$/,
  ka = /(?:(^|\/)index)?\.(?:md|html)$/,
  ye = typeof document < 'u',
  So = {
    relativePath: '404.md',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function Ua(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = Br(`/${e}`)), n)) return new RegExp(t).test(e)
  if (Br(t) !== e) return !1
  const s = t.match(Va)
  return s ? (ye ? location.hash : '') === s[0] : !0
}
function Br(e) {
  return decodeURI(e).replace(Wa, '').replace(ka, '$1')
}
function Ba(e) {
  return wo.test(e)
}
function Ka(e, t) {
  return (
    Object.keys((e == null ? void 0 : e.locales) || {}).find(
      (n) => n !== 'root' && !Ba(n) && Ua(t, `/${n}/`, !0)
    ) || 'root'
  )
}
function qa(e, t) {
  var s, r, i, o, l, c, f
  const n = Ka(e, t)
  return Object.assign({}, e, {
    localeIndex: n,
    lang:
      ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title:
      ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ??
      e.description,
    head: To(
      e.head,
      ((c = e.locales[n]) == null ? void 0 : c.head) ?? []
    ),
    themeConfig: {
      ...e.themeConfig,
      ...((f = e.locales[n]) == null ? void 0 : f.themeConfig),
    },
  })
}
function xo(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = Ga(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function Ga(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function Xa(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null
    ? !1
    : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function To(e, t) {
  return [...e.filter((n) => !Xa(t, n)), ...t]
}
const Ya = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  za = /^[a-z]:/i
function Kr(e) {
  const t = za.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(Ya, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const ms = new Set()
function Ja(e) {
  if (ms.size === 0) {
    const n =
      (typeof process == 'object' &&
        (gs == null ? void 0 : gs.VITE_EXTRA_EXTENSIONS)) ||
      (ps == null ? void 0 : ps.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => ms.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !ms.has(t.toLowerCase())
}
const Qa = Symbol(),
  wt = Pe(fa)
function Nf(e) {
  const t = ie(() => qa(wt.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? Ue(!0)
        : n === 'force-auto'
          ? bo()
          : n
            ? Ha({
                storageKey: ja,
                initialValue: () =>
                  n === 'dark' ? 'dark' : 'auto',
                ...(typeof n == 'object' ? n : {}),
              })
            : Ue(!1),
    r = Ue(ye ? location.hash : '')
  return (
    ye &&
      window.addEventListener('hashchange', () => {
        r.value = location.hash
      }),
    Le(
      () => e.data,
      () => {
        r.value = ye ? location.hash : ''
      }
    ),
    {
      site: t,
      theme: ie(() => t.value.themeConfig),
      page: ie(() => e.data),
      frontmatter: ie(() => e.data.frontmatter),
      params: ie(() => e.data.params),
      lang: ie(() => t.value.lang),
      dir: ie(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: ie(() => t.value.localeIndex || 'root'),
      title: ie(() => xo(t.value, e.data)),
      description: ie(
        () => e.data.description || t.value.description
      ),
      isDark: s,
      hash: ie(() => r.value),
    }
  )
}
function Za() {
  const e = bt(Qa)
  if (!e)
    throw new Error(
      'vitepress data not properly injected in app'
    )
  return e
}
function ef(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function qr(e) {
  return wo.test(e) || !e.startsWith('/')
    ? e
    : ef(wt.value.base, e)
}
function tf(e) {
  let t = e.replace(/\.html$/, '')
  if (
    ((t = decodeURIComponent(t)),
    (t = t.replace(/\/$/, '/index')),
    ye)
  ) {
    const n = '/Aurora-X/'
    t =
      Kr(t.slice(n.length).replace(/\//g, '_') || 'index') +
      '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${Kr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let xn = []
function Ff(e) {
  xn.push(e),
    kn(() => {
      xn = xn.filter((t) => t !== e)
    })
}
function nf() {
  let e = wt.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = Gr(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = Gr(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function Gr(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const sf = Symbol(),
  Eo = 'http://a.com',
  rf = () => ({ path: '/', component: null, data: So })
function Hf(e, t) {
  const n = Pt(rf()),
    s = { route: n, go: r }
  async function r(l = ye ? location.href : '/') {
    var c, f
    ;(l = vs(l)),
      (await ((c = s.onBeforeRouteChange) == null
        ? void 0
        : c.call(s, l))) !== !1 &&
        (ye &&
          l !== vs(location.href) &&
          (history.replaceState(
            { scrollPosition: window.scrollY },
            ''
          ),
          history.pushState({}, '', l)),
        await o(l),
        await ((f =
          s.onAfterRouteChange ?? s.onAfterRouteChanged) == null
          ? void 0
          : f(l)))
  }
  let i = null
  async function o(l, c = 0, f = !1) {
    var v, y
    if (
      (await ((v = s.onBeforePageLoad) == null
        ? void 0
        : v.call(s, l))) === !1
    )
      return
    const a = new URL(l, Eo),
      h = (i = a.pathname)
    try {
      let x = await e(h)
      if (!x) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: _, __pageData: V } = x
        if (!_) throw new Error(`Invalid route component: ${_}`)
        await ((y = s.onAfterPageLoad) == null
          ? void 0
          : y.call(s, l)),
          (n.path = ye ? h : qr(h)),
          (n.component = _n(_)),
          (n.data = _n(V)),
          ye &&
            Vn(() => {
              let L =
                wt.value.base +
                V.relativePath.replace(
                  /(?:(^|\/)index)?\.md$/,
                  '$1'
                )
              if (
                (!wt.value.cleanUrls &&
                  !L.endsWith('/') &&
                  (L += '.html'),
                L !== a.pathname &&
                  ((a.pathname = L),
                  (l = L + a.search + a.hash),
                  history.replaceState({}, '', l)),
                a.hash && !c)
              ) {
                let D = null
                try {
                  D = document.getElementById(
                    decodeURIComponent(a.hash).slice(1)
                  )
                } catch (p) {
                  console.warn(p)
                }
                if (D) {
                  Xr(D, a.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            })
      }
    } catch (x) {
      if (
        (!/fetch|Page not found/.test(x.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(x),
        !f)
      )
        try {
          const _ = await fetch(wt.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await _.json()),
            await o(l, c, !0)
          return
        } catch {}
      if (i === h) {
        ;(i = null),
          (n.path = ye ? h : qr(h)),
          (n.component = t ? _n(t) : null)
        const _ = ye
          ? h
              .replace(/(^|\/)$/, '$1index')
              .replace(/(\.html)?$/, '.md')
              .replace(/^\//, '')
          : '404.md'
        n.data = { ...So, relativePath: _ }
      }
    }
  }
  return (
    ye &&
      (history.state === null && history.replaceState({}, ''),
      window.addEventListener(
        'click',
        (l) => {
          if (
            l.defaultPrevented ||
            !(l.target instanceof Element) ||
            l.target.closest('button') ||
            l.button !== 0 ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            l.metaKey
          )
            return
          const c = l.target.closest('a')
          if (
            !c ||
            c.closest('.vp-raw') ||
            c.hasAttribute('download') ||
            c.hasAttribute('target')
          )
            return
          const f =
            c.getAttribute('href') ??
            (c instanceof SVGAElement
              ? c.getAttribute('xlink:href')
              : null)
          if (f == null) return
          const {
              href: a,
              origin: h,
              pathname: v,
              hash: y,
              search: x,
            } = new URL(f, c.baseURI),
            _ = new URL(location.href)
          h === _.origin &&
            Ja(v) &&
            (l.preventDefault(),
            v === _.pathname && x === _.search
              ? (y !== _.hash &&
                  (history.pushState({}, '', a),
                  window.dispatchEvent(
                    new HashChangeEvent('hashchange', {
                      oldURL: _.href,
                      newURL: a,
                    })
                  )),
                y
                  ? Xr(
                      c,
                      y,
                      c.classList.contains('header-anchor')
                    )
                  : window.scrollTo(0, 0))
              : r(a))
        },
        { capture: !0 }
      ),
      window.addEventListener('popstate', async (l) => {
        var f
        if (l.state === null) return
        const c = vs(location.href)
        await o(c, (l.state && l.state.scrollPosition) || 0),
          await ((f =
            s.onAfterRouteChange ?? s.onAfterRouteChanged) ==
          null
            ? void 0
            : f(c))
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function of() {
  const e = bt(sf)
  if (!e)
    throw new Error('useRouter() is called without provider.')
  return e
}
function Co() {
  return of().route
}
function Xr(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({
            left: 0,
            top: o,
            behavior: 'smooth',
          })
    }
    const i = parseInt(
        window.getComputedStyle(s).paddingTop,
        10
      ),
      o =
        window.scrollY + s.getBoundingClientRect().top - nf() + i
    requestAnimationFrame(r)
  }
}
function vs(e) {
  const t = new URL(e, Eo)
  return (
    (t.pathname = t.pathname.replace(
      /(^|\/)index(\.html)?$/,
      '$1'
    )),
    wt.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const vn = () => xn.forEach((e) => e()),
  Df = Gs({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = Co(),
        { frontmatter: n, site: s } = Za()
      return (
        Le(n, vn, { deep: !0, flush: 'post' }),
        () =>
          Is(
            e.as,
            s.value.contentProps ?? {
              style: { position: 'relative' },
            },
            [
              t.component
                ? Is(t.component, {
                    onVnodeMounted: vn,
                    onVnodeUpdated: vn,
                    onVnodeUnmounted: vn,
                  })
                : '404 Page Not Found',
            ]
          )
      )
    },
  }),
  $f = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  jf = Gs({
    setup(e, { slots: t }) {
      const n = Ue(!1)
      return (
        Nt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
function Vf() {
  ye &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s =
          (n = t.parentElement) == null
            ? void 0
            : n.parentElement
        if (!s) return
        const r = Array.from(
          s.querySelectorAll('input')
        ).indexOf(t)
        if (r < 0) return
        const i = s.querySelector('.blocks')
        if (!i) return
        const o = Array.from(i.children).find((f) =>
          f.classList.contains('active')
        )
        if (!o) return
        const l = i.children[r]
        if (!l || o === l) return
        o.classList.remove('active'), l.classList.add('active')
        const c =
          s == null
            ? void 0
            : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function Wf() {
  if (ye) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i =
            (s = n.nextElementSibling) == null
              ? void 0
              : s.nextElementSibling
        if (!r || !i) return
        const o =
            /language-(shellscript|shell|bash|sh|zsh)/.test(
              r.className
            ),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((a) =>
          a.remove()
        )
        let f = c.textContent || ''
        o && (f = f.replace(/^ *(\$|>) /gm, '').trim()),
          lf(f).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const a = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, a)
          })
      }
    })
  }
}
async function lf(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus()
  }
}
function kf(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;(n = !1),
        i.forEach((l) => {
          const c = ys(l)
          for (const f of document.head.children)
            if (f.isEqualNode(c)) {
              s.push(f)
              return
            }
        })
      return
    }
    const o = i.map(ys)
    s.forEach((l, c) => {
      const f = o.findIndex((a) =>
        a == null ? void 0 : a.isEqualNode(l ?? null)
      )
      f !== -1
        ? delete o[f]
        : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean))
  }
  Ji(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      f = xo(o, i)
    f !== document.title && (document.title = f)
    const a = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== a &&
        h.setAttribute('content', a)
      : ys(['meta', { name: 'description', content: a }]),
      r(To(o.head, af(c)))
  })
}
function ys([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return (
    n && (s.innerHTML = n),
    e === 'script' && t.async == null && (s.async = !1),
    s
  )
}
function cf(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function af(e) {
  return e.filter((t) => !cf(t))
}
const bs = new Set(),
  Ao = () => document.createElement('link'),
  ff = (e) => {
    const t = Ao()
    ;(t.rel = 'prefetch'),
      (t.href = e),
      document.head.appendChild(t)
  },
  uf = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let yn
const df =
  ye &&
  (yn = Ao()) &&
  yn.relList &&
  yn.relList.supports &&
  yn.relList.supports('prefetch')
    ? ff
    : uf
function Uf() {
  if (!ye || !window.IntersectionObserver) return
  let e
  if (
    (e = navigator.connection) &&
    (e.saveData || /2g/.test(e.effectiveType))
  )
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!bs.has(c)) {
              bs.add(c)
              const f = tf(c)
              f && df(f)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString
                ? i.href.animVal
                : i.href,
              i.baseURI
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname
                ? n.observe(i)
                : bs.add(l)))
        })
      })
  }
  Nt(s)
  const r = Co()
  Le(() => r.path, s),
    kn(() => {
      n && n.disconnect()
    })
}
export {
  bf as $,
  Ua as A,
  vo as B,
  Le as C,
  Ji as D,
  kn as E,
  Se as F,
  wf as G,
  kl as H,
  nf as I,
  vf as J,
  gf as K,
  Ff as L,
  wo as M,
  Co as N,
  xc as O,
  bt as P,
  Lf as Q,
  Ds as R,
  Mf as S,
  Ef as T,
  Vn as U,
  Pf as V,
  ye as W,
  jn as X,
  If as Y,
  nc as Z,
  $f as _,
  Sf as a,
  Rf as a0,
  Ii as a1,
  Af as a2,
  _f as a3,
  kf as a4,
  sf as a5,
  Nf as a6,
  Qa as a7,
  Df as a8,
  jf as a9,
  wt as aa,
  Hf as ab,
  tf as ac,
  Of as ad,
  Uf as ae,
  Wf as af,
  Vf as ag,
  Is as ah,
  xf as ai,
  io as b,
  ie as c,
  pf as d,
  Gs as e,
  Nt as f,
  Tf as g,
  Ks as h,
  de as i,
  Os as j,
  mf as k,
  ce as l,
  yf as m,
  $s as n,
  Rs as o,
  oo as p,
  Al as q,
  Ue as r,
  Pe as s,
  Uo as t,
  Za as u,
  Cf as v,
  hf as w,
  Ba as x,
  Ja as y,
  qr as z,
}
