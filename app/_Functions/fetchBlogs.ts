import config from "@/app/blog/config";

const fetchBlogs = async () => {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };

    const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOptions)
    const response = await request.json();

    return response;
}

export default fetchBlogs;