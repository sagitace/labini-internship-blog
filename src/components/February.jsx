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
          Second day of our on-the-job training program, and we continued to
          learn about digital literacy skills. We had more practice sessions on
          how to use Microsoft Word, Excel, and PowerPoint effectively. We
          learned how to format documents, create charts and graphs, and design
          presentations. These are essential skills for any modern workplace,
          and I'm glad we have the opportunity to improve them. I think this
          training will help us become more productive and efficient in our
          future tasks.
        </p>
      </div>

      <div class="day3 february" id="februaryday3">
        <img
          src={process.env.PUBLIC_URL + "/assets/day3.png"}
          alt="Day 3 Documentation"
          class="rounded-3 documentation-img"
        />
        <h4 class="fw-bold mt-2">Day 3</h4>
        <h6 class="sub-header">January 01, 2024</h6>
        <p class="entry">
          First day of our on-the-job training (OJT) at the Department of
          Information and Communications Technology (DICT). We participated in a
          Digital Literacy Training session, where we had to complete some
          exercises on MS Word and MS Excel. It was a good way to refresh our
          skills and learn some new tips and tricks. In the afternoon, we had an
          orientation session about DICT and its various projects. We learned
          about the vision, mission, and goals of the department, as well as the
          different programs and initiatives that they are implementing. It was
          very informative and interesting to see how DICT is working to improve
          the ICT sector in the Philippines.
        </p>
      </div>
    </div>
  );
};

export default February;
