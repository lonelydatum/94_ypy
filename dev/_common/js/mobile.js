import { commonInit } from "./common.js";

import { olg } from "./proline.js";

function init(obj) {
  const tl = commonInit(50, 250);

  tl.add("f2", "+=.5");
  tl.to(".f1", { duration: 0.5, opacity: 0 }, "f2");
  tl.from(".f2_txt", { duration: 0.4, opacity: 0 });
  tl.from(".device", { duration: 0.4, opacity: 0 });
  tl.add("f3", `+=${obj.t1}`);
  tl.to(".device", { duration: 0.4, opacity: 0 }, "f3");
  if (
    universalBanner.name === "theme1" ||
    universalBanner.name === "theme2" ||
    universalBanner.name === "progressive"
  ) {
    tl.from(".f3_txt", { duration: 0.4, opacity: 0 }, "f3");
    tl.add("f4", `+=${obj.t2}`);
    tl.to(".f2_txt", { duration: 0.4, opacity: 0 }, "f4");
  } else {
    tl.to(".f2_txt", { duration: 0.4, opacity: 0 }, "f3");
    tl.from(".f3a_txt", { duration: 0.4, opacity: 0 });
    tl.from(".f3b_txt", { duration: 0.4, opacity: 0 });
    tl.add("f4", `+=${obj.t2}`);
  }

  if (universalBanner.name === "safety") {
    tl.from("._spark", { duration: 0.5, opacity: 0 }, "f2");
  }
  if (universalBanner.name === "safety") {
    tl.to("._spark", { duration: 0.5, opacity: 0 }, "f4");
  }

  tl.to(".f3_txt", { duration: 0.4, opacity: 0 }, "f4");
  tl.from(".f4_txt", { duration: 0.4, opacity: 0 });
  tl.from(".f4_cta", { duration: 0.4, opacity: 0 });

  tl.add(olg());
}

export { init };
