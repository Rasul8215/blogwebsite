var submit=document.getElementById("submit")
submit.onclick=()=>{
let inptitle=document.getElementById("title").value;
let inpintroduction=document.getElementById("introduction").value;
let inpdescription=document.getElementById("description").value;
let inpimage=document.getElementById("image").value;
var postinput={
    title:inptitle,
    introduction:inpintroduction,
    description:inpdescription,
    image:inpimage,
}
    var posts=JSON.parse(localStorage.getItem("postinput"));
    if (posts==null){
         posts=[]
    }
    posts.push(postinput)
    localStorage.setItem("postinput",JSON.stringify(posts))
    location.href="/"
}