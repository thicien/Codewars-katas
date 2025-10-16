//Password encryption
const confidential = {
  name: "Admin",
  password: "12345"
};

const secure = new Proxy(confidential, {
  get(target, prop) {
    if (prop === "password") {
      return "Access Denied";
    }
    return target[prop];
  }
});

console.log(secure.password);
//salary encryption
const boss = {
  name: "Mr. Thicien",
  salary: 50000
};

const assistant = new Proxy(boss, {
  get(target, prop) {
    if (prop === "salary") {
      return "These information are confidential";
    }
    return target[prop];
  }
})
console.log(assistant.name);
console.log(assistant.salary);
