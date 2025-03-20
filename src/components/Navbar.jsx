import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="w-full backdrop-blur-sm bg-black/10 fixed top-0 left-0 right-0 z-50 px-6">
        <div className="container mx-auto">
          <div className="h-16 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              {/* <a 
                href="https://www.facebook.com/share/1FGsL31Dw5/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FaFacebook className="text-2xl text-[#1877F2] hover:opacity-80" />  
              </a> */}
              
              <a 
                href="https://www.instagram.com/khinhtethlaing4?igsh=MWZhMWczNWVxb2Z6dg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FaInstagram className="text-2xl text-[#E4405F] hover:opacity-80" />  
              </a>

              <a 
                href="https://www.tiktok.com/@khin.htet.hlaing4?_t=ZS-8ucz4ywEub1&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FaTiktok className="text-2xl text-white hover:opacity-80" />  
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Add padding to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
