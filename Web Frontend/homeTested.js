
const email = window.localStorage.getItem('email')

console.log(email)


const onApprove = (target) =>{
    console.log((target.parentElement.parentElement.id))
    const orderId = target.parentElement.parentElement.id
    
    const params = {
        status: 'tested'
    }

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



//status = pending and homeVisit = false
const options = {
    homeVisit : true, 
    status: 'accepted'
} 
var url = new URL("http://localhost:3000/getAllOrders/"+email,);
  for (let option in options) {
    url.searchParams.append(option, options[option]);
  }
fetch(url,  {
    method: 'GET', 
}).then((res)=>res.json())
  .then((labOrders)=>{
    console.log(labOrders)
    const table = document.getElementById('HomeTestedBody')
        for (const order of labOrders) {
            // Create a new row for the user
            const row = document.createElement('tr');
            row.setAttribute('id', order._id)
      
            // Create cells for the user's name and email
            const nameCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const phoneCell = document.createElement('td');
            const locationCell= document.createElement('td') 
            const testCell = document.createElement('td')
            const date = document.createElement('td')
            const approval = document.createElement('td')

            const acceptButton = document.createElement('button')
            

            
            const icon2= document.createElement('i')
            icon2.setAttribute('class', 'fa fa-check')

            acceptButton.appendChild(icon2)

            acceptButton.setAttribute('class', 'btn2')

            acceptButton.setAttribute('onclick', "onApprove(this)")

            approval.appendChild(acceptButton)

      
            // Set the text content of the cells to the user's name and email
            nameCell.textContent = order.user.name;
            emailCell.textContent = order.patientEmail;
            phoneCell.textContent = order.user.phone;
            locationCell.textContent = order.location;
            testCell.textContent = order.testName;
            date.textContent = order.time;
            
            // Append the cells to the row
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);
            row.appendChild(locationCell);
            row.appendChild(testCell);
            row.appendChild(date);
            row.appendChild(approval);
      
            // Append the row to the table
            table.appendChild(row);
          }

})

