function timelinePg1() {


    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            markers: false,
            pin: true,
            end: "bottom -250%"
        }
    })

    .from("#center", {
        left:`85%`,
       duration:2,
        ease: Power1
    })


    t1.to("#btm img", {
        scale: 1,
        rotate: `-180deg`,
        duration: 1,
        stagger: .1,
        ease: Power3
    }, "flag hu mai")

        .to("#circle #top img", {
            scale: 1,
            duration: 1,
            stagger: .4,
            ease: Power1
        }, "flag hu mai")
        .to("#circle #top", {
            scale: 0,
            stagger: .4,
            ease: Power1
        }, "flag hu mai2")

        .to("#cimg img", {
            scale: 0,
            duration: 2,
            stagger: .4,
            ease: Power3
        }, "flag hu mai")

        .to("#center h5", {
            opacity: 0,
            stagger: .2,
            ease: Power3
        }, "flag hu mai")

        .to("#circle", {
            scale: .6,
            stagger: .4,
            ease: Power3
        }, "flag hu mai")

        .to("#overlay h1", {
            bottom: '-50%',
            duration: 1,
            ease: Power3
        }, "flag hu mai")

        .to("#overlay h2", {
            bottom: '7%',
            rotate: "0deg",
            duration: 1,
            ease: Power3
        }, "flag hu mai2")

        .to("#greenp", {
            top: '0%',

            ease: Power3
        }, "flag hu mai2")
        .to("#gola", {
            top: '50%',
            scale: 2,
            ease: Power3
        }, "flag hu mai")

        .to("#gola", {
            opacity: 0,
            ease: Power3
        }, "flag hu mai2")

        .to("#smCircle", {
            scale: 0,
            ease: Power1
        }, "flag hu mai2")

        .to("#circle", {
            scale: 0,
            ease: Power1
        }, "flag hu mai2")
}
function timelinePg2() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            scrub: 1,
            markers: false,
            pin: true,
            end: "bottom -150%"
        }
    })
    t2.to(".sTop-circle", {
        top: "55%",
        stagger: .2,
        ease: Power1
})
    t2.to("#pi", {
        left: "50%",
        
        ease: Power1
},"hlo")
    t2.to("#pi", {
        scale: 10,
        duration:3,
        ease: Power1
})
    t2.to("#pi", {
        background:"linear-gradient(to right ,greenyellow,#7ac9af)",
        ease: Power1
},"hlo")
    t2.to("#sTop h1", {
      left:"-200%",
      duration:10,
        ease: Power1
},"a")  
.to("#two", {
      opacity:0,
      delay:1,
      duration:2,
    ease: Power1
},"a")
    .to("#one", {
      opacity:1,
      delay:1,
      duration:2,
        ease: Power1
},"a")
  

}

timelinePg1()
timelinePg2()
