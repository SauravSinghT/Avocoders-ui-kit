import React, { useState } from 'react';
import { Button, Input, TextArea, Badge, Card, Loader,DarkModeToggle} from '../components';

const Home = () => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <h1 className="text-xl font-bold">UI Components Demo</h1>

      <Card className='flex p4 bg-red-500'>
        <h2 className="text-lg font-semibold mb-2 text-red-500">Buttons</h2>
        <Button onClick={() => alert('Primary Clicked!')}>Primary</Button>
        <Button className="bg-orange-800">Custom Red</Button>
      </Card>
      <Card className='flex flex-col gap-4'>
        <h2 className="text-lg font-semibold mb-2">Inputs</h2>
        <Input placeholder="Type something..." />
        <TextArea placeholder="Multiline input..." />
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