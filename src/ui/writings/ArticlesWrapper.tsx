'use client'
import React, {Fragment, useEffect, useState} from "react";
import {getAllPosts} from "../../lib/articlesData";
import ArticleCard from "./articleCard";
import {Article} from "../../model/article";

interface ArticlesWrapperProps {
    selectedTag: string;
}

export default function ArticlesWrapper({selectedTag}: ArticlesWrapperProps) {

    const [articles, setArticles] = useState<Article[]>([])
    useEffect(() => {
        const fetchData = async () => {
            setArticles(await getAllPosts().then((res) => res as Article[]))
        }

        fetchData();
    }, [selectedTag]);

    return <Fragment>


        {

            articles.filter(articles => selectedTag === "all" || articles.tags.includes(selectedTag)).map((article, index) => {
                return <ArticleCard
                    key={index}
                    title={article.title}
                    slug={article.slug}
                    id={article.id}
                    tags={article.tags}
                />
            })
        }
    </Fragment>


}