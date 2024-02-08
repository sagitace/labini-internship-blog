import React from "react";

const February = () => {
  return (
    <div>
      <div class="day4 february mb-5 mt-3" id="februaryday4">
        <img
          src={process.env.PUBLIC_URL + "/assets/day4.png"}
          alt="Day 4 Documentation"
          class="rounded-3 documentation-img"
        />

        <h4 class="fw-bold mt-2">Day 4</h4>
        <h6 class="sub-header">February 02, 2024</h6>
        <p class="entry">
          On Day 4 of the Digital Literacy Training, we had several activities
          that enhanced our knowledge and skills on cyber security and data
          transmission. First, we attended a cyber attack awareness presentation
          and discussion led by Engr. Kim Abarientos, who shared with us some
          tips and best practices on how to protect ourselves and our data
          online. Next, we learned about the PNPKI - Philippine National Public
          Key Infrastructure, which is a system that enables the safe and secure
          exchange of data using digital certificates and signatures. We also
          watched a PKI promotion presentation that explained the benefits and
          features of this system. After that, we polished our poster design
          using Canva. We applied some feedback and suggestions that we received
          from our peers on Day 3. Finally, we continued our Powerpoint activity
          from the previous day, where we practiced creating effective and
          engaging slides using different layouts and slide master.
        </p>
      </div>

      <div class="day3 february" id="februaryday3">
        <img
          src={process.env.PUBLIC_URL + "/assets/day3.png"}
          alt="Day 3 Documentation"
          class="rounded-3 documentation-img"
        />
        <h4 class="fw-bold mt-2">Day 3</h4>
        <h6 class="sub-header">February 01, 2024</h6>
        <p class="entry">
          Another digital literacy training session today. We learned how to use
          Excel for various tasks, such as creating charts, tables, and
          formulas. Engr. Antonio P. Bonganay guided us through some exercises
          to practice our skills. Next, we used Canva, an online tool for
          graphic design, to make posters for our projects. We already had some
          experience with Canva, so this was not too difficult. Finally, we were
          introduced to Java, a programming language that can be used for web
          development, mobile applications, and more. We took a practice test to
          check our understanding of the basic concepts.
        </p>
      </div>
    </div>
  );
};

export default February;
