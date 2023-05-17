
const onApprove = (target) =>{
    console.log((target.parentElement.parentElement.id))
    const laborderId = target.parentElement.parentElement.id
    
    const params = {
        status: 'accepted'
    }


    fetch('http://localhost:3000/changeLabOrderStatus/'+laborderId, {
        method: 'POST', 
        body : JSON.stringify( params ), 
        headers:{ 
            'Content-Type': 'application/json'  
        }
    }).then((res) => {res.json()})
    .then((data)=> {console.log(data)
        document.location.reload ()
    })
}


const onDeny = (target) => {
    console.log((target.parentElement.parentElement.id))
    const laborderId = target.parentElement.parentElement.id
      
    const params = {
        status: 'rejected'
    }

    fetch('http://localhost:3000/changeLabOrderStatus/'+ laborderId, {
        method: 'POST', 
        body : JSON.stringify( params ), 
        headers:{ 
            'Content-Type': 'application/json'  
        }
   
    }).then((res) => {res.json()})
    .then((data)=> {console.log(data)
        document.location.reload ()
    })
}



var url = new URL("http://localhost:3000/getLabOrders");
fetch(url,  {
    method: 'GET', 
}).then((res)=>res.json())
  .then((LabOrder)=>{
    console.log(LabOrder)
    const table = document.getElementById('labreq')
        for (const laborders of LabOrder) {
            const row = document.createElement('tr');

      row.setAttribute('id', laborders._id)

            const nameCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const phoneCell = document.createElement('td'); 
            const openCell = document.createElement('td');
            const closeCell = document.createElement('td');
            const locationCell = document.createElement('td');
            const ownerCell = document.createElement('td')
            const tests = document.createElement('td')
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

            
         
            nameCell.textContent = laborders.name;
            emailCell.textContent = laborders.email;
            phoneCell.textContent = laborders.phone;
            openCell.textContent = laborders.openTime;
            closeCell.textContent = laborders.closeTime;
            locationCell.textContent = laborders.location;
            ownerCell.textContent = laborders.ownerName;
            tests.textContent = laborders.test;
            
            // Append the cells to the row
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);
            row.appendChild(openCell);
            row.appendChild(closeCell);
            row.appendChild(locationCell);
            row.appendChild(ownerCell);
            row.appendChild(tests);
            row.appendChild(approval);
      
            // Append the row to the table
            table.appendChild(row);
          }

})

