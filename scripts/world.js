import { navbar,navbar2,footer } from "../components/main.js";
let nav1=document.getElementById("navbar");
let nav2=document.getElementById("navbar2");
let foot=document.getElementById("footer");
foot.innerHTML=footer();
nav1.innerHTML=navbar();
nav2.innerHTML=navbar2();
const url="https://newsdata.io/api/1/news?apikey=pub_8197fcabafb32999a0cccf108a2141410681&category=world&language=en";
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    let data=res;
    console.log(data);
    append(data.results);
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
let div=document.getElementById("world_news");
function append(data){
    data.forEach(function(el){
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.src=el.image_url;
        let title=document.createElement("h4");
        title.innerText=el.title;
        let date=document.createElement("h4");
        date.innerText=el.pubDate;
        let des=document.createElement("h4");
        des.innerText=el.description;
        let lang=document.createElement("h4");
        lang.innerText=el.language;
        box.append(image,title,date,des,lang);
        div.append(box);
    })
}
document.getElementById("user").addEventListener("click",function(){
    loginUser();
})
function loginUser(){
    window.location.href="login.html"
}
document.getElementById("entertain").addEventListener("click",function(){
    entertainNews();
})
function entertainNews(){
    window.location.href="entertain.html"
}
document.getElementById("business").addEventListener("click",function(){
    businessNews();
})
function businessNews(){
    window.location.href="business.html"
}
document.getElementById("business_icon").addEventListener("click",function(){
    businessNews_icon();
})
function businessNews_icon(){
    window.location.href="business.html"
}
document.getElementById("home").addEventListener("click",function(){
    homeNews();
})
function homeNews(){
    window.location.href="index.html";
}
document.getElementById("tech").addEventListener("click",function(){
    techNews();
})
function techNews(){
    window.location.href="tech.html";
}
document.getElementById("health").addEventListener("click",function(){
    healthNews();
})
function healthNews(){
    window.location.href="health.html";
}
document.getElementById("sports").addEventListener("click",function(){
    sportsNews();
})
function sportsNews(){
    window.location.href="sports.html";
}
document.getElementById("science").addEventListener("click",function(){
    scienceNews();
})
function scienceNews(){
    window.location.href="science.html";
}
document.getElementById("world").addEventListener("click",function(){
    worldNews();
})
function worldNews(){
    window.location.href="world.html"
}
document.getElementById("news").addEventListener("click",function(){
    newNews();
})
function newNews(){
    window.location.href="index.html"
}
document.getElementById("india").addEventListener("click",function(){
    indiaNews()
})
function indiaNews(){
    window.location.href="india.html"
}

