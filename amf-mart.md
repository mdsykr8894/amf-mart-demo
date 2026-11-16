# AMF Mart

Fail ini ialah living project record untuk maklumat asas, keputusan baharu dan perkara terbuka AMF Mart. Ia bukan tempat untuk menyimpan draft code, sejarah penuh perbincangan atau cadangan lama yang sudah tidak digunakan.

## Runtime Source of Truth

Untuk nilai yang dipaparkan oleh website sekarang, rujuk `config.js` (maklumat kedai, contact, aset dan destination), `catalogue/catalog.json` (data produk) dan token `:root` di `index.html` (tema visual). Nota perbincangan lama di bawah kekal sebagai rekod keputusan, tetapi tidak mengatasi tiga sumber runtime ini.

## Current Status

- Website prototype telah diimplementasikan dalam satu root `index.html` mengikut `IMPLEMENTATION_PLAN.md`.
- Visual refresh terkini menggunakan Manrope, palette light yang lebih cerah, service highlights di antara `SHOP BY CATEGORY` dan `FEATURED PRODUCTS`, active-filter chips, Product Detail H1, dan page-specific responsive polish.
- Products Page menggunakan grid responsif; desktop memaparkan empat card dalam satu baris, manakala homepage mengekalkan lima card dalam satu baris.
- `config.js` ialah sumber mutable business values, `catalogue/catalog.json` ialah sumber catalogue semasa, dan fallback hanya dimuatkan apabila perlu untuk preview `file://` atau apabila fetch gagal.
- Direct `file://` preview kini menggunakan `catalogue/catalog-fallback.js`, iaitu generated data-only compatibility snapshot daripada catalogue canonical; HTTP mode kekal menggunakan `fetch` ke `catalogue/catalog.json`.
- Browser smoke verification telah dijalankan melalui local HTTP server pada desktop dan mobile viewport untuk route, catalogue loading, image paths, filtering, pagination, contact gating dan overflow.
- Website masih prototype catalogue; production wording, business-data confirmation, asset-rights approval, final visual approval dan deployment hardening kekal terbuka.

## Project Purpose

AMF Mart prototype ini menerangkan kedai dan membantu pelanggan browse catalogue elektrik, melihat product details serta technical specifications, kemudian menghubungi AMF Mart untuk pertanyaan lanjut. Ia bukan checkout, ordering atau live-inventory system.

## Business Information

Maklumat kerja yang pernah direkodkan:

- Nama awam: `AMF Mart`.
- Nama syarikat: `AMF JAYA SOLUTION` `[perlu disahkan]`.
- Jenis perniagaan berdasarkan nama listing: kedai aksesori elektrik.
- Lokasi umum: Kampung Raja, Terengganu.
- Waktu operasi yang dipaparkan pada listing: Sabtu hingga Khamis, 8:30 pagi hingga 5:30 petang.
- Jumaat: tutup.

Maklumat tentang pelanggan sasaran, services, delivery, pemasangan, sourcing, sejarah syarikat, staff, pengalaman dan kelebihan perniagaan belum ditetapkan sebagai kandungan rasmi.

## Location and Contact Evidence

Maklumat ini direkodkan sebagai evidence kerja sahaja. Ia tidak bermaksud semua contact detail sudah diluluskan untuk publication.

- Nama listing: `AMF MART (Electrical Accessories Shop)`.
- Alamat pada listing: `Lot 4875 Jalan Batu Tumbuh, Dalam, Kampung Gong Kepas, 22200 Kampung Raja, Terengganu, Malaysia`.
- Koordinat dalam link Google Maps: `5.7638359, 102.56651`.
- Link Google Maps yang diberikan oleh Syakir:

```text
https://www.google.com/maps/place/AMF+MART+(Electrical+Accessories+Shop)/@5.7638359,102.56651,17z/data=!3m1!4b1!4m6!3m5!1s0x31b6ef1b7fa13b57a:0xf7938b6a43365897!8m2!3d5.7638359!4d102.56651!16s%2Fg%2F11w2lp13fb?hl=en&entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D
```

