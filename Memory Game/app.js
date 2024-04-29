const buttons=document.querySelectorAll('.button')
let previous;
let prevbtn;
let count=0;
let numbercount=0;
function updatenumber(btn)
{
    btn.innerText=btn.id;
    btn.disabled=true;
    count++;
    if(previous==null)
    {
        previous=btn.id;
        prevbtn=btn;
        
    }
    else
    {
        if(previous==btn.id)
        {
              previous=null;
              prevbtn=null;
              count=0;
              numbercount=numbercount+2;
        }
        else
        {
            
          setTimeout(()=>{
            btn.innerText="";
            prevbtn.innerText="";
           
              setTimeout(()=>{
                prevbtn.disabled=false;
                btn.disabled=false;
                previous=null;
                prevbtn=null;
                count=0;
            },1000)
          },1000)
       
        }
    }
   
  }
// function undisplay()
// {
//     setTimeout(()=>{
//         btn.innerText="";
//         prevbtn.innerText="";
//      },1000)
//      undisplay(btn , ()=>{
        
//     })
// }

buttons.forEach((button)=>{
  
     button.addEventListener('click',()=>{
      if(count<2)
  {
      updatenumber(button);
  }
  
  })
  
   
})


