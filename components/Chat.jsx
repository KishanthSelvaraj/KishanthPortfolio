import React, { useEffect, useRef } from 'react';

const Chatbot = ({ onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Function to handle click outside
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose]);

  return (
    <div
      ref={ref}
      className="fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 lg:w-[30vw] lg:h-[90vh] md:w-[60vw] md:h-[80vh] w-[90vw] h-[70vh]"
    >
      {/* Your Chatbot component or iframe here */}
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/SYi6zokvmIcswshuTRxTL"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;