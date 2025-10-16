//Password encryption
const confidential = {
  name: "Admin",
  password: "12345"
};

const secure = new Proxy(confidential, {
  get(target, prop) {
    if (prop === "password") {
      return "Access Denied 🔒";
    }
    return target[prop];
  }
});

console.log(secure.password); 
