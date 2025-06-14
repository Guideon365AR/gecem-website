import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-white">
      <div className="container mx-auto px-4 lg:px-6 py-20 lg:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight animate-fade-in-up">
            Grupo de Estudios en{' '}
            <span className="text-primary-600">Gestión de la Calidad</span>{' '}
            y Mejora Continua
          </h1>
          <p className="mt-6 text-lg text-slate-600 animate-fade-in-up animation-delay-200">
            Compartimos conocimientos, experiencias y mejores prácticas para fomentar la excelencia en procesos y servicios.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#contacto"
              className="bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contáctanos
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#nosotros"
                className="bg-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-lg hover:bg-slate-300 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Conoce Más
              </a>
              <a
                href="#actividades"
                className="bg-primary-100 text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-primary-200 transition-all duration-300 transform hover:scale-105 text-center border border-primary-200"
              >
                Actividades
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block animate-fade-in-up animation-delay-400">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
            alt="Equipo GECEM trabajando en colaboración"
            className="rounded-lg shadow-xl mx-auto w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;