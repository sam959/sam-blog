import ArticleCard from "./articleCard";
import {Article} from "../../model/article";

interface ArticlesWrapperProps {
    articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesWrapperProps) {

    return <>
        {
            articles.map((article, index) => {
                return <ArticleCard
                    key={article.id}
                    title={article.title}
                    slug={article.slug}
                    id={article.id}
                    tags={article.tags}
                />
            })
        }
    </>
}