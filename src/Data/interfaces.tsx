/**
 * This namespace
 * holds all the interfaces for the data used throughout the app
 * 
 * */

 

namespace DataInterface {

    // This interface holds all the information necessary to build the APP, 
    // it is a collection of other interfaces which the app relies on
    export interface AppData {
        hero_data : HeroData
        project_section_data : ProjectSection
        about_data : AboutData
        contact_data : ContactData
        experience_data: WorkSection
    }

    export interface HeroData { 
        name : string,
        caption: string
    }

    export interface AboutData { 
        paragraph_one : string,
        paragraph_two  : string,
        paragraph_three  : string, 
        resume_url : string
        about_img  : string
    }

    
    export interface ProjectSection { 
        data : Array<ProjectData>
    }
    export interface ProjectData {
          image  : string,
          title  : string, 
          description  : string, 
          id  : number ,
          github_url : string,  
          demo_url ? : string, 
          technologies ? : Array<Technology> 

    }

    export interface Technology { 

    }

    export interface ExperienceData { 
        
    }

    export interface ContactData { 
        email : string
    }

    export interface WorkSection {
        work_data : Array<WorkExperience>
    }

    export interface WorkExperience{
        id : number,
        title : string, 
        company  : string,
        description : string, 
        image ?: string,
        link ? : string,
    }
}


export default DataInterface;
