const login = document.querySelector(".login")

const signinButton = body.querySelector("#sign-in")
const formCellWrapper = body.querySelector(".form-cell-wrapper")
const loginAccount = body.querySelector("#login_account_name")
const loginInfo = body.querySelector("#login_info")

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
function onAccountCreate(){
    formCellWrapper.style.display = "none";
    loginInfo.innerText = accountText + "님 안녕하세요🐸";
    loginInfo.classList.add("login_success");
    console.log(loginInfo)
    loginInfo.style.fontSize = "40px";
}

// eventlisner
loginAccount.addEventListener("keyup", onKeyPressAccount)
signinButton.addEventListener("click", onAccountCreate)