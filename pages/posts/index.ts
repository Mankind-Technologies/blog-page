import Blog from "../../components/views/blog";
import {GetStaticProps} from "next";
import {posts} from "../../content/posts";

export default Blog;

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            posts: posts,
        }
    }
}

