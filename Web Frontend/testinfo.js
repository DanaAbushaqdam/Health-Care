

const LabId = window.localStorage.getItem('id')

$(".updateForm .container").hide();
$(".addForm .container").hide();



const onDelete = (target) =>{
  const id = target.parentElement.parentElement.id
  const row = document.getElementById(id)
  const children = row.children
  const name = children[1].innerText
  console.log(name)
  console.log(LabId)
  const params={
  newTest: name,
}

  fetch('http://localhost:3000/deleteTestFromLab/'+LabId, {
    method: 'DELETE', 
    body :JSON.stringify(params), 
    headers:{ 
        'Content-Type': 'application/json'  
    }
})
.then(()=>document.location.reload()) 
}


// const update = (target,id)=>{
//   console.log('hi')
// console.log(id)
// // var url = new URL("http://localhost:3000/updateTest/"+LabId,);

// // fetch(url,  {
// //     method: 'PATCH', 
// // }).then((res)=>res.json())


// }

const onEdit = (target) =>{
  $(".updateForm  .container").fadeIn(1000);
 $(".addForm .container").hide();
 const testId = target.parentElement.parentElement.id
 const row = document.getElementById(testId)
  const children = row.children
  const category = children[0].innerText
  const name = children[1].innerText
  const price = children[2].innerText
  const about = children[3].children[0].value
  const min = children[4].innerText
  const max = children[5].innerText
  const visit = children[6].innerText
  const categoryInput = document.getElementById('upCategory1')
  const nameInput = document.getElementById('upname1')
  const priceInput = document.getElementById('upPrice1')
  const aboutInput = document.getElementById('upexampleFormControlTextarea1')
  const minInput = document.getElementById('upmin1')
  const maxInput = document.getElementById('upmax1')
  const visitInput = document.getElementById('upflexCheckChecked1')
  categoryInput.setAttribute('value', category)
  nameInput.setAttribute('value', name)
  priceInput.setAttribute('value', parseInt(price))
  aboutInput.textContent=(about)
  minInput.setAttribute('value', parseInt(min))
  maxInput.setAttribute('value', parseInt(max))
  visitInput.checked = (visit ==='true')
  var updateCancle=document.getElementById("updateCancle");

  updateCancle.addEventListener('click',function(){
    $(".updateForm .container").hide();
  })

  
  updateConfirm.addEventListener('click',function(){
    console.log(testId)
    var updateConfirm=document.getElementById("updateConfirm");

      const tcategoryInput = document.getElementById('upCategory1').value
      const tnameInput = document.getElementById('upname1').value
      const tpriceInput = document.getElementById('upPrice1').value
      const taboutInput = document.getElementById('upexampleFormControlTextarea1').value
      const tminInput = document.getElementById('upmin1').value
      const tmaxInput = document.getElementById('upmax1').value
      // const tvisitInput = document.getElementById('upflexCheckChecked1')
    //  const tvisitInput =checked = (visit ==='true')
  const params = {
  name: tnameInput,
  description:taboutInput,
  min: tminInput,
  max: tmaxInput,
  // homeVisit: tvisitInput,
  category: tcategoryInput,
  price: tpriceInput
}
var url = new URL('http://localhost:3000/updateTest/'+testId,);
    fetch(url,  {
    method: 'PATCH',
    body :JSON.stringify(params), 
    headers:{ 
        'Content-Type': 'application/json'  
    }
     })
    .then((res)=>res.json())
     })
     
     
}

updateConfirm.addEventListener('click',function(){
  $(".updateForm .container").hide();
  document.location.reload()
 })


addBtn.addEventListener('click',function(){
  $(".addForm  .container").fadeIn(1000);
  $(".updateForm .container").hide();
  
})

addConfirm.addEventListener('click',function(){

    const category = document.getElementById('Category1').value;
    const testName = document.getElementById('name1').value;
    const price = document.getElementById('Price1').value;
    const Visit = document.getElementById('flexCheckChecked1').checked;
    const max = document.getElementById('max1').value;
    const min = document.getElementById('min1').value;
    const aboutTest = document.getElementById('exampleFormControlTextarea1').value;
    var addConfirm=document.getElementById("addConfirm1");
    var addCancle=document.getElementById("addCancle");



    const params ={
      name: testName, 
      category:category, 
      description: aboutTest, 
      price: price, 
      min: min, 
      max: max, 
      homeVisit: Visit,
  }

  console.log(params)
  $(".addForm .container").hide();
  // tests.push(params)

  fetch('http://localhost:3000/createTest/'+LabId, {
    method: 'POST', 
    body :JSON.stringify(params), 
    headers:{ 
        'Content-Type': 'application/json'  
    }
})
.then(()=>document.location.reload()) 
})


