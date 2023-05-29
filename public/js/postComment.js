const addComment= async (event)=>{
    const content = document.querySelector('#newCommentText').value
    const post_id=document.querySelector('#postId').innerHTML;
    if(content){
        const response = await fetch('/api/comments/',{
            method: 'POST',
            body: JSON.stringify({content, post_id}),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log("successfully posted!")
          }
    }
    else{
        alert("Can't post a blank comment ya dingus!")
    }




}
const likeComment= async (event)=>{
    const numLikes=document.querySelector('numLikes').innerHTML;
    const response=await fetch('/api/users/comments/like',{
        method: 'POST',
            body: JSON.stringify({numLikes, post_id}),
            headers: { 'Content-Type': 'application/json'}
    })

}


const commentForm=document.querySelector('#newComment')
commentForm.addEventListener('submit', addComment)

const likeButton=document.querySelectorAll('.likeButton')
likeButton.forEach((likeB)=>{
    likeB.addEventListener('click',likeComment)
})
