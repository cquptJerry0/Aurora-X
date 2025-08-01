import {
  u as ue,
  c as $,
  d as Ue,
  r as M,
  i as Ge,
  _ as b,
  a as i,
  o as a,
  b as d,
  e as k,
  s as x,
  f as j,
  g as h,
  w as je,
  h as r,
  n as w,
  j as g,
  k as D,
  t as N,
  l as _,
  v as Re,
  F as C,
  m as u,
  p as W,
  q as f,
  T as de,
  x as qe,
  y as We,
  z as ve,
  A as K,
  B as re,
  C as G,
  D as Z,
  E as pe,
  G as fe,
  H as Ke,
  I as Je,
  J as A,
  K as J,
  L as ee,
  M as Te,
  N as te,
  O as q,
  P as ne,
  Q as xe,
  R as Me,
  S as Ye,
  U as Ne,
  V as Ce,
  W as oe,
  X as Qe,
  Y as Ie,
  Z as He,
  $ as Xe,
  a0 as Ze,
  a1 as et,
  a2 as tt,
  a3 as nt,
} from './framework.zDigGmb2.js'
const ot = {}
function Be(s) {
  const e = {}
  for (const t in s) {
    const o = s[t]
    typeof o == 'string'
      ? (e[t] = decodeURIComponent(o))
      : typeof o == 'object' && (e[t] = Be(o))
  }
  return e
}
function st(s, e) {
  const { lang: t } = ue(),
    o = $(() => {
      var m
      return (m = e.value[s.src]) == null ? void 0 : m.data
    }),
    n = $(() => {
      var m
      return decodeURIComponent(
        (m = o.value) == null ? void 0 : m.render
      )
    }),
    l = $(() => {
      var m
      return decodeURIComponent(
        (m = o.value) == null ? void 0 : m.code
      )
    }),
    c = $(() => {
      var m, L
      return (m = e.value[s.src]) != null && m.comp
        ? Ue((L = e.value[s.src]) == null ? void 0 : L.comp)
        : null
    }),
    v = $(() => {
      var m, L
      return (m = o.value) != null && m.block
        ? Be((L = o.value) == null ? void 0 : L.block)
        : null
    }),
    p = $(() => {
      if (!v.value) return null
      const m = Object.keys(v.value)[0]
      return v.value[t.value] ?? v.value[m]
    })
  return {
    demoData: o,
    demo: c,
    render: n,
    code: l,
    block: v,
    content: p,
  }
}
function at(s = 3e3) {
  const e = M(!1)
  return {
    copied: e,
    copy: (o) => {
      let n
      Ge(o) ? (n = o.value) : (n = o),
        it(n).then(() => {
          e.value = !0
          const l = setTimeout(() => {
            ;(e.value = !1), clearTimeout(l)
          }, s)
        })
    },
  }
}
function he() {
  return new DOMException(
    'The request is not allowed',
    'NotAllowedError'
  )
}
async function rt(s) {
  if (!navigator.clipboard) throw he()
  return navigator.clipboard.writeText(s)
}
async function lt(s) {
  const e = document.createElement('span')
  ;(e.textContent = s),
    (e.style.whiteSpace = 'pre'),
    (e.style.webkitUserSelect = 'auto'),
    (e.style.userSelect = 'all'),
    document.body.appendChild(e)
  const t = window.getSelection(),
    o = window.document.createRange()
  t.removeAllRanges(), o.selectNode(e), t.addRange(o)
  let n = !1
  try {
    n = window.document.execCommand('copy')
  } finally {
    t.removeAllRanges(), window.document.body.removeChild(e)
  }
  if (!n) throw he()
}
async function it(s) {
  try {
    await rt(s)
  } catch (e) {
    try {
      await lt(s)
    } catch (t) {
      throw t || e || he()
    }
  }
}
const ct = {},
  ut = {
    width: '16',
    height: '16',
    viewBox: '0 0 1024 1024',
    xmlns: 'http://www.w3.org/2000/svg',
  }
function dt(s, e) {
  return (
    a(),
    i(
      'svg',
      ut,
      e[0] ||
        (e[0] = [
          d(
            'path',
            {
              d: 'M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z',
              fill: 'currentColor',
            },
            null,
            -1
          ),
        ])
    )
  )
}
const vt = b(ct, [['render', dt]]),
  pt = {},
  ft = {
    width: '16',
    height: '16',
    viewBox: '0 0 1024 1024',
    xmlns: 'http://www.w3.org/2000/svg',
  }
function ht(s, e) {
  return (
    a(),
    i(
      'svg',
      ft,
      e[0] ||
        (e[0] = [
          d(
            'path',
            {
              d: 'M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z',
              fill: 'currentColor',
            },
            null,
            -1
          ),
        ])
    )
  )
}
const mt = b(pt, [['render', ht]]),
  _t = {},
  kt = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 1024 1024',
  }
function bt(s, e) {
  return (
    a(),
    i(
      'svg',
      kt,
      e[0] ||
        (e[0] = [
          d(
            'path',
            {
              fill: 'currentColor',
              d: 'M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z',
            },
            null,
            -1
          ),
        ])
    )
  )
}
const gt = b(_t, [['render', bt]]),
  $t = {},
  yt = {
    class: 'icon',
    width: '16px',
    height: '16px',
    viewBox: '0 0 1024 1024',
    xmlns: 'http://www.w3.org/2000/svg',
  }
function Lt(s, e) {
  return (
    a(),
    i(
      'svg',
      yt,
      e[0] ||
        (e[0] = [
          d(
            'path',
            {
              fill: 'currentColor',
              d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1 0.4-12.8-6.3-12.8z',
            },
            null,
            -1
          ),
        ])
    )
  )
}
const Pt = b($t, [['render', Lt]]),
  Vt = {},
  St = {
    xmlns: 'http://www.w3.org/2000/svg',
    class: 'icon',
    viewBox: '0 0 1024 1024',
  }
function wt(s, e) {
  return (
    a(),
    i(
      'svg',
      St,
      e[0] ||
        (e[0] = [
          d(
            'path',
            {
              fill: 'currentColor',
              d: 'M911.7 385.3l-.3-1.5c-.2-1-.3-1.9-.6-2.9-.2-.6-.4-1.1-.5-1.7-.3-.8-.5-1.7-.9-2.5-.2-.6-.5-1.1-.8-1.7-.4-.8-.8-1.5-1.2-2.3-.3-.5-.6-1.1-1-1.6-.8-1.2-1.7-2.4-2.6-3.6-.5-.6-1.1-1.3-1.7-1.9-.4-.5-.9-.9-1.4-1.3-.6-.6-1.3-1.1-1.9-1.6-.5-.4-1-.8-1.6-1.2-.2-.1-.4-.3-.6-.4L531.1 117.8a34.3 34.3 0 0 0-38.1 0L127.3 361.3c-.2.1-.4.3-.6.4-.5.4-1 .8-1.6 1.2-.7.5-1.3 1.1-1.9 1.6-.5.4-.9.9-1.4 1.3-.6.6-1.2 1.2-1.7 1.9-1 1.1-1.8 2.3-2.6 3.6-.3.5-.7 1-1 1.6-.4.7-.8 1.5-1.2 2.3-.3.5-.5 1.1-.8 1.7-.3.8-.6 1.7-.9 2.5-.2.6-.4 1.1-.5 1.7-.2.9-.4 1.9-.6 2.9l-.3 1.5c-.2 1.5-.3 3-.3 4.5v243.5c0 1.5.1 3 .3 4.5l.3 1.5.6 2.9c.2.6.3 1.1.5 1.7.3.9.6 1.7.9 2.5.2.6.5 1.1.8 1.7.4.8.7 1.5 1.2 2.3.3.5.6 1.1 1 1.6.5.7.9 1.4 1.5 2.1l1.2 1.5c.5.6 1.1 1.3 1.7 1.9.4.5.9.9 1.4 1.3.6.6 1.3 1.1 1.9 1.6.5.4 1 .8 1.6 1.2.2.1.4.3.6.4L493 905.7c5.6 3.8 12.3 5.8 19.1 5.8 6.6 0 13.3-1.9 19.1-5.8l365.6-243.5c.2-.1.4-.3.6-.4.5-.4 1-.8 1.6-1.2.7-.5 1.3-1.1 1.9-1.6.5-.4.9-.9 1.4-1.3.6-.6 1.2-1.2 1.7-1.9l1.2-1.5 1.5-2.1c.3-.5.7-1 1-1.6.4-.8.8-1.5 1.2-2.3.3-.5.5-1.1.8-1.7.3-.8.6-1.7.9-2.5.2-.5.4-1.1.5-1.7.3-.9.4-1.9.6-2.9l.3-1.5c.2-1.5.3-3 .3-4.5V389.8c-.3-1.5-.4-3-.6-4.5zM546.4 210.5l269.4 179.4-120.3 80.4-149-99.6V210.5zm-68.8 0v160.2l-149 99.6-120.3-80.4 269.3-179.4zM180.7 454.1l86 57.5-86 57.5v-115zm296.9 358.5L208.3 633.2l120.3-80.4 149 99.6v160.2zM512 592.8l-121.6-81.2L512 430.3l121.6 81.2L512 592.8zm34.4 219.8V652.4l149-99.6 120.3 80.4-269.3 179.4zM843.3 569l-86-57.5 86-57.5v115z',
            },
            null,
            -1
          ),
        ])
    )
  )
}
const Tt = b(Vt, [['render', wt]]),
  Mt = {},
  Nt = {
    xmlns: 'http://www.w3.org/2000/svg',
    class: 'icon',
    viewBox: '0 0 1024 1024',
  }
function Ct(s, e) {
  return (
    a(),
    i(
      'svg',
      Nt,
      e[0] ||
        (e[0] = [
          d(
            'path',
            {
              fill: 'currentColor',
              d: 'M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z',
            },
            null,
            -1
          ),
        ])
    )
  )
}
const It = b(Mt, [['render', Ct]]),
  Ht = {},
  Bt = {
    xmlns: 'http://www.w3.org/2000/svg',
    class: 'icon',
    viewBox: '0 0 1024 1024',
  }
function At(s, e) {
  return (
    a(),
    i(
      'svg',
      Bt,
      e[0] ||
        (e[0] = [
          d(
            'path',
            {
              fill: 'currentColor',
              d: 'M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z',
            },
            null,
            -1
          ),
        ])
    )
  )
}
const Et = b(Ht, [['render', At]]),
  Ft = ['id'],
  Dt = { key: 1, class: 'code-box-meta markdown' },
  Ot = { key: 0, class: 'code-box-title' },
  zt = ['href'],
  Ut = { key: 1, class: 'code-box-description' },
  Gt = ['innerHTML'],
  jt = { key: 0, class: 'code-box-code-action' },
  Rt = { key: 1, class: 'code-box-code-action' },
  qt = { key: 2, class: 'code-box-code-action' },
  Wt = { key: 3, class: 'code-box-code-action' },
  Kt = { key: 4, class: 'code-box-code-action' },
  Jt = { class: 'highlight-wrapper' },
  xt = ['innerHTML'],
  Yt = ['innerHTML'],
  Qt = k({
    __name: 'index',
    props: {
      src: {},
      title: {},
      desc: {},
      raw: { type: Boolean },
    },
    setup(s) {
      const e = s,
        t = x(ot),
        { demo: o, render: n, content: l, code: c } = st(e, t),
        { isDark: v } = ue(),
        p = $(
          () => `${e.src.split('.')[0].split('/').join('-')}`
        ),
        m = x()
      j(async () => {
        ;(m.value = location.hash.slice(1)),
          window.addEventListener('hashchange', () => {
            m.value = location.hash.slice(1)
          })
      })
      const { copied: L, copy: y } = at()
      function V() {
        y(c)
      }
      const T = x(!1)
      function H() {
        T.value = !T.value
      }
      const B = $(() => ({
          expand: T.value,
          'code-box-dark': v.value,
          'code-box-active': m.value === p.value,
        })),
        S = $(() => {
          var I, E, F, z, U
          return !!(
            c.value ||
            ((I = l.value) != null && I.title) ||
            ((E = l.value) != null && E.content) ||
            ((F = l.value) != null && F.codesandbox) ||
            ((z = l.value) != null && z.codepen) ||
            ((U = l.value) != null && U.stackblitz)
          )
        })
      return (I, E) => {
        var F, z, U, ye, Le, Pe, Ve, Se
        return I.raw
          ? (a(),
            i(
              C,
              { key: 1 },
              [
                r(n)
                  ? (a(),
                    i(
                      'div',
                      { key: 0, innerHTML: r(n) },
                      null,
                      8,
                      Yt
                    ))
                  : h('', !0),
              ],
              64
            ))
          : (a(),
            i(
              'section',
              {
                key: 0,
                id: p.value,
                class: w(['code-box', B.value]),
              },
              [
                r(o)
                  ? (a(),
                    i(
                      'section',
                      {
                        key: 0,
                        class: w([
                          'code-box-demo vp-raw',
                          S.value ? '' : 'code-box-demo-empty',
                        ]),
                      },
                      [(a(), g(D(r(o))))],
                      2
                    ))
                  : h('', !0),
                S.value
                  ? (a(),
                    i('section', Dt, [
                      ((F = r(l)) != null && F.title) || I.title
                        ? (a(),
                          i('div', Ot, [
                            d(
                              'a',
                              {
                                href: `#${p.value}`,
                                style: {
                                  'text-decoration': 'none',
                                },
                              },
                              N(
                                ((z = r(l)) == null
                                  ? void 0
                                  : z.title) ?? I.title
                              ),
                              9,
                              zt
                            ),
                          ]))
                        : h('', !0),
                      ((U = r(l)) != null && U.content) || I.desc
                        ? (a(),
                          i('div', Ut, [
                            d(
                              'div',
                              {
                                innerHTML:
                                  ((ye = r(l)) == null
                                    ? void 0
                                    : ye.content) ?? I.desc,
                              },
                              null,
                              8,
                              Gt
                            ),
                          ]))
                        : h('', !0),
                      d(
                        'div',
                        {
                          class: w([
                            'code-box-actions',
                            ((Le = r(l)) != null &&
                              Le.content) ||
                            I.desc
                              ? 'code-box-action-has-border'
                              : '',
                          ]),
                        },
                        [
                          (Pe = r(l)) != null && Pe.codesandbox
                            ? (a(), i('div', jt, [_(It)]))
                            : h('', !0),
                          (Ve = r(l)) != null && Ve.codepen
                            ? (a(), i('div', Rt, [_(Tt)]))
                            : h('', !0),
                          (Se = r(l)) != null && Se.stackblitz
                            ? (a(), i('div', qt, [_(Et)]))
                            : h('', !0),
                          r(c)
                            ? (a(),
                              i('div', Wt, [
                                r(L)
                                  ? (a(),
                                    g(Pt, {
                                      key: 1,
                                      style: {
                                        color:
                                          'var(--vp-c-brand)',
                                      },
                                    }))
                                  : (a(),
                                    g(gt, {
                                      key: 0,
                                      onClick: V,
                                    })),
                              ]))
                            : h('', !0),
                          r(c)
                            ? (a(),
                              i('div', Kt, [
                                _(
                                  mt,
                                  {
                                    class: w(
                                      `code-expand-icon-${T.value ? 'show' : 'hide'}`
                                    ),
                                    onClick: H,
                                  },
                                  null,
                                  8,
                                  ['class']
                                ),
                                _(
                                  vt,
                                  {
                                    class: w(
                                      `code-expand-icon-${T.value ? 'hide' : 'show'}`
                                    ),
                                    onClick: H,
                                  },
                                  null,
                                  8,
                                  ['class']
                                ),
                              ]))
                            : h('', !0),
                        ],
                        2
                      ),
                    ]))
                  : h('', !0),
                je(
                  d(
                    'section',
                    Jt,
                    [
                      r(n)
                        ? (a(),
                          i(
                            'div',
                            { key: 0, innerHTML: r(n) },
                            null,
                            8,
                            xt
                          ))
                        : h('', !0),
                    ],
                    512
                  ),
                  [[Re, T.value]]
                ),
              ],
              10,
              Ft
            ))
      }
    },
  }),
  Xt = k({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(s) {
      return (e, t) => (
        a(),
        i(
          'span',
          { class: w(['VPBadge', e.type]) },
          [u(e.$slots, 'default', {}, () => [W(N(e.text), 1)])],
          2
        )
      )
    },
  }),
  Zt = { key: 0, class: 'VPBackdrop' },
  en = k({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(s) {
      return (e, t) => (
        a(),
        g(
          de,
          { name: 'fade' },
          {
            default: f(() => [
              e.show ? (a(), i('div', Zt)) : h('', !0),
            ]),
            _: 1,
          }
        )
      )
    },
  }),
  tn = b(en, [['__scopeId', 'data-v-b06cdb19']]),
  P = ue
