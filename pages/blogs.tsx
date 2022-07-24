import Head from 'next/head'
import Link from 'next/link'
import {sanityClient, urlFor} from '../sanity'
import { Post } from '../typings'

interface Props {
  posts : [Post];
}
export default function Home({posts}: Props) {
  // console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>xense | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



{/* posts */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
      {posts.map((post) => {
       return <Link href={`/posts/${post.slug.current}`} key={post._id}>
          <div className='group cursor-pointer overflow-hidden border rounded-lg'>
           <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt='' />
           <div className='flex justify-between p-5 '>
             <div>
               <p className='font-bold text-white'>{post.title}</p>
               <p className='text-xs text-white'>{post.description} by {post.author.name}</p>
             </div>
             <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="xense" />
           </div>
          </div>
        </Link>
      })}
    </div>
    </div>
  )
}
export async function getServerSideProps() {
  const query = `*[_type == 'post']{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  }, 
  mainImage,
  description
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {posts}, // will be passed to the page component as props
  }
}


