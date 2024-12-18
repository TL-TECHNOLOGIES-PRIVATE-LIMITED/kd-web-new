"use client";
import ReveloLayout from "@/layout/ReveloLayout";

const Disclaimer = () => {
  const disclaimerSections = [
    {
      title: "General Information",
      points: [
        "The information provided on this website is for general purposes only and subject to change without notice.",
      ],
    },
    {
      title: "Accuracy of Information",
      points: [
        "While we strive for accuracy, Kerala Drives is not responsible for any errors or omissions on the website.",
      ],
    },
    {
      title: "Third-Party Links",
      points: [
        "The website may contain links to third-party websites. Kerala Drives is not responsible for the content or privacy practices of these sites.",
      ],
    },
    {
      title: "Travel Risks",
      points: [
        "Customers are responsible for their safety during travel. Kerala Drives is not liable for injuries, loss, or damages during the trip.",
      ],
    },
    {
      title: "Use of Services",
      points: [
        "By using our services, you agree to hold Kerala Drives harmless from any claims arising from the use of our website or services.",
      ],
    },
  ];

  return (
    <ReveloLayout insta>
      <section className="page-banner-two rel z-1 ">
        <div className="container-fluid">
          <hr className="mt-0" />
          <div className="container">
            <div className="banner-inner pt-15 pb-25">
              <h2
                className="page-title mb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Disclaimer
              </h2>
            </div>

            <div className="comments mt-30  mb-60 ">
              <div
                className="comment-body mb-5"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <div className="terms-content">
                    {disclaimerSections.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="h5 h3-md h3-lg mb-3 font-semibold">{`${
                          index + 1
                        }. ${section.title}`}</h3>
                        <ul className="list-disc pl-6 mb-4">
                          {section.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="mb-2 text-gray-700 text-sm"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReveloLayout>
  );
};

export default Disclaimer;
