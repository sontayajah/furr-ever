import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../index/Adopt/Card'
import SearchPets from '../index/adopt/SearchPets'
import SectionHead from '../index/SectionHead'

function Adopt() {
  const [allPets, setAllPets] = useState([])
  const [filteredPets, setFilteredPets] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [activeBtn, setActiveBtn] = useState('All')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get('http://localhost:3000/pets')
      .then((res) => setAllPets(res.data))
      .catch((err) => {
        console.log(err)
        setLoading(false);
      })

    setLoading(false);
  }, [])

  useEffect(() => {
    setFilteredPets(allPets)
  }, [allPets])

  function handleCategoryChange(e) {
    const category = e.target.value
    setActiveBtn(category)
    category !== "All"
      ? setFilteredPets(allPets.filter((pet) => pet.type === category))
      : setFilteredPets(allPets)
  }

  useEffect(() => {
    if (searchText == '') {
      setFilteredPets(allPets)
    } else {
      setFilteredPets(allPets.filter((pet) => pet.name.toLowerCase().includes(searchText.toLowerCase())))
    }
  }, [searchText])

  return (
    <div className="mt-12 mb-16">
      <SectionHead head="Adopt" subheadFirst="New Best Friend Wanted:" subheadSecond="Adopt Today" />
      <div className="px-40 flex justify-between mt-8 items-center">
        <div className="flex ring-2 ring-orange-600 rounded-3xl items-center px-2 h-max py-1 text-orange-600 font-bold">
          <button value="All" onClick={handleCategoryChange} className={`${activeBtn == 'All' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'} px-4 rounded-l-2xl rounded-r-md py-2`}>ALL</button>
          <p className='px-1'>|</p>
          <button value="Cat" onClick={handleCategoryChange} className={`${activeBtn == 'Cat' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'} px-4 rounded-l-md rounded-r-md py-2`}>CAT</button>
          <p className='px-1'>|</p>
          <button value="Dog" onClick={handleCategoryChange} className={`${activeBtn == 'Dog' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'} px-4 rounded-l-md rounded-r-2xl py-2`}>DOG</button>
        </div>
        <SearchPets setSearchText={setSearchText} />
        <div className="text-center w-64 py-4 bg-orange-600 text-white rounded-lg font-bold">
          <Link to="./add">+ Add New Pet</Link>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(264px,_1fr))] gap-y-9 w-full justify-items-center px-40 mt-4">
        {filteredPets && filteredPets.map((pet) => (<Card key={pet._id} name={pet.name} breed={pet.breed} status={pet.status} age={pet.age} gender={pet.gender} image={pet.image} />))}
      </div>
      {filteredPets?.length == 0 && <div className="text-center mt-4">ไม่พบสัตว์เลี้ยง</div>}
    </div>
  )
}

export default Adopt