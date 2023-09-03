const ratingCards=document.querySelectorAll(".rating_span");
const submitBtn=document.querySelector("button");
const ratePoint=document.querySelector("#rate");
const rateSection=document.querySelector(".rate_section");
const thankSection=document.querySelector(".thankyou");
let rate=null;
  
ratingCards.forEach((rating_card)=>{
  rating_card.addEventListener('click',(e)=>{
    const active=document.querySelector('.checked');
    if(active){
      active.classList.remove("ckecked");
    }
    const card=e.target;
    card.classList.add("checked");
    rate=e.target.innerText;
    console.log(rate);
  });
});

submitBtn.addEventListener("click",()=>{
  if(rate){
    ratePoint.innerText=rate;
    rateSection.classList.add("hidden");
    thankSection.classList.remove("hidden");
  }
});