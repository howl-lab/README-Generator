# 09 README Generator

### The Project

It's good practice to include a good-quality README with the app when engaging with open source projects on GitHub. A README would include things about the app, like what it is for, how to use it, and other documentations.

This particular README will be generated using command-lines (thus rendering it a command-line application).


The application will be invoked by using the following command:

```bash
node index.js
```


### User Story

```md
AS A developer
I WANT to quickly generate a README
SO THAT I can efficiently have it for a new project and spend more time on the actual project
```

### Application Outline

```md
GIVEN a command-line application that accepts user input
WHEN I run 'node index'
THEN I am met with a set of listed prompts: project title, sections labeled Description, Table of Contents, Installation, Usage, Contribution, License, Credits,
Questions
WHEN I enter my project title
THEN this becomes the title of the README
WHEN I enter copy for Description, Table of Contents, Installation, Usage, Contribution, License, Credits,
Questions
THEN those becomes the content for those sections
WHEN I choose a license badge from a list
THEN a respective badge is added at the top of the README and the name of the badge becomes the content under License 
WHEN I enter a GitHub name
THEN then that is added as a link to Questions
WHEN I enter an email address
THEN that is also added as a link to Questions
WHEN I click on items in Table of Contents
THEN I am taken to the corresponding section within README
```

### Preview

The following image shows the web application's appearance and functionality:

![This application can generate a README template from a set of questions from the command-line](./assets/09-readme-homework.gif)



### Credits

* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer)

* Reference [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

* Huge help Wilson Lam, Nolan Spencer, Angie Soto, and Luigi Campbell

---

© 2022