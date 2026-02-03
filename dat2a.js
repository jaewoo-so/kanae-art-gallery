// ============================================================
// [데이터 설정 파일]
// 모든 이미지는 images/ 폴더 안에 있어야 합니다.
// ============================================================

const MY_DATA = {
    galleries: [
        {
            id: 'poodle', 
            name: 'poodle',
            // images/icons/dog.svg 파일을 불러옵니다.
            icon: 'poodle.svg', 
            slides: [
                { 
                    theme: 'dark', 
                    ratio: 'ratio-portrait', 
                    img: '01.jpg',   // images/poodle/1.jpg
                    title: 'Chinon', 
                    desc: '가장 좋아하는 사진입니다.' 
                },
                { 
                    theme: 'dark', 
                    ratio: 'ratio-square', 
                    img: '02.jpg',   // images/poodle/2.png
                    title: '겨울 푸들', 
                    desc: '눈 오는 날 찍었어요.' 
                },
                { 
                    theme: 'dark', 
                    ratio: 'ratio-portrait', 
                    img: '03.jpg', 
                    title: '달리기', 
                    desc: '신나게 뛰는 모습' 
                },
                { 
                    theme: 'dark', 
                    ratio: 'ratio-landscape', 
                    img: '05.jpg', 
                    title: '달리기', 
                    desc: '신나게 뛰는 모습' 
                },
                { 
                    theme: 'dark', 
                    ratio: 'ratio-portrait', 
                    img: '06.jpg', 
                    title: '달리기', 
                    desc: '신나게 뛰는 모습' 
                },
            ]
        },
        {
            id: 'retriever',
            name: 'retriever',
            icon: 'retriever.svg', // images/icons/bone.svg
            slides: [
                { 
                    theme: 'dark', 
                    ratio: 'ratio-landscape', 
                    img: '1.jpg', 
                    title: '웃는 얼굴', 
                    desc: '해맑은 미소' 
                }
            ]
        },
        {
            id: 'cat',
            name: 'cat',
            icon: 'cat.svg', // images/icons/bone.svg
            slides: [
                { 
                    theme: 'dark', 
                    ratio: 'ratio-landscape', 
                    img: '1.jpg', 
                    title: '웃는 얼굴', 
                    desc: '해맑은 미소' 
                }
            ]
        },
        {
            id: 'item',
            name: 'item',
            icon: 'item.svg', // images/icons/bone.svg
            slides: [
                { 
                    theme: 'dark', 
                    ratio: 'ratio-landscape', 
                    img: '1.jpg', 
                    title: '웃는 얼굴', 
                    desc: '해맑은 미소' 
                }
            ]
        }

    ],

    bio: {
        id: 'bio',
        name: 'Biography',
        icon: 'M12,4A4,4,0,0,1,16,8A4,4,0,0,1,12,12A4,4,0,0,1,8,8A4,4,0,0,1,12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
        backgroundImg: 'bg.jpg',
        title: '작가 소개',
        subtitle: '전시 이력 및 활동 내역',
        history: [
            { title: '서울 전시', date: '2023.10', img: 'his1.jpg' },
            { title: '부산 전시', date: '2023.12', img: 'his2.jpg' },
        ]
    }
};