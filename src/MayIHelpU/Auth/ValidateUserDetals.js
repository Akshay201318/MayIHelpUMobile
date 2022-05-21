const validateUserDetailsInSignUp = (
  username,
  email,
  password,
  setUsernameErr,
  setEmailErr,
  setPasswordErr,
) => {
  let flag = true
  // Validating the user name
  if (username === '') {
    setUsernameErr('Username should not be empty!')
    flag = false
  } else if (username.length < 6) {
    setUsernameErr('Username atleast 6 characters long!')
    flag = false
  } else {
    setUsernameErr('')
  }

  // Validating email address
  if (email === '') {
    setEmailErr('Email should not be empty!')
    flag = false
  } else if (email.length < 8) {
    setEmailErr('Please enter a valid email!')
    flag = false
  } else if (!(email.includes('@') && email.includes('.com'))) {
    setEmailErr('Please include an @ or .com in the email!')
    flag = false
  } else {
    setEmailErr('')
  }

  // Validating password
  if (password === '') {
    setPasswordErr('Please enter password!')
    flag = false
  } else {
    setPasswordErr('')
  }
  return flag
}

const validateUserDetailsInSignIn = (
  email,
  password,
  setEmailErr,
  setPasswordErr,
) => {
  let flag = true
  // Validating email address
  if (email === '') {
    setEmailErr('Email should not be empty!')
    flag = false
  } else {
    setEmailErr('')
  }

  // Validating password
  if (password === '') {
    setPasswordErr('Please enter password!')
    flag = false
  } else {
    setPasswordErr('')
  }
  return flag
}

export { validateUserDetailsInSignUp, validateUserDetailsInSignIn }
