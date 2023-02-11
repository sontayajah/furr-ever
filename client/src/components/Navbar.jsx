import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="py-4 px-8 flex items-center justify-between">
      {/* <div className="flex items-center gap-12"> */}
        <div className="flex items-center gap-2">
          <img src="./src/assets/furr-ever-logo.png" className="w-12" />
          <Link to="/" className="text-2xl font-extrabold tracking-widest select-none">FurrEver</Link>
        </div>
        <div className="flex gap-12">
          <Link to="/" className="font-medium hover:text-orange-600">Home</Link>
          <Link to="/adopt" className="font-medium hover:text-orange-600">Adopt</Link>
          <Link to="/lost-pets" className="font-medium hover:text-orange-600">Lost Pets</Link>
          <Link to="/donate" className="font-medium hover:text-orange-600">Donation</Link>
          <Link to="/contact-us" className="font-medium hover:text-orange-600">Contact Us</Link>
        </div>
      {/* </div> */}
      <div className="flex gap-4 items-center">
        <Link to="#" className="font-medium hover:text-orange-600">Sign in</Link>
        <Link to="#" className="px-4 py-2 bg-orange-600 text-white rounded-md active:bg-white active:text-orange-600 active:ring-1 active:ring-orange-600">Create account</Link>
      </div>
    </nav>
  )
}

export default Navbar