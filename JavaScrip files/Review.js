
// -------------------------------------------- Review Page Code --------------------------------- ///


const Reviewcontainer = document.querySelector('#Review-container');
const Reviews = [
    { image: './assest/15.jpg', name: 'Hary',         para: '❝ Very happy with the team from Pakistan. Aestetic Homes for Providing us with a smooth and trouble-free planning stage for oour dream home. Our house was fully custom-built and homes were able to satisfy our needs. ❞' },
    { image: './assest/11.jpg', name: 'Jack Sparrow', para: '❝ Very happy with the team from Pakistan. Aestetic Homes for Providing us with a smooth and trouble-free planning stage for oour dream home. Our house was fully custom-built and homes were able to satisfy our needs. ❞' },
    { image: './assest/1.jpg', name: 'Mork',    para: '❝ Very happy with the team from Pakistan. Aestetic Homes for Providing us with a smooth and trouble-free planning stage for oour dream home. Our house was fully custom-built and homes were able to satisfy our needs. ❞' },
    { image: './assest/12.jpg', name: 'Waleed', para: '❝ Very happy with the team from Pakistan. Aestetic Homes for Providing us with a smooth and trouble-free planning stage for oour dream home. Our house was fully custom-built and homes were able to satisfy our needs. ❞' },
    { image: './assest/16.jpg', name: 'Jakson', para: '❝ Very happy with the team from Pakistan. Aestetic Homes for Providing us with a smooth and trouble-free planning stage for oour dream home. Our house was fully custom-built and homes were able to satisfy our needs. ❞' },
    { image: './assest/17.jpg', name: 'Neymar', para: '❝ Very happy with the team from Pakistan. Aestetic Homes for Providing us with a smooth and trouble-free planning stage for oour dream home. Our house was fully custom-built and homes were able to satisfy our needs. ❞' },


]


var Reviewcutter = '';
Reviews.forEach(process => {

    Reviewcutter += `<div class="Review-box">
    <div class="Review-img">
        <img src="${process.image}" alt="">
    </div>

    <div class="Review-heading">

    <div class="rev-title">

    <span>${process.name}</span>
    <div>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
    </div>
    </div>

    <div class="rev-para">
        <p>${process.para}</p>
    </div>

    </div>
</div>`
})

Reviewcontainer.innerHTML = Reviewcutter