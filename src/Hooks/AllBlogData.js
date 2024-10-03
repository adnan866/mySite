import { useState } from "react";
// import img1 from "../assets/img/blog/blog-post-1.jpg";
// import img2 from "../assets/img/blog/blog-post-2.jpg";
// import img3 from "../assets/img/blog/blog-post-3.jpg";


import bTailwind from "../assets/img/blog/setupTaiwind.jpg";
import cssProTips from "../assets/img/blog/CssProTips.jpg"

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: bTailwind,
      title: "How to configure Tailwind CSS with React",
      commentor: "Dani ",
      date: "30 June 2023",
      tag: `Tailwind, React`,
      description1:
        "If you have not install NodeJs then First install in your PC and and restart your terminal, after that start by creating a new project if you don’t have one set up already. The most common approach is to use Create React App. and run the following command",
      description2:( 
        <span>Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both "tailwind.config.js" and "postcss.config.js".  Vite is install for page reload automatically when we save our changes.<code>
          <span>npm install -D tailwindcss postcss autoprefixer</span>
          <span>npm install vite</span>
          <span>npx tailwindcss init</span>
        </code>
        After run this command a new file (tailwind.config) add in your project and change the "content" into "content:["*"]" for applying Tailwind-CSS to the Whole Project.
        <code>
          <span>"scripts":{'{'}"start":"vite"`{'}'}</span>
        </code> use upper command to run the project like "nom start" call vite and start our project </span>),
      description3:
        (<span>Add the Tailwind directives to your CSS file
          Add the @tailwind directives for each of Tailwind's layers to your CSS file. <code><span>@tailwind base;</span>
          <span>@tailwind components;</span>
          <span>@tailwind utilities;</span></code></span>),
      description4:
        `Note:If you are using VS-Code, Install an extension "Tailwind CSS intelliSence" that will help you using tailwind classes`,
    },
    {
      id: 2,
      img: cssProTips,
      title: "10 Important CSS Pro Tips",
      commentor: "Dani ",
      date: "23 July 2023",
      tag: `CSS Tips,`,
      description1:
        `In CSS, you cannot directly select a parent element using a selector. CSS operates in a "cascading" manner, where styles are applied from parent to child elements, but not the other way around. However, you can achieve certain effects that might make it seem like you're targeting a parent element using CSS. Here are a couple of techniques:`,
      description2:
      ( 
        <span>Using the :has Selector (Not Widely Supported Yet):
        The :has pseudo-class allows you to select an element that contains a specific element as its child. However, as of my knowledge cutoff in September 2021, this selector is not widely supported by most browsers. <code>
          parent:has(child) {
    /* styles for the parent */
}
        </code>
        
In CSS, you cannot directly select a parent element using a selector. CSS operates in a "cascading" manner, where styles are applied from parent to child elements, but not the other way around.

However, you can achieve certain effects that might make it seem like you're targeting a parent element using CSS. Here are a couple of techniques:

Using the :has Selector (Not Widely Supported Yet):
The :has pseudo-class allows you to select an element that contains a specific element as its child. However, as of my knowledge cutoff in September 2021, this selector is not widely supported by most browsers.

css
Copy code
/* This is not widely supported as of September 2021 */
parent:has(child) {
    /* styles for the parent */
}
Using Adjacent Sibling Combinator (+) to Select Sibling Elements:
If the parent and child elements are siblings, you can use the adjacent sibling combinator to select the parent element when a specific child is targeted.
        <code>
        .child:hover + .parent {
    /* styles for the parent when child is hovered */
    }
        </code> Using JavaScript or jQuery:
If you need to manipulate a parent element based on actions on its child, you might consider using JavaScript or a library like jQuery. JavaScript provides much more flexibility in traversing the DOM and manipulating elements. <code>const childElement = document.querySelector('.child');
const parentElement = childElement.parentElement;

// Apply styles or perform actions on the parentElement
parentElement.style.backgroundColor = 'blue';</code></span>),      
        description3:
        (<span><b>:where()</b>
        The :where() CSS pseudo-class function takes a selector list as its argument, and selects any element that can bea selected by one of the selectors in that list. <code>:where(ol, ul) :where(ol, ul) ol
  list-style-type: lower-greek;
  color: chocolate;
</code></span>),
      description4:
        "The difference between :where() and :is() is that :where() always has 0 specificity, whereas :is() takes on the specificity of the most specific selector in its arguments.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
