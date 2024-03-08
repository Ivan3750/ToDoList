import Content from './Content.js';
import ListTask from './ListTask.js';

let AllList = []
const addList = document.querySelector('.menu__lists-add');
const BlockAddList = document.querySelector('.block-add-list');
const inputName = document.querySelector('.input-name');
const boxColor = document.querySelectorAll('.box-color');
const colorIndicator = document.querySelector('.color-indicator');
const submitList = document.querySelector('.submit-list');


let idList = 0 
export default class List{
    
    constructor(name = `New List`,color = "red", num = 0, selected = false){
        this.id = idList 
        idList++
        if(name == ""){
            this.name = "New List"
        }else{
            this.name = name
        }
        this.color = colorIndicator.style.backgroundColor
        this.element = document.createElement("div")
        this.element.classList.add("list")

        this.listColor = document.createElement("div")
        this.listColor.classList.add("menu__lists-color")
        this.listColor.style.backgroundColor = this.color

        this.listName  = document.createElement("h2");
        this.listName.textContent = this.name
        this.listName.classList.add("menu__lists-name")

        this.listNum = document.createElement("p")
        this.listNum.classList.add("menu__lists-num")
        this.listNum.textContent = num
        this.element.append(this.listColor,this.listName,this.listNum)
        document.querySelector(".menu__lists").append(this.element)
        this.content = new Content(this.name)
        console.log(this.content)
        this.element.addEventListener("click", ()=>{
            this.content.show()
            console.log(this)
            
            
        })
    }
}

addList.addEventListener("click", ()=>{
    
    BlockAddList.classList.add("show")
    
})

submitList.addEventListener("click",()=>{
    let newList =  new List(inputName.value, colorIndicator.style.backgroundColor)
    BlockAddList.classList.remove("show")



})
boxColor.forEach((element)=>{
    element.addEventListener("click",()=>{
        colorIndicator.style.backgroundColor = window.getComputedStyle(element).backgroundColor 
    })
})


