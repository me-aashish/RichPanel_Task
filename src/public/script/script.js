let ref = ["Mobile", "Rs 100", "Good", "480p", "Phone Tablet"];

document.getElementsByClassName("mobile")[0].addEventListener("click", function(){
    document.getElementsByClassName("mobile")[0].classList = "rec mobile";
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"
    ref = []
    ref = ["Mobile", document.getElementsByClassName("pr-mob")[0].innerHTML, "Good", "480p", "Phone, Tablet"];
    let ls = document.querySelectorAll("tbody tr");
    console.log(ls);
    console.log(ref);
    // for (let i = 0; i< ls.length; i++){
    //     console.log(ls[i]);
    // }
    // let trlist = ls.document.getElementsByTagName("tr")[0];
})
document.getElementsByClassName("basic")[0].addEventListener("click", function(){
    document.getElementsByClassName("basic")[0].classList = "rec basic";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"
    ref = []
    ref = ["Basic", document.getElementsByClassName("pr-basic")[0].innerHTML, "Good", "480p", "Phone, Tablet, Computer, TV"];
})
document.getElementsByClassName("standard")[0].addEventListener("click", function(){
    document.getElementsByClassName("standard")[0].classList = "rec standard";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"
    ref = []
    ref = ["Standard", document.getElementsByClassName("pr-standard")[0].innerHTML, "Better", "1080p", "Phone, Tablet, Computer, TV"];
})
document.getElementsByClassName("premium")[0].addEventListener("click", function(){
    document.getElementsByClassName("premium")[0].classList = "rec premium";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
    ref = []
    ref = ["Premium", document.getElementsByClassName("pr-premium")[0].innerHTML, "Best", "4K+HDR", "Phone, Tablet, Computer, TV"];
})


document.getElementById("color_mode").addEventListener("click", function(){
    let checkbox = document.getElementById("color_mode");

    if (checkbox.checked == false){
        document.getElementsByClassName("pr-title")[0].innerHTML = "Monthly price";
        document.getElementsByClassName("pr-mob")[0].innerHTML = "Rs 100"
        document.getElementsByClassName("pr-basic")[0].innerHTML = "Rs 200"
        document.getElementsByClassName("pr-standard")[0].innerHTML = "Rs 500"
        document.getElementsByClassName("pr-premium")[0].innerHTML = "Rs 700"
        localStorage.removeItem('Plan Cycle');
        localStorage.setItem('Plan Cycle', 'Monthly')
    }
    else{
        document.getElementsByClassName("pr-title")[0].innerHTML = "Yearly price";
        document.getElementsByClassName("pr-mob")[0].innerHTML = "Rs 1000"
        document.getElementsByClassName("pr-basic")[0].innerHTML = "Rs 2000"
        document.getElementsByClassName("pr-standard")[0].innerHTML = "Rs 5000"
        document.getElementsByClassName("pr-premium")[0].innerHTML = "Rs 7000"
        localStorage.removeItem('Plan Cycle')
        localStorage.setItem('Plan Cycle', 'Yearly');

    }
})

const nxtBtn = document.querySelector('.nxt-bt');

nxtBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(ref);

    localStorage.setItem('Plan Name', ref[0]);
    localStorage.setItem('Plan Price', ref[1]);
    localStorage.setItem('Devices', ref[4]);
    localStorage.setItem('Plan Name', ref[0]);
    localStorage.setItem('Plan Name', ref[0]);

    window.location.href = "http://localhost:3000/checkout.html"
})

