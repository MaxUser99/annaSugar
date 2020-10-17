import React from 'react';
import Layout from '../../components/layout/faqLayout';
import ExpansionPanel from '../../components/expansionPanel/expansionPanel';

const data = [
  {
    title: 'Как забронировать консультацию?',
    text: `
      Для нашей встречи мы выбираем удобное время и дату. Подтверждение бронирования консультации происходит после предоплаты. Оплатить консультацию можно в течение 24 часов после оговоренной брони.
      По истечении 24 часов с момента бронирования и в случае неоплаты, выбранная дата для консультации аннулируется.
      В случае форс-мажора консультацию можно перенести, но не позднее чем за 2 суток до встречи.`
  },
  {
    title: 'qwteuir wtohklfg?',
    text: `
      Для нашей встречи мы выбираем удобное время и дату. Подтверждение бронирования консультации происходит после предоплаты. Оплатить консультацию можно в течение 24 часов после оговоренной брони.
      По истечении 24 часов с момента бронирования и в случае неоплаты, выбранная дата для консультации аннулируется.
      В случае форс-мажора консультацию можно перенести, но не позднее чем за 2 суток до встречи.`
  }
];

const Beads = () => (
  <Layout>
    {
      data.map(({ title, text }, i) => (
        <ExpansionPanel key={i} title={title} text={text} />
      ))
    }
  </Layout>
);

export default Beads;
