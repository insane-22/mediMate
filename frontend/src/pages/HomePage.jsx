import { FaHospital, FaUser, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <section className="home">
        <div className="image">
          <img src="/images/homepage.jpg" alt="" />
        </div>

        <div className="content">
          <h3>Stay safe, stay healthy</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quo
            temporibus perferendis quae accusantium voluptatibus ducimus
            tenetur. Incidunt error magnam quos, odit deserunt sunt nihil velit
            excepturi aliquam hic esse dolore dolorem vel asperiores sint dicta
            nesciunt iure quidem, facilis natus eveniet facere at? Pariatur
            commodi sit mollitia cumsam fuga eius earum odio similique ratione
            consequatur, autem enim quas esse? Doloribus similique commodi eum.
            Delectus
          </p>
          <button className="btn">Let us get started</button>
        </div>
      </section>

      <section className="icons-container">
        <div className="icon">
          <i>
            <FaUser />
          </i>
          <h3>100+</h3>
          <p>doctors at work</p>
        </div>
        <div className="icon">
          <i>
            <FaUsers />
          </i>
          <h3>1000+</h3>
          <p>happy customers</p>
        </div>
        <div className="icon">
          <i>
            <FaLocationDot />
          </i>
          <h3>40+</h3>
          <p>locations covered</p>
        </div>
        <div className="icon">
          <i>
            <FaHospital />
          </i>
          <h3>50+</h3>
          <p>hospitals connected</p>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
