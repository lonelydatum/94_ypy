import { olg } from "./proline";
import { theme2 } from "./reads";

import { commonInit } from "./common";

function init(time = theme2) {
  const tl = commonInit();

  tl.add("f2", "+=.5");
  const ok = ["300x250", "160x600", "300x600"];
  if (ok.includes(universalBanner.size)) {
    tl.from(
      [".f2_hero", ".f2_txt_1", ".f2_txt_2", ".f2_txt_3"],
      { duration: 0.1, opacity: 0 },
      "f2"
    );
  }
  console.log(time);

  tl.from(".f2_device", { duration: 0.5, opacity: 0 }, "f2+=.2");

  tl.from(".f2_txt", { duration: 0.5, opacity: 0 }, "f2+=.2");
  

  tl.add("f3", `+=${time.t1}`);
  tl.to(".f2_txt", { duration: 0.3, opacity: 0 }, "f3");
  tl.from(".f3a_txt", { duration: 0.3, opacity: 0 }, "f3");
  tl.from(".f3b_txt", { duration: 0.3, opacity: 0 }, "f3+=.6");

  tl.add("f4", `+=${time.t2}`);
  tl.to(".f2_device", { duration: 0.5, opacity: 0 }, "f4");
  tl.to(".f3_txt", { duration: 0.3, opacity: 0 }, "f4");
  
  

  tl.from(".f4_bg", { duration: 0.3, opacity: 0 }, "f4");

  tl.from(".f4_device", { duration: 0.3, opacity: 0 });
  tl.from(".f4_txt", { duration: 0.3, opacity: 0 });
  tl.from(".f4_cta", { duration: 0.3, opacity: 0 });

  tl.add(olg());

  return tl;
}

export { init };
