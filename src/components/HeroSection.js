const HeroSection =()=>{

    return(
<main className="hero container">
    <div className="hero-content">
        <h1>JUST DO IT</h1>
        <p1>In addition to manufacturing sportswear and equipment, the company operates retail stores under the Niketown name. Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of "Just Do It" and the Swoosh logo. As of 2024, it employed 83,700 people worldwide.</p1>
        <div className="hero-Btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
        <p>Also Available On</p>
        </div>
        <div className="brand-icons">
            <img src="/Images/amazon.png" alt="amazon-logo"></img>
            <img src="/Images/flipkart.png" alt="flipkart-logo"></img>
        </div>
    </div>
    <div className="hero-image">
    <img src="/Images/shoe_image.png" alt="hero-image"/>
    </div>
</main>
    );
};

export default HeroSection;