- Nombor telefon yang dipaparkan: `+6 096186791`.
- Email yang dipaparkan: `amfjaya@gmail.com`.
- Facebook destination yang diberikan oleh Syakir: `https://www.facebook.com/AmfMart/` `[user-provided]`.
- TikTok tidak dimasukkan dalam prototype buat masa ini.
- Alamat, koordinat dan waktu operasi datang daripada context Google Maps yang diberikan.
- Nombor telefon prototype kekal `[temporary-placeholder; not production verified]` sehingga Syakir memberikan nombor production sebenar.
- WhatsApp prototype menggunakan `https://wa.me/60100000000` sebagai temporary placeholder yang boleh ditekan dan perlu diganti kemudian.
- Facebook URL prototype telah diberikan oleh Syakir; status ini tidak membuktikan publication rights atau ownership beyond the supplied destination.
- Rating dan review tidak disimpan sebagai kandungan website pada peringkat ini.

## Catalogue Source

Sumber catalogue kerja untuk prototype website:

```text
/root/workspace/project/amf-mart/catalogue/catalog.json
/root/workspace/project/amf-mart/catalogue/assets/product-images/
```

Catalogue kerja semasa mengandungi 3,181 products dalam 15 primary categories dan 210 brands. Ia kekal sebagai catalogue prototype dan bukan live inventory AMF Mart.

Sumber catalogue penuh untuk perancangan dan rujukan kekal berasingan:

```text
/root/workspace/project/amf-mart/planning/catalogue/catalog.json
/root/workspace/project/amf-mart/planning/catalogue/assets/
```

Hubungan dengan sumber asal, hak penggunaan imej, ketepatan product data dan kesesuaian publication perlu disemak sebelum digunakan sebagai kandungan website awam.

## Capability Boundary

Buat masa ini tiada fungsi transaksi yang diluluskan sebagai aktif. Jangan menganggap website mempunyai:

- online ordering;
- checkout;
- payment;
- live stock;
- delivery tracking;
- account atau login backend;
- order history;
- contact form submission.

Jangan mereka harga, stock, availability, order success, payment success, warranty, promotion, review atau commercial claim.

## Wording Status

- Wording website lama bukan baseline semasa.
- Sumber wording semasa: `/root/workspace/project/amf-mart/wording.md`.
- Wording semasa digunakan sebagai prototype copy; final production wording masih tertakluk kepada semakan dan pengesahan Syakir.

## Homepage Header Discussion

Struktur ini ialah keputusan semasa untuk prototype homepage. Wording dan behaviour yang direkodkan di sini ialah pilihan implementation semasa; final production copy masih tertakluk kepada semakan.

### Announcement Bar

- Announcement Bar berada paling atas.
- Ia menggunakan satu utility message ringkas berdasarkan waktu operasi yang tersedia dalam config.
- Announcement Bar akan hilang apabila user scroll.
- Announcement Bar tidak menggunakan rotating carousel dalam prototype.
- Wording prototype: `Saturday – Thursday · 8:30 AM – 5:30 PM · Friday: Closed`.
- Jangan gunakan claim promotion, discount, delivery, installation atau payment sehingga perkara tersebut disahkan.

### Sticky Main Navbar

- Main Navbar berada di bawah Announcement Bar.
- Main Navbar kekal di atas ketika user scroll.
- Logo berada di sebelah kiri.
- Navigation items berada di bahagian tengah: `Home`, `Products`, `About Us` dan `Contact`.
- Cart berada di sebelah kanan dan membawa kepada Cart empty state.
- Login icon dipaparkan sebagai clickable control ke route `#/login`; halaman Login ialah prototype dan belum menyambung account authentication.
- Warna putih ialah arah awal untuk navbar buat masa ini.
- Font, saiz, border, shadow dan icon style mengikut `design.md`.
- Label navigation yang dipilih untuk prototype ialah `Products`.

## Footer Discussion

Struktur footer semasa menggunakan empat section utama dalam satu footer yang sama.

### Brand

