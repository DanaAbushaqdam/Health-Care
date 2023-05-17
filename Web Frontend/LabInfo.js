const LabId = window.localStorage.getItem('id')
console.log(LabId)

var url = new URL("http://localhost:3000/getSpeceficLab/"+LabId,);

fetch(url,  {
    method: 'GET', 
}).then((res)=>res.json())
  .then((labs)=>{
    // console.log(tests)
    const nameinput=  document.getElementById('name')
    const managerinput=  document.getElementById('manager')
    const phoneinput=  document.getElementById('phone')
    const mailinput=  document.getElementById('mail')
    const aboutinput=  document.getElementById('about')
    const locatoninput=  document.getElementById('location')
    const open=  document.getElementById('opentime')
    const close=  document.getElementById('closetime')


    
    
    nameinput.setAttribute('value',labs.name)
    managerinput.setAttribute('value',labs.ownerName)
    phoneinput.setAttribute('value',labs.phone)
    mailinput.setAttribute('value',labs.email)
    locatoninput.setAttribute('value',labs.location)
    aboutinput.textContent=(labs.about)
    open.setAttribute('value',labs.openTime)
    close.setAttribute('value',labs.closeTime)



    const rating= labs.rating
    for(var i=1 ; i<=rating; i++)
{
    const star = document.getElementById(i)
    star.checked = true

}
console.log(rating)



  })


    

