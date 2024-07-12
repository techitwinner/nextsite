import "@/app/_Libraries/markdownStuff.css";
import axios from "axios";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image} from "@nextui-org/react";
import React from "react";
import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const fetchBlog = async (slug) => {
    try {
        const reqOptions = {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
            }
        };
        //const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs/?filters[slug][$eq]=${slug}`, reqOptions)
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs/?filters[slug][$eq]=${slug}&populate=*`, reqOptions)
        return response.data.data[0];
    } catch (error) {
        console.log('error', error);
        return [];
    }
}

const markdownToHtml = async (markdown: string) => {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(markdown);

    return result.toString();
}

export default async function Page({ params }) {
    const blog = await fetchBlog(params.slug);
    if (!blog) {
        return <div>Blog not found</div>;
    }
    const { attributes } = blog;

    console.log('blog',blog)

    const coverImageActions = [
        {
            key: "view",
            icon: "view",
            label: "View image",
        },
        {
            key: "download",
            icon: "download",
            label: "Download image",
        }
    ];

    const contentHtml = await markdownToHtml(attributes.content);

    return (
        <div className="min-h-screen py-24 flex flex-col gap-12">
            <Image className="aspect-[4/3] sm:aspect-[6/3] md:aspect-[30/9] max w-[200%] object-cover items-end"
                   radius="sm" src={`${process.env.STRAPI_BASE_URL}${attributes.coverImage.data[0].attributes.url}`}/>
            <section className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">{attributes.title}</h1>
                <p className="text-wrap">{attributes.summary}</p>
            </section>
            <section className="flex flex-col gap-3">
                <div className="flex w-full flex-col gap-4"
                     dangerouslySetInnerHTML={{__html: contentHtml}}/>
            </section>
        </div>
    )
}