"use client";
import Blog from "./blog.mdx";

const Page = () => {
  return (
    <div className="flex flex-row justify-center text-center">
      <article className="prose">
        <Blog />
      </article>
    </div>
  );
};

export default Page;
