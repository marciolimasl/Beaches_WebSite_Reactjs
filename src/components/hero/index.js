import "./styles.css";
import Video from "../../assets/maldivesVideo.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>

      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
