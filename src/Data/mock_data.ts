import DataInterface from "./interfaces";


const projects : Array<DataInterface.ProjectData>  = [
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
        id : 1,
        title : "Face Blending App",
        description : `Part of my Computer Vision final project. My partner and I implemented our own version of Laplacian 
        Image Blending so we could blend our faces with the face of reference images nearly seamlessly. I'm currently working 
        on finding a way of blending just sub facial features such as just a nose or eyes vs blending the whole face`,
        github_url : "https://github.com/Dmarcano/faceBlending",
        image : "FaceBlendingFirst.png",
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

const portfolio_data : DataInterface.AppData = {
    hero_data : {
        name : "Diego"
    },
    project_section_data : { data : projects },
    about_data : {
        paragraph_one :`Lorem ipsum dolor sit, amet consectetur adipisicing elit 
        Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum 
        dolor voluptatum consequatur blanditiis inventore debitis fuga
         numquam voluptate architecto itaque molestiae.`,

         paragraph_two: `Lorem ipsum dolor sit, amet consectetur adipisicing elit 
         Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum 
         dolor voluptatum consequatur blanditiis inventore debitis fuga
          numquam voluptate architecto itaque molestiae.`,

         paragraph_three: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' ,

         resume_url : "https://drive.google.com/file/d/1wsLU3fRnsHM0TKNIYkABKfMjmgtElRfQ/view?usp=sharing"
    }
}

export default portfolio_data;