/**
 * This namespace
 * holds all the interfaces for the data used throughout the apps
 * 
 * */ 

namespace DataInterface {

    export interface AppData {
        hero_data : HeroData
        projects_data : ProjectsData
    }

    export interface HeroData { 
        name : string
    }

    interface ProjectsData { 

    }

}

export default DataInterface;
