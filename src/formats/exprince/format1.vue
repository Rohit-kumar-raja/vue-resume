<template>
  <div class="rela-block page">
    <div class="rela-block top-bar">
      <div class="caps name">
        <div class="abs-center">{{ form_data.name }}</div>
      </div>
    </div>
    <div class="side-bar">
      <div class="mugshot">
        <div class="logo">
          <svg viewbox="0 0 80 80" class="rela-block logo-svg">
            <path
              d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z"
              stroke-width="2.5"
              fill="none"
            />
          </svg>
          <p class="logo-text">
            {{
              form_data.name[0] +
              "." +
              form_data.name.split(" ")[form_data.name.split(" ").length - 1]
            }}
          </p>
        </div>
      </div>
      <p class="format1">{{ form_data.address }} - {{ form_data.zipcode }}</p>

      <p class="format1">
        <i class="fa fa-envelope" aria-hidden="true"></i> {{ form_data.email }}
      </p>

      <p class="format1">
        <i class="fa fa-phone-square"></i> {{ form_data.phone }}
      </p>
      <p class="format1" v-if="form_data.website_link != null">
        <i class="fa fa-globe"></i> {{ form_data.website_link }}
      </p>
      <br />
      <p class="rela-block caps side-header">Social</p>
      <p><i class="fab fa-facebook-f"></i> Twitter stuff</p>
    

      <p class="rela-block caps side-header">Expertise</p>
      <p class="rela-block list-thing">HTML</p>
      <p class="rela-block list-thing">CSS (Stylus)</p>
      <p class="rela-block list-thing">JavaScript & jQuery</p>
      <p class="rela-block list-thing">Killer Taste</p>
      <p class="rela-block caps side-header">Education</p>
      <p class="rela-block list-thing">Advanced potion making</p>
      <p class="rela-block list-thing">Degree in popping and locking</p>
      <p class="rela-block list-thing">Knitting game on point</p>
      <p class="rela-block list-thing">Culinary af</p>
    </div>
    <div class="rela-block content-container">
      <h2 class="rela-block caps title">{{ form_data.job_title }}</h2>
      <div class="rela-block separator"></div>
      <div class="rela-block caps greyed">Profile</div>
      <p class="long-margin">
        Retro DIY quinoa, mixtape williamsburg master cleanse bushwick tumblr
        chillwave dreamcatcher hella wolf paleo. Knausgaard semiotics truffaut
        cornhole hoodie, YOLO meggings gochujang tofu. Locavore ugh kale chips
        iPhone biodiesel typewriter freegan, kinfolk brooklyn kitsch man bun.
        Austin neutra etsy, lumbersexual paleo cornhole sriracha kinfolk
        meggings kickstarter.
      </p>
      <div class="rela-block caps greyed">Experience</div>

      <h3>Job #1</h3>
      <p class="light">First job description</p>
      <p class="justified">
        Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw
        denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave
        meh paleo freegan ramps. Letterpress shabby chic fixie semiotics.
        Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape
        cred chambray. Freegan microdosing VHS, 90's bicycle rights aesthetic
        hella PBR&B.
      </p>

      <h3>Job #2</h3>
      <p class="light">Second Job Description</p>
      <p class="justified">
        Beard before they sold out photo booth distillery health goth. Hammock
        franzen green juice meggings, ethical sriracha tattooed schlitz mixtape
        man bun stumptown swag whatever distillery blog. Affogato iPhone
        normcore, meggings actually direct trade lomo plaid franzen shoreditch.
        Photo booth pug paleo austin, pour-over banh mi scenester vice food
        truck slow-carb. Street art kogi normcore, vice everyday carry crucifix
        thundercats man bun raw denim echo park pork belly helvetica vinyl.
      </p>

      <h3>Job #3</h3>
      <p class="light">Third Job Description</p>
      <p class="justified">
        Next level roof party lo-fi fingerstache skateboard, kogi tumblr. Shabby
        chic put a bird on it chambray, 3 wolf moon swag beard brooklyn
        post-ironic taxidermy art party microdosing keffiyeh marfa. Put a bird
        on it 3 wolf moon cliche helvetica knausgaard. Mumblecore fingerstache
        lomo, artisan freegan keffiyeh paleo kinfolk kale chips street art blog
        flannel.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "format1",

  props: {
    form_data: String,
  },
};
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
  transition: 0.35s ease;
}
.format1 {
  width: 250px;
  white-space: pre-line;
}

