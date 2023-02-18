const Slider = () => {
  return (
    <>
      <section className="slider_section ">
        <div className="slider_bg_box">
          <img src="images/slider-bg.jpg" alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 35% Off</span>
                        <br />
                        On Every electronic devices
                      </h1>
                      <p>
                        We deliver trusted electronics machines to people all
                        around the world to facilitate every moment of life!
                      </p>
                      <div className="btn-box">
                        <a href className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 50% Off</span>
                        <br />
                        On Mobile devices
                      </h1>
                      <p>
                        We deliver trusted electronics machines to people all
                        around the world to facilitate every moment of life!
                      </p>
                      <div className="btn-box">
                        <a href className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 70% Off</span>
                        <br />
                        On laptop
                      </h1>
                      <p>
                        We deliver trusted electronics machines to people all
                        around the world to facilitate every moment of life!
                      </p>
                      <div className="btn-box">
                        <a href className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
