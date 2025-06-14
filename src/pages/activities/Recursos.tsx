import React from 'react';
import { ArrowLeft, HelpCircle, Download, BookOpen, FileText, Link } from 'lucide-react';

const Recursos: React.FC = () => {
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
              <HelpCircle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Intercambio de Recursos</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Compartimos materiales de aprendizaje, artículos especializados, herramientas y recursos útiles para la gestión de calidad.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Qué es el Intercambio de Recursos?</h2>
            <p className="text-slate-600 mb-4">
              El intercambio de recursos es una iniciativa colaborativa donde los miembros de GECEM comparten materiales, herramientas, documentos y conocimientos que pueden ser útiles para otros profesionales en el área de gestión de calidad y mejora continua.
            </p>
            <p className="text-slate-600">
              Esta biblioteca colaborativa incluye desde artículos académicos y guías prácticas hasta plantillas, checklist y herramientas de evaluación que facilitan la implementación de sistemas de gestión de calidad.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Categorías de Recursos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-slate-800">Bibliografía Especializada</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Artículos académicos, libros y publicaciones sobre gestión de calidad, auditorías y mejora continua.
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  25+ recursos disponibles
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-slate-800">Plantillas y Formularios</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Plantillas editables para auditorías, evaluaciones, planes de mejora y documentación de procesos.
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  15+ plantillas disponibles
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Link className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-slate-800">Herramientas Digitales</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Software, aplicaciones web y herramientas digitales útiles para la gestión de calidad y análisis de procesos.
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  10+ herramientas recomendadas
                </div>
              </div>
            </div>
          </div>

          {/* Featured Resources */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Recursos Destacados</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-primary-600" />
                      <h3 className="text-lg font-semibold text-slate-800">
                        Guía Práctica: Implementación ISO 9001 en Universidades
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">
                      Manual completo con pasos detallados para implementar sistemas de gestión de calidad ISO 9001 específicamente adaptado al contexto universitario.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>Tipo: PDF - 45 páginas</span>
                      <span>Actualizado: Febrero 2024</span>
                      <span>Compartido por: Cintia Aragón</span>
                    </div>
                  </div>
                  <button className="bg-primary-100 text-primary-600 p-2 rounded-lg hover:bg-primary-200 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      <h3 className="text-lg font-semibold text-slate-800">
                        Plantilla: Checklist de Auditoría Interna
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">
                      Checklist completo y personalizable para realizar auditorías internas de calidad en procesos administrativos y académicos.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>Tipo: Excel - Editable</span>
                      <span>Actualizado: Enero 2024</span>
                      <span>Compartido por: Romina Córdoba</span>
                    </div>
                  </div>
                  <button className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Link className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-800">
                        Herramienta: Calculadora de Indicadores de Gestión
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">
                      Aplicación web interactiva para calcular y visualizar indicadores clave de rendimiento (KPIs) en procesos administrativos.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>Tipo: Herramienta Web</span>
                      <span>Acceso: Gratuito</span>
                      <span>Recomendado por: Gustavo Núñez</span>
                    </div>
                  </div>
                  <button className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors">
                    <Link className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* How to Contribute */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">¿Cómo Contribuir?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Tipos de Recursos que Aceptamos</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Artículos y publicaciones académicas
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Plantillas y formularios editables
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Guías y manuales prácticos
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Herramientas y software recomendado
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Casos de estudio y ejemplos prácticos
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Proceso de Contribución</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <p className="text-slate-600 text-sm">Envía tu recurso por email con una breve descripción</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <p className="text-slate-600 text-sm">Nuestro equipo revisa la relevancia y calidad</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <p className="text-slate-600 text-sm">Se publica en la biblioteca con tu reconocimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Access Information */}
          <div className="bg-primary-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Acceso a los Recursos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Para Miembros de GECEM</h3>
                <p className="text-slate-600 text-sm">
                  Acceso completo a todos los recursos, incluyendo materiales exclusivos y herramientas premium.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Para la Comunidad UNR</h3>
                <p className="text-slate-600 text-sm">
                  Acceso a recursos públicos y posibilidad de solicitar acceso a materiales específicos.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Tienes recursos para compartir?</h2>
            <p className="text-slate-600 mb-6">
              Si tienes materiales, herramientas o conocimientos que puedan beneficiar a otros profesionales, nos encantaría incluirlos en nuestra biblioteca colaborativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contacto" 
                className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Compartir Recurso
              </a>
              <a 
                href="/#contacto" 
                className="bg-slate-200 text-slate-800 font-semibold px-8 py-3 rounded-lg hover:bg-slate-300 transition-colors"
              >
                Solicitar Acceso
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recursos;