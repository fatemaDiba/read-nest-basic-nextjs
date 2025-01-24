import getAllPosts from "@/lid/getAllPosts";
import Link from "next/link";

const Home = async () => {
  const allPosts = await getAllPosts();

  return (
    <div className="bg-gray-50 py-16 w-10/12 mx-auto">
      <div className="">
        <h2 className="text-4xl font-bold mb-4">Blog Posts</h2>
        <ul className="list-disc">
          {allPosts?.map((post) => {
            return (
              <Link key={post?.id} href={`/blogs/${post.id}`}>
                <li className="text-xl ml-7">
                  <span> {post?.title}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
