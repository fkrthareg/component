import { useState } from 'react';
import './App.css';
import Firstcomponent from './component/firstcomponent';
import SecondComponent from './component/secondcomponent';
import ThirdComponent from './component/thirdcomponent';

function App() {
  const [num, getnum] = useState(0);
  const data = { name: "Osman Wako", department: "Computer Science", date: Date() };
  const changenumber = (val) => {
    getnum(p => p + val);
  }

  return (
    <main>
      <Firstcomponent addnum={changenumber} name="Osman" />
      <div>{num}</div>
      <SecondComponent minusnum={changenumber} />
      <ThirdComponent post={data} />
    </main>
  );
}

export default App;
