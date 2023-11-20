import {observer} from "mobx-react-lite"
import {ReactNode, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import mainStateStore from "../../../../app/lib/store/main-state-store";
import routes from "../../../../app/lib/routes";
import {routesDesc} from "../../../../app/lib/routesDesc";
import './Navbar.scss'

interface Interface {
    children: ReactNode
}

export default observer(({children}: Interface) => {
    const [stateCheckbox, setStateCheckbox] = useState(false)
    const pathName = useLocation().pathname
    useEffect(() => {
        mainStateStore.setPathname(pathName)
    }, [pathName])
    const onChangeStateCheckbox = () => {
        setStateCheckbox(!stateCheckbox)
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" onClick={onChangeStateCheckbox} className="drawer-toggle"
                   checked={stateCheckbox}/>
            <div className="drawer-content">
                <div className="navbar lg:hidden sticky top-0 z-20">
                    <div className="navbar-start">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>

                        </label>
                    </div>
                    <div className="navbar-center">
                        <Link to={routes.HOME} className="btn btn-ghost normal-case text-xl">Liren21</Link>
                    </div>
                    <div className="navbar-end"/>
                </div>
                <div className='p-4 h-full'>
                    {children}
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-2" aria-label="close sidebar"
                       className="drawer-overlay"></label>
                <ul tabIndex={12} className="menu p-4 w-64 min-h-full text-base-content">
                    {
                        routesDesc.map((rout, index: any) => (
                            <li key={`navbar-${rout.title}-${index}`}>
                                <Link
                                    onClick={onChangeStateCheckbox}
                                    to={rout.url}
                                    className={`${pathName.includes(rout.url) ? 'custom__active' : 'custom__inactive'}`}>
                                    <i className={`${rout.icon} ${pathName.includes(rout.url) ? 'custom__active__icon' : 'custom__inactive__icon'}`}></i>
                                    {rout.title}
                                </Link>
                            </li>
                        ))
                    }

                </ul>

            </div>
        </div>
    )
})
