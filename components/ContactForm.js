import React from 'react'

export default function ContactForm() {
    return (
        <>
               <form action="https://formsubmit.co/btnjose@gmail.com" method="POST" class="grid grid-cols-1 gap-y-6 ">
              <div>
                <label htmlFor="full-name" class="sr-only">
                  Full name
                </label>
                <input style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}
                  type="text"
                  required
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  class="block w-full border-2  shadow-sm py-3 px-4   placeholder-gray-800 focus:ring-indigo-500 focus:border-indigo-500 border-gray-400 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" class="sr-only">
                  Email
                </label>
                <input
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}
                  id="email" 
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  class="block w-full  border-2 shadow-sm py-3 px-4 placeholder-gray-800 focus:ring-indigo-500 focus:border-indigo-500 border-gray-400 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" class="sr-only">
                  Phone
                </label>
                <input style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  class="block w-full border-2 shadow-sm py-3 px-4 placeholder-gray-800 focus:ring-indigo-500 focus:border-indigo-500 border-gray-400 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" class="sr-only">
                  Message
                </label>
                <textarea
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}
                  id="message"
                  name="message"
                  rows={4}
                  class="block w-full border-2 shadow-sm py-3 px-4 placeholder-gray-800 focus:ring-indigo-500 focus:border-indigo-500  border-gray-400 rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="inline-flex justify-center py-3 px-6 border-2 border-black shadow-sm text-base font-medium  text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
        </>
    )
}
