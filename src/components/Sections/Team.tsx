import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mauricio Spilere',
      role: 'Coordinador',
      description: 'Lic. en Ciencia Política, Docente y Coordinador Académico. Alumno de la Maestría en Gestión Pública.',
      initials: 'MS',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Cintia Aragón',
      role: 'Co-Coordinadora',
      description: 'Magíster en Política y Gestión de la Educación Superior, auditora interna ISO. IRAM.',
      initials: 'CA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Romina Cordoba Moreno',
      role: 'Integrante',
      description: 'Lic. en Ciencia Política y Esp. en Política y Gestión de la Educación Superior. Auditora en la UNR.',
      initials: 'RC',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Griselda Ríos Artacho',
      role: 'Integrante',
      description: 'Técnica en Administración Pública y Responsable Administrativa en la Facultad de Cs. Bioquímicas.',
      initials: 'GR',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Gustavo Núñez',
      role: 'Integrante',
      description: 'Técnico en Administración Pública y responsable del Área de Gestión del Servicio de Resguardo Patrimonial UNR.',
      initials: 'GN',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Silvina Cazeneuve',
      role: 'Integrante',
      description: 'Técnica en Administración Pública, integrante de la Editorial UNR y formada en Norma ISO 9001:2008.',
      initials: 'SC',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="equipo" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800">Nuestro Equipo</h2>
          <p className="mt-4 text-lg text-slate-600">
            Conoce a los profesionales que impulsan la misión de GECEM.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-slate-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <img
                src={member.image}
                alt={`Foto de ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto shadow-lg -mt-16 border-4 border-white object-cover"
              />
              <h3 className="mt-4 font-bold text-xl text-slate-900">{member.name}</h3>
              <p className="text-sm font-semibold text-primary-600">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;