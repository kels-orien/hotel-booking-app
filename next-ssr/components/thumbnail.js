const Thumbnail = ({ name, city, thumb_url }) => {
  return (
    <div>
      <h1>Thumbnail</h1>
      <img src={thumb_url} />
      <h3>name: {name}</h3>
      <h4>city:{city}</h4>
    </div>
  );
};

export default Thumbnail;
