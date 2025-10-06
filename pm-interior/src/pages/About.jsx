import { motion } from "framer-motion";
import Image from "../assets/DSCN4051.jpg";

export default function About() {
  return (
    <div className="pt-24 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#84302f] mb-6">
            About <span className="text-[#c35244]">Us</span>
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            At <span className="font-semibold text-[#84302f]">PM Interior</span>,
            we believe your home and workspace should reflect who you are. With a
            passion for design and an eye for detail, our team creates elegant,
            functional, and timeless interiors.
          </p>
          <p className="text-lg leading-relaxed">
            From bespoke furniture to full-scale interior makeovers, we blend
            creativity with craftsmanship to deliver spaces that inspire and
            comfort.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={Image}
            alt="PM Interiors Work"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#84302f] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#c35244]">Our Mission</h3>
            <p className="leading-relaxed">
              To transform spaces into beautiful, functional environments
              that embody our clients’ vision while maintaining comfort,
              style, and sustainability.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#c35244]">Our Vision</h3>
            <p className="leading-relaxed">
              To be recognized as a trusted interior design partner that
              consistently delivers creativity, quality, and customer
              satisfaction across every project.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center text-[#84302f] mb-10">
          Our Core Values
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-[#c35244] mb-3">Creativity</h4>
            <p>
              Innovative designs tailored to each client, ensuring unique and
              personalized interiors.
            </p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-[#c35244] mb-3">Quality</h4>
            <p>
              We use premium materials and skilled craftsmanship to deliver
              long-lasting results.
            </p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-[#c35244] mb-3">Trust</h4>
            <p>
              We believe in transparent communication and reliable project
              delivery for every client.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
