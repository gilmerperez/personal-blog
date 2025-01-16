// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backButton = document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (type, text, parent) {
  const element = document.createElement(type);
  element.textContent = text;
  parent.appendChild(element);
};

// TODO: Create a function that handles the case where there are no blog posts to display
const handleEmpty = function () {
  buildElement("p", "No Blog posts yet...", mainEl);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function () {
  // Retrieve from localStorage
  const blogObj = readLocalStorage();

  // Checks to see if there are blog posts, if not, calls the previous function
  if (blogObj.length === 0) {
    handleEmpty();
    return;
  }

  // For loop over the posts and make elements for each
  for (let i = 0; i < blogObj.length; i++) {
    const post = blogObj[i];

    const postContainer = document.createElement("div");
    postContainer.classList.add("blog-post");

    buildElement("h3", post.title, postContainer);
    buildElement("p", `By ${post.username}`, postContainer);
    buildElement("p", post.content, postContainer);

    mainEl.appendChild(postContainer);
  }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click", function () {
  redirectPage("index.html");
});
