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
            setBlogs(data);
            console.log(blogs)
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="thumbnail">
                        <a href="/w3images/lights.jpg">
                            <img src="/w3images/lights.jpg" alt="Lights" />
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="/w3images/nature.jpg" alt="Nature" />
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <a href="/w3images/fjords.jpg">
                            <img src="/w3images/fjords.jpg" alt="Fjords" />
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
