<template>
  <!-- weight footer section -->
  <div class="w-100 float-left weight-footer-con position-relative">
    <div class="container">
      <div class="weight-footer-content text-center wow fadeInUp">
        <!-- <figure class="">
          <img
            src="assets/image/logo.png"
            alt="footer-logo"
            class="img-fluid"
          />
        </figure> -->
        <div class="footer-navbar">
          <ul class="list-unstyled">
            <li class="d-inline-block border-left-0 pl-0">
              <a href="#home">Home</a>
            </li>
            <li class="d-inline-block"><a href="#about-con">About</a></li>
            <li class="d-inline-block"><a href="#service-con">Services</a></li>
            <li class="d-inline-block"><a href="#Portfolio">Portfolio</a></li>
            <li class="d-inline-block pr-0"><a href="#Contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-social-icon">
          <ul class="mb-0">
            
            <li class="d-inline-block">
              <a target="_blank" href="https://www.linkedin.com/in/kennedy-wachira/"
                ><i
                  class="fab fa-linkedin-in d-flex align-items-center justify-content-center"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copy-right-content text-center">
        <p class="mb-0">Copyright {{date}} Creative Kenn | All Rights Reserved.</p>
      </div>
    </div>
  </div>
  <a id="button"></a>
</template>

<script setup>
const date = new Date().getFullYear()
</script>

<style></style>
