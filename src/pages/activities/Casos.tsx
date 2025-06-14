import React from 'react';
import { ArrowLeft, FileText, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

const Casos: React.FC = () => {
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
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Análisis de Casos</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Estudio detallado de casos prácticos, ejemplos de éxito y lecciones aprendidas en gestión de calidad y mejora continua.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Qué es el Análisis de Casos?</h2>
            <p className="text-slate-600 mb-4">
              El análisis de casos es una metodología de aprendizaje donde estudiamos situaciones reales de implementación de sistemas de gestión de calidad, tanto exitosas como desafiantes, para extraer lecciones valiosas y mejores prácticas.
            </p>
            <p className="text-slate-600">
              A través de estos estudios, los miembros de GECEM pueden aprender de experiencias concretas, identificar patrones de éxito y desarrollar estrategias más efectivas para sus propios contextos de trabajo.
            </p>
          </div>

          {/* Case Studies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Casos de Estudio Destacados</h2>
            <div className="space-y-6">
              {/* Case 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">
                        Implementación ISO 9001 en Facultad de Ingeniería
                      </h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Caso de Éxito
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Análisis del proceso de implementación del sistema de gestión de calidad ISO 9001:2015 en los procesos administrativos de la Facultad de Ingeniería de la UNR, logrando una reducción del 40% en tiempos de tramitación.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-800">Duración:</strong>
                        <p className="text-slate-600">18 meses</p>
                      </div>
                      <div>
                        <strong className="text-slate-800">Área:</strong>
                        <p className="text-slate-600">Gestión Administrativa</p>
                      </div>
                      <div>
                        <strong className="text-slate-800">Resultado:</strong>
                        <p className="text-slate-600">Certificación obtenida</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-800 mb-2">Factores Clave de Éxito:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Compromiso de la alta dirección desde el inicio</li>
                        <li>• Formación intensiva del personal involucrado</li>
                        <li>• Implementación gradual por procesos</li>
                        <li>• Comunicación constante con todos los stakeholders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">
                        Mejora Continua en Servicios Estudiantiles
                      </h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        Mejora Continua
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Implementación de metodología Kaizen en el área de servicios estudiantiles, resultando en una mejora significativa en la satisfacción del estudiante y optimización de procesos.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-800">Duración:</strong>
                        <p className="text-slate-600">12 meses</p>
                      </div>
                      <div>
                        <strong className="text-slate-800">Área:</strong>
                        <p className="text-slate-600">Servicios Estudiantiles</p>
                      </div>
                      <div>
                        <strong className="text-slate-800">Mejora:</strong>
                        <p className="text-slate-600">+35% satisfacción</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-800 mb-2">Estrategias Implementadas:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Mapeo detallado de procesos existentes</li>
                        <li>• Identificación de desperdicios y cuellos de botella</li>
                        <li>• Implementación de mejoras incrementales</li>
                        <li>• Sistema de feedback continuo con estudiantes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">
                        Desafíos en Implementación de SGC en Biblioteca Central
                      </h3>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        Lecciones Aprendidas
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Análisis de los desafíos enfrentados durante la implementación de un sistema de gestión de calidad en la Biblioteca Central, incluyendo resistencia al cambio y limitaciones de recursos.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-slate-800">Duración:</strong>
                        <p className="text-slate-600">24 meses</p>
                      </div>
                      <div>
                        <strong className="text-slate-800">Área:</strong>
                        <p className="text-slate-600">Servicios Bibliotecarios</p>
                      </div>
                      <div>
                        <strong className="text-slate-800">Estado:</strong>
                        <p className="text-slate-600">Replanificado</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-800 mb-2">Principales Desafíos:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Resistencia al cambio por parte del personal</li>
                        <li>• Limitaciones presupuestarias para capacitación</li>
                        <li>• Complejidad de procesos existentes</li>
                        <li>• Falta de herramientas tecnológicas adecuadas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Metodología de Análisis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Proceso de Estudio</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-slate-800">Selección del Caso</h4>
                      <p className="text-slate-600 text-sm">Identificación de casos relevantes y significativos</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-slate-800">Recopilación de Datos</h4>
                      <p className="text-slate-600 text-sm">Entrevistas, documentos y evidencias</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-slate-800">Análisis Colaborativo</h4>
                      <p className="text-slate-600 text-sm">Discusión grupal y análisis multidisciplinario</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-slate-800">Documentación</h4>
                      <p className="text-slate-600 text-sm">Registro de lecciones aprendidas y mejores prácticas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Elementos de Análisis</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Contexto organizacional y desafíos iniciales
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Estrategias y metodologías implementadas
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Factores críticos de éxito o fracaso
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Resultados obtenidos y métricas de impacto
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Lecciones aprendidas y recomendaciones
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    Aplicabilidad a otros contextos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-primary-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Beneficios del Análisis de Casos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Aprendizaje Práctico</h3>
                <p className="text-slate-600 text-sm">
                  Comprensión profunda de situaciones reales y sus soluciones
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Mejores Prácticas</h3>
                <p className="text-slate-600 text-sm">
                  Identificación de estrategias exitosas replicables
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Prevención de Errores</h3>
                <p className="text-slate-600 text-sm">
                  Anticipación de desafíos y preparación de soluciones
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Tienes un caso interesante para analizar?</h2>
            <p className="text-slate-600 mb-6">
              Si has vivido una experiencia significativa en gestión de calidad, ya sea exitosa o desafiante, nos interesa conocerla y analizarla colaborativamente.
            </p>
            <a 
              href="/#contacto" 
              className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block"
            >
              Proponer Caso de Estudio
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Casos;