const bubble1 = document.querySelector('.bubble1')
const bubble2 = document.querySelector('.bubble2')
const bubble3 = document.querySelector('.bubble3')

borderRadius = ["30% 90% 120% 15% / 51% 34% 66% 49% ","53% 47% 79% 21% / 30% 30% 70% 70%","65% 35% 27% 73% / 71% 30% 70% 29%  ","90% 60% 14% 46% / 51% 34% 66% 49%","35% 129% 10% 99% / 79% 23% 77% 21%"," 0% 100% 0% 100% / 51% 34% 66% 49%","21% 79% 45% 55% / 79% 23% 77% 21% ","80% 45% 65% 15% / 79% 23% 77% 21% ","59% 69% 89% 19% / 79% 23% 77% 21% "]

bubble1.addEventListener('click', ()=>{
    bubble1.style.borderRadius = borderRadius[getRandomRadius()]
    var div1 = document.createElement('div')
    div1.className= "bubble4"
    document.body.append(div1)  
    
    setTimeout( ()=>{
        document.querySelector('.bubble4').remove()
    },7000)
    function getRandomRadius(){
        return Math.floor(Math.random() * borderRadius.length)
    }
})
bubble2.addEventListener('click', ()=>{
    bubble2.style.borderRadius = borderRadius[getRandomRadius()]
    var div2 = document.createElement('div')
    div2.className= "bubble5"
    document.body.append(div2)

    setTimeout( ()=>{
        document.querySelector('.bubble5').remove()
    },6000)
    function getRandomRadius(){
        return Math.floor(Math.random() * borderRadius.length)
    }
})
bubble3.addEventListener('click', ()=>{
    bubble3.style.borderRadius = borderRadius[getRandomRadius()]
    var div3 = document.createElement('div')
    div3.className= "bubble6"
    document.body.append(div3)
   
    setTimeout( ()=>{
        document.querySelector('.bubble6').remove()
    },9000)
    function getRandomRadius(){
        return Math.floor(Math.random() * borderRadius.length)
    }
})

