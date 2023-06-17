const contaner = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const createEl = document.createElement("div") 

    createEl.classList.add("color-container")
    contaner.appendChild(createEl)
}
const divEl= document.querySelectorAll(".color-container")

generateColor()
function generateColor(){
    divEl.forEach((divEl)=>{
        const newColorCode= colorCode();
        divEl.style.backgroundColor = "#" + newColorCode;
        divEl.innerText= newColorCode;
    })

}

function colorCode(){
    const chars = "0123456789abcdef"
    colorCodeLength = 6;
    let code =""
    for (let index = 0; index < colorCodeLength; index++) {
        
        const randumNum = Math.floor(Math.random()*chars.length)
        
        code += chars.substring(randumNum,randumNum+1)
        
        
    }
    return code;
}