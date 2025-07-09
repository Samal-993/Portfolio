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
    e.preventDefault(); //Stop page reload

    try {
      const res = await axios.post("http://localhost:3000/info", formData);
      console.log("Success", res.data);
       toast.success("Message sent!")
       // ✅ Clear form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
    } catch (err) {
      console.error("Error", err.response?.data || err.message);
      
      toast.error("Something went wrong ")
    }
  };

  return (
    <div id="contact" className="w-full h-[600px] bg-neutral-900 scroll-mt-24">
      <div className="p-4 w-[10%]  ml-80 relative pt-80  flex items-center justify-center sm:-rotate-90  ">
        <p
          style={{ fontFamily: "text_font" }}
          className="sm:text-8xl text-6xl -mb-10 sm:mb-0 text-center uppercase text-neutral-500  font-bold text-nowrap flex flex-col "
        >
          <span>Let's Work</span>
          <span>Together</span>
        </p>
      </div>
      <div className="w-[500px] h-[500px] rounded-2xl absolute top-[440%] left-154 bg-white ">
        <div className="p-10">
          <h3
            style={{ fontFamily: "about_font" }}
            className="font-bold text-5xl pb-2"
          >
            Get in touch
          </h3>
          <span className="text-neutral-600 ">You can reach me anytime</span>

          <form onSubmit={handleSubmit} className=" flex flex-col gap-4 ">
            <input
              className="border-neutral-400 border-2 p-2 rounded-2xl pb-2"
              type="text"
              name="name"
               value={formData.name} 
              placeholder="Name"
              onChange={handleChange}
             
            />

            <input
              className="border-neutral-400 border-2 p-2 rounded-2xl pb-2"
              type="email"
              name="email"
               value={formData.email} 
              placeholder="Email"
              onChange={handleChange}
             
            />

            <input
              className="border-neutral-400 border-2 p-2 rounded-2xl pb-2"
              type="tel"
              name="number"
               value={formData.number} 
              placeholder="Phone Number"
              onChange={handleChange}
             
            />

            <textarea
              className=" h-30 border-neutral-400 border-2 p-2 rounded-2xl pb-2"
              name="message"
              placeholder="How can I help you?"
               value={formData.message} 
              onChange={handleChange}
             
            />
            <button
           
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
            <Toaster/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
