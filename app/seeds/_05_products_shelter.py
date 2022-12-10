from random import randint


products_shelter = [
    {
        "id": 45,
        "title": "SEIKO MAI ALARM CLOCK",
        "description": "Inspired by the design of legendary Seiko wrist watches, this portable clock has a silent seconds hand and beep + LED alarm. $45.",
        "detailed_description": "Seiko fanatics now have a way to further their collection, but not on the wrist. The Mai Alarm Clock from Seiko is a tribute to the design of its famous utilitarian and relatively accessible wristwatches, and notably these alarm clocks have elements pulled from the design of the famed SKX series. Its portable design is compact for travel, complete with a 60-minute bezel and near-silent sweeping seconds hand. Powered by a precise quartz movement, it also has a beeping and LED-flashing alarm to wake even deep sleepers, a snooze function, and light. Powered by a single included AA battery.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 45,
        "preview_img_id": 45,
    },
    {
        "id": 46,
        "title": "HYPELEV LEVITATING SNEAKER DISPLAY STAND",
        "description": "Using a powerful magnet, current manipulation, and air, this stand suspends sneakers in mid-air. $249.",
        "detailed_description": "Over the last 30+ years, sneakers have gone from humble foot coverings to pop culture artifacts. Problem is, most of us aren't leaving shoeboxes out in our living areas for guests to enjoy. The Hypelev allows sneakers to be displayed and enjoyed like the works of art they are. A powerful magnet slides into the shoe against the heel, while the C-shaped levitator manipulates magnetic currents to suspend the shoe in mi-air, and a small air hole causes it to slowly spin. For added drama, white LEDs provide illumination to highlight small details and enable nighttime viewing. Available in black or white, it works with shoes up to size 15 with a weight up to 2.2 pounds.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 249,
        "preview_img_id": 46,
    },
    {
        "id": 47,
        "title": "REIGNING CHAMP X PENDLETON STADIUM BLANKET",
        "description": "Ombre striped blanket made from premium virgin wool/cotton blend and a napped finish. $400.",
        "detailed_description": "Reigning Champ enlists the expertise of Pendleton for a cold-weather accessory. The limited-edition stadium blanket fuses the ethos of both brands, using the historic craftsmanship of the six-generation American mill and the signature colorway of the Canadian athletic brand. Made from a premium virgin wool/cotton blend, the twin-size blanket features an ombre stripe pattern in black, gray, and navy, a felt wool binding, and a napped finish for added softness. A co-branding logo is stitched to the corner to slate the collaboration.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 400,
        "preview_img_id": 47,
    },
    {
        "id": 48,
        "title": "HERMAN MILLER NELSON FIREPLACE TOOL SET",
        "description": "Crafted with quality to last, this fire tool set will tame the flames for generations. $395.",
        "detailed_description": "George Nelson designed the Nelson® Fireplace Tool Set in 1951 with the principle that everything is there for a reason. The four-piece set includes all the items needed to command the flames from start to finish. Made to last, the poker, shovel, arenga-fiber brush, and floor stand are forged from powder-coated steel and finished with walnut handles. Pairs well with the Nelson® Fireplace Caddy.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 395,
        "preview_img_id": 48,
    },
    {
        "id": 49,
        "title": "PORSCHE 356 NOSE FRAMED PRINT",
        "description": "A black and white photo of a vintage Porsche 356 front end is ideal decor for motoring enthusists. $269.",
        "owner_id": randint(1, 3),
        "price": 269,
        "preview_img_id": 49,
    },
    {
        "id": 50,
        "title": "FILSON MACKINAW WOOL BLANKET",
        "description": "Soft virgin wool sourced from the US delivers a warm layer of insulation during crisp, autumn outings. $295.",
        "detailed_description": "At stadiums, campsites, and fireside sofas, a blanket is the ideal fall accessory. The Filson Mackinaw Wool Blanket keeps the cool off inside or out. It's made from 100% virgin wool sourced from the USA and provides a soft layer of insulation that is naturally water-repellent. Finished with serged edges, it won't fray and will withstand years of use.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 295,
        "preview_img_id": 50,
    },
    {
        "id": 51,
        "title": "URSULA ANDRESS AT CASINO ROYALE FRAMED PRINT",
        "description": "The original Bond girl, Ursula Andress, is pictured here on the set of the 1967 film Casino Royale. $269.",
        "detailed_description": "Ursula Andress is famous for being the first Bond girl, setting a precedent as she came out of the water. As such, she was hired on for the forgettable parody adaptation of Casino Royale. This photo shows her in a scene from the film, laying back on a roulette table surrounded by money and markers. Printed to order on Fuji crystal archive paper, numbered and certified, and comes encased inside a hand-made solid wood black that's ready to hang. Limited edition of 495.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 269,
        "preview_img_id": 51,
    },
    {
        "id": 52,
        "title": "SEAN CONNERY PLAYS GOLF FRAMED PRINT",
        "description": "The orignal James Bond plays a round of golf near his Acton home in 1962. $269.",
        "detailed_description": "Sean Connery famously played a round of golf with notorious villain Goldfinger in the 1964 Bond film. But his skills weren't just for show. The original 007 was an avid golfer off-screen, also. His love for the game is captured in this picture taken at a course near his home in Acton in 1962. The photo is printed on Fuji crystal archive paper, numbered and certified, and comes encased inside a hand-made solid wood white or black frame that's ready to hang. Limited edition of 495.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 269,
        "preview_img_id": 52,
    },
    {
        "id": 53,
        "title": "ANDY WARHOL IN VENICE FRAMED PRINT",
        "description": "Photographer Graziano Arici camptures the Pop Art icon sitting at a cafe in Venice. $269.",
        "detailed_description": "Andy Warhol is one of the most iconic artists of the 20th century and pioneered the Pop Art era with his paintings of Campbell's soup cans and celebrities like Marilyn Monroe and Elvis Presley. In this pint, photographer Graziano Arici captures the legend at a cafe in Venice in 1977. The photo is printed on Fuji crystal archive paper, numbered and certified, and comes encased inside a hand-made solid wood white or black frame that's ready to hang. Limited edition of 495.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 269,
        "preview_img_id": 53,
    },
    {
        "id": 54,
        "title": "STEVE MCQUEEN & WIFE FRAMED PRINT",
        "description": "Steve McQueen was married to actress Neile Adams for 16 years. This photo was... $269.",
        "detailed_description": "Steve McQueen was married to actress Neile Adams for 16 years. This photo was taken of the couple in 1963 during a trip to Big Sur, California as they relax in Esalen's famous clothing optional sulfur baths with cigarettes and a bottle of wine. Printed to order on Fuji crystal archive paper, numbered and certified, and comes encased inside a hand-made solid wood black frame that's ready to hang. Limited edition of 495.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 269,
        "preview_img_id": 54,
    },
    {
        "id": 55,
        "title": "SPACE SHUTTLE DISCOVERY LIFTOFF FRAMED PRINT",
        "description": "This framed print captures the Space Shuttle Discovery at lift-off on its final mission in 2011. $269.",
        "detailed_description": "On February 11, 2011, the space shuttle Discovery lifted off on its final mission, STS-133. It was Discovery's 39th launch, with the orbiter spending exactly 365 days in space over its 27-year career. Captured at the moment of lift-off, this full-color print shows Discovery racing for the stars on that final flight. Printed on Fuji crystal paper and mounted in a hand-made black or white wooden frame.",
        "category_id": 5,
        "owner_id": randint(1, 3),
        "price": 269,
        "preview_img_id": 55,
    },
]