.rela-block {
  display: block;
  position: relative;
  margin: auto;
}

.rela-inline {
  display: inline-block;
  position: relative;
  margin: auto;
}

.floated {
  display: inline-block;
  position: relative;
  margin: false;

  float: left;
}

.abs-center {
  display: false;
  position: absolute;
  margin: false;
  top: 50%;
  left: 50%;
  right: false;
  bottom: false;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 88%;
}

body {
  font-family: "Open Sans";
  letter-spacing: 0px;
  font-weight: 500;
  line-height: 28px;
  background: url("http://kingofwallpapers.com/leaves/leaves-016.jpg") right
    no-repeat;
  background-size: cover;
}

body:before {
  content: "";
  display: false;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.92);
}

.caps {
  text-transform: uppercase;
}

.justified {
  text-align: justify;
}

p.light {
  color: #777;
}

h2 {
  font-family: "Open Sans";
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: 600;
  line-height: 40px;
  color: #000;
}

h3 {
  font-family: "Open Sans";
  font-size: 21px;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 28px;
  color: #000;
}

.page {
  width: 1000px;
  margin: 80px auto;
  background-color: #fff;
  box-shadow: 6px 10px 28px 0px rgba(0, 0, 0, 0.4);
}

.top-bar {
  height: 220px;
  background-color: #848484;
  color: #fff;
}

.name {
  display: false;
  position: absolute;
  margin: false;
  top: false;
  left: calc(350px + 5%);
  right: 0;
  bottom: 0;
  height: 120px;
  text-align: center;
  font-family: "Raleway";
  font-size: 58px;
  letter-spacing: 8px;
  font-weight: 100;
  line-height: 60px;
}

.name div {
  width: 94%;
}

.side-bar {
  display: false;
  position: absolute;
  margin: false;
  top: 60px;
  left: 1%;
  right: false;
  bottom: 0;
  width: 29%;
  background-color: #f7e0c1;
  padding: 260px 30px 50px;
}

.mugshot {
  display: false;
  position: absolute;
  margin: false;
  top: 50px;
  left: 70px;
  right: false;
  bottom: false;
  height: 210px;
  width: 210px;
}

.mugshot .logo {
  margin: -23px;
}

.logo {
  display: false;
  position: absolute;
  margin: false;
  top: 0;
  left: 0;
  right: false;
  bottom: false;
  z-index: 100;
  margin: 0;
  color: #000;
  height: 250px;
  width: 250px;
}

.logo .logo-svg {
  height: 100%;
  width: 100%;
  stroke: #000;
  cursor: pointer;
}

.logo .logo-text {
  display: false;
  position: absolute;
  margin: false;
  top: 58%;
  right: 16%;
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 45px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 58.333333333333336px;
}

.social {
  padding-left: 60px;
  margin-bottom: 20px;
  cursor: pointer;
}

.social:before {
  content: "";
  display: false;
  position: absolute;
  margin: false;
  top: -4px;
  left: 10px;
  right: false;
  bottom: false;
  height: 35px;
  width: 35px;
  background-size: cover !important;
}

.side-header {
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 4px;
  font-weight: 600;
  line-height: 28px;
  margin: 60px auto 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #888;
}

.list-thing {
  padding-left: 25px;
  margin-bottom: 10px;
}

.content-container {
  margin-right: 0;
  width: calc(95% - 300px);
  padding: 25px 40px 50px;
}

.content-container > * {
  margin: 0 auto 25px;
}

.content-container > h3 {
  margin: 0 auto 5px;
}

.content-container > p.long-margin {
  margin: 0 auto 50px;
}

.title {
  text-align: center;
}

.greyed {
  background-color: #ddd;
  width: 100%;
  text-align: center;
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: 600;
  line-height: 28px;
}

@media screen and (max-width: 500px) {
  .name {
    color: #fff;
    font-family: "Raleway";
    font-size: 10%;
    font-weight: 100;
    line-height: 100%;
  }
}
p {
  color: #000;
  margin-bottom: 0.2rem;
}
.fab{
  font-size: 20px;
}
</style>
