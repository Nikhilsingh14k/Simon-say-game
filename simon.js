let name=prompt("Enter your good name :")
name.toUpperCase();
let gameseq=[];
let userseq=[];

let btns=["yellow","red","blue","green"];

let gameStarted=false;
let main=document.querySelector(`.main`);

let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(gameStarted==false){
        console.log("game started");
        main.classList.remove("pink");
        gameStarted=true;
        levelup();
    }
    
    
})

function flashbtn(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
},250)
}
function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
    }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
     num=Math.floor((Math.random()*4)+0);
     let color=btns[num];
     gameseq.push(color);
     console.log(gameseq);
    let btn=document.querySelector(`.${color}`)

   flashbtn(btn); 

}

function checkanswer(length){
    let idx=length
    if(gameseq[idx]===userseq[idx]){
        if(idx==gameseq.length-1) 
        setTimeout(levelup , 1000)

    }
    else{
        let iq="";
        if(level<5){
            iq= (" IQ IS LESS THAN A DONKEY IQ ");
        } 
        else if(level<7){
            iq="HAS  A GOOD MEMORY POWER ";
        } 
        else if(level<9){
            iq=" IS A GENIUS";
        } 
        else {
            iq="IS A SUPER HUMAN";
        }
        h2.innerText=`THE GAME IS OVER PRESS ANY KEY TO START ! \n ${name}'s  SCORE IS ${level}  `;
        h3.innerText=` ${name} ${iq}   `;
        gameStarted=false;
        level=0;
        gameseq=[];
        userseq=[];
        // let main=document.querySelector(`.main`);
       
         main.classList.add("pink");
         

    }
}

function btnpress(){
    if(gameStarted==true){
    let btn=this;
    console.log(this);
    userflashbtn(btn);
    let userbtn=this.getAttribute("id");
    userseq.push(userbtn);
    console.log(userseq);
    checkanswer(userseq.length-1);
    }
}

let allbtn=document.querySelectorAll(".sbox")
for(btn of allbtn){
   
    btn.addEventListener("click",btnpress);
}