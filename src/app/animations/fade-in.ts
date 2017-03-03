import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('in', style({opacity: 1})),
  transition(':enter', [
    style({opacity: 0}),
    animate(300)
  ]),
  transition(':leave', [
    animate(0, style({opacity: 1}))
  ])
]);
