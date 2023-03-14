<template>
  <!---header-and-banner-section-->
  <div class="header-and-banner-con w-100 float-left position-relative">
    <div class="header-and-banner-inner-con">
      <header class="main-header">
        <!--navbar-start-->
        <div class="container pl-0 pr-0">
          <div class="header-con">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              
              <button
                class="navbar-toggler p-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active pl-0">
                    <a class="nav-link p-0 is-active" href="index.html"
                      >Home<span class="sr-only">(current)</span></a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-0" href="#service-con">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-0" href="#about-con">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link p-0" href="#Portfolio">Portfolio</a>
                  </li>
                </ul>
                <div class="d-inline-block contact">
                  <a href="#Contact">Contact</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <!--navbar-end-->
      </header>
      <vue-progress-bar></vue-progress-bar>
      <section class="banner-main-con" id="home">
        <div class="container pl-0 pr-0">
          <!--banner-start-->
         
          <div class="banner-con text-lg-left text-center">
            <div class="row">
              <div
                class="col-lg-8 col-sm-12 d-flex justify-content-center flex-column"
              >
                <div class="banner-left-con wow slideInLeft">
                  <div class="banner-heading">
                    <h2>Hello, I Am</h2>
                    <ul class="dynamic-txts">
                      <li><h1>Kennedy Wachira</h1></li>
                    </ul>
                    <p>
                      
                      A brilliant and prolific full-stack software developer. <br />
                      I have been coding professionally for over 7 years now, <br />
                      enjoying every minute of it, and learning multiple new tools and technologies.
                    </p>
                  </div>
                  <div class="banner-btn generic-btn d-inline-block">
                    <a href="#Contact">Hire Me</a>
                  </div>
                  <a href="#Portfolio" class="See-btn">See My Work</a>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <div
                  class="banner-right-con position-relative wow slideInRight"
                  id="banner-right-con"
                >
                  <figure class="mb-0">
                    <img
                      src="assets/image/nnek2.png"
                      alt="banner-right-img"
                      id="banner-right-img"
                    />
                  </figure>
                  <div
                    class="best-award-con d-inline-block wow bounceInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div class="best-award-inner-con">
                      <figure class="mb-0">
                        <img
                          src="assets/image/cup-img.png"
                          alt="cup-img"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="best-award-title">
                        <p class="mb-0">
                          Fullstack Software <br />
                          Developer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- <div
                    class="best-award-con d-inline-block happy-con wow bounceInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div class="best-award-inner-con text-center">
                      <figure>
                        <img
                          src="assets/image/schedule.png"
                          alt="admin-icon"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="best-award-title d-inline-block ml-0">
                        <p class="mb-0 d-inline-block count">8</p>
                        <p class="mb-0 d-inline-block">+ </p>
                        <span class="d-block"
                          >years of<br />
                           programming</span
                        >
                      </div>
                    </div>
                  </div> -->
                  <div class="cursor"></div>
                  <div class="cursor2"></div>
                </div>
              </div>
            </div>
          </div>
          <!--banner-end-->
        </div>
      </section>
    </div>
  </div>
  <!---header-and-banner-section-->
</template>

<script setup></script>

<style>

</style>
