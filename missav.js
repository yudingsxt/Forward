var WidgetMetadata = {
    id: "com.missav.widget",
    title: "MissAV",
    description: "获取 MissAV.ai 的内容",
    author: "Trae AI",
    site: "https://missav.ai/",
    version: "1.1.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 60,
    modules: [
        {
            title: "首页",
            functionName: "getHome",
            sectionMode: true,
            cacheDuration: 3600
        },
        {
            title: "最新",
            functionName: "getLatest",
            sectionMode: true,
            cacheDuration: 3600,
            params: [
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: 1
                }
            ]
        }
    ],
};

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

async function parseHtml(html) {
    const $ = Widget.html.load(html);
    const sections = [];
    const sectionElements = $(".my-8");

    sectionElements.each((index, element) => {
        const $section = $(element);
        const sectionTitle = $section.find("h2 a").text().trim();
        const items = [];
        $section.find(".grid.grid-cols-2 .relative").each((i, el) => {
            const $el = $(el);
            const id = `https://missav.ai${$el.find("a").attr("href")}`;
            const title = $el.find("a").attr("title");
            const coverUrl = $el.find("img").attr("src");
            if (id && title && coverUrl) {
                items.push({
                    id: id,
                    type: "url",
                    title: title,
                    coverUrl: coverUrl
                });
            }
        });
        if (items.length > 0) {
            sections.push({
                title: sectionTitle,
                childItems: items
            });
        }
    });
    return sections;
}

async function getHome(params = {}) {
    const url = "https://missav.ai/";
    const response = await Widget.http.get(url, { headers: { "User-Agent": UA } });
    return await parseHtml(response.data);
}

async function getLatest(params = {}) {
    const page = params.page || 1;
    const url = `https://missav.ai/new?page=${page}`;
    const response = await Widget.http.get(url, { headers: { "User-Agent": UA } });
    const $ = Widget.html.load(response.data);
    const items = [];
    $(".grid.grid-cols-2 .relative").each((i, el) => {
        const $el = $(el);
        const id = `https://missav.ai${$el.find("a").attr("href")}`;
        const title = $el.find("a").attr("title");
        const coverUrl = $el.find("img").attr("src");
        if (id && title && coverUrl) {
            items.push({
                id: id,
                type: "url",
                title: title,
                coverUrl: coverUrl
            });
        }
    });
    return [{ childItems: items }];
}

async function search(params = {}) {
    const keyword = params.keyword;
    const page = params.page || 1;
    if (!keyword) {
        throw new Error("请输入关键词");
    }
    const url = `https://missav.ai/search/${keyword}?page=${page}`;
    const response = await Widget.http.get(url, { headers: { "User-Agent": UA } });
    const $ = Widget.html.load(response.data);
    const items = [];
    $(".grid.grid-cols-2 .relative").each((i, el) => {
        const $el = $(el);
        const id = `https://missav.ai${$el.find("a").attr("href")}`;
        const title = $el.find("a").attr("title");
        const coverUrl = $el.find("img").attr("src");
        if (id && title && coverUrl) {
            items.push({
                id: id,
                type: "url",
                title: title,
                coverUrl: coverUrl
            });
        }
    });
    return [{ childItems: items }];
}

async function loadDetail(link) {
    const response = await Widget.http.get(link, { headers: { "User-Agent": UA } });
    const $ = Widget.html.load(response.data);
    const videoUrl = $("video > source").attr("src");
    if (!videoUrl) {
        throw new Error("无法获取视频地址");
    }
    return {
        id: link,
        type: "detail",
        videoUrl: videoUrl,
        mediaType: "movie",
        customHeaders: {
            "Referer": link,
            "User-Agent": UA
        }
    };
}
