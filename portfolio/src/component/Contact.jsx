import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/info", formData);
      console.log("Success", res.data);
      toast.success("Message sent!");

      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (err) {
      console.error("Error", err.response?.data || err.message);
      toast.error("Something went wrong");
    }
  };

  return (
   <div id="contact" className="w-full min-h-[600px] bg-neutral-900 sm:scroll-mt-32  relative">

      {/* Heading - Left side */}
      <div className="p-4 w-full sm:w-[10%] sm:ml-80 pt-20 sm:pt-80 flex items-center justify-center sm:-rotate-90">
        <p
          style={{ fontFamily: "text_font" }}
          className="sm:text-8xl text-5xl text-center uppercase text-neutral-500 font-bold text-nowrap flex flex-col"
        >
          <span>Let's Work</span>
          <span>Together</span>
        </p>
      </div>

      {/* Form Box */}
     {/* Form Box */}
<div className="w-[85%] sm:w-[500px] h-auto sm:h-[500px]  rounded-2xl bg-white mx-auto sm:absolute sm:top-1/2 sm:left-216 sm:-translate-x-1/2 sm:-translate-y-1/2 shadow-md mt-10 sm:mt-[-22px]">

        <div className="p-6 sm:p-10">
          <h3
            style={{ fontFamily: "about_font" }}
            className="font-bold text-3xl sm:text-5xl pb-2"
          >
            Get in touch
          </h3>
          <span className="text-neutral-600">You can reach me anytime</span>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
              className="border-neutral-400 border-2 p-3 rounded-2xl"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              className="border-neutral-400 border-2 p-3 rounded-2xl"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="border-neutral-400 border-2 p-3 rounded-2xl"
              type="tel"
              name="number"
              value={formData.number}
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <textarea
              className="h-32 border-neutral-400 border-2 p-3 rounded-2xl resize-none"
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition"
            >
              Submit
            </button>
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
