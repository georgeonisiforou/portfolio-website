import React from "react";
import Work from "./Work";

export default function WorkExperience() {
  return (
    <section className="mt-48 w-screen px-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl sm:text-5xl text-slate-900">Work Experience</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          <Work
            company="VasLabs LTD"
            position="Software Engineer Intern"
            period="June 2022 - August 2022"
            imageUrl="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?auto=format&fit=crop&w=1600&q=80"
            description="Daily training, assignments and GitHub issues, plus a personal project presentation and open-source collaboration."
            skills={[
              "Scala",
              "Functional Programming",
              "Terraform",
              "Docker",
              "Git/GitHub",
              "Node.js",
              "TypeScript",
              "React",
              "Next.js",
              "Bash",
              "Unit Testing",
            ]}
          />
          <Work
            company="TIOmarkets"
            position="Front-end Developer"
            period="December 2022 - June 2024"
            imageUrl="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?auto=format&fit=crop&w=1600&q=80"
            description="Restructured the company website with modern tooling, shipped new landing pages, and collaborated closely with marketing and design."
            skills={[
              "JavaScript",
              "React",
              "Next.js",
              "CSS",
              "Styled Components",
              "Git/GitHub",
              "Node.js",
              "Sanity",
            ]}
          />
          <Work
            company="Amdocs Ltd"
            position="Software Engineer"
            period="July 2024 - now"
            imageUrl="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?auto=format&fit=crop&w=1600&q=80"
            description="Building and shipping responsive web interfaces in an agile team, collaborating closely with UX and backend to deliver high-quality UI. Mentoring team members, code reviews and contributing to knowledge-sharing initiatives."
            skills={[
              "TypeScript",
              "React",
              "Redux",
              "SCSS",
              "Git",
              "GitLab",
              'Cursor',
              'MUI'
            ]}
          />
        </div>

        {/* <Work
          company="What's next?"
          position="Your next web developer?"
          period="Now - We run out of project ideas"
          description="Contact me and let's bring projects to life."
        /> */}
      </div>
    </section>
  );
}
