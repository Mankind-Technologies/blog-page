import React from "react";
import styles from "./post.module.css";
import CardContent from "../../atoms/card";
import {Post} from "../../../content/types";

interface Props {
    posts:Post[]
}

const Blog = (props:Props) => {
    return (
        <>
            <section>
                <h1>Insights</h1>
            </section>
            <div className="grid-3">
                {props.posts.map(post => <CardContent key={post.title} {...post} />)}
            </div>

        </>
    )
};

export default Blog;

