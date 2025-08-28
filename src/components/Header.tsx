// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Button } from "./ui/button";

// type UserDetails = {
//   id: number;
//   createdAt: number;
// };
// type UserData = {
//   completed: boolean;
//   id: number;
//   title: string;
//   userId: number;
// };

// const Header = () => {
//   const [userId, setUserId] = useState("");
//   const [buttonId, setButtonId] = useState("");

//   const [userData, setUserData] = useState<UserData | undefined>(undefined);
//   const [user, setUser] = useState({ firstName: "", lastName: "" });
//   const [details, setDetails] = useState(() => {
//     const store = localStorage.getItem("details");
//     return store ? JSON.parse(store) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("details", JSON.stringify(details));
//   }, [details]);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/todos/${buttonId}`)
//       .then((res) => setUserData({ ...res.data }))
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [buttonId]);

//   function submitDetails() {
//     setDetails([
//       ...details,
//       { id: details.length, createdAt: Math.floor(Math.random() * 10) + 1 },
//     ]);
//   }

//   return (
//     <>
//       <header className="p-4 bg-gray-300 min-h-[60px] rounded-md">
//         <h1 className="text-2xl font-bold text-gray">My Portfolio</h1>
//         <p className="text-green-600 font-medium">
//           Welcome to my portfolio website!
//         </p>

//         <section>
//           <input
//             type="text"
//             placeholder="Enter username"
//             value={user.firstName}
//             onChange={(e) => setUser({ ...user, firstName: e.target.value })}
//           />
//           <h2>{user.firstName}</h2>
//         </section>
//       </header>

//       <Button onClick={submitDetails} className="mt-4">
//         Create User
//       </Button>

//       <section>
//         {" "}
//         <ul>
//           {details.map((elem: UserDetails) => (
//             <li key={elem.id}>{elem.createdAt}</li>
//           ))}
//         </ul>
//       </section>

//       <section className="bg-gray-200 p-4 rounded-md mt-4">
//         <input
//           type="text"
//           placeholder="Enter UserID"
//           value={userId}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setUserId(e.target.value)
//           }
//         />
//         <button
//           type="button"
//           className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//           onClick={() => setButtonId(userId)}
//         >
//           Fetch User
//         </button>

//         <h3 className="mt-2">Button ID: {buttonId}</h3>
//         <h2 className="mt-2">{userData?.title}</h2>
//       </section>
//     </>
//   );
// };

// export default Header;
