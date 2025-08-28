import {olg} from "./proline"
import {commonInit} from "./common"







function start(obj){	
	

	const tl = commonInit()

	
	
	tl.add("f2", "+=.1")
	const ok = ["300x250"]
	if(ok.includes(universalBanner.size)){
		tl.from([ ".f2_device", ".f2_txt_1", ".f2_txt_2", ".f2_txt_3"], {duration:.5, opacity:0}, "f2")	
		tl.to([ ".f1_device", ".f1_txt_1", ".f1_txt_2", ".f1_txt_3"], {duration:.5, opacity:0}, "f2")
	}
	

	tl.from(".f2_txt", {duration:.5, opacity:0}, "f2")

	tl.add("f3", 	`+=${obj.t1}`)
	
	tl.from(".f3_txt", {duration:.3, opacity:0}, "f3")


	tl.add("f4", `+=${obj.t2}`)
	tl.to(".f3_txt", {duration:.3, opacity:0}, "f4")
	tl.to(".f2_txt", {duration:.3, opacity:0}, "f4")

	
	tl.from(".f4_txt", {duration:.3, opacity:0})
	tl.from(".f4_cta", {duration:.3, opacity:0})

	

	tl.add(olg())
	
	
	return tl
}


 

export { start  }