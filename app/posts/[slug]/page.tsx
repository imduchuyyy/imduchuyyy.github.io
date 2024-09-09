import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  try {
    const fileName = fs.readFileSync(`public/posts/${params.slug}.md`, "utf-8");
    const { content } = matter(fileName);

    return (
      <div className="mx-auto mt-8 flex flex-row justify-center">
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Blog not found</div>;
  }
};

export default PostPage;
