import DataInterface from "./interfaces";


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
    paragraph_one :`Hi! My name is Diego Marcano and I'm a current Computer Science student
    at Swarthmore College. I enjoy building great scalable software. I've worked across several disciplines
    ranging from creating and maintaing back-end, full-stack, and data science applications. 
    `,

    paragraph_two: `I've had a variety of experience from working in intimate lab settings, 
    to working on with some of the largest companies in the buisness. I .`,

    paragraph_three: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' ,

    resume_url : "https://drive.google.com/file/d/1wsLU3fRnsHM0TKNIYkABKfMjmgtElRfQ/view?usp=sharing",

    about_img : "IconsPortfolio.png"
}

const portfolio_data : DataInterface.AppData = {
    hero_data : {
        name : "Diego",
        caption : "I'm about building and learning"
    },
    project_section_data : { data : projects },
    
    about_data : about,

    contact_data : contact
    
}

export default portfolio_data;