import Link from "next/link"
import { compareDesc, format, parseISO } from "date-fns"
import { allPosts, Post } from "contentlayer/generated"
import Header from "../components/header"
import Sidebar from "./sidebar"

function PostCard(post: Post) {
  // console.log(post)
  return (
    <div >
      <h2 className="mb-1 text-xl">
        <div
          className="mb-10"
        >
          {post.title}
        </div>
      </h2>

      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      <time
        dateTime={post.date}
        className="block mt-4 mb-2 text-xs text-gray-600"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div >
      <div className="max-w-xl py-8 mx-auto">
      <Header />
      </div>
      
      <div className="flex max-w-4xl mx-auto my-12">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
