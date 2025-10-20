// function login(password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             password: ("1234")
//                 ? ("login successfully!")
//                 : ("access denied!");
//         }, 2000);
//     });
// }
// login("1234")
//     .then(console.log)
//     .catch(console.log);

//Fetching user data.
function getUser() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id: 1, name: "Thicien" }), 1000)
  );
}

function getPosts(userId) {
  return new Promise(resolve =>
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000)
  );
}

getUser()
  .then(user => getPosts(user.id))
  .then(posts => console.log("Posts:", posts))
  .then(posts => console.log(posts.length));
// position found
  function position(letter) {
  let position = letter.charCodeAt(0) - 96;
  return `Position of alphabet: ${position}`;
}
