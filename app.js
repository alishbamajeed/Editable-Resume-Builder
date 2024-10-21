var _a;
// app.ts
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    // Get user inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var profilePic = (_a = document.getElementById('profile-pic').files) === null || _a === void 0 ? void 0 : _a[0];
    var education = document.getElementById('education').value;
    var work = document.getElementById('work').value;
    var skills = document.getElementById('skills').value;
    // Display the generated resume
    var outputImage = document.getElementById('output-image');
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            outputImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    // Set the inner text for the resume sections
    document.getElementById('output-name').innerText = name;
    document.getElementById('output-email').innerText = email;
    document.getElementById('output-education').innerText = education;
    document.getElementById('output-work').innerText = work;
    document.getElementById('output-skills').innerText = skills;
    // Show the resume output section
    document.getElementById('resume-output').style.display = 'block';
    // Reset the form after submission
    document.getElementById('resume-form').reset();
});
