import {ReactNode} from "react";

export type RoutesDescType = {
    id?:number;
    blockName?:string
    title: string;
    url: string;
    desc?: string;
    component?: ReactNode;
    icon?:string
};
