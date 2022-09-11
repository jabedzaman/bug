/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/layouts/Footer";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import { HomeIcon } from "@heroicons/react/outline";

interface Props {
  posts: [Post];
}
export default function Home({ posts }: Props) {
  // console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>xense | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <div className="flex justify-between lg:m-10 py-4 px-7 sticky top-0 bg-primary bg-opacity-90 z-40 border-black-800 border-b-2 shadow-2xl">
        <div>
          <Link href="/">
            <div className="">
              <HomeIcon className="h-10 lg:h-16 lg:hover:translate-x-3 duration-200 ease-out text-white" />
            </div>
          </Link>
        </div>
        <div className="text-white lg:text-6xl text-4xl flex space-x-2 lg:space-x-4 italic">
          <span className="text-blue-600 font-semibold">BLOGS</span>
          <span>by</span>
          <span className="underline">
            <Link href="/">xense!</Link>
          </span>
        </div>
        <div>{/* add dropdown */}</div>
      </div>
      {/* header ends */}
      {/* posts */}
      <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.slug.current}`} key={post._id}>
              <div className="group cursor-pointer elevation-4 overflow-hidden border rounded-lg bg-white">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between p-5 ">
                  <div>
                    <p className="font-bold text-black">{post.title}</p>
                    <p className="text-xs text-black">
                      {post.description} by {post.author.name}
                    </p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt="xense"
                  />
                </div>
              </div>
            </Link>
          );
        })}
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