- Logo putih `AMF Mart` berada di bahagian kiri.
- Penerangan pendek: `Keperluan elektrik untuk rumah, kerja teknikal dan perniagaan.`
- Icon media sosial diletakkan di bawah ayat tersebut: WhatsApp, Facebook dan TikTok.
- Gunakan actual brand icons, icon-only, dengan tooltip dan accessible label.
- WhatsApp menggunakan temporary placeholder destination buat masa ini; destination production perlu diganti kemudian. Facebook kekal menggunakan URL yang diberikan.

### Explore

- `Home`
- `Products`
- `About Us`
- `Contact`

### Visit the Store

- Lokasi umum: `Kampung Raja, Terengganu`.
- Waktu operasi: Saturday to Thursday, 8:30 AM to 5:30 PM.
- Jumaat: tutup.
- `View Location` hanya digunakan apabila map link disahkan.

### Contact Us

- Kicker: `CONTACT US`.
- Heading: `AMF Mart`.
- Phone: `0100000000` daripada config semasa; nilai ini masih placeholder dan perlu disahkan.
- Email: `Email to be confirmed` sehingga email sebenar diberikan.
- Visitor count: kiraan prototype untuk browser semasa sahaja, bukan statistik global production.
- Visitor counter: `Visits: [number]`.
- Visitor counter hanya dipaparkan apabila sistem kiraan sebenar sudah aktif. Jangan gunakan nombor statik palsu.

### Footer Bottom Line

- Sebelah kiri: `© AMF Mart. All rights reserved.`
- Sebelah kanan: `Terms & Conditions | Privacy Policy` sebagai paparan footer; page polisi sebenar belum dibina.

`Customer Support` bukan section berasingan dalam struktur semasa. Fungsi bantuan diwakili oleh Contact Us column dan Contact page.

Floating WhatsApp button kekal sebagai elemen berasingan di bahagian bawah kanan viewport. Ia kini menjadi active link menggunakan temporary placeholder dalam `config.js`, supaya prototype boleh ditekan; URL itu bukan destination production dan perlu diganti kemudian.

## Homepage Banner Discussion

- Banner sementara yang diberikan oleh Syakir disimpan di:

```text
/root/workspace/project/amf-mart/assets/banners/homepage-banner-temporary.png
```

- Saiz asset: 1672 × 941 px.
- Asset ini digunakan untuk mengisi ruang banner homepage semasa perbincangan dan prototype.
- Asset ini belum dianggap sebagai final banner atau production-cleared asset.
- Teks yang sudah tertanam dalam gambar, termasuk `GENUINE PRODUCTS`, `RELIABLE SERVICE` dan `24 · 7 · 365`, belum dianggap sebagai wording atau claim rasmi AMF Mart.
- Banner copy, carousel behaviour dan asset final masih terbuka untuk perbincangan.

## Homepage Category Discussion

- Selepas banner, homepage terus masuk ke section `SHOP BY CATEGORY`; service highlights diletakkan selepas category dan sebelum `FEATURED PRODUCTS`.
- Tiada ayat penerangan pendek di bawah heading.
- Kandungan di bawah heading ialah icon kategori dan nama kategori yang ringkas.
- Homepage hanya memaparkan lima category cards sebagai pilihan utama.
- Link di sebelah heading menggunakan wording `View All Categories` dan membawa user ke paparan penuh semua kategori.
- Katalog semasa mengandungi 15 top-level categories; jumlah ini disahkan daripada `/root/workspace/project/amf-mart/planning/catalogue/catalog.json`.
- Lima kategori prototype ialah `Lighting`, `Fans`, `Cables`, `Switches` dan `Tools`.
- Pilihan ini hanya menentukan homepage shortcut; ia tidak mengubah 15 primary categories dalam katalog.
- Homepage category cards membawa user ke Products Page dengan category yang dipilih.

## Homepage Featured Products and Brand Discussion

### Featured Products

