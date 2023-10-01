function displayUserContributions() {
    const cardContainer = document.getElementById("card-container");

    userProfiles.forEach((profile) => {
                // Create a profile card div
                const card = document.createElement("div");
                card.classList.add("card-box");

                // Create the profile card content
                card.innerHTML = `
            <span class="pro">${profile.course}</span>
            <img class="round" src="${profile.imageUrl}" alt="user" />
            <h3>${profile.name}</h3>
            <h6>${profile.city}</h6>
            <p>${profile.work}</p>
            <div class="buttons">
                <a href="${
                  profile.msgURL
                }" target="_blank" rel="noopener noreferrer">
                  <button class="primary">
                    Message
                   </button>
                </a>
                <a href="${
                  profile.linkedinURL
                }" target="_blank" rel="noopener noreferrer">
                   <button class="primary ghost">
                    Hire Me
                   </button>
                </a>
            </div>
            <div class="skills">
                <h6 class="skill-heading">Skills</h6>
                <ul>
                    ${profile.skills.map((skill) => `<li>${skill}</li>`)}
                </ul>
            </div>
        `;

    // Append the profile card to the container
    cardContainer.appendChild(card);
  });
}

// Call the function to display user when the page loads
window.addEventListener("load", displayUserContributions);

//funtion for dowload card design for user.
// document.getElementById('capture').addEventListener('click', function () {
//   html2canvas(document.querySelector('.card')).then(canvas => {

//       const imageDataUrl = canvas.toDataURL('image/png');

//       const a = document.createElement('a');
//       a.href = imageDataUrl;
//       a.download = 'card.png';
//       a.textContent = 'Download Card';

//       const result = document.getElementById('result');
//       result.innerHTML = '';
//       result.appendChild(a);
//   });
// });

function checkScroll() {
  if (window.pageYOffset > 200) {
    document.getElementById("scroll-to-top-button").style.display = "block";
  } else {
    document.getElementById("scroll-to-top-button").style.display = "";
  }
}

function scrollToTop() {
  checkScroll(); // Check the scroll position
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
}

// Attach the scroll event listener
window.addEventListener("scroll", checkScroll);

// Attach the click event listener to the button
let top5 = document.getElementById("scroll-to-top-button");
console.log(top);
document
  .getElementById("scroll-to-top-button")
  .addEventListener("click", scrollToTop);