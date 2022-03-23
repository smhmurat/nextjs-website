import React from "react";
import Link from "next/link";
import Image from "next/image"

const Blog = () => {
  const blog = [
    {
      img: '/images/assets/blog/cekisme.jpg',
      link: 'cekismeli-bosanma-davasi',
      title: "ÇEKİŞMELİ BOŞANMA DAVASI",
      text: "Çekişmeli boşanma davaları, taraflar arasında boşanmaya esas teşkil eden sebeplerin ve taleplerin çekişmeli olduğu, eşlerin boşanmanın hukuki sonuçlarında bir anlaşmaya varamadığı boşanma davalarıdır. Çekişmeli boşanma davası, Türk Medeni Kanun m.161-m.166 arasında düzenlenen hem “genel” hem de “özel” boşanma sebeplerine dayanılarak açılabilmektedir. Çekişmeli boşanma davasında sadece boşanma sebepleri değil, boşanmada hangi tarafın daha kusurlu olduğu, maddi ve manevi tazminat, nafaka, velayet, ev eşyalarının paylaşımı vb. gibi konularda çekişmenin yaşandığı bir dava türüdür. Mal paylaşımından kaynaklanan katılma alacağı veya katkı payı alacağı davaları ise ayrı bir mal paylaşımı davası şeklinde açılmalıdır. Çekişmeli boşanma davası açan davacı, davalı taraftan daha fazla kusurlu ise boşanma davası reddedilir.",
      tarih: "18.03.2022",
    },
    {
      img: '/images/assets/blog/anlasma.jpg',
      link: 'anlasmali-bosanma-davasi',
      title: "ANLAŞMALI BOŞANMA DAVASI",
      text: "Anlaşmalı boşanma davası, en az 1 yıl süren evliliklerde, eşlerin birlikte başvurması ya da bir eşin diğerinin açtığı davayı kabul etmesi hâlinde söz konusu olur. Burada genel ve mutlak bir boşanma sebebi vardır. Şartların gerçekleşmesi halinde hakim boşanmaya karar verir. Çünkü kanun, eşlerin boşanma hususunda anlaşmış olmalarını, evlilik birliğinin temelinden sarsıldığına ve bu durumun ortak hayatın devamının beklenemez hale getirdiğine ilişkin bir faraziye olarak kabul etmiştir. Ancak anlaşmış olma kendiliğinden boşanma sonucunu sağlamamakta, boşanma kararının verilmesi için bir sebep oluşturmaktadır. Boşanmaya karar verilebilmesini kanun bazı ek şartların varlığına bağlamıştır. ",
      tarih: "18.03.2022",
    },
    {
      img: '/images/assets/blog/kira.jpg',
      link: 'kira-sozlesmesi-ve-kira-artis-orani',
      title: "KİRA SÖZLEŞMESİ VE KİRA ARTIŞ ORANI",
      text: "Kira sözleşmesi, kiraya verenin bir şeyin kullanılmasını veya kullanmayla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da buna karşılık kararlaştırılan kira bedelini ödemeyi üstlendiği sözleşmedir.Kira sözleşmesi, belirli ve belirli olmayan bir süre için yapılabilir. Kararlaştırılan sürenin geçmesiyle herhangi bir bildirim olmaksızın sona erecek kira sözleşmesi belirli sürelidir; diğer kira sözleşmeleri belirli olmayan bir süre için yapılmış sayılır.",
      tarih: "19.03.2022",
    },
  ];
  return (
    <section className="w-full py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="title-font sm:text-4xl text-3xl text-center mb-4 font-medium text-primary-color">
          Blog Yazılarımız
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4">
          {blog.map((item, index) => (
 <div key={index} className="relative flex flex-col items-center max-w-sm h-[550px] bg-white rounded-lg border border-gray-200 shadow-md">
            <Link href="#">
              <a>
                <Image className="rounded-t-lg" src={item.img} width={400} height={200} alt="" />
              </a>
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-center">
                  {item.title}
                </h5>
              </a>
              <p className="mb-4 font-normal text-gray-700">
                {`${item.text.substring(0,300)}...`}
              </p>
              <Link
                href={`/blog/${item.link}`}>
                <a className='absolute left-1/2 bottom-4 -translate-x-1/2 inline-flex items-center transition duration-500 transform hover:-translate-y-1 bg-primary-color text-white text-base font-medium rounded-full px-4 py-2 cursor-pointer'>
                <span>Devamını Oku</span>
                <svg
                  className="ml-2 -mr-1 w-6 h-6"
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
                </Link>
            </div>
          </div>
          ))}
         
        </div>
        <Link href='/blog'>
          <a className='transition duration-500 transform hover:-translate-y-1 inline-block bg-primary-color text-white text-lg font-medium rounded-full px-8 py-3 cursor-pointer'>Daha Fazla</a>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
