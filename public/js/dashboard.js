const newPost = document.querySelector("#newPost")

function changeDisplay(event) {
    document.querySelector('#postMaker').style = ""
    newPost.style = "display:none;"
}



newPost.addEventListener("click", changeDisplay)

const editSubmit=async (event)=>{
    event.preventDefault()
    let content = event.target.children[2].value
    let title= event.target.children[0].value
    let id=event.target.parentElement.parentElement.children[1].value

    console.log(content +" "+title+" "+ id)
    const result = await fetch('/api/blogs/edit',{
        method: 'PUT',
        body: JSON.stringify({ id,title, content }),
        headers: { 'Content-Type': 'application/json' },
      })
      document.location.replace('/dashboard')

}


const changeEditDisplay=(event)=>{
    event.target.style = "display:none;"
    event.target.parentElement.children[0].style = ""
    event.target.parentElement.children[0].children[0].addEventListener("submit", editSubmit)

}
const deletePost= async (event)=>{
    const id = event.target.value
    const result = await fetch(`/api/blogs/${id}`,{
        method: 'DELETE',
        body: JSON.stringify({id}),
        headers: { 'Content-Type': 'application/json' },
      })
      document.location.replace('/dashboard')
}

const editButtons = document.querySelectorAll(".editPost")
editButtons.forEach((button) => {
    button.addEventListener("click", changeEditDisplay)
})
const deleteButtons=document.querySelectorAll(".deletePost")
deleteButtons.forEach((button) => {
    button.addEventListener("click", deletePost)
})