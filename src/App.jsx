import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "./contexts/UsersContext";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Forum from "./components/pages/Forum";
import Header from "./components/UI/Header";
import NewQuestion from "./components/pages/NewQuestion";
import SingleQuestion from "./components/pages/SingleQuestion";
import Footer from "./components/UI/Footer";
import { emojiCursor } from "cursor-effects";

const App = () => {
  const { loggedInUser } = useContext(UsersContext);
  new emojiCursor({ emoji: ["🔥", "🐬", "🦆"] });
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/forum">
            <Route path="questions" element={<Forum />} />
            <Route
              path="newQuestion"
              element={
                loggedInUser ? <NewQuestion /> : <Navigate to="/users/login" />
              }
            />
            <Route path=":id" element={<SingleQuestion />} />
          </Route>
          <Route path="/users">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
