const $body = document.querySelector('body');
const $bulb = document.querySelector('#bulb');
if ($body === null || $bulb === null) throw Error('oops');
$bulb.addEventListener('click', () => {
  if ($bulb.className === 'light-off') {
    $bulb.className = 'light-on';
    $body.className = 'bg-light-on';
  } else {
    $bulb.className = 'light-off';
    $body.className = 'bg-light-off';
  }
});
