import '../ui/global.css';
import Sidebar from '../ui/sidebar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className=''>
                <Sidebar />
                <div className="content">{children}</div>

            </body>
        </html>
    );
}