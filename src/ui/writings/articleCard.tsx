import Link from "next/link";

export default  function ArticleCard({
    title,
    slug,
    id,
    tags,
}: {
    title: string;
    slug : string;
    id: string;
    tags: string[];
}) {
    return (
        <div className="card bg-base-100 max-w-96 shadow-xl">
            <figure>
                <img
                    src="https://plus.unsplash.com/premium_photo-1661301044600-8856088002c7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="wiriting"/>
            </figure>

            <div className="card-body">
                <div className="card-actions justify-end">
{}
                    {
                        tags.map((tag, u) => {
                            return <div key={`${tag + Math.random()}`} className="badge badge-outline">{tag}</div>
                        })
                    }

                </div>
                <h2 className="card-title">{title}</h2>
                <p>{slug}</p>

                <div className="card-actions justify-end">
                    <Link href={`/writing/${id}`} className="hover:underline">
                        <button className="btn btn-primary">Read full article</button>
                    </Link>

                </div>

            </div>
        </div>


    );
}