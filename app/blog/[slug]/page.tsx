import {Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import config from "@/app/blog/config";
import fetchBlogs from "@/app/_Functions/fetchBlogs";

const BlogPost = async (props) => {
    const blogs = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`);
    if (blogs.data.length === 0) return null;
    const blog = blogs.data[0];

    return (
        <div className="min-h-screen py-24 flex flex-col gap-16">
            <Image alt={blog.attributes.slug} className="max-w-[64rem] w-full" radius={"sm"} src={`${config.api}${blog.attributes.coverImage.data[0]?.attributes.url}`}/>
            <h1 className="text-5xl font-bold">{blog.attributes.title}</h1>
        </div>
    )
}

export default BlogPost;