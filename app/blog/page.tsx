import {Card, CardBody, CardFooter, CardHeader, Divider, Link, Image} from "@nextui-org/react";
import fetchBlogs from "@/app/_Functions/fetchBlogs";
import config from "@/app/blog/config";
import {ImageContainer} from "@/app/_MainComponents";

const Blog = async () => {
    const blogs = await fetchBlogs();

    return (
        <div className="min-h-screen py-24 flex flex-col gap-16">
            <h1 className="text-5xl font-bold">Blogs</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {blogs.data.map((blog, index) => (
                    <Card key={index} as={Link} href={`/blog/${blog.attributes.slug}`}>
                        <CardHeader className="flex flex-col items-stretch gap-3">
                            <ImageContainer alt={blog.attributes.slug} className="w-full h-auto object-contain" src={`${config.api}${blog.attributes.coverImage.data[0]?.attributes.url}`}/>
                            <p className="text-xl font-bold">{blog.attributes.title}</p>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p className="">{blog.attributes.summary}</p>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <p></p>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </div>
    )
}

export default Blog;