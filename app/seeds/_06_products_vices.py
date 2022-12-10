from random import randint

products_vices = [
    {
        "id": 56,
        "title": "KLARO MILITARY EDITION HUMIDOR",
        "description": "Store your best sticks in style with this cedar-lined, military-inspired matte black humidor. $300.",
        "detailed_description": "Not all humidors need to have classic wooden exteriors. This Military Edition Humidor from adopts a more modern look with a sleek matte black exterior and custom gunmetal hardware and handles. The interior is clad in thick 100% Spanish cedar, and outfitted with a recessed hydro system to keep sticks fresh, a sliding, removable storage tray for organization, and rubber gaskets for a tight seal. A digital hygrometer on the front lets you know when it's time to add more water, and a drawer on the bottom keeps lighters, cutters, and other accessories conveniently at hand.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 300,
        "preview_img_id": 56,
    },
    {
        "id": 57,
        "title": "SHARPIE MUSTACHE COCKTAIL RECIPE",
        "description": "A blend of Amaro, gin, and rye, this drink is equally good as a punch or sipped out of a flask.",
        "detailed_description": "Created by Chris Elford while at Amor Y Amargo in NYC, the Sharpie Mustache still gets ordered long after his departure to Seattle. Whether batched and served out of a hip flask (one for the road) or stirred and poured over a big clear ice cube, this blend of Amaro, gin, and rye will be ordered again and again, by you or your dinner guests.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 0,
        "preview_img_id": 57,
    },
    {
        "id": 58,
        "title": "ALESSI SPIRALE ASHTRAY",
        "description": "Created in 1970 by Italian designer Achille Castiglioni, the Spirale has a cig-holding metal spiral. $125.",
        "detailed_description": "Smoking was far more common when Italian designer Achille Castiglioni came up with the Spirale Ashtray in 1970, yet its design endures. It's crafted from 18/10 stainless steel and named for the signature spiral that goes around the inner edge and holds cigarettes for absent-minded smokers like its creator. The spiral can also be lifted out for cleaning, which also allows the object to serve as a catch-all tray for small items like change, keys, or earphones. Made in Italy.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 125,
        "preview_img_id": 58,
    },
    {
        "id": 59,
        "title": "20TH CENTURY COCKTAIL RECIPE",
        "description": "A refreshing mix of lemon, gin, and créme de cacao, this cocktail is an exercise in opulence.",
        "detailed_description": "Named for the 20th Century Limited express passenger train, this refreshing mix of lemon, gin, crème de cacao, and aromatized French wine will have you hoping the journey will take a while in anticipation of ordering another round. Velvety, crisp, and a sight to behold, just like that smoking jacket you packed along for the ride.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 0,
        "preview_img_id": 59,
    },
    {
        "id": 60,
        "title": "NUDE FUMO CIGAR ASHTRAY",
        "description": "Capable of handling ash and small trinkets alike, this handmade ashtray is a worthwhile addition. $77.",
        "detailed_description": "Carved from solid crystalline glass, Nude's Fumo ashtray is equally suited to accommodating cigars or trinkets. It's made by hand, giving each piece an artisan look. The deep groove keeps favorite sticks from moving around, while the generous bowl keeps ash intact, avoiding the dreaded split.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 77,
        "preview_img_id": 60,
    },
    {
        "id": 61,
        "title": "NUDE ALTRUIST CIGAR ASHTRAY",
        "description": "Designed to be placed between two chairs, this sleek ashtray has dual slots that face each other. $77.",
        "detailed_description": "A fine cigar can be an enjoyable indulgence. Even more so when the experience is shared. Nude's Altruist Cigar Ashtray is made to accommodate two sticks at once, making it perfect for dual chair, relaxed conversations. It's handmade from lead-free crystal with a refined circular shape, two placement grooves that face each other, and generous ash bowls.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 77,
        "preview_img_id": 61,
    },
    {
        "id": 62,
        "title": "HEMSON STEALTH BLACK CLASSIC PIPE",
        "description": "Inspired by the pipes of generations past, this pipe combines a classic profile with a ceramic bowl. $90.",
        "detailed_description": "It looks like the kind of pipe your granddad (or maybe great-grandad) might have smoked. Yet this model from Hemson hides modern convenience. The American ash wood body is carved by hand into a timeless silhouette, but fitted with a removable glazed ceramic bowl and filter screen for easier cleaning and a more enjoyable smoke. The body undergoes a multi-step polishing, tinting, and waxing process that gives it a handsome, durable black finish that will develop a unique patina over time. Finished with a removable, co-injected acrylic/nylon mouthpiece.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 90,
        "preview_img_id": 62,
    },
    {
        "id": 63,
        "title": "TRAVEL CIGAR HUMIDOR",
        "description": "A hygrometer built into the lid ensures the cigars in this travel humidor arrive in prime condition. $75.",
        "detailed_description": "Cigars need a certain amount of humidity — generally somewhere between 62 percent and 72 percent — to stay at their best. The lid-mounted hygrometer of this travel humidor lets you see at a glance the conditions inside. Able to hold between three and five cigars, depending on ring gauge, its exterior has a silver checkered pattern at the top that provides an eye-catching transition from the black base to the aforementioned silver lid.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 75,
        "preview_img_id": 63,
    },
    {
        "id": 64,
        "title": "CARBON FIBER CIGAR TUBE",
        "description": "Like a high-end wallet or case, this tube carries a single  cigar in carbon fiber-wrapped luxury. $75.",
        "detailed_description": "A fine cigar deserves better than being hauled around in a plastic wrapper, or worse, yet, nothing at all. Made from stainless steel with a black carbon fiber finish, this is an upscale carry option.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 75,
        "preview_img_id": 64,
    },
    {
        "id": 65,
        "title": "CARBON FIBER HUMIDOR",
        "description": "Protect a small supply of your best sticks in style with this carbon fiber-covered humidor. $225.",
        "detailed_description": "Well-curated cigar collections deserve equally well-considered storage. While not sized to house a full collection, this model certainly looks the part. It's made from wood with and given a veneer of carbon fiber, with a checkered weave pattern on the base and a high gloss black finish on the top. A hygrometer and humidifying sponge are included for keeping ideal interior conditions, and the size is just right for use in a vehicle or as part of your gear for an extended trip.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 225,
        "preview_img_id": 65,
    },
    {
        "id": 66,
        "title": "FINAL WARD COCKTAIL RECIPE",
        "description": "A masterclass in well-balanced flavor, this drink merges vanilla flavors with a citrus brightness.",
        "detailed_description": "Sometimes minor swaps totally transform a drink. The shift in spirit and citrus in the Final Ward from Phil Ward brings a calming vanilla of whiskey and a rounded out splash of brightness from lemon juice. Equal parts cocktails are tough to balance, but this is a masterclass.",
        "category_id": 6,
        "owner_id": randint(1, 3),
        "price": 0,
        "preview_img_id": 66,
    },
]

