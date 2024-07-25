"use client"
import Header from './components/navbar';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faLaugh, faGem, faEllipsisH, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Feed() {
  const posts = [
    { id: 1, user: 'JohnDoe', content: 'Check out my new project!', image: '/images/11.jpg' },
    { id: 2, user: 'JaneSmith', content: 'Need help with a bug in React', image: '/images/22.jpg' },
    { id: 3, user: 'DevGuy', content: 'Looking for a backend developer for my team', image: '/images/33.png' },
    { id: 3, user: 'Me lol', content: 'Looking for opps to step on', image: '/images/44.jpg' },
    { id: 3, user: 'Bro', content: 'Lurking in the shadows writing code', image: '/images/55.jpg' },
  ];

  return (
    <div>
      <Header />
      <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', color: '#ffffff', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', marginTop: '4rem'  }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', zIndex: '10'}}>
            <input 
              type="text" 
              placeholder="Search..." 
              style={{ 
                width: '100%', 
                padding: '0.5rem 2.5rem', 
                borderRadius: '0.25rem', 
                border: '1px solid #4b5563', 
                backgroundColor: '#374151', 
                color: '#ffffff', 
                fontSize: '1rem' 
              }} 
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              style={{ 
                position: 'absolute', 
                top: '50%', 
                right: '0.5rem', 
                transform: 'translateY(-50%)', 
                color: '#10b981' 
              }} 
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {posts.map(post => (
  <div key={post.id} style={{ backgroundColor: '#374151', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #4b5563', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', marginBottom: '1rem' }}>
    <div style={{ borderBottom: '1px solid #4b5563', paddingBottom: '0.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff', fontSize: '24px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>{post.user}</h3>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
    </div>
    <div style={{ borderBottom: '1px solid #4b5563', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
      <Image src={post.image} alt="Post image" width={400} height={200} style={{ borderRadius: '0.5rem', width: '100%', height: 'auto' }} />
    </div>
    <div style={{ borderBottom: '1px solid #4b5563', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
      <p style={{ margin: 0 }}>{post.content}</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <FontAwesomeIcon icon={faThumbsUp} style={{ cursor: 'pointer' }} />
      <FontAwesomeIcon icon={faThumbsDown} style={{ cursor: 'pointer' }} />
      <FontAwesomeIcon icon={faLaugh} style={{ cursor: 'pointer' }} />
      <FontAwesomeIcon icon={faGem} style={{ cursor: 'pointer' }} />
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
}
