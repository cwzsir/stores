import React from 'react';
import iphone from "../img/iphone.svg"
import ipad from "../img/ipad.svg"
import appleMonitor from "../img/appleMonitor.svg"
import appleWatch from "../img/appleWatch.svg"
import airpodsMax from "../img/airpodsMax.svg"
import threeStar from "../icon/threeStarRating.svg"
import fourStar from "../icon/fourStarRating.svg"
import fullStar from "../icon/fullStarRating.svg"

const bestSuggestionConst =[
    {
        img: iphone,
        cashBack:'127',
        price: '88,699c',
        oldPrice: '99,999c',
        salePercent: '-48%',
        name: 'Iphone 13 Pro Max ',
        characteristic: 'Небесный Синий, 512 GB',
        threeStar: threeStar,
        reviews: '321',
        inStock: '23',
    },
    {
        img: ipad,
        cashBack:'127',
        price: '65,999c',
        oldPrice: '',
        salePercent: '',
        name: 'Ipad Air 2022',
        characteristic: 'Желтый, M1, 512 GB',
        threeStar: fourStar,
        reviews: '321',
        inStock: '23',
    },
    {
        img: appleMonitor,
        cashBack:'127',
        price: '100,500c',
        oldPrice: '119,999c',
        salePercent: '-48%',
        name: 'Apple Монитов',
        characteristic: '4,5К разрешение',
        threeStar: threeStar,
        reviews: '321',
        inStock: '23',
    },
    {
        img: appleWatch,
        cashBack:'127',
        price: '80,000c',
        oldPrice: '',
        salePercent: '',
        name: 'Apple Watch ULTRA',
        characteristic: 'Желтые, спортивные',
        threeStar: threeStar,
        reviews: '321',
        inStock: '23',
    },
    {
        img: airpodsMax,
        cashBack:'127',
        price: '56,699c',
        oldPrice: '',
        salePercent: '',
        name: 'Airpods Max',
        characteristic: 'H1 Чип',
        threeStar: fullStar,
        reviews: '120',
        inStock: '23',
    },
]

export default bestSuggestionConst;