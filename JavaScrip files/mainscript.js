// ------------------------------ Java Script foor the Landing Page
var Navbar = document.querySelector('#Navbar')
var SliderDiv = document.querySelector('#Slider_div')
var NavbarSlider = document.querySelector('#Navbar_Slider')
var menuopen = document.querySelector('#menu-open')
var menuclose = document.querySelector('#menu-close')
var logo = document.querySelector('#logo')


var main = document.querySelector('#main')
var DownArrow = document.querySelector('#Down-Arrow')

var number = document.querySelector('#number')
var loader = document.querySelector('#loader')

var ReviewContainer = document.querySelector('#Review-container')
const projects = document.querySelectorAll(".project")

const Navlinks = document.querySelectorAll('.navlink')



// For Opening the Navbar Slider
menuopen.addEventListener('click', function () {


    setTimeout(function () {
        NavbarSlider.style.zIndex = '999';
        NavbarSlider.style.width = '100%';
        // Giving fix height to the Main div becuase it an be hide the overflow I am unbale to hide in css
        main.style.height = '100svh';


    

        setTimeout(function () {
            menuclose.style.display = 'block';
            menuopen.style.display = 'none';

        }, 200)

        setTimeout(function () {
            logo.style.fontSize = `clamp(50px, 6.5vw, 70px)`;

        }, 250)



    }, 250)




})



// For Closing Navbar Slider 
function MenuClose() {

    setTimeout(function () {
        // NavbarSlider.style.transform = `translateX(100%)`
        NavbarSlider.style.zIndex = '0';
        NavbarSlider.style.width = '0%';
        // removing fix height to the Main div becuase I want to see the the content on full browser
        main.style.height = '0%';
        setTimeout(function () {
            // NavbarSlider.style.display = 'none';
            logo.style.fontSize = '22px';
        }, 20)

    }, 10)

    menuopen.style.display = 'block';
    menuclose.style.display = 'none';

}

//I make for this becauase i want to use 1 more time this function
menuclose.addEventListener('click', function () {
    MenuClose()
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



//  ----------------------------- Fucntion for capture the click object id
projects.forEach((project) => {
    project.addEventListener('click', function (detail) {

        var clickid = project.id;

        localStorage.setItem('Clickid', clickid)



    })

})



//------------------------------------  funtion for Working Responsive Navbar
Navlinks.forEach(navlink => {

    navlink.addEventListener('click', function () {
        if (window.innerWidth <= 767) {
            // MenuClose()
        }
    })

})


// ----------------------------- Fucntion When user Close thw webiste or Refresh.

// window.addEventListener('beforeunload', function(){

//     localStorage.clear();

// });






// ---------------------------- Function for the loader
var landingpagetl = gsap.timeline();
// function loadeer() {

// if (localStorage.getItem("hasCodeRunBefore") === null) {

// localStorage.setItem("hasCodeRunBefore", true)
// loader.style.display = 'flex';

function time() {
    loader.style.display = 'flex';
    main.style.height = '100svh';
    let load = 0;
    const counter = setInterval(() => {
        load = + load + Math.floor(Math.random() * 10)

        if (load < 100) {
            number.innerHTML = load + "%"
        }

        else {
            number.innerHTML = 100 + "%"
            clearInterval(counter)
            main.style.height = '0%';

        }

    }, 150)
}

//         landingpagetl.to('#loader #number', {
//             duration: 3.8,
//             onStart: time(),
//         })

//         landingpagetl.to('#loader', {
//             top: '-100vh',
//             duration: 1,
//         })
//     }
//     else {
//     }
// }

// loadeer();




////////////// ----------------------------------------------- GSAP CODE ----------------------------------- ///////////////////

// gsap for Landingpage
landingpagetl.to('#loader #number', {
    duration: 3.8,
    onStart: time(),
})

landingpagetl.to('#loader', {
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
    duration: 0.5,
})

landingpagetl.from('#Contact_icon, #MoveArrows', {
    opacity: 0,
    duration: 0.5,
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

// gsap for Project page
gsap.from('#Work #heading', {

    opacity: 0,
    duration: 1.5,
    y: -65,
    scrollTrigger: {
        trigger: '#heading',
        start: 'top 20%',
    }
})


gsap.from('#project-box .row .project', {

    opacity: 1,
    duration: 1,
    y: '-50px',
    scale: 0.8,
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
    scale: 0.9,
    scrollTrigger: {
        trigger: '#content #picture img',

    }

})

gsap.from('#Work-stages .steps', {

    duration: 0.7,
    opacity: 0,
    x: '-100px',
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#Work-stages .steps',
        // markers: true,
        scrub: true,

    }

})





















