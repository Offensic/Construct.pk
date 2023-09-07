// ------------------------------ Java Script foor the Landing Page
var SliderDiv = document.querySelector('#Slider_div')
var NavbarSlider = document.querySelector('#Navbar_Slider')
var menuopen = document.querySelector('#menu-open')
var menuclose = document.querySelector('#menu-close')
var logo = document.querySelector('#logo')


var main = document.querySelector('#main')
var DownArrow = document.querySelector('#Down-Arrow')


var ReviewContainer = document.querySelector('#Review-container')
var number = document.querySelector('#number')




menuopen.addEventListener('click', function () {
    // NavbarSlider.style.display = 'block';


    setTimeout(function () {
        // NavbarSlider.style.transform = `translateX(0%) `;
        NavbarSlider.style.zIndex = '99';
        NavbarSlider.style.width = '100%';



        setTimeout(function () {
            menuclose.style.display = 'block';
            menuopen.style.display = 'none';

        }, 200)

        setTimeout(function () {
            logo.style.fontSize = `clamp(50px, 6.5vw, 70px)`;

        }, 250)

    }, 250)



})

// For Closing Navbar Slide 
menuclose.addEventListener('click', function () {


    setTimeout(function () {
        // NavbarSlider.style.transform = `translateX(100%)`
        NavbarSlider.style.zIndex = '0';
        NavbarSlider.style.width = '0%';


        setTimeout(function () {
            // NavbarSlider.style.display = 'none';
            logo.style.fontSize = '22px';
        }, 20)

    }, 10)

    menuopen.style.display = 'block';
    menuclose.style.display = 'none';

})

// --------------------------- Move the Landinage Slider with an Arrrows
function RightArrow() {
    var scrollX = 250;
    SliderDiv.scrollBy(scrollX, 0)
}

function LeftArrow() {
    var scrollX = -250;
    SliderDiv.scrollBy(scrollX, 0)
}

//  Hiding and showing DownArrow on the specific Screen size.
window.addEventListener("scroll", function () {

    if (window.scrollY >= 300) {

        DownArrow.style.display = 'none';
    }
    else {
        // DownArrow.style.display = 'block';
    }
});




//  Function for Move the review Slider
function MoveReviewRight() {

    var scrollX = 1;
    ReviewContainer.scrollBy(scrollX, 0)
}

function MoveReviewLeft() {
    var scrollX = -1;
    ReviewContainer.scrollBy(scrollX, 0)
}


// ------------------------------- Function for the Loader of Website to run  a Loading.
function time (){

    let load = 0 ;
    const counter = setInterval(() => {
        load=+ load + 4

        if(load < 100){
            number.innerHTML  = load+"%"
        }

        else{
            number.innerHTML = 100+"%"
            clearInterval(counter)
        }

    },150)




}








////////////// ----------------------------------------------- GSAP CODE ----------------------------------- ///////////////////




// gsap for Landingpage


var landingpagetl = gsap.timeline();


landingpagetl.to('#loader #number',{
    duration: 2.5,
    onStart: time(),
})


landingpagetl.to('#loader',{
    top: '-100vh',
    duration: 1,
})
gsap.to('#Navbar', {
    opacity: 1,
    duration: 1,
})

landingpagetl.to('#title h1', {
    paddingTop: '0px',
    opacity: 1,
    duration: 0.9,

})
landingpagetl.to('#title p', {
    paddingTop: '0px',
    duration: 1,
    duration: 1,
    opacity: 1,
})
landingpagetl.to('#Hero_heading #callnow_btn', {
    opacity: 1,
    x: '5px',
    duration: 1,
})

landingpagetl.from('#Contact_icon, #MoveArrows', {
    opacity: 0,
    duration: 0.7,
    x: '100px',
})

landingpagetl.from('#Down-Arrow', {
    opacity: 0,
    duration: 0.7,
    y: '10px',
    yoyo: true,
    repeat: -1,
})




//  gsap for About us page
gsap.from('#About #headings', {
    duration: 2,
    opacity: 0,
    y: '35px',
    scrollTrigger: {
        trigger: '#headings',
        start: 'top 85%',

    }

})



gsap.from('#hover-card', {
    duration: 0.9,
    opacity: 0,
    x: '100%',
    scrollTrigger: {
        trigger: '#hover-card',
        start: 'top 85%',
    }

})

gsap.from('#R-side #img ', {

    duration: 1.5,
    opacity: 0,
    x: 40,
    scrollTrigger: {
        trigger: '#R-side #img ',
        scroller: 'body',
        start: 'top 85%'

    }


})

// gsap for the Specialist
gsap.from('#Specialist #heading h2', {
    duration: 0.7,
    opacity: 0,
    x: -80,
    scrollTrigger: {
        trigger: '#Specialist #heading h2',
        start: 'top 70%'
    }
})

gsap.from('#Specialist #Icon-box .box', {
    duration: 0.8,
    opacity: 0,
    x: -10,
    scrollTrigger: {
        trigger: '#Specialist #Icon-box .box',
        start: 'top 65%',
    }

})

// gsap fore Project page
gsap.from('#Work #heading', {

    opacity: 0,
    duration: 1.5,
    y: -100,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '#heading',
        start: 'top 10%',
    }
})


gsap.from('#project-box .row .project', {

    opacity: 1,
    duration: 1.5,
    stagger: 1,
    scale: 0,
    y: '200px',
    x: 70,
    scrollTrigger: {
        trigger: '#heading',
        // markers: true,
        start: 'top 60%',
    }
})



// gsap for the Work Stage Page
gsap.from('#content #picture img', {

    duration: 1,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: '#content #picture img',
        // markers: true,
        start: 'top 95%',

    }

})

gsap.from('#Work-stages .steps', {

    duration: 0.7,
    opacity: 0,
    scale: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#Work-stages .steps',
        // markers: true,
    }

})














