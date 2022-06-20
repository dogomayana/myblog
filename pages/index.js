import NewsletterSubscribe from '../components/NewsletterSubscribe';
import OlderPost from '../components/OlderPost';
import PostCard from './../components/PostCard';
import { getPosts } from './../services/index';




export default function Home({posts, ref}) {
  return (
    <>
      <main className="w-full lg:flex relative">
        <div className="lg:w-5/6 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post, index) => (
            <PostCard key={index} post={post.node} ref={ref}/>
          ))}

        </div>
    <NewsletterSubscribe/>
        </div>
        <div className='hidden lg:block p-4 lg:w-2/6 relative '>
          <OlderPost/>
        </div>

      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 2,
  };
}
