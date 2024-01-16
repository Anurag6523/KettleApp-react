import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Utils/userSlice";
import { USERICON } from "../../Utils/constant";
import { useNavigate } from "react-router-dom";


const HeaderMovies = () => {
  const dispatch = useDispatch();
  const user= useSelector(store=>store.user);
  const navigate=useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USERICON,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
        
      }
    });

    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="img"
      ></img>
      {user && (<div className="flex p-4">
        <img className="w-12 h-12" src={user?.photoURL} alt="user-icon"></img>
        <button onClick={handleSignOut} className="font-bold text-white">(sign out)</button>
      </div>)}
    </div>
  );
};

export default HeaderMovies;
