// src/i18n/translations.ts
export type Lang = 'en' | 'th';

export const messages: Record<Lang, Record<string, string>> = {
   en: {
      'nav.home': 'Home',
      'nav.products': 'Products',
      'nav.renting': 'Renting',
      'nav.works': 'Works',
      'nav.contact': 'Contact Us',
      'footer.copyright': 'Copyright © 2025 WISE CONTAINER CO., LTD',
   },
   th: {
      'nav.home': 'หน้าแรก',
      'nav.products': 'สินค้า',
      'nav.renting': 'เช่า',
      'nav.works': 'ผลงาน',
      'nav.contact': 'ติดต่อเรา',
      'footer.copyright': 'สงวนลิขสิทธิ์ © 2025 บริษัท ไวซ์ คอนเทนเนอร์ จำกัด',
   },
};

const a = {
   label: 'product',
   href: '/products',
   children: [
      {
         label: 'productA',
         ref: 'someref',
         children: [
            { label: 'productA1', ref: 'someref' },
            { label: 'productA2', ref: 'someref' },
            { label: 'productA3', ref: 'someref' },
         ],
      },
   ],
};
