let honda = ['Civic', "Honda", 1989]

let otherCar = {
  make: "Honda",
  model: 'Civic',
  year: 1989,
  engine: {
    valves: 16,
    displacement: 2.2,
    runs: false,
    parts: ['muffler', 'air intake', 'turbo']
  }
}

// console.log(otherCar.make.length)
// console.log(otherCar.engine.runs)
// console.log(otherCar.engine.parts)

let parts = otherCar.engine.parts
// console.log(parts)

// for (let i = 0; i < parts.length; i++) {
//   console.log(parts[i])
// }

const dog = new Object()
// console.log(dog)

dog.name = 'Spike'
// console.log(dog)

// "Dot notation"
dog.food = ['trash', 'chow', 'homework']
// console.log(dog)

// Bracket Notation
let tricks = ['sit', 'heel', 'roll over']

// dog[tricks] = ['sit', 'heel', 'roll over']
dog['tricks'] = tricks
// console.log(dog)

dog.nickname = 'pups'
// console.log(dog)

dog.nickname = 'Rover'
// console.log(dog)

delete dog.tricks
// console.log(dog)

// Method
dog.woof = () => console.log("Let me out!")

// dog.woof()
// console.log(dog)
dog.woof = food => console.log(food)
// dog.woof('meat')

let address = '3456 Scooter Lane'

const house = {
  floors: 2,
  rooms: 4,
  address: '1234 Woodchuck Way',
  doorSlam: function () {
    console.log("Slam!!!!")
  },
  momSays() {
    console.log("Don't slam the door!!!")
  },
  myAddress() {
    console.log(`I live at ${this.address}`)
  }
}
// house.myAddress()
// house.dogOutSide()

// house.doorSlam()
// house.momSays()

function dogOutSide() {
  console.log('Let me out')
}

house.dogOutSide = dogOutSide
// house.dogOutSide()

// Constructor Function 

const Car = function(model, make, color) {
  this.manufacture = model
  this.make = make 
  this.color = color 
}

const steveCar = new Car("Ford", "Taurus", 'white')
// console.log(steveCar)

const edwinCar = new Car('Tesla', 'M3', 'black')
// console.log(edwinCar)

const pizza = {
  sauce: 'tomatoe',
  cheese: true,
  crust: 'NYC thin crust',
  toppings: ["anchovies", 'pepperoni', 'peppers', 'mushrooms']
}

// for (let key in pizza) {
//   console.log(key)
//   // console.log(pizza[key])
//   console.log(pizza[key])
// }

let keys = Object.keys(pizza)
// console.log(keys)

let values = Object.values(pizza)
// console.log(values)

values.forEach(items => console.log(items))

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i])
}