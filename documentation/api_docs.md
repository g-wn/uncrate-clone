## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required",
      "statusCode": 401
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden",
      "statusCode": 403
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/session
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith"
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/session
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials",
      "statusCode": 401
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/users
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```
    
## PRODUCTS

### Get all Products

Returns all the products.

* Require Authentication: false
* Request
  * Method: GET
  * URL: /api/products
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Products": [
        {
          "id": 1,
          "title": "Whiskey-flavored Soap",
          "description": "Ever wanted to get drunk in the shower? Now you can!",
          "categoryId": 1,
          "price": 24.99,
          "previewImgId": 1,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```
    
### Get all Products listed by the Current User

Returns all the products listed (created) by the current user.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/products/current
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Products": [
        {
          "id": 1,
          "title": "Whiskey-flavored Soap",
          "description": "Ever wanted to get drunk in the shower? Now you can!",
          "categoryId": 1,
          "price": 24.99,
          "previewImgId": 1,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```

### Get details of a Product from an id

Returns the details of a product specified by its id.

* Require Authentication: false
* Request
  * Method: GET
  * URL: /api/products/:productId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "title": "Whiskey-flavored Soap",
      "description": "Ever wanted to get drunk in the shower? Now you can!",
      "categoryId": 1,
      "price": 24.99,
      "previewImgId": 1,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "ProductImages": [
        {
          "id": 1,
          "url": "image url",
        },
        {
          "id": 2,
          "url": "image url",
        }
      ],
    }
    ```

* Error response: Couldn't find a Product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found",
      "statusCode": 404
    }
    ```
    
### Create a Product

Creates and returns a new product.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/products
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Whiskey-flavored Soap",
      "description": "Ever wanted to get drunk in the shower? Now you can!",
      "categoryId": 1,
      "price": 24.99
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Whiskey-flavored Soap",
      "description": "Ever wanted to get drunk in the shower? Now you can!",
      "categoryId": 1,
      "price": 24.99,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "title": "Title is required",
        "description": "Description is required",
        "categoryId": "Category ID is required",
        "price": "Price is required",
      }
    }
    ```

### Add an Image to a Product based on the Product's id

Create and return a new image for a product specified by id.

* Require Authentication: true
* Require proper authorization: Product must belong to the current user
* Request
  * Method: POST
  * URL: /api/products/:productId/images
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "url": "image url",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "url": "image url",
    }
    ```

* Error response: Couldn't find a Product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found",
      "statusCode": 404
    }
    ```
    
### Edit a Product

Updates and returns an existing product.

* Require Authentication: true
* Require proper authorization: Product must belong to the current user
* Request
  * Method: PUT
  * URL: /api/products/:productId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Whiskey-flavored Soap",
      "description": "Ever wanted to get drunk in the shower? Now you can!",
      "categoryId": 1,
      "price": 24.99
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Whiskey-flavored Soap",
      "description": "Ever wanted to get drunk in the shower? Now you can!",
      "categoryId": 1,
      "price": 24.99,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "title": "Title is required",
        "description": "Description is required",
        "categoryId": "Category ID is required",
        "price": "Price is required",
      }
    }
    ```

* Error response: Couldn't find a Spot with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Product

Deletes an existing product.

* Require Authentication: true
* Require proper authorization: Product must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/products/:productId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find a Product with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product couldn't be found",
      "statusCode": 404
    }
    ```
