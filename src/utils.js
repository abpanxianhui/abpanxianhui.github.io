const tabList = [
    {
        id: 1,
        title: '周五精选'
    },
    {
        id: 2,
        title: '男士内裤'
    },
    {
        id: 3,
        title: '枕头'
    },
    {
        id: 5,
        title: '被子'
    },
    {
        id: 6,
        title: '男袜'
    },
    {
        id: 7,
        title: '西式糕点'
    },
    {
        id: 8,
        title: '毛巾浴巾'
    }
]

const listData = [
    {
        id: 1,
        type: 1,
        title: [
            {
                value: '# 本月穿搭必备，9款',
                type: 0,
            },
            {
                value: '不脱水褪色',
                type: 1,
            },
            {
                value: '的T恤',
                type: 0,
            }
        ],
        commodityList: [
            {
                id: 1,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://img.pddpic.com/goods/images/2021-01-19/5f0142d9a1913d69025969b08fb4c408.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 70.5,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 2,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://img.pddpic.com/goods/images/2019-06-09/5efb1da9-39d5-4352-ba66-62ed0425a07c.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 51.7,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 3,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://commimg.pddpic.com/phone_adx/61fabfc6-dc81-11ea-af70-0a7b4181dab6.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 38.7,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 4,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://commimg.pddpic.com/phone_adx/40d08466-d722-11ea-b36e-72ce4feaaa8d.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 38.7,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 5,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://commimg-1.pddpic.com/phone_adx/c7ce10b0-4684-11eb-bd1b-9a172f0b18aa.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 38.7,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 6,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://img-1.pddpic.com/mms-material-img/2020-07-30/7df1d2dc9cb33fa1230c0122fb8d76f5.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 38.7,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 7,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://img-1.pddpic.com/mms-material-img/2020-07-30/7df1d2dc9cb33fa1230c0122fb8d76f5.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 38.7,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 8,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://img-1.pddpic.com/goods/images/2020-05-02/ecec23d9300f73e1d9ae3bc201834a0f.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 38.7,
                brand: '盛放 纯色短袖T恤'
            },
            {
                id: 9,
                comment: '质量真的很好，是那种厚软软的料子，穿着很舒服。性价比超高。',
                img: 'https://img-1.pddpic.com/goods/images/2019-07-08/5e8f532d-11cb-4ab4-b167-56a6cba6687d.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 38.7,
                brand: '盛放 纯色短袖T恤'
            }
        ]
    },
    {
        id: 2,
        type: 1,
        title: [
            {
                value: '# 2月猜你想看这些',
                type: 0,
            },
            {
                value: '负离子',
                type: 1,
            },
            {
                value: '吹风机',
                type: 0,
            }
        ],
        commodityList: [
            {
                id: 1,
                comment: '外观漂亮，风大，冷热也都可以切换',
                img: 'https://img.pddpic.com/goods/images/2019-03-01/bc639f59-da90-4b4a-91c4-ab0c061f4b58.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 300.5,
                brand: '松下家用电吹风'
            },
            {
                id: 2,
                comment: '对比之后入了这款，吹完头发以后确实很顺滑不毛躁，噪音跟别的几十块钱的吹风机相比区别很大，能听出来的。学生党入这个足够了，干的也快',
                img: 'https://img-1.pddpic.com/goods/images/2019-11-29/e49d5bcb-8a3b-4753-b9f0-3a544ed93b23.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 3,
                comment: '风力很大，好用',
                img: 'https://img.pddpic.com/mms-material-img/2020-09-11/f6be1e5e-b51e-413f-b119-f139236e23d6.png?imageView2/2/w/1125/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 4,
                comment: '风量大，重量轻，声音不大，好用',
                img: 'https://img.pddpic.com/goods/images/2019-11-07/9a58d886-df4c-46b0-b945-e6bb8ec6a0bb.jpg?imageView2/2/w/1125/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 5,
                comment: '用过了再来评，很好用，声音小，吹得头发柔顺，好评',
                img: 'https://commimg-1.pddpic.com/phone_adx/948ee1be-2f0c-11eb-b7bb-86195d2380df.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 6,
                comment: '用过了再来评，很好用，声音小，吹得头发柔顺，好评',
                img: 'https://img-1.pddpic.com/goods/images/2020-05-02/b095f3c10c68778dccea4d6488177354.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 7,
                comment: '用过了再来评，很好用，声音小，吹得头发柔顺，好评',
                img: 'https://img-1.pddpic.com/mms-material-img/2020-10-10/e5da51cf-8506-4fac-bf78-db993bac15bf.jpeg.a.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 8,
                comment: '用过了再来评，很好用，声音小，吹得头发柔顺，好评',
                img: 'https://img-1.pddpic.com/mms-material-img/2020-12-26/52254e0e-faa1-43a9-a8ef-189f3a68ef8d.jpeg.a.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 9,
                comment: '用过了再来评，很好用，声音小，吹得头发柔顺，好评',
                img: 'https://img-1.pddpic.com/mms-material-img/2020-12-20/d290d6de-ac98-42a0-86c4-277bf5b70b09.jpeg.a.jpeg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
            {
                id: 10,
                comment: '用过了再来评，很好用，声音小，吹得头发柔顺，好评',
                img: 'https://commimg-1.pddpic.com/phone_adx/0f7073d2-a099-11ea-a364-9e967706bb26.jpg?imageView2/2/w/384/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 190.5,
                brand: '松下家用电吹风'
            },
        ]
    },
    {
        id: 3,
        type: 1,
        title: [
            {
                value: '# 盲如不踩雷! 9款',
                type: 0,
            },
            {
                value: '蓬松柔软',
                type: 1,
            },
            {
                value: '的化纤被',
                type: 0,
            }
        ],
        commodityList: [
            {
                id: 1,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://img.pddpic.com/goods/images/2019-08-23/b1859f97-a4c4-4fb7-98ad-29ed3b71c58e.jpg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 2,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://commimg.pddpic.com/phone_adx/1ea1d222-441f-11eb-8eff-ca586ce089e4.jpg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 3,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://img.pddpic.com/goods/images/2020-11-06/6bdb1028e6d52262b2d7b3dfbfbb4958.jpeg?imageView2/2/w/1300/q/80',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 4,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://commimg-1.pddpic.com/phone_adx/ba4cd6d2-d56a-11ea-b2d9-2af05a6efa59.jpg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 5,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://img-1.pddpic.com/goods/images/2020-03-15/97c386f1-dd43-49f7-8528-c17bd997dfa6.jpg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 6,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://img-1.pddpic.com/goods/images/2020-04-17/63f0a2590454dd8a693c529ef9b19216.jpeg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 7,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://img-1.pddpic.com/goods/images/2020-02-17/dbc71271df5d7468eddb1974d4eb80d7.jpeg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 8,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://img-1.pddpic.com/goods/images/2019-09-10/e24c7c99-2cf2-4c3b-a339-3dc0bed50216.jpg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
            {
                id: 9,
                comment: '这款被子包装细致，颜色好看，材质用料好，份量足，价格比较便宜。',
                img: 'https://img-1.pddpic.com/goods/images/2019-08-30/f16c62c0-4439-4651-84c4-5f541e1e87dc.jpg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 500.5,
                brand: '斯普尔加厚羽丝绒'
            },
        ]
    },
    {
        id: 4,
        type: 1,
        title: [
            {
                value: '# 2月哪些 ',
                type: 0,
            },
            {
                value: '营养早餐',
                type: 1,
            },
            {
                value: '的糕点最受美食爱好者欢迎',
                type: 0,
            }
        ],
        commodityList: [
            {
                id: 1,
                comment: '收到几天就吃完了，味道不错小孩也喜欢吃，吃起来松软甜甜的，里面的肉松很细腻，小孩读书每天拿几个去上学很好！再来回购！推荐购买[大爱]',
                img: 'https://img.pddpic.com/mms-material-img/2021-01-29/b248a25ef5b3ac923c129042db81fe80.jpeg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 10.5,
                brand: '友臣 肉松饼'
            },
            {
                id: 2,
                comment: '收到几天就吃完了，味道不错小孩也喜欢吃，吃起来松软甜甜的，里面的肉松很细腻，小孩读书每天拿几个去上学很好！再来回购！推荐购买[大爱]',
                img: 'https://img.pddpic.com/mms-material-img/2021-01-29/b248a25ef5b3ac923c129042db81fe80.jpeg?imageView2/2/w/1300/q/50',
                userImg: 'http://thirdqq.qlogo.cn/g?b=sdk&k=83MO2SIgeTCjpRUx8R3Tjg&s=140&t=1581947297',
                money: 10.5,
                brand: '友臣 肉松饼'
            },
        ]
    }
]


export { listData, tabList }