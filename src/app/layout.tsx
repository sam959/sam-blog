import '../ui/global.css';
import Sidebar from '../ui/navigation/sidebar';
import SideNav from '../ui/navigation/sidenav';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className=''>
                <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-64">
                        <SideNav />
                    </div>
                    <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                </div>
            </body>
        </html>
    );
}