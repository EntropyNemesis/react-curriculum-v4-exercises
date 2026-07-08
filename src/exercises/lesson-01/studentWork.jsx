//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Stephanie Jane Edwards';
  const age = 43;
  const hobbies = [
    { id: 1, title: 'coding for fun' },
    { id: 2, title: 'volunteering in the community' },
    { id: 3, title: 'gardening' },
    { id: 4, title: 'hiking and exploring the outdoors' },
    { id: 5, title: 'DIY renovation projects' },
    { id: 6, title: 'reading' },
    { id: 7, title: 'making visual art' },
  ];

  return (
    <div>
      <h1>About {name}</h1>

      <p>
        {' '}
        {name} is a life-long learner based in Greensboro, North Carolina. She
        has a curiosity to understand how things work, and a desire to learn in
        order to apply skills directly toward making the world a better place.
        She can mine and analyze data in maps and databases, using the findings
        to inform decisions and collaborative community projects. Stephanie Jane
        has had the opportunity to apply her spatial analysis skills to efforts
        in internet infrastructure development, historic preservation,
        affordable healthcare, breast cancer prevention, human trafficking
        prevention, and trail/greenway planning. At age {age}, she is only just
        beginning to learn React to build tools and data solutions on the
        internet for community development. There is so much to learn!
      </p>

      <p>
        When not learning React, Stephanie Jane enjoys many hobbies, including
        but not limited to:
      </p>

      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
}
