import './App.css';
import ClassComponent from './component/ClassComponent';
import FunctionComponent from './component/FunctionComponent';
import Greet from './component/Greet';
import Message from './component/message';
import Toggle from './component/Toggle';
import Counter from './component/Counter';
import FunctionClick from './component/functionClick';
import ClassClick from './component/classClick';
import EventBind from './component/evenBind';
import ParentComponent from './component/ParentComponent';
import NameList from './component/nameList';
import UserGreeting from './component/UserGreeting';

function App() {
  const email = 'miftahul@gmail.com';
  const subscriber = 2023;
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Toggle /> */}
        {/* <Greet name='Jhon' heroName='Superman'>
          {' '}
          <p>this is children paragraf</p>
        </Greet>
        <Greet name='Takpor' heroName=' Batman' />
        <Greet name='Jirayut' heroName='Spiderman' /> */}
        {/* <FunctionComponent user={user} email={email} subscriber={subscriber} /> */}
        {/* <ClassComponent user='Hadi' email='hadi@gmail.com' subscriber={2023} /> */}
      </header>
    </div>
  );
}

export default App;
