import Startbild from '../images/funas2.jpg';

const Start = () => {
  return(
    <div>
      <h1>Elijas Anderssons portfolio</h1>
      <img src={Startbild} width={800} alt="Elijas åker skidor i fjällen"/>
      <h2>Välkommen till min sida!</h2>
      <p className="center">Här hittar du information om mig och mina meriter.</p>
    </div>
  );
};
export default Start;