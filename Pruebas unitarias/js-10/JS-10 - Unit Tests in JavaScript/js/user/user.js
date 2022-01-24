class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    equalsTo(user){
        return user.id === this.id;
    }

  }

// let user = new User(2244,"Lily", "lily@generation.org");
// console.log(user);

module.exports = User;