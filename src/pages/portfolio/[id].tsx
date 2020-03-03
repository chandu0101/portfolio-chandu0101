
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { Post } from "../types"
import BaseLayout from "../../components/layouts/BaseLayout"

const Portfolio: NextPage<{ post: Post }> = ({ post }) => {
    const router = useRouter()

    return (<BaseLayout>
        <h3>I am portfolio page</h3>
        <div>
            <h3>{post.title}</h3>
            {post.body}
            {post.id}
        </div>
    </BaseLayout>)
}

Portfolio.getInitialProps = async ({ req, query }) => {
    let post: Post
    const id = query.id
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        post = await res.json()
    } catch (error) {
        console.log("Error Getting Posts");
    }
    return { post }
}

export default Portfolio

