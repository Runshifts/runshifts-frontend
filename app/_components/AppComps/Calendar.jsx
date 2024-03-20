

'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker className='' defaultValue={'Calendar'} autoHide={false} />;
}


export default Component


// 'use client'

// import { useState } from 'react';
// import Calendar from 'react-calendar';

// // type ValuePiece = Date | null;

// // type Value = ValuePiece | [ValuePiece, ValuePiece];

// function MyCalendar() {
//   const [value, setValue] = useState();

//   return (
//     <div>
//       <Calendar onChange={setValue} value={value} />
//     </div>
//   );
// }

// export default MyCalendar