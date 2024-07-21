'use client';

import "./article.css";
import {useState} from "react";

import ArticlesNavbar from "../../../ui/writings/articlesNavbar";
import ArticlesWrapper from "../../../ui/writings/ArticlesWrapper";

export default  function Page() {

    const [selectedTag, setSelectedTag] = useState("all");

    return (
        <div className="articlesPage__container h-screen">
            <div className=" articlePage__content w-screen">
                {/* Title */}
                <ArticlesNavbar tags={["all", "culture", "fashion", "entertainment"]} onSelectTag={setSelectedTag} />
                <div className="flex flex-row flex-wrap px-8 gap-4 __articlesContainer">
                    <ArticlesWrapper selectedTag={selectedTag} />
                </div>
            </div >
        </div>
    )
}