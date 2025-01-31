import React from 'react'

const Form = () => {
  return (
    <section className="container flex justify-center items-center pt-16 bg-[#0f0f0f] h-[100vh] w-[100vw]">
        <div className="form text-white border-2 border-white rounded-4xl w-4/12 flex flex-col  justify-center items-center">
            <div className="title flex flex-row gap-2 justify-center items-center p-5">
                <div className='flex flex-col'><h3 className='text-3xl font-semibold text-[#FC7901]'>Fill the form</h3> <h3  className='text-3xl font-semibold text-[#FC7901]
                '>Get in Touch</h3></div>
                <div><h2 className='text-7xl font-extrabold '>&</h2></div>
            </div>
            <div>
            <form className="bg-transparent backdrop-blur-lg p-5 md:p-10 rounded-lg space-y-4 w-[30vw]   z-50 relative ">
            

            
            {/* Full Name */}
            <div>
              
              <input
              required
                type="text"
                id="fullName"
                name='fullName'
                placeholder="Full Name*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                
              />
            </div>

            

            {/* Email */}
            <div>
              <input
              required
                type="email"
                id="email"
                name='email'
                placeholder="Email*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>


            {/* Contact Number */}
            <div>
                <input
                required
                  type="tel"
                  id="contact"
                  name='phone'
                  placeholder="Phone Number*"
                  className="flex-grow w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/*Plan Options */}
            <div>
            <select 
                  id="package"
                  placeholder="---Select Package---"
                  className="w-full px-4 py-3 border read-only border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="standard">Standard Plan</option> 
                  <option value="premium">Premium Plan</option>
                  <option value="enterprise"> Entreprise Plan</option>
                  
            </select>
            </div>

            {/*Service Options */}
            <div>
            <select 
                  id="service"
                  placeholder="Choose Service"
                  className="w-full px-4 py-3 border read-only border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="standard">Standard Plan</option> 
                  <option value="premium">Premium Plan</option>
                  <option value="enterprise"> Entreprise Plan</option>
                  
            </select>
            </div>

            

        

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-[#F6973F] rounded-lg shadow-lg hover:bg-secondary transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
            </div>

        </div>
        <div className="contact text-white w-1/2">
            

        </div>
    </section>
  )
}

export default Form
