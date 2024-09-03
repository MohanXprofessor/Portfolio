/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // jjjjjjjjjjjjj
      
            keyframes: {
              orbit: {
                '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
                '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
              },
            },
            animation: {
              orbit1: 'orbit 9s linear infinite 0s',
              orbit2: 'orbit 9s linear infinite 1.25s',
              orbit3: 'orbit 9s linear infinite 2.5s',
              orbit4: 'orbit 9s linear infinite 3.75s',
              orbit5: 'orbit 9s linear infinite 5s',
              orbit6: 'orbit 9s linear infinite 6.25s',
              orbit7: 'orbit 9s linear infinite 7.5s',
            },
          
        plugins: [],
      
      

      //jjjjjjjjjjjjjjjj
     
    
  },
 
  plugins: [],

  
}
}
