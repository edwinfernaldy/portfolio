export default function Navbar() {
  return (
    <div className='w-full p-8 z-30 backdrop-blur-3xl border-[#4b58b0]/30 transition-all duration-200 hover:border-b-2 justify-center max-h-full fixed top-0 flex gap-12'>
      <a className='cursor-pointer hover:scale-125 transition-all duration-150'>
        <p>About</p>
      </a>

      <a className='cursor-pointer hover:scale-125 transition-all duration-150'>
        <p>Works</p>
      </a>

      <a className='cursor-pointer hover:scale-125 transition-all duration-150'>
        <p>Contact</p>
      </a>
    </div>
  );
}
