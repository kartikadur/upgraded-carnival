import * as fromPizzas from './pizzas.reducer';
import * as fromActions from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

describe('Pizzas Reducer', () => {

  let pizzas: Pizza[];
  let pizzaCreate: Pizza;
  let pizzaUpdate: Pizza;
  let entities: fromPizzas.PizzaEntity;
  let error: any;

  beforeEach(() => {
    pizzas = [
      { id: 1, name: 'Pizza #1', toppings: [] },
      { id: 2, name: 'Pizza #2', toppings: [] },
    ];
    pizzaCreate = { id: 3, name: 'Pizza #3', toppings: [] };
    pizzaUpdate = { id: 2, name: 'Pizza #4', toppings: [] };
    entities = pizzas.reduce(
      (entities: fromPizzas.PizzaEntity, pizza: Pizza) => {
        return {
          ...entities,
          [pizza.id]: pizza,
        }
      },
      {}
    )
    error = {
      message: 'Error Message',
    };
  })

  describe('Pizzas Reducer Actions', () => {
    describe('undefined action', () => {
      it('should return the default state', () => {
        const { initialState } = fromPizzas;
        const action = {} as any;
        const state = fromPizzas.reducer(undefined, action);

        expect(state).toBe(initialState);
      });
    });

    describe('LOAD_PIZZAS action', () => {
      it('should set loading to true', () => {
        const { initialState } = fromPizzas;
        const action = new fromActions.LoadPizzas();
        const state = fromPizzas.reducer(initialState, action);

        expect(state.entities).toEqual({});
        expect(state.loading).toEqual(true);
        expect(state.loaded).toEqual(false);
      });
    });

    describe('LOAD_PIZZAS_SUCCESS action', () => {
      it('should map an array to entities', () => {
        const { initialState } = fromPizzas;
        const action = new fromActions.LoadPizzasSuccess(pizzas);
        const state = fromPizzas.reducer(initialState, action);

        expect(state.entities).toEqual(entities);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(true);
      });
    });

    describe('LOAD_PIZZAS_FAIL action', () => {
      it('should return initial state', () => {
        const { initialState } = fromPizzas;
        const action = new fromActions.LoadPizzasFail(error);
        const state = fromPizzas.reducer(initialState, action);

        expect(state).toEqual(initialState);
      });

      it('should return previous state', () => {
        const { initialState } = fromPizzas;
        const previousState = { ...initialState, loading: true };
        const action = new fromActions.LoadPizzasFail(error);
        const state = fromPizzas.reducer(previousState, action);

        expect(state).toEqual(initialState);
      });
    });

    describe('CREATE_PIZZA_SUCCESS action', () => {
      it('should add new pizza to entities', () => {
        const { initialState } = fromPizzas;
        const previousState = { ...initialState, entities }
        const action = new fromActions.CreatePizzaSuccess(pizzaCreate);
        const nextState = fromPizzas.reducer(previousState, action);

        expect(Object.keys(nextState.entities).length).toBe(3);
        expect(nextState.entities).toEqual({ ...entities, [pizzaCreate.id]: pizzaCreate});
      });
    });

    describe('UPDATE_PIZZA_SUCCESS action', () => {
      it('should update existing pizza in entities', () => {
        const { initialState } = fromPizzas;
        const previousState = { ...initialState, entities }
        const action = new fromActions.UpdatePizzaSuccess(pizzaUpdate);
        const nextState = fromPizzas.reducer(previousState, action);

        expect(Object.keys(nextState.entities).length).toBe(2);
        expect(nextState.entities).toEqual({ ...entities, [pizzaUpdate.id]: pizzaUpdate});
      });
    });

    describe('DELETE_PIZZA_SUCCESS action', () => {
      it('should remove existing pizza from entities', () => {
        const { initialState } = fromPizzas;
        const previousState = { ...initialState, entities }
        const action = new fromActions.DeletePizzaSuccess(pizzas[0]);
        const nextState = fromPizzas.reducer(previousState, action);

        expect(Object.keys(nextState.entities).length).toBe(1);
        expect(nextState.entities).toEqual({ [pizzas[1].id]: pizzas[1]});
      });
    });
  });

  describe('Pizzas Reducer Selectors', () => {
    describe('getPizzasEntities()', () => {
      it('should return .entities', () => {
        const { initialState } = fromPizzas;
        const previousState = { ...initialState, entities }
        const slice = fromPizzas.getPizzasEntities(previousState);

        expect(slice).toEqual(entities);
      });
    });
    describe('getPizzasLoading()', () => {
      it('should return .loading', () => {
        const { initialState } = fromPizzas;
        const previousState = { ...initialState, loading: true }
        const slice = fromPizzas.getPizzasLoading(previousState);

        expect(slice).toEqual(true);
      });
    });
    describe('getPizzasLoaded()', () => {
      it('should return .loaded', () => {
        const { initialState } = fromPizzas;
        const previousState = { ...initialState, loaded: true }
        const slice = fromPizzas.getPizzasLoaded(previousState);

        expect(slice).toEqual(true);
      });
    });
  });
});