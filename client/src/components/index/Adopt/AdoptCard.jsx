import React from 'react'
import Card from './Card'
import SectionHead from '../SectionHead'
import { Link } from 'react-router-dom'

function AdoptCard() {
  return (
    <div className="flex flex-col gap-8 my-32 items-center justify-center px-40">
      <SectionHead head="Adopt" subheadFirst="New Best Friend Wanted: Adopt Today" />
      <div className="flex flex-col gap-4 w-full">
        <div className='flex justify-between'>
          <h1 className='font-bold text-lg'>Latest Pets</h1>
          <Link to="#">view all &nbsp;&gt;</Link>
        </div>
        <div className="grid grid-cols-4 w-full justify-items-center">
          <Card name="Tid" breed="Thai cat" status="Adopted" age="2 Months" gender="Male" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU" />
          <Card name="Khunpan" breed="Thai cat" status="Available" age="6 Months" gender="Female" image="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg" />
          <Card name="Dang" breed="Thai Dog" status="Available" age="8 Months" gender="Female" image="https://img.freepik.com/premium-photo/brown-thai-dog-is-looking-something-interesting-with-pure-face_34159-1368.jpg?w=2000" />
          <Card name="Mew" breed="Siamese cat" status="Adopted" age="3 Months" gender="Male" image="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Siamese%201.jpg?h=c17eaee4&itok=BRsemy6v" />
        </div>
      </div>
    </div>
  )
}

export default AdoptCard