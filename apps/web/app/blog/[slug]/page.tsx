import client from "../../../client";
import PostBody from "./components/post-body";

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
        title,
        body
    }`;

  const post = await client.fetch(query);

  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <main className="text-center flex flex-col gap-y-8">
      <h1 className="text-6xl leading-8 font-bold tracking-tight sm:text-4xl">
        {post.title}
      </h1>
      <PostBody value={post.body} />
    </main>
  );
}
