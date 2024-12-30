import React from "react";

const Privacy = () => {
  return (
    <div className="w-4/5 m-auto flex flex-col gap-5 ">
      <div className="w-full grid place-content-center">
        <h1 className="text-4xl text-black font-poppinsBold text-center border-b-2 border-gray-500 py-2">
          Privacy Policy
        </h1>
      </div>
      <p className="font-poppinsRegular">
        <span className="text-lg font-poppinsMedium">App Kyc </span> understands
        the significance of privacy to our users, and we are committed to being
        transparent about how we collect, use, disclose, transfer, and secure
        your information. This Privacy Policy outlines our data practices. The
        Privacy Policy applies to our website and any on-line applications that
        reference or link to this Privacy Policy collectively.
      </p>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-poppinsSemibold">
          Information Collection and Use
        </h2>
        <p className="font-poppinsRegular">
          We collect personal information to provide and improve our Services,
          enhance user experience, and communicate effectively. This information
          may include:
        </p>
        <ul className="ml-5">
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold">Personal Details: </span>
            Name, email address, phone number, and other details you provide
            when interacting with our website or services.
          </li>
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold">Usage Data: </span>
            Information about your use of our website, such as IP address,
            browser type, and pages visited, to analyse and improve site
            performance.
          </li>
        </ul>
        <p className="font-poppinsRegular">
          We may also collect information through surveys, user forums, or when
          you contact us directly.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-poppinsSemibold">
          How We Use Your Information
        </h2>
        <ul className="ml-5">
          <li className="list-disc text-base">
            To deliver and improve our Services.
          </li>
          <li className="list-disc text-base">
            To personalize user experiences and provide tailored
            recommendations.
          </li>
          <li className="list-disc text-base">
            To respond to your inquiries and provide efficient customer support.
          </li>
          <li className="list-disc text-base">
            For marketing purposes, including sending newsletters, offers, and
            updates (with your consent).
          </li>
        </ul>
        <p className="font-poppinsRegular">
          You may opt-out of marketing communications at any time.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-poppinsSemibold">Data Sharing</h2>
        <p className="font-poppinsRegular">
          We may share your information in the following cases:
        </p>
        <ul className="ml-5">
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold">
              With Trusted Partners:{" "}
            </span>
            For analytics, customer support, and marketing, in compliance with
            applicable laws.
          </li>
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold">
              With Affiliates/Subsidiaries:{" "}
            </span>
            To improve and enhance our Services.
          </li>
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold"> In Aggregated Form: </span>
            Non-identifiable data may be shared for research and analysis
            purposes.
          </li>
        </ul>
        <p className="font-poppinsRegular">
          We do not sell your personal information to third parties.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-poppinsSemibold"> Data Security </h2>
        <p className="font-poppinsRegular">
          We implement appropriate technical and organizational measures to
          protect your information from unauthorized access, loss, or misuse.
          However, no data transmission over the Internet can be guaranteed to
          be entirely secure. You are responsible for safeguarding any
          credentials used to access our Services.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-poppinsSemibold">
          {" "}
          Your Rights and Choices{" "}
        </h2>
        <ul className="ml-5">
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold">
              {" "}
              Access and Correction:{" "}
            </span>
            You may request access to or correction of your personal data.
          </li>
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold">Opt-Out: </span>
            You may subscribe from promotional communications by following the
            instructions in the email or contacting us directly.
          </li>
          <li className="list-disc text-base">
            <span className="font-poppinsSemibold"> Data Deletion: </span>
            You may request the deletion of your personal information unless
            retention is required by law or for legitimate business purposes.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          For any inquiries or requests regarding your personal data, please
          contact us at:
        </p>
        <h2 className="text-2xl font-poppinsSemibold"> App Kyc </h2>
        <span> contact Number: +91-9015920156</span>
        <span> Email: pooja.bhandoria@appkyc.com</span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-poppinsSemibold"> External Links </h2>
        <p className="font-poppinsRegular">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these sites. We
          recommend reviewing the privacy policies of these websites before
          providing any personal information.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-poppinsSemibold"> Policy Updates </h2>
        <p className="font-poppinsRegular">
          App Kyc reserves the right to amend this Privacy Policy at any time to
          reflect changes in technology, legal requirements, or business
          practices. Updates will be communicated through our website, and the
          revised policy will include an updated “effective date.”
        </p>
      </div>
    </div>
  );
};

export default Privacy;
