import React, {useState} from 'react'

const Contact = () => {
 const [formData , setFormData] = useState({
    name: '',
    email: '',
    message: ''
 });

 const handleChange = (e) => {
    setFormData(prev => ({
        ...prev , 
        [e.target.name]: e.target.value
    }))
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
 }

  return (
    <div>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-gray-100 shadow-lg rounded mt-10 p-4'>
          <h2 className='text-xl text-center font-semibold mb-4'>Contact Us</h2>
          <input 
          type="text"
          name= "name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className='w-full mb-2 p-2 rounded border'
          required
          />
          <input 
          type="text"
          name= "email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className='w-full mb-2 p-2 rounded border'
          required
          />
          <textarea 
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          className='w-full mb-2 p-2 rounded border'
          rows='4'
          required
          ></textarea>
          <button type='submit' className='bg-red-950 text-white hover:bg-gray-500 mx-auto block rounded px-4 py-2 '>Send</button>
        </form>
    </div>
  )
}

export default Contact