import {makeAutoObservable} from "mobx";


interface IPageHomeStore {
}

class PageHomeStore implements IPageHomeStore {

    constructor() {
        makeAutoObservable(this)
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PageHomeStore()
