import BaseLayout from "../components/layouts/BaseLayout";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch"
import Link from "next/link";
import { useRouter } from "next/router"
import { Post } from "./types";


const Portfolios: NextPage<{ userData: Post[] }> = ({ userData }) => {
    return (
        <BaseLayout>
            <h1>Portfolio Page</h1>
            <ul>
                {userData.map(post => {
                    return (<li key={post.id}>
                        <Link href="portfolio/[id]" as={`portfolio/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>

                    </li>)
                })}
            </ul>
        </BaseLayout>
    )
}

Portfolios.getInitialProps = async () => {

    let userData;
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await res.json()
        userData = posts
    } catch (error) {
        console.log("Error getting posts : ,", error);
    }
    return { userData }
}

export default Portfolios;
