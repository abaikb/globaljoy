// import { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light'); 

//   const toggleTheme = () => {
//     console.log("Toggle theme called");
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//   };

//   // Инициализация темы при загрузке
//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     storedTheme && setTheme(storedTheme);
//   }, []);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };