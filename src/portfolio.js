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
  username: "Zeeshan Iqbal",
  title: "Hi all, I'm Zeeshan",
  subTitle: emoji("A seasoned full-stack software developer 🚀 with a track record of turning abstract ideas💡into fully realized web applications. With over 7️⃣ years of experience in web development and a background in problem-solving competitions, I bring a unique blend of skills and innovation to your projects."),
  resumeLink:
    "https://drive.google.com/file/d/1C06QPv39w0-u1vEQLuNnLDoaGmFOLE47/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zeeshan965",
  linkedin: "https://www.linkedin.com/in/zeeshan-iqbal-99a15a75/",
  gmail: "zeeshanbutt223@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Enthusiastic full-stack developer eager to delve into a diverse range of technology stacks.",
  skills: [
    emoji("⚡ Extensive experience in building responsive and user-friendly interfaces with expertise in front-end frameworks such as React, Angular, and Vue."),
    emoji("⚡ Well-versed in server-side scripting and backend development, proficient in utilizing PHP and Node.js languages, and leveraging their respective Laravel, Symfony, Express, and Nest frameworks to ensure seamless functionality."),
    emoji("⚡ Experienced in cloud computing and deployment using AWS, Docker, and continuous integration tools like Jenkins for streamlined and scalable applications."),
    emoji("⚡ Integration proficiency extends to third-party services, including payment gateways like Stripe and PayPal, enhancing e-commerce and transactional functionalities.")
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
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Node",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "BitBucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-stripe"
    },
    {
      skillName: "Paypal",
      fontAwesomeClassname: "fab fa-paypal"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Management & Technology",
      logo: require("./assets/images/umt.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2013 - April 2015",
      descBullets: [
        "Computer Programming",
        "Data Structures",
        "Databases",
        "Software Project Mangement"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/umt.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Database",
      progressPercentage: "75%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Team Lead",
      company: "Jeeny",
      companylogo: require("./assets/images/jeeny.png"),
      desc: "Jeeny, a Middle Eastern mobile app, offers integrated services like ride-hailing, wallet transactions, and more. Specifically designed to meet daily consumer needs in the Middle East.",
      descBullets: [
        "Designed architecture for new features and micro-services.",
        "Actively participated in development tasks, including building APIs from scratch and integrating third-party payment systems and wallets.",
        "Collaborated with the team to brainstorm and plan the design, architecture, and development of upcoming features.",
        "Reviewed ongoing sprints and planned new sprints with the product team.",
        "Implemented a pull request mechanism for staging and production, managed by Jenkins.",
      ],
      skills: "<b>Skills: </b> · PHP · Laravel · Symfony · Silex · Node · Express · React · JWT · REST APIs · MySQL · MongoDB · AWS · Jenkins"
    },
    {
      role: "Lead Developer",
      company: "Purelogics",
      companylogo: require("./assets/images/pl.jpeg"),
      desc: "PureLogics is a global technology company specializing in developing top-notch web and mobile applications across diverse domains, including LAMP, Android, iOS, MEAN, and Amazon Web Services.",
      descBullets: [
        "Worked as a senior developer specializing in LAMP and MEAN stacks.",
        "Engaged in all phases of the software development lifecycle as a full stack developer, from brainstorming to architecture design and application development.",
        "Collaborated with a team to create a product for a client using leading technologies, including Laravel 7.0, Vue 3.0, Angular 9, ExpressJS Node, CDN with WebPack, and AWS services.",
      ],
      skills: "<b>Skills: </b> · Node · Express · PHP · Laravel · Vue 2 · Angular 8 · Vanilla JS · WebPack · jQuery · MySQL · AWS"
    },
    /*{
      role: "Full Stack Developer",
      company: "",
      companylogo: require("./assets/images/kwanso_logo.jpeg"),
      // date: "Dec 2018 – March 2019",
      desc: "Kwanso, a design and development consultancy, transforms product ideas into reality.",
      skills: ""
    },*/
    {
      role: "Full Stack Developer",
      company: "Contegris",
      companylogo: require("./assets/images/Contegris.png"),
      // date: "July 2016 – Oct 2017",
      desc: "Contegris provide Unified Communication Solutions, Telecom & ISP Solutions, Contact Center Solutions, Help Desk Software, Omnichannel, and Technology Solutions to the industry.",
      descBullets: [
        "Develop various business solutions using leading technologies, frameworks, plugins, and libraries.",
        "Build dynamic applications with a focus on CodeIgniter, Laravel, and Angular frameworks.",
        "Implement PHP backend functionality, ensuring responsiveness, and conducting system testing.",
        "Manage databases associated with the applications."
      ],
      skills: "<b>Skills: </b> · PHP · Laravel · Codeigniter · Angular 2 · Vanilla JS · Javascript · jQuery · MySQL"
    },

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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/intelli.jpeg"),
      projectName: "Intellicon",
      projectDesc:
        "A customer-centric Contact Center solution integrating CodeIgniter, Laravel, Angular2, and MySQL to elevate customer service experiences.",
      footerLink: [
        {
          name: "Intellicon",
          url: "https://www.intellicon.io/"
        }
      ]
    },
    {
      image: require("./assets/images/toolbox.jpeg"),
      projectName: "The Toolbox Team",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "The Toolbox Team",
          url: "https://thetoolboxteam.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/sp.png"),
      projectName: "Shufti Pro",
      projectDesc:
        "A fraud prevention service leveraging Laravel, Vue.JS, Stripe, and MySQL for seamless digital KYC verification and rapid background checks in under 60 seconds.",
      footerLink: [
        {
          name: "Shufti Pro",
          url: "https://shuftipro.com//"
        }
      ]
    },
    {
      image: require("./assets/images/ozbon.jpeg"),
      projectName: "Ozbon.ng",
      projectDesc:
        "A dynamic e-commerce platform built with PHP, Codeigniter 3, Vue 3, and MySQL for seamless online shopping experiences.",
      footerLink: [
        {
          name: "Ozbon.ng",
          url: "https://ozbon.ng/"
        }
      ]
    },
    {
      image: require("./assets/images/crm.jpeg"),
      projectName: "CRM Newrich",
      projectDesc:
        "A robust customer relationship management (CRM) solution developed with Laravel and MySQL for efficient management and enhanced customer interactions.",
      footerLink: [
        {
          name: "crm.newrich",
          url: "https://crm.newrich.com/login"
        }
      ]
    },
    {
      image: require("./assets/images/thinknative.webp"),
      projectName: "Think Native",
      projectDesc:
        "A Community Engagement Platform utilizing Laravel, Vue.JS, Angular, and AWS to empower human service providers and nonprofits with outcome-focused virtual services.",
      footerLink: [
        {
          name: "thinknative",
          url: "https://www.thinknative.com/"
        }
      ]
    },
    {
      image: require("./assets/images/jeentt.jpeg"),
      projectName: "jeeny",
      projectDesc:
        " A Middle East ride-hailing app powered by a diverse tech stack including Symfony, Express, React, MySQL, Mongo, and AWS.",
      footerLink: [
        {
          name: "jeeny.me",
          url: "https://jeeny.me/ar/"
        }
      ]
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
      title: "EVS Certified PHP Developer",
      subtitle:
        "Basic php learning to advance php. Starting from front end to backend.Procedural php to advance oop implementations and mvc architecture base coding. It includes HTM5L/CSS3/JS/Jquery, php, Mysql.",
      image: require("./assets/images/evs.png"),
      imageAlt: "EVS Logo",
      footerLink: [
        /*{
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
        }*/
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
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
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
      slides_url: "https://bit.ly/saadpasta-slides",
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+923454771299",
  email_address: "zeeshanbutt223@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
