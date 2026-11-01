// Menu items dataset for Priya's Desi Kitchen, Galaxy Mall, Kaduna

export const CATEGORIES = [
  "All",
  "BIRYANI",
  "Combo",
  "DESSERTS",
  "Indian Breads",
  "Indian Curries",
  "Non Veg Starters",
  "Rice Dishes",
  "VEGETARIAN STARTERS",
  "TEA - CHAI",
  "VEGETARIAN DISHES",
  "Mocktails",
  "Fresh Juices"
];

// Faithful, distinct photography corresponding directly to dish titles
const IMAGES = {
  chickenBiryani: "/src/assets/images/hero_biryani_handi_1793523316183.jpg",
  muttonBiryani: "/src/assets/images/dish_mutton_biryani_1793524526741.jpg",
  shrimpsBiryani: "/src/assets/images/dish_shrimps_biryani_1793524528212.jpg",
  vegBiryani: "/src/assets/images/hero_biryani_handi_1793523316183.jpg",
  
  jollofCombo: "/src/assets/images/dish_jollof_combo_1793524527251.jpg",
  friedRiceCombo: "/src/assets/images/dish_jollof_combo_1793524527251.jpg",
  chilliFriedRiceCombo: "/src/assets/images/menu_chilli_starter_1793524058899.jpg",
  
  shahiTukda: "/src/assets/images/dessert_shahi_tukda_1793523317236.jpg",
  
  naanBread: "/src/assets/images/menu_naan_basket_1793524056970.jpg",
  
  butterChicken: "/src/assets/images/curry_butter_chicken_1793523316693.jpg",
  tikkaMasala: "/src/assets/images/curry_butter_chicken_1793523316693.jpg",
  roganJosh: "/src/assets/images/dish_mutton_biryani_1793524526741.jpg",
  kadhaiChicken: "/src/assets/images/curry_butter_chicken_1793523316693.jpg",
  
  tandooriKebabs: "/src/assets/images/starters_tandoori_kebab_1793523317639.jpg",
  chilliChicken: "/src/assets/images/menu_chilli_starter_1793524058899.jpg",
  chicken65: "/src/assets/images/menu_chilli_starter_1793524058899.jpg",
  hotGarlicPrawns: "/src/assets/images/dish_shrimps_biryani_1793524528212.jpg",
  grilledFish: "/src/assets/images/starters_tandoori_kebab_1793523317639.jpg",
  
  samosaPakoda: "/src/assets/images/dish_samosa_pakoda_1793524528275.jpg",
  chilliPaneer: "/src/assets/images/menu_chilli_starter_1793524058899.jpg",
  paneerTikka: "/src/assets/images/menu_paneer_curry_1793524057796.jpg",
  
  dalTadka: "/src/assets/images/dish_dal_tadka_1793524528692.jpg",
  butterPaneer: "/src/assets/images/menu_paneer_curry_1793524057796.jpg",
  paneerMethi: "/src/assets/images/menu_paneer_curry_1793524057796.jpg",
  mixedVegCurry: "/src/assets/images/dish_dal_tadka_1793524528692.jpg",
  
  masalaChai: "/src/assets/images/menu_masala_chai_1793524059024.jpg",
  chapman: "/src/assets/images/menu_chapman_cocktail_1793524057938.jpg"
};

