import RemoteDBProvider from '../infra/RemoteDBPorvider';

const addItemToCart = async (item) => {
  try {
    const res = await RemoteDBProvider.collection('carts').add({
      item,
      quantity: 1,
    });
    console.log('remote db service add to cart res: ', res);
    return res;
  } catch (err) {
    console.log('remote db service error: ', err);
  }
};

export default {
  addItemToCart,
}