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
  subTitle: emoji(
    " Coming from a versatile background 🌟 of extensive problem-solving competitions, I have successfully maintained a solid portfolio 💼 in Web App Development. Over the past 7️⃣ years, I led half a dozen projects 🚀 from inception to completion, showcasing my prowess in the field."
  ),
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
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
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
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
      duration: "September 2013 - April 2015"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
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
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "98%"
    },
    {
      Stack: "Full stack",
      progressPercentage: "90%"
    }
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
      date: "August 2021 – Present",
      desc: "I started working in Jeeny as Technical Team Lead, My responsibilities were to build APIs from scratch, Integrate 3rd party payment systems, wallets, etc. Brainstorm the design, architecture, and development of upcoming features with the team."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Lead Developer",
      company: "Purelogics",
      companylogo: require("./assets/images/pl.jpeg"),
      date: "April 2019 – july 2021",
      desc: "I worked here as a senior LAMP stack, MEAN stack developer. I am involved in every phase of the software development lifecycle as a full stack developer i.e. from brainstorming to architecture design and then development of the application. As a team, we have developed a product for one of our clients using lead tech stack available in the market i.e, Laravel 7.0, Vue.JS 2.0, Angular 9, ExpressJS Node, CDN using WebPack, AWS services, etc."
    },
    {
      role: "Full Stack Developer",
      company: "Miranz Technologies",
      companylogo: require("./assets/images/mirnaz.jpeg"),
      date: "Dec 2018 – March 2019",
      desc: "Miranz provides solutions in the blockchain domain. Their expertise is Blockchain Development Services. I worked here as a Full Stack Developer, developing apps front end in Vue.JS and developed API in Laravel 5.7."
    },
    {
      role: "Software Engineer (PHP)",
      company: "TV2U",
      companylogo: require("./assets/images/tv2u.jpeg"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer (PHP)",
      company: "PureLogics",
      companylogo: require("./assets/images/pl.jpeg"),
      date: "Oct 2017 – Sept 2018",
      desc: "At PureLogics, I served as a Back End developer with responsibilities that encompassed debugging, enhancing, and building web and mobile applications. I focused on maintaining existing projects, introducing new features, and developing dynamic applications from scratch using CodeIgniter and Laravel. My role also entailed optimizing these solutions, ensuring their efficiency and performance met global standards."
    },
    {
      role: "Full Stack Developer",
      company: "Contegris",
      companylogo: require("./assets/images/Contegris.png"),
      date: "July 2016 – Oct 2017",
      desc: "I develop different business solutions using leading technologies,frameworks, plugins, libraries. My responsibility was building dynamic applications using CodeIgniter,Laravel & Angular framework. PHP Backend Implementation Responsive Testing, System Testing, Database Management."
    },
    {
      role: "Front End Engineer",
      company: "Emenac Inc.",
      companylogo: require("./assets/images/Emenac.jpeg"),
      date: "Jan 2016 – July 2016",
      desc: "Emenac has been the leading BPO, consulting, technology, and software group and one of the most financially stable companies in the BPO field. I worked their as UI Developer, My responsibility was to convert PSD to HTML, HTML5/CSS3/JS/jQuery, Front End Development, WordPress."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/emenac.webp"),
      projectName: "Emenac Packaging",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Emenac Packaging",
          url: "https://www.emenacpackaging.com/"
        }
        //  you can add extra buttons here.
      ]
    },
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
      image: require("./assets/images/Yovo-simple-logo.png"),
      projectName: "Yovo",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Yovo",
          url: "https://www.yovo.pk/"
        }
      ]
    },
    {
      image: require("./assets/images/daz.jpeg"),
      projectName: "Dazlab",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Dazlab",
          url: "https://dazlab.global/"
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
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter"
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "EOM",
      subtitle:
        "A standout employee at Purelogics LLC has earned the Employee of the Month Award an impressive 3 times, showcasing their exceptional dedication and invaluable contributions to the company..",
      image: require("./assets/images/pure.png"),
      imageAlt: "Employee of the Month",
      footerLink: [
        {
          name: "Employee of the Month"
          // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
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
  isHireable
};
