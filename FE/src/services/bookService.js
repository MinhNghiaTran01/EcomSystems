import {get,post} from '../utils/request';

export const getListBookWithCategoryName = async (option) => {
  const res = await get(option);
  const data = await res.json();
  return data;
}
