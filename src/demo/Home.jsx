import React, { useState } from 'react';
import { Button, Input, TextArea, Badge, Card, Loader,DarkModeToggle} from '../components';

const Home = () => {
  return (
    <div className="flex flex-col gap-4 items-center h-screen bg-blue-200 w-full">
      <h1 className="text-xl font-bold text-blue-900">UI Components Demo</h1>
      <button className='border-2 border-red-500 pointer w-16'>button</button>
      <Card className='flex p4 gap-4 bg-red-500 border-2 border-blue-600'>
        <h2 className="text-lg font-semibold mb-2 text-white ">Buttons</h2>
        <Button onClick={() => alert('Primary Clicked!')}>Primary</Button>
        <Button className='bg-red-600 text-white border-2 border-blue-500 border'>Custom Red</Button>
      </Card>
      <Card className='flex flex-col gap-4'>
        <h2 className="text-lg font-semibold mb-2">Inputs</h2>
        <Input placeholder="Type something..."  className='rounded-xl'/>
        <TextArea placeholder="Multiline input..."  className='rounded-xl p2'/>
      </Card>
      <DarkModeToggle/>
      <Card>
        <h2 className="text-lg font-semibold mb-2">Badge</h2>
        <Badge>Active</Badge>
      </Card>

      <Card className='flex items-center flex-col '>
        <h2 className="text-lg font-semibold mb-2">Loader</h2>
        <Loader />
      </Card>
    </div>
  );
};


export default Home;