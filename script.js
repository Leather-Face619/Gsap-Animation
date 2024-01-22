var t1 =  gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        scrub:1,
        markers:false,
        pin:true,
        end:"bottom -250%"
    }
})

t1.to("#btm img",{
    scale:1,
    rotate:`-180deg`,
    duration:1,
    stagger:.1,
    ease:Power3
},"flag hu mai")

.to("#circle #top img",{
    scale:1,
    duration:1,
    stagger:.4,
    ease:Power1
},"flag hu mai")
.to("#circle #top",{
    scale:0,
   stagger:.4,
    ease:Power1
},"flag hu mai2")

.to("#cimg img",{
    scale:0,
    duration:2,
    stagger:.4,
    ease:Power3
},"flag hu mai")

.to("#center h5",{
    opacity:0,
   stagger:.2,
    ease:Power3
},"flag hu mai")

.to("#circle",{
    scale:.6,
    stagger:.4,
    ease:Power3
},"flag hu mai")

.to("#overlay h1",{
    bottom:'-50%',
    duration:1,
   ease:Power3
},"flag hu mai")

.to("#overlay h2",{
    bottom:'0%',
    rotate:"0deg",
    duration:1,
   ease:Power3
},"flag hu mai2")

.to("#greenp",{
    top:'0%',
   
   ease:Power3
},"flag hu mai2")
.to("#gola",{
    top:'50%',
   scale:2,
   ease:Power3
},"flag hu mai")

.to("#gola",{
   opacity:0,
  ease:Power3
},"flag hu mai2")

.to("#smCircle",{
    scale:0,
   ease:Power1
},"flag hu mai2")

.to("#circle",{
    scale:0,
   ease:Power1
},"flag hu mai2")