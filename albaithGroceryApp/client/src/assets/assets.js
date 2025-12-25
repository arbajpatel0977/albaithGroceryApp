import logo from "./logoAlbaith.png"
import organic_vegitable_image from './organicVeggies.png'
import search_icon from './search_icon.png'
import nav_cart from "./nav_cart.png"
import menu_icon from "./menu_cart.png"
import profile_icon from "./profile_img.png"
import banner_big from "./main_image.jpg"
import banner_small from "./banner_small.jpg"

import star_icon from "./star_icon.png"
import delivery_truck_icon from "./delivery_truck_icon.png"
import remove_icon from "./remove_icon.png"
import right_arrow_icon from "./right_icon_arrow.png"
import add_icon from "./add_icon.png"
import product_list_icon from './product_list_icon.png'
import order_icon from './order_icon.png'
import upload_logo from './upload_icon.png'


import grain from './grain.png'
import freshfruit from './freshfruite.png'
import instantfood from './instantfood.png'
import colddrink from './colddrinks.png'
import bakerybreads from './bakerybreads.png'
import dairyproducts from './dairyproduct.png'

import trustedheart from './trustedheart.png'
import freshnessgruaranteed from './freshnessgrauntee.png'
import affordableprice from './affordableprice.png'

export const assets = {
    logo,
    search_icon,
    nav_cart,
    menu_icon,
    banner_big,
    banner_small,
    profile_icon,
    star_icon
    , delivery_truck_icon,
    remove_icon,
    right_arrow_icon,
    add_icon,
    product_list_icon,
    order_icon,
    upload_logo,

}

export const fotterLinks = [
    {
        title: "Quick Links",
        links: [
            { text: "Home", url: "#" },
            { text: "Best Seller", url: "#" },
            { text: "Ofers & Deals", url: "#" },
            { text: "Contact", url: "#" },
            { text: "FAQs", url: "#" },
        ],
    },
    {
        title: "need help?",
        links: [
            { text: "Delivery Information", url: "#" },
            { text: "Return & Refund Policy", url: "#" },
            { text: "Payment Methods", url: "#" },
            { text: "Order Status", url: "#" },
            { text: "Contact us", url: "#" },
        ],
    },
    {
        title: "Follow us",
        links: [
            { text: "Facebook", url: "#" },
            { text: "Twitter", url: "#" },
            { text: "Instagram", url: "#" },
            { text: "LinkedIn", url: "#" },
            { text: "YouTube", url: "#" },
        ],
    }
];

export const categories = [

    {
        text: "Organics veggies",
        path: "Vegetables",
        image: organic_vegitable_image,
        bgColor: "#FEF6DA"
    },
  {
        text: "Fresh Fruits",
        path: "FreshFruits",
        image: freshfruit,
        bgColor: "#FEF6DA"
    },
    {
        text: "Cold Drinks",
        path: "ColdDrinks",
        image: colddrink,
        bgColor: "#FEF6DA"
    },
    {
        text: "Instant Food:",
        path: "InstantFood",
        image: instantfood,
        bgColor: "#FEF6DA"
    },
    {
        text: "Dairy Products",
        path: "Dairy",
        image: dairyproducts,
        bgColor: "#FEF6DA"
    },
    {
        text: "Bakery & Breads",
        path: "Bakery",
        image: bakerybreads,
        bgColor: "#FEF6DA"
    },
    {
        text: "Grains & Cereals",
        path: "Grains",
        image: grain,
        bgColor: "#FEF6DA"
    },
]


export const features = [
    {
        icon: delivery_truck_icon,
        title: "Fastest & Free Delivery",
        description: "Free delivery on all orders in just 30 minutes",
    },
   {
        // icon:leaf_icon,
        icon: freshnessgruaranteed,
        title: "freshness guaranteed",
        description: "Fresh products delivered to your door",

    },
    {
        // icon:coin_icon,
        icon: affordableprice,
        title: "Affordable Prices",
        description: "Quality groceries at unbeatable prices.",
    },
       {
        // icon:coin_icon,
        icon: trustedheart,
        title: "Trusted by Thousands",
        description: "Loved by 10,000+ happy customers.",
    },
]



