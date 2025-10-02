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

      'product.worker': 'Container House',
      'product.worker.5-40': 'Container House 5 Rooms 40 ft',
      'product.worker.4-40': 'Container House 4 Rooms 40 ft',
      'product.worker.3-40': 'Container House 3 Rooms 40 ft',
      'product.worker.2-40': 'Container House 2 Rooms 40 ft',
      'product.worker.2-20': 'Container House 2 Rooms 20 ft',
      'product.worker.1-20': 'Container House 1 Room 20 ft',
      'product.office': 'Container Office',
      'product.office.5-40': 'Container Office 5 Rooms 40 ft',
      'product.office.4-40': 'Container Office 4 Rooms 40 ft',
      'product.office.3-40': 'Container Office 3 Rooms 40 ft',
      'product.office.2-40': 'Container Office 2 Rooms 40 ft',
      'product.office.2-20': 'Container Office 2 Rooms 20 ft',
      'product.office.1-20': 'Container Office 1 Room 20 ft',
      'product.toilet': 'Toilet',

      'contact.yard1.title': 'Container Yard',
      'contact.yard1.name': 'WISE CONTAINER CO., LTD',
      'contact.yard1.opening': 'Open Mon-Sat 08:30-17:30 (Closed Sun)',
      'contact.yard1.address':
         '6/2, Moo 7, Bang Lamung Subdistrict, Bang Lamung District, Chonburi, 20150',
      'contact.yard1.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.441534732855!2d100.94235327586273!3d13.071179787253445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b9004ba1f1b1%3A0x54afdfd9f7768e22!2sSomewhere!5e0!3m2!1sen!2sth!4v1758805044382!5m2!1sen!2sth',
      'contact.yard1.tel': '094-481-9722 (Mr.Moo)',
      'contact.yard3.title': '24-Hour Container Yard',
      'contact.yard3.name': 'WISE CONTAINER CO., LTD (Yard 3)',
      'contact.yard3.opening': 'Open 24 Hours',
      'contact.yard3.address': '528, Nong Kham Subdistrict, Si Racha District, Chonburi, 20110',
      'contact.yard3.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.676530183688!2d101.01059177586333!3d13.119666687209447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7006d4fc6bb%3A0xd6e0051fbe7fc930!2zSomewhere!5e0!3m2!1sen!2sth!4v1759229971361!5m2!1sen!2sth',
      'contact.yard3.tel': '063-356-7001 (Mr.Kim)',
      'contact.line': 'Contact via LINE ',
   },
   th: {
      'nav.home': 'หน้าแรก',
      'nav.products': 'สินค้า',
      'nav.renting': 'เช่า',
      'nav.works': 'ผลงาน',
      'nav.contact': 'ติดต่อเรา',

      'footer.copyright': 'สงวนลิขสิทธิ์ © 2025 บริษัท ไวซ์ คอนเทนเนอร์ จำกัด',

      'product.worker': 'ตู้บ้านพักคนงาน',
      'product.worker.5-40': 'ตู้บ้านพักคนงาน 5 ห้อง 40 ฟุต',
      'product.worker.4-40': 'ตู้บ้านพักคนงาน 4 ห้อง 40 ฟุต',
      'product.worker.3-40': 'ตู้บ้านพักคนงาน 3 ห้อง 40 ฟุต',
      'product.worker.2-40': 'ตู้บ้านพักคนงาน 2 ห้อง 40 ฟุต',
      'product.worker.2-20': 'ตู้บ้านพักคนงาน 2 ห้อง 20 ฟุต',
      'product.worker.1-20': 'ตู้บ้านพักคนงาน 1 ห้อง 20 ฟุต',
      'product.office': 'ตู้ออฟฟิศ',
      'product.office.5-40': 'ตู้ออฟฟิศ 5 ห้อง 40 ฟุต',
      'product.office.4-40': 'ตู้ออฟฟิศ 4 ห้อง 40 ฟุต',
      'product.office.3-40': 'ตู้ออฟฟิศ 3 ห้อง 40 ฟุต',
      'product.office.2-40': 'ตู้ออฟฟิศ 2 ห้อง 40 ฟุต',
      'product.office.2-20': 'ตู้ออฟฟิศ 2 ห้อง 20 ฟุต',
      'product.office.1-20': 'ตู้ออฟฟิศ 1 ห้อง 20 ฟุต',
      'product.toilet': 'ห้องน้ำ',

      'contact.yard1.title': 'ลานตู้คอนเทนเนอร์',
      'contact.yard1.name': 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด',
      'contact.yard1.opening': 'เปิด จันทร์ - เสาร์ 08.30-17.30 น. (หยุด อาทิตย์)',
      'contact.yard1.address': '6/2 หมู่ที่ 7 ตำบลบางละมุง อำเภอบางละมุง จังหวัดชลบุรี 20150',
      'contact.yard1.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.441534732855!2d100.94235327586273!3d13.071179787253445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b9004ba1f1b1%3A0x54afdfd9f7768e22!2sSomewhere!5e0!3m2!1sth!2sth!4v1758805044382!5m2!1sth!2sth',
      'contact.yard1.tel': '094-481-9722 (คุณหมู)',
      'contact.yard3.title': 'ลานตู้ 24 ชั่วโมง',
      'contact.yard3.name': 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด (ลาน 3)',
      'contact.yard3.opening': 'เปิด 24 ชม.',
      'contact.yard3.address': '528 ตำบลหนองขาม อำเภอศรีราชา จังหวัดชลบุรี 20110',
      'contact.yard3.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.676530183688!2d101.01059177586333!3d13.119666687209447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7006d4fc6bb%3A0xd6e0051fbe7fc930!2zSomewhere!5e0!3m2!1sen!2sth!4v1759229971361!5m2!1sen!2sth',
      'contact.yard3.tel': '063-356-7001 (คุณคิม)',
      'contact.line': 'ติดต่อผ่านไลน์ ',
   },
};