- Section heading: `Featured Products`.
- Link di sebelah heading: `View All Products`.
- Homepage menggunakan satu baris sahaja dengan 4 Featured Product cards.
- Product card yang sama digunakan di homepage dan Products page; tiada versi card berasingan.
- Product card mesti menggunakan data yang tersedia dalam katalog dan tidak boleh mereka harga, stock, rating, promotion atau claim komersial.

## Products Page

Products Page ialah catalogue browsing page untuk membantu user mencari dan melihat produk. Page ini tidak menjadi checkout atau online ordering page.

- Announcement Bar, Main Navbar dan Footer dikongsi dengan page lain dan tidak diubah dalam kemas kini ini.
- Page Header menggunakan susunan compact, bukan hero besar.
- Breadcrumb: `Home / Products`.
- Tajuk Page Header: `All Products`.
- Penerangan Page Header: `Browse our product catalogue.`.
- Selepas Page Header, page memaparkan search field `Search products...`.
- Search mencari product name, model, brand, category dan specification text apabila field tersebut tersedia.
- Catalogue toolbar memaparkan result count yang datang daripada data katalog dan pilihan sorting.
- Sorting yang dicadangkan: `Relevance`, `Name A–Z` dan `Name Z–A`.

### Category and Filter Sidebar

- Desktop menggunakan sidebar di sebelah kiri dan product grid di sebelah kanan.
- `All Products` menjadi pilihan pertama dan aktif secara default.
- Sidebar memaparkan semua 15 primary categories menggunakan label pendek:
  - `Lighting`
  - `Fans`
  - `Cables`
  - `Conduit`
  - `Switches`
  - `Protection`
  - `Industrial`
  - `Testing`
  - `Tools`
  - `Earthing`
  - `Data`
  - `Appliances`
  - `HVAC & Pumps`
  - `Safety`
  - `Other`
- Nama penuh category kekal dalam data katalog. Label pendek hanya digunakan untuk paparan UI.
- Brand filter diasingkan daripada category filter.
- Technical filters hanya dipaparkan apabila relevan dan field teknikal wujud dalam category yang dipilih.
- `Clear Filters` mengembalikan paparan kepada `All Products`.
- Mobile menggunakan filter drawer atau filter panel penuh.

### Product Grid

- Product grid menggunakan 3 cards untuk setiap baris.
- Setiap page memaparkan 3 baris, iaitu 9 product cards.
- Bilangan 9 ialah page size untuk browsing, bukan jumlah live stock atau jumlah keseluruhan produk AMF Mart.
- Product card menggunakan design yang sama di homepage dan Products Page.
- Product card memaparkan Product Image, Product Name, Brand · Model jika tersedia, Short Description jika tersedia dan `View Details`.
- Product card tidak memaparkan harga, stock, rating, review, discount, promotion, delivery badge, `Add to Cart` atau claim komersial yang belum disahkan.
- `View Details` membawa user ke Product Detail Page.

### Pagination and States

- Pagination digunakan selepas product grid dengan `Previous`, nombor page dan `Next`.
- Page mempunyai loading state, empty state, no-result state, error state, clear-filter state dan image fallback state.
- Tiada `View All Products`, promotional banner, New Arrivals atau section tambahan dalam Products Page.
- Grid tablet dan mobile akan reflow tanpa mengubah design Product Card.

## Product Detail Page

Product Detail Page digunakan untuk membantu user memahami satu produk dengan lebih jelas sebelum menghubungi AMF Mart.

- Announcement Bar, Main Navbar dan Footer kekal sama seperti page lain dan tidak diubah dalam kemas kini ini.
- Page tidak menggunakan Page Header besar.
- Breadcrumb diletakkan di bahagian atas content: `Home / Products / [Category] / [Product Name]`.
- Main product section menggunakan dua bahagian: image atau gallery di sebelah kiri dan product information di sebelah kanan.
- Image hanya menggunakan asset produk yang tersedia dalam katalog.
- Product information memaparkan category, Product Name, Brand, Model, Short Description dan Product Code atau SKU jika field tersebut tersedia.
- `Product Description` dipaparkan selepas main product section apabila description yang bermakna tersedia.
- `Technical Specifications` dipaparkan dalam senarai atau table dan hanya mengandungi field teknikal yang wujud serta mempunyai value.

