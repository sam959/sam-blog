'use client';

import {Suspense, useState} from "react";
import ArticleFilterTabs from "./articleFilterTabs";
import {Article} from "../../model/article";
import ArticlesList from "../../ui/writings/ArticlesList";
import Loading from "../../app/(sections)/writing/loading";

interface ArticlesListProps {
    articles: Article[];
}

export default function TagSelector({articles}: ArticlesListProps) {
    const [selectedTag, setSelectedTag] = useState("all");
    const tags = ["all", "culture", "fashion", "entertainment"];

    const filteredArticles = selectedTag === "all" ? articles : articles.filter(article => article.tags.includes(selectedTag));

    return (
        <div>
            <ArticleFilterTabs tags={tags} onSelectTag={setSelectedTag}/>

            <div className="flex flex-row flex-wrap px-8 gap-4 __articlesContainer">
                <Suspense fallback={<Loading/>}>
                    <ArticlesList articles={filteredArticles}/>
                </Suspense>
            </div>

        </div>
    );
}