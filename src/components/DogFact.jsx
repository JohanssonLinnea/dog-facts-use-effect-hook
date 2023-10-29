export const DogFact = ({ fact , loading }) => {


  const cleanFact = loading ? "Loading..." : fact[0].attributes.body
  
  
    
    return (
      <div className="card text-center">
        <h1 className="card-header">dog facts</h1>
        <p className="card-text">{cleanFact}</p>
      </div>
    );
  };

