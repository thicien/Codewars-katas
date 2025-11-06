function validatePassword(password) {
  if (password.length < 6) {
    return " Password must be at least 6 characters long.";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!/[A-Z]/.test(password)) {
    return " Password must contain at least one uppercase letter.";
  }

  if (!/\d/.test(password)) {
    return " Password must contain at least one digit.";
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    return " Password can only contain letters and digits (no symbols or underscores).";
  }

  return " Password is valid!";
}



// const REGEXP = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/;

function validatePassword(password) {
  
  if (password.length < 6) {
    return "The password must contain at least six characters";
  }
  if (!/[A-Z]/.test(password)) {
    return "The password must contain at least one uppercase";
  }
  if (!/[a-z]/.test(password)) {
    return "The password must contain at least one lowercase";
  }
  if (!/\d/.test(password)) {
    return "The password must contain at least one digit";
  }
  if (/[^A-Za-z0-9]/.test(password)) {
    return "The password must contains only digits and letters not other symbols";
  }
  return "The password is valid";
}

console.log(validatePassword('Abcd231')); 
console.log(validatePassword('3457231')); 
console.log(validatePassword('Abcd2@#')); 
console.log(validatePassword('Abcd231')); 
console.log(validatePassword('SFHAUT'));  
console.log(validatePassword('Abcd2H'));