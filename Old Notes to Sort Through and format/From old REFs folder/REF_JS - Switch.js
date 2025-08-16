let today = new Date().toLocaleString('default', { weekday: 'short' });

switch (true) {
  case today === 'Mon':
    console.log('Today is Monday');
    break;
  case today === 'Tue':
    console.log('Today is Tuesday');
    break;
  case today === 'Wed':
    console.log('Today is Wednesday');
    break;
  case today === 'Thu':
    console.log('Today is Thursday');
    break;
  case today === 'Fri':
    console.log('Today is Friday');
    break;
  case today === 'Sat':
    console.log('Today is Saturday');
    break;
  case today === 'Sun':
    console.log('Today is Sunday');
    break;
  default:
    console.log('Invalid Day');
}