addCancle.addEventListener('click',function(){
  $(".addForm .container").hide();
  addClearIn();

})

function addClearIn(){
  name1.value="";
  Category1.value="";
  aboutTest.value="";
  Price1.value="";
  max1.value="";
  min1.value="";
  exampleFormControlTextarea1.value="";
  flexCheckChecked1.checked="";
}




var url = new URL("http://localhost:3000/getLabTests/"+LabId,);

fetch(url,  {
    method: 'GET', 
}).then((res)=>res.json())
  .then((tests)=>{
    // console.log(tests)
    const table = document.getElementById('testInfo')
        for (const test of tests) {

            const row = document.createElement('tr');

            
            row.setAttribute('id', test._id);
            row.setAttribute('name', test.name);
          

            const CategoriesCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const PriceCell = document.createElement('td');
            const AboutCell = document.createElement('td');
            const MinCell = document.createElement('td');
            const MaxCell = document.createElement('td');
            const visitCell = document.createElement('td');
            const action = document.createElement('td');
            const updateCancel=document.getElementById("updateCancel");
            const editButton = document.createElement('button')
            const deleteButton = document.createElement('button')
            const addBtn = document.getElementById("addBtn")

           

            
            const icon2= document.createElement('i')
            icon2.setAttribute('class', 'fa fa-pencil')
            editButton.setAttribute('class', 'btn2')
            editButton.appendChild(icon2)
            editButton.setAttribute('onclick', 'onEdit(this)')
            action.appendChild(editButton)



            const icon1 = document.createElement('i')
            icon1.setAttribute('class', 'fa fa-close')
            deleteButton.setAttribute('class', 'btn1')
            deleteButton.appendChild(icon1)
            deleteButton.setAttribute('onclick', 'onDelete(this)')
            action.appendChild(deleteButton)


       

  
              // const upname1 =document.getElementB("upname1");
              // const upCategory1 =document.getElementById("upCategory1");
              // const upPrice1 =document.getElementById("upPrice1");
              // const upflexCheckChecked1 =document.getElementById("upflexCheckChecked1");
              // const upmax1 =document.getElementById("upmax1");
              // const upmin1 =document.getElementById("upmin1");
              // const upexampleFormControlTextarea1 =document.getElementById("upexampleFormControlTextarea1");
            



              
           
            // addCancle.addEventListener('click',function(){
            //   $(".updateaddForm .container").hide();
            //   addClearIn();
            
            // })
            
            // function addClearIn(){
            //   upname1.value="";
            //   upCategory1.value="";
            //   upaboutTest.value="";
            //   upPrice1.value="";
            //   upmax1.value="";
            //   upmin1.value="";
            //   upexampleFormControlTextarea1.value="";
            //   upflexCheckChecked1.checked="";
            
            
            
            // }



            
            const data = {
              id: test._id, 
              name: test.name, 
              category: test.category, 
              description: test.description, 
              price: test.price, 
              min: test.min, 
              max: test.max, 
              homeVisit: test.homeVisit
          }

          // console.log(data.name)

          // onAddPressed.setAttribute('onclick', 'onAddPressed(this)')
          // action.appendChild(onAddPressed)

         
     


          console.log(data)


         
        



            const textarea = document.createElement('textarea');
             textarea.appendChild(document.createTextNode(test.description)); 
             textarea.setAttribute('class', 'textarea');
 

            CategoriesCell.textContent = test.category;
            nameCell.textContent = test.name;
            PriceCell.textContent = test.price;
            MinCell.textContent = test.min;
            MaxCell.textContent = test.max;
            visitCell.textContent = test.homeVisit;




           
            AboutCell.appendChild(textarea);
            row.appendChild(CategoriesCell);
            row.appendChild(nameCell);
            row.appendChild(PriceCell);
            row.appendChild(AboutCell);
            row.appendChild(MinCell);
            row.appendChild(MaxCell);
            row.appendChild(visitCell);
            row.appendChild(action);
            table.appendChild(row);
          }

})

