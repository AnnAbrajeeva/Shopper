// import { Server } from "miragejs";
// new Server({

//     seeds(server) {
//         server.db.loadData({
//           products: [
//             {
//                 "data": {
//                     "content": [
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4826-futbolka-chernaya-zhenskaya-fb-00ck.html",
//                             "id": "4826",
//                             "title": "Футболка черная женская",
//                             "articul": "FB-00CK",
//                             "descr": "Замеры в (42) размере: длина по спинке 64 см, полуобхват по груди 45 см, полуобхват по бедрам 45 см, рукава 15 см.",
//                             "cost": "380",
//                             "cost-opt": "190",
//                             "poster": "https://fashionup.ua/uploads/tov/40a5cdf10797b85.jpg",
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4816-hudi-zhenskoe-teploe-hd-100r.html",
//                             "id": "4816",
//                             "title": "Худи женское теплое",
//                             "articul": "HD-100R",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Замеры в (42) размере:\n\nдлина по спинке 62 см, полуобхват груди 49 см, длина рукава от плечевого шва 57 см, высота кармана 21 см, ширина манжет 6 см."
//                             },
//                             "cost": "852",
//                             "cost-opt": "426",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a8c98ee3e542f9d.jpg",
//                                 "https://fashionup.ua/uploads/tov/272f07ee1f4effa.jpg"
//                             ],
//                             "sizes": "42,46,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "трехнитка на флисе; хлопок 95% эластан 5%"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4813-hudi-zhenskoe-teploe-hd-100c.html",
//                             "id": "4813",
//                             "title": "Худи женское теплое",
//                             "articul": "HD-100C",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Замеры в (42) размере:\n\nдлина по спинке 62 см, полуобхват груди 49 см, длина рукава от плечевого шва 57 см, высота кармана 21 см, ширина манжет 6 см."
//                             },
//                             "cost": "852",
//                             "cost-opt": "426",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d7f3605ae45dbb3.jpg",
//                                 "https://fashionup.ua/uploads/tov/ca068772d5349d6.jpg"
//                             ],
//                             "sizes": "44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "кофейный",
//                             "cloth": "трехнитка на флисе; хлопок 95% эластан 5%"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4809-svitshot-reglan-teplyy-sv-100r.html",
//                             "id": "4809",
//                             "title": "Свитшот реглан теплый",
//                             "articul": "SV-100R",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Замеры в (42) размере:\n\nдлина по спинке 60 см, полуобхват груди 46 см, длина рукава от горловины 66 см, ширина манжет 6 см."
//                             },
//                             "cost": "708",
//                             "cost-opt": "354",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/dbf3c3f89875aef.jpg",
//                                 "https://fashionup.ua/uploads/tov/d717a81c74b1b08.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52,54,56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "трехнитка на флисе; хлопок 95% эластан 5%"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4807-svitshot-reglan-teplyy-sv-100k.html",
//                             "id": "4807",
//                             "title": "Свитшот реглан теплый",
//                             "articul": "SV-100K",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Замеры в (42) размере:\n\nдлина по спинке 60 см, полуобхват груди 46 см, длина рукава от горловины 66 см, ширина манжет 6 см."
//                             },
//                             "cost": "708",
//                             "cost-opt": "354",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/db7a8b4fab62ecc.jpg",
//                                 "https://fashionup.ua/uploads/tov/d8ea216255a4d7c.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52,56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "трехнитка на флисе; хлопок 95% эластан 5%"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4805-svitshot-reglan-teplyy-sv-100e.html",
//                             "id": "4805",
//                             "title": "Свитшот реглан теплый",
//                             "articul": "SV-100E",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Замеры в (42) размере:\n\nдлина по спинке 60 см, полуобхват груди 46 см, длина рукава от горловины 66 см, ширина манжет 6 см."
//                             },
//                             "cost": "708",
//                             "cost-opt": "354",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ea48d1798e4f278.jpg",
//                                 "https://fashionup.ua/uploads/tov/6c192d3c13b783c.jpg"
//                             ],
//                             "sizes": "42,46,50,52,56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "кремовый",
//                             "cloth": "трехнитка на флисе; хлопок 95% эластан 5%"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4803-svitshot-reglan-teplyy-sv-100c.html",
//                             "id": "4803",
//                             "title": "Свитшот реглан теплый",
//                             "articul": "SV-100C",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Замеры в (42) размере:\n\nдлина по спинке 60 см, полуобхват груди 46 см, длина рукава от горловины 66 см, ширина манжет 6 см."
//                             },
//                             "cost": "708",
//                             "cost-opt": "354",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0d7432fdb6f8d28.jpg",
//                                 "https://fashionup.ua/uploads/tov/bb38be6d35b7717.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52,54,56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "кофейный",
//                             "cloth": "трехнитка на флисе; хлопок 95% эластан 5%"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4801-svitshot-reglan-teplyy-sv-100t.html",
//                             "id": "4801",
//                             "title": "Свитшот реглан теплый",
//                             "articul": "SV-100T",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Замеры в (42) размере:\n\nдлина по спинке 60 см, полуобхват груди 46 см, длина рукава от горловины 66 см, ширина манжет 6 см."
//                             },
//                             "cost": "708",
//                             "cost-opt": "354",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7b1cfe5971f7d2a.jpg",
//                                 "https://fashionup.ua/uploads/tov/a5a79e31c638c03.jpg"
//                             ],
//                             "sizes": "42,44,48,50,52,54,56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "бирюзовый",
//                             "cloth": "трехнитка на флисе; хлопок 95% эластан 5%"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4726-futbolka-so-spuschennym-rukavom-fb-00sc.html",
//                             "id": "4726",
//                             "title": "Футболка со спущенным рукавом",
//                             "articul": "FB-00SC",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская кофейная футболка со спущенным рукавом. Однотонная модель без рисунка, из натуральной хлопковой ткани.\n\nЗамеры в (50) размере:\n\nдлина футболки длина по переду 58 см, полуобхват по груди 59 см, длина рукава 20 см."
//                             },
//                             "cost": "358",
//                             "cost-opt": "179",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ef2205a2313c011.jpg",
//                                 "https://fashionup.ua/uploads/tov/b1701e6694585bf.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "кофейный",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4725-futbolka-so-spuschennym-rukavom-fb-00sb.html",
//                             "id": "4725",
//                             "title": "Футболка со спущенным рукавом",
//                             "articul": "FB-00SB",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская бежевая футболка со спущенным рукавом. Однотонная модель без рисунка, из натуральной хлопковой ткани.\n\nЗамеры в (50) размере:\n\nдлина футболки длина по переду 58 см, полуобхват по груди 59 см, длина рукава 20 см."
//                             },
//                             "cost": "358",
//                             "cost-opt": "179",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8f8429c09238595.jpg",
//                                 "https://fashionup.ua/uploads/tov/52446ebdb38c44f.jpg",
//                                 "https://fashionup.ua/uploads/tov/42d0f1ec2ccbe67.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "бежевый",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4724-futbolka-so-spuschennym-rukavom-fb-00sk.html",
//                             "id": "4724",
//                             "title": "Футболка со спущенным рукавом",
//                             "articul": "FB-00SK",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская черная футболка со спущенным рукавом. Однотонная модель без рисунка, из натуральной хлопковой ткани.\n\nЗамеры в (50) размере:\n\nдлина футболки длина по переду 58 см, полуобхват по груди 59 см, длина рукава 20 см."
//                             },
//                             "cost": "358",
//                             "cost-opt": "179",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/605e21503d4e780.jpg",
//                                 "https://fashionup.ua/uploads/tov/879e201519c42ab.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4723-futbolka-so-spuschennym-rukavom-fb-00sw.html",
//                             "id": "4723",
//                             "title": "Футболка со спущенным рукавом",
//                             "articul": "FB-00SW",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская белая футболка со спущенным рукавом. Однотонная модель без рисунка, из натуральной хлопковой ткани.\n\nЗамеры в (42) размере:\n\nдлина футболки по спинке 58 см, полуобхват по груди 51 см, полуобхват по бедрам 53 см, длина рукава 20 см."
//                             },
//                             "cost": "358",
//                             "cost-opt": "179",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/afb908b970162fd.jpg",
//                                 "https://fashionup.ua/uploads/tov/b320f95403dd065.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4722-futbolka-bez-rukavov-fb-00mk.html",
//                             "id": "4722",
//                             "title": "Футболка без рукавов",
//                             "articul": "FB-00MK",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская черная футболка без рукавов. Однотонная модель без рисунка, из натуральной хлопковой ткани.\n\nЗамеры в (50) размере:\n\nдлина по спинке 67 см, полуобхват по груди 54 см."
//                             },
//                             "cost": "310",
//                             "cost-opt": "155",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/926f25ad2f59b32.jpg",
//                                 "https://fashionup.ua/uploads/tov/0c26f1b8473998e.jpg",
//                                 "https://fashionup.ua/uploads/tov/5c724c4b96286e6.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4721-futbolka-bez-rukavov-fb-00mw.html",
//                             "id": "4721",
//                             "title": "Футболка без рукавов",
//                             "articul": "FB-00MW",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская белая футболка без рукавов. Однотонная модель без рисунка, из натуральной хлопковой ткани.\n\nЗамеры в (42) размере:\n\nдлина по спинке 61 см, от плечевого шва по переду 58 см, полуобхват по груди 45 см, полуобхват по бедрам 47 см."
//                             },
//                             "cost": "310",
//                             "cost-opt": "155",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5b5294c881a7a84.jpg",
//                                 "https://fashionup.ua/uploads/tov/ecfad7c3620b899.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4705-futbolka-reglan-fb-00rb.html",
//                             "id": "4705",
//                             "title": "Футболка реглан",
//                             "articul": "FB-00RB",
//                             "descr": "Замеры в (42) размере: длина футболки по спинке 64 см, полуобхват по груди 52 см, полуобхват по бедрам 53 см, длина рукава от горловины 41 см.",
//                             "cost": "394",
//                             "cost-opt": "197",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/19f187a9a4be65d.jpg",
//                                 "https://fashionup.ua/uploads/tov/4406c7574b8a01d.jpg",
//                                 "https://fashionup.ua/uploads/tov/24f608f640fafa9.jpg",
//                                 "https://fashionup.ua/uploads/tov/581f58ba6a111ff.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "бежевый",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4704-futbolka-reglan-fb-00rc.html",
//                             "id": "4704",
//                             "title": "Футболка реглан",
//                             "articul": "FB-00RC",
//                             "descr": "Замеры в (42) размере: длина футболки по спинке 64 см, полуобхват по груди 52 см, полуобхват по бедрам 53 см, длина рукава от горловины 41 см.",
//                             "cost": "394",
//                             "cost-opt": "197",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8dc76a33dc0d96f.jpg",
//                                 "https://fashionup.ua/uploads/tov/9f2cca7b89f2ea3.jpg",
//                                 "https://fashionup.ua/uploads/tov/e825535587d4e6b.jpg",
//                                 "https://fashionup.ua/uploads/tov/1d7c66013c223a5.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "кофейный",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4703-futbolka-reglan-fb-00rk.html",
//                             "id": "4703",
//                             "title": "Футболка реглан",
//                             "articul": "FB-00RK",
//                             "descr": "Замеры в (42) размере: длина футболки по спинке 64 см, полуобхват по груди 52 см, полуобхват по бедрам 53 см, длина рукава от горловины 41 см.",
//                             "cost": "394",
//                             "cost-opt": "197",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f6a8db58cdb3b0f.jpg",
//                                 "https://fashionup.ua/uploads/tov/16236c7329ec0b7.jpg",
//                                 "https://fashionup.ua/uploads/tov/8823f1fab4687bd.jpg",
//                                 "https://fashionup.ua/uploads/tov/8ff64712d7d7006.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4702-futbolka-reglan-fb-00rw.html",
//                             "id": "4702",
//                             "title": "Футболка реглан",
//                             "articul": "FB-00RW",
//                             "descr": "Замеры в (42) размере: длина футболки по спинке 64 см, полуобхват по груди 52 см, полуобхват по бедрам 53 см, длина рукава от горловины 41 см.",
//                             "cost": "394",
//                             "cost-opt": "197",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/98e8d3d5d92d079.jpg",
//                                 "https://fashionup.ua/uploads/tov/19d5f7ee9acf5df.jpg",
//                                 "https://fashionup.ua/uploads/tov/02f9041f428b8a6.jpg",
//                                 "https://fashionup.ua/uploads/tov/bce4d3666c59e47.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "кулир: 95% хлопок 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/sarafany/4604-sarafan-quotflorentinequot-srf-1814d.html",
//                             "id": "4604",
//                             "title": "Сарафан \"Florentine\"",
//                             "articul": "SRF-1814D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный, длинный сарафан в пол с нежным принтом. Талия на резинке (ширина резинки 3 см). Пройма тянется к круглой горловине. Юбка клеш, слева глубокий разрез по ноге.\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 157 см\n\nДлина до талии - 42 см\n\nДлина от талии (с учетом резинки) - 114 см\n\nДлина разреза вдоль ноги - 70 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "910",
//                             "cost-opt": "455",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0aaf8596c53cf73.jpg",
//                                 "https://fashionup.ua/uploads/tov/5efd53aed742df3.jpg",
//                                 "https://fashionup.ua/uploads/tov/bec13f636729fc5.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "10",
//                             "category-name": "Сарафаны",
//                             "color": "серый лист на голубом",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4602-sarafan-quotflorentinequot-srf-1814b.html",
//                             "id": "4602",
//                             "title": "Сарафан \"Florentine\"",
//                             "articul": "SRF-1814B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный, длинный сарафан в пол с нежным принтом. Талия на резинке (ширина резинки 3 см). Пройма тянется к круглой горловине. Юбка клеш, слева глубокий разрез по ноге.\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 157 см\n\nДлина до талии - 42 см\n\nДлина от талии (с учетом резинки) - 114 см\n\nДлина разреза вдоль ноги - 70 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "910",
//                             "cost-opt": "455",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4a6a20258da775b.jpg",
//                                 "https://fashionup.ua/uploads/tov/ccc27b51e91f445.jpg",
//                                 "https://fashionup.ua/uploads/tov/6bfdea584c57e6f.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный лист на чёрном",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/sarafany/4601-sarafan-quotflorentinequot-srf-1814a.html",
//                             "id": "4601",
//                             "title": "Сарафан \"Florentine\"",
//                             "articul": "SRF-1814A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный, длинный сарафан в пол с нежным принтом. Талия на резинке (ширина резинки 3 см). Пройма тянется к круглой горловине. Юбка клеш, слева глубокий разрез по ноге.\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 157 см\n\nДлина до талии - 42 см\n\nДлина от талии (с учетом резинки) - 114 см\n\nДлина разреза вдоль ноги - 70 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "910",
//                             "cost-opt": "455",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6004872ea94b2b0.jpg",
//                                 "https://fashionup.ua/uploads/tov/f1cec3133c2994b.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "10",
//                             "category-name": "Сарафаны",
//                             "color": "серый лист на белом",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4600-yubka-yub-1075-yub-1075d.html",
//                             "id": "4600",
//                             "title": "Юбка YUB-1075",
//                             "articul": "YUB-1075D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная мини юбка из экокожи с косой молнией по всей длине темно-синяя.\n\nДлина юбки - 47 см\n\nДлина молнии спереди - 50 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/fb9fcd24c11af52.jpg",
//                                 "https://fashionup.ua/uploads/tov/724a9a2f59d8831.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4599-yubka-yub-1075-yub-1075c.html",
//                             "id": "4599",
//                             "title": "Юбка YUB-1075",
//                             "articul": "YUB-1075C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная мини юбка из экокожи с косой молнией по всей длине серая.\n\nДлина юбки - 47 см\n\nДлина молнии спереди - 50 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/78c3f2488a8cef5.jpg",
//                                 "https://fashionup.ua/uploads/tov/04dda145195e9e0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4598-yubka-yub-1075-yub-1075b.html",
//                             "id": "4598",
//                             "title": "Юбка YUB-1075",
//                             "articul": "YUB-1075B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная мини юбка из экокожи с косой молнией по всей длине бордовая.\n\nДлина юбки - 47 см\n\nДлина молнии спереди - 50 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/510d1cd83f69b30.jpg",
//                                 "https://fashionup.ua/uploads/tov/a583b67c6e9ff61.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4597-yubka-yub-1075-yub-1075a.html",
//                             "id": "4597",
//                             "title": "Юбка YUB-1075",
//                             "articul": "YUB-1075A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная мини юбка из экокожи с косой молнией по всей длине коричневая.\n\nДлина юбки - 47 см\n\nДлина молнии спереди - 50 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1a132e4cdd826f1.jpg",
//                                 "https://fashionup.ua/uploads/tov/12775465945d8a6.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Chocolate/Шоколадный",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4596-yubka-yub-1081-yub-1081c.html",
//                             "id": "4596",
//                             "title": "Юбка YUB-1081",
//                             "articul": "YUB-1081C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантная юбка-карандаш с красивыми рюшами по поясу и карману с разрезом спереди из тиара серая.\n\nРост модели на фото - 170 см\n\nДлина юбки - 65 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "644",
//                             "cost-opt": "322",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/59ff117c656fbe0.jpg",
//                                 "https://fashionup.ua/uploads/tov/2146504a085b4e8.jpg",
//                                 "https://fashionup.ua/uploads/tov/9cade46d985d34c.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "тиар: 40%полиэстер, 40%вискоза, 20%шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4594-yubka-yub-1081-yub-1081a.html",
//                             "id": "4594",
//                             "title": "Юбка YUB-1081",
//                             "articul": "YUB-1081A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантная юбка-карандаш с красивыми рюшами по поясу и карману с разрезом спереди из тиара черная.\n\nРост модели на фото - 170 см\n\nДлина юбки - 65 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "644",
//                             "cost-opt": "322",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/24564725362da8e.jpg",
//                                 "https://fashionup.ua/uploads/tov/ede220b84db6444.jpg",
//                                 "https://fashionup.ua/uploads/tov/476372c8ed4266d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40%полиэстер, 40%вискоза, 20%шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4593-yubka-yub-1078-yub-1078e.html",
//                             "id": "4593",
//                             "title": "Юбка YUB-1078",
//                             "articul": "YUB-1078E",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини из экозамши светло-коричневая.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/c7f1cf76ab3c536.jpg",
//                                 "https://fashionup.ua/uploads/tov/823d3b75bb383ee.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Light-brown/Светло-коричневый",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4592-yubka-yub-1078-yub-1078d.html",
//                             "id": "4592",
//                             "title": "Юбка YUB-1078",
//                             "articul": "YUB-1078D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини из экозамши джинс.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/341a35b5f0ba9b6.jpg",
//                                 "https://fashionup.ua/uploads/tov/95a3b3afa5978c0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Jeans/Джинс",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4591-yubka-yub-1078-yub-1078c.html",
//                             "id": "4591",
//                             "title": "Юбка YUB-1078",
//                             "articul": "YUB-1078C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини из экозамши мокко.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5bab9e8f96c7b2c.jpg",
//                                 "https://fashionup.ua/uploads/tov/450462fbd86750f.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Mocha/Мокко",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4590-yubka-yub-1078-yub-1078b.html",
//                             "id": "4590",
//                             "title": "Юбка YUB-1078",
//                             "articul": "YUB-1078B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини из экозамши персиковая.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/57692bc0c47ebe2.jpg",
//                                 "https://fashionup.ua/uploads/tov/eef25281f995780.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Peach/Персиковый",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4589-yubka-yub-1078-yub-1078a.html",
//                             "id": "4589",
//                             "title": "Юбка YUB-1078",
//                             "articul": "YUB-1078A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини из экозамши серая.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/303bd3b22965697.jpg",
//                                 "https://fashionup.ua/uploads/tov/f321edab1ab4a02.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4588-yubka-yub-1074-yub-1074d.html",
//                             "id": "4588",
//                             "title": "Юбка YUB-1074",
//                             "articul": "YUB-1074D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка мини из экокожи бежевого цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 48 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "600",
//                             "cost-opt": "300",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/048e40d11161511.jpg",
//                                 "https://fashionup.ua/uploads/tov/2957d50e8ed3298.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Beige/Бежевый",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4587-yubka-yub-1074-yub-1074c.html",
//                             "id": "4587",
//                             "title": "Юбка YUB-1074",
//                             "articul": "YUB-1074C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка мини из экокожи темно-зеленого цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 48 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "600",
//                             "cost-opt": "300",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/eaa065c22a5b547.jpg",
//                                 "https://fashionup.ua/uploads/tov/acdf8358cea9d96.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4586-yubka-yub-1074-yub-1074b.html",
//                             "id": "4586",
//                             "title": "Юбка YUB-1074",
//                             "articul": "YUB-1074B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка мини из экокожи красного цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 48 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "600",
//                             "cost-opt": "300",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/41cd976e2562b9b.jpg",
//                                 "https://fashionup.ua/uploads/tov/b1290f84ed052dd.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Red/Красный",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4585-yubka-yub-1074-yub-1074a.html",
//                             "id": "4585",
//                             "title": "Юбка YUB-1074",
//                             "articul": "YUB-1074A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка мини из экокожи черного цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 48 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "600",
//                             "cost-opt": "300",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a497cb372234633.jpg",
//                                 "https://fashionup.ua/uploads/tov/5a4cdfc2da1e1d6.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4584-yubka-yub-1080-yub-1080b.html",
//                             "id": "4584",
//                             "title": "Юбка YUB-1080",
//                             "articul": "YUB-1080B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивая женская юбка прямого кроя с красивым разрезом по левой ноге из тиара бордового цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 59 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "516",
//                             "cost-opt": "258",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ac3606411edb591.jpg",
//                                 "https://fashionup.ua/uploads/tov/72d55a5cf8e5a4d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "тиар: 40%полиэстер, 40%вискоза, 20%шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4583-yubka-yub-1080-yub-1080a.html",
//                             "id": "4583",
//                             "title": "Юбка YUB-1080",
//                             "articul": "YUB-1080A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивая женская юбка прямого кроя с красивым разрезом по левой ноге из тиара черного цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 59 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "516",
//                             "cost-opt": "258",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/578172cf21ded81.jpg",
//                                 "https://fashionup.ua/uploads/tov/c61d9ba2ace40d9.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40%полиэстер, 40%вискоза, 20%шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4582-yubka-yub-1071-yub-1071b.html",
//                             "id": "4582",
//                             "title": "Юбка YUB-1071",
//                             "articul": "YUB-1071B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная к низу с оригинальным поясом черного цвета из костюмной ткани с глубоким боковым разрезом сзади.\n\nРост модели на фото - 170 см\n\nДлина юбки - 72 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 44 см\n\nГлубина разреза - 27 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "546",
//                             "cost-opt": "273",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/984c68e4760f91c.jpg",
//                                 "https://fashionup.ua/uploads/tov/935c152641bd2fb.jpg",
//                                 "https://fashionup.ua/uploads/tov/e9c65abbb7077ba.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55%полиэстер, 40%вискоза, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4581-yubka-yub-1071-yub-1071a.html",
//                             "id": "4581",
//                             "title": "Юбка YUB-1071",
//                             "articul": "YUB-1071A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная к низу с оригинальным поясом красного цвета из костюмной ткани с глубоким боковым разрезом сзади.\n\nРост модели на фото - 170 см\n\nДлина юбки - 72 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 44 см\n\nГлубина разреза - 27 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "546",
//                             "cost-opt": "273",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/23b8b9a68bac775.jpg",
//                                 "https://fashionup.ua/uploads/tov/fd73425acaa79b3.jpg",
//                                 "https://fashionup.ua/uploads/tov/792e2520433dcad.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Red/Красный",
//                             "cloth": "костюмная ткань: 55%полиэстер, 40%вискоза, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4580-yubka-yub-1076-yub-1076c.html",
//                             "id": "4580",
//                             "title": "Юбка YUB-1076",
//                             "articul": "YUB-1076C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини трапециевидного кроя на молнии из экозамши серого цвета.\n\nСпереди два больших накладных кармана.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 4 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "608",
//                             "cost-opt": "304",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/53c0d89fa121a4c.jpg",
//                                 "https://fashionup.ua/uploads/tov/9a3b7fe18d41e3e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4579-yubka-yub-1076-yub-1076b.html",
//                             "id": "4579",
//                             "title": "Юбка YUB-1076",
//                             "articul": "YUB-1076B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини трапециевидного кроя на молнии из экозамши темно-зеленого цвета.\n\nСпереди два больших накладных кармана.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 4 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "608",
//                             "cost-opt": "304",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b160ce00bdde67e.jpg",
//                                 "https://fashionup.ua/uploads/tov/0a6a44de5e41ea6.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4578-yubka-yub-1076-yub-1076a.html",
//                             "id": "4578",
//                             "title": "Юбка YUB-1076",
//                             "articul": "YUB-1076A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини трапециевидного кроя на молнии из экозамши черного цвета.\n\nСпереди два больших накладных кармана.\n\nРост модели на фото - 170 см\n\nДлина юбки - 45 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 4 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "608",
//                             "cost-opt": "304",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2481e26f1a93409.jpg",
//                                 "https://fashionup.ua/uploads/tov/9203fc86bcf74c1.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "экозамша на дайвинге: 95%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4577-yubka-yub-1072-yub-1072b.html",
//                             "id": "4577",
//                             "title": "Юбка YUB-1072",
//                             "articul": "YUB-1072B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Симпатичная юбка мини с оригинальным поясом из экокожи темно-синего цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 48 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 42 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "566",
//                             "cost-opt": "283",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/056b62f24b28620.jpg",
//                                 "https://fashionup.ua/uploads/tov/553b9f0ab822cc0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4576-yubka-yub-1072-yub-1072a.html",
//                             "id": "4576",
//                             "title": "Юбка YUB-1072",
//                             "articul": "YUB-1072A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Симпатичная юбка мини с оригинальным поясом из экокожи черного цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 48 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 42 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "566",
//                             "cost-opt": "283",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/74bff292434d092.jpg",
//                                 "https://fashionup.ua/uploads/tov/059f7b774412ce2.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4575-yubka-yub-1077-yub-1077d.html",
//                             "id": "4575",
//                             "title": "Юбка YUB-1077",
//                             "articul": "YUB-1077D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская элегантная юбка прямого кроя из плотной экокожи темно-синего цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 68 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "638",
//                             "cost-opt": "319",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/288dd026561f410.jpg",
//                                 "https://fashionup.ua/uploads/tov/6915034b1885fc3.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "Dark blue/ Темно-синий"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4574-yubka-yub-1077-yub-1077c.html",
//                             "id": "4574",
//                             "title": "Юбка YUB-1077",
//                             "articul": "YUB-1077C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская элегантная юбка прямого кроя из плотной экокожи серого цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 68 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "638",
//                             "cost-opt": "319",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4100c89fd25e9dd.jpg",
//                                 "https://fashionup.ua/uploads/tov/5dc5d82a47bd136.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "Gray/Серый"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4573-yubka-yub-1077-yub-1077b.html",
//                             "id": "4573",
//                             "title": "Юбка YUB-1077",
//                             "articul": "YUB-1077B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская элегантная юбка прямого кроя из плотной экокожи бордового цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 68 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "638",
//                             "cost-opt": "319",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/737dcad5cd107b9.jpg",
//                                 "https://fashionup.ua/uploads/tov/0c8288a3c1b793e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4572-yubka-yub-1077-yub-1077a.html",
//                             "id": "4572",
//                             "title": "Юбка YUB-1077",
//                             "articul": "YUB-1077A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская элегантная юбка прямого кроя из плотной экокожи коричневого цвета.\n\nРост модели на фото - 170 см\n\nДлина юбки - 68 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "638",
//                             "cost-opt": "319",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/75bfd7bfe518ad8.jpg",
//                                 "https://fashionup.ua/uploads/tov/13bd656c67da68c.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Chocolate/Шоколадный",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4571-yubka-yub-1082-yub-1082c.html",
//                             "id": "4571",
//                             "title": "Юбка YUB-1082",
//                             "articul": "YUB-1082C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская элегантная юбка прямого кроя из экокожи серого цвета сзади с разрезом. \n\nРост модели на фото - 170 см\n\nДлина юбки по переду - 64 см\n\nДлина юбки сзади - 69 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9dfee4e172fc46c.jpg",
//                                 "https://fashionup.ua/uploads/tov/a2590052115b26b.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4570-yubka-yub-1082-yub-1082b.html",
//                             "id": "4570",
//                             "title": "Юбка YUB-1082",
//                             "articul": "YUB-1082B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская элегантная юбка прямого кроя из экокожи красного цвета сзади с разрезом. \n\nРост модели на фото - 170 см\n\nДлина юбки по переду - 64 см\n\nДлина юбки сзади - 69 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5a095fa57c1aeef.jpg",
//                                 "https://fashionup.ua/uploads/tov/2b2271bb76580ac.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Red/Красный",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4569-yubka-yub-1082-yub-1082a.html",
//                             "id": "4569",
//                             "title": "Юбка YUB-1082",
//                             "articul": "YUB-1082A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская элегантная юбка прямого кроя из экокожи темно-синего цвета сзади с разрезом. \n\nРост модели на фото - 170 см\n\nДлина юбки по переду - 64 см\n\nДлина юбки сзади - 69 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/86133bcd495dd1a.jpg",
//                                 "https://fashionup.ua/uploads/tov/913d5f77f4a8a2f.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4549-plate-quotdomenicaquot-pl-1812b.html",
//                             "id": "4549",
//                             "title": "Платье \"Domenica\"",
//                             "articul": "PL-1812B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье женское в обтяжку с треугольным вырезом по спинке.\n\nСпереди воротник-лодочка, сзади треугольный вырез внахлест.\n\nРост модели на фото - 170 см\n\nДлина  платья - 89 см\n\nДлина рукава - 61 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "508",
//                             "cost-opt": "254",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1acc419fd98d8c8.jpg",
//                                 "https://fashionup.ua/uploads/tov/c5e2eb92d943adf.jpg",
//                                 "https://fashionup.ua/uploads/tov/be407ff15b76f7a.jpg",
//                                 "https://fashionup.ua/uploads/tov/25b708f8217902d.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "темно-зеленый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4548-plate-quotdomenicaquot-pl-1812a.html",
//                             "id": "4548",
//                             "title": "Платье \"Domenica\"",
//                             "articul": "PL-1812A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье женское в обтяжку с треугольным вырезом по спинке.\n\nСпереди воротник-лодочка, сзади треугольный вырез внахлест.\n\nРост модели на фото - 170 см\n\nДлина  платья - 89 см\n\nДлина рукава - 61 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "508",
//                             "cost-opt": "254",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/76b176031e26c69.jpg",
//                                 "https://fashionup.ua/uploads/tov/38b1fadf5ac63ca.jpg",
//                                 "https://fashionup.ua/uploads/tov/ec79e382a9eec79.jpg",
//                                 "https://fashionup.ua/uploads/tov/745b215b179ffa0.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "темно-синий",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4547-svitshot-quotmartaquot-kf-1802d.html",
//                             "id": "4547",
//                             "title": "Свитшот \"Marta\"",
//                             "articul": "KF-1802D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Трехцветный укороченный женский свитшот свободного кроя на кулиске.\n\nРост модели на фото - 170 см\n\nДлина свитшота - 51 см\n\nДлина рукава от спущенного шва - 43 см\n\nШирина манжета - 6 см\n\nШирина нижней вставки - 13 см\n\nШирина средней вставки - 8 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "576",
//                             "cost-opt": "288",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0d13eaa5b7bb514.jpg",
//                                 "https://fashionup.ua/uploads/tov/d26efafba9950c9.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "красный/золото/черный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан; экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4546-svitshot-quotmartaquot-kf-1802c.html",
//                             "id": "4546",
//                             "title": "Свитшот \"Marta\"",
//                             "articul": "KF-1802C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Трехцветный укороченный женский свитшот свободного кроя на кулиске.\n\nРост модели на фото - 170 см\n\nДлина свитшота - 51 см\n\nДлина рукава от спущенного шва - 43 см\n\nШирина манжета - 6 см\n\nШирина нижней вставки - 13 см\n\nШирина средней вставки - 8 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "576",
//                             "cost-opt": "288",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/026a7a8dfc5ab6c.jpg",
//                                 "https://fashionup.ua/uploads/tov/7b2ec87d752a2af.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "электрик/серебро/джинс",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан; экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4544-svitshot-quotmartaquot-kf-1802a.html",
//                             "id": "4544",
//                             "title": "Свитшот \"Marta\"",
//                             "articul": "KF-1802A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Трехцветный укороченный женский свитшот свободного кроя на кулиске.\n\nРост модели на фото - 170 см\n\nДлина свитшота - 51 см\n\nДлина рукава от спущенного шва - 43 см\n\nШирина манжета - 6 см\n\nШирина нижней вставки - 13 см\n\nШирина средней вставки - 8 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "576",
//                             "cost-opt": "288",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/68caf13d9c6894a.jpg",
//                                 "https://fashionup.ua/uploads/tov/45ce40c7307a21f.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "графит/джинс/пудровый",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан; экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4543-kofta-quotsusanaquot-kf-1811c.html",
//                             "id": "4543",
//                             "title": "Кофта \"Susana\"",
//                             "articul": "KF-1811C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская кофта свободного кроя с воротничком стойкой из экозамши.\n\nПо переду кофты декоративный рельеф с накладной молнией на груди. Спущенный плечевой шов, спереди кофта чуть короче, чем сзади.\n\nРост модели на фото - 170 см\n\nДлина кофты по переду - 64 см\n\nДлина кофты по спинке - 75 см\n\nДлина рукава - 45 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "758",
//                             "cost-opt": "379",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ac56f307173d637.jpg",
//                                 "https://fashionup.ua/uploads/tov/4651acd32f85f3a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "светло-коричневый",
//                             "cloth": "экозамша: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4542-kofta-quotsusanaquot-kf-1811b.html",
//                             "id": "4542",
//                             "title": "Кофта \"Susana\"",
//                             "articul": "KF-1811B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская кофта свободного кроя с воротничком стойкой из экозамши.\n\nПо переду кофты декоративный рельеф с накладной молнией на груди. Спущенный плечевой шов, спереди кофта чуть короче, чем сзади.\n\nРост модели на фото - 170 см\n\nДлина кофты по переду - 64 см\n\nДлина кофты по спинке - 75 см\n\nДлина рукава - 45 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "758",
//                             "cost-opt": "379",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7c2ace79b9dfff5.jpg",
//                                 "https://fashionup.ua/uploads/tov/6321f448aab418e.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "серый",
//                             "cloth": "экозамша: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4541-kofta-quotsusanaquot-kf-1811a.html",
//                             "id": "4541",
//                             "title": "Кофта \"Susana\"",
//                             "articul": "KF-1811A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Женская кофта свободного кроя с воротничком стойкой из экозамши.\n\nПо переду кофты декоративный рельеф с накладной молнией на груди. Спущенный плечевой шов, спереди кофта чуть короче, чем сзади.\n\nРост модели на фото - 170 см\n\nДлина кофты по переду - 64 см\n\nДлина кофты по спинке - 75 см\n\nДлина рукава - 45 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "758",
//                             "cost-opt": "379",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5c6adabb9399bab.jpg",
//                                 "https://fashionup.ua/uploads/tov/c826477837c271c.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "джинс",
//                             "cloth": "экозамша: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4540-yubka-yub-1063-yub-1063d.html",
//                             "id": "4540",
//                             "title": "Юбка YUB-1063",
//                             "articul": "YUB-1063D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди прямого кроя из плотной экокожи.\n\nПо переду декоративная планка с пуговицами. Пояс декоративный, по переду разрез-птичка, сзади вытачки и разрез глубиной 28 см, а также потайная молния 21 см..\n\nПо бокам косые врезные карманы. Пояс съемный.\n\nРост модели на фото - 170 см\n\nШирина пояса сзади - 7 см\n\nШирина пояса спереди - 8 см\n\nПолуобхват по талии - 34 см\n\nПолуобхват по бедрам - 43 см\n\nДлина пояса - 174 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/fb05b1e7733f1a6.jpg",
//                                 "https://fashionup.ua/uploads/tov/e42efe806dcf2d7.jpg",
//                                 "https://fashionup.ua/uploads/tov/cabb3a7e10d68ac.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4539-yubka-yub-1063-yub-1063c.html",
//                             "id": "4539",
//                             "title": "Юбка YUB-1063",
//                             "articul": "YUB-1063C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди прямого кроя из плотной экокожи.\n\nПо переду декоративная планка с пуговицами. Пояс декоративный, по переду разрез-птичка, сзади вытачки и разрез глубиной 28 см, а также потайная молния 21 см..\n\nПо бокам косые врезные карманы. Пояс съемный.\n\nРост модели на фото - 170 см\n\nШирина пояса сзади - 7 см\n\nШирина пояса спереди - 8 см\n\nПолуобхват по талии - 34 см\n\nПолуобхват по бедрам - 43 см\n\nДлина пояса - 174 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4915fc9baa91cac.jpg",
//                                 "https://fashionup.ua/uploads/tov/916764c920c3ab1.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4538-yubka-yub-1063-yub-1063b.html",
//                             "id": "4538",
//                             "title": "Юбка YUB-1063",
//                             "articul": "YUB-1063B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди прямого кроя из плотной экокожи.\n\nПо переду декоративная планка с пуговицами. Пояс декоративный, по переду разрез-птичка, сзади вытачки и разрез глубиной 28 см, а также потайная молния 21 см..\n\nПо бокам косые врезные карманы. Пояс съемный.\n\nРост модели на фото - 170 см\n\nШирина пояса сзади - 7 см\n\nШирина пояса спереди - 8 см\n\nПолуобхват по талии - 34 см\n\nПолуобхват по бедрам - 43 см\n\nДлина пояса - 174 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d667a5982eccb73.jpg",
//                                 "https://fashionup.ua/uploads/tov/ba1c797c6a5422f.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4537-yubka-yub-1063-yub-1063a.html",
//                             "id": "4537",
//                             "title": "Юбка YUB-1063",
//                             "articul": "YUB-1063A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди прямого кроя из плотной экокожи.\n\nПо переду декоративная планка с пуговицами. Пояс декоративный, по переду разрез-птичка, сзади вытачки и разрез глубиной 28 см, а также потайная молния 21 см..\n\nПо бокам косые врезные карманы. Пояс съемный.\n\nРост модели на фото - 170 см\n\nШирина пояса сзади - 7 см\n\nШирина пояса спереди - 8 см\n\nПолуобхват по талии - 34 см\n\nПолуобхват по бедрам - 43 см\n\nДлина пояса - 174 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/71020b613e149e1.jpg",
//                                 "https://fashionup.ua/uploads/tov/8b603f54390bd5e.jpg",
//                                 "https://fashionup.ua/uploads/tov/afb4f259fc27d6d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Chocolate/Шоколадный",
//                             "cloth": "экокожа: 100% полиуритан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4536-yubka-yub-1065-yub-1065b.html",
//                             "id": "4536",
//                             "title": "Юбка YUB-1065",
//                             "articul": "YUB-1065B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди ровного силуэта на запах их мягкого кашемира.\n\nСпереди рабочие пуговицы. Сзади вытачки и потайная молния 16 см.\n\nРост модели на фото - 68 см\n\nПолуобхват по талии - 37 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "692",
//                             "cost-opt": "346",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d6c8871615d50b4.jpg",
//                                 "https://fashionup.ua/uploads/tov/c15ed445e35066a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Beige cell/Бежевая клетка",
//                             "cloth": "кашемир: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4535-yubka-yub-1065-yub-1065a.html",
//                             "id": "4535",
//                             "title": "Юбка YUB-1065",
//                             "articul": "YUB-1065A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди ровного силуэта на запах их мягкого кашемира.\n\nСпереди рабочие пуговицы. Сзади вытачки и потайная молния 16 см.\n\nДлина юбки - 68 см\n\nПолуобхват по талии - 37 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "692",
//                             "cost-opt": "346",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/041c7e600e340ac.jpg",
//                                 "https://fashionup.ua/uploads/tov/de95ebc0bf1c908.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray cell/Серая клетка",
//                             "cloth": "кашемир: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4534-yubka-yub-1059-yub-1059c.html",
//                             "id": "4534",
//                             "title": "Юбка YUB-1059",
//                             "articul": "YUB-1059C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини ровного кроя на кнопках из вельвета.\n\nСзади и спереди рельефы. По переду планка с застежками-кнопками.\n\nРост модели на фото - 170 см\n\nДлина юбки - 50 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 45 см\n\nШирина пояса - 5 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "530",
//                             "cost-opt": "265",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ecd790bf82a4d93.jpg",
//                                 "https://fashionup.ua/uploads/tov/8db7f3812868a70.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Mustard/Горчичиный",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4533-yubka-yub-1059-yub-1059b.html",
//                             "id": "4533",
//                             "title": "Юбка YUB-1059",
//                             "articul": "YUB-1059B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини ровного кроя на кнопках из вельвета.\n\nСзади и спереди рельефы. По переду планка с застежками-кнопками.\n\nРост модели на фото - 170 см\n\nДлина юбки - 50 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 45 см\n\nШирина пояса - 5 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "530",
//                             "cost-opt": "265",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9e5f40ffe9d8ce3.jpg",
//                                 "https://fashionup.ua/uploads/tov/713ae17a02a5aad.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4532-yubka-yub-1059-yub-1059a.html",
//                             "id": "4532",
//                             "title": "Юбка YUB-1059",
//                             "articul": "YUB-1059A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини ровного кроя на кнопках из вельвета.\n\nСзади и спереди рельефы. По переду планка с застежками-кнопками.\n\nРост модели на фото - 170 см\n\nДлина юбки - 50 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 45 см\n\nШирина пояса - 5 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "530",
//                             "cost-opt": "265",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6c5c336bf457c47.jpg",
//                                 "https://fashionup.ua/uploads/tov/f6046714cb45a2a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Chocolate/Шоколадный",
//                             "cloth": "S (42), M (44), L (46)"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4531-yubka-yub-1057-yub-1057d.html",
//                             "id": "4531",
//                             "title": "Юбка YUB-1057",
//                             "articul": "YUB-1057D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная с баской и высокой посадкой.\n\nПояс переходит в высокую баску. Сзади вытачки и потайная молния 18 см, а также разрез глубиной 27 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 71 см\n\nШирина пояса - 4 см\n\nПолуюбхват по талии - 34 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "618",
//                             "cost-opt": "309",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/001d405dbfb8fb5.jpg",
//                                 "https://fashionup.ua/uploads/tov/4aa3c1bca719659.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4530-yubka-yub-1057-yub-1057c.html",
//                             "id": "4530",
//                             "title": "Юбка YUB-1057",
//                             "articul": "YUB-1057C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная с баской и высокой посадкой.\n\nПояс переходит в высокую баску. Сзади вытачки и потайная молния 18 см, а также разрез глубиной 27 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 71 см\n\nШирина пояса - 4 см\n\nПолуюбхват по талии - 34 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "618",
//                             "cost-opt": "309",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/18b7bd433666fd1.jpg",
//                                 "https://fashionup.ua/uploads/tov/31f3572620fbf66.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4529-yubka-yub-1057-yub-1057b.html",
//                             "id": "4529",
//                             "title": "Юбка YUB-1057",
//                             "articul": "YUB-1057B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная с баской и высокой посадкой.\n\nПояс переходит в высокую баску. Сзади вытачки и потайная молния 18 см, а также разрез глубиной 27 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 71 см\n\nШирина пояса - 4 см\n\nПолуюбхват по талии - 34 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "618",
//                             "cost-opt": "309",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/c4daa82464d074e.jpg",
//                                 "https://fashionup.ua/uploads/tov/28f0cd47233259e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4528-yubka-yub-1057-yub-1057a.html",
//                             "id": "4528",
//                             "title": "Юбка YUB-1057",
//                             "articul": "YUB-1057A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная с баской и высокой посадкой.\n\nПояс переходит в высокую баску. Сзади вытачки и потайная молния 18 см, а также разрез глубиной 27 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 71 см\n\nШирина пояса - 4 см\n\nПолуюбхват по талии - 34 см\n\nПолуобхват по бедрам - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "618",
//                             "cost-opt": "309",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7a73a2291493f80.jpg",
//                                 "https://fashionup.ua/uploads/tov/30f37118c81df4c.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4527-yubka-yub-1073-yub-1073a.html",
//                             "id": "4527",
//                             "title": "Юбка YUB-1073",
//                             "articul": "YUB-1073A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини трапециевидной формы из твида.\n\nСпереди в рельефе разрез 10 см, сбоку потайная молния 17 см.\n\nДлина юбки - 42 см\n\nШирина пояса - 3 см\n\nПолуобхват по талии - 34 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "582",
//                             "cost-opt": "291",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7ff495d36e9c6ef.jpg",
//                                 "https://fashionup.ua/uploads/tov/95b38206ed0fc73.jpg"
//                             ],
//                             "sizes": "L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Confetti / Лапка конфети",
//                             "cloth": "твид: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4526-yubka-yub-1068-yub-1068a.html",
//                             "id": "4526",
//                             "title": "Юбка YUB-1068",
//                             "articul": "YUB-1068A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини прямого кроя с кокеткой на кнопках черного цвета.\n\nСпереди по полочке рельефы, в рельефах рабочие кнопки, сзади две вытачки\n\nРост модели на фото - 170 см\n\nДлина юбки - 48 см\n\nШирина пояса - 5 см\n\nШирина кокетки спереди - 16 см\n\nПолуобхват по талии - 34 см\n\nПолуобхват по бедрам - 43 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "648",
//                             "cost-opt": "324",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2733f56abd3a09a.jpg",
//                                 "https://fashionup.ua/uploads/tov/7ab0eaf4f307ebc.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан; экокожа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4525-yubka-yub-1062-yub-1062c.html",
//                             "id": "4525",
//                             "title": "Юбка YUB-1062",
//                             "articul": "YUB-1062C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди со складами свободного кроя на пуговицах в клеточку.\n\nПо переду планка с рабочими пуговицами, по бокам врезные карманы.\n\nРост модели на фото - 170 см\n\nДлина юбки - 65 см\n\nПолуобхват по талии - 36 см\n\nШирина пояса сзади - 6 см\n\nШирина пояса спереди - 7 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "796",
//                             "cost-opt": "398",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4071cec398d6237.jpg",
//                                 "https://fashionup.ua/uploads/tov/c5c0fba3cf2603e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray cell/ Серая клетка",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4524-yubka-yub-1062-yub-1062b.html",
//                             "id": "4524",
//                             "title": "Юбка YUB-1062",
//                             "articul": "YUB-1062B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди со складами свободного кроя на пуговицах в клеточку.\n\nПо переду планка с рабочими пуговицами, по бокам врезные карманы.\n\nРост модели на фото - 170 см\n\nДлина юбки - 65 см\n\nПолуобхват по талии - 36 см\n\nШирина пояса сзади - 6 см\n\nШирина пояса спереди - 7 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "796",
//                             "cost-opt": "398",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f52eecb35a0726f.jpg",
//                                 "https://fashionup.ua/uploads/tov/8e3cd91a8882b0a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Blue cell/ Синяя клетка",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4523-yubka-yub-1062-yub-1062a.html",
//                             "id": "4523",
//                             "title": "Юбка YUB-1062",
//                             "articul": "YUB-1062A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди со складами свободного кроя на пуговицах в клеточку.\n\nПо переду планка с рабочими пуговицами, по бокам врезные карманы.\n\nРост модели на фото - 170 см\n\nДлина юбки - 65 см\n\nПолуобхват по талии - 36 см\n\nШирина пояса сзади - 6 см\n\nШирина пояса спереди - 7 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "796",
//                             "cost-opt": "398",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6c47bf848befbc0.jpg",
//                                 "https://fashionup.ua/uploads/tov/c7fc4989c131512.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Red cell/ Красная клетка",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4522-yubka-yub-1069-yub-1069c.html",
//                             "id": "4522",
//                             "title": "Юбка YUB-1069",
//                             "articul": "YUB-1069C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская клёш на запах с врезными карманами.\n\nПо бокам врезнае карманы, пояс съемный, сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nШирина пояса - 6 см\n\nПолуобхват по талии - 35 см\n\nДлина пояса - 138 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "706",
//                             "cost-opt": "353",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/08fa3d84e5b953a.jpg",
//                                 "https://fashionup.ua/uploads/tov/813d9ff51efbbfe.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4521-yubka-yub-1069-yub-1069b.html",
//                             "id": "4521",
//                             "title": "Юбка YUB-1069",
//                             "articul": "YUB-1069B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская клёш на запах с врезными карманами.\n\nПо бокам врезнае карманы, пояс съемный, сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nШирина пояса - 6 см\n\nПолуобхват по талии - 35 см\n\nДлина пояса - 138 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "706",
//                             "cost-opt": "353",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a25a2c474cf481b.jpg",
//                                 "https://fashionup.ua/uploads/tov/099c4796006ea87.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Red/Красный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4520-yubka-yub-1069-yub-1069a.html",
//                             "id": "4520",
//                             "title": "Юбка YUB-1069",
//                             "articul": "YUB-1069A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская клёш на запах с врезными карманами.\n\nПо бокам врезнае карманы, пояс съемный, сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nШирина пояса - 6 см\n\nПолуобхват по талии - 35 см\n\nДлина пояса - 138 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "706",
//                             "cost-opt": "353",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7cb968e424f9ca4.jpg",
//                                 "https://fashionup.ua/uploads/tov/67a4b2189945bdc.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4519-yubka-yub-1042-yub-1042c.html",
//                             "id": "4519",
//                             "title": "Юбка YUB-1042",
//                             "articul": "YUB-1042C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская прямого силуэта с широкой рюшей из костюмной ткани.\n\nСпереди и сзади вытачки, внизу рюша шириной 19 см, сзади потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "514",
//                             "cost-opt": "257",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7753aaca4ba4af1.jpg",
//                                 "https://fashionup.ua/uploads/tov/5ac7b1b083aa494.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4518-yubka-yub-1042-yub-1042b.html",
//                             "id": "4518",
//                             "title": "Юбка YUB-1042",
//                             "articul": "YUB-1042B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская прямого силуэта с широкой рюшей из костюмной ткани.\n\nСпереди и сзади вытачки, внизу рюша шириной 19 см, сзади потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "514",
//                             "cost-opt": "257",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/601b78e3c90b706.jpg",
//                                 "https://fashionup.ua/uploads/tov/07b9e59bb27ec28.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4517-yubka-yub-1042-yub-1042a.html",
//                             "id": "4517",
//                             "title": "Юбка YUB-1042",
//                             "articul": "YUB-1042A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская прямого силуэта с широкой рюшей из костюмной ткани.\n\nСпереди и сзади вытачки, внизу рюша шириной 19 см, сзади потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "514",
//                             "cost-opt": "257",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cb8982ef143aa8d.jpg",
//                                 "https://fashionup.ua/uploads/tov/515d9457b25f783.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Peach/Персиковый",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4516-yubka-yub-1066-yub-1066b.html",
//                             "id": "4516",
//                             "title": "Юбка YUB-1066",
//                             "articul": "YUB-1066B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди на запах из теплого кашемира с хольнитенами.\n\nЮбка ровного силуэта на запах переходящий в декоративный пояс. Пояс-завязка съемный. По спинке вытачки и разрез 26 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 70 см\n\nПолуобхват по талии - 37 см\n\nПолуобхват по бедрам - 43 см\n\nДлина пояса-завязки - 100 см\n\nДлина молнии сзади - 16 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "690",
//                             "cost-opt": "345",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e904cf5dcc6abe2.jpg",
//                                 "https://fashionup.ua/uploads/tov/2563dfd72065626.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Beige cell/Бежевая клетка",
//                             "cloth": "кашемир: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4514-yubka-yub-1055-yub-1055d.html",
//                             "id": "4514",
//                             "title": "Юбка YUB-1055",
//                             "articul": "YUB-1055D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди с кокеткой из экокожи на флисе.\n\nЮбка прямого кроя, сзади вытачки, по переду кокетка с рабочими кнопками и разрез 18 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 62 см\n\nПолуобхват по талии - 34 см\n\nПолуубхват по бедрам - 40 см\n\nШирина кокетки спереди - 14 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cda98c379c4f06d.jpg",
//                                 "https://fashionup.ua/uploads/tov/ad4b5b551022618.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "экокожа: 100% полиуритан, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4513-yubka-yub-1055-yub-1055c.html",
//                             "id": "4513",
//                             "title": "Юбка YUB-1055",
//                             "articul": "YUB-1055C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди с кокеткой из экокожи на флисе.\n\nЮбка прямого кроя, сзади вытачки, по переду кокетка с рабочими кнопками и разрез 18 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 62 см\n\nПолуобхват по талии - 34 см\n\nПолуубхват по бедрам - 40 см\n\nШирина кокетки спереди - 14 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/270b8784b8d8a8d.jpg",
//                                 "https://fashionup.ua/uploads/tov/27237dfdedb6ac0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4512-yubka-yub-1055-yub-1055b.html",
//                             "id": "4512",
//                             "title": "Юбка YUB-1055",
//                             "articul": "YUB-1055B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди с кокеткой из экокожи на флисе.\n\nЮбка прямого кроя, сзади вытачки, по переду кокетка с рабочими кнопками и разрез 18 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 62 см\n\nПолуобхват по талии - 34 см\n\nПолуубхват по бедрам - 40 см\n\nШирина кокетки спереди - 14 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/dbd9cf72e97a22c.jpg",
//                                 "https://fashionup.ua/uploads/tov/f692c43ee46df50.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "экокожа: 100% полиуритан, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4511-yubka-yub-1055-yub-1055a.html",
//                             "id": "4511",
//                             "title": "Юбка YUB-1055",
//                             "articul": "YUB-1055A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди с кокеткой из экокожи на флисе.\n\nЮбка прямого кроя, сзади вытачки, по переду кокетка с рабочими кнопками и разрез 18 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 62 см\n\nПолуобхват по талии - 34 см\n\nПолуубхват по бедрам - 40 см\n\nШирина кокетки спереди - 14 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "634",
//                             "cost-opt": "317",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5477bc0003c528c.jpg",
//                                 "https://fashionup.ua/uploads/tov/07c96f1d92cf1e6.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "экокожа: 100% полиуритан, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4510-yubka-yub-1056-yub-1056d.html",
//                             "id": "4510",
//                             "title": "Юбка YUB-1056",
//                             "articul": "YUB-1056D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная к низу с оригинальным поясом.\n\nПо переду в талии заложены склады, спереди декоративный пояс внахлест, сзади по спинке вытачки и разрез, а также потайная молния 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nШирина пояса - 6 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 46 см\n\nГлубина разреза - 27 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "518",
//                             "cost-opt": "259",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0a77b9358b8971a.jpg",
//                                 "https://fashionup.ua/uploads/tov/5a101453d139894.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Red/Красный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4509-yubka-yub-1056-yub-1056c.html",
//                             "id": "4509",
//                             "title": "Юбка YUB-1056",
//                             "articul": "YUB-1056C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная к низу с оригинальным поясом.\n\nПо переду в талии заложены склады, спереди декоративный пояс внахлест, сзади по спинке вытачки и разрез, а также потайная молния 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nШирина пояса - 6 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 46 см\n\nГлубина разреза - 27 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "518",
//                             "cost-opt": "259",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7a4ba42dbed31e6.jpg",
//                                 "https://fashionup.ua/uploads/tov/01fa9ac36d6ef2b.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4508-yubka-yub-1056-yub-1056b.html",
//                             "id": "4508",
//                             "title": "Юбка YUB-1056",
//                             "articul": "YUB-1056B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная к низу с оригинальным поясом.\n\nПо переду в талии заложены склады, спереди декоративный пояс внахлест, сзади по спинке вытачки и разрез, а также потайная молния 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nШирина пояса - 6 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 46 см\n\nГлубина разреза - 27 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "518",
//                             "cost-opt": "259",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d44f58084d2ebcc.jpg",
//                                 "https://fashionup.ua/uploads/tov/f80cf8e6da8a478.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Electric blue/Электрик",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4507-yubka-yub-1056-yub-1056a.html",
//                             "id": "4507",
//                             "title": "Юбка YUB-1056",
//                             "articul": "YUB-1056A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди зауженная к низу с оригинальным поясом.\n\nПо переду в талии заложены склады, спереди декоративный пояс внахлест, сзади по спинке вытачки и разрез, а также потайная молния 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nШирина пояса - 6 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 46 см\n\nГлубина разреза - 27 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "518",
//                             "cost-opt": "259",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/608d41b44924acb.jpg",
//                                 "https://fashionup.ua/uploads/tov/e8dadfef47641b0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4506-yubka-yub-1067-yub-1067b.html",
//                             "id": "4506",
//                             "title": "Юбка YUB-1067",
//                             "articul": "YUB-1067B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди на запах из экозамши.\n\nСзади по спинке вытачки, завязки идут от пояса.\n\nРост модели на фото - 170 см\n\nДлина юбки - 73 см\n\nДлина завязок - по 60 см\n\nПолуобхват по талии - 33 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "680",
//                             "cost-opt": "340",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/aa7fc3f2aace6b6.jpg",
//                                 "https://fashionup.ua/uploads/tov/be86c6bd1fd95f4.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Mocha/Мокко",
//                             "cloth": "экозамша на дайвинге: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4505-yubka-yub-1067-yub-1067a.html",
//                             "id": "4505",
//                             "title": "Юбка YUB-1067",
//                             "articul": "YUB-1067A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская миди на запах из экозамши.\n\nСзади по спинке вытачки, завязки идут от пояса.\n\nРост модели на фото - 170 см\n\nДлина юбки - 73 см\n\nДлина завязок - по 60 см\n\nПолуобхват по талии - 33 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "680",
//                             "cost-opt": "340",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2db1b70cf9bdf86.jpg",
//                                 "https://fashionup.ua/uploads/tov/bbd58932698cc52.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Peach/Персиковый",
//                             "cloth": "экозамша на дайвинге: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4504-yubka-yub-1060-yub-1060c.html",
//                             "id": "4504",
//                             "title": "Юбка YUB-1060",
//                             "articul": "YUB-1060C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини с накладными карманами из вельвета.\n\nСпереди по бокам врезные карманы, по спинке вытачки и два накладных кармана, а также маленький разрез.\n\nРост модели на фото - 170 см\n\nДлина юбки - 47 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 45 см\n\nДлина молнии спереди - 12 см\n\nГлубина разреза - 7 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "570",
//                             "cost-opt": "285",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3dd56ec19646876.jpg",
//                                 "https://fashionup.ua/uploads/tov/13e80111e5e7d19.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Mustard/Горчичиный",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4503-yubka-yub-1060-yub-1060b.html",
//                             "id": "4503",
//                             "title": "Юбка YUB-1060",
//                             "articul": "YUB-1060B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини с накладными карманами из вельвета.\n\nСпереди по бокам врезные карманы, по спинке вытачки и два накладных кармана, а также маленький разрез.\n\nРост модели на фото - 170 см\n\nДлина юбки - 47 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 45 см\n\nДлина молнии спереди - 12 см\n\nГлубина разреза - 7 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "570",
//                             "cost-opt": "285",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/27923aa6dc339cf.jpg",
//                                 "https://fashionup.ua/uploads/tov/dbbb581b51e31dc.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4502-yubka-yub-1060-yub-1060a.html",
//                             "id": "4502",
//                             "title": "Юбка YUB-1060",
//                             "articul": "YUB-1060A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Юбка женская мини с накладными карманами из вельвета.\n\nСпереди по бокам врезные карманы, по спинке вытачки и два накладных кармана, а также маленький разрез.\n\nРост модели на фото - 170 см\n\nДлина юбки - 47 см\n\nШирина пояса - 4 см\n\nПолуобхват по талии - 36 см\n\nПолуобхват по бедрам - 45 см\n\nДлина молнии спереди - 12 см\n\nГлубина разреза - 7 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "570",
//                             "cost-opt": "285",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b46a488cd386858.jpg",
//                                 "https://fashionup.ua/uploads/tov/bb7126f72a1eda3.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Chocolate/Шоколадный",
//                             "cloth": "вельвет: 95% полиамид, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4501-tolstovka-quottessiequot-kf-1678b.html",
//                             "id": "4501",
//                             "title": "Толстовка \"Tessie\"",
//                             "articul": "KF-1678B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная теплая толстовка на флисе с капюшоном и карманом кенгуру.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 60 см\n\nДлина рукава - 63 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "814",
//                             "cost-opt": "407",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b63ee8feb4a37eb.jpg",
//                                 "https://fashionup.ua/uploads/tov/f9234f5e222e60c.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий",
//                             "cloth": "трехнитка: 70%хлопок, 30%полиэстер, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4500-tolstovka-quottessiequot-kf-1678a.html",
//                             "id": "4500",
//                             "title": "Толстовка \"Tessie\"",
//                             "articul": "KF-1678A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная теплая толстовка на флисе с капюшоном и карманом кенгуру.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 60 см\n\nДлина рукава - 63 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "814",
//                             "cost-opt": "407",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/dc00f0fe458cc98.jpg",
//                                 "https://fashionup.ua/uploads/tov/818841d806668f1.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "трехнитка: 70%хлопок, 30%полиэстер, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4499-golf-quotagataquot-kf-1813l.html",
//                             "id": "4499",
//                             "title": "Гольф \"Agata\"",
//                             "articul": "KF-1813L",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "468",
//                             "cost-opt": "234",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/767e64bdc763660.jpg",
//                                 "https://fashionup.ua/uploads/tov/a15883ee4d7e479.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4498-golf-quotagataquot-kf-1813k.html",
//                             "id": "4498",
//                             "title": "Гольф \"Agata\"",
//                             "articul": "KF-1813K",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "468",
//                             "cost-opt": "234",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/875a25aaf1d8194.jpg",
//                                 "https://fashionup.ua/uploads/tov/9156fe72a0bd8f2.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "светло-серый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4497-golf-quotagataquot-kf-1813j.html",
//                             "id": "4497",
//                             "title": "Гольф \"Agata\"",
//                             "articul": "KF-1813J",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "468",
//                             "cost-opt": "234",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3fea18e37c84796.jpg",
//                                 "https://fashionup.ua/uploads/tov/0e6a59707739d67.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4496-golf-quotagataquot-kf-1813i.html",
//                             "id": "4496",
//                             "title": "Гольф \"Agata\"",
//                             "articul": "KF-1813I",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "468",
//                             "cost-opt": "234",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6127b7fb641bcfc.jpg",
//                                 "https://fashionup.ua/uploads/tov/44d3cb22180a0b4.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4495-golf-quotagataquot-kf-1813h.html",
//                             "id": "4495",
//                             "title": "Гольф \"Agata\"",
//                             "articul": "KF-1813H",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "468",
//                             "cost-opt": "234",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/622fc8ed56d77d0.jpg",
//                                 "https://fashionup.ua/uploads/tov/3cfff7a5bc76f15.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "песочный",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4492-golf-quotagataquot-kf-1813e.html",
//                             "id": "4492",
//                             "title": "Гольф \"Agata\"",
//                             "articul": "KF-1813E",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "468",
//                             "cost-opt": "234",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8910301981b6cac.jpg",
//                                 "https://fashionup.ua/uploads/tov/4817082e84add01.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "серый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4490-golf-quotagataquot-kf-1813c.html",
//                             "id": "4490",
//                             "title": "Гольф \"Agata\"",
//                             "articul": "KF-1813C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "468",
//                             "cost-opt": "234",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ab4cf629e55cc9a.jpg",
//                                 "https://fashionup.ua/uploads/tov/0dad644c3f0b6e0.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "оливковый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4473-sarafan-quotangeliquot-srf-1780b.html",
//                             "id": "4473",
//                             "title": "Сарафан \"Angeli\"",
//                             "articul": "SRF-1780B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Идеальный теплый сарафан для зимних холодов. Сарафан на молнии сбоку - 22 см. По переду разрез от горловины - 31 см. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина сарафана - 100 см\n\nДлина юбки с поясом - 62 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "942",
//                             "cost-opt": "471",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e42253ca66317f5.jpg",
//                                 "https://fashionup.ua/uploads/tov/1b491035361d732.jpg",
//                                 "https://fashionup.ua/uploads/tov/a872656316b8003.jpg",
//                                 "https://fashionup.ua/uploads/tov/1476ebbd34e6db9.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка коричневая",
//                             "cloth": "твид: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4472-sarafan-quotangeliquot-srf-1780a.html",
//                             "id": "4472",
//                             "title": "Сарафан \"Angeli\"",
//                             "articul": "SRF-1780A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Идеальный теплый сарафан для зимних холодов. Сарафан на молнии сбоку - 22 см. По переду разрез от горловины - 31 см. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина сарафана - 100 см\n\nДлина юбки с поясом - 62 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "942",
//                             "cost-opt": "471",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3a51eda637cc778.jpg",
//                                 "https://fashionup.ua/uploads/tov/e15fc634a8b76c8.jpg",
//                                 "https://fashionup.ua/uploads/tov/91f81ac0d94e147.jpg",
//                                 "https://fashionup.ua/uploads/tov/07397e15fffe44a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка черная",
//                             "cloth": "твид: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4469-plate-quotlatinaquot-pl-1804c.html",
//                             "id": "4469",
//                             "title": "Платье \"Latina\"",
//                             "articul": "PL-1804C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного кроя со спущенными плечиками. От плеча к центру заложены глубокие склады. Платье застегивается на молнию 47 см по спинке. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина платья - 86 см\n\nПолуобхват по груди - 41 см\n\nПолуобхват по бедрам - 43 см"
//                             },
//                             "cost": "602",
//                             "cost-opt": "301",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b832aa6cf416e1d.jpg",
//                                 "https://fashionup.ua/uploads/tov/3f477d8c4eb37df.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "марсала",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4468-plate-quotlatinaquot-pl-1804b.html",
//                             "id": "4468",
//                             "title": "Платье \"Latina\"",
//                             "articul": "PL-1804B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного кроя со спущенными плечиками. От плеча к центру заложены глубокие склады. Платье застегивается на молнию 47 см по спинке. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина платья - 86 см\n\nПолуобхват по груди - 41 см\n\nПолуобхват по бедрам - 43 см"
//                             },
//                             "cost": "602",
//                             "cost-opt": "301",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d5dd3fa34f622d0.jpg",
//                                 "https://fashionup.ua/uploads/tov/3061ebc955684cf.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "темно-зеленый",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4467-plate-quotlatinaquot-pl-1804a.html",
//                             "id": "4467",
//                             "title": "Платье \"Latina\"",
//                             "articul": "PL-1804A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного кроя со спущенными плечиками. От плеча к центру заложены глубокие склады. Платье застегивается на молнию 47 см по спинке. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина платья - 86 см\n\nПолуобхват по груди - 41 см\n\nПолуобхват по бедрам - 43 см"
//                             },
//                             "cost": "602",
//                             "cost-opt": "301",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d13b0d4429d5124.jpg",
//                                 "https://fashionup.ua/uploads/tov/defbaf941825036.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-серый",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4466-yubka-yub-1058-yub-1058b.html",
//                             "id": "4466",
//                             "title": "Юбка YUB-1058",
//                             "articul": "YUB-1058B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная, теплая юбка прямого кроя из мягкого кашемир на кнопках.\n\nРост модели ан фото -170 см\n\nДлина юбки - 73 см\n\nПолуобхват по бедрам - 45 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "676",
//                             "cost-opt": "338",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/414db7765987b6b.jpg",
//                                 "https://fashionup.ua/uploads/tov/90d778b57e8f6a1.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Beige/Бежевый",
//                             "cloth": "кашемир: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4465-yubka-yub-1058-yub-1058a.html",
//                             "id": "4465",
//                             "title": "Юбка YUB-1058",
//                             "articul": "YUB-1058A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная, теплая юбка прямого кроя из мягкого кашемир на кнопках.\n\nРост модели ан фото -170 см\n\nДлина юбки - 73 см\n\nПолуобхват по бедрам - 45 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "676",
//                             "cost-opt": "338",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cd2190e20ceb926.jpg",
//                                 "https://fashionup.ua/uploads/tov/e555d86151d55d0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "кашемир: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4464-kostyum-quotkatarinaquot-ks-1807b.html",
//                             "id": "4464",
//                             "title": "Костюм \"Katarina\"",
//                             "articul": "KS-1807B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасный теплый костюм с зауженной юбкой и укороченной кофтой. Кофта по полочке украшена декоративным жемчугом, рукав \"летучая мышь\". Юбка на резинке.\n\nРост модели на фото - 170 см\n\nДлина кофты - 46 см\n\nДлина рукава от горловины - 48 см\n\nДлина юбки - 63 см"
//                             },
//                             "cost": "1043",
//                             "cost-opt": "523",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7c60665af60779d.jpg",
//                                 "https://fashionup.ua/uploads/tov/1ad1c7dfa84898f.jpg",
//                                 "https://fashionup.ua/uploads/tov/c866e74f2452e80.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-зеленый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4463-kostyum-quotkatarinaquot-ks-1807a.html",
//                             "id": "4463",
//                             "title": "Костюм \"Katarina\"",
//                             "articul": "KS-1807A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасный теплый костюм с зауженной юбкой и укороченной кофтой. Кофта по полочке украшена декоративным жемчугом, рукав \"летучая мышь\". Юбка на резинке.\n\nРост модели на фото - 170 см\n\nДлина кофты - 46 см\n\nДлина рукава от горловины - 48 см\n\nДлина юбки - 63 см"
//                             },
//                             "cost": "1046",
//                             "cost-opt": "523",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/55bce7b01620b2f.jpg",
//                                 "https://fashionup.ua/uploads/tov/5f0d078803fbc6f.jpg",
//                                 "https://fashionup.ua/uploads/tov/9381d2bfdac17aa.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "марсала",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4459-plate-quotnikolinaquot-pl-1808b.html",
//                             "id": "4459",
//                             "title": "Платье \"Nikolina\"",
//                             "articul": "PL-1808B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивое платье свободного кроя с рукавом \"летучая мышь\". На спинке платья V-образный вырез, украшенный кружевом. \n\nРост модели на фото - 170 см\n\nДлина платья - 93 см\n\nДлина рукава - 25 см\n\nШирина кружева на рукаве - 18 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "630",
//                             "cost-opt": "315",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/72b9912f08e27e5.jpg",
//                                 "https://fashionup.ua/uploads/tov/7eaed19e63a6473.jpg",
//                                 "https://fashionup.ua/uploads/tov/e502850a6d306ff.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "бежевый",
//                             "cloth": "двухнитка: 70%хлопок, 30%полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4458-plate-quotnikolinaquot-pl-1808a.html",
//                             "id": "4458",
//                             "title": "Платье \"Nikolina\"",
//                             "articul": "PL-1808A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивое платье свободного кроя с рукавом \"летучая мышь\". На спинке платья V-образный вырез, украшенный кружевом. \n\nРост модели на фото - 170 см\n\nДлина платья - 93 см\n\nДлина рукава - 25 см\n\nШирина кружева на рукаве - 18 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "630",
//                             "cost-opt": "315",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2765880c372e940.jpg",
//                                 "https://fashionup.ua/uploads/tov/6f211ffa44d7424.jpg",
//                                 "https://fashionup.ua/uploads/tov/4f44b9e75bcb19a.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "двухнитка: 70%хлопок, 30%полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kostyumy-kombinezony/4454-kostyum-quotmodenaquot-ks-1800b.html",
//                             "id": "4454",
//                             "title": "Костюм \"Modena\"",
//                             "articul": "KS-1800B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальный костюм \"Modena\" состоит из свитшота и юбки. Свитшот с капюшоном и накладными карманами. Юбка прямого кроя на резинке со шлицей.\n\nРост модели на фото - 170 см\n\nДлина свитшота - 56 см\n\nДлина рукава - 56 см\n\nДлина юбки - 49 см\n\nШирина манжет - 5 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "858",
//                             "cost-opt": "429",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2c6db2ac1e5b7e8.jpg",
//                                 "https://fashionup.ua/uploads/tov/d8fadd85ca4b1fd.jpg",
//                                 "https://fashionup.ua/uploads/tov/edffdac0a160018.jpg",
//                                 "https://fashionup.ua/uploads/tov/20bba2036d42270.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "5",
//                             "category-name": "Костюмы и Комбинезоны",
//                             "color": "бежевый",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kostyumy-kombinezony/4453-kostyum-quotmodenaquot-ks-1800a.html",
//                             "id": "4453",
//                             "title": "Костюм \"Modena\"",
//                             "articul": "KS-1800A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальный костюм \"Modena\" состоит из свитшота и юбки. Свитшот с капюшоном и накладными карманами. Юбка прямого кроя на резинке со шлицей.\n\nРост модели на фото - 170 см\n\nДлина свитшота - 56 см\n\nДлина рукава - 56 см\n\nДлина юбки - 49 см\n\nШирина манжет - 5 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "858",
//                             "cost-opt": "429",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3305553f4e77104.jpg",
//                                 "https://fashionup.ua/uploads/tov/40b833bf41ea5bf.jpg",
//                                 "https://fashionup.ua/uploads/tov/3d4e7d38487df0c.jpg",
//                                 "https://fashionup.ua/uploads/tov/837e4920b1154ab.jpg",
//                                 "https://fashionup.ua/uploads/tov/fb833e4409e6954.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "5",
//                             "category-name": "Костюмы и Комбинезоны",
//                             "color": "красный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4452-yubka-yub-1061-yub-1061b.html",
//                             "id": "4452",
//                             "title": "Юбка YUB-1061",
//                             "articul": "YUB-1061B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка-карандаш из мягкого, теплого, приятного к телу кашемира. Юбка на завышенной талии, по переду выточки переходящие в кокетку и разрез-шлица 26 см. На кокетке рабочая застежка на кнопках. \n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nПолуобхват по бедрам - 44 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "696",
//                             "cost-opt": "348",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/26bfc43578431a2.jpg",
//                                 "https://fashionup.ua/uploads/tov/347d5f5656f43a6.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Beige/Бежевый",
//                             "cloth": "кашемир: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4451-yubka-yub-1061-yub-1061a.html",
//                             "id": "4451",
//                             "title": "Юбка YUB-1061",
//                             "articul": "YUB-1061A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка-карандаш из мягкого, теплого, приятного к телу кашемира. Юбка на завышенной талии, по переду выточки переходящие в кокетку и разрез-шлица 26 см. На кокетке рабочая застежка на кнопках. \n\nРост модели на фото - 170 см\n\nДлина юбки - 74 см\n\nПолуобхват по бедрам - 44 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "696",
//                             "cost-opt": "348",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a7aad0d7d21e274.jpg",
//                                 "https://fashionup.ua/uploads/tov/bf714d687e31d26.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "кашемир: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4450-plate-quotviteliaquot-pl-1810b.html",
//                             "id": "4450",
//                             "title": "Платье \"Vitelia\"",
//                             "articul": "PL-1810B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплое платье свободного кроя с рукавами \"летучая мышь\". \n\nРост модели на фото -170 см\n\nДлина платья - 88 см\n\nДлина рукава - 69 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "704",
//                             "cost-opt": "352",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4bea5dc33ef7673.jpg",
//                                 "https://fashionup.ua/uploads/tov/10243d2fe01653e.jpg",
//                                 "https://fashionup.ua/uploads/tov/bd844a4b3e932f2.jpg",
//                                 "https://fashionup.ua/uploads/tov/e38226b96bb3cbf.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "марсала+серый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4449-plate-quotviteliaquot-pl-1810a.html",
//                             "id": "4449",
//                             "title": "Платье \"Vitelia\"",
//                             "articul": "PL-1810A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплое платье свободного кроя с рукавами \"летучая мышь\". \n\nРост модели на фото -170 см\n\nДлина платья - 88 см\n\nДлина рукава - 69 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "704",
//                             "cost-opt": "352",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e1b230f9505a524.jpg",
//                                 "https://fashionup.ua/uploads/tov/077e016579a20ce.jpg",
//                                 "https://fashionup.ua/uploads/tov/abe65032065fc88.jpg",
//                                 "https://fashionup.ua/uploads/tov/9a716af9d4957ea.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-зеленый+бежевый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4448-plate-quotsiennaquot-pl-1799c.html",
//                             "id": "4448",
//                             "title": "Платье \"Sienna\"",
//                             "articul": "PL-1799C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного силуэта с накладным V-образным воротником. По переду рельефы, по спинке выточки и потайная молния 38 см. Рукав короткий с манжетой.\n\nРост модели на фото - 170 см\n\nДлина платья - 90 см\n\nДлина рукава - 25 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "690",
//                             "cost-opt": "345",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5c03e43c7c199c7.jpg",
//                                 "https://fashionup.ua/uploads/tov/de8ec05a0489ccb.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "серый",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4447-plate-quotsiennaquot-pl-1799b.html",
//                             "id": "4447",
//                             "title": "Платье \"Sienna\"",
//                             "articul": "PL-1799B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного силуэта с накладным V-образным воротником. По переду рельефы, по спинке выточки и потайная молния 38 см. Рукав короткий с манжетой.\n\nРост модели на фото - 170 см\n\nДлина платья - 90 см\n\nДлина рукава - 25 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "690",
//                             "cost-opt": "345",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/807853140a57300.jpg",
//                                 "https://fashionup.ua/uploads/tov/073fdffe0bde93e.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "марсала",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4446-plate-quotsiennaquot-pl-1799a.html",
//                             "id": "4446",
//                             "title": "Платье \"Sienna\"",
//                             "articul": "PL-1799A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного силуэта с накладным V-образным воротником. По переду рельефы, по спинке выточки и потайная молния 38 см. Рукав короткий с манжетой.\n\nРост модели на фото - 170 см\n\nДлина платья - 90 см\n\nДлина рукава - 25 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "690",
//                             "cost-opt": "345",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/54b0c837a0c2868.jpg",
//                                 "https://fashionup.ua/uploads/tov/9f232b7a4fd979e.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "черный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4444-svitshot-quotriminiquot-kf-1801b.html",
//                             "id": "4444",
//                             "title": "Свитшот \"Rimini\"",
//                             "articul": "KF-1801B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальный свитшот на все случаи жизни. Спереди заложены три декоративные склады вдоль передней полочки, рукав реглан.\n\nРост модели на фото - 170 см\n\nДлина свитшота - 61 см\n\nДлина рукава от горловины - 69 см\n\nШирина манжет - 6 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "540",
//                             "cost-opt": "270",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a2f6e6874e41a39.jpg",
//                                 "https://fashionup.ua/uploads/tov/1ec5d02cab01e6b.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "бежевый",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4443-svitshot-quotriminiquot-kf-1801a.html",
//                             "id": "4443",
//                             "title": "Свитшот \"Rimini\"",
//                             "articul": "KF-1801A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальный свитшот на все случаи жизни. Спереди заложены три декоративные склады вдоль передней полочки, рукав реглан.\n\nРост модели на фото - 170 см\n\nДлина свитшота - 61 см\n\nДлина рукава от горловины - 69 см\n\nШирина манжет - 6 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "540",
//                             "cost-opt": "270",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f275c84ab253f86.jpg",
//                                 "https://fashionup.ua/uploads/tov/6a210fec013eb3c.jpg",
//                                 "https://fashionup.ua/uploads/tov/36c534a2b7b2248.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "красный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4442-plate-quotmarcyquot-pl-1774b.html",
//                             "id": "4442",
//                             "title": "Платье \"Marcy\"",
//                             "articul": "PL-1774B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплое платье свободного кроя. Спереди на груди накладной карман, сбоку вставка в виде лампаса.\n\nРост модели на фото - 170 см\n\nДлина платья - 88 см\n\nДлина рукава - 62 см\n\nШирина вставки спереди - 7 см"
//                             },
//                             "cost": "820",
//                             "cost-opt": "410",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/24e5797a218d768.jpg",
//                                 "https://fashionup.ua/uploads/tov/61588ae02c6f165.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "марсала+серый",
//                             "cloth": ""
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4441-plate-quotmarcyquot-pl-1774a.html",
//                             "id": "4441",
//                             "title": "Платье \"Marcy\"",
//                             "articul": "PL-1774A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплое платье свободного кроя. Спереди на груди накладной карман, сбоку вставка в виде лампаса.\n\nРост модели на фото - 170 см\n\nДлина платья - 88 см\n\nДлина рукава - 62 см\n\nШирина вставки спереди - 7 см"
//                             },
//                             "cost": "820",
//                             "cost-opt": "410",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/932d599bc03de35.jpg",
//                                 "https://fashionup.ua/uploads/tov/ae1c5a7f1aaaab8.jpg",
//                                 "https://fashionup.ua/uploads/tov/5ce2bc5148b285a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "темно-зеленый+бежевый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4440-yubka-yub-1044-yub-1044c.html",
//                             "id": "4440",
//                             "title": "Юбка YUB-1044",
//                             "articul": "YUB-1044C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная ассиметричная юбка из джерси с кожаной вставкой. Ткани разделяет рабочая молния, сзади потайная молния 16 см.\n\nДлина юбки по переду - 71 см\n\nДлина юбки сзади - 67 см\n\nДлина молнии спереди - 50 см\n\nПолуобхват по бедрам - 42 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "598",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0b629a5a2418c88.jpg",
//                                 "https://fashionup.ua/uploads/tov/47005063ce45b75.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан; экокожа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4439-yubka-yub-1044-yub-1044b.html",
//                             "id": "4439",
//                             "title": "Юбка YUB-1044",
//                             "articul": "YUB-1044B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная ассиметричная юбка из джерси с кожаной вставкой. Ткани разделяет рабочая молния, сзади потайная молния 16 см.\n\nДлина юбки по переду - 71 см\n\nДлина юбки сзади - 67 см\n\nДлина молнии спереди - 50 см\n\nПолуобхват по бедрам - 42 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "598",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ed135d017771b4f.jpg",
//                                 "https://fashionup.ua/uploads/tov/93438cd11e19e3f.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан; экокожа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4438-yubka-yub-1044-yub-1044a.html",
//                             "id": "4438",
//                             "title": "Юбка YUB-1044",
//                             "articul": "YUB-1044A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная ассиметричная юбка из джерси с кожаной вставкой. Ткани разделяет рабочая молния, сзади потайная молния 16 см.\n\nДлина юбки по переду - 71 см\n\nДлина юбки сзади - 67 см\n\nДлина молнии спереди - 50 см\n\nПолуобхват по бедрам - 42 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "598",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/18fc5173896ba1a.jpg",
//                                 "https://fashionup.ua/uploads/tov/2c29290d0171b03.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан; экокожа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4436-kardigan-quotlilienquot-kd-1806a.html",
//                             "id": "4436",
//                             "title": "Кардиган \"Lilien\"",
//                             "articul": "KD-1806A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплый, мягкий, воздушный кардиган на запах \"Lilien\". Обработка швов по краям открытая, вдоль спинки и вдоль рукава швы наружу.\n\nРост модели на фото - 170 см\n\nДлина от плечевого шва - 79 см\n\nДлина рукава - 55 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "750",
//                             "cost-opt": "375",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bb83f764833ef22.jpg",
//                                 "https://fashionup.ua/uploads/tov/ecf8fe1be7a5574.jpg",
//                                 "https://fashionup.ua/uploads/tov/289433228f76906.jpg",
//                                 "https://fashionup.ua/uploads/tov/7bddcddbb67876d.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "серый",
//                             "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4434-hudi-quotberryquot-kf-1797b.html",
//                             "id": "4434",
//                             "title": "Худи \"Berry\"",
//                             "articul": "KF-1797B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальное худи \"Berry\" свободного кроя с накладным карманом-кенгуру, глубоким капюшоном и манжетой на рукаве и по низу. \n\nРост модели на фото -170 см\n\nДлина худи с учетом манжеты - 84 см\n\nШирина манжеты - 5 см\n\nДлина рукава с учетом манжеты - 58 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "860",
//                             "cost-opt": "430",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bbcbf54e9d44a29.jpg",
//                                 "https://fashionup.ua/uploads/tov/4a0ef5781c68f68.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "оливковый",
//                             "cloth": "экозамша на дайвинге: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4433-hudi-quotberryquot-kf-1797a.html",
//                             "id": "4433",
//                             "title": "Худи \"Berry\"",
//                             "articul": "KF-1797A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальное худи \"Berry\" свободного кроя с накладным карманом-кенгуру, глубоким капюшоном и манжетой на рукаве и по низу. \n\nРост модели на фото -170 см\n\nДлина худи с учетом манжеты - 84 см\n\nШирина манжеты - 5 см\n\nДлина рукава с учетом манжеты - 58 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "860",
//                             "cost-opt": "430",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/06daca6288e2152.jpg",
//                                 "https://fashionup.ua/uploads/tov/40c8a66de682b53.jpg",
//                                 "https://fashionup.ua/uploads/tov/01b4033072fb52d.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "марсала",
//                             "cloth": "экозамша на дайвинге: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4432-plate-quottracyquot-pl-1795c.html",
//                             "id": "4432",
//                             "title": "Платье \"Tracy\"",
//                             "articul": "PL-1795C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантное платье \"Tracy\" приталенного кроя. Платье отрезное по талии, в районе талии узел драпировка.\n\nРост модели на фото - 170 см\n\nДлина платья - 109 см\n\nДлина рукава - 59 см\n\nДлина верхней полочки до талии - 44 см\n\nДлина юбки от талии - 65 см\n\nПолуобхват по талии - 33 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "798",
//                             "cost-opt": "399",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6cd7cfb5c515236.jpg",
//                                 "https://fashionup.ua/uploads/tov/897d846854cd781.jpg",
//                                 "https://fashionup.ua/uploads/tov/6a446974f5c1fc6.jpg",
//                                 "https://fashionup.ua/uploads/tov/a37aed5438bdf40.jpg",
//                                 "https://fashionup.ua/uploads/tov/5b2e181e45efe14.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "синий",
//                             "cloth": "трикотаж с люрексом: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4431-plate-quottracyquot-pl-1795b.html",
//                             "id": "4431",
//                             "title": "Платье \"Tracy\"",
//                             "articul": "PL-1795B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантное платье \"Tracy\" приталенного кроя. Платье отрезное по талии, в районе талии узел драпировка.\n\nРост модели на фото - 170 см\n\nДлина платья - 109 см\n\nДлина рукава - 59 см\n\nДлина верхней полочки до талии - 44 см\n\nДлина юбки от талии - 65 см\n\nПолуобхват по талии - 33 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "798",
//                             "cost-opt": "399",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e995188b8d76154.jpg",
//                                 "https://fashionup.ua/uploads/tov/65ef2a109a7416d.jpg",
//                                 "https://fashionup.ua/uploads/tov/242938e669deaed.jpg",
//                                 "https://fashionup.ua/uploads/tov/c6aeaf71503f2e0.jpg",
//                                 "https://fashionup.ua/uploads/tov/9c7cbaf88d1a1dd.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "бордовый",
//                             "cloth": "трикотаж с люрексом: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4429-yubka-yub-1046-yub-1046d.html",
//                             "id": "4429",
//                             "title": "Юбка YUB-1046",
//                             "articul": "YUB-1046D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплая юбка прямого кроя из мягкого твида. Спереди накладные карманы, на поясе шлевки для ремня, сзади шлица 15 см. Ремень не в комплекте.\n\nРост модели на фото -170 см\n\nДлина с учетом пояса - 65 см\n\nШирина пояса - 5 см\n\nПолуобхват по бедрам - 45 см\n\nПолубхват пояса - 35 см"
//                             },
//                             "cost": "692",
//                             "cost-opt": "346",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8d01728c048200f.jpg",
//                                 "https://fashionup.ua/uploads/tov/1882eb8993ef010.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка бежевая",
//                             "cloth": "твид: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4428-yubka-yub-1046-yub-1046c.html",
//                             "id": "4428",
//                             "title": "Юбка YUB-1046",
//                             "articul": "YUB-1046C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплая юбка прямого кроя из мягкого твида. Спереди накладные карманы, на поясе шлевки для ремня, сзади шлица 15 см. Ремень не в комплекте.\n\nРост модели на фото -170 см\n\nДлина с учетом пояса - 65 см\n\nШирина пояса - 5 см\n\nПолуобхват по бедрам - 45 см\n\nПолубхват пояса - 35 см"
//                             },
//                             "cost": "692",
//                             "cost-opt": "346",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/41589541ad3ad5c.jpg",
//                                 "https://fashionup.ua/uploads/tov/d5cd57ad7d513b7.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка серая",
//                             "cloth": "твид: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4427-yubka-yub-1046-yub-1046b.html",
//                             "id": "4427",
//                             "title": "Юбка YUB-1046",
//                             "articul": "YUB-1046B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплая юбка прямого кроя из мягкого твида. Спереди накладные карманы, на поясе шлевки для ремня, сзади шлица 15 см. Ремень не в комплекте.\n\nРост модели на фото -170 см\n\nДлина с учетом пояса - 65 см\n\nШирина пояса - 5 см\n\nПолуобхват по бедрам - 45 см\n\nПолубхват пояса - 35 см"
//                             },
//                             "cost": "692",
//                             "cost-opt": "346",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5d09dd2150f3aa1.jpg",
//                                 "https://fashionup.ua/uploads/tov/3c30b10acbe087d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "лапка серо-зеленая",
//                             "cloth": "твид: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4426-yubka-yub-1046-yub-1046a.html",
//                             "id": "4426",
//                             "title": "Юбка YUB-1046",
//                             "articul": "YUB-1046A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Теплая юбка прямого кроя из мягкого твида. Спереди накладные карманы, на поясе шлевки для ремня, сзади шлица 15 см. Ремень не в комплекте.\n\nРост модели на фото -170 см\n\nДлина с учетом пояса - 65 см\n\nШирина пояса - 5 см\n\nПолуобхват по бедрам - 45 см\n\nПолубхват пояса - 35 см"
//                             },
//                             "cost": "692",
//                             "cost-opt": "346",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e753583e932588c.jpg",
//                                 "https://fashionup.ua/uploads/tov/61b6f5f567b6f5e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "лапка черно-белая",
//                             "cloth": "твид: 10% шерсть, 48% акрил, 42% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4425-sarafan-quotcherryquot-srf-1798c.html",
//                             "id": "4425",
//                             "title": "Сарафан \"Cherry\"",
//                             "articul": "SRF-1798C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Интересный сарафан свободного трапециевидного кроя. Спереди рабочая молния по всей длине сарафана и прорезные карманы с втачной листочкой. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина сарафана - 87 см\n\nДлина молнии - 65 см\n\nПолуобхват груди - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "828",
//                             "cost-opt": "414",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/dcbd6dcc4fd46df.jpg",
//                                 "https://fashionup.ua/uploads/tov/b670f226b338160.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка розовая",
//                             "cloth": "экозамша на дайвинге: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4424-sarafan-quotcherryquot-srf-1798b.html",
//                             "id": "4424",
//                             "title": "Сарафан \"Cherry\"",
//                             "articul": "SRF-1798B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Интересный сарафан свободного трапециевидного кроя. Спереди рабочая молния по всей длине сарафана и прорезные карманы с втачной листочкой. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина сарафана - 87 см\n\nДлина молнии - 65 см\n\nПолуобхват груди - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "828",
//                             "cost-opt": "414",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a70edc126e59188.jpg",
//                                 "https://fashionup.ua/uploads/tov/bd249fbfbdac358.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка бордовая",
//                             "cloth": "экозамша на дайвинге: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4423-sarafan-quotcherryquot-srf-1798a.html",
//                             "id": "4423",
//                             "title": "Сарафан \"Cherry\"",
//                             "articul": "SRF-1798A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Интересный сарафан свободного трапециевидного кроя. Спереди рабочая молния по всей длине сарафана и прорезные карманы с втачной листочкой. Гольф не в комплекте.\n\nРост модели на фото - 170 см\n\nДлина сарафана - 87 см\n\nДлина молнии - 65 см\n\nПолуобхват груди - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "828",
//                             "cost-opt": "414",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/09aea17142e71b6.jpg",
//                                 "https://fashionup.ua/uploads/tov/ae400ed685797a3.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка серая",
//                             "cloth": "экозамша на дайвинге: 95% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4420-yubka-yub-1048-yub-1048d.html",
//                             "id": "4420",
//                             "title": "Юбка YUB-1048",
//                             "articul": "YUB-1048D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная утепленная юбка прямого силуэта не даст Вам замерзнуть в холодные дни. Юбка из экокожи утеплена флисом. Пояс на кнопке, сзади потайная молния и разрез 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nДлина молнии сзади - 15 см"
//                             },
//                             "cost": "622",
//                             "cost-opt": "311",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/47271b15abeda73.jpg",
//                                 "https://fashionup.ua/uploads/tov/e38b6ea99e86a86.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4419-yubka-yub-1048-yub-1048c.html",
//                             "id": "4419",
//                             "title": "Юбка YUB-1048",
//                             "articul": "YUB-1048C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная утепленная юбка прямого силуэта не даст Вам замерзнуть в холодные дни. Юбка из экокожи утеплена флисом. Пояс на кнопке, сзади потайная молния и разрез 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nДлина молнии сзади - 15 см"
//                             },
//                             "cost": "622",
//                             "cost-opt": "311",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b2de0bbba5d3e92.jpg",
//                                 "https://fashionup.ua/uploads/tov/d52a2fab7ed937a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4418-yubka-yub-1048-yub-1048b.html",
//                             "id": "4418",
//                             "title": "Юбка YUB-1048",
//                             "articul": "YUB-1048B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная утепленная юбка прямого силуэта не даст Вам замерзнуть в холодные дни. Юбка из экокожи утеплена флисом. Пояс на кнопке, сзади потайная молния и разрез 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nДлина молнии сзади - 15 см"
//                             },
//                             "cost": "622",
//                             "cost-opt": "311",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e331254d820e0b3.jpg",
//                                 "https://fashionup.ua/uploads/tov/a7d1e3d67ec14bf.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4417-yubka-yub-1048-yub-1048a.html",
//                             "id": "4417",
//                             "title": "Юбка YUB-1048",
//                             "articul": "YUB-1048A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная утепленная юбка прямого силуэта не даст Вам замерзнуть в холодные дни. Юбка из экокожи утеплена флисом. Пояс на кнопке, сзади потайная молния и разрез 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nДлина молнии сзади - 15 см"
//                             },
//                             "cost": "622",
//                             "cost-opt": "311",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b0df8d51c3c7e63.jpg",
//                                 "https://fashionup.ua/uploads/tov/3d5cf289fdb69a0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4416-rubashka-quotmelaniaquot-rb-1791a.html",
//                             "id": "4416",
//                             "title": "Рубашка \"Melania\"",
//                             "articul": "RB-1791A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Вы наверняка мечтали о такой рубашке украшенной элементами кружева. Рубашка свободного кроя. \n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 68 см\n\nДлина рубашки по полочке - 62 см\n\nДлина рукава с учетом манжета - 58 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 50 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "654",
//                             "cost-opt": "327",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/475adebb4dd3412.jpg",
//                                 "https://fashionup.ua/uploads/tov/24e2effc352696c.jpg",
//                                 "https://fashionup.ua/uploads/tov/30bbd1e55cfb252.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4415-yubka-yub-1047-yub-1047d.html",
//                             "id": "4415",
//                             "title": "Юбка YUB-1047",
//                             "articul": "YUB-1047D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная утепленная юбка прямого силуэта на флисе. Сзади рабочая молния по всей длине юбки. \n\nРост модели на фото - 170 см\n\nДлина юбки - 55 см\n\nДлина молнии сзади - 55 см"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f33cc8291f212f2.jpg",
//                                 "https://fashionup.ua/uploads/tov/bba8bbd0cd4b08e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4414-yubka-yub-1047-yub-1047c.html",
//                             "id": "4414",
//                             "title": "Юбка YUB-1047",
//                             "articul": "YUB-1047C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная утепленная юбка прямого силуэта на флисе. Сзади рабочая молния по всей длине юбки. \n\nРост модели на фото - 170 см\n\nДлина юбки - 55 см\n\nДлина молнии сзади - 55 см"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6589b66d960dd77.jpg",
//                                 "https://fashionup.ua/uploads/tov/41c84be2a416465.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4413-yubka-yub-1047-yub-1047b.html",
//                             "id": "4413",
//                             "title": "Юбка YUB-1047",
//                             "articul": "YUB-1047B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная утепленная юбка прямого силуэта на флисе. Сзади рабочая молния по всей длине юбки. \n\nРост модели на фото - 170 см\n\nДлина юбки - 55 см\n\nДлина молнии сзади - 55 см"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/54ea91a2e2df25f.jpg",
//                                 "https://fashionup.ua/uploads/tov/9a7436692ca99d8.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4412-yubka-yub-1047-yub-1047a.html",
//                             "id": "4412",
//                             "title": "Юбка YUB-1047",
//                             "articul": "YUB-1047A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная утепленная юбка прямого силуэта на флисе. Сзади рабочая молния по всей длине юбки. \n\nРост модели на фото - 170 см\n\nДлина юбки - 55 см\n\nДлина молнии сзади - 55 см"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/33440ed54908008.jpg",
//                                 "https://fashionup.ua/uploads/tov/c265bc44648d69a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа, флис"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4411-bluza-quotclotildaquot-bz-1792d.html",
//                             "id": "4411",
//                             "title": "Блуза \"Clotilda\"",
//                             "articul": "BZ-1792D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная блуза свободного кроя с воротником - стойкой в виде чокера и высокими манжетами.\n\nРост модели на фото - 170 см\n\nДлина блузы - 65 см\n\nДлина рукава с учетом манжета - 61 см\n\nШирина манжета - 12 см\n\nПолубхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "532",
//                             "cost-opt": "266",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/417976810627f3d.jpg",
//                                 "https://fashionup.ua/uploads/tov/9adac3ae75c97d9.jpg",
//                                 "https://fashionup.ua/uploads/tov/e8868503b18f1e4.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "светлая пудра",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4410-bluza-quotclotildaquot-bz-1792c.html",
//                             "id": "4410",
//                             "title": "Блуза \"Clotilda\"",
//                             "articul": "BZ-1792C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная блуза свободного кроя с воротником - стойкой в виде чокера и высокими манжетами.\n\nРост модели на фото - 170 см\n\nДлина блузы - 65 см\n\nДлина рукава с учетом манжета - 61 см\n\nШирина манжета - 12 см\n\nПолубхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "532",
//                             "cost-opt": "266",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e30c05f73615645.jpg",
//                                 "https://fashionup.ua/uploads/tov/ac83d119581fce4.jpg",
//                                 "https://fashionup.ua/uploads/tov/a1c93c75714bf55.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4409-bluza-quotclotildaquot-bz-1792b.html",
//                             "id": "4409",
//                             "title": "Блуза \"Clotilda\"",
//                             "articul": "BZ-1792B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная блуза свободного кроя с воротником - стойкой в виде чокера и высокими манжетами.\n\nРост модели на фото - 170 см\n\nДлина блузы - 65 см\n\nДлина рукава с учетом манжета - 61 см\n\nШирина манжета - 12 см\n\nПолубхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "532",
//                             "cost-opt": "266",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a8b83862e129f06.jpg",
//                                 "https://fashionup.ua/uploads/tov/384ad110767e67d.jpg",
//                                 "https://fashionup.ua/uploads/tov/6fad39365f09b9c.jpg"
//                             ],
//                             "sizes": "42,44,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4408-bluza-quotclotildaquot-bz-1792a.html",
//                             "id": "4408",
//                             "title": "Блуза \"Clotilda\"",
//                             "articul": "BZ-1792A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная блуза свободного кроя с воротником - стойкой в виде чокера и высокими манжетами.\n\nРост модели на фото - 170 см\n\nДлина блузы - 65 см\n\nДлина рукава с учетом манжета - 61 см\n\nШирина манжета - 12 см\n\nПолубхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "532",
//                             "cost-opt": "266",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/955b6974cd44678.jpg",
//                                 "https://fashionup.ua/uploads/tov/0da35d38dfba63b.jpg",
//                                 "https://fashionup.ua/uploads/tov/330dfadc030dd5e.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/rubashki/4407-rubashka-quotsantiquot-rb-1790d.html",
//                             "id": "4407",
//                             "title": "Рубашка \"Santi\"",
//                             "articul": "RB-1790D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая рубашка свободного кроя с большим карманом на полочке. сС помощью двухцветной репсовой ленты, нашитой вдоль рукава, рукав можно сделать 3/4.\n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 59 см\n\nДлина рукава с учетом манжета - 57 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "674",
//                             "cost-opt": "337",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/fd177497e630123.jpg",
//                                 "https://fashionup.ua/uploads/tov/e825cd51451c7b8.jpg",
//                                 "https://fashionup.ua/uploads/tov/bdc696af5b4baca.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "9",
//                             "category-name": "Рубашки",
//                             "color": "красный",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/rubashki/4406-rubashka-quotsantiquot-rb-1790c.html",
//                             "id": "4406",
//                             "title": "Рубашка \"Santi\"",
//                             "articul": "RB-1790C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая рубашка свободного кроя с большим карманом на полочке. сС помощью двухцветной репсовой ленты, нашитой вдоль рукава, рукав можно сделать 3/4.\n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 59 см\n\nДлина рукава с учетом манжета - 57 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "674",
//                             "cost-opt": "337",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ddde64cb508bac7.jpg",
//                                 "https://fashionup.ua/uploads/tov/cd138db4cb7df36.jpg",
//                                 "https://fashionup.ua/uploads/tov/423a1cfb6a30738.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "9",
//                             "category-name": "Рубашки",
//                             "color": "голубой",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/rubashki/4405-rubashka-quotsantiquot-rb-1790b.html",
//                             "id": "4405",
//                             "title": "Рубашка \"Santi\"",
//                             "articul": "RB-1790B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая рубашка свободного кроя с большим карманом на полочке. сС помощью двухцветной репсовой ленты, нашитой вдоль рукава, рукав можно сделать 3/4.\n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 59 см\n\nДлина рукава с учетом манжета - 57 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "674",
//                             "cost-opt": "337",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/51973d3acd0884a.jpg",
//                                 "https://fashionup.ua/uploads/tov/8aa10ed73804e24.jpg",
//                                 "https://fashionup.ua/uploads/tov/31d19604bbc8b9d.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "9",
//                             "category-name": "Рубашки",
//                             "color": "черный",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/rubashki/4404-rubashka-quotsantiquot-rb-1790a.html",
//                             "id": "4404",
//                             "title": "Рубашка \"Santi\"",
//                             "articul": "RB-1790A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая рубашка свободного кроя с большим карманом на полочке. сС помощью двухцветной репсовой ленты, нашитой вдоль рукава, рукав можно сделать 3/4.\n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 59 см\n\nДлина рукава с учетом манжета - 57 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 49 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "674",
//                             "cost-opt": "337",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cad9b27d3106b78.jpg",
//                                 "https://fashionup.ua/uploads/tov/a10fa5d7e3d0c41.jpg",
//                                 "https://fashionup.ua/uploads/tov/4adf558d36c4769.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "9",
//                             "category-name": "Рубашки",
//                             "color": "белый",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4403-golf-quotcecilequot-kf-1796c.html",
//                             "id": "4403",
//                             "title": "Гольф \"Cecile\"",
//                             "articul": "KF-1796C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Универсальный трикотажный гольф идеально подчеркнет Вашу фигуру и будет согревать в холодную погоду. Рисунок \"лапша\". Двойное горло.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 60 см\n\nДлина рукава  - 59 см\n\nШирина горла - 18 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "478",
//                             "cost-opt": "239",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7c1e1a4220adf51.jpg",
//                                 "https://fashionup.ua/uploads/tov/9121bd904d51910.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "персиковый",
//                             "cloth": "трикотаж: 60% вискоза, 35% полиэстер, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4402-golf-quotcecilequot-kf-1796b.html",
//                             "id": "4402",
//                             "title": "Гольф \"Cecile\"",
//                             "articul": "KF-1796B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Универсальный трикотажный гольф идеально подчеркнет Вашу фигуру и будет согревать в холодную погоду. Рисунок \"лапша\". Двойное горло.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 60 см\n\nДлина рукава  - 59 см\n\nШирина горла - 18 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "478",
//                             "cost-opt": "239",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/798004a2d0d33c1.jpg",
//                                 "https://fashionup.ua/uploads/tov/df2f84945043a57.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "темно-серый",
//                             "cloth": "трикотаж: 60% вискоза, 35% полиэстер, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/kofty-svitshot/4401-golf-quotcecilequot-kf-1796a.html",
//                             "id": "4401",
//                             "title": "Гольф \"Cecile\"",
//                             "articul": "KF-1796A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Универсальный трикотажный гольф идеально подчеркнет Вашу фигуру и будет согревать в холодную погоду. Рисунок \"лапша\". Двойное горло.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 60 см\n\nДлина рукава  - 59 см\n\nШирина горла - 18 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "478",
//                             "cost-opt": "239",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/74baa8043a40ab6.jpg",
//                                 "https://fashionup.ua/uploads/tov/9276769c2411a19.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "13",
//                             "category-name": "Кофты,свитшот",
//                             "color": "светло-серый",
//                             "cloth": "трикотаж: 60% вискоза, 35% полиэстер, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/rubashki/4400-rubashka-quotolgaquot-rb-1785c.html",
//                             "id": "4400",
//                             "title": "Рубашка \"Olga\"",
//                             "articul": "RB-1785C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная рубашка - поло. Рубашка свободного кроя с фигурной передней полочкой и рабочими застежками по бокам.\n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 64 см\n\nДлина рубашки по полочке - 58 см\n\nДлина рукава с учетом манжета - 54 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 48 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ae7392605ab2bda.jpg",
//                                 "https://fashionup.ua/uploads/tov/9f22f38ff9cf6a4.jpg",
//                                 "https://fashionup.ua/uploads/tov/cdd6a990da096da.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "9",
//                             "category-name": "Рубашки",
//                             "color": "голубой",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/rubashki/4399-rubashka-quotolgaquot-rb-1785b.html",
//                             "id": "4399",
//                             "title": "Рубашка \"Olga\"",
//                             "articul": "RB-1785B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная рубашка - поло. Рубашка свободного кроя с фигурной передней полочкой и рабочими застежками по бокам.\n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 64 см\n\nДлина рубашки по полочке - 58 см\n\nДлина рукава с учетом манжета - 54 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 48 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5f65cd5896230b1.jpg",
//                                 "https://fashionup.ua/uploads/tov/21f5dc34e0889c8.jpg",
//                                 "https://fashionup.ua/uploads/tov/489fbdc1918c382.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "9",
//                             "category-name": "Рубашки",
//                             "color": "красный",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4398-rubashka-quotolgaquot-rb-1785a.html",
//                             "id": "4398",
//                             "title": "Рубашка \"Olga\"",
//                             "articul": "RB-1785A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная рубашка - поло. Рубашка свободного кроя с фигурной передней полочкой и рабочими застежками по бокам.\n\nРост модели на фото - 170 см\n\nДлина рубашки по спинке - 64 см\n\nДлина рубашки по полочке - 58 см\n\nДлина рукава с учетом манжета - 54 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 48 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6fbb38114705b3b.jpg",
//                                 "https://fashionup.ua/uploads/tov/ed51b0e21285086.jpg",
//                                 "https://fashionup.ua/uploads/tov/21f8605a11d6232.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4397-rubashka-quotcarmenquot-rb-1787a.html",
//                             "id": "4397",
//                             "title": "Рубашка \"Carmen\"",
//                             "articul": "RB-1787A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная рубашка свободного кроя будет идеальным дополнением гардероба любой модницы.\n\nРост модели на фото - 170 см\n\nДлина рубашки - 67 см\n\nДлина рукава с учетом манжета - 57 см\n\nШирина манжета - 5 см\n\nПолуобхват груди - 50 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "648",
//                             "cost-opt": "324",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6434035f9d5b369.jpg",
//                                 "https://fashionup.ua/uploads/tov/8e3124940628151.jpg",
//                                 "https://fashionup.ua/uploads/tov/78678cb9895cef7.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый + цветная клетка",
//                             "cloth": "коттон: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4396-bluza-quotrimmaquot-bz-1789d.html",
//                             "id": "4396",
//                             "title": "Блуза \"Rimma\"",
//                             "articul": "BZ-1789D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная блуза рубашечного кроя должна быть в гардеробе каждой девушки.\n\nРост модели на фото - 170 см\n\nДлина блузы - 63 см\n\nДлина рукава с учетом манжета - 59 см\n\nШирина манжета - 5 см\n\nПолубхват груди - 48 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "576",
//                             "cost-opt": "288",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/72b70773a20883e.jpg",
//                                 "https://fashionup.ua/uploads/tov/4fe690f5b4e37fd.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "джинс",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/bluzy/4395-bluza-quotrimmaquot-bz-1789c.html",
//                             "id": "4395",
//                             "title": "Блуза \"Rimma\"",
//                             "articul": "BZ-1789C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная блуза рубашечного кроя должна быть в гардеробе каждой девушки. \n\nРост модели на фото - 170 см\n\nДлина блузы - 63 см\n\nДлина рукава с учетом манжета - 59 см\n\nШирина манжета - 5 см\n\nПолубхват груди - 48 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "576",
//                             "cost-opt": "288",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/525ad83eb0c81d4.jpg",
//                                 "https://fashionup.ua/uploads/tov/8fd9aa94683e446.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "3",
//                             "category-name": "Блузы",
//                             "color": "коралловый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/bluzy/4394-bluza-quotrimmaquot-bz-1789b.html",
//                             "id": "4394",
//                             "title": "Блуза \"Rimma\"",
//                             "articul": "BZ-1789B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная блуза рубашечного кроя должна быть в гардеробе каждой девушки. \n\nРост модели на фото - 170 см\n\nДлина блузы - 63 см\n\nДлина рукава с учетом манжета - 59 см\n\nШирина манжета - 5 см\n\nПолубхват груди - 48 см\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "576",
//                             "cost-opt": "288",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/558403b7b787556.jpg",
//                                 "https://fashionup.ua/uploads/tov/c3904b1c278f276.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "3",
//                             "category-name": "Блузы",
//                             "color": "черный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4352-bluza-quotclarequot-bz-1783c.html",
//                             "id": "4352",
//                             "title": "Блуза \"Clare\"",
//                             "articul": "BZ-1783C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Эффектная Блуза \"Clare\" на запах однозначно выделит Вас из толпы. Насыщенные цвета и оригинальный крой блузы сделают ее изюминкой Вашего гардероба. Плечи блузы по переду и рукава снизу присборены. \n\nРост модели на фото - 170 см\n\nДлина блузы - 62 см\n\nДлина рукава с учетом манжета - 65 см\n\nШирина манжета - 5 см"
//                             },
//                             "cost": "540",
//                             "cost-opt": "270",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2d999f2739c08b8.jpg",
//                                 "https://fashionup.ua/uploads/tov/495c032b4bee345.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4351-bluza-quotclarequot-bz-1783b.html",
//                             "id": "4351",
//                             "title": "Блуза \"Clare\"",
//                             "articul": "BZ-1783B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Эффектная Блуза \"Clare\" на запах однозначно выделит Вас из толпы. Насыщенные цвета и оригинальный крой блузы сделают ее изюминкой Вашего гардероба. Плечи блузы по переду и рукава снизу присборены. \n\nРост модели на фото - 170 см\n\nДлина блузы - 62 см\n\nДлина рукава с учетом манжета - 65 см\n\nШирина манжета - 5 см"
//                             },
//                             "cost": "540",
//                             "cost-opt": "270",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0726a10d34ca37a.jpg",
//                                 "https://fashionup.ua/uploads/tov/9d86430ebd968e0.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4350-bluza-quotclarequot-bz-1783a.html",
//                             "id": "4350",
//                             "title": "Блуза \"Clare\"",
//                             "articul": "BZ-1783A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Эффектная Блуза \"Clare\" на запах однозначно выделит Вас из толпы. Насыщенные цвета и оригинальный крой блузы сделают ее изюминкой Вашего гардероба. Плечи блузы по переду и рукава снизу присборены. \n\nРост модели на фото - 170 см\n\nДлина блузы - 62 см\n\nДлина рукава с учетом манжета - 65 см\n\nШирина манжета - 5 см"
//                             },
//                             "cost": "540",
//                             "cost-opt": "270",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/84c0850ca85ba29.jpg",
//                                 "https://fashionup.ua/uploads/tov/57c2b6ec43bef88.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4349-bluza-quotpeonyquot-bz-1782d.html",
//                             "id": "4349",
//                             "title": "Блуза \"Peony\"",
//                             "articul": "BZ-1782D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Peony\" свободного кроя с оригинальным воротником-галстуком. По переду и по спинке полочки разрезаны от плеча до низа и в эти швы вставлены рюши-крылышки.\n\nРост модели на фото - 170 см\n\nДлина блузы - 61 см\n\nШирина рюши на плече - 11 см\n\nПолуобхват груди - 47 см\n\nДлина завязок - 60 см\n\nШирина завязок - 3 см"
//                             },
//                             "cost": "478",
//                             "cost-opt": "239",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/302bc21c545fb53.jpg",
//                                 "https://fashionup.ua/uploads/tov/704d135b2889edc.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "светлая пудра",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4348-bluza-quotpeonyquot-bz-1782c.html",
//                             "id": "4348",
//                             "title": "Блуза \"Peony\"",
//                             "articul": "BZ-1782C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Peony\" свободного кроя с оригинальным воротником-галстуком. По переду и по спинке полочки разрезаны от плеча до низа и в эти швы вставлены рюши-крылышки.\n\nРост модели на фото - 170 см\n\nДлина блузы - 61 см\n\nШирина рюши на плече - 11 см\n\nПолуобхват груди - 47 см\n\nДлина завязок - 60 см\n\nШирина завязок - 3 см"
//                             },
//                             "cost": "478",
//                             "cost-opt": "239",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/96281ead588f0f1.jpg",
//                                 "https://fashionup.ua/uploads/tov/e8c1b9eb12969df.jpg"
//                             ],
//                             "sizes": "44,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4347-bluza-quotpeonyquot-bz-1782b.html",
//                             "id": "4347",
//                             "title": "Блуза \"Peony\"",
//                             "articul": "BZ-1782B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Peony\" свободного кроя с оригинальным воротником-галстуком. По переду и по спинке полочки разрезаны от плеча до низа и в эти швы вставлены рюши-крылышки.\n\nРост модели на фото - 170 см\n\nДлина блузы - 61 см\n\nШирина рюши на плече - 11 см\n\nПолуобхват груди - 47 см\n\nДлина завязок - 60 см\n\nШирина завязок - 3 см"
//                             },
//                             "cost": "478",
//                             "cost-opt": "239",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0876ccbe41700ed.jpg",
//                                 "https://fashionup.ua/uploads/tov/b58400b29503631.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4346-bluza-quotpeonyquot-bz-1782a.html",
//                             "id": "4346",
//                             "title": "Блуза \"Peony\"",
//                             "articul": "BZ-1782A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Peony\" свободного кроя с оригинальным воротником-галстуком. По переду и по спинке полочки разрезаны от плеча до низа и в эти швы вставлены рюши-крылышки.\n\nРост модели на фото - 170 см\n\nДлина блузы - 61 см\n\nШирина рюши на плече - 11 см\n\nПолуобхват груди - 47 см\n\nДлина завязок - 60 см\n\nШирина завязок - 3 см"
//                             },
//                             "cost": "478",
//                             "cost-opt": "239",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f263f6831411813.jpg",
//                                 "https://fashionup.ua/uploads/tov/658e8a329c8b3a1.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "голубой",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4344-bluza-quotdaisyquot-bz-1786c.html",
//                             "id": "4344",
//                             "title": "Блуза \"Daisy\"",
//                             "articul": "BZ-1786C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Daisy\" свободного кроя с V-образным воротником - планкой внахлест. По бокам круглые разрезы. Рукав 3/4 с ластиком.\n\nРост модели на фото - 170 см\n\nДлина блузы - 58 см\n\nПолуобхват груди - 44 см\n\nДлина рукава - 44 см"
//                             },
//                             "cost": "512",
//                             "cost-opt": "256",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a76cfb8991f17ec.jpg",
//                                 "https://fashionup.ua/uploads/tov/6d29c2b433ffc73.jpg"
//                             ],
//                             "sizes": "46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий белая полоса",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4343-bluza-quotdaisyquot-bz-1786b.html",
//                             "id": "4343",
//                             "title": "Блуза \"Daisy\"",
//                             "articul": "BZ-1786B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Daisy\" свободного кроя с V-образным воротником - планкой внахлест. По бокам круглые разрезы. Рукав 3/4 с ластиком.\n\nРост модели на фото - 170 см\n\nДлина блузы - 58 см\n\nПолуобхват груди - 44 см\n\nДлина рукава - 44 см"
//                             },
//                             "cost": "512",
//                             "cost-opt": "256",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bd2e00cb7fb888b.jpg",
//                                 "https://fashionup.ua/uploads/tov/efee842b1827648.jpg"
//                             ],
//                             "sizes": "42,46,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "бежевый клетка",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4342-bluza-quotdaisyquot-bz-1786a.html",
//                             "id": "4342",
//                             "title": "Блуза \"Daisy\"",
//                             "articul": "BZ-1786A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Daisy\" свободного кроя с V-образным воротником - планкой внахлест. По бокам круглые разрезы. Рукав 3/4 с ластиком.\n\nРост модели на фото - 170 см\n\nДлина блузы - 58 см\n\nПолуобхват груди - 44 см\n\nДлина рукава - 44 см"
//                             },
//                             "cost": "512",
//                             "cost-opt": "256",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0a7833ae71ac0e2.jpg",
//                                 "https://fashionup.ua/uploads/tov/9d77b9c33785d61.jpg",
//                                 "https://fashionup.ua/uploads/tov/ec711b33b4d556c.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый черная полоса",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4341-bluza-quotbiancaquot-bz-1788c.html",
//                             "id": "4341",
//                             "title": "Блуза \"Bianca\"",
//                             "articul": "BZ-1788C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Bianca\" - очень эффектная блуза свободного кроя. Снизу по бокам разрезы, спинка и полочка разной длины, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 65 см\n\nДлина блузы по полочке - 61 см\n\nПолуобхват груди - 47 см\n\nДлина рукава с учетом манжета - 62 см\n\nШирина манжета - 5 см"
//                             },
//                             "cost": "572",
//                             "cost-opt": "286",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5258318c66e9803.jpg",
//                                 "https://fashionup.ua/uploads/tov/f7d3fc0d2ac41e4.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4340-bluza-quotbiancaquot-bz-1788b.html",
//                             "id": "4340",
//                             "title": "Блуза \"Bianca\"",
//                             "articul": "BZ-1788B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Bianca\" - очень эффектная блуза свободного кроя. Снизу по бокам разрезы, спинка и полочка разной длины, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 65 см\n\nДлина блузы по полочке - 61 см\n\nПолуобхват груди - 47 см\n\nДлина рукава с учетом манжета - 62 см\n\nШирина манжета - 5 см"
//                             },
//                             "cost": "572",
//                             "cost-opt": "286",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/510b7b9b23df527.jpg",
//                                 "https://fashionup.ua/uploads/tov/52313cd186ac669.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4339-bluza-quotbiancaquot-bz-1788a.html",
//                             "id": "4339",
//                             "title": "Блуза \"Bianca\"",
//                             "articul": "BZ-1788A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Bianca\" - очень эффектная блуза свободного кроя. Снизу по бокам разрезы, спинка и полочка разной длины, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 65 см\n\nДлина блузы по полочке - 61 см\n\nПолуобхват груди - 47 см\n\nДлина рукава с учетом манжета - 62 см\n\nШирина манжета - 5 см"
//                             },
//                             "cost": "572",
//                             "cost-opt": "286",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2ad0ce613f62363.jpg",
//                                 "https://fashionup.ua/uploads/tov/b0480e941d9a3c5.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4338-bluza-quotmaryamquot-bz-1781d.html",
//                             "id": "4338",
//                             "title": "Блуза \"Maryam\"",
//                             "articul": "BZ-1781D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Maryam\" - элегантная блуза свободного кроя с воротничком-галстуком. Снизу по бокам разрезы, спинка и полочка разной длины, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 65 см\n\nДлина блузы по полочке - 60 см\n\nПолуобхват груди - 48 см\n\nДлина рукава с учетом манжета - 65 см\n\nШирина манжета - 5 см\n\nДлина завязок - 70 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2e5c4ed6e8281bf.jpg",
//                                 "https://fashionup.ua/uploads/tov/3a7df0711a80c97.jpg",
//                                 "https://fashionup.ua/uploads/tov/73701d8147da07c.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "светлая пудра",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4337-bluza-quotmaryamquot-bz-1781b.html",
//                             "id": "4337",
//                             "title": "Блуза \"Maryam\"",
//                             "articul": "BZ-1781B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Maryam\" - элегантная блуза свободного кроя с воротничком-галстуком. Снизу по бокам разрезы, спинка и полочка разной длины, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 65 см\n\nДлина блузы по полочке - 60 см\n\nПолуобхват груди - 48 см\n\nДлина рукава с учетом манжета - 65 см\n\nШирина манжета - 5 см\n\nДлина завязок - 70 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1bfa2afc754ee89.jpg",
//                                 "https://fashionup.ua/uploads/tov/7a7fb3fb8df0e05.jpg",
//                                 "https://fashionup.ua/uploads/tov/aaad409e48eb64a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4336-bluza-quotmaryamquot-bz-1781c.html",
//                             "id": "4336",
//                             "title": "Блуза \"Maryam\"",
//                             "articul": "BZ-1781C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Maryam\" - элегантная блуза свободного кроя с воротничком-галстуком. Снизу по бокам разрезы, спинка и полочка разной длины, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 65 см\n\nДлина блузы по полочке - 60 см\n\nПолуобхват груди - 48 см\n\nДлина рукава с учетом манжета - 65 см\n\nШирина манжета - 5 см\n\nДлина завязок - 70 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5d822103ce9125b.jpg",
//                                 "https://fashionup.ua/uploads/tov/adb00c2c949fd73.jpg",
//                                 "https://fashionup.ua/uploads/tov/9ec2b0325d9c9fe.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4335-bluza-quotmaryamquot-bz-1781a.html",
//                             "id": "4335",
//                             "title": "Блуза \"Maryam\"",
//                             "articul": "BZ-1781A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Maryam\" - элегантная блуза свободного кроя с воротничком-галстуком. Снизу по бокам разрезы, спинка и полочка разной длины, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 65 см\n\nДлина блузы по полочке - 60 см\n\nПолуобхват груди - 48 см\n\nДлина рукава с учетом манжета - 65 см\n\nШирина манжета - 5 см\n\nДлина завязок - 70 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/51ad216e69ba027.jpg",
//                                 "https://fashionup.ua/uploads/tov/7ad56dc4a4d6916.jpg",
//                                 "https://fashionup.ua/uploads/tov/19c70802a83cdaa.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4333-bluza-quotkaryaquot-bz-1784b.html",
//                             "id": "4333",
//                             "title": "Блуза \"Karya\"",
//                             "articul": "BZ-1784B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Karya\" - оригинальная блуза рубашечного кроя. Планка с пуговицами сдвинута в бок, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 59 см\n\nПолуобхват груди - 47 см\n\nДлина рукава с учетом манжета - 62 см\n\nШирина манжета - 9 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7c344fe653828c0.jpg",
//                                 "https://fashionup.ua/uploads/tov/91008a6c90edb0c.jpg",
//                                 "https://fashionup.ua/uploads/tov/a221a2e0cf68d12.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4332-bluza-quotkaryaquot-bz-1784c.html",
//                             "id": "4332",
//                             "title": "Блуза \"Karya\"",
//                             "articul": "BZ-1784C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Блуза \"Karya\" - оригинальная блуза рубашечного кроя. Планка с пуговицами сдвинута в бок, рукав снизу присборен.\n\nРост модели на фото - 170 см\n\nДлина блузы по спинке - 59 см\n\nПолуобхват груди - 47 см\n\nДлина рукава с учетом манжета - 62 см\n\nШирина манжета - 9 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b5f9849ce0b8b57.jpg",
//                                 "https://fashionup.ua/uploads/tov/c4ee1b3ae2d6544.jpg",
//                                 "https://fashionup.ua/uploads/tov/17255e207ba2706.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4330-plate-quotchristiequot-pl-1779b.html",
//                             "id": "4330",
//                             "title": "Платье \"Christie\"",
//                             "articul": "PL-1779B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье \"Christie\" - очень практичное и оригинальное платье. Низ у платья фигурный, спереди вшита  вставка из коттона, имитирующая низ рубашки. Модель \"летучая мышь\", рукав 3/4.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 86 см\n\nДлина рукава  - 48 см"
//                             },
//                             "cost": "718",
//                             "cost-opt": "359",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0de5c0515b95661.jpg",
//                                 "https://fashionup.ua/uploads/tov/a04385bbe897cec.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка желтый",
//                             "cloth": "трикотаж клетка: 25% вискоза, 70% полиэстер, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4329-plate-quotchristiequot-pl-1779a.html",
//                             "id": "4329",
//                             "title": "Платье \"Christie\"",
//                             "articul": "PL-1779A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье \"Christie\" - очень практичное и оригинальное платье. Низ у платья фигурный, спереди вшита  вставка из коттона, имитирующая низ рубашки. Модель \"летучая мышь\", рукав 3/4.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 86 см\n\nДлина рукава  - 48 см"
//                             },
//                             "cost": "718",
//                             "cost-opt": "359",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8c5b6bd0fc56c2a.jpg",
//                                 "https://fashionup.ua/uploads/tov/f25fa6423e48550.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка розовый",
//                             "cloth": "трикотаж клетка: 25% вискоза, 70% полиэстер, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4328-plate-quotelisonquot-pl-1778c.html",
//                             "id": "4328",
//                             "title": "Платье \"Elison\"",
//                             "articul": "PL-1778C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье \"Elison\" - оригинальное платье \"летучая мышь\". Платье отрезное по линии талии, по бокам в поясе шлевки из ярких лампасов. Пояс в комплекте.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 103 см\n\nДлина верха полочки до талии - 39 см\n\nДлина полочки от талии - 64 см\n\nДлина рукава - 59 см\n\nДлина пояса - 158 см"
//                             },
//                             "cost": "792",
//                             "cost-opt": "396",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a77fd191ea7f860.jpg",
//                                 "https://fashionup.ua/uploads/tov/ee1fae6cf72c9fc.jpg",
//                                 "https://fashionup.ua/uploads/tov/d1f2f1ecc10db12.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4327-plate-quotelisonquot-pl-1778b.html",
//                             "id": "4327",
//                             "title": "Платье \"Elison\"",
//                             "articul": "PL-1778B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье \"Elison\" - оригинальное платье \"летучая мышь\". Платье отрезное по линии талии, по бокам в поясе шлевки из ярких лампасов. Пояс в комплекте.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 103 см\n\nДлина верха полочки до талии - 39 см\n\nДлина полочки от талии - 64 см\n\nДлина рукава - 59 см\n\nДлина пояса - 158 см"
//                             },
//                             "cost": "792",
//                             "cost-opt": "396",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2ef20956d19a3ad.jpg",
//                                 "https://fashionup.ua/uploads/tov/3680609c107085c.jpg",
//                                 "https://fashionup.ua/uploads/tov/a666c184a551f10.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4326-plate-quotelisonquot-pl-1778a.html",
//                             "id": "4326",
//                             "title": "Платье \"Elison\"",
//                             "articul": "PL-1778A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье \"Elison\" - оригинальное платье \"летучая мышь\". Платье отрезное по линии талии, по бокам в поясе шлевки из ярких лампасов. Пояс в комплекте.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 103 см\n\nДлина верха полочки до талии - 39 см\n\nДлина полочки от талии - 64 см\n\nДлина рукава - 59 см\n\nДлина пояса - 158 см"
//                             },
//                             "cost": "792",
//                             "cost-opt": "396",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cbb7be0503faa4e.jpg",
//                                 "https://fashionup.ua/uploads/tov/7781467597bd1e7.jpg",
//                                 "https://fashionup.ua/uploads/tov/50c01e6200bd47c.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4325-yubka-yub-1012-yub-1012a.html",
//                             "id": "4325",
//                             "title": "Юбка YUB-1012",
//                             "articul": "YUB-1012A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивая юбка прямого кроя из экокожи. Снизу по всей юбке нашито широкой кружево, сзади потайная молния - 14 см.\n\nРост модели на фото - 170 см\n\nДлина юбки  - 54 см\n\nПолуобхват бедер - 44 см\n\nПолуобхват талии - 36 см\n\nШирина кружева - 9 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "500",
//                             "cost-opt": "250",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/671a0ca52b1f04a.jpg",
//                                 "https://fashionup.ua/uploads/tov/df20973ba296b51.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4324-yubka-yub-1003-yub-1003a.html",
//                             "id": "4324",
//                             "title": "Юбка YUB-1003",
//                             "articul": "YUB-1003A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая прямая юбка выше колена. Юбка с заниженной кокеткой, сзади шлица - 15 см и потайная молния - 14 см\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 49 см\n\nПолуобхват бедер - 43 см\n\nПолуобхват талии - 37 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "600",
//                             "cost-opt": "300",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8d2d26f65a9e942.jpg",
//                                 "https://fashionup.ua/uploads/tov/c934fefdb8f92e6.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4319-yubka-yub-1049-yub-1049b.html",
//                             "id": "4319",
//                             "title": "Юбка YUB-1049",
//                             "articul": "YUB-1049B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Невероятно женственная юбка - годе. Перед юбки укорочен, на поясе шлевки, сбоку потайная молния - 20 см.\n\nРост модели на фото - 170 см\n\nДлина юбки спереди с поясом и рюшей - 55 см\n\nДлина юбки сзади с поясом и рюшей - 72 см\n\nШирина пояса - 5 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d0fe571be3da5d6.jpg",
//                                 "https://fashionup.ua/uploads/tov/85f5ec140d4d972.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Electric blue/Электрик",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4317-yubka-yub-1049-yub-1049c.html",
//                             "id": "4317",
//                             "title": "Юбка YUB-1049",
//                             "articul": "YUB-1049C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Невероятно женственная юбка - годе. Перед юбки укорочен, на поясе шлевки,  сбоку потайная молния - 20 см.\n\nРост модели на фото - 170 см\n\nДлина юбки спереди с поясом и рюшей - 55 см\n\nДлина юбки сзади с поясом и рюшей - 72 см\n\nШирина пояса - 5 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7bfe6e62e30cd5e.jpg",
//                                 "https://fashionup.ua/uploads/tov/db82be7b04171dd.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4316-yubka-yub-1031-yub-1031a.html",
//                             "id": "4316",
//                             "title": "Юбка YUB-1031",
//                             "articul": "YUB-1031A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Симпатичная юбка - клеш. Спереди и сзади заложены встречные склады. Пояс широкий, по переду фигурный. В боковых швах врезные карманы. Сзади потайная молния - 22 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 73 см\n\nШирина пояса сзади - 7 см\n\nШирина пояса спереди - 8 см"
//                             },
//                             "cost": "644",
//                             "cost-opt": "322",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/280727a596927ca.jpg",
//                                 "https://fashionup.ua/uploads/tov/563e363113c3618.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Electric blue/Электрик",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4315-yubka-yub-1031-yub-1031b.html",
//                             "id": "4315",
//                             "title": "Юбка YUB-1031",
//                             "articul": "YUB-1031B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Симпатичная юбка - клеш. Спереди и сзади заложены встречные склады. Пояс широкий, по переду фигурный. В боковых швах врезные карманы. Сзади потайная молния - 22 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 73 см\n\nШирина пояса сзади - 7 см\n\nШирина пояса спереди - 8 см"
//                             },
//                             "cost": "644",
//                             "cost-opt": "322",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/71f2bf71597f336.jpg",
//                                 "https://fashionup.ua/uploads/tov/084d73da7767d77.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Graphite/Графит",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4314-yubka-yub-1045-yub-1045c.html",
//                             "id": "4314",
//                             "title": "Юбка YUB-1045",
//                             "articul": "YUB-1045C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкая, струящаяся атласная юбка - клеш в горошек. Сзади потайная молния - 22 см\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 66 см\n\nШирина пояса - 6 см"
//                             },
//                             "cost": "444",
//                             "cost-opt": "222",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2a15c78d27910d9.jpg",
//                                 "https://fashionup.ua/uploads/tov/be67f16549bfc51.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Blue/Синий",
//                             "cloth": "атлас: 100% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4313-yubka-yub-1045-yub-1045b.html",
//                             "id": "4313",
//                             "title": "Юбка YUB-1045",
//                             "articul": "YUB-1045B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкая, струящаяся атласная юбка - клеш в горошек. Сзади потайная молния - 22 см\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 66 см\n\nШирина пояса - 6 см"
//                             },
//                             "cost": "444",
//                             "cost-opt": "222",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/11eacb0beede61d.jpg",
//                                 "https://fashionup.ua/uploads/tov/340f5a9e7041f6f.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Electric blue/Электрик",
//                             "cloth": "атлас: 100% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4312-yubka-yub-1045-yub-1045a.html",
//                             "id": "4312",
//                             "title": "Юбка YUB-1045",
//                             "articul": "YUB-1045A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкая, струящаяся атласная юбка - клеш в горошек. Сзади потайная молния - 22 см\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 66 см\n\nШирина пояса - 6 см"
//                             },
//                             "cost": "444",
//                             "cost-opt": "222",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/62fb6ede192429b.jpg",
//                                 "https://fashionup.ua/uploads/tov/cfd042a75cede9c.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "атлас: 100% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4311-yubka-yub-1043-yub-1043d.html",
//                             "id": "4311",
//                             "title": "Юбка YUB-1043",
//                             "articul": "YUB-1043D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка не менее оригинального кроя. Передняя полочка спереди разрезана на декоративные детали. Ближе к боковому шву вшита рабочая молния по всей длине юбки.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 67 см\n\nДлина спереди до разреза - 47 см\n\nШирина пояса - 4 см\n\nПолуобхват бедер - 45 см"
//                             },
//                             "cost": "710",
//                             "cost-opt": "355",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/beace5282fc4ccd.jpg",
//                                 "https://fashionup.ua/uploads/tov/596364a1cd33fdd.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Gray/Серый",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4310-yubka-yub-1043-yub-1043c.html",
//                             "id": "4310",
//                             "title": "Юбка YUB-1043",
//                             "articul": "YUB-1043C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка не менее оригинального кроя. Передняя полочка спереди разрезана на декоративные детали. Ближе к боковому шву вшита рабочая молния по всей длине юбки.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 67 см\n\nДлина спереди до разреза - 47 см\n\nШирина пояса - 4 см\n\nПолуобхват бедер - 45 см"
//                             },
//                             "cost": "710",
//                             "cost-opt": "355",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d71649bbe1091d1.jpg",
//                                 "https://fashionup.ua/uploads/tov/1f1603762f067df.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Blue/Синий",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4309-yubka-yub-1043-yub-1043b.html",
//                             "id": "4309",
//                             "title": "Юбка YUB-1043",
//                             "articul": "YUB-1043B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка не менее оригинального кроя. Передняя полочка спереди разрезана на декоративные детали. Ближе к боковому шву вшита рабочая молния по всей длине юбки.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 67 см\n\nДлина спереди до разреза - 47 см\n\nШирина пояса - 4 см\n\nПолуобхват бедер - 45 см"
//                             },
//                             "cost": "710",
//                             "cost-opt": "355",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cba80c622e142ce.jpg",
//                                 "https://fashionup.ua/uploads/tov/2bf4323fc42b2e9.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Chocolate/Шоколадный",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4308-yubka-yub-1043-yub-1043a.html",
//                             "id": "4308",
//                             "title": "Юбка YUB-1043",
//                             "articul": "YUB-1043A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка не менее оригинального кроя. Передняя полочка спереди разрезана на декоративные детали. Ближе к боковому шву вшита рабочая молния по всей длине юбки.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 67 см\n\nДлина спереди до разреза - 47 см\n\nШирина пояса - 4 см\n\nПолуобхват бедер - 45 см"
//                             },
//                             "cost": "710",
//                             "cost-opt": "355",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/99cd6bacc1fb4f6.jpg",
//                                 "https://fashionup.ua/uploads/tov/522da98cbca38fe.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4307-yubka-yub-1038-yub-1038c.html",
//                             "id": "4307",
//                             "title": "Юбка YUB-1038",
//                             "articul": "YUB-1038C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень красивая и элегантная юбка - полусолнце с круговыми вставками из кружева. По бокам косые карманы, сзади потайная молния - 18 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 81 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "764",
//                             "cost-opt": "382",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0f734d6e32a5709.jpg",
//                                 "https://fashionup.ua/uploads/tov/4e047b99adfc4ad.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4306-yubka-yub-1038-yub-1038b.html",
//                             "id": "4306",
//                             "title": "Юбка YUB-1038",
//                             "articul": "YUB-1038B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень красивая и элегантная юбка - полусолнце с круговыми вставками из кружева. По бокам косые карманы, сзади потайная молния - 18 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 81 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "764",
//                             "cost-opt": "382",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3ede62ec566aca4.jpg",
//                                 "https://fashionup.ua/uploads/tov/7b24bef2c158789.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Red/Красный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4305-yubka-yub-1038-yub-1038a.html",
//                             "id": "4305",
//                             "title": "Юбка YUB-1038",
//                             "articul": "YUB-1038A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень красивая и элегантная юбка - полусолнце с круговыми вставками из кружева. По бокам косые карманы, сзади потайная молния - 18 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 81 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "764",
//                             "cost-opt": "382",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b6b8e034a135b8b.jpg",
//                                 "https://fashionup.ua/uploads/tov/b8b1e6e9b416c8a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Electric blue/Электрик",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4304-yubka-yub-1010-yub-1010c.html",
//                             "id": "4304",
//                             "title": "Юбка YUB-1010",
//                             "articul": "YUB-1010C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантная юбка из экокожи металлических цветов. В этой юбке Вы затмите всех как в офисе так и на вечеринке. Сзади потайная молния - 17 см и разрез - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 65 см\n\nШирина пояса - 4 см\n\nполуобхват бедер - 44 см\n\nПолуобхват талии - 34 см"
//                             },
//                             "cost": "288",
//                             "cost-opt": "244",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9c83a576aab336c.jpg",
//                                 "https://fashionup.ua/uploads/tov/942772c324ec260.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Metallic Graphite/Графит металлик",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4303-yubka-yub-1010-yub-1010b.html",
//                             "id": "4303",
//                             "title": "Юбка YUB-1010",
//                             "articul": "YUB-1010B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантная юбка из экокожи металлических цветов. В этой юбке Вы затмите всех как в офисе так и на вечеринке. Сзади потайная молния - 17 см и разрез - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 65 см\n\nШирина пояса - 4 см\n\nполуобхват бедер - 44 см\n\nПолуобхват талии - 34 см"
//                             },
//                             "cost": "488",
//                             "cost-opt": "244",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/19b72ca015e7302.jpg",
//                                 "https://fashionup.ua/uploads/tov/a5c3dbbdf815a7e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Metallic Gray/Серый металлик",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4302-yubka-yub-1010-yub-1010a.html",
//                             "id": "4302",
//                             "title": "Юбка YUB-1010",
//                             "articul": "YUB-1010A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантная юбка из экокожи металлических цветов. В этой юбке Вы затмите всех как в офисе так и на вечеринке. Сзади потайная молния - 17 см и разрез - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 65 см\n\nШирина пояса - 4 см\n\nполуобхват бедер - 44 см\n\nПолуобхват талии - 34 см"
//                             },
//                             "cost": "488",
//                             "cost-opt": "244",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5369f531661b26a.jpg",
//                                 "https://fashionup.ua/uploads/tov/7438c1a375d310c.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Metallic Blue/Синий металлик",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4298-yubka-yub-1022-yub-1022c.html",
//                             "id": "4298",
//                             "title": "Юбка YUB-1022",
//                             "articul": "YUB-1022C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Великолепная юбка в темных тонах придаст Вашему облику утонченности и легкости. Спереди и сзади на юбке заложены глубокие бантовые склады. По бокам косые карманы. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 61 см\n\nШирина пояса  - 5 см"
//                             },
//                             "cost": "558",
//                             "cost-opt": "279",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7dd41a874f838c8.jpg",
//                                 "https://fashionup.ua/uploads/tov/0a4a14e7570dd5a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4297-yubka-yub-1022-yub-1022b.html",
//                             "id": "4297",
//                             "title": "Юбка YUB-1022",
//                             "articul": "YUB-1022B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Великолепная юбка в темных тонах придаст Вашему облику утонченности и легкости. Спереди и сзади на юбке заложены глубокие бантовые склады. По бокам косые карманы. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 61 см\n\nШирина пояса  - 5 см"
//                             },
//                             "cost": "558",
//                             "cost-opt": "279",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/24495e54f28ebce.jpg",
//                                 "https://fashionup.ua/uploads/tov/6776263c5b4bf8f.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4296-yubka-yub-1022-yub-1022a.html",
//                             "id": "4296",
//                             "title": "Юбка YUB-1022",
//                             "articul": "YUB-1022A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Великолепная юбка в темных тонах придаст Вашему облику утонченности и легкости. Спереди и сзади на юбке заложены глубокие бантовые склады. По бокам косые карманы. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 61 см\n\nШирина пояса  - 5 см"
//                             },
//                             "cost": "558",
//                             "cost-opt": "279",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cd22f1051a0d353.jpg",
//                                 "https://fashionup.ua/uploads/tov/51665aa66278b8d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4295-yubka-yub-1007-yub-1007c.html",
//                             "id": "4295",
//                             "title": "Юбка YUB-1007",
//                             "articul": "YUB-1007C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная юбка - солнце из экокожи металлических цветов. В этой юбке Вы будете определенно неотразимы. Сзади потайная молния - 20 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 44 см\n\nПолуобхват талии - 34 см"
//                             },
//                             "cost": "440",
//                             "cost-opt": "220",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9e402c184cc1180.jpg",
//                                 "https://fashionup.ua/uploads/tov/fbe317976a07f66.jpg"
//                             ],
//                             "sizes": "S (42), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Metallic Blue/Синий металлик",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4294-yubka-yub-1007-yub-1007b.html",
//                             "id": "4294",
//                             "title": "Юбка YUB-1007",
//                             "articul": "YUB-1007B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная юбка - солнце из экокожи металлических цветов. В этой юбке Вы будете определенно неотразимы. Сзади потайная молния - 20 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 44 см\n\nПолуобхват талии - 34 см"
//                             },
//                             "cost": "440",
//                             "cost-opt": "220",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6d2a9bcab1fd470.jpg",
//                                 "https://fashionup.ua/uploads/tov/e053d2aa5071cc0.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Golden/Золотой",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4293-yubka-yub-1007-yub-1007a.html",
//                             "id": "4293",
//                             "title": "Юбка YUB-1007",
//                             "articul": "YUB-1007A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная юбка - солнце из экокожи металлических цветов. В этой юбке Вы будете определенно неотразимы. Сзади потайная молния - 20 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 44 см\n\nПолуобхват талии - 34 см"
//                             },
//                             "cost": "440",
//                             "cost-opt": "220",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9e20930d0d770d7.jpg",
//                                 "https://fashionup.ua/uploads/tov/275de1a01350fc1.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Metallic Gray/Серый металлик",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4292-yubka-yub-1005-yub-1005c.html",
//                             "id": "4292",
//                             "title": "Юбка YUB-1005",
//                             "articul": "YUB-1005C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная шкодная юбочка по переду из двух деталей на запах, который закреплен декоративной пуговицей. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 44 см\n\nПолуобхват бедер - 45 см\n\nПолуобхват талии - 35 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d206bf88ab09773.jpg",
//                                 "https://fashionup.ua/uploads/tov/bb67cc186f786a2.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4291-yubka-yub-1005-yub-1005b.html",
//                             "id": "4291",
//                             "title": "Юбка YUB-1005",
//                             "articul": "YUB-1005B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная шкодная юбочка по переду из двух деталей на запах, который закреплен декоративной пуговицей. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 44 см\n\nПолуобхват бедер - 45 см\n\nПолуобхват талии - 35 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/02d8fe3cf0a8b1a.jpg",
//                                 "https://fashionup.ua/uploads/tov/40bf653cae55ad3.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Electric blue/Электрик",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4290-yubka-yub-1005-yub-1005a.html",
//                             "id": "4290",
//                             "title": "Юбка YUB-1005",
//                             "articul": "YUB-1005A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная шкодная юбочка по переду из двух деталей на запах, который закреплен декоративной пуговицей. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 44 см\n\nПолуобхват бедер - 45 см\n\nПолуобхват талии - 35 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7a3130b5d06bd34.jpg",
//                                 "https://fashionup.ua/uploads/tov/88c3b67d906ff9e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4289-yubka-yub-1000-yub-1000a.html",
//                             "id": "4289",
//                             "title": "Юбка YUB-1000",
//                             "articul": "YUB-1000A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Повседневная юбка для работы или прогулок. В пояс вшита резинка 4 см. Ткань с принтом \"гусиная лапка\".\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 55 см\n\nПолуобхват бедер - 44 см\n\nПолуобхват талии (в не растянутом состоянии) - 33 см"
//                             },
//                             "cost": "352",
//                             "cost-opt": "176",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/18bd76f2d441aca.jpg",
//                                 "https://fashionup.ua/uploads/tov/57d6973f6d19cb8.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4288-yubka-yub-1000-yub-1000c.html",
//                             "id": "4288",
//                             "title": "Юбка YUB-1000",
//                             "articul": "YUB-1000C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Повседневная юбка для работы или прогулок. В пояс вшита резинка 4 см. Ткань с принтом \"гусиная лапка\".\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 55 см\n\nПолуобхват бедер - 44 см\n\nПолуобхват талии (в не растянутом состоянии) - 33 см"
//                             },
//                             "cost": "352",
//                             "cost-opt": "176",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d078d718c503a94.jpg",
//                                 "https://fashionup.ua/uploads/tov/c8a68126a963d4d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Green/Зеленый",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4287-yubka-yub-1000-yub-1000b.html",
//                             "id": "4287",
//                             "title": "Юбка YUB-1000",
//                             "articul": "YUB-1000B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Повседневная юбка для работы или прогулок. В пояс вшита резинка 4 см. Ткань с принтом \"гусиная лапка\".\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 55 см\n\nПолуобхват бедер - 44 см\n\nПолуобхват талии (в не растянутом состоянии) - 33 см"
//                             },
//                             "cost": "352",
//                             "cost-opt": "176",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9d9fa2f81017aed.jpg",
//                                 "https://fashionup.ua/uploads/tov/0b2fc4109771684.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Mustard/Горчичиный",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4286-yubka-yub-0999-yub-0999c.html",
//                             "id": "4286",
//                             "title": "Юбка YUB-0999",
//                             "articul": "YUB-0999C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Повседневная юбка для работы или прогулок. В пояс вшита резинка 4 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 55 см\n\nПолуобхват бедер - 44 см\n\nПолуобхват талии (в не растянутом состоянии) - 33 см"
//                             },
//                             "cost": "340",
//                             "cost-opt": "170",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5a8b5323436349c.jpg",
//                                 "https://fashionup.ua/uploads/tov/431248213f29e70.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "французский трикотаж: 60%котон, 20%вискоза, 10%полиэстр,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4285-yubka-yub-0999-yub-0999b.html",
//                             "id": "4285",
//                             "title": "Юбка YUB-0999",
//                             "articul": "YUB-0999B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Повседневная юбка для работы или прогулок. В пояс вшита резинка 4 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 55 см\n\nПолуобхват бедер - 44 см\n\nПолуобхват талии (в не растянутом состоянии) - 33 см"
//                             },
//                             "cost": "340",
//                             "cost-opt": "170",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/fe938eea7a4d513.jpg",
//                                 "https://fashionup.ua/uploads/tov/9795abcd8b4fa69.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Beige/Бежевый",
//                             "cloth": "французский трикотаж: 60%котон, 20%вискоза, 10%полиэстр,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4284-yubka-yub-0999-yub-0999a.html",
//                             "id": "4284",
//                             "title": "Юбка YUB-0999",
//                             "articul": "YUB-0999A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Повседневная юбка для работы или прогулок. В пояс вшита резинка 4 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 55 см\n\nПолуобхват бедер - 44 см\n\nПолуобхват талии (в не растянутом состоянии) - 33 см"
//                             },
//                             "cost": "340",
//                             "cost-opt": "170",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cde2df43bcb836d.jpg",
//                                 "https://fashionup.ua/uploads/tov/cdd5a7668ba7d62.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "французский трикотаж: 60%котон, 20%вискоза, 10%полиэстр,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4257-yubka-yub-1029-yub-1029b.html",
//                             "id": "4257",
//                             "title": "Юбка YUB-1029",
//                             "articul": "YUB-1029B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Удивительно элегантная юбка-карандаш. Юбка прямого кроя, но в тоже время повторяющая изгибы тела и заужена к низу. Юбка спереди на запах, на поясе шлевки, сзади шлица - 24 см и потайная молния - 17 см. Юбка укомплектована съемным поясом длиной 113 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 67 см\n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 6 см"
//                             },
//                             "cost": "562",
//                             "cost-opt": "281",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d1ed9abe8bd0045.jpg",
//                                 "https://fashionup.ua/uploads/tov/b2929d2123d07bc.jpg",
//                                 "https://fashionup.ua/uploads/tov/870e63f5e24a12a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4256-yubka-yub-1029-yub-1029a.html",
//                             "id": "4256",
//                             "title": "Юбка YUB-1029",
//                             "articul": "YUB-1029A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Удивительно элегантная юбка-карандаш. Юбка прямого кроя, но в тоже время повторяющая изгибы тела и заужена к низу. Юбка спереди на запах, на поясе шлевки, сзади шлица - 24 см и потайная молния - 17 см. Юбка укомплектована съемным поясом длиной 113 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 67 см\n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 6 см"
//                             },
//                             "cost": "562",
//                             "cost-opt": "281",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d2a2d78d3a84f25.jpg",
//                                 "https://fashionup.ua/uploads/tov/c7f30732a89ceb0.jpg",
//                                 "https://fashionup.ua/uploads/tov/dc14d87ffe133c1.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4255-yubka-yub-1032-yub-1032d.html",
//                             "id": "4255",
//                             "title": "Юбка YUB-1032",
//                             "articul": "YUB-1032D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень красивая юбка классического кроя с разрезом по переднему среднему шву из плотной экокожи. По бокам врезные карманы с косым срезом, сзади потайная молния - 16 см.\n\nРост модели на фото -170 см\n\nДлина юбки с учетом пояса - 61 см\n\nПолуобхват по бедрам - 43 см\n\nДлина разреза спереди - 26 см\n\nШирина пояса - 3 см"
//                             },
//                             "cost": "594",
//                             "cost-opt": "297",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ab994eefb72e737.jpg",
//                                 "https://fashionup.ua/uploads/tov/ce05a21815bb760.jpg",
//                                 "https://fashionup.ua/uploads/tov/740c6ab50625e2f.jpg"
//                             ],
//                             "sizes": "S (42), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4254-yubka-yub-1032-yub-1032c.html",
//                             "id": "4254",
//                             "title": "Юбка YUB-1032",
//                             "articul": "YUB-1032C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень красивая юбка классического кроя с разрезом по переднему среднему шву из плотной экокожи. По бокам врезные карманы с косым срезом, сзади потайная молния - 16 см.\n\nРост модели на фото -170 см\n\nДлина юбки с учетом пояса - 61 см\n\nПолуобхват по бедрам - 43 см\n\nДлина разреза спереди - 26 см\n\nШирина пояса - 3 см"
//                             },
//                             "cost": "594",
//                             "cost-opt": "297",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/71330749cbd8989.jpg",
//                                 "https://fashionup.ua/uploads/tov/53b9d5cb8e96c8e.jpg",
//                                 "https://fashionup.ua/uploads/tov/d1225c18c8a8661.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4252-yubka-yub-1032-yub-1032a.html",
//                             "id": "4252",
//                             "title": "Юбка YUB-1032",
//                             "articul": "YUB-1032A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень красивая юбка классического кроя с разрезом по переднему среднему шву из плотной экокожи. По бокам врезные карманы с косым срезом, сзади потайная молния - 16 см.\n\nРост модели на фото -170 см\n\nДлина юбки с учетом пояса - 61 см\n\nПолуобхват по бедрам - 43 см\n\nДлина разреза спереди - 26 см\n\nШирина пояса - 3 см"
//                             },
//                             "cost": "594",
//                             "cost-opt": "297",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/072dc70ec1795fa.jpg",
//                                 "https://fashionup.ua/uploads/tov/ba53c4b67fba300.jpg",
//                                 "https://fashionup.ua/uploads/tov/b59ce44affa49ec.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Blue/Синий",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4251-yubka-yub-1023-yub-1023c.html",
//                             "id": "4251",
//                             "title": "Юбка YUB-1023",
//                             "articul": "YUB-1023C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка прямого силуэта.  Передняя полочка разрезана на пять отстроченных декоративных деталей, что придает юбке особый шарм. Сзади шлица - 25 см и потайная молния - 13 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 58 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "458",
//                             "cost-opt": "229",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4dc68439b14e6b9.jpg",
//                                 "https://fashionup.ua/uploads/tov/271c87e0b0c7c4b.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark pink/Темная пудра",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4250-yubka-yub-1023-yub-1023b.html",
//                             "id": "4250",
//                             "title": "Юбка YUB-1023",
//                             "articul": "YUB-1023B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка прямого силуэта.  Передняя полочка разрезана на пять отстроченных декоративных деталей, что придает юбке особый шарм. Сзади шлица - 25 см и потайная молния - 13 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 58 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "458",
//                             "cost-opt": "229",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ced76c768ba2b44.jpg",
//                                 "https://fashionup.ua/uploads/tov/ec95375a5745f1d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4249-yubka-yub-1023-yub-1023a.html",
//                             "id": "4249",
//                             "title": "Юбка YUB-1023",
//                             "articul": "YUB-1023A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка прямого силуэта.  Передняя полочка разрезана на пять отстроченных декоративных деталей, что придает юбке особый шарм. Сзади шлица - 25 см и потайная молния - 13 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 58 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "458",
//                             "cost-opt": "229",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/c1cd0644ed286fc.jpg",
//                                 "https://fashionup.ua/uploads/tov/69106e9c3d93c95.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Blue-gray/Серо-голубой",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4248-yubka-yub-1037-yub-1037c.html",
//                             "id": "4248",
//                             "title": "Юбка YUB-1037",
//                             "articul": "YUB-1037C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантная юбка А-силуэта с боковыми косыми карманами, придаст особый шарм каждой женщине как на прогулке так и офисе. Сзади потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 69 см\n\nПолуобхват по бедрам - 51 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/25f01be9f155975.jpg",
//                                 "https://fashionup.ua/uploads/tov/fddf6d713220bdb.jpg",
//                                 "https://fashionup.ua/uploads/tov/29251b6ed9921cd.jpg"
//                             ],
//                             "sizes": "S (42), M (44), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark green/Темно-зеленый",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4247-yubka-yub-1037-yub-1037b.html",
//                             "id": "4247",
//                             "title": "Юбка YUB-1037",
//                             "articul": "YUB-1037B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Элегантная юбка А-силуэта с боковыми косыми карманами, придаст особый шарм каждой женщине как на прогулке так и офисе. Сзади потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 69 см\n\nПолуобхват по бедрам - 51 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ff296eb9517e70c.jpg",
//                                 "https://fashionup.ua/uploads/tov/dd9207f292edb48.jpg",
//                                 "https://fashionup.ua/uploads/tov/8eb550d567966ee.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4245-yubka-yub-1021-yub-1021c.html",
//                             "id": "4245",
//                             "title": "Юбка YUB-1021",
//                             "articul": "YUB-1021C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого силуэта с поясом декорированным сзади разрезом в виде птички. По передней полочке юбки разрез в шве по бедру - 17 см. Сзади  потайная молния - 20 см.  \n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 53 см \n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 5 см"
//                             },
//                             "cost": "436",
//                             "cost-opt": "218",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a0fd90771d2de6e.jpg",
//                                 "https://fashionup.ua/uploads/tov/e272ad1cb301b96.jpg"
//                             ],
//                             "sizes": "S (42), M (44), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Peach/Персиковый",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4244-yubka-yub-1021-yub-1021b.html",
//                             "id": "4244",
//                             "title": "Юбка YUB-1021",
//                             "articul": "YUB-1021B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого силуэта с поясом декорированным сзади разрезом в виде птички. По передней полочке юбки разрез в шве по бедру - 17 см. Сзади  потайная молния - 20 см.  \n\nРост модели на фото - 170 см\n\nДлина юбки с поясом - 50 см \n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 5 см"
//                             },
//                             "cost": "436",
//                             "cost-opt": "218",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d9005df9277e50c.jpg",
//                                 "https://fashionup.ua/uploads/tov/ac4ca180408ff0a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4242-yubka-yub-1034-yub-1034d.html",
//                             "id": "4242",
//                             "title": "Юбка YUB-1034",
//                             "articul": "YUB-1034D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка прямого силуэта, выполненная из плотной экокожи. Передняя полочка разрезана на декоративные детали в виде лучиков. В боковом шве с правой стороны действующая планка на кнопках. Сзади потайная молния - 15 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 61 см\n\nПолуобхват по бедрам - 44 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "642",
//                             "cost-opt": "321",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6069eb9a91008b7.jpg",
//                                 "https://fashionup.ua/uploads/tov/ffea2a321701a31.jpg",
//                                 "https://fashionup.ua/uploads/tov/6e88d4081ab2228.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4241-yubka-yub-1034-yub-1034c.html",
//                             "id": "4241",
//                             "title": "Юбка YUB-1034",
//                             "articul": "YUB-1034C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка прямого силуэта, выполненная из плотной экокожи. Передняя полочка разрезана на декоративные детали в виде лучиков. В боковом шве с правой стороны действующая планка на кнопках. Сзади потайная молния - 15 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 61 см\n\nПолуобхват по бедрам - 44 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "642",
//                             "cost-opt": "321",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/afd59911b017328.jpg",
//                                 "https://fashionup.ua/uploads/tov/f287875b5202f82.jpg",
//                                 "https://fashionup.ua/uploads/tov/8493ab44959bd86.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Blue/Синий",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4240-yubka-yub-1034-yub-1034a.html",
//                             "id": "4240",
//                             "title": "Юбка YUB-1034",
//                             "articul": "YUB-1034A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка прямого силуэта, выполненная из плотной экокожи. Передняя полочка разрезана на декоративные детали в виде лучиков. В боковом шве с правой стороны действующая планка на кнопках.  Сзади потайная молния - 15 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 61 см\n\nПолуобхват по бедрам - 44 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "642",
//                             "cost-opt": "321",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/fd4079c69b7eef3.jpg",
//                                 "https://fashionup.ua/uploads/tov/d756eaf8c7d951c.jpg",
//                                 "https://fashionup.ua/uploads/tov/542c03ff6eb7577.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4238-yubka-yub-1028-yub-1028c.html",
//                             "id": "4238",
//                             "title": "Юбка YUB-1028",
//                             "articul": "YUB-1028C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого силуэта с элементом декоративного запаха по переду. Ничто так не подчеркивает сексуальность и привлекательность, как раскрывающийся при движении запах юбки. По бокам врезные карманы, на поясе шлевки, сзади шлица - 22 см и потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 59 см\n\nПолуобхват по бедрам - 44 см\n\nШирина пояса - 3 см"
//                             },
//                             "cost": "564",
//                             "cost-opt": "282",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2ae7eeca27e36a4.jpg",
//                                 "https://fashionup.ua/uploads/tov/1c7b5d4214a7028.jpg",
//                                 "https://fashionup.ua/uploads/tov/4bc88df12a3dc66.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4237-yubka-yub-1028-yub-1028b.html",
//                             "id": "4237",
//                             "title": "Юбка YUB-1028",
//                             "articul": "YUB-1028B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого силуэта с элементом декоративного запаха по переду. Ничто так не подчеркивает сексуальность и привлекательность, как раскрывающийся при движении запах юбки. По бокам врезные карманы, на поясе шлевки, сзади шлица - 22 см и потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 59 см\n\nПолуобхват по бедрам - 44 см\n\nШирина пояса - 3 см"
//                             },
//                             "cost": "564",
//                             "cost-opt": "282",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/133d10db26dd44d.jpg",
//                                 "https://fashionup.ua/uploads/tov/b78ba9768328150.jpg",
//                                 "https://fashionup.ua/uploads/tov/6dbeaf8f4d729bb.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Red/Красный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4236-yubka-yub-1028-yub-1028a.html",
//                             "id": "4236",
//                             "title": "Юбка YUB-1028",
//                             "articul": "YUB-1028A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого силуэта с элементом декоративного запаха по переду. Ничто так не подчеркивает сексуальность и привлекательность, как раскрывающийся при движении запах юбки. По бокам врезные карманы, на поясе шлевки, сзади шлица - 22 см и потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 59 см\n\nПолуобхват по бедрам - 44 см\n\nШирина пояса - 3 см"
//                             },
//                             "cost": "564",
//                             "cost-opt": "282",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ff76f2a370e2833.jpg",
//                                 "https://fashionup.ua/uploads/tov/eb9ccec097656e4.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4235-yubka-yub-1014-yub-1014c.html",
//                             "id": "4235",
//                             "title": "Юбка YUB-1014",
//                             "articul": "YUB-1014C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка прямого силуэта с поясом - кокеткой. Передняя полочка юбки декорирована рельефными швами по бедру. Сзади шлица - 20 см и потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки  - 51 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 44 см"
//                             },
//                             "cost": "488",
//                             "cost-opt": "244",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8f46989eeb3e497.jpg",
//                                 "https://fashionup.ua/uploads/tov/b37fdd3da192a38.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4234-yubka-yub-1014-yub-1014b.html",
//                             "id": "4234",
//                             "title": "Юбка YUB-1014",
//                             "articul": "YUB-1014B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка прямого силуэта с поясом - кокеткой. Передняя полочка юбки декорирована рельефными швами по бедру. Сзади шлица - 24 см и потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки  - 56 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 44 см"
//                             },
//                             "cost": "488",
//                             "cost-opt": "244",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b986e1510c79634.jpg",
//                                 "https://fashionup.ua/uploads/tov/371f67cb1103dfa.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Beige/Бежевый",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4233-yubka-yub-1014-yub-1014a.html",
//                             "id": "4233",
//                             "title": "Юбка YUB-1014",
//                             "articul": "YUB-1014A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка прямого силуэта с поясом - кокеткой. Передняя полочка юбки декорирована рельефными швами по бедру. Сзади шлица - 24 см и потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки  - 56 см\n\nПолуобхват по талии - 35 см\n\nПолуобхват по бедрам - 44 см"
//                             },
//                             "cost": "488",
//                             "cost-opt": "244",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3adda1e78b5f6a3.jpg",
//                                 "https://fashionup.ua/uploads/tov/d93bf62aacbaef2.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark Blue/Темно-cиний",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4232-yubka-yub-1016-yub-1016c.html",
//                             "id": "4232",
//                             "title": "Юбка YUB-1016",
//                             "articul": "YUB-1016C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Интересная юбка А-силуэта с накладными карманами. Карманы декорированы кантом черного цвета. Между карманами и сзади по талии присборка, которая придает юбке особенный шарм. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 56 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 50 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/65ed9bc4aabdaaf.jpg",
//                                 "https://fashionup.ua/uploads/tov/9558f10c0889595.jpg",
//                                 "https://fashionup.ua/uploads/tov/4cdb3948cccfa3e.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4231-yubka-yub-1016-yub-1016b.html",
//                             "id": "4231",
//                             "title": "Юбка YUB-1016",
//                             "articul": "YUB-1016B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Интересная юбка А-силуэта с накладными карманами. Карманы декорированы кантом черного цвета. Между карманами и сзади по талии присборка, которая придает юбке особенный шарм. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 56 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 50 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ad57d1f9ed293ae.jpg",
//                                 "https://fashionup.ua/uploads/tov/e11a0cd5467e70a.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Green/Зеленый",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4230-yubka-yub-1016-yub-1016a.html",
//                             "id": "4230",
//                             "title": "Юбка YUB-1016",
//                             "articul": "YUB-1016A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Интересная юбка А-силуэта с накладными карманами. Карманы декорированы кантом черного цвета. Между карманами и сзади по талии присборка, которая придает юбке особенный шарм. Сзади потайная молния - 17 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 56 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 50 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ecf3a3b3d46cff3.jpg",
//                                 "https://fashionup.ua/uploads/tov/66d8210ae7a5e3f.jpg",
//                                 "https://fashionup.ua/uploads/tov/04301bc3bd8d4f7.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4229-yubka-yub-1015-yub-1015b.html",
//                             "id": "4229",
//                             "title": "Юбка YUB-1015",
//                             "articul": "YUB-1015B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка прямого силуэта выше колена должна быть в гардеробе каждой женщины. Юбка украшена декоративным поясом с разрезом в виде птички. Сзади шлица и потайная молния - 20 см. На поясе предусмотрены шлевки для ремешка. \n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 51 см\n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 5 см"
//                             },
//                             "cost": "440",
//                             "cost-opt": "220",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bba671242c2b2ca.jpg",
//                                 "https://fashionup.ua/uploads/tov/acbacb6aee7393d.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4228-yubka-yub-1015-yub-1015a.html",
//                             "id": "4228",
//                             "title": "Юбка YUB-1015",
//                             "articul": "YUB-1015A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка прямого силуэта выше колена должна быть в гардеробе каждой женщины. Юбка украшена декоративным поясом с разрезом в виде птички. Сзади шлица и потайная молния - 20 см. На поясе предусмотрены шлевки для ремешка. \n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 51 см\n\nПолуобхват по бедрам - 43 см\n\nШирина пояса - 5 см"
//                             },
//                             "cost": "440",
//                             "cost-opt": "220",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f4d7e9b7b9e8a1f.jpg",
//                                 "https://fashionup.ua/uploads/tov/ac4692b2f76b662.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark Blue/Темно-cиний",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4227-yubka-yub-1040-yub-1040c.html",
//                             "id": "4227",
//                             "title": "Юбка YUB-1040",
//                             "articul": "YUB-1040C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень интересная юбка - полусолнце. Оригинальные вставки из сетки внизу по кругу юбки придадут Вашему образу особенную легкость. Сзади потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 56 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ee0a968722bc680.jpg",
//                                 "https://fashionup.ua/uploads/tov/a246b01c262e810.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Red/Красный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/yubki-shorty/4226-yubka-yub-1040-yub-1040b.html",
//                             "id": "4226",
//                             "title": "Юбка YUB-1040",
//                             "articul": "YUB-1040B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень интересная юбка - полусолнце. Оригинальные вставки из сетки внизу по кругу юбки придадут Вашему образу особенную легкость. Сзади потайная молния - 16 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 56 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "596",
//                             "cost-opt": "298",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/81f78b5cb694fce.jpg",
//                                 "https://fashionup.ua/uploads/tov/4249b3c4c0f09b7.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "11",
//                             "category-name": "Юбки и Шорты",
//                             "color": "Electric blue/Электрик",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4224-yubka-yub-1004-yub-1004c.html",
//                             "id": "4224",
//                             "title": "Юбка YUB-1004",
//                             "articul": "YUB-1004C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная юбка прямого силуэта в светлых тонах придаст Вашему образу утонченность и легкость. Передняя полочка юбки разделена на три фигурные детали и отстрочена. Сзади шлица - 20 см и потайная молния - 14 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 58 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "442",
//                             "cost-opt": "221",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e72628423eba6c7.jpg",
//                                 "https://fashionup.ua/uploads/tov/1be99272d1af375.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark pink/Темная пудра",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4223-yubka-yub-1004-yub-1004b.html",
//                             "id": "4223",
//                             "title": "Юбка YUB-1004",
//                             "articul": "YUB-1004B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная юбка прямого силуэта в светлых тонах придаст Вашему образу утонченность и легкость. Передняя полочка юбки разделена на три фигурные детали и отстрочена. Сзади шлица - 20 см и потайная молния - 14 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 58 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "442",
//                             "cost-opt": "221",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/44a858ec1854c9d.jpg",
//                                 "https://fashionup.ua/uploads/tov/a2e26932a757d85.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Pale pink/Светлая пудра",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4222-yubka-yub-1004-yub-1004a.html",
//                             "id": "4222",
//                             "title": "Юбка YUB-1004",
//                             "articul": "YUB-1004A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная юбка прямого силуэта в светлых тонах придаст Вашему образу утонченность и легкость. Передняя полочка юбки разделена на три фигурные детали и отстрочена. Сзади шлица - 20 см и потайная молния - 14 см.\n\nРост модели на фото - 170 см\n\nДлина юбки с учетом пояса - 58 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "442",
//                             "cost-opt": "221",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0f02b130349b8c1.jpg",
//                                 "https://fashionup.ua/uploads/tov/dccde4cdb286d57.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Blue-gray/Серо-голубой",
//                             "cloth": "костюмная ткань: 55% полиэстер, 40% вискоза, 5% эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4221-yubka-yub-1002-yub-1002c.html",
//                             "id": "4221",
//                             "title": "Юбка YUB-1002",
//                             "articul": "YUB-1002C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка классического кроя с разрезом по переднему среднему шву. Юбка придаст элегантности Вашему образу. Сзади потайная молния -  17 см.\n\nРост модели на фото -170 см\n\nДлина юбки с учетом пояса - 63 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\nДлина разреза спереди - 25 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "458",
//                             "cost-opt": "229",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8a447ccabfec1fa.jpg",
//                                 "https://fashionup.ua/uploads/tov/32c4f71cf0fc327.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Red/Красный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4220-yubka-yub-1002-yub-1002b.html",
//                             "id": "4220",
//                             "title": "Юбка YUB-1002",
//                             "articul": "YUB-1002B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка классического кроя с разрезом по переднему среднему шву. Юбка придаст элегантности Вашему образу. Сзади потайная молния -  17 см.\n\nРост модели на фото -170 см\n\nДлина юбки с учетом пояса - 63 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\nДлина разреза спереди - 25 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "458",
//                             "cost-opt": "229",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d28f6a54c8295e9.jpg",
//                                 "https://fashionup.ua/uploads/tov/3ad24600d12844c.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4219-yubka-yub-1002-yub-1002a.html",
//                             "id": "4219",
//                             "title": "Юбка YUB-1002",
//                             "articul": "YUB-1002A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная юбка классического кроя с разрезом по переднему среднему шву. Юбка придаст элегантности Вашему образу. Сзади потайная молния -  17 см.\n\nРост модели на фото -170 см\n\nДлина юбки с учетом пояса - 63 см\n\nПолуобхват по талии - 33 см\n\nПолуобхват по бедрам - 45 см\n\nДлина разреза спереди - 25 см\n\nШирина пояса - 4 см"
//                             },
//                             "cost": "458",
//                             "cost-opt": "229",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/5e3cb83cb854396.jpg",
//                                 "https://fashionup.ua/uploads/tov/865bf3d99565dcf.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "тиар: 40% полиэстер, 40% вискоза, 20% шерсть"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4205-sarafan-quotflorencequot-srf-1628i.html",
//                             "id": "4205",
//                             "title": "Сарафан \"Florence\"",
//                             "articul": "SRF-1628I",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный, длинный сарафан в пол с нежным принтом сделает Ваш образ неотразимым. Талия на резинке (ширина резинки 3 см). Пройма тянется к круглой горловине. Юбка клеш, слева глубокий разрез по ноге.\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 157 см\n\nДлина до талии - 42 см\n\nДлина от талии (с учетом резинки) - 114 см\n\nДлина разреза вдоль ноги - 70 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "910",
//                             "cost-opt": "455",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/de7b9f881aba855.jpg",
//                                 "https://fashionup.ua/uploads/tov/6f17c28bf09de70.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "абстракция черный",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4204-sarafan-quotflorencequot-srf-1628h.html",
//                             "id": "4204",
//                             "title": "Сарафан \"Florence\"",
//                             "articul": "SRF-1628H",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный, длинный сарафан в пол с нежным принтом сделает Ваш образ неотразимым. Талия на резинке (ширина резинки 3 см). Пройма тянется к круглой горловине. Юбка клеш, слева глубокий разрез по ноге.\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 157 см\n\nДлина до талии - 42 см\n\nДлина от талии (с учетом резинки) - 114 см\n\nДлина разреза вдоль ноги - 70 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "910",
//                             "cost-opt": "455",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/c6908602f985b05.jpg",
//                                 "https://fashionup.ua/uploads/tov/3944fbb77f4f0df.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "абстракция электрик",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4202-plate-quotmilenaquot-pl-1630g.html",
//                             "id": "4202",
//                             "title": "Платье \"Milena\"",
//                             "articul": "PL-1630G",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкое, утонченное платье \"Milena\" сделает Вас неотразимой даже в летний зной. По талии резинка 3 см, полочка на запах, пройма обработана бейкой. По бокам разрезы 13 см.  \n\nРост модели на фото - 170 см\n\nДлина по спинке - 87 см\n\nПолуобхват груди  47 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "612",
//                             "cost-opt": "306",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/93f7315054f2b52.jpg",
//                                 "https://fashionup.ua/uploads/tov/11ce9e2f0bbf9ca.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "абстракция бирюзовый",
//                             "cloth": "софт Ниагара: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4201-plate-quotmilenaquot-pl-1630f.html",
//                             "id": "4201",
//                             "title": "Платье \"Milena\"",
//                             "articul": "PL-1630F",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкое, утонченное платье \"Milena\" сделает Вас неотразимой даже в летний зной. По талии резинка 3 см, полочка на запах, пройма обработана бейкой. По бокам разрезы 13 см.  \n\nРост модели на фото - 170 см\n\nДлина по спинке - 87 см\n\nПолуобхват груди  47 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "612",
//                             "cost-opt": "306",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b00f491279ce857.jpg",
//                                 "https://fashionup.ua/uploads/tov/665020de454766c.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "абстракция розовый",
//                             "cloth": "софт Ниагара: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4200-mayka-quotbellequot-fb-1626g.html",
//                             "id": "4200",
//                             "title": "Майка \"Belle\"",
//                             "articul": "FB-1626G",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 60 см"
//                             },
//                             "cost": "250",
//                             "cost-opt": "125",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1b817d0d9c0a4c7.jpg",
//                                 "https://fashionup.ua/uploads/tov/ffebb44a1bd8211.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "розовый",
//                             "cloth": "шифон: 45% вискоза, 45% полиэстер,10%эластан; 100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4192-futbolka-quotbristol-2quot-fb-1677a.html",
//                             "id": "4192",
//                             "title": "Футболка \"Bristol 2\"",
//                             "articul": "FB-1677A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная футболка \"Bristol 2\" батальных размеров из легкой, воздушной вискозы будет незаменима жарким летом. Аппликация из камней придает футболке изысканный шарм.\n\nРост модели на фото - 170 см\n\nДлина футболки по спинке - 62 см\n\nДлина рукава - 25 см\n\nПо полочке аппликация из камней."
//                             },
//                             "cost": "430",
//                             "cost-opt": "215",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6347afcf012da56.jpg",
//                                 "https://fashionup.ua/uploads/tov/587d0556a0456dd.jpg"
//                             ],
//                             "sizes": "50-52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4191-futbolka-quotclassicquot-fb-1760w1.html",
//                             "id": "4191",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760W1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8e7c87ada629e45.jpg",
//                                 "https://fashionup.ua/uploads/tov/42fdb2f80db0d4b.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Create the Life",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4190-futbolka-quotclassicquot-fb-1760v1.html",
//                             "id": "4190",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760V1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7fa2c56304893a9.jpg",
//                                 "https://fashionup.ua/uploads/tov/0b54530335430ae.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Сердце",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4189-futbolka-quotclassicquot-fb-1760u.html",
//                             "id": "4189",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760U",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e4b732b1af0b274.jpg",
//                                 "https://fashionup.ua/uploads/tov/a17777f89768b8f.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Make Up",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4188-futbolka-quotclassicquot-fb-1760t.html",
//                             "id": "4188",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760T",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/27714f32722586d.jpg",
//                                 "https://fashionup.ua/uploads/tov/bbc00eb47defc0e.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Фламинго",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4187-futbolka-quotclassicquot-fb-1760s.html",
//                             "id": "4187",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760S",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ff0cd2c40afdd80.jpg",
//                                 "https://fashionup.ua/uploads/tov/5e21aaf95431942.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Девушка весна",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4186-futbolka-quotclassicquot-fb-1760r.html",
//                             "id": "4186",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760R",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3cc3f19ff78865d.jpg",
//                                 "https://fashionup.ua/uploads/tov/5cd8bcf790e1b50.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, принт Cats Rule",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4185-futbolka-quotclassicquot-fb-1760q.html",
//                             "id": "4185",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760Q",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/637e8614657b05e.jpg",
//                                 "https://fashionup.ua/uploads/tov/c82605ddb51fe88.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, принт Ловец снов",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4184-futbolka-quotclassicquot-fb-1760p.html",
//                             "id": "4184",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760P",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8a17700bdb0d58f.jpg",
//                                 "https://fashionup.ua/uploads/tov/26561a0ccade70f.jpg"
//                             ],
//                             "sizes": "44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, принт Единорог",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4183-futbolka-quotclassicquot-fb-1760o.html",
//                             "id": "4183",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760O",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/333ad0f5dbd1d0e.jpg",
//                                 "https://fashionup.ua/uploads/tov/06354350307e396.jpg"
//                             ],
//                             "sizes": "44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, принт Tropical Paradise",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4177-sarafan-quotbambiquot-srf-1750b.html",
//                             "id": "4177",
//                             "title": "Сарафан \"Bambi\"",
//                             "articul": "SRF-1750B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье-халат на запах. До талии горловину украшает струящаяся рюша. Юбка полуклеш, платье отрезное по талии на тонком пояске.\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 88 см\n\nДлина до талии - 43 см\n\nДлина от талии - 45 см\n\nШирина рюши - 10 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "728",
//                             "cost-opt": "364",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9a297d93781371c.jpg",
//                                 "https://fashionup.ua/uploads/tov/4bc8b6d41a4148f.jpg",
//                                 "https://fashionup.ua/uploads/tov/b47d9dee052c4bd.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый горох на розовом",
//                             "cloth": "штапель: 60%вискоза, 40%хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4176-sarafan-quotbambiquot-srf-1750a.html",
//                             "id": "4176",
//                             "title": "Сарафан \"Bambi\"",
//                             "articul": "SRF-1750A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье-халат на запах. До талии горловину украшает струящаяся рюша. Юбка полуклеш, платье отрезное по талии на тонком пояске.\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 88 см\n\nДлина до талии - 43 см\n\nДлина от талии - 45 см\n\nШирина рюши - 10 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "728",
//                             "cost-opt": "364",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a4fe16c19fb1019.jpg",
//                                 "https://fashionup.ua/uploads/tov/39522116cf75e7b.jpg",
//                                 "https://fashionup.ua/uploads/tov/017b25e9c90036e.jpg"
//                             ],
//                             "sizes": "42,44,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый горох на голубом",
//                             "cloth": "штапель: 60%вискоза, 40%хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4175-bluza-quotaryaquot-bz-1773c.html",
//                             "id": "4175",
//                             "title": "Блуза \"Arya\"",
//                             "articul": "BZ-1773C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкая, полупрозрачная блуза. Рукав 3/4 на манжете с легким присбором на плече. Горловина - стойка с воротником. Спереди по центру планка-складка. На горловине пришито \"золотое\" украшение. \n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 58 см\n\nДлина рукава с манжетом - 39 см\n\nПолуобхват груди - 46 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "528",
//                             "cost-opt": "264",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/faa154f933d58b3.jpg",
//                                 "https://fashionup.ua/uploads/tov/fcb740835f34c9c.jpg"
//                             ],
//                             "sizes": "44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молочный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4174-bluza-quotaryaquot-bz-1773b.html",
//                             "id": "4174",
//                             "title": "Блуза \"Arya\"",
//                             "articul": "BZ-1773B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкая, полупрозрачная блуза. Рукав 3/4 на манжете с легким присбором на плече. Горловина - стойка с воротником. Спереди по центру планка-складка. На горловине пришито \"золотое\" украшение. \n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 58 см\n\nДлина рукава с манжетом - 39 см\n\nПолуобхват груди - 46 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "528",
//                             "cost-opt": "264",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/87a010cca1641c5.jpg",
//                                 "https://fashionup.ua/uploads/tov/49d503337499818.jpg",
//                                 "https://fashionup.ua/uploads/tov/fe090359f30c143.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4173-bluza-quotaryaquot-bz-1773a.html",
//                             "id": "4173",
//                             "title": "Блуза \"Arya\"",
//                             "articul": "BZ-1773A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкая, полупрозрачная блуза. Рукав 3/4 на манжете с легким присбором на плече. Горловина - стойка с воротником. Спереди по центру планка-складка. На горловине пришито \"золотое\" украшение. \n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 58 см\n\nДлина рукава с манжетом - 39 см\n\nПолуобхват груди - 46 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "528",
//                             "cost-opt": "264",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/df8e5cdc215b324.jpg",
//                                 "https://fashionup.ua/uploads/tov/d910cd4e735eb74.jpg",
//                                 "https://fashionup.ua/uploads/tov/f6ce1ca4e8669d1.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "персиковый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4172-sarafan-quotadamantquot-srf-1763a.html",
//                             "id": "4172",
//                             "title": "Сарафан \"Adamant\"",
//                             "articul": "SRF-1763A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Длинный, легкий сарафан \"Adamant\" придаст Вам утонченности даже в самый жаркий день. По талии резинка. По бокам глубокие разрезы 68 см. Верх сарафана маечного кроя без рукавов. Ткань струящаяся, не жаркая.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 149 см\n\nПолуобхват груди - 46 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "860",
//                             "cost-opt": "430",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b64c2b106d498f0.jpg",
//                                 "https://fashionup.ua/uploads/tov/df3779248253f8e.jpg",
//                                 "https://fashionup.ua/uploads/tov/e191aa45268d628.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "роза кристал",
//                             "cloth": "штапель: 60%вискоза, 40%хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4167-plate-quotannikquot-pl-1766b.html",
//                             "id": "4167",
//                             "title": "Платье \"Annik\"",
//                             "articul": "PL-1766B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильное платье \"Annik\" с леопардовым принтом, который в этом сезоне как никогда актуален. По талии резинка, юбка полусолнце. Верх свободного кроя. На груди V-образный вырез глубиной 23 см. Рукава короткие с интересными каплевидными вырезами.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 92 см\n\nДлина рукава - 19 см\n\nПолуобхват груди - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "704",
//                             "cost-opt": "352",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0edf3d689f29fc5.jpg",
//                                 "https://fashionup.ua/uploads/tov/e336f01ff732b6a.jpg",
//                                 "https://fashionup.ua/uploads/tov/4ef580b6cf27748.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "леопард рыжий",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4166-plate-quotannikquot-pl-1766a.html",
//                             "id": "4166",
//                             "title": "Платье \"Annik\"",
//                             "articul": "PL-1766A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильное платье \"Annik\" с леопардовым принтом, который в этом сезоне как никогда актуален. По талии резинка, юбка полусолнце. Верх свободного кроя. На груди V-образный вырез глубиной 23 см. Рукава короткие с интересными каплевидными вырезами.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 92 см\n\nДлина рукава - 19 см\n\nПолуобхват груди - 44 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "704",
//                             "cost-opt": "352",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0c982ef807d8804.jpg",
//                                 "https://fashionup.ua/uploads/tov/384f09702e0523d.jpg",
//                                 "https://fashionup.ua/uploads/tov/0b5a8654bcda84a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "леопард",
//                             "cloth": "софт: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4165-bluza-quotconstancequot-bz-1772c.html",
//                             "id": "4165",
//                             "title": "Блуза \"Constance\"",
//                             "articul": "BZ-1772C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Невероятно легкая, струящаяся блуза \"Constance\" будет непревзойденной изюминкой вашего гардероба. Блуза слегка ассиметричного кроя. Спинка немного длинней, чем полочка. Рукав длинный, ровный, свободный. Планка с пуговицами \"кристалл\" смещена вправо, а по левой полочке имитация отложного воротника.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 64 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/628967dc3f0ee8e.jpg",
//                                 "https://fashionup.ua/uploads/tov/75f1264b812c5b6.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молочный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4164-bluza-quotconstancequot-bz-1772b.html",
//                             "id": "4164",
//                             "title": "Блуза \"Constance\"",
//                             "articul": "BZ-1772B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Невероятно легкая, струящаяся блуза \"Constance\" будет непревзойденной изюминкой вашего гардероба. Блуза слегка ассиметричного кроя. Спинка немного длинней, чем полочка. Рукав длинный, ровный, свободный. Планка с пуговицами \"кристалл\" смещена вправо, а по левой полочке имитация отложного воротника.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 64 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/548bff49116ea1d.jpg",
//                                 "https://fashionup.ua/uploads/tov/1019b4987e23f88.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4163-bluza-quotconstancequot-bz-1772a.html",
//                             "id": "4163",
//                             "title": "Блуза \"Constance\"",
//                             "articul": "BZ-1772A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Невероятно легкая, струящаяся блуза \"Constance\" будет непревзойденной изюминкой вашего гардероба. Блуза слегка ассиметричного кроя. Спинка немного длинней, чем полочка. Рукав длинный, ровный, свободный. Планка с пуговицами \"кристалл\" смещена вправо, а по левой полочке имитация отложного воротника.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 64 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "506",
//                             "cost-opt": "253",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/88a924fd315a21f.jpg",
//                                 "https://fashionup.ua/uploads/tov/9dfa5ecd5adc7da.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "персиковый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4159-plate-quotpenelopequot-pl-1769b.html",
//                             "id": "4159",
//                             "title": "Платье \"Penelope\"",
//                             "articul": "PL-1769B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильное, сдержанное платье. Плечо слегка спущенное. По груди идут рельефы, юбка клеш, отрезная по талии, пояс вставной. Сзади V-образный вырез до середины спины с бантом. По центральному спинки шву потайная молния 35 см\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 88 см\n\nДлина до талии - 38 см\n\nДлина от талии (с учетом пояса) - 50 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b41645b25c739a2.jpg",
//                                 "https://fashionup.ua/uploads/tov/dcfbd6d8fc6de06.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "тиар: 20%шерсть, 40%вискоза, 40%полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4158-plate-quotpenelopequot-pl-1769a.html",
//                             "id": "4158",
//                             "title": "Платье \"Penelope\"",
//                             "articul": "PL-1769A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильное, сдержанное платье. Плечо слегка спущенное. По груди идут рельефы, юбка клеш, отрезная по талии, пояс вставной. Сзади V-образный вырез до середины спины с бантом. По центральному спинки шву потайная молния 35 см\n\nРост модели на фото - 170 см\n\nДлина по спинке от плечевого шва - 88 см\n\nДлина до талии - 38 см\n\nДлина от талии (с учетом пояса) - 50 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0e82b25990ecf44.jpg",
//                                 "https://fashionup.ua/uploads/tov/14cf1b48de993af.jpg",
//                                 "https://fashionup.ua/uploads/tov/f20a09c1ad6b99b.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "голубой",
//                             "cloth": "тиар: 20%шерсть, 40%вискоза, 40%полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4155-sarafan-quotmadisonquot-srf-1770d.html",
//                             "id": "4155",
//                             "title": "Сарафан \"Madison\"",
//                             "articul": "SRF-1770D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Яркое, летнее, легкое платьице без рукавов. Талия на резинке. Спереди горловина в виде \"качельки\". Юбка ровная с небольшими разрезами по бокам. \n\nРост модели на фото - 170 см\n\nДлина по спинке - 89 см\n\nДлина до талии - 37 см\n\nДлина от талии (с учетом резинки) - 52 см\n\nГлубина разрезов по бокам - 10 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "612",
//                             "cost-opt": "306",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b9f90647df3b46c.jpg",
//                                 "https://fashionup.ua/uploads/tov/8d36a2d6b34147e.jpg",
//                                 "https://fashionup.ua/uploads/tov/7833d1ad63c4e0a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "зелень на белом",
//                             "cloth": "штапель: 60%вискоза, 40%хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4154-sarafan-quotmadisonquot-srf-1770c.html",
//                             "id": "4154",
//                             "title": "Сарафан \"Madison\"",
//                             "articul": "SRF-1770C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Яркое, летнее, легкое платьице без рукавов. Талия на резинке. Спереди горловина в виде \"качельки\". Юбка ровная с небольшими разрезами по бокам. \n\nРост модели на фото - 170 см\n\nДлина по спинке - 89 см\n\nДлина до талии - 37 см\n\nДлина от талии (с учетом резинки) - 52 см\n\nГлубина разрезов по бокам - 10 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "612",
//                             "cost-opt": "306",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0d1bb6b5b24148c.jpg",
//                                 "https://fashionup.ua/uploads/tov/64628804f94e2a2.jpg",
//                                 "https://fashionup.ua/uploads/tov/faad968350c3149.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "цветы на ромбах",
//                             "cloth": "штапель: 60%вискоза, 40%хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4153-sarafan-quotmadisonquot-srf-1770b.html",
//                             "id": "4153",
//                             "title": "Сарафан \"Madison\"",
//                             "articul": "SRF-1770B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Яркое, летнее, легкое платьице без рукавов. Талия на резинке. Спереди горловина в виде \"качельки\". Юбка ровная с небольшими разрезами по бокам. \n\nРост модели на фото - 170 см\n\nДлина по спинке - 89 см\n\nДлина до талии - 37 см\n\nДлина от талии (с учетом резинки) - 52 см\n\nГлубина разрезов по бокам - 10 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "612",
//                             "cost-opt": "306",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/73452775237db68.jpg",
//                                 "https://fashionup.ua/uploads/tov/ebe3e5b80a32135.jpg",
//                                 "https://fashionup.ua/uploads/tov/c5d4f4fa9775fc9.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "лимоны на зеленом",
//                             "cloth": "штапель: 60%вискоза, 40%хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4152-sarafan-quotmadisonquot-srf-1770a.html",
//                             "id": "4152",
//                             "title": "Сарафан \"Madison\"",
//                             "articul": "SRF-1770A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Яркое, летнее, легкое платьице без рукавов. Талия на резинке. Спереди горловина в виде \"качельки\". Юбка ровная с небольшими разрезами по бокам. \n\nРост модели на фото - 170 см\n\nДлина по спинке - 89 см\n\nДлина до талии - 37 см\n\nДлина от талии (с учетом резинки) - 52 см\n\nГлубина разрезов по бокам - 10 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "612",
//                             "cost-opt": "306",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8f149d593e30e6a.jpg",
//                                 "https://fashionup.ua/uploads/tov/15a8657c83e6f11.jpg",
//                                 "https://fashionup.ua/uploads/tov/4c1ec0bb1bb0df0.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "ананасы на розовом",
//                             "cloth": "штапель: 60%вискоза, 40%хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4150-plate-quotmilenaquot-pl-1630d.html",
//                             "id": "4150",
//                             "title": "Платье \"Milena\"",
//                             "articul": "PL-1630D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкое, утонченное платье \"Milena\" сделает Вас неотразимой даже в летний зной. По талии резинка 3 см, полочка на запах, пройма обработана бейкой. По бокам разрезы 13 см.  \n\nРост модели на фото - 170 см\n\nДлина по спинке - 87 см\n\nПолуобхват груди  47 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "612",
//                             "cost-opt": "306",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/948efa2487d3c7b.jpg",
//                                 "https://fashionup.ua/uploads/tov/0c8ca2e76851da2.jpg",
//                                 "https://fashionup.ua/uploads/tov/61f66ec8c280aca.jpg"
//                             ],
//                             "sizes": "46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "звездочки на пудровом",
//                             "cloth": "софт Ниагара: 55%шелк, 40%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4146-plate-rubashka-quotsophiequot-pl-1767b.html",
//                             "id": "4146",
//                             "title": "Платье-рубашка \"Sophie\"",
//                             "articul": "PL-1767B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье-рубашка \"Sophie\" своюодного, ровного кроя. Рукав короткий. По бокам разрезы 20 см. Модель можно носить как с поясом так и без него. Пояс в комплекте, длина пояса 157 см. Платье-рубашка яркое и очень приятное к телу.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 90 см\n\nДлина рукава - 22 см\n\nПолуобхват груди - 48 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "708",
//                             "cost-opt": "354",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e7293d07a7e4294.jpg",
//                                 "https://fashionup.ua/uploads/tov/1a083c9466992b4.jpg",
//                                 "https://fashionup.ua/uploads/tov/ee27b38466eaff4.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка черная",
//                             "cloth": "коттон: 100% хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4145-plate-rubashka-quotsophiequot-pl-1767a.html",
//                             "id": "4145",
//                             "title": "Платье-рубашка \"Sophie\"",
//                             "articul": "PL-1767A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье-рубашка \"Sophie\" своюодного, ровного кроя. Рукав короткий. По бокам разрезы 20 см. Модель можно носить как с поясом так и без него. Пояс в комплекте, длина пояса 157 см. Платье-рубашка яркое и очень приятное к телу.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 90 см\n\nДлина рукава - 22 см\n\nПолуобхват груди - 48 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "708",
//                             "cost-opt": "354",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2fb0a38741a44ff.jpg",
//                                 "https://fashionup.ua/uploads/tov/f45d98429c4e929.jpg",
//                                 "https://fashionup.ua/uploads/tov/1c926b56cb9e569.jpg",
//                                 "https://fashionup.ua/uploads/tov/b9ed08de0f3f41a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "клетка синяя",
//                             "cloth": "коттон: 100% хлопок"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4144-bluza-quothiloryquot-bz-1625f.html",
//                             "id": "4144",
//                             "title": "Блуза \"Hilory\"",
//                             "articul": "BZ-1625F",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасная блуза \"Hilory\" асиметричного кроя придаст Вашему образу утонченный и неповторимый вид. \n\nРост модели на фото - 170 см\n\nДлина по спинке - 61 см\n\nНа шее застегивается на пуговицу."
//                             },
//                             "cost": "474",
//                             "cost-opt": "237",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/88ae835da097898.jpg",
//                                 "https://fashionup.ua/uploads/tov/c5e2f58a30906eb.jpg"
//                             ],
//                             "sizes": "44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4143-futbolka-quotairquot-fb-1761m.html",
//                             "id": "4143",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761M",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0de82c4a6d2d42f.jpg",
//                                 "https://fashionup.ua/uploads/tov/aa481eec0f50db5.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "молоко, Персиковые розы",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4142-futbolka-quotairquot-fb-1761e1.html",
//                             "id": "4142",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761E1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e22ed10c57858aa.jpg",
//                                 "https://fashionup.ua/uploads/tov/c222c2d7cbc2459.jpg"
//                             ],
//                             "sizes": "42-44,46-48,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный, принт Красные розы",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4141-futbolka-quotairquot-fb-1761l.html",
//                             "id": "4141",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761L",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6abdf0f5ff18211.jpg",
//                                 "https://fashionup.ua/uploads/tov/6d4a24958688f7a.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "молоко, принт Enjoy Summer",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4140-futbolka-quotairquot-fb-1761k.html",
//                             "id": "4140",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761K",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/00a07179a3f07e8.jpg",
//                                 "https://fashionup.ua/uploads/tov/42fe1a248a0a70e.jpg"
//                             ],
//                             "sizes": "42-44,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, принт Мелкие цветы",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4138-futbolka-quotairquot-fb-1761j.html",
//                             "id": "4138",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761J",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8d43ce2765c198a.jpg",
//                                 "https://fashionup.ua/uploads/tov/f69c7cd97de6f9c.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "молоко, принт буква L",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4137-futbolka-quotairquot-fb-1761i.html",
//                             "id": "4137",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761I",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/57d0e01109227cf.jpg",
//                                 "https://fashionup.ua/uploads/tov/393773a53f83882.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, принт Aloha Hawaii",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4136-futbolka-quotairquot-fb-1761c1.html",
//                             "id": "4136",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761C1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2ceb445d6dc5f4e.jpg",
//                                 "https://fashionup.ua/uploads/tov/f194e8458545369.jpg"
//                             ],
//                             "sizes": "42-44,46-48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный, принт Сиреневые ромашки",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4135-futbolka-quotairquot-fb-1761h.html",
//                             "id": "4135",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761H",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/93a3aa3f9bd18c2.jpg",
//                                 "https://fashionup.ua/uploads/tov/c3e5c10108883c9.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "молоко, принт Голубые орхидеи",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4134-futbolka-quotairquot-fb-1761g.html",
//                             "id": "4134",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761G",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e2e7b1016607151.jpg",
//                                 "https://fashionup.ua/uploads/tov/dbc66f10901c51b.jpg"
//                             ],
//                             "sizes": "42-44,46-48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, принт Розовые пионы",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4133-futbolka-quotairquot-fb-1761b1.html",
//                             "id": "4133",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761B1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/c485f5a39a1e8b6.jpg",
//                                 "https://fashionup.ua/uploads/tov/bf83269b915abd4.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт You love me",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4132-futbolka-quotairquot-fb-1761f.html",
//                             "id": "4132",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761F",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/07eed1abd2a3db6.jpg",
//                                 "https://fashionup.ua/uploads/tov/480d101414e5588.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "молоко, принт Камелии",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4131-futbolka-quotairquot-fb-1761a1.html",
//                             "id": "4131",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1761A1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Шикарная футболка \"Air\" подарит Вам ощущение легкости и воздушности в летнюю жару. Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель свободного кроя  прекрасно скроет все маленькие недостатки Вашей фигуры. Есть батальные размеры. \n\n\n\nРост модели на фото - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e6032f4703a9b96.jpg",
//                                 "https://fashionup.ua/uploads/tov/3064f63f18103dd.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Beauty and Youth",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4130-futbolka-quotclassicquot-fb-1760n1.html",
//                             "id": "4130",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760N1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a3afac3a7790f6b.jpg",
//                                 "https://fashionup.ua/uploads/tov/dc17d57469d06bb.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Девушка в красном",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4129-futbolka-quotclassicquot-fb-1760m.html",
//                             "id": "4129",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760M",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/31749197cb620ec.jpg",
//                                 "https://fashionup.ua/uploads/tov/aa00027184085c9.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Beautiful day",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4128-futbolka-quotclassicquot-fb-1760l.html",
//                             "id": "4128",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760L",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3a020ab6fb9d7b7.jpg",
//                                 "https://fashionup.ua/uploads/tov/b7c2df7e76d32cf.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Девушка ч/б",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4127-futbolka-quotclassicquot-fb-1760i.html",
//                             "id": "4127",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760I",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/15333b9b74d8c7e.jpg",
//                                 "https://fashionup.ua/uploads/tov/af2c038cb90d5ce.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, принт The best summer",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4126-futbolka-quotclassicquot-fb-1760g1.html",
//                             "id": "4126",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760G1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6721a14c1931abf.jpg",
//                                 "https://fashionup.ua/uploads/tov/80d8dc860d4b8aa.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Butterflies",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4125-futbolka-quotclassicquot-fb-1760n.html",
//                             "id": "4125",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760N",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/68a1e1f38e6aeb4.jpg",
//                                 "https://fashionup.ua/uploads/tov/4e290398052ff69.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Девушка в красном",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4124-futbolka-quotclassicquot-fb-1760m1.html",
//                             "id": "4124",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760M1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/20443f6d6f89b26.jpg",
//                                 "https://fashionup.ua/uploads/tov/ab18539b9b117df.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Beautiful day",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4123-futbolka-quotclassicquot-fb-1760l1.html",
//                             "id": "4123",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760L1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/887aa0f269597a5.jpg",
//                                 "https://fashionup.ua/uploads/tov/6c42437cc15971a.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Девушка ч/б",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4121-futbolka-quotclassicquot-fb-1760j.html",
//                             "id": "4121",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760J",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4fd95b42611f539.jpg",
//                                 "https://fashionup.ua/uploads/tov/4cc065f53fc51ba.jpg",
//                                 "https://fashionup.ua/uploads/tov/10c63a046b0914d.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Девушка в розовом",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4120-futbolka-quotclassicquot-fb-1760i1.html",
//                             "id": "4120",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760I1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f89cc83cf7f7704.jpg",
//                                 "https://fashionup.ua/uploads/tov/054ab9c2ae51cef.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт The best summer",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4119-futbolka-quotclassicquot-fb-1760h.html",
//                             "id": "4119",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760H",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2c8890aa3aadcb7.jpg",
//                                 "https://fashionup.ua/uploads/tov/8e738064fc4ac8a.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт The key",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4118-futbolka-quotclassicquot-fb-1760g.html",
//                             "id": "4118",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760G",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/c4ff82586f9558b.jpg",
//                                 "https://fashionup.ua/uploads/tov/2bd0f7ce7e3e505.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Butterflies",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4117-futbolka-quotclassicquot-fb-1760f.html",
//                             "id": "4117",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760F",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9597e530d5854bf.jpg",
//                                 "https://fashionup.ua/uploads/tov/5a79c08ac990d9d.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "белый, принт Маки",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4116-futbolka-quotclassicquot-fb-1760e1.html",
//                             "id": "4116",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760E1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1b30fdedcab1604.jpg",
//                                 "https://fashionup.ua/uploads/tov/2aea8e18f19fcb7.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный, принт Happy every day",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4115-futbolka-quotclassicquot-fb-1760d1.html",
//                             "id": "4115",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760D1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами. Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/29a9b960af5cc19.jpg",
//                                 "https://fashionup.ua/uploads/tov/13ccade97c56620.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт California club",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/mayki-futbolki/4114-futbolka-quotclassicquot-fb-1760c1.html",
//                             "id": "4114",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760C1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами.  Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e7b38886c06d34e.jpg",
//                                 "https://fashionup.ua/uploads/tov/a03eb73cd8d2c4e.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "7",
//                             "category-name": "Майки и Футболки",
//                             "color": "черный, принт Девушка с бокалом",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4113-futbolka-quotclassicquot-fb-1760b1.html",
//                             "id": "4113",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760B1",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами.  Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d14b822408772d4.jpg",
//                                 "https://fashionup.ua/uploads/tov/3e261e30033bad4.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный, принт Прогулка под дождем",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4112-futbolka-quotclassicquot-fb-1760a.html",
//                             "id": "4112",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1760A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Молодежная футболка \"Classic\". Спинка изделия выполнена из мягкой, приятной к телу вискозы, а передняя полочка из креп-шифона. Сублимационная печать позволила нам получить яркий принт, устойчивый к воздействию окружающей среды. Модель весьма удобна и функциональна. Чудесно будет смотреться в паре с джинсами, юбками, шортами.  Футболка \"Classic\" станет отличным вариантом для Вашего стильного повседневного образа. \n\n\n\nРост модели на фото - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d8d4627e3b9b57d.jpg",
//                                 "https://fashionup.ua/uploads/tov/b571af9d846c925.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, принт Flower",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4110-bluza-quotgabbyquot-bz-1755a.html",
//                             "id": "4110",
//                             "title": "Блуза \"Gabby\"",
//                             "articul": "BZ-1755A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Легкая, яркая и струящаяся блуза ассиметричного кроя. Воротник шалькой. Рукав длинный, снизу манжет на пуговице. На рукаве есть патик, с помощью которого длинный рукав можно сделать короче. Сзади на спинке кокетка и встречная склада.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 75 см\n\nДлина по полочке от плечевого шва - 57 см\n\nДлина рукава от плечевого шва - 62 см\n\n\n\nЗамеры по 42  размеру"
//                             },
//                             "cost": "688",
//                             "cost-opt": "249",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0cc892acafc204e.jpg",
//                                 "https://fashionup.ua/uploads/tov/674b297230e625b.jpg",
//                                 "https://fashionup.ua/uploads/tov/d90731d95a72520.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "желтый",
//                             "cloth": "шифон с вышивкой: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4106-plate-quotisabellaquot-pl-1758c.html",
//                             "id": "4106",
//                             "title": "Платье \"Isabella\"",
//                             "articul": "PL-1758C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье ассиметричного кроя оригинальное и необычное. Рукава короткие, слегка спускаются на плечи. Ассиметричный вырез горловины. С левого плеча спускается вниз декоративный защип. По передней полочке подрез от бедра, в котором заложены склады плиссе. По спинке потайная молния 40 см\n\nРост модели на фото - 170 см\n\nДлина правого бокового шва от плеча - 89 см\n\nДлина левого бокового шва от плеча - 110 см\n\nПолуобхват талии - 37 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "760",
//                             "cost-opt": "380",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/26e88e5feaf19d2.jpg",
//                                 "https://fashionup.ua/uploads/tov/7c760cbf7a9100e.jpg",
//                                 "https://fashionup.ua/uploads/tov/edd4e0289f764b2.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "светло-розовый",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4105-plate-quotisabellaquot-pl-1758b.html",
//                             "id": "4105",
//                             "title": "Платье \"Isabella\"",
//                             "articul": "PL-1758B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье ассиметричного кроя оригинальное и необычное. Рукава короткие, слегка спускаются на плечи. Ассиметричный вырез горловины. С левого плеча спускается вниз декоративный защип. По передней полочке подрез от бедра, в котором заложены склады плиссе. По спинке потайная молния 40 см\n\nРост модели на фото - 170 см\n\nДлина правого бокового шва от плеча - 89 см\n\nДлина левого бокового шва от плеча - 110 см\n\nПолуобхват талии - 37 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "760",
//                             "cost-opt": "380",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/779c4665616e340.jpg",
//                                 "https://fashionup.ua/uploads/tov/0d2b0ff5acc6ce5.jpg",
//                                 "https://fashionup.ua/uploads/tov/2a08afa6935a6c1.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4100-plate-quotterryquot-pl-1756c.html",
//                             "id": "4100",
//                             "title": "Платье \"Terry\"",
//                             "articul": "PL-1756C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень женственное платье приталенного кроя. Округлый вырез горловины, рукав 3/4. По бокам платье декорировано гипюровыми лампасами. По центру передней полочки идет шов, который заканчивается маленьким разрезом 9 см. По центру спины потайная молния 38 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 84 см\n\nДлина рукава от плечевого шва - 40 см\n\nПолуобхват груди - 38 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "818",
//                             "cost-opt": "409",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9c989a5a57cc1dc.jpg",
//                                 "https://fashionup.ua/uploads/tov/0e3a8785e860166.jpg",
//                                 "https://fashionup.ua/uploads/tov/57a1cd3e7872cf9.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "черный",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан; гипюр"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4099-plate-quotterryquot-pl-1756b.html",
//                             "id": "4099",
//                             "title": "Платье \"Terry\"",
//                             "articul": "PL-1756B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень женственное платье приталенного кроя. Округлый вырез горловины, рукав 3/4. По бокам платье декорировано гипюровыми лампасами. По центру передней полочки идет шов, который заканчивается маленьким разрезом 9 см. По центру спины потайная молния 38 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 84 см\n\nДлина рукава от плечевого шва - 40 см\n\nПолуобхват груди - 38 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "818",
//                             "cost-opt": "409",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2171d1bbdfdf419.jpg",
//                                 "https://fashionup.ua/uploads/tov/a458e70979a5e27.jpg",
//                                 "https://fashionup.ua/uploads/tov/d44388ef56560f0.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "светло-розовый",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан; гипюр"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4098-plate-quotterryquot-pl-1756a.html",
//                             "id": "4098",
//                             "title": "Платье \"Terry\"",
//                             "articul": "PL-1756A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Очень женственное платье приталенного кроя. Округлый вырез горловины, рукав 3/4. По бокам платье декорировано гипюровыми лампасами. По центру передней полочки идет шов, который заканчивается маленьким разрезом 9 см. По центру спины потайная молния 38 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 84 см\n\nДлина рукава от плечевого шва - 40 см\n\nПолуобхват груди - 38 см\n\n\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "818",
//                             "cost-opt": "409",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ccd7630bf7927d9.jpg",
//                                 "https://fashionup.ua/uploads/tov/524dc719598b9c8.jpg",
//                                 "https://fashionup.ua/uploads/tov/07c82bcc0a5c551.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "красный",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан; гипюр"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4097-plate-quotwillowquot-pl-1753b.html",
//                             "id": "4097",
//                             "title": "Платье \"Willow\"",
//                             "articul": "PL-1753B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальное платье приталенного силуэта. Рукав 3/4. Передняя полочка ассиметричного кроя. На груди и по спинке рельефные выточки. Сзади по центру спины потайная молния 42 см.\n\nРост модели на фото - 170 см\n\nДлина укороченной части платья по спинке - 140 см\n\nДлина удлиненной части платья по спинке - 116 см\n\nДлина рукава от плечевого шва - 40 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "778",
//                             "cost-opt": "389",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/db350422b81f85b.jpg",
//                                 "https://fashionup.ua/uploads/tov/f22dfc1bcfe8304.jpg",
//                                 "https://fashionup.ua/uploads/tov/d998f6c3db31817.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "пудровый + персиковый",
//                             "cloth": "трикотаж \"Джерси\": 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4096-plate-quotwillowquot-pl-1753a.html",
//                             "id": "4096",
//                             "title": "Платье \"Willow\"",
//                             "articul": "PL-1753A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальное платье приталенного силуэта. Рукав 3/4. Передняя полочка ассиметричного кроя. На груди и по спинке рельефные выточки. Сзади по центру спины потайная молния 42 см.\n\nРост модели на фото - 170 см\n\nДлина укороченной части платья по спинке - 140 см\n\nДлина удлиненной части платья по спинке - 116 см\n\nДлина рукава от плечевого шва - 40 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "778",
//                             "cost-opt": "389",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/284daa27b73a5c9.jpg",
//                                 "https://fashionup.ua/uploads/tov/aff10bb6c1ed212.jpg",
//                                 "https://fashionup.ua/uploads/tov/55abc0d996d5dc5.jpg",
//                                 "https://fashionup.ua/uploads/tov/b25d848e94127d1.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "джинсовый + серый",
//                             "cloth": "трикотаж \"Джерси\": 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4095-plate-quotdominicquot-pl-1751c.html",
//                             "id": "4095",
//                             "title": "Платье \"Dominic\"",
//                             "articul": "PL-1751C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивое платье выгодно подчеркнет Ваши достоинства и скроет недостатки. Верх платья по фигуре, юбка расклешенная. Рукав 3/4. Вырез горловины ассиметричный. В области груди заложены крупные склады. Сбоку вшита молния 31 см. \n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 86 см\n\nДлина рукава от плечевого шва - 43 см\n\nВерх платья до талии - 41 см\n\nДлина юбки - 45 см\n\nПолуобхват по талии - 33 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "779",
//                             "cost-opt": "388",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/19e0e3d28206204.jpg",
//                                 "https://fashionup.ua/uploads/tov/daaf5c72bd1bd1f.jpg",
//                                 "https://fashionup.ua/uploads/tov/c615947f4a6729c.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "красный",
//                             "cloth": "трикотаж \"Джерси\": 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/platya/4094-plate-quotdominicquot-pl-1751b.html",
//                             "id": "4094",
//                             "title": "Платье \"Dominic\"",
//                             "articul": "PL-1751B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивое платье выгодно подчеркнет Ваши достоинства и скроет недостатки. Верх платья по фигуре, юбка расклешенная. Рукав 3/4. Вырез горловины ассиметричный. В области груди заложены крупные склады. Сбоку вшита молния 31 см. \n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 86 см\n\nДлина рукава от плечевого шва - 43 см\n\nВерх платья до талии - 41 см\n\nДлина юбки - 45 см\n\nПолуобхват по талии - 33 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "776",
//                             "cost-opt": "388",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/13dd0ac9137651f.jpg",
//                                 "https://fashionup.ua/uploads/tov/769285f753cff78.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "2",
//                             "category-name": "Платья",
//                             "color": "черный",
//                             "cloth": "трикотаж \"Джерси\": 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4093-plate-quotdominicquot-pl-1751a.html",
//                             "id": "4093",
//                             "title": "Платье \"Dominic\"",
//                             "articul": "PL-1751A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Красивое платье выгодно подчеркнет Ваши достоинства и скроет недостатки. Верх платья по фигуре, юбка расклешенная. Рукав 3/4. Вырез горловины ассиметричный. В области груди заложены крупные склады. Сбоку вшита молния 31 см. \n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 86 см\n\nДлина рукава от плечевого шва - 43 см\n\nВерх платья до талии - 41 см\n\nДлина юбки - 45 см\n\nПолуобхват по талии - 33 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "776",
//                             "cost-opt": "388",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/596a65c1c4227c1.jpg",
//                                 "https://fashionup.ua/uploads/tov/ebe1fd60b78fe30.jpg",
//                                 "https://fashionup.ua/uploads/tov/a3fa7f7c7edcc92.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "пудровый",
//                             "cloth": "трикотаж \"Джерси\": 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4092-yubka-yub-1050-yub-1050d.html",
//                             "id": "4092",
//                             "title": "Юбка YUB-1050",
//                             "articul": "YUB-1050D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого кроя. Юбка отлично будет смотреться как с обувью на каблуках, так и с ботинками или кроссовками. Спереди гульфик-обманка и декоративная шлица-разрез 24 см. Сзади молния 16 см и кнопка.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nПолуобхват пояса - 35 см\n\nПолуобхват юбки по низу - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "628",
//                             "cost-opt": "314",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/801a6e207ff4636.jpg",
//                                 "https://fashionup.ua/uploads/tov/bbc760f6a8fb9b5.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Chocolate/Шоколадный",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4091-yubka-yub-1050-yub-1050c.html",
//                             "id": "4091",
//                             "title": "Юбка YUB-1050",
//                             "articul": "YUB-1050C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого кроя. Юбка отлично будет смотреться как с обувью на каблуках, так и с ботинками или кроссовками. Спереди гульфик-обманка и декоративная шлица-разрез 24 см. Сзади молния 16 см и кнопка.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nПолуобхват пояса - 35 см\n\nПолуобхват юбки по низу - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "628",
//                             "cost-opt": "314",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b1541bb54f0aa72.jpg",
//                                 "https://fashionup.ua/uploads/tov/65cb5909c532402.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray/Серый",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4090-yubka-yub-1050-yub-1050b.html",
//                             "id": "4090",
//                             "title": "Юбка YUB-1050",
//                             "articul": "YUB-1050B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого кроя. Юбка отлично будет смотреться как с обувью на каблуках, так и с ботинками или кроссовками. Спереди гульфик-обманка и декоративная шлица-разрез 24 см. Сзади молния 16 см и кнопка.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nПолуобхват пояса - 35 см\n\nПолуобхват юбки по низу - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "628",
//                             "cost-opt": "314",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/39e73fb3d4612c1.jpg",
//                                 "https://fashionup.ua/uploads/tov/840f175e3ee98ce.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Olive/Оливковый",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4089-yubka-yub-1050-yub-1050a.html",
//                             "id": "4089",
//                             "title": "Юбка YUB-1050",
//                             "articul": "YUB-1050A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильная юбка прямого кроя. Юбка отлично будет смотреться как с обувью на каблуках, так и с ботинками или кроссовками. Спереди гульфик-обманка и декоративная шлица-разрез 24 см. Сзади молния 16 см и кнопка.\n\nРост модели на фото - 170 см\n\nДлина юбки - 66 см\n\nПолуобхват пояса - 35 см\n\nПолуобхват юбки по низу - 45 см\n\n\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "628",
//                             "cost-opt": "314",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1e8e1fecbe80594.jpg",
//                                 "https://fashionup.ua/uploads/tov/66fd5d142ec819b.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "экокожа: 100% полиуритан,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4068-plate-quotaveryquot-pl-1676b.html",
//                             "id": "4068",
//                             "title": "Платье \"Avery\"",
//                             "articul": "PL-1676B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье - футляр полностью в обтяжку. Платье прекрасно подчеркнет все достоинства Вашей фигуры. \n\nРост модели на фото - 170 см\n\nДлина по спинке - 105 см\n\nДлина рукава - 64 см"
//                             },
//                             "cost": "512",
//                             "cost-opt": "256",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/68be4895b9650f0.jpg",
//                                 "https://fashionup.ua/uploads/tov/6848242e8c99f00.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4067-plate-quotsusannaquot-pl-1669c.html",
//                             "id": "4067",
//                             "title": "Платье \"Susanna\"",
//                             "articul": "PL-1669C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного кроя, без рукавов с крылышками, воротник фигурный с отсрочками, спереди внизу двойные складки, сзади по центру молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 86 см\n\nДлина по полочке - 80 см"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/fa47b6931e16dd2.jpg",
//                                 "https://fashionup.ua/uploads/tov/093c1dea9c1f4b2.jpg",
//                                 "https://fashionup.ua/uploads/tov/e4ed402c3f4f3a8.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "джинс",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4066-plate-quotsusannaquot-pl-1669b.html",
//                             "id": "4066",
//                             "title": "Платье \"Susanna\"",
//                             "articul": "PL-1669B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного кроя, без рукавов с крылышками, воротник фигурный с отсрочками, спереди внизу двойные складки, сзади по центру молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 86 см\n\nДлина по полочке - 80 см"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/12e36e403942adc.jpg",
//                                 "https://fashionup.ua/uploads/tov/e834f1386bafd5a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "графит",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4065-plate-quotsusannaquot-pl-1669a.html",
//                             "id": "4065",
//                             "title": "Платье \"Susanna\"",
//                             "articul": "PL-1669A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье приталенного кроя, без рукавов с крылышками, воротник фигурный с отсрочками, спереди внизу двойные складки, сзади по центру молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 86 см\n\nДлина по полочке - 80 см"
//                             },
//                             "cost": "666",
//                             "cost-opt": "333",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a7b79f8d9c32d2d.jpg",
//                                 "https://fashionup.ua/uploads/tov/2ecdd8b218ae3c1.jpg",
//                                 "https://fashionup.ua/uploads/tov/0e8d8d51f00cca3.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "серый",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4064-plate-quotaveryquot-pl-1676c.html",
//                             "id": "4064",
//                             "title": "Платье \"Avery\"",
//                             "articul": "PL-1676C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Платье - футляр полностью в обтяжку. Платье прекрасно подчеркнет все достоинства Вашей фигуры. \n\nРост модели на фото - 170 см\n\nДлина по спинке - 105 см\n\nДлина рукава - 64 см"
//                             },
//                             "cost": "512",
//                             "cost-opt": "256",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1679a50a479af88.jpg",
//                                 "https://fashionup.ua/uploads/tov/933f3259f6353ad.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "светло-серый",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4063-plate-quotbellaquot-pl-1668c.html",
//                             "id": "4063",
//                             "title": "Платье \"Bella\"",
//                             "articul": "PL-1668C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья по спинке - 91 см\n\nДлина по передней полке - 91 см\n\nДлина рукава - 57 см\n\nПлатье приталенного кроя, длинный рукав украшен пышной рюшей. Горловина лодочкой с легкими складами от плеча. Платье отрезное по талии, сзади разрез, сбоку молния 30 см."
//                             },
//                             "cost": "722",
//                             "cost-opt": "361",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0f08dd0fcc6bedf.jpg",
//                                 "https://fashionup.ua/uploads/tov/6c1fbd63ebf4edd.jpg",
//                                 "https://fashionup.ua/uploads/tov/8c65eeb8d276627.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4062-plate-quotbellaquot-pl-1668b.html",
//                             "id": "4062",
//                             "title": "Платье \"Bella\"",
//                             "articul": "PL-1668B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья по спинке - 91 см\n\nДлина по передней полке - 91 см\n\nДлина рукава - 57 см\n\nПлатье приталенного кроя, длинный рукав украшен пышной рюшей. Горловина лодочкой с легкими складами от плеча. Платье отрезное по талии, сзади разрез, сбоку молния 30 см."
//                             },
//                             "cost": "722",
//                             "cost-opt": "361",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/00ca536c51c208e.jpg",
//                                 "https://fashionup.ua/uploads/tov/e7adf8fe63eeafa.jpg",
//                                 "https://fashionup.ua/uploads/tov/8530c081db85d24.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4061-plate-quotbellaquot-pl-1668a.html",
//                             "id": "4061",
//                             "title": "Платье \"Bella\"",
//                             "articul": "PL-1668A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья по спинке - 91 см\n\nДлина по передней полке - 91 см\n\nДлина рукава - 57 см\n\nПлатье приталенного кроя, длинный рукав украшен пышной рюшей. Горловина лодочкой с легкими складами от плеча. Платье отрезное по талии, сзади разрез, сбоку молния 30 см."
//                             },
//                             "cost": "722",
//                             "cost-opt": "361",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2c331c23fbfe653.jpg",
//                                 "https://fashionup.ua/uploads/tov/68d195375d0c134.jpg",
//                                 "https://fashionup.ua/uploads/tov/17a17d10b12038a.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4049-yubka-yub-1054-yub-1054b.html",
//                             "id": "4049",
//                             "title": "Юбка YUB-1054",
//                             "articul": "YUB-1054B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Эта юбка прекрасно подчеркнет Вашу фигуру. \n\nСпереди декор в виде планочки с пуговицами, сзади потайная молния 20 см. По заднему шву шлица.\n\nРост модели на фото - 170 см\n\nДлина юбки  - 56 см"
//                             },
//                             "cost": "488",
//                             "cost-opt": "244",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1cf82ae8ce7abbc.jpg",
//                                 "https://fashionup.ua/uploads/tov/d8d8df3fc9e70d9.jpg"
//                             ],
//                             "sizes": "L (46), XL (48), 2XL (50), 3XL (52), 4XL (54)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Gray red rhombus/Cерый с красными ромбами",
//                             "cloth": "трикотаж джерси: 40% вискоза, 40% полиэстер, 20 %эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4017-pidzhak-quotjacquelinequot-pg-1655c.html",
//                             "id": "4017",
//                             "title": "Пиджак \"Jacqueline\"",
//                             "articul": "PG-1655C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 56 см\n\nДлина рукава - 60 см\n\nВоротник отложной, вшиты подплечники, украшен  декоративными змейками.\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "818",
//                             "cost-opt": "409",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9f06d34fdc07ba0.jpg",
//                                 "https://fashionup.ua/uploads/tov/c76c7ff60a04a91.jpg",
//                                 "https://fashionup.ua/uploads/tov/462fe32bda0f788.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "трикотаж Алекс:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4015-pidzhak-quotjacquelinequot-pg-1655a.html",
//                             "id": "4015",
//                             "title": "Пиджак \"Jacqueline\"",
//                             "articul": "PG-1655A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 56 см\n\nДлина рукава - 60 см\n\nВоротник отложной, вшиты подплечники, украшен  декоративными змейками.\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "818",
//                             "cost-opt": "409",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/36c32ec697c257f.jpg",
//                                 "https://fashionup.ua/uploads/tov/8247e1bd9a9855b.jpg",
//                                 "https://fashionup.ua/uploads/tov/91be4a602dcaf27.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-зеленый",
//                             "cloth": "трикотаж Алекс:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4011-plate-quotdanielaquot-pl-1619e.html",
//                             "id": "4011",
//                             "title": "Платье \"Daniela\"",
//                             "articul": "PL-1619E",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасное платье \"Daniela\" благодаря своему фасону \"летучая мышь\" сделает Вас неотразимой в любой ситуации. По талии складочки зафиксированы поясом. Низ по полочке фигурный. По центру спины молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 94 см\n\nДлина рукава 35 см.\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "670",
//                             "cost-opt": "335",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/136b82c6b4f6aaa.jpg",
//                                 "https://fashionup.ua/uploads/tov/bd23dfced156d2d.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4010-plate-quotdanielaquot-pl-1619d.html",
//                             "id": "4010",
//                             "title": "Платье \"Daniela\"",
//                             "articul": "PL-1619D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасное платье \"Daniela\" благодаря своему фасону \"летучая мышь\" сделает Вас неотразимой в любой ситуации. По талии складочки зафиксированы поясом. Низ по полочке фигурный. По центру спины молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 94 см\n\nДлина рукава 35 см.\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "670",
//                             "cost-opt": "335",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/fd48f68c9b58e5d.jpg",
//                                 "https://fashionup.ua/uploads/tov/332b7919e5b7d36.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4009-plate-quotdanielaquot-pl-1619c.html",
//                             "id": "4009",
//                             "title": "Платье \"Daniela\"",
//                             "articul": "PL-1619C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасное платье \"Daniela\" благодаря своему фасону \"летучая мышь\" сделает Вас неотразимой в любой ситуации. По талии складочки зафиксированы поясом. Низ по полочке фигурный. По центру спины молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 94 см\n\nДлина рукава 35 см.\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "670",
//                             "cost-opt": "335",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/44c0bed0b117a11.jpg",
//                                 "https://fashionup.ua/uploads/tov/b5784543a4f353d.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-зеленый",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4008-plate-quotdanielaquot-pl-1619b.html",
//                             "id": "4008",
//                             "title": "Платье \"Daniela\"",
//                             "articul": "PL-1619B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасное платье \"Daniela\" благодаря своему фасону \"летучая мышь\" сделает Вас неотразимой в любой ситуации. По талии складочки зафиксированы поясом. Низ по полочке фигурный. По центру спины молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 94 см\n\nДлина рукава 35 см.\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "670",
//                             "cost-opt": "335",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d97bc99cee427ea.jpg",
//                                 "https://fashionup.ua/uploads/tov/4937d73a0445562.jpg",
//                                 "https://fashionup.ua/uploads/tov/8e90b9f0e66dfa2.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "серый",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4007-plate-quotdanielaquot-pl-1619a.html",
//                             "id": "4007",
//                             "title": "Платье \"Daniela\"",
//                             "articul": "PL-1619A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Прекрасное платье \"Daniela\" благодаря своему фасону \"летучая мышь\" сделает Вас неотразимой в любой ситуации. По талии складочки зафиксированы поясом. Низ по полочке фигурный. По центру спины молния 50 см.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке - 94 см\n\nДлина рукава 35 см.\n\nЗамеры по 42 размеру"
//                             },
//                             "cost": "670",
//                             "cost-opt": "335",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/124e16a7b8c7d6e.jpg",
//                                 "https://fashionup.ua/uploads/tov/5ef32c2cd4215ab.jpg",
//                                 "https://fashionup.ua/uploads/tov/cad61c44d2894d0.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "марсала",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4005-zhilet-quotchristinequot-kd-1649e.html",
//                             "id": "4005",
//                             "title": "Жилет \"Christine\"",
//                             "articul": "KD-1649E",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Жилет \"Christine\" прекрасно подойдет для любого случая. А в сочетании с брюками \"Christine\" предаст Вашему образу элегантность и утонченность.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 75 см\n\nДлина по полочке - 77 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a661dd354f992d0.jpg",
//                                 "https://fashionup.ua/uploads/tov/0e29536c5dce39a.jpg",
//                                 "https://fashionup.ua/uploads/tov/ab580002fbea249.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4003-zhilet-quotchristinequot-kd-1649d.html",
//                             "id": "4003",
//                             "title": "Жилет \"Christine\"",
//                             "articul": "KD-1649D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Жилет \"Christine\" прекрасно подойдет для любого случая. А в сочетании с брюками \"Christine\" предаст Вашему образу элегантность и утонченность.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 75 см\n\nДлина по полочке - 77 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e513f57134774b8.jpg",
//                                 "https://fashionup.ua/uploads/tov/0d280f40297a39f.jpg",
//                                 "https://fashionup.ua/uploads/tov/ca1901721a5c0c2.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "бежевый",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/4001-zhilet-quotchristinequot-kd-1649c.html",
//                             "id": "4001",
//                             "title": "Жилет \"Christine\"",
//                             "articul": "KD-1649C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Жилет \"Christine\" прекрасно подойдет для любого случая. А в сочетании с брюками \"Christine\" предаст Вашему образу элегантность и утонченность.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 75 см\n\nДлина по полочке - 77 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/acbf10219d84192.jpg",
//                                 "https://fashionup.ua/uploads/tov/b3a4184ca146227.jpg",
//                                 "https://fashionup.ua/uploads/tov/03303bc2ccfe6b4.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3999-zhilet-quotchristinequot-kd-1649b.html",
//                             "id": "3999",
//                             "title": "Жилет \"Christine\"",
//                             "articul": "KD-1649B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Жилет \"Christine\" прекрасно подойдет для любого случая. А в сочетании с брюками \"Christine\" предаст Вашему образу элегантность и утонченность.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 75 см\n\nДлина по полочке - 77 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/72cdfcbcdb3ff1c.jpg",
//                                 "https://fashionup.ua/uploads/tov/2d67b559a35ff20.jpg",
//                                 "https://fashionup.ua/uploads/tov/f719a6a6e65aa6a.jpg",
//                                 "https://fashionup.ua/uploads/tov/5320156126525c9.jpg",
//                                 "https://fashionup.ua/uploads/tov/1011a5c660589dc.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3997-zhilet-quotchristinequot-kd-1649a.html",
//                             "id": "3997",
//                             "title": "Жилет \"Christine\"",
//                             "articul": "KD-1649A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Жилет \"Christine\" прекрасно подойдет для любого случая. А в сочетании с брюками \"Christine\" предаст Вашему образу элегантность и утонченность.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 75 см\n\nДлина по полочке - 77 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "780",
//                             "cost-opt": "390",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/81a99002fd1dd36.jpg",
//                                 "https://fashionup.ua/uploads/tov/10fd84bcb2bfd13.jpg",
//                                 "https://fashionup.ua/uploads/tov/b5690b1a277419b.jpg",
//                                 "https://fashionup.ua/uploads/tov/617688f1d59da4b.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "голубой",
//                             "cloth": "костюмная ткань: 40%вискоза, 55%полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3994-kardigan-quotabstractquot-kd-1644b.html",
//                             "id": "3994",
//                             "title": "Кардиган \"Abstract\"",
//                             "articul": "KD-1644B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Хотите быть неотразимой всегда и везде? Тогда кардиган \"Abstract\" как раз для Вас. Прекрасный кардиган с уникальным перфорированным рисунком выгодно подчеркнет Ваш образ.\n\nРост модели на фото - 170 см\n\nДлина кардигана по спинке - 108 см"
//                             },
//                             "cost": "672",
//                             "cost-opt": "336",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/827016489330347.jpg",
//                                 "https://fashionup.ua/uploads/tov/97e4d09d882cca8.jpg",
//                                 "https://fashionup.ua/uploads/tov/e29cf3d04cd6226.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "экозамша: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3991-kardigan-quotstarsquot-kd-1643a.html",
//                             "id": "3991",
//                             "title": "Кардиган \"Stars\"",
//                             "articul": "KD-1643A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Хотите быть неотразимой всегда и везде? Тогда кардиган \"Stars\" как раз для Вас. Прекрасный кардиган с уникальным перфорированным рисунком выгодно подчеркнет Ваш образ.\n\nРост модели на фото - 170 см\n\nДлина кардигана по спинке - 108 см"
//                             },
//                             "cost": "716",
//                             "cost-opt": "358",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3e01bfc47239b9c.jpg",
//                                 "https://fashionup.ua/uploads/tov/394d492bbb27824.jpg",
//                                 "https://fashionup.ua/uploads/tov/d5dfdb987884c24.jpg",
//                                 "https://fashionup.ua/uploads/tov/b3ad7e34f40ee1a.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "экозамша: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3985-plate-tunika-quotcrystalquot-pl-1648b.html",
//                             "id": "3985",
//                             "title": "Платье-туника \"Crystal\"",
//                             "articul": "PL-1648B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Великолепное платье-туника \"Crystal\" с гравировкой розы не оставит равнодушным никого. Платье выгодно подчеркнет Вашу красоту и неповторимость.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке 84 см\n\nДлина рукава - 39 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "664",
//                             "cost-opt": "332",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2eacac073db6d09.jpg",
//                                 "https://fashionup.ua/uploads/tov/5ce3134ba313ab3.jpg",
//                                 "https://fashionup.ua/uploads/tov/2689e479b117d76.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "экозамша: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3984-plate-tunika-quotcrystalquot-pl-1648a.html",
//                             "id": "3984",
//                             "title": "Платье-туника \"Crystal\"",
//                             "articul": "PL-1648A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Великолепное платье-туника \"Crystal\" с гравировкой розы не оставит равнодушным никого. Платье выгодно подчеркнет Вашу красоту и неповторимость.\n\nРост модели на фото - 170 см\n\nДлина платья по спинке 84 см\n\nДлина рукава - 39 см\n\nЗамеры по 42 размеру."
//                             },
//                             "cost": "664",
//                             "cost-opt": "332",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e25f4635a4d11dc.jpg",
//                                 "https://fashionup.ua/uploads/tov/7644f0a10586b4a.jpg",
//                                 "https://fashionup.ua/uploads/tov/a3f48606513d9e5.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "экозамша: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3973-sarafan-quottutsiquot-srf-1645d.html",
//                             "id": "3973",
//                             "title": "Сарафан \"Tutsi\"",
//                             "articul": "SRF-1645D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный сарафан \"Tutsi\" сделает Вас неотразимой. Сарафан свободного кроя, что позволяет скрыть все маленькие недостатки фигуры. Ткань экозамша на хлопковой основе приятна на ощупь и чрезвычайно практична. По полочке накладной карман с гравировкой. Гольф не в комплекте.\n\nДлина сарафана по спинке - 73 см\n\nДлина сарафана по полочке - 66 см\n\nДлина бретели - 53 см"
//                             },
//                             "cost": "790",
//                             "cost-opt": "395",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7f4293575dc288d.jpg",
//                                 "https://fashionup.ua/uploads/tov/9a42d5bcf3482e2.jpg",
//                                 "https://fashionup.ua/uploads/tov/29935346a291842.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "марсала",
//                             "cloth": "экозамша: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3972-sarafan-quottutsiquot-srf-1645c.html",
//                             "id": "3972",
//                             "title": "Сарафан \"Tutsi\"",
//                             "articul": "SRF-1645C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный сарафан \"Tutsi\" сделает Вас неотразимой. Сарафан свободного кроя, что позволяет скрыть все маленькие недостатки фигуры. Ткань экозамша на хлопковой основе приятна на ощупь и чрезвычайно практична. По полочке накладной карман с гравировкой. Гольф не в комплекте.\n\nДлина сарафана по спинке - 73 см\n\nДлина сарафана по полочке - 66 см\n\nДлина бретели - 53 см"
//                             },
//                             "cost": "790",
//                             "cost-opt": "395",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3b39cf55e85cb38.jpg",
//                                 "https://fashionup.ua/uploads/tov/2b9071ec94be7a0.jpg",
//                                 "https://fashionup.ua/uploads/tov/c6a51a070cc65fc.jpg",
//                                 "https://fashionup.ua/uploads/tov/9a8d09183318e21.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий",
//                             "cloth": "эко-замш: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3971-sarafan-quottutsiquot-srf-1645b.html",
//                             "id": "3971",
//                             "title": "Сарафан \"Tutsi\"",
//                             "articul": "SRF-1645B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный сарафан \"Tutsi\" сделает Вас неотразимой. Сарафан свободного кроя, что позволяет скрыть все маленькие недостатки фигуры. Ткань экозамша на хлопковой основе приятна на ощупь и чрезвычайно практична. По полочке накладной карман с гравировкой. Гольф не в комплекте.\n\nДлина сарафана по спинке - 73 см\n\nДлина сарафана по полочке - 66 см\n\nДлина бретели - 53 см"
//                             },
//                             "cost": "790",
//                             "cost-opt": "395",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9f6938b1f483dfa.jpg",
//                                 "https://fashionup.ua/uploads/tov/93441054a9d17f4.jpg",
//                                 "https://fashionup.ua/uploads/tov/cad008d7002d57f.jpg",
//                                 "https://fashionup.ua/uploads/tov/e0057f6b7e09124.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "пудровый",
//                             "cloth": "экозамша: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3970-sarafan-quottutsiquot-srf-1645a.html",
//                             "id": "3970",
//                             "title": "Сарафан \"Tutsi\"",
//                             "articul": "SRF-1645A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Стильный сарафан \"Tutsi\" сделает Вас неотразимой. Сарафан свободного кроя, что позволяет скрыть все маленькие недостатки фигуры. Ткань экозамша на хлопковой основе приятна на ощупь и чрезвычайно практична. По полочке накладной карман с гравировкой. Гольф не в комплекте.\n\nДлина сарафана по спинке - 73 см\n\nДлина сарафана по полочке - 66 см\n\nДлина бретели - 53 см"
//                             },
//                             "cost": "790",
//                             "cost-opt": "395",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/62557c00d431c18.jpg",
//                                 "https://fashionup.ua/uploads/tov/9490fe1ae633e59.jpg",
//                                 "https://fashionup.ua/uploads/tov/f6989bc08f3faf0.jpg",
//                                 "https://fashionup.ua/uploads/tov/fcb7c9e7d124122.jpg"
//                             ],
//                             "sizes": "44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-зеленый",
//                             "cloth": "экозамша: 100% полиэстер,100% хлопковая основа"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3931-bluza-quotveronaquot-bz-1640c.html",
//                             "id": "3931",
//                             "title": "Блуза \"Verona\"",
//                             "articul": "BZ-1640C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке 73 см.\n\nКокетка по спинке и по полочке - сетка софт."
//                             },
//                             "cost": "492",
//                             "cost-opt": "246",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/c978edffc3c7ca7.jpg",
//                                 "https://fashionup.ua/uploads/tov/065fe7ec39f42dc.jpg"
//                             ],
//                             "sizes": "42-44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; сетка с бархатным напылением"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3927-bluza-quotveronaquot-bz-1640b.html",
//                             "id": "3927",
//                             "title": "Блуза \"Verona\"",
//                             "articul": "BZ-1640B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке 73 см.\n\nКокетка по спинке и по полочке - сетка софт."
//                             },
//                             "cost": "492",
//                             "cost-opt": "246",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3df7536d29f0939.jpg",
//                                 "https://fashionup.ua/uploads/tov/b413333f93302a9.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; сетка с бархатным напылением"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3926-bluza-quotveronaquot-bz-1640a.html",
//                             "id": "3926",
//                             "title": "Блуза \"Verona\"",
//                             "articul": "BZ-1640A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке 73 см.\n\nКокетка по спинке и по полочке - сетка софт."
//                             },
//                             "cost": "492",
//                             "cost-opt": "246",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a816a73c87fe19e.jpg",
//                                 "https://fashionup.ua/uploads/tov/56337aaa6ddb7de.jpg"
//                             ],
//                             "sizes": "42-44,46-48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан; сетка с бархатным напылением"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3923-bluza-quothiloryquot-bz-1625e.html",
//                             "id": "3923",
//                             "title": "Блуза \"Hilory\"",
//                             "articul": "BZ-1625E",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 61 см\n\nНа шее застегивается на пуговицу."
//                             },
//                             "cost": "474",
//                             "cost-opt": "237",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a41063f9c862452.jpg",
//                                 "https://fashionup.ua/uploads/tov/c7986690f89df89.jpg"
//                             ],
//                             "sizes": "42,44,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3921-bluza-quothiloryquot-bz-1625c.html",
//                             "id": "3921",
//                             "title": "Блуза \"Hilory\"",
//                             "articul": "BZ-1625C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 61 см\n\nНа шее застегивается на пуговицу."
//                             },
//                             "cost": "474",
//                             "cost-opt": "237",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3149360fb19c463.jpg",
//                                 "https://fashionup.ua/uploads/tov/25a0ec83e560175.jpg"
//                             ],
//                             "sizes": "42,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3919-bluza-quothiloryquot-bz-1625a.html",
//                             "id": "3919",
//                             "title": "Блуза \"Hilory\"",
//                             "articul": "BZ-1625A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 61 см\n\nНа шее застегивается на пуговицу."
//                             },
//                             "cost": "474",
//                             "cost-opt": "237",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f673a0ad7d92b07.jpg",
//                                 "https://fashionup.ua/uploads/tov/48cea77b478a3f9.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3855-futbolka-quotladaquot-fb-1610i.html",
//                             "id": "3855",
//                             "title": "Футболка \"Lada\"",
//                             "articul": "FB-1610I",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина футболки по спинке - 64 см\n\nШирина плеча - 21 см"
//                             },
//                             "cost": "390",
//                             "cost-opt": "195",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2f9e409b1fd66b3.jpg",
//                                 "https://fashionup.ua/uploads/tov/b549f5ab6ca02f6.jpg"
//                             ],
//                             "sizes": "50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "орхидеи на красном,молоко",
//                             "cloth": "софт Ниагара: 55%шелк, 40%полиэстер, 5%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3850-futbolka-quotladaquot-fb-1610f2.html",
//                             "id": "3850",
//                             "title": "Футболка \"Lada\"",
//                             "articul": "FB-1610F2",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина футболки по спинке - 64 см\n\nШирина плеча - 21 см"
//                             },
//                             "cost": "390",
//                             "cost-opt": "195",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a56a8ce828fbee7.jpg",
//                                 "https://fashionup.ua/uploads/tov/959e0164ccce5f4.jpg"
//                             ],
//                             "sizes": "50,52,54,56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "цветы яблони на красном,белый",
//                             "cloth": "софт Ниагара: 55%шелк, 40%полиэстер, 5%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3845-plate-quotoliviaquot-pl-1618a.html",
//                             "id": "3845",
//                             "title": "Платье \"Olivia\"",
//                             "articul": "PL-1618A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья от плечевого шва - 89 см\n\nДлина изделия по спинке - 65 см\n\nПо спинке потайная молния - 50 см"
//                             },
//                             "cost": "636",
//                             "cost-opt": "318",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/866dadaf9770490.jpg",
//                                 "https://fashionup.ua/uploads/tov/5e27d58e97ed545.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3844-plate-quotoliviaquot-pl-1618b.html",
//                             "id": "3844",
//                             "title": "Платье \"Olivia\"",
//                             "articul": "PL-1618B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья от плечевого шва - 89 см\n\nДлина изделия по спинке - 65 см\n\nПо спинке потайная молния - 50 см"
//                             },
//                             "cost": "636",
//                             "cost-opt": "318",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/98ba46dff777c0d.jpg",
//                                 "https://fashionup.ua/uploads/tov/85d89773c1865ef.jpg",
//                                 "https://fashionup.ua/uploads/tov/4c1210b4003b932.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3835-plate-quotcarolinequot-pl-1617c.html",
//                             "id": "3835",
//                             "title": "Платье \"Caroline\"",
//                             "articul": "PL-1617C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья по спинке - 87 см\n\nДлина рукава - 28 см"
//                             },
//                             "cost": "590",
//                             "cost-opt": "295",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d14500529d27759.jpg",
//                                 "https://fashionup.ua/uploads/tov/160fcc94e5f6723.jpg",
//                                 "https://fashionup.ua/uploads/tov/888943a10be1adf.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "персиковый",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3766-plate-quotameliequot-pl-1592d.html",
//                             "id": "3766",
//                             "title": "Платье \"Amelie\"",
//                             "articul": "PL-1592D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 90 см\n\nДлина рукава - 48 см"
//                             },
//                             "cost": "622",
//                             "cost-opt": "311",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3de969ba206341f.jpg",
//                                 "https://fashionup.ua/uploads/tov/04cfb11da68c217.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3764-plate-quotalexandraquot-pl-1596b.html",
//                             "id": "3764",
//                             "title": "Платье \"Alexandra\"",
//                             "articul": "PL-1596B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по переду - 84 см\n\nДлина по спинке - 67 см\n\nДлина рукава - 20 см, рукав реглан"
//                             },
//                             "cost": "608",
//                             "cost-opt": "304",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bb8d15158934e95.jpg",
//                                 "https://fashionup.ua/uploads/tov/7dbc27f83b4dd44.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "марсала",
//                             "cloth": "джерси: 85% вискоза, 15%эластан; сетка с бархатным напылением"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3755-plate-quotvaleriequot-pl-1599c.html",
//                             "id": "3755",
//                             "title": "Платье \"Valerie\"",
//                             "articul": "PL-1599C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья по спинке - 80 см\n\nДлина рукава - 61 см\n\nПо спинке молния 50 см"
//                             },
//                             "cost": "658",
//                             "cost-opt": "329",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/a0f42416b9d6bb8.jpg",
//                                 "https://fashionup.ua/uploads/tov/fe9a932b68fea76.jpg",
//                                 "https://fashionup.ua/uploads/tov/e56c562387a5a86.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "джерси: 85% вискоза, 15%эластан; гипюр"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3754-plate-quotvaleriequot-pl-1599b.html",
//                             "id": "3754",
//                             "title": "Платье \"Valerie\"",
//                             "articul": "PL-1599B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина платья по спинке - 80 см\n\nДлина рукава - 61 см\n\nПо спинке молния 50 см"
//                             },
//                             "cost": "658",
//                             "cost-opt": "329",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8c2850c75ad8191.jpg",
//                                 "https://fashionup.ua/uploads/tov/c158faa9d8a7d50.jpg",
//                                 "https://fashionup.ua/uploads/tov/b9fec8c012d7895.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "джерси: 85% вискоза, 15%эластан; гипюр"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3743-plate-quotameliequot-pl-1592b.html",
//                             "id": "3743",
//                             "title": "Платье \"Amelie\"",
//                             "articul": "PL-1592B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 90 см\n\nДлина рукава - 48 см"
//                             },
//                             "cost": "622",
//                             "cost-opt": "311",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/63d7d406d657a8e.jpg",
//                                 "https://fashionup.ua/uploads/tov/296b426f2b34f29.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3742-plate-quotameliequot-pl-1592a.html",
//                             "id": "3742",
//                             "title": "Платье \"Amelie\"",
//                             "articul": "PL-1592A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели на фото - 170 см\n\nДлина по спинке - 90 см\n\nДлина рукава - 48 см"
//                             },
//                             "cost": "622",
//                             "cost-opt": "311",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/680cf223be40d76.jpg",
//                                 "https://fashionup.ua/uploads/tov/df0312a2f5261fe.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "джерси: 85% вискоза, 15%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3715-svitshot-quotcottonquot-kf-1589c.html",
//                             "id": "3715",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1589C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3b62b4be1f1bcbd.jpg",
//                                 "https://fashionup.ua/uploads/tov/9b07ab0e9ed06c0.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Лилии, светло-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3713-svitshot-quotcottonquot-kf-1587c.html",
//                             "id": "3713",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1587C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9078720739bea46.jpg",
//                                 "https://fashionup.ua/uploads/tov/d614571c6fcb3b9.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Фламинго, светло-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3712-svitshot-quotcottonquot-kf-1586c.html",
//                             "id": "3712",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1586C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7b01e25ed2ed653.jpg",
//                                 "https://fashionup.ua/uploads/tov/054498efec3aeda.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Зонт, светло-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3710-svitshot-quotcottonquot-kf-1584c.html",
//                             "id": "3710",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1584C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/2f369c0dd06007f.jpg",
//                                 "https://fashionup.ua/uploads/tov/12cda070678c351.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Маки, светло-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3709-svitshot-quotcottonquot-kf-1583c.html",
//                             "id": "3709",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1583C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/50bb1ce53adb725.jpg",
//                                 "https://fashionup.ua/uploads/tov/ce03272da071a69.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Розовые цветы, темно-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3708-svitshot-quotcottonquot-kf-1582c.html",
//                             "id": "3708",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1582C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/21071bc8b77fb3d.jpg",
//                                 "https://fashionup.ua/uploads/tov/454cc02e072e743.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "I love vintage, светло-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3707-svitshot-quotcottonquot-kf-1581c.html",
//                             "id": "3707",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1581C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/54902f4ee69c186.jpg",
//                                 "https://fashionup.ua/uploads/tov/a3e2d6515b719b3.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Trippy style, светло-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3704-svitshot-quotcottonquot-kf-1578c.html",
//                             "id": "3704",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1578C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 61 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/4cbe2bd6f516645.jpg",
//                                 "https://fashionup.ua/uploads/tov/4a9b802073861e5.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Розовые цветы, светло-серый",
//                             "cloth": "двунитка: 80%хлопок, 20%полиэстер; дайвинг:65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3618-yubka-yub-1051-yub-1051c.html",
//                             "id": "3618",
//                             "title": "Юбка YUB-1051",
//                             "articul": "YUB-1051C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка-карандаш придаст Вашему образу особый шик и элегантность. Юбка с завышенной талией и на широкой кокетке (29 см) спереди застегивается на 10 пуговиц. \n\nРост модели - 170 см\n\nДлина юбки - 64 см\n\nВысота разреза от последней пуговицы - 27 см\n\nПолуобхват по поясу - 36 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/0fce1316e83b9ab.jpg",
//                                 "https://fashionup.ua/uploads/tov/475c159bdc28e54.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3617-yubka-yub-1051-yub-1051b.html",
//                             "id": "3617",
//                             "title": "Юбка YUB-1051",
//                             "articul": "YUB-1051B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка-карандаш придаст Вашему образу особый шик и элегантность. Юбка с завышенной талией и на широкой кокетке (29 см) спереди застегивается на 10 пуговиц. \n\nРост модели - 170 см\n\nДлина юбки - 64 см\n\nВысота разреза от последней пуговицы - 27 см\n\nПолуобхват по поясу - 36 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bfee8ca63f5d2bc.jpg",
//                                 "https://fashionup.ua/uploads/tov/cc2071c918db2b4.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3616-yubka-yub-1051-yub-1051a.html",
//                             "id": "3616",
//                             "title": "Юбка YUB-1051",
//                             "articul": "YUB-1051A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Оригинальная юбка-карандаш придаст Вашему образу особый шик и элегантность. Юбка с завышенной талией и на широкой кокетке (29 см) спереди застегивается на 10 пуговиц. \n\nРост модели - 170 см\n\nДлина юбки - 64 см\n\nВысота разреза от последней пуговицы - 27 см\n\nПолуобхват по поясу - 36 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "538",
//                             "cost-opt": "269",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/1d0d458490f6ae5.jpg",
//                                 "https://fashionup.ua/uploads/tov/242ffc840b909ab.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3499-plate-quottriksiquot-pl-1517b.html",
//                             "id": "3499",
//                             "title": "Платье \"Трикси\"",
//                             "articul": "PL-1517B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 100 см\n\nДлина рукава - 63 см"
//                             },
//                             "cost": "676",
//                             "cost-opt": "338",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/8602df19f67bcf7.jpg",
//                                 "https://fashionup.ua/uploads/tov/329b2e09a72a8cc.jpg",
//                                 "https://fashionup.ua/uploads/tov/387dbf96ea1a8f2.jpg",
//                                 "https://fashionup.ua/uploads/tov/79f910d3e1ac512.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "французский трикотаж: 60%котон, 20%вискоза, 10%полиэстр,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3458-yubka-yub-1052-yub-1052c.html",
//                             "id": "3458",
//                             "title": "Юбка YUB-1052",
//                             "articul": "YUB-1052C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка - карандаш должна быть в гардеробе каждой девушки. Юбка придаст Вашему образу особый шарм и элегантность. Сзади потайная молния - 17 см и шлица - 14 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 56 см\n\nПолуобхват по поясу - 33 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "448",
//                             "cost-opt": "224",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b51f9e74e4b910f.jpg",
//                                 "https://fashionup.ua/uploads/tov/88e76482ca98550.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48), 2XL (50), 3XL (52)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Bordeaux/Бордо",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3435-bluza-quotmichellequot-bz-1456g.html",
//                             "id": "3435",
//                             "title": "Блуза \"Michelle\"",
//                             "articul": "BZ-1456G",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7e236fe9f11a324.jpg",
//                                 "https://fashionup.ua/uploads/tov/637b5665ea0d508.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3434-bluza-quotmichellequot-bz-1456f.html",
//                             "id": "3434",
//                             "title": "Блуза \"Michelle\"",
//                             "articul": "BZ-1456F",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e57b3d8266f5fa3.jpg",
//                                 "https://fashionup.ua/uploads/tov/806b7ef8a88c13b.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "ментол",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3378-futbolka-quotclassicquot-fb-1475c.html",
//                             "id": "3378",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1475C",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Рост модели - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/92033addeca83a5.jpg",
//                                 "https://fashionup.ua/uploads/tov/b0a6da56b7abc5a.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный, Blueberry",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3274-bluza-quotmichellequot-bz-1456e.html",
//                             "id": "3274",
//                             "title": "Блуза \"Michelle\"",
//                             "articul": "BZ-1456E",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/665a8548edc32a6.jpg",
//                                 "https://fashionup.ua/uploads/tov/c775d24347ea319.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3273-bluza-quotmichellequot-bz-1456d.html",
//                             "id": "3273",
//                             "title": "Блуза \"Michelle\"",
//                             "articul": "BZ-1456D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e0101f6342df79e.jpg",
//                                 "https://fashionup.ua/uploads/tov/9abd4b71e397ae2.jpg"
//                             ],
//                             "sizes": "42,44,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3272-bluza-quotmichellequot-bz-1456c.html",
//                             "id": "3272",
//                             "title": "Блуза \"Michelle\"",
//                             "articul": "BZ-1456C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/082a31c373e9eb3.jpg",
//                                 "https://fashionup.ua/uploads/tov/c71e0c799f059a4.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "изумрудный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3271-bluza-quotmichellequot-bz-1456b.html",
//                             "id": "3271",
//                             "title": "Блуза \"Michelle\"",
//                             "articul": "BZ-1456B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/dc2804c305c76cc.jpg",
//                                 "https://fashionup.ua/uploads/tov/2b299c99ac0e61e.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3270-bluza-quotmichellequot-bz-1456a.html",
//                             "id": "3270",
//                             "title": "Блуза \"Michelle\"",
//                             "articul": "BZ-1456A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по полочке - 58 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "534",
//                             "cost-opt": "267",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b2cd31dd396ee62.jpg",
//                                 "https://fashionup.ua/uploads/tov/7a5738a9e604c0c.jpg"
//                             ],
//                             "sizes": "42,44,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "креп-шифон: 45% вискоза, 45% полиэстер,10%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3269-futbolka-quotclassicquot-fb-1308x.html",
//                             "id": "3269",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1308X",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Рост модели - 170 см\n\nДлина футболки - 60 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6c97ad087180523.jpg",
//                                 "https://fashionup.ua/uploads/tov/51f16d8b4280806.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, колибри принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3222-futbolka-quotairquot-fb-1346s.html",
//                             "id": "3222",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1346S",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bd5a6a11a9a7e86.jpg",
//                                 "https://fashionup.ua/uploads/tov/d0fcfd79fadda0e.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, пионы принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3220-futbolka-quotairquot-fb-1346q.html",
//                             "id": "3220",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1346Q",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/892530ded8eee89.jpg",
//                                 "https://fashionup.ua/uploads/tov/b37b429b6db2bde.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, мотылек принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3218-futbolka-quotairquot-fb-1346o.html",
//                             "id": "3218",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1346O",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели - 170 см\n\nДлина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/061bc2aadfb50eb.jpg",
//                                 "https://fashionup.ua/uploads/tov/be0abfbb940162d.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, веточки орхидеи принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3044-svitshot-quotcottonquot-kf-1413c.html",
//                             "id": "3044",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1413C",
//                             "descr": "",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d8ac5cc2123f235.jpg",
//                                 "https://fashionup.ua/uploads/tov/290a497c7d4f7a2.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Love is all we need, светло-серый",
//                             "cloth": "100% хлопок; 65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3035-svitshot-quotcottonquot-kf-1402c.html",
//                             "id": "3035",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1402C",
//                             "descr": "",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/cf85fca76f1f352.jpg",
//                                 "https://fashionup.ua/uploads/tov/c3822636459b8ad.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "A little dog, светло-серый",
//                             "cloth": "100% хлопок; 65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3031-golf-quotbonoquot-kf-1391f.html",
//                             "id": "3031",
//                             "title": "Гольф \"Bono\"",
//                             "articul": "KF-1391F",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели -170 см\n\nДлина по спинке - 70 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/d61bf10ce4e8900.jpg",
//                             "sizes": "54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3030-golf-quotbonoquot-kf-1391e.html",
//                             "id": "3030",
//                             "title": "Гольф \"Bono\"",
//                             "articul": "KF-1391E",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели -170 см\n\nДлина по спинке - 70 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/99eda40d8b89d77.jpg",
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "светло-серый",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3029-golf-quotbonoquot-kf-1391d.html",
//                             "id": "3029",
//                             "title": "Гольф \"Bono\"",
//                             "articul": "KF-1391D",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели -170 см\n\nДлина по спинке - 70 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/9a09ceea122de87.jpg",
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3028-golf-quotbonoquot-kf-1391c.html",
//                             "id": "3028",
//                             "title": "Гольф \"Bono\"",
//                             "articul": "KF-1391C",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели -170 см\n\nДлина по спинке - 70 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/0e25075cb3b4f5a.jpg",
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3027-golf-quotbonoquot-kf-1391b.html",
//                             "id": "3027",
//                             "title": "Гольф \"Bono\"",
//                             "articul": "KF-1391B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели -170 см\n\nДлина по спинке - 70 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/1f0423bec9317aa.jpg",
//                             "sizes": "42-44,46-48,50-52,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/3026-golf-quotbonoquot-kf-1391a.html",
//                             "id": "3026",
//                             "title": "Гольф \"Bono\"",
//                             "articul": "KF-1391A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Рост модели -170 см\n\nДлина по спинке - 70 см\n\nДлина рукава - 62 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/ad1b9cceff98db6.jpg",
//                             "sizes": "42-44,46-48,54-56",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-серый",
//                             "cloth": "100% вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2897-plate-quotbusinkaquot-pl-1357e.html",
//                             "id": "2897",
//                             "title": "Платье \"Бусинка\"",
//                             "articul": "PL-1357E",
//                             "descr": "Возможно изменение фурнитуры.",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b6e82be88d2b265.jpg",
//                                 "https://fashionup.ua/uploads/tov/5d31fa3f427aff6.jpg",
//                                 "https://fashionup.ua/uploads/tov/f2889a1baa1be2b.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "бежевый",
//                             "cloth": "18% вискоза, 77% полиэстер, 5% спандекс"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2877-svitshot-quotcottonquot-kf-1373c.html",
//                             "id": "2877",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1373C",
//                             "descr": "",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/95011081e40b4dd.jpg",
//                                 "https://fashionup.ua/uploads/tov/4daa2562531d1d0.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Balloons, светло-серый",
//                             "cloth": "100% хлопок; 65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2870-plate-quotbusinkaquot-pl-1357d.html",
//                             "id": "2870",
//                             "title": "Платье \"Бусинка\"",
//                             "articul": "PL-1357D",
//                             "descr": "Возможно изменение фурнитуры.",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e76c80e531453b1.jpg",
//                                 "https://fashionup.ua/uploads/tov/19bd68cdaf023e8.jpg",
//                                 "https://fashionup.ua/uploads/tov/94b20600814c19b.jpg"
//                             ],
//                             "sizes": "42,44,46,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "темно-синий",
//                             "cloth": "18% вискоза, 77% полиэстер, 5% спандекс"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2869-plate-quotbusinkaquot-pl-1357c.html",
//                             "id": "2869",
//                             "title": "Платье \"Бусинка\"",
//                             "articul": "PL-1357C",
//                             "descr": "Возможно изменение фурнитуры.",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e46dd1a3f00f3ae.jpg",
//                                 "https://fashionup.ua/uploads/tov/9b89a34f55b4dde.jpg",
//                                 "https://fashionup.ua/uploads/tov/a25bb6a11a0d929.jpg"
//                             ],
//                             "sizes": "42,44,46,52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "красный",
//                             "cloth": "18% вискоза, 77% полиэстер, 5% спандекс"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2868-plate-quotbusinkaquot-pl-1357b.html",
//                             "id": "2868",
//                             "title": "Платье \"Бусинка\"",
//                             "articul": "PL-1357B",
//                             "descr": "Возможно изменение фурнитуры.",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/807df80ce58c20d.jpg",
//                                 "https://fashionup.ua/uploads/tov/86ca9c4788e8ff2.jpg",
//                                 "https://fashionup.ua/uploads/tov/e0632b722e13d84.jpg"
//                             ],
//                             "sizes": "42,46,48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "черный",
//                             "cloth": "18% вискоза, 77% полиэстер, 5% спандекс"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2867-plate-quotbusinkaquot-pl-1357a.html",
//                             "id": "2867",
//                             "title": "Платье \"Бусинка\"",
//                             "articul": "PL-1357A",
//                             "descr": "Возможно изменение фурнитуры.",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d5c63a5bf317ed4.jpg",
//                                 "https://fashionup.ua/uploads/tov/000504f0ead8bd3.jpg",
//                                 "https://fashionup.ua/uploads/tov/a40added84f8e02.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "электрик",
//                             "cloth": "18% вискоза, 77% полиэстер, 5% спандекс"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2856-svitshot-quotcottonquot-kf-1381c.html",
//                             "id": "2856",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1381C",
//                             "descr": "",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d27a976c0a22598.jpg",
//                                 "https://fashionup.ua/uploads/tov/2556d8185f0474e.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Planet, светло-серый",
//                             "cloth": "100% хлопок; 65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2855-svitshot-quotcottonquot-kf-1371c.html",
//                             "id": "2855",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1371C",
//                             "descr": "",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/928d57578ef64aa.jpg",
//                                 "https://fashionup.ua/uploads/tov/c26914c41df871a.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Blueberry, темно-серый",
//                             "cloth": "100% хлопок; 65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2853-svitshot-quotcottonquot-kf-1370c.html",
//                             "id": "2853",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1370C",
//                             "descr": "",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/58ad5b8be315703.jpg",
//                                 "https://fashionup.ua/uploads/tov/12473ab3d428e98.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Nothing is impossible, темно-серый",
//                             "cloth": "100% хлопок; 65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2852-svitshot-quotcottonquot-kf-1383c.html",
//                             "id": "2852",
//                             "title": "Свитшот \"Cotton\"",
//                             "articul": "KF-1383C",
//                             "descr": "",
//                             "cost": "578",
//                             "cost-opt": "289",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/95a156678245ff7.jpg",
//                                 "https://fashionup.ua/uploads/tov/0b9c628e74de19b.jpg"
//                             ],
//                             "sizes": "42,44,46,48,50",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Велосипед, светло-серый",
//                             "cloth": "100% хлопок; 65% вискоза, 30% полиэстер, 5%эластан"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2834-yubka-yub-1052-yub-1052b.html",
//                             "id": "2834",
//                             "title": "Юбка YUB-1052",
//                             "articul": "YUB-1052B",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка - карандаш должна быть в гардеробе каждой девушки. Юбка придаст Вашему образу особый шарм и элегантность. Сзади потайная молния - 17 см и шлица - 14 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 56 см\n\nПолуобхват по поясу - 33 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "448",
//                             "cost-opt": "224",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6aa4e8b9b7b9201.jpg",
//                                 "https://fashionup.ua/uploads/tov/8a0e5868a713088.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48), 2XL (50), 3XL (52)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Dark blue/ Темно-синий",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2833-yubka-yub-1052-yub-1052a.html",
//                             "id": "2833",
//                             "title": "Юбка YUB-1052",
//                             "articul": "YUB-1052A",
//                             "descr": {
//                                 "br": [
//                                     "",
//                                     "",
//                                     "",
//                                     ""
//                                 ],
//                                 "__text": "Классическая юбка - карандаш должна быть в гардеробе каждой девушки. Юбка придаст Вашему образу особый шарм и элегантность. Сзади потайная молния - 17 см и шлица - 14 см.\n\nРост модели на фото - 170 см\n\nДлина юбки - 56 см\n\nПолуобхват по поясу - 33 см\n\nПолуобхват по бедрам - 45 см"
//                             },
//                             "cost": "448",
//                             "cost-opt": "224",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/ddd61fabd3aa621.jpg",
//                                 "https://fashionup.ua/uploads/tov/fdeb9fb522bded4.jpg"
//                             ],
//                             "sizes": "S (42), M (44), L (46), XL (48), 2XL (50), 3XL (52)",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "Black/Черный",
//                             "cloth": "коттон -мемори: 50%хлопок, 50% полиэстер"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2811-futbolka-quotairquot-fb-1346g1.html",
//                             "id": "2811",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1346G1",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Длина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3a07ed39abf2068.jpg",
//                                 "https://fashionup.ua/uploads/tov/84bf60013557dbe.jpg"
//                             ],
//                             "sizes": "42-44,46-48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, колибри принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2810-futbolka-quotairquot-fb-1346g.html",
//                             "id": "2810",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1346G",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Длина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/424c2dfe3d63e8c.jpg",
//                                 "https://fashionup.ua/uploads/tov/364e0fe7cb8e6fa.jpg"
//                             ],
//                             "sizes": "42-44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, колибри принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2802-futbolka-quotairquot-fb-1140x.html",
//                             "id": "2802",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1140X",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Длина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/e2fe5931b419bef.jpg",
//                                 "https://fashionup.ua/uploads/tov/fd61999749fd057.jpg"
//                             ],
//                             "sizes": "42-44,46-48,50-52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, тюльпаны принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2801-futbolka-quotairquot-fb-1346e1.html",
//                             "id": "2801",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1346E1",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Длина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9709aa81745dfcf.jpg",
//                                 "https://fashionup.ua/uploads/tov/e2b8453c46ff8a4.jpg"
//                             ],
//                             "sizes": "42-44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, лилии принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2798-futbolka-quotairquot-fb-1346d1.html",
//                             "id": "2798",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1346D1",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Длина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/29624152e1d577d.jpg",
//                                 "https://fashionup.ua/uploads/tov/5b4364fe4b7ab96.jpg"
//                             ],
//                             "sizes": "42-44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрый, пастельные розы принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2797-futbolka-quotairquot-fb-1140v.html",
//                             "id": "2797",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1140V",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Длина по спинке - 65 см\n\nДлина по переду - 55 см"
//                             },
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/b6a3367ea3b0964.jpg",
//                                 "https://fashionup.ua/uploads/tov/3336aab9b5306fe.jpg"
//                             ],
//                             "sizes": "42-44,46-48",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, сакура принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2790-futbolka-quotclassicquot-fb-1308u.html",
//                             "id": "2790",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1308U",
//                             "descr": {
//                                 "br": "",
//                                 "__text": "Длина по спинке - 60 см\n\nДлина по переду - 52 см"
//                             },
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/43bee7261096a4e.jpg",
//                                 "https://fashionup.ua/uploads/tov/36d5544559445da.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, дольче принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2733-futbolka-quotairquot-fb-1140r.html",
//                             "id": "2733",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1140R",
//                             "descr": "",
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/becde16e16f165c.jpg",
//                             "sizes": "42-44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, Ромашка принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2723-futbolka-quotairquot-fb-1140q.html",
//                             "id": "2723",
//                             "title": "Футболка \"Air\"",
//                             "articul": "FB-1140Q",
//                             "descr": "",
//                             "cost": "472",
//                             "cost-opt": "236",
//                             "poster": "https://fashionup.ua/uploads/tov/e91342cd022e895.jpg",
//                             "sizes": "50-52",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "молоко, Нежный цветочный принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2717-futbolka-quotclassicquot-fb-1308q.html",
//                             "id": "2717",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1308Q",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": "https://fashionup.ua/uploads/tov/55e8c54d0226ca9.jpg",
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый Духи DAISY принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2711-futbolka-quotclassicquot-fb-1308k.html",
//                             "id": "2711",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1308K",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": "https://fashionup.ua/uploads/tov/d2e2d03e36bf1c6.jpg",
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый CHICAGO принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2465-futbolka-quotclassicquot-fb-1308a.html",
//                             "id": "2465",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1308A",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7367731c79fb73b.jpg",
//                                 "https://fashionup.ua/uploads/tov/1e67bc87d60e610.jpg"
//                             ],
//                             "sizes": "44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый британский флаг принт",
//                             "cloth": "97%полиэстер, 3%эластан; 100%вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2119-futbolka-quotclassicquot-fb-1137y1.html",
//                             "id": "2119",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1137Y1",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/f1a2b6165ac23f7.jpg",
//                                 "https://fashionup.ua/uploads/tov/faf33871977c7ec.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, Indulgence принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2116-futbolka-quotclassicquot-fb-1137s1.html",
//                             "id": "2116",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1137S1",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/38f8956878e6221.jpg",
//                                 "https://fashionup.ua/uploads/tov/56902038c16c63d.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, ромашка принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2115-futbolka-quotclassicquot-fb-1137r.html",
//                             "id": "2115",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1137R",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d9660dc2b29d7fa.jpg",
//                                 "https://fashionup.ua/uploads/tov/09837892957418d.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, Painted Nation:девушка в очках принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2111-futbolka-quotclassicquot-fb-1137m1.html",
//                             "id": "2111",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1137M1",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/bde9ab246c8c494.jpg",
//                                 "https://fashionup.ua/uploads/tov/0f8d4ee9fc2c75d.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, абстракция цветы принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2099-futbolka-quotclassicquot-fb-1137e.html",
//                             "id": "2099",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1137E",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/65c828c02ce592a.jpg",
//                                 "https://fashionup.ua/uploads/tov/0967f07cc68200f.jpg"
//                             ],
//                             "sizes": "42",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, Монро принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2089-futbolka-quotclassicquot-fb-1133q1.html",
//                             "id": "2089",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133Q1",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/7aaacd6e3a3ae61.jpg",
//                                 "https://fashionup.ua/uploads/tov/9bedb709d10a083.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, 4 картинки принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2081-futbolka-quotclassicquot-fb-1137o1.html",
//                             "id": "2081",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1137O1",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": "https://fashionup.ua/uploads/tov/8765593f0b0fd66.jpg",
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, часы механизм принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/2077-futbolka-quotclassicquot-fb-1137e1.html",
//                             "id": "2077",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1137E1",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": "https://fashionup.ua/uploads/tov/71fe120c77da6d7.jpg",
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, Монро принт",
//                             "cloth": "креп шифон, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/1945-futbolka-quotclassicquot-fb-1133t.html",
//                             "id": "1945",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133T",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/27d400f4cc661c2.jpg",
//                                 "https://fashionup.ua/uploads/tov/5030965a3ddefbf.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, девочка с котиком принт",
//                             "cloth": "97% полиэстер, 3% эластан, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/1943-futbolka-quotclassicquot-fb-1133r.html",
//                             "id": "1943",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133R",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/3b59731c614ad64.jpg",
//                                 "https://fashionup.ua/uploads/tov/2aecf1de70c0ddc.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, акварель принт",
//                             "cloth": "97% полиэстер, 3% эластан, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/1942-futbolka-quotclassicquot-fb-1133q.html",
//                             "id": "1942",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133Q",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/6b9f6dd38c90133.jpg",
//                                 "https://fashionup.ua/uploads/tov/5af9e0a33cb4e9b.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, 4 картинки принт",
//                             "cloth": "97% полиэстер, 3% эластан, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/1932-futbolka-quotclassicquot-fb-1133g.html",
//                             "id": "1932",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133G",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/67e966350d2b302.jpg",
//                                 "https://fashionup.ua/uploads/tov/2327b531169a26f.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "белый, розовая машина и башня принт",
//                             "cloth": "97% полиэстер, 3% эластан, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/1931-futbolka-quotclassicquot-fb-1133f.html",
//                             "id": "1931",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133F",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9dabf64c134d3a2.jpg",
//                                 "https://fashionup.ua/uploads/tov/c9a9adf9fa14cf5.jpg"
//                             ],
//                             "sizes": "42,44",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, Love is принт",
//                             "cloth": "97% полиэстер, 3% эластан, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/1928-futbolka-quotclassicquot-fb-1133c.html",
//                             "id": "1928",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133C",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/d3334b3b16b9a91.jpg",
//                                 "https://fashionup.ua/uploads/tov/6a732b89e55c2cd.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, девушка в машине принт",
//                             "cloth": "97% полиэстер, 3% эластан, вискоза"
//                         },
//                         {
//                             "url": "https://fashionup.ua/fashion-up/1926-futbolka-quotclassicquot-fb-1133a.html",
//                             "id": "1926",
//                             "title": "Футболка \"Classic\"",
//                             "articul": "FB-1133A",
//                             "descr": "",
//                             "cost": "396",
//                             "cost-opt": "198",
//                             "poster": [
//                                 "https://fashionup.ua/uploads/tov/9662f7b29e413eb.jpg",
//                                 "https://fashionup.ua/uploads/tov/c5c7e07e9b4dc44.jpg"
//                             ],
//                             "sizes": "42,44,46",
//                             "category-id": "14",
//                             "category-name": "FashionUp",
//                             "color": "чёрный, We are the trend принт",
//                             "cloth": "97% полиэстер, 3% эластан, вискоза"
//                         }
//                     ]
//                 }
//             }
//           ],
//           cart: []
//         });
//       },

//   routes() {
//     this.namespace = "api";

//     this.get("/products", ({ db }) => {
//         return db.products;
//       });

//       this.get("/cart", ({ db }) => {
//         return db.cart;
//       });

//       this.post("/cart", (schema, request) => {
//         let product = JSON.parse(request.requestBody).data;
//         return schema.db.cart.insert(product);
//       });

//       this.delete("/cart/:id", (schema, request) => {
//         return schema.db.cart.remove(request.params.id);
//       });  
//   },

// //   routes() {
// //     this.namespace = "https://identitytoolkit.googleapis.com/v1/accounts";
// //   }
// });