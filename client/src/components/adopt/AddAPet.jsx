import React, { useEffect, useState } from 'react'
import SectionHead from '../index/SectionHead'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddAPet = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState({
        image: '',
        type: '',
        name: '',
        age: '',
        gender: '',
        breed: '',
        description: ''
    })

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'type':
                setValue({ ...value, type: e.target.value })
                break;
            case 'name':
                setValue({ ...value, name: e.target.value })
                break;
            case 'age':
                setValue({ ...value, age: e.target.value })
                break;
            case 'gender':
                setValue({ ...value, gender: e.target.value })
                break;
            case 'breed':
                setValue({ ...value, breed: e.target.value })
                break;
            case 'description':
                    setValue({ ...value, description: e.target.value })
                    break;
            default:
                break;
        }
    }

    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/random?client_id=6ovrfINpYlBZ_Yn1_vHntwC5tAPj9XerRWBl5KNsTW4&query=${value.breed + " " + value.type}&count=1`)
            .then((res) => setValue({ ...value, image: res.data[0].urls.regular }))
            // .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // await axios.get(`https://api.unsplash.com/search/photos/?client_id=6ovrfINpYlBZ_Yn1_vHntwC5tAPj9XerRWBl5KNsTW4&query=${value.breed + " " + value.type}&page=1&per_page=1`)
        //     // .then((res) => console.log(res.data.results[0].urls.regular))
        //     .then((res) => setValue({ ...value, image: res.data.results[0].urls.regular }))
        //     .catch((err) => console.log(err))

        axios.post("http://localhost:3000/pets", value)
            .catch((err) => console.log(err))

        // console.log(value);

        alert("Success")

        navigate("/adopt")
    }

    return (
        <div className="mt-12 mb-16">
            <SectionHead head="Adopt" subheadFirst="Add New Pet" />
            <form className="flex flex-col px-40 gap-8 items-center mt-8">
                <div className='flex flex-col'>
                    <label className='mb-2'>Type: </label>
                    <input type="text" name="type" value={value.type} onChange={handleChange} className="pl-4 py-2 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black focus:ring-orange-600 focus:border-orange-600 focus:ring-2 focus:outline-none" placeholder="Cat or Dog" />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Name: </label>
                    <input type="text" name="name" value={value.name} onChange={handleChange} className="pl-4 py-2 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black focus:ring-orange-600 focus:border-orange-600 focus:ring-2 focus:outline-none" placeholder="Pet name" />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Age: </label>
                    <input type="text" name="age" value={value.age} onChange={handleChange} className="pl-4 py-2 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black focus:ring-orange-600 focus:border-orange-600 focus:ring-2 focus:outline-none" placeholder="Age in month" />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Gender: </label>
                    <input type="text" name="gender" value={value.gender} onChange={handleChange} className="pl-4 py-2 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black focus:ring-orange-600 focus:border-orange-600 focus:ring-2 focus:outline-none" placeholder="Male or Female" />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Breed: </label>
                    <input type="text" name="breed" value={value.breed} onChange={handleChange} className="pl-4 py-2 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black focus:ring-orange-600 focus:border-orange-600 focus:ring-2 focus:outline-none" placeholder='Pet Breed' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2'>Description: </label>
                    <input type="text" name="description" value={value.description} onChange={handleChange} className="pl-4 py-2 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black focus:ring-orange-600 focus:border-orange-600 focus:ring-2 focus:outline-none" placeholder='Pet Description' />
                </div>
                <button onClick={handleSubmit} type="submit" value="Submit" className="w-max px-16 font-bold py-3 mt-8 bg-orange-600 text-white rounded-md active:bg-white active:text-orange-600 active:ring-1 active:ring-orange-600" >Add New Pet</button>
            </form>
        </div>
    )
}

export default AddAPet