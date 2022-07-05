function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}
let head = document.getElementById("head")
let foot = document.getElementById("footer")
foot.style.paddingRight = (window.getComputedStyle(head).width)
let changecolor = document.getElementById("changecolor")
changecolor.setAttribute("value",getComputedStyle(document.documentElement).getPropertyValue('--idncolor').substring(1))
function idnchange(){
    document.documentElement.style.setProperty("--idncolor",changecolor.value)
    document.documentElement.style.setProperty("--lightidn",ColorLuminance(changecolor.value, .3))
    console.log("dn");
    
    //ColorLuminance(changecolor.value, .9)
}

function contact(){
    
}
let signbtn = document.getElementById("signup")
let ppup = document.getElementById("ppup")
function appear() {
    ppup.style.display = "block"
}

function dismiss(){

    
    console.log("dn");
    let name = document.getElementById("user")
    if (name.value != "") {
        signbtn.style.width = getComputedStyle(document.querySelector("#prototype")).width
        let myname = name.value
        ppup.style.display="none";
        signbtn.innerText = "Welcome! "+myname
        signbtn.setAttribute("onclick","")
        signbtn.classList.add("dont")
    }else{
        alert("username is empty!")
    }

}