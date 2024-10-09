import { TitleInterface } from "../context/AuthContext";
import { formatPrice } from "./formatValue";

export function getSum(titles: TitleInterface[]) {
  let value = 0;
  for (const element of titles) {
    value += Number(element.value);
  }
  return formatPrice(value);
}