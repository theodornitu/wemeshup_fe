import Navbar from '../../components/Navbar'
import Placeholder from '../../components/Placeholder'
import Footer from '../../components/Footer'

import Image from 'next/image'

import part from '../../public/3dPrintedPart.jpeg'
import pyram from '../../public/piramida.jpg'


export default function Home() {
  return (
    <>
      <Navbar/>
      <Image className='w-9/12 m-auto' src={part} alt='3D Printed Parts' />
      <Placeholder pHolderText='Suntem un atelier creativ specializat pe printarea 3D, sculptarea, prelucrarea și debitarea laser a obiectelor personalizate. De asemenea, activitatea noastră se extinde și în domeniul designului de interior, cu înclinații puternice către scenografie.' pHolderTitle='Cine suntem noi?'/>
      <Image className='w-9/12 m-auto' src={pyram} alt='3D Printed Parts' />
      <Placeholder pHolderText='Nevoia de integrare a tehnologiilor open source în activitățile creative profesionale. Ne-am construit singuri primele imprimante 3D și, astfel, a început povestea noastră. Ideile creative au început să prindă viață pe vremea când toți eram încă studenți. Proiectul weMeshUP a debutat în 2015, în urma implementării cu succes, în mediul universitar, a numeroase proiecte realizate în colaborare cu diferite organizații studențești. Ghidați de simpla curiozitate de a crea proiecte personale de proiectare și design, am descoperit că publicul larg încă nu este la curent cu noile tehnologii de producție, cu toate că ne aflăm în pragul celei de-a patra revoluții industriale. Așa că ne-am propus ca atelierul nostru să devină un liant între oameni și aceste tehnologii.' pHolderTitle='Ce ne-a adus împreună?'/>
      <Footer/>
    </>
  )
}
