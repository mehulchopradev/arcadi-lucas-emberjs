import { helper } from '@ember/component/helper';

export default helper(function capitalize(params/*, hash*/) {
  const text = params[0];
  if (text && text.length) {
    return `${text[0].toUpperCase()}${text.substring(1).toLowerCase()}`;
  }

  return '';
});
