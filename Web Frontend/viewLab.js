
var url = new URL("http://localhost:3000/getLabInfo");

fetch(url,  {
    method: 'GET', 
}).then((res)=>res.json())
  .then((lab)=>{
    console.log(lab)
    const table = document.getElementById('viewLabs')
        for (const labs of lab) {
            const row = document.createElement('tr');
      
            const nameCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const phoneCell = document.createElement('td'); 
            const openCell = document.createElement('td');
            const closeCell = document.createElement('td');
            const locationCell = document.createElement('td');
            const ownerCell = document.createElement('td')
            const tests = document.createElement('td')


            const textarea = document.createElement('textarea');
            textarea.appendChild(document.createTextNode(labs.test)); 
            textarea.setAttribute('class', 'textarea');
            
         
            nameCell.textContent = labs.name;
            emailCell.textContent = labs.email;
            phoneCell.textContent = labs.phone;
            openCell.textContent = labs.openTime;
            closeCell.textContent = labs.closeTime;
            locationCell.textContent = labs.location;
            ownerCell.textContent = labs.ownerName;
            // tests.textContent = labs.test;

            tests.appendChild(textarea);

            // Append the cells to the row
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);
            row.appendChild(openCell);
            row.appendChild(closeCell);
            row.appendChild(locationCell);
            row.appendChild(ownerCell);
            row.appendChild(tests);
      
            // Append the row to the table
            table.appendChild(row);
          }

})

