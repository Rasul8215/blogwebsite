let createpost=(title,date,introduction,description,image,idx)=>{
    return `
    <h1 style="color:blue",font-weight:bold">${title}</h1>
    <p>${date.toString()}</p>
    <i>${introduction}}</i>
    <button index="${idx}" id="readmore" class="btn btn-primary">Read More</button>`
}
let posts=JSON.parse(localStorage.getItem("postinput"))
posts.forEach((post,i) => {
    let posthtml=createpost(post.title,new Date(),post.introduction,post.description,post.image,i)
    let postdisplay=document.getElementById("blogpost")
    let postdiv=document.createElement("div")
    postdiv.className="col-md-6"
    postdiv.innerHTML=posthtml
    postdisplay.appendChild(postdiv)

});
let readmorelinks=document.querySelectorAll("#readmore")
readmorelinks.forEach((link)=>{
    link.onclick=()=>{
        let index=link.getAttribute("index")
        localStorage.setItem("postnumber",index)
        location.href="./blog.html"
    }
})