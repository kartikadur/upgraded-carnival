import * as fromToppings from './toppings.reducer';
import * as fromActions from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

describe('Toppings Reducers', () => {

  let toppings: Topping[];
  let entities: fromToppings.ToppingEntity;
  let error: any;

  beforeEach(() => {
    toppings = [
      { "id": 1, "name": "anchovy" },
      { "id": 2, "name": "bacon" },
      { "id": 3, "name": "basil" }
    ];
    entities = toppings.reduce(
      (entities : fromToppings.ToppingEntity, topping: Topping) => {
        return {
          ...entities,
          [topping.id]: topping,
        }
      },
      {}
    );
    error = { message: 'Error Message' };
  });

  describe('Toppings Reducers Actions', () => {
    describe('undefined action', () => {
      it('should return default state', () => {
        const { initialState } = fromToppings;
        const action = {} as any;
        const state = fromToppings.reducer(undefined, action);

        expect(state).toBe(initialState);
      });
    });

    describe('LOAD_TOPPINGS action', () => {
      it('should return default state', () => {
        const { initialState } = fromToppings;
        const action = new fromActions.LoadToppings();
        const state = fromToppings.reducer(initialState, action);

        expect(state.entities).toEqual(initialState.entities);
        expect(state.loaded).toEqual(false);
        expect(state.loading).toEqual(true);
      });
    });

    describe('LOAD_TOPPINGS_FAIL action', () => {
      it('should return default state', () => {
        const { initialState } = fromToppings;
        const action = new fromActions.LoadToppingsFail(error);
        const state = fromToppings.reducer(initialState, action);

        expect(state.entities).toEqual(initialState.entities);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(false);
      });
    });

    describe('LOAD_TOPPINGS_SUCCESS action', () => {
      it('should return default state', () => {
        const { initialState } = fromToppings;
        const action = new fromActions.LoadToppingsSuccess(toppings);
        const state = fromToppings.reducer(initialState, action);

        expect(state.entities).toEqual(entities);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(true);
      });
    });
  });

  describe('Toppings Reducers Selectors', () => {
    describe('getToppingsEntities()', () => {
      it('should return .entities', () => {
        const { initialState } = fromToppings;
        const previousState = { ...initialState, entities };
        const slice = fromToppings.getToppingsEntities(previousState);

        expect(slice).toEqual(entities);
      });
    });

    describe('getToppingsLoaded()', () => {
      it('should return .loaded', () => {
        const { initialState } = fromToppings;
        const previousState = { ...initialState, loaded: true };
        const slice = fromToppings.getToppingsLoaded(previousState);

        expect(slice).toEqual(true);
      });
    });

    describe('getToppingsLoading()', () => {
      it('should return .loading', () => {
        const { initialState } = fromToppings;
        const previousState = { ...initialState, loading: true };
        const slice = fromToppings.getToppingsLoading(previousState);

        expect(slice).toEqual(true);
      });
    });
  });
});
