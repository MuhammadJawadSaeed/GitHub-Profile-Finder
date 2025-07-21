let card = document.querySelector(".profile-card");
function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    // if (!raw.ok) throw new Error("User not found");
    return raw.json();
  });
}
function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  ).then((raw) => {
    // if (!raw.ok) throw new Error("Failed to fetch repos...");
    return raw.json();
  });
}

function profileData(details) {
  let data = `<div class="avatar">
          <img
            src="${details.avatar_url}"
            alt="octocat"
          />
        </div>
        <div class="details">
          <h2>${details.name}</h2>
          <p class="username">@${details.login}</p>
          <p class="bio">
            ${details.bio ? details.bio : "Sorry there is no bio..."}
          </p>
          <ul>
            <li><strong>Public Repos:</strong>${details.public_repos}</li>
            <li><strong>Followers:</strong> ${details.followers}</li>
            <li><strong>Following:</strong> ${details.following}</li>
            <li><strong>Location:</strong> ${details.location}</li>
            <li><strong>Company:</strong> ${details.company ? details.company : "N/A"}</li>
            <li>
              <strong>Blog:</strong>
              <a href="${details.blog}" target="_blank"
                >${details.blog}</a
              >
            </li>
            
          </ul>
        </div>`;

        card.innerHTML = data;
}

let btn = document.querySelector(".button");
let usernameinp = document.querySelector(".input");
btn.addEventListener("click", function () {
  let username = usernameinp.value.trim();
  if (username.length > 0) {
    getProfile(username).then(function (data) {
      profileData(data);
    });
  } else {
    alert();
  }
});
