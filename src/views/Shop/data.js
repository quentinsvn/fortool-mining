import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Fortnite',
    description:
      'Acheter des skins depuis la boutique du jour du jeu Fortnite.',
    imageUrl: '/images/products/fortnite.png',
    min: 767 + ' Fortcoins',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'PayPal',
    description:
      'Demander un virement PayPal. Disponible uniquement pour les membres premiums',
    imageUrl: '/images/products/paypal.png',
    min: 2000 + ' Fortcoins',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Discord Nitro',
    description:
      'Profitez de fonctionnalités supplémentaires sur Discord grâce aux abonnements Discord Nitro !',
    imageUrl: '/images/products/discord.png',
    min: 2000 + ' Fortcoins',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Amazon',
    description:
      'Acheter ce qu\'il vous plaît parmi un nombreux choix d\'articles en ligne grâce aux codes cadeaux Amazon !',
    imageUrl: '/images/products/amazon.png',
    min: 2000 + ' Fortcoins',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'PaysafeCard',
    description:
      'Payer en ligne en toute sécurité sur les sites partenaires PaysafeCard',
    imageUrl: '/images/products/paysafecard.png',
    min: 4000 + ' Fortcoins',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'Fortcoins',
    description:
      'Achat de Fortcoins à utiliser sur le site pour vous ou pour offrir à un ami.',
    imageUrl: '/images/products/fortcoins.png',
    min: 1 + '€',
    createdAt: '04/04/2019'
  }
];
