import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, name, breed, status, age, gender, image }) {
    return (
        <div className="flex flex-col gap-3 rounded-lg bg-white overflow-hidden p-3 shadow-lg">
            <img className="w-[240px] h-[185px] object-cover rounded-lg" src={image} />
            <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm font-semibold">
                    <p className="text-[#C7C7C7]">{age} Months | {gender}</p>
                    <p className="text-red-600">{status == "Available" ? <span className="text-green-500">AVAILABLE</span> : <span className="text-red-600">ADOPTED</span>}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-bold text-xl">{name}</p>
                    <p className="text-[#C7C7C7] font-bold">{breed}</p>
                </div>
                <Link to={`pets?id=${id}`} className="text-sm px-3 py-1 ring-2 ring-orange-400 rounded-full text-orange-400 font-bold w-max">Read more</Link>
            </div>
        </div>
    )
}

export default Card