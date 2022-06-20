import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import Meta from './Meta';
import { GraphCMSImageLoader } from '../util';

// import { graphCMSImageLoader } from './../util';

const PostCard =  ({ post, ref }) => {
  return (
    <>
      {/* <Meta keyword={post.title} description={post.excerpt}/> */}
      <div className="container">
        <div className="bg-white shadow-md rounded-lg">
          <span className="block overflow-hidden max-w-[380px] max-h-[150px] md:max-w-lg md:max-h-[200px] rounded-lg">
          <Image
            unoptimized="true"
            loader={GraphCMSImageLoader}
            src={post.featuredImage.url} 
            layout='responsive'
            height={post.featuredImage.height}
            priority={true}
            width={post.featuredImage.width}
            alt={post.featuredImage.fileName}
           />
          </span>

          <div className="p-2 max-h-[250px] mt-1 md:mt-1 md:ml-1 md:ml-2 border-l-2 pl-2 border-[#6495ed]">
            <h3 className="text-black cursor-pointer text-lg lg:text-2xl md:text-lg font-bold">
              <span className="TITLE">
              <Link className='no-underline' href={`/post/${post.slug}`} passHref>
               {post.title}
               </Link>
               </span>
            </h3>
            <p className="flex mt-3 text-xs md:text-base text-gray-500">
              <span className='inline capitalize'>Author: </span>
              <span className='inline capitalize ml-1 mr-2.5'>
                {post.author.name} </span>
              <span className='inline ml-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 text-[#6495ed] inline mr-2 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg> </span>
              <span className='inline  ml-1'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </p>

            <p className='mt-3 mb-4 first-line:uppercase first-line:tracking-normal
                first-letter:text-4xl first-letter:font-bold first-letter:text-[#6495ed]
                first-letter:mr-3 first-letter:float-left text-base md:text-lg'>
                <span className="Excerpt">
                  {post.excerpt} 
                  <Link className='no-underline' href={`/post/${post.slug}`} passHref ref={ref}>
                  ...
                  </Link>
                </span>
            </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default PostCard;
