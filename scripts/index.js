import { navbar,navbar2,footer } from "../components/main.js";
let nav1=document.getElementById("navbar");
let nav2=document.getElementById("navbar2");
let foot =document.getElementById("footer");
nav1.innerHTML=navbar();
nav2.innerHTML=navbar2();
foot.innerHTML=footer();
const url="https://saurav.tech/NewsAPI/everything/bbc-news.json";
fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    let data=res.articles;
     append(data);
    console.log(data);
    
    
})
.catch(function(err){
    console.log( err);
})
let div=document.getElementById("topnews");
function append(data){
    data.forEach(function(el){
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.src=el.urlToImage;
        let title=document.createElement("h4");
        title.innerText=el.title;
        let date=document.createElement("h4");
        date.innerText=el.publishedAt;
        let des=document.createElement("h4");
        des.innerText=el.description;
        let lang=document.createElement("h4");
        lang.innerText=el.content;
        box.append(image,title,date,des,lang);
        div.append(box);
    })
}
//linking all the navbar headers to pages
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
//search icon 
document.getElementById('searchIcon').onclick = function() {
    document.getElementById('search').style.display = 'block';
    document.getElementById('clear').style.display = 'block';
    document.getElementById('search').focus();
    document.getElementById('searchIcon').style.display = 'none';
  }
  document.getElementById('clear').onclick = function() {
    document.getElementById('searchIcon').style.display = 'block';
    document.getElementById('search').style.display = 'none';
    document.getElementById('clear').style.display = 'none';
  }
  //headline fetch
  const url1="https://newsdata.io/api/1/news?apikey=pub_8197fcabafb32999a0cccf108a2141410681&language=hi";
fetch(url1).then(function(res){
    return res.json();
})
.then(function(res){
    let data1=res.results;
      append_data(data1);
    console.log(data1);
    
    
})
.catch(function(err){
    console.log( err);
})
function append_data(data){
    data.forEach(function(el){
let box1=document.createElement("div");
        let i=document.createElement("img");
        i.src=el.image_url;
        let c=document.createElement("h3");
        c.innerText=el.content;
        let d=document.createElement("h3");
        d.innerText=el.description;
        let l=document.createElement("h3");
        l.innerText=el.language;
        // let p1=document.createElement("h3");
        // p1.innerText=pubDate;
        let t=document.createElement("h3");
        t.innerText=el.title;
        box1.append(i,t,c,d,l);
        document.getElementById("headline").append(box1);
    })

}
