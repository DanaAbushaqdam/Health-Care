const days = ['sunday', 'monday', 'tuesday']
const homeTimes = ['9:00-9:30', '9:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', 
               '12:00-12:30', '12:30-1:00', '1:00-1:30', '1:30-2:00', '2:00-2:30', '2:30-3:00', 
               '3:00-3:30', '3:30-4:00']
const labTimes = ['9:00-9:10', '9:10-9:20', '9:20-9:30', '9:30-9:40', '9:40-9:50', '9:50-10:00', 
                 '10:00-10:10', '10:10-10:20','10:20-10:30', '10:30-10:40', '10:40-10:50', '10:50-11:00', 
                 '11:00-11:10', '11:10-11:20','11:20-11:30', '11:30-11:40', '11:40-11:50', '11:50-12:00', 
                 '12:00-12:10', '12:10-12:20','12:20-12:30', '12:30-12:40', '12:40-12:50', '12:50-1:00', 
                 '1:00-1:10', '1:10-1:20','1:20-1:30', '1:30-1:40', '1:40-1:50', '1:50-2:00', 
                 '2:00-2:10', '2:10-2:20','2:20-2:30', '2:30-2:40', '2:40-2:50', '2:50-3:00', 
                 '3:00-3:10', '3:10-3:20','3:20-3:30', '3:30-3:40', '3:40-3:50', '3:50-4:00']

var allTimesHome = []


days.forEach((day)=>{
    homeTimes.forEach((time)=>{
        allTimesHome.push(day + ' '+ time)
    })
})
var allTimesLab = []
days.forEach((day)=>{
    labTimes.forEach((time)=>{
        allTimesLab.push(day + ' '+ time)
    })
})

const labId = window.localStorage.getItem('id')
var unavailableTimes = []



var url = new URL("http://localhost:3000/getSpeceficLab/"+labId);

fetch(url,  {
    method: 'GET', 
}).then((res)=>res.json())
  .then((data)=>{
    unavailableTimes = data.unavailableTime 
    const availableTimesHome = allTimesHome.filter((time)=> { return !unavailableTimes.includes(time)})
    // console.log(availableTimesHome)
    const availableTimesLab = allTimesLab.filter((time)=> { return !unavailableTimes.includes(time)})
    const labTimesSelect = document.getElementById('labTimes')

    availableTimesHome.forEach((time)=>{
        const choice = document.createElement('option')
        choice.value = time
        choice.text = time
        labTimesSelect.appendChild(choice)
    })
      const homeTimesSelect = document.getElementById('homeTimes')
      availableTimesLab.forEach((time)=>{
        const choice = document.createElement('option')
        choice.setAttribute('value', time)
        choice.textContent = time
        homeTimesSelect.appendChild(choice)
    })
})


const onSetHomeTimesPressed = (target) => {
    for (var option of document.getElementById('homeTimes').options)
    {
        if (option.selected) {
            console.log(option.value)
            fetch('http://localhost:3000/addUnavailableTimeForLab/'+labId, {
                method: 'PUT', 
                headers:{ 
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify({time: option.value})
            }).then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                document.location.reload()

            })
        }
    }
}

const onSetLabTimesPressed = (target) => {
    for (var option of document.getElementById('labTimes').options)
    {
        if (option.selected) {
            console.log(option.value)
            fetch('http://localhost:3000/addUnavailableTimeForLab/'+labId, {
                method: 'PUT', 
                headers:{ 
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify({time: option.value})
            }).then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                document.location.reload()

            })
            
        }
    }
}


