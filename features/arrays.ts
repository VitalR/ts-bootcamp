// const carMakers: string[] = ['ford', 'toyota', 'chevy']
const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake = [
    ['f150'],
    ['cololla'],
    ['camaro']
]

// Help with inference when extracting values
const car1 = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(100)

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toLocaleUpperCase();
})

// Flexible types
// const importantDates = [new Date(), '2030-10-10']
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10')
importantDates.push(new Date())
importantDates.push(100)







