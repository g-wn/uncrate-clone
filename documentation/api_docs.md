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
          "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
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
          "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
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
      "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
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
      "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
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
      "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
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
      "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
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
      "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
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

## CARTS

### Get Cart by User's Cart id

Returns the user's cart specified by the cart id.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/users/:cartId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Cart": [
        {
          "id": 1,
          "usedId": 1,
          "total": 92.43,
          "purchased": false,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "CartItems": [
            {
              "id": 1,
              "cartId": 1,
              "productId": 5,
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 2,
              "cartId": 1,
              "productId": 12,
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 3,
              "cartId": 1,
              "productId": 17
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            }
          ]
        }
      ]
    }
    ```

### Add an Item to a Cart

Adds an item to a cart by the cart's id and returns the cart.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/users/:cartId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "productId": 18,
      "quantity": 1
    }
    ```
    
* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Cart": [
        {
          "id": 1,
          "usedId": 1,
          "total": 134.67,
          "purchased": false,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "CartItems": [
            {
              "id": 1,
              "cartId": 1,
              "productId": 5,
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 2,
              "cartId": 1,
              "productId": 12,
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 3,
              "cartId": 1,
              "productId": 17
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 4,
              "cartId": 1,
              "productId": 18
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            }
          ]
        }
      ]
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
        "productId": "Product id is required",
        "quantity": "Quantity is required",
      }
    }
    ```
    
### Edit a Cart Item

Updates and returns a cart item by the cart item's id.

* Require Authentication: true
* Require proper authorization: Cart must belong to the current user
* Request
  * Method: PUT
  * URL: /api/users/:cartItemId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "quantity": 2,
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
      "cartId": 1,
      "productId": 5
      "quantity": 2,
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
        "quantity": "Quantity is required",
      }
    }
    ```
    
* Error response: Couldn't find a Cart Item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Cart Item couldn't be found",
      "statusCode": 404
    }
    ```
    
### Edit a Cart's Purchased Status

Updates a cart's purchased status and returns the cart.

* Require Authentication: true
* Require proper authorization: Cart must belong to the current user
* Request
  * Method: PUT
  * URL: /api/users/:cartId
  * Body:

    ```json
    {
      "purchased": true,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Cart": [
        {
          "id": 1,
          "usedId": 1,
          "total": 134.67,
          "purchased": true,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "CartItems": [
            {
              "id": 1,
              "cartId": 1,
              "productId": 5,
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 2,
              "cartId": 1,
              "productId": 12,
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 3,
              "cartId": 1,
              "productId": 17
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            },
            {
              "id": 4,
              "cartId": 1,
              "productId": 18
              "quantity": 1,
              "createdAt": "2021-11-19 20:39:36",
              "updatedAt": "2021-11-19 20:39:36"
            }
          ]
        }
      ]
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
        "purchased": "Purchased status is required",
      }
    }
    ```
    
### Remove a Cart Item

Deletes a cart item by the cart item's id.

* Require Authentication: true
* Require proper authorization: Cart must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/users/cart/:cartItemId
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

* Error response: Couldn't find a Cart Item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Cart Item couldn't be found",
      "statusCode": 404
    }
    ```

## Product Images

### Update Product Image URL

Updates the URL of a product image by its id.

* Require Authentication: true
* Require proper authorization: Image must belong to a product that belongs to the current user
* Request
  * Method: PUT
  * URL: /api/productImages/:productImageId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "url": "image url"
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
      "productId": 1,
      "url": "image url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
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
        "url": "Image URL is required"
      }
    }
    ```

* Error response: Couldn't find a Product Image with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product Image couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Product Image

Delete an existing image for a Product.

* Require Authentication: true
* Require proper authorization: Image must belong to a product that belongs to the current user
* Request
  * Method: DELETE
  * URL: /api/productImages/:productImageId
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

* Error response: Couldn't find a Product Image with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Product Image couldn't be found",
      "statusCode": 404
    }
    ```

## Favorites

### Get Current User's Favorite Products

Returns the Current User's favorited Products.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/favorites/current
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Favorites": [
        {
          "id": 1,
          "title": "Whiskey-flavored Soap",
          "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
          "categoryId": 1,
          "price": 24.99,
          "previewImgId": 1,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        },
        {
          "id": 2,
          "title": "Whiskey-flavored Shampoo",
          "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse your hair from root to tip. Smelling like an alcoholic has never been so classy.",
          "categoryId": 1,
          "price": 29.99,
          "previewImgId": 2,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        }
      ]
    }
    ```
    
### Add a Favorite to Current User's Favorite Products

Adds a product to the current user's favorites by the product's id.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/favorites/current/:productId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "product_id": 3
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

     ```json
    {
      "Favorites": [
        {
          "id": 1,
          "title": "Whiskey-flavored Soap",
          "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse you from the inside and out. Smelling like an alcoholic has never been so classy.",
          "categoryId": 1,
          "price": 24.99,
          "previewImgId": 1,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        },
        {
          "id": 2,
          "title": "Whiskey-flavored Shampoo",
          "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse your hair from root to tip. Smelling like an alcoholic has never been so classy.",
          "categoryId": 1,
          "price": 29.99,
          "previewImgId": 2,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        },
        {
          "id": 3,
          "title": "Whiskey-flavored Conditioner",
          "description": "Let the sultry aroma of triple-distilled Irish whiskey cleanse your hair from root to tip. Smelling like an alcoholic has never been so classy.",
          "categoryId": 1,
          "price": 29.99,
          "previewImgId": 3,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
        },
      ]
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
        "product_id": "Product ID is required.",
      }
    }
    ```
    
### Remove a Favorite From Current User's Favorite Products

Deletes an existing product from the current user's favorites.

* Require Authentication: true
* Require proper authorization: Favorite must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/favorites/current/:productId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully removed",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find a Favorite with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Favorite couldn't be found",
      "statusCode": 404
    }
    ```
