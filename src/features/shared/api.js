const apiUrl = 'http://localhost:5000/';

const toJsonOrStream = (resp) => {
    const contentType = resp.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/json') !== -1) {
        return resp.json();
      }
      if (contentType.indexOf('application/octet-stream') !== -1) {
        return resp;
      }
    }
    return {};
  };

export const getPeliculas = async () => {
  return fetch(`${apiUrl}Peliculas`)
  .then(toJsonOrStream)
  .catch((error) => {
    throw error;
  });
}

export async function getCines () {
  return fetch(`${apiUrl}Cines`)
  .then(toJsonOrStream)
  .catch((error) => {
    throw error;
  });
}