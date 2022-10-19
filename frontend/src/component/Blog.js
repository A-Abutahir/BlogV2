import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {
    const [blogs, setBlogs] = useState();

    const sendRequest = async () => {
        const response = await axios
            .get("http://localhost:5001/api/blog/")
            .catch((err) => console.log(err));
        const data = response.data;
        return data;
    };

    useEffect(() => {
        sendRequest().then((data) => {
            setBlogs(data.data);
        });
    }, []);
    console.log(blogs);

    return (
        <div className="container">
            <div className="row">
                {blogs && blogs.map((blog, index) => (
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <a href="/w3images/lights.jpg">
                                    <img src={blog.image} alt="Lights"/>
                                    <div className="caption">
                                        <p>{blog.title}</p>
                                        {blog.description}
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Blog;
