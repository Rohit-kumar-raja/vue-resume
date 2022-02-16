<template>
  <div>
    <!-- ##### Welcome Area Start ##### -->
    <div
      class="
        breadcumb-area
        clearfix
        dzsparallaxer
        auto-init
        mode-scroll
        animation-engine-js
        dzsprx-readyall
      "
      data-options='{direction: "normal"}'
    >
      <div
        class="divimage dzsparallaxer--target"
        style="
          width: 101%;
          height: 130%;
          background-image: url('img/bg-img/bg-2.jpg');
          transform: translate3d(0px, -47.8196px, 0px);
        "
      ></div>
      <!-- breadcumb content -->
      <div class="breadcumb-content">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                <h2
                  class="w-text title wow fadeInUp"
                  data-wow-delay="0.2s"
                  style="
                    visibility: visible;
                    animation-delay: 0.2s;
                    animation-name: fadeInUp;
                  "
                >
                  Template Preview
                </h2>
                <ol
                  class="breadcrumb justify-content-center wow fadeInUp"
                  data-wow-delay="0.4s"
                  style="
                    visibility: visible;
                    animation-delay: 0.4s;
                    animation-name: fadeInUp;
                  "
                >
                  <li class="breadcrumb-item">
                    <router-link to="index">Home</router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="templates">Template Preview</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Template Preview
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ##### Welcome Area End ##### -->

    <!-- ##### Blog Area Start ##### -->
    <section class="blog-area section-padding-100-0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8">
            <div>
              <!-- Post Thumbnail -->
              <div class="blog_thumbnail">
                <img src="img/demos/demo-1.png" class="temp-img" alt="" />
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="sidebar-area">
              <div class="temp-summary">
                <p>
                  Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incidi
                  dunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea.
                </p>
                <router-link class="btn dream-btn width-100" to="start"
                  >Try This Template</router-link
                >
              </div>

              <!-- Subscribe Widget -->
              <div class="subscribe-widget mt-50">
                <div class="widget-title">
                  <h5>subscribe</h5>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      id="subs_email"
                      placeholder="Your Email"
                    />
                    <button type="submit" class="btn">subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Blog Area End ##### -->


  </div>
</template>

<script>
export default {
  name: "Preview",
};
</script>



