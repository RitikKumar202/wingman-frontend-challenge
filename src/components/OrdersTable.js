import React, { useState } from "react";
import productsData from "../data/products.json";
import { images } from "../utils/ImageUtils";
import { useNavigate } from "react-router-dom";

const OrdersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: "orderValue", direction: "asc" });
    const itemsPerPage = 4;
    const totalPages = Math.ceil(productsData.length / itemsPerPage);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleViewChat = (productId) => {
        navigate(`/chats?productId=${productId}`); // Navigate to /chats with productId
    };

    const startIndex = (currentPage - 1) * itemsPerPage;

    const sortedData = [...productsData].sort((a, b) => {
        const valueA = parseFloat(a.orderValue.replace(/[^0-9.-]+/g, ""));
        const valueB = parseFloat(b.orderValue.replace(/[^0-9.-]+/g, ""));
        return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
    });

    const currentItems = sortedData.slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const toggleSortDirection = () => {
        const newDirection = sortConfig.direction === "asc" ? "desc" : "asc";
        setSortConfig({ ...sortConfig, direction: newDirection });
    };

    return (
        <div className="p-4">
            <h1 className="text-xl md:text-3xl pb-6 px-2">Orders</h1>
            <div className="border border-[#DCDFE4] rounded-lg overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="text-left border-b border-[#DCDFE4] bg-[#F9FAFB]">
                            <th className="p-4 text-sm font-normal text-[#667085]">Product</th>
                            <th className="p-4 text-sm font-normal text-[#667085]">Date</th>
                            <th className="p-4 text-sm font-normal text-[#667085]">Time spent</th>
                            <th
                                className="p-4 text-sm font-normal text-[#667085] cursor-pointer"
                                onClick={toggleSortDirection}
                            >
                                Order Value
                                <span>{sortConfig.direction === "asc" ? " ↑" : " ↓"}</span>
                            </th>
                            <th className="p-4 text-sm font-normal text-[#667085]">Commission</th>
                            <th className="p-4 text-sm font-normal text-[#667085]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((product) => (
                            <tr
                                key={product.id}
                                className="hover:bg-gray-50 text-[#212636] text-base font-normal"
                            >
                                <td className="p-4 flex items-center">
                                    <img
                                        src={images.ProductImage}
                                        alt="Product"
                                        className="mr-3 w-10 sm:w-8"
                                    />
                                    <span className="truncate">{product.name}</span>
                                </td>
                                <td className="p-4">
                                    {product.date} <br />
                                    <span className="text-xs">{product.timeDetail}</span>
                                </td>
                                <td className="p-4">{product.time}</td>
                                <td className="p-4">{product.orderValue}</td>
                                <td className="p-4 font-bold">{product.commission}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => handleViewChat(product.id)}
                                        className="flex gap-3 items-center justify-center text-[#8A94A6] hover:text-gray-600"
                                    >
                                        View Chat
                                        <img
                                            src={images.ArrowUpIcon}
                                            alt="arrow up"
                                            className="w-3"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-wrap items-center justify-end mt-4 space-x-4">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`px-2 py-1 md:px-4 md:py-2 text-sm border rounded ${currentPage === 1 ? "text-gray-400" : "hover:bg-gray-100"
                        }`}
                >
                    Previous
                </button>
                <span className="text-gray-700 text-sm md:text-base">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 md:px-4 md:py-2 text-sm border rounded ${currentPage === totalPages ? "text-gray-400" : "hover:bg-gray-100"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OrdersTable;
