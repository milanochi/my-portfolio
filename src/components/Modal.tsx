import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Modal() {
  const user = useContext(UserContext);
  return (
    <div>
      <p>Welcome to the Modal!</p>
      <h1>{user}</h1>
    </div>
  );
}

export default Modal;
