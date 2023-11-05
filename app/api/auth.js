import { Alert } from "react-native";
import users from "../db/users";

function login({email, password}) {
  let passwordIsValid;
  const user = findUser(email);

  if (user) {
    passwordIsValid = checkPassword({user, password});
  }

  if (passwordIsValid) {
    return user;
  } else {
    Alert.alert('Error', 'Invalid login details, please try again.', ['Okay']);
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
