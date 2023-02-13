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
            default:
                break;
        }
    }

    const getImage = () => {
        axios.get(`https://api.unsplash.com/photos/random?client_id=6ovrfINpYlBZ_Yn1_vHntwC5tAPj9XerRWBl5KNsTW4&query=${value.breed}&count=1`)
            .then((res) => setValue({
                ...value,
                image: res.data[0].urls.regular
            }))
    }

    useEffect(() => {
        getImage()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        await getImage()
        console.log(value);

        await axios.post("http://localhost:3000/pets", value)
            .catch((err) => console.log(err))

        alert("Success")

        navigate("/adopt")
    }

    return (
        <div className="mt-12 mb-16">
            <SectionHead head="Adopt" subheadFirst="Add a Pet" />
            <form method='post' onSubmit={handleSubmit} className="flex flex-col px-40 gap-8 items-center mt-8">
                <div>
                    <label className='mr-4'>Type: </label>
                    <input type="text" name="type" value={value.type} onChange={handleChange} className="py-1 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black" placeholder="Cat or Dog" />
                </div>
                <div>
                    <label className='mr-4'>Name: </label>
                    <input type="text" name="name" value={value.name} onChange={handleChange} className="py-1 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black" placeholder="Pet name" />
                </div>
                <div>
                    <label className='mr-4'>Age: </label>
                    <input type="text" name="age" value={value.age} onChange={handleChange} className="py-1 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black" placeholder="Age in month" />
                </div>
                <div>
                    <label className='mr-4'>Gender: </label>
                    <input type="text" name="gender" value={value.gender} onChange={handleChange} className="py-1 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black" placeholder="Male or Female" />
                </div>
                <div>
                    <label className='mr-4'>Breed: </label>
                    <input type="text" name="breed" value={value.breed} onChange={handleChange} className="py-1 px-2 shadow-lg w-96 rounded-sm ring-1 ring-black" placeholder='Pet Breed' />
                </div>
                <button type="submit" value="Submit" className="w-min px-16 font-bold py-2 bg-orange-600 text-white rounded-md active:bg-white active:text-orange-600 active:ring-1 active:ring-orange-600" >Add</button>
            </form>
        </div>
    )
}

export default AddAPet