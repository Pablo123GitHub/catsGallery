const picturesData = require('../../data/pictures');
const usersData = require('../../data/users');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pictures').del()
  .then(()=>{
    return knex('users').del();
  })
  .then(()=>{
    return knex('users').insert(usersData);
  })
  .then(()=>{
    let usersPromise = [];
    picturesData.forEach((picture)=>{
      let userEmail = picture.author_id;
      usersPromise.push(createPictures(knex, picture, userEmail));
    });
    return Promise.all(usersPromise);
  })
};

const createPictures = (knex, picture, userEmail) => {
  return knex('users').where('email', userEmail).first()
  .then((userRecord)=>{
    return knex('pictures').insert({
      iconUrl: picture.iconUrl,
      likes: picture.likes,
      description: picture.description,
      author_id: userRecord.id
    });
  });
};
