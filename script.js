var navBar = document.getElementById("navBar");
var slide_Container = document.querySelector(".slide_Container");
var mainContainer = document.querySelector(".main_Container");
var mainContainerHeader = document.querySelector(".header");

console.log(mainContainer)

let open = false;
navBar.onclick = ()=>{
     if(open == false){
          slide_Container.style.left = "0%";
          navBar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
          mainContainer.style.padding = "10px 10px 10px 20%"
          open = true;     
     }
     else{
          slide_Container.style.left = "-100%";
          navBar.innerHTML = `<i class="fa-solid fa-bars"></i>`
          mainContainer.style.padding = "10px 10px 10px 10px";
          open = false;
     }
}

let header_Items = ["All","music","video","tamil cinema","AR raghuman","vijay","ajith"]
for(let i=0;i<header_Items.length;i++){
     mainContainerHeader.innerHTML += `
          <a href="#">${header_Items[i]}</a>
     `
}