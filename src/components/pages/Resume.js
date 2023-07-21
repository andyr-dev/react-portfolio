import React from "react";

export default function Resume() {
  const onButtonClick = () => {
    fetch("Andres Rodriguez Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Andres Rodriguez Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <body>
        {" "}
        <div>
          <div className="header">Andres Rodriguez</div>

          <div className="contact-info">
            Orlando, FL | Phone: (407) 461-7625 | Email: Andy3942@gmail.com
          </div>
          <button className="pdf" onClick={onButtonClick}>
            Click here for a PDF version
          </button>
        </div>
        <div className="summary">Summary</div>
        <div className="experience">
          Full Stack Web Developer with a background in IT support and life-long
          dedication to learning. Effective at combining creativity and problem
          solving to develop user-friendly applications. Known among staff for
          strong wit and attention to detail no matter the complexity of the
          project.
        </div>
        <div className="section-title">Technical Skills</div>
        <div className="experience">
          Languages: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB,
          SQL
          <br />
          Tools: AWS (Amazon Web Services)
        </div>
        <div className="section-title">Relevant Experience</div>
        <div className="experience">
          <strong>Tier 2 Help Desk Technician</strong>
          <br />
          DEX Imaging - February 2020 – Present
          <br />
          <ul>
            <li>
              Provided remote assistance to customers regarding the function of
              MFP for various printer manufacturers such as Konica, Kyocera, HP,
              Canon, SHARP, Toshiba, Lexmark, and Xerox.
            </li>
            <li>
              Tracked customer requests using the E-auto Ticketing Software.
            </li>
            <li>
              Responded to email messages, web inquiries, and phone calls to
              assist customers with their requests.
            </li>
            <li>
              Troubleshot hardware issues and conducted user training on printer
              functions.
            </li>
            <li>
              Configured Windows and Mac OS PCs to scan to folder via SMB and
              FTP and installed drivers.
            </li>
            <li>Assisted customers with troubleshooting SMTP issues.</li>
          </ul>
          <strong>Technology Service Desk Analyst I</strong>
          <br />
          QBASE (USCBP Contract) - March 2019 - February 2020
          <br />
          <ul>
            <li>
              Provided remote technical assistance and support for incoming
              queries and issues related to computer systems, software, and
              hardware.
            </li>
            <li>
              Responded to email messages, web inquiries, and phone calls to
              address customer inquiries.
            </li>
            <li>
              Logged all requests into the Government tracking system (Remedy).
            </li>
            <li>
              Added new users to the network and specified their directory
              structures and system access, handled password resets,
              troubleshooted network usage and peripheral issues, resolved LAN
              connectivity issues, and maintained LAN and internet connections.
            </li>
            <li>
              Troubleshot hardware and software problems, assisted users with
              desktop applications, and provided user training.
            </li>
            <li>
              Utilized support applications to track user requests from trouble
              ticket generation to resolution.
            </li>
            <li>
              Escalated problems to other network or system support personnel
              when a problem was not easily identified and corrected in a timely
              manner.
            </li>
            <li>
              Provided first-level telephone, email, and web support for
              computer systems, including software, hardware, and
              telecommunication systems.
            </li>
          </ul>
        </div>
        <div className="section-title">Education</div>
        <div className="education">
          <strong>Full-Stack Web Development Certificate</strong>
          <br />
          University of Central Florida
          <br />
        </div>
        <div className="education">
          <strong>Associate of Arts in Computer Science</strong>
          <br />
          Miami Dade College
          <br />
        </div>
        <div className="section-title">Certifications</div>
        <div className="certifications">
          • AWS Cloud Practitioner (May 2020 - May 2024)
          <br />
          • AWS Solutions Architect – Associate (May 2020 - May 2024)
          <br />
        </div>
      </body>
    </>
  );
}
