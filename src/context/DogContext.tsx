import { type Dispatch, createContext, useReducer } from "react";

const initialState = {
  dogIds: [] as Array<string>,
  dogBreeds: [] as Array<string>,
  dogUrls: [] as Array<string>,
  dispatch: (() => undefined) as Dispatch<any>,
};

export const DogContext = createContext(initialState);

const DogReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SetDogIds":
      return {
        ...state,
        dogIds: action.payload,
      };
    case "SetDogBreeds":
      return {
        ...state,
        dogBreeds: action.payload,
      };
    case "SetDogUrls":
      return {
        ...state,
        dogUrls: action.payload,
      };
    default:
      return state;
  }
};

export const DogContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(DogReducer, initialState);

  return (
    <DogContext.Provider
      value={{
        dogIds: state.dogIds,
        dogBreeds: state.dogBreeds,
        dogUrls: state.dogUrls,
        dispatch,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
