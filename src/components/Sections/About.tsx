import React from 'react';
import { Flame, Monitor, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const objectives = [
    {
      icon: Flame,
      title: 'Fomentar Cultura',
      description: 'Impulsar la mejora continua y la gestión de la calidad en nuestra organización.'
    },
    {
      icon: Monitor,
      title: 'Desarrollar Habilidades',
      description: 'Profundizar competencias para impulsar la excelencia en procesos y servicios.'
    },
    {
      icon: TrendingUp,
      title: 'Analizar Tendencias',
      description: 'Identificar innovaciones y avances para mantenernos actualizados y competitivos.'
    },
    {
      icon: Users,
      title: 'Crear Redes',
      description: 'Establecer una red de contactos para compartir recursos y conocimientos.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Sobre Nosotros */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              alt="Equipo multidisciplinario trabajando"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-slate-800">Sobre Nosotros</h2>
            <p className="mt-4 text-lg text-slate-600">
              Somos un equipo de gestión, administrativos y docentes de la Universidad Nacional de Rosario, 
              formados en carreras técnicas, universitarias y de posgrado.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              El GECEM está radicado en el{' '}
              <strong className="text-slate-800">Instituto de Investigaciones de la Facultad de Ciencia Política</strong>{' '}
              de la UNR.
            </p>
          </div>
        </div>
        
        {/* Objetivos */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Nuestros Objetivos</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={objective.title}
                className={`bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <objective.icon className="w-8 h-8" />
                </div>
                <h3 className="mt-4 font-bold text-lg text-slate-800">{objective.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;