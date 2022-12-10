from random import randint

products_gear = [
    {
        "id": 1,
        "title": "A-TECH AIRTAG MULTI TOOL",
        "description": "Use Apple's AirTag for more than just tracking stuff with this keychain-friendly, 7-in-1 multi-tool. $35.",
        "detailed_description": "Apple's round AirTag is good for helping keep track of stuff... and not much else. This Multitool from A-Tech makes it far more useful. Crafted from a durable stainless steel alloy with an ABS AirTag holder, it can attach to a keychain and has a built-in carabiner, 1/4, 5.5mm, and 12mm hex wrenches, a bicycle tool, a phone stand, and, of course, a bottle opener. It's also TSA-compliant, and thanks to that AirTag, you'll always know where it is.",
        "category_id": 1,
        "owner_id": randint(1, 3),
        "price": 35,
        "preview_img_id": 1,
    },
    {
        "id": 2,
        "title": "2023 TAYLORMADE P·770 IRONS",
        "description": "TaylorMade updates its hollow-bodied players irons with added distance, forgiveness, and feel. $1,299+.",
        "detailed_description": "Not everyone wants or needs a large, offset game improvement iron. For those with better ball-striking skills but without the need for maximum shot-shaping versatility, TaylorMade has revamped their P·770 irons. They feature a smaller body, less offset, and a thinner top line than the P·790s, but still offer the forgiveness that comes with hollow-body construction. FLTD CG tungsten weighting moves the center of gravity gradually through the irons to optimize trajectory, and a mix of brushed and polished surfaces makes sure they look great even when they're not in play. They're joined in the lineup by new versions of the Tour-proven P·7MC and P·7MB models.",
        "category_id": 1,
        "owner_id": randint(1, 3),
        "price": 12,
        "preview_img_id": 2,
    },
    # {
    #     "id": 3,
    #     "title": "EVERYDAY CARRY: PASS DOWN",
    #     "description": "The well-earned patina of a WWII-era Zippo sets the tone for this set of watch, knife, and wallet.",
    #     "detailed_description": "NVague Watch Co. Every-One Automatic Watch / $495. 1950 Italian Scarperia Pocket Knife / $64. 1945 WWII Three Barrel Zippo Lighter / $200. BillyKirk Small Trucker Wallet / $195.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 950,
    #     "preview_img_id": 3,
    # },
    # {
    #     "id": 4,
    #     "title": "POWERUP 4.0 POWERED PAPER AIRPLANE",
    #     "description": "A childhood staple becomes far more engaging with this lightweight app-enabled propeller system. $69.",
    #     "detailed_description": "We're all looking for fun ways to pass the time at home. Making paper airplanes is fun; giving them an actual engine is even more so. PowerUp's 4.0 paper airplane propeller can turn any piece of paper into an advanced flying machine. The lightweight motor has an onboard computer and stabilizers that let you fly even in the wind, Bluetooth for wireless control via smartphone, and up to 10 minutes of flight time per charge. It comes with four paper templates in the box, can work with both Balsa wood and foam models weighing up to 20 grams, and offers flight analytics like heading, thrust levels, and turn angles in real-time so you can use the data to help improve future flights.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 69,
    #     "preview_img_id": 4,
    # },
    # {
    #     "id": 5,
    #     "title": "TROVA GOPLUS BIOMETRIC PERSONAL VAULT",
    #     "description": "Keep valuables, cash, or any other small items safe from prying eyes with this portable safe. $249.",
    #     "detailed_description": "Whether it's valuables, cash and cards, or items in need of more clandestine transportation, they'll be safe inside this box. CNC'd from stout aluminum alloy, it uses Bluetooth to access a smartphone's biometric authentication, preventing unwanted access. In the meantime, it's designed to be unassuming while offering enough room inside for watches, rings, pipes, or anything else that needs to be hidden away.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 249,
    #     "preview_img_id": 5,
    # },
    # {
    #     "id": 6,
    #     "title": "JAMES BRAND KLINE KNIFE",
    #     "description": "Named after an arrowhead found in the Delaware River valley, The James Brand's Kline folder wears its USA heritage proudly.",
    #     "detailed_description": "Whether it's valuables, cash and cards, or items in need of more clandestine transportation, they'll be safe inside this box. CNC'd from stout aluminum alloy, it uses Bluetooth to access a smartphone's biometric authentication, preventing unwanted access. In the meantime, it's designed to be unassuming while offering enough room inside for watches, rings, pipes, or anything else that needs to be hidden away.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 249,
    #     "preview_img_id": 6,
    # },
    # {
    #     "id": 7,
    #     "title": "VALO HYPERFOIL",
    #     "description": "Bay Area startup Valo is building a composite jetski that flys two feet over the water on hydrofoils. $59,000.",
    #     "detailed_description": "Advances in composite materials, computer-aided design, and manufacturing techniques have seen the hydrofoil make inroads into the consumer watercraft space. Based in San Francisco, Valo has developed the Hyperfoil, a jetski that can carry two people two feet above the waves on retractable carbon fiber foils. The Hyperfoil is powered by a 108-horsepower electric motor and can hit up to 58 MPH with over an hour and a half of wave running between charges. Valo's Skyride software package provides active stability to make anyone a competent pilot. The Hyperfoil will begin limited deliveries in 2023.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 59000,
    #     "preview_img_id": 7,
    # },
    # {
    #     "id": 8,
    #     "title": "EVERYDAY CARRY: BURGUNDY",
    #     "description": "The same color in different textures unites this loadout of sunglasses, keychain, watch, and wallet.",
    #     "detailed_description": "Matsuda Tortoiseshell Acetate Sunglasses / $675. BillyKirk Keyring / $24. Vintage Rolex Oyster Perpetual Date Ref. 1500 Watch / $3,800. Vintage Cartier Wallet / $100.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 4600,
    #     "preview_img_id": 8,
    # },
    # {
    #     "id": 9,
    #     "title": "ELVIS PRESLEY'S 1962 LOCKHEED 1329 PRIVATE JET",
    #     "description": "Once owned by Elvis, this 1962 Lockheed JetStar is a time capsule of the height of rock'n'roll.",
    #     "detailed_description": "A jet fit for a king — or, in this case, the King. Elvis Presley bought this 1962 Lockheed 1329 JetStar in 1976, his second JetStar and third private jet, including the four-engine Convair 880, an early jet airliner that competed with the Boeing 707 and Douglas DC-8. A fleet of jets were neccessary to transport Elvis and his crew across the country and the world on tours and travel. Elvis owned this JetStar for just over a year before selling it. The jet was owned by a Saudi company before being retired to Roswell International Air Center in Roswell, New Mexico, where it's been in storage for decades. The interior features overstuffed, crushed-velvet swivel seats, a microwave, tape deck stereo, and TV — although don't expect to fly away to Graceland. The four pod-mounted engines and flight instruments have been removed, and the overall condition could be described as poor. A time capsule of a bygone era, this JetStar will go up for auction at Mecum's 2023 Kissimmee event in January.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 46000000,
    #     "preview_img_id": 9,
    # },
    # {
    #     "id": 10,
    #     "title": "CANVAS FIREWOOD CARRIER",
    #     "description": "Recycled canvas and a handmade process give this log carrier a sturdy construction and unique traits. $40.",
    #     "detailed_description": "Crafted from recycled canvas, this log carrier will make light work of your load. Its rugged construction and sturdy handles wrap logs tight to keep the job neat as you travel from the pile to the hearth. Made by hand using repurposed materials, each piece has its own individual character.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 40,
    #     "preview_img_id": 10,
    # },
    # {
    #     "id": 11,
    #     "title": "RIMOWA PINE GREEN LUGGAGE",
    #     "description": "Rimowa introduced an exclusive new color to its entire Essential line of luggage, Pine Green.",
    #     "detailed_description": "In 1950, Rimowa has been known for its sleek, brushed aluminum luggage the world over. The company introduced a line of polycarbonate luggage in 2008 with the same style and quality under the Essential line. Now travelers have two new colors to take with them — Pine Green and Raspberry. Pine Green is exclusive to the Essential line, with black wheels and monochromatic hardware. The hue is available across the entire Essential line, from the compact 21-inch tall Cabin to the massive 31.5-inch Trunk Plus for those extended stays. Like Rimowa's aluminum line, the Essentials have the same five-year warranty and unparalleled build quality.",
    #     "category_id": 1,
    #     "owner_id": randint(1, 3),
    #     "price": 200,
    #     "preview_img_id": 11,
    # },
]

