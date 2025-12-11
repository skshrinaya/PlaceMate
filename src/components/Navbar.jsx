import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="w-full bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-primary">CampusConnect</Link>
        <div className="flex items-center gap-4">
          <Link to="/alumni" className="hover:text-blue-600">Alumni</Link>
          <Link to="/experiences" className="hover:text-blue-600">Experiences</Link>
          <Link to="/mentors" className="hover:text-blue-600">Mentors</Link>
          <Link to="/chat" className="hover:text-blue-600">Chat</Link>
          <Link to="/login" className="px-3 py-1 bg-primary text-white rounded">Login</Link>
        </div>
      </div>
    </nav>
  )
}