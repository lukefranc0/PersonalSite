import Proj1 from "../assets/Tasks View.png"
import Home from "../assets/Home.png"
import Tasks from "../assets/Project Detail View.png"
import Invite from "../assets/Invite users modal.png"
import Login from "../assets/Login.png"
import Site from "../assets/WebsiteHome.png"
import Mobile from "../assets/WebsiteMobile.png"
import { GitHub } from "@material-ui/icons"
export const ProjList = [
    {
        name:"NovaManage - A project management app",
        
        image:Proj1,
        skills:"JavaScript, React, React Redux, MongoDB, MaterialUI, Java, JWT, Express",
        process:"This was created by myself and two other students - Daniel Frost & Mark Faverzani at Villanova University.",
        description:"NovaManage is a simple yet efficient tool used to help manage projects and tasks of varying levels.",
        feature1: "Calendar-based planning: The home page displays a calendar that shows all necessary tasks that need to be done in the given month on their set due date.",
        image1:Home,
        feature2: "Customizable project page: Upon entering the project section, the user is able to create new projects as well as certain tasks with set due dates inside that project, and move them around based on priority, or however the user wishes.",
        image2:Tasks,
        feature3: "Real-time collaboration: Users are able to share tasks/projects with other users. Once shared, the other user can add/edit the project page that they were invited to in real time.",
        image3: Invite,
        feature4: "Signup/login: User's data is stored on their account made when first using the app. Unique accounts make the real-time collaboration possible.",
        image4: Login,
        link: "https://github.com/DanF10/2053FinalProject/tree/main/final-home" 
        // icon: <GitHubIcon />,

    },
    {
       
        name:"Personal Website",
        image:Site,
        skills:"JavaScript, React, MaterialUI, Hostinger, React Router Dom, Vertical Timeline",
        process:"This site was developed completely by myself, and deployed using Hostinger.",
        description:"This website serves as a more in-depth resume that better shows my projects, experience, and technical skills.",
        feature1:"One of the unique features on this website is a navbar that adjusts based size of screen. This helps accomodate for users on a mobile device rather than on a PC.",
        image1: Mobile,
        feature2:"Other features include an animated timeline using react libraries that can be seen on the experience page, and the usage of materialUI throughout the website to add icons.",
        feature3:"In the future, I hope to further expand this website with projects and more experience",
        feature4:"",
        link: "https://github.com/DanF10/2053FinalProject/tree/main/final-home" ,
        // icon: <GitHubIcon />,
    }
]