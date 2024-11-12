import {
  FaPhoneAlt,
  FaComments,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";

const team = [
  {
    name: "Emmy Rosum",
    role: "Customer Success Agent",
    img: "/images/team/team1.jpg",
  },
  {
    name: "Sophie Chamberlain",
    role: "Specialized Support",
    img: "/images/team/team2.jpg",
  },
  {
    name: "Lana Steiner",
    role: "VP of Customer Success",
    img: "/images/team/team3.jpg",
  },
  {
    name: "Orlando Diggs",
    role: "Customer Success Lead",
    img: "/images/team/team4.jpg",
  },
  {
    name: "Sasha Kindred",
    role: "Customer Success Lead",
    img: "/images/team/team5.jpg",
  },
  {
    name: "Chris Evans",
    role: "Customer Support Specialist",
    img: "/images/team/team6.jpg",
  },
  {
    name: "Taylor Swift",
    role: "Senior Customer Agent",
    img: "/images/team/team7.jpg",
  },
  {
    name: "John Doe",
    role: "Technical Support Lead",
    img: "/images/team/team8.jpg",
  },
  {
    name: "Jane Smith",
    role: "Customer Success Manager",
    img: "/images/team/team9.jpg",
  },
  {
    name: "Alex Turner",
    role: "Customer Support Rep",
    img: "/images/team/team10.jpg",
  },
  {
    name: "Emma Watson",
    role: "Customer Engagement Specialist",
    img: "/images/team/team11.jpg",
  },
  {
    name: "Robert Brown",
    role: "Customer Service Director",
    img: "/images/team/team12.jpg",
  },
];

export default function AboutUs() {
  return (
    <section className="py-10 pt-10 px-4 ">
      <div className="container mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            We’ve got an <span className="text-green-600">entire</span> team
            dedicated
            <br />
            to supporting you and your business
          </h2>
          <p className="text-slate-500">
            Get help 24/7, with our award-winning support network of payments
            experts.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">
              Book a call
            </button>
            <button className="px-6 py-2 rounded-md bg-white border text-green-500 border-slate-300 hover:bg-green-50">
              Get in touch
            </button>
          </div>
        </div>

        {/* Team Section*/}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-6 py-4">
            {team.map((teamMember, index) => (
              <div
                key={index}
                className="min-w-[200px] h-[300px] relative overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${teamMember.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-semibold text-lg">{teamMember.name}</h3>
                  <p className="text-sm">{teamMember.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-10 lg:px-40">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Call us</h3>
              <p className="text-slate-500">
                Call our team Mon-Fri from 8am to 5pm.
              </p>
              <p className="text-slate-800 font-semibold flex items-center space-x-2">
                <FaPhoneAlt /> <span>+1 (555) 000-0000</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Chat with us</h3>
              <p className="text-slate-500">
                Speak to our friendly team via live chat.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaComments /> <span>Start a live chat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaTwitter /> <span>Message us on Twitter</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Visit us</h3>
              <p className="text-slate-500">
                Chat to us in person at our Melbourne HQ.
              </p>
              <p className="flex items-center text-slate-800 font-semibold space-x-2">
                <FaMapMarkerAlt />{" "}
                <span>100 Smith Street, Collingwood VIC 3066</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border rounded-md"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
              Send message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
