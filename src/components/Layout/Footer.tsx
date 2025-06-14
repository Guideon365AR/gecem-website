import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 lg:px-6 py-8 text-center">
        <p>&copy; {currentYear} GECEM UNR. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">
          Desarrollado con{' '}
          <span className="text-red-400">❤️</span>{' '}
          para la comunidad académica.
        </p>
      </div>
    </footer>
  );
};

export default Footer;