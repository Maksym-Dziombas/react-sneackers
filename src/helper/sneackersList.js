import axios from 'axios';

import sneackers1 from './../images/sneackers/sneackers-1.jpg';
import sneackers2 from './../images/sneackers/sneackers-2.jpg';
import sneackers3 from './../images/sneackers/sneackers-3.jpg';
import sneackers4 from './../images/sneackers/sneackers-4.jpg';
import sneackers5 from './../images/sneackers/sneackers-5.jpg';
import sneackers6 from './../images/sneackers/sneackers-6.jpg';
import sneackers7 from './../images/sneackers/sneackers-7.jpg';
import sneackers8 from './../images/sneackers/sneackers-8.jpg';
import sneackers9 from './../images/sneackers/sneackers-9.jpg';
import sneackers10 from './../images/sneackers/sneackers-10.jpg';
import sneackers11 from './../images/sneackers/sneackers-11.jpg';
import sneackers12 from './../images/sneackers/sneackers-12.jpg';

const sneackersList = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Air Max 270",
    image: sneackers2,
    price: "12 999"
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: sneackers3,
    price: "8 499"
  },
  {
    id: 3,
    title: "Мужские Кроссовки Under Armour Curry 8",
    image: sneackers5,
    price: "15 199"
  },
  {
    id: 4,
    title: "Мужские Кроссовки Nike Kyrie 7",
    image: sneackers6,
    price: "11 299"
  },
  {
    id: 5,
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    image: sneackers7,
    price: "10 799"
  },
  {
    id: 6,
    title: "Мужские Кроссовки Nike LeBron XVIII",
    image: sneackers8,
    price: "16 499"
  },
  {
    id: 7,
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    image: sneackers9,
    price: "13 999"
  },
  {
    id: 8,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    image: sneackers11,
    price: "8 999"
  },
  {
    id: 9,
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    image: sneackers12,
    price: "11 299"
  }
]

const sneackersJSON = JSON.stringify(sneackersList);

export default sneackersList;