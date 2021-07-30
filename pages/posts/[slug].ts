import {GetStaticPaths, GetStaticProps} from 'next'
import fs from 'fs';
import {join} from 'path'
import PostView from "../../components/views/post"
import {posts} from "../../content/posts";
import {Post} from "../../content/types";

const postsDirectory = join(process.cwd(), 'content/posts/md')
export default PostView;
export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params.slug;
    const post:Post = posts.find(x => x.slug === slug);
    if (!post.body) {
        const fullPath = join(postsDirectory, `${slug}.md`)
        post.body = fs.readFileSync(fullPath, 'utf8');
    }
    return {
        props: post,
        revalidate: false,
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: posts.map(post => ({ params: { slug: post.slug } })),
        fallback: false
    };
}
