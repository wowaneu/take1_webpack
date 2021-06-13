
const user = {
    fName: 'Jim',
    lName: 'Beam',
    age: 40,
    getFullName: function() {
        return `${this.fName} ${this.lName}`
    }
}

document.querySelector('h1 span').textContent = user.getFullName()