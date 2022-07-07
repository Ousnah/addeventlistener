window.addEventListener("DOMContentLoaded", () => {
    
    let body = document.querySelector(".body")
    let header1 = document.querySelector(".header1")
    let header2 = document.querySelector(".header2")
    let header3 = document.querySelector(".header3")
    let header4 = document.querySelector(".header4")
    let header5 = document.querySelector(".header5")
    let buttonr = document.querySelector(".buttonr")
    let buttonb = document.querySelector(".buttonb")
    let cp1 = document.querySelector(".cp1")
    let cp2 = document.querySelector(".cp2")
    let dbc = document.querySelector(".dbc") 
    let hide1 = document.querySelector(".hide1")
    let hide2 = document.querySelector(".hide2")  
    let key = document.querySelector(".key")
    let cc = document.querySelector(".cc")
    let video = document.querySelector(".video")
    let text1 = document.querySelector(".text1")
    let text2 = document.querySelector(".text2")
    let text3 = document.querySelector(".text3")

    buttonr.addEventListener("click",function(){
        cc.style.color = "red"
        setInterval(() => {
        cc.style.color = "black"
    }, 2000);
        
    })
    buttonb.addEventListener("click",function(){
        cc.style.color = "blue"
        setTimeout(() => {
            cc.style.color = "black"
        }, 2000);
    })
    cc.addEventListener("dblclick",function(){
        header1.style.display = "flex"
        header2.style.display = "flex"
        header3.style.display = "flex"
        header4.style.display = "flex"
        header5.style.display = "flex"
        dbc.style.display = "flex"
        iziToast.show({
        message: "HEY"
        }); 
    })
    dbc.addEventListener("dblclick",function(){
        header1.style.color = "purple"
        Swal.fire('Hello')
    })
    header1.addEventListener("mousemove",function(){
        header1.style.color = "black"
    })
    header2.addEventListener("mousemove",function(){
        header2.style.color = "yellow"   
    })
    cp1.addEventListener("copy",function(){
        header3.style.fontSize = "50px"
    })
    cp2.addEventListener("copy",function(){
        header4.style.fontSize = "100px"    
    }) 
    video.addEventListener("play",function(){
            hide1.style.display = "none"
    })
    video.addEventListener("play",function(){
            hide2.style.display = "none"
    })
    video.addEventListener("pause",function(){
        hide1.style.display = "flex"
    })
    video.addEventListener("pause",function(){
        hide2.style.display = "flex"
    })
    body.addEventListener("keydown",function(){
        key.style.display = "none"
    })
    body.addEventListener("keydown",function(){
        key.style.display = "flex"
    })
    header5.addEventListener("mouseover",function(){
        header5.style.color = "green"
    })
    key.addEventListener("mouseover",function(){
        video.style.display = "none"    
    }) 
    key.addEventListener("mouseout",function(){
        video.style.display = "flex"    
    })  
    text1.addEventListener("mouseout",function(){
        text1.style.color = "pink"
    })   
    text2.addEventListener("mouseenter",function(){
        text2.style.fontSize = "200px"    
    })
    text3.addEventListener("mouseenter",function(){
        text3.style.color = "orange"    
    })
  })