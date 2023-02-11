import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../index/Adopt/Card'
import SectionHead from '../index/SectionHead'

function Adopt() {
  return (
    <div className="mt-12 mb-16">
      <SectionHead head="Adopt" subheadFirst="New Best Friend Wanted: Adopt Today" />
      <div className="px-40 flex justify-between mt-8">
        <div className="flex ring-2 ring-orange-600 rounded-3xl items-center px-2 h-max py-1 text-orange-600 font-bold">
          <Link to="/adopt" className='bg-orange-600 px-4 rounded-l-2xl rounded-r-md py-1 text-white'>ALL</Link>
          <p className='px-1'>|</p>
          <Link to="/adopt?pets=cat" className='px-4'>CAT</Link>
          <p className='px-1'>|</p>
          <Link to="/adopt?pets=dog" className='px-4'>DOG</Link>
        </div>
        <Link to="#" className="px-4 py-2 bg-orange-600 text-white rounded-lg font-bold">+ Add a Pet</Link>
      </div>
      <div className="grid grid-cols-4 gap-y-9 w-full justify-items-center px-40 mt-4">
        <Card name="Tid" breed="Thai cat" status="Adopted" age="2 Months" gender="Male" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU" />
        <Card name="Khunpan" breed="Thai cat" status="Available" age="6 Months" gender="Female" image="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg" />
        <Card name="Dang" breed="Thai dog" status="Available" age="8 Months" gender="Female" image="https://img.freepik.com/premium-photo/brown-thai-dog-is-looking-something-interesting-with-pure-face_34159-1368.jpg?w=2000" />
        <Card name="Mew" breed="Siamese cat" status="Adopted" age="3 Months" gender="Male" image="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Siamese%201.jpg?h=c17eaee4&itok=BRsemy6v" />
        <Card name="Leo" breed="Golden Retriever" status="Available" age="5 Months" gender="Male" image="https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=KAq2A33j" />
        <Card name="Suki" breed="Chiba" status="Available" age="9 Months" gender="Male" image="https://i.pinimg.com/originals/31/5b/33/315b33c84ec4a6b6bb88a8ab09776ea6.jpg" />
      </div>
    </div>
  )
}

export default Adopt