module.exports = {
    content: [
      // Main landing page
      "./index.html",  // Modify the path if necessary
  
      // Farmer-specific pages
      "./farmerlogin.html",
      "./farmerdash.html",
  
      // Buyer-specific pages
      "./buyerlogin.html",
      "./buyerdash.html",
  
      // Admin-specific pages
      "./adminlogin.html",
      "./admindash.html",
  
      // Any additional pages or components you might have
      "./components/**/*.{html,js}",  // If you have reusable components in the 'components' folder
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };