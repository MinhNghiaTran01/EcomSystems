import {get,post} from '../utils/request';

export const getListCategory = async (option) => {
  try{
    const res = await get(option);
  const data = await res.json();
  return data;
  }
  catch(err){
    return []
  }
  
}
// export const postBooking = async (data,option) => {
//   const res = await post(data,option);
//   return res;
// }