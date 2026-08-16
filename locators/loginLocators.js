class loginLocators {

    constructor(page) {

        this.page = page;

        // Username
        this.usernameInput = page.getByPlaceholder('Username');

        // Password
        this.passwordInput = page.getByPlaceholder('Password');

        // Login button
        this.loginButton = page.getByRole('button', { name: 'Login' });

        // Forgot password
        this.forgotPasswordLink = page.getByText('Forgot your password?');

        // Login page heading
        this.loginHeading = page.getByRole('heading', { name: 'Login' });

        // Invalid credentials message
        this.invalidCredentialsMessage = page.getByText('Invalid credentials');

        // Dashboard heading
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    }
}

module.exports = loginLocators;