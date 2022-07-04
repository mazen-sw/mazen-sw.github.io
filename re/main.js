//calling the element by it's selector
//putting it in a variable
let les_elemo = Array.from(document.getElementsByClassName("mybtn"));
//printing it so we know if it came right
console.table(les_elemo);
// seeing it's type
console.log(typeof les_elemo);
//htmlobj.style.attribute = "value"

// let irrate = 0
// for (let i in les_elemo) {
//     les_elemo[i].style.backgroundColor = "darkblue";
//     irrate++
//     if (irrate == les_elemo.length) {
//         break;
//     }
// }
function heyy(elemoin) {
    elemoin.style.backgroundColor = "darkblue"
};
les_elemo.forEach(heyy);

// les_elemo.style.backgroundColor = "darkblue";
//deletion of an html obj 
document.getElementById("del").remove();
//make an element
const sect = document.querySelector("body>section:last-of-type");
sect.setAttribute("owner", "ahmed");
//notice the use of back ticks which differs from the signle tick
console.log(`the owner of sect is ${sect.attributes["owner"].nodeValue}`);
let eggCount = 20;
let square = document.createElement("div");
//can add multiple classes seperated by commas'
square.classList.add("square", "whatever");
square.id = "square";
square.classList.remove("whatever")
square.innerText = "By js"
console.log(square)
// sect.append(square);
console.log("appended")
//notice the way of assigning a function
/*
 function name(attrs){
     orders
};
or
(function (){
    orders
})();
*/
function cssattr(objei, attrs) {
    for (let i in attrs) {
        objei.style[i] = attrs[i];
    };
};
cssattr(square, {
    color: "white",
    fontSize: "3em",
    width: "200px"
});
/*u can call a func after a certain amount of secs and the
parametres of the function after the amount of time notice that all 
settimeouts start counting on the samepoint which is not a so great thing*/
let t = 3000
let increase = 1000
setTimeout(cssattr, t, square, { color: "black" })

//FunGround
//helping func
function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}
// for (let i in range(10)) {
while (t < 60000) {
    les_elemo = Array.from(document.getElementsByClassName("mybtn"));
    setTimeout(() => {
        les_elemo = Array.from(document.getElementsByClassName("mybtn"));
    }, t + 100);
    t = t + increase
    les_elemo.forEach(function (element) { setTimeout(cssattr, t + 500, element, { backgroundColor: "blue" }) })
    t = t + increase
    les_elemo.forEach(function (element) { setTimeout(cssattr, t + 800, element, { backgroundColor: "darkblue" }) })
};
//advertisment apply
// setTimeout(() => {
//     let advert = document.createElement("div");
//     let advertin = document.createElement("div");
//     advertin.innerText = "Your Adblock is on!"

//     console.log(document.body.style);
//     cssattr(advert, {
//         backgroundColor: "#8080807a",
//         zIndex: "501",
//         width: "100vw",
//         height: "100%",
//         position: "fixed",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//     });
//     cssattr(advertin, {
//         backgroundColor: "red",
//         color: "white",
//         fontSize: "7vw",
//         borderRadius: "6px",
//         border: "white 4px solid",
//         boxShadow: "0 0 20px 1px black",
//         opacity: "1 !important",
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         width: "fit-content",
//         transform: "translate(-50%,-50%)",
//         zIndex: "502",
//         padding: "3vw"
//     });
//     document.body.insertAdjacentElement("afterbegin", advert);
//     advert.insertAdjacentElement("afterbegin", advertin);
// }, 10000);
//a function is data so you can store in a variable and call that variable
let howm = 0
function ahmed(eo) {
    eo.preventDefault()
    let newh1 = document.createElement("h1");
    var typewriter = new Typewriter(newh1, {

    });
    typewriter.start()
    if (howm > 0) {
        typewriter.typeString(`A button is only clicked once (${howm})`)
    } else {
        typewriter.typeString(`A button is only clicked once`)
    }
    typewriter.pauseFor(3000)
    typewriter.deleteAll()
    newh1.classList.add('bgred');
    cssattr(newh1, { color: "rgb(121, 121, 121)", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "1002" })
    console.log(newh1);
    let mainsection = document.querySelector("main section")
    mainsection.insertAdjacentElement("afterbegin", newh1)
    setTimeout(cssattr, 0, newh1, { color: "black" });
    eo.target.removeEventListener("click", ahmed)
    setTimeout(function () { newh1.remove() }, 10000)
    howm++
};
function applylisten() {
    let les_elemo = Array.from(document.getElementsByClassName("mybtn"));
    les_elemo.forEach((element) => {

        element.addEventListener("click", ahmed)
    });
}
applylisten()
//changing a css global var
document.documentElement.style.setProperty('--myclr', "blue");
//array play
let arrmy = ["one", 2, { Number: "three" }]
arrmy[3] = 4
console.log(arrmy[3]);
//using an element without calling it with it's Id
hh.innerText = "I'm a repsectful Footer"
//adding products
ournum = 0
function welcome() {
    let additionx = document.getElementById("ex")
    const added = "<div></div>"
    let section3 = document.getElementById("prods")
    section3.innerHTML += additionx.outerHTML
    applylisten()
    ournum++
    console.log(`added ${ournum}`);
}