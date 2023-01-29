import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Pages/AddItem/AddItem";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Home/Nav";
import Login from "./Pages/Login/Login";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import UserItems from "./Pages/UserItem/UserItems";
import PrivateAuth from "./Pages/PrivateAuth/PrivateAuth";
import Registration from "./Pages/Registration/Registration";
import Footer from "./Pages/Shared/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Teams from "./Pages/Team/Teams";
import Inventory from "./Pages/Inventory/Inventory";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/inventory/:id"
          element={
            <PrivateAuth>
              <Inventory />
            </PrivateAuth>
          }
        />
        <Route path="/team" element={<Teams />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/inventory" element={<ManageInventory />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/myItem" element={<UserItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
