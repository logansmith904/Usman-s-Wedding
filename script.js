/* =====================================
   USMAN ❤️ FAJAR
   Wedding Invitation
===================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },2500);

});


/* ==============================
      COUNTDOWN
============================== */

const weddingDate = new Date("July 31, 2026 00:00:00").getTime();

function updateTimer(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (distance%(1000*60))
        /1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateTimer,1000);

updateTimer();


/* ==============================
     FLOWER PETALS
============================== */

const flowers=[
"🌸",
"🌺",
"🌼",
"🌹",
"💮",
"🌷"
];

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML=
    flowers[
        Math.floor(
            Math.random()*flowers.length
        )
    ];

    petal.style.left=
    Math.random()*100+"vw";

    petal.style.animationDuration=
    (6+Math.random()*6)+"s";

    petal.style.fontSize=
    (18+Math.random()*16)+"px";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,350);


/* ==============================
     CARD ANIMATION
============================== */

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";
card.style.transition="1s";

observer.observe(card);

});


/* ==============================
     GOLDEN SPARKLES
============================== */

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize="14px";

star.style.opacity=".8";

star.style.pointerEvents="none";

star.style.transition="2s";

document.body.appendChild(star);

setTimeout(()=>{

star.style.opacity="0";

star.style.transform="scale(2)";

},100);

setTimeout(()=>{

star.remove();

},2200);

}

setInterval(sparkle,1200);
