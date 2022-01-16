

let t=10;

let wrap=document.createElement('div')
let heading=document.createElement('h1');
let text=document.createElement('h2');

heading.innerHTML="Callback Hell Countdown"

heading.setAttribute('class','align_center')
text.setAttribute('class','align_center')

document.body.appendChild(wrap)
wrap.appendChild(heading)
wrap.appendChild(text)


let NextCount=function(callback){
    setTimeout(()=>{
        
        text.innerHTML=`${t}`;
        callback();
        t--;
        
    },1000);
}

NextCount(()=>{
    NextCount(()=>{
        NextCount(()=>{
            NextCount(()=>{
                NextCount(()=>{
                    NextCount(()=>{
                        NextCount(()=>{
                            NextCount(()=>{
                                NextCount(()=>{
                                    NextCount(()=>{
                                        setTimeout(()=>{
                                            text.innerHTML="Happy Independence Day"
                                        },1000);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});



