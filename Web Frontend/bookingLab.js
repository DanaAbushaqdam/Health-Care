
const labId = window.localStorage.getItem('id')
const email = window.localStorage.getItem('email')

console.log(email)




const onApprove = (target) =>{
    const id = target.parentElement.parentElement.id
    const orderId = target.parentElement.parentElement.id
    const row = document.getElementById(id)
    const children = row.children
    const date = children[4].innerText
    console.log(date)

    const params = {
        status: 'accepted'
    }

   fetch('http://localhost:3000/addUnavailableTimeForLab/'+labId, {
                method: 'PUT', 
                headers:{ 
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify({time: date})
            }).then((res)=>res.json())
            .then((data)=>{
                console.log(data)

            }),

   

    fetch('http://localhost:3000/updateOrder/'+orderId, {
        method: 'PATCH', 
        body : JSON.stringify( params ), 
        headers:{ 
            'Content-Type': 'application/json'  
        }
    }).then((res) => res.json())
    .then((data)=> {console.log(data)
        document.location.reload ()
    })
}

const onDeny = (target) => {
    console.log((target.parentElement.parentElement.id))
    const orderId = target.parentElement.parentElement.id
    
    const params = {
        status: 'rejected'
    }

    // var url ='http://localhost:3000/updateOrder/'+orderId
    fetch('http://localhost:3000/updateOrder/'+orderId, {
        method: 'PATCH', 
        body : JSON.stringify( params ), 
        headers:{ 
            'Content-Type': 'application/json'  
        } 
    }).then((res) => {res.json()})
    .then((data)=> {console.log(data)
        document.location.reload ()
    })
}

//status = pending and homeVisit = false
const options = {
    homeVisit : false, 
    status: 'pending'
} 
var url = new URL("http://localhost:3000/getAllOrders/"+email,);
  for (let option in options) {
    url.searchParams.append(option, options[option]);
  }
fetch(url, {
    method: 'GET', 
}).then((res)=>res.json())
  .then((labOrders)=>{
    console.log(labOrders)
    const table = document.getElementById('LabBookingBody')
        for (const order of labOrders) {
            const row = document.createElement('tr');

            row.setAttribute('id', order._id)
      
            const nameCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const phoneCell = document.createElement('td'); 
            const testCell = document.createElement('td')
            const date = document.createElement('td')
            const approval = document.createElement('td')

            const acceptButton = document.createElement('button')
            const denyButton = document.createElement('button')

            const icon1 = document.createElement('i')
            icon1.setAttribute('class', 'fa fa-close')

            denyButton.appendChild(icon1)
            
            const icon2= document.createElement('i')
            icon2.setAttribute('class', 'fa fa-check')

            acceptButton.appendChild(icon2)

            acceptButton.setAttribute('class', 'btn2')
            denyButton.setAttribute('class', 'btn1')

            acceptButton.setAttribute('onclick', "onApprove(this)")
            denyButton.setAttribute('onclick', "onDeny(this)")

            approval.appendChild(acceptButton)
            approval.appendChild(denyButton)

      
         
            nameCell.textContent = order.user.name;
            emailCell.textContent = order.patientEmail;
            phoneCell.textContent = order.user.phone;
            testCell.textContent = order.testName;
            date.textContent = order.time;
            
            // Append the cells to the row
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);
            row.appendChild(testCell);
            row.appendChild(date);
            row.appendChild(approval);
      
            // Append the row to the table
            table.appendChild(row);
          }

})

