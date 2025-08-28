import { commonInit } from "../../_common/js/common.js";
import { friends } from "../../_common/js/reads.js";

import { olg } from "../../_common/js/proline.js";

function init() {
  const tl = new commonInit();

  tl.add("f2", "+=.1");

  tl.from(".f2_txt", { duration: 0.5, opacity: 0 }, "f2");

  tl.add("f3", `+=${friends.t1}`);
  tl.to(".f2_txt", { duration: 0.3, opacity: 0 }, "f3");
  tl.from(".f3a_txt", { duration: 0.3, opacity: 0 }, "f3");
  tl.from(".f3b_txt", { duration: 0.3, opacity: 0 }, "f3+=.3");

  tl.add("f4", `+=${friends.t2}`);
  tl.to(
    [".f3_txt", ".f1_txt_1", ".f1_txt_2", ".f1_txt_3"],
    { duration: 0.3, opacity: 0 },
    "f4"
  );
  
  

  tl.from(".f4_txt", { duration: 0.3, opacity: 0 });
  tl.from(".f4_cta", { duration: 0.3, opacity: 0 });

  tl.add(olg());

  return tl;
}

init();
