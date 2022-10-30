/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import React, { useState } from 'react'
import PortableText from 'react-portable-text';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';
import {useForm, SubmitHandler} from 'react-hook-form'
import Link from 'next/link';
import Footer from '../../components/layouts/Footer';
import Head from 'next/head';
import Navbar from '../../components/layouts/Navbar';

interface iForm {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

interface Props {
    post: Post;
}
const Post = ({post}: Props) => {
    const {register, handleSubmit, formState:{errors}} = useForm<iForm>()
    const [submitted, setsubmitted] = useState(false)
    // console.log(post)

    const onSubmit: SubmitHandler<iForm> = (data) => {
        // console.log(data)
         fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(()=> {
            console.log(data);
            setsubmitted(true)
        }).catch((err) => {
            console.log(err);
            setsubmitted(false)
        })
    }
  return (
      <>
      {/* <Header/> */}
      <Head>
      <title>xense | {post.title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <img className='w-full h-40 object-cover' src={urlFor(post.mainImage).url()!} alt='' />
      
    <Navbar/>
    
    <article className='max-w-3xl mx-auto p-5 text-black'>
        <div className='text-xs text-gray-300 my-0 cursor-pointer hover:text-gray-400 underline lg:text-lg'>
            <Link href='/blogs'> ← back</Link></div>
        <h1 className='text-3xl mt-1 mb-3 text-black'>{post.title}</h1>
        <h2 className='font-light text-xl mb-2 text-gray-100'>{post.description}</h2>
        <div className='flex items-center space-x-2'>
            <img className='h-10 w-10 rounded-full' src={urlFor(post.author.image).url()!} alt={post.author.name} />
            <p className='font-extralight text-sm text-black'>Blog post by <span className='text-green-600'>{post.author.name}</span> - published at {new Date(post._createdAt).toLocaleString()}</p>
        </div>
        <div className='mt-10'>
            <PortableText
             dataset= {process.env.NEXT_PUBLIC_SANITY_DATASET}
             projectId= {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
             content={post.body}
             serializers={{
                 h1: (props: any) => (
                     <h1 className='text-2xl font-bold my-5 text-black' {...props} />
                 ),
                 h2: (props: any) => (
                    <h2 className='text-xl font-bold my-5 text-black' {...props} />
                ),
                li: ({children}: any) => (
                    <ul><li className='ml-4 list-disc text-black'>{children}</li></ul>
                ),
                link: ({href, children}: any) => (
                    <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                )

             }}
            />
        </div>
    </article>

    <hr className='max-w-lg mx-auto my-5 border border-blue-500' />

    {submitted ? (
        <div className='flex flex-col max-w-2xl mx-auto py-10 my-10 text-black'>
            <h3 className='text-3xl font-bold mx-6 text-black'>Thanks for submitting your comment!</h3>
            <p className='mx-6 text-black'>Once it has been approved, it will be shown below!</p>
        </div>

    ): (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-2xl mx-auto mb-10 p-5'>
             {/* <h3 className='text-sm text-black'>Enjoyed This Article?</h3> */}
             {/* <h4 className='text-3xl font-bold text-black'>Leave a comment below!</h4> */}
             {/* <hr className='py-3 mt-2' /> */}

             <input {...register("_id")} type="hidden" name='_id' value={post._id} />

             {/* <label htmlFor="" className='block mb-5'>
                <span className='text-black'>Name</span>
                <input {...register("name", {required: true})} type="text" className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-gray-300 outline-none focus:ring' 
                placeholder='John Doe'/>
             </label>
             <label htmlFor="" className='block mb-5'>
                <span className='text-black'>Email</span>
                <input {...register("email", {required: true})} type="email" className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-gray-300 outline-none focus:ring' 
                placeholder='JohnDoe@domain.com'/>
             </label>
             <label htmlFor="" className='block mb-5'>
                <span className='text-black'>Comment</span>
                <textarea {...register("comment", {required: true})} className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-gray-300 outline-none focus:ring' 
                placeholder='yo this article was dope!' rows={8}/>
             </label> */}

             {/* validation errors */}
             {/* <div className='flex flex-col p-5'>
                 {errors.name && (
                     <span className='text-red-500'>- The Name field is required</span>
                 )}
                                  {errors.email && (
                     <span className='text-red-500'>- The Email field is required</span>
                 )}
                                  {errors.comment && (
                     <span className='text-red-500'>- The Comment field is required</span>
                 )}
             </div> */}

             {/* <input type="submit" className='shadow bg-blue-300 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-black font-bold px-4 py-2 rounded cursor-pointer' /> */}
    </form>
    )}

    {/* comments */}
    {/* <div className='flex flex-col p-10 my-10 max-w-2xl mx-auto shadow space-y-2'>
        <h3 className='text-4xl text-black'>Comments</h3>
        <hr className='pb-2' />
        {post.comments && post.comments.map(Comment => {
            return <div key={Comment._id}>
                <p><span className='text-black'>{Comment.name}</span>: {Comment.comment}</p>
            </div>
        })}
    </div> */}

    {/* back button */}
    <Link href='/blogs'>
        <div className='text-black flex justify-center my-10 font-semibold text-xl cursor-pointer animate-pulse hover:animate-none'>Back to Blogs</div>
    </Link>

    {/* footer */}
    <Footer/>
    
      </>
  )
}
export async function getStaticPaths() {
    const query = 
    `*[_type == 'post']{
        _id,
        slug  {
        current
      }
      }`;
      const posts = await sanityClient.fetch(query);

      const paths = posts.map((post : Post) => ({
        params: {
            slug: post.slug.current
        }
      }))
    return {
      paths,
      fallback: 'blocking' // false or 'blocking'
    };
  }

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `
    *[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        author -> {
        name,
        image
      }, 
      'comments': *[
        _type == 'comment' &&
        post._ref == ^._id &&
        approved == true
      ],
      mainImage,
      description,
      body
      }
    `
    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })
    if(!post){
        return {
            notFound: true
        }
    }
    return {
        props: {
            post,
        },
        revalidate: 60,
    }
}

export default Post