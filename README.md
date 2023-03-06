# Indi Shop
Indi Shop is an e-commerce platform that is a clone of the popular Indian e-commerce website meesho.com. This platform has been built using React and Redux, and is designed to provide an easy-to-use, mobile-friendly shopping experience for users.

## Technologies Used
Indi Shop has been built using the following technologies:

- React with TypeScript: A JavaScript library for building user interfaces. TypeScript A superset of JavaScript for better typechecking and bug free environment
- Redux: A predictable state container for JavaScript apps.
- React Router: A popular routing library for React.
- Chakra-UI: A popular UI component library for React.
- Render.com: A popular backend-as-a-service platform that provides authentication, database, and hosting services.
- Vercel: A popular platform for client side (front-end) deployment.



### Client Side Deployment : https://indi-shop.vercel.app/
### Server Side Deployment : https://indishop.onrender.com/


## Credits
This project was created by Team Indi-Shop. The Team Members are 
<br>

1.Govind - _(all products page, product details page, cart page)_
<br> 
2.Nandhan -  _(landing page, navbar, footer)_
<br> 
3.Manju Sai - _(signup/login page, checkout page)_
<br> 
4.Vibhor -  _(Admin Panel, Authentication Logic)_

### Installation
To install and run this project on your local machine, follow these steps:

Clone the repository using git clone https://github.com/GovindPullagura/aware-carriage-7836.git
Navigate to the project directory using cd indi_shop
Install the dependencies using npm install
Start the development server using npm start
This will start the development server at http://localhost:3000.

### Required Dependencies:
   - json-server
   - axios
   - redux
   - react-redux
   - redux-thunk
   - react-router-dom
   - @chakra-ui/react @emotion/react @emotion/styled framer-motion
   - react-icons
   - @types/react-redux - for typescript

### APIs:
Indi Shop offers a range of features to users using following APIs:

- Base Url: "https://indishop.onrender.com"

   - Products:
       - __GET / :__ get all products
       - __GET /:id :__ get a product by its ID
       
   - Cart:
       -  __POST / :__  post to the cart.
       - __DELETE /:id :__ delete a product from the cart

   - Admin Panel:
       - __PATCH /:id :__ update a product by its ID
       - __DELETE /:id :__ delete a product



### Contributing:

If you would like to contribute to this project, you can follow these steps:

Fork the repository
Create a new branch for your feature or bug fix using git checkout -b your-feature-branch
Make your changes and commit them using git commit -am 'Add some feature'
Push your changes to your fork using git push origin your-feature-branch
Create a pull request to the main repository
