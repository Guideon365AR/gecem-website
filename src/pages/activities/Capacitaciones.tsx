import React from 'react';
import { ArrowLeft, GraduationCap, Calendar, Clock, Users, Award } from 'lucide-react';

const Capacitaciones: React.FC = () => {
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
              <GraduationCap className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Capacitaciones</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Desarrollo de cursos, talleres y programas de formación para fortalecer competencias en gestión de calidad y mejora continua.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Qué son nuestras Capacitaciones?</h2>
            <p className="text-slate-600 mb-4">
              Las capacitaciones de GECEM son programas formativos diseñados para desarrollar y fortalecer las competencias del personal universitario en áreas clave como gestión de calidad, auditorías internas, mejora continua y sistemas de gestión.
            </p>
            <p className="text-slate-600">
              Nuestros programas combinan teoría y práctica, adaptándose a las necesidades específicas de cada área y nivel de experiencia de los participantes.
            </p>
          </div>

          {/* Current Programs */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Programas de Capacitación Actuales</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Fundamentos de Gestión de Calidad ISO 9001
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Curso introductorio sobre los principios y requisitos de la norma ISO 9001:2015, orientado a personal administrativo y de gestión.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-600" />
                        <span className="text-slate-600">20 horas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-600" />
                        <span className="text-slate-600">4 semanas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary-600" />
                        <span className="text-slate-600">Máx. 25 personas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary-600" />
                        <span className="text-slate-600">Certificado</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Disponible
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Contenido del Programa:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Introducción a los sistemas de gestión de calidad</li>
                    <li>• Principios de gestión de calidad según ISO 9001</li>
                    <li>• Estructura y requisitos de la norma</li>
                    <li>• Implementación práctica en el contexto universitario</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Auditorías Internas de Calidad
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Programa especializado para formar auditores internos capaces de evaluar y mejorar los sistemas de gestión de calidad.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-600">30 horas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-600">6 semanas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-600">Máx. 15 personas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-600">Certificado</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Próximamente
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Contenido del Programa:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Principios y tipos de auditorías</li>
                    <li>• Planificación y preparación de auditorías</li>
                    <li>• Técnicas de entrevista y recopilación de evidencias</li>
                    <li>• Elaboración de informes y seguimiento de acciones correctivas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Mejora Continua y Metodologías Lean
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Taller práctico sobre herramientas y técnicas de mejora continua, incluyendo metodologías Lean aplicadas al sector público.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-slate-600">16 horas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span className="text-slate-600">2 días intensivos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-slate-600">Máx. 20 personas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-slate-600">Certificado</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Disponible
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Contenido del Programa:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Filosofía Lean y principios de mejora continua</li>
                    <li>• Identificación y eliminación de desperdicios</li>
                    <li>• Herramientas de análisis: VSM, 5S, Kaizen</li>
                    <li>• Implementación de mejoras en procesos administrativos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Training Methodology */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Metodología de Capacitación</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Enfoque Pedagógico</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Aprendizaje Activo:</strong> Participación constante a través de ejercicios prácticos y casos reales
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Contextualización:</strong> Adaptación de contenidos al entorno universitario específico
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Trabajo Colaborativo:</strong> Dinámicas grupales que fomentan el intercambio de experiencias
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Recursos y Herramientas</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Material Didáctico:</strong> Manuales, guías prácticas y plantillas de trabajo
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Plataforma Virtual:</strong> Acceso a recursos adicionales y seguimiento post-capacitación
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Evaluación Continua:</strong> Seguimiento del progreso y retroalimentación personalizada
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instructors */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Nuestros Instructores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  CA
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Cintia Aragón</h3>
                  <p className="text-sm text-primary-600 mb-2">Magíster en Política y Gestión de la Educación Superior</p>
                  <p className="text-slate-600 text-sm">
                    Auditora interna ISO certificada por IRAM, especialista en implementación de sistemas de gestión de calidad en universidades.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  MS
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Mauricio Spilere</h3>
                  <p className="text-sm text-primary-600 mb-2">Lic. en Ciencia Política</p>
                  <p className="text-slate-600 text-sm">
                    Docente y coordinador académico con experiencia en gestión pública y mejora de procesos administrativos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-primary-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Beneficios de Nuestras Capacitaciones</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Desarrollo Profesional</h3>
                <p className="text-slate-600 text-sm">
                  Fortalecimiento de competencias técnicas y profesionales
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Certificación</h3>
                <p className="text-slate-600 text-sm">
                  Certificados reconocidos que validan los conocimientos adquiridos
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Networking</h3>
                <p className="text-slate-600 text-sm">
                  Conexión con profesionales de diferentes áreas de la universidad
                </p>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Interesado en nuestras capacitaciones?</h2>
            <p className="text-slate-600 mb-6">
              Consulta sobre nuestros próximos programas de capacitación y cómo inscribirte. También desarrollamos programas a medida según las necesidades específicas de tu área.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contacto" 
                className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Solicitar Información
              </a>
              <a 
                href="/#contacto" 
                className="bg-slate-200 text-slate-800 font-semibold px-8 py-3 rounded-lg hover:bg-slate-300 transition-colors"
              >
                Capacitación a Medida
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Capacitaciones;