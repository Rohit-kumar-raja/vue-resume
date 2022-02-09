<template>
  <carousel :per-page="3" :loop="true" :autoplay="true" :perPageCustom="[[360, 1], [768, 3]]"  paginationColor="#1a1b1b66"  >
    <slide>
      <div class="owl-item cloned" style="width: 396px">
        <div class="single-testimonial text-center">
          <div class="icon_wrapper">
            <i class="fa fa-quote-right"></i>
          </div>
          <!-- Testimonial Image -->
          <div class="testimonial_image">
            <img src="img/test-img/3.jpg" alt="" />
          </div>
          <!-- Testimonial Feedback Text  -->
          <div class="testimonial-description">
            <div class="testimonial_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto
                et, earum repudiandae.
              </p>
            </div>
            <!-- Admin Text -->
            <div class="admin_text">
              <h5>Jebin Khan</h5>
              <p>One of our Clients</p>
            </div>
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="owl-item" style="width: 396px">
        <div class="single-testimonial text-center">
          <div class="icon_wrapper">
            <i class="fa fa-quote-right"></i>
          </div>
          <!-- Testimonial Image -->
          <div class="testimonial_image">
            <img src="img/test-img/1.jpg" alt="" />
          </div>
          <!-- Testimonial Feedback Text -->
          <div class="testimonial-description">
            <div class="testimonial_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto
                et, earum repudiandae.
              </p>
            </div>

            <!-- Admin Text -->
            <div class="admin_text">
              <h5>Sunny Khan</h5>
              <p>One of our Clients</p>
            </div>
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="owl-item" style="width: 396px">
        <div class="single-testimonial text-center">
          <div class="icon_wrapper">
            <i class="fa fa-quote-right"></i>
          </div>
          <!-- Testimonial Image -->
          <div class="testimonial_image">
            <img src="img/test-img/2.jpg" alt="" />
          </div>
          <!-- Testimonial Feedback Text  -->
          <div class="testimonial-description">
            <div class="testimonial_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto
                et, earum repudiandae.
              </p>
            </div>

            <!-- Admin Text -->
            <div class="admin_text">
              <h5>Ajoy Das</h5>
              <p>One of our Clients</p>
            </div>
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="owl-item active" style="width: 396px">
        <div class="single-testimonial text-center">
          <div class="icon_wrapper">
            <i class="fa fa-quote-right"></i>
          </div>
          <!-- Testimonial Image -->
          <div class="testimonial_image">
            <img src="img/test-img/3.jpg" alt="" />
          </div>
          <!-- Testimonial Feedback Text  -->
          <div class="testimonial-description">
            <div class="testimonial_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto
                et, earum repudiandae.
              </p>
            </div>
            <!-- Admin Text -->
            <div class="admin_text">
              <h5>Jebin Khan</h5>
              <p>One of our Clients</p>
            </div>
          </div>
        </div>
      </div>
    </slide>
  </carousel>
</template>
<script>
// import slider components

import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>