import React, { useState } from "react";

export default function TimePicker() {
    const timeRange = [0.5, 1, 1.5, 2, 2.5, 3]; // Durations in hours
    const [selectedDuration, setSelectedDuration] = useState<number | null>(null); // To store the selected duration
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false); // Manage dropdown visibility

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const selectDuration = (duration: number) => {
        setSelectedDuration(duration); // Update the input field with the selected duration
        setDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <form className="max-w-[13rem] mx-auto">
            <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Select your study duration:
            </label>
            
            <div className="flex">
                {/* Input Area */}
                <input
                    type="text" // Changed from "time" to "text" for custom duration display
                    id="time"
                    className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedDuration ? `${selectedDuration} hours` : ""}
                    placeholder="Select duration"
                    readOnly // Prevent manual edits
                />
                {/* Dropdown Button */}
                <button
                    id="dropdown-duration-button"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent form submission on button click
                        toggleDropdown();
                    }}
                    className="border-s-0 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                >
                    Duration{" "}
                    <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div
                        id="dropdown-duration"
                        className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-duration-button"
                        >
                            {timeRange.map((duration, index) => (
                                <li key={index}>
                                    <button
                                        type="button"
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                        onClick={() => selectDuration(duration)}
                                    >
                                        {duration} hours
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </form>
    );
}