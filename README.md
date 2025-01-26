# Personal Blog

## Description

This project is a two-page website where users can input and view blog posts. It includes a content form, dynamically rendered blog posts, and a light/dark mode toggle. Through this project, you'll gain practical JavaScript experience, explore the power of the Document Object Model (DOM), and prepare for more advanced tasks.

## Usage

The application is invoked by opening the `index.html` in a browser.

## Instructions

1. The landing page allows users to fill out a form with fields for username, blog title, and blog content. The form validates input and displays an error message if any field is left empty.

2. When the form is submitted successfully, the data is stored in `localStorage` as a JSON array of blog post objects.

3. After submission, the user is redirected to the posts page, where all blog entries are displayed.

4. On the posts page, users can toggle between light and dark modes using a button and can return to the landing page by clicking the "Back" button.

## Key Features

* Blog Creation: A form to input a username, blog title, and blog content, with validation to ensure all fields are filled.

* Data Storage: Blog post data is stored in `localStorage` as JSON, making the posts persistent across sessions.

* Dynamic Blog List: Blog posts are dynamically rendered on the posts page with information such as the title, content, and author.

* Light/Dark Mode Toggle: Users can switch between light and dark modes, and the styles update accordingly.

* Back Navigation: A "Back" button allows users to return to the landing page for adding more entries.


## Technology Stack

This project uses the following technologies:

* **HTML and CSS:** Structures and styles the landing and posts pages.

* **JavaScript:** Handles form validation, blog data storage in `localStorage`, dynamic content rendering, and light/dark mode logic.

* **LocalStorage:** Ensures that blog data is stored persistently between sessions.

## Mock-Up

The following animation demonstrates the application functionality:

![A user adds a blog through a form, then the post appears on the following page.](./assets/100-web-apis-challenge-demo.gif)

