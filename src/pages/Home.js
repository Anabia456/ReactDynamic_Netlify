import React from "react";
import "../styles/bootstrap.css";
import "../styles/home.css";
import * as FaIcons from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      

        <div className="row">
          <div className="col-md-12">
            <h2 className="home text-center">
              This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
            </h2>
            <div className="border-div" style={{borderBottom:'1px solid #f4c23d', width:'15%'}}></div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 schilers">
            <h4 style={{ color: "#E5BF4A" }}>
              This is Schilers. Awesome Food Theme.Purchase it and eat Burgers.
            </h4>
            <p style={{ color: "#fff" }} className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptatibus itaque dolores sit magni reprehenderit unde. Dolores
              natus reprehenderit, quisquam minima libero aut maiores quasi
              deserunt quaerat, inventore impedit labore.
            </p>
            <p style={{ color: "#fff" }} className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              laborum pariatur qui ad tenetur repellat harum illum neque
              delectus. Non incidunt totam voluptate nemo aliquid, adipisci
              dolores. Beatae, praesentium quam?
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xabout1.jpg.pagespeed.ic.Q8jbhT8BVC.webp"
              alt=""
            />
          </div>
        </div>

        <div class="row mt-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex">
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems2.jpg.pagespeed.ic.icHdvDZ_5F.webp"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems1.jpg.pagespeed.ic.6dmE-qTqMS.webp"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems3.jpg.pagespeed.ic.lQV173t2AP.webp"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="d-flex">
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems3.jpg.pagespeed.ic.lQV173t2AP.webp"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems2.jpg.pagespeed.ic.icHdvDZ_5F.webg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems1.jpg.pagespeed.ic.6dmE-qTqMS.webpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex">
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems1.jpg.pagespeed.ic.6dmE-qTqMS.webp"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems3.jpg.pagespeed.ic.lQV173t2AP.webp"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card m-5" style={{ width: "18rem" }}>
                    <img
                      src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems2.jpg.pagespeed.ic.icHdvDZ_5F.web"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <h2 className="home text-center mt-5">Follow Us On Instagram</h2>
            <button className="btn2 p-3"><FaIcons.FaInstagram/>  CakeShop</button>
        </div>
        <div className="row mt-5">
            <div className="col-md-4 mt-5">
                <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra1.jpg.pagespeed.ic.Oprq8U7fLo.webp" alt="" />
            </div>
            <div className="col-md-4 mt-5">
                <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra2.jpg.pagespeed.ic.PYyDEdzkD9.webp" alt="" />
            </div>
            <div className="col-md-4 mt-5">
                <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra3.jpg.pagespeed.ic.OAmXJmHyZ9.webp" alt="" />
            </div>
            {/* <div className="col-md-3">
                <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra4.jpg.pagespeed.ic.0TvhEUconE.webp" alt="" />
            </div> */}
        </div>
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

// https://preview.colorlib.com/#cakeshop
export default Home;
