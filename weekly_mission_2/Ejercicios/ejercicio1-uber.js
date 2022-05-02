const profile ={
    user: 'Kelvin ',
    username: 'Kelvin Leeder',
    age: 26,
    rating: 4.88,

    getDatos: function(){
        return `User:${this.user}, Username:${this.username}, Age:${this.age}, rating:${this.rating}`
    }

}
console.log('This is my data in Uber:')
console.log(profile.getDatos())


const travel ={
    address1: 'Viad. Rio de la piedad 551, CDMX',
    address2: 'Viad. Rio de la piedad 260, CDMX',
    fare: '$49.00',
    time: '12 minutes',

    gettravel: function(){
        return `Address1: ${this.address1} and Address2: ${this.address2}
        fare: ${this.fare}, time: ${this.time}`

    }

}

console.log("The travel information in Uber is: ")
console.log(travel.gettravel())



