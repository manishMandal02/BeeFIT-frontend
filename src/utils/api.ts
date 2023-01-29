import axios from 'axios';

export enum APIMethods {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete',
}

type Api<Y> = {
  method: APIMethods;
  url: string;
  body?: Y;
};

export const api = async <T, Y = {}>({ method, url, body }: Api<Y>) => {
  const { data } = await axios[method]<T>(url, body, {});
  return data;
};
