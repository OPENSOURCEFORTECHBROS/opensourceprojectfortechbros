// pages/index.js
import Head from 'next/head';
import Header from './components/navbar';

export default function Home() {
  return (
      <div>
          <Head>
              <title>SA TECH COMMUNITY</title>
          </Head>
          <Header />
          <main>
              <div style={{ textAlign: 'center', padding: '20px', paddingTop: '120px' }}>
                  <h1>Welcome to SA TECH COMMUNITY</h1>
                  <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #333', borderRadius: '10px', backgroundColor: '#f7f7f7' }}>
                      <h2>Official Website of SA TECH BROS</h2>
                      <p>OPENSOURCE Project</p>
                      <a href="https://github.com/OPENSOURCEFORTECHBROS/opensourceprojectfortechbros" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold' }}>Link to Project Github</a>
                  </div>
                  <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #333', borderRadius: '10px', backgroundColor: '#f7f7f7' }}>
                      <p>Your effort is much appreciated. It's not going unnoticed. 😄</p>
                      <p>Let's build this community together. 👨‍💻🖤</p>
                  </div>
                  <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #333', borderRadius: '10px', backgroundColor: '#f7f7f7' }}>
                      <h2>THIS IS WHERE WE CODE 🖥 😎</h2>
                      <p>Hi everyone! 👋😁 This community is for experienced devs and engineers to help each other solve complex software issues and further advance knowledge. 🦾🤳💻⌨️🖥</p>
                  </div>
                  <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #333', borderRadius: '10px', backgroundColor: '#f7f7f7' }}>
                      <h2>FEEL FREE TO MARKET YOUR TECH PRODUCTS AND PROJECTS</h2>
                      <p>To Join the WhatsApp click</p>
                      <a href="https://chat.whatsapp.com/H1OZvvvaPOz82xW2V9K0O8" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold' }}>This link to WhatsApp community</a>
                  </div>
              </div>
          </main>
      </div>
  );
}
