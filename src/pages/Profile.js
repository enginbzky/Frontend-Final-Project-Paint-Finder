import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../registration/LogoutButton";
import LoginButton from "../registration/LoginButton";
import { Table } from "react-bootstrap";
import Footer from "../components/FooterPage";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [yachtData, setYachtData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Auth0 user email bilgisine karşılık gelen userId'yi alın
        const response = await fetch(
          `http://localhost:9000/users/userId?email=${user.email}`
        );
        const data = await response.json();
        const userId = data.userId;
        console.log(user.email);
        // Yacht verilerini çekmek için backend'e userId'yi gönderin
        const yachtResponse = await fetch(
          `http://localhost:9000/yachts/hola/${userId}`
        );
        console.log(userId);
        console.log(yachtResponse);

        const yachtData = await yachtResponse.json();

        setYachtData(yachtData.yacht);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user.email]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <LogoutButton />
      <Table
        striped
        bordered
        hover
        style={{
          width: "90%",
          marginLeft: "70px",
          marginTop: "30px",
          marginBottom: "150px",
        }}
      >
        <thead>
          <tr>
            <th>Boat Name</th>
            <th>Boat Length</th>
            <th>Boat Draft</th>
            <th>Selected Type</th>
            <th>Selected Material</th>
            <th>Season</th>
            <th>Selected Speed</th>
            <th>Budget</th>
            <th>brand</th>
            <th>paintName</th>
          </tr>
        </thead>
        <tbody>
          {yachtData.map((yacht) => (
            <tr key={yacht.id}>
              <td>{yacht.boatName}</td>
              <td>{yacht.boatLength}</td>
              <td>{yacht.boatDraft}</td>
              <td>{yacht.selectedType}</td>
              <td>{yacht.selectedMaterial}</td>
              <td>{yacht.season}</td>
              <td>{yacht.selectedSpeed}</td>
              <td>{yacht.budget}</td>
              <td>{yacht.brand}</td>
              <td>{yacht.paintName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer />;
    </div>
  ) : (
    <LoginButton />
  );
};

export default Profile;
