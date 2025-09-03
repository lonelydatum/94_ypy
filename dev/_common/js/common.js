function commonInit() {
  const legal = {
    arcade: `©2025 Pragmatic Play. All rights reserved. 
©2025 Games Global. All rights reserved. 
Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.
`,
    games: `©2025 IGT. </br>
©2025 Pragmatic Play.
All rights reserved. ©2025 Evolution. 
All rights reserved. Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.
`,
    progressive: `©2025 IGT. </br>
©2025 Califon Productions, Inc. 
Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.
`,
    safety: `©2025 IGT.</br>
Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. 
Games may not appear as shown.
Odds vary by game. Terms and conditions apply.
*Voted most trusted Online Casino by Ontario shoppers based on the 2025 Brandspark® Canadian Trust Study.
`,
    theme1: `©2025 Light & Wonder. All rights reserved.
©2025 AGS. All rights reserved. <br/>Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.`,
    theme2: `©2025 Evolution. All rights reserved. 
©2025 Pragmatic Play. All rights reserved. 
Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.
`,
friends:`© copyright 2025 Atlantic Digital – all rights reserved. FRIENDS and all related characters and elements © & TM Warner Bros. Entertainment Inc.
Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.`
  };




  const legalContent = document.getElementById("legalContent");
  legalContent.innerHTML = legal[universalBanner.name];

  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.to(".f4_legal", { opacity: 1 });
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });
  tl.set(".f4_legal", { opacity: 0 });
  tl.set(".frame1", { opacity: 1 });
  tl.from(".f1_txt_1", { duration: 0.3, opacity: 0, rotation:-30 }, 0);
  tl.from(".f1_txt_2", { duration: 0.3, opacity: 0, rotation:-30 }, .2);
  tl.from(".f1_txt_3", { duration: 0.3, opacity: 0, rotation:-30 }, .4);

  return tl;
}

export { commonInit };
