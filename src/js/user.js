const user = {
    fName: 'Jim',
    lName: 'Beam',
    age: 40,
    getFullName: function() {

        return `${this.fName} ${this.lName}`
    }
}

const person = {
    fName: 'Mary',
    lName: 'Smith',
    age: 25,
    getFullName: function() {

        return `${this.fName} ${this.lName}`
    }
}

  

export default user
export {person}