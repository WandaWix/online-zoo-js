const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    // console.log(button.dataset.carouselButton);
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelectorAll("[data-slides]")[0]


        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// Testimonials carousel ----------------------------------------------------------
// every testimonial is a slide, 1 2 3 4 -> click 2 3 4 5 -> click 3 4 5 6 -> 4 5 6 7 -> 5 6 7 8 -> 6 7 8 1

const sliders = document.querySelector('#testiInput'); //input name?


const p = document.querySelector('#valueTestimonials');

// console.log(p.innerHTML = 'lul');
const showNumber = () => {




    let testi1 = document.querySelector('.testi1');
    let testi2 = document.querySelector('.testi2');
    let testi3 = document.querySelector('.testi3');
    let testi4 = document.querySelector('.testi4');
    let testi5 = document.querySelector('.testi5');
    let testi6 = document.querySelector('.testi6');
    let testi7 = document.querySelector('.testi7');
    let testi8 = document.querySelector('.testi8');
    // console.log(testi1);
    
    let slide2 = document.querySelectorAll('.slide2');
    // console.log(slide2);
    let testimonials = [testi1, testi2, testi3, testi4, testi5, testi6, testi7, testi8];
    // console.log(testimonials);
    



    p.innerText = sliders.value;
    // console.log(sliders);
    let testiIndex = sliders.value;
    console.log(testiIndex);
    for(let i=0; i < testiIndex; i++) {
      slide2[i].style.display = 'none';
 
    }
    
    let lastSlide = testiIndex + 4;
    for(let i=testiIndex; i < lastSlide&& i < slide2.length; i++){
        slide2[i].style.display = 'block';
  
    }
    for(let i = lastSlide; i < 8; i++) {
        slide2[i].style.display = 'none';
    }
}

sliders.addEventListener('change', showNumber);

//show number holds our current value


