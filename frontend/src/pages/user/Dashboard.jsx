import Layout from "../../components/Layout";
import UserSidebar from "../../components/UserSidebar";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <UserSidebar />
        <div className="dashboard-content">
          {/* <div className="content-header">
            <h1 className="header-title">Dashboard</h1>
          </div> */}
          <div className="dash">
            <div className="image">
              <img src="/images/Dashboard-amico.svg" alt="" />
            </div>
            <div className="content">
              <h3>Dashboard </h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Neque, veritatis. Ipsa qui adipisci nulla blanditiis
                explicabo impedit magnam, quis molestias eum assumenda odit
                rerum voluptatibus recusandae. Eius culpa iure assumenda?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
