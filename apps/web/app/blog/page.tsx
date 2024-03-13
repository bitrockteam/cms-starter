import Link from "next/link";
import client from "../../client";

async function getPosts() {
  const query = `*[_type == "post"]`;

  const posts = await client.fetch(query);

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <main className="mt-8 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link href="#" className="border p-4">
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
