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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad
            enim iure culpa distinctio. Nemo similique natus laudantium
            quibusdam voluptatem! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Harum nam a culpa quidem quo autem quis dolores
            earum mollitia minima?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad
            enim iure culpa distinctio. Nemo similique natus laudantium
            quibusdam voluptatem! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Harum nam a culpa quidem quo autem quis dolores
            earum mollitia minima?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
