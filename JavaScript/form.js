// TODO: Create a variable that selects the form element
const formEl = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const handleFormSubmit = function (event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Grab data entered by user and store it in variables
  // We use trim to make sure there is no whitespace
  const username = document.querySelector("#username").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();
  const error = document.querySelector("#error");

  // Check to see if they missed any fields
  if (!username || !title || !content) {
    error.textContent = "Please complete the form.";
    return;
  }

  // Create an object out of the data
  const blogObj = {
    username,
    title,
    content,
  };

  // Store object in localStorage
  storeLocalStorage(blogObj);

  // Redirect to blog.html
  redirectPage("blog.html");
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener("submit", handleFormSubmit);