products_shelter_imgs = [
    {
        "id": 45,
        "product_id": 45,
        "url": "https://uncrate.com/assets_c/2022/12/seiko-mai-alarm-clock-blue-23-thumb-960xauto-155169.jpg",
    },
    {
        "id": 46,
        "product_id": 46,
        "url": "https://uncrate.com/assets_c/2021/12/hype-lev-levitator-1-thumb-960xauto-141302.jpg",
    },
    {
        "id": 47,
        "product_id": 47,
        "url": "https://uncrate.com/assets_c/2022/11/reigning-champ-pendleton-stadium-blanket-1-thumb-960xauto-154676.jpg",
    },
    {
        "id": 48,
        "product_id": 48,
        "url": "https://uncrate.com/assets_c/2022/10/herman-miller-nelson-fireplace-toolkit-2-thumb-960xauto-152264.jpg",
    },
    {
        "id": 49,
        "product_id": 49,
        "url": "https://uncrate.com/assets_c/2022/11/porsche-356-nose-print-black-1-thumb-960xauto-154585.jpg",
    },
    {
        "id": 50,
        "product_id": 50,
        "url": "https://uncrate.com/assets_c/2022/10/filson-plaid-wool-blanket-1-thumb-960xauto-152360.jpg",
    },
    {
        "id": 51,
        "product_id": 51,
        "url": "https://uncrate.com/assets_c/2022/11/Ursula-TFSK-bond-print-black-1-thumb-960xauto-154346.jpg",
    },
    {
        "id": 52,
        "product_id": 52,
        "url": "https://uncrate.com/assets_c/2022/11/sean-connery-golfing-IPPI-black-1-thumb-960xauto-154315.jpg",
    },
    {
        "id": 53,
        "product_id": 53,
        "url": "https://uncrate.com/assets_c/2022/11/warhol-kpzn-print-black-1-thumb-960xauto-154181.jpg",
    },
    {
        "id": 54,
        "product_id": 54,
        "url": "https://uncrate.com/assets_c/2018/11/sonic-mcqueen-tub1-thumb-960xauto-92970.jpg",
    },
    {
        "id": 55,
        "product_id": 55,
        "url": "https://uncrate.com/assets_c/2022/11/nasa-ipwk-rocket-print-black-1-thumb-960xauto-153854.jpg",
    },
]