products_gear_imgs = [
    {
        "id": 1,
        "product_id": 1,
        "url": "https://uncrate.com/p/2022/12/atech-airtag-7-tool-multitool-1.jpg",
    },
    {
        "id": 2,
        "product_id": 2,
        "url": "https://uncrate.com/p/2022/12/2023-taylormade-p770-irons-1.jpg",
    },
    {
        "id": 3,
        "product_id": 3,
        "url": "https://uncrate.com/p/2022/12/edc-pass-down.jpg",
    },
    {
        "id": 4,
        "product_id": 4,
        "url": "https://uncrate.com/p/2020/11/powerup-4-remote-plane-11.jpg",
    },
    {
        "id": 5,
        "product_id": 5,
        "url": "https://uncrate.com/p/2021/03/trova-go-plus-2.jpg",
    },
    {
        "id": 6,
        "product_id": 6,
        "url": "https://uncrate.com/assets_c/2022/12/james-brand-kline-thumb-960xauto-155212.jpg",
    },
    {
        "id": 7,
        "product_id": 7,
        "url": "https://uncrate.com/p/2022/12/valo-hyperfoil-1.jpg",
    },
    {"id": 8, "product_id": 8, "url": "https://uncrate.com/p/2022/12/edc-burgundy.jpg"},
    {
        "id": 9,
        "product_id": 9,
        "url": "https://uncrate.com/p/2022/12/elvis-lockheed-1329-1.jpg",
    },
    {
        "id": 10,
        "product_id": 10,
        "url": "https://uncrate.com/p/2020/05/canvas-firewood-carrier-10.jpg",
    },
    {
        "id": 11,
        "product_id": 11,
        "url": "https://uncrate.com/p/2022/12/rimowa-pine-raspberry-1.jpg",
    },
]

