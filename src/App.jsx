import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedSite, setSelectedSite] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedSite(null);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">Maanvi Properties.</div>
        <nav className="nav-tabs">
          {['Home', 'Buy Properties', 'Gallery', 'Contact'].map(tab => (
            <button 
              key={tab} 
              className={`tab-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
        <button className="nav-btn">Post Property</button>
      </header>

      <main className="tab-content">
        {activeTab === 'Home' && (
          <section className="hero fade-in">
            <h1>
              Find Your Dream <br />
              <span>Home in Anantapur.</span>
            </h1>
            <p>
              Explore the best real estate properties, independent houses, flats, and plots in Anantapur, Andhra Pradesh. We make finding your perfect space simple and elegant.
            </p>
          </section>
        )}

        {activeTab === 'Buy Properties' && !selectedSite && (
          <section className="services fade-in">
            <div className="card clickable" onClick={() => setSelectedSite('Site 1')}>
              <img src="/house.png" alt="House in Ram Nagar" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1rem'}} />
              <h3 style={{color: 'var(--primary-dark)', fontSize: '1.5rem', marginBottom: '0.2rem'}}>₹85.0 L</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)'}}>3 BHK Independent House</h4>
              <p>Ram Nagar, Anantapur</p>
            </div>
            
            <div className="card clickable" onClick={() => setSelectedSite('Site 2')}>
              <img src="/apartment.png" alt="Flat in Vidyut Nagar" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1rem'}} />
              <h3 style={{color: 'var(--primary-dark)', fontSize: '1.5rem', marginBottom: '0.2rem'}}>₹45.0 L</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)'}}>2 BHK Apartment</h4>
              <p>Vidyut Nagar, Anantapur</p>
            </div>
            
            <div className="card clickable" onClick={() => setSelectedSite('Site 3')}>
              <img src="/plot.png" alt="Plot in Gooty Road" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1rem'}} />
              <h3 style={{color: 'var(--primary-dark)', fontSize: '1.5rem', marginBottom: '0.2rem'}}>₹25.0 L</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)'}}>Residential Plot</h4>
              <p>Gooty Road, Anantapur</p>
            </div>
          </section>
        )}

        {activeTab === 'Buy Properties' && selectedSite === 'Site 1' && (
          <section className="subpage fade-in">
            <button className="back-btn" onClick={() => setSelectedSite(null)}>← Back to Properties</button>
            <h2 className="subpage-title">3 BHK Independent House</h2>
            <p className="subpage-desc">Premium independent house located in the heart of Ram Nagar, Anantapur.</p>
            
            <div className="info-card">
              <h3>Property Details</h3>
              <ul className="info-list">
                <li><strong>Price:</strong> ₹85,00,000</li>
                <li><strong>Location:</strong> Ram Nagar, Anantapur</li>
                <li><strong>Bedrooms:</strong> 3</li>
                <li><strong>Bathrooms:</strong> 3</li>
                <li><strong>Area:</strong> 1,500 sq.ft</li>
                <li><strong>Furnishing:</strong> Semi-Furnished</li>
              </ul>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Property Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/house.png" alt="Exterior" />
              </div>
              <div className="gallery-item">
                <img src="/gallery-1.png" alt="Interior 1" />
              </div>
              <div className="gallery-item">
                <img src="/gallery-2.png" alt="Interior 2" />
              </div>
            </div>
          </section>
        )}

        {activeTab === 'Buy Properties' && selectedSite === 'Site 2' && (
          <section className="subpage fade-in">
            <button className="back-btn" onClick={() => setSelectedSite(null)}>← Back to Properties</button>
            <h2 className="subpage-title">2 BHK Apartment for Sale</h2>
            <p className="subpage-desc">Spacious and well-ventilated flat in a prime residential society in Vidyut Nagar.</p>
            
            <div className="info-card">
              <h3>Property Details</h3>
              <ul className="info-list">
                <li><strong>Price:</strong> ₹45,00,000</li>
                <li><strong>Location:</strong> Vidyut Nagar, Anantapur</li>
                <li><strong>Bedrooms:</strong> 2</li>
                <li><strong>Bathrooms:</strong> 2</li>
                <li><strong>Area:</strong> 1,100 sq.ft</li>
                <li><strong>Floor:</strong> 3rd out of 5</li>
              </ul>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Property Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/apartment.png" alt="Exterior" />
              </div>
              <div className="gallery-item">
                <img src="https://picsum.photos/600/400?random=11" alt="Living Room" />
              </div>
              <div className="gallery-item">
                <img src="https://picsum.photos/600/400?random=12" alt="Kitchen" />
              </div>
            </div>
          </section>
        )}

        {activeTab === 'Buy Properties' && selectedSite === 'Site 3' && (
          <section className="subpage fade-in">
            <button className="back-btn" onClick={() => setSelectedSite(null)}>← Back to Properties</button>
            <h2 className="subpage-title">Prime Residential Plot</h2>
            <p className="subpage-desc">Excellent investment opportunity on the fast-developing Gooty Road corridor.</p>
            
            <div className="info-card">
              <h3>Property Details</h3>
              <ul className="info-list">
                <li><strong>Price:</strong> ₹25,00,000</li>
                <li><strong>Location:</strong> Gooty Road, Anantapur</li>
                <li><strong>Property Type:</strong> Plot / Land</li>
                <li><strong>Facing:</strong> East</li>
                <li><strong>Area:</strong> 2,000 sq.ft (approx 222 sq.yards)</li>
                <li><strong>Approvals:</strong> AHUDA Approved</li>
              </ul>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Property Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/plot.png" alt="Plot View 1" />
              </div>
              <div className="gallery-item">
                <img src="https://picsum.photos/600/400?random=13" alt="Plot View 2" />
              </div>
              <div className="gallery-item">
                <img src="https://picsum.photos/600/400?random=14" alt="Road Access" />
              </div>
            </div>
          </section>
        )}

        {activeTab === 'Gallery' && (
          <section className="gallery fade-in">
            <h2>Our Portfolio</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/gallery-1.png" alt="Architecture" />
              </div>
              <div className="gallery-item">
                <img src="/gallery-2.png" alt="Workspace" />
              </div>
              <div className="gallery-item">
                <img src="/gallery-3.png" alt="Abstract 3D" />
              </div>
              <div className="gallery-item">
                <img src="/house.png" alt="House Property" />
              </div>
              <div className="gallery-item">
                <img src="/apartment.png" alt="Apartment Property" />
              </div>
              <div className="gallery-item">
                <img src="/plot.png" alt="Plot Property" />
              </div>
            </div>
          </section>
        )}

        {activeTab === 'Contact' && (
          <section className="contact fade-in">
            <h2>Let's Connect</h2>
            <p>Ready to buy or sell property in Anantapur? We'd love to hear from you.</p>
            <div className="contact-card">
              <p>Email: Srujan.neeruganti@gmail.com</p>
              <p>Phone: 8897761044</p>
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Maanvi Properties. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
