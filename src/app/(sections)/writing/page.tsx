import {getAllPosts} from "../../../lib/articlesData";
import TagSelector from "../../../components/writings/tagSelector";


export default async function Page() {
    const articles = await getAllPosts();
    return (
        <div className="articlesPage__container min-h-full pt-6 pl-2 pb-8">
            <div className=" articlePage__content w-screen">
                <TagSelector articles={articles}/>
            </div>
        </div>
    )
}