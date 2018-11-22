import {
  animate,
  style,
  transition,
  trigger,
  keyframes
} from "@angular/animations";

export const navOpen = trigger("navOpen", [
  transition(":enter", [
    style({ transformOrigin: "50% 50%", boxShadow: "1px 1px 15px #3e3e3e" }),
    animate(
      "0.2s",
      keyframes([
        style({ opacity: 0, transform: "scale3d(.85, .85, .85)" }),
        style({ opacity: 1 })
      ])
    )
  ]),
  transition(":leave", [
    style({ transformOrigin: "50% 50%", boxShadow: "1px 1px 15px #3e3e3e" }),
    animate(
      "0.2s",
      keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0, transform: "scale3d(.85, .85, .85)" })
      ])
    )
  ])
]);
