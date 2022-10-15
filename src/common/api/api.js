import { apiUrl } from '../constants/constants';
import { Token as token } from '../storage/token';

class Api {
  async get(url, params) {

    url = `${apiUrl}${url}`;

    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key]),
      );
    }
    return fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: (await token.get()) && `Bearer ${await token.get()}`,
      }),
    }).then(async (response) => {
      if (response.status === 401 ) {
        console.log('Unauthorized',);
      }
      return {
        ok: response.ok,
        status: response.status,
        res: await response.json(),
      };
    }).catch((err) => err);
  }

  async post(url, data) {
    let isFormData = data instanceof FormData;
    url = `${apiUrl}${url}`;

    return fetch(url, {
      method: 'POST',
      headers: isFormData
        ? new Headers({
          Authorization: (await token.get()) && `Bearer ${await token.get()}`,
        })
        : new Headers({
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: (await token.get()) && `Bearer ${await token.get()}`,
        }),
      body: isFormData ? data : JSON.stringify(data),
    })
      .then(async (response) => {
        if (response.status === 401) {
          console.log('Unauthorized');
        }
        return {
          ok: response.ok,
          status: response.status,
          res: await response.json(),
        };
      })
      .catch((err) => err);
  }

  put(url, id, data) {
    let isFormData = data instanceof FormData;

    url = new URL(`${apiUrl}${url}/${id}`);
    return fetch(url, {
      method: 'PUT',
      headers: isFormData
        ? new Headers({ Authorization: `Bearer ${token.get()}` })
        : new Headers({
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token.get()}`,
        }),
      body: isFormData ? data : JSON.stringify(data),
    })
      .then(async (response) => {
        if (response.status === 401) {
          console.log('Unauthorized');
        }
        return { ok: response.ok, res: await response.json() };
      })
      .catch((err) => err);
  }

  delete(url, id) {
    url = new URL(`${apiUrl}${url}/${id}`);
    return fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: `Bearer ${token.get()}`,
      }),
    })
      .then(async (response) => {
        if (response.status === 401) {
          console.log('Unauthorized');
        }
        return { ok: response.ok, res: await response.json() };
      })
      .catch((err) => err);
  }

  convertFormData(data) {
    let dataBody = new FormData();
    Object.keys(data).forEach((key) => {
      if (!Array.isArray(data[key])) {
        const isFile = data[key] && data[key].size;
        const isJson = typeof data[key] === 'object';
        dataBody.append(
          key,
          isFile || !isJson ? data[key] : JSON.stringify(data[key]),
        );
      } else {
        data[key].forEach((item) => dataBody.append(key, item));
      }
    });
    return dataBody;
  }
}

export default new Api();