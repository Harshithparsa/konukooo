
import type { Product, Order, ProductReview } from './types';
import { PlaceHolderImages } from './placeholder-images';

const reviews: { [productId: string]: ProductReview[] } = {
  '1': [
    { id: 'rev1', author: 'Alex Morgan', rating: 5, date: '2024-07-15', comment: 'Absolutely love this wallet. The leather is high quality and it has a very slim profile. Fits all my cards perfectly!', avatar: 'https://i.pravatar.cc/150?u=alex' },
    { id: 'rev2', author: 'Casey Jordan', rating: 4, date: '2024-07-10', comment: 'Great wallet, very stylish. I just wish it had a dedicated coin pocket, but overall it\'s fantastic.', avatar: 'https://i.pravatar.cc/150?u=casey' },
  ],
  '2': [
    { id: 'rev3', author: 'Sam Taylor', rating: 5, date: '2024-07-20', comment: 'The noise cancellation is top-notch! I can finally focus at my noisy office. The sound quality is crisp and the battery lasts forever.', avatar: 'https://i.pravatar.cc/150?u=sam' },
    { id: 'rev4', author: 'Riley Green', rating: 4, date: '2024-07-18', comment: 'Very comfortable for long listening sessions. Connection is stable. The app could be a bit more intuitive, though.', avatar: 'https://i.pravatar.cc/150?u=riley' },
  ],
  '3': [
      { id: 'rev5', author: 'John Doe', rating: 5, date: '2024-06-20', comment: 'Elegant and classy. I get compliments on it all the time. Looks much more expensive than it is!', avatar: 'https://i.pravatar.cc/150?u=john' },
  ]
};

