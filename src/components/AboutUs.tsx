/* eslint-disable @typescript-eslint/ban-ts-comment */
import Modal from "./Modal";
import { useReducer } from "react";

type CountState = {
  count: number;
};
type CountAction = {
  type: string;
  value: number;
};

const initialState: CountState = {
  count: 0,
};

const reducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function AboutUs() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
      <button
        onClick={() => dispatch({ type: "increment", value: 5 })}
        className="mr-8"
      >
        Add to Cart
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
        className="mr-8"
      >
        Remove
      </button>
      <button onClick={() => dispatch({ type: "reset" })} className="mr-8">
        Reset
      </button>
      <h1>{state.count}</h1>
      <Modal />
    </div>
  );
}

export default AboutUs;
