import React from 'react';
import { MessageCircle, Building, Video, HelpCircle, FileText, GraduationCap } from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    {
      icon: MessageCircle,
      title: 'Reuniones Periódicas',
      description: 'Espacios para la discusión y el intercambio de experiencias.',
      link: '/reuniones'
    },
    {
      icon: Building,
      title: 'Proyectos Colaborativos',
      description: 'Trabajos en grupo para aplicar conocimientos en proyectos reales.',
      link: '/proyectos'
    },
    {
      icon: Video,
      title: 'Jornadas con Expertos',
      description: 'Sesiones con invitados especialistas en gestión de la calidad.',
      link: '/jornadas'
    },
    {
      icon: HelpCircle,
      title: 'Intercambio de Recursos',
      description: 'Compartimos materiales de aprendizaje, artículos y herramientas.',
      link: '/recursos'
    },
    {
      icon: FileText,
      title: 'Análisis de Casos',
      description: 'Estudio de casos prácticos y ejemplos de éxito.',
      link: '/casos'
    },
    {
      icon: GraduationCap,
      title: 'Capacitaciones',
      description: 'Desarrollo de cursos y talleres para fortalecer competencias.',
      link: '/capacitaciones'
    }
  ];

  return (
    <section id="actividades" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800">Nuestras Actividades</h2>
          <p className="mt-4 text-lg text-slate-600">
            Participa en nuestras iniciativas diseñadas para compartir conocimiento y fomentar la colaboración.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <a
              key={activity.title}
              href={activity.link}
              className={`bg-white p-6 rounded-lg shadow flex items-start gap-4 hover:bg-primary-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up animation-delay-${(index + 1) * 100} group`}
            >
              <div className="text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <activity.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 group-hover:text-primary-700 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                <div className="mt-3 text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors duration-300">
                  Ver más →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;