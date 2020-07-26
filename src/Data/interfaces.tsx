/**
 * This namespace
 * holds all the interfaces for the data used throughout the apps
 * 
 * */ 

namespace DataInterface {

    export interface AppData {
        hero_data : HeroData
        projects_data : ProjectsData
        about_data : AboutData
    }

    export interface HeroData { 
        name : string
    }

    export interface AboutData { 
        paragraph_one : string,
        paragraph_two  : string,
        paragraph_three  : string, 
    }

    

    interface ProjectsData { 

    }

    interface ExperienceData { 
        
    }

}


export default DataInterface;
