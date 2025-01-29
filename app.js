let users = [];

function showRegister() {
    const loginRegister = document.getElementById('login-register');
    loginRegister.style.opacity = 0;
    setTimeout(() => {
        loginRegister.style.display = 'none';
        const register = document.getElementById('register');
        register.style.display = 'block';
        setTimeout(() => {
            register.style.opacity = 1;
        }, 10);
    }, 1000); // Tiempo de la animación
}

function showLogin() {
    const register = document.getElementById('register');
    register.style.opacity = 0;
    setTimeout(() => {
        register.style.display = 'none';
        const loginRegister = document.getElementById('login-register');
        loginRegister.style.display = 'block';
        setTimeout(() => {
            loginRegister.style.opacity = 1;
        }, 10);
    }, 1000); // Tiempo de la animación
}

function showMessage(text) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerText = text;
    messageContainer.style.display = 'block';
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 1000); // Mensaje visible por 3 segundos
}

function register() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    users.push({ username, password });
    showMessage('Registro exitoso');
    showLogin();
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        showMessage('Login exitoso');
        const loginRegister = document.getElementById('login-register');
        loginRegister.style.opacity = 0;
        setTimeout(() => {
            loginRegister.style.display = 'none';
            const gameContainer = document.getElementById('game-container');
            gameContainer.style.display = 'block';
            setTimeout(() => {
                gameContainer.style.opacity = 1;
                showLoader(); // Mostrar animación de carga
                setTimeout(() => {
                    showVideo(); // Mostrar video después de 3 segundos
                }, 3000);
            }, 10);
        }, 1000); // Tiempo de la animación
    } else {
        showMessage('Usuario o contraseña incorrectos');
    }
}

function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
}

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
}

function showVideo() {
    hideLoader();
    const gameContainer = document.getElementById('game-container');
    gameContainer.style.opacity = 0;
    setTimeout(() => {
        gameContainer.style.display = 'none';
        const videoSection = document.getElementById('video-section');
        videoSection.style.display = 'block';
        setTimeout(() => {
            videoSection.style.opacity = 1;
        }, 10);
    }, 1000); // Tiempo de la animación
}

// Mostrar login después de la animación de bienvenida
window.onload = function() {
    setTimeout(() => {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.style.opacity = 0;
        setTimeout(() => {
            welcomeMessage.style.display = 'none';
            const loginRegister = document.getElementById('login-register');
            loginRegister.style.display = 'block';
            setTimeout(() => {
                loginRegister.style.opacity = 1;
            }, 10);
        }, 1000); // Tiempo para la animación de bienvenida
    }, 3000); // Ajusta el tiempo si es necesario
}
