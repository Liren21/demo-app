import {RoutesDescType} from "./models/types/RoutesDescType";
import routes from "./routes";
import IconStore from "../../core/components/Icons/IconStore";


export const routesDesc: RoutesDescType[] = [
    {
        title: "Главная",
        url: routes.HOME,
        icon:IconStore.filerPen
    },
]
