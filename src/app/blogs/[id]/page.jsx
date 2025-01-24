import Link from "next/link";

const Details = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return (
    <div className="hero min-h-screen w-10/12 mx-auto">
      <div className="hero-content bg-gray-100 flex-col p-5 rounded-xl lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">{data.title}!</h1>
          <p className="py-6">{data.body}</p>
          <Link href="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
