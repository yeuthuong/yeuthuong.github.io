'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {if (window.CP.shouldStopExecution(2)){break;} var source = arguments[i]; for (var key in source) {if (window.CP.shouldStopExecution(1)){break;} if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } }
window.CP.exitedLoop(1);
 }
window.CP.exitedLoop(2);
 return target; };

var el = document.querySelector('.heart');
var heart = $('.heart svg');
var tl = new TimelineMax({ paused: true });
var timeline = new mojs.Timeline();

tl.add(TweenMax.to(heart, 0.15, {
  scaleX: .4,
  scaleY: .2,
  ease: Back.easeOut.config(4)
}));
tl.add(TweenMax.to(heart, 0.25, {
  scaleX: 1,
  scaleY: 1,
  ease: Back.easeOut.config(4)
}));

var burst = new mojs.Burst({
  parent: el,
  count: 10,
  radius: { 0: 80 },
  duration: 1500,
  children: {
    radius: { 15: 0 },
    easing: 'cubic.out',
    degreeShift: 'rand(-50,50)'
  }
});

var burst2 = new mojs.Burst({
  parent: el,
  count: 15,
  radius: { 0: 60 },
  children: {
    shape: 'line',
    stroke: 'white',
    fill: 'none',
    scale: 1,
    scaleX: { 1: 0 },
    easing: 'cubic.out',
    duration: 1000,
    degreeShift: 'rand(-50, 50)'
  }
});

var bubbles = new mojs.Burst({
  parent: el,
  radius: 50,
  count: 5,
  timeline: { delay: 200 },
  children: {
    stroke: 'white',
    fill: 'none',
    scale: 1,
    strokeWidth: { 8: 0 },
    radius: { 0: 'rand(6, 10)' },
    degreeShift: 'rand(-50, 50)',
    duration: 400,
    delay: 'rand(0, 250)'
  }
});

var circ_opt = {
  parent: el,
  radius: { 0: 50 },
  duration: 750,
  shape: 'circle',
  fill: 'none',
  stroke: '#FF4136',
  strokeWidth: 1,
  opacity: { 1: 0 }
};

var circ = new mojs.Shape(_extends({}, circ_opt));

var circ2 = new mojs.Shape(_extends({}, circ_opt, {
  delay: 100
}));

timeline.add(circ, circ2);

// when clicking the button start the timeline/animation:
$(el).on('click', function () {
  if ($(el).hasClass('active')) {
    $(el).toggleClass('active');
  } else {
    $(el).toggleClass('active');
    tl.restart();
    burst.generate().replay();
    burst2.generate().replay();
    bubbles.generate().replay();
    timeline.replay();
  }
});
