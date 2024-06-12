// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
var main= document.querySelector("#main")
var ne= document.querySelector("#new")
main.addEventListener("mousemove",function(mohit){
    ne.style.left=mohit.x+ 0+"px"
    ne.style.top=mohit.y+ 0+"px"
})
var tl = gsap.timeline({
   
    scrollTrigger:{
        trigger:"#page1-1",
        scroller:"#page",
        // markers:true,
        start:"top 0",
        end: "top -70%",
        scrub:3
    }
})
tl.to("#page1 #page1-1 img",{
    scale:1,
    duration:0.5,
    y:0,

    
},"mohit")
tl.to("#page1 #page1-1",{
    height:"100px",
    paddingTop:"0",
    paddingRight:"85%",
},"mohit")
// gsap.to("#page5-1",{
//   // stagger:0.1,
//   top:"0px",
//   color:"#E3E3C4",
//   scrollTrigger:{
//       scroller:"body",
//       trigger:"#page5-1",
//       pin:true,
//   pinSpacing: false ,
//       markers:true,
//       start:"top 59%",
//       end:"top 0%",
//       scrub:3
//   }  
// })
// gsap.to("#page5-2",{
//   // stagger:0.1,
//   top:"0px",
//   color:"#E3E3C4",
//   scrollTrigger:{
//       scroller:"body",
//       trigger:"#page5-2",
//       pin:true,
//   pinSpacing: false ,
//       markers:true,
//       start:"top 69%",
//       end:"top 75%",
//       scrub:3
//   }  
// })
// gsap.to("#page5-3",{
//   // stagger:0.1,
//   top:"0px",
//   color:"#E3E3C4",
//   markers:true,
//   scrollTrigger:{
//       scroller:"body",
//       pin:true,
//   pinSpacing: false ,
//       trigger:"#page5-3",
  
//       start:"top 79%",
//       end:"top 49%",
//       scrub:3
//   }  
// })
// gsap.to("#page5-4",{
//   // stagger:0.1,
//   top:"0px",
//   color:"#E3E3C4",
//   scrollTrigger:{
//       scroller:"body",
//       trigger:"#page5-4",
//       pin:true,
//       pinSpacing: false ,
//       markers:true,
//       start:"top 89%",
//       end:"top 59%",
//       scrub:3
//   }  
// })
// gsap.to("#page5-2",{
//   // stagger:0.1,
//   top:"0px",
//   color:"#E3E3C4",
//   scrollTrigger:{
//       scroller:"body",
//       trigger:"#page5-2",
//       pin:true,
//   pinSpacing: false ,
//       markers:true,
//       start:"top 79%",
//       end:"top 30%",
//       scrub:3
//   }  
// })
gsap.to("#page5-1",{
  // stagger:0.1,
 
  // color:"#E3E3C4",
  scrollTrigger:{
      scroller:"#page",
      trigger:"#page5-1",
      pin:true,
  pinSpacing: false ,
      // markers:true,
      start:"top 1%",
      end:"top 0%",
      scrub:3
  }  
})
gsap.from("#page5-2",{
  // stagger:0.1,
  // top:"0px",
  
  // color:"#E3E3C4",
  scrollTrigger:{
      scroller:"#page",
      trigger:"#page5-2",
      pin:true,
  // pinSpacing: false ,
      // markers:true,
      start:"top 0%",
      end:"top 0%",
      scrub:3
  }  
})
gsap.from("#page5-3",{
  // stagger:0.1,
  // top:"0px",
  // color:"#E3E3C4",
  scrollTrigger:{
      scroller:"#page",
      trigger:"#page5-3",
      pin:true,
  pinSpacing: false ,
      // markers:true,
      start:"top 21%",
      end:"top 0%",
      scrub:3
  }  
})
gsap.from("#page5-4",{
  // stagger:0.1,

  // color:"#E3E3C4",
  scrollTrigger:{
      scroller:"#page",
      trigger:"#page5-4",
      pin:true,
  pinSpacing: false ,
      // markers:true,
      // top:"-100px",
      start:"top 42%",
      end:"top 0%",
      scrub:3
  }  
})
gsap.from("#page5-5",{
  // stagger:0.1,

  // color:"#E3E3C4",
  scrollTrigger:{
      scroller:"#page",
      trigger:"#page5-5",
      pin:true,
  pinSpacing: false ,
      // markers:true,
      // top:"-100px",
      start:"top 63%",
      end:"top 0%",
      scrub:3
  }  
})
gsap.from("#page5-6",{
  // stagger:0.1,

  // color:"#E3E3C4",
  scrollTrigger:{
      scroller:"#page",
      trigger:"#page5-6",
      pin:true,
  pinSpacing: false ,
      // markers:true,
      // top:"-100px",
      start:"top 82%",
      end:"top 0%",
      scrub:3
  }  
})
gsap.to("#page9",{
    transform:"translateY(-400px)",
    duration2,
    scrollTrigger:{
    trigger:"#page9",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"-10%",
    scrub:1,
    pin:true
}

})
gsap.from("#part9-2",{
    // stagger:0.1,
  
    // color:"#E3E3C4",
    scrollTrigger:{
        scroller:"body",
        trigger:"#part9-2",
        pin:true,
    pinSpacing: false ,
        markers:true,
        // top:"-100px",
        start:"top 82%",
        end:"top 0%",
        scrub:3
    }  
  })
   body.onload="mohit()"
  var varun= document.getElementById('loading');
  function mohit(){
    varun.style.display ='none'
    varun.style.animationDuration='2s'
}
