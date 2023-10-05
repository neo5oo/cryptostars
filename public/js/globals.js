/* eslint-disable */
const html = (raw, ...values) => String.raw({ raw }, ...values);

function isDev() {
  return location.hostname === 'localhost';
}
