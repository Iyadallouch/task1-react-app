const router = require("express").Router();
const User = require("../models/User");
const Blog = require("../models/Blog");

//create blog
router.post("/", async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update blog
router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.username === req.body.username) {
      try {
        const updatedBlog = await Blog.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedBlog);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("you can update only your blog");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.username === req.body.username) {
      try {
        await blog.deleteOne();
        res.status(200).json("Blog has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("you can Delete only your blog");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all the blogs
router.get("/", async (req, res) => {
  const username = req.query.user;
  const type = req.query.type;
  try {
    let blogs;
    if (username) {
      blogs = await Blog.find({ username });
    } else if (type) {
      blogs = await Blog.find({ type: { $regex: type, $options: "i" } });
    } else {
      blogs = await Blog.find();
    }
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
