# Airbnb Clone

Today we start a **1 week group project** in which we will try to create a working *clone of Airbnb*.

Keep in mind:
- One week is not enough to complete a real airbnb clone project
- it's the first time that you work in a team as web developers

This said, it's really important to try to create a clear schema of how you want to proceed and to *define a basic goal*.

This goal is to have a *working application* with the **basic features** that make the App worth using. This is called an **MVP** (Minimum Viable Product)

If you finish the MVP before the end of the week you can add more features to it.

# Steps for Day 1

Today it is really important to *define the main features* of the MVP.

If we have a *clear goal*, divided in *tasks* and we have defined the *roles of the team*, it will be *easy to work well together*.

If the tasks, the roles and the main features aren't clear, it will be really difficult to work together and create a working App.

## Before we start: Define the Roles

Define the roles of the team:

- **Project manager**, makes sure that the tasks are well defined on Trello and that everyone knows which tasks they have for the day
- **Code reviewers**, checks all the pull requests and merges them (2 poeple)
- **Design Manager**, is responsible for choosing the colors and the design rules that all the frontend pages have to follow

## Step 1: User stories - all together

Define the **main features** of the MVP through *User Stories*.

User stories:
- [ ] A user can see all flats
- [ ] A user (owner) can post a flat
- [ ] A user can book a flat
- [ ] A user (owner) can see all bookings

While you brainstorm them, add them in this [spreadsheet](https://docs.google.com/spreadsheets/d/1ZNoi2V8uFD_LU0BCaTMZ6tTHmiF45AOOfwYZfkYLSoQ/edit?usp=sharing)

Once you defined them ask a teacher to review them together.

## Step 2: Figma - all together

Based on the User Stories, create a basic design on **figma** and make it into a **prototype**.

Once you are done ask a teacher to review it together.

## Step 3: DB Design - all together

Based on the main features and the figma, create the **DB schema design** on https://draw.io/.

Once you are done ask a teacher to review it together.

## Step 4: Trello - all together

Create the Trello board with the user stories, the tasks and the roles of the team.

You can start by using this [template](https://trello.com/b/5kjBfYGZ)

Once you are done ask a teacher to review it together.

Every day you will have to review the tasks and add/modify tasks.

## Step 5

One person needs to create the Airbnb-clone App with the command:

```bash
cd ~/code/YOUR_GITHUB_USERNAME
yarn create next-app -e https://github.com/PowerCoders-Milan/airbnb-clone airbnb-clone
cd airbnb-clone
```

Add the *link to the trello* board in the **Readme** and the *DB schema* in the **database folder**.

Then push it to Github and add all the team-members as collaborators of the project.

```bash
gh repo create --public --push --source=. # will create a public repo on GitHub
```


## Step 6

Create the **migrations** and the **models** for the application.

## Step 7

Start creating **all the pages** that you need with inside **just an h1** with the name of the page.

Do **not** add any code to them except fot the h1.

For example the first page would be `pages/index.js` and it will show `<h1>Homepage<h1/>`.

## Step 8

Create buttons in the pages to **connect all the pages** together like a prototype.

# Conclusion of the day

At the end of the day make sure that everything is pushed to a branch on github.

If you have time you can also start *merging the different branches* on **master**. Otherwise leave it to the next day and add it as a task to the Trello board.

In the beginning of the day after you will discuss the tasks to be done and assign tasks to the members.
