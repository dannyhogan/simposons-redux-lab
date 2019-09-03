export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch characters';
      return json;
    })
    .then(json => json.map(char => ({
      id: char._id,
      name: char.name,
      img: char.photoUrl || 'http://placegoat.com/200/200'
    })));
};
