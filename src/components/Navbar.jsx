import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#C7C8CC]">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex gap-4 text-md">
            <Link to='/'>
              <span className="text-gray-700 hover:text-gray-500 font-medium">Home</span>
            </Link>
            <Link to='/kanban-board'>
              <span className="text-gray-700 hover:text-gray-500 font-medium">Kanban Board</span>
            </Link>
          </div>
          <div className="flex gap-1">
            <button onClick={()=>{navigate('/login')}} className="bg-[#524e4e] hover:bg-[#6f6f70] text-white p-2 rounded-lg">Login</button>
            <button onClick={()=>{navigate('/signup')}} className="bg-[#524e4e] hover:bg-[#6f6f70] text-white shadow-sm shadow-[#E3E1D9] p-2 rounded-lg">Signup</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
