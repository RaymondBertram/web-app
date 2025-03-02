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

export const Team = () => {
  return (
    <section className="py-16" id="team">
      <h1 className="text-center mb-10 py-4">Unser Team</h1>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-3 w-max">
          {[...teamMembers].map((member, index) => (
            <div
              key={index}
              className="relative w-[26em] h-[21.5em] rounded-[2.25em] shadow-lg overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.img})` }}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md text-center py-4">
                <h3 className="text-lg font-bold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
