<!-- document.getElementById("generate").addEventListener("click", function() {
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
        resumeWindow.document.write(
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Generated Resume</title>
                <style>
                    body {
                        background: #f5f5f5;
                        font-family: 'Arial', sans-serif;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    .resume-header {
                        background-color: ${themeColor};
                        color: white;
                        padding: 20px;
                        text-align: center;
                    }
                    .resume-header img {
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        border: 4px solid white;
                        display: block;
                        margin: 0 auto 10px;
                    }
                    #editable-name {
                        text-align: center;
                        font-weight: bold;
                        font-size: 28px;
                        width: 100%;
                        border: none;
                        background: transparent;
                        color: white;
                    }
                    #editable-title {
                        text-align: center;
                        font-weight: bold;
                        font-size: 20px;
                        width: 100%;
                        border: none;
                        background: transparent;
                        color: white;
                    }
                    .resume-content {
                        padding: 20px;
                        text-align: left;
                        margin: 20px;
                    }
                    .resume-content h2 {
                        border-bottom: 2px solid ${themeColor};
                        padding-bottom: 5px;
                        margin-bottom: 10px;
                    }
                    .editable {
                        border: none;
                        background: transparent;
                        width: 100%;
                        font-size: 16px;
                        color: #333;
                    }
                    textarea {
                        width: 100%;
                        min-height: 50px;
                        height: auto;
                        padding: 10px;
                        font-size: 16px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        resize: none; /* Disable resizing */
                        overflow: hidden; /* Hide scrollbars */
                    }
                </style>
            </head>
            <body>
                <div class="resume-header">
                    ${imageSrc ? <img src="${imageSrc}" alt="Profile Picture"> : ''} 
                    <h1><input class="editable" type="text" value="${name}" id="editable-name"></h1>
                    <h3><input class="editable" type="text" value="${title}" id="editable-title"></h3>
                </div>

                <div class="resume-content">
                    <p><strong>Email:</strong> <input class="editable" type="email" value="${email}" id="editable-email"></p>
                    <p><strong>Phone:</strong> <input class="editable" type="tel" value="${phone}" id="editable-phone"></p>
                    <p><strong>LinkedIn:</strong> <input class="editable" type="url" value="${linkedin}" id="editable-linkedin"></p>
                    <p><strong>GitHub:</strong> <input class="editable" type="url" value="${github}" id="editable-github"></p>
                </div>

                <div class="resume-content">
                    <h2>Summary</h2>
                    <textarea class="editable" id="editable-summary">${summary}</textarea>
                </div>

                <div class="resume-content">
                    <h2>Experience</h2>
                    <textarea class="editable" id="editable-experience">${experience}</textarea>
                </div>

                <div class="resume-content">
                    <h2>Skills</h2>
                    <textarea class="editable" id="editable-skills">${skills}</textarea>
                </div>

                <div class="resume-content">
                    <h2>Education</h2>
                    <textarea class="editable" id="editable-education">${education}</textarea>
                </div>

                <div class="resume-content">
                    <h2>Certifications</h2>
                    <textarea class="editable" id="editable-certifications">${certifications}</textarea>
                </div>
            </body>
            </html>
        );

        // Generate the unique URL and shareable link
        const username = name.toLowerCase().replace(/\s+/g, '-'); // Use name as a unique identifier
        const uniqueURL = ${username}.vercel.app/resume;

        document.getElementById("uniqueLink").value = uniqueURL;
        document.getElementById("shareable-link").style.display = "block";
        
        // Display the download button
        document.getElementById("download").style.display = "block";

        // Add download functionality
        document.getElementById("download").addEventListener("click", function() {
            const resumeContent = resumeWindow.document.documentElement.outerHTML;
            const blob = new Blob([resumeContent], { type: "application/html" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = ${name}-resume.html;
            link.click();
        });
    }
});

// Listen for theme color change
document.getElementById("themeColor").addEventListener("input", function() {
    document.documentElement.style.setProperty("--theme-color", this.value);
    document.querySelector(".sidebar").style.background = this.value;
    document.querySelector("button").style.background = this.value;
}); -->