const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jack Doe",
    age: 49,
    gender: "male",
    location: "LA",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    name: "John smith",
    age: 28,
    gender: "male",
    location: "malibu",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Jeena",
    age: 32,
    gender: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Jaene",
    age: 22,
    gender: "female",
    location: "malibu",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "William Johnson",
    age: 29,
    gender: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "scarlett",
    age: 30,
    gender: "female",
    location: "NYC",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const profile = profileIterator(data);

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

document.getElementById("prev").addEventListener("click", prevProfile);

function nextProfile() {
  const currentProfile = profile.next().value;

  if (currentProfile !== undefined) {
    showProfile(currentProfile);
  } else {
    window.location.reload();
  }
}

function prevProfile() {
  const currentProfile = profile.previous().value;
  if (currentProfile !== undefined) {
    showProfile(currentProfile);
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profile) {
  let nextIndex = 0;

  return {
    next: function () {
      console.log(nextIndex);
      return nextIndex < profile.length
        ? { value: profile[++nextIndex], done: false }
        : { done: true };
    },

    previous: function () {
      console.log(nextIndex);
      return nextIndex > 0
        ? { value: profile[--nextIndex], done: false }
        : { done: true };
    },
  };
}

function showProfile(currentProfile) {
  document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
         <li class="list-group-item">Name : ${currentProfile.name} </li>
         <li class="list-group-item">Age : ${currentProfile.age} </li>
         <li class="list-group-item">Gender : ${currentProfile.gender} </li>
         <li class="list-group-item">Location : ${currentProfile.location} </li>
    </ul>
  `;

  document.getElementById("imageDisplay").innerHTML = `
    <img src=${currentProfile.image} >
  `;
}
