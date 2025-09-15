import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-section">
        <h1 className="hero-h1">Build Your Own Site like a Lego Constructor</h1>
        <p className="hero-p">
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Hero;