#   product1_image1_url1: https://uncrate.com/p/2022/12/atech-airtag-7-tool-multitool-1.jpg
#   product1_image2_url2: https://uncrate.com/p/2022/12/atech-airtag-7-tool-multitool-21.jpg
#   product1_image3_url3: https://uncrate.com/p/2022/12/atech-airtag-7-tool-multitool-2.jpg
#   product1_image4_url4: https://uncrate.com/p/2022/12/atech-airtag-7-tool-multitool-6.jpg
#   product1_image5_url5: https://uncrate.com/p/2022/12/atech-airtag-7-tool-multitool-5.jpg

#   product2_image1_url1: https://uncrate.com/p/2022/12/2023-taylormade-p770-irons-1.jpg
#   product2_image2_url2: https://uncrate.com/p/2022/12/2023-taylormade-p770-irons-2.jpg

#   product3_image1_url: https://uncrate.com/p/2022/12/edc-pass-down.jpg

#   product_4_image1_url: https://uncrate.com/p/2020/11/powerup-4-remote-plane-11.jpg
#   product_4_image2_url: https://uncrate.com/p/2020/11/powerup-4-remote-plane-2.jpg
#   product_4_image3_url: https://uncrate.com/p/2020/11/powerup-4-remote-plane-4.jpg
#   product_4_image4_url: https://cdn.shopify.com/s/files/1/0248/6216/products/powerup-4-remote-plane-6.jpg?v=1606234163

#   product_5_image1_url: https://uncrate.com/p/2021/03/trova-go-plus-2.jpg
#   product_5_image2_url: https://uncrate.com/p/2021/03/trova-go-plus-1.jpg
#   product_5_image3_url: https://uncrate.com/p/2021/03/trova-go-plus-3.jpg
#   product_5_image4_url: https://uncrate.com/p/2021/03/trova-go-plus-4.jpg

#   product_6_image1_url: https://uncrate.com/assets_c/2022/12/james-brand-kline-thumb-960xauto-155212.jpg

#   product_7_image1_url: https://uncrate.com/p/2022/12/valo-hyperfoil-1.jpg

#   product_8_image1_url: https://uncrate.com/p/2022/12/edc-burgundy.jpg

#   product_9_image1_url: https://uncrate.com/p/2022/12/elvis-lockheed-1329-1.jpg
#   product_9_image2_url: https://uncrate.com/p/2022/12/elvis-lockheed-1329-2.jpg
#   product_9_image3_url: https://uncrate.com/p/2022/12/elvis-lockheed-1329-4.jpg
#   product_9_image4_url: https://uncrate.com/p/2022/12/elvis-lockheed-1329-5.jpg
#   product_9_image5_url: https://uncrate.com/p/2022/12/elvis-lockheed-1329-6.jpg

#   product_10_image1_url: https://uncrate.com/p/2020/05/canvas-firewood-carrier-10.jpg
#   product_10_image2_url: https://uncrate.com/p/2020/05/canvas-firewood-carrier-11.jpg
#   product_10_image3_url: https://uncrate.com/p/2020/05/canvas-firewood-carrier-12.jpg
#   product_10_image4_url: https://cdn.shopify.com/s/files/1/0248/6216/products/canvas-firewood-carrier-13.jpg?v=1589385240

#   product_11_image1_url: https://uncrate.com/p/2022/12/rimowa-pine-raspberry-1.jpg
#   product_11_image2_url: https://uncrate.com/p/2022/12/rimowa-pine-raspberry-2.jpg
#   product_11_image3_url: https://uncrate.com/p/2022/12/rimowa-pine-raspberry-3.jpg
#   product_11_image4_url: https://uncrate.com/p/2022/12/rimowa-pine-raspberry-4.jpg