export const MENU_ITEMS = [
  // BIRYANI
  {
    id: "biryani-chicken",
    name: "Chicken Biriyani",
    category: "BIRYANI",
    price: 20500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.chickenBiryani,
    description: "An Aromatic and Richly spiced mix dish made with Premium quality Basmati rice features yoghurt marinated chicken layered fluffy Basmati rice , slowly cooked with caramalised Onions , fresh herbs and spices"
  },
  {
    id: "biryani-mutton",
    name: "Mutton Biriyani",
    category: "BIRYANI",
    price: 23500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.muttonBiryani,
    description: "A Classic dish made with Premium Quality Basmati Rice featuring Tender pieces of Mutton marinated in a fragrant blend of Yoghurt and traditional spices , slow cooked ,caramalized with onions and fresh Mint"
  },
  {
    id: "biryani-shrimps",
    name: "Shrimps Biriyani",
    category: "BIRYANI",
    price: 24500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.shrimpsBiryani,
    description: "A Classic dish made with Premium Quality Basmati Rice featuring Tender pieces of Shrimps marinated in a fragrant blend of Yoghurt and traditional spices , slow cooked ,caramalized with onions and fresh Mint"
  },
  {
    id: "biryani-veg",
    name: "Vegetable Biriyani",
    category: "BIRYANI",
    price: 19500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.vegBiryani,
    description: "A Classic dish made with Premium Quality Basmati Rice featuring a lot of Vegetables in a fragrant blend of Yoghurt and traditional spices , slow cooked ,caramalized with onions and fresh Mint. Especially tailor made for Vegeterians"
  },

  // COMBO
  {
    id: "combo-chicken-fried-rice",
    name: "Chicken Fried rice with Chicken Chilli",
    category: "Combo",
    price: 19500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.chilliFriedRiceCombo,
    description: "Chicken fried rice served with spicy boneless chilli chicken"
  },
  {
    id: "combo-fried-rice-nigerian",
    name: "Fried Rice Combo",
    category: "Combo",
    price: 18500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.friedRiceCombo,
    description: "Nigerian Fried rice served with Peppered chicken and coleslaw"
  },
  {
    id: "combo-jollof-rice",
    name: "Jallof Rice combo",
    category: "Combo",
    price: 18500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.jollofCombo,
    description: "Jallof rice served with Chicken and coleslwaw"
  },

  // DESSERTS
  {
    id: "dessert-shahi-tukda",
    name: "SHAHI TUKDA",
    category: "DESSERTS",
    price: 9500,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.shahiTukda,
    description: "Shahi Tukda is a rich and royal Indian dessert featuring golden-fried bread slices soaked in fragrant, cardamom-scented sugar syrup. It is generously topped with creamy, thickened milk (rabri), and garnished with crunchy nuts and aromatic spices for an indulgent finish."
  },

  // INDIAN BREADS
  {
    id: "bread-butter-naan",
    name: "Butter Naan",
    category: "Indian Breads",
    price: 2800,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.naanBread,
    description: "Traditional Indian Bread , made with Refined wheat flour , baked in. Clay pot Tandoori oven."
  },
  {
    id: "bread-cheese-naan",
    name: "Cheese Naan",
    category: "Indian Breads",
    price: 8500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.naanBread,
    description: "Naan Stuffed with Mozarella cheese , gives it a great taste."
  },
  {
    id: "bread-chicken-keema-naan",
    name: "Chicken Keema Naan",
    category: "Indian Breads",
    price: 8400,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.naanBread,
    description: "Butter Naan filled with mashed chicken (Keema )"
  },
  {
    id: "bread-chilli-garlic-naan",
    name: "Chilli Garlic Naan",
    category: "Indian Breads",
    price: 3300,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.naanBread,
    description: "Traditional Indian Bread made with Wheat flour and topped with Garlic and Chilli to give a wonderful mouthwatering taste"
  },
  {
    id: "bread-garlic-naan",
    name: "Garlic Naan",
    category: "Indian Breads",
    price: 3200,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.naanBread,
    description: "Indian Bread cooked in Clay Pot / Tandoor , seasond with Garlic"
  },
  {
    id: "bread-masala-kulcha",
    name: "Masala Kulcha Naan",
    category: "Indian Breads",
    price: 5300,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.naanBread,
    description: "Butter Naan filled with mashed Vegetables and Spices"
  },
  {
    id: "bread-basket",
    name: "Naan Bread Basket",
    category: "Indian Breads",
    price: 15000,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.naanBread,
    description: "Containes 1 Butter Naan,1 Garlic Naan, 1 Chilli Garlic Naan and 1 Masala Kulcha Naan"
  },

  // INDIAN CURRIES
  {
    id: "curry-butter-chicken-full",
    name: "Butter Chicken - Full",
    category: "Indian Curries",
    price: 19800,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.butterChicken,
    description: "Tender Yoghurt marinated chicken cooked in clay pot ( Tandoori) and then simmered in a creamy ,velvety and mild spiced tomato butter sauce."
  },
  {
    id: "curry-butter-chicken-half",
    name: "Butter Chicken - Half",
    category: "Indian Curries",
    price: 10500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.butterChicken,
    description: "Tender Yoghurt marinated chicken cooked in clay pot ( Tandoori) and then simmered in a creamy ,velvety and mild spiced tomato butter sauce."
  },
  {
    id: "curry-tikka-masala-full",
    name: "Chicken Tikka Masala - Full",
    category: "Indian Curries",
    price: 19800,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.tikkaMasala,
    description: "Boneless Chicken marinated in yoghurt with spices ,grilled in Tandoor (claypot) , simmered in creamy tomato sauce."
  },
  {
    id: "curry-tikka-masala-half",
    name: "Chicken Tikka Masala - Half",
    category: "Indian Curries",
    price: 10500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.tikkaMasala,
    description: "Boneless Chicken marinated in yoghurt with spices ,grilled in Tandoor (claypot) , simmered in creamy tomato sauce."
  },
  {
    id: "curry-kadhai-chicken-full",
    name: "Kadhai Chicken -Full",
    category: "Indian Curries",
    price: 19800,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.kadhaiChicken,
    description: "Kadhai chicken is a popular Indian dish made with tender chicken cooked in a thick, spicy tomato and onion gravy alongside crunchy bell peppers. It gets its name and smoky, robust flavor from the traditional Indian wok (kadhai) used for cooking"
  },
  {
    id: "curry-kadhai-chicken-half",
    name: "Kadhai Chicken -Half",
    category: "Indian Curries",
    price: 10500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.kadhaiChicken,
    description: "Kadhai chicken is a popular Indian dish made with tender chicken cooked in a thick, spicy tomato and onion gravy alongside crunchy bell peppers. It gets its name and smoky, robust flavor from the traditional Indian wok (kadhai) used for cooking"
  },
  {
    id: "curry-rogan-josh-full",
    name: "Mutton Rogan Josh -Full",
    category: "Indian Curries",
    price: 19800,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.roganJosh,
    description: "Tender mutton simmered in a rich, aromatic Kashmiri chili and yogurt ,slowly cooked with garlic, ginger, and fragrant spices in a vibrant red curry."
  },
  {
    id: "curry-rogan-josh-half",
    name: "Mutton Rogan Josh-Half",
    category: "Indian Curries",
    price: 10500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.roganJosh,
    description: "Tender mutton simmered in a rich, aromatic Kashmiri chili and yogurt ,slowly cooked with garlic, ginger, and fragrant spices in a vibrant red curry."
  },

  // NON VEG STARTERS
  {
    id: "starter-chicken-65",
    name: "CHICKEN -65",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.chicken65,
    description: "Crispy, bite-sized chicken pieces tossed in a fiery, yogurt-based red chili sauce, infused with fresh curry leaves and garlic. Spicy, tangy, and absolutely addictive."
  },
  {
    id: "starter-chicken-lollypop",
    name: "Chicken Lollypop",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.tandooriKebabs,
    description: "Fried Chicken wings / Drumsticks marinated in a spicy batter and served hot"
  },
  {
    id: "starter-chicken-reshmi-kebab",
    name: "Chicken Reshmi Kebab",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.tandooriKebabs,
    description: "Chicken Reshmi Kebab is a tender, melt-in-your-mouth dish featuring boneless chicken marinated in yogurt, cream, cheese or cashew paste, and mild spices"
  },
  {
    id: "starter-chicken-sheekh-kebab",
    name: "Chicken Sheekh Kebab",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.tandooriKebabs,
    description: "Chicken Seekh Kebab is a flavorful appetizer made of minced chicken seasoned with aromatic Indian spices, fresh herbs, and aromatics, then skewered and grilled to a tender, juicy perfection"
  },
  {
    id: "starter-chicken-tangdi-kebab",
    name: "Chicken Tangdi Kebab",
    category: "Non Veg Starters",
    price: 18000,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.tandooriKebabs,
    description: "Chicken Drumsticks marinated with Indian spices and grilled in Tandoor."
  },
  {
    id: "starter-chilli-chicken",
    name: "CHILLI CHICKEN",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.chilliChicken,
    description: "Crispy, batter-fried chicken chunks tossed with crunchy bell peppers and onions in a savory, spicy, and tangy soy-garlic sauce. A perfect balance of sweet, spicy, and umami."
  },
  {
    id: "starter-grilled-fish",
    name: "GRILLED FISH -NIGERIAN STYLE",
    category: "Non Veg Starters",
    price: 21000,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.grilledFish,
    description: "Fresh fish seasoned with Nigerian peppers and aromatic herbs, grilled to perfection over open flame."
  },
  {
    id: "starter-hot-garlic-prawns",
    name: "HOT GARLIC PRAWNS",
    category: "Non Veg Starters",
    price: 21000,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.hotGarlicPrawns,
    description: "Plump Shrimps tossed in a fiery blend of roasted garlic, red chilies, and a touch of soy. Served sizzling hot"
  },
  {
    id: "starter-peppered-chicken-wings",
    name: "Peppered Chicken Wings",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.tandooriKebabs,
    description: "Chicken wings peppered with spices and grilled crisp."
  },
  {
    id: "starter-tandoori-chicken",
    name: "Tandoori Chicken",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.tandooriKebabs,
    description: "A Vibrant Indian starter ,Chicken marinated with Yoghurt and blend of Indian Spices"
  },
  {
    id: "starter-tandoori-chicken-tikka",
    name: "Tandoori Chicken Tikka",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.tandooriKebabs,
    description: "Tender, boneless chicken chunks marinated overnight in a spiced yogurt blend, then skewered and charred to perfection in our Tandoor . Smoky, juicy, and packed with traditional flavor."
  },
  {
    id: "starter-tandoori-chicken-wings",
    name: "Tandoori Chicken Wings",
    category: "Non Veg Starters",
    price: 14500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.tandooriKebabs,
    description: "A delicious Indian-spiced CHICKEN appetizer where CHICKEN wings are marinated in a tangy, spiced yogurt mixture and Grilled in Clay Oven ( Tandoor )"
  },

  // RICE DISHES
  {
    id: "rice-chicken-fried",
    name: "Chicken Fried Rice",
    category: "Rice Dishes",
    price: 11500,
    isVeg: false,
    isChefSpecial: false,
    image: IMAGES.chilliFriedRiceCombo,
    description: "Chicken fried rice is a savory and flavorful dish made by stir-frying cooked rice with tender chicken, scrambled eggs, and mixed vegetables in a hot wok. Seasoned with soy sauce and aromatics like garlic and onions, it offers a perfect balance of salty, meaty, and savory tastes"
  },
  {
    id: "rice-jeera",
    name: "Jeera Rice",
    category: "Rice Dishes",
    price: 7000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chickenBiryani,
    description: "CUMIN TAMPERED RICE"
  },
  {
    id: "rice-special-fried",
    name: "Special Fried Rice",
    category: "Rice Dishes",
    price: 13500,
    isVeg: false,
    isChefSpecial: true,
    image: IMAGES.shrimpsBiryani,
    description: "Chicken fried rice is a savory and flavorful dish made by stir-frying cooked rice with Shrimps ,tender chicken, scrambled eggs, and mixed vegetables in a hot wok. Seasoned with soy sauce and aromatics like garlic and onions, it offers a perfect balance of salty, meaty, and savory tastes"
  },
  {
    id: "rice-steamed",
    name: "Steamed Rice",
    category: "Rice Dishes",
    price: 6000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chickenBiryani,
    description: "Basmati Rice cooked in Steam and Served"
  },

  // VEGETARIAN STARTERS
  {
    id: "starter-chilli-mushroom",
    name: "CHILLI MUSHROOM",
    category: "VEGETARIAN STARTERS",
    price: 14500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chilliStarter,
    description: "SPICY MUSHROOM tossed with fresh bell peppers and ginger-garlic sauce"
  },
  {
    id: "starter-chilli-paneer",
    name: "CHILLI PANEER",
    category: "VEGETARIAN STARTERS",
    price: 14500,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.chilliPaneer,
    description: "Paneer Chilli is a popular Indo-Chinese dish. It features crispy, batter-fried cubes of Indian cottage cheese (paneer). The paneer is tossed with crunchy bell peppers, onions, and fresh green chilies. It is then coated in a rich, savory sauce made of soy sauce, garlic, and ginger"
  },
  {
    id: "starter-dahi-kebab",
    name: "Dahi Kebab",
    category: "VEGETARIAN STARTERS",
    price: 14500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.samosaPakoda,
    description: "Kebab made with Yoghurt, Potato, cheese mixed with tangy spices )"
  },
  {
    id: "starter-hara-bhara-kebab",
    name: "Hara Bhara Kebab",
    category: "VEGETARIAN STARTERS",
    price: 14500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.samosaPakoda,
    description: "Kebab Made with Spinach(Palak) , Potato, Cheese Mixed with tangy spices"
  },
  {
    id: "starter-paneer-tikka",
    name: "Paneer Tikka",
    category: "VEGETARIAN STARTERS",
    price: 14500,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.paneerTikka,
    description: "A perfect paneer tikka menu description should highlight its rich flavors, smoky texture, and fresh ingredients. Paneer is a soft, non-melting Indian cottage cheese. It is cut into chunks and marinated in spiced yogurt, then traditionally grilled in a tandoor (clay oven) until lightly charred."
  },
  {
    id: "starter-veg-pakoda",
    name: "Vegetable Pakoda",
    category: "VEGETARIAN STARTERS",
    price: 14500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.samosaPakoda,
    description: "Vegetable pakoras are crispy, bite-sized Indian fritters made by coating fresh vegetables in a spiced chickpea flour (gram flour) batter. They are deeply fried until golden brown, resulting in a crunchy, savory texture."
  },
  {
    id: "starter-veg-samosa",
    name: "Vegetable Samosa(3 pcs)",
    category: "VEGETARIAN STARTERS",
    price: 6000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.samosaPakoda,
    description: "Golden flaky triangles stuffed with spiced cumin potatoes and green peas"
  },

  // TEA - CHAI
  {
    id: "tea-masala-chai",
    name: "Masala Tea ( Chai)",
    category: "TEA - CHAI",
    price: 7500,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.masalaChai,
    description: "Masala Chai is a traditional Indian spices tea made with Cinnamon, Cardamom, Ginger etc enriched with Milk, sweetened to taste"
  },

  // VEGETARIAN DISHES
  {
    id: "veg-butter-paneer-full",
    name: "Butter Paneer -Full",
    category: "VEGETARIAN DISHES",
    price: 19800,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.butterPaneer,
    description: "Butter Paneer is a rich and creamy Indian Main course curry featuring soft cubes of Indian cottage cheese simmered in a silky, spiced tomato-and-butter sauce. It is mildly sweet, deeply savory, and pairs perfectly with warm flatbreads like naan or fragrant basmati"
  },
  {
    id: "veg-butter-paneer-half",
    name: "Butter Paneer- Half",
    category: "VEGETARIAN DISHES",
    price: 10500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.butterPaneer,
    description: "Butter Paneer is a rich and creamy Indian Main course curry featuring soft cubes of Indian cottage cheese simmered in a silky, spiced tomato-and-butter sauce. It is mildly sweet, deeply savory, and pairs perfectly with warm flatbreads like naan or fragrant basmati"
  },
  {
    id: "veg-dal-tadka-full",
    name: "Dal Tadka -Full",
    category: "VEGETARIAN DISHES",
    price: 16000,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.dalTadka,
    description: "Creamy, slow-cooked lentils tempered with toasted cumin, whole red chilies, and aromatic spices."
  },
  {
    id: "veg-dal-tadka-half",
    name: "Dal Tadka -Half",
    category: "VEGETARIAN DISHES",
    price: 8500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.dalTadka,
    description: "Creamy, slow-cooked lentils tempered with toasted cumin, whole red chilies, and aromatic spices."
  },
  {
    id: "veg-mixed-vegetable-curry-full",
    name: "Mixed Vegetable Curry -Full",
    category: "VEGETARIAN DISHES",
    price: 19800,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.mixedVegCurry,
    description: "This Mixed Vegetables Curry is a delicious, hearty dish of seasonal vegetables simmered in a savory and aromatic sauce. It features fresh garden veggies gently cooked in an onion, tomato, and warm spice base. It is a vibrant, wholesome, and completely vegetarian meal."
  },
  {
    id: "veg-mixed-vegetables-curry-half",
    name: "Mixed Vegetables Curry - Half",
    category: "VEGETARIAN DISHES",
    price: 10500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.mixedVegCurry,
    description: "This Mixed Vegetables Curry is a delicious, hearty dish of seasonal vegetables simmered in a savory and aromatic sauce. It features fresh garden veggies gently cooked in an onion, tomato, and warm spice base. It is a vibrant, wholesome, and completely vegetarian meal."
  },
  {
    id: "veg-paneer-methi-malai-half",
    name: "Paneer Methi Malai - Half",
    category: "VEGETARIAN DISHES",
    price: 11500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.paneerMethi,
    description: "Paneer Methi Malai is a rich, creamy Indian delicacy featuring soft cubes of Indian cottage cheese simmered in a luscious, mildly spiced gravy. , perfectly balances the distinct, herbaceous aroma of fresh fenugreek leaves (methi) with the indulgent richness of heavy cream (malai)"
  },
  {
    id: "veg-paneer-methi-malai-full",
    name: "Paneer Methi Malai -Full",
    category: "VEGETARIAN DISHES",
    price: 21500,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.paneerMethi,
    description: "Paneer Methi Malai is a rich, creamy Indian delicacy featuring soft cubes of Indian cottage cheese simmered in a luscious, mildly spiced gravy. , perfectly balances the distinct, herbaceous aroma of fresh fenugreek leaves (methi) with the indulgent richness of heavy cream (malai)"
  },
  {
    id: "veg-fried-rice-chilli-paneer",
    name: "Veg Fried rice with Chilli Paneer",
    category: "VEGETARIAN DISHES",
    price: 19500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chilliPaneer,
    description: "Veg fried rice served with Chilli paneer . Ideal for 100% Vegetarians"
  },
  {
    id: "veg-vegetable-fried-rice",
    name: "Vegetable Fried Rice",
    category: "VEGETARIAN DISHES",
    price: 8500,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chilliFriedRiceCombo,
    description: "Fragrant stir-fried wok rice with crisp farm vegetables and light soy seasoning"
  },

  // MOCKTAILS
  {
    id: "drink-blue-lagoon",
    name: "BLUE LAGOON",
    category: "Mocktails",
    price: 7000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chapman,
    description: "Refreshing blue curaçao mocktail with fresh lemon spritz and crushed sparkling ice"
  },
  {
    id: "drink-chapman",
    name: "CHAPMAN",
    category: "Mocktails",
    price: 7000,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.chapman,
    description: "Classic Nigerian mocktail favorite with aromatic Angostura bitters, citrus juice, and fresh cucumber"
  },
  {
    id: "drink-orange-float",
    name: "Orange Float",
    category: "Mocktails",
    price: 7000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chapman,
    description: "Zesty fresh orange infusion topped with a velvety float"
  },
  {
    id: "drink-pinacolada",
    name: "Pinacolada",
    category: "Mocktails",
    price: 7000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chapman,
    description: "Velvety blend of fresh coconut cream and ripe tropical pineapple juice"
  },
  {
    id: "drink-virgin-mojito",
    name: "VIRGIN MOJITO",
    category: "Mocktails",
    price: 7000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chapman,
    description: "Muddled fragrant mint leaves, fresh lime juice, cane sugar, and chilled soda"
  },

  // FRESH JUICES
  {
    id: "juice-mixed-fruit",
    name: "Mixed Fruit Juice",
    category: "Fresh Juices",
    price: 8000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chapman,
    description: "Pure pressed seasonal fruit extract with zero added sugar"
  },
  {
    id: "juice-mixed-fruit-smoothie",
    name: "Mixed Fruit Juice Smoothie",
    category: "Fresh Juices",
    price: 9000,
    isVeg: true,
    isChefSpecial: true,
    image: IMAGES.chapman,
    description: "Rich and luscious fruit smoothie blended with real tropical fruits and ice"
  },
  {
    id: "juice-watermelon",
    name: "WaterMelon Juice",
    category: "Fresh Juices",
    price: 8000,
    isVeg: true,
    isChefSpecial: false,
    image: IMAGES.chapman,
    description: "Sweet, cooling, cold-pressed Nigerian watermelon juice served iced"
  }
];
