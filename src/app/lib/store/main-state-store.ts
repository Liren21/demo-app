import {makeAutoObservable} from 'mobx'
import services from "../services/services";


interface IMainStateStore {
    pathname: string
    val:any
}

class MainStateStore implements IMainStateStore {
    pathname = ''
    val:[]=[]

    constructor() {
        makeAutoObservable(this)
    }

    setPathname(val: string) {
        this.pathname = val
    }
    setVal(val: any) {
        this.val = val
    }
    auth(){
        services.getAuth().then((res)=>{
           this.setVal(res)
            }
        )
    }
}

export default new MainStateStore()
