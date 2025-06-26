import './style.css';
// 이미지 URL 배열 (샘플 이미지는 Unsplash 사용)
const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80',
  'https://eclass.donga.ac.kr/customs/main/header_logo.png',
];

const gallery = document.getElementById('gallery');

if (gallery) {
  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gallery Image';
    gallery.appendChild(img);
  });
}
