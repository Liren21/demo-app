import {IProjectEntity} from "./ProjectEntity";

export interface IDataProject {
    title: string
    id: string
    projectEntities: IProjectEntity[]
}
