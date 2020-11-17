const formation__timeLine= Array.from(document.querySelectorAll('.formation__timeLine'))


formation__timeLine.forEach((e,i)=>{
    const dot  = e.querySelector('.event__dot')
    const line = e.querySelector('.line')
    line.style.left = (dot.offsetLeft -  e.parentElement.offsetLeft ) + ( dot.offsetWidth +5)  +'px'


})