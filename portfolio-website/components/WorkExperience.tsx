import React from "react";
import Work from "./Work";

export default function WorkExperience() {
  return (
    <div className="mt-48 w-screen">
      <h3 className="sm:ml-32 sm:m-4  text-5xl font-semibold mb-8 ml-4">
        Work Experience
      </h3>
      <div className="flex sm:flex-row flex-col sm:p-4 sm:ml-16 pr-8">
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
          company="What's next?"
          position="Your next web developer?"
          period="Now - We run out of project ideas"
          description="Contact me and let's bring projects to life."
        />
      </div>
    </div>
  );
}
