function ContactForm() {
  return (
    <div class="container mx-auto p-4">
      <div class="mb-4">
        <h1 class="md:text-4xl text-3xl text-gray-800 font-bold uppercase mb-12">Contact Me</h1>
      </div>
      <div class="grid gap-4">
        <div class="w-full">
          <div class="relative">
            <input
              type="text"
              required
              class="peer w-full p-4 bg-transparent rounded-md focus:outline-none focus:border-blue-500 text-lg text-gray-700"
              style={{boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff'}}
            />
            <label class="absolute left-0 top-0 transition-all text-gray-500 peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-500 m-2">
              Name
            </label>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="relative">
            <input
              type="text"
              required
              class="peer w-full p-4 bg-transparent rounded-md focus:outline-none focus:border-blue-500 text-lg text-gray-700"
              style={{boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff'}}
            />
            <label class="absolute left-0 top-0 transition-all text-gray-500 peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-500 m-2">
              Email
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              required
              class="peer w-full p-4 bg-transparent rounded-md focus:outline-none focus:border-blue-500 text-lg text-gray-700"
              style={{boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff'}}
            />
            <label class="absolute left-0 top-0 transition-all text-gray-500 peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-500 m-2">
              Phone Number
            </label>
          </div>
        </div>
        <div class="w-full">
          <div class="relative">
            <textarea
              required
              class="peer w-full p-4 bg-transparent rounded-md focus:outline-none focus:border-blue-500 text-lg text-gray-700"
              style={{boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff', resize: 'none'}}
            ></textarea>
            <label class="absolute left-0 top-0 transition-all text-gray-500 peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-blue-500 m-2">
              Message
            </label>
          </div>
        </div>
        <div class="w-full">
          <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm