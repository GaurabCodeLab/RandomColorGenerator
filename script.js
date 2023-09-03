const body = document.body;
const btn = document.getElementById("btn");
function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
const id = setInterval(function(){
    body.style.backgroundColor = randomColorGenerator();
}, 1000)
btn.addEventListener("click", ()=>{
    clearInterval(id);
    btn.textContent = " Color Changing Stopped !!!";
})










