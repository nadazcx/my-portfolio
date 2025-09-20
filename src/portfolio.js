/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nada Zammit Chatti",
  title: "CouCouxxx , I'm Nada",
  subTitle: emoji(
    "A hybrid software engineer 🚀 who can build everything from software and websites to full data pipelines."
  ),

  resumeLink:
    "https://drive.google.com/file/d/1MtQxiQTjTi5rs4aUJOf8ESxMIcuttfjp/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nadazcx",
  linkedin: "https://www.linkedin.com/in/nadazc/",
  gmail: "zcnadaa@gmail.com",
  // gitlab: "https://gitlab.com/12",
  // facebook: "https://www.facebook.com/12.7",
  // medium: "https://medium.com/@12",
  // stackoverflow: "https://stackoverflow.com/users/12/12",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ENGINEER WHO WANTS TO EXPLORE EVERY NEW TECHNOLOGY",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡Develop full-stack web applications with modern frameworks like React and Node.js"),
    emoji(
      "⚡ Build cloud-native solutions with Azure and implement DevOps practices with Docker and CI/CD tools"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
   
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
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
      schoolName: "Higher National Engineering School of Tunis",
      logo: require("./assets/images/ensitLogo.png"),
      subHeader: "Engineering Degree in Computer Science",
      duration: "September 2022 - June 2025",
      desc: "Specialized in software engineering and data systems.",
      descBullets: [
      "Focus on full-stack development and data engineering",
        "Courses in advanced algorithms, distributed systems, and cloud computing"
      ]
    },
    {
      schoolName: "College Science and Technology Sousse",
      logo: require("./assets/images/essthsLogo.png"),
      subHeader: "Preparatory School in Mathematics and Physics",
      duration: "September 2020 - July 2022",
      desc: "Intensive program in mathematics and physics as preparation for engineering studies.",
      // descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const languages = {
  viewSkillBars: true, 
  experience: [
 
    {
      Stack: "French",
      level:" C2",
    }
    ,
    {
      Stack: "English",
      level:" C1",
    },
      {
      Stack: "Arabic",
      level:"Native",
    }
  ],
  displayCodersrank: false 
};
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    // {
    //   Stack: "Frontend/Design", //Insert stack or technology you have experience in
    //   progressPercentage: "90%" //Insert relative proficiency in percentage
    // },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Telnet",
      companylogo: require("./assets/images/telnetLogo.png"), // You'll need to add this image
      date: "February 2025 – May 2025",
      desc: "Designed and implemented a distributed WiFi performance testing system with Django REST API and React frontend.",
      descBullets: [
        "Built Django REST API backend integrating iperf3, ping, and custom network tests",
        "Developed React frontend with real-time visualization of network KPIs using Chart.js",
        "Implemented ELK Stack for log aggregation and real-time dashboards"
      ]
    },
    {
      role: "Data Engineering Intern",
      company: "Hutshinson",
      companylogo: require("./assets/images/hutshinsonLogo.png"), // You'll need to add this image
      date: "July 2024 – August 2024",
      desc: "Automated ETL pipelines and developed monitoring applications for data processing workflows.",
      descBullets: [
        "Automated ETL pipelines using Talend, processing 15GB+ daily data with 98% reduction in manual handling",
        "Developed NestJS application with REST API endpoints to trigger Talend jobs and monitor execution status"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Collaborative, Freelance, and Personal Projects",
  projects: [
    {
      image: require("./assets/images/heartLink.png"),
      projectName: "HeartLink",
      projectDesc: "HeartLink is an advanced mobile application powered by Kotlin and Spring frameworks, enhanced with machine learning capabilities to accurately predict cardiovascular attacks. It seamlessly integrates with a dedicated device to collect real-time health data, offering a comprehensive approach to monitoring and preventing heart-related issues.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/bezbez.png"),
      projectName: "BezBez",
      projectDesc: "BezBez is a mobile applicatin developed using Django and ionic dedicated to small buisnesses, enabling them to create and manage their online stores with ease. It offers a user-friendly platform for businesses to showcase their products, handle transactions, and reach a wider audience through a seamless mobile experience.",
      footerLink: [
        {
          name: "See Github",
          url: "https://github.com/hadily/bezbez-app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
    subtitle:
        "Earned Microsoft certification demonstrating foundational knowledge of cloud services and Azure.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Azure Fundamentals Certification Logo",
      footerLink: [
        
      ]
    },
    {
      title: "CCNA Networking",
      subtitle:
        "Achieved Cisco Certified Network Associate (CCNA) certification.",
      // imageAlt: "CCNA Logo",
      footerLink: [
        // {
        //   // name: "View Google Assistant Action",
        //   // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "Snowflake: Hands-On Essentials: Data Warehousing Workshop",
    subtitle:
        "Earned Snowflake certification demonstrating foundational knowledge of data warehousing concepts and practices.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Azure Fundamentals Certification Logo",
      footerLink: [
        
      ]
    },

   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@nada/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
      slides_url: "https://bit.ly/nada-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 25 020 291",
  email_address: "nadazc@outlook.fr"
};


const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection,
  languages
};
