import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getRecentPosts } from '../services';

import { GraphCMSImageLoader} from './../util';
import Link from 'next/link';


const OlderPost = ({post}) => {
    const [OldPosts, setOldPosts] = useState([]);

    useEffect(() => {
        getRecentPosts(post)
         .then((response) => {
            setOldPosts(response)
         });
       }, []);
      
    return (
        <>
            <div className="p-4">
                {OldPosts.map((post, index)=>(
                    <div className="text-base flex mb-4 border-b-4 border-indigo-500"  key={index}>
                    <span className="max-w-[200px] overflow-hidden lg:shrink-0">
                    <Image src={post.featuredImage.url} 
                                unoptimized="true"
                                loader={GraphCMSImageLoader}
            layout='responsive'
            priority={true}
            alt={post.featuredImage.fileName}
                    
                    width={100} height={50}/>
                    </span>
                    <p className='ml-2 text-base'>
                  <Link className='no-underline' href={`/post/${post.slug}`} passHref>

                        {post.title}
                        </Link>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OlderPost;
