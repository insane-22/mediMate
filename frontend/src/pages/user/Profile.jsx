import Layout from "../../components/Layout";
import UserSidebar from "../../components/UserSidebar";
import "../../styles/Dashboard.css";
const Profile = () => {
  return (
    <Layout>
      <div className="dashboard">
        <UserSidebar />
        <div className="dashboard-content">
          <div className="content-header">
            <h1 className="header-title">Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
