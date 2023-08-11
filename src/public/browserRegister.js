const names = document.getElementById('registerName');
const email = document.getElementById('registerEmail');
const password = document.getElementById('registerpassword');
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', async(e) =>{
    e.preventDefault();

    const emailValue = email.value;
    const nameValue = names.value;
    const passwordValue = password.value;

    if(nameValue === "" || emailValue === "" || passwordValue == ""){
        alert('"Please enter name, email and password";');
    }

   else{
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailValue.match(mailformat)){
            alert('please give correct mail type')
        }
        else{
            try {
                const data = await axios.post('rich-panel-task-cr5f.vercel.app/api/v1/signup',{
                    name : nameValue,
                    email : emailValue,
                    password : passwordValue
                    
                        
                })
                if(data.data.success === true){
                    alert('Successfully Registered, Now you can log in');
                }
            } catch (error) {
                // console.log(error.response.data.err);
                if(error.response.data.err.code === 11000){
                    alert('Email already exists, provide unique one');
                }
            }
        }
    }

    

})