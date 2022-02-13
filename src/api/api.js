import { get } from "./http";

export const getMoney = () => {
  return get();
};

export const convertMoney = (base) => {
  return get(
    `/${base}`
  );
};

