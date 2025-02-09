# OrangeHRM Demo Automation Framework

## Overview
OrangeHRM Demo Automation Framework is a test automation framework developed for the OrangeHRM demo site. It is built using Playwright with JavaScript to ensure efficient and scalable test automation for web applications. The framework is designed to support end-to-end testing, functional testing, and regression testing.

## Features
- **Playwright** for browser automation
- **JavaScript/TypeScript** for test scripting
- **Page Object Model (POM)** for maintainable and reusable test scripts
- **Parallel Execution** for faster test runs
- **Cross-browser testing** support
- **Visual Regression Testing** capabilities

## Prerequisites
Ensure the following are installed on your system:

1. **Node.js (LTS version)**
   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation:
     ```sh
     node -v
     ```
2. **Playwright** (Installed via npm)
   - Install Playwright and browsers:
     ```sh
     npm install -D @playwright/test
     npx playwright install
     ```
3. **Visual Studio Code / JetBrains WebStorm** (Recommended IDEs)

## Project Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-repository/orangehrmdemositeautomation.git
cd orangehrm-playwright-automation
```

### 2. Install Dependencies
Ensure all dependencies are installed:
```sh
npm install
```

### 3. Configure Environment
Set up environment variables in `.env` or `playwright.config.ts`:
```ts
const config = {
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    headless: true,
    browserName: 'chromium',
  },
};
export default config;
```

### 4. Run Tests
- **Run all tests**
  ```sh
  npx playwright test
  ```
- **Run a specific test**
  ```sh
  npx playwright test tests/login.test.ts
  ```
- **Run tests in headed mode**
  ```sh
  npx playwright test --headed
  ```
- **Run tests in parallel**
  ```sh
  npx playwright test --workers=4
  ```

### 5. Generate Reports
- **View HTML Reports**
  ```sh
  npx playwright show-report
  ```

## Technologies Used
- **Playwright**
- **JavaScript**
- **Node.js**
- **ESLint & Prettier** (for code formatting)

