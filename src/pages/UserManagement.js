import Footer from "../components/FooterPage.js";
import UserAuthorization from "../components/UserAuthorization.js";
import "../App.css";

export const UserManagement = () => {
  return (
    <div className="Administration App ">
      <UserAuthorization />
      <Footer />
    </div>
  );
};
