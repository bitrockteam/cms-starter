import Link from "next/link";
import client from "../../client";

async function getPosts() {
  const query = `*[_type == "post"] {
    slug,
    title,
    author->{
      name, 
    } 
  }`;

  const posts = await client.fetch(query);

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mt-16 container mx-auto flex flex-col gap-16">
      <h1 className="font-bold text-6xl text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link
            key={post.title}
            href={`/blog/${post.slug.current}`}
            className="flex flex-col gap-y-8 border p-4"
          >
            <span>{post.title}</span>
            <div className="font-bold">
              {post.author && `${post.author.name}`}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
