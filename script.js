const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNMAE_KEY = "username";

function onSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNMAE_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);

};

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
};

loginForm.addEventListener("submit", onSubmit);

const saveUsername = localStorage.getItem(USERNMAE_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(saveUsername);
}
