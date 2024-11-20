import '../ui/global.css';
import {fira} from '../ui/fonts';
import {Metadata} from 'next';
import React from "react";
import DrawerRootLayout from "../ui/navigation/drawer-root-layout";

export const metadata: Metadata = {
    title: 'Sam\'s blog',
    description: 'Samantha Lovisolo\'s personal blog',
};
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en" data-theme="cupcake">
        <body className=''>
        <div className="relative flex">
            <div className={`${fira.className} grow`}>
                <DrawerRootLayout>{children}</DrawerRootLayout>
            </div>
        </div>

        </body>
        </html>
    );
}