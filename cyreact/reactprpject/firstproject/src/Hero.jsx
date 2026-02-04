import profilePic from "./assets/profile.jpeg";
import img1 from "./assets/brand3.png";
import img2 from "./assets/brand4.png";
function Hero() {
    return (
        <section className="hero-section">

            <div className="hero-left">
                <p className="tag">I'm one</p>

                <h1 className="title">
                    <span className="highlight">Jatin Developer</span>
                </h1>

                <p className="sub">
                    Senior Creative <span className="red">Designer</span> and <br />
                    Content Developer
                </p>

                <button className="hire-btn">Hire Me</button>
            </div>

            <div className="hero-right">
                <div className="photo-box">
                    <img src={profilePic} className="photo" />
                </div>
            </div>

            <div className="brand-strip">
                <img src={img1} />
                <img src={img2} />
                <img src="brand1.png" />
                <img src="brand2.png" />
            </div>


        </section>



    )
}

export default Hero