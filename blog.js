let posts=JSON.parse(localStorage.getItem("postinput"))
let index=localStorage.getItem("postnumber")
let post=posts[Number(index)]
let blogpost=document.getElementById("blogpost")
blogpost.innerHTML=`<h1 class="text-center mt-3">${post.title}</h1>
<p class="mt-3 text-justify">${post.introduction}</p>
<img src="${post.image}" class="mt-3 img-fluid img-thumbnail rounded" alt="no preview">
<p class="mt-3 text-justify">${post.description}</p>`