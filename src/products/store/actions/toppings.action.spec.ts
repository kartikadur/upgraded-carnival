import * as fromToppings from './toppings.action';
import { Topping } from '../../models/topping.model';

describe('Toppings Actions', () => {
  let toppingOptions: Topping[] = [
    { "id": 1, "name": "anchovy" },
    { "id": 2, "name": "bacon" },
    { "id": 3, "name": "basil" },
    { "id": 4, "name": "chili" },
    { "id": 5, "name": "mozzarella" },
    { "id": 6, "name": "mushroom" },
    { "id": 7, "name": "olive" },
    { "id": 8, "name": "onion" },
    { "id": 9, "name": "pepper" },
    { "id": 10, "name": "pepperoni" },
    { "id": 11, "name": "sweetcorn" },
    { "id": 12, "name": "tomato" }
  ];
  // Load Toppings
  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = new fromToppings.LoadToppings();

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS,
        });

      });
    });
    describe('LoadToppingsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromToppings.LoadToppingsFail(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          payload,
        });

      });
    });
    describe('LoadToppingsSucccess', () => {
      it('should create an action', () => {
        const payload: Topping[] = toppingOptions
        const action = new fromToppings.LoadToppingsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload
        });

      });
    });
  });

  // Create Pizza
  describe('VisualizeToppings Actions', () => {
    describe('VisualizeToppings', () => {
      it('should create an action', () => {
        const payload: number[] = toppingOptions.map(topping => topping.id);
        const action = new fromToppings.VisualizeToppings(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.VISUALIZE_TOPPINGS,
          payload,
        });

      });
    });
  });
});