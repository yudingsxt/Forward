var WidgetMetadata = {
    id: "com.missav.widget",
    title: "MissAV",
    description: "获取 MissAV.ai 的内容",
    author: "Trae AI",
    site: "https://missav.ai/",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 60,
    modules: [
        {
            title: "今日热门",
            description: "获取今日热门影片",
            functionName: "getTodayHot",
            sectionMode: false,
            cacheDuration: 3600
        },
        {
            title: "最新发布",
            description: "获取最新发布的影片",
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
    search: {
        title: "搜索",
        functionName: "search",
        params: [
            {
                name: "keyword",
                title: "关键词",
                type: "input",
                placeholders: [
                    {
                        title: "请输入关键词",
                        value: ""
                    }
                ]
            },
            {
                name: "page",
                title: "页码",
                type: "page",
                value: 1
            }
        ]
    }
};

async function getTodayHot(params = {}) {
    const url = "https://missav.ai/";
    const response = await Widget.http.get(url);
    const $ = Widget.html.load(response.data);
    const elements = $(".grid.grid-cols-2 .relative");

    return elements.map((index, element) => {
        const $element = $(element);
        const id = $element.find("a").attr("href");
        const title = $element.find("a").attr("title");
        const coverUrl = $element.find("img").attr("src");
        return {
            id: id,
            type: "url",
            title: title,
            coverUrl: coverUrl
        };
    }).get();
}

async function getLatest(params = {}) {
    const page = params.page || 1;
    const url = `https://missav.ai/new?page=${page}`;
    const response = await Widget.http.get(url);
    const $ = Widget.html.load(response.data);
    const elements = $(".grid.grid-cols-2 .relative");

    return elements.map((index, element) => {
        const $element = $(element);
        const id = $element.find("a").attr("href");
        const title = $element.find("a").attr("title");
        const coverUrl = $element.find("img").attr("src");
        return {
            id: id,
            type: "url",
            title: title,
            coverUrl: coverUrl
        };
    }).get();
}

async function search(params = {}) {
    const keyword = params.keyword;
    const page = params.page || 1;
    if (!keyword) {
        throw new Error("请输入关键词");
    }
    const url = `https://missav.ai/search/${keyword}?page=${page}`;
    const response = await Widget.http.get(url);
    const $ = Widget.html.load(response.data);
    const elements = $(".grid.grid-cols-2 .relative");

    return elements.map((index, element) => {
        const $element = $(element);
        const id = $element.find("a").attr("href");
        const title = $element.find("a").attr("title");
        const coverUrl = $element.find("img").attr("src");
        return {
            id: id,
            type: "url",
            title: title,
            coverUrl: coverUrl
        };
    }).get();
}

async function loadDetail(link) {
    const response = await Widget.http.get(link);
    const $ = Widget.html.load(response.data);
    const videoUrl = $("video > source").attr("src");
    return {
        videoUrl: videoUrl
    };
}
