# Session 6: Building RESTful APIs with Express.js and MongoDB

## Objectives
- Learn to build RESTful APIs using Express.js.
- Understand routing, middleware, and handling HTTP requests.
- Integrate MongoDB into an Express.js application using Mongoose.
- Perform CRUD operations with a MongoDB database.

## Topics Covered

### 1. Introduction to Express.js
- Understanding Express.js and its role in building web applications.
- Setting up an Express.js server.

### 2. Routing in Express.js
- Defining routes and handling HTTP methods (GET, POST, PUT, DELETE).
- Creating dynamic routes with route parameters.

### 3. Middleware in Express.js
- Understanding middleware functions and their uses.
- Implementing custom middleware for logging and error handling.

### 4. Integrating MongoDB with Express.js
- Introduction to MongoDB and Mongoose.
- Setting up a MongoDB database.
- Defining schemas and models with Mongoose.
- Performing CRUD operations with MongoDB.

### 5. Building a RESTful API
- Designing RESTful endpoints for CRUD operations.
- Implementing data validation and error handling in APIs.

## Practical Exercises
- Build a RESTful API for a simple blog application using Express.js and MongoDB.
- Implement middleware for request logging and error handling.
- Store and retrieve data from MongoDB using Mongoose.

## Setup Instructions

### Prerequisites
- Install Node.js and npm.
- Install MongoDB or set up a MongoDB instance in a Docker container.
- Basic understanding of JavaScript and asynchronous programming.

### Project Setup

#### 1. Initialize the Project
Open your terminal and create a new directory for the project:

```bash
mkdir blog-api
cd blog-api
```

Initialize a new Node.js project:

```bash
npm init -y
```

#### 2. Install Dependencies
Install the necessary packages:

```bash
npm install express mongoose
```

Install `nodemon` globally to automatically restart the server on code changes:

```bash
npm install -g nodemon
```

#### 3. Set Up MongoDB
- **Option 1: Install MongoDB Locally**
  - Download and install MongoDB Community Edition from MongoDB Downloads.
  - Start the MongoDB server by running:

    ```bash
    mongod
    ```

  - Ensure MongoDB is running on `mongodb://localhost:27017`.

- **Option 2: Run MongoDB in a Docker Container**
  - Install Docker from Docker Downloads.
  - Run the following command to start a MongoDB container:

    ```bash
    docker run --name mongodb -p 27017:27017 -d mongo
    ```

#### 4. Create the Application File
- Create a file named `index.js` in the project directory.
- Copy the updated Express.js code into `index.js`.

#### 5. Run the Application
Start the server using `nodemon`:

```bash
nodemon index.js
```

The server should be running on `http://localhost:3000`.

#### 6. Testing the API
Use tools like Postman or `curl` to test the API endpoints.

- **Create a Post**

  ```bash
  curl -X POST http://localhost:3000/posts \
    -H "Content-Type: application/json" \
    -d '{"title": "My First Post", "content": "This is the content of my first post."}'
  ```

- **Get All Posts**

  ```bash
  curl http://localhost:3000/posts
  ```

- **Get a Single Post**

  ```bash
  curl http://localhost:3000/posts/<post_id>
  ```

  Replace `<post_id>` with the actual ID of the post.

- **Update a Post**

  ```bash
  curl -X PUT http://localhost:3000/posts/<post_id> \
    -H "Content-Type: application/json" \
    -d '{"title": "Updated Title", "content": "Updated content."}'
  ```

- **Delete a Post**

  ```bash
  curl -X DELETE http://localhost:3000/posts/<post_id>
  ```

## Additional Notes

- **MongoDB Connection**  
  The application connects to MongoDB using the connection string `mongodb://localhost:27017/myblog`. If your MongoDB instance is running on a different host or port, or if you are using authentication, you will need to update the connection string accordingly in your `index.js` file:

  ```javascript
  mongoose.connect('mongodb://localhost:27017/myblog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  ```

- **Mongoose**  
  Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data.

- **Error Handling**  
  The application includes error-handling middleware to catch and respond to errors gracefully.

- **Middleware Functions**  
  Custom middleware functions are used for logging requests and adding a timestamp to each request.

- **Data Validation**  
  Basic data validation is implemented to ensure that the `title` and `content` fields are provided when creating a new post.

## Learning Outcomes
By completing this session, you will:
- Understand how to set up an Express.js server and define routes.
- Learn how to use middleware for logging and error handling.
- Be able to integrate MongoDB into a Node.js application using Mongoose.
- Gain experience in designing and building RESTful APIs that interact with a database.
- Learn how to perform CRUD operations with MongoDB.