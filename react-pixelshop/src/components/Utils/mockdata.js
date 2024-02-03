const products = [
    {
        id: 1,
        name:'Aku no hana 01',
        price: 9990,
        img:'/public/asset/img/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'IVREA',
        category: 'Manga', 
      },
      {
        id: 2,
        name:'La Broma Asesina',
        price: 24990,
        img:'/public/asset/img/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'OVNI PRESS',
        category: 'Comic',  
      },
      {
        id: 3,
        name:'Golden Kamuy 01',
        price: 12890,
        img:'/public/asset/img/manga-golden-kamuy-tomo-01-comic-way-001.jpg',
        editorial: 'PANINI',
        category: 'Manga',  
      }
]
export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("Error");
        resolve(products)
      }, 2000)
    })
  }