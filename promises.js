function login(password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            password: ("1234")
                ? ("login successfully!")
                : ("access denied!");
        }, 2000);
    });
}
login("1234").then(console.log).catch(console.log);