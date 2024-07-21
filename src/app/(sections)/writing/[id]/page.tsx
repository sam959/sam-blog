import {getAllPosts, getPostById} from "../../../../lib/articlesData";
import {notFound} from "next/navigation";
import Container from "../../../../ui/writings/Containter";
import Header from "../../../../ui/writings/Header";
import {PostHeader} from "../../../../ui/writings/PostHeader";
import {PostBody} from "../../../../ui/writings/PostBody";

export default async function Page({params}) {
    const {id} = params
    const post = await getPostById(id);

    if (!post) {
        return notFound();
    }

    return (
        <main>
            <Container>
                <Header/>
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        date={"2024-01-01"}
                    />
                    <PostBody content={post.content}/>
                </article>
            </Container>
        </main>
    );
}

export async function generateStaticParams() {
    return (await getAllPosts()).map((post) => ({
        id: post.id,
    }))
}
