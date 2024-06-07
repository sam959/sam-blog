import Link from "next/link";
import styles from "./sidebar.module.css";
import { useMemo } from 'react';

export default function Sidebar() {
    const classNames = useMemo(() => {
        return [
            styles.nav,
            "h-screen"
        ].join(" ")
    }, [])
    return (
        <div>
            <p className="text-3xl font-bold underline">Menu</p>
            <nav className={classNames}>
                <input className={styles.input} placeholder="Search..." />
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}