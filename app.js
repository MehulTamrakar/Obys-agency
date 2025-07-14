function locomotiveAnime(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadinganimation(){

let tl=gsap.timeline();

tl.from(".line h1",{
y:130,
stagger:0.25,
duration:0.6,
delay:0.5,
});

tl.from("#lineNum ,.line h2",{
    opacity:0,
    onStart: function(){
let h5=document.querySelector("#lineNum h5")
let count=0
setInterval(function(){
if(count<100){
    h5.innerHTML=count++
}
else{
    h5.innerHTML=count
}
},30)
    }
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3
})
tl.from("#page1",{
    delay:0.1,
    y:1600,
    opacity:0,
    ease: Power4,
    duration:0.5,
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0,
})
tl.from("#maintext1 h1 , #maintext2 h1, #maintext3 h2, #maintext4 h1",{
    y:120,
    stagger:0.2,
})
}
function cursoranimation(){
Shery.mouseFollower({
    skew:true,
    ease: "cubic-bezire(0.23,1,0.320,1)",
    duration : 1,
})
Shery.makeMagnet("#nav-part2 h4");
}
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7999855324074074},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.67,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.48,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.37,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
    })
}
function videomove(){
    let videoContainer =document.querySelector("#video-box")
let video=document.querySelector("#video-box video")
videoContainer.addEventListener("mouseenter",function(){
    videoContainer.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
            opacity:0,
        })
        gsap.to("#video-curser",{
            left:dets.x - 150,
            y:dets.y - 300,
        })
    })
})
videoContainer.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
      opacity:1,
    })
    gsap.to("#video-curser",{
  left:"80%",
  top:"5%",
    }
    )
})

let flag=0
videoContainer.addEventListener("click",function(){
    if(flag==0){ video.play()
    video.style.opacity=1
    document.querySelector("#video-curser").innerHTML=`<i class="ri-pause-fill"></i>`
    gsap.to("#video-curser",{
       scale:0.5
    })
    flag=1
}
else{
    video.pause()
    video.style.opacity=0
    document.querySelector("#video-curser").innerHTML=`<i class="ri-play-fill"></i>`
    gsap.to("#video-curser",{
       scale:1
    })
    flag=0
}
   
})
}
function flagmove(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y,
    })
})
document.querySelector("#maintext3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1,
    })

})
document.querySelector("#maintext3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0,
    })

})
}

function footeranime(){
    const footerHeading = document.querySelector("#footer h1");

// Initialize textillate once
$('#footer h1').textillate({
    autoStart: false,
    in: { effect: 'rotateInDownRight' }
});
$('#footer h1').textillate('start'); // Optional — only if you want entrance effect once on load
$('#footer h1').textillate('stop'); 

footerHeading.addEventListener("mouseenter", () => {
   
    gsap.to(footerHeading, {
        duration: 0.2,

        onStart: function () {
            $('#footer h1').textillate('in');
             setTimeout(() => {
    $('#footer h1 span').addClass('font-poppins');
  }, 10);
        }
        
    });
});

footerHeading.addEventListener("mouseleave", () => {
    gsap.to(footerHeading, {
        
        duration: 0.3,
        onComplete: function () {
             $('#footer h1 span').addClass('font-normal');
            gsap.to(footerHeading, { opacity: 1, duration: 0.3 });
             $('#footer h1 span').addClass('font-poppins');
        }
        
    });
});

}


locomotiveAnime()
loadinganimation()
cursoranimation()
sheryAnimation()
videomove()
flagmove()
footeranime()