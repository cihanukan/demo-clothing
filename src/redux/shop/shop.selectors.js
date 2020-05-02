import { createSelector } from "reselect";

//input selector
const selectShop = (state) => state.shop;

//output selector
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

//Object.keys ==> convert object to array. We should convert the object for mapping on it
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  );
