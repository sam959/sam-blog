import DateFormatter from "./date-formatter";
import {PostTitle} from "./PostTitle";


export function PostHeader({ title, date }: Props) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-lg">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </>
    );
}

type Props = {
    title: string;
    date: string;
};