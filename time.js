function zero(x){
        if(x<10){
          return  x = "0"+x
        }
        else{
           return x = x
        }
}


let days = document.getElementById("day")
let hour = document.getElementById("hr")
let minutes = document.getElementById("min")
let second = document.getElementById("sec")

const  lunchtime = new Date("2025-07-10T10:00:00")
let aaa = setInterval(() => {
    const now = new Date()
    const time = lunchtime-now
  if(time <=0){
    clearInterval(aaa)
  }

  let day = Math.floor(time/(1000*60*60*24));

  let hr =  Math.floor((time%(1000*60*60*24))/(1000*60*60));

  let min =  Math.floor((time%(1000*60*60))/(1000*60));
  let sec = Math.floor((time%(1000*60))/1000)


days.innerHTML = zero(day+7)
days.style.fontSize = "90px"
hour.innerHTML = zero(hr)
hour.style.fontSize = "90px"
minutes.innerHTML = zero(min)
minutes.style.fontSize = "90px"
second.innerHTML = zero(sec)
second.style.fontSize = "90px"
  

},1000)

