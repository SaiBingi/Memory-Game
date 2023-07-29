// Published URL  ==>  https://saiemojigameapp.ccbp.tech/

import {v4 as uuidv4} from 'uuid'

import MemoryGame from './components/MemoryGame'

import './App.css'

const flowersList = [
  {
    id: uuidv4(),
    flowerName: 'Hibiscus',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690617292/42a7fc8867107f4781d2e8d804d8eead_s8zqta.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Hibiscus',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690617292/42a7fc8867107f4781d2e8d804d8eead_s8zqta.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Violet',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690618809/ejdertqt4btcm6orp69l.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Violet',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690618809/ejdertqt4btcm6orp69l.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Rose',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619047/Single-red-rose_ngmh67.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Rose',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619047/Single-red-rose_ngmh67.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'White',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619169/White-Flower-in-Garden_qg77qw.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'White',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619169/White-Flower-in-Garden_qg77qw.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Yellow',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619389/images_m7luyq.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Yellow',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619389/images_m7luyq.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Green',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619471/green-flowers-green-gerber-daisy-1586803096_ndzfgv.jpg',
    isOpen: false,
  },
  {
    id: uuidv4(),
    flowerName: 'Green',
    flowerUrl:
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690619471/green-flowers-green-gerber-daisy-1586803096_ndzfgv.jpg',
    isOpen: false,
  },
]

const App = () => <MemoryGame flowersList={flowersList} />

export default App
