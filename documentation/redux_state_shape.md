# "reduncrate" REDUX STORE STATE SHAPE

{
    # CARTS SLICE OF REDUX STATE:
    carts: {
        1: {
            user_id: 1,
            total: 1.00,
            purchased: false,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
        2: {
            user_id: 2,
            total: 2.00,
            purchased: false,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
    },

    # CART_ITEMS SLICE OF REDUX STATE:
    cart_items: {
        1: {
            cart_id: 1,
            product_id: 1,
            quantity: 1,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
        2: {
            cart_id: 2,
            product_id: 2,
            quantity: 2,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
    },

    # FAVORITES SLICE OF REDUX STATE:
    favorites: {
        {user_id: 1, product_id: 1},
        {user_id: 2, product_id: 2},
    },

    # PRODUCTS SLICE OF REDUX STATE:
    products: {
        1: {
            id: 1,
            title: "product_title",
            description: "product_description",
            category_id: 1,
            price: 1.00,
            preview_img_id: 1,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
        2: {
            id: 2,
            title: "product_title",
            description: "product_description",
            category_id: 2,
            price: 2.00,
            preview_img_id: 2,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
    },

    # PRODUCT_IMAGES SLICE OF REDUX STATE:
    product_images: {
        1: {
            id: 1,
            product_id: 1,
            url: "http://product_image_1.png",
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
        2: {
            id: 2,
            product_id: 2,
            url: "http://product_image_2.png",
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
    },

    # SESSION SLICE OF STATE:
    session: {
        user: {
            id: 1,
            first_name: "first_name",
            last_name: "last_name",
            username: "user_name",
            hashed_password: "password",
            email: "user@email.io",
            cart_id: 1,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        }
    },

    # USERS SLICE OF REDUX STATE:
    users: {
        1: {
            id: 1,
            first_name: "first_name_2",
            last_name: "last_name_2",
            username: "user_name_2",
            hashed_password: "password_2",
            email: "user_2@email.io",
            cart_id: 1,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
        2: {
            id: 2,
            first_name: "first_name_2",
            last_name: "last_name_2",
            username: "user_name_2",
            hashed_password: "password_2",
            email: "user_2@email.io",
            cart_id: 2,
            created_at: "2022-12-07 14:00:00",
            updated_at: "2022-12-07 15:00:00",
        },
    },
}
