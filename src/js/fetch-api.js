import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books';

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
