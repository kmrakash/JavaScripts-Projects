// init Github
const github = new Github();
// init UI
const ui = new UI();

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
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
