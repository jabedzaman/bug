/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Image from "next/image";
import arrow from ".../assets/images/down.png"

interface Props {
  posts: [Post];
}
export default function Home({ posts }: Props) {
  // console.log(posts)
  return (
    <div className="max-w-7xl mx-auto p-4 lg:px-8">
      <Head>
        <title>xense | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <div>
        <div className=" z-100 " id="start">
          <Navbar />
          <span className="font-semibold italic text-2xl lg:text-4xl flex justify-center space-x-2">
            <span className="text-blue-500">Blogs</span>
            <span className="text-white">by</span>
            <span className="text-white">
              <Link href="/">Xense</Link>
            </span>
          </span>
        </div>
      </div>
      {/* posts */}
      <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-4 md:p-6">
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.slug.current}`} key={post._id}>
              <div className="group cursor-pointer overflow-hidden border rounded-lg bg-white">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between p-5 ">
                  <div>
                    <p className="font-bold text-black">{post.title}</p>
                    <p className="text-xs text-black">
                      {post.description}
                      {/* by {post.author.name} */}
                    </p>
                  </div>
                  {/* <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt="xense"
                  /> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="sticky bottom-2 rotate-180 w-16 cursor-pointer bg-black rounded-full p-2 opacity-75">
        <Link href="#start">
        <img src="/assets/images/down.png" alt="arrow"/>
        </Link>
      </div>
      <div className="mt-6">
        <Footer />
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
