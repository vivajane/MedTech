/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('https://media.istockphoto.com/id/998313080/photo/smiling-medical-team-standing-together-outside-a-hospital.jpg?s=1024x1024&w=is&k=20&c=w9On4PoqxJ7ljh0aiJt00WX4ZceeWhWLtkzsT48MFsY=')"
      },
      fontFamily: {
        
          sanns: "DM Sans",
          interr: "Inter",
          manrope: "manrope",
          ibm: "IBM Plex Sans",
      
      }
    },
  },
  plugins: [],
}