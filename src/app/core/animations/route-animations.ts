import {
  trigger,
  transition,
  style,
  animate,
  animateChild,
  query,
  group
} from "@angular/animations";

const animationContentClass = '.content-modal'

const _bounceInRight = [
  transition(`HomeComponent <=> AboutComponent`, [
    query(`:enter ${animationContentClass}`, [style({ left: "-100%" })]),
    query(`:leave ${animationContentClass}`, animateChild()),
    group([
      query(`:enter ${animationContentClass}`, [
        animate("300ms ease-out", style({ left: "0%" }))
      ]),
      query(`:leave ${animationContentClass}`, [
        animate("300ms ease-out", style({ left: "100%" }))
      ])
    ]),
    query(`:enter ${animationContentClass}`, animateChild())
  ])
]

const _bounceInLeft = [
  transition(`HomeComponent <=> AboutComponent`, [
    query(`:enter ${animationContentClass}`, [style({ left: "100%" })]),
    query(`:leave ${animationContentClass}`, animateChild()),
    group([
      query(`:enter ${animationContentClass}`, [
        animate("300ms ease-out", style({ left: "0%" }))
      ]),
      query(`:leave ${animationContentClass}`, [
        animate("300ms ease-out", style({ left: "-100%" }))
      ])
    ]),
    query(`:enter ${animationContentClass}`, animateChild())
  ])
]

const _navOpen = [
  transition(`HomeComponent <=> AboutComponent`, [
    query(`:enter ${animationContentClass}, :leave ${animationContentClass}`, [
      style({ transformOrigin: "50% 50%" })
    ]),
    query(`:enter ${animationContentClass}`, [
      style({ boxShadow: "1px 1px 15px #3e3e3e" })
    ]),
    query(`:enter ${animationContentClass}`, [
      style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
    ]),
    query(`:leave ${animationContentClass}`, animateChild()),
    group([
      query(`:enter ${animationContentClass}`, [
        animate(
          "0.18s ease",
          style({ opacity: 1, transform: "scale3d(1, 1, 1)" })
        )
      ]),
      query(`:leave ${animationContentClass}`, [
        animate("0.18s ease", style({ opacity: 0 }))
      ])
    ])
  ])
]

const _navOpenClose = [
  transition(`HomeComponent <=> AboutComponent`, [
    query(`:enter ${animationContentClass}, :leave ${animationContentClass}`, [
      style({ transformOrigin: "50% 50%", boxShadow: "1px 1px 15px #3e3e3e" })
    ]),
    query(`:enter ${animationContentClass}`, [
      style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
    ]),
    query(`:leave ${animationContentClass}`, animateChild()),
    group([
      query(`:enter ${animationContentClass}`, [
        animate(
          "0.18s ease",
          style({ opacity: 1, transform: "scale3d(1, 1, 1)" })
        )
      ]),
      query(`:leave ${animationContentClass}`, [
        animate(
          "0.18s ease",
          style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
        )
      ])
    ])
  ])
]

export const bounceInRight = trigger("bounceInRight", _bounceInRight);

export const bounceInLeft = trigger("bounceInLeft", _bounceInLeft);

export const navOpen = trigger("navOpen", _navOpen);

export const navOpenClose = trigger("navOpenClose", _navOpenClose);
