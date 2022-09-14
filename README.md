QA Engineer Challenge
Background

### Questions:
We want to run this scenario automatically and frequently. What process/setup/tools would you choose to achieve this?
On step 5, the system is supposed to send an email. How would you check if the email was really received to the email address?
How would you test the same scenario on different screen sizes?


### Answers
1. Of course the best scenario would be to run the tests in the CICD pipeline, depending on the project (frequency of releases, frequency of code commits, team composition) we would run it either on each change or on a recurring basis.
2. I've implemented logic to check the email in my tests, but for production I would love to share my ideas on the next interview:)
3. we can run the same scenarios via methods I've added into BasePage, we can feed our tests with different screen sizes

### Decisions
1. I chose Cypress as that is the tool that's already used on the project
2. Depending where this test repo will be located (separate or as a part of the UI functionality) we might need to add other functionality like e.g. linters
3. Depending on the project details we might also break our e2e test into smaller chunks (e.g. more it-s)
4. We might also add more comments/blocks of text for test cases if we have juniors working on our tests as well
5. We would also need to implement different envs handling (with e.g. cyenv or .env)
6. I didn't feel comfortable hardcoding the instance URL in my repo (even though it's publicly available) but feel free let me know and I will add it right in for your convenience
7. I went with static methods just as a showcase, in real world scenarios we would still need to follow the classic constructor classes


### Installation
```
npm install
In the utrust/cypress-automation/config.js file set the base URL for the sandbox env
```

### Running locally

```
cy:open  --> e2e Testing 
```


