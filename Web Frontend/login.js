
const onLoginAdminPressed = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const params = {
        email: email,
        password: password, 
    };

    
    // console.log(options)

    fetch('http://localhost:3000/authenticate', {
        method: 'POST', 
        body :JSON.stringify(params), 
        headers:{ 
            'Content-Type': 'application/json'  
        }
    })
    .then(response =>{ 
        response.json()
        if(response.status == 200){
            location.replace("http://127.0.0.1:5501/admin.html")
        }
        else {
            console.log('wrong data')
        }
    })
    .then(data => console.log(data));
}


const onLoginPressed = () =>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const params = {
        email: email,
        password: password, 
    };

    
    // console.log(options)

    fetch('http://localhost:3000/authenticateLab', {
        method: 'POST', 
        body :JSON.stringify(params), 
        headers:{ 
            'Content-Type': 'application/json'  
        }
    })

    .then((response)=> response.json()).then((data)=>{
  if(data.success){
    window.localStorage.setItem('id', data.id),

    window.localStorage.setItem('email', data.email)

    location.replace("http://127.0.0.1:5501/main.html")

    // const id = window.localStorage.getItem('id')
    // console.log(id)
  }
})
    // .then(response =>{ 
    //     response.json()
    //     console.log(response)
    //     if(response.status == 200){
    //         // location.replace("http://127.0.0.1:5501/main.html")
    //     }
    //     else {
    //         console.log('wrong data')
    //     }
    // })
    // .then(data => console.log(data));

}
