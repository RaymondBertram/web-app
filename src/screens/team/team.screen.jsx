import { UnderlineSVG } from "../../components";

export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Anna Müller",
      role: "CEO & Founder",
      img: "https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Max Schmidt",
      role: "Lead Developer",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Lisa Becker",
      role: "Marketing Manager",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="pb-30 pt-20" id="team">
      <div className="relative text-center tracking-normal mb-6 md:mb-12">
        <h2 id="first_block text-black">
          Unser{" "}
          <span className="relative inline-block text-black">
            <h2 className="text-black">Team</h2>
            <UnderlineSVG />
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-1 border-[#8247ff] shadow-lg">
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
