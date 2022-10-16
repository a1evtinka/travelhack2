export const data = [
  {
    "id":1,
    "title": "Поездка на Приэльбрусье",
    "desc": 
    "Предлагаю поехать походить по пешеходным маршрутам в этих местах проходящих по сосновым лесам и живописным ущельям, украшенным ледниками и водопадами.",
    "startDate": new Date('October 10, 2022').toLocaleDateString(),
    "endDate": new Date('Novemver 1, 2022').toLocaleDateString(),
    "placeStart": "Москва",
    "placeEnd": "Нальчик",
    "image": "1.jpg",
    "hotel": {
      title: "Балкария",
      link: "/hotel/h1"
      },
    "leisure": [
      {title: "Путешествие к Эльбрусу и озеру Гижгит", link: "/leisures/leis1"},
      {title: "Два дня в Северном Приэльбрусье", link: "/leisures/leis2"},
      {title: "Загадочный Худесский лабиринт", link: "/leisures/leis3"},
        ],
    "type": 'Активный',
    "activity": ['горы', 'кавказ', 'хычины'],
    "likedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "price": 30000,
    "organizator": {organizatorName:'Jora',organizatorAva: '3.jpg', organizatorRating: 4.2},
    "participant": [{participantName: 'Igor', participantAva:'1.jpg'}, {participantName:'Katya', participantAva:'2.jpg'}]
  },
  {
    "id":2,
    "title": "Культурная программа в Санкт-Петербурге",
    "desc": 
    "Я мама с детишками, хочу объедениться с другими Родителями чтобы сводить своих отпрысков в культурные места Питера",
    "startDate": new Date('October 15, 2022').toLocaleDateString(),
    "endDate": new Date('Novemver 11, 2022').toLocaleDateString(),
    "placeStart": "Гондурас",
    "placeEnd": "Санкт-Петербург",
    "image": "2.jpg",
    "hotel": {
      title: "Гельвеция",
      link: "/hotel/h2"
      },
    "leisure": [
      {title: "Парадные залы Зимнего дворца, впечатляющие своим богатым убранством, а также экспозиции Старого и Нового Эрмитажа", link: "/leisures/leis4"},
      {title: "Петергоф и Кронштадт", link: "/leisures/leis5"},
      {title: "Петропавловская крепость для детей", link: "/leisures/leis6"},
        ],
    "type": 'c детьми',
    "activity": ['мосты', 'крыши', 'эрмитаж'],
    "likedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "price": 30000,
    "organizator": {organizatorName:'Марья Петровна',organizatorAva: '7.jpg', organizatorRating: 5.0},
    "participant": [{participantName:'Екатерина', participantAva:'3.jpg'}]
  },
  {
    "id": 1,
    "name": "Martin",
    "desc": "Prisoner at Federal Correctional Institution",
    "age": 35,
    "image": "2.jpg",
    "likedUsers": [],
    "activity": 'Женское',
    "superLikedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "placeStart": "Moscow",
    "price": 20000
  },
  {
    "id": 2,
    "name": "Emily",
    "desc": "Actress",
    "age": 35,
    "image": "3.jpg",
    "likedUsers": [],
    "superLikedUsers": [],
    "dislikedUsers": [],
    "activity": 'Женское',
    "likedBy": [],
    "price": 30000
  },
  {
    "id": 3,
    "name": "Michael",
    "desc": "Manager",
    "age": 45,
    "image": "4.jpg",
    "activity": 'Женское',
    "likedUsers": [],
    "superLikedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "price": 40000
  },
  {
    "id": 4,
    "name": "Dwight",
    "desc": "Sales",
    "age": 40,
    "image": "5.jpg",
    "likedUsers": [],
    "superLikedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "price": 50000
  },
  {
    "id": 5,
    "name": "Jessica",
    "desc": "Actress",
    "age": 37,
    "image": "6.jpg",
    "likedUsers": [],
    "superLikedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "price": 60000
  },
  {
    "id": 6,
    "name": "Alexandra",
    "desc": "Actress",
    "age": 32,
    "image": "7.jpg",
    "likedUsers": [],
    "superLikedUsers": [],
    "dislikedUsers": [],
    "likedBy": [],
    "price": 70000
  }
]
