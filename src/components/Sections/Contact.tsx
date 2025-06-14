import React, { useState } from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log('Formulario enviado:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('¡Mensaje enviado correctamente!');
  };

  return (
    <section id="contacto" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800">Contáctanos</h2>
          <p className="mt-4 text-lg text-slate-600">
            ¿Tienes consultas o comentarios? Estamos aquí para ayudarte.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Info de Contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">Teléfonos</h3>
                <p className="text-slate-600">341 339-1573</p>
                <p className="text-slate-600">341 692-7491</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">Correo Electrónico</h3>
                <a
                  href="mailto:gecalidad.unr@gmail.com"
                  className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
                >
                  gecalidad.unr@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">Instagram</h3>
                <a
                  href="https://instagram.com/gecalidad.unr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
                >
                  @gecalidad.unr
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="bg-slate-100 p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 resize-vertical"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;