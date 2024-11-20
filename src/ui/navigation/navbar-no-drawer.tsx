import {Bars4Icon} from '@heroicons/react/16/solid';
import {source_code} from '../fonts';
import Link from "next/link";

export default function Navbar({pathMap}) {

    console.log(`path map: ${JSON.stringify(pathMap)}`);

    return (
        <div id="navbar" className="navbar sticky top-0 bg-primary z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label htmlFor="my-drawer" tabIndex={0} role="button"
                           className="btn btn-ghost btn-circle navbar__hamburger">
                        <Bars4Icon className="size-6"></Bars4Icon>
                    </label>
                </div>
            </div>
            <div className="navbar-center">

                {
                    Object.entries(pathMap).map(([key, value]) => {

                        console.log(`showing ${key} with path ${value}`);

                        return <Link key={`${key}`} href={`${value}`}
                                     className={`${source_code.className} text-xl btn btn-ghost rounded-none px-0`}>{key}</Link>

                    })
                }

            </div>
        </div>
    );
}