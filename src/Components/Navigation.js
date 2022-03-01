import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from "react-spring";
import NavigationMenu from "./NavigationMenu";
function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const masktransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menutransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },

    })


    return (
        <nav >
            <span className="text-xl">
                <FontAwesomeIcon icon={faBars}
                    onClick={() => setShowMenu(!showMenu)} />
            </span>
            {
                masktransitions(
                    (styles, item) => item && <animated.div style={styles}
                        className="bg-black-t-50 w-full h-full fixed top-0 left-0 z-50"
                        onClick={() => setShowMenu(false)}></animated.div>
                )
            }
            {
                menutransitions(
                    (styles, item) => item &&
                        <animated.div style={styles}
                            className="fixed top-0 left-0 w-4/5 bg-white h-full z-50 shadow p-3">
                                <NavigationMenu CloseMenu={() => setShowMenu(false)}/>                            
                        </animated.div>
                )
            }

        </nav>

    )
}
export default Navigation;