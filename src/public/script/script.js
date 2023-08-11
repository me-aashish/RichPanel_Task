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

    document.getElementsByClassName("pr-mob")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("pr-mob")[0].style.fontWeight="600";
    document.getElementsByClassName("v-mob")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("v-mob")[0].style.fontWeight="600";
    document.getElementsByClassName("res-mob")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("res-mob")[0].style.fontWeight="600";
    let devBasic = document.getElementsByClassName("dev-mob");
    for (let i = 0; i<devBasic.length; i++){
        document.getElementsByClassName("dev-mob")[i].style.color="rgb(31,77,145)";document.getElementsByClassName("dev-mob")[i].style.fontWeight="600";
    }
    document.getElementsByClassName("pr-basic")[0].style.color="black";document.getElementsByClassName("pr-basic")[0].style.fontWeight="500";
    document.getElementsByClassName("v-basic")[0].style.color="black"; document.getElementsByClassName("v-basic")[0].style.fontWeight="500";
    document.getElementsByClassName("res-basic")[0].style.color="black";document.getElementsByClassName("res-basic")[0].style.fontWeight="500";
    let devMob = document.getElementsByClassName("dev-basic");
    for (let i = 0; i<devMob.length; i++){
        document.getElementsByClassName("dev-basic")[i].style.color="black";document.getElementsByClassName("dev-basic")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-standard")[0].style.color="black";document.getElementsByClassName("pr-standard")[0].style.fontWeight="500";
    document.getElementsByClassName("v-standard")[0].style.color="black";document.getElementsByClassName("v-standard")[0].style.fontWeight="500";
    document.getElementsByClassName("res-standard")[0].style.color="black";document.getElementsByClassName("res-standard")[0].style.fontWeight="500";
    let devStandard = document.getElementsByClassName("dev-standard");
    for (let i = 0; i<devStandard.length; i++){
        document.getElementsByClassName("dev-standard")[i].style.color="black";document.getElementsByClassName("dev-standard")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-premium")[0].style.color="black";document.getElementsByClassName("pr-premium")[0].style.fontWeight="500";
    document.getElementsByClassName("v-premium")[0].style.color="black";document.getElementsByClassName("v-premium")[0].style.fontWeight="500";
    document.getElementsByClassName("res-premium")[0].style.color="black";document.getElementsByClassName("res-premium")[0].style.fontWeight="500";
    let devPremium = document.getElementsByClassName("dev-premium");
    for (let i = 0; i<devPremium.length; i++){
        document.getElementsByClassName("dev-premium")[i].style.color="black";document.getElementsByClassName("dev-premium")[i].style.fontWeight="500";
    }
})
document.getElementsByClassName("basic")[0].addEventListener("click", function(){
    document.getElementsByClassName("basic")[0].classList = "rec basic";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"
    ref = []
    ref = ["Basic", document.getElementsByClassName("pr-basic")[0].innerHTML, "Good", "480p", "Phone, Tablet, Computer, TV"];


    document.getElementsByClassName("pr-basic")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("pr-basic")[0].style.fontWeight="600";
    document.getElementsByClassName("v-basic")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("v-basic")[0].style.fontWeight="600";
    document.getElementsByClassName("res-basic")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("res-basic")[0].style.fontWeight="600";
    let devBasic = document.getElementsByClassName("dev-basic");
    for (let i = 0; i<devBasic.length; i++){
        document.getElementsByClassName("dev-basic")[i].style.color="rgb(31,77,145)";document.getElementsByClassName("dev-basic")[i].style.fontWeight="600";
    }
    document.getElementsByClassName("pr-mob")[0].style.color="black";document.getElementsByClassName("pr-mob")[0].style.fontWeight="500";
    document.getElementsByClassName("v-mob")[0].style.color="black"; document.getElementsByClassName("v-mob")[0].style.fontWeight="500";
    document.getElementsByClassName("res-mob")[0].style.color="black";document.getElementsByClassName("res-mob")[0].style.fontWeight="500";
    let devMob = document.getElementsByClassName("dev-mob");
    for (let i = 0; i<devMob.length; i++){
        document.getElementsByClassName("dev-mob")[i].style.color="black";document.getElementsByClassName("dev-mob")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-standard")[0].style.color="black";document.getElementsByClassName("pr-standard")[0].style.fontWeight="500";
    document.getElementsByClassName("v-standard")[0].style.color="black";document.getElementsByClassName("v-standard")[0].style.fontWeight="500";
    document.getElementsByClassName("res-standard")[0].style.color="black";document.getElementsByClassName("res-standard")[0].style.fontWeight="500";
    let devStandard = document.getElementsByClassName("dev-standard");
    for (let i = 0; i<devStandard.length; i++){
        document.getElementsByClassName("dev-standard")[i].style.color="black";document.getElementsByClassName("dev-standard")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-premium")[0].style.color="black";document.getElementsByClassName("pr-premium")[0].style.fontWeight="500";
    document.getElementsByClassName("v-premium")[0].style.color="black";document.getElementsByClassName("v-premium")[0].style.fontWeight="500";
    document.getElementsByClassName("res-premium")[0].style.color="black";document.getElementsByClassName("res-premium")[0].style.fontWeight="500";
    let devPremium = document.getElementsByClassName("dev-premium");
    for (let i = 0; i<devPremium.length; i++){
        document.getElementsByClassName("dev-premium")[i].style.color="black";document.getElementsByClassName("dev-premium")[i].style.fontWeight="500";
    }
})
document.getElementsByClassName("standard")[0].addEventListener("click", function(){
    document.getElementsByClassName("standard")[0].classList = "rec standard";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"
    ref = []
    ref = ["Standard", document.getElementsByClassName("pr-standard")[0].innerHTML, "Better", "1080p", "Phone, Tablet, Computer, TV"];

    document.getElementsByClassName("pr-standard")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("pr-standard")[0].style.fontWeight="600";
    document.getElementsByClassName("v-standard")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("v-standard")[0].style.fontWeight="600";
    document.getElementsByClassName("res-standard")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("res-standard")[0].style.fontWeight="600";
    let devBasic = document.getElementsByClassName("dev-standard");
    for (let i = 0; i<devBasic.length; i++){
        document.getElementsByClassName("dev-standard")[i].style.color="rgb(31,77,145)";document.getElementsByClassName("dev-standard")[i].style.fontWeight="600";
    }
    document.getElementsByClassName("pr-basic")[0].style.color="black";document.getElementsByClassName("pr-basic")[0].style.fontWeight="500";
    document.getElementsByClassName("v-basic")[0].style.color="black"; document.getElementsByClassName("v-basic")[0].style.fontWeight="500";
    document.getElementsByClassName("res-basic")[0].style.color="black";document.getElementsByClassName("res-basic")[0].style.fontWeight="500";
    let devMob = document.getElementsByClassName("dev-basic");
    for (let i = 0; i<devMob.length; i++){
        document.getElementsByClassName("dev-basic")[i].style.color="black";document.getElementsByClassName("dev-basic")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-mob")[0].style.color="black";document.getElementsByClassName("pr-mob")[0].style.fontWeight="500";
    document.getElementsByClassName("v-mob")[0].style.color="black";document.getElementsByClassName("v-mob")[0].style.fontWeight="500";
    document.getElementsByClassName("res-mob")[0].style.color="black";document.getElementsByClassName("res-mob")[0].style.fontWeight="500";
    let devStandard = document.getElementsByClassName("dev-mob");
    for (let i = 0; i<devStandard.length; i++){
        document.getElementsByClassName("dev-mob")[i].style.color="black";document.getElementsByClassName("dev-mob")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-premium")[0].style.color="black";document.getElementsByClassName("pr-premium")[0].style.fontWeight="500";
    document.getElementsByClassName("v-premium")[0].style.color="black";document.getElementsByClassName("v-premium")[0].style.fontWeight="500";
    document.getElementsByClassName("res-premium")[0].style.color="black";document.getElementsByClassName("res-premium")[0].style.fontWeight="500";
    let devPremium = document.getElementsByClassName("dev-premium");
    for (let i = 0; i<devPremium.length; i++){
        document.getElementsByClassName("dev-premium")[i].style.color="black";document.getElementsByClassName("dev-premium")[i].style.fontWeight="500";
    }
})
document.getElementsByClassName("premium")[0].addEventListener("click", function(){
    document.getElementsByClassName("premium")[0].classList = "rec premium";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
    ref = []
    ref = ["Premium", document.getElementsByClassName("pr-premium")[0].innerHTML, "Best", "4K+HDR", "Phone, Tablet, Computer, TV"];

    document.getElementsByClassName("pr-premium")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("pr-premium")[0].style.fontWeight="600";
    document.getElementsByClassName("v-premium")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("v-premium")[0].style.fontWeight="600";
    document.getElementsByClassName("res-premium")[0].style.color="rgb(31,77,145)";document.getElementsByClassName("res-premium")[0].style.fontWeight="600";
    let devBasic = document.getElementsByClassName("dev-premium");
    for (let i = 0; i<devBasic.length; i++){
        document.getElementsByClassName("dev-premium")[i].style.color="rgb(31,77,145)";document.getElementsByClassName("dev-premium")[i].style.fontWeight="600";
    }
    document.getElementsByClassName("pr-basic")[0].style.color="black";document.getElementsByClassName("pr-basic")[0].style.fontWeight="500";
    document.getElementsByClassName("v-basic")[0].style.color="black"; document.getElementsByClassName("v-basic")[0].style.fontWeight="500";
    document.getElementsByClassName("res-basic")[0].style.color="black";document.getElementsByClassName("res-basic")[0].style.fontWeight="500";
    let devMob = document.getElementsByClassName("dev-basic");
    for (let i = 0; i<devMob.length; i++){
        document.getElementsByClassName("dev-basic")[i].style.color="black";document.getElementsByClassName("dev-basic")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-mob")[0].style.color="black";document.getElementsByClassName("pr-mob")[0].style.fontWeight="500";
    document.getElementsByClassName("v-mob")[0].style.color="black";document.getElementsByClassName("v-mob")[0].style.fontWeight="500";
    document.getElementsByClassName("res-mob")[0].style.color="black";document.getElementsByClassName("res-mob")[0].style.fontWeight="500";
    let devStandard = document.getElementsByClassName("dev-mob");
    for (let i = 0; i<devStandard.length; i++){
        document.getElementsByClassName("dev-mob")[i].style.color="black";document.getElementsByClassName("dev-mob")[i].style.fontWeight="500";
    }
    document.getElementsByClassName("pr-standard")[0].style.color="black";document.getElementsByClassName("pr-standard")[0].style.fontWeight="500";
    document.getElementsByClassName("v-standard")[0].style.color="black";document.getElementsByClassName("v-standard")[0].style.fontWeight="500";
    document.getElementsByClassName("res-standard")[0].style.color="black";document.getElementsByClassName("res-standard")[0].style.fontWeight="500";
    let devPremium = document.getElementsByClassName("dev-standard");
    for (let i = 0; i<devPremium.length; i++){
        document.getElementsByClassName("dev-standard")[i].style.color="black";document.getElementsByClassName("dev-standard")[i].style.fontWeight="500";
    }
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

    window.location.href = "https://rp-7583.onrender.com/checkout.html"
})

