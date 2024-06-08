import Image from "next/image";
import './homepage.css';
export default function Page() {
    return (
        <div className="my-b place-content-center flex">
            <Image className="welcome-img" src="/wordart.png" width={600} height={600} alt={"Welcome!"} />
        </div >
    );
}
