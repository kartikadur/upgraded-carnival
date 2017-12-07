import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

interface PizzaEntity {
  [id: number] : Pizza
}

export interface PizzaState {
    entities: PizzaEntity;
    loading: boolean;
    loaded: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false,
}

export function reducer (
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {

  switch(action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;

      // converting from array to object
      const entities = pizzas.reduce((entities : PizzaEntity, pizza: Pizza) => {
        return {
          ...entities,
          [pizza.id]: pizza
        }
      }, {
        ...state.entities
      })

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;