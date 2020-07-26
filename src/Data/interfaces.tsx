/**
 * This namespace
 * holds all the interfaces for the data used throughout the apps
 * 
 * */ 

namespace DataInterface {

    export interface AppData {
        hero_data : HeroData
        projects_data : ProjectSection
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

    
    export interface ProjectSection { 
        data : Array<ProjectData>
    }
    export interface ProjectData {
          image ? : ImageData,
          title ? : string, 
          description ? : string, 
    }

    interface ExperienceData { 
        
    }

}


export default DataInterface;
