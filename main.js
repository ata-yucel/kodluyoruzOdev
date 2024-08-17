let clock = document.querySelector('#myClock')
let name = document.querySelector('#myName')

let getName = prompt('What is your name?')

name.innerHTML = getName

function showTime() {
    let clockElement= document.querySelector('#myClock')

  let date = new Date()

  let hour = date.getHours().toString().padStart(2, '0')
  let minute = date.getMinutes().toString().padStart(2, '0')
  let second = date.getSeconds().toString().padStart(2, '0')
  const day = date.toLocaleString('tr-TR', { weekday: 'long' })

  const stringTime = `${hour}:${minute}:${second} `
const stringDay = `${day}`
  clockElement.innerHTML = `${stringTime} : ${stringDay}`

setTimeout(showTime, 1000)
}

showTime()