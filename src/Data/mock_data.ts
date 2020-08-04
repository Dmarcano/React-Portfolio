import DataInterface from "./interfaces";

const fillerText = `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum`

const projects : Array<DataInterface.ProjectData>  = [
    
    {
        id : 1,
        title : "Face Blending App",
        description : `Part of my Computer Vision final project. My partner and I implemented our own version of Laplacian 
        Image Blending so we could blend our faces with the face of reference images nearly seamlessly. I'm currently working 
        on finding a way of blending just facial features such as just a nose or eyes vs blending the whole face`,
        github_url : "https://github.com/Dmarcano/faceBlending",
        image : "FaceBlendingFirst.png",
        demo_url : "https://drive.google.com/file/d/1p8pQMxuKee5ak4MFVfU3pqEkFQ0uKqaI/view?usp=sharing",
    },

   
    {
        id : 0,
        title : "Naive Bayes Tutorial Blog",
        description : `My intro to probability final project. A Small tutorial blog of how the Naive Bayes 
        classifier works from a probability point of view. I implemented a binary 
        Naive Bayes classifier first in python then javascript to better create a small blog with an
        interactive demo component.`,
        github_url : "https://github.com/Dmarcano/NaiveBayesNotebook/tree/master",
        image : "NaiveBayesDemo.png",
        demo_url : "https://naive-bayes-notebook.now.sh/"
    },

    {
        id: 2, 
        title : "Where Da Trash At: A Sustainability Hack",
        description : `A PennApps Fall 2019 Hackathon Submission. We created a web-app that leveraged Google Cloud 
        to classify areas with high trash density. These areas are stored with location information so anyone can log on, look for 
        and pick up the trash for score.`,
        github_url : "https://github.com/oadikema/Where-Da-Trash-At",
        demo_url : "https://devpost.com/software/where-da-trash-at",
        image : "Banner.png",
    }


]

const contact : DataInterface.ContactData = { 
    email : "marcanp.diego@gmail.com"
}

const about : DataInterface.AboutData ={
    paragraph_one :`Hi! My name is Diego Marcano and I'm currently a Computer Science student
    at Swarthmore College. I enjoy writing software and learning as much as I can from the process.
    I've worked across several different types of projects.
    Ranging from creating and maintaing back-end, full-stack, and data science applications. 
    `,

    paragraph_two: `I've had a variety of experience from working in research lab settings, 
    to working on with some of the largest companies in the buisness. I'm always looking to learn more and improve myself. 
    I like creating software I can be proud of, learn from and move on to improving it.`,

    paragraph_three: 'Caught your interest? Look at my resume below or continue to check out some of my projects!' ,

    resume_url : "https://drive.google.com/file/d/1uoKbb_qaQAbs-OctTukyl3_1opAHIjFi/view?usp=sharing",

    about_img : "IconsPortfolio.png"
}

const work : DataInterface.WorkSection = {
    work_data : [
        {
            id:0,
            title : 'Software Engineer Intern',
            description : fillerText,
            company : 'Facebook',
            image : '',
        },

        {
            id : 1,
            title : 'REU Researcher',
            description : fillerText,
            company : 'WASHU St. Louis',
            image : '',
        }, 

        {
            id : 2,
            title : 'Undergraduate Researcher',
            description : fillerText,
            company : 'Swarthmore College',
            image : '',
        }
    ]
}

const portfolio_data : DataInterface.AppData = {
    hero_data : {
        name : "Diego",
        caption : "I'm about building and learning"
    },
    project_section_data : { data : projects },
    
    about_data : about,

    contact_data : contact,

    experience_data : work
    
}

export default portfolio_data;