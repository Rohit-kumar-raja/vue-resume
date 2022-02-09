<template>
  <!-- ##### Header Area Start ##### -->
  <header class="header-area">
    <div class="classy-nav-container dark left breakpoint-on">
      <div class="container">
        <!-- Classy Menu -->
        <nav class="classy-navbar justify-content-between" id="dreamNav">
          <!-- Logo -->
          <router-link class="nav-brand" to="index"
            ><img src="img/logo.png" alt="logo" /> CV Builder.</router-link
          >

          <!-- Navbar Toggler -->
          <div class="classy-navbar-toggler">
            <span class="navbarToggler"
              ><span></span><span></span><span></span
            ></span>
          </div>

          <!-- Menu -->
          <div class="classy-menu">
            <!-- close btn -->
            <div class="classycloseIcon">
              <div class="cross-wrap">
                <span class="top"></span><span class="bottom"></span>
              </div>
            </div>

            <!-- Nav Start -->
            <div class="classynav">
              <ul id="nav">
                <li><router-link to="index">Home</router-link></li>
                <li><router-link to="about">About Us</router-link></li>
                <li><router-link to="pricing">Pricing</router-link></li>
                <li><router-link to="templates">Templates</router-link></li>
                <li><router-link to="contact">Contact</router-link></li>
              </ul>

              <!-- Button -->
              <a href="#test-popup" class="open-popup-link btn login-btn mr-im"
                ><i class="fas fa-sign-in-alt"></i> Log in</a
              >
              <a href="#signup-popup" class="open-signup-link btn login-btn"
                ><i class="fas fa-user-plus"></i> Signup
              </a>
            </div>
            <!-- Nav End -->
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- ##### Header Area End ##### -->
</template>
<script>
export default {
  name:'Header'
}
</script>