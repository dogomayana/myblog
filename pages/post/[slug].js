import React from 'react';
import { useRouter} from 'next/router'

import { getPosts, getPostDetails } from '../../services';
import Meta from '../../components/Meta';
import PostDetail from './../../components/PostDetail';
import Loader from '../../components/Loader';




const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader/>;
  }

  return (
    <>
    <Meta title={post.title}  description={post.excerpt}/>
    <article className="w-full p-4">
      <div className="container mx-auto">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            {/* <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} /> */}
            {/* <CommentsForm slug={post.slug} /> */}
            {/* <Comments slug={post.slug} /> */}
      </div>
      </article>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}