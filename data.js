const MY_DATA = {
    intro: {
        // 배경으로 쓸 이미지 (poodle 폴더의 1.jpg 사용)
        targetFolderId: 'poodle', 
        bgImage: '00.jpg',
        
        // 화면 가운데 뜰 텍스트
        title: "MY GALLERY",
        // message: "忘れる怖さから握った針は、\n今、誰かの記憶を守るものに。\n\n私のシノン、\nそしてあなたの大切なあの子へ。\n永遠の時を縫い留めます。"
        message: "忘れたくなくて始めた刺繍は、\n誰かの記憶を守る仕事になりました。\n\n 大切なあの子が胸の中で\nいつまでも息づくよう、\n時を縫い留めます。"
        // message: "忘れてしまうのが怖くて握った針は\nいつしか誰かの記憶を守るものに\nなりました\n\n私のシノンがそうであるように\nあなたの大切なあの子が\n胸の中でいつまでも息づくよう\n一針一針\n時を縫い留めます"
    },
    galleries: [
        // 1. 푸들 (제목/설명 삭제함)
        {
            id: 'poodle', 
            name: 'poodle',
            icon: 'poodle.svg', 
            slides: [
                { theme: 'dark', ratio: 'ratio-portrait', img: '01.jpg' },
                { theme: 'dark', ratio: 'ratio-square', img: '02.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '03.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '04.jpg' },
                { theme: 'dark', ratio: 'ratio-landscape', img: '05.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '06.jpg' },
            ]
        },
        // 2. 리트리버
        {
            id: 'retriever',
            name: 'retriever',
            icon: 'retriever.svg',
            slides: [
                { theme: 'dark', ratio: 'ratio-square', img: '01.jpg' },
                { theme: 'dark', ratio: 'ratio-landscape', img: '02.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '03.jpg' },
                { theme: 'dark', ratio: 'ratio-square', img: '04.jpg' },
                { theme: 'dark', ratio: 'ratio-square', img: '05.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '06.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '07.jpg' },
            ]
        },
        {
            id: 'cat',
            name: 'cat',
            icon: 'cat.svg',
            slides: [
                { theme: 'dark', ratio: 'ratio-square', img: '01.jpg' },
                { theme: 'dark', ratio: 'ratio-landscape', img: '02.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '03.jpg' },
            ]
        },
        {
            id: 'item',
            name: 'item',
            icon: 'item.svg',
            slides: [
                { theme: 'dark', ratio: 'ratio-portrait', img: '01.jpg' },
                { theme: 'dark', ratio: 'ratio-landscape', img: '02.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '03.jpg' },
                { theme: 'dark', ratio: 'ratio-square', img: '04.jpg' },
                { theme: 'dark', ratio: 'ratio-landscape', img: '05.jpg' },
                { theme: 'dark', ratio: 'ratio-landscape', img: '06.jpg' },
                { theme: 'dark', ratio: 'ratio-landscape', img: '07.jpg' },
                { theme: 'dark', ratio: 'ratio-portrait', img: '08.jpg' },
                { theme: 'dark', ratio: 'ratio-square', img: '09.jpg' },
            ]
        },
    ],

    // 3. Bio (작가 소개)
    bio: {
        id: 'bio',
        name: 'Biography',
        icon: 'M12,4A4,4,0,0,1,16,8A4,4,0,0,1,12,12A4,4,0,0,1,8,8A4,4,0,0,1,12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
        backgroundImg: 'bg.jpg', 
        title: '작가 소개',
        subtitle: '전시 이력 및 활동 내역',
        history: [
            { title: 'HandMade In Japan Fes 2024', date: '2023. 10. 15', img: '01.jpg' },
            { title: 'HandMade In Japan Fes 2024', date: '2023. 12. 01', img: '02.jpg' },
            { title: '韓国・光州市の展示会', date: '2024. 03. 20', img: '03.jpg' },
            { title: '韓国,ソウル・COEX展示会', date: '2024. 03. 20', img: '04.jpg' },
            { title: '韓国,保護犬チャリティー展示会', date: '2024. 03. 20', img: '05.jpg' },
        ]
    }
};