import React from "react";
import Swal from "sweetalert2";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3697875f-d714-4830-b319-7aae413659fe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "request sent successfully",
        icon: "success",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] bg-white p-4 rounded-lg">
        <button
          className="text-black text-xl place-self-end mb-4"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl mb-4 text-black">Registration Form</h2>
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="border border-gray-300 p-2 rounded text-black"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border border-gray-300 p-2 rounded text-black"
          />
          <textarea
            placeholder="Message (Optional)"
            name="message"
            className="border border-gray-300 p-2 rounded text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
