import { TradeObject, User } from '../types';

export const users: User[] = [
  {
    name: 'Компания1',
    higherTechStandards: false,
    devTime: '80',
    paymentConditions: '30%',
    cost: '1000000',
    guarantee: '24',
  },
  {
    name: 'Компания2',
    higherTechStandards: true,
    devTime: '120',
    paymentConditions: '50%',
    cost: '2000000',
    guarantee: '24',
  },
  {
    name: 'Компания3',
    higherTechStandards: false,
    devTime: '60',
    guarantee: '24',
    paymentConditions: '20%',
    cost: '1500000',
  },
  {
    name: 'Компания4',
    higherTechStandards: false,
    devTime: '200',
    paymentConditions: '10%',
    cost: '2000000',
    guarantee: '24',
  },
];

export const rowNames = [
  'Наличие комплекса мероприятий, повышающих станжарты качества изготовления',
  'Срок изготовления лота, дней',
  'Гарантийные обязательства, мес',
  'Условия оплаты',
  'Стоимость изготовления лота, руб (без НДС)',
];

export const tradeObject: TradeObject = {
  name: 'Лотос 123123',
  date: new Date(),
};

export const timerObject = { timestamp: new Date(), timeLimit: 120000 };
