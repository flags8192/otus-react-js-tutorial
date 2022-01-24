import { getUserOrderStates as getUserOrderStatesEasy1, OrderState } from './easy1';
import { getOrderState, Order } from './easy2';
import { omit } from './easy3';
import { filterOnlyInitialAndInWorkOrder } from './medium1';
import { getUserOrderStates as getUserOrderStatesMedium3 } from './medium3';

const data1: Array<OrderState> = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullFilled",
];
console.log('getUserOrderStates => ', getUserOrderStatesEasy1(data1))

const data2: Order = {
  state: "initial",
  sum: 1,
};
console.log('getOrderState =>', getOrderState(data2));

console.log('omit =>', omit(data2, 'sum'));

console.log('filterOnlyInitialAndInWorkOrder => ', filterOnlyInitialAndInWorkOrder(data2));

console.log('getUserOrderStatesMedium3 => ', getUserOrderStatesMedium3(data1))
