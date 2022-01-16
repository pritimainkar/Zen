function PromtUser(n, callback){

    let wrap= document.createElement('div');
    let par=document.createElement('p');
    let input_val=document.createElement('input');
    let confirm=document.createElement('button');
    let cancel=document.createElement('button');

    let cancel_text=document.createElement('p')
    cancel_text.innerHTML="You pressed Cancel"
    
    par.innerHTML=n;
    confirm.innerHTML="Confirm"
    cancel.innerHTML="Cancel"

    wrap.appendChild(par);
    wrap.appendChild(input_val);
    wrap.appendChild(confirm);
    wrap.appendChild(cancel);

    document.body.append(wrap);

    confirm.addEventListener("click", () => {
        callback(input_val.value);
        document.body.removeChild(wrap);
    })

    cancel.addEventListener("click", ()=>{
        document.body.replaceChild(cancel_text,wrap)
    })

}
let a, b, c;
PromtUser("first", (i)=>{
    a=Number(i);
    PromtUser("second", (i)=>{
        b=Number(i);
        PromtUser("third", (i)=>{
            c=Number(i);
            document.body.append(`sum = ${a+b+c}`);

        })
    })
})

