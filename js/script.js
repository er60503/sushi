// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

// 定義各個篩選類別的卡片資料
const cardData = {
    All: [
      { imgSrc: "assets/071.png", title: "帶膜鮭魚卵", rating: "4.9", price: "$100" },
      { imgSrc: "assets/BluefinTuna.png", title: "黑鮪魚拼盤", rating: "5.0", price: "$100.00", active: true },
      { imgSrc: "assets/140.png", title: "良平手卷", rating: "4.7", price: "$100.00" },
    ],
    sushi: [
      { imgSrc: "assets/071.png", title: "壽司", rating: "4.8", price: "$120" },
      { imgSrc: "assets/071.png", title: "壽司", rating: "4.6", price: "$90" },
      { imgSrc: "assets/071.png", title: "壽司", rating: "5.0", price: "$80", active: true },
    ],
    sashimi: [
      { imgSrc: "assets/140.png", title: "壽", rating: "4.8", price: "$120" },
      { imgSrc: "assets/140.png", title: "壽", rating: "4.6", price: "$90" },
      { imgSrc: "assets/140.png", title: "壽", rating: "5.0", price: "$80", active: true },
    ],
    chickenskewers: [
      { imgSrc: "assets/071.png", title: "司", rating: "4.8", price: "$120" },
      { imgSrc: "assets/071.png", title: "司", rating: "4.6", price: "$90" },
      { imgSrc: "assets/071.png", title: "司", rating: "5.0", price: "$80", active: true },
    ],
    drinks: [
      { imgSrc: "assets/071.png", title: "1", rating: "4.8", price: "$120" },
      { imgSrc: "assets/071.png", title: "1", rating: "4.6", price: "$90" },
      { imgSrc: "assets/071.png", title: "1", rating: "5.0", price: "$80", active: true },
    ],
  };
  
  // 初始化卡片圖片和內容
  function initializeCards() {
    const catalogue = document.querySelector('.popular-foods__catalogue');
    catalogue.innerHTML = ''; // 清空現有的卡片
  
    cardData.All.forEach((item, index) => {
      const cardElement = document.createElement('article');
      cardElement.classList.add('popular-foods__card');
      if (item.active) cardElement.classList.add('active-card'); // 如果 active 為 true，套用樣式
  
      cardElement.innerHTML = `
        <img class="popular-foods__card-image" src="${item.imgSrc}" alt="${item.title}" />
        <h4 class="popular-foods__card-title">${item.title}</h4>
        <div class="popular-foods__card-details flex-between">
          <div class="popular-foods__card-rating">
            <img src="assets/star.svg" alt="star" />
            <p>${item.rating}</p>
          </div>
          <p class="popular-foods__card-price">${item.price}</p>
        </div>
      `;
      catalogue.appendChild(cardElement);
    });
  }
  
  // 更新卡片圖片和文字
  function updateCardContent(category) {
    const cards = document.querySelectorAll('.popular-foods__card');
    cardData[category].forEach((item, index) => {
      const cardImage = cards[index].querySelector('.popular-foods__card-image');
      const cardTitle = cards[index].querySelector('.popular-foods__card-title');
  
      // 更新圖片和文字
      cardImage.src = item.imgSrc;
      cardImage.alt = item.title;
      cardTitle.textContent = item.title;
    });
  }
  
  // 初始渲染所有卡片
  initializeCards();
  
  // 點擊按鈕切換圖片和文字
  document.querySelectorAll('.popular-foods__filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      // 切換 active 樣式
      document.querySelectorAll('.popular-foods__filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // 根據 img 的唯一 class 判斷 category
      const img = button.querySelector('img');
      const category = img ? img.classList[0] : 'All'; // 使用 img 的第一個 class 作為分類，或預設為 'All'
  
      // 更新卡片內容
      updateCardContent(category);
    });
  });
  