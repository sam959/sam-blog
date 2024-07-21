'use client'
import {Fragment} from "react";

export default function ArticlesNavbar({tags, onSelectTag}: {
    onSelectTag(tag: string) : void;
    tags: string[];
}) {
    return (

        <div role="tablist" className="tabs tabs-lifted tabs-lg">

            {tags.map((tag: string, index) => {

                    return <Fragment key={"tags" + index}>
                        <input type="radio"
                               name={"tags"}
                               role="tab"
                               className="tab"
                               aria-label={tag}
                               defaultChecked={index === 0}
                               onChange={() => onSelectTag(tag)}/>
                        <div role="tabpanel"
                             className="tab-content p-10"></div>
                    </Fragment>

            })}
        </div>


    )
}