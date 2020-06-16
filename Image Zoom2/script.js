let imagebox=document.querySelector('.imgebox')
let imh=document.querySelector('.imge')
let zoomLenz,zoomresult
console.log(pageYOffset)
imagebox.addEventListener('mouseenter',function(){
    zoomLenz=document.createElement('div')
    zoomLenz.classList.add('zoom-lenz')
    imagebox.appendChild(zoomLenz)
    zoomresult=document.createElement('div')
    zoomresult.classList.add('zoomresult')
    imagebox.appendChild(zoomresult)
    zoomresult.style.background="url(./bmw-m4-cs.jpg)"
    zoomresult.style.backgroundSize="1350px 820px"


    imagebox.addEventListener('mousemove',function(e){
        let{offsetWidth : width,offsetHeight : height}=imh
        let {offsetWidth , offsetHeight}=zoomLenz
        console.log(e.offsetX)
        let x=e.clientX-(offsetWidth/2)
        let y=e.clientY-(offsetHeight/2)
        
        if(x>523){x=523}
        if(x<8){x=8}
        if(y>256){y=256}
        if(y<8){y=8}
        zoomLenz.style.left=`${x}px`
        zoomLenz.style.top=`${y}px`
        zoomresult.style.backgroundPosition=`-${x*2}px -${y*2}px`
        
    })
   
})
imagebox.addEventListener('mouseleave',function(){
    zoomLenz.remove()
    zoomresult.remove()
})

