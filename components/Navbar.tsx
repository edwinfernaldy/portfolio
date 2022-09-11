export default function Navbar() {
  return (
    <div className="w-full p-8 border-[#4b58b0]/30 transition-all duration-200 hover:border-b-2 justify-center max-h-full sticky flex gap-12">
      <a className="cursor-pointer hover:scale-125 transition-all duration-150">
        <p>About</p>
      </a>

      <a className="cursor-pointer hover:scale-125 transition-all duration-150">
        <p>Works</p>
      </a>

      <a className="cursor-pointer hover:scale-125 transition-all duration-150">
        <p>Contact</p>
      </a>

      <div className="absolute right-4 top-4">
        <div className="hover:border transition-all duration-500 rounded-3xl border-white/20 hover:bg-white/5 cursor-pointer p-4">
          &copy; 2022
        </div>
      </div>
    </div>
  );
}
