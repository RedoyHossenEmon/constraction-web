let bars = document.querySelector("#bars");
bars.addEventListener("click", function() {
    document.querySelector(".manuteam ").classList.toggle("manuteam2")
});
let submenu = document.querySelector("#manuPage");
submenu.addEventListener("click", function() {
    document.querySelector(".subManu").classList.toggle("subManu2")
});
let submenupadding = document.querySelector(".subManu li");
submenupadding.addEventListener("click", function() {
    document.querySelector(".subManu li").classList.toggle("subManuPadding")
});

let searchbtn = document.querySelector('#searchbtn');
searchbtn.addEventListener('click',function(){
    document.querySelector('.srcDiv').classList.toggle('srcDiv2')
})
document.querySelector('.srcDiv i').addEventListener('click',function(){
    document.querySelector('.srcDiv').classList.remove('srcDiv2')
    alert('This is not a real Website');
})

let slidernav1 = document.querySelector('.secNav');
slidernav1.addEventListener('click',function(){
    document.querySelector('.homeslider').classList.add('homeslider2')
    document.querySelector('.firstNav').classList.remove('firstNav2')
    document.querySelector('.secNav').classList.add('secNav2')

}) 

let slidernav2 = document.querySelector('.firstNav');
slidernav2.addEventListener('click',function(){
    document.querySelector('.homeslider').classList.remove('homeslider2')
    document.querySelector('.secNav').classList.remove('secNav2')
    document.querySelector('.firstNav').classList.add('firstNav2')

})
document.addEventListener('scroll', function(){
if(document.body.scrollTop > 1550){

document.querySelectorAll('.count').forEach( count =>{   function myCount(){
    let counter = ++count.innerText;
    if(counter < 1200){ setTimeout(myCount,1)  }else{count.innerText = 1200}
}
myCount();} )
}})