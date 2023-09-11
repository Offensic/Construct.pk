const ProjecWrapper = document.querySelector('#page2-project-wrapper')
const img = document.querySelectorAll('.img')



const projectImage = document.querySelectorAll('.projectimage')

const FullImagebox = document.querySelector('#Full-image-box')
const Fullimage = document.querySelector('#Full-image')

var main = document.querySelector('#main')



var Scrollup = 0;
var ScrollDown = 0;
function CardMoveUp() {
    Scrollup = -100;
    ProjecWrapper.scrollBy(0, Scrollup)
    console.log(Scrollup)
}

function CardMoveDown() {
    ScrollDown += 100;
    ProjecWrapper.scrollBy(0, ScrollDown)

    if (ScrollDown == 700) {
        ScrollDown = 0;
    }
    console.log(ScrollDown)

}


projectImage.forEach(projectimg => {

    projectimg.addEventListener('click', function (detials) {

        if (window.innerWidth >= 700) {
            var imageurl = detials.target.src;
            Fullimage.src = imageurl;
            FullImagebox.style.display = 'flex';
            main.style.height = '100svh'
            ProjecWrapper.style.height = '100svh'



            var timline = gsap.timeline();
            timline.from('#Full-image', {
                opacity: 0,
                duration: 0.3,
                width: '0%',


            })

            timline.from('#closebtn', {
                opacity: 0,
                duration: 0.5,
                yoyo: true,
                repeat: -1,

            })

            console.log('it work')
        }

        else{
            

        }



    })
})



function Closeimage() {
    main.style.height = '0%'
    ProjecWrapper.style.height = '0%'
    FullImagebox.style.display = 'none';

}

// --------- GSAP Code 
gsap.to('#downArrow', {
    duration: 0.5,
    repeat: -1,
    y: 10,
    yoyo: true,
})

gsap.to('#upArrow', {
    duration: 0.5,
    repeat: -1,
    y: -10,
    yoyo: true,
})

