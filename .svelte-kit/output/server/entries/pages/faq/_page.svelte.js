import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/ssr.js";
const faqData = [
  {
    id: 1,
    question: "What services does your web design agency offer?",
    answer: "We offer a comprehensive range of services, including custom web design, web development, responsive design, e-commerce solutions, and content management system (CMS) development."
  },
  {
    id: 2,
    question: "How long does it take to design and develop a website?",
    answer: "The timeline varies depending on the complexity of the project. Simple websites may take a few weeks, while more complex projects, such as e-commerce platforms, can take several months. We provide detailed project timelines during the consultation phase."
  },
  {
    id: 3,
    question: "Can you redesign an existing website?",
    answer: "Absolutely! We specialise in website redesigns to enhance visual appeal, user experience, and functionality. We'll work closely with you to understand your goals and transform your existing site into a modern, effective platform."
  },
  {
    id: 4,
    question: "Do you provide maintenance and support after the website is launched?",
    answer: "Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and performs optimally. Our support packages are tailored to meet your specific needs."
  },
  {
    id: 5,
    question: "How do you ensure that websites are mobile-friendly?",
    answer: "We prioritise mobile responsiveness in all our designs. Our websites undergo thorough testing across various devices and browsers to ensure a seamless user experience on smartphones, tablets, and desktops."
  },
  {
    id: 6,
    question: "Can you integrate e-commerce features into a website?",
    answer: "Certainly! We specialise in developing e-commerce solutions that include secure payment gateways, inventory management, and user-friendly interfaces to provide a seamless online shopping experience."
  },
  {
    id: 7,
    question: "Will my website be search engine friendly?",
    answer: "Yes, we follow best practices in web development to ensure your site is search engine optimised (SEO). This includes using clean code, optimising images, and implementing SEO-friendly URLs to enhance visibility on search engines."
  },
  {
    id: 8,
    question: "How do you involve clients in the design process?",
    answer: "We believe in collaborative design. Our process includes client consultations, feedback sessions, and regular updates. We ensure your vision aligns with the design, and your input is valued throughout the development process."
  },
  {
    id: 9,
    question: "Can you create custom web applications for specific business needs?",
    answer: "Absolutely! We specialise in developing custom web applications tailored to meet the unique needs of your business. Our team will work closely with you to understand your requirements and create a solution that aligns with your goals."
  },
  {
    id: 10,
    question: "What sets your web design agency apart from others?",
    answer: " Our agency is distinguished by a combination of creativity, technical expertise, and a client-centric approach. We prioritise understanding your business goals, delivering high-quality solutions, and providing excellent customer service throughout the entire process."
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-i59kdj.svelte-i59kdj{display:flex;flex-direction:column;align-items:center}.grid-col-2.svelte-i59kdj.svelte-i59kdj{display:flex;max-width:800px;margin:0 auto}h1.svelte-i59kdj.svelte-i59kdj{margin-bottom:2rem}.faq-wrap.svelte-i59kdj.svelte-i59kdj{margin-bottom:2rem}.faq-wrap.svelte-i59kdj h2.svelte-i59kdj{margin-bottom:1rem;font-size:2rem}.faq-wrap.svelte-i59kdj p.svelte-i59kdj{margin-bottom:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="container svelte-i59kdj"><h1 class="svelte-i59kdj" data-svelte-h="svelte-w78x8p">FAQs</h1> <div class="grid-col-2 svelte-i59kdj"></div> ${each(faqData, (faqs) => {
    return `<div class="grid-col-2 svelte-i59kdj"><div class="faq-wrap svelte-i59kdj"><h2 class="svelte-i59kdj">${escape(faqs.question)}</h2> <p class="svelte-i59kdj">${escape(faqs.answer)}</p></div> </div>`;
  })}</div> </section>`;
});
export {
  Page as default
};
