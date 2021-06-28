import React from "react";
import styles from "./blog.module.css";
import {Post} from "../../../content/types";
import ContentCard from "../../atoms/card";

interface Props {
    posts:Post[]
}

const Blog = (props:Props) => {
    console.log(props.posts)
    return (
        <div className={styles.container}>
            <section>
                <h1 className={styles.title}>Insights</h1>
            </section>
            <div className={styles.grid3}>
                {props.posts.map(post => <ContentCard key={post.slug} {...post} />)}
            </div>

        </div>
    )
};

export default Blog;