product_vices_imgs = [
    {
        "id": 56,
        "product_id": 56,
        "url": "https://uncrate.com/assets_c/2022/11/military-edition-humidor-1-thumb-960xauto-154713.jpg",
    },
    {
        "id": 57,
        "product_id": 57,
        "url": "https://uncrate.com/assets_c/2022/11/sharpie-mustache-cocktail-thumb-960xauto-154570.jpg",
    },
    {
        "id": 58,
        "product_id": 58,
        "url": "https://uncrate.com/assets_c/2022/11/alessi-ashtray-1-thumb-960xauto-154382.jpg",
    },
    {
        "id": 59,
        "product_id": 59,
        "url": "https://uncrate.com/assets_c/2022/10/20th-century-cocktail-thumb-960xauto-153114.jpg",
    },
    {
        "id": 60,
        "product_id": 60,
        "url": "https://uncrate.com/assets_c/2022/10/nude-cigar-tray-single-clear-glass-5-thumb-960xauto-152668.jpg",
    },
    {
        "id": 61,
        "product_id": 61,
        "url": "https://uncrate.com/assets_c/2022/10/nude-glass-black-double-cigar-tray-2-thumb-960xauto-152620.jpg",
    },
    {
        "id": 62,
        "product_id": 62,
        "url": "https://uncrate.com/assets_c/2022/01/hemson-black-pipe-2-thumb-960xauto-142902.jpg",
    },
    {
        "id": 63,
        "product_id": 63,
        "url": "https://uncrate.com/assets_c/2022/03/brouk-and-co-humidor-canister-1-thumb-960xauto-144274.jpg",
    },
    {
        "id": 64,
        "product_id": 64,
        "url": "https://uncrate.com/assets_c/2022/03/brouk-and-co-single-humidor-1-thumb-960xauto-144175.jpg",
    },
    {
        "id": 65,
        "product_id": 65,
        "url": "https://uncrate.com/assets_c/2022/03/broku-co-cf-humidor-1-thumb-960xauto-144141.jpg",
    },
    {
        "id": 66,
        "product_id": 66,
        "url": "https://uncrate.com/assets_c/2022/01/final-ward-cocktail-thumb-960xauto-142361.jpg",
    },
]

