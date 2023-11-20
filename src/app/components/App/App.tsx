import {observer} from "mobx-react-lite"
import './App.scss'
import Router from "../Router/Router";
import {useEffect} from "react";
import mainStateStore from "../../lib/store/main-state-store";

export default observer(() => {
    useEffect(() => {
        mainStateStore.auth()
    }, [])

    return (
        <div>
            <Router/>
        </div>
    )
})
