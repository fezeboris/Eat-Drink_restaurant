let loginEmail = document.getElementById('loginEmail')
let loginPassword = document.getElementById('loginPassword')

function handleSubmit(event){
    event.preventDefault()
    if (loginEmail.value == "") {
        let logparaErr = document.getElementById('logparaErr')
        logparaErr.innerHTML = 'Email feild empty'
        setTimeout(() => {
            logparaErr.innerHTML = ''
          }, 5000)
    } else if (loginPassword.value == "") {
        let logpassErr = document.getElementById('logpassErr')
        logpassErr.innerHTML = 'Invalid password'
        setTimeout(() => {
            logpassErr.innerHTML = ''
          }, 5000)
    } else {
        console.log('Email:',loginEmail.value, )
        console.log('Password:', loginPassword.value,)
        loginEmail.value = ''
        loginPassword.value = ''
    }

}
