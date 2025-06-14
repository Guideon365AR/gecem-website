import React from 'react';
import { ArrowLeft, Calendar, Users, Clock, MapPin } from 'lucide-react';

const Reuniones: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center gap-4">
            <a 
              href="/#actividades" 
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a Actividades
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="bg-primary-100 text-primary-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Reuniones Periódicas</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Espacios dedicados para la discusión, intercambio de experiencias y construcción colaborativa de conocimiento.
            </p>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Qué son nuestras reuniones?</h2>
              <p className="text-slate-600 mb-4">
                Las reuniones periódicas de GECEM son encuentros regulares donde los miembros del grupo se reúnen para compartir experiencias, discutir casos de estudio y desarrollar estrategias de mejora continua.
              </p>
              <p className="text-slate-600">
                Estos espacios fomentan el aprendizaje colaborativo y permiten que cada participante contribuya con su expertise profesional para enriquecer el conocimiento colectivo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Objetivos</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Intercambiar experiencias profesionales
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Analizar casos prácticos de gestión de calidad
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Desarrollar estrategias de mejora continua
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Fortalecer la red de colaboración
                </li>
              </ul>
            </div>
          </div>

          {/* Meeting Details */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Detalles de las Reuniones</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-slate-800">Frecuencia</h3>
                  <p className="text-slate-600">Mensual</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-slate-800">Duración</h3>
                  <p className="text-slate-600">2-3 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-slate-800">Modalidad</h3>
                  <p className="text-slate-600">Presencial/Virtual</p>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Metodología</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">1. Presentación de Casos</h3>
                <p className="text-slate-600">Los miembros presentan casos reales de sus áreas de trabajo para análisis grupal.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">2. Discusión Colaborativa</h3>
                <p className="text-slate-600">Debate abierto donde cada participante aporta su perspectiva y experiencia.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">3. Desarrollo de Soluciones</h3>
                <p className="text-slate-600">Construcción conjunta de estrategias y planes de acción.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">4. Seguimiento</h3>
                <p className="text-slate-600">Evaluación de resultados y ajustes en reuniones posteriores.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Interesado en participar?</h2>
            <p className="text-slate-600 mb-6">
              Si trabajas en gestión de calidad o mejora continua y te interesa formar parte de nuestras reuniones, contáctanos.
            </p>
            <a 
              href="/#contacto" 
              className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block"
            >
              Contactar
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reuniones;