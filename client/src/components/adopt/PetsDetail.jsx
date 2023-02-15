import { useState, useEffect } from 'react'
import axios from 'axios';

const PetsDetail = () => {
    const [pets, setPets] = useState({})
    const [havePets, setHavePets] = useState(true)

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const id = params.get('id');

        if (id == null) {
            setHavePets(false)
        } else {
            axios.get('http://localhost:3000/adopt/pets?id=' + id)
                .then((res) => setPets(res.data))
                .catch((err) => {
                    if (err.response.status == 404) {
                        setHavePets(false)
                    }
                })
        }
    }, [])

    return (
        <>
            <div className="flex justify-center text-md items-center mt-8 mb-16">
                {
                    havePets ?
                        <div className="flex flex-col gap-4 w-[1000px]">
                            <img src={pets.image} alt={pets.name} className="w-[1000px] h-[400px] object-cover rounded-2xl" />
                            <div className="flex flex-col justify-center gap-2">
                                <div className="font-bold mt-4 text-5xl text-center"><span>{pets.name}</span></div>
                                <div className="flex justify-between text-xl mt-2 items-center">
                                    <div><span className="mr-4">{pets.type}</span> · <span className="mx-4">{pets.breed}</span> · <span className="ml-4">{pets.age} Months | {pets.gender}</span></div>
                                    {pets.status == "Available" ? <span className="bg-green-600 text-white px-4 py-2 rounded-sm font-bold">AVAILABLE</span> : <span className="bg-red-600 text-white px-4 py-2 rounded-sm font-bold">ADOPTED</span>}
                                </div>
                                <div className="mt-8 text-xl">
                                    <p>{pets.description}</p>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button className="font-bold w-full py-3 bg-orange-600 text-white rounded-md active:bg-white active:text-orange-600 active:ring-1 active:ring-orange-600">ADOPT THIS PET</button>
                                </div>
                            </div>
                        </div>
                        : <div className="flex flex-col justify-center items-center mt-16">
                            <p className="text-9xl font-bold">404</p>
                            <p className="text-2xl font-bold mt-4">Sorry, we don't have this pet.</p>
                        </div>
                }
            </div>
        </>
    )
}

export default PetsDetail