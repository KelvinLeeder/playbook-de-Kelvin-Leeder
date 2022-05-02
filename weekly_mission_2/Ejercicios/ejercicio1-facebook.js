
const user ={
    user: 'Kelvin Brayloswky',
    username: 'Kelvin',
    age: 26,

    getDatos: function(){
        return `User:${this.user}, Username:${this.username}, Age:${this.age}`
    }


}

console.log('This is my data in the social network Facebook:')
console.log(user.getDatos())

const biography = {
    friends: 200,
    post: 80,
    pictures: 30,

    getbiography: function(){
        return `Friends: ${this.friends}, Post:${this.post}, Pictures${this.pictures}`
    }
    
}

console.log('Biography information:')
console.log(biography.getbiography())








