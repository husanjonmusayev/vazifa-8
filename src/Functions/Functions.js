// validate function

export function validate(username, email, password) {
  if (!username.current.value) {
    username.current.style.borderBottomColor = "red";
    alert("Username bo'lishi shart");
    username.current.focus();
    return false;
  } else {
    username.current.style.borderBottomColor = "rgb(100, 99, 99)";
  }

  if (!email.current.value) {
    email.current.style.borderBottomColor = "red";
    alert("Email bo'lishi shart");
    email.current.focus();
    return false;
  } else {
    email.current.style.borderBottomColor = "rgb(100, 99, 99)";
  }

  if (!password.current.value) {
    password.current.style.borderBottomColor = "red";
    alert("Email bo'lishi shart");
    password.current.focus();
    return false;
  } else {
    password.current.style.borderBottomColor = "rgb(100, 99, 99)";
  }
  return true;
}

//   clear function

export function Clear(username, password) {
  username.current.value = "";
  email.current.value = "";
  password.current.value = "";
}

// validate function

export function validateLogin(username,  password) {
  if (!username.current.value) {
    username.current.style.borderBottomColor = "red";
    alert("Username bo'lishi shart");
    username.current.focus();
    return false;
  } else {
    username.current.style.borderBottomColor = "rgb(100, 99, 99)";
  }

  if (!password.current.value) {
    password.current.style.borderBottomColor = "red";
    alert("Email bo'lishi shart");
    password.current.focus();
    return false;
  } else {
    password.current.style.borderBottomColor = "rgb(100, 99, 99)";
  }
  return true;
}


//   clear function

export function ClearLogin(username, password) {
  username.current.value = "";
  password.current.value = "";
}