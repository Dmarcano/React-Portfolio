import DataInterface from "./interfaces";


const projects : Array<DataInterface.ProjectData>  = []

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