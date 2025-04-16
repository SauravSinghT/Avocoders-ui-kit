# 🥑 Avocoders UI Library

    A modern, lightweight, and customizable React component library built with love for developers who crave aesthetics and flexibility.

## ✨ Features

- ⚡ Fast and responsive UI components
- 🌗 Built-in Dark Mode support
- 🎨 Utility-first CSS (Grid, Flex, Spacing, Typography, Positioning, Visibility, z-index, Font, Border, Background, Height-Width, )
- 💅 Customizable with your own styles
- 📦 Easy to integrate into any React and HTML projects

---

## 📦 Installation

```bash
npm install avocode-ui-library
```

## 🌍 CDN (For Vanilla JS/HTML Projects)
``` bash
<link href="https://cdn.jsdelivr.net/npm/avocode-ui-library/dist/assets/index-1y7S7Gk-.css" rel="stylesheet" />
```


## 🧩 Usage

import React from 'react'
import { Button, Badge, Card, Input, Loader, Textarea } from 'avocode-ui-library';
import 'avocode-ui-library/dist/assets/index-B053_CXX.css';


function App() {
  return (
    <Card title="Welcome">
      <p>This is a custom card using Avocoders UI Librayr.</p>
      <Button>Click Me</Button>
    </Card>
    <Badge text="New" color="green" />
    <Card title="Welcome" content="This is a simple card layout." />
    <Input placeholder="Enter your name..." />
    <Loader />
    <Textarea placeholder="Write your message..." rows={4} />   
  )
}


## 🌒 Dark Mode Toggle

import { DarkToggle } from 'avocode-ui-library'

function Header() {
  return <DarkToggle />
}


## 🤝 Contributing
We welcome contributions! Just fork the repo, make changes, and submit a pull request 💫


## 🛠 Built With
- React 19
- Vite
- Custom CSS Utility System


## 📜 License
MIT


---

Let me know if you want a logo, badges (like npm version, downloads), or want to break the README into sections like "Customizing Theme", “Component List”, etc!
