export type Product = {
  name: string;
  price: number;
  category: string;
  rating: number;
  id: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    name: "T-shirt",
    price: 15.0,
    category: "cloth",
    rating: 4,
    id: "p7",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Watch",
    price: 15.0,
    category: "accessories",
    rating: 3,
    id: "p1",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
  },

  {
    name: "Shoes",
    price: 39.0,
    category: "footwear",
    rating: 3,
    id: "p3",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Jacket",
    price: 25.0,
    category: "cloth",
    rating: 3,
    id: "p6",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
  },

  {
    name: "Sweater",
    price: 28.0,
    category: "cloth",
    rating: 5,
    id: "p8",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
  },
  {
    name: "Shoes",
    price: 29.0,
    category: "footwear",
    rating: 2,
    id: "p2",
    image:
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "T-shirt",
    price: 10.0,
    category: "cloth",
    rating: 5,
    id: "p9",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Bag",
    price: 26.0,
    category: "other",
    rating: 5,
    id: "p16",
    image:
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
  },
  {
    name: "Glasses",
    price: 17.0,
    category: "accessories",
    rating: 3,
    id: "p10",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdsYXNzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Purse",
    price: 45.0,
    category: "accessories",
    rating: 1,
    id: "p11",
    image:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80",
  },

  {
    name: "Necklace",
    price: 21.0,
    category: "accessories",
    rating: 1,
    id: "p13",
    image:
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "SunGlasses",
    price: 20.0,
    category: "accessories",
    rating: 2,
    id: "p14",
    image:
      "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80",
  },
  {
    name: "Bag",
    price: 18.0,
    category: "other",
    rating: 1,
    id: "p15",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },

  {
    name: "Camera",
    price: 56.0,
    category: "other",
    rating: 2,
    id: "p17",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Sneakers",
    price: 40.0,
    category: "footwear",
    rating: 5,
    id: "p5",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    name: "Headphone",
    price: 12.0,
    category: "other",
    rating: 4,
    id: "p18",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Purse",
    price: 34.0,
    category: "accessories",
    rating: 3,
    id: "p12",
    image:
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80",
  },
  {
    name: "Shoes",
    price: 17.0,
    category: "footwear",
    rating: 4,
    id: "p4",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Alexa",
    price: 70.0,
    category: "other",
    rating: 5,
    id: "p19",
    image:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default PRODUCTS;
