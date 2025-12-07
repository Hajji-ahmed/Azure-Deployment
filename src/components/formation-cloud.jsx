import React, { useEffect, useState } from 'react';
import "./formation-cloud.css";

const FormationCloud = () => {
    // État pour gérer le style de la navbar au scroll
    const [scrolled, setScrolled] = useState(false);

    // Gestion du scroll pour la navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Nettoyage de l'événement lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction de scroll fluide
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="cloud-formation-wrapper">
            {/* Header / Navbar */}
            <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="logo">
                        <h1>☁️ Cloud Academy</h1>
                    </div>
                    <nav>
                        <ul className="nav-menu">
                            <li><a href="#accueil" onClick={(e) => handleSmoothScroll(e, 'accueil')}>Accueil</a></li>
                            <li><a href="#modules" onClick={(e) => handleSmoothScroll(e, 'modules')}>Modules</a></li>
                            <li><a href="#ressources" onClick={(e) => handleSmoothScroll(e, 'ressources')}>Ressources</a></li>
                            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="accueil" className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Formation Complète</h1>
                        <h2>Méthodes de Déploiement sur le Cloud</h2>
                        <p>Maîtrisez les techniques modernes de déploiement cloud avec Azure, AWS et Google Cloud</p>
                        <a href="#modules" className="btn-primary" onClick={(e) => handleSmoothScroll(e, 'modules')}>Commencer la formation</a>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section id="intro" className="section">
                <div className="container">
                    <h2 className="section-title">Introduction au Déploiement Cloud</h2>
                    <div className="intro-grid">
                        <div className="intro-card">
                            <div className="icon">🚀</div>
                            <h3>Pourquoi le Cloud ?</h3>
                            <p>Scalabilité, disponibilité et réduction des coûts d'infrastructure</p>
                        </div>
                        <div className="intro-card">
                            <div className="icon">⚡</div>
                            <h3>Déploiement Rapide</h3>
                            <p>Automatisation et CI/CD pour des déploiements en quelques minutes</p>
                        </div>
                        <div className="intro-card">
                            <div className="icon">🔒</div>
                            <h3>Sécurité Avancée</h3>
                            <p>Protection des données et conformité aux standards internationaux</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section id="modules" className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Modules de Formation</h2>
                    
                    {/* Module 1 */}
                    <div className="module-card">
                        <div className="module-header">
                            <span className="module-number">Module 1</span>
                            <h3>Déploiement Manuel</h3>
                            <span className="badge beginner">Débutant</span>
                        </div>
                        <div className="module-content">
                            <p className="module-description">Découvrez les bases du déploiement manuel sur les plateformes cloud principales.</p>
                            <div className="methods-grid">
                                <div className="method-item">
                                    <h4>🌐 Azure Portal</h4>
                                    <ul>
                                        <li>Création de ressources via l'interface web</li>
                                        <li>Configuration des App Services</li>
                                        <li>Déploiement de conteneurs</li>
                                        <li>Gestion des bases de données</li>
                                    </ul>
                                    <div className="code-example">
                                        <pre><code>{`// Déploiement via Azure Portal
1. Créer une ressource
2. Sélectionner "Web App"
3. Configurer les paramètres
4. Déployer depuis Git/ZIP`}</code></pre>
                                    </div>
                                </div>
                                {/* Autres items du Module 1... */}
                                <div className="method-item">
                                    <h4>☁️ AWS Console</h4>
                                    <ul>
                                        <li>Utilisation de la console AWS</li>
                                        <li>Déploiement sur EC2</li>
                                        <li>Configuration d'Elastic Beanstalk</li>
                                        <li>Gestion des buckets S3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 2: CLI */}
                    <div className="module-card">
                        <div className="module-header">
                            <span className="module-number">Module 2</span>
                            <h3>CLI et Scripts</h3>
                            <span className="badge intermediate">Intermédiaire</span>
                        </div>
                        <div className="module-content">
                            <p className="module-description">Automatisez vos déploiements avec les outils en ligne de commande.</p>
                            <div className="methods-grid">
                                <div className="method-item">
                                    <h4>💻 Azure CLI</h4>
                                    <div className="code-example">
                                        <pre><code>{`# Connexion à Azure
az login

# Créer un groupe de ressources
az group create --name myRG --location eastus`}</code></pre>
                                    </div>
                                </div>
                                <div className="method-item">
                                    <h4>⚙️ AWS CLI</h4>
                                    <div className="code-example">
                                        <pre><code>{`# Configuration AWS
aws configure

# Créer un bucket S3
aws s3 mb s3://my-bucket-name`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 3: IaC */}
                    <div className="module-card">
                        <div className="module-header">
                            <span className="module-number">Module 3</span>
                            <h3>Infrastructure as Code (IaC)</h3>
                            <span className="badge intermediate">Intermédiaire</span>
                        </div>
                        <div className="module-content">
                            <p className="module-description">Gérez votre infrastructure comme du code pour une reproductibilité parfaite.</p>
                            <div className="methods-grid">
                                <div className="method-item">
                                    <h4>🌍 Terraform</h4>
                                    <div className="code-example">
                                        <pre><code>{`resource "azurerm_app_service" "main" {
  name                = "my-app-service"
  location            = "East US"
  resource_group_name = azurerm_resource_group.main.name
}`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 4: CI/CD */}
                    <div className="module-card">
                        <div className="module-header">
                            <span className="module-number">Module 4</span>
                            <h3>CI/CD Pipeline</h3>
                            <span className="badge advanced">Avancé</span>
                        </div>
                        <div className="module-content">
                            <p className="module-description">Automatisez complètement vos déploiements.</p>
                            <div className="methods-grid">
                                <div className="method-item">
                                    <h4>🔄 GitHub Actions</h4>
                                    <div className="code-example">
                                        <pre><code>{`name: Deploy to Azure
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ressources */}
            <section id="ressources" className="section">
                <div className="container">
                    <h2 className="section-title">Ressources Complémentaires</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="resource-icon">📚</div>
                            <h3>Documentation Officielle</h3>
                            <ul>
                                <li><a href="https://docs.microsoft.com/azure" target="_blank" rel="noopener noreferrer">Azure Docs</a></li>
                                <li><a href="https://docs.aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS Documentation</a></li>
                                <li><a href="https://cloud.google.com/docs" target="_blank" rel="noopener noreferrer">Google Cloud Docs</a></li>
                            </ul>
                        </div>
                        {/* Autres cartes ressources... */}
                    </div>
                </div>
            </section>

            {/* Comparatif */}
            <section id="comparison" className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Tableau Comparatif</h2>
                    <div className="table-responsive">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Méthode</th>
                                    <th>Niveau</th>
                                    <th>Automatisation</th>
                                    <th>Flexibilité</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Manuel</td>
                                    <td><span className="badge beginner">Débutant</span></td>
                                    <td>❌ Faible</td>
                                    <td>⭐⭐</td>
                                </tr>
                                <tr>
                                    <td>IaC</td>
                                    <td><span className="badge intermediate">Intermédiaire</span></td>
                                    <td>✅✅ Élevée</td>
                                    <td>⭐⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td>CI/CD</td>
                                    <td><span className="badge advanced">Avancé</span></td>
                                    <td>✅✅✅ Très élevée</td>
                                    <td>⭐⭐⭐⭐⭐</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Contact */}
            <section id="contact" className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Prêt à Maîtriser le Cloud ?</h2>
                        <div className="cta-buttons">
                            <a href="#modules" className="btn-primary" onClick={(e) => handleSmoothScroll(e, 'modules')}>Commencer Maintenant</a>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4>Cloud Academy</h4>
                            <p>&copy; 2025 Cloud Academy. Tous droits réservés.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FormationCloud;