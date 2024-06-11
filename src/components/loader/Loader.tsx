import './style.css'; // Assurez-vous de créer un fichier CSS pour les styles

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Chargement en cours...</p>
    </div>
  );
};

export default Loader;