class Person {
    constructor(cus, pic, sik) {
        this.cus = cus
        this.pic = pic
        this.sik = sik
    }

    shooters() {
        console.log(`oranin tam bir ${this.pic} fiyatinda da ${this.cus} ve ${this.sik}nde 15 cm gerileme `)
    }
}

class Niggers extends Person {
    constructor(cus, pic, sik, oran) {
        super(cus, pic, sik);
        this.oran = oran
    }

    shootersN() {
        console.log(`oranin tam bir ${this.oran} fiyatinda da ${this.cus} ve ${this.sik}nde 15 cm gerileme `)
    }

}

let nigers = new Niggers("z", "s", "sa", "d")

console.log(nigers.shootersN)
console.log(nigers.shooters)

class Per {
    constructor() {
        this.yarrak = "yarrak"
    }


}

let instance1 = new Per()

console.log(instance1.yarrak)