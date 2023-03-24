const person = {
  name: ['ニョロ', 'ぷい'],
  age: 26,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};
person.age = 15;

console.log(person.age);
person.getFullName();