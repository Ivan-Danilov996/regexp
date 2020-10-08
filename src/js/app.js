// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export default class Validator {
    constructor(name) {
        this.name = name;
    }


    validateUsername() {
        if (/^[a-zA-Z]+[a-zA-Z\d_-]+[a-zA-Z]$/.test(this.name)) {
            return !/[\d]{4,}/.test(this.name)
        }
        return false
    }
}


const name = new Validator('ivan9j-h_j---mmmm9999k')

console.log(name.validateUsername())