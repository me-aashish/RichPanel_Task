

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async(e) => {
    e.preventDefault();

    const emailValue = loginEmail.value;
    const passwordValue = loginPassword.value;

    if(emailValue === "" || passwordValue == ""){
        alert('"Please enter name, email and password";');
    }

   else{
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailValue.match(mailformat)){
            alert('please give correct mail type')
        }
        else{
            try {
                const data = await axios.post('http://localhost:3000/api/v1/signin',{
                    email : emailValue,
                    password : passwordValue
                    
                        
                })
                if(data.data.success === true){
                    // console.log(data.data.data)
                    const token = data.data.data;
                    localStorage.setItem('x-access-token', token);
                    window.location.href = './plan.html'
                }
                // console.log(data);
                // const token = data.data;
                // localStorage.setItem('x-access-token', token);
            } catch (error) {
                console.log(error);
                // if(error.response.data.err.code === 11000){
                //     alert('Email already exists, provide unique one');
                // }
            }
        }
    }
})