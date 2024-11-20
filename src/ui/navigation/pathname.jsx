'use client';

import {usePathname} from 'next/navigation';

export function getPaths() {
    const pathname = usePathname();

    const pathSegments = pathname.split('/').map(s => s + "/");

    let accumulatedPath = '/';

    const resourceLinks = pathname.split('/').filter(Boolean)
        .map(segment => {
            accumulatedPath += segment;
            const path = accumulatedPath;
            accumulatedPath += '/';
            return path;
        });

    resourceLinks.unshift('/');

    return pathSegments.reduce((map, segment, index) => {
        map[segment] = resourceLinks[index];
        return map;
    }, {'': '/'});
}

export function getPathname() {
    return usePathname();
}