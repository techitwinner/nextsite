import axios from "axios";
import {Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Link} from "@nextui-org/react";
import React from "react";
import {handle} from "hast-util-to-html/lib/handle";


const fetchBlogs = async () => {''
    try {
        const reqOptions = {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
            }
        };
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs/?populate=*`, reqOptions)
        return response.data.data
    } catch (error) {
        console.log('error', error)
        return []
    }
}

const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
};

export default async function BlogPage() {
    const blogs = await fetchBlogs()
    console.log('blogs', blogs)

    return (
        <div className="min-h-screen py-24 flex flex-col gap-16">
            <h1 className="text-5xl font-bold">Blog page!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
                {blogs.map((blog, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-col items-start gap-2">
                            <Image className="aspect-[5/3] max w-[200%] object-cover items-end"
                                   radius="sm"
                                   src={`${process.env.STRAPI_BASE_URL}${blog.attributes.coverImage.data[0].attributes.url}`}/>
                            <Chip color="primary" as={Link}
                                  href={`/category/${blog.attributes.category}`}>{blog.attributes.category}</Chip>
                            <p className="text-xl font-bold">{blog.attributes.title}</p>
                        </CardHeader>
                        <Divider/>
                        <CardBody className="flex flex-col items-start gap-2">
                            <p className="opacity-60">{blog.attributes.summary}</p>
                        </CardBody>
                        <Divider/>
                        <CardFooter className="flex flex-row items-start gap-2">
                            <Button as={Link} radius="sm" href={`/blog/${blog.attributes.slug}`} className="w-full" color="primary">Read More</Button>
                            {/*<Button radius="sm" as={Link} isIconOnly color="primary"><p*/}
                            {/*    className="ph ph-share text-[1.25rem]"></p>*/}
                            {/*</Button>*/}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}