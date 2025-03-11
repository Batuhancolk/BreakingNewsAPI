const express = require("express");
const router = express.Router();
const { dataNews, getNewsContent } = require("../src/data");

router.get("/", async (req, res) => {
    const news = await dataNews();
    res.json(news);
})
router.get("/breaking_news", async (req, res) => {
    const news = await dataNews();
    res.render("news", { news });
})

router.get("/breaking_news/:title", async (req, res) => {
    const newsContentUrl = req.query.newsContent;
    const newsTitle = req.query.newsTitle;
    const newsTime = req.query.newsTime;


    const newsContent = await getNewsContent(newsContentUrl);

    res.render("newsContent", { newsContent, newsTitle, newsTime });
})

module.exports = router;

