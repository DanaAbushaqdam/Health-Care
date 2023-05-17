
const onSignUpPressed = () =>{
// console.log(hello)
const email = document.getElementById('email').value;
const labName = document.getElementById('labName').value;
const manager = document.getElementById('manager').value;
const phone = document.getElementById('phone').value;
const openTime = document.getElementById('opentime').value;
const closeTime = document.getElementById('closetime').value;
const aboutLab = document.getElementById('aboutLab').value;
const password = document.getElementById('password').value;
const license = document.getElementById('customFile').value;
const location = document.getElementById('location').value;


  
let numb = document.getElementById("test_form").childElementCount;
console.log(numb)
let tests = []

for(i=1; i< numb; i++){
    const category = document.getElementById('Category'+i).value;
    const testName = document.getElementById('name'+i).value;
    const price = document.getElementById('Price'+i).value;
    const Visit = document.getElementById('flexCheckChecked'+i).checked;
    const max = document.getElementById('max'+1).value;
    const min = document.getElementById('min'+1).value;
    const aboutTest = document.getElementById('exampleFormControlTextarea'+i).value;

    const t ={
        name: testName, 
        category:category, 
        description: aboutTest, 
        price: price, 
        min: min, 
        max: max, 
        homeVisit: Visit,
    }
    console.log(t)
    tests.push(t)

}

const params = {
    email: email,
   name: labName, 
   ownerName :manager,
   phone :phone,
   openTime :openTime,
   closeTime :closeTime,
   about : aboutLab,
   password : password,
   location :location,
   status :'pending',
   license : license,
   testsInformation :tests
};

console.log(params)


    fetch('http://localhost:3000/createLabOrder', {
        method: 'POST', 
        body :JSON.stringify(params), 
        headers:{ 
            'Content-Type': 'application/json'  
        }
    })
    .then(()=>document.location.reload()) 

}



