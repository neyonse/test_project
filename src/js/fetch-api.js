import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books';
// const MY_API_KEY = '37383891-385c0c3fa5b4b213da48ba87c';

export async function fetchCategoriesList() {
  const url = `${BASE_URL}/category-list`;

  const response = await axios.get(url);
  return response.data;
}

export async function fetchTopBooks() {
  const url = `${BASE_URL}/top-books`;

  const response = await axios.get(url);
  return response.data;
}

export async function fetchCategory(selectedCategoryName) {
  const url = `${BASE_URL}/category?category=${selectedCategoryName}`;

  const response = await axios.get(url);
  return response.data;
}

// function getFetchCategoriesUrl(inputData, page) {
//   const q = inputData.replace(' ', '+');

//   const params = {
//     key: MY_API_KEY,
//     q,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page,
//     per_page: 40,
//   };

//   const paramString = Object.entries(params)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('&');

//   return `${BASE_URL}?${paramString}`;
// }
