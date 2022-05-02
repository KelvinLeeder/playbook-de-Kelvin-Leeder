
const user ={
    user: 'Kleeder_07',
    username: 'Kelvin',
    age: 26,

    getDatos: function(){
        return `User:${this.user}, Username:${this.username}, Age:${this.age}`
    }


}

console.log('This is my data in the social network Twitter:')
console.log(user.getDatos())


const trending_topic = {
    top1: 'Trump',
    top2: 'Loret',
    top3: 'Feliz Lunes',
    Top4: 'Día narajana',
    Top5: 'With you',

    gettrending: function(){
        return `${this.top1}, ${this.top2}, ${this.top3}, ${this.top4}, ${this.Top5}`
    }

}

console.log("Actually in Twitter these are the 5 trending topics: ")
console.log(trending_topic.gettrending())
