function LightenDarkenColor(col, amt) {
    col = parseInt(col, 16);
    return (((col & 0x0000FF) + amt) | ((((col >> 8) & 0x00FF) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16);
  }
let head = document.getElementById("head")
let foot = document.getElementById("footer")
foot.style.paddingRight = (window.getComputedStyle(head).width)
let changecolor = document.getElementById("changecolor")
changecolor.setAttribute("value",getComputedStyle(document.documentElement).getPropertyValue('--idncolor').substring(1))
function idnchange(){
    document.documentElement.style.setProperty("--idncolor",changecolor.value)
    console.log("dn");
    changecolor.value = LightenDarkenColor(changecolor.value,40)
}
