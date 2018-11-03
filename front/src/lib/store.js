export const getItem = async (store, key) => {
  const value = await store.getItem(key);
  return { id: key, ...value };
};

export const getAll = async store => {
  const keys = await store.keys();
  return Promise.all(keys.map(key => getItem(store, key)));
};