### Product Actions

- Button `WhatsApp` diletakkan dalam main product section sebagai action utama untuk pertanyaan produk.
- WhatsApp kini menjadi active link menggunakan temporary placeholder yang diminta untuk prototype. URL sebenar perlu menggantikannya sebelum production.
- Add to Cart tidak digunakan sebagai action utama buat masa ini; product detail memaparkan nota ringkas bahawa cart belum tersedia supaya UI tidak memberi janji fungsi yang belum disokong.
- Cart tidak boleh mengubah cart count, mencipta order atau menunjukkan success state palsu.
- Maklumat harga, stock, payment, delivery, rating, review, discount, warranty dan promotion tidak dipaparkan.

### Related Products

- Section `Related Products` diletakkan di bawah Product Description dan Technical Specifications.
- Related Products mengambil produk daripada primary category yang sama.
- Produk yang sedang dibuka tidak boleh muncul semula dalam section ini.
- Related Products menggunakan Product Card yang sama seperti homepage dan Products Page.
- Desktop memaparkan 4 product cards dalam satu row.
- Product Card menggunakan action `View Details`.
- Jika kurang daripada empat produk berkaitan tersedia, hanya produk yang wujud dipaparkan.
- Jika tiada produk berkaitan, paparkan `No related products available.`.

### Product Detail States

- Page mempunyai product not found state, image fallback state, missing field state, WhatsApp unavailable state, cart unavailable state dan related products empty state.
- Mobile menyusun content kepada satu column: breadcrumb, image, product information, actions, description, specifications dan Related Products.
- Related Products akan reflow mengikut lebar skrin tanpa mengubah shared Product Card design.

## Cart Page

Cart Page digunakan untuk memaparkan keadaan cart semasa. Oleh sebab fungsi cart belum aktif, versi semasa page ini hanya menggunakan empty cart state yang jujur.

- Announcement Bar, Main Navbar dan Footer kekal sama seperti page lain dan tidak diubah dalam kemas kini ini.
- Breadcrumb: `Home / Cart`.
- Page Header hanya menggunakan tajuk `Cart` dan tidak memerlukan hero atau banner besar.
- Cart bermula dan kekal kosong dalam versi semasa.

### Empty Cart State

- Gunakan icon cart yang sebenar atau sesuai sebagai visual utama.
- Paparkan heading `Your cart is empty.`.
- Paparkan penerangan `No products have been added to your cart yet.`.
- Sediakan button `Browse Products` yang membawa user ke Products Page.

### Cart Capability Boundary

- Product item, quantity, harga, subtotal, delivery fee, total, payment, checkout dan order confirmation tidak dipaparkan.
- Cart count tidak boleh berubah kerana Add to Cart belum berfungsi.
- Page tidak boleh menunjukkan cart success state atau order state palsu.
- Struktur cart penuh, order summary dan checkout hanya akan dipertimbangkan selepas fungsi cart sebenar tersedia.
- Mobile mengekalkan empty state yang sama dalam satu column tanpa menambah section yang tidak diperlukan.

## About Us Page

About Us Page menerangkan AMF Mart sebagai kedai barangan elektrik. Struktur ini ialah keputusan semasa untuk page tersebut dan tidak menjadikan website atau customer journey sebagai fokus utama.

- Announcement Bar, Main Navbar dan Footer kekal sama seperti page lain.
- Page menggunakan Page Header compact yang konsisten dengan Products Page.
- Page tidak menggunakan hero besar, hero carousel atau gambar storefront yang belum disahkan.

### Page Header

```text
Home / About Us
About Us
A closer look at AMF Mart and its electrical product range.
```

### About AMF Mart

- Section utama menggunakan layout dua bahagian.
- Sebelah kiri mengandungi penerangan tentang AMF Mart.
- Sebelah kanan mengandungi visual typographic panel, bukan claim statistik atau sejarah syarikat.
- Draft wording semasa:

