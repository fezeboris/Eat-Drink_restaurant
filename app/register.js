let lname = document.getElementById('lname')
let fname = document.getElementById('fname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confPassword = document.getElementById('confPassword')
let spassword
let townVal

let submit = document.getElementById('submit')
submit.addEventListener('click', function (event) {
  spassword = password.value

  event.preventDefault()
  if (lname.value == '') {
    let err = document.getElementById('lnameError')
    err.innerHTML = 'Invalid surname'
    setTimeout(() => {
      err.innerHTML = ''
    }, 5000)
  } else if (fname.value == '') {
    let err = document.getElementById('fnameError')
    err.innerHTML = 'Invalid Name'
    setTimeout(() => {
      err.innerHTML = ''
    }, 5000)
  }
  else if (spassword.length < 8) {
    let emailErr = document.getElementById('emailErr')
    emailErr.innerHTML = 'Password must be more than 8 characters'
    setTimeout(() => {
      emailErr.innerHTML = ''
    }, 5000)
  } else if (spassword != confPassword.value) {
    let conpassErr = document.getElementById('conpassErr')
    conpassErr.innerHTML = 'password is not the same as confirm password'
    setTimeout(() => {
      conpassErr.innerHTML = ''
    }, 5000)
  } else {
    let radioSection = document.getElementsByName('town')

    for (let i = 0; i < radioSection.length; i++) {
      if (radioSection[i].checked) {
        townVal = radioSection[i].value
        console.log('Town:', townVal)
      }
    }
    console.log('Last Name:', lname.value)
    console.log('First Name:', fname.value)
    console.log('Password:', password.value)
    // console.log('Town :', townVal)
    lname.value = ''
    fname.value = ''
    password.value = ''
  }
})
