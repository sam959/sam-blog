'use client';
import NavBar from "../../ui/navigation/navbar-no-drawer";
import NavLinksNested from "./navlinks-nested";
import {getPaths} from "./pathname";


export default function DrawerRootLayout({children}) {

    const handleMouseLeave = () => {
        console.log("sono uscito");
        const drawerCheckbox = document.getElementById("my-drawer");
        if (drawerCheckbox) {
            drawerCheckbox.checked = false;
        }
    };
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content p-0">{/* Page content here */}
                <div className="content-wrapper flex flex-col h-full">
                    <NavBar pathMap={getPaths()}/>
                    <div className="content overflow-y-auto">{children}</div>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                {/* Sidebar content here */}

                <ul
                    onMouseLeave={handleMouseLeave}
                    onClick={handleMouseLeave}
                    className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
                >
                    <NavLinksNested/>
                </ul>
            </div>
        </div>
    );
}
