// github class init
const github = new Github();

// Search Element
const searchUser = document.querySelector("#searchUser");

// EventListner
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      // User Not Found
      if (data.profile.message === "Not Found") {
        // Show Alert
      } else {
        // Show Profile
      }
    });
  } else {
    // clear profile
  }
});
