<template>
  <div class="ali-bg">
    <!-- Preloader -->

    <!-- ##### Blog Area Start ##### -->
    <section class="blog-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="cv-prev">
              <!-- Post Thumbnail -->
              <div class="blog_thumbnail">
                <div
                  class="table-responsive"
                  style="position: relative; width: 100%; margin: auto"
                >
                  <Format1 :form_data="form" />
                </div>
                <!-- <img src="img/demos/demo-1.png" class="temp-img" alt="" /> -->
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="cv-download">
              <div class="row align-items-center">
                <div class="col-lg-12 col-md-6">
                  <p class="topnote">
                    Fill all required fields and click create cv to download CV
                    in both PDF and PNG formats
                  </p>
                </div>
                <div class="col-lg-6 col-md-12 mt-s">
                  <a href="#" class="btn btn-primary">Download as PDF</a>
                  <a href="#" class="btn btn-soft-primary ms-2"
                    >Download as PNG</a
                  >
                </div>
              </div>
            </div>
            <div class="container">
              <form method="post" action="#" id="dashboard">
                <div class="mt-150">
                  <h2>Personal Info</h2>
                  <div class="block-container">
                    <div class="row align-items-center">
                      <div class="col-lg-2 col-md-4">
                        <img src="img/test-img/1.jpg" class="d-block" alt="" />
                      </div>
                      <div class="col-lg-5 col-md-8 mt-s">
                        <h6 class="">Upload your picture</h6>
                        <p class="text-muted mb-0">
                          For best results, use image 300px by 300px in either
                          .jpg or .png
                        </p>
                      </div>
                      <div class="col-lg-5 col-md-12 mt-s">
                        <a href="#" class="btn btn-primary">Upload</a>
                        <a href="#" class="btn btn-soft-primary ms-2">Remove</a>
                      </div>
                    </div>
                    <div class="mt-30">
                      <div class="row">
                        <div class="col-lg-6">
                          <label>Full Name: </label>
                          <input
                            type="text"
                            v-model="form.name"
                            class="form-control"
                            placeholder="enter your name"
                          />
                        </div>

                        <div class="col-lg-6">
                          <label>Jop Title:</label>
                          <input
                            type="text"
                            v-model="form.job_title"
                            class="form-control"
                            placeholder="Ex: Web Developer"
                          />
                        </div>

                        <div class="col-lg-6">
                          <label>Your Email:</label>
                          <input
                            type="text"
                            v-model="form.email"
                            class="form-control"
                            placeholder="enter your name"
                          />
                        </div>
                        <div class="col-lg-6">
                          <label>Website Link:</label>
                          <input
                            type="text"
                            v-model="form.website_link"
                            class="form-control"
                            placeholder="enter your website link"
                          />
                        </div>

                        <div class="col-lg-6">
                          <label>Phone No:</label>
                          <input
                            type="text"
                            v-model="form.phone"
                            class="form-control"
                            placeholder="Ex: 9999999999"
                          />
                        </div>
                        <div class="col-lg-6">
                          <label>Your Zipcode:</label>
                          <input
                            type="text"
                            v-model="form.zipcode"
                            class="form-control"
                            placeholder="enter your zipcode"
                          />
                        </div>
                        <div class="col-lg-12">
                          <label>Your Address:</label>
                          <textarea
                            v-model="form.address"
                            class="form-control"
                            placeholder="enter your address"
                          ></textarea>
                        </div>
                        <div class="col-lg-12">
                          <label>Your Bio Here</label>
                          <textarea
                            v-model="form.comments"
                            id="comments"
                            rows="4"
                            class="form-control"
                            placeholder="About Me :"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>

                <div class="form-group add-social mt-s">
                  <h2>Add social Links</h2>
                  <div class="block-container">
                    <div class="all-socials">
                      <div class="new-skills">
                        <div class="row">
                          <div class="col-sm-6">
                            <label>Social icon </label>
                            <select
                              type="text"
                              v-model="socials_icon"
                              class="form-control"
                            >
                              <option selected disabled>Select Social</option>
                              <option value="fa fa-facebook">facebook</option>
                              <option value="fa fa-twitter">twitter</option>
                              <option value="fa fa-google">google</option>
                              <option value="fa fa-linkedin">linkedin</option>
                              <option value="fa fa-youtube">youtube</option>
                              <option value="fa fa-instagram">instagram</option>
                              <option value="fa fa-pinterest">pinterest</option>
                              <option value="fa fa-snapchat-ghost">snapchat</option>
                              <option value="fa fa-skype">skype</option>
                              <option value="fa fa-android">android</option>
                              <option value="fa fa-dribbble">dribbble</option>
                              <option value="fa fa-vimeo">vimeo</option>
                              <option value="fa fa-tumblr">tumblr</option>
                              <option value="fa fa-vine">vine</option>
                              <option value="fa fa-foursquare">foursquare</option>
                              <option value="fa fa-stumbleupon">stumbleupon</option>
                              <option value="fa fa-flickr">flickr</option>
                              <option value="fa fa-yahoo">yahoo</option>
                              <option value="fa fa-reddit">reddit</option>
                              <option value="fa fa-rss">rss</option>
                            </select>
                          </div>
                          <div class="col-sm-6">
                            <label>Social Name</label>
                            <input
                              type="text"
                              v-model="socials_name"
                              class="form-control"
                            />
                          </div>
                        </div>

                        <label>Social Link</label>
                        <input
                          type="text"
                          v-model="socials_link"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="add-blk add-socials btn btn-info mt-50">
                      <i class="fa fa-plus"></i>
                      <span>Add another social</span>
                    </div>
                  </div>
                </div>
                <div class="form-group add-edu">
                  <h2>Add Educations</h2>
                  <div class="all-edus">
                    <div class="new-edu">
                      <label>Field of study:</label>
                      <input
                        type="text"
                        name="edu[]"
                        class="form-control"
                        placeholder="Ex: Computer Science"
                      />
                      <label>Degree:</label>
                      <input
                        type="text"
                        name="edu[]"
                        class="form-control"
                        placeholder="Ex: Bachelor's"
                      />
                      <label>School:</label>
                      <input
                        type="text"
                        name="edu[]"
                        class="form-control"
                        placeholder="Ex: al-albayt university"
                      />
                      <div class="form-row">
                        <div class="col">
                          <label>From year:</label>
                          <input
                            type="month"
                            name="edu[]"
                            class="form-control"
                          />
                        </div>
                        <div class="col">
                          <label>To year (optional=present):</label>
                          <input
                            type="month"
                            name="edu[]"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-blk btn btn-info" id="add-edu">
                    <i class="fa fa-plus"></i>
                    <span>Add another education</span>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="form-group add-exp mt-s">
                  <h2>Add Experiences</h2>
                  <div class="all-exps">
                    <div class="new-exp">
                      <label>Title:</label>
                      <input
                        type="text"
                        name="exp[]"
                        class="form-control"
                        placeholder="Ex: Web Developer"
                      />
                      <label>Company:</label>
                      <input
                        type="text"
                        name="exp[]"
                        class="form-control"
                        placeholder="Ex: ProgressSoft"
                      />
                      <div class="form-row">
                        <div class="col">
                          <label>From year:</label>
                          <input
                            type="month"
                            name="exp[]"
                            class="form-control"
                          />
                        </div>
                        <div class="col">
                          <label>To year (optional=present):</label>
                          <input
                            type="month"
                            name="exp[]"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <label>Description (optional):</label>
                      <textarea name="exp[]" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="add-blk btn btn-info" id="add-exp">
                    <i class="fa fa-plus"></i>
                    <span>Add another experience</span>
                  </div>
                </div>

                <div class="clearfix"></div>

                <div class="form-group add-skill mt-s">
                  <h2>Add Skills</h2>
                  <div class="block-container">
                    <div class="all-skills">
                      <div class="new-skills">
                        <label>Skill</label>
                        <input
                          type="text"
                          name="skills[]"
                          class="form-control"
                        />
                        <label>Proficiency</label>
                        <input
                          type="text"
                          name="skills[]"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="add-blk add-skills btn btn-info mt-50">
                      <i class="fa fa-plus"></i>
                      <span>Add another Skill</span>
                    </div>
                  </div>
                </div>

                <div class="clearfix"></div>

                <div class="form-group add-social mt-s">
                  <h2>Add Hoppies</h2>
                  <div class="block-container">
                    <div class="all-hoppies">
                      <div class="new-skills">
                        <label>Hoppy icon image (32px*32px)</label>
                        <input
                          type="file"
                          name="hoppies[]"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="add-blk add-hoppies btn btn-info mt-50">
                      <i class="fa fa-plus"></i>
                      <span>Add another Hoppy</span>
                    </div>
                  </div>
                </div>

                <hr class="mt-100" />
                <input
                  type="submit"
                  name="submit"
                  value="Create Resume"
                  class="btn-sub"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Blog Area End ##### -->
  </div>
</template>
<script>
import Format1 from "../formats/exprince/format1.vue";
export default {
  name: "Dashboard",
  components: {
    Format1,
  },
  data: () => ({
    form: {
      name: "Enter you name",
      job_title: " Job title",
      email: " Email address",
      phone: " Phone number",
      zipcode: " zip/pin code",
      socials_name: [],
      socials_icon: [],
      socials_link: [],
    },
  }),
};
</script>

  <style lang="postcss" scoped>
.blog-area {
  margin-top: 25px;
}
</style>
