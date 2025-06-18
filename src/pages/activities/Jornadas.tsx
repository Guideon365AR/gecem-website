import React from 'react';
import { ArrowLeft, Video, Calendar, Users, Star } from 'lucide-react';

const Jornadas: React.FC = () => {
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
              <Video className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Ciclo de Entrevistas</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Sesiones especializadas con invitados expertos en gestión de la calidad, mejora continua y temas relacionados.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Qué es el Ciclo de Entrevistas?</h2>
            <p className="text-slate-600 mb-4">
              El Ciclo de Entrevistas es una serie de eventos especiales donde invitamos a profesionales reconocidos en el campo de la gestión de calidad, auditores certificados, consultores especializados y académicos destacados para compartir sus conocimientos y experiencias.
            </p>
            <p className="text-slate-600">
              Estos encuentros brindan la oportunidad de acceder a conocimiento especializado, conocer las últimas tendencias del sector y establecer contactos con referentes en el área.
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Próximas Entrevistas</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      "ISO 9001:2015 - Implementación Práctica en Universidades"
                    </h3>
                    <p className="text-slate-600 mb-2">
                      <strong>Entrevistado:</strong> Dra. María Elena Rodríguez - Auditora Líder ISO 9001
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        15 de Marzo, 2024
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Modalidad Híbrida
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Confirmada
                  </span>
                </div>
                <p className="text-slate-600 mb-4">
                  Entrevista práctica sobre la implementación de sistemas de gestión de calidad ISO 9001:2015 específicamente adaptados al contexto universitario.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      "Lean Management en Administración Pública"
                    </h3>
                    <p className="text-slate-600 mb-2">
                      <strong>Entrevistado:</strong> Mg. Carlos Fernández - Consultor en Mejora Continua
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        22 de Abril, 2024
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Presencial
                      </div>
                    </div>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    En planificación
                  </span>
                </div>
                <p className="text-slate-600 mb-4">
                  Aplicación de metodologías Lean para optimizar procesos administrativos y reducir desperdicios en el sector público.
                </p>
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Entrevistas Anteriores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    "Auditorías Internas Efectivas"
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Entrevistado:</strong> Lic. Ana Martínez - IRAM
                </p>
                <p className="text-slate-600 text-sm mb-3">Febrero 2024</p>
                <p className="text-slate-600 text-sm">
                  Técnicas y herramientas para realizar auditorías internas de calidad más efectivas y orientadas a la mejora.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    "Gestión por Procesos"
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Entrevistado:</strong> Dr. Roberto Silva - UBA
                </p>
                <p className="text-slate-600 text-sm mb-3">Enero 2024</p>
                <p className="text-slate-600 text-sm">
                  Fundamentos y aplicación práctica de la gestión por procesos en organizaciones públicas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    "Indicadores de Gestión"
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Entrevistado:</strong> Mg. Laura Pérez - UNLP
                </p>
                <p className="text-slate-600 text-sm mb-3">Diciembre 2023</p>
                <p className="text-slate-600 text-sm">
                  Diseño e implementación de sistemas de indicadores para medir la eficacia de procesos administrativos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    "Cultura de Calidad"
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Entrevistado:</strong> Lic. Miguel Torres - Consultor
                </p>
                <p className="text-slate-600 text-sm mb-3">Noviembre 2023</p>
                <p className="text-slate-600 text-sm">
                  Estrategias para desarrollar y mantener una cultura organizacional orientada a la calidad y mejora continua.
                </p>
              </div>
            </div>
          </div>

          {/* Format and Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Formato de las Entrevistas</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Entrevista en profundidad con el especialista (60-90 min)
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Sesión de preguntas y respuestas
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Casos prácticos y ejemplos reales
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Material de apoyo y recursos adicionales
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Networking y intercambio de contactos
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Beneficios</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Acceso a conocimiento especializado
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Actualización en tendencias del sector
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Contacto directo con expertos
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Certificado de participación
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  Ampliación de red profesional
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Quieres participar en nuestro ciclo de entrevistas?</h2>
            <p className="text-slate-600 mb-6">
              Mantente informado sobre nuestras próximas entrevistas con expertos y no te pierdas la oportunidad de aprender de los mejores.
            </p>
            <a 
              href="/#contacto" 
              className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jornadas;