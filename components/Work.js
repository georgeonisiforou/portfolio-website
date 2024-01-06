import React from "react";

export default function Work({
  company,
  position,
  period,
  description,
  bullets,
}) {
  return (
    <div className=" text-slate-100 w-fit rounded-md relative workContainer sm:mt-12 mr-8 shadow-2xl">
      <div className="card-content rounded-md">
        <div className="flex flex-col w-full">
          <div className="card-title">
            <h3 className="text-3xl font-extrabold">{company}</h3>
            <h4 className="text-2xl font-light text-slate-200">{position}</h4>
          </div>
          <div className="flex justify-end items-end mt-6">
            <h5 className="text-md font-extralight text-slate-100">{period}</h5>
          </div>
        </div>

        <div className="work-content">
          <p className="mt-12">{description}</p>
          <br />
          <ul>{bullets}</ul>
        </div>
      </div>
    </div>
  );
}
