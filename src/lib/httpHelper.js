import request from 'superagent';

/**
  Http Request helper to make rest calls to backend services.
  All the calls return promise.
**/
const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
};

export default {

  get(url, customHeaders = {}) {
    Object.assign(customHeaders, headers);
    return request.get(url)
    .set(customHeaders);
  },

  post(url, body, customHeaders = {}) {
    Object.assign(customHeaders, headers);
    return request.post(url)
    .set(customHeaders)
    .send(body);
  },

  delete(url, customHeaders = {}) {
    Object.assign(customHeaders, headers);
    return request.delete(url)
    .set(customHeaders);
  },

  put(url, body, customHeaders = {}) {
    Object.assign(customHeaders, headers);
    return request.put(url)
    .set(customHeaders)
    .send(body);
  }
}

