import {DocumentTextIcon} from "@heroicons/react/24/outline";

export class NavLink {
    constructor(
        readonly name: string,
        readonly href: string,
        readonly icon: typeof DocumentTextIcon,
        readonly subpaths: NavLink[] = []
    ) {}
}