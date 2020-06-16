let hero=document.querySelector('.hero')
let text=document.querySelector('.text')

hero.addEventListener('mousemove',function(event){
    const {offsetWidth:width,offsetHeight:height}=hero
    let {offsetX : x , offsetY : y}=event
    
    x+=event.target.offsetLeft
    y+=event.target.offsetTop  
    let xwalk=Math.round((x/height*300)- 300)
    let ywalk=Math.round((y/width*300)-75)
    console.log(xwalk,ywalk)
    text.style.textShadow=`
    ${xwalk}px ${ywalk*-1}px 0 rgba(238 ,82,83,.7),
    ${xwalk*-1}px ${ywalk}px 0 rgba(238 ,82,83,.7),
    ${ywalk}px ${ywalk*-1}px 0 rgba(238 ,82,83,.7),
    ${ywalk*-1}px ${ywalk}px 0 rgba(254 ,202,87,.7)`

})