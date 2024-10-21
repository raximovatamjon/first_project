//OBYEKTLAR USTIDA AMALLAR
let user = {
  firstname: 'atamjon',
  lastname: 'Baxronov',
  age: 15,
  "ish joyi": "it park",
  12:"O'n ikki",
  getYear: function () {
      return 2023 - this.age
  }
}
//user.lastname = 'Toxirov'

// let newuser = {
//     firstname: user.firstname,
//     lastname: 'Toxirov',
//     age:user.age,
//     "ish joyi": user['ish joyi'],
//     12: user[12]
// };

let newuser = Object.assign({}, user, {login: 'admin'})
newuser.age = 20

// for (let key in newuser) {
//     console.log(key + 'kalitining qiymati' + newuser[key] + 'ga teng');
// };


// for (let key in newuser)  {
//     console.log(key + 'kalitining qiymati' + newuser[key] + 'ga teng');
// }
let users = []
function createUser(fish, age) {
  return {
      fish,
      age
  }
}

let f = document.forms[0]

f.addEventListener('submit', (e)=>{
  e.preventDefault()
  let u = createUser(f.fish.value, f.age.value)

  console.log(u);
})