const login = document.querySelector(".login")

const loginForm = body.querySelector("#login-form")
const signinButton = body.querySelector("#sign-in")
const formCellWrapper = body.querySelector(".form-cell-wrapper")
const loginAccount = body.querySelector("#login_account_name")
const loginInfo = body.querySelector("#login_info")
const AccountName = body.querySelector("#nav-user-name")

let accountText = 0;

// eventlisner 연결
function onKeyPressAccount(event) {
    accountText = event.target.value

    if (accountText.length > 0) {
        signinButton.disabled = false;
    } else {
    signinButton.disabled = true;
    }
}
function onAccountCreate(event){
    event.preventDefault()

    const username = loginAccount.value
    AccountName.innerText = `${username} 님`;

    login.classList.add("hidden")
}

// eventlisner
loginAccount.addEventListener("keyup", onKeyPressAccount)
loginForm.addEventListener("submit", onAccountCreate)