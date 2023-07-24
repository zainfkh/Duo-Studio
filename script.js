function init(){
gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).

});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init();

var crsr=document.querySelector('.cursor')
var main=document.querySelector('.main')
document.addEventListener("mousemove",function (dets) {
    crsr.style.left=dets.x+20+"px"
    crsr.style.top=dets.y+20+'px'
    
})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:'.page1 h1',
        scroller:'.main',
       // markers:true,
        start:'top 27%',
        end:'top 0',
        scrub:3
    }
})
tl.to('.page1 h1',{
    x:-80,
},"anim")
tl.to('.page1 h2',{
    x:100
},"anim")
tl.to('.page1 video',{
    width:"90%"
},'anim')


var tl2 =gsap.timeline({
    scrollTrigger:{
        trigger:'.page1 h1',
        scroller:'.main',
        //markers:true,
        start:'top -120%',
        end:'top -130%',
        scrub:3,
        toggleActions: 'play none none reverse',
    }
})
tl2.to('.main',{
    backgroundColor:"white"
})
tl2.from('.page2 h1',{
    autoAlpha:0,
    scale:1.5,
    delay:1,
    duration:10
})
tl2.from('.page2-container',{
    opacity:0,
    x:-100,
    delay:1,
    duration:10,
    stagger:0.6
})


tl2.fromTo('hr',{
    duration:10,
    opacity:0,
    x:0,
    borderBottom:'0px solid black'
},{
    borderBottom:'2px solid black',
    opacity:1,
    x:1,
    duration:10
})

var tl3 =gsap.timeline({
    scrollTrigger:{
        trigger:'.page1 h1',
        scroller:'.main',
        //markers:true,
        start:'top -350%',
        end:'top -300',
        scrub:3
    }
})
tl3.to('.main',{
    backgroundColor:'black'
})

var boxes= document.querySelectorAll('.box')
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter",function(){
var att=elem.getAttribute('data-image')
crsr.style.width="300px" 
crsr.style.height="250px"
crsr.style.borderRadius="0"
crsr.style.backgroundImage=`url(${att})`
    })

elem.addEventListener("mouseleave",function () {
    crsr.style.width="20px" 
crsr.style.height="20px"
crsr.style.borderRadius="50%"
crsr.style.backgroundImage="none"
})
})

var h4=document.querySelectorAll('#nav .work')
var purple=document.querySelector('.purple')
h4.forEach(function(elem){
    elem.addEventListener('mouseenter',function () {
purple.style.display='block'
purple.style.opacity="1"
        
    })
    elem.addEventListener('mouseleave',function () {
        purple.style.display='none'
        purple.style.opacity="0"
                
            })

})
var stud=document.querySelectorAll('#nav .stud')
var studio=document.querySelector('.studio')
stud.forEach(function(elem){
    elem.addEventListener('mouseenter',function () {
studio.style.display='block'
studio.style.opacity="1"
        
    })
    elem.addEventListener('mouseleave',function () {
        studio.style.display='none'
        studio.style.opacity="0"
                
            })

})