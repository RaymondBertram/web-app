import { UnderlineSVG } from "../../components";
import ceo_image from "../../assets/images/team_ceo.jpeg";

export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Timothy Keller",
      role: "Chief Executive Officer",
      img: ceo_image,
    },
  ];

  return (
    <section className="pb-20 md:py-15" id="team">
      <div className="relative text-center tracking-normal mb-6 md:mb-12">
        <h2 id="first_block text-black">
          Unser{" "}
          <span className="relative inline-block text-black">
            <h2 className="text-black">Gründer</h2>
            <UnderlineSVG color="#b9278b" duration={2} />
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-1  shadow-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-700">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
