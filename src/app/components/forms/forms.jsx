"use client"

import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Forms() {
    const {register, handleSubmit} = useForm()
    const [formData, setFormData] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [ age, setAge] = useState('')
    const [ gender, setGender] = useState('')
    const onSubmit = (data) => {
        setFormData(data)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Form Validation</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        {...register('name')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        {...register('email')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age:
                    </label>
                    <input
                        {...register('age')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                        Gender:
                    </label>
                    <select
                        {...register('gender')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        {...register('message')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pointer focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>

                {formData && (
                    <div>
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Age: {formData.age}</p>
                        <p>Gender: {formData.gender}</p>
                        <p>Message: {formData.message}</p>
                    </div>
                )}
            </form>
        </div>


    )
}