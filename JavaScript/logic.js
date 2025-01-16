const modeBtnEl = document.querySelector("#toggle");

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Toggles between the modes, applies it then saves it to localStorage
const handleModeToggle = function () {
  const currentMode = document.body.classList.contains("dark")
    ? "dark"
    : "light";
  const newMode = currentMode === "light" ? "dark" : "light";

  applyMode(newMode);
  saveMode(newMode);
};

// Retrives mode from localStorage. It will default to "light" mode is no data is there
const readMode = function () {
  return localStorage.getItem("mode") || "light";
};

// Saves current mode to localStorage
const saveMode = function (mode) {
  localStorage.setItem("mode", mode);
};

// Applies the mode by adding "light" or "dark" class name to the body
const applyMode = function (mode) {
  document.body.className = mode;
  // Switches the emoji
  modeBtnEl.textContent = mode === "dark" ? "🌑" : "☀️";

  // Update the --circle-color based on the mode
  const root = document.documentElement; // Access the :root element
  if (mode === "dark") {
    root.style.setProperty("--circle-color", "#333"); // Dark mode color
  } else {
    root.style.setProperty("--circle-color", "#ffb100"); // Light mode color
  }
};

applyMode(readMode());

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function () {
  const data = localStorage.getItem("blogData");
  return data ? JSON.parse(data) : [];
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (data) {
  // Reads the existing data
  const existingData = readLocalStorage();
  // Adds the new data to the existing blog data
  const updatedData = [...existingData, data];
  // Save data to localStorage
  localStorage.setItem("blogData", JSON.stringify(updatedData));
};

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

modeBtnEl.addEventListener("click", handleModeToggle);
