document.getElementById("generate").addEventListener("click", function() {
    // Gather user input
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const summary = document.getElementById("summary").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const education = document.getElementById("education").value;
    const certifications = document.getElementById("certifications").value;
    const themeColor = document.getElementById("themeColor").value;

    // Open a new window for the resume preview
    const resumeWindow = window.open('', '_blank', 'width=800,height=600');

    // Handle profile picture if it exists
    const profilePic = document.getElementById("profile-pic").files[0];
    let imageSrc = '';

    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageSrc = e.target.result;
            generateResume();
        };
        reader.readAsDataURL(profilePic);
    } else {
        generateResume(); // If no image, proceed with resume generation
    }

    function generateResume() {
        resumeWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Generated Resume</title>
                <style>
                    body {
                        background: #f5f5f5;
                        font-family: 'Helvetica', sans-serif;
                        color: #333;
                        margin: 0;
                        padding: 20px;
                    }
                    .resume-header {
                        background-color: ${themeColor};
                        color: white;
                        padding: 30px;
                        text-align: center;
                        width: 100%;
                    }
                    .resume-header img {
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        border: 4px solid white;
                        display: block;
                        margin: 0 auto 15px;
                    }
                    .resume-header h1 {
                        font-size: 36px;
                        margin: 10px 0;
                    }
                    .resume-header h3 {
                        font-size: 24px;
                        margin: 10px 0;
                    }
                    .resume-content {
                        padding: 20px;
                        text-align: left;
                        margin: 20px auto;
                        max-width: 800px;
                        width: 100%;
                        background: #fff;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .resume-content h2 {
                        border-bottom: 2px solid ${themeColor};
                        padding-bottom: 10px;
                        margin-bottom: 15px;
                        font-size: 24px;
                        color: ${themeColor};
                    }
                    .resume-content p {
                        margin-bottom: 15px;
                        font-size: 18px;
                    }
                    .editable {
                        border: none;
                        background: transparent;
                        width: 100%;
                        font-size: 16px;
                        color: #333;
                    }
                    .auto-expand {
                        width: 100%;
                        min-height: 50px;
                        height: auto;
                        padding: 10px;
                        font-size: 16px;
                        border: none;
                        outline: none;
                        background: transparent;
                        resize: none;
                        overflow: visible;
                    }
                    .section-list {
                        list-style-type: none;
                        padding-left: 0;
                        font-size: 18px;
                        margin: 10px 0;
                    }
                    .section-list li {
                        margin-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="resume-header">
                    ${imageSrc ? `<img src="${imageSrc}" alt="Profile Picture">` : ''} 
                    <h1>${name}</h1>
                    <h3>${title}</h3>
                </div>

                <div class="resume-content">
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>LinkedIn:</strong> ${linkedin}</p>
                    <p><strong>GitHub:</strong> ${github}</p>
                </div>

                <div class="resume-content">
                    <h2>Summary</h2>
                    <p class="auto-expand">${summary}</p>
                </div>

                <div class="resume-content">
                    <h2>Experience</h2>
                    <p class="auto-expand">${experience}</p>
                </div>

                <div class="resume-content">
                    <h2>Skills</h2>
                    <ul class="section-list">
                        ${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>

                <div class="resume-content">
                    <h2>Education</h2>
                    <ul class="section-list">
                        ${education.split('\n').map(edu => `<li>${edu}</li>`).join('')}
                    </ul>
                </div>

                <div class="resume-content">
                    <h2>Certifications</h2>
                    <ul class="section-list">
                        ${certifications.split('\n').map(cert => `<li>${cert}</li>`).join('')}
                    </ul>
                </div>
            </body>
            </html>
        `);
    }

    // Generate the unique URL and shareable link
    const username = name.toLowerCase().replace(/\s+/g, '-'); // Use name as a unique identifier
    const uniqueURL = `${username}.vercel.app/resume`;

    document.getElementById("uniqueLink").value = uniqueURL;
    document.getElementById("shareable-link").style.display = "block";
    document.getElementById("download").style.display = "block";

    // Add download functionality
    document.getElementById("download").addEventListener("click", function() {
        const resumeContent = resumeWindow.document.documentElement.outerHTML;
        const blob = new Blob([resumeContent], { type: "application/html" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${name}-resume.html`;
        link.click();
    });
});

document.getElementById("themeColor").addEventListener("input", function() {
    document.documentElement.style.setProperty("--theme-color", this.value);
    document.querySelector(".sidebar").style.background = this.value;
    document.querySelector("button").style.background = this.value;
});
