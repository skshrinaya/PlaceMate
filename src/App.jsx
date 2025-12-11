import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AlumniDirectory from './pages/AlumniDirectory'
import Experiences from './pages/Experiences'
import MentorConnect from './pages/MentorConnect'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/alumni" element={<AlumniDirectory/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/mentors" element={<MentorConnect/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  )
}