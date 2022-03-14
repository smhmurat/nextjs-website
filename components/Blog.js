import React from "react";
import Link from "next/link";
import Image from "next/image"

const Blog = () => {
  const blog = [
    {
      title: "Bosanma Davalari",
      text: "Lorem ipsum dolor sit amet. Eos dolore fugiat non labore amet aut corrupti quia quo optio inventore At dolorem quia. A consequatur vero vel quis quos nam assumenda asperiores aut omnis quaerat in optio adipisci eos iusto vitae in mollitia quaerat.",
      tarih: "tarih",
    },
    {
      title: "Bosanma Davalari",
      text: "Lorem ipsum dolor sit amet. Eos dolore fugiat non labore amet aut corrupti quia quo optio inventore At dolorem quia. A consequatur vero vel quis quos nam assumenda asperiores aut omnis quaerat in optio adipisci eos iusto vitae in mollitia quaerat.",
      tarih: "tarih",
    },
    {
      title: "Bosanma Davalari",
      text: "Lorem ipsum dolor sit amet. Eos dolore fugiat non labore amet aut corrupti quia quo optio inventore At dolorem quia. A consequatur vero vel quis quos nam assumenda asperiores aut omnis quaerat in optio adipisci eos iusto vitae in mollitia quaerat.",
      tarih: "tarih",
    },
  ];
  return (
    <section className="w-full py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="title-font sm:text-4xl text-3xl text-center mb-4 font-medium text-primary-color">
          Blog Yazilarimiz
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4">
          {blog.map((item, index) => (
          <div key={index} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <Link href="#">
              <a>
                <Image className="rounded-t-lg" src="/images/slide1.jpg" width={400} height={200} alt="" />
              </a>
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                {item.text}
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white hover:text-primary-color bg-primary-color rounded-lg hover:bg-brand-color transition-colors duration-300">
                Devamini Oku
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
        </div>
        <Link href='/blog'>
          <a className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-primary-color rounded-lg border border-gray-200 hover:bg-brand-color hover:text-primary-color focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 transition-colors duration-300">Daha Fazla</a>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
