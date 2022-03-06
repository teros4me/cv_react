import Profilbild from '../images/profil4.jpg';

const Om = () => {
  return(
    <div>
      <h1>Om mig</h1>
        <ul>
          <li><img src={Profilbild} alt="profilbild"/></li>
          <li>Elijas Andersson</li>
          <li>40 år, bor i Norra Hälsingland</li>
          <li>E-post: <a href="mailto:elijas.andersson@protonmail.com">elijas.andersson@protonmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/elijas-andersson/" target="_blank">https://www.linkedin.com/in/elijas-andersson</a></li>
        </ul>
        <p>Jag går just nu en YH-utbildning inom Systemutveckling vid Edugrade i Hudiksvall.
      Hittills har jag läst kurserna Programmering med C# och .NET, 
      Praktisk objektorienterad programmering, Programmering av databaser och SQL, 
      Projektledning och agila metoder, och Webbutveckling frontend med HTML5 + CSS + Javascript.
      Framöver kommer också kurserna Webbapplikationer i C# och ASP.NET, Designmönster och arkitektur,
      AI-komponenter och machine learning i Azure, DevOps, LIA och Examensarbete.
    </p>
    <p>Jag är även utbildad GIS-ingenjör genom YH-utbildningen
        Mobila System och GIT vid Ocellus Information Systems AB i Uppsala.
        Där har jag lärt mig massor om olika programvaror,
        karttjänster, teoretiskt om mätteknik, och även att göra mobilappar
        och hemsidor.
        Jag har haft två praktikperioder, den första på Holmen Skog där jag
        bland annat konfigurerade appar för väginventering och
        vägunderhåll i ArcGIS Online. Den andra praktikperioden nu under
        våren var jag på Region Gävleborg/X-trafik. Där gjorde jag
        bakgrundskartor och diverse arbetsytor m.m. i MapInfo och QGIS.
        Båda praktikplatserna var på distans så jag är van vid att ta ansvar
        för att jobbet blir gjort och hålla kontakt med kollegor via mail och
        Teams.
    </p>
    <p>
        Som person är jag noggrann, flexibel, pålitlig och nyfiken. 
        Jag vill vara med i processen med digitalisering och skapa något för framtiden.
        Är mycket van vid att arbeta självständigt på distans, men uppskattar också
        att träffa kollegor samt vara ute på fältet. En förhoppning är att jag ska kunna 
        kombinera mina kunskaper i både GIS och Systemutveckling i framtiden.
    </p>
    </div>
  );
};
export default Om;