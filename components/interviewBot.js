import React, { useState } from 'react';

const LoadingIndicator = () => <div>Loading...</div>;

const interviewBot = ({ isVisible, onClose }) => {

    function toggleJobDescriptionInput() {
        const toggle = document.getElementById('toggleGenerate');
        const roleSelection = document.getElementById('roleSelection');
        const jobDescriptionInput = document.getElementById('jobDescriptionInput');

        if (toggle.checked) {
            roleSelection.classList.add('hidden');
            jobDescriptionInput.classList.remove('hidden');
        } else {
            roleSelection.classList.remove('hidden');
            jobDescriptionInput.classList.add('hidden');
        }
    }

    function generateQuestions() {
        // Simulate API call to OpenAI and display questions
        const questionList = document.getElementById('questionList');
        questionList.innerHTML = '<p className="text-gray-600">Simulated question 1</p><p className="text-gray-600">Simulated question 2</p><p className="text-gray-600">Simulated question 3</p>';
    }

    function takeInterview() {
        // Placeholder for opening a new window for a timed interview
        alert('This will open a separate window that conducts a timed interview with the produced questions.');
    }


    return isVisible ? (
        <div className="flex flex-col items-center p-8">
            <div className="overflow-y-auto h-200 w-full bg-ocean p-3 space-y-2 text-black">
                <div className="container mx-auto p-8">
                    <h1 className="text-2xl font-bold mb-4">Interview Helper</h1>
                    <div className="bg-white shadow-md rounded p-6">
                        <div className="flex items-center mb-4">
                            <label htmlFor="toggleGenerate" className="flex items-center cursor-pointer">
                                <div className="relative">
                                    <input type="checkbox" id="toggleGenerate" className="sr-only" onClick={toggleJobDescriptionInput} />
                                    <div className="block bg-ocean w-14 h-8 rounded-full"></div>
                                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                </div>
                                <div className="ml-3 text-gray-700 font-medium">
                                    Generate questions with a job description?
                                </div>
                            </label>
                        </div>
                        <div id="roleSelection" className="mb-4">
                            <label htmlFor="roleDropdown" className="block text-gray-700 text-sm font-bold mb-2">Select a role</label>
                            <select id="roleDropdown" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>Software Engineer</option>
                                <option>Data Scientist</option>
                                <option>Product Manager</option>
                                <option>UI/UX Designer</option>
                            </select>
                        </div>
                        <div id="jobDescriptionInput" className="mb-4 hidden">
                            <label htmlFor="jobDescription" className="block text-gray-700 dark:text-white text-sm font-bold mb-2">Job Description</label>
                            <textarea id="jobDescription" className="w-full px-3 py-2 text-gray-700 dark:text-white border rounded-lg focus:outline-none" rows="4"></textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <button onClick={generateQuestions} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                GENERATE INTERVIEW QUESTION
                            </button>
                            <button onClick={takeInterview} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                TAKE INTERVIEW
                            </button>
                        </div>
                        <div id="questionList" className="mt-6"></div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default interviewBot;
