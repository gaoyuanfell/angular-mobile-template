import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
  keyframes,
  state,
  stagger,
} from "@angular/animations";

const animationContentClass = "moka-tab-modal";

const _bounceInRightAnimation = [
  query(
    `:enter ${animationContentClass}`,
    [style({ transform: "translateX(-100%)" })],
    {
      optional: true,
      limit: 1,
    }
  ),
  group([
    query(
      `:enter ${animationContentClass}`,
      [
        animate(
          "333ms cubic-bezier(0.41, 0.99, 0.57, 1)",
          style({ transform: "translateX(0%)" })
        ),
      ],
      { optional: true, limit: 1 }
    ),
    query(
      `:leave ${animationContentClass}`,
      [
        animate(
          "333ms cubic-bezier(0.41, 0.99, 0.57, 1)",
          style({ transform: "translateX(100%)" })
        ),
      ],
      { optional: true, limit: 1 }
    ),
  ]),
];

const _bounceInLeftAnimation = [
  query(
    `:enter ${animationContentClass}`,
    [style({ transform: "translateX(100%)" })],
    {
      optional: true,
      limit: 1,
    }
  ),
  group([
    query(
      `:enter ${animationContentClass}`,
      [
        animate(
          "333ms cubic-bezier(0.41, 0.99, 0.57, 1)",
          style({ transform: "translateX(0%)" })
        ),
      ],
      { optional: true, limit: 1 }
    ),
    query(
      `:leave ${animationContentClass}`,
      [
        animate(
          "333ms cubic-bezier(0.41, 0.99, 0.57, 1)",
          style({ transform: "translateX(-100%)" })
        ),
      ],
      { optional: true, limit: 1 }
    ),
  ]),
];

const _bounceOpacityInLeftAnimation = [
  query(
    `:enter ${animationContentClass}`,
    [style({ transform: "translateX(100%)", opacity: 0 })],
    {
      optional: true,
      limit: 1,
    }
  ),
  group([
    query(
      `:enter ${animationContentClass}`,
      [
        animate(
          "333ms cubic-bezier(0.41, 0.99, 0.57, 1)",
          style({ transform: "translateX(0%)", opacity: 1 })
        ),
      ],
      { optional: true, limit: 1 }
    ),
    query(
      `:leave ${animationContentClass}`,
      [
        animate(
          "333ms cubic-bezier(0.41, 0.99, 0.57, 1)",
          style({ transform: "translateX(-100%)", opacity: 0 })
        ),
      ],
      { optional: true, limit: 1 }
    ),
  ]),
];

const _navOpenAnimation = [
  query(
    `:enter ${animationContentClass}, :leave ${animationContentClass}`,
    [style({ transformOrigin: "50% 50%" })],
    { optional: true, limit: 1 }
  ),
  query(
    `:enter ${animationContentClass}`,
    [style({ boxShadow: "1px 1px 15px #3e3e3e" })],
    { optional: true, limit: 1 }
  ),
  query(
    `:enter ${animationContentClass}`,
    [style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })],
    { optional: true, limit: 1 }
  ),
  group([
    query(
      `:enter ${animationContentClass}`,
      [
        animate(
          "0.18s ease",
          style({ opacity: 1, transform: "scale3d(1, 1, 1)" })
        ),
      ],
      { optional: true, limit: 1 }
    ),
    query(
      `:leave ${animationContentClass}`,
      [animate("0.18s ease", style({ opacity: 0 }))],
      { optional: true, limit: 1 }
    ),
  ]),
];

const _navOpenCloseAnimation = [
  query(
    `:enter ${animationContentClass}, :leave ${animationContentClass}`,
    [style({ transformOrigin: "50% 50%", boxShadow: "1px 1px 15px #3e3e3e" })],
    { optional: true, limit: 1 }
  ),
  query(
    `:enter ${animationContentClass}`,
    [style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })],
    { optional: true, limit: 1 }
  ),
  group([
    query(
      `:enter ${animationContentClass}`,
      [
        animate(
          "0.18s ease",
          style({ opacity: 1, transform: "scale3d(1, 1, 1)" })
        ),
      ],
      { optional: true, limit: 1 }
    ),
    query(
      `:leave ${animationContentClass}`,
      [
        animate(
          "0.18s ease",
          style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
        ),
      ],
      { optional: true, limit: 1 }
    ),
  ]),
];

const _bounceInRight = [transition(`* <=> *`, _bounceInRightAnimation)];

const _bounceInLeft = [transition(`* <=> *`, _bounceInLeftAnimation)];

const _bounceOpacityInLeft = [
  transition(`* <=> *`, _bounceOpacityInLeftAnimation),
];

const _navOpen = [transition(`* <=> *`, _navOpenAnimation)];

const _navOpenClose = [transition(`* <=> *`, _navOpenCloseAnimation)];

export const bounceInRight = trigger("bounceInRight", _bounceInRight);

export const bounceInLeft = trigger("bounceInLeft", _bounceInLeft);

export const bounceOpacityInLeft = trigger(
  "bounceOpacityInLeft",
  _bounceOpacityInLeft
);

export const navOpen = trigger("navOpen", _navOpen);

export const navOpenClose = trigger("navOpenClose", _navOpenClose);

export const fideIn = trigger("fideIn", [
  transition(":increment", [
    query(
      `${animationContentClass}`,
      [
        animate(
          "200ms ease-out",
          keyframes([style({ opacity: "0" }), style({ opacity: "1" })])
        ),
      ],
      { optional: true, limit: 1 }
    ),
  ]),
  transition(":decrement", [
    query(`${animationContentClass}`, [style({ opacity: "0" })], {
      optional: true,
      limit: 1,
    }),
  ]),
]);

export const animateList = [
  bounceInRight,
  bounceInLeft,
  bounceOpacityInLeft,
  navOpen,
  navOpenClose,
  // fideIn,
];

// ---------------------------- 测试 ----------------------------------
export const fideIn2 = trigger("fideIn2", [
  state(
    "false",
    style({
      opacity: "0",
    })
  ),
  state(
    "true",
    style({
      opacity: "1",
    })
  ),
  transition("false <=> true", [animate("1s ease")]),
]);

// export const fideIn3 = trigger("fideIn3", [
//   transition(":enter", [
//     style({ opacity: 0 }),
//     animate("0.5s", style({ opacity: 1 })),
//   ]),
//   transition(":leave", [animate("0.5s", style({ opacity: 0 }))]),
// ]);

// export const listAnimation = trigger("listAnimation", [
//   transition("* => *", [
//     // each time the binding value changes
//     query(
//       ":leave",
//       [
//         style({ opacity: 1 }),
//         stagger(100, [animate("0.5s", style({ opacity: 0 }))]),
//       ],
//       { optional: true, limit: 1 }
//     ),
//     query(
//       ":enter",
//       [
//         style({ opacity: 0 }),
//         stagger(100, [animate("0.5s", style({ opacity: 1 }))]),
//       ],
//       { optional: true, limit: 1 }
//     ),
//   ]),
// ]);
