import React from 'react'

const SearchPets = ({ setSearchText }) => {
    return (
        <div className="px-12 box-border w-full">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={(e) => setSearchText(e.target.value)} type="search" className="w-full focus:outline-none block p-4 pl-14 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600 focus:border-orange-600 focus:ring-1" placeholder="ค้นหาด้วยชื่อ หรือ พันธุ์สัตว์เลี้ยง" />
            </div>
        </div>
    )
}

export default SearchPets