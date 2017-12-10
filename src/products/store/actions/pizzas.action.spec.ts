import * as fromPizzas from './pizzas.action';
import { Pizza } from '../../models/pizza.model';

describe('Pizzas Actions', () => {
  let pizzaOptions: Pizza[] = [
    {
      "id": 1,
      "name": "Blazin' Inferno",
      "toppings": [
        { "id": 10, "name": "pepperoni" },
        { "id": 9, "name": "pepper" },
        { "id": 3, "name": "basil" },
        { "id": 4, "name": "chili" },
        { "id": 7, "name": "olive" },
        { "id": 2, "name": "bacon" }
      ],
    },
    {
      "id": 2,
      "name": "Seaside Surfin'",
      "toppings": [
        { "id": 6, "name": "mushroom" },
        { "id": 7, "name": "olive" },
        { "id": 2, "name": "bacon" },
        { "id": 3, "name": "basil" },
        { "id": 1, "name": "anchovy" },
        { "id": 8, "name": "onion" },
        { "id": 11, "name": "sweetcorn" },
        { "id": 9, "name": "pepper" },
        { "id": 5, "name": "mozzarella" }
      ],
    },
    {
      "id": 3,
      "name": "Plain Ol' Pepperoni",
      "toppings": [
        { "id": 10, "name": "pepperoni" }
      ],
    }
  ];
  // Load Pizzas
  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const action = new fromPizzas.LoadPizzas();

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS,
        });

      });
    });
    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPizzas.LoadPizzasFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload,
        });

      });
    });
    describe('LoadPizzasSucccess', () => {
      it('should create an action', () => {
        const payload: Pizza[] = pizzaOptions
        const action = new fromPizzas.LoadPizzasSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload
        });

      });
    });
  });

  // Create Pizza
  describe('CreatePizza Actions', () => {
    describe('CreatePizza', () => {
      it('should create an action', () => {
        const payload: Pizza = pizzaOptions[0]
        const action = new fromPizzas.CreatePizza(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA,
          payload,
        });

      });
    });
    describe('CreatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPizzas.CreatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_FAIL,
          payload,
        });

      });
    });
    describe('CreatePizzaSucccess', () => {
      it('should create an action', () => {
        const payload: Pizza = pizzaOptions[0]
        const action = new fromPizzas.CreatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_SUCCESS,
          payload
        });

      });
    });
  });

  // Update Pizza
  describe('UpdatePizza Actions', () => {
    describe('UpdatePizza', () => {
      it('should create an action', () => {
        const payload: Pizza = pizzaOptions[0]
        const action = new fromPizzas.UpdatePizza(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA,
          payload,
        });

      });
    });
    describe('UpdatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPizzas.UpdatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_FAIL,
          payload,
        });

      });
    });
    describe('UpdatePizzaSucccess', () => {
      it('should create an action', () => {
        const payload: Pizza = pizzaOptions[0]
        const action = new fromPizzas.UpdatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_SUCCESS,
          payload
        });

      });
    });
  });

  // Delete Pizza
  describe('DeletePizza Actions', () => {
    describe('DeletePizza', () => {
      it('should create an action', () => {
        const payload: Pizza = pizzaOptions[0]
        const action = new fromPizzas.DeletePizza(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA,
          payload,
        });

      });
    });
    describe('DeletePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPizzas.DeletePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA_FAIL,
          payload,
        });

      });
    });
    describe('DeletePizzaSucccess', () => {
      it('should create an action', () => {
        const payload: Pizza = pizzaOptions[0]
        const action = new fromPizzas.DeletePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA_SUCCESS,
          payload
        });

      });
    });
  });


});