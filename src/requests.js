const BASE_URL = 'https://forecast-ut-88jlk.ondigitalocean.app/bookshelf';

async function parse(fetchPromise) {
  const response = await fetchPromise;
  if (response.ok) {
    return await response.json();
  } else {
    const data = await response.json();
    throw Error(data.error);
  }
}

export const getBooksData = async () => await parse(fetch(`${BASE_URL}/books`));
