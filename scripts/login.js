// import { navbar,navbar2,footer } from "../components/main.js";
// let nav1=document.getElementById("navbar");
// let nav2=document.getElementById("navbar2");
// let foot=document.getElementById("footer");
// nav1.innerHTML=navbar();
// nav2.innerHTML=navbar2();
// foot.innerHTML=footer();
let arr=JSON.parse(localStorage.getItem("userLogin"))||[];
function userData(n,e,p){
    this.number=n;
    this.email=e;
    this.password=p;
}
function loginForm(){
   event.preventDefault();
    let form=document.getElementById("log_in");
    let u_number=form.number.value;
    let u_email=form.email.value;
    let u_pass=form.password.value;
    let user=new userData(u_number,u_email,u_pass);
    arr.push(user);
    localStorage.setItem("userLogin",JSON.stringify(arr));
    document.getElementById("submit").addEventListener("click",function(){
        loginUser();
    })
    function loginUser()
    {
        window.location.href="india.html";
    }

}
// document.getElementById("user").addEventListener("click",function(){
//     loginUser();
// })
// function loginUser(){
//     window.location.href="login.html"
// }
// document.getElementById("entertain").addEventListener("click",function(){
//     entertainNews();
// })
// function entertainNews(){
//     window.location.href="entertain.html"
// }
// document.getElementById("business").addEventListener("click",function(){
//     businessNews();
// })
// function businessNews(){
//     window.location.href="business.html"
// }
// document.getElementById("business_icon").addEventListener("click",function(){
//     businessNews_icon();
// })
// function businessNews_icon(){
//     window.location.href="business.html"
// }
// document.getElementById("home").addEventListener("click",function(){
//     homeNews();
// })
// function homeNews(){
//     window.location.href="index.html";
// }
// document.getElementById("tech").addEventListener("click",function(){
//     techNews();
// })
// function techNews(){
//     window.location.href="tech.html";
// }
// document.getElementById("health").addEventListener("click",function(){
//     healthNews();
// })
// function healthNews(){
//     window.location.href="health.html";
// }
// document.getElementById("sports").addEventListener("click",function(){
//     sportsNews();
// })
// function sportsNews(){
//     window.location.href="sports.html";
// }
// document.getElementById("science").addEventListener("click",function(){
//     scienceNews();
// })
// function scienceNews(){
//     window.location.href="science.html";
// }
// document.getElementById("world").addEventListener("click",function(){
//     worldNews();
// })
// function worldNews(){
//     window.location.href="world.html"
// }
// document.getElementById("news").addEventListener("click",function(){
//     newNews();
// })
// function newNews(){
//     window.location.href="index.html"
// }
// document.getElementById("india").addEventListener("click",function(){
//     indiaNews()
// })
// function indiaNews(){
//     window.location.href="india.html"
// }
