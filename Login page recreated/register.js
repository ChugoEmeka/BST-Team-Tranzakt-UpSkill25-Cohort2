document.addEventListener('DOMContentLoaded', () => {

    // ---------- TAB SWITCHING ----------
    const signinTab = document.getElementById('signin-tab');
    const registerTab = document.getElementById('register-tab');
    
    const signinForm = document.getElementById('signin-form');
    const registerForm = document.getElementById('register-form');
    
    const registerLink = document.getElementById('register-link');

    function switchTab(tab) {
        if (tab === "signin") {
            signinTab.classList.add("active");
            registerTab.classList.remove("active");

            signinForm.classList.add("active");
            registerForm.classList.remove("active");
        } 
        else {
            registerTab.classList.add("active");
            signinTab.classList.remove("active");

            registerForm.classList.add("active");
            signinForm.classList.remove("active");
        }
    }

    signinTab.addEventListener("click", () => switchTab("signin"));
    registerTab.addEventListener("click", () => switchTab("register"));
    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchTab("register");
    });

    // ---------- PASSWORD TOGGLE ----------
    const passwordToggles = document.querySelectorAll('.toggle-password');
    passwordToggles.forEach(btn => {
        btn.addEventListener("click", () => {
            const input = btn.previousElementSibling;
            if (input) {
                input.type = input.type === "password" ? "text" : "password";
            }
        });
    });

    // ---------- SOCIAL LOGIN BUTTONS ----------
    const googleBtns = document.querySelectorAll('.google-btn');
    const facebookBtns = document.querySelectorAll('.facebook-btn');

    googleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open('https://accounts.google.com/signin', '_blank');
        });
    });

    facebookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open('https://www.facebook.com/login', '_blank');
        });
    });

    // ---------- FORM SUBMISSION PLACEHOLDER ----------
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        console.log("Sign In Submitted:", email, pass);
        // Example: window.open("dashboard.html", "_blank");
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('fullname').value;
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-password').value;
        const confirmPass = document.getElementById('confirm-password').value;
        console.log("Register Submitted:", name, email, pass, confirmPass);
        // Example: window.open("welcome.html", "_blank");
    });

});
