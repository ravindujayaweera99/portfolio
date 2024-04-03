import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h3>Hey, I am Ravindu</h3>
        <h1>Freelance Web Developer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel,
          non ipsam nemo, dignissimos maxime, sint consequuntur perspiciatis ad
          labore vitae? Quibusdam repudiandae aliquid reiciendis sequi illo
          repellendus et. Odio!
        </p>
        <button>Get in Touch</button>
      </div>
      <div className="right">
        <img src="../assets/react.svg" alt="my-image" />
      </div>
    </div>
  );
}

export default Hero;
