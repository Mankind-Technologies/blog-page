import React from "react";
import styles from "./post.module.css";
import {Post} from "../../../content/types";
import ReactMarkdown from "react-markdown";

const PostView = (post:Post) => {
    return (
        <div className="container">
            <section className={styles.header}>
                <h1 className={styles.title}>{post.title}</h1>
                <h4>{post.shortDescription} </h4>
            </section>
            {post.image && <img alt={post.title} src={post.image} className={styles.img}/>}
            <section className={styles.body}>
                <ReactMarkdown>
                    {post.body}
                </ReactMarkdown>
            </section>
        </div>
    )
};

export default PostView;