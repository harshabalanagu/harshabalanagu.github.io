/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Harsha Vardhan",
  title: "Hi all, I'm Harsha",
  subTitle: emoji(
    "An ardent admirer of all the latest tech in Web and App ecosystems and an entusiastic developer of the same."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NGQpZSNixVn7XDkSOJBzpMcN_ehhZuAO/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harsha130699",
  linkedin: "https://www.linkedin.com/in/harsha-balanagu/",
  gmail: "balanaguharsha@outlook.com",
  medium: "https://medium.com/@harshabalanagu",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Passion for",
  subTitle: "Full stack developer who uses ML/DL Algorithms when applicable in Full stack.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Azure/ Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amrita University",
      logo: require("./assets/images/Amrita.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2016 - April 2020",
      desc: "Ranked Top 5 in the Program. Participated in the research in the field of Ambience sensing.",
      descBullets: [
        "9.55 CGPA",
        "Organized various tech events at campus."
      ]
    },
    {
      schoolName: "Narayana IIT Academy",
      logo: require("./assets/images/Narayana.png"),
      subHeader: "+1 and +2",
      duration: "June 2014 - May 2016",
      desc: "Got 96% in the program. Took Maths, Physics and Chemistry group.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React/Angular", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DotNet",
      progressPercentage: "75%"
    },
    {
      Stack: "Azure Tech Stack",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Microsoft",
      companylogo: require("./assets/images/Microsoft.png"),
      date: "June 2020 – Present",
      desc: "Working as Software engineer in a team which deals with Availability forecast of resources.",
      
    },
    {
      role: "Software Engineering Intern (6M)",
      company: "Microsoft",
      companylogo: require("./assets/images/Microsoft.png"),
      date: "January 2020 – June 2020",
      desc: "Worked as a part of HR Team at Microsoft to build Talent match tool, powered by NLP"
    },
    {
      role: "Software Engineer Intern (2M)",
      company: "Microsoft",
      companylogo: require("./assets/images/Microsoft.png"),
      date: "May 2019 – July 2019",
      desc: "Worked as an intern in the team of Microsoft Certifications, where we built a Planner for MSCert tool users"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects I worked on!",
  subtitle: "Some of the Project that I am proud to be part of.",
  projects: [
    {
      image: require("./assets/images/Microsoft.png"),
      projectName: "MSCert Planner",
      projectDesc: "Planner for Microsoft Certifications - Recommendation system",
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Microsoft.png"),
      projectName: "Talent Match",
      projectDesc: "A tool for scoring Resumes againg Job Descriptions using Machine Learning, NLP in specific.",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "\"If you can't explain it to a five, you don't understand it yourself\"",

  blogs: [
    {
      url: "https://medium.com/@harshabalanagu/how-login-works-a936bf992a9d",
      title: "How login works?",
      description:
        "Do you still go with simple username and password matching? Here is why you should reconsider."
    },
    {
      url: "https://medium.com/@harshabalanagu/my-notes-to-those-entering-to-tech-post-1-know-git-f9f8c7684aa3",
      title: "Starting in Tech? Know GIT",
      description:
        "These are a part of my series, \"My notes to those entering to tech\""
    },
    {
      url: "https://medium.com/@harshabalanagu/my-notes-to-those-entering-to-tech-post-2-get-ready-to-startle-1b1cf2459724",
      title: "Get ready to startle. Your team's codebase",
      description:
        "These are a part of my series, \"My notes to those entering to tech\""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project/opportunity or just want to say hi? My Inbox is open for all.",
  number: "+91-7981421303",
  email_address: "balanaguharsha@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
