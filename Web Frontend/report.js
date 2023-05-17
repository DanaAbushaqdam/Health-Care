
const email = window.localStorage.getItem('email')

console.log(email)


const onSendResult = (target) =>{
    const id = target.parentElement.parentElement.id
    const row = document.getElementById(id)
    const children = row.children
    const mail = children[0].children[0].innerText
    const name = children[1].children[0].innerText
    const testName = children[2].children[0].innerText
    const max = children[3].children[0].innerText
    const min = children[4].children[0].innerText
    const result = children[5].children[1].value

    console.log(result)

    const params={
        name: name,
        email: mail,
        min: min,
        max: max,
        testName: testName,
        testResult: result
    }
    var url = new URL("http://127.0.0.1:3000/sendEmail",);
    fetch(url,  {
        method: 'POST', 
        body : JSON.stringify( params ), 
        headers:{ 
            'Content-Type': 'application/json'  
        }
    }).then(()=>{
        var url1 = new URL("http://127.0.0.1:3000/updateOrder/"+id);
        fetch(url1,  {
            method: 'PATCH', 
            body : JSON.stringify({TestResult :result , status:"finished"}), 
            headers:{ 
                'Content-Type': 'application/json'  
            }
        })
        .then(()=>{
            document.location.reload()
        })

      
    })
   

}












var url = new URL("http://127.0.0.1:3000/getAllSummaries/"+email,);


fetch(url,  {
    method: 'GET', 
}).then((res)=>res.json())
  .then((labOrders)=>{
    console.log(labOrders)
    const table = document.getElementById('ReportBody')
        for (const order of labOrders) {

            const row = document.createElement('tr');
            row.setAttribute('id', order._id)


            const mailCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const TestnameCell = document.createElement('td');
            const maxValCell = document.createElement('td');
            const minValCell = document.createElement('td');
            const inputCell = document.createElement('td');
            const buttonCell = document.createElement('td');

            const resultButton = document.createElement('button');
            resultButton.appendChild(document.createTextNode("Send Result")); 
            resultButton.setAttribute('class', 'btn');
            buttonCell.appendChild(resultButton);
            resultButton.setAttribute('onclick', "onSendResult(this)")
            
            
            const label = document.createElement('label');
            label.appendChild(document.createTextNode(order.user.name ));
            label.setAttribute('class', 'label');


            const label99 = document.createElement('label');
            label99.appendChild(document.createTextNode(order.patientEmail));
            label99.setAttribute('class', 'label');




            const label1 = document.createElement('label');
            label1.appendChild(document.createTextNode (order.testName));
            label1.setAttribute('class', 'label');

            const label2 = document.createElement('label');
            label2.appendChild(document.createTextNode( order.test.max));
            label2.setAttribute('class', 'label');

            const label3 = document.createElement('label');
            label3.appendChild(document.createTextNode(order.test.min));
            label3.setAttribute('class', 'label');
           

            const label4 = document.createElement('label');
  
            const input = document.createElement('input');
            input.setAttribute('class', 'input');
            inputCell.appendChild(label4);
            inputCell.appendChild(input);

            mailCell.appendChild(label99);

            nameCell.appendChild(label);
            TestnameCell.appendChild(label1);
            maxValCell.appendChild(label2);
            minValCell.appendChild(label3);
            row.appendChild(mailCell);
            row.appendChild(nameCell);
            row.appendChild(TestnameCell);
            row.appendChild(maxValCell);
            row.appendChild(minValCell);
            row.appendChild(inputCell);
            row.appendChild(buttonCell);
           
            table.appendChild(row);

           
           
          }

})

