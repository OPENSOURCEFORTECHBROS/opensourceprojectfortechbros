"use client";
import Header from './components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faHome, faInfoCircle, faUsers, faSquareGithub, faSquareWhatsapp } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', padding: '2rem', marginTop: '4rem' }}>
      <Header />

      
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <div className='' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem', flexDirection: 'column' }}>
    <Image src="/images/green.png" alt="Techtonix mascot" width={250} height={250} />
    <h1 style={{
      fontSize: '3rem', // Twice as big as the original 3rem
      background: 'linear-gradient(to bottom, #B0E0E6, #50C878)', // Powder blue to emerald green
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      borderBottom: '2px solid #50C878',
      display: 'inline-block',
      paddingBottom: '0.5rem',
      margin: 0 // Remove default margin
    }}>
      Welcome to Techtonix
    </h1>
  </div>
        <p style={{ fontSize: '1.25rem', color: '#cccccc', border: '1px solid #50C878', borderRadius: '0.5rem', padding: '1rem', display: 'inline-block' }}>
          Techtonix is an innovative platform for tech enthusiasts. Explore our open-source projects and collaborate with a global community.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/about" style={{ color: '#50C878', textDecoration: 'underline', border: '1px solid #50C878', borderRadius: '0.25rem', padding: '0.5rem 1rem', display: 'inline-block' }}>
            <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '0.5rem' }} />
            Learn More About Us
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#50C878', textAlign: 'center', borderBottom: '2px solid #50C878', paddingBottom: '0.5rem' }}>
          <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '0.5rem' }} />
          About Our Open Source Project
        </h2>
        <p style={{ fontSize: '1rem', color: '#cccccc', textAlign: 'center', border: '1px solid #50C878', borderRadius: '0.5rem', padding: '1rem', display: 'inline-block' }}>
          Our open-source project aims to revolutionize the tech community with cutting-edge tools and resources. We are constantly working on new features and improvements, and we welcome contributions from developers around the world.
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="https://github.com/techtonix" target="_blank" style={{ color: '#50C878', textDecoration: 'underline', marginRight: '1rem', border: '1px solid #50C878', marginTop: '1rem', borderRadius: '0.25rem', padding: '0.5rem 1rem', display: 'inline-block' }}>
          <FontAwesomeIcon icon={faSquareGithub} />
            
            Visit Our GitHub
          </Link>
          <Link href="https://chat.whatsapp.com/yourgroup" target="_blank" style={{ color: '#50C878', textDecoration: 'underline', border: '1px solid #50C878', marginTop: '1rem', borderRadius: '0.25rem', padding: '0.5rem 1rem', display: 'inline-block' }}>
          <FontAwesomeIcon icon={faSquareWhatsapp} />
            
            Join Our WhatsApp Group
          </Link>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#50C878', borderBottom: '2px solid #50C878', paddingBottom: '0.5rem' }}>
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: '0.5rem' }} />
          Get Involved
        </h2>
        <p style={{ fontSize: '1rem', color: '#cccccc', border: '1px solid #50C878', borderRadius: '0.5rem', padding: '1rem', display: 'inline-block' }}>
          We encourage you to get involved and be part of our vibrant community. Whether you're a developer, designer, or enthusiast, there's a place for you in Techtonix.
        </p>
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', marginTop: '2rem' }}>
    <div style={{ display: 'inline-block', borderRadius: '0.5rem', border: '2px solid #50C878', overflow: 'hidden', width: '300px', height: '200px', marginRight: '1rem' }}>
      <Image src="/images/11.jpg" alt="Techtonix Event 1" width={300} height={200} style={{ objectFit: 'cover' }} />
    </div>
    <div style={{ display: 'inline-block', borderRadius: '0.5rem', border: '2px solid #50C878', overflow: 'hidden', width: '300px', height: '200px', marginRight: '1rem' }}>
      <Image src="/images/11.jpg" alt="Techtonix Event 2" width={300} height={200} style={{ objectFit: 'cover' }} />
    </div>
    <div style={{ display: 'inline-block', borderRadius: '0.5rem', border: '2px solid #50C878', overflow: 'hidden', width: '300px', height: '200px', marginRight: '1rem' }}>
      <Image src="/images/11.jpg" alt="Techtonix Event 3" width={300} height={200} style={{ objectFit: 'cover' }} />
    </div>
  </div>
      </section>
    </div>
  );
}
