import React from "react";

import DetailCard from "./DetailCard";
import {
  first,
  fourth,
  second,
  third,
  strategy,
  design,
  develop,
  support,
} from "../../utils/icons";

const DetailSection = () => {
  return (
    <div className="w-full flex flex-col gap-5 py-10 bg-section-background">
      <DetailCard
        number={first}
        text="We begin our journey by analyzing your business 
        objectives and end-user requirements to create 
        a draft of Low-Fidelity Wireframes. "
        pic={strategy}
        className1="border-yellowColor -right-20"
      />
      <DetailCard
        number={second}
        text="We design and draft the appearance, feel, and
        functionality of your product. "
        pic={design}
        className2="flex-row-reverse"
        className3="border-pinkColor -left-20 justify-end"
      />
      <DetailCard
        number={third}
        text="We use Agile methodology to collaborate and 
        iterate on the product design and development 
        until we achieve flawless UX/UI functionality and 
        experience."
        pic={develop}
        className1="border-blueColor -right-20"
      />
      <DetailCard
        number={fourth}
        text="We provide maintenance and support if required. 
        We monitor the performance of your website/
        application, fix bugs, and develop 
        new functionalities "
        pic={support}
        className2="flex-row-reverse"
        className3="border-greenColor -left-20 justify-end"
      />
    </div>
  );
};

export default DetailSection;
