const Footer = () => {
  const footerNavs = [
    {
      label: "Market Regions",
      items: ["Europe", "Middle East", "Africa", "JAPIC", "AMERICAS"],
    },
    {
      label: "Key Companies",
      items: ["Competitors", "Dealers"],
    },
    {
      label: "Materials Handling Industry",
      items: ["Product Types", "End User Markets"],
    },
    {
      label: "External Industry Topics",
      items: [
        "Political / Legal",
        "Environment",
        "Social",
        "Technological",
        "Economical",
      ],
    },
    {
      label: "External Industry Topics",
      items: [
        "After Sales / Service",
        "Cost Implications",
        "HR & Management",
        "Innovation",
        "IT",
        "Market Opportunities",
        "Marketing",
        "Strategy Related",
        "Financial Services",
        "Health & Safety",
      ],
    },
  ];

  return (
    <footer className="bg-[#002639] text-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-10">
        <div className="flex flex-wrap justify-between gap-y-12">
          {footerNavs.map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-[30%] lg:w-[16%]">
              <h4 className="text-sm font-semibold mb-4">{section.label}</h4>
              <ul className="space-y-2 text-sm font-normal list-disc list-inside">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="javascript:void(0)"
                      className="hover:text-gray-400 transition duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logo */}
          <div className="w-full sm:w-1/2 md:w-[30%] lg:w-[16%] flex items-start justify-center lg:justify-end">
            <img
              src="/Construction-Logo.jpg"
              className="w-[50px] rounded-full h-[50px] object-cover"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white  text-[#373737] py-4 border-t border-gray-300 text-center text-sm font-normal">
        5875 Landerbrook Drive, Suite 300 | Cleveland, Ohio 44124-4069 | © 2025
        Hyster–Yale, Inc., All rights reserved.&nbsp;
        <p>
          Designed and developed by{" "}
          <a
            href="https://thenexteck.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000000] font-medium hover:underline"
          >
            Nexteck | +44 7879175585
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
