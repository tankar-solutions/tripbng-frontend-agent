import React from "react";
import { Container } from "@/components/ui";
import { FaRegMoneyBillAlt, FaFileInvoice, FaCreditCard, FaMinusCircle, FaCalendarAlt, FaRegStickyNote, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';

// Define the JSON data (could also be imported if in a separate file)
const boxData = {
  "boxes": [
    { "icon": <FaRegMoneyBillAlt />, "title": "Bank Details" },
    { "icon": <FaFileInvoice />, "title": "Tax Invoice" },
    { "icon": <FaCreditCard />, "title": "Credit Notes" },
    { "icon": <FaMinusCircle />, "title": "Debit Notes" },
    { "icon": <FaCalendarAlt />, "title": "Offline Booking" },
    { "icon": <FaRegStickyNote />, "title": "Status Queue" },
    { "icon": <FaMapMarkerAlt />, "title": "LowFare Calendar" },
    { "icon": <FaUserAlt />, "title": "Retailer MarkUp" }
  ]
};

const Home = () => {
  return (
    <Container className="bg-transparent">
      <div className="py-10 px-4 bg-white rounded-lg shadow-lg mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {boxData.boxes.map((box, index) => (
            <div key={index} className="flex flex-col items-center py-4 w-72 bg-yellow/20 rounded-lg shadow-md">
              <div className="text-xl">{box.icon}</div>
              <h2 className="text-lg font-semibold">{box.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
