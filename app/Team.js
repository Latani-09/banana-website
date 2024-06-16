import Image from "next/image";
export default function Team() {
  const profile = require("@/public/images/profile.png");
  const members = [
    {
      id: "1",
      name: "Kumar",
      desigination: "Deputy Supervisor",
      telephone: "0771234000",
      img: profile,
    },
    {
      id: "2",
      name: "Ravi",
      desigination: "Manager",
      telephone: "0771234001",
      img: profile,
    },
    {
      id: "3",
      name: "Seetha",
      desigination: "Secretary",
      telephone: "0771234002",
      img: profile,
    },
    {
      id: "4",
      name: "Rama",
      desigination: "Logistics Officer",
      telephone: "0771234003",
      img: profile,
    },
    {
      id: "5",
      name: "Mani",
      desigination: "Harvest Supervisor",
      telephone: "0771234004",
      img: profile,
    },
  ];
  return (
    <>
      <div id="team" className="teamContainer">
        <h5 className="sectionTitle">Team</h5>
        <p className="teamDesc">
          Ambul banana cultivation at Rajanganaya which has been cultivated
          under Agri-Demonstration Park programme implemented throughout the
          island by Agriculture Sector Modernization Project (ASMP) of the
          Ministry of Agriculture has now become very successful. Minister of
          Agriculture, Wildlife and Forest{" "}
        </p>
        <div className="memberContainer">
          {members.map((member) => {
            return (
              <div className="memberCard" key={member.id}>
                <div className="imageContainer">
                  <Image alt='profile pic' src={profile} layout="fill" objectFit="cover" className="profileImg"></Image>
                </div>
                <p className="text-left">Name of the person</p>
                <p className="text-left">Position</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
