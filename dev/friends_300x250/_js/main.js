import { olg } from "../../_common/js/proline.js";
import { commonInit } from "../../_common/js/common.js";
import { friends } from "../../_common/js/reads.js";

function init() {
  const tl = commonInit();

  // translate(-150px, -150px) scale(0.42)

  tl.add("f2", "+=.1");
  tl.to([".f1_device"], { duration: 0.3, scale: 0.5, y: -124 }, "f2");

  tl.from(".f2_txt", { duration: 0.3, opacity: 0 });

  tl.add("f3", `+=${friends.t1}`);
  tl.to(".f2_txt", { duration: 0.3, opacity: 0 }, "f3");
  tl.from(".f3a_txt", { duration: 0.3, opacity: 0 }, "f3");
  tl.from(".f3b_txt", { duration: 0.3, opacity: 0 }, "f3+=.5");

  tl.add("f4", `+=${friends.t2}`);
  tl.to(".f3_txt", { duration: 0.3, opacity: 0 }, "f4");

  

  tl.from(".f4_txt", { duration: 0.3, opacity: 0 });
  tl.from(".f4_cta", { duration: 0.3, opacity: 0 });

  tl.add(olg());

  return tl;
}

init();
