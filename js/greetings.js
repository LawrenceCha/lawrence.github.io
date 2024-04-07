document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#login-form");
    const loginInput = loginForm.querySelector("input");
    const loginButton = document.querySelector("#login-button");
    const logoutButton = document.querySelector("#logout-button");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    function onLoginSubmit(event) {
        event.preventDefault();
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        logoutButton.classList.remove(HIDDEN_CLASSNAME);
    }

    function paintGreetings(username) {
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    function handleLogout() {
        localStorage.removeItem(USERNAME_KEY);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        logoutButton.classList.add(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername) {
        paintGreetings(savedUsername);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        logoutButton.classList.remove(HIDDEN_CLASSNAME);
    } else {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        logoutButton.classList.add(HIDDEN_CLASSNAME);
    }

    loginForm.addEventListener("submit", onLoginSubmit);
    logoutButton.addEventListener("click", handleLogout);
  });