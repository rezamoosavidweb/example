let speechtext=document.querySelector('.typingBox')
let button=document.querySelector('#submit')
let span=document.querySelector('div span')
let p=document.querySelector('div p')
p.setAttribute('contenteditable','true')


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.lang='fa-IR'
    recognition.interimResults=true
    recognition.start()




recognition.addEventListener('result',function(e){
    speechtext.appendChild(p)
    let transport=Array.from(e.results)
    .map(function(elements){
        return elements[0]
    })
    .map(function(elements){
        return elements.transcript
    })
    .join(' ') 

    if(transport.includes('علامت سوال')){
        transport=transport.replace('علامت سوال','?')
    }
    if(transport.includes('ویرگول')){
        transport=transport.replace('ویرگول','،')

    }
    if(transport.includes('دو نقطه')){
        transport=transport.replace('دو نقطه',':')
    }
    if(transport.includes('قرمز شود')){
        transport=' '
        p.style=`color:red;`
    }
    if(transport.includes('پرانتز باز')){
        transport=transport.replace('پرانتز باز','(')
    }
    if(transport.includes('پرانتز بسته')){
        transport=transport.replace('پرانتز بسته',')')
    }

    if(transport.includes('خط بعدی') & e.results[0].isFinal){
        transport=' '
        p=document.createElement('p')
        p.setAttribute('contenteditable','true')
        speechtext.appendChild(p)
    }
    if(transport.includes('صفحه پاک شود')){
        transport=''
        speechtext.innerHTML=''
        p.innerHTML=''
    }
    if(transport.includes('این خط پاک شود')){
        transport=''
        p.innerHTML=''
    }

    span.textContent=transport + ' '
    p.appendChild(span)
    if(e.results[0].isFinal){
        span=document.createElement('span')
        p.appendChild(span)
    }
    

})
let idrecog=recognition.addEventListener('end',recognition.start)
