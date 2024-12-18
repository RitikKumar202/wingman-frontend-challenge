import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import productsData from "../data/products.json";

const dummyResponses = {
    products: "Sure! We have a variety of products available, including electronics, fashion, and home essentials. What are you looking for?",
    orders: "You can check your order status in the 'My Orders' section. Do you need help finding it?",
    general: "I'm here to assist you with any queries you have. Let me know what you need help with!",
    default: "I'm sorry, I didn't quite catch that. Could you rephrase your query?",
};

const WingmanChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [date, setDate] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        setDate(formattedDate);

        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        const searchParams = new URLSearchParams(location.search);
        const productId = searchParams.get("productId");

        if (productId) {
            const product = productsData.find((p) => p.id === parseInt(productId, 10));
            if (product) {
                setMessages([
                    {
                        sender: "bot",
                        text: `Welcome! Here is the information about "${product.name}"`,
                        time: formattedTime,
                    },
                    {
                        sender: "bot",
                        text: `Order Date: ${product.date}\nOrder Value: ${product.orderValue}\nCommission: ${product.commission}`,
                        time: formattedTime,
                    },
                ]);
                return;
            }
        }

        setMessages([
            {
                sender: "bot",
                text: "Hi! I'm Wingman, your AI assistant. I'm here to assist you with any queries you have. Let me know what you need help with!",
                time: formattedTime,
            },
        ]);
    }, [location.search]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        const newMessage = { sender: "user", text: input, time: formattedTime };
        setMessages((prev) => [...prev, newMessage]);

        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = getBotResponse(input);
            setMessages((prev) => [...prev, { sender: "bot", text: botResponse, time: formattedTime }]);
            setIsTyping(false);
        }, 2000);
    };

    const getBotResponse = (query) => {
        if (query.toLowerCase().includes("product")) {
            return dummyResponses.products;
        } else if (query.toLowerCase().includes("order")) {
            return dummyResponses.orders;
        } else if (query.toLowerCase().includes("help")) {
            return dummyResponses.general;
        } else {
            return dummyResponses.default;
        }
    };

    return (
        <div className="flex flex-col items-center h-screen min-h-[500px] w-full bg-gray-100 px-4 py-5 md:px-10">
            <div className="bg-white w-full rounded-lg shadow-lg flex flex-col overflow-hidden" style={{ height: "600px" }}>
                <div className="bg-[#115E56] text-white p-4 text-center font-semibold text-lg">Wingman Chatbot</div>
                <div className="text-center text-gray-500 text-sm mt-2">{date}</div>
                <div
                    className="flex-1 p-4 overflow-y-auto space-y-4"
                    style={{ scrollbarWidth: "thin" }}
                    ref={chatContainerRef}
                >
                    {messages.map((message, index) => (
                        <div key={index} className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}>
                            <div
                                className={`max-w-xs px-4 py-2 rounded-lg text-sm ${message.sender === "user"
                                    ? "bg-[#0E9382] text-white"
                                    : "bg-gray-200 text-gray-900"
                                    }`}
                            >
                                {message.text}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                                {message.time}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex items-center space-x-2 animate-pulse">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                    )}
                </div>
                <div className="border-t p-4 flex items-center">
                    <input
                        type="text"
                        className="w-[80%] flex-1 border-2 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-2 focus:border-[#15B79F]"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                        className="text-[10px] ml-2 bg-[#15B79F] text-white px-4 py-2 rounded-lg md:text-sm hover:bg-[#0E9382]"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WingmanChatbot;
