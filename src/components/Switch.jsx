// import React, { useState, useEffect } from 'react';

// const Switch = () => {
//   const [isDarkMode,setIsDarkMode]= useState(false);

//     useEffect(()=>{
//         const storedTheme= localStorage.getItem("theme");
//         if(storedTheme === "dark"){
//             document.documentElement.classList.add("dark");
//             setIsDarkMode(true);
//         }else{
//             document.documentElement.classList.remove("dark");
//             setIsDarkMode(false);
//         }
//     })

//     const themetoggle=()=>{
//         if(isDarkMode){
//             document.documentElement.classList.remove("dark");
//             setIsDarkMode(false);
//             localStorage.setItem("theme","light") 
//         }
//         else{
//             document.documentElement.classList.add("dark");
//             setIsDarkMode(true);
//             localStorage.setItem("theme","dark")
//         }
//     };

//   return (
    
//     // <div className="fixed top-4 right-4 cursor-pointer w-[70px]" onClick={themetoggle}>
//     <div className="fixed max-sm:hidden top-3 right-1 z-50 p-2 w-[80px] transition-colors duration-300"  onClick={themetoggle}>
//       <div className="relative m-1 w-full h-[30px] rounded-full transition-colors duration-300 bg-[#83cbd8] dark:bg-[#2b4360]">
//         {/* Thumb */}
//         <div
//           className={`absolute -top-1 w-[40px] h-[40px] rounded-full transition-all duration-300 transform
//           ${isDarkMode ? 'translate-x-0 bg-[#f8e664]':'translate-x-[33px] bg-[#cce6ee]'}`}
//         >
//           {/* Optional icon inside thumb */}
//           <svg viewBox="0 0 30 30" className="w-full h-full p-1">
//             {isDarkMode ? (
//               // Sun icon
//               <g>
//                 <circle cx="15" cy="15" r="12" fill="#f8e664" />
//                 <circle cx="15" cy="15" r="5" fill="#fcf4b9" />
//               </g>
//             ):
//             (
//               // Moon icon
//               <g fill="#a6cad0">
//                 <circle cx="15" cy="15" r="12" fill="#cce6ee" />
//                 <circle cx="20" cy="10" r="2" />
//                 <circle cx="10" cy="20" r="1.5" />
//               </g>
//             )}
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Switch;









import React, { useState, useEffect } from 'react';

const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const themetoggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div
      className=" fixed right-1 z-50 w-[70px] hover:cursor-grab "
    >
      {/* Sun in the background for light mode */}
      {!isDarkMode && (
        <svg
          className=" invisible sm:visible absolute top-15 right-40 w-20 h-30"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="14" fill="#f8e664" />
          {/* Sun rays */}
          <line x1="32" y1="2" x2="32" y2="14" stroke="#f8e664" strokeWidth="3" />
          <line x1="32" y1="50" x2="32" y2="62" stroke="#f8e664" strokeWidth="3" />
          <line x1="2" y1="32" x2="14" y2="32" stroke="#f8e664" strokeWidth="3" />
          <line x1="50" y1="32" x2="62" y2="32" stroke="#f8e664" strokeWidth="3" />
          <line x1="10" y1="10" x2="20" y2="20" stroke="#f8e664" strokeWidth="3" />
          <line x1="44" y1="44" x2="54" y2="54" stroke="#f8e664" strokeWidth="3" />
          <line x1="10" y1="54" x2="20" y2="44" stroke="#f8e664" strokeWidth="3" />
          <line x1="44" y1="20" x2="54" y2="10" stroke="#f8e664" strokeWidth="3" />
        </svg>
      )}

      {/* Toggle switch */}
      <div
        className="relative top-5 right-2 h-[30px] rounded-full transition-colors duration-300 bg-[#83cbd8] dark:bg-[#2b4360]"
        onClick={themetoggle}
      >
        {/* Thumb */}
        <div
          className={`absolute -top-1 w-[40px] h-[40px] rounded-full transition-all duration-300 transform
            ${isDarkMode ? '-translate-x-1 bg-[#e7a834]':'translate-x-[33px] bg-[#cce6ee]'}`}
        >
          {/* SVG icon inside thumb */}
          <svg viewBox="0 0 30 30" className="w-full h-full p-1">
            {isDarkMode ?(
              // Sun icon
              <g>
                <circle cx="15" cy="15" r="12" fill="#f8e664" />
                <circle cx="15" cy="15" r="5" fill="#fcf4b9" />
                {/* Sun rays */}
                <line x1="15" y1="0" x2="15" y2="5" stroke="#f8e664" strokeWidth="2" />
                <line x1="15" y1="25" x2="15" y2="30" stroke="#f8e664" strokeWidth="2" />
                <line x1="0" y1="15" x2="5" y2="15" stroke="#f8e664" strokeWidth="2" />
                <line x1="25" y1="15" x2="30" y2="15" stroke="#f8e664" strokeWidth="2" />
                <line x1="6" y1="6" x2="10" y2="10" stroke="#f8e664" strokeWidth="2" />
                <line x1="20" y1="20" x2="24" y2="24" stroke="#f8e664" strokeWidth="2" />
                <line x1="6" y1="24" x2="10" y2="20" stroke="#f8e664" strokeWidth="2" />
                <line x1="20" y1="10" x2="24" y2="6" stroke="#f8e664" strokeWidth="2" />
              </g>
            ): (
              // Moon icon
              <g fill="#a6cad0">
                <circle cx="15" cy="15" r="12" fill="#cce6ee" />
                <circle cx="20" cy="10" r="2" />
                <circle cx="10" cy="20" r="1.5" />
              </g>
            ) }
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Switch;