<template>
  <section
    class="w-100 float-left form-main-con padding-top padding-bottom"
    id="Contact"
  >
    <div class="container">
      <div class="form-main-inner-con position-relative">
        <div class="generic-title text-center">
          <h6>Get in Touch</h6>
          <h2 class="mb-0">
            Any Questions? Feel Free<br />
            to Contact Me
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-4 order-lg-0 order-2">
            <div class="contact-information position-relative wow slideInLeft">
              <ul class="list-unstyled">
                <li>
                  <figure
                    class="mb-0 d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="assets/image/location-icon.png"
                      alt="location-icon"
                      class="img-fluid"
                    />
                  </figure>
                  <div class="contact-information-content">
                    <h5>Address:</h5>
                    <p class="mb-0">Nairobi, Kenya</p>
                  </div>
                </li>
                <li>
                  <figure
                    class="mb-0 d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="assets/image/message-icon.png"
                      alt="message-icon"
                      class="img-fluid"
                    />
                  </figure>
                  <div class="contact-information-content">
                    <h5>Email:</h5>
                    <p class="mb-0">murimi.kenn@gmail.com</p>
                  </div>
                </li>
                <li class="mb-0">
                  <figure
                    class="mb-0 d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="assets/image/phone-icon.png"
                      alt="phone-icon"
                      class="img-fluid"
                    />
                  </figure>
                  <div class="contact-information-content">
                    <h5>Phone:</h5>
                    <p class="mb-0">+254 7 0410 3356</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <form
              ref="form"
              @submit.prevent="sendEmail"
              class="contact-form wow slideInRight text-lg-left text-center"
            >
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group mb-0">
                    <input
                      type="text"
                      placeholder="Name"
                      name="from_name"
                      id="name"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group mb-0">
                    <input
                      type="email"
                      placeholder="Email"
                      name="from_email"
                      required
                    />
                    <small id="emailHelp" class="form-text text-muted"></small>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group mb-0">
                    <input type="tel" name="from_number" placeholder="Phone" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mb-0">
                    <textarea
                      placeholder="Message"
                      rows="3"
                      name="message"
                      id="comments"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" class="appointment-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { getCurrentInstance } from "vue";

const internalInstance = getCurrentInstance();
const form = ref();
const toast = useToast();

const sendEmail = () => {
  internalInstance.appContext.config.globalProperties.$Progress.start();
  emailjs
    .sendForm(
      "service_1jthu9n",
      "template_7qx28ho",
      form.value,
      "r30izNmNRbE6dWf2x"
    )
    .then(
      () => {
        toast.success(
          "I have received your message and I will get back at you soon.",
          {
            timeout: 6000,
          }
        );
        internalInstance.appContext.config.globalProperties.$Progress.finish();
      },
      (error) => {
        toast.error(error.text, {
          timeout: 6000,
        });
        internalInstance.appContext.config.globalProperties.$Progress.finish();
      }
    );
};
</script>

<style></style>
