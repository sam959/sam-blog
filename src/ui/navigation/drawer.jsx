"use-client";
import NavLinks from "./navlinks";
import { useEffect, useRef } from "react";

export default function Drawer() {
  const drawerOverlayRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onMouseLeave = () => {
      console.log("sono uscito");
      drawerOverlayRef.current.click();
    };

    // Monto l'event
    if (drawerOverlayRef?.current && menuRef?.current) {
      menuRef.current.addEventListener("mouseleave", onMouseLeave);
    }

    // Lo rimuovo altrimenti la funzione onMouseLeave parte una volta in più
    return () => {
      if (drawerOverlayRef?.current) {
        menuRef.current.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [menuRef, drawerOverlayRef]);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          ref={drawerOverlayRef}
        ></label>
        <ul
          ref={menuRef}
          className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
        >
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}
