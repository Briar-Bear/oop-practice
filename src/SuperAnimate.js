/**
 * @class - creates animation
 */

export function SuperAnimate () {}

SuperAnimate.prototype.opacity = function () {
  this.element.animate('keyframes',
    [
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    ], 2000)
}

SuperAnimate.prototype.keyframeDown = function () {
  this.element.animate('keyframes', [
    {
      transform: 'translateY(0%)'
    },
    {
      transform: 'translateY(100%)'
    }
  ],
  { duration: 3000, fill: 'forwards' }
  )
}
