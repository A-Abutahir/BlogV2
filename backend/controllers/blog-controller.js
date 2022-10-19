import mongoose from "mongoose";
import Blogs from "../model/Blogs";


export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blogs.find();
    } catch (err) {
        console.log("ERR", err);
    }

    if (!blogs) {
        return res.status(200).json({ message: "No blogs Found" });
    }
    return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    
    const blog = new Blogs({ title, description, image, user });
    let existingUser;
    try {
        existingUser = await Users.findById(user);
    } catch (err) {
        return console.log("ERR", err);
    }
    try {
        await blog.save();
    } catch (err) {
        return console.log("ERR", err);
    }
    return res.status(200).json({ blog });
};

export const updateBlog = async(req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blogs.findByIdAndUpdate(blogId, {title, description})
    }
    catch (err) {
        return console.log("ERR", err);
    }
    if(!blog) {
        return res.status(200).json({ message: 'Unable to update' });
    }
    return res.status(200).json({ blog });
}

export const getById = async(req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blogs.findById(blogId)
    }
    catch (err) {
        return console.log("ERR", err);
    }
    if(!blog) {
        return res.status(200).json({ message: 'No Blog Found' });
    }
    return res.status(200).json({ blog });
}

export const deleteBlog = async(req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blogs.findOneAndRemove(blogId);
    }
    catch (err) {
        return console.log("ERR", err);
    }
    if(!blog) {
        return res.status(200).json({ message: 'No Blog Found' });
    }
    return res.status(201).json({ blog });
}
