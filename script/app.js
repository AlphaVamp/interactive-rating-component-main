const ratings = document.querySelectorAll('.ratings span');
const submit = document.querySelector('.submit-btn');
const rateToGive = document.getElementById('selected-rating');
const ratingSection = document.querySelector('.rating');
const thanksSection = document.querySelector('.thanks');
let rate = null;

ratings.forEach((rating)=>{
    rating.addEventListener("click", (e)=>{
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove('checked');
        }

        const card = e.target;
        card.classList.add('checked');
        rate = e.target.innerText;
        // console.log(rate);
    });
});

submit.addEventListener('click', ()=>{
    if(rate){
        rateToGive.innerText = rate;
        ratingSection.classList.add('hidden');
        thanksSection.classList.remove('hidden');
    }
});