import React from "react";

const Contact = () => {
  return <div>
    <h1 className="p-4 m-4 text-3xl text-bold">Contact📱</h1>
    <form action="">

      <input type="text" placeholder="name" className="p-2 m-2 border border-black"/>
      <input type="text" placeholder="message" className="p-2 m-2 border border-black" />
      <button className="px-2 py-3 m-2 bg-gray-200 border border-black rounded-lg">Submit</button>
    </form>
  </div>;
};

export default Contact;
 