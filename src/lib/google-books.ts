import { GoogleBookData } from "./types";

async function fetchFromGoogle(params: string): Promise<GoogleBookData | null> {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=1`;
    // console.log(`Fetching: ${url}`); // Uncomment for verbose debug

    const response = await fetch(url, { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      console.error(`Google API Error for ${params}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      console.warn(`No items found for: ${params}`);
      return null;
    }

    const volumeInfo = data.items[0].volumeInfo;
    return {
      id: data.items[0].id,
      title: volumeInfo.title,
      authors: volumeInfo.authors || [],
      description: volumeInfo.description || "",
      thumbnail: volumeInfo.imageLinks?.thumbnail?.replace("http://", "https://") || "https://placehold.co/400x600?text=No+Cover",
      publishedDate: volumeInfo.publishedDate,
      pageCount: volumeInfo.pageCount,
      categories: volumeInfo.categories,
    };
  } catch (error) {
    console.error(`Fetch error for ${params}:`, error);
    return null;
  }
}

export async function getBookData(isbn?: string, query?: string): Promise<GoogleBookData | null> {
  // 1. Пробуем по ISBN
  if (isbn) {
    const data = await fetchFromGoogle(`isbn:${isbn}`);
    if (data) return data;
  }

  // 2. Если не вышло, пробуем по запросу
  if (query) {
    // encodeURIComponent важен для кириллицы
    const data = await fetchFromGoogle(encodeURIComponent(query));
    if (data) return data;
  }

  return null;
}
