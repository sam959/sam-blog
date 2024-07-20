'use client';

import {
    CodeBracketIcon,
    PaintBrushIcon,
    HomeIcon,
    DocumentTextIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    {
        name: 'Writings',
        href: '/writing',
        icon: DocumentTextIcon,
    },
    { name: 'Art', href: '/art', icon: PaintBrushIcon },
    { name: 'Code', href: '/code', icon: CodeBracketIcon },
    { name: 'Contacts', href: '/contacts', icon: ChatBubbleLeftRightIcon }
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'mb-2 flex h-[48px]  items-center justify-center gap-2 rounded-md bg-base-100 shadow-md p-3 text-sm font-medium hover:bg-accent hover:text-accent-content md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-accent text-secondary': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}