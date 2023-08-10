const mobile = document.querySelectorAll('.Mobile');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const token = localStorage.getItem('x-access-token');
    console.log(token);
    console.log('hello');
})
