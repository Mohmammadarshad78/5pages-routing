"use client"
import { useState } from 'react';
import ResumePDF from './ResumePDF';

export default function ResumeForm() {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        birthDate: '',
        city: '',
        country: '',
        education: '',
        skills: '',
        contact: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Enter Your Details</h2>
            <form className="space-y-4">
                {[
                    { name: 'name', label: 'Name' },
                    { name: 'fatherName', label: 'Father\'s Name' },
                    { name: 'birthDate', label: 'Date of Birth', type: 'date' },
                    { name: 'city', label: 'City' },
                    { name: 'country', label: 'Country' },
                    { name: 'education', label: 'Education' },
                    { name: 'skills', label: 'Skills' },
                    { name: 'contact', label: 'Contact' },
                ].map(({ name, label, type = 'text' }) => (
                    <div key={name} className="flex flex-col">
                        <label className="font-bold text-gray-700">{label}</label>
                        <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Enter your ${label.toLowerCase()}`}
                        />
                    </div>
                ))}
            </form>
            <div className="mt-8">
                <ResumePDF formData={formData} />
            </div>
        </div>
    );
}
