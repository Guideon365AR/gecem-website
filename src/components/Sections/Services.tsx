import React from 'react';
import { Code, Palette, Smartphone, Globe, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y escalables utilizando las últimas tecnologías.',
      features: ['React & TypeScript', 'APIs RESTful', 'Bases de datos', 'Hosting en la nube']
    },
    {
      icon: Palette,
      title: 'Diseño UX/UI',
      description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
      features: ['Prototipado', 'Design Systems', 'Responsive Design', 'Accesibilidad']
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas y multiplataforma para iOS y Android.',
      features: ['React Native', 'Flutter', 'App Store', 'Push Notifications']
    },
    {
      icon: Globe,
      title: 'Consultoría Digital',
      description: 'Estrategias digitales personalizadas para transformar tu negocio.',
      features: ['Análisis de mercado', 'Roadmap tecnológico', 'Optimización', 'Escalabilidad']
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Protección integral de datos y sistemas con las mejores prácticas.',
      features: ['Auditorías', 'Encriptación', 'Compliance', 'Monitoreo 24/7']
    },
    {
      icon: Zap,
      title: 'Optimización',
      description: 'Mejora del rendimiento y velocidad de tus aplicaciones existentes.',
      features: ['Performance', 'SEO', 'Core Web Vitals', 'Caching']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para llevar tu negocio al siguiente nivel digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                  Saber más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;