import {
  trigger,
  transition,
  style,
  animate,
  animateChild,
  query,
  group,
  keyframes
} from "@angular/animations";

const animationContentClass = 'moka-content-modal'

const _bounceInRightAnimation = [
  query(`:enter ${animationContentClass}`, [style({ left: "-100%" })], { optional: true }),
  query(`:leave ${animationContentClass}`, animateChild(), { optional: true }),
  query(`:enter ${animationContentClass}`, animateChild(), { optional: true }),
  group([
    query(`:enter ${animationContentClass}`, [
      animate("300ms ease-out", style({ left: "0%" }))
    ], { optional: true }),
    query(`:leave ${animationContentClass}`, [
      animate("300ms ease-out", style({ left: "100%" }))
    ], { optional: true })
  ]),
]

const _bounceInLeftAnimation = [
  query(`:enter ${animationContentClass}`, [style({ left: "100%" })], { optional: true }),
  query(`:leave ${animationContentClass}`, animateChild(), { optional: true }),
  query(`:enter ${animationContentClass}`, animateChild(), { optional: true }),
  group([
    query(`:enter ${animationContentClass}`, [
      animate("300ms ease-out", style({ left: "0%" }))
    ], { optional: true }),
    query(`:leave ${animationContentClass}`, [
      animate("300ms ease-out", style({ left: "-100%" }))
    ], { optional: true })
  ]),
]

const _bounceOpacityInLeftAnimation = [
  query(`:enter ${animationContentClass}`, [style({ opacity: "0" })], { optional: true }),
  query(`:leave ${animationContentClass}`, animateChild(), { optional: true }),
  query(`:enter ${animationContentClass}`, animateChild(), { optional: true }),
  group([
    query(`:enter ${animationContentClass}`, [
      animate("300ms ease-out", style({ opacity: "1" }))
    ], { optional: true }),
    query(`:leave ${animationContentClass}`, [
      animate("300ms ease-out", style({ left: "-100%" }))
    ], { optional: true })
  ]),
]

const _navOpenAnimation = [
  query(`:enter ${animationContentClass}, :leave ${animationContentClass}`, [
    style({ transformOrigin: "50% 50%" })
  ], { optional: true }),
  query(`:enter ${animationContentClass}`, [
    style({ boxShadow: "1px 1px 15px #3e3e3e" })
  ], { optional: true }),
  query(`:enter ${animationContentClass}`, [
    style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
  ], { optional: true }),
  query(`:leave ${animationContentClass}`, animateChild(), { optional: true }),
  group([
    query(`:enter ${animationContentClass}`, [
      animate(
        "0.18s ease",
        style({ opacity: 1, transform: "scale3d(1, 1, 1)" })
      )
    ], { optional: true }),
    query(`:leave ${animationContentClass}`, [
      animate("0.18s ease", style({ opacity: 0 }))
    ], { optional: true })
  ])
]

const _navOpenCloseAnimation = [
  query(`:enter ${animationContentClass}, :leave ${animationContentClass}`, [
    style({ transformOrigin: "50% 50%", boxShadow: "1px 1px 15px #3e3e3e" })
  ], { optional: true }),
  query(`:enter ${animationContentClass}`, [
    style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
  ], { optional: true }),
  query(`:leave ${animationContentClass}`, animateChild(), { optional: true }),
  group([
    query(`:enter ${animationContentClass}`, [
      animate(
        "0.18s ease",
        style({ opacity: 1, transform: "scale3d(1, 1, 1)" })
      )
    ], { optional: true }),
    query(`:leave ${animationContentClass}`, [
      animate(
        "0.18s ease",
        style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
      )
    ], { optional: true })
  ])
]

const _bounceInRight = [
  transition(`* <=> *`, _bounceInRightAnimation)
]

const _bounceInLeft = [
  transition(`* <=> *`, _bounceInLeftAnimation)
]

const _bounceOpacityInLeft = [
  transition(`* <=> *`, _bounceOpacityInLeftAnimation)
]

const _navOpen = [
  transition(`* <=> *`, _navOpenAnimation)
]

const _navOpenClose = [
  transition(`* <=> *`, _navOpenCloseAnimation),
]

export const bounceInRight = trigger('bounceInRight', _bounceInRight);

export const bounceInLeft = trigger('bounceInLeft', _bounceInLeft);

export const bounceOpacityInLeft = trigger('bounceOpacityInLeft', _bounceOpacityInLeft);

export const navOpen = trigger('navOpen', _navOpen);

export const navOpenClose = trigger('navOpenClose', _navOpenClose);

export const fideIn = trigger('fideIn', [
  transition(':increment', [
    query(`${animationContentClass}`, [
      animate("200ms ease-out", keyframes([
        style({ opacity: "0" }),
        style({ opacity: "1" }),
      ]))
    ], { optional: true })
  ]),
  transition(':decrement', [
    query(`${animationContentClass}`, [
      style({ opacity: "0" })
    ], { optional: true })
  ])
])

export const animateList = [
  bounceInRight,
  bounceInLeft,
  bounceOpacityInLeft,
  navOpen,
  navOpenClose,
  fideIn,
]