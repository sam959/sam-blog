import '../ui/global.css';
import Sidebar from '../ui/navigation/sidebar';
import SideNav from '../ui/navigation/sidenav';
import Navbar from '../ui/navigation/navbar';
import { fira } from '../ui/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="cupcake">
            <body className=''>
                <Navbar />
                <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    {/* 
                     <div className="w-full flex-none md:w-64">
                       <SideNav />
                    </div>
                    */}
                    <div className={`${fira.className} grow p-6 md:overflow-y-auto md:p-12`}>{children}</div>
                </div>
            </body>
        </html >
    );
}