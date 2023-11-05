import users from "../db/users";

function login({email, password}) {
  let passwordIsValid;
  const user = findUser(email);

  if (user) {
    passwordIsValid = checkPassword({user, password});
  } else {
    console.log('Could not find user with that email.');
  }

  if (passwordIsValid) {
    return user;
  } else {
    return null;
  }
}

function findUser(email, userList = users) {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].email === email) {
      return userList[i];
    }
  }
  return null;
}

function checkPassword({user, password}) {
  return user.password === password;
}

export default { login };
