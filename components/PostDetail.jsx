import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image  from 'next/image';
import Link  from 'next/link';
import Meta from './Meta';
import { GraphCMSImageLoader } from './../util';
import NewsletterSubscribe from './NewsletterSubscribe';



const PostDetail = ({ post }) => {

  return (
    <>
    <Head>
    {/* <meta property="og:url"       content={url}{...slug} /> */}
    <meta property="og:type"          content="Bryan Media" />
    <meta property="og:title"         content={post.title} />
    <meta property="og:description"   content={post.excerpt} />
    <meta property="og:image"         content={post.featuredImage.url} />
    </Head>
    <Meta keyword={post.title} description={post.excerpt}/>

      <div className="bg-white mx-auto max-w-sm p-2 md:max-w-4xl md:max-w-4xl rounded-md md:p-5 my-8">
        <span className="max-w-sm md:mb-32 md:max-w-3xl max-h-86 shadow-md">
          <Image 
          unoptimized="true"
          loader={GraphCMSImageLoader}
          src={post.featuredImage.url} 
          layout='responsive'
          alt={post.featuredImage.filename}
          height={post.featuredImage.height}
          width={post.featuredImage.width}
          priority={true}
           />
        </span>
        <div className="container md:px-0 mt-4 md:mt-8">
          <div className="flex mb-8">
            {/* Author Info */}
            <div className="flex">
            <span className="block mr-4 items-center bg-green-600 md:ml-10  md:ml-10 h-[30px] w-[40px] overflow-hidden rounded-full">
              <Image
                unoptimized="true"
                loader={GraphCMSImageLoader}
                alt={post.author.name}
                height={post.author.photo.height}
                width={post.author.photo.width}
                layout='responsive'
                priority={true}
                // className="align-middle rounded-full md:w-10"
                src={post.author.photo.url} 
               />
            </span>
              <p className="inline-block text-gray-500 ml-1 md:ml-2 font-medium my-auto text-sm md:text-base">{post.author.name}</p>
              <p className="font-medium text-gray-500 md:my-auto">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 text-[#6495ed] md:text-xl inline mx-2 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="align-middle text-sm md:text-base">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
              </p>

            </div>
          </div>

          {/* Post Content */}
          <div className="md:ml-10">
          <h1 className="mb-4 text-md md:text-2xl md:text-2xl font-semibold">{post.title}</h1>
          <div className='text-base leading-10'>
               <RichText content={post.content.raw.children}
                              references={post.content.references}
                                renderers={{
                                 a: ({ children, openInNewTab, href, rel, ...rest }) => {
                                   if (href.match(/^https?:\/\/|^\/\//i)) {
                                     return (
                                       <a
                                       className='no-underline text-blue-500'
                                         href={href}
                                         target={openInNewTab ? '_blank' : '_self'}
                                         rel= 'noopener noreferrer'
                                         {...rest}
                                       >
                                         {children}
                                       </a>
                                     );
                                   }
                         
                                   return (
                                     <Link href={href} className='no-underline text-blue-500'>
                                       <a {...rest}>{children}</a>
                                     </Link>
                                   );
                                 },
                                 Asset: {
                                   video: () => <div>custom VIDEO</div>,
                                   image: () => <div>custom IMAGE</div>,
                                   'video/mp4': () => {
                                     return <div>custom video/mp4 renderer</div>;
                                   },
                                   
                                 },
                                 h3:({children})=><h3 className="text-black text-xl font-bold my-2">{children}</h3>, 
                                 h4:({children})=><h4 className="text-black font-bold my-2">{children}</h4>, 
                                 h6:({children})=><h6 className="text-black font-bold my-2">{children}</h6>, 
                                 h5:({children})=><h5 className="text-black font-bold my-2">{children}</h5>, 
                                 h2:({children})=><h2 className="text-black font-bold my-2">{children}</h2>, 
                                 h1:({children})=><h1 className="text-black font-bold my-2">{children}</h1>, 
                                 p:({children})=><p className="my-4 text-black text-base leading-8 break-words md:text-xl text-start font-normal">{children}</p>, 
                                 ul:({children})=><h2 className="text-black-600 text-base md:text-lg text-left my-4">{children}</h2>,
                                 ol:({children})=><h2 className="text-black-600 text-base md:text-lg text-left my-4">{children}</h2>,
                                 li:({children})=><li className="text-black-600 no-disc my-4 md:my-4 leading-8 text-base md:text-lg text-left">{children}</li>, 
                                 bold: ({ children }) => <strong>{children}</strong>, 
                                 }} 
                               /> 
               
          </div>
        </div>
        </div>
    <NewsletterSubscribe/>

      </div>
    </>
  );
}

export default PostDetail;
