import React from 'react';
import Image from './components/Image';
import Section from './components/Section';

const App = () => {
  return (
    <div className='w-md m-auto lg:w-2/3 bg-gradient-to-br from-orange-100 via-orange-300 to-orange-500 p-4 lg:p-8'>
      <Section title="Toamna in Parc">
        <p>
          Toamna aduce frunze colorate, aer răcoros și plimbări liniștite în parc.
        </p>
      </Section>
      <div className='my-6 p-1 rounded-xl bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400'>
        <div className='rounded-lg overflow-hidden bg-white'>
          <Image />
        </div>
      </div>
      <Section title="Obiecte turistice recomandate Toamna">
        <ol className='text-start'>
          <li className='p-1 border border-dotted my-2'>Lacul Beleu (Rezervația „Prutul de Jos”)</li>
          <li className='p-1 border border-dotted my-2'>Muzeul de Istorie și Etnografie din Văleni</li>
          <li className='p-1 border border-dotted my-2'>Portul Internațional Liber Giurgiulești</li>
          <li className='p-1 border border-dotted my-2'>Stațiunea balneară „Nufărul Alb”, Cahul</li>
          <li className='p-1 border border-dotted my-2'>Parcurile și zonele de agrement din Cahul</li>
        </ol>
      </Section>
    </div>
  );
}

export default App;
