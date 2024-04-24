import Layout from "../components/Layout";
import "../styles/About.css"

const About = () => {
  return (
    <Layout>
      <div className="row">
        <div className="image">
          <img src="images/about.jpg" alt="" />
        </div>
        <div className="content">
          <h3>We take care of your healthy life!</h3>
          <p>
            At MediMate, we are on a mission to revolutionize the way people
            access healthcare. Founded by a team of passionate healthcare
            enthusiasts, our goal is simple: to make quality healthcare
            accessible to everyone, everywhere. We believe that no one should
            have to wait weeks for a doctors appointment or struggle to find a
            specialist who understands their unique needs. With MediMate, we are
            bridging the gap between patients and healthcare providers,
            empowering individuals to take control of their health with ease and
            confidence.
          </p>
          <p>
            Our team is driven by a shared vision of a future where healthcare
            is not only efficient and effective but also compassionate and
            personalized. Were committed to leveraging the latest technology
            and best practices to ensure that every interaction with MediMate is
            seamless and stress-free. Whether you are seeking advice for a minor
            ailment or managing a chronic condition, you can trust that MediMate
            will be there for you every step of the way. Join us on this journey
            towards better health, and together, let us make healthcare more
            accessible, more affordable, and more human.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