"""
product56_image1: https://uncrate.com/assets_c/2022/11/military-edition-humidor-1-thumb-960xauto-154713.jpg

product56_image2: https://uncrate.com/assets_c/2022/11/military-edition-humidor-8-thumb-960xauto-154720.jpg

product56_image3: https://uncrate.com/assets_c/2022/11/military-edition-humidor-3-thumb-960xauto-154715.jpg

product56_image4: https://uncrate.com/assets_c/2022/11/military-edition-humidor-2-thumb-960xauto-154714.jpg

product56_image5: https://uncrate.com/assets_c/2022/11/military-edition-humidor-5-thumb-960xauto-154717.jpg

product57_image1: https://uncrate.com/assets_c/2022/11/sharpie-mustache-cocktail-thumb-960xauto-154570.jpg

product58_image1: https://uncrate.com/assets_c/2022/11/alessi-ashtray-1-thumb-960xauto-154382.jpg

product58_image2: https://uncrate.com/assets_c/2022/11/alessi-ashtray-3-thumb-960xauto-154383.jpg

product58_image3: https://uncrate.com/assets_c/2022/11/alessi-ashtray-2-thumb-960xauto-154381.jpg

product59_image1: https://uncrate.com/assets_c/2022/10/20th-century-cocktail-thumb-960xauto-153114.jpg

product60_image1: https://uncrate.com/assets_c/2022/10/nude-cigar-tray-single-clear-glass-5-thumb-960xauto-152668.jpg

product60_image2: https://uncrate.com/assets_c/2022/10/cigar-lifestyle-shots-1-thumb-960xauto-152669.jpg

product60_image3: https://uncrate.com/assets_c/2022/10/nude-cigar-tray-single-clear-glass-1-thumb-960xauto-152671.jpg

product60_image4: https://uncrate.com/assets_c/2022/10/nude-cigar-tray-single-clear-glass-2-thumb-960xauto-152672.jpg

product60_image5: https://uncrate.com/assets_c/2022/10/nude-cigar-tray-single-clear-glass-3-thumb-960xauto-152674.jpg

product61_image1: https://uncrate.com/assets_c/2022/10/nude-glass-black-double-cigar-tray-2-thumb-960xauto-152620.jpg

product61_image2: https://uncrate.com/assets_c/2022/10/cigar-lifestyle-shots-5-thumb-960xauto-152637.jpg

product61_image3: https://uncrate.com/assets_c/2022/10/nude-glass-black-double-cigar-tray-1-thumb-960xauto-152621.jpg

product61_image4: https://uncrate.com/assets_c/2022/10/nude-glass-black-double-cigar-tray-4-thumb-960xauto-152625.jpg

product61_image5: https://uncrate.com/assets_c/2022/10/nude-glass-black-double-cigar-tray-3-thumb-960xauto-152624.jpg

product62_image1: https://uncrate.com/assets_c/2022/01/hemson-black-pipe-2-thumb-960xauto-142902.jpg

product62_image2: https://uncrate.com/assets_c/2022/01/hemson-black-pipe-3-thumb-960xauto-142903.jpg

product62_image3; https://uncrate.com/assets_c/2022/01/hemson-black-pipe-1-thumb-960xauto-142901.jpg

product63_image1: https://uncrate.com/assets_c/2022/03/brouk-and-co-humidor-canister-1-thumb-960xauto-144274.jpg

product63_image2: https://uncrate.com/assets_c/2022/03/brouk-and-co-humidor-canister-3-thumb-960xauto-144276.jpg

product63_image3: https://uncrate.com/assets_c/2022/03/brouk-and-co-humidor-canister-2-thumb-960xauto-144275.jpg

product64_image1: https://uncrate.com/assets_c/2022/03/brouk-and-co-single-humidor-1-thumb-960xauto-144175.jpg

product64_image2: https://uncrate.com/assets_c/2022/03/brouk-and-co-single-humidor-2-thumb-960xauto-144176.jpg

product64_image3: https://uncrate.com/assets_c/2022/03/brouk-and-co-single-humidor-3-thumb-960xauto-144177.jpg

product65_image1: https://uncrate.com/assets_c/2022/03/broku-co-cf-humidor-1-thumb-960xauto-144141.jpg

product65_image2: https://uncrate.com/assets_c/2022/03/broku-co-cf-humidor-3-thumb-960xauto-144142.jpg

product65_image3: https://uncrate.com/assets_c/2022/03/broku-co-cf-humidor-4-thumb-960xauto-144143.jpg

product65_image4: https://uncrate.com/assets_c/2022/03/broku-co-cf-humidor-5-thumb-960xauto-144144.jpg

product65_image5: https://uncrate.com/assets_c/2022/03/broku-co-cf-humidor-6-thumb-960xauto-144145.jpg

product66_image1: https://uncrate.com/assets_c/2022/01/final-ward-cocktail-thumb-960xauto-142361.jpg

"""
