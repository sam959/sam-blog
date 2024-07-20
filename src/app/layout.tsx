import '../ui/global.css';
import Sidebar from '../ui/navigation/sidebar';
import SideNav from '../ui/navigation/sidenav';
import Navbar from '../ui/navigation/navbar';
import { fira } from '../ui/fonts';
import { Metadata } from 'next';

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

                <Navbar />
                <div className="relative flex layout__screen">
                    {/* 
                     <div className="w-full flex-none md:w-64">
                       <SideNav />
                    </div>
                    */}
                    <div className={`${fira.className} grow`}>{children}</div>
                </div>

            </body>
        </html >
    );
}