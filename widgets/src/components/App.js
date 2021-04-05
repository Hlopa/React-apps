import React, { useState } from 'react';
import Accordion from './accordion';
import Search from './search';
import Dropdown from './dropdown';
import Translate from './translate';
import Route from './route';
import Header from './header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end js library'
  },
  {
    title: 'Why use React?',
    content: 'React allows developers to create large web applications that can change data, without reloading the page'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];


const dropdownList = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Pink',
    value: 'pink'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Black',
    value: 'black'
  },
  {
    label: 'Orange',
    value: 'orange'
  },
  {
    label: 'Green',
    value: 'green'
  },
];

const App = () => {
  const [selected, setselected] = useState(dropdownList[0]);

  return (
    <div>
      <Header/>
      <Route path='/' >
        <Accordion items={items} />
      </Route>
      <Route path='/list' >
        <Search />
      </Route>
      <Route path='/dropdown' >
        <Dropdown
          selected={selected}
          onSelectedChange={setselected}
          dropdownList={dropdownList}
        />
      </Route>
      <Route path='/translate' >
        <Translate />
      </Route>
    </div>
  )
}

export default App;