'use client';
import {
    BookOpenIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon,
    DocumentTextIcon,
    HomeIcon,
    PaintBrushIcon,
    PencilIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import {NavLink} from "./models";
import {getPathname} from "./pathname";

const links = [
    new NavLink('Home', '/', HomeIcon),
    new NavLink('Writings', '/writing', PencilIcon, [
        new NavLink('Articles', '/writing/article', DocumentTextIcon),
        new NavLink('Short stories', '/writing/short-story', BookOpenIcon),
    ]),
    new NavLink('Art', '/art', PaintBrushIcon),
    new NavLink('Code', '/code', CodeBracketIcon),
    new NavLink('Contacts', '/contacts', ChatBubbleLeftRightIcon)
];

// Helper function to render a single NavLink
function renderLink(link: NavLink, pathname: string) {
    const LinkIcon = link.icon;

    return (
        <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex items-center gap-2 text-sm font-medium md:justify-start',
                {
                    'text-accent': pathname === link.href,
                }
            )}
        >
            <LinkIcon className={"w-4"}/>
            <p className="hidden md:block">{link.name}</p>
        </Link>
    );
}

export default function NavLinksNested() {
    const pathname = getPathname();

    return (

        <>
            {links.map((link) => (

                <li key={link.name}>
                    <span>{renderLink(link, pathname)}</span>

                    {link.subpaths.length > 0 && (
                        <ul key={"subpath of" + link.name}>
                            {link.subpaths.map((subpath) => (
                                <li key={subpath.name}>
                                    {renderLink(subpath, pathname)}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </>
    );
}