function makeMatrix(){
  
    var r=document.getElementById('row').value;
    var c=document.getElementById('col').value;
    
    for(let i=0;i<r;i++)
    {
        let rowDiv=document.createElement('div');
        rowDiv.className="rw";
        for(let j=0;j<c;j++)
        {
            let colDiv=document.createElement('div');
            colDiv.className="cl";
            rowDiv.appendChild(colDiv);
        }
        document.body.appendChild(rowDiv);
    }
    
}

/*document.getElementsByClassName("Button").onclick=function(){
    var x=document.getElementsByClassName("Button");
    if(x.style.display==="none"){
        x.style.display="block";
    }
        else{
            x.style.display="none";
        }
    
}*/

function changeColor(){
    
    let r=document.getElementById('row2').value;
   console.log(r);
    let c=document.getElementById('col2').value;
    var color=document.getElementById('color').value;
    var access=document.getElementsByClassName("rw")[r-1].children.item(c-1);
    access.style.backgroundColor=color;
}

document.getElementById("insertButton").addEventListener('click',function(){
   // document.write("abdc");
    /*div2=document.createElement('div');
    div2.className="insertDivChild";
    div2.innerHTML="THIS IS DIV 2";*/
    
    var firstDiv=document.getElementById("div1");
    console.log(firstDiv);
    firstDiv.insertAdjacentHTML('afterend','<div class="insertDivChild">THIS IS DIV 2</div>');
    
    let button = document.getElementById("insertButton");
    button.parentNode.removeChild(button);
});

   
    