function nn(s, e) {
  let t,
    o = !1
  return () => {
    t && clearTimeout(t),
      o
        ? (t = setTimeout(s, e))
        : (s(), (o = !0) && setTimeout(() => (o = !1), e))
  }
}
function le(s) {
  return s.startsWith('/') ? s : `/${s}`
}
function me(s) {
  const {
    pathname: e,
    search: t,
    hash: o,
    protocol: n,
  } = new URL(s, 'http://a.com')
  if (
    qe(s) ||
    s.startsWith('#') ||
    !n.startsWith('http') ||
    !We(e)
  )
    return s
  const { site: l } = P(),
    c =
      e.endsWith('/') || e.endsWith('.html')
        ? s
        : s.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(/(\.md)?$/, l.value.cleanUrls ? '' : '.html')}${t}${o}`
          )
  return ve(c)
}
function Y({ correspondingLink: s = !1 } = {}) {
  const {
      site: e,
      localeIndex: t,
      page: o,
      theme: n,
      hash: l,
    } = P(),
    c = $(() => {
      var p, m
      return {
        label:
          (p = e.value.locales[t.value]) == null
            ? void 0
            : p.label,
        link:
          ((m = e.value.locales[t.value]) == null
            ? void 0
            : m.link) ||
          (t.value === 'root' ? '/' : `/${t.value}/`),
      }
    })
  return {
    localeLinks: $(() =>
      Object.entries(e.value.locales).flatMap(([p, m]) =>
        c.value.label === m.label
          ? []
          : {
              text: m.label,
              link:
                on(
                  m.link || (p === 'root' ? '/' : `/${p}/`),
                  n.value.i18nRouting !== !1 && s,
                  o.value.relativePath.slice(
                    c.value.link.length - 1
                  ),
                  !e.value.cleanUrls
                ) + l.value,
            }
      )
    ),
    currentLang: c,
  }
}
function on(s, e, t, o) {
  return e
    ? s.replace(/\/$/, '') +
        le(
          t
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, o ? '.html' : '')
        )
    : s
}
const sn = { class: 'NotFound' },
  an = { class: 'code' },
  rn = { class: 'title' },
  ln = { class: 'quote' },
  cn = { class: 'action' },
  un = ['href', 'aria-label'],
  dn = k({
    __name: 'NotFound',
    setup(s) {
      const { theme: e } = P(),
        { currentLang: t } = Y()
      return (o, n) => {
        var l, c, v, p, m
        return (
          a(),
          i('div', sn, [
            d(
              'p',
              an,
              N(
                ((l = r(e).notFound) == null
                  ? void 0
                  : l.code) ?? '404'
              ),
              1
            ),
            d(
              'h1',
              rn,
              N(
                ((c = r(e).notFound) == null
                  ? void 0
                  : c.title) ?? 'PAGE NOT FOUND'
              ),
              1
            ),
            n[0] ||
              (n[0] = d('div', { class: 'divider' }, null, -1)),
            d(
              'blockquote',
              ln,
              N(
                ((v = r(e).notFound) == null
                  ? void 0
                  : v.quote) ??
                  "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
              ),
              1
            ),
            d('div', cn, [
              d(
                'a',
                {
                  class: 'link',
                  href: r(ve)(r(t).link),
                  'aria-label':
                    ((p = r(e).notFound) == null
                      ? void 0
                      : p.linkLabel) ?? 'go to home',
                },
                N(
                  ((m = r(e).notFound) == null
                    ? void 0
                    : m.linkText) ?? 'Take me home'
                ),
                9,
                un
              ),
            ]),
          ])
        )
      }
    },
  }),
  vn = b(dn, [['__scopeId', 'data-v-951cab6c']])
function Ae(s, e) {
  if (Array.isArray(s)) return Q(s)
  if (s == null) return []
  e = le(e)
  const t = Object.keys(s)
      .sort((n, l) => l.split('/').length - n.split('/').length)
      .find((n) => e.startsWith(le(n))),
    o = t ? s[t] : []
  return Array.isArray(o) ? Q(o) : Q(o.items, o.base)
}
function pn(s) {
  const e = []
  let t = 0
  for (const o in s) {
    const n = s[o]
    if (n.items) {
      t = e.push(n)
      continue
    }
    e[t] || e.push({ items: [] }), e[t].items.push(n)
  }
  return e
}
function fn(s) {
  const e = []
  function t(o) {
    for (const n of o)
      n.text &&
        n.link &&
        e.push({
          text: n.text,
          link: n.link,
          docFooterText: n.docFooterText,
        }),
        n.items && t(n.items)
  }
  return t(s), e
}
function ie(s, e) {
  return Array.isArray(e)
    ? e.some((t) => ie(s, t))
    : K(s, e.link)
      ? !0
      : e.items
        ? ie(s, e.items)
        : !1
}
function Q(s, e) {
  return [...s].map((t) => {
    const o = { ...t },
      n = o.base || e
    return (
      n && o.link && (o.link = n + o.link),
      o.items && (o.items = Q(o.items, n)),
      o
    )
  })
}
function R() {
  const { frontmatter: s, page: e, theme: t } = P(),
    o = re('(min-width: 960px)'),
    n = M(!1),
    l = $(() => {
      const B = t.value.sidebar,
        S = e.value.relativePath
      return B ? Ae(B, S) : []
    }),
    c = M(l.value)
  G(l, (B, S) => {
    JSON.stringify(B) !== JSON.stringify(S) &&
      (c.value = l.value)
  })
  const v = $(
      () =>
        s.value.sidebar !== !1 &&
        c.value.length > 0 &&
        s.value.layout !== 'home'
    ),
    p = $(() =>
      m
        ? s.value.aside == null
          ? t.value.aside === 'left'
          : s.value.aside === 'left'
        : !1
    ),
    m = $(() =>
      s.value.layout === 'home'
        ? !1
        : s.value.aside != null
          ? !!s.value.aside
          : t.value.aside !== !1
    ),
    L = $(() => v.value && o.value),
    y = $(() => (v.value ? pn(c.value) : []))
  function V() {
    n.value = !0
  }
  function T() {
    n.value = !1
  }
  function H() {
    n.value ? T() : V()
  }
  return {
    isOpen: n,
    sidebar: c,
    sidebarGroups: y,
    hasSidebar: v,
    hasAside: m,
    leftAside: p,
    isSidebarEnabled: L,
    open: V,
    close: T,
    toggle: H,
  }
}
function hn(s, e) {
  let t
  Z(() => {
    t = s.value ? document.activeElement : void 0
  }),
    j(() => {
      window.addEventListener('keyup', o)
    }),
    pe(() => {
      window.removeEventListener('keyup', o)
    })
  function o(n) {
    n.key === 'Escape' &&
      s.value &&
      (e(), t == null || t.focus())
  }
}
function mn(s) {
  const { page: e, hash: t } = P(),
    o = M(!1),
    n = $(() => s.value.collapsed != null),
    l = $(() => !!s.value.link),
    c = M(!1),
    v = () => {
      c.value = K(e.value.relativePath, s.value.link)
    }
  G([e, s, t], v), j(v)
  const p = $(() =>
      c.value
        ? !0
        : s.value.items
          ? ie(e.value.relativePath, s.value.items)
          : !1
    ),
    m = $(() => !!(s.value.items && s.value.items.length))
  Z(() => {
    o.value = !!(n.value && s.value.collapsed)
  }),
    fe(() => {
      ;(c.value || p.value) && (o.value = !1)
    })
  function L() {
    n.value && (o.value = !o.value)
  }
  return {
    collapsed: o,
    collapsible: n,
    isLink: l,
    isActiveLink: c,
    hasActiveLink: p,
    hasChildren: m,
    toggle: L,
  }
}
function _n() {
  const { hasSidebar: s } = R(),
    e = re('(min-width: 960px)'),
    t = re('(min-width: 1280px)')
  return {
    isAsideEnabled: $(() =>
      !t.value && !e.value ? !1 : s.value ? t.value : e.value
    ),
  }
}
const kn =
    /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,
  ce = []
function Ee(s) {
  return (
    (typeof s.outline == 'object' &&
      !Array.isArray(s.outline) &&
      s.outline.label) ||
    s.outlineTitle ||
    'On this page'
  )
}
function _e(s) {
  const e = [
    ...document.querySelectorAll(
      '.VPDoc :where(h1,h2,h3,h4,h5,h6)'
    ),
  ]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const o = Number(t.tagName[1])
      return {
        element: t,
        title: bn(t),
        link: '#' + t.id,
        level: o,
      }
    })
  return gn(e, s)
}
function bn(s) {
  let e = ''
  for (const t of s.childNodes)
    if (t.nodeType === 1) {
      if (kn.test(t.className)) continue
      e += t.textContent
    } else t.nodeType === 3 && (e += t.textContent)
  return e.trim()
}
function gn(s, e) {
  if (e === !1) return []
  const t =
      (typeof e == 'object' && !Array.isArray(e)
        ? e.level
        : e) || 2,
    [o, n] =
      typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  return Ln(s, o, n)
}
function $n(s, e) {
  const { isAsideEnabled: t } = _n(),
    o = nn(l, 100)
  let n = null
  j(() => {
    requestAnimationFrame(l),
      window.addEventListener('scroll', o)
  }),
    Ke(() => {
      c(location.hash)
    }),
    pe(() => {
      window.removeEventListener('scroll', o)
    })
  function l() {
    if (!t.value) return
    const v = window.scrollY,
      p = window.innerHeight,
      m = document.body.offsetHeight,
      L = Math.abs(v + p - m) < 1,
      y = ce
        .map(({ element: T, link: H }) => ({
          link: H,
          top: yn(T),
        }))
        .filter(({ top: T }) => !Number.isNaN(T))
        .sort((T, H) => T.top - H.top)
    if (!y.length) {
      c(null)
      return
    }
    if (v < 1) {
      c(null)
      return
    }
    if (L) {
      c(y[y.length - 1].link)
      return
    }
    let V = null
    for (const { link: T, top: H } of y) {
      if (H > v + Je() + 4) break
      V = T
    }
    c(V)
  }
  function c(v) {
    n && n.classList.remove('active'),
      v == null
        ? (n = null)
        : (n = s.value.querySelector(
            `a[href="${decodeURIComponent(v)}"]`
          ))
    const p = n
    p
      ? (p.classList.add('active'),
        (e.value.style.top = p.offsetTop + 39 + 'px'),
        (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'),
        (e.value.style.opacity = '0'))
  }
}
function yn(s) {
  let e = 0
  for (; s !== document.body; ) {
    if (s === null) return NaN
    ;(e += s.offsetTop), (s = s.offsetParent)
  }
  return e
}
function Ln(s, e, t) {
  ce.length = 0
  const o = [],
    n = []
  return (
    s.forEach((l) => {
      const c = { ...l, children: [] }
      let v = n[n.length - 1]
      for (; v && v.level >= c.level; )
        n.pop(), (v = n[n.length - 1])
      if (
        c.element.classList.contains('ignore-header') ||
        (v && 'shouldIgnore' in v)
      ) {
        n.push({ level: c.level, shouldIgnore: !0 })
        return
      }
      c.level > t ||
        c.level < e ||
        (ce.push({ element: c.element, link: c.link }),
        v ? v.children.push(c) : o.push(c),
        n.push(c))
    }),
    o
  )
}
const Pn = ['href', 'title'],
  Vn = k({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(s) {
      function e({ target: t }) {
        const o = t.href.split('#')[1],
          n = document.getElementById(decodeURIComponent(o))
        n == null || n.focus({ preventScroll: !0 })
      }
      return (t, o) => {
        const n = J('VPDocOutlineItem', !0)
        return (
          a(),
          i(
            'ul',
            {
              class: w([
                'VPDocOutlineItem',
                t.root ? 'root' : 'nested',
              ]),
            },
            [
              (a(!0),
              i(
                C,
                null,
                A(
                  t.headers,
                  ({ children: l, link: c, title: v }) => (
                    a(),
                    i('li', null, [
                      d(
                        'a',
                        {
                          class: 'outline-link',
                          href: c,
                          onClick: e,
                          title: v,
                        },
                        N(v),
                        9,
                        Pn
                      ),
                      l != null && l.length
                        ? (a(),
                          g(n, { key: 0, headers: l }, null, 8, [
                            'headers',
                          ]))
                        : h('', !0),
                    ])
                  )
                ),
                256
              )),
            ],
            2
          )
        )
      }
    },
  }),
  Fe = b(Vn, [['__scopeId', 'data-v-3f927ebe']]),
  Sn = { class: 'content' },
  wn = {
    'aria-level': '2',
    class: 'outline-title',
    id: 'doc-outline-aria-label',
    role: 'heading',
  },
  Tn = k({
    __name: 'VPDocAsideOutline',
    setup(s) {
      const { frontmatter: e, theme: t } = P(),
        o = x([])
      ee(() => {
        o.value = _e(e.value.outline ?? t.value.outline)
      })
      const n = M(),
        l = M()
      return (
        $n(n, l),
        (c, v) => (
          a(),
          i(
            'nav',
            {
              'aria-labelledby': 'doc-outline-aria-label',
              class: w([
                'VPDocAsideOutline',
                { 'has-outline': o.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: n,
            },
            [
              d('div', Sn, [
                d(
                  'div',
                  {
                    class: 'outline-marker',
                    ref_key: 'marker',
                    ref: l,
                  },
                  null,
                  512
                ),
                d('div', wn, N(r(Ee)(r(t))), 1),
                _(Fe, { headers: o.value, root: !0 }, null, 8, [
                  'headers',
                ]),
              ]),
            ],
            2
          )
        )
      )
    },
  }),
  Mn = b(Tn, [['__scopeId', 'data-v-b38bf2ff']]),
  Nn = { class: 'VPDocAsideCarbonAds' },
  Cn = k({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(s) {
      const e = () => null
      return (t, o) => (
        a(),
        i('div', Nn, [
          _(r(e), { 'carbon-ads': t.carbonAds }, null, 8, [
            'carbon-ads',
          ]),
        ])
      )
    },
  }),
  In = { class: 'VPDocAside' },
  Hn = k({
    __name: 'VPDocAside',
    setup(s) {
      const { theme: e } = P()
      return (t, o) => (
        a(),
        i('div', In, [
          u(t.$slots, 'aside-top', {}, void 0, !0),
          u(t.$slots, 'aside-outline-before', {}, void 0, !0),
          _(Mn),
          u(t.$slots, 'aside-outline-after', {}, void 0, !0),
          o[0] ||
            (o[0] = d('div', { class: 'spacer' }, null, -1)),
          u(t.$slots, 'aside-ads-before', {}, void 0, !0),
          r(e).carbonAds
            ? (a(),
              g(
                Cn,
                { key: 0, 'carbon-ads': r(e).carbonAds },
                null,
                8,
                ['carbon-ads']
              ))
            : h('', !0),
          u(t.$slots, 'aside-ads-after', {}, void 0, !0),
          u(t.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  Bn = b(Hn, [['__scopeId', 'data-v-6d7b3c46']])
function An() {
  const { theme: s, page: e } = P()
  return $(() => {
    const { text: t = 'Edit this page', pattern: o = '' } =
      s.value.editLink || {}
    let n
    return (
      typeof o == 'function'
        ? (n = o(e.value))
        : (n = o.replace(/:path/g, e.value.filePath)),
      { url: n, text: t }
    )
  })
}
function En() {
  const { page: s, theme: e, frontmatter: t } = P()
  return $(() => {
    var m, L, y, V, T, H, B, S
    const o = Ae(e.value.sidebar, s.value.relativePath),
      n = fn(o),
      l = Fn(n, (I) => I.link.replace(/[?#].*$/, '')),
      c = l.findIndex((I) => K(s.value.relativePath, I.link)),
      v =
        (((m = e.value.docFooter) == null ? void 0 : m.prev) ===
          !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      p =
        (((L = e.value.docFooter) == null ? void 0 : L.next) ===
          !1 &&
          !t.value.next) ||
        t.value.next === !1
    return {
      prev: v
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                  ? t.value.prev.text
                  : void 0) ??
              ((y = l[c - 1]) == null
                ? void 0
                : y.docFooterText) ??
              ((V = l[c - 1]) == null ? void 0 : V.text),
            link:
              (typeof t.value.prev == 'object'
                ? t.value.prev.link
                : void 0) ??
              ((T = l[c - 1]) == null ? void 0 : T.link),
          },
      next: p
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                  ? t.value.next.text
                  : void 0) ??
              ((H = l[c + 1]) == null
                ? void 0
                : H.docFooterText) ??
              ((B = l[c + 1]) == null ? void 0 : B.text),
            link:
              (typeof t.value.next == 'object'
                ? t.value.next.link
                : void 0) ??
              ((S = l[c + 1]) == null ? void 0 : S.link),
          },
    }
  })
}
function Fn(s, e) {
  const t = new Set()
  return s.filter((o) => {
    const n = e(o)
    return t.has(n) ? !1 : t.add(n)
  })
}
const O = k({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(s) {
      const e = s,
        t = $(() => e.tag ?? (e.href ? 'a' : 'span')),
        o = $(
          () =>
            (e.href && Te.test(e.href)) || e.target === '_blank'
        )
      return (n, l) => (
        a(),
        g(
          D(t.value),
          {
            class: w([
              'VPLink',
              {
                link: n.href,
                'vp-external-link-icon': o.value,
                'no-icon': n.noIcon,
              },
            ]),
            href: n.href ? r(me)(n.href) : void 0,
            target: n.target ?? (o.value ? '_blank' : void 0),
            rel: n.rel ?? (o.value ? 'noreferrer' : void 0),
          },
          { default: f(() => [u(n.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    },
  }),
  Dn = { class: 'VPLastUpdated' },
  On = ['datetime'],
  zn = k({
    __name: 'VPDocFooterLastUpdated',
    setup(s) {
      const { theme: e, page: t, lang: o } = P(),
        n = $(() => new Date(t.value.lastUpdated)),
        l = $(() => n.value.toISOString()),
        c = M('')
      return (
        j(() => {
          Z(() => {
            var v, p, m
            c.value = new Intl.DateTimeFormat(
              (p =
                (v = e.value.lastUpdated) == null
                  ? void 0
                  : v.formatOptions) != null && p.forceLocale
                ? o.value
                : void 0,
              ((m = e.value.lastUpdated) == null
                ? void 0
                : m.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              }
            ).format(n.value)
          })
        }),
        (v, p) => {
          var m
          return (
            a(),
            i('p', Dn, [
              W(
                N(
                  ((m = r(e).lastUpdated) == null
                    ? void 0
                    : m.text) ||
                    r(e).lastUpdatedText ||
                    'Last updated'
                ) + ': ',
                1
              ),
              d(
                'time',
                { datetime: l.value },
                N(c.value),
                9,
                On
              ),
            ])
          )
        }
      )
    },
  }),
  Un = b(zn, [['__scopeId', 'data-v-475f71b8']]),
  Gn = { key: 0, class: 'VPDocFooter' },
  jn = { key: 0, class: 'edit-info' },
  Rn = { key: 0, class: 'edit-link' },
  qn = { key: 1, class: 'last-updated' },
  Wn = {
    key: 1,
    class: 'prev-next',
    'aria-labelledby': 'doc-footer-aria-label',
  },
  Kn = { class: 'pager' },
  Jn = ['innerHTML'],
  xn = ['innerHTML'],
  Yn = { class: 'pager' },
  Qn = ['innerHTML'],
  Xn = ['innerHTML'],
  Zn = k({
    __name: 'VPDocFooter',
    setup(s) {
      const { theme: e, page: t, frontmatter: o } = P(),
        n = An(),
        l = En(),
        c = $(() => e.value.editLink && o.value.editLink !== !1),
        v = $(() => t.value.lastUpdated),
        p = $(
          () =>
            c.value || v.value || l.value.prev || l.value.next
        )
      return (m, L) => {
        var y, V, T, H
        return p.value
          ? (a(),
            i('footer', Gn, [
              u(m.$slots, 'doc-footer-before', {}, void 0, !0),
              c.value || v.value
                ? (a(),
                  i('div', jn, [
                    c.value
                      ? (a(),
                        i('div', Rn, [
                          _(
                            O,
                            {
                              class: 'edit-link-button',
                              href: r(n).url,
                              'no-icon': !0,
                            },
                            {
                              default: f(() => [
                                L[0] ||
                                  (L[0] = d(
                                    'span',
                                    {
                                      class:
                                        'vpi-square-pen edit-link-icon',
                                    },
                                    null,
                                    -1
                                  )),
                                W(' ' + N(r(n).text), 1),
                              ]),
                              _: 1,
                              __: [0],
                            },
                            8,
                            ['href']
                          ),
                        ]))
                      : h('', !0),
                    v.value
                      ? (a(), i('div', qn, [_(Un)]))
                      : h('', !0),
                  ]))
                : h('', !0),
              ((y = r(l).prev) != null && y.link) ||
              ((V = r(l).next) != null && V.link)
                ? (a(),
                  i('nav', Wn, [
                    L[1] ||
                      (L[1] = d(
                        'span',
                        {
                          class: 'visually-hidden',
                          id: 'doc-footer-aria-label',
                        },
                        'Pager',
                        -1
                      )),
                    d('div', Kn, [
                      (T = r(l).prev) != null && T.link
                        ? (a(),
                          g(
                            O,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: r(l).prev.link,
                            },
                            {
                              default: f(() => {
                                var B
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((B = r(e).docFooter) ==
                                        null
                                          ? void 0
                                          : B.prev) ||
                                        'Previous page',
                                    },
                                    null,
                                    8,
                                    Jn
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: r(l).prev.text,
                                    },
                                    null,
                                    8,
                                    xn
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href']
                          ))
                        : h('', !0),
                    ]),
                    d('div', Yn, [
                      (H = r(l).next) != null && H.link
                        ? (a(),
                          g(
                            O,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: r(l).next.link,
                            },
                            {
                              default: f(() => {
                                var B
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((B = r(e).docFooter) ==
                                        null
                                          ? void 0
                                          : B.next) ||
                                        'Next page',
                                    },
                                    null,
                                    8,
                                    Qn
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: r(l).next.text,
                                    },
                                    null,
                                    8,
                                    Xn
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href']
                          ))
                        : h('', !0),
                    ]),
                  ]))
                : h('', !0),
            ]))
          : h('', !0)
      }
    },
  }),
  eo = b(Zn, [['__scopeId', 'data-v-4f9813fa']]),
  to = { class: 'container' },
  no = { class: 'aside-container' },
  oo = { class: 'aside-content' },
  so = { class: 'content' },
  ao = { class: 'content-container' },
  ro = { class: 'main' },
  lo = k({
    __name: 'VPDoc',
    setup(s) {
      const { theme: e } = P(),
        t = te(),
        { hasSidebar: o, hasAside: n, leftAside: l } = R(),
        c = $(() =>
          t.path.replace(/[./]+/g, '_').replace(/_html$/, '')
        )
      return (v, p) => {
        const m = J('Content')
        return (
          a(),
          i(
            'div',
            {
              class: w([
                'VPDoc',
                { 'has-sidebar': r(o), 'has-aside': r(n) },
              ]),
            },
            [
              u(v.$slots, 'doc-top', {}, void 0, !0),
              d('div', to, [
                r(n)
                  ? (a(),
                    i(
                      'div',
                      {
                        key: 0,
                        class: w([
                          'aside',
                          { 'left-aside': r(l) },
                        ]),
                      },
                      [
                        p[0] ||
                          (p[0] = d(
                            'div',
                            { class: 'aside-curtain' },
                            null,
                            -1
                          )),
                        d('div', no, [
                          d('div', oo, [
                            _(Bn, null, {
                              'aside-top': f(() => [
                                u(
                                  v.$slots,
                                  'aside-top',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              'aside-bottom': f(() => [
                                u(
                                  v.$slots,
                                  'aside-bottom',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              'aside-outline-before': f(() => [
                                u(
                                  v.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              'aside-outline-after': f(() => [
                                u(
                                  v.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              'aside-ads-before': f(() => [
                                u(
                                  v.$slots,
                                  'aside-ads-before',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              'aside-ads-after': f(() => [
                                u(
                                  v.$slots,
                                  'aside-ads-after',
                                  {},
                                  void 0,
                                  !0
                                ),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2
                    ))
                  : h('', !0),
                d('div', so, [
                  d('div', ao, [
                    u(v.$slots, 'doc-before', {}, void 0, !0),
                    d('main', ro, [
                      _(
                        m,
                        {
                          class: w([
                            'vp-doc',
                            [
                              c.value,
                              r(e).externalLinkIcon &&
                                'external-link-icon-enabled',
                            ],
                          ]),
                        },
                        null,
                        8,
                        ['class']
                      ),
                    ]),
                    _(eo, null, {
                      'doc-footer-before': f(() => [
                        u(
                          v.$slots,
                          'doc-footer-before',
                          {},
                          void 0,
                          !0
                        ),
                      ]),
                      _: 3,
                    }),
                    u(v.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              u(v.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2
          )
        )
      }
    },
  }),
  io = b(lo, [['__scopeId', 'data-v-83890dd9']]),
  co = k({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(s) {
      const e = s,
        t = $(() => e.href && Te.test(e.href)),
        o = $(() => e.tag || (e.href ? 'a' : 'button'))
      return (n, l) => (
        a(),
        g(
          D(o.value),
          {
            class: w(['VPButton', [n.size, n.theme]]),
            href: n.href ? r(me)(n.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0),
          },
          { default: f(() => [W(N(n.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      )
    },
  }),
  uo = b(co, [['__scopeId', 'data-v-906d7fb4']]),
  vo = ['src', 'alt'],
  po = k({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(s) {
      return (e, t) => {
        const o = J('VPImage', !0)
        return e.image
          ? (a(),
            i(
              C,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    i(
                      'img',
                      q(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: r(ve)(
                            typeof e.image == 'string'
                              ? e.image
                              : e.image.src
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == 'string'
                              ? ''
                              : e.image.alt || ''),
                        }
                      ),
                      null,
                      16,
                      vo
                    ))
                  : (a(),
                    i(
                      C,
                      { key: 1 },
                      [
                        _(
                          o,
                          q(
                            {
                              class: 'dark',
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            e.$attrs
                          ),
                          null,
                          16,
                          ['image', 'alt']
                        ),
                        _(
                          o,
                          q(
                            {
                              class: 'light',
                              image: e.image.light,
                              alt: e.image.alt,
                            },
                            e.$attrs
                          ),
                          null,
                          16,
                          ['image', 'alt']
                        ),
                      ],
                      64
                    )),
              ],
              64
            ))
          : h('', !0)
      }
    },
  }),
  X = b(po, [['__scopeId', 'data-v-35a7d0b8']]),
  fo = { class: 'container' },
  ho = { class: 'main' },
  mo = { class: 'heading' },
  _o = ['innerHTML'],
  ko = ['innerHTML'],
  bo = ['innerHTML'],
  go = { key: 0, class: 'actions' },
  $o = { key: 0, class: 'image' },
  yo = { class: 'image-container' },
  Lo = k({
    __name: 'VPHero',
    props: {
      name: {},
      text: {},
      tagline: {},
      image: {},
      actions: {},
    },
    setup(s) {
      const e = ne('hero-image-slot-exists')
      return (t, o) => (
        a(),
        i(
          'div',
          {
            class: w([
              'VPHero',
              { 'has-image': t.image || r(e) },
            ]),
          },
          [
            d('div', fo, [
              d('div', ho, [
                u(
                  t.$slots,
                  'home-hero-info-before',
                  {},
                  void 0,
                  !0
                ),
                u(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    d('h1', mo, [
                      t.name
                        ? (a(),
                          i(
                            'span',
                            {
                              key: 0,
                              innerHTML: t.name,
                              class: 'name clip',
                            },
                            null,
                            8,
                            _o
                          ))
                        : h('', !0),
                      t.text
                        ? (a(),
                          i(
                            'span',
                            {
                              key: 1,
                              innerHTML: t.text,
                              class: 'text',
                            },
                            null,
                            8,
                            ko
                          ))
                        : h('', !0),
                    ]),
                    t.tagline
                      ? (a(),
                        i(
                          'p',
                          {
                            key: 0,
                            innerHTML: t.tagline,
                            class: 'tagline',
                          },
                          null,
                          8,
                          bo
                        ))
                      : h('', !0),
                  ],
                  !0
                ),
                u(
                  t.$slots,
                  'home-hero-info-after',
                  {},
                  void 0,
                  !0
                ),
                t.actions
                  ? (a(),
                    i('div', go, [
                      (a(!0),
                      i(
                        C,
                        null,
                        A(
                          t.actions,
                          (n) => (
                            a(),
                            i(
                              'div',
                              { key: n.link, class: 'action' },
                              [
                                _(
                                  uo,
                                  {
                                    tag: 'a',
                                    size: 'medium',
                                    theme: n.theme,
                                    text: n.text,
                                    href: n.link,
                                    target: n.target,
                                    rel: n.rel,
                                  },
                                  null,
                                  8,
                                  [
                                    'theme',
                                    'text',
                                    'href',
                                    'target',
                                    'rel',
                                  ]
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : h('', !0),
                u(
                  t.$slots,
                  'home-hero-actions-after',
                  {},
                  void 0,
                  !0
                ),
              ]),
              t.image || r(e)
                ? (a(),
                  i('div', $o, [
                    d('div', yo, [
                      o[0] ||
                        (o[0] = d(
                          'div',
                          { class: 'image-bg' },
                          null,
                          -1
                        )),
                      u(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              g(
                                X,
                                {
                                  key: 0,
                                  class: 'image-src',
                                  image: t.image,
                                },
                                null,
                                8,
                                ['image']
                              ))
                            : h('', !0),
                        ],
                        !0
                      ),
                    ]),
                  ]))
                : h('', !0),
            ]),
          ],
          2
        )
      )
    },
  }),
  Po = b(Lo, [['__scopeId', 'data-v-3d256e5e']]),
  Vo = k({
    __name: 'VPHomeHero',
    setup(s) {
      const { frontmatter: e } = P()
      return (t, o) =>
        r(e).hero
          ? (a(),
            g(
              Po,
              {
                key: 0,
                class: 'VPHomeHero',
                name: r(e).hero.name,
                text: r(e).hero.text,
                tagline: r(e).hero.tagline,
                image: r(e).hero.image,
                actions: r(e).hero.actions,
              },
              {
                'home-hero-info-before': f(() => [
                  u(t.$slots, 'home-hero-info-before'),
                ]),
                'home-hero-info': f(() => [
                  u(t.$slots, 'home-hero-info'),
                ]),
                'home-hero-info-after': f(() => [
                  u(t.$slots, 'home-hero-info-after'),
                ]),
                'home-hero-actions-after': f(() => [
                  u(t.$slots, 'home-hero-actions-after'),
                ]),
                'home-hero-image': f(() => [
                  u(t.$slots, 'home-hero-image'),
                ]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions']
            ))
          : h('', !0)
    },
  }),
  So = { class: 'box' },
  wo = { key: 0, class: 'icon' },
  To = ['innerHTML'],
  Mo = ['innerHTML'],
  No = ['innerHTML'],
  Co = { key: 4, class: 'link-text' },
  Io = { class: 'link-text-value' },
  Ho = k({
    __name: 'VPFeature',
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(s) {
      return (e, t) => (
        a(),
        g(
          O,
          {
            class: 'VPFeature',
            href: e.link,
            rel: e.rel,
            target: e.target,
            'no-icon': !0,
            tag: e.link ? 'a' : 'div',
          },
          {
            default: f(() => [
              d('article', So, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    i('div', wo, [
                      _(
                        X,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      ),
                    ]))
                  : typeof e.icon == 'object'
                    ? (a(),
                      g(
                        X,
                        {
                          key: 1,
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      ))
                    : e.icon
                      ? (a(),
                        i(
                          'div',
                          {
                            key: 2,
                            class: 'icon',
                            innerHTML: e.icon,
                          },
                          null,
                          8,
                          To
                        ))
                      : h('', !0),
                d(
                  'h2',
                  { class: 'title', innerHTML: e.title },
                  null,
                  8,
                  Mo
                ),
                e.details
                  ? (a(),
                    i(
                      'p',
                      {
                        key: 3,
                        class: 'details',
                        innerHTML: e.details,
                      },
                      null,
                      8,
                      No
                    ))
                  : h('', !0),
                e.linkText
                  ? (a(),
                    i('div', Co, [
                      d('p', Io, [
                        W(N(e.linkText) + ' ', 1),
                        t[0] ||
                          (t[0] = d(
                            'span',
                            {
                              class:
                                'vpi-arrow-right link-text-icon',
                            },
                            null,
                            -1
                          )),
                      ]),
                    ]))
                  : h('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'target', 'tag']
        )
      )
    },
  }),
  Bo = b(Ho, [['__scopeId', 'data-v-f5e9645b']]),
  Ao = { key: 0, class: 'VPFeatures' },
  Eo = { class: 'container' },
  Fo = { class: 'items' },
  Do = k({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(s) {
      const e = s,
        t = $(() => {
          const o = e.features.length
          if (o) {
            if (o === 2) return 'grid-2'
            if (o === 3) return 'grid-3'
            if (o % 3 === 0) return 'grid-6'
            if (o > 3) return 'grid-4'
          } else return
        })
      return (o, n) =>
        o.features
          ? (a(),
            i('div', Ao, [
              d('div', Eo, [
                d('div', Fo, [
                  (a(!0),
                  i(
                    C,
                    null,
                    A(
                      o.features,
                      (l) => (
                        a(),
                        i(
                          'div',
                          {
                            key: l.title,
                            class: w(['item', [t.value]]),
                          },
                          [
                            _(
                              Bo,
                              {
                                icon: l.icon,
                                title: l.title,
                                details: l.details,
                                link: l.link,
                                'link-text': l.linkText,
                                rel: l.rel,
                                target: l.target,
                              },
                              null,
                              8,
                              [
                                'icon',
                                'title',
                                'details',
                                'link',
                                'link-text',
                                'rel',
                                'target',
                              ]
                            ),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]))
          : h('', !0)
    },
  }),
  Oo = b(Do, [['__scopeId', 'data-v-d0a190d7']]),
  zo = k({
    __name: 'VPHomeFeatures',
    setup(s) {
      const { frontmatter: e } = P()
      return (t, o) =>
        r(e).features
          ? (a(),
            g(
              Oo,
              {
                key: 0,
                class: 'VPHomeFeatures',
                features: r(e).features,
              },
              null,
              8,
              ['features']
            ))
          : h('', !0)
    },
  }),
  Uo = k({
    __name: 'VPHomeContent',
    setup(s) {
      const { width: e } = xe({
        initialWidth: 0,
        includeScrollbar: !1,
      })
      return (t, o) => (
        a(),
        i(
          'div',
          {
            class: 'vp-doc container',
            style: Me(
              r(e)
                ? { '--vp-offset': `calc(50% - ${r(e) / 2}px)` }
                : {}
            ),
          },
          [u(t.$slots, 'default', {}, void 0, !0)],
          4
        )
      )
    },
  }),
  Go = b(Uo, [['__scopeId', 'data-v-7a48a447']]),
  jo = k({
    __name: 'VPHome',
    setup(s) {
      const { frontmatter: e, theme: t } = P()
      return (o, n) => {
        const l = J('Content')
        return (
          a(),
          i(
            'div',
            {
              class: w([
                'VPHome',
                {
                  'external-link-icon-enabled':
                    r(t).externalLinkIcon,
                },
              ]),
            },
            [
              u(o.$slots, 'home-hero-before', {}, void 0, !0),
              _(Vo, null, {
                'home-hero-info-before': f(() => [
                  u(
                    o.$slots,
                    'home-hero-info-before',
                    {},
                    void 0,
                    !0
                  ),
                ]),
                'home-hero-info': f(() => [
                  u(o.$slots, 'home-hero-info', {}, void 0, !0),
                ]),
                'home-hero-info-after': f(() => [
                  u(
                    o.$slots,
                    'home-hero-info-after',
                    {},
                    void 0,
                    !0
                  ),
                ]),
                'home-hero-actions-after': f(() => [
                  u(
                    o.$slots,
                    'home-hero-actions-after',
                    {},
                    void 0,
                    !0
                  ),
                ]),
                'home-hero-image': f(() => [
                  u(o.$slots, 'home-hero-image', {}, void 0, !0),
                ]),
                _: 3,
              }),
              u(o.$slots, 'home-hero-after', {}, void 0, !0),
              u(
                o.$slots,
                'home-features-before',
                {},
                void 0,
                !0
              ),
              _(zo),
              u(o.$slots, 'home-features-after', {}, void 0, !0),
              r(e).markdownStyles !== !1
                ? (a(),
                  g(
                    Go,
                    { key: 0 },
                    { default: f(() => [_(l)]), _: 1 }
                  ))
                : (a(), g(l, { key: 1 })),
            ],
            2
          )
        )
      }
    },
  }),
  Ro = b(jo, [['__scopeId', 'data-v-e40e30de']]),
  qo = {},
  Wo = { class: 'VPPage' }
function Ko(s, e) {
  const t = J('Content')
  return (
    a(),
    i('div', Wo, [
      u(s.$slots, 'page-top'),
      _(t),
      u(s.$slots, 'page-bottom'),
    ])
  )
}
const Jo = b(qo, [['render', Ko]]),
  xo = k({
    __name: 'VPContent',
    setup(s) {
      const { page: e, frontmatter: t } = P(),
        { hasSidebar: o } = R()
      return (n, l) => (
        a(),
        i(
          'div',
          {
            class: w([
              'VPContent',
              {
                'has-sidebar': r(o),
                'is-home': r(t).layout === 'home',
              },
            ]),
            id: 'VPContent',
          },
          [
            r(e).isNotFound
              ? u(
                  n.$slots,
                  'not-found',
                  { key: 0 },
                  () => [_(vn)],
                  !0
                )
              : r(t).layout === 'page'
                ? (a(),
                  g(
                    Jo,
                    { key: 1 },
                    {
                      'page-top': f(() => [
                        u(n.$slots, 'page-top', {}, void 0, !0),
                      ]),
                      'page-bottom': f(() => [
                        u(
                          n.$slots,
                          'page-bottom',
                          {},
                          void 0,
                          !0
                        ),
                      ]),
                      _: 3,
                    }
                  ))
                : r(t).layout === 'home'
                  ? (a(),
                    g(
                      Ro,
                      { key: 2 },
                      {
                        'home-hero-before': f(() => [
                          u(
                            n.$slots,
                            'home-hero-before',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-hero-info-before': f(() => [
                          u(
                            n.$slots,
                            'home-hero-info-before',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-hero-info': f(() => [
                          u(
                            n.$slots,
                            'home-hero-info',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-hero-info-after': f(() => [
                          u(
                            n.$slots,
                            'home-hero-info-after',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-hero-actions-after': f(() => [
                          u(
                            n.$slots,
                            'home-hero-actions-after',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-hero-image': f(() => [
                          u(
                            n.$slots,
                            'home-hero-image',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-hero-after': f(() => [
                          u(
                            n.$slots,
                            'home-hero-after',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-features-before': f(() => [
                          u(
                            n.$slots,
                            'home-features-before',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        'home-features-after': f(() => [
                          u(
                            n.$slots,
                            'home-features-after',
                            {},
                            void 0,
                            !0
                          ),
                        ]),
                        _: 3,
                      }
                    ))
                  : r(t).layout && r(t).layout !== 'doc'
                    ? (a(), g(D(r(t).layout), { key: 3 }))
                    : (a(),
                      g(
                        io,
                        { key: 4 },
                        {
                          'doc-top': f(() => [
                            u(
                              n.$slots,
                              'doc-top',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'doc-bottom': f(() => [
                            u(
                              n.$slots,
                              'doc-bottom',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'doc-footer-before': f(() => [
                            u(
                              n.$slots,
                              'doc-footer-before',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'doc-before': f(() => [
                            u(
                              n.$slots,
                              'doc-before',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'doc-after': f(() => [
                            u(
                              n.$slots,
                              'doc-after',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'aside-top': f(() => [
                            u(
                              n.$slots,
                              'aside-top',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'aside-outline-before': f(() => [
                            u(
                              n.$slots,
                              'aside-outline-before',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'aside-outline-after': f(() => [
                            u(
                              n.$slots,
                              'aside-outline-after',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'aside-ads-before': f(() => [
                            u(
                              n.$slots,
                              'aside-ads-before',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'aside-ads-after': f(() => [
                            u(
                              n.$slots,
                              'aside-ads-after',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          'aside-bottom': f(() => [
                            u(
                              n.$slots,
                              'aside-bottom',
                              {},
                              void 0,
                              !0
                            ),
                          ]),
                          _: 3,
                        }
                      )),
          ],
          2
        )
      )
    },
  }),
  Yo = b(xo, [['__scopeId', 'data-v-91765379']]),
  Qo = { class: 'container' },
  Xo = ['innerHTML'],
  Zo = ['innerHTML'],
  es = k({
    __name: 'VPFooter',
    setup(s) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = R()
      return (n, l) =>
        r(e).footer && r(t).footer !== !1
          ? (a(),
            i(
              'footer',
              {
                key: 0,
                class: w(['VPFooter', { 'has-sidebar': r(o) }]),
              },
              [
                d('div', Qo, [
                  r(e).footer.message
                    ? (a(),
                      i(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: r(e).footer.message,
                        },
                        null,
                        8,
                        Xo
                      ))
                    : h('', !0),
                  r(e).footer.copyright
                    ? (a(),
                      i(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: r(e).footer.copyright,
                        },
                        null,
                        8,
                        Zo
                      ))
                    : h('', !0),
                ]),
              ],
              2
            ))
          : h('', !0)
    },
  }),
  ts = b(es, [['__scopeId', 'data-v-c970a860']])
function ns() {
  const { theme: s, frontmatter: e } = P(),
    t = x([]),
    o = $(() => t.value.length > 0)
  return (
    ee(() => {
      t.value = _e(e.value.outline ?? s.value.outline)
    }),
    { headers: t, hasLocalNav: o }
  )
}
const os = { class: 'menu-text' },
  ss = { class: 'header' },
  as = { class: 'outline' },
  rs = k({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(s) {
      const e = s,
        { theme: t } = P(),
        o = M(!1),
        n = M(0),
        l = M(),
        c = M()
      function v(y) {
        var V
        ;((V = l.value) != null && V.contains(y.target)) ||
          (o.value = !1)
      }
      G(o, (y) => {
        if (y) {
          document.addEventListener('click', v)
          return
        }
        document.removeEventListener('click', v)
      }),
        Ye('Escape', () => {
          o.value = !1
        }),
        ee(() => {
          o.value = !1
        })
      function p() {
        ;(o.value = !o.value),
          (n.value =
            window.innerHeight +
            Math.min(window.scrollY - e.navHeight, 0))
      }
      function m(y) {
        y.target.classList.contains('outline-link') &&
          (c.value && (c.value.style.transition = 'none'),
          Ne(() => {
            o.value = !1
          }))
      }
      function L() {
        ;(o.value = !1),
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
      }
      return (y, V) => (
        a(),
        i(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: Me({ '--vp-vh': n.value + 'px' }),
            ref_key: 'main',
            ref: l,
          },
          [
            y.headers.length > 0
              ? (a(),
                i(
                  'button',
                  {
                    key: 0,
                    onClick: p,
                    class: w({ open: o.value }),
                  },
                  [
                    d('span', os, N(r(Ee)(r(t))), 1),
                    V[0] ||
                      (V[0] = d(
                        'span',
                        { class: 'vpi-chevron-right icon' },
                        null,
                        -1
                      )),
                  ],
                  2
                ))
              : (a(),
                i(
                  'button',
                  { key: 1, onClick: L },
                  N(r(t).returnToTopLabel || 'Return to top'),
                  1
                )),
            _(
              de,
              { name: 'flyout' },
              {
                default: f(() => [
                  o.value
                    ? (a(),
                      i(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: c,
                          class: 'items',
                          onClick: m,
                        },
                        [
                          d('div', ss, [
                            d(
                              'a',
                              {
                                class: 'top-link',
                                href: '#',
                                onClick: L,
                              },
                              N(
                                r(t).returnToTopLabel ||
                                  'Return to top'
                              ),
                              1
                            ),
                          ]),
                          d('div', as, [
                            _(
                              Fe,
                              { headers: y.headers },
                              null,
                              8,
                              ['headers']
                            ),
                          ]),
                        ],
                        512
                      ))
                    : h('', !0),
                ]),
                _: 1,
              }
            ),
          ],
          4
        )
      )
    },
  }),
  ls = b(rs, [['__scopeId', 'data-v-168ddf5d']]),
  is = { class: 'container' },
  cs = ['aria-expanded'],
  us = { class: 'menu-text' },
  ds = k({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(s) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = R(),
        { headers: n } = ns(),
        { y: l } = Ce(),
        c = M(0)
      j(() => {
        c.value = parseInt(
          getComputedStyle(
            document.documentElement
          ).getPropertyValue('--vp-nav-height')
        )
      }),
        ee(() => {
          n.value = _e(t.value.outline ?? e.value.outline)
        })
      const v = $(() => n.value.length === 0),
        p = $(() => v.value && !o.value),
        m = $(() => ({
          VPLocalNav: !0,
          'has-sidebar': o.value,
          empty: v.value,
          fixed: p.value,
        }))
      return (L, y) =>
        r(t).layout !== 'home' && (!p.value || r(l) >= c.value)
          ? (a(),
            i(
              'div',
              { key: 0, class: w(m.value) },
              [
                d('div', is, [
                  r(o)
                    ? (a(),
                      i(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': L.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick:
                            y[0] ||
                            (y[0] = (V) => L.$emit('open-menu')),
                        },
                        [
                          y[1] ||
                            (y[1] = d(
                              'span',
                              {
                                class:
                                  'vpi-align-left menu-icon',
                              },
                              null,
                              -1
                            )),
                          d(
                            'span',
                            us,
                            N(r(e).sidebarMenuLabel || 'Menu'),
                            1
                          ),
                        ],
                        8,
                        cs
                      ))
                    : h('', !0),
                  _(
                    ls,
                    { headers: r(n), navHeight: c.value },
                    null,
                    8,
                    ['headers', 'navHeight']
                  ),
                ]),
              ],
              2
            ))
          : h('', !0)
    },
  }),
  vs = b(ds, [['__scopeId', 'data-v-070ab83d']])
function ps() {
  const s = M(!1)
  function e() {
    ;(s.value = !0), window.addEventListener('resize', n)
  }
  function t() {
    ;(s.value = !1), window.removeEventListener('resize', n)
  }
  function o() {
    s.value ? t() : e()
  }
  function n() {
    window.outerWidth >= 768 && t()
  }
  const l = te()
  return (
    G(() => l.path, t),
    {
      isScreenOpen: s,
      openScreen: e,
      closeScreen: t,
      toggleScreen: o,
    }
  )
}
const fs = {},
  hs = { class: 'VPSwitch', type: 'button', role: 'switch' },
  ms = { class: 'check' },
  _s = { key: 0, class: 'icon' }
function ks(s, e) {
  return (
    a(),
    i('button', hs, [
      d('span', ms, [
        s.$slots.default
          ? (a(),
            i('span', _s, [
              u(s.$slots, 'default', {}, void 0, !0),
            ]))
          : h('', !0),
      ]),
    ])
  )
}
const bs = b(fs, [
    ['render', ks],
    ['__scopeId', 'data-v-4a1c76db'],
  ]),
  gs = k({
    __name: 'VPSwitchAppearance',
    setup(s) {
      const { isDark: e, theme: t } = P(),
        o = ne('toggle-appearance', () => {
          e.value = !e.value
        }),
        n = M('')
      return (
        fe(() => {
          n.value = e.value
            ? t.value.lightModeSwitchTitle ||
              'Switch to light theme'
            : t.value.darkModeSwitchTitle ||
              'Switch to dark theme'
        }),
        (l, c) => (
          a(),
          g(
            bs,
            {
              title: n.value,
              class: 'VPSwitchAppearance',
              'aria-checked': r(e),
              onClick: r(o),
            },
            {
              default: f(
                () =>
                  c[0] ||
                  (c[0] = [
                    d(
                      'span',
                      { class: 'vpi-sun sun' },
                      null,
                      -1
                    ),
                    d(
                      'span',
                      { class: 'vpi-moon moon' },
                      null,
                      -1
                    ),
                  ])
              ),
              _: 1,
              __: [0],
            },
            8,
            ['title', 'aria-checked', 'onClick']
          )
        )
      )
    },
  }),
  ke = b(gs, [['__scopeId', 'data-v-e40a8bb6']]),
  $s = { key: 0, class: 'VPNavBarAppearance' },
  ys = k({
    __name: 'VPNavBarAppearance',
    setup(s) {
      const { site: e } = P()
      return (t, o) =>
        r(e).appearance &&
        r(e).appearance !== 'force-dark' &&
        r(e).appearance !== 'force-auto'
          ? (a(), i('div', $s, [_(ke)]))
          : h('', !0)
    },
  }),
  Ls = b(ys, [['__scopeId', 'data-v-af096f4a']]),
  be = M()
let De = !1,
  ae = 0
function Ps(s) {
  const e = M(!1)
  if (oe) {
    !De && Vs(), ae++
    const t = G(be, (o) => {
      var n, l, c
      o === s.el.value ||
      ((n = s.el.value) != null && n.contains(o))
        ? ((e.value = !0), (l = s.onFocus) == null || l.call(s))
        : ((e.value = !1), (c = s.onBlur) == null || c.call(s))
    })
    pe(() => {
      t(), ae--, ae || Ss()
    })
  }
  return Qe(e)
}
function Vs() {
  document.addEventListener('focusin', Oe),
    (De = !0),
    (be.value = document.activeElement)
}
function Ss() {
  document.removeEventListener('focusin', Oe)
}
function Oe() {
  be.value = document.activeElement
}
const ws = { class: 'VPMenuLink' },
  Ts = ['innerHTML'],
  Ms = k({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(s) {
      const { page: e } = P()
      return (t, o) => (
        a(),
        i('div', ws, [
          _(
            O,
            {
              class: w({
                active: r(K)(
                  r(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch
                ),
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
              'no-icon': t.item.noIcon,
            },
            {
              default: f(() => [
                d(
                  'span',
                  { innerHTML: t.item.text },
                  null,
                  8,
                  Ts
                ),
              ]),
              _: 1,
            },
            8,
            ['class', 'href', 'target', 'rel', 'no-icon']
          ),
        ])
      )
    },
  }),
  se = b(Ms, [['__scopeId', 'data-v-acbfed09']]),
  Ns = { class: 'VPMenuGroup' },
  Cs = { key: 0, class: 'title' },
  Is = k({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i('div', Ns, [
          e.text ? (a(), i('p', Cs, N(e.text), 1)) : h('', !0),
          (a(!0),
          i(
            C,
            null,
            A(
              e.items,
              (o) => (
                a(),
                i(
                  C,
                  null,
                  [
                    'link' in o
                      ? (a(),
                        g(se, { key: 0, item: o }, null, 8, [
                          'item',
                        ]))
                      : h('', !0),
                  ],
                  64
                )
              )
            ),
            256
          )),
        ])
      )
    },
  }),
  Hs = b(Is, [['__scopeId', 'data-v-48c802d0']]),
  Bs = { class: 'VPMenu' },
  As = { key: 0, class: 'items' },
  Es = k({
    __name: 'VPMenu',
    props: { items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i('div', Bs, [
          e.items
            ? (a(),
              i('div', As, [
                (a(!0),
                i(
                  C,
                  null,
                  A(
                    e.items,
                    (o) => (
                      a(),
                      i(
                        C,
                        { key: JSON.stringify(o) },
                        [
                          'link' in o
                            ? (a(),
                              g(
                                se,
                                { key: 0, item: o },
                                null,
                                8,
                                ['item']
                              ))
                            : 'component' in o
                              ? (a(),
                                g(
                                  D(o.component),
                                  q(
                                    { key: 1, ref_for: !0 },
                                    o.props
                                  ),
                                  null,
                                  16
                                ))
                              : (a(),
                                g(
                                  Hs,
                                  {
                                    key: 2,
                                    text: o.text,
                                    items: o.items,
                                  },
                                  null,
                                  8,
                                  ['text', 'items']
                                )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : h('', !0),
          u(e.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  Fs = b(Es, [['__scopeId', 'data-v-7dd3104a']]),
  Ds = ['aria-expanded', 'aria-label'],
  Os = { key: 0, class: 'text' },
  zs = ['innerHTML'],
  Us = { key: 1, class: 'vpi-more-horizontal icon' },
  Gs = { class: 'menu' },
  js = k({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(s) {
      const e = M(!1),
        t = M()
      Ps({ el: t, onBlur: o })
      function o() {
        e.value = !1
      }
      return (n, l) => (
        a(),
        i(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: l[1] || (l[1] = (c) => (e.value = !0)),
            onMouseleave: l[2] || (l[2] = (c) => (e.value = !1)),
          },
          [
            d(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': n.label,
                onClick:
                  l[0] || (l[0] = (c) => (e.value = !e.value)),
              },
              [
                n.button || n.icon
                  ? (a(),
                    i('span', Os, [
                      n.icon
                        ? (a(),
                          i(
                            'span',
                            {
                              key: 0,
                              class: w([n.icon, 'option-icon']),
                            },
                            null,
                            2
                          ))
                        : h('', !0),
                      n.button
                        ? (a(),
                          i(
                            'span',
                            { key: 1, innerHTML: n.button },
                            null,
                            8,
                            zs
                          ))
                        : h('', !0),
                      l[3] ||
                        (l[3] = d(
                          'span',
                          {
                            class: 'vpi-chevron-down text-icon',
                          },
                          null,
                          -1
                        )),
                    ]))
                  : (a(), i('span', Us)),
              ],
              8,
              Ds
            ),
            d('div', Gs, [
              _(
                Fs,
                { items: n.items },
                {
                  default: f(() => [
                    u(n.$slots, 'default', {}, void 0, !0),
                  ]),
                  _: 3,
                },
                8,
                ['items']
              ),
            ]),
          ],
          544
        )
      )
    },
  }),
  ge = b(js, [['__scopeId', 'data-v-04f5c5e9']]),
  Rs = ['href', 'aria-label', 'innerHTML'],
  qs = k({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(s) {
      const e = s,
        t = M()
      j(async () => {
        var l
        await Ne()
        const n = (l = t.value) == null ? void 0 : l.children[0]
        n instanceof HTMLElement &&
          n.className.startsWith('vpi-social-') &&
          (getComputedStyle(n).maskImage ||
            getComputedStyle(n).webkitMaskImage) === 'none' &&
          n.style.setProperty(
            '--icon',
            `url('https://api.iconify.design/simple-icons/${e.icon}.svg')`
          )
      })
      const o = $(() =>
        typeof e.icon == 'object'
          ? e.icon.svg
          : `<span class="vpi-social-${e.icon}"></span>`
      )
      return (n, l) => (
        a(),
        i(
          'a',
          {
            ref_key: 'el',
            ref: t,
            class: 'VPSocialLink no-icon',
            href: n.link,
            'aria-label':
              n.ariaLabel ??
              (typeof n.icon == 'string' ? n.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: o.value,
          },
          null,
          8,
          Rs
        )
      )
    },
  }),
  Ws = b(qs, [['__scopeId', 'data-v-d26d30cb']]),
  Ks = { class: 'VPSocialLinks' },
  Js = k({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i('div', Ks, [
          (a(!0),
          i(
            C,
            null,
            A(
              e.links,
              ({ link: o, icon: n, ariaLabel: l }) => (
                a(),
                g(
                  Ws,
                  { key: o, icon: n, link: o, ariaLabel: l },
                  null,
                  8,
                  ['icon', 'link', 'ariaLabel']
                )
              )
            ),
            128
          )),
        ])
      )
    },
  }),
  $e = b(Js, [['__scopeId', 'data-v-ee7a9424']]),
  xs = { key: 0, class: 'group translations' },
  Ys = { class: 'trans-title' },
  Qs = { key: 1, class: 'group' },
  Xs = { class: 'item appearance' },
  Zs = { class: 'label' },
  ea = { class: 'appearance-action' },
  ta = { key: 2, class: 'group' },
  na = { class: 'item social-links' },
  oa = k({
    __name: 'VPNavBarExtra',
    setup(s) {
      const { site: e, theme: t } = P(),
        { localeLinks: o, currentLang: n } = Y({
          correspondingLink: !0,
        }),
        l = $(
          () =>
            (o.value.length && n.value.label) ||
            e.value.appearance ||
            t.value.socialLinks
        )
      return (c, v) =>
        l.value
          ? (a(),
            g(
              ge,
              {
                key: 0,
                class: 'VPNavBarExtra',
                label: 'extra navigation',
              },
              {
                default: f(() => [
                  r(o).length && r(n).label
                    ? (a(),
                      i('div', xs, [
                        d('p', Ys, N(r(n).label), 1),
                        (a(!0),
                        i(
                          C,
                          null,
                          A(
                            r(o),
                            (p) => (
                              a(),
                              g(
                                se,
                                { key: p.link, item: p },
                                null,
                                8,
                                ['item']
                              )
                            )
                          ),
                          128
                        )),
                      ]))
                    : h('', !0),
                  r(e).appearance &&
                  r(e).appearance !== 'force-dark' &&
                  r(e).appearance !== 'force-auto'
                    ? (a(),
                      i('div', Qs, [
                        d('div', Xs, [
                          d(
                            'p',
                            Zs,
                            N(
                              r(t).darkModeSwitchLabel ||
                                'Appearance'
                            ),
                            1
                          ),
                          d('div', ea, [_(ke)]),
                        ]),
                      ]))
                    : h('', !0),
                  r(t).socialLinks
                    ? (a(),
                      i('div', ta, [
                        d('div', na, [
                          _(
                            $e,
                            {
                              class: 'social-links-list',
                              links: r(t).socialLinks,
                            },
                            null,
                            8,
                            ['links']
                          ),
                        ]),
                      ]))
                    : h('', !0),
                ]),
                _: 1,
              }
            ))
          : h('', !0)
    },
  }),
  sa = b(oa, [['__scopeId', 'data-v-925effce']]),
  aa = ['aria-expanded'],
  ra = k({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(s) {
      return (e, t) => (
        a(),
        i(
          'button',
          {
            type: 'button',
            class: w([
              'VPNavBarHamburger',
              { active: e.active },
            ]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (o) => e.$emit('click')),
          },
          t[1] ||
            (t[1] = [
              d(
                'span',
                { class: 'container' },
                [
                  d('span', { class: 'top' }),
                  d('span', { class: 'middle' }),
                  d('span', { class: 'bottom' }),
                ],
                -1
              ),
            ]),
          10,
          aa
        )
      )
    },
  }),
  la = b(ra, [['__scopeId', 'data-v-5dea55bf']]),
  ia = ['innerHTML'],
  ca = k({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(s) {
      const { page: e } = P()
      return (t, o) => (
        a(),
        g(
          O,
          {
            class: w({
              VPNavBarMenuLink: !0,
              active: r(K)(
                r(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch
              ),
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            tabindex: '0',
          },
          {
            default: f(() => [
              d('span', { innerHTML: t.item.text }, null, 8, ia),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel', 'no-icon']
        )
      )
    },
  }),
  ua = b(ca, [['__scopeId', 'data-v-956ec74c']]),
  da = k({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(s) {
      const e = s,
        { page: t } = P(),
        o = (l) =>
          'component' in l
            ? !1
            : 'link' in l
              ? K(
                  t.value.relativePath,
                  l.link,
                  !!e.item.activeMatch
                )
              : l.items.some(o),
        n = $(() => o(e.item))
      return (l, c) => (
        a(),
        g(
          ge,
          {
            class: w({
              VPNavBarMenuGroup: !0,
              active:
                r(K)(
                  r(t).relativePath,
                  l.item.activeMatch,
                  !!l.item.activeMatch
                ) || n.value,
            }),
            button: l.item.text,
            items: l.item.items,
          },
          null,
          8,
          ['class', 'button', 'items']
        )
      )
    },
  }),
  va = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  pa = k({
    __name: 'VPNavBarMenu',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).nav
          ? (a(),
            i('nav', va, [
              o[0] ||
                (o[0] = d(
                  'span',
                  {
                    id: 'main-nav-aria-label',
                    class: 'visually-hidden',
                  },
                  ' Main Navigation ',
                  -1
                )),
              (a(!0),
              i(
                C,
                null,
                A(
                  r(e).nav,
                  (n) => (
                    a(),
                    i(
                      C,
                      { key: JSON.stringify(n) },
                      [
                        'link' in n
                          ? (a(),
                            g(ua, { key: 0, item: n }, null, 8, [
                              'item',
                            ]))
                          : 'component' in n
                            ? (a(),
                              g(
                                D(n.component),
                                q(
                                  { key: 1, ref_for: !0 },
                                  n.props
                                ),
                                null,
                                16
                              ))
                            : (a(),
                              g(
                                da,
                                { key: 2, item: n },
                                null,
                                8,
                                ['item']
                              )),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : h('', !0)
    },
  }),
  fa = b(pa, [['__scopeId', 'data-v-e6d46098']])
function ha(s) {
  const { localeIndex: e, theme: t } = P()
  function o(n) {
    var H, B, S
    const l = n.split('.'),
      c = (H = t.value.search) == null ? void 0 : H.options,
      v = c && typeof c == 'object',
      p =
        (v &&
          ((S = (B = c.locales) == null ? void 0 : B[e.value]) ==
          null
            ? void 0
            : S.translations)) ||
        null,
      m = (v && c.translations) || null
    let L = p,
      y = m,
      V = s
    const T = l.pop()
    for (const I of l) {
      let E = null
      const F = V == null ? void 0 : V[I]
      F && (E = V = F)
      const z = y == null ? void 0 : y[I]
      z && (E = y = z)
      const U = L == null ? void 0 : L[I]
      U && (E = L = U), F || (V = E), z || (y = E), U || (L = E)
    }
    return (
      (L == null ? void 0 : L[T]) ??
      (y == null ? void 0 : y[T]) ??
      (V == null ? void 0 : V[T]) ??
      ''
    )
  }
  return o
}
const ma = ['aria-label'],
  _a = { class: 'DocSearch-Button-Container' },
  ka = { class: 'DocSearch-Button-Placeholder' },
  we = k({
    __name: 'VPNavBarSearchButton',
    setup(s) {
      const t = ha({
        button: {
          buttonText: 'Search',
          buttonAriaLabel: 'Search',
        },
      })
      return (o, n) => (
        a(),
        i(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': r(t)('button.buttonAriaLabel'),
          },
          [
            d('span', _a, [
              n[0] ||
                (n[0] = d(
                  'span',
                  { class: 'vp-icon DocSearch-Search-Icon' },
                  null,
                  -1
                )),
              d('span', ka, N(r(t)('button.buttonText')), 1),
            ]),
            n[1] ||
              (n[1] = d(
                'span',
                { class: 'DocSearch-Button-Keys' },
                [
                  d('kbd', { class: 'DocSearch-Button-Key' }),
                  d(
                    'kbd',
                    { class: 'DocSearch-Button-Key' },
                    'K'
                  ),
                ],
                -1
              )),
          ],
          8,
          ma
        )
      )
    },
  }),
  ba = { class: 'VPNavBarSearch' },
  ga = { id: 'local-search' },
  $a = { key: 1, id: 'docsearch' },
  ya = k({
    __name: 'VPNavBarSearch',
    setup(s) {
      const e = () => null,
        t = () => null,
        { theme: o } = P(),
        n = M(!1),
        l = M(!1)
      j(() => {})
      function c() {
        n.value || ((n.value = !0), setTimeout(v, 16))
      }
      function v() {
        const L = new Event('keydown')
        ;(L.key = 'k'),
          (L.metaKey = !0),
          window.dispatchEvent(L),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || v()
          }, 16)
      }
      const p = M(!1),
        m = ''
      return (L, y) => {
        var V
        return (
          a(),
          i('div', ba, [
            r(m) === 'local'
              ? (a(),
                i(
                  C,
                  { key: 0 },
                  [
                    p.value
                      ? (a(),
                        g(r(e), {
                          key: 0,
                          onClose:
                            y[0] ||
                            (y[0] = (T) => (p.value = !1)),
                        }))
                      : h('', !0),
                    d('div', ga, [
                      _(we, {
                        onClick:
                          y[1] || (y[1] = (T) => (p.value = !0)),
                      }),
                    ]),
                  ],
                  64
                ))
              : r(m) === 'algolia'
                ? (a(),
                  i(
                    C,
                    { key: 1 },
                    [
                      n.value
                        ? (a(),
                          g(
                            r(t),
                            {
                              key: 0,
                              algolia:
                                ((V = r(o).search) == null
                                  ? void 0
                                  : V.options) ?? r(o).algolia,
                              onVnodeBeforeMount:
                                y[2] ||
                                (y[2] = (T) => (l.value = !0)),
                            },
                            null,
                            8,
                            ['algolia']
                          ))
                        : h('', !0),
                      l.value
                        ? h('', !0)
                        : (a(),
                          i('div', $a, [_(we, { onClick: c })])),
                    ],
                    64
                  ))
                : h('', !0),
          ])
        )
      }
    },
  }),
  La = k({
    __name: 'VPNavBarSocialLinks',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).socialLinks
          ? (a(),
            g(
              $e,
              {
                key: 0,
                class: 'VPNavBarSocialLinks',
                links: r(e).socialLinks,
              },
              null,
              8,
              ['links']
            ))
          : h('', !0)
    },
  }),
  Pa = b(La, [['__scopeId', 'data-v-164c457f']]),
  Va = ['href', 'rel', 'target'],
  Sa = ['innerHTML'],
  wa = { key: 2 },
  Ta = k({
    __name: 'VPNavBarTitle',
    setup(s) {
      const { site: e, theme: t } = P(),
        { hasSidebar: o } = R(),
        { currentLang: n } = Y(),
        l = $(() => {
          var p
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (p = t.value.logoLink) == null
              ? void 0
              : p.link
        }),
        c = $(() => {
          var p
          return typeof t.value.logoLink == 'string' ||
            (p = t.value.logoLink) == null
            ? void 0
            : p.rel
        }),
        v = $(() => {
          var p
          return typeof t.value.logoLink == 'string' ||
            (p = t.value.logoLink) == null
            ? void 0
            : p.target
        })
      return (p, m) => (
        a(),
        i(
          'div',
          {
            class: w(['VPNavBarTitle', { 'has-sidebar': r(o) }]),
          },
          [
            d(
              'a',
              {
                class: 'title',
                href: l.value ?? r(me)(r(n).link),
                rel: c.value,
                target: v.value,
              },
              [
                u(
                  p.$slots,
                  'nav-bar-title-before',
                  {},
                  void 0,
                  !0
                ),
                r(t).logo
                  ? (a(),
                    g(
                      X,
                      {
                        key: 0,
                        class: 'logo',
                        image: r(t).logo,
                      },
                      null,
                      8,
                      ['image']
                    ))
                  : h('', !0),
                r(t).siteTitle
                  ? (a(),
                    i(
                      'span',
                      { key: 1, innerHTML: r(t).siteTitle },
                      null,
                      8,
                      Sa
                    ))
                  : r(t).siteTitle === void 0
                    ? (a(), i('span', wa, N(r(e).title), 1))
                    : h('', !0),
                u(
                  p.$slots,
                  'nav-bar-title-after',
                  {},
                  void 0,
                  !0
                ),
              ],
              8,
              Va
            ),
          ],
          2
        )
      )
    },
  }),
  Ma = b(Ta, [['__scopeId', 'data-v-0f4f798b']]),
  Na = { class: 'items' },
  Ca = { class: 'title' },
  Ia = k({
    __name: 'VPNavBarTranslations',
    setup(s) {
      const { theme: e } = P(),
        { localeLinks: t, currentLang: o } = Y({
          correspondingLink: !0,
        })
      return (n, l) =>
        r(t).length && r(o).label
          ? (a(),
            g(
              ge,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: r(e).langMenuLabel || 'Change language',
              },
              {
                default: f(() => [
                  d('div', Na, [
                    d('p', Ca, N(r(o).label), 1),
                    (a(!0),
                    i(
                      C,
                      null,
                      A(
                        r(t),
                        (c) => (
                          a(),
                          g(
                            se,
                            { key: c.link, item: c },
                            null,
                            8,
                            ['item']
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label']
            ))
          : h('', !0)
    },
  }),
  Ha = b(Ia, [['__scopeId', 'data-v-c80d9ad0']]),
  Ba = { class: 'wrapper' },
  Aa = { class: 'container' },
  Ea = { class: 'title' },
  Fa = { class: 'content' },
  Da = { class: 'content-body' },
  Oa = k({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(s) {
      const e = s,
        { y: t } = Ce(),
        { hasSidebar: o } = R(),
        { frontmatter: n } = P(),
        l = M({})
      return (
        fe(() => {
          l.value = {
            'has-sidebar': o.value,
            home: n.value.layout === 'home',
            top: t.value === 0,
            'screen-open': e.isScreenOpen,
          }
        }),
        (c, v) => (
          a(),
          i(
            'div',
            { class: w(['VPNavBar', l.value]) },
            [
              d('div', Ba, [
                d('div', Aa, [
                  d('div', Ea, [
                    _(Ma, null, {
                      'nav-bar-title-before': f(() => [
                        u(
                          c.$slots,
                          'nav-bar-title-before',
                          {},
                          void 0,
                          !0
                        ),
                      ]),
                      'nav-bar-title-after': f(() => [
                        u(
                          c.$slots,
                          'nav-bar-title-after',
                          {},
                          void 0,
                          !0
                        ),
                      ]),
                      _: 3,
                    }),
                  ]),
                  d('div', Fa, [
                    d('div', Da, [
                      u(
                        c.$slots,
                        'nav-bar-content-before',
                        {},
                        void 0,
                        !0
                      ),
                      _(ya, { class: 'search' }),
                      _(fa, { class: 'menu' }),
                      _(Ha, { class: 'translations' }),
                      _(Ls, { class: 'appearance' }),
                      _(Pa, { class: 'social-links' }),
                      _(sa, { class: 'extra' }),
                      u(
                        c.$slots,
                        'nav-bar-content-after',
                        {},
                        void 0,
                        !0
                      ),
                      _(
                        la,
                        {
                          class: 'hamburger',
                          active: c.isScreenOpen,
                          onClick:
                            v[0] ||
                            (v[0] = (p) =>
                              c.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active']
                      ),
                    ]),
                  ]),
                ]),
              ]),
              v[1] ||
                (v[1] = d(
                  'div',
                  { class: 'divider' },
                  [d('div', { class: 'divider-line' })],
                  -1
                )),
            ],
            2
          )
        )
      )
    },
  }),
  za = b(Oa, [['__scopeId', 'data-v-822684d1']]),
  Ua = { key: 0, class: 'VPNavScreenAppearance' },
  Ga = { class: 'text' },
  ja = k({
    __name: 'VPNavScreenAppearance',
    setup(s) {
      const { site: e, theme: t } = P()
      return (o, n) =>
        r(e).appearance &&
        r(e).appearance !== 'force-dark' &&
        r(e).appearance !== 'force-auto'
          ? (a(),
            i('div', Ua, [
              d(
                'p',
                Ga,
                N(r(t).darkModeSwitchLabel || 'Appearance'),
                1
              ),
              _(ke),
            ]))
          : h('', !0)
    },
  }),
  Ra = b(ja, [['__scopeId', 'data-v-ffb44008']]),
  qa = ['innerHTML'],
  Wa = k({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(s) {
      const e = ne('close-screen')
      return (t, o) => (
        a(),
        g(
          O,
          {
            class: 'VPNavScreenMenuLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            onClick: r(e),
          },
          {
            default: f(() => [
              d('span', { innerHTML: t.item.text }, null, 8, qa),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick']
        )
      )
    },
  }),
  Ka = b(Wa, [['__scopeId', 'data-v-735512b8']]),
  Ja = ['innerHTML'],
  xa = k({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(s) {
      const e = ne('close-screen')
      return (t, o) => (
        a(),
        g(
          O,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            onClick: r(e),
          },
          {
            default: f(() => [
              d('span', { innerHTML: t.item.text }, null, 8, Ja),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick']
        )
      )
    },
  }),
  ze = b(xa, [['__scopeId', 'data-v-372ae7c0']]),
  Ya = { class: 'VPNavScreenMenuGroupSection' },
  Qa = { key: 0, class: 'title' },
  Xa = k({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        i('div', Ya, [
          e.text ? (a(), i('p', Qa, N(e.text), 1)) : h('', !0),
          (a(!0),
          i(
            C,
            null,
            A(
              e.items,
              (o) => (
                a(),
                g(ze, { key: o.text, item: o }, null, 8, [
                  'item',
                ])
              )
            ),
            128
          )),
        ])
      )
    },
  }),
  Za = b(Xa, [['__scopeId', 'data-v-4b8941ac']]),
  er = ['aria-controls', 'aria-expanded'],
  tr = ['innerHTML'],
  nr = ['id'],
  or = { key: 0, class: 'item' },
  sr = { key: 1, class: 'item' },
  ar = { key: 2, class: 'group' },
  rr = k({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(s) {
      const e = s,
        t = M(!1),
        o = $(
          () =>
            `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`
        )
      function n() {
        t.value = !t.value
      }
      return (l, c) => (
        a(),
        i(
          'div',
          {
            class: w([
              'VPNavScreenMenuGroup',
              { open: t.value },
            ]),
          },
          [
            d(
              'button',
              {
                class: 'button',
                'aria-controls': o.value,
                'aria-expanded': t.value,
                onClick: n,
              },
              [
                d(
                  'span',
                  { class: 'button-text', innerHTML: l.text },
                  null,
                  8,
                  tr
                ),
                c[0] ||
                  (c[0] = d(
                    'span',
                    { class: 'vpi-plus button-icon' },
                    null,
                    -1
                  )),
              ],
              8,
              er
            ),
            d(
              'div',
              { id: o.value, class: 'items' },
              [
                (a(!0),
                i(
                  C,
                  null,
                  A(
                    l.items,
                    (v) => (
                      a(),
                      i(
                        C,
                        { key: JSON.stringify(v) },
                        [
                          'link' in v
                            ? (a(),
                              i('div', or, [
                                _(ze, { item: v }, null, 8, [
                                  'item',
                                ]),
                              ]))
                            : 'component' in v
                              ? (a(),
                                i('div', sr, [
                                  (a(),
                                  g(
                                    D(v.component),
                                    q({ ref_for: !0 }, v.props, {
                                      'screen-menu': '',
                                    }),
                                    null,
                                    16
                                  )),
                                ]))
                              : (a(),
                                i('div', ar, [
                                  _(
                                    Za,
                                    {
                                      text: v.text,
                                      items: v.items,
                                    },
                                    null,
                                    8,
                                    ['text', 'items']
                                  ),
                                ])),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ],
              8,
              nr
            ),
          ],
          2
        )
      )
    },
  }),
  lr = b(rr, [['__scopeId', 'data-v-875057a5']]),
  ir = { key: 0, class: 'VPNavScreenMenu' },
  cr = k({
    __name: 'VPNavScreenMenu',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).nav
          ? (a(),
            i('nav', ir, [
              (a(!0),
              i(
                C,
                null,
                A(
                  r(e).nav,
                  (n) => (
                    a(),
                    i(
                      C,
                      { key: JSON.stringify(n) },
                      [
                        'link' in n
                          ? (a(),
                            g(Ka, { key: 0, item: n }, null, 8, [
                              'item',
                            ]))
                          : 'component' in n
                            ? (a(),
                              g(
                                D(n.component),
                                q(
                                  { key: 1, ref_for: !0 },
                                  n.props,
                                  { 'screen-menu': '' }
                                ),
                                null,
                                16
                              ))
                            : (a(),
                              g(
                                lr,
                                {
                                  key: 2,
                                  text: n.text || '',
                                  items: n.items,
                                },
                                null,
                                8,
                                ['text', 'items']
                              )),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : h('', !0)
    },
  }),
  ur = k({
    __name: 'VPNavScreenSocialLinks',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        r(e).socialLinks
          ? (a(),
            g(
              $e,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: r(e).socialLinks,
              },
              null,
              8,
              ['links']
            ))
          : h('', !0)
    },
  }),
  dr = { class: 'list' },
  vr = k({
    __name: 'VPNavScreenTranslations',
    setup(s) {
      const { localeLinks: e, currentLang: t } = Y({
          correspondingLink: !0,
        }),
        o = M(!1)
      function n() {
        o.value = !o.value
      }
      return (l, c) =>
        r(e).length && r(t).label
          ? (a(),
            i(
              'div',
              {
                key: 0,
                class: w([
                  'VPNavScreenTranslations',
                  { open: o.value },
                ]),
              },
              [
                d('button', { class: 'title', onClick: n }, [
                  c[0] ||
                    (c[0] = d(
                      'span',
                      { class: 'vpi-languages icon lang' },
                      null,
                      -1
                    )),
                  W(' ' + N(r(t).label) + ' ', 1),
                  c[1] ||
                    (c[1] = d(
                      'span',
                      { class: 'vpi-chevron-down icon chevron' },
                      null,
                      -1
                    )),
                ]),
                d('ul', dr, [
                  (a(!0),
                  i(
                    C,
                    null,
                    A(
                      r(e),
                      (v) => (
                        a(),
                        i('li', { key: v.link, class: 'item' }, [
                          _(
                            O,
                            { class: 'link', href: v.link },
                            {
                              default: f(() => [
                                W(N(v.text), 1),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['href']
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              2
            ))
          : h('', !0)
    },
  }),
  pr = b(vr, [['__scopeId', 'data-v-362991c2']]),
  fr = { class: 'container' },
  hr = k({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(s) {
      const e = M(null),
        t = Ie(oe ? document.body : null)
      return (o, n) => (
        a(),
        g(
          de,
          {
            name: 'fade',
            onEnter: n[0] || (n[0] = (l) => (t.value = !0)),
            onAfterLeave: n[1] || (n[1] = (l) => (t.value = !1)),
          },
          {
            default: f(() => [
              o.open
                ? (a(),
                  i(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: e,
                      id: 'VPNavScreen',
                    },
                    [
                      d('div', fr, [
                        u(
                          o.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0
                        ),
                        _(cr, { class: 'menu' }),
                        _(pr, { class: 'translations' }),
                        _(Ra, { class: 'appearance' }),
                        _(ur, { class: 'social-links' }),
                        u(
                          o.$slots,
                          'nav-screen-content-after',
                          {},
                          void 0,
                          !0
                        ),
                      ]),
                    ],
                    512
                  ))
                : h('', !0),
            ]),
            _: 3,
          }
        )
      )
    },
  }),
  mr = b(hr, [['__scopeId', 'data-v-833aabba']]),
  _r = { key: 0, class: 'VPNav' },
  kr = k({
    __name: 'VPNav',
    setup(s) {
      const {
          isScreenOpen: e,
          closeScreen: t,
          toggleScreen: o,
        } = ps(),
        { frontmatter: n } = P(),
        l = $(() => n.value.navbar !== !1)
      return (
        He('close-screen', t),
        Z(() => {
          oe &&
            document.documentElement.classList.toggle(
              'hide-nav',
              !l.value
            )
        }),
        (c, v) =>
          l.value
            ? (a(),
              i('header', _r, [
                _(
                  za,
                  {
                    'is-screen-open': r(e),
                    onToggleScreen: r(o),
                  },
                  {
                    'nav-bar-title-before': f(() => [
                      u(
                        c.$slots,
                        'nav-bar-title-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-bar-title-after': f(() => [
                      u(
                        c.$slots,
                        'nav-bar-title-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-bar-content-before': f(() => [
                      u(
                        c.$slots,
                        'nav-bar-content-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-bar-content-after': f(() => [
                      u(
                        c.$slots,
                        'nav-bar-content-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen']
                ),
                _(
                  mr,
                  { open: r(e) },
                  {
                    'nav-screen-content-before': f(() => [
                      u(
                        c.$slots,
                        'nav-screen-content-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-screen-content-after': f(() => [
                      u(
                        c.$slots,
                        'nav-screen-content-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open']
                ),
              ]))
            : h('', !0)
      )
    },
  }),
  br = b(kr, [['__scopeId', 'data-v-f1e365da']]),
  gr = ['role', 'tabindex'],
  $r = { key: 1, class: 'items' },
  yr = k({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(s) {
      const e = s,
        {
          collapsed: t,
          collapsible: o,
          isLink: n,
          isActiveLink: l,
          hasActiveLink: c,
          hasChildren: v,
          toggle: p,
        } = mn($(() => e.item)),
        m = $(() => (v.value ? 'section' : 'div')),
        L = $(() => (n.value ? 'a' : 'div')),
        y = $(() =>
          v.value
            ? e.depth + 2 === 7
              ? 'p'
              : `h${e.depth + 2}`
            : 'p'
        ),
        V = $(() => (n.value ? void 0 : 'button')),
        T = $(() => [
          [`level-${e.depth}`],
          { collapsible: o.value },
          { collapsed: t.value },
          { 'is-link': n.value },
          { 'is-active': l.value },
          { 'has-active': c.value },
        ])
      function H(S) {
        ;('key' in S && S.key !== 'Enter') ||
          (!e.item.link && p())
      }
      function B() {
        e.item.link && p()
      }
      return (S, I) => {
        const E = J('VPSidebarItem', !0)
        return (
          a(),
          g(
            D(m.value),
            { class: w(['VPSidebarItem', T.value]) },
            {
              default: f(() => [
                S.item.text
                  ? (a(),
                    i(
                      'div',
                      q(
                        { key: 0, class: 'item', role: V.value },
                        Xe(
                          S.item.items
                            ? { click: H, keydown: H }
                            : {},
                          !0
                        ),
                        { tabindex: S.item.items && 0 }
                      ),
                      [
                        I[1] ||
                          (I[1] = d(
                            'div',
                            { class: 'indicator' },
                            null,
                            -1
                          )),
                        S.item.link
                          ? (a(),
                            g(
                              O,
                              {
                                key: 0,
                                tag: L.value,
                                class: 'link',
                                href: S.item.link,
                                rel: S.item.rel,
                                target: S.item.target,
                              },
                              {
                                default: f(() => [
                                  (a(),
                                  g(
                                    D(y.value),
                                    {
                                      class: 'text',
                                      innerHTML: S.item.text,
                                    },
                                    null,
                                    8,
                                    ['innerHTML']
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href', 'rel', 'target']
                            ))
                          : (a(),
                            g(
                              D(y.value),
                              {
                                key: 1,
                                class: 'text',
                                innerHTML: S.item.text,
                              },
                              null,
                              8,
                              ['innerHTML']
                            )),
                        S.item.collapsed != null &&
                        S.item.items &&
                        S.item.items.length
                          ? (a(),
                            i(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: B,
                                onKeydown: Ze(B, ['enter']),
                                tabindex: '0',
                              },
                              I[0] ||
                                (I[0] = [
                                  d(
                                    'span',
                                    {
                                      class:
                                        'vpi-chevron-right caret-icon',
                                    },
                                    null,
                                    -1
                                  ),
                                ]),
                              32
                            ))
                          : h('', !0),
                      ],
                      16,
                      gr
                    ))
                  : h('', !0),
                S.item.items && S.item.items.length
                  ? (a(),
                    i('div', $r, [
                      S.depth < 5
                        ? (a(!0),
                          i(
                            C,
                            { key: 0 },
                            A(
                              S.item.items,
                              (F) => (
                                a(),
                                g(
                                  E,
                                  {
                                    key: F.text,
                                    item: F,
                                    depth: S.depth + 1,
                                  },
                                  null,
                                  8,
                                  ['item', 'depth']
                                )
                              )
                            ),
                            128
                          ))
                        : h('', !0),
                    ]))
                  : h('', !0),
              ]),
              _: 1,
            },
            8,
            ['class']
          )
        )
      }
    },
  }),
  Lr = b(yr, [['__scopeId', 'data-v-a4b0d9bf']]),
  Pr = k({
    __name: 'VPSidebarGroup',
    props: { items: {} },
    setup(s) {
      const e = M(!0)
      let t = null
      return (
        j(() => {
          t = setTimeout(() => {
            ;(t = null), (e.value = !1)
          }, 300)
        }),
        et(() => {
          t != null && (clearTimeout(t), (t = null))
        }),
        (o, n) => (
          a(!0),
          i(
            C,
            null,
            A(
              o.items,
              (l) => (
                a(),
                i(
                  'div',
                  {
                    key: l.text,
                    class: w([
                      'group',
                      { 'no-transition': e.value },
                    ]),
                  },
                  [
                    _(Lr, { item: l, depth: 0 }, null, 8, [
                      'item',
                    ]),
                  ],
                  2
                )
              )
            ),
            128
          )
        )
      )
    },
  }),
  Vr = b(Pr, [['__scopeId', 'data-v-9e426adc']]),
  Sr = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  wr = k({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(s) {
      const { sidebarGroups: e, hasSidebar: t } = R(),
        o = s,
        n = M(null),
        l = Ie(oe ? document.body : null)
      G(
        [o, n],
        () => {
          var v
          o.open
            ? ((l.value = !0),
              (v = n.value) == null || v.focus())
            : (l.value = !1)
        },
        { immediate: !0, flush: 'post' }
      )
      const c = M(0)
      return (
        G(
          e,
          () => {
            c.value += 1
          },
          { deep: !0 }
        ),
        (v, p) =>
          r(t)
            ? (a(),
              i(
                'aside',
                {
                  key: 0,
                  class: w(['VPSidebar', { open: v.open }]),
                  ref_key: 'navEl',
                  ref: n,
                  onClick:
                    p[0] || (p[0] = tt(() => {}, ['stop'])),
                },
                [
                  p[2] ||
                    (p[2] = d(
                      'div',
                      { class: 'curtain' },
                      null,
                      -1
                    )),
                  d('nav', Sr, [
                    p[1] ||
                      (p[1] = d(
                        'span',
                        {
                          class: 'visually-hidden',
                          id: 'sidebar-aria-label',
                        },
                        ' Sidebar Navigation ',
                        -1
                      )),
                    u(
                      v.$slots,
                      'sidebar-nav-before',
                      {},
                      void 0,
                      !0
                    ),
                    (a(),
                    g(
                      Vr,
                      { items: r(e), key: c.value },
                      null,
                      8,
                      ['items']
                    )),
                    u(
                      v.$slots,
                      'sidebar-nav-after',
                      {},
                      void 0,
                      !0
                    ),
                  ]),
                ],
                2
              ))
            : h('', !0)
      )
    },
  }),
  Tr = b(wr, [['__scopeId', 'data-v-18756405']]),
  Mr = k({
    __name: 'VPSkipLink',
    setup(s) {
      const { theme: e } = P(),
        t = te(),
        o = M()
      G(
        () => t.path,
        () => o.value.focus()
      )
      function n({ target: l }) {
        const c = document.getElementById(
          decodeURIComponent(l.hash).slice(1)
        )
        if (c) {
          const v = () => {
            c.removeAttribute('tabindex'),
              c.removeEventListener('blur', v)
          }
          c.setAttribute('tabindex', '-1'),
            c.addEventListener('blur', v),
            c.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (l, c) => (
        a(),
        i(
          C,
          null,
          [
            d(
              'span',
              { ref_key: 'backToTop', ref: o, tabindex: '-1' },
              null,
              512
            ),
            d(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: n,
              },
              N(r(e).skipToContentLabel || 'Skip to content'),
              1
            ),
          ],
          64
        )
      )
    },
  }),
  Nr = b(Mr, [['__scopeId', 'data-v-492508fc']]),
  Cr = k({
    __name: 'Layout',
    setup(s) {
      const { isOpen: e, open: t, close: o } = R(),
        n = te()
      G(() => n.path, o), hn(e, o)
      const { frontmatter: l } = P(),
        c = nt(),
        v = $(() => !!c['home-hero-image'])
      return (
        He('hero-image-slot-exists', v),
        (p, m) => {
          const L = J('Content')
          return r(l).layout !== !1
            ? (a(),
              i(
                'div',
                { key: 0, class: w(['Layout', r(l).pageClass]) },
                [
                  u(p.$slots, 'layout-top', {}, void 0, !0),
                  _(Nr),
                  _(
                    tn,
                    {
                      class: 'backdrop',
                      show: r(e),
                      onClick: r(o),
                    },
                    null,
                    8,
                    ['show', 'onClick']
                  ),
                  _(br, null, {
                    'nav-bar-title-before': f(() => [
                      u(
                        p.$slots,
                        'nav-bar-title-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-bar-title-after': f(() => [
                      u(
                        p.$slots,
                        'nav-bar-title-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-bar-content-before': f(() => [
                      u(
                        p.$slots,
                        'nav-bar-content-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-bar-content-after': f(() => [
                      u(
                        p.$slots,
                        'nav-bar-content-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-screen-content-before': f(() => [
                      u(
                        p.$slots,
                        'nav-screen-content-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'nav-screen-content-after': f(() => [
                      u(
                        p.$slots,
                        'nav-screen-content-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    _: 3,
                  }),
                  _(
                    vs,
                    { open: r(e), onOpenMenu: r(t) },
                    null,
                    8,
                    ['open', 'onOpenMenu']
                  ),
                  _(
                    Tr,
                    { open: r(e) },
                    {
                      'sidebar-nav-before': f(() => [
                        u(
                          p.$slots,
                          'sidebar-nav-before',
                          {},
                          void 0,
                          !0
                        ),
                      ]),
                      'sidebar-nav-after': f(() => [
                        u(
                          p.$slots,
                          'sidebar-nav-after',
                          {},
                          void 0,
                          !0
                        ),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open']
                  ),
                  _(Yo, null, {
                    'page-top': f(() => [
                      u(p.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': f(() => [
                      u(p.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    'not-found': f(() => [
                      u(p.$slots, 'not-found', {}, void 0, !0),
                    ]),
                    'home-hero-before': f(() => [
                      u(
                        p.$slots,
                        'home-hero-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-hero-info-before': f(() => [
                      u(
                        p.$slots,
                        'home-hero-info-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-hero-info': f(() => [
                      u(
                        p.$slots,
                        'home-hero-info',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-hero-info-after': f(() => [
                      u(
                        p.$slots,
                        'home-hero-info-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-hero-actions-after': f(() => [
                      u(
                        p.$slots,
                        'home-hero-actions-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-hero-image': f(() => [
                      u(
                        p.$slots,
                        'home-hero-image',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-hero-after': f(() => [
                      u(
                        p.$slots,
                        'home-hero-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-features-before': f(() => [
                      u(
                        p.$slots,
                        'home-features-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'home-features-after': f(() => [
                      u(
                        p.$slots,
                        'home-features-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'doc-footer-before': f(() => [
                      u(
                        p.$slots,
                        'doc-footer-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'doc-before': f(() => [
                      u(p.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': f(() => [
                      u(p.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'doc-top': f(() => [
                      u(p.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': f(() => [
                      u(p.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'aside-top': f(() => [
                      u(p.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-bottom': f(() => [
                      u(
                        p.$slots,
                        'aside-bottom',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'aside-outline-before': f(() => [
                      u(
                        p.$slots,
                        'aside-outline-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'aside-outline-after': f(() => [
                      u(
                        p.$slots,
                        'aside-outline-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'aside-ads-before': f(() => [
                      u(
                        p.$slots,
                        'aside-ads-before',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    'aside-ads-after': f(() => [
                      u(
                        p.$slots,
                        'aside-ads-after',
                        {},
                        void 0,
                        !0
                      ),
                    ]),
                    _: 3,
                  }),
                  _(ts),
                  u(p.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2
              ))
            : (a(), g(L, { key: 1 }))
        }
      )
    },
  }),
  Ir = b(Cr, [['__scopeId', 'data-v-a9a9e638']]),
  Hr = {
    Layout: Ir,
    enhanceApp: ({ app: s }) => {
      s.component('Badge', Xt)
    },
  },
  Ar = {
    extends: Hr,
    enhanceApp({ app: s }) {
      s.component('demo', Qt)
    },
  }
export { Ar as R }
