
export interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export interface MenuItemSource {
    name: { en: string; ar: string };
    price: string;
    description: { en: string; ar: string };
}

export interface MenuCategorySource {
  category: {
    en: string;
    ar: string;
  };
  items: MenuItemSource[];
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuDataSource: MenuCategorySource[] = [
  { category: { en: "Cheese Pizza", ar: "بيتزا جبن" }, items: [
    { name: { en: "Margherita", ar: "مارجريتا" }, price: "165.00", description: { en: "Red sauce - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Quattro Formaggi", ar: "كواترو فورماجي" }, price: "230.00", description: { en: "White sauce - blue cheese - scamorza - mozzarella - parmesan - oregano - basil - olive oil", ar: "وايت صوص - بلو تشيز - سكانمورزا - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Burrata", ar: "بوراتا" }, price: "225.00", description: { en: "Red sauce - burrata cheese - olives - pomegranate (seasonal) - arugula - honey - walnuts - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - جبنة بوراتا - زيتون - رمان (موسمى) - جرجير إيطالي - عسل نحل - عين جمل - موتزاريلا جبنة بارميزان - زعتر - ريحان - زيت زيتون" } }
  ]},
  { category: { en: "Vegetable Pizza", ar: "بيتزا خضروات" }, items: [
    { name: { en: "Marinara", ar: "مارينارا" }, price: "140.00", description: { en: "Red sauce - garlic - parmesan - oregano - basil - olive oil", ar: "ريد صوص - ثوم - بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Vegan", ar: "فيجن" }, price: "175.00", description: { en: "Red sauce - caramelized onion - bell peppers - mushroom - eggplant - jalapeño - sweet corn - oregano - basil - olive oil", ar: "ريد صوص - بصل مكرمل - فلفل ألوان - مشروم - باذنجان هالبينو - ذرة حلوة - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Mushroom", ar: "مشروم" }, price: "185.00", description: { en: "Red sauce - mushroom - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - مشروم - موتزاريلا - بارميزان - زعتر - ريحان - زيت زيتون" } }
  ]},
  { category: { en: "Chicken Pizza", ar: "بيتزا دجاج" }, items: [
    { name: { en: "Crispy Chicken", ar: "تشيكن كرسبي" }, price: "225.00", description: { en: "White sauce - fried chicken - olives - mozzarella - parmesan - oregano - basil - olive oil", ar: "وايت صوص - دجاج مقلي - زيتون - موتزاريلا - بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Grilled Chicken", ar: "جريلد تشيكن" }, price: "225.00", description: { en: "White sauce - grilled chicken - mushroom - mozzarella - parmesan - oregano - basil - olive oil", ar: "وايت صوص - دجاج مشوي - مشروم - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Shish Tawook", ar: "شيش طاووق" }, price: "245.00", description: { en: "White sauce - shish tawook pieces - onion rings - mozzarella - parmesan - oregano - basil - olive oil", ar: "وايت صوص - قطع شيش طاووق - حلقات بصل - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } }
  ]},
  { category: { en: "Beef Pizza", ar: "بيتزا لحم" }, items: [
    { name: { en: "Mescolare la Carne", ar: "ميسكولارا لا كارني" }, price: "245.00", description: { en: "Red sauce - salami - sausage - mushroom - caramelized onion - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - سلامي - سجق - مشروم - بصل مكرمل - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Cattivo", ar: "كاتيفو" }, price: "225.00", description: { en: "Red sauce - salami - jalapeño - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - سلامي - هالبينو موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Carnica", ar: "كارنسيكا" }, price: "200.00", description: { en: "Red sauce - pastrami - cherry tomatoes - arugula - olives - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - بسطرمة - طماطم شيري - جرجير إيطالي - زيتون - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Salsiccia Con Verde", ar: "سالسيشيا كونفيردي" }, price: "220.00", description: { en: "Red sauce - sausage - jalapeño - bell peppers - olives - pomegranate (seasonal) - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - سجق - هالبينو - فلفل ألوان - زيتون - رمان (موسمى) - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Minced Meat", ar: "مينست ميت" }, price: "245.00", description: { en: "Red sauce - minced meat - onion - olives - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - لحم مفروم - بصل - زيتون موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } }
  ]},
  { category: { en: "Seafood Pizza", ar: "بيتزا مأكولات بحرية" }, items: [
    { name: { en: "Grilled Shrimp", ar: "جمبري مشوي" }, price: "300.00", description: { en: "Your choice of sauce - grilled shrimp - mushroom - mozzarella - parmesan - oregano - basil - olive oil", ar: "صوص من اختيارك - جمبري مشوي - مشروم - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Crispy Shrimp", ar: "جمبري كرسبي" }, price: "300.00", description: { en: "Your choice of sauce - fried shrimp - olives - mozzarella - parmesan - oregano - basil - olive oil", ar: "صوص من اختيارك - جمبري فرايد - زيتون - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Shrimp a la Pesto", ar: "جمبري لابيستو" }, price: "320.00", description: { en: "Grilled shrimp - pesto sauce - mozzarella - parmesan - oregano - basil - olive oil", ar: "جمبري مشوى - صوص بيستو - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Mondo Marino", ar: "موندو مارينو" }, price: "285.00", description: { en: "Your choice of sauce - grilled shrimp - calamari - mussels - crab sticks - mushroom - mozzarella - parmesan - oregano - basil - olive oil", ar: "صوص من اختيارك - جمبري مشوي - كاليماري - بلح بحر - أصابع كابوريا مشروم - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Tuna", ar: "تونه" }, price: "255.00", description: { en: "Red sauce - tuna chunks - onion rings - sweet corn - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - تونة قطع - حلقات بصل - ذرة حلوة - موتزاريلا - جبنة بارميزan - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Salmon", ar: "سالمون" }, price: "270.00", description: { en: "Your choice of sauce - salmon pieces - olives - arugula - lemon - mozzarella - parmesan - oregano - basil - olive oil", ar: "صوص من اختيارك - قطع سالمون - زيتون - جرجير إيطالي ليمون - موتزاريلا - جبنة بارميزان - زعتر - ريحان - زيت زيتون" } },
    { name: { en: "Anchovy", ar: "أنشوجه" }, price: "299.00", description: { en: "Red sauce - anchovy pieces - cherry tomatoes - bell peppers - mozzarella - parmesan - oregano - basil - olive oil", ar: "ريد صوص - قطع أنشوجه - طماطم شيري - فلفل ألوان - موتزاريلا جبنة بارميزان - زعتر - ريحان - زيت زيتون" } }
  ]},
  { category: { en: "Desserts", ar: "الحلويات" }, items: [
    { name: { en: "Classic Nutella Pizza", ar: "بيتزا نوتيلا كلاسيك" }, price: "199.00", description: { en: "Nutella - mascarpone", ar: "نوتيلا - ماسكاربوني" } },
    { name: { en: "Add Nuts", ar: "إضافة مكسرات" }, price: "50.00", description: { en: "", ar: "" } },
    { name: { en: "Add Fruits", ar: "إضافة فواكه" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Add Honey", ar: "إضافة عسل" }, price: "25.00", description: { en: "", ar: "" } }
  ]},
  { category: { en: "Pizza Sandwiches", ar: "ساندويتشات البيتزا" }, items: [
    { name: { en: "Grilled Steak", ar: "ستيك مشوي" }, price: "220.00", description: { en: "Grilled fillet steak pieces - mozzarella - arugula - onion - mushroom - cheddar cheese", ar: "قطع ستيك فيليه مشوي - موتزاريلا - جرجير إيطالي - بصل - مشروم - جبنة شيدر" } },
    { name: { en: "Chicken Pesto", ar: "تشيكن بيستو" }, price: "240.00", description: { en: "Crispy chicken - mozzarella - American cheese - pesto sauce - olive oil", ar: "دجاج كرسبي - موتزاريلا - أمريكان شيز - صلصة بيستو - زيت زيتون" } },
    { name: { en: "Shish Tawook", ar: "شيش طاووق" }, price: "220.00", description: { en: "Grilled chicken pieces - onion - bell peppers - mozzarella - olive oil", ar: "قطع دجاج مشوي - بصل - فلفل ألوان - موتزاريلا - زيت زيتون" } },
    { name: { en: "Vegan Cheese", ar: "فيجن شيز" }, price: "185.00", description: { en: "Pesto sauce - mozzarella - onion rings - avocado - arugula - olive oil", ar: "صلصة بيستو - موتزاريلا - حلقات بصل - أفوكادو - جرجير إيطالي - زيت زيتون" } }
  ]},
  { category: { en: "Classic Pasta", ar: "باستا كلاسيك" }, items: [
    { name: { en: "Red Sauce", ar: "ريد" }, price: "90.00", description: { en: "Your choice of pasta - red sauce - parmesan cheese", ar: "مكرونة من اختيارك - صوص ريد - جبنة بارميزان" } },
    { name: { en: "White Sauce", ar: "وايت" }, price: "115.00", description: { en: "Your choice of pasta - white sauce - parmesan cheese", ar: "مكرونة من اختيارك - صوص وايت - جبنة بارميزان" } },
    { name: { en: "Brown Sauce", ar: "براون" }, price: "120.00", description: { en: "Your choice of pasta - brown sauce - parmesan cheese", ar: "مكرونة من اختيارك - صوص براون - جبنة بارميزان" } },
    { name: { en: "Pink Sauce", ar: "بينك" }, price: "95.00", description: { en: "Your choice of pasta - pink sauce - parmesan cheese", ar: "مكرونة من اختيارك - صوص بينك - جبنة بارميزان" } },
    { name: { en: "Pesto", ar: "بيستو" }, price: "165.00", description: { en: "Your choice of pasta - pesto sauce - parmesan cheese", ar: "مكرونة من اختيارك - صوص بيستو - جبنة بارميزان" } },
    { name: { en: "Arrabbiata", ar: "أرابياتا" }, price: "115.00", description: { en: "Penne pasta - marinara sauce - parmesan cheese - vegetables", ar: "مكرونة بينا - صوص مارينارا - جبنة بارميزان - خضروات" } },
    { name: { en: "Mac Elbow", ar: "ماك البو" }, price: "199.00", description: { en: "Elbow pasta - mac sauce - parmesan cheese", ar: "مكرونة البو - صوص ماك - جبنة بارميزان" } },
    { name: { en: "Quattro", ar: "كواترو" }, price: "210.00", description: { en: "Fettuccine pasta - mozzarella - yellow cheddar - red cheddar - Roquefort cheese - parmesan - American cheddar", ar: "مكرونة فيتوتشيني - موتزاريلا - شيدر أصفر - شيدر أحمر جبنة ريكفورد - جبنة بارميزان - أمريكان شيدر" } }
  ]},
  { category: { en: "Chicken Pasta", ar: "باستا دجاج" }, items: [
    { name: { en: "Negresco", ar: "نجرسكو" }, price: "220.00", description: { en: "Fettuccine pasta - grilled chicken - negresco sauce - mozzarella - parmesan", ar: "مكرونة فوتوتشيني - جريلد تشيكن - صوص نجرسكو - جبنة موتزاريلا - جبنة بارميزان" } },
    { name: { en: "Alfredo", ar: "ألفريدو" }, price: "195.00", description: { en: "Fettuccine pasta - grilled chicken - alfredo sauce - mushroom - parmesan", ar: "مكرونة فوتوتشيني - جريلد تشيكن - صوص ألفريدو - مشروم - جبنة بارميزان" } },
    { name: { en: "Cordon Bleu", ar: "كوردون بلو" }, price: "180.00", description: { en: "Your choice of pasta - cordon bleu fingers - parmesan", ar: "مكرونة من اختيارك - أصابع كوردون بلو - جبنة بارميزان" } },
    { name: { en: "Crispy Chicken", ar: "تشيكن كريسبي" }, price: "180.00", description: { en: "Your choice of pasta - crispy chicken pieces - parmesan", ar: "مكرونة من اختيارك - قطع دجاج كريسبي - جبنة بارميزان" } },
    { name: { en: "Shish Tawook", ar: "شيش طاووق" }, price: "175.00", description: { en: "Your choice of pasta - shish chicken pieces - parmesan", ar: "مكرونة من اختيارك - قطع دجاج شيش - جبنة بارميزان" } },
    { name: { en: "Chicken Mac", ar: "تشيكن ماك" }, price: "235.00", description: { en: "Double elbow pasta - your choice of chicken (grilled - crispy - cordon bleu) - mac sauce - parmesan", ar: "مكرونة دوبل إلبو - دجاج من اختيارك (جريلد - كريسبي كوردون بلو) - صوص الماك - جبنة بارميزان" } },
    { name: { en: "Chicken Ranch", ar: "تشيكن رانش" }, price: "185.00", description: { en: "Penne pasta - white sauce - fried chicken - ranch sauce - parmesan", ar: "مكرونة بينا - صوص وايت - فرايد تشيكن - صوص رانش - جبنة بارميزان" } },
    { name: { en: "Chicken Texas", ar: "تشيكن تكساس" }, price: "185.00", description: { en: "Penne pasta - white sauce - fried chicken - texas sauce - parmesan", ar: "مكرونة بينا - صوص وايت - فرايد تشيكن - صوص تكساس - جبنة بارميزان" } },
    { name: { en: "Spanish", ar: "سبانيش" }, price: "185.00", description: { en: "Fettuccine pasta - spinach sauce - grilled chicken - pepper - mushroom - parmesan", ar: "مكرونة فيتوتشيني - صوص سبانيتشي - جريلد تشيكن - فلفل - مشروم - جبنة بارميزان" } },
    { name: { en: "Carbonara", ar: "كاربونارا" }, price: "235.00", description: { en: "Fettuccine pasta - smoked turkey - smoked beef - grilled chicken - sweet corn - parmesan", ar: "مكرونة فيتوتشيني - تركي مدخن - بيف مدخن - جريلد تشيكن - ذرة حلوة - جبنة بارميزان" } },
    { name: { en: "Napoli", ar: "نابولي" }, price: "199.00", description: { en: "Penne pasta - napoli sauce - grilled chicken - mushroom - olive oil - parmesan", ar: "مكرونة بينا - صوص نابولي - جريلد تشيكن - مشروم - زيت زيتون - جبنة بارميزان" } }
  ]},
  { category: { en: "Beef Pasta", ar: "باستا لحم" }, items: [
    { name: { en: "Poivre", ar: "بوافر" }, price: "250.00", description: { en: "Elbow pasta - poivre sauce - beef fillet pieces - parmesan", ar: "مكرونة إلبو - صوص بواقر - قطع بيف فلتو – بارميزان" } },
    { name: { en: "Brown Beef", ar: "براون بيف" }, price: "245.00", description: { en: "Penne pasta - brown sauce - beef fillet pieces - parmesan", ar: "مكرونة بينا - صوص براون - قطع بيف فلتو – بارميزان" } },
    { name: { en: "Lasagna Beef", ar: "لازانيا بيف" }, price: "235.00", description: { en: "Lasagna pasta sheets - minced meat with Italian lasagna sauce - mozzarella - parmesan", ar: "مكرونة لازانيا شرائح - لحم مفروم مع صوص اللازانيا الإيطالي - موتزاريلا – بارميزان" } },
    { name: { en: "Bolognese", ar: "بولونيز" }, price: "140.00", description: { en: "Penne pasta - marinara sauce - vegetables - parmesan", ar: "مكرونة بينا - صوص مارينارا - خضروات - بارميزان" } },
    { name: { en: "Burger Pasta", ar: "برجر باستا" }, price: "185.00", description: { en: "Penne pasta - your choice of sauce - beef burger patty - parmesan", ar: "مكرونة بينا - صوص من اختيارك - قطعة بيف برجر – بارميزان" } }
  ]},
  { category: { en: "Seafood Pasta", ar: "باستا مأكولات بحرية" }, items: [
    { name: { en: "Shrimp Pasta", ar: "باستا جمبري" }, price: "250.00", description: { en: "Penne pasta - your choice of sauce - large shrimp (grilled or fried) - parmesan", ar: "مكرونة بينا - صوص من اختيارك - جمبري كبير \"جريلد أو مشوي\" - بارميزان" } },
    { name: { en: "Seafood Pasta", ar: "سي فود باستا" }, price: "245.00", description: { en: "Penne pasta - your choice of sauce - large grilled shrimp - crab sticks - calamari - parmesan", ar: "مكرونة بينا - صوص من اختيارك - جمبري كبير مشوي - أصابع كابوريا - كاليماري - بارميزان" } }
  ]},
  { category: { en: "Chicken Sandwiches", ar: "ساندويتشات دجاج" }, items: [
    { name: { en: "Grilled Chicken", ar: "جريلد تشيكن" }, price: "120.00", description: { en: "Grilled chicken slices - lettuce - mayonnaise - cucumber - tomato", ar: "شرائح الدجاج المشوي - خس - مايونيز - خيار – طماطم" } },
    { name: { en: "Fajita", ar: "فاهيتا" }, price: "155.00", description: { en: "Served in tortilla bread | Chicken fajita pieces - fajita sauce - vegetables - mixed cheese", ar: "تقدم في عيش تورتيلا | قطع فاهيتا دجاج - صوص فاهيتا - خضروات - ميكس جبن" } },
    { name: { en: "Philadelphia", ar: "فيلادلفيا" }, price: "125.00", description: { en: "Grilled chicken pieces - philadelphia sauce - vegetables - mozzarella", ar: "قطع الدجاج المشوي - صوص فيلادلفيا - خضروات – موتزاريلا" } },
    { name: { en: "Shish Tawook", ar: "شيش طاووق" }, price: "110.00", description: { en: "Grilled shish pieces - lettuce - mayonnaise", ar: "قطع الشيش المشوي - خس – مايونيز" } },
    { name: { en: "Cordon Bleu", ar: "كوردون بلو" }, price: "170.00", description: { en: "Cordon bleu fingers - lettuce - tomato - pickles - cheese sauce", ar: "أصابع كوردون بلو - خس - طماطم - خيار مخلل - صوص جبنة" } },
    { name: { en: "Crispy Chicken", ar: "تشيكن كرسبي" }, price: "99.00", description: { en: "Fried chicken pieces - lettuce - tomato - pickles - mayonnaise", ar: "قطع الدجاج المقلية - خس - طماطم - خيار مخلل – مايونيز" } },
    { name: { en: "Texas", ar: "تكساس" }, price: "115.00", description: { en: "Grilled chicken slices - texas sauce - lettuce - mayonnaise - cucumber - tomato", ar: "شرائح الدجاج المشوي - صوص تكساس - خس - مايونيز - خيار – طماطم" } },
    { name: { en: "Chicken Ranch", ar: "تشيكن رانش" }, price: "115.00", description: { en: "Grilled chicken slices - ranch sauce - lettuce - mayonnaise - cucumber - tomato", ar: "شرائح الدجاج المشوي - صوص رانش - خس - مايونيز - خيار – طماطم" } },
    { name: { en: "Chicken Cheese Mushroom", ar: "تشيكن شيز مشروم" }, price: "140.00", description: { en: "Grilled chicken slices - mushroom - mozzarella - cheese sauce", ar: "شرائح الدجاج المشوي - مشروم - موتزاريلا - صوص جبنة" } }
  ]},
  { category: { en: "Beef Sandwiches", ar: "ساندويتشات لحم" }, items: [
    { name: { en: "Grilled Steak", ar: "ستيك مشوي" }, price: "195.00", description: { en: "Grilled beef fillet pieces - texas sauce - lettuce - mushroom - pickles - onion", ar: "قطع بيف فيليه مشوي - صوص تكساس - خس - مشروم - خيار مخلل – بصل" } },
    { name: { en: "Beef Fajita", ar: "بيف فاهيتا" }, price: "230.00", description: { en: "Served in tortilla bread | Grilled beef pieces - fajita sauce - vegetables - mixed cheese", ar: "تقدم في عيش تورتيلا | قطع بيف مشوي - صوص فاهيتا - خضروات - ميكس جبن" } }
  ]},
  { category: { en: "Seafood Sandwiches", ar: "ساندويتشات مأكولات بحرية" }, items: [
    { name: { en: "Shrimp", ar: "جمبري" }, price: "220.00", description: { en: "Fried or grilled | Large shrimp - seafood sauce - tartar sauce - pickles - lettuce", ar: "مقلي أو مشوي | جمبري كبير - صوص سي فود - صوص تارتار - خيار مخلل – خس" } },
    { name: { en: "Seafood", ar: "سي فود" }, price: "230.00", description: { en: "Large grilled shrimp - calamari - crab sticks - tartar sauce - pickles - lettuce", ar: "جمبري كبير مشوي - كاليماري - أصابع كابوريا - صوص تارتار - خيار مخلل – خس" } }
  ]},
  { category: { en: "American Burgers", ar: "برجر أمريكي" }, items: [
    { name: { en: "Classic Burger", ar: "برجر كلاسيك" }, price: "110.00", description: { en: "Grilled burger patty - lettuce - tomato - mayonnaise - onion - pickles", ar: "قطعة برجر مشوي - خس - طماطم - مايونيز - بصل - خيار مخلل" } },
    { name: { en: "Cheese Burger", ar: "برجر جبنة" }, price: "149.00", description: { en: "Grilled burger patty - cheese slices - cheese sauce - lettuce - tomato - mayonnaise - onion - pickles", ar: "قطعة برجر مشوي - شرائح جبنة - صوص جبنة - خس - طماطم - مايونيز - بصل - خيار مخلل" } },
    { name: { en: "Texas Burger", ar: "برجر تكساس" }, price: "175.00", description: { en: "Grilled burger patty - smoked beef - texas sauce - lettuce - tomato - mayonnaise - onion - pickles", ar: "قطعة برجر مشوي - بيف مدخن - صوص تكساس - خس - طماطم - مايونيز - بصل - خيار مخلل" } },
    { name: { en: "Ranch Burger", ar: "برجر رانش" }, price: "175.00", description: { en: "Grilled burger patty - smoked turkey - ranch sauce - lettuce - tomato - mayonnaise - onion - pickles", ar: "قطعة برجر مشوي - تركي مدخن - صوص رانش - خس - طماطم - مايونيز - بصل - خيار مخلل" } },
    { name: { en: "Onion Burger", ar: "أونيون برجر" }, price: "160.00", description: { en: "Grilled burger patty - onion rings - mushroom - lettuce - tomato - mayonnaise - pickles", ar: "قطعة برجر مشوي - حلقات بصل - مشروم - خس - طماطم - مايونيز - خيار مخلل" } },
    { name: { en: "Mozzarella Burger", ar: "برجر موتزاريلا" }, price: "135.00", description: { en: "Grilled burger patty - mozzarella sticks - tomato - lettuce - onion - pickles", ar: "قطعة برجر مشوي - أصابع موتزاريلا - طماطم - خس - بصل - خيار مخلل" } },
    { name: { en: "Hickory Burger", ar: "هيكوري برجر" }, price: "160.00", description: { en: "Grilled burger patty - barbecue sauce - salami - cheese slices - lettuce - tomato - mayonnaise - onion - pickles", ar: "قطعة برجر مشوي - صوص باربيكيو - سلامي - جبنة شرائح - خس - طماطم-مايونيز - بصل - مايونيز - خيار مخلل" } },
    { name: { en: "Chili Burger", ar: "برجر شيلي" }, price: "115.00", description: { en: "Grilled burger patty - jalapeño - chili sauce - tomato - mayonnaise - onion - lettuce - pickles", ar: "قطعة برجر مشوي - هاليبينو - صوص شيلي - طماطم - مايونيز - بصل - خس - خيار مخلل" } }
  ]},
  { category: { en: "Smash Burgers", ar: "سماش برجر" }, items: [
    { name: { en: "Classic Smash Burger", ar: "كلاسيك سماش برجر" }, price: "120.00", description: { en: "2 grilled burger patties - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Cheese Smash Burger", ar: "شيز سماش برجر" }, price: "135.00", description: { en: "2 grilled burger patties - cheese slices - cheese sauce - caramelized onion - lettuce - tomato - mayonnaise - onion - pickles", ar: "2 قطعة برجر مشوي - شرائح جبنة - صوص جبنة - بصل مكرمل - خس - طماطم - مايونيز - بصل - خيار مخلل" } },
    { name: { en: "Smash Texas Burger", ar: "سماش تكساس برجر" }, price: "175.00", description: { en: "2 grilled burger patties - smoked beef - texas sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - بيف مدخن - صوص تكساس - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Smash Ranch Burger", ar: "سماش رانش برجر" }, price: "175.00", description: { en: "2 grilled burger patties - smoked turkey - ranch sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - تركي مدخن - صوص رانش - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Onion Smash Burger", ar: "أونيون سماش برجر" }, price: "155.00", description: { en: "2 grilled burger patties - onion rings - mushroom - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - حلقات بصل - مشروم - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Smash Mozzarella Burger", ar: "سماش موتزاريلا برجر" }, price: "135.00", description: { en: "2 grilled burger patties - mozzarella sticks - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - أصابع موتزاريلا - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Hickory Smash Burger", ar: "هيكورى سماش برجر" }, price: "130.00", description: { en: "2 grilled burger patties - salami - barbecue sauce - cheese slices - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - سلامي - صوص باربيكيو - شرائح جبنة - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Smash Chili Burger", ar: "سماش شيلي برجر" }, price: "125.00", description: { en: "2 grilled burger patties - jalapeño - chili sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - هالبينو - صوص شيلي - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Smash Scallopini", ar: "سماش سكالوبيني" }, price: "185.00", description: { en: "2 grilled burger patties - salami - cream - scallopini sauce - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "2 قطعة برجر مشوي - سلامي - كريمة - صوص سكالوبيني - بصل مكرمل - مايونيز - خس - طماطم - خيار مخلل" } },
    { name: { en: "Triple Smash Burger", ar: "برجر سماش تريبل" }, price: "210.00", description: { en: "3 grilled burger patties - cheese slices - cheese sauce - smoked beef - smoked turkey - caramelized onion - mayonnaise - lettuce - tomato - pickles", ar: "3 قطع برجر مشوي - جبنة شرائح - صوص جبنة - بيف مدخن - تركي مدخن - بصل مكرمل - مايونيز خس - طماطم - خيار مخلل" } }
  ]},
  { category: { en: "Appetizers", ar: "المقبلات" }, items: [
    { name: { en: "Wedges", ar: "ويدجز" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Onion Rings", ar: "أونيون رينج" }, price: "49.00", description: { en: "", ar: "" } },
    { name: { en: "Mozzarella Sticks", ar: "موتزاريلا ستيك" }, price: "55.00", description: { en: "", ar: "" } },
    { name: { en: "Strips", ar: "ستربس" }, price: "120.00", description: { en: "", ar: "" } },
    { name: { en: "Crinkle Fries", ar: "كرينكل" }, price: "49.00", description: { en: "", ar: "" } }
  ]},
  { category: { en: "Salads", ar: "السلطات" }, items: [
    { name: { en: "Caesar Salad", ar: "سيزر سالاد" }, price: "185.00", description: { en: "Lettuce - caesar sauce - grilled chicken - parmesan", ar: "خس كابوتشا - صوص سيزر - جريلد شيكن - جبنة بارميزان" } },
    { name: { en: "Greek Salad", ar: "جريك سالاد" }, price: "99.00", description: { en: "Lettuce - cucumber - tomato - feta cheese - olive oil - sliced olives - onion rings - oregano - parmesan", ar: "خس كابوتشا - خيار - طماطم - جبنة فيتا - زيت زيتون - زيتون شرائح - حلقات بصل - زعتر - جبنة بارميزان" } },
    { name: { en: "Coleslaw", ar: "كول سلو" }, price: "30.00", description: { en: "Cabbage - carrots - mayonnaise - honey", ar: "كرنب - جزر - مايونيز - عسل نحل" } },
    { name: { en: "Tuna Pasta Salad", ar: "تونة باستا سالاد" }, price: "160.00", description: { en: "Tuna chunks - elbow pasta - pepper - onion - lemon - sliced olives", ar: "تونة قطع - مكرونة إلبو - فلفل - بصل - ليمون - زيتون شرائح" } }
  ]},
  { category: { en: "Extras", ar: "الإضافات" }, items: [
    { name: { en: "Mushroom", ar: "مشروم" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Smoked Turkey", ar: "تركي مدخن" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Sliced Olives", ar: "زيتون شرائح" }, price: "15.00", description: { en: "", ar: "" } },
    { name: { en: "Sausage", ar: "سجق" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "American Cheddar", ar: "أمريكان شيدر" }, price: "20.00", description: { en: "", ar: "" } },
    { name: { en: "Pastrami", ar: "بسطرمة" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Cheddar Sauce", ar: "صوص شيدر" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Smoked Beef", ar: "بيف مدخن" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Pesto Sauce", ar: "صوص بيستو" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Beef Fillet Pieces", ar: "قطع بيف فيليه" }, price: "60.00", description: { en: "", ar: "" } },
    { name: { en: "Caesar Sauce", ar: "صوص سيزر" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Salami", ar: "سلامي" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Barbecue Sauce", ar: "صوص باربيكيو" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Tartar Sauce", ar: "صوص تارتار" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Ranch Sauce", ar: "صوص رانش" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Roquefort Cheese", ar: "جبنة ريكفورد" }, price: "30.00", description: { en: "", ar: "" } },
    { name: { en: "Mayonnaise", ar: "مايونيز" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Mozzarella Cheese", ar: "جبنة موتزاريلا" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Texas Sauce", ar: "صوص تكساس" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Parmesan Cheese", ar: "جبنة بارميزان" }, price: "40.00", description: { en: "", ar: "" } },
    { name: { en: "Jalapeño", ar: "هاليبينو" }, price: "15.00", description: { en: "", ar: "" } }
  ]},
  { category: { en: "Drinks", ar: "المشروبات" }, items: [
    { name: { en: "Small Mineral Water", ar: "مياه معدنية صغيره" }, price: "10.00", description: { en: "", ar: "" } },
    { name: { en: "Pepsi", ar: "بيبسي" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "7 Up", ar: "سفن اب" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Mirinda", ar: "ميرندا" }, price: "25.00", description: { en: "", ar: "" } },
    { name: { en: "Red Bull", ar: "ريدبول" }, price: "65.00", description: { en: "", ar: "" } }
  ]}
];

export const getMenuDataForLang = (lang: 'en' | 'ar'): MenuCategory[] => {
  return menuDataSource.map(cat => ({
    category: cat.category[lang],
    items: cat.items.map(item => ({
        name: item.name[lang],
        price: item.price,
        description: item.description[lang]
    }))
  }));
};
