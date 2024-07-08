"use client";

import Header from '../components/navbar';

const Emails = () => {
  const emails = [
    "Siphomoloto0@gmail.com",
    "rasetsoketj@gmail.com",
    "oliviaoli61@gmail.com",
    "a.mokopane30@gmail.com",
    "Devmfundo@gmail.com",
    "lungbe2@gmail.com",
    "yushaistamikaylasingh@gmail.com",
    "Nocentsound@gmail.com",
    "Marothilekgoogo@gmail.com",
    "Bravo99beats@gmail.com",
    "junaidalexander76@gmail.com",
    "bonginkosibikani112@gmail.com",
    "sivuyilemtwetwe@gmail.com",
    "Hopemushinga02@gmail.com",
    "angie.monnye@gmail.com",
    "clirize05@gmail.com",
    "haynesluke96@gmail.com",
    "welcomegalane@gmail.com",
    "Abigailbhebe@gmail.com",
    "seanblack720@gmail.com",
    "delihlazoyan@gmail.com",
    "moseschisango2@gmail.com"
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px', paddingTop: '80px' }}>
      <Header/>
      <h1>Email List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {emails.map((email, index) => (
          <li key={index} style={{ margin: '10px 0', border: '1px solid #333', borderRadius: '10px', padding: '10px', backgroundColor: '#f7f7f7' }}>
            {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Emails;