const products: Product[] = [
  // Fashion (20)
  {
    id: '1',
    name: 'Slim Leather Wallet',
    description: 'A finely crafted leather wallet with multiple compartments for cards and cash. Its sleek design fits comfortably in any pocket, combining style with practicality. Made from genuine full-grain leather for durability.',
    price: 499.0,
    imageUrl: PlaceHolderImages[0].imageUrl,
    imageHint: PlaceHolderImages[0].imageHint,
    stock: 25,
    category: 'Fashion',
    subCategory: 'Accessories',
    rating: 4.5,
    reviewCount: 2,
    reviews: reviews['1'] || [],
  },
  {
    id: '3',
    name: 'Classic Steel Watch',
    description: 'A timeless timepiece featuring a stainless steel band and a minimalist watch face. Water-resistant and built to last, this watch adds a touch of elegance to any outfit, from casual to formal.',
    price: 1599.0,
    imageUrl: PlaceHolderImages[2].imageUrl,
    imageHint: PlaceHolderImages[2].imageHint,
    stock: 30,
    category: 'Fashion',
    subCategory: 'Accessories',
    rating: 5,
    reviewCount: 1,
    reviews: reviews['3'] || [],
  },
  {
    id: '4',
    name: 'Crew-Neck Cotton T-Shirt',
    description: 'A soft and breathable 100% cotton t-shirt. This versatile wardrobe staple offers a comfortable fit for everyday wear. Available in various colors to suit your style. Easy to care for and durable.',
    price: 399.0,
    imageUrl: PlaceHolderImages[3].imageUrl,
    imageHint: PlaceHolderImages[3].imageHint,
    stock: 100,
    category: 'Fashion',
    subCategory: 'Apparel',
    rating: 4.2,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '7',
    name: 'Aviator Sunglasses',
    description: 'Protect your eyes in style with these trendy sunglasses. They offer 100% UV protection and feature a lightweight frame for all-day comfort. Comes with a protective case and cleaning cloth.',
    price: 699.0,
    imageUrl: PlaceHolderImages[6].imageUrl,
    imageHint: PlaceHolderImages[6].imageHint,
    stock: 40,
    category: 'Fashion',
    subCategory: 'Accessories',
    rating: 4.4,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '17',
    name: 'Classic Denim Jacket',
    description: 'A classic denim jacket that never goes out of style. Made from premium denim, it\'s the perfect layering piece for any season.',
    price: 1899.0,
    imageUrl: PlaceHolderImages[16].imageUrl,
    imageHint: PlaceHolderImages[16].imageHint,
    stock: 35,
    category: 'Fashion',
    subCategory: 'Apparel',
    rating: 4.6,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '23',
    name: 'Running Shoes',
    description: 'Lightweight and breathable running shoes designed for performance and comfort. The cushioned sole provides excellent shock absorption.',
    price: 2999.0,
    imageUrl: PlaceHolderImages[22].imageUrl,
    imageHint: PlaceHolderImages[22].imageHint,
    stock: 45,
    category: 'Fashion',
    subCategory: 'Footwear',
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '29',
    name: 'Leather Handbag',
    description: 'A stylish and spacious leather handbag that complements any outfit. Features multiple pockets to keep your essentials organized.',
    price: 2499.0,
    imageUrl: PlaceHolderImages[28].imageUrl,
    imageHint: PlaceHolderImages[28].imageHint,
    stock: 25,
    category: 'Fashion',
    subCategory: 'Handbags',
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'F1', name: 'Polo Shirt', description: 'A classic polo shirt made from pique cotton. A versatile addition to any man\'s wardrobe.', price: 799, imageUrl: 'https://picsum.photos/seed/F1/600/400', imageHint: 'polo shirt', stock: 50, category: 'Fashion', subCategory: 'Apparel', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'F2', name: 'Chino Trousers', description: 'Comfortable and stylish chino trousers for a smart-casual look.', price: 1299, imageUrl: 'https://picsum.photos/seed/F2/600/400', imageHint: 'chino trousers', stock: 40, category: 'Fashion', subCategory: 'Apparel', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'F3', name: 'Leather Belt', description: 'A genuine leather belt with a classic buckle.', price: 599, imageUrl: 'https://picsum.photos/seed/F3/600/400', imageHint: 'leather belt', stock: 60, category: 'Fashion', subCategory: 'Accessories', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'F4', name: 'Canvas Sneakers', description: 'Casual canvas sneakers perfect for everyday wear.', price: 999, imageUrl: 'https://picsum.photos/seed/F4/600/400', imageHint: 'canvas sneakers', stock: 80, category: 'Fashion', subCategory: 'Footwear', rating: 4.4, reviewCount: 0, reviews: []
  },
  {
    id: 'F5', name: 'Summer Dress', description: 'A light and airy floral summer dress.', price: 1499, imageUrl: 'https://picsum.photos/seed/F5/600/400', imageHint: 'summer dress', stock: 30, category: 'Fashion', subCategory: 'Apparel', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'F6', name: 'Formal Shirt', description: 'A crisp white formal shirt for professional settings.', price: 1199, imageUrl: 'https://picsum.photos/seed/F6/600/400', imageHint: 'formal shirt', stock: 50, category: 'Fashion', subCategory: 'Apparel', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'F7', name: 'Woolen Scarf', description: 'A soft woolen scarf to keep you warm in winter.', price: 499, imageUrl: 'https://picsum.photos/seed/F7/600/400', imageHint: 'woolen scarf', stock: 70, category: 'Fashion', subCategory: 'Accessories', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'F8', name: 'Leather Loafers', description: 'Elegant leather loafers for a sophisticated look.', price: 1999, imageUrl: 'https://picsum.photos/seed/F8/600/400', imageHint: 'leather loafers', stock: 25, category: 'Fashion', subCategory: 'Footwear', rating: 4.8, reviewCount: 0, reviews: []
  },
   {
    id: 'F9', name: 'Tote Bag', description: 'A large and stylish tote bag, perfect for carrying your essentials.', price: 1399, imageUrl: 'https://picsum.photos/seed/F9/600/400', imageHint: 'tote bag', stock: 40, category: 'Fashion', subCategory: 'Handbags', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'F10', name: 'Beanie Hat', description: 'A cozy beanie hat for cold weather.', price: 349, imageUrl: 'https://picsum.photos/seed/F10/600/400', imageHint: 'beanie hat', stock: 90, category: 'Fashion', subCategory: 'Accessories', rating: 4.5, reviewCount: 0, reviews: []
  },
  { id: 'F11', name: 'Silk Tie', description: 'A luxurious silk tie for formal occasions.', price: 899, imageUrl: 'https://picsum.photos/seed/F11/600/400', imageHint: 'silk tie', stock: 45, category: 'Fashion', subCategory: 'Accessories', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'F12', name: 'Linen Shirt', description: 'A breathable linen shirt, perfect for summer.', price: 1399, imageUrl: 'https://picsum.photos/seed/F12/600/400', imageHint: 'linen shirt', stock: 35, category: 'Fashion', subCategory: 'Apparel', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'F13', name: 'Crossbody Bag', description: 'A compact and trendy crossbody bag for daily use.', price: 1199, imageUrl: 'https://picsum.photos/seed/F13/600/400', imageHint: 'crossbody bag', stock: 55, category: 'Fashion', subCategory: 'Handbags', rating: 4.6, reviewCount: 0, reviews: [] },

  // Electronics (20)
  {
    id: '2',
    name: 'Noise-Cancelling Headphones',
    description: 'Experience immersive sound with these noise-cancelling wireless headphones. They feature a 20-hour battery life, comfortable over-ear design, and seamless Bluetooth connectivity. Perfect for music lovers and frequent travelers.',
    price: 1999.0,
    imageUrl: PlaceHolderImages[1].imageUrl,
    imageHint: PlaceHolderImages[1].imageHint,
    stock: 15,
    category: 'Electronics',
    subCategory: 'Audio',
    rating: 4.8,
    reviewCount: 2,
    reviews: reviews['2'] || [],
  },
  {
    id: '9',
    name: 'Smart Water Bottle',
    description: 'Stay hydrated with this smart water bottle that tracks your water intake and reminds you to drink. It syncs with a mobile app to help you reach your daily hydration goals. A tech-savvy way to stay healthy.',
    price: 1299.0,
    imageUrl: PlaceHolderImages[8].imageUrl,
    imageHint: PlaceHolderImages[8].imageHint,
    stock: 18,
    category: 'Electronics',
    subCategory: 'Smart Home',
    rating: 4.6,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '16',
    name: 'Smart Speaker Mini',
    description: 'A compact smart speaker with a powerful voice assistant. Play music, set alarms, and control your smart home devices with just your voice.',
    price: 3499.0,
    imageUrl: PlaceHolderImages[15].imageUrl,
    imageHint: PlaceHolderImages[15].imageHint,
    stock: 50,
    category: 'Electronics',
    subCategory: 'Smart Home',
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '20',
    name: 'Gaming Mouse',
    description: 'Gain a competitive edge with this high-precision gaming mouse. Features customizable RGB lighting, programmable buttons, and an ergonomic design for comfort.',
    price: 2499.0,
    imageUrl: PlaceHolderImages[19].imageUrl,
    imageHint: PlaceHolderImages[19].imageHint,
    stock: 30,
    category: 'Electronics',
    subCategory: 'Gaming',
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '21',
    name: 'True Wireless Earbuds',
    description: 'Compact and powerful, these true wireless earbuds offer a premium listening experience without the wires. Comes with a portable charging case.',
    price: 2499.0,
    imageUrl: PlaceHolderImages[20].imageUrl,
    imageHint: PlaceHolderImages[20].imageHint,
    stock: 50,
    category: 'Electronics',
    subCategory: 'Audio',
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '22',
    name: 'DSLR Camera',
    description: 'Capture stunning photos and videos with this professional-grade DSLR camera. Includes an 18-55mm lens to get you started.',
    price: 34999.0,
    imageUrl: PlaceHolderImages[21].imageUrl,
    imageHint: PlaceHolderImages[21].imageHint,
    stock: 15,
    category: 'Electronics',
    subCategory: 'Cameras & Accessories',
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'E1', name: 'Mechanical Keyboard', description: 'A tactile and responsive mechanical keyboard for gaming and typing.', price: 4999, imageUrl: 'https://picsum.photos/seed/E1/600/400', imageHint: 'mechanical keyboard', stock: 25, category: 'Electronics', subCategory: 'Gaming', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'E2', name: 'Portable Power Bank', description: 'A 20000mAh power bank to charge your devices on the go.', price: 1499, imageUrl: 'https://picsum.photos/seed/E2/600/400', imageHint: 'power bank', stock: 100, category: 'Electronics', subCategory: 'Accessories', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'E3', name: 'Webcam 1080p', description: 'A full HD webcam for video conferencing and streaming.', price: 2999, imageUrl: 'https://picsum.photos/seed/E3/600/400', imageHint: 'webcam', stock: 40, category: 'Electronics', subCategory: 'Cameras & Accessories', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'E4', name: 'Smartwatch', description: 'A feature-packed smartwatch with fitness tracking and notifications.', price: 4599, imageUrl: 'https://picsum.photos/seed/E4/600/400', imageHint: 'smartwatch', stock: 30, category: 'Electronics', subCategory: 'Wearables', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'E5', name: 'Bluetooth Speaker', description: 'A portable Bluetooth speaker with rich bass and waterproof design.', price: 1999, imageUrl: 'https://picsum.photos/seed/E5/600/400', imageHint: 'bluetooth speaker', stock: 60, category: 'Electronics', subCategory: 'Audio', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'E6', name: 'External SSD 1TB', description: 'A fast and reliable 1TB external solid-state drive.', price: 7999, imageUrl: 'https://picsum.photos/seed/E6/600/400', imageHint: 'external ssd', stock: 20, category: 'Electronics', subCategory: 'Storage', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'E7', name: 'Gaming Headset', description: 'An immersive gaming headset with a noise-cancelling microphone.', price: 3499, imageUrl: 'https://picsum.photos/seed/E7/600/400', imageHint: 'gaming headset', stock: 35, category: 'Electronics', subCategory: 'Gaming', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'E8', name: 'Smart LED Bulb', description: 'A Wi-Fi enabled smart LED bulb with customizable colors.', price: 899, imageUrl: 'https://picsum.photos/seed/E8/600/400', imageHint: 'smart bulb', stock: 80, category: 'Electronics', subCategory: 'Smart Home', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'E9', name: 'Laptop Stand', description: 'An ergonomic laptop stand to improve your posture.', price: 999, imageUrl: 'https://picsum.photos/seed/E9/600/400', imageHint: 'laptop stand', stock: 50, category: 'Electronics', subCategory: 'Accessories', rating: 4.8, reviewCount: 0, reviews: []
  },
  { id: 'E10', name: 'Fitness Tracker', description: 'A sleek fitness tracker to monitor your daily activity and sleep.', price: 2499, imageUrl: 'https://picsum.photos/seed/E10/600/400', imageHint: 'fitness tracker', stock: 70, category: 'Electronics', subCategory: 'Wearables', rating: 4.6, reviewCount: 0, reviews: [] },
  { id: 'E11', name: 'USB-C Hub', description: 'A multiport USB-C hub with HDMI, USB 3.0, and card reader slots.', price: 1599, imageUrl: 'https://picsum.photos/seed/E11/600/400', imageHint: 'usb-c hub', stock: 60, category: 'Electronics', subCategory: 'Accessories', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'E12', name: 'Wireless Mouse', description: 'An ergonomic wireless mouse for comfortable navigation.', price: 799, imageUrl: 'https://picsum.photos/seed/E12/600/400', imageHint: 'wireless mouse', stock: 90, category: 'Electronics', subCategory: 'Accessories', rating: 4.5, reviewCount: 0, reviews: [] },
  { id: 'E13', name: 'Tripod for Cameras', description: 'A sturdy and adjustable tripod for cameras and smartphones.', price: 1999, imageUrl: 'https://picsum.photos/seed/E13/600/400', imageHint: 'camera tripod', stock: 40, category: 'Electronics', subCategory: 'Cameras & Accessories', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'E14', name: 'Smart Plug', description: 'A smart plug to control any appliance with your voice or phone.', price: 699, imageUrl: 'https://picsum.photos/seed/E14/600/400', imageHint: 'smart plug', stock: 110, category: 'Electronics', subCategory: 'Smart Home', rating: 4.7, reviewCount: 0, reviews: [] },

  // Home & Furniture (20)
  {
    id: '6',
    name: 'Matte Black Coffee Mug',
    description: 'Start your day with this elegant ceramic coffee mug. Its 14oz capacity is perfect for your favorite beverage, and the sturdy handle ensures a comfortable grip. Microwave and dishwasher safe.',
    price: 199.0,
    imageUrl: PlaceHolderImages[5].imageUrl,
    imageHint: PlaceHolderImages[5].imageHint,
    stock: 50,
    category: 'Home & Furniture',
    subCategory: 'Kitchenware',
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '10',
    name: 'LED Desk Lamp',
    description: 'Illuminate your workspace with this sleek, minimalist desk lamp. It offers adjustable brightness levels and a modern design that complements any decor. Energy-efficient LED light for long-lasting performance.',
    price: 599.0,
    imageUrl: PlaceHolderImages[9].imageUrl,
    imageHint: PlaceHolderImages[9].imageHint,
    stock: 22,
    category: 'Home & Furniture',
    subCategory: 'Lighting',
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '19',
    name: 'Memory Foam Pillow',
    description: 'Get a restful night\'s sleep with this ergonomic memory foam pillow. It conforms to your head and neck for personalized support.',
    price: 999.0,
    imageUrl: PlaceHolderImages[18].imageUrl,
    imageHint: PlaceHolderImages[18].imageHint,
    stock: 60,
    category: 'Home & Furniture',
    subCategory: 'Furnishings',
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'H1', name: 'Cotton Bed Sheet Set', description: 'A soft and breathable cotton bed sheet set for a king-size bed.', price: 1999, imageUrl: 'https://picsum.photos/seed/H1/600/400', imageHint: 'bed sheets', stock: 40, category: 'Home & Furniture', subCategory: 'Furnishings', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'H2', name: 'Non-Stick Cookware Set', description: 'A 5-piece non-stick cookware set, perfect for any kitchen.', price: 2999, imageUrl: 'https://picsum.photos/seed/H2/600/400', imageHint: 'cookware set', stock: 30, category: 'Home & Furniture', subCategory: 'Kitchenware', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'H3', name: 'Wall Clock', description: 'A modern and silent wall clock to adorn your living room.', price: 799, imageUrl: 'https://picsum.photos/seed/H3/600/400', imageHint: 'wall clock', stock: 60, category: 'Home & Furniture', subCategory: 'Decor', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'H4', name: 'Bookshelf', description: 'A 5-tier wooden bookshelf for organizing your books.', price: 3499, imageUrl: 'https://picsum.photos/seed/H4/600/400', imageHint: 'bookshelf', stock: 20, category: 'Home & Furniture', subCategory: 'Furniture', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'H5', name: 'Microfiber Towel Set', description: 'A set of 4 quick-drying and absorbent microfiber towels.', price: 999, imageUrl: 'https://picsum.photos/seed/H5/600/400', imageHint: 'towel set', stock: 80, category: 'Home & Furniture', subCategory: 'Furnishings', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'H6', name: 'Aroma Diffuser', description: 'An ultrasonic aroma diffuser to create a relaxing ambiance.', price: 1299, imageUrl: 'https://picsum.photos/seed/H6/600/400', imageHint: 'aroma diffuser', stock: 45, category: 'Home & Furniture', subCategory: 'Decor', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'H7', name: 'Study Desk', description: 'A compact and modern study desk for your home office.', price: 4999, imageUrl: 'https://picsum.photos/seed/H7/600/400', imageHint: 'study desk', stock: 15, category: 'Home & Furniture', subCategory: 'Furniture', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'H8', name: 'Cutlery Set', description: 'A 24-piece stainless steel cutlery set for 6 people.', price: 1599, imageUrl: 'https://picsum.photos/seed/H8/600/400', imageHint: 'cutlery set', stock: 50, category: 'Home & Furniture', subCategory: 'Kitchenware', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'H9', name: 'Indoor Plant Pot', description: 'A stylish ceramic pot for your indoor plants.', price: 499, imageUrl: 'https://picsum.photos/seed/H9/600/400', imageHint: 'plant pot', stock: 70, category: 'Home & Furniture', subCategory: 'Decor', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'H10', name: 'Floor Lamp', description: 'A modern floor lamp providing warm ambient light.', price: 2499, imageUrl: 'https://picsum.photos/seed/H10/600/400', imageHint: 'floor lamp', stock: 25, category: 'Home & Furniture', subCategory: 'Lighting', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'H11', name: 'Bean Bag Chair', description: 'A comfortable and large bean bag chair for your living room.', price: 2999, imageUrl: 'https://picsum.photos/seed/H11/600/400', imageHint: 'bean bag', stock: 30, category: 'Home & Furniture', subCategory: 'Furniture', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'H12', name: 'Door Mat', description: 'A durable and stylish doormat for your entrance.', price: 399, imageUrl: 'https://picsum.photos/seed/H12/600/400', imageHint: 'door mat', stock: 100, category: 'Home & Furniture', subCategory: 'Furnishings', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'H13', name: 'Spice Rack', description: 'A rotating spice rack with 16 jars to organize your spices.', price: 899, imageUrl: 'https://picsum.photos/seed/H13/600/400', imageHint: 'spice rack', stock: 60, category: 'Home & Furniture', subCategory: 'Kitchenware', rating: 4.8, reviewCount: 0, reviews: []
  },
  { id: 'H14', name: 'Throw Blanket', description: 'A cozy and soft throw blanket for your couch or bed.', price: 1299, imageUrl: 'https://picsum.photos/seed/H14/600/400', imageHint: 'throw blanket', stock: 55, category: 'Home & Furniture', subCategory: 'Furnishings', rating: 4.9, reviewCount: 0, reviews: [] },
  { id: 'H15', name: 'Picture Frame Set', description: 'A set of 7 assorted picture frames for a gallery wall.', price: 1499, imageUrl: 'https://picsum.photos/seed/H15/600/400', imageHint: 'picture frames', stock: 45, category: 'Home & Furniture', subCategory: 'Decor', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'H16', name: 'Knife Block Set', description: 'A 12-piece kitchen knife set with a wooden block.', price: 2199, imageUrl: 'https://picsum.photos/seed/H16/600/400', imageHint: 'knife set', stock: 35, category: 'Home & Furniture', subCategory: 'Kitchenware', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'H17', name: 'Shoe Rack', description: 'A 4-tier metal shoe rack to keep your footwear organized.', price: 1299, imageUrl: 'https://picsum.photos/seed/H17/600/400', imageHint: 'shoe rack', stock: 40, category: 'Home & Furniture', subCategory: 'Furniture', rating: 4.6, reviewCount: 0, reviews: [] },

  // Mobiles & Tablets (20)
  {
    id: '15',
    name: 'Smartphone Pro',
    description: 'The latest smartphone with a stunning OLED display, triple-camera system, and all-day battery life. Experience flagship performance in a sleek design.',
    price: 89999.0,
    imageUrl: PlaceHolderImages[14].imageUrl,
    imageHint: PlaceHolderImages[14].imageHint,
    stock: 20,
    category: 'Mobiles & Tablets',
    subCategory: 'Smartphones',
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '25',
    name: 'Smartphone Lite',
    description: 'An affordable smartphone that doesn\'t compromise on features. Enjoy a large display, long battery life, and a capable camera.',
    price: 12999.0,
    imageUrl: PlaceHolderImages[24].imageUrl,
    imageHint: PlaceHolderImages[24].imageHint,
    stock: 60,
    category: 'Mobiles & Tablets',
    subCategory: 'Smartphones',
    rating: 4.5,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '28',
    name: 'Tablet Pro',
    description: 'A powerful tablet for work and play. Features a high-resolution display, fast processor, and supports a stylus for creative tasks.',
    price: 45999.0,
    imageUrl: PlaceHolderImages[27].imageUrl,
    imageHint: PlaceHolderImages[27].imageHint,
    stock: 30,
    category: 'Mobiles & Tablets',
    subCategory: 'Tablets',
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'M1', name: 'Gaming Phone', description: 'A smartphone designed for gaming with a high refresh rate display and shoulder triggers.', price: 34999, imageUrl: 'https://picsum.photos/seed/M1/600/400', imageHint: 'gaming phone', stock: 15, category: 'Mobiles & Tablets', subCategory: 'Smartphones', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'M2', name: 'E-Reader Tablet', description: 'A tablet with an e-ink display, perfect for reading books.', price: 12999, imageUrl: 'https://picsum.photos/seed/M2/600/400', imageHint: 'e-reader', stock: 25, category: 'Mobiles & Tablets', subCategory: 'Tablets', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'M3', name: 'Budget Smartphone', description: 'A reliable smartphone for everyday tasks at an unbeatable price.', price: 7999, imageUrl: 'https://picsum.photos/seed/M3/600/400', imageHint: 'budget smartphone', stock: 100, category: 'Mobiles & Tablets', subCategory: 'Smartphones', rating: 4.3, reviewCount: 0, reviews: []
  },
  {
    id: 'M4', name: 'Kids Tablet', description: 'A durable and kid-friendly tablet with parental controls.', price: 8999, imageUrl: 'https://picsum.photos/seed/M4/600/400', imageHint: 'kids tablet', stock: 40, category: 'Mobiles & Tablets', subCategory: 'Tablets', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'M5', name: 'Camera Phone', description: 'A smartphone with a professional-grade camera system.', price: 64999, imageUrl: 'https://picsum.photos/seed/M5/600/400', imageHint: 'camera phone', stock: 20, category: 'Mobiles & Tablets', subCategory: 'Smartphones', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'M6', name: 'Drawing Tablet', description: 'A graphics tablet for digital artists and designers.', price: 24999, imageUrl: 'https://picsum.photos/seed/M6/600/400', imageHint: 'drawing tablet', stock: 30, category: 'Mobiles & Tablets', subCategory: 'Tablets', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'M7', name: 'Foldable Smartphone', description: 'The latest in smartphone technology, a phone that folds.', price: 129999, imageUrl: 'https://picsum.photos/seed/M7/600/400', imageHint: 'foldable phone', stock: 10, category: 'Mobiles & Tablets', subCategory: 'Smartphones', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'M8', name: 'Large Screen Tablet', description: 'A 12-inch tablet perfect for media consumption and productivity.', price: 34999, imageUrl: 'https://picsum.photos/seed/M8/600/400', imageHint: 'large tablet', stock: 25, category: 'Mobiles & Tablets', subCategory: 'Tablets', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'M9', name: 'Compact Smartphone', description: 'A powerful smartphone that fits comfortably in one hand.', price: 49999, imageUrl: 'https://picsum.photos/seed/M9/600/400', imageHint: 'compact phone', stock: 35, category: 'Mobiles & Tablets', subCategory: 'Smartphones', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'M10', name: 'Rugged Tablet', description: 'A tablet built to withstand drops, dust, and water.', price: 29999, imageUrl: 'https://picsum.photos/seed/M10/600/400', imageHint: 'rugged tablet', stock: 15, category: 'Mobiles & Tablets', subCategory: 'Tablets', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'M11', name: 'Flip Phone (Smart)', description: 'A modern take on the classic flip phone with smart features.', price: 14999, imageUrl: 'https://picsum.photos/seed/M11/600/400', imageHint: 'flip phone', stock: 20, category: 'Mobiles & Tablets', subCategory: 'Smartphones', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'M12', name: '2-in-1 Tablet', description: 'A tablet that comes with a detachable keyboard for laptop-like functionality.', price: 54999, imageUrl: 'https://picsum.photos/seed/M12/600/400', imageHint: 'convertible tablet', stock: 18, category: 'Mobiles & Tablets', subCategory: 'Tablets', rating: 4.7, reviewCount: 0, reviews: []
  },
  { id: 'M13', name: 'Stylus Pen', description: 'A precision stylus pen for tablets and touch screen devices.', price: 2499, imageUrl: 'https://picsum.photos/seed/M13/600/400', imageHint: 'stylus pen', stock: 75, category: 'Mobiles & Tablets', subCategory: 'Accessories', rating: 4.6, reviewCount: 0, reviews: [] },
  { id: 'M14', name: 'Phone Case', description: 'A protective and stylish case for your smartphone.', price: 499, imageUrl: 'https://picsum.photos/seed/M14/600/400', imageHint: 'phone case', stock: 200, category: 'Mobiles & Tablets', subCategory: 'Accessories', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'M15', name: 'Screen Protector', description: 'A tempered glass screen protector to prevent scratches and cracks.', price: 299, imageUrl: 'https://picsum.photos/seed/M15/600/400', imageHint: 'screen protector', stock: 300, category: 'Mobiles & Tablets', subCategory: 'Accessories', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'M16', name: 'Car Phone Mount', description: 'A secure car mount for hands-free navigation.', price: 899, imageUrl: 'https://picsum.photos/seed/M16/600/400', imageHint: 'car mount', stock: 90, category: 'Mobiles & Tablets', subCategory: 'Accessories', rating: 4.5, reviewCount: 0, reviews: [] },
  { id: 'M17', name: 'Tablet Stand', description: 'An adjustable stand for your tablet, perfect for watching movies.', price: 1299, imageUrl: 'https://picsum.photos/seed/M17/600/400', imageHint: 'tablet stand', stock: 65, category: 'Mobiles & Tablets', subCategory: 'Accessories', rating: 4.6, reviewCount: 0, reviews: [] },

  // Sports & Outdoors (20)
  {
    id: '5',
    name: '40L Hiking Backpack',
    description: 'A durable and spacious backpack designed for the great outdoors. Features multiple compartments, a waterproof cover, and ergonomic straps for comfort on long treks. Your reliable companion for any adventure.',
    price: 999.0,
    imageUrl: PlaceHolderImages[4].imageUrl,
    imageHint: PlaceHolderImages[4].imageHint,
    stock: 20,
    category: 'Sports & Outdoors',
    subCategory: 'Outdoor Gear',
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '8',
    name: 'Eco-Friendly Yoga Mat',
    description: 'Enhance your yoga practice with this non-slip, eco-friendly yoga mat. It provides excellent cushioning and stability for all types of yoga and floor exercises. Lightweight and easy to carry.',
    price: 799.0,
    imageUrl: PlaceHolderImages[7].imageUrl,
    imageHint: PlaceHolderImages[7].imageHint,
    stock: 35,
    category: 'Sports & Outdoors',
    subCategory: 'Fitness',
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'SO1', name: 'Cricket Bat', description: 'A professional-grade English Willow cricket bat.', price: 4999, imageUrl: 'https://picsum.photos/seed/SO1/600/400', imageHint: 'cricket bat', stock: 30, category: 'Sports & Outdoors', subCategory: 'Team Sports', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'SO2', name: 'Dumbbell Set', description: 'A pair of 5kg adjustable dumbbells for home workouts.', price: 1499, imageUrl: 'https://picsum.photos/seed/SO2/600/400', imageHint: 'dumbbell set', stock: 50, category: 'Sports & Outdoors', subCategory: 'Fitness', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'SO3', name: 'Camping Tent', description: 'A 2-person waterproof tent for camping and hiking.', price: 2499, imageUrl: 'https://picsum.photos/seed/SO3/600/400', imageHint: 'camping tent', stock: 25, category: 'Sports & Outdoors', subCategory: 'Outdoor Gear', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'SO4', name: 'Football', description: 'A standard size 5 football for matches and practice.', price: 899, imageUrl: 'https://picsum.photos/seed/SO4/600/400', imageHint: 'football', stock: 80, category: 'Sports & Outdoors', subCategory: 'Team Sports', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'SO5', name: 'Jump Rope', description: 'A speed jump rope for cardio and fitness training.', price: 299, imageUrl: 'https://picsum.photos/seed/SO5/600/400', imageHint: 'jump rope', stock: 120, category: 'Sports & Outdoors', subCategory: 'Fitness', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'SO6', name: 'Sleeping Bag', description: 'A comfortable sleeping bag for camping in moderate temperatures.', price: 1799, imageUrl: 'https://picsum.photos/seed/SO6/600/400', imageHint: 'sleeping bag', stock: 35, category: 'Sports & Outdoors', subCategory: 'Outdoor Gear', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'SO7', name: 'Badminton Racket Set', description: 'A set of 2 badminton rackets with shuttlecocks.', price: 1299, imageUrl: 'https://picsum.photos/seed/SO7/600/400', imageHint: 'badminton set', stock: 60, category: 'Sports & Outdoors', subCategory: 'Racquet Sports', rating: 4.4, reviewCount: 0, reviews: []
  },
  {
    id: 'SO8', name: 'Resistance Bands', description: 'A set of 5 resistance bands for strength training.', price: 599, imageUrl: 'https://picsum.photos/seed/SO8/600/400', imageHint: 'resistance bands', stock: 90, category: 'Sports & Outdoors', subCategory: 'Fitness', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'SO9', name: 'Headlamp', description: 'A bright LED headlamp for hiking and camping at night.', price: 799, imageUrl: 'https://picsum.photos/seed/SO9/600/400', imageHint: 'headlamp', stock: 50, category: 'Sports & Outdoors', subCategory: 'Outdoor Gear', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'SO10', name: 'Basketball', description: 'An official size basketball for indoor and outdoor courts.', price: 999, imageUrl: 'https://picsum.photos/seed/SO10/600/400', imageHint: 'basketball', stock: 70, category: 'Sports & Outdoors', subCategory: 'Team Sports', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'SO11', name: 'Foam Roller', description: 'A high-density foam roller for muscle recovery.', price: 699, imageUrl: 'https://picsum.photos/seed/SO11/600/400', imageHint: 'foam roller', stock: 60, category: 'Sports & Outdoors', subCategory: 'Fitness', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'SO12', name: 'Camping Chair', description: 'A foldable and portable chair for camping and outdoor events.', price: 1199, imageUrl: 'https://picsum.photos/seed/SO12/600/400', imageHint: 'camping chair', stock: 40, category: 'Sports & Outdoors', subCategory: 'Outdoor Gear', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'SO13', name: 'Tennis Balls', description: 'A pack of 3 durable tennis balls.', price: 249, imageUrl: 'https://picsum.photos/seed/SO13/600/400', imageHint: 'tennis balls', stock: 150, category: 'Sports & Outdoors', subCategory: 'Racquet Sports', rating: 4.7, reviewCount: 0, reviews: []
  },
  { id: 'SO14', name: 'Trekking Poles', description: 'A pair of adjustable trekking poles for hiking.', price: 1599, imageUrl: 'https://picsum.photos/seed/SO14/600/400', imageHint: 'trekking poles', stock: 45, category: 'Sports & Outdoors', subCategory: 'Outdoor Gear', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'SO15', name: 'Bicycle Helmet', description: 'A safe and stylish helmet for cycling.', price: 1299, imageUrl: 'https://picsum.photos/seed/SO15/600/400', imageHint: 'bicycle helmet', stock: 65, category: 'Sports & Outdoors', subCategory: 'Cycling', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'SO16', name: 'Swim Goggles', description: 'Anti-fog and UV protection swim goggles.', price: 599, imageUrl: 'https://picsum.photos/seed/SO16/600/400', imageHint: 'swim goggles', stock: 85, category: 'Sports & Outdoors', subCategory: 'Swimming', rating: 4.6, reviewCount: 0, reviews: [] },
  { id: 'SO17', name: 'Volleyball', description: 'An official size and weight volleyball for beach or court.', price: 799, imageUrl: 'https://picsum.photos/seed/SO17/600/400', imageHint: 'volleyball', stock: 75, category: 'Sports & Outdoors', subCategory: 'Team Sports', rating: 4.5, reviewCount: 0, reviews: [] },
  { id: 'SO18', name: 'Skateboard', description: 'A complete skateboard for beginners and intermediate riders.', price: 2999, imageUrl: 'https://picsum.photos/seed/SO18/600/400', imageHint: 'skateboard', stock: 30, category: 'Sports & Outdoors', subCategory: 'Skateboarding', rating: 4.7, reviewCount: 0, reviews: [] },

  // TVs & Appliances (20)
  {
    id: '18',
    name: 'Electric Kettle',
    description: 'Boil water in minutes with this stylish and efficient electric kettle. Features automatic shut-off and a 1.7-liter capacity.',
    price: 1199.0,
    imageUrl: PlaceHolderImages[17].imageUrl,
    imageHint: PlaceHolderImages[17].imageHint,
    stock: 40,
    category: 'TVs & Appliances',
    subCategory: 'Appliances',
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '24',
    name: 'Air Purifier',
    description: 'Breathe cleaner air with this HEPA filter air purifier. It effectively removes dust, pollen, and other allergens from your home.',
    price: 8999.0,
    imageUrl: PlaceHolderImages[23].imageUrl,
    imageHint: PlaceHolderImages[23].imageHint,
    stock: 25,
    category: 'TVs & Appliances',
    subCategory: 'Appliances',
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '27',
    name: 'Robot Vacuum Cleaner',
    description: 'Keep your floors clean with this intelligent robot vacuum. It navigates your home effortlessly and can be controlled via a smartphone app.',
    price: 17999.0,
    imageUrl: PlaceHolderImages[26].imageUrl,
    imageHint: PlaceHolderImages[26].imageHint,
    stock: 20,
    category: 'TVs & Appliances',
    subCategory: 'Appliances',
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '30',
    name: '4K Smart TV',
    description: 'Experience stunning visuals with this 55-inch 4K Smart TV. It supports all major streaming apps and has a slim, modern design.',
    price: 49999.0,
    imageUrl: PlaceHolderImages[29].imageUrl,
    imageHint: PlaceHolderImages[29].imageHint,
    stock: 15,
    category: 'TVs & Appliances',
    subCategory: 'Televisions',
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'A1', name: 'Microwave Oven', description: 'A 20L microwave oven with grill functionality.', price: 7999, imageUrl: 'https://picsum.photos/seed/A1/600/400', imageHint: 'microwave oven', stock: 25, category: 'TVs & Appliances', subCategory: 'Appliances', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'A2', name: '43-inch Full HD TV', description: 'A 43-inch LED TV with stunning Full HD resolution.', price: 24999, imageUrl: 'https://picsum.photos/seed/A2/600/400', imageHint: 'full hd tv', stock: 20, category: 'TVs & Appliances', subCategory: 'Televisions', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'A3', name: 'Coffee Maker', description: 'A drip coffee maker that can brew up to 10 cups.', price: 2499, imageUrl: 'https://picsum.photos/seed/A3/600/400', imageHint: 'coffee maker', stock: 35, category: 'TVs & Appliances', subCategory: 'Appliances', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'A4', name: 'Soundbar', description: 'A 2.1 channel soundbar with a wireless subwoofer for immersive audio.', price: 8999, imageUrl: 'https://picsum.photos/seed/A4/600/400', imageHint: 'soundbar', stock: 30, category: 'TVs & Appliances', subCategory: 'Audio Systems', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'A5', name: 'Washing Machine', description: 'A 7kg fully automatic top-load washing machine.', price: 15999, imageUrl: 'https://picsum.photos/seed/A5/600/400', imageHint: 'washing machine', stock: 15, category: 'TVs & Appliances', subCategory: 'Large Appliances', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'A6', name: 'Air Conditioner', description: 'A 1.5 Ton 5-star inverter split AC.', price: 34999, imageUrl: 'https://picsum.photos/seed/A6/600/400', imageHint: 'air conditioner', stock: 10, category: 'TVs & Appliances', subCategory: 'Large Appliances', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'A7', name: 'Refrigerator', description: 'A 250L double-door refrigerator with frost-free technology.', price: 22999, imageUrl: 'https://picsum.photos/seed/A7/600/400', imageHint: 'refrigerator', stock: 12, category: 'TVs & Appliances', subCategory: 'Large Appliances', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'A8', name: 'Hand Blender', description: 'A powerful and versatile hand blender for your kitchen.', price: 1299, imageUrl: 'https://picsum.photos/seed/A8/600/400', imageHint: 'hand blender', stock: 50, category: 'TVs & Appliances', subCategory: 'Appliances', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'A9', name: '32-inch Smart TV', description: 'A 32-inch HD Ready Smart TV with built-in streaming apps.', price: 14999, imageUrl: 'https://picsum.photos/seed/A9/600/400', imageHint: 'smart tv', stock: 25, category: 'TVs & Appliances', subCategory: 'Televisions', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'A10', name: 'Food Processor', description: 'A multi-functional food processor to assist with all your cooking needs.', price: 5999, imageUrl: 'https://picsum.photos/seed/A10/600/400', imageHint: 'food processor', stock: 20, category: 'TVs & Appliances', subCategory: 'Appliances', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'A11', name: 'Home Theater System', description: 'A 5.1 channel home theater system for a cinematic experience.', price: 19999, imageUrl: 'https://picsum.photos/seed/A11/600/400', imageHint: 'home theater', stock: 15, category: 'TVs & Appliances', subCategory: 'Audio Systems', rating: 4.7, reviewCount: 0, reviews: []
  },
  { id: 'A12', name: 'Iron', description: 'A steam iron with a non-stick soleplate.', price: 999, imageUrl: 'https://picsum.photos/seed/A12/600/400', imageHint: 'steam iron', stock: 60, category: 'TVs & Appliances', subCategory: 'Appliances', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'A13', name: 'Projector', description: 'A portable HD projector for home entertainment.', price: 12999, imageUrl: 'https://picsum.photos/seed/A13/600/400', imageHint: 'projector', stock: 22, category: 'TVs & Appliances', subCategory: 'Televisions', rating: 4.6, reviewCount: 0, reviews: [] },
  { id: 'A14', name: 'Dishwasher', description: 'A 12-place setting dishwasher for modern kitchens.', price: 29999, imageUrl: 'https://picsum.photos/seed/A14/600/400', imageHint: 'dishwasher', stock: 8, category: 'TVs & Appliances', subCategory: 'Large Appliances', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'A15', name: 'Toaster', description: 'A 2-slice pop-up toaster with browning control.', price: 1499, imageUrl: 'https://picsum.photos/seed/A15/600/400', imageHint: 'toaster', stock: 55, category: 'TVs & Appliances', subCategory: 'Appliances', rating: 4.5, reviewCount: 0, reviews: [] },
  { id: 'A16', name: 'Mixer Grinder', description: 'A 750W mixer grinder with 3 stainless steel jars.', price: 3499, imageUrl: 'https://picsum.photos/seed/A16/600/400', imageHint: 'mixer grinder', stock: 40, category: 'TVs & Appliances', subCategory: 'Appliances', rating: 4.7, reviewCount: 0, reviews: [] },

  // Books & Media (20)
  {
    id: '11',
    name: 'The Great Gatsby',
    description: 'A timeless story that has captivated readers for generations. This beautifully bound edition is a must-have for any book lover\'s collection.',
    price: 249.0,
    imageUrl: PlaceHolderImages[10].imageUrl,
    imageHint: PlaceHolderImages[10].imageHint,
    stock: 50,
    category: 'Books & Media',
    subCategory: 'Fiction',
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'B1', name: 'Sapiens: A Brief History of Humankind', description: 'A critically acclaimed book by Yuval Noah Harari.', price: 499, imageUrl: 'https://picsum.photos/seed/B1/600/400', imageHint: 'history book', stock: 40, category: 'Books & Media', subCategory: 'Non-Fiction', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'B2', name: 'The Lord of the Rings', description: 'The complete trilogy of J.R.R. Tolkien\'s epic fantasy.', price: 999, imageUrl: 'https://picsum.photos/seed/B2/600/400', imageHint: 'fantasy novel', stock: 30, category: 'Books & Media', subCategory: 'Fiction', rating: 5, reviewCount: 0, reviews: []
  },
  {
    id: 'B3', name: 'A Man Called Ove', description: 'A heartwarming novel by Fredrik Backman.', price: 349, imageUrl: 'https://picsum.photos/seed/B3/600/400', imageHint: 'fiction novel', stock: 60, category: 'Books & Media', subCategory: 'Fiction', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'B4', name: 'Atomic Habits', description: 'An easy & proven way to build good habits & break bad ones by James Clear.', price: 449, imageUrl: 'https://picsum.photos/seed/B4/600/400', imageHint: 'self-help book', stock: 80, category: 'Books & Media', subCategory: 'Self-Help', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'B5', name: 'The Psychology of Money', description: 'Timeless lessons on wealth, greed, and happiness by Morgan Housel.', price: 399, imageUrl: 'https://picsum.photos/seed/B5/600/400', imageHint: 'finance book', stock: 70, category: 'Books & Media', subCategory: 'Business & Finance', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'B6', name: 'To Kill a Mockingbird', description: 'A classic novel by Harper Lee.', price: 299, imageUrl: 'https://picsum.photos/seed/B6/600/400', imageHint: 'classic novel', stock: 50, category: 'Books & Media', subCategory: 'Fiction', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'B7', name: 'Thinking, Fast and Slow', description: 'A groundbreaking book on decision-making by Daniel Kahneman.', price: 549, imageUrl: 'https://picsum.photos/seed/B7/600/400', imageHint: 'psychology book', stock: 40, category: 'Books & Media', subCategory: 'Non-Fiction', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'B8', name: 'The Alchemist', description: 'A philosophical novel by Paulo Coelho.', price: 279, imageUrl: 'https://picsum.photos/seed/B8/600/400', imageHint: 'philosophical novel', stock: 90, category: 'Books & Media', subCategory: 'Fiction', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'B9', name: 'Steve Jobs', description: 'The official biography of Steve Jobs by Walter Isaacson.', price: 699, imageUrl: 'https://picsum.photos/seed/B9/600/400', imageHint: 'biography book', stock: 35, category: 'Books & Media', subCategory: 'Biographies', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'B10', name: 'Rich Dad Poor Dad', description: 'What the rich teach their kids about money that the poor and middle class do not!', price: 329, imageUrl: 'https://picsum.photos/seed/B10/600/400', imageHint: 'finance book', stock: 100, category: 'Books & Media', subCategory: 'Business & Finance', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'B11', name: 'Ikigai', description: 'The Japanese secret to a long and happy life.', price: 309, imageUrl: 'https://picsum.photos/seed/B11/600/400', imageHint: 'wellness book', stock: 85, category: 'Books & Media', subCategory: 'Self-Help', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'B12', name: 'Harry Potter Box Set', description: 'The complete 7-book box set of the Harry Potter series.', price: 2999, imageUrl: 'https://picsum.photos/seed/B12/600/400', imageHint: 'book boxset', stock: 25, category: 'Books & Media', subCategory: 'Fiction', rating: 5, reviewCount: 0, reviews: []
  },
  {
    id: 'B13', name: 'Becoming', description: 'The memoir of former First Lady of the United States, Michelle Obama.', price: 599, imageUrl: 'https://picsum.photos/seed/B13/600/400', imageHint: 'memoir book', stock: 45, category: 'Books & Media', subCategory: 'Biographies', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'B14', name: 'Freakonomics', description: 'A book that explores the hidden side of everything.', price: 419, imageUrl: 'https://picsum.photos/seed/B14/600/400', imageHint: 'economics book', stock: 55, category: 'Books & Media', subCategory: 'Non-Fiction', rating: 4.7, reviewCount: 0, reviews: []
  },
  { id: 'B15', name: 'The Silent Patient', description: 'A shocking psychological thriller by Alex Michaelides.', price: 379, imageUrl: 'https://picsum.photos/seed/B15/600/400', imageHint: 'thriller novel', stock: 65, category: 'Books & Media', subCategory: 'Fiction', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'B16', name: 'Educated: A Memoir', description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.', price: 459, imageUrl: 'https://picsum.photos/seed/B16/600/400', imageHint: 'memoir', stock: 50, category: 'Books & Media', subCategory: 'Biographies', rating: 4.9, reviewCount: 0, reviews: [] },
  { id: 'B17', name: 'Dune', description: 'The first book in Frank Herbert\'s epic science fiction series.', price: 499, imageUrl: 'https://picsum.photos/seed/B17/600/400', imageHint: 'sci-fi novel', stock: 45, category: 'Books & Media', subCategory: 'Fiction', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'B18', name: 'The Lean Startup', description: 'How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses by Eric Ries.', price: 599, imageUrl: 'https://picsum.photos/seed/B18/600/400', imageHint: 'business book', stock: 60, category: 'Books & Media', subCategory: 'Business & Finance', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'B19', name: 'The Four Agreements', description: 'A Practical Guide to Personal Freedom by Don Miguel Ruiz.', price: 299, imageUrl: 'https://picsum.photos/seed/B19/600/400', imageHint: 'spiritual book', stock: 95, category: 'Books & Media', subCategory: 'Self-Help', rating: 4.8, reviewCount: 0, reviews: [] },
  
  // Toys (20)
  {
    id: '12',
    name: '500-Piece Building Blocks',
    description: 'Unleash creativity with this 500-piece building block set. Perfect for all ages, it encourages imagination and develops fine motor skills.',
    price: 899.0,
    imageUrl: PlaceHolderImages[11].imageUrl,
    imageHint: PlaceHolderImages[11].imageHint,
    stock: 30,
    category: 'Toys',
    subCategory: 'Creative Toys',
    rating: 4.8,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'T1', name: 'Remote Control Car', description: 'A fast and durable remote control car for kids and adults.', price: 1499, imageUrl: 'https://picsum.photos/seed/T1/600/400', imageHint: 'rc car', stock: 40, category: 'Toys', subCategory: 'Action Toys', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'T2', name: 'Doll House', description: 'A beautiful and detailed doll house with furniture.', price: 2499, imageUrl: 'https://picsum.photos/seed/T2/600/400', imageHint: 'doll house', stock: 25, category: 'Toys', subCategory: 'Dolls & Accessories', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'T3', name: 'Jigsaw Puzzle (1000 Pieces)', description: 'A challenging and beautiful 1000-piece jigsaw puzzle.', price: 599, imageUrl: 'https://picsum.photos/seed/T3/600/400', imageHint: 'jigsaw puzzle', stock: 60, category: 'Toys', subCategory: 'Puzzles', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'T4', name: 'Plush Teddy Bear', description: 'A soft and cuddly large teddy bear.', price: 999, imageUrl: 'https://picsum.photos/seed/T4/600/400', imageHint: 'teddy bear', stock: 80, category: 'Toys', subCategory: 'Soft Toys', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'T5', name: 'Science Kit', description: 'An educational science kit with over 50 experiments.', price: 1299, imageUrl: 'https://picsum.photos/seed/T5/600/400', imageHint: 'science kit', stock: 35, category: 'Toys', subCategory: 'Educational Toys', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'T6', name: 'Board Game: Monopoly', description: 'The classic board game of property trading.', price: 799, imageUrl: 'https://picsum.photos/seed/T6/600/400', imageHint: 'board game', stock: 70, category: 'Toys', subCategory: 'Board Games', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'T7', name: 'Toy Train Set', description: 'A classic wooden toy train set with tracks and accessories.', price: 1999, imageUrl: 'https://picsum.photos/seed/T7/600/400', imageHint: 'train set', stock: 30, category: 'Toys', subCategory: 'Action Toys', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'T8', name: 'Art & Craft Kit', description: 'A comprehensive art and craft kit for kids.', price: 999, imageUrl: 'https://picsum.photos/seed/T8/600/400', imageHint: 'art kit', stock: 50, category: 'Toys', subCategory: 'Creative Toys', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'T9', name: 'Action Figure Set', description: 'A set of 5 superhero action figures.', price: 1199, imageUrl: 'https://picsum.photos/seed/T9/600/400', imageHint: 'action figure', stock: 45, category: 'Toys', subCategory: 'Action Toys', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'T10', name: 'Musical Keyboard', description: 'A 32-key electronic keyboard for beginners.', price: 1799, imageUrl: 'https://picsum.photos/seed/T10/600/400', imageHint: 'musical keyboard', stock: 25, category: 'Toys', subCategory: 'Musical Toys', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'T11', name: 'Rubik\'s Cube', description: 'The classic 3x3 Rubik\'s Cube puzzle.', price: 299, imageUrl: 'https://picsum.photos/seed/T11/600/400', imageHint: 'rubiks cube', stock: 150, category: 'Toys', subCategory: 'Puzzles', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'T12', name: 'Doctor Play Set', description: 'A fun and educational doctor play set for kids.', price: 899, imageUrl: 'https://picsum.photos/seed/T12/600/400', imageHint: 'doctor set', stock: 60, category: 'Toys', subCategory: 'Role Play', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'T13', name: 'Stuffed Animal - Dinosaur', description: 'A large and soft stuffed dinosaur toy.', price: 1199, imageUrl: 'https://picsum.photos/seed/T13/600/400', imageHint: 'stuffed dinosaur', stock: 50, category: 'Toys', subCategory: 'Soft Toys', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'T14', name: 'Magic Kit', description: 'A beginner\'s magic kit with 100 easy-to-learn tricks.', price: 999, imageUrl: 'https://picsum.photos/seed/T14/600/400', imageHint: 'magic kit', stock: 40, category: 'Toys', subCategory: 'Creative Toys', rating: 4.5, reviewCount: 0, reviews: []
  },
  { id: 'T15', name: 'Clay Modeling Set', description: 'A set of colorful modeling clay with tools.', price: 499, imageUrl: 'https://picsum.photos/seed/T15/600/400', imageHint: 'modeling clay', stock: 80, category: 'Toys', subCategory: 'Creative Toys', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'T16', name: 'Board Game: Chess', description: 'A high-quality wooden chess board game set.', price: 999, imageUrl: 'https://picsum.photos/seed/T16/600/400', imageHint: 'chess set', stock: 55, category: 'Toys', subCategory: 'Board Games', rating: 4.9, reviewCount: 0, reviews: [] },
  { id: 'T17', name: 'Foam Blaster Toy Gun', description: 'A safe foam dart blaster gun for kids.', price: 799, imageUrl: 'https://picsum.photos/seed/T17/600/400', imageHint: 'toy gun', stock: 65, category: 'Toys', subCategory: 'Action Toys', rating: 4.6, reviewCount: 0, reviews: [] },
  { id: 'T18', name: 'Baby Doll', description: 'A realistic baby doll with accessories.', price: 1299, imageUrl: 'https://picsum.photos/seed/T18/600/400', imageHint: 'baby doll', stock: 35, category: 'Toys', subCategory: 'Dolls & Accessories', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'T19', name: 'Stacking Rings', description: 'A classic colorful stacking rings toy for toddlers.', price: 399, imageUrl: 'https://picsum.photos/seed/T19/600/400', imageHint: 'stacking rings', stock: 90, category: 'Toys', subCategory: 'Educational Toys', rating: 4.8, reviewCount: 0, reviews: [] },
  
  // Beauty & Personal Care (20)
  {
    id: '13',
    name: 'Vitamin C Face Serum',
    description: 'Rejuvenate your skin with this all-natural, organic face serum. Packed with antioxidants and vitamins, it leaves your skin feeling refreshed and radiant.',
    price: 749.0,
    imageUrl: PlaceHolderImages[12].imageUrl,
    imageHint: PlaceHolderImages[12].imageHint,
    stock: 25,
    category: 'Beauty & Personal Care',
    subCategory: 'Skincare',
    rating: 4.7,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: '26',
    name: 'Herbal Shampoo',
    description: 'A gentle and effective herbal shampoo that cleanses your hair and scalp without harsh chemicals. Suitable for all hair types.',
    price: 299.0,
    imageUrl: PlaceHolderImages[25].imageUrl,
    imageHint: PlaceHolderImages[25].imageHint,
    stock: 70,
    category: 'Beauty & Personal Care',
    subCategory: 'Hair Care',
    rating: 4.6,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'BPC1', name: 'Sunscreen SPF 50', description: 'A broad-spectrum sunscreen with SPF 50 protection.', price: 499, imageUrl: 'https://picsum.photos/seed/BPC1/600/400', imageHint: 'sunscreen', stock: 80, category: 'Beauty & Personal Care', subCategory: 'Skincare', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC2', name: 'Moisturizing Cream', description: 'A deep moisturizing cream for dry skin.', price: 349, imageUrl: 'https://picsum.photos/seed/BPC2/600/400', imageHint: 'moisturizer', stock: 100, category: 'Beauty & Personal Care', subCategory: 'Skincare', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC3', name: 'Hair Conditioner', description: 'A nourishing hair conditioner for smooth and silky hair.', price: 329, imageUrl: 'https://picsum.photos/seed/BPC3/600/400', imageHint: 'hair conditioner', stock: 60, category: 'Beauty & Personal Care', subCategory: 'Hair Care', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC4', name: 'Beard Oil', description: 'A blend of natural oils to nourish and style your beard.', price: 449, imageUrl: 'https://picsum.photos/seed/BPC4/600/400', imageHint: 'beard oil', stock: 50, category: 'Beauty & Personal Care', subCategory: 'Men\'s Grooming', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC5', name: 'Lip Balm', description: 'A hydrating lip balm with SPF 15.', price: 149, imageUrl: 'https://picsum.photos/seed/BPC5/600/400', imageHint: 'lip balm', stock: 150, category: 'Beauty & Personal Care', subCategory: 'Skincare', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC6', name: 'Face Wash', description: 'A gentle face wash for all skin types.', price: 249, imageUrl: 'https://picsum.photos/seed/BPC6/600/400', imageHint: 'face wash', stock: 120, category: 'Beauty & Personal Care', subCategory: 'Skincare', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC7', name: 'Hair Serum', description: 'A serum to control frizz and add shine to your hair.', price: 399, imageUrl: 'https://picsum.photos/seed/BPC7/600/400', imageHint: 'hair serum', stock: 70, category: 'Beauty & Personal Care', subCategory: 'Hair Care', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC8', name: 'Electric Trimmer', description: 'A cordless electric trimmer for beard and body grooming.', price: 1499, imageUrl: 'https://picsum.photos/seed/BPC8/600/400', imageHint: 'electric trimmer', stock: 40, category: 'Beauty & Personal Care', subCategory: 'Men\'s Grooming', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC9', name: 'Sheet Mask Set', description: 'A set of 5 hydrating and rejuvenating sheet masks.', price: 599, imageUrl: 'https://picsum.photos/seed/BPC9/600/400', imageHint: 'sheet mask', stock: 60, category: 'Beauty & Personal Care', subCategory: 'Skincare', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC10', name: 'Body Lotion', description: 'A fast-absorbing body lotion for all-day hydration.', price: 299, imageUrl: 'https://picsum.photos/seed/BPC10/600/400', imageHint: 'body lotion', stock: 90, category: 'Beauty & Personal Care', subCategory: 'Body Care', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC11', name: 'Hair Dryer', description: 'A powerful 2000W hair dryer with multiple heat settings.', price: 1999, imageUrl: 'https://picsum.photos/seed/BPC11/600/400', imageHint: 'hair dryer', stock: 30, category: 'Beauty & Personal Care', subCategory: 'Hair Appliances', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC12', name: 'Shaving Cream', description: 'A rich and creamy shaving cream for a smooth shave.', price: 229, imageUrl: 'https://picsum.photos/seed/BPC12/600/400', imageHint: 'shaving cream', stock: 80, category: 'Beauty & Personal Care', subCategory: 'Men\'s Grooming', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'BPC13', name: 'Nail Polish Set', description: 'A set of 5 vibrant and long-lasting nail polishes.', price: 499, imageUrl: 'https://picsum.photos/seed/BPC13/600/400', imageHint: 'nail polish', stock: 70, category: 'Beauty & Personal Care', subCategory: 'Makeup', rating: 4.5, reviewCount: 0, reviews: []
  },
  { id: 'BPC14', name: 'Foundation', description: 'A full-coverage foundation with a matte finish.', price: 899, imageUrl: 'https://picsum.photos/seed/BPC14/600/400', imageHint: 'foundation makeup', stock: 50, category: 'Beauty & Personal Care', subCategory: 'Makeup', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'BPC15', name: 'Hair Straightener', description: 'A ceramic hair straightener for sleek and shiny hair.', price: 2499, imageUrl: 'https://picsum.photos/seed/BPC15/600/400', imageHint: 'hair straightener', stock: 35, category: 'Beauty & Personal Care', subCategory: 'Hair Appliances', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'BPC16', name: 'Bath Bomb Set', description: 'A set of 6 colorful and fragrant bath bombs.', price: 799, imageUrl: 'https://picsum.photos/seed/BPC16/600/400', imageHint: 'bath bombs', stock: 65, category: 'Beauty & Personal Care', subCategory: 'Body Care', rating: 4.9, reviewCount: 0, reviews: [] },
  { id: 'BPC17', name: 'Eyeliner', description: 'A waterproof liquid eyeliner for a precise, dramatic look.', price: 399, imageUrl: 'https://picsum.photos/seed/BPC17/600/400', imageHint: 'eyeliner', stock: 90, category: 'Beauty & Personal Care', subCategory: 'Makeup', rating: 4.6, reviewCount: 0, reviews: [] },
  { id: 'BPC18', name: 'Perfume', description: 'A long-lasting floral perfume for women.', price: 1999, imageUrl: 'https://picsum.photos/seed/BPC18/600/400', imageHint: 'perfume bottle', stock: 45, category: 'Beauty & Personal Care', subCategory: 'Fragrance', rating: 4.8, reviewCount: 0, reviews: [] },

  // Grocery (20)
  {
    id: '14',
    name: 'Gourmet Coffee Beans',
    description: 'Start your morning right with these single-origin gourmet coffee beans. Ethically sourced and roasted to perfection for a rich, aromatic brew.',
    price: 349.0,
    imageUrl: PlaceHolderImages[13].imageUrl,
    imageHint: PlaceHolderImages[13].imageHint,
    stock: 40,
    category: 'Grocery',
    subCategory: 'Beverages',
    rating: 4.9,
    reviewCount: 0,
    reviews: [],
  },
  {
    id: 'G1', name: 'Organic Honey', description: '100% pure and organic honey.', price: 299, imageUrl: 'https://picsum.photos/seed/G1/600/400', imageHint: 'organic honey', stock: 100, category: 'Grocery', subCategory: 'Pantry Staples', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'G2', name: 'Almond Flour', description: 'A 1kg bag of fine almond flour for baking.', price: 799, imageUrl: 'https://picsum.photos/seed/G2/600/400', imageHint: 'almond flour', stock: 50, category: 'Grocery', subCategory: 'Pantry Staples', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'G3', name: 'Green Tea Bags', description: 'A box of 100 organic green tea bags.', price: 399, imageUrl: 'https://picsum.photos/seed/G3/600/400', imageHint: 'green tea', stock: 120, category: 'Grocery', subCategory: 'Beverages', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'G4', name: 'Extra Virgin Olive Oil', description: 'A 1L bottle of cold-pressed extra virgin olive oil.', price: 899, imageUrl: 'https://picsum.photos/seed/G4/600/400', imageHint: 'olive oil', stock: 60, category: 'Grocery', subCategory: 'Pantry Staples', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'G5', name: 'Dark Chocolate Bar', description: 'A 70% cocoa dark chocolate bar.', price: 199, imageUrl: 'https://picsum.photos/seed/G5/600/400', imageHint: 'dark chocolate', stock: 150, category: 'Grocery', subCategory: 'Snacks', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'G6', name: 'Quinoa', description: 'A 1kg bag of organic white quinoa.', price: 449, imageUrl: 'https://picsum.photos/seed/G6/600/400', imageHint: 'quinoa', stock: 70, category: 'Grocery', subCategory: 'Grains & Pulses', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'G7', name: 'Basmati Rice', description: 'Premium quality 5kg bag of basmati rice.', price: 699, imageUrl: 'https://picsum.photos/seed/G7/600/400', imageHint: 'basmati rice', stock: 50, category: 'Grocery', subCategory: 'Grains & Pulses', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'G8', name: 'Roasted Cashews', description: 'A 500g pack of lightly salted roasted cashews.', price: 599, imageUrl: 'https://picsum.photos/seed/G8/600/400', imageHint: 'roasted cashews', stock: 80, category: 'Grocery', subCategory: 'Snacks', rating: 4.9, reviewCount: 0, reviews: []
  },
  {
    id: 'G9', name: 'Pasta Sauce', description: 'A jar of classic Italian pasta sauce.', price: 249, imageUrl: 'https://picsum.photos/seed/G9/600/400', imageHint: 'pasta sauce', stock: 90, category: 'Grocery', subCategory: 'Pantry Staples', rating: 4.6, reviewCount: 0, reviews: []
  },
  {
    id: 'G10', name: 'Turmeric Powder', description: 'A 200g pack of organic turmeric powder.', price: 99, imageUrl: 'https://picsum.photos/seed/G10/600/400', imageHint: 'turmeric powder', stock: 200, category: 'Grocery', subCategory: 'Spices', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'G11', name: 'Oats', description: 'A 1kg bag of rolled oats for a healthy breakfast.', price: 199, imageUrl: 'https://picsum.photos/seed/G11/600/400', imageHint: 'oats', stock: 150, category: 'Grocery', subCategory: 'Grains & Pulses', rating: 4.7, reviewCount: 0, reviews: []
  },
  {
    id: 'G12', name: 'Peanut Butter', description: 'A jar of creamy peanut butter with no added sugar.', price: 349, imageUrl: 'https://picsum.photos/seed/G12/600/400', imageHint: 'peanut butter', stock: 100, category: 'Grocery', subCategory: 'Pantry Staples', rating: 4.8, reviewCount: 0, reviews: []
  },
  {
    id: 'G13', name: 'Potato Chips', description: 'A large bag of classic salted potato chips.', price: 49, imageUrl: 'https://picsum.photos/seed/G13/600/400', imageHint: 'potato chips', stock: 300, category: 'Grocery', subCategory: 'Snacks', rating: 4.5, reviewCount: 0, reviews: []
  },
  {
    id: 'G14', name: 'Cumin Seeds', description: 'A 100g pack of whole cumin seeds.', price: 79, imageUrl: 'https://picsum.photos/seed/G14/600/400', imageHint: 'cumin seeds', stock: 250, category: 'Grocery', subCategory: 'Spices', rating: 4.9, reviewCount: 0, reviews: []
  },
  { id: 'G15', name: 'Coriander Powder', description: 'A 200g pack of fresh coriander powder.', price: 89, imageUrl: 'https://picsum.photos/seed/G15/600/400', imageHint: 'coriander powder', stock: 220, category: 'Grocery', subCategory: 'Spices', rating: 4.8, reviewCount: 0, reviews: [] },
  { id: 'G16', name: 'Instant Noodles Pack', description: 'A family pack of 4 instant noodles.', price: 99, imageUrl: 'https://picsum.photos/seed/G16/600/400', imageHint: 'instant noodles', stock: 180, category: 'Grocery', subCategory: 'Snacks', rating: 4.6, reviewCount: 0, reviews: [] },
  { id: 'G17', name: 'Breakfast Cereal', description: 'A 500g box of corn flakes breakfast cereal.', price: 249, imageUrl: 'https://picsum.photos/seed/G17/600/400', imageHint: 'breakfast cereal', stock: 110, category: 'Grocery', subCategory: 'Pantry Staples', rating: 4.7, reviewCount: 0, reviews: [] },
  { id: 'G18', name: 'Whole Wheat Bread', description: 'A fresh loaf of whole wheat bread.', price: 45, imageUrl: 'https://picsum.photos/seed/G18/600/400', imageHint: 'wheat bread', stock: 250, category: 'Grocery', subCategory: 'Dairy & Bread', rating: 4.9, reviewCount: 0, reviews: [] },
  { id: 'G19', name: 'Fresh Milk', description: 'A 1L carton of full-cream fresh milk.', price: 60, imageUrl: 'https://picsum.photos/seed/G19/600/400', imageHint: 'milk carton', stock: 300, category: 'Grocery', subCategory: 'Dairy & Bread', rating: 4.9, reviewCount: 0, reviews: [] }
];

const orders: Order[] = [
    {
        id: 'ORD001',
        userId: 'USR001',
        items: [
            { id: '1', name: 'Leather Wallet', price: 499, quantity: 1, imageUrl: PlaceHolderImages[0].imageUrl },
            { id: '4', name: 'Cotton T-Shirt', price: 399, quantity: 2, imageUrl: PlaceHolderImages[3].imageUrl },
        ],
        total: 1297,
        date: '2023-10-26',
        status: 'Delivered',
    },
    {
        id: 'ORD002',
        userId: 'USR001',
        items: [
            { id: '2', name: 'Wireless Headphones', price: 1999, quantity: 1, imageUrl: PlaceHolderImages[1].imageUrl },
        ],
        total: 1999,
        date: '2023-11-15',
        status: 'Shipped',
    },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(count: number): Product[] {
  // Shuffle array and take the first 'count' items
  return [...products].sort(() => 0.5 - Math.random()).slice(0, count);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllOrders(): Order[] {
    return orders;
}

export function getOrderById(id: string): Order | undefined {
    return orders.find((o) => o.id === id);
}
