import DataInterface from "./interfaces";


const projects : Array<DataInterface.ProjectData>  = [
    {
        id : 0,
        title : "Naive Bayes Tutorial Blog",
        description : `My intro to probability final project. A Small tutorial blog of how the Naive Bayes 
        classifier works from a probability point of view. I implemented a binary 
        Naive Bayes classifier first in python then javascript to better create a small blog with a small 
        interactive component.`,
        github_url : "https://github.com/Dmarcano/NaiveBayesNotebook/tree/master",
        image : "",
        demo_url : "https://naive-bayes-notebook.now.sh/"
    },
    {
        id : 1,
        title : "Face Blending App",
        description : `Part of my Computer Vision Final Project. Using my own implementation of Laplacian 
        Image Blending, I blend my face with the face of reference images nearly seamlessly. I'm currently working 
        on finding a way of blending just sub facial features such as just a nose or eyes vs blending the whole face`,
        github_url : "https://github.com/Dmarcano/faceBlending",
        image : "",
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

         resume_url : "/#"
    }
}

export default portfolio_data;