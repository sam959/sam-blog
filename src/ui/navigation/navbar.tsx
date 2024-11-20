'use client';
import {usePathname} from 'next/navigation';
import Drawer from '../navigation/drawer'
import {Bars4Icon} from '@heroicons/react/16/solid';
import {source_code} from '../fonts';
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();

    const pathSegments = pathname.split('/').map(s => s + "/");

    let accumulatedPath = '/';

    const resourceLinks = pathname.split('/').filter(Boolean) // split and remove empty segments
        .map(segment => {
            accumulatedPath += segment
            const path = accumulatedPath;
            // Add slash for next element
            accumulatedPath += '/';
            // return path without final slash
            return path;
        });

    resourceLinks.unshift('/'); // Add the root path as first element of the array
    //resourceLinks.push(resourceLinks.pop().replace("/", ""));

    console.log(`→ current pathname is "${pathname}", and it has ${resourceLinks.length} links: ${resourceLinks}`);
    console.log(`and ${pathSegments.length} path segments: ${pathSegments}`);


    const pathMap = pathSegments.reduce((map, segment, index) => {
         // Index + 1 because the root path is added at index 0
        map[segment] = resourceLinks[index];
        return map;
    }, { '': '/' }); // Start with the root path

    console.log(`path map: ${JSON.stringify(pathMap)}`);

    return (
        <div id="navbar" className="fixed navbar bg-primary z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label htmlFor="my-drawer" tabIndex={0} role="button"
                           className="btn btn-ghost btn-circle navbar__hamburger">
                        <Bars4Icon className="size-6"></Bars4Icon>
                    </label>

                    <Drawer></Drawer>
                </div>
            </div>
            <div className="navbar-center">

                {
                    Object.entries(pathMap).map(([key, value]) => {

                        console.log(`showing ${key} with path ${value}`);

                        //const menuStyle = path === pathname ? pathname : path

                        return <Link key={`${value + Math.random()}`} href={`${value}`}
                                     className={`${source_code.className} text-xl btn btn-ghost rounded-none px-0`}>{key}</Link>

                    })
                }

            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}