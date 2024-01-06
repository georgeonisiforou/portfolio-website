import React from "react";
import Work from "./Work";

export default function WorkExperience() {
  return (
    <div className="mt-48 w-screen">
      <h3 className="sm:ml-32 sm:m-4  text-5xl mb-8 ml-4">Work Experience</h3>
      <div className="flex sm:flex-row flex-col sm:p-4 sm:ml-16 p-8 gap-4 flex-wrap justify-start">
        <Work
          company="VasLabs LTD"
          position="Software Engineer Intern"
          period="June 2022 - August 2022"
          description="Introduction and daily training with various technologies. Daily
        completion of assignments and GitHub issues. Implementation and
        presentation of a personal project in the last 3 weeks. Active
        participation in open source projects. Technologies and concepts
        used:"
          bullets={
            <div>
              <li>Scala</li>
              <li>Functional Programming</li>
              <li>Terraform</li>
              <li>Docker</li>
              <li>Git | GitHub</li>
              <li>Node.js | TypeScript | React | Next.js | Markdown</li>
              <li>Bash</li>
              <li>Unit Testing</li>
            </div>
          }
        />
        <Work
          company="TIOmarkets"
          position="Front-end Developer"
          period="December 2022 - now"
          description="Involvement in the major restructuring of the company's website with modern technologies. Support and maintenance of webpages and implementation of new landing pages. Regular communication with marketing department and web designers for the most accurate implementation of the website's design. Participation in various internal company projects and applications and experimentation with several technologies."
          bullets={
            <div>
              <li>Javascript | React | Next.js</li>
              <li>CSS | Styled components</li>
              <li>Git | GitHub</li>
              <li>Node.js</li>
              <li>Sanity</li>
            </div>
          }
        />

        <Work
          company="What's next?"
          position="Your next web developer?"
          period="Now - We run out of project ideas"
          description="Contact me and let's bring projects to life."
        />
      </div>
    </div>
  );
}
