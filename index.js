console.log("I'm connected don't worry")


const createNewItem=(event)=>{
    event.preventDefault()
    let lst=document.getElementById('toDoHolder')
    let count=lst.getElementsByTagName('li').length;
    let input=document.getElementById('newItem')
    let li=document.createElement('li')
    li.innerHTML=input.value
    count++
    li.setAttribute('id', count)
    li.onclick= function completeItem(){
        document.getElementById(li.id).style.textDecoration='line-through'
    }
    lst.appendChild(li)
    input.value=""
}