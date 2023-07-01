# Skinet-Ecommerce-App

Skinet is a fully functional e-commerce application built using ASP.NET Core and Angular. It provides a platform for users to browse, search, and purchase various skincare products. This repository contains the source code and implementation of the Skinet E-commerce App.

# Features
  - User registration and authentication
  - Product catalog with search and filtering options
  - Product details page with description, price, and images
  - Shopping cart functionality
  - Secure checkout process with Stripe integration
  - Order history and tracking
  - Admin panel for managing products, categories, and orders
  
# Technologies Used

The following technologies and frameworks were used in building this application:
  ## Backend:
    ASP.NET Core
    Entity Framework Core
    Postgre SQL
    JWT authentication
    AutoMapper
    Repository pattern
    Stripe
    Redis
    Docker
  ## Frontend:
    Angular
    TypeScript
    Bootstrap
    HTML/SCSS
    
# Getting Started
  To run the Skinet E-commerce App locally, follow these steps:
  
    - Clone this repository to your local machine using the following command:
        git clone https://github.com/Hungruong/Skinet-Ecommerce-App.git
        
    - Navigate to the cloned directory:
        cd Skinet-Ecommerce-App
        
    - Install the required dependencies for the backend by navigating to the 'API' directory and running the following command:
        dotnet restore
        
    - Configure the database connection string in the 'appsettings.json' file located in the 'API' directory.
    
    - Apply the database migrations by running the following command in the 'API' directory:
        dotnet ef database update

    - Set up a Stripe account and obtain the necessary API keys.

    - Update the Stripe API keys in the appsettings.json file located in the API directory.
    
    - Start the backend server by running the following command in the 'API' directory:  
        dotnet run
        
    - Install the required dependencies for the frontend by navigating to the client directory and running the following command:
        npm install
        
    - Start the Angular development server by running the following command in the client directory:
        ng serve
        
    - Open your web browser and navigate to http://localhost:4200 to access the Skinet E-commerce App.

## Contributing

Contributions to the Skinet E-commerce App are welcome and encouraged. If you find any issues or have suggestions for improvements, please open an issue on the GitHub repository.

To contribute code, follow these steps:

  - Fork the repository.
  - Create a new branch for your feature or bug fix.
  - Make your changes in the branch.
  - Commit your changes, ensuring meaningful commit messages.
  - Push your branch to your forked repository.
  - Open a pull request against the main branch of the original repository.

## License
    Copyright [2023] [Hung Truong]
