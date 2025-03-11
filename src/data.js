const axios = require("axios");
const cheerio = require("cheerio");


//Target URL
const url = "https://www.haberler.com/son-dakika/";

async function getNewsContent(newsContentUrl) {
    try {
        const { data } = await axios.get(newsContentUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
            }
        });
        const $ = cheerio.load(data)

        //data
        const content = $("#icerikAlani > main").text().trim();
        return content;

    } catch (error) {
        console.error("Haber içeriği çekme hatası:", error);
        return "İçerik alınamadı.";
    }

}

async function dataNews() {

    try {
        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
            }
        });
        const $ = cheerio.load(data);

        let news = [];

        $("body > div.hbContainer > div > div > div.new3sondk-news-container > div").each((index, element) => {
            const newsTitle = $(element).find(".new3sondk-news").attr("title");
            const newsTime = $(element).find("div.timer").text().trim();
            const newsLink = $(element).find(".new3sondk-news").attr("href");

            const newsContentLink = `https://www.haberler.com${newsLink}`

            if (newsTitle && newsTime && newsContentLink) {
                news.push({ newsTitle, newsTime, newsContentLink });
            }

        });

        return news;

    } catch (error) {
        console.error("Veri çekme hatası:", error);
        return [];


    }

};

module.exports = { dataNews, getNewsContent };


