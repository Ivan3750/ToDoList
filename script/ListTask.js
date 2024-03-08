import Content from './Content.js';
import List from './List.js';




const listTaskInstances = [];



export default class ListTask{
    constructor(name, container){
        this.taskBox = document.createElement("div")
        this.taskBox.setAttribute("type",  "checkbox")
        this.taskName = document.createElement("p")
        this.taskName.classList.add("task-name")
        this.taskBox.append(this.taskName)
        this.taskName.textContent =  name
        container.append(this.taskBox)
        listTaskInstances.push(this);
        console.log(this)
    }
    /* getLength(){
        return listTaskInstances.length
    } */
}