```text
AMF Mart ialah kedai barangan elektrik di Kampung Raja. Rangkaian produknya merangkumi lampu, kipas, kabel, switches, protection devices, tools dan pelbagai komponen elektrik lain.

Keperluan elektrik berbeza mengikut tempat dan tugasan. Pemilik rumah mungkin mencari lampu atau kipas, manakala juruteknik dan kontraktor memerlukan kabel, protection devices, tools atau komponen yang lebih khusus. AMF Mart melayani keperluan elektrik untuk rumah, kerja teknikal dan perniagaan.
```

- Visual panel menggunakan kandungan ringkas:

```text
AMF MART
Electrical Products
Kampung Raja, Terengganu
Home Use
Technical Work
Business Needs
```

### What You Can Find

- Section ini menggunakan compact category index, bukan Product Card besar.
- Semua 15 short category labels dipaparkan dalam grid atau index ringkas:
  `Lighting`, `Fans`, `Cables`, `Conduit`, `Switches`, `Protection`, `Industrial`, `Testing`, `Tools`, `Earthing`, `Data`, `Appliances`, `HVAC & Pumps`, `Safety`, `Other`.
- Icon hanya digunakan jika asset icon sebenar tersedia.
- Tiada penerangan panjang atau product claim baharu dicipta di bawah category.

### For Different Needs

- Section ini menggunakan tiga content blocks yang ringkas.
- Labels semasa: `Home Use`, `Technical Work` dan `Business Needs`.
- Draft descriptions:

```text
Home Use
Keperluan elektrik untuk kegunaan rumah dan harian.

Technical Work
Kabel, tools dan komponen untuk kerja teknikal.

Business Needs
Produk dan aksesori untuk keperluan kerja serta perniagaan.
```

- Desktop memaparkan tiga blocks dalam satu row.
- Mobile menyusun blocks kepada satu column.

### Visit the Store

- Section ini ialah panel kecil, bukan section maklumat kedai yang besar.
- Maklumat semasa:

```text
Visit the Store
Kampung Raja, Terengganu
Saturday to Thursday, 8:30 AM to 5:30 PM
Friday: Closed
View Location
```

- `View Location` hanya menjadi link aktif selepas map link disahkan.
- Panel ini tidak menambah nombor telefon atau contact detail yang belum disahkan.

### Closing CTA

- Closing CTA menggunakan section accent yang ringkas sebelum Footer.
- Heading: `Looking for Something Specific?`.
- Draft wording:

```text
Jika awak sedang mencari produk tertentu, hubungi AMF Mart untuk pertanyaan lanjut.
```

- Actions: `Contact Us` dan `Browse Products`.
- CTA tidak memaparkan harga, stock, availability atau order promise.

### About Us Page Order

```text
Announcement Bar
Main Navbar
Page Header
About AMF Mart
What You Can Find
For Different Needs
Visit the Store
Looking for Something Specific?
Footer
```

- Struktur dan wording ini ialah draft semasa untuk semakan Syakir.
- Wording akhir, detail sebenar AMF Mart dan publication claims masih boleh berubah selepas maklumat tambahan diberikan.

## Contact Page

Contact Page digunakan untuk memaparkan contact details, waktu operasi dan lokasi AMF Mart. Fokus page ini ialah saluran hubungan sebenar, bukan contact form atau fungsi submission yang belum mempunyai backend.

- Announcement Bar, Main Navbar dan Footer kekal sama seperti page lain.
- `Contact` menjadi active page pada Main Navbar.
- Page menggunakan Page Header compact yang konsisten dengan Products Page dan About Us Page.
- Page tidak menggunakan hero besar atau section tambahan yang tidak berkaitan dengan contact.

### Page Header

```text
Home / Contact
Contact
Get in touch with AMF Mart.
```

### Contact AMF Mart

