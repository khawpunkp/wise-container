// src/i18n/translations.ts
export type Lang = 'en' | 'th';

export const messages: Record<Lang, Record<string, string>> = {
   en: {
      'nav.home': 'Home',
      'nav.products': 'Products',
      'nav.services': 'Services',
      'nav.works': 'Works',
      'nav.contact': 'Contact Us',

      'footer.copyright': 'Copyright © 2025 WISE CONTAINER CO., LTD',

      'home.banner.company-name': 'WISE CONTAINER',
      'home.banner.detail1':
         'With over 10 years of experience in buying, selling, renting, and repairing containers,\nour company has continuously expanded into    and transportation services.\nWe also providing 24-hour container storage facilities.',
      'home.banner.detail2':
         '"When it comes to containers, think only of WISE CONTAINER. \nWe give you more than just second-hand containers."',

      'home.seemore': 'See More',

      'home.services.title': 'Our Services',
      'home.services.trade': 'Buy-Sell-Rent-Repair\nContainer Units',
      'home.services.transport': 'Container Transportation\nand Logistics Services',
      'home.services.design': 'Design-Build-Supply\nCustomized Container Units',
      'home.services.yard': '24-Hour Container Yard\nService Available',
      'home.services.freight': 'Comprehensive International\nFreight Services',
      'home.services.freezone': 'Free Zone Facilities for\nImport & Export Goods',
      'home.services.customs': 'Professional Customs\nClearance Assistance',
      'home.services.seeall': 'See All Services',

      'home.vision.title': 'Vision',
      'home.vision.desc':
         'To be a leader in logistics through a fast and efficient management system, cost-effective operations.\nThe design and production of high-standard, quality containers — ensuring quick manufacturing and environmental friendliness.',
      'home.mission.title': 'Mission',
      'home.mission.desc':
         'The mission of logistics management is to plan, operate, and coordinate various activities to effectively meet customer needs by delivering superior service and quality at competitive operational costs.',
      'home.about.quote':
         '“Rental, Design, and Transportation Services\nwith After-Sales Warranty”',

      'home.products.title': 'Our Products',
      'home.products.desc1':
         'WISE CONTAINER offers a variety of container products —Ccontainer houses, Container offices, and Restroom',
      'home.products.desc2': 'designed for functionality, durability, and comfort.',
      'home.products.seeall': 'See All Products',

      'home.works.title': 'Our Works',
      'home.works.desc1': 'Showcasing our container design, installation, and transportation works',
      'home.works.desc2': 'trusted by clients across diverse projects nationwide',
      'home.works.seeall': 'See All Works',

      'home.review.title': 'Reviews and Deliveries',

      'products.title': 'Our Products',
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
      'product.toilet': 'Restroom',

      'services.title': 'Our Services',
      'services.trade.title': 'Buy-Sell-Rent-Repair Container Units',
      'services.transport.title': 'Container Transportation and Logistics Services',
      'services.design.title': 'Design-Build-Supply Customized Container Units',
      'services.yard.title': '24-Hour Container Yard Service Available',
      'services.freight.title': 'Comprehensive International Freight Services',
      'services.freezone.title': 'Free Zone Facilities for Import & Export Goods',
      'services.customs.title': 'Professional Customs Clearance Assistance',
      'services.trade.desc':
         'We offer a full range of container services — including sales, rental (short or long term), and professional maintenance and repair.\n\nWise Container provides high-quality containers in various sizes and types, suitable for every purpose such as cargo transport, storage, or custom modifications.',
      'services.transport.desc':
         'We provide reliable and efficient container transport services using modern trucks and equipment to ensure safe and timely delivery.\n\nOur experienced logistics team oversees every step of the process — from pickup to destination — ensuring smooth and professional operations.',
      'services.design.desc':
         'We specialize in designing and fabricating customized containers — from office units and worker housing to portable toilets and mobile shops.\n\nEach container is built with premium materials and safety standards to ensure durability, functionality, and aesthetic appeal.',
      'services.yard.desc':
         'Our spacious container yard operates 24 hours a day with full security monitoring, capable of handling large volumes of containers.\n\nWe offer both short-term and long-term storage, along with professional lifting and handling services for your convenience and peace of mind.',
      'services.freight.desc':
         'Wise Container offers end-to-end international freight services covering sea, land, and air transportation.\n\nWe ensure your goods are delivered safely and efficiently through global-standard logistics management that optimizes both time and cost.',
      'services.freezone.desc':
         'Our Free Zone area provides secure storage for goods prior to import or export, helping businesses manage costs and customs duties efficiently.\n\nThe facility is equipped with high-standard management systems and offers smooth cross-border cargo handling.',
      'services.customs.desc':
         'Our experienced customs specialists handle all import, export, and documentation procedures with precision and professionalism.\n\nWe focus on accuracy, speed, and transparency to ensure a smooth customs process for your shipments.',

      'works.title': 'Our Works',
      'work1.title': 'Delivered 4 Container Houses',
      'work2.title': 'Welcoming Customers to View Our Sample Container',
      'work3.title': 'Container Houses in White with Blue Trims',
      'work4.title': 'Four-room Container Houses with Full Electrical System',
      'work5.title': '20-foot Container for Sacred Objects',
      'work6.title': '24-Hour Container Transport Service',
      'work7.title': '40-Foot Office Container Divided into 2 Rooms',
      'work8.title': '40-Foot Container House in White',
      'work9.title': '40-Foot Container House Divided into 4 Rooms',
      'work10.title': '40-Foot Container House in Yellow',

      'contact.yard0.title': 'Head Office',
      'contact.yard0.name': 'WISE CONTAINER CO., LTD.\n(Head Office)',
      'contact.yard0.address':
         '6/2 Moo 7, Bang Lamung Subdistrict, Bang Lamung District, Chonburi 20150',
      'contact.yard0.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.441534732855!2d100.94235327586273!3d13.071179787253445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b9004ba1f1b1%3A0x54afdfd9f7768e22!2sWISE%20CONTAINER%20CO.%2C%20LTD.!5e0!3m2!1sen!2sth!4v1758805044382!5m2!1sen!2sth',

      'contact.yard1.title': 'Container House Production Yard',
      'contact.yard1.name': 'WISE CONTAINER CO., LTD. (Yard 1)',
      'contact.yard1.address':
         'Mueang Mai Klang Road, Thung Sukhla Subdistrict, Si Racha District, Chonburi 20230',
      'contact.yard1.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.88951741389985!2d100.93666682142651!3d13.084460229151818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b854a3919a39%3A0x1547485d4d274891!2sWISE%20CONTAINER%20CO.%2C%20LTD.%20(Yard%201)!5e0!3m2!1sen!2sth!4v1760628003887!5m2!1sen!2sth',

      'contact.yard2.title': 'Free Zone Yard',
      'contact.yard2.name': 'WISE CONTAINER CO., LTD. (Yard 2)',
      'contact.yard2.address': '35 Nong Kham Subdistrict, Si Racha District, Chonburi 20230',
      'contact.yard2.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.58630464662!2d101.01271377586339!3d13.125373687204254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c90054100b5f%3A0x29d998afa2b4ce68!2sWISE%20CONTAINER%20CO.%2C%20LTD.%20(Yard%202)!5e0!3m2!1sen!2sth!4v1760628090472!5m2!1sen!2sth',

      'contact.yard3.title': 'Container Deposit & Return Yard',
      'contact.yard3.name': 'WISE CONTAINER CO., LTD. (Yard 3)',
      'contact.yard3.address': '528 Si Racha District, Chonburi 20110',
      'contact.yard3.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.676530183688!2d101.01059177586333!3d13.119666687209447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7006d4fc6bb%3A0xd6e0051fbe7fc930!2sWISE%20CONTAINER%20CO.%2C%20LTD.%20(Yard%203)!5e0!3m2!1sen!2sth!4v1759229971361!5m2!1sen!2sth',

      'contact.yard4.title': 'Container Deposit & Return Yard',
      'contact.yard4.name': 'WISE CONTAINER CO., LTD. (Yard 4)',
      'contact.yard4.address':
         'Nong Yai Bu - Thon Nam Road, Nong Kham Subdistrict, Si Racha District, Chonburi 20110',
      'contact.yard4.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5658651482718!2d101.0069228!3d13.1266662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c900567f2593%3A0x99f11664a582edf!2sWISE%20CONTAINER%20CO.%2C%20LTD.%20(Yard%204)!5e0!3m2!1sen!2sth!4v1760628194456!5m2!1sen!2sth',

      'contact.line': 'Contact via LINE ',

      'contact.opening.normal': 'Open Mon-Sat 08:30-17:30 (Closed Sun)',
      'contact.opening.24': 'Open 24 Hours',
   },
   th: {
      'nav.home': 'หน้าแรก',
      'nav.products': 'สินค้า',
      'nav.services': 'บริการ',
      'nav.works': 'ผลงาน',
      'nav.contact': 'ติดต่อเรา',

      'footer.copyright': 'สงวนลิขสิทธิ์ © 2025 บริษัท ไวซ์ คอนเทนเนอร์ จำกัด',

      'home.banner.company-name': 'ไวซ์ คอนเทนเนอร์',
      'home.banner.detail1':
         'ดำเนินกิจการซื้อ ขาย เช่า ซ่อม ตู้ คอนเทนเนอร์ มามากกว่า 10 ปี\nด้วยประสบการณ์ที่ยาวนานทางเราจึงพัฒนาดำเนินกิจการด้านโลจิสติกส์และการขนส่ง\nอีกทั้งยังมีลานฝากตู้คอนเทนเนอร์ที่เปิดให้บริการตลอด 24 ชม.',
      'home.banner.detail2':
         '"นึกถึงตู้คอนเทนเนอร์บ้านพัก ต้องไวซ์คอนเทนเนอร์เท่านั้น\nเราให้คุณมากกว่าคำว่าตู้คอนเทนเนอร์มือสอง"',

      'home.seemore': 'ดูเพิ่มเติม',

      'home.services.title': 'บริการของเรา',
      'home.services.trade': 'ซื้อ-ขาย-เช่า-ซ่อม\nตู้คอนเทนเนอร์',
      'home.services.transport': 'ให้บริการด้านการขนส่ง\nตู้คอนเทนเนอร์',
      'home.services.design': 'รับออกแบบ-ผลิต-จำหน่าย\nตู้ประเภทต่าง ๆ',
      'home.services.yard': 'มีลานฝากตู้ที่เปิด\nให้บริการตลอด 24 ชั่วโมง',
      'home.services.freight': 'บริการขนส่งสินค้า\nระหว่างประเทศครบวงจร',
      'home.services.freezone': 'พื้นที่เขตปลอดอากรสำหรับ\nสินค้าก่อนนำเข้า-ส่งออก',
      'home.services.customs': 'ให้บริการด้านพิธีการศุลกากร\nอย่างมืออาชีพ',

      'home.services.seeall': 'ดูบริการทั้งหมด',

      'home.vision.title': 'วิสัยทัศน์',
      'home.vision.desc':
         'เป็นผู้นำด้านโลจิสติกส์ด้วยระบบการจัดการงานที่รวดเร็ว\nประหยัดต้นทุน อีกทั้งการออกแบบและผลิตตู้คอนเทนเนอร์\nด้วยมาตรฐานระดับสูง และมีสินค้าคุณภาพ\nการผลิตที่รวดเร็ว และเป็นมิตรต่อสิ่งแวดล้อม',
      'home.mission.title': 'พันธกิจ',
      'home.mission.desc':
         'พันธกิจของการจัดการโลจิสติกส์ คือ การวางแผนการดำเนินงานและประสานการดำเนินงานในกิจกรรมต่าง ๆ ที่มุ่งบรรลุผลในด้านการตอบสนองความต้องการของลูกค้า โดยการนำเสนอบริการและคุณภาพในระดับที่เหนือกว่าด้วยต้นทุนการดำเนินที่สามารถแข่งขันได้อย่างมีประสิทธิภาพ',
      'home.about.quote': '“บริการให้เช่า ออกแบบ ขนส่ง\nและมีประกันหลังการขาย”',

      'home.products.title': 'สินค้าของเรา',
      'home.products.desc1':
         'ไวซ์ คอนเทนเนอร์ นำเสนอตู้คอนเทนเนอร์หลากหลายรูปแบบ ทั้งตู้บ้านพักคนงาน ตู้ออฟฟิศ และตู้ห้องน้ำ',
      'home.products.desc2': 'พร้อมดีไซน์และฟังก์ชันที่ตอบโจทย์ทุกการใช้งาน',
      'home.products.seeall': 'ดูสินค้าทั้งหมด',

      'home.works.title': 'ผลงานของเรา',
      'home.works.desc1': 'รวมผลงานการออกแบบ ติดตั้ง และขนส่งตู้คอนเทนเนอร์จากไวซ์ คอนเทนเนอร์',
      'home.works.desc2': 'ที่ได้รับความไว้วางใจจากลูกค้าหลากหลายโครงการทั่วประเทศ',
      'home.works.seeall': 'ดูผลงานทั้งหมด',

      'home.review.title': 'รีวิวและการส่งมอบ',

      'products.title': 'สินค้าของเรา',
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

      'services.title': 'บริการของเรา',
      'services.trade.title': 'ซื้อ-ขาย-เช่า-ซ่อม ตู้คอนเทนเนอร์',
      'services.transport.title': 'ให้บริการด้านการขนส่งตู้คอนเทนเนอร์',
      'services.design.title': 'รับออกแบบ-ผลิต-จำหน่าย ตู้ประเภทต่าง ๆ',
      'services.yard.title': 'มีลานฝากตู้ที่เปิดให้บริการตลอด 24 ชั่วโมง',
      'services.freight.title': 'บริการขนส่งสินค้าระหว่างประเทศครบวงจร',
      'services.freezone.title': 'พื้นที่เขตปลอดอากรสำหรับสินค้าก่อนนำเข้า-ส่งออก',
      'services.customs.title': 'ให้บริการด้านพิธีการศุลกากรอย่างมืออาชีพ',
      'services.trade.desc':
         'เรามีบริการครบวงจรด้านตู้คอนเทนเนอร์ ไม่ว่าจะเป็นการซื้อ-ขาย ให้เช่าระยะสั้นหรือระยะยาว รวมถึงบริการซ่อมบำรุงโดยทีมช่างผู้เชี่ยวชาญ เพื่อให้ตู้ของคุณพร้อมใช้งานอยู่เสมอ\n\nไวซ์ คอนเทนเนอร์คัดสรรตู้คุณภาพดี หลากหลายขนาดและประเภท เพื่อรองรับทุกการใช้งานของธุรกิจ ไม่ว่าจะใช้ขนส่งสินค้า เก็บของ หรือดัดแปลงเป็นออฟฟิศและที่พัก',
      'services.transport.desc':
         'เรามีระบบขนส่งที่ได้มาตรฐาน พร้อมรถบรรทุกและอุปกรณ์ครบครัน เพื่อรองรับการเคลื่อนย้ายตู้คอนเทนเนอร์ทุกประเภทอย่างปลอดภัยและตรงเวลา\n\nทีมงานของเราดูแลทุกขั้นตอนตั้งแต่ต้นทางถึงปลายทาง ด้วยประสบการณ์และความชำนาญในงานโลจิสติกส์ เพื่อให้การขนส่งของคุณเป็นไปอย่างราบรื่น',
      'services.design.desc':
         'ไวซ์ คอนเทนเนอร์รับออกแบบและผลิตตู้คอนเทนเนอร์ตามความต้องการ ไม่ว่าจะเป็นตู้สำนักงาน บ้านพักคนงาน ห้องน้ำเคลื่อนที่ หรือร้านค้าแบบโมบาย\n\nเราผลิตด้วยวัสดุคุณภาพดีและมาตรฐานความปลอดภัยสูง พร้อมทีมออกแบบที่ให้คำปรึกษาได้ครบวงจร เพื่อให้ได้ผลงานที่ทั้งสวยงามและใช้งานได้จริง',
      'services.yard.desc':
         'เรามีพื้นที่ลานฝากตู้ขนาดใหญ่ รองรับการจัดเก็บตู้คอนเทนเนอร์ได้จำนวนมาก โดยมีระบบรักษาความปลอดภัยและการดูแลอย่างใกล้ชิดตลอด 24 ชั่วโมง\n\nลูกค้าสามารถฝากตู้ได้ทั้งระยะสั้นและระยะยาว พร้อมบริการยก-วางตู้โดยทีมงานมืออาชีพ เพื่อความสะดวกและสบายใจในทุกการจัดเก็บ',
      'services.freight.desc':
         'ไวซ์ คอนเทนเนอร์ให้บริการขนส่งสินค้าระหว่างประเทศอย่างครบวงจร ครอบคลุมทั้งทางเรือ ทางบก และทางอากาศ\n\nเราดำเนินการทุกขั้นตอนด้วยมาตรฐานสากล เพื่อให้การขนส่งระหว่างประเทศของคุณปลอดภัย รวดเร็ว และมีต้นทุนที่คุ้มค่า',
      'services.freezone.desc':
         'เรามีพื้นที่เขตปลอดอากร (Free Zone) สำหรับเก็บสินค้าก่อนดำเนินการนำเข้า-ส่งออก เหมาะสำหรับธุรกิจที่ต้องการบริหารต้นทุนและภาษีอย่างมีประสิทธิภาพ\n\nพื้นที่ของเรามีระบบจัดการมาตรฐานสูง ปลอดภัย และสามารถรองรับการเคลื่อนย้ายสินค้าข้ามประเทศได้อย่างสะดวก',
      'services.customs.desc':
         'เรามีทีมงานผู้เชี่ยวชาญด้านพิธีการศุลกากรที่พร้อมดูแลและให้คำปรึกษาในทุกขั้นตอน ทั้งการนำเข้า ส่งออก และการดำเนินเอกสารต่าง ๆ\n\nไวซ์ คอนเทนเนอร์มุ่งเน้นความถูกต้อง รวดเร็ว และโปร่งใส เพื่อให้การดำเนินงานของคุณเป็นไปอย่างราบรื่นไร้ปัญหา',

      'works.title': 'ผลงานของเรา',
      'work1.title': 'ส่งตู้บ้านพักคนงาน ทั้งหมด 4 ตู้',
      'work2.title': 'ต้อนรับลูกค้ามาชมตู้คอนเทนเนอร์ออฟฟิศตัวอย่าง',
      'work3.title': 'ตู้บ้านพักคนงาน สีขาว-ขอบน้ำเงิน',
      'work4.title': 'ตู้บ้านพักคนงานแบบ 4 ห้อง พร้อมเดินระบบไฟ',
      'work5.title': 'ตู้ใส่วัตถุมงคล ขนาด 20 ฟุต',
      'work6.title': 'บริการขนส่งตู้คอนเทนเนอร์ตลอด 24 ชั่วโมง',
      'work7.title': 'ตู้ออฟฟิศ 40 ฟุต แบ่ง 2 ห้อง',
      'work8.title': 'ตู้บ้านพักสีขาว ขนาด 40 ฟุต',
      'work9.title': 'ตู้บ้านพักคนงาน 40 ฟุต แบ่ง 4 ห้อง',
      'work10.title': 'ตู้บ้านพักคนงานสีเหลือง 40 ฟุต',

      'contact.yard0.title': 'สำนักงานใหญ่',
      'contact.yard0.name': 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด\n(สำนักงานใหญ่)',
      'contact.yard0.address': '6/2 หมู่ที่ 7 ตำบลบางละมุง อำเภอบางละมุง จังหวัดชลบุรี 20150',
      'contact.yard0.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.441534732855!2d100.94235327586273!3d13.071179787253445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b9004ba1f1b1%3A0x54afdfd9f7768e22!2sSomewhere!5e0!3m2!1sth!2sth!4v1758805044382!5m2!1sth!2sth',

      'contact.yard1.title': 'ลานผลิตตู้คอนเทนเนอร์บ้านพัก',
      'contact.yard1.name': 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด (ลาน 1)',
      'contact.yard1.address': 'ถนนเมืองใหม่กลาง ตำบลทุ่งสุขลา อำเภอศรีราชา ชลบุรี 20230',
      'contact.yard1.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.88951741389985!2d100.93666682142651!3d13.084460229151818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b854a3919a39%3A0x1547485d4d274891!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4hOC4reC4meC4l-C5jOC4nuC4ueC4pSDguIjguLPguIHguLHguJQo4LmB4Lir4Lil4Lih4LiJ4Lia4Lix4LiHKQ!5e0!3m2!1sth!2sth!4v1760628003887!5m2!1sth!2sth',

      'contact.yard2.title': 'ลานตู้เขตปลอดอากร',
      'contact.yard2.name': 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด (ลาน 2)',
      'contact.yard2.address': '35 ตำบล หนองขาม อำเภอศรีราชา ชลบุรี 20230',
      'contact.yard2.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.58630464662!2d101.01271377586339!3d13.125373687204254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c90054100b5f%3A0x29d998afa2b4ce68!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5hOC4p-C4i-C5jCDguITguK3guJnguYDguJfguJnguYDguJnguK3guKPguYwg4LiI4Liz4LiB4Lix4LiUICjguKXguLLguJkyKQ!5e0!3m2!1sth!2sth!4v1760628090472!5m2!1sth!2sth',

      'contact.yard3.title': 'ลานรับฝาก-คืน ตู้',
      'contact.yard3.name': 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด (ลาน 3)',
      'contact.yard3.address': '528 อำเภอศรีราชา จังหวัดชลบุรี 20110',
      'contact.yard3.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.676530183688!2d101.01059177586333!3d13.119666687209447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7006d4fc6bb%3A0xd6e0051fbe7fc930!2zSomewhere!5e0!3m2!1sth!2sth!4v1759229971361!5m2!1sth!2sth',

      'contact.yard4.title': 'ลานรับฝาก-คืน ตู้',
      'contact.yard4.name': 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด (ลาน 4)',
      'contact.yard4.address': 'หนองยายบู่-ท่อน้ำ ตำบลหนองขาม อำเภอศรีราชา ชลบุรี 20110',
      'contact.yard4.map':
         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5658651482718!2d101.0069228!3d13.1266662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c900567f2593%3A0x99f11664a582edf!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5hOC4p-C4i-C5jCDguITguK3guJnguYDguJfguJnguYDguJnguK3guKPguYwg4LiI4Liz4LiB4Lix4LiUICjguKXguLLguJk0KQ!5e0!3m2!1sth!2sth!4v1760628194456!5m2!1sth!2sth',

      'contact.line': 'ติดต่อผ่านไลน์ ',
      'contact.opening.normal': 'เปิด จันทร์ - เสาร์ 08.30-17.30 น. (หยุด อาทิตย์)',
      'contact.opening.24': 'เปิด 24 ชม.',
   },
};
