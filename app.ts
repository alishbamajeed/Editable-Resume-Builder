// app.ts
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const work = (document.getElementById('work') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Display the generated resume
    const outputImage = document.getElementById('output-image') as HTMLImageElement;

    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            outputImage.src = e.target?.result as string;
        };
        reader.readAsDataURL(profilePic);
    }

    // Set the inner text for the resume sections
    document.getElementById('output-name')!.innerText = name;
    document.getElementById('output-email')!.innerText = email;
    document.getElementById('output-education')!.innerText = education;
    document.getElementById('output-work')!.innerText = work;
    document.getElementById('output-skills')!.innerText = skills;

    // Show the resume output section
    document.getElementById('resume-output')!.style.display = 'block';

    // Reset the form after submission
    (document.getElementById('resume-form') as HTMLFormElement).reset();
});
