# facebook-selenium-tests

This project is a Selenium-based testing framework for Facebook login functionality, utilizing a Behavior-Driven Development (BDD) approach with Cucumber.

## Project Structure

```
facebook-selenium-tests
├── src
│   ├── pages
│   │   └── loginPage.js
│   ├── tests
│   │   └── loginTest.js
│   └── features
│       ├── login.feature
│       └── step_definitions
│           └── loginSteps.js
├── pom.xml
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd facebook-selenium-tests
   ```

2. **Install dependencies:**
   - Ensure you have Node.js and npm installed.
   - Run the following command to install the necessary npm packages:
     ```
     npm install
     ```

3. **Maven Setup:**
   - Ensure you have Maven installed on your machine.
   - You can build the project using:
     ```
     mvn clean install
     ```

## Running Tests

To execute the tests, use the following command:
```
mvn test
```

This will run all the tests defined in the `src/tests/loginTest.js` file.

## Features

- **Login Functionality Testing:** The project includes tests for both valid and invalid login scenarios.
- **BDD Approach:** The use of Cucumber allows for clear and understandable test scenarios written in Gherkin syntax.

## Contributing

Feel free to submit issues or pull requests for any enhancements or bug fixes. 

## License

This project is licensed under the MIT License.