
const loginForm = (req,res) => {
    res.render('auth/login', {
        authenticated: true
    })
}

const registerForm = (req,res) => {
    res.render('auth/register', {
        authenticated: false
    })
}

export {
    loginForm,
    registerForm
}