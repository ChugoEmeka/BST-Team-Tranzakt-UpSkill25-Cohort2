
document.addEventListener('DOMContentLoaded', () => {
    const signinTab = document.getElementById('signin-tab');
    const registerTab = document.getElementById('register-tab');
    const registerLink = document.getElementById('register-link');
    const signinForm = document.getElementById('signin-form');
    const registerForm = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.querySelector('.toggle-password');

    /**
     * Toggles the active tab and displays the corresponding form.
     * @param {string} type - 'signin' or 'register'
     */
    const setActiveTab = (type) => {
        if (type === 'signin') {
            signinTab.classList.add('active');
            registerTab.classList.remove('active');
            signinForm.classList.add('active');
            registerForm.classList.remove('active');
        } else if (type === 'register') {
            signinTab.classList.remove('active');
            registerTab.classList.add('active');
            signinForm.classList.remove('active');
            registerForm.classList.add('active');
        }
    };

    // 1. Handle Tab Switching
    signinTab.addEventListener('click', () => setActiveTab('signin'));
    registerTab.addEventListener('click', () => setActiveTab('register'));
    registerLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page jump
        setActiveTab('register');
    });

    // 2. Handle Password Visibility Toggle
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;

        // Optionally update the icon/aria-label for accessibility
        const img = togglePasswordBtn.querySelector('img');
        if (img) {
            img.alt = type === 'password' ? 'Show' : 'Hide';
            // In a real application, you'd swap the icon source here
        }
        togglePasswordBtn.setAttribute('aria-label', type === 'password' ? 'Show password' : 'Hide password');
    });

    // 3. Handle Form Submission (Placeholder - real logic goes here)
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // **Authentication Logic (e.g., AJAX call to a server) would be here.**
        console.log('Sign In Attempted');
        // Example: alert(`Signing in with Email: ${document.getElementById('email').value}`);
    });
});
