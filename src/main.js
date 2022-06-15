const bulbOff = document.querySelector(".off");
const changeBulb_color = document.querySelector(".changeBulb")
const bulbOn = document.querySelector(".on")
const bulb = document.querySelector(".circle")
const retangle = document.querySelector(".retangle");
const audio = new Audio("/src/audio/Record20220123190144.aac")

bulbOn.addEventListener("click", () =>{
   bulb.style.background = "rgba(39, 255, 255, 1)"
   bulb.style.boxShadow = `10px 10px 130px rgba(39, 255, 255, 1)`
   retangle.style.background = "rgba(39, 255, 255, 1)";

   audio.play();
});

changeBulb_color.addEventListener("click", function() {
    let colorArr = []
    for(let i = 0; i<3; i++){
        const random = Math.floor(Math.random()* 255)
        colorArr.push(random);
    }

    bulb.style.background = `RGB(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`

    retangle.style.background = `RGB(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`

    bulb.style.boxShadow = `10px 10px 130px RGB(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`
    // const randomColor = Math.floor(Math.random()* 2344948).toString(16)
    // bulb.style.background = "#" + randomColor;
    // retangle.style.background = "#" + randomColor;
    // bulb.style.boxShadow = "rgba(99, 255, 255, 1)" 

});

bulbOff.addEventListener("click", ()=>{
    bulb.style.background = "white"
    bulb.style.boxShadow = "none"
    retangle.style.background = "white";

    setTimeout(() => {
        alert("Stupid NEPA has shut down the electricity power")
    }, 1000);
})