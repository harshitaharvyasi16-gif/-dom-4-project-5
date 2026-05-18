var arr = [
    {dp:"https://images.unsplash.com/photo-1778599727150-58167fc88bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" ,story: "https://images.unsplash.com/photo-1651282961674-83c445a651ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" },
    {dp:"https://images.unsplash.com/photo-1778546978871-c7705e7386d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" ,story:"https://plus.unsplash.com/premium_photo-1715876234754-88a58a017ce3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://plus.unsplash.com/premium_photo-1664372145543-d60ba2756a7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" ,story:"https://plus.unsplash.com/premium_photo-1707816501449-3c51bb9f93e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1769117438397-ba08341b7d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" ,story: "https://plus.unsplash.com/premium_photo-1680132275157-187181f726cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
]
var clutter =""
arr.forEach(function( elem,idx){
    clutter +=`<div class="story">

               <img id="${idx}" src="${elem.dp} alt=""> 
            </div>`
             
})
stories.innerHTML=clutter;
stories.addEventListener("click" , function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
setTimeout(function(){
document.querySelector("#full-screen").style.display = "none"
} ,3000)
});


