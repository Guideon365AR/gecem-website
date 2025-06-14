import React from 'react';
import { ArrowLeft, Building, Target, Users, CheckCircle } from 'lucide-react';

const Proyectos: React.FC = () => {
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
              <Building className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Proyectos Colaborativos</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trabajos en grupo para aplicar conocimientos teóricos en proyectos reales de gestión de calidad y mejora continua.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Qué son los Proyectos Colaborativos?</h2>
            <p className="text-slate-600 mb-4">
              Los proyectos colaborativos de GECEM son iniciativas donde los miembros del grupo trabajan juntos para abordar desafíos reales de gestión de calidad en diferentes áreas de la Universidad Nacional de Rosario.
            </p>
            <p className="text-slate-600">
              Estos proyectos permiten aplicar metodologías de mejora continua, implementar sistemas de gestión de calidad y desarrollar soluciones innovadoras que beneficien a toda la comunidad universitaria.
            </p>
          </div>

          {/* Current Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Proyectos Actuales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Sistema de Gestión Documental</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Implementación de un sistema integrado para la gestión y control de documentos administrativos en diferentes facultades.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary-600">
                  <CheckCircle className="w-4 h-4" />
                  En desarrollo - 70% completado
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Protocolo de Auditorías Internas</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Desarrollo de protocolos estandarizados para auditorías internas de calidad en procesos administrativos.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary-600">
                  <CheckCircle className="w-4 h-4" />
                  Fase de planificación
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Manual de Procesos Académicos</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Creación de manuales de procesos para estandarizar procedimientos académicos y administrativos.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Completado
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Indicadores de Gestión</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Desarrollo de un sistema de indicadores para medir la eficiencia de procesos administrativos.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary-600">
                  <CheckCircle className="w-4 h-4" />
                  En desarrollo - 40% completado
                </div>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Metodología de Trabajo</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Identificación de Necesidades</h3>
                  <p className="text-slate-600">Análisis de áreas que requieren mejoras en procesos de gestión de calidad.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Formación de Equipos</h3>
                  <p className="text-slate-600">Conformación de grupos multidisciplinarios según expertise y disponibilidad.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Planificación</h3>
                  <p className="text-slate-600">Definición de objetivos, cronograma, recursos necesarios y entregables.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Desarrollo</h3>
                  <p className="text-slate-600">Implementación del proyecto con reuniones de seguimiento regulares.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Evaluación y Mejora</h3>
                  <p className="text-slate-600">Análisis de resultados y implementación de mejoras continuas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Beneficios de Participar</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Para los Participantes</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Desarrollo de habilidades prácticas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Experiencia en trabajo colaborativo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Aplicación de conocimientos teóricos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Networking profesional
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Para la Universidad</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Mejora en procesos administrativos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Estandarización de procedimientos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Optimización de recursos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Cultura de mejora continua
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Tienes una idea de proyecto?</h2>
            <p className="text-slate-600 mb-6">
              Si identificas un área que podría beneficiarse de un proyecto de mejora continua, nos encantaría conocer tu propuesta.
            </p>
            <a 
              href="/#contacto" 
              className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block"
            >
              Proponer Proyecto
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Proyectos;