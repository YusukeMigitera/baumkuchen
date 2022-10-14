import React from 'react';
import { memo, FC } from "react"
import { Link } from "react-router-dom"

export const Header: FC = memo(() => {
  return (
    <header>
      <div className="h-28 bg-purple-800 px-12 pt-4 text-white">
        <div className="flex relative items-center">        
          <Link to="/">
            <h1 className="text-white text-2xl">Baumkuchen</h1>
          </Link>
          <div className="absolute right-0 mr-8">
            <input type="text" placeholder="Search"　className="h-10 w-72 px-0 rounded-full px-4 mr-8 outline-none text-black" />
            <button className="h-10 w-24 mr-6 border-2 border-current text-sm rounded-md">Login</button>
            <button className="h-10 w-24 border-2 border-current text-sm rounded-md">Create</button>
          </div>
        </div>
        <div className="flex pt-4">
          <Link to="/" className=" px-4 mr-6">
            <p>Questions</p>
          </Link>
          <Link to="/questions" className="px-4 mr-6">
            <p>Ask Question</p>
          </Link>
          <Link to="/answer" className="px-4 mr-6">
            <p>Answer</p>
          </Link>
          <Link to="/user" className="px-4">
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </header>
  )
})