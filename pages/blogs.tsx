/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";


interface Props {
  posts: [Post];
}
export default function Home({ posts }: Props) {
  // console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Jabed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blogs</h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={urlFor(post.mainImage).url()!} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <Link href={`/posts/${post.slug.current}`} key={post._id} className="hover:underline">
                      {post.title}
                    </Link>
                  </p>
                  <a href={urlFor(post.mainImage).url()!} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
