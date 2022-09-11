//Race number

let raceNumber = Math.floor(Math.random() * 1000); //generate a random number (0 - 1000)

let early = true
let age = 16

if(early && age >= 18){
  raceNumber += 1000
  console.log(`Your race will be at 9:30 am, and your race number is: ${raceNumber} `)
}else if(early == false && age  >= 18){
  raceNumber += 1000
  console.log(`Your race will be at 11:00 am, and your race number is: ${raceNumber} `)
}else{
  console.log(`Your race will be at 12:30 pm, and your race number is: ${raceNumber}`)
}



