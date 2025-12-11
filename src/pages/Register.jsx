export default function Register(){
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form>
        <input className="w-full p-2 border mb-3" placeholder="Full name" />
        <input className="w-full p-2 border mb-3" placeholder="Email" />
        <input className="w-full p-2 border mb-3" placeholder="Password" type="password" />
        <button className="w-full bg-green-600 text-white p-2 rounded">Create account</button>
      </form>
    </div>
  )
}