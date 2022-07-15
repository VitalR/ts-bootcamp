class Vehicle {
    // color: string

    constructor(public color: string) {
        // this.color = color
    }

    // drive(): void {
    //     console.log('chugga chugga')
    // }

    protected honk(): void {
        console.log('beep')
    }
}

class CarOne extends Vehicle {
    constructor(public wheels: number, public color: string) {
        super(color)
    }

    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)
// // vehicle.honk()


const carOne = new CarOne(4, 'red')
// carOne.startDrivingProcess()
// carOne.honk()

