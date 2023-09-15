document.addEventListener("DOMContentLoaded", function () {
  fetch("/user_profile_data")
    .then((response) => response.json())
    .then((data) => {
      const userProfileInfo = document.getElementById("user-profile-info");

      userProfileInfo.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <!-- Add more profile information as needed -->
            `;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
