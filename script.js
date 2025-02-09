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

    // Open a new window for preview
    const resumeWindow = window.open('', '_blank', 'width=800,height=600');

    // Handle profile picture
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
        generateResume();
    }

    function generateResume() {
        resumeWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Generated Resume</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
                <style>
                    * { box-sizing: border-box; margin: 0; padding: 0; }
                    body { font-family: 'Helvetica', sans-serif; color: #333; background: #f5f5f5; padding: 20px; }
                    .resume-container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
                    .resume-header { background-color: ${themeColor}; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .resume-header img { width: 100px; height: 100px; border-radius: 50%; border: 3px solid white; display: block; margin: 0 auto 15px; }
                    .resume-header h1 { font-size: 28px; margin: 5px 0; }
                    .resume-header h3 { font-size: 20px; margin: 5px 0; }
                    .resume-content { padding: 15px; text-align: left; }
                    .resume-content h2 { border-bottom: 2px solid ${themeColor}; padding-bottom: 5px; margin-bottom: 10px; font-size: 22px; color: ${themeColor}; }
                    .resume-content p { margin-bottom: 10px; font-size: 16px; }
                    .section-list { list-style: none; padding-left: 0; font-size: 16px; }
                    .section-list li { margin-bottom: 5px; }
                    .download-btn { display: block; margin: 20px auto; padding: 10px 20px; background: ${themeColor}; color: white; border: none; font-size: 16px; cursor: pointer; border-radius: 5px; }
                    @media (max-width: 600px) {
                        .resume-header h1 { font-size: 24px; }
                        .resume-header h3 { font-size: 18px; }
                        .resume-content { padding: 10px; }
                        .resume-content p, .section-list { font-size: 14px; }
                    }
                </style>
            </head>
            <body>
                <div class="resume-container" id="resume">
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
                        <p>${summary}</p>
                    </div>

                    <div class="resume-content">
                        <h2>Experience</h2>
                        <p>${experience}</p>
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
                </div>

                <button class="download-btn" onclick="downloadPDF()">Download PDF</button>

                <script>
                    function downloadPDF() {
                        const element = document.getElementById('resume');
                        html2pdf().from(element).save('Resume.pdf');
                    }
                </script>
            </body>
            </html>
        `);
    }
    
});

document.getElementById("themeColor").addEventListener("input", function() {
    document.documentElement.style.setProperty("--theme-color", this.value);
    document.querySelector(".sidebar").style.background = this.value;
    document.querySelector("button").style.background = this.value;
});

