const fakeDogData = `[
    {
      "id": 1,
      "name": "Buddy",
      "age": 3,
      "size": "Medium",
      "breed": "Labrador Retriever",
      "sex": "Male",
      "shelter": "Happy Paws Shelter"
    },
    {
      "id": 2,
      "name": "Luna",
      "age": 2,
      "size": "Small",
      "breed": "Chihuahua",
      "sex": "Female",
      "shelter": "Caring Hearts Rescue"
    },
    {
      "id": 3,
      "name": "Max",
      "age": 5,
      "size": "Large",
      "breed": "German Shepherd",
      "sex": "Male",
      "shelter": "Safe Haven for Pets"
    },
    {
      "id": 4,
      "name": "Daisy",
      "age": 1,
      "size": "Medium",
      "breed": "Beagle",
      "sex": "Female",
      "shelter": "Kindred Spirits Adoption Center"
    }
  ]`

const getFakeDogsData = (req, res) => {
  res.json(fakeDogData)
}
  module.exports = {getFakeDogsData}

