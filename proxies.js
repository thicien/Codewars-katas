const eleve = {
    name: 'Kimomo', age: 56
};
const myProfile = new Proxy(eleve, {
    set(target, prop, value) {
        if (prop === age && typeof value !== 'number') {
            throw new Error('the age must be a number')
        }
        target[prop] = value;
        return true;
    }
});
myProfile.age = 56;

//Password encryption
const encryption = {
    admin: 'kalisa', password: 1234;
}
const secure = new Proxy(encryption, {
    get(target, prop) {
        if (prop === password) {
            return ('access denied!');
        }
        target[prop];
    }
});
encryption.password;