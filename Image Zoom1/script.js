let image=document.querySelector('.image')
image.addEventListener('mouseenter',function(){
    image.style.backgroundSize="250%"
image.addEventListener('mousemove',function(e){
    let {offsetWidth,offsetHeight}=image
    let x=Math.round((e.offsetX/offsetWidth)*100)
    let y=Math.round((e.offsetY/offsetHeight)*100)
    
   this.style.backgroundPosition= `${x}% ${y}%`
    })
    image.addEventListener('mouseleave',function(){
        this.style.backgroundSize="100%"
    })
})