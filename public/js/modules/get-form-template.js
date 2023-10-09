// function getformTemplate() {
//   function paymentSystem() {
//     return html`<div class="modal__select-wrapper">
//       <div class="select">
//         <span>Плaтёжная система</span>
//         <select>
//           <option selected disabled>Выберите платёжную систему</option>
//           <option>CryptoEx</option>
//           <option>Первый криптобанк</option>
//           <option>BitTransfer</option>
//           <option>BMT Exchange</option>
//         </select>
//       </div>
//     </div>`;
//   }

//   return html`<form class="modal-buy" method="post">
//     <input type="hidden" name="type" value="BUY" />
//     <input type="hidden" name="contractorId" />
//     <input type="hidden" name="exchangeRate" />
//     <input type="hidden" name="sendingCurrency" />
//     <input type="hidden" name="receivingCurrency" />

//     <div class="transaction-info">
//       <p class="transaction-info__item transaction-info__item--name">
//         <span class="transaction-info__label">Пользователь</span>
//         <span class="transaction-info__data">
//           <svg width="20" height="20" aria-hidden="true">
//             <use xlink:href="#icon-star"></use>
//           </svg>
//           John Smith
//         </span>
//       </p>
//       <p class="transaction-info__item transaction-info__item--exchangerate">
//         <span class="transaction-info__label">Курс</span>
//         <span class="transaction-info__data">9 999 999&nbsp;₽</span>
//       </p>
//       <p class="transaction-info__item transaction-info__item--cashlimit">
//         <span class="transaction-info__label">Лимит</span>
//         <span class="transaction-info__data">9 999 999&nbsp;₽&nbsp;-&nbsp;9 999 999 000&nbsp;₽</span>
//       </p>
//     </div>
//     <div class="modal__container modal__container--small">
//       <div class="modal__input-wrapper modal__input-wrapper--min">
//         <div class="custom-input">
//           <label>
//             <span class="custom-input__label">Оплата</span>
//             <span class="custom-input__unit">₽</span>
//             <button class="btn btn--textblue custom-input__btn" type="button">обменять все</button>
//             <input type="number" value="" placeholder="0" />
//           </label>
//           <div class="custom-input__error">Минимальная сумма — 9 999 999 ₽</div>
//         </div>
//       </div>
//       <svg class="modal__container-svg" width="14" height="12" aria-hidden="true">
//         <use xlink:href="#icon-arrow-right"></use>
//       </svg>
//       <div class="modal__input-wrapper modal__input-wrapper--min">
//         <div class="custom-input">
//           <label>
//             <span class="custom-input__label">Зачисление</span>
//             <span class="custom-input__unit">KEKS</span>
//             <input type="number" placeholder="0" />
//           </label>
//         </div>
//       </div>
//     </div>
//     <div class="modal__container">
//     ${paymentSystem}
//       <div class="modal__input-wrapper modal__input-wrapper--decorated">
//         <div class="custom-input">
//           <label>
//             <span class="custom-input__label">Номер банковской карты пользователя</span>
//             <input type="number" placeholder="1234 5678 9012 3456" disabled />
//           </label>
//         </div>
//       </div>
//       <div class="modal__input-wrapper modal__input-wrapper--decorated">
//         <div class="custom-input">
//           <label>
//             <span class="custom-input__label">Номер криптокошелька пользователя</span>
//             <input type="number" placeholder="08701943851-9832345" disabled />
//           </label>
//         </div>
//       </div>
//       <div class="modal__input-wrapper modal__input-wrapper--decorated">
//         <div class="custom-input">
//           <label>
//             <span class="custom-input__label">Платёжный пароль</span>
//             <input type="password" value="123456" placeholder="Введите пароль" />
//           </label>
//         </div>
//       </div>
//       <button class="btn btn--green modal__submit" type="submit">Обменять</button>
//       <p class="modal__validation-message modal__validation-message--error">
//         <svg width="20" height="20" aria-hidden="true">
//           <use xlink:href="#icon-error"></use>
//         </svg>
//         Ошибка заполнения формы
//       </p>
//       <p class="modal__validation-message modal__validation-message--success">
//         <svg width="20" height="20" aria-hidden="true">
//           <use xlink:href="#icon-success"></use>
//         </svg>
//         Данные успешно отправлены
//       </p>
//     </div>
//   </form>`;
// }

// export {getformTemplate};