- Main contact section menggunakan layout dua kolum pada desktop.
- Sebelah kiri mengandungi contact information dan contact options.
- Contact options yang dirancang ialah `Phone`, `WhatsApp` dan `Facebook`; TikTok tidak dimasukkan buat masa ini.
- Gunakan actual brand icons untuk social contact options.
- Nombor `0100000000` dipaparkan sebagai temporary display value tetapi tidak dijadikan active phone atau WhatsApp link.
- Facebook URL yang diberikan oleh Syakir diaktifkan untuk prototype.
- WhatsApp hanya menjadi active link selepas nombor atau URL sebenar disahkan.

### Contact Information Wording

```text
Contact AMF Mart

Have a question about a product or need more information? Contact AMF Mart through the available channels below.

Phone
[Phone number to be confirmed]

WhatsApp
Contact AMF Mart on WhatsApp

Facebook
Visit AMF Mart on Facebook
```

### Visit the Store

- Maklumat kedai dipaparkan dalam panel di sebelah kanan pada desktop atau selepas contact options pada mobile.
- Maklumat semasa:

```text
Visit the Store
AMF Mart
Kampung Raja, Terengganu

Saturday to Thursday
8:30 AM – 5:30 PM

Friday: Closed
```

- Alamat penuh hanya digunakan selepas publication details disahkan.

### Location / Map Panel

- Map panel boleh menggunakan map embed atau static map preview selepas source disahkan.
- Button `View Location` hanya menjadi link aktif selepas map link disahkan.
- Jangan paparkan map placeholder yang memberi gambaran bahawa location link sudah aktif.

```text
View Location
```

### Contact CTA

- Closing CTA diletakkan selepas contact dan location content.
- CTA menggunakan wording ringkas:

```text
Need help finding a product?

Contact AMF Mart for more information.

Contact Us
```

- `Contact Us` tidak boleh menghasilkan success state palsu atau menjanjikan submission jika backend belum tersedia.

### Contact Form Boundary

- Contact form tidak dimasukkan dalam versi semasa.
- Form hanya akan dipertimbangkan selepas email atau inbox penerima, backend submission, success state, error state, spam protection dan privacy notice tersedia.
- Page tidak boleh menunjukkan bahawa mesej telah dihantar jika tiada sistem yang menerimanya.

### Contact Page Order

```text
Announcement Bar
Main Navbar
Page Header
Contact AMF Mart
Visit the Store
Location / Map Panel
Need help finding a product?
Footer
```

- Struktur ini ialah draft semasa untuk semakan Syakir.
- Contact details, social destinations dan map link perlu disahkan sebelum diaktifkan pada website production.

## Design Direction and Visual System

The visual system for the future website is recorded in:

```text
/root/workspace/project/amf-mart/design.md
```

- The current working direction is `Light Product-Led Storefront`.
- The supplied retail reference is used for composition, spacing, surface hierarchy, product-led hero treatment, compact category navigation, product-card rhythm and dark Footer structure only.
- The reference's purple palette, wording, product brands, prices, ratings, promotions, trust claims and proprietary identity are not copied.
- The AMF Mart palette uses white and warm neutral surfaces, charcoal structure and electrical red as a controlled accent.
- The default theme is light. A dark theme toggle is deferred until both themes can be implemented and tested.
- Proposed primary typeface: `Manrope` with `Arial, sans-serif` fallback.
- Proposed desktop Product Grid: 3 cards per row on Products Page, 4 Related Product cards per row, and 4 Featured Product cards per homepage row.
- Responsive behaviour covers mobile, tablet, desktop and wide desktop states, with content-driven reflow and no horizontal overflow.
- The design spec defines typography, token roles, layout, components, states, motion, responsive behaviour, accessibility and implementation boundaries.
- `design.md` is the visual contract; `wording.md` remains the source for user-facing copy and this project record remains the source for page structure, capability boundaries and business-data status.
- Website implementation is now present in `index.html`; `design.md` remains the visual contract for subsequent visual review rather than an automatic production approval.

## Implementation Contract

Arahan implementation semasa untuk prototype website:

