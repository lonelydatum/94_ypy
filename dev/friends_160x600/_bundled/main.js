(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function commonInit() {
  var legal = {
    arcade: "©2025 Pragmatic Play. All rights reserved. \n©2025 Games Global. All rights reserved. \nMust be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.\n",
    games: "©2025 IGT. </br>\n©2025 Pragmatic Play.\nAll rights reserved. ©2025 Evolution. \nAll rights reserved. Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.\n",
    progressive: "©2025 IGT. </br>\n©2025 Califon Productions, Inc. \nMust be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.\n",
    safety: "©2025 IGT.</br>\nMust be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. \nGames may not appear as shown.\nOdds vary by game. Terms and conditions apply.\n*Voted most trusted Online Casino by Ontario shoppers based on the 2025 Brandspark® Canadian Trust Study.\n",
    theme1: "©2025 Light & Wonder. All rights reserved.\n©2025 AGS. All rights reserved. <br/>Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.",
    theme2: "©2025 Evolution. All rights reserved. \n©2025 Pragmatic Play. All rights reserved. \nMust be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.\n",
    friends: "© copyright 2025 Atlantic Digital – all rights reserved. FRIENDS and all related characters and elements © & TM Warner Bros. Entertainment Inc.\nMust be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply."
  };

  var legalContent = document.getElementById("legalContent");
  legalContent.innerHTML = legal[universalBanner.name];

  var tl = new TimelineMax({
    onComplete: function onComplete() {
      if (document.getElementById("legalBtn")) {
        TweenLite.to(".f4_legal", { opacity: 1 });
        TweenLite.set("#legalBtn", { display: "block" });
      }
    }
  });
  tl.set(".f4_legal", { opacity: 0 });
  tl.set(".frame1", { opacity: 1 });
  tl.from(".f1_txt_1", { duration: 0.4, opacity: 0, y: "-=100" });
  tl.from(".f1_txt_2", { duration: 0.4, opacity: 0, y: "-=100" }, "-=.2");
  tl.from(".f1_txt_3", { duration: 0.4, opacity: 0, y: "-=100" }, "-=.2");

  return tl;
}

exports.commonInit = commonInit;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {

  var time = 1;

  var tl_olg = new TimelineMax();
  // return tl_olg

  tl_olg.to("#svg_idle", { duration: .3, ease: "custom", y: "+=100", opacity: 0 });

  tl_olg.from("#svg_move #olg_bg", { duration: .6, ease: "custom", scale: 0 }, .3);

  tl_olg.from("#svg_move .svg_logo", { duration: .4, opacity: 0, y: "+=50" }, .5);

  tl_olg.from("#svg_move .con", { stagger: .06, duration: .8, rotation: "+=300", ease: "custom", x: "-=200", y: "+=200", opacity: 0 }, .2);

  return tl_olg;
}

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
  ease: "power2.out"
});

var w = bannerSize.w;
var h = bannerSize.h;
exports.olg = olg;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var games = {
  t1: 1.8,
  t2: 2.2
};

var theme1 = {
  t1: 1.8,
  t2: 2
};

var arcade = {
  t1: 2,
  t2: 2.5
};

var theme2 = {
  t1: 0.5,
  t2: 1.5
};

var progressive = {
  t1: 2,
  t2: 1.5
};

var safety = {
  t1: 2.2,
  t2: 1.8
};

var friends = {
  t1: 1,
  t2: 3
};

exports.friends = friends;
exports.games = games;
exports.theme1 = theme1;
exports.arcade = arcade;
exports.theme2 = theme2;
exports.progressive = progressive;
exports.safety = safety;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _proline = require("./proline");

var _reads = require("./reads");

var _common = require("./common");

function init() {
  var time = arguments.length <= 0 || arguments[0] === undefined ? _reads.theme2 : arguments[0];

  var tl = (0, _common.commonInit)();

  tl.add("f2", "+=.5");
  var ok = ["300x250", "160x600", "300x600"];
  if (ok.includes(universalBanner.size)) {
    tl.from([".f2_hero", ".f2_txt_1", ".f2_txt_2", ".f2_txt_3"], { duration: 0.1, opacity: 0 }, "f2");
  }
  console.log(time);

  tl.from(".f2_device", { duration: 0.5, opacity: 0 }, "f2+=.2");

  tl.from(".f2_txt", { duration: 0.5, opacity: 0 }, "f2+=.2");

  tl.add("f3", "+=" + time.t1);
  tl.to(".f2_txt", { duration: 0.3, opacity: 0 }, "f3");
  tl.from(".f3a_txt", { duration: 0.3, opacity: 0 }, "f3+=.2");
  tl.from(".f3b_txt", { duration: 0.3, opacity: 0 }, "f3+=.6");

  tl.add("f4", "+=" + time.t2);
  tl.to(".f2_device", { duration: 0.5, opacity: 0 }, "f4");
  tl.to(".f3_txt", { duration: 0.3, opacity: 0 }, "f4");

  tl.from(".f4_bg", { duration: 0.3, opacity: 0 }, "f4");

  tl.from(".f4_device", { duration: 0.3, opacity: 0 });
  tl.from(".f4_txt", { duration: 0.3, opacity: 0 });
  tl.from(".f4_cta", { duration: 0.3, opacity: 0 });

  tl.add((0, _proline.olg)());

  return tl;
}

exports.init = init;

},{"./common":1,"./proline":2,"./reads":3}],5:[function(require,module,exports){
"use strict";

var _commonJsYpy_theme2Js = require("../../_common/js/ypy_theme2.js");

var _commonJsReadsJs = require("../../_common/js/reads.js");

(0, _commonJsYpy_theme2Js.init)(_commonJsReadsJs.friends);

},{"../../_common/js/reads.js":3,"../../_common/js/ypy_theme2.js":4}]},{},[5])


//# sourceMappingURL=main.js.map
