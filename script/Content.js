import List from './List.js';
import ListTask from './ListTask.js';

const workSpace = document.querySelector('.section__workspace');
export default class Content{
    _length;
    _TaskBox = []
    constructor(name){

/* 

            ListBlock
                addBox
                addBtn
                ListBox
                taskName

*/

        /* CREATE */
        this.title = document.createElement("h1")
        this.title.classList.add("content-title")
        this.title.textContent = name
        this.ListBlock = document.createElement("div")
        this.ListBlock.classList.add("list-block")
        
        this.addBox = document.createElement("div")
        this.addBox.classList.add("add-box")
        this.addIcon = document.createElement("img")
        this.addIcon.src = "../icons/add.png"
        this.addIcon.classList.add("add-icon")
        this.addBtn = document.createElement("input")
        this.addBtn.classList.add("add-btn")
        this.addBtn.setAttribute("type", "text")
        this.addBtn.setAttribute("placeholder", "New Task")
        
        this.ListBox = document.createElement("div")
        this.ListBox.classList.add("list-box")
        
        this.ListBlock.append(this.title, this.addBox, this.ListBox)
        this.addBox.append(this.addIcon, this.addBtn)
    

        this.addBtn.addEventListener("keydown", ()=>{
            if(event.key == "Enter"){
                this.add(this.addBtn.value)
                this.addBtn.value = ""
                
            }
            
        })
        
        this.addIcon.addEventListener("click", ()=>{
            this.add(this.addBtn.value)
            this.addBtn.value = ""
        })
        console.log(this)

    }
    
    show(){
        workSpace.innerHTML = ""
        workSpace.append(this.ListBlock)
    }


    add(name){ 
    this.NewTask = new ListTask(name, this.ListBox)
    this._TaskBox.push(name)
    console.log(this._TaskBox.length)
    }

    /* add(name){ 
        let NewTask = new ListTask(name, this.ListBox)
        console.log(this)
        console.log(NewTask)
    } */
    

}