- Website menggunakan satu fail HTML utama di root project.
- Fail HTML prototype ialah `index.html` dan menggunakan inline JavaScript apabila diperlukan.
- Tailwind digunakan melalui official browser CDN script untuk prototype single-file ini; build pipeline tidak ditambah buat masa ini.
- Satu config file root bernama `config.js` digunakan untuk nombor telefon, alamat dan detail kedai lain yang boleh berubah, melalui satu `window.AMF_CONFIG` object.
- Catalogue data dimuatkan dengan `fetch` dan page navigation menggunakan hash routes dalam single HTML file.
- Apabila HTML dibuka terus melalui `file://`, `catalogue/catalog-fallback.js` digunakan kerana browser menyekat JSON fetch dari local file page; fallback itu bukan independent source dan perlu dijana semula apabila `catalogue/catalog.json` berubah.
- Asset visual dibaca daripada direktori project yang telah disediakan, bukan daripada URL placeholder baharu.
- Logo berada di `/root/workspace/project/amf-mart/assets/logo/` dan brand logos berada di `/root/workspace/project/amf-mart/assets/brand-logos/`.
- Product images untuk subset catalogue berada di `/root/workspace/project/amf-mart/catalogue/assets/product-images/` dan dirujuk melalui `/root/workspace/project/amf-mart/catalogue/catalog.json`.
- Nilai `images[].src` semasa dalam catalogue menggunakan bentuk `assets/product-images/...`; apabila digunakan dari root HTML, path tersebut perlu diselesaikan dengan prefix `catalogue/` supaya menunjuk kepada fail sebenar. Jangan anggap path relatif itu terus bermula dari root project.
- Prototype hanya menggunakan 30 products daripada subset kerja: 2 products × 15 categories.
- Catalogue penuh dalam `planning/catalogue/` tidak dimasukkan terus ke website prototype.
- Actual contact values, active social links, map destination dan other unverified business claims kekal tertakluk kepada verification.
- Cart kekal sebagai empty state; Login icon membuka prototype route `#/login`, manakala account authentication belum tersedia.
- `AGENT.md` menyimpan arahan kerja untuk coding agent seperti contract ini, source-of-truth order, protected boundaries dan verification rules. Ia bukan tempat untuk menyimpan product data atau business values.
- `design.md` kekal sebagai visual contract, `wording.md` sebagai user-facing copy source, dan config/catalogue sebagai data source.
- `IMPLEMENTATION_PLAN.md` menyimpan urutan implementation berfasa, fail yang terlibat, verification gates dan acceptance criteria.
- Keputusan ini melengkapkan technical direction untuk implementation plan; implementation sebenar direkodkan dalam `index.html` dan verification state dalam `README.md` serta `IMPLEMENTATION_PLAN.md`.

## Selected Brands

- Section heading yang dipilih: `Selected Brands`.
- Wording ini digunakan kerana katalog dan hubungan brand masih bersifat sementara dan belum membuktikan bahawa semua logo ialah partner rasmi AMF Mart.
- Prototype memaparkan semua 20 logo daripada `assets/brand-logos/` sebagai marquee logo yang perlahan.
- Marquee berhenti apabila hover atau focus dan dimatikan untuk pengguna yang memilih reduced motion.

## Homepage Shop by Need

- Service highlights kini diletakkan di antara `SHOP BY CATEGORY` dan `FEATURED PRODUCTS`, bukan sebagai category navigation.
- Section ini tidak clickable dan tidak menggunakan heading tambahan atau border card berat.
- Empat item prototype ialah `Product Catalogue`, `Clear Details`, `Direct Enquiries` dan `Store Support`.
- Copy ringkas: `Browse our electrical range`, `Models & specifications`, `WhatsApp or phone support` dan `Visit us for assistance`.

## Open Decisions

- Final production wording and business-data approval.
- Verified phone, WhatsApp, Facebook, TikTok, email and map destinations.
- Whether contact or enquiry submission will receive a real backend.
- Final visual approval serta deeper rendered/accessibility QA pada real devices.
- Asset source, permission and publication rights for the banner, product images and brand logos.
- Runtime and deployment method.
- Future expansion from the 30-product prototype subset to a larger or live catalogue.
