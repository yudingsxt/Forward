WidgetMetadata = {
  id: "jable",
  title: "Jable",
  description: "获取Jable各种分类榜单",
  author: "nibiru",
  site: "https://github.com/quantumultxx/FW-Widgets",
  version: "1.0.2",
  requiredVersion: "0.0.1",
  modules: [
    // 热门影片模块
    {
      title: "热门影片",
      description: "热门影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value:
            "https://jable.tv/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "所有时间", value: "video_viewed" },
            { title: "本月热门", value: "video_viewed_month" },
            { title: "本周热门", value: "video_viewed_week" },
            { title: "今日热门", value: "video_viewed_today" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
    // 最新上市模块
    {
      title: "最新上市",
      description: "最新上市影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value:
            "https://jable.tv/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },

        // 中文字幕模块
    {
      title: "中文字幕",
      description: "中文字幕影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          description: "列表地址",
          value:
            "https://jable.tv/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
                // 女优模块
    {
      title: "选择女优",
      description: "按女优分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择角色",
          type: "enumeration",
          enumOptions: [
            { 
              title: "暂时就这些吧，其余有空再加", 
              value: ""
            },
            { 
              title: "三上悠亚", 
              value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "楪可怜", 
              value: "https://jable.tv/models/86b2f23f95cc485af79fe847c5b9de8d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }，
            { 
              title: "大槻ひびき", 
              value: "https://jable.tv/models/hibiki-otsuki/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "桃乃木かな", 
              value: "https://jable.tv/models/momonogi-kana/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "凪ひかる", 
              value: "https://jable.tv/models/91fca8d824e07075d09de0282f6e9076/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "汐世", 
              value: "https://jable.tv/models/e99f1ca15966b87be472e606fc02f53c/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "百田光希", 
              value: "https://jable.tv/models/c9086c992e778ca85478333cfc649ed0/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "深田えいみ", 
              value: "https://jable.tv/s1/models/hukada-eimi/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "波多野結衣", 
              value: "https://jable.tv/s1/models/hatano-yui/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "田中ねね", 
              value: "https://jable.tv/models/nene-tanaka/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "中山ふみか", 
              value: "https://jable.tv/models/d0561e8c3f65a5a1ca6bcd3e317fc185/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "神楽ももか“, 
              value: "https://jable.tv/models/7bf6de1f3c59111c2c5cae61f5c84a7e/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "神木麗“, 
              value: "https://jable.tv/models/ef9b1ab9a21b58d6ee4d7d97ab883288/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "恋渕ももな“, 
              value: "https://jable.tv/models/2a8b2bb6f1b622ae2c67edcbde5d0c7a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "小梅えな“, 
              value: "https://jable.tv/models/ena-koume/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "夢乃あいか“, 
              value: "https://jable.tv/models/yumeno-aika/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "鷲尾めい“, 
              value: "https://jable.tv/models/99df40f2a110f8540246b0b975b1ccc7/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "安齋らら“, 
              value: "https://jable.tv/models/52a33aabdfd0440202e57950dafe079f/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "羽月乃蒼“, 
              value: "https://jable.tv/models/49b54928c23fd7c915161cc49c3e3d5d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "吉根ゆりあ", 
              value: "https://jable.tv/models/julia-yoshine/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "みなと羽琉", 
              value: "https://jable.tv/models/d6567803c9156b0da63133a77ed0a526/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "三木環奈", 
              value: "https://jable.tv/models/355eafc84c4892adf040c0864a386a0a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "山手梨愛", 
              value: "https://jable.tv/models/382635fc5873b217ff01bdd14f5058a7/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "奥田咲", 
              value: "https://jable.tv/models/saki-okuda/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }, 
            { 
              title: "八蜜凛", 
              value: "https://jable.tv/models/f2cb5678bddcc809f77827eb6f38f025/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },  
            { 
              title: "河合あすな", 
              value: "https://jable.tv/models/asuna-kawai/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },   
            { 
              title: "小宵こなん", 
              value: "https://jable.tv/models/20d0c4a34eda32e442cc3ff532f568fd/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }, 
          ],
          value: "",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },

        // 衣着模块
    {
      title: "选择衣着",
      description: "按衣着分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择角色",
          type: "enumeration",
          enumOptions: [
            { 
              title: "选择类型", 
              value: ""
            },
            { 
              title: "黑丝", 
              value: "https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "过膝袜", 
              value: "https://jable.tv/tags/knee-socks/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "运动装", 
              value: "https://jable.tv/tags/sportswear/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "肉丝", 
              value: "https://jable.tv/tags/flesh-toned-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "丝袜", 
              value: "https://jable.tv/tags/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "眼镜娘", 
              value: "https://jable.tv/tags/glasses/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "兽耳", 
              value: "https://jable.tv/tags/kemonomimi/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "渔网", 
              value: "https://jable.tv/tags/fishnets/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "水着", 
              value: "https://jable.tv/tags/swimsuit/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "校服", 
              value: "https://jable.tv/tags/school-uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "旗袍", 
              value: "https://jable.tv/tags/cheongsam/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "婚纱", 
              value: "https://jable.tv/tags/wedding-dress/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "女僕", 
              value: "https://jable.tv/tags/maid/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "和服", 
              value: "https://jable.tv/tags/kimono/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "兔女郎", 
              value: "https://jable.tv/tags/bunny-girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "Cosplay", 
              value: "https://jable.tv/tags/Cosplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "處女作/引退作", 
              value: "https://jable.tv/tags/debut-retires/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
          ],
          value: "",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
                // 剧情模块
    {
      title: "选择剧情",
      description: "按剧情分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择角色",
          type: "enumeration",
          enumOptions: [
            { 
              title: "选择类型", 
              value: ""
            },
            { 
              title: "醉男", 
              value: "https://jable.tv/tags/ugly-man/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "亲属", 
              value: "https://jable.tv/tags/kinship/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "童贞", 
              value: "https://jable.tv/tags/virginity/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "复仇", 
              value: "https://jable.tv/tags/avenge/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "巨汉", 
              value: "https://jable.tv/tags/giant/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "媚药", 
              value: "https://jable.tv/tags/love-potion/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "出轨", 
              value: "https://jable.tv/tags/affair/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "催眠", 
              value: "https://jable.tv/tags/hypnosis//?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "偷拍", 
              value: "https://jable.tv/tags/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "NTR", 
              value: "https://jable.tv/tags/ntr/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "年龄差", 
              value: "https://jable.tv/tags/age-difference/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "下雨天", 
              value: "https://jable.tv/tags/rainy-day/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "时间停止", 
              value: "https://jable.tv/tags/time-stop/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
          ],
          value: "",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },

                // 地点模块
    {
      title: "选择地点",
      description: "按地点分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择角色",
          type: "enumeration",
          enumOptions: [
            { 
              title: "选择类型", 
              value: ""
            },
            { 
              title: "电车", 
              value: "https://jable.tv/tags/tram/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "处女", 
              value: "https://jable.tv/tags/first-night/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "监狱", 
              value: "https://jable.tv/tags/prison/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "温泉", 
              value: "https://jable.tv/tags/hot-spring/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "泳池", 
              value: "https://jable.tv/tags/swimming-pool/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "汽车", 
              value: "https://jable.tv/tags/car/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "厕所", 
              value: "https://jable.tv/tags/toilet/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "学校", 
              value: "https://jable.tv/tags/school/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "魔镜号", 
              value: "https://jable.tv/tags/magic-mirror/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "洗浴场", 
              value: "https://jable.tv/tags/bathing-place/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "图书馆", 
              value: "https://jable.tv/tags/library/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "健身房", 
              value: "https://jable.tv/tags/gym-room/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "便利店", 
              value: "https://jable.tv/tags/store/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
          ],
          value: "",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
                // 身材模块
    {
      title: "选择身材",
      description: "按身材分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择角色",
          type: "enumeration",
          enumOptions: [
            { 
              title: "选择类型", 
              value: ""
            },
            { 
              title: "长身", 
              value: "https://jable.tv/tags/tall/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "软体", 
              value: "https://jable.tv/tags/flexible-body/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "贫乳", 
              value: "https://jable.tv/tags/small-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "美腿", 
              value: "https://jable.tv/tags/beautiful-leg/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "美尻", 
              value: "https://jable.tv/tags/beautiful-butt/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "纹身", 
              value: "https://jable.tv/tags/tattoo/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "短发", 
              value: "https://jable.tv/tags/short-hair/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "白虎", 
              value: "https://jable.tv/tags/hairless-pussy/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "熟女", 
              value: "https://jable.tv/tags/mature-woman/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "巨乳", 
              value: "https://jable.tv/tags/big-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "少女", 
              value: "https://jable.tv/tags/girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "娇小", 
              value: "https://jable.tv/tags/dainty/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
          ],
          value: "",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },    
                // 角色模块
    {
      title: "选择角色",
      description: "按角色分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择角色",
          type: "enumeration",
          enumOptions: [
            { 
              title: "选择类型", 
              value: ""
            },
            { 
              title: "人妻", 
              value: "https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "医生", 
              value: "https://jable.tv/tags/doctor/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "护士", 
              value: "https://jable.tv/tags/nurse/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "老师", 
              value: "https://jable.tv/tags/teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "空姐", 
              value: "https://jable.tv/tags/flight-attendant/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "逃犯", 
              value: "https://jable.tv/tags/fugitive/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "情侣", 
              value: "https://jable.tv/tags/couple/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "主播", 
              value: "https://jable.tv/tags/female-anchor/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "风俗娘", 
              value: "https://jable.tv/tags/club-hostess-and-sex-worker/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "家政妇", 
              value: "https://jable.tv/tags/housewife/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "搜查官", 
              value: "https://jable.tv/tags/detective/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "未亡人", 
              value: "https://jable.tv/tags/widow/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "球队经理", 
              value: "https://jable.tv/tags/team-manager/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
          ],
          value: "",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },    
    // 影片主题模块
    {
      title: "影片主题",
      description: "按主题分类浏览影片",
      requiresWebView: false,
      functionName: "loadPage",
      params: [
        {
          name: "url",
          title: "选择主题",
          type: "enumeration",
          enumOptions: [
            { 
              title: "选择类型", 
              value: ""
            },
            { 
              title: "角色剧情", 
              value: "https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "制度诱惑", 
              value: "https://jable.tv/categories/uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "直接开啪", 
              value: "https://jable.tv/categories/sex-only/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "丝袜美腿", 
              value: "https://jable.tv/categories/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "主奴调教", 
              value: "https://jable.tv/categories/bdsm/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "多P群交", 
              value: "https://jable.tv/categories/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "男友视角", 
              value: "https://jable.tv/categories/pov/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "凌辱快感", 
              value: "https://jable.tv/categories/insult/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "盗摄偷拍", 
              value: "https://jable.tv/categories/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "无码解放", 
              value: "https://jable.tv/categories/uncensored/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "女同欢愉", 
              value: "https://jable.tv/categories/lesbian/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
          ],
          value: "https://jable.tv/categories/all/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          description: "排序",
          enumOptions: [
            { title: "最新发布", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" },
          ],
        },
        { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
      ],
    },
  ],
};


async function search(params = {}) {
  const url = `https://jable.tv/search/${params.keyword}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${params.keyword}`;
  params.url = url;
  return await loadPage(params);
}

async function loadPage(params = {}) {
  const sections = await loadPageSections(params);
  const items = sections.flatMap((section) => section.childItems);
  return items;
}

async function loadPageSections(params = {}) {
  try {
    let url = params.url;
    if (!url) {
      throw new Error("地址不能为空");
    }
    if (params["sort_by"]) {
      url += `&sort_by=${params.sort_by}`;
    }
    if (params["from"]) {
      url += `&from=${params.from}`;
    }
    // 1. 获取HTML内容
    console.log("=== 获取HTML内容 ===");
    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    if (!response || !response.data || typeof response.data !== "string") {
      throw new Error("无法获取有效的HTML内容");
    }

    const htmlContent = response.data;
    console.log(`获取到HTML内容长度: ${htmlContent.length} 字符`);
    console.log(htmlContent);

    return parseHtml(htmlContent);
  } catch (error) {
    console.error("测试过程出错:", error.message);
    throw error;
  }
}

async function parseHtml(htmlContent) {
  // 2. 解析HTML
  console.log("\n=== 解析HTML ===");
  const $ = Widget.html.load(htmlContent);
  const sectionSelector = ".site-content .py-3,.pb-e-lg-40";
  const itemSelector = ".video-img-box";
  const coverSelector = "img";
  const durationSelector = ".absolute-bottom-right .label";
  const titleSelector = ".title a";

  let sections = [];
  //use cheerio to parse html
  const sectionElements = $(sectionSelector).toArray();
  for (const sectionElement of sectionElements) {
    const $sectionElement = $(sectionElement);
    var items = [];
    const sectionTitle = $sectionElement.find(".title-box .h3-md").first();
    const sectionTitleText = sectionTitle.text();
    console.log("sectionTitleText:", sectionTitleText);
    const itemElements = $sectionElement.find(itemSelector).toArray();
    console.log("itemElements:", itemElements);
    if (itemElements && itemElements.length > 0) {
      for (const itemElement of itemElements) {
        const $itemElement = $(itemElement);
        const titleId = $itemElement.find(titleSelector).first();
        console.log("titleId:", titleId.length);
        const url = titleId.attr("href") || "";
        console.log("url:", url);
        if (url && url.includes("jable.tv")) {
          const durationId = $itemElement.find(durationSelector).first();
          const coverId = $itemElement.find(coverSelector).first();
          const cover = coverId.attr("data-src");
          const video = coverId.attr("data-preview");
          const title = titleId.text();
          const duration = durationId.text();
          const item = {
            id: url,
            type: "url",
            title: title,
            durationText: duration,
            backdropPath: cover,
            previewUrl: video,
            link: url
          };
          console.log("item:", item);
          items.push(item);
        }
      }

      sections.push({
        id: sectionTitleText,
        type: "web",
        title: sectionTitleText,
        childItems: items,
      });
    }
  }
  console.log("sections:", sections);
  return sections;
}

async function loadDetail(link) {
  const response = await Widget.http.get(link, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });
  //get hls with regex var hlsUrl = 'https://hot-box-gen.mushroomtrack.com/hls/TJHqwWuFPCwYqa4hyv1cCg/1746892414/50000/50377/50377.m3u8';
  const hlsUrl = response.data.match(/var hlsUrl = '(.*?)';/)[1];
  if (!hlsUrl) {
    throw new Error("无法获取有效的HLS URL");
  }
  console.log("hlsUrl:", hlsUrl);
  const item = {
    id: link,
    type: "detail",
    videoUrl: hlsUrl,
    customHeaders: {
      "Referer": link,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  };
  const sections = await parseHtml(response.data);
  const items = sections.flatMap((section) => section.childItems);
  if (items.length > 0) {
    item.childItems = items;
  }
  return item;
}
