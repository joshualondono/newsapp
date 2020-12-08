import React, { useState} from "react";
import MultiSelect from "react-multi-select-component";
//create list of sources
const axios = require('axios');

const Dropdown: React.FC = () => {

    const newsSource = axios.get('https://newsapi.org/v2/sources?apiKey=a63f62608ebf43d4b855f19cde053677')
.then((response) => {

  const sources = response.data.sources.map((x) => {
    const test = {label: x.name, value: x.id}
    return test
  }
    );

  console.log(sources)
});



    const options = [
        { label: 'ABC News', value: 'abc-news' },
        { label: 'ABC News (AU)', value: 'abc-news-au' },
        { label: 'Aftenposten', value: 'aftenposten' },
        { label: 'Al Jazeera English', value: 'al-jazeera-english' },
        { label: 'ANSA.it', value: 'ansa' },
        { label: 'Argaam', value: 'argaam' },
        { label: 'Ars Technica', value: 'ars-technica' },
        { label: 'Ary News', value: 'ary-news' },
        { label: 'Associated Press', value: 'associated-press' },
        {
          label: 'Australian Financial Review',
          value: 'australian-financial-review'
        },
        { label: 'Axios', value: 'axios' },
        { label: 'BBC News', value: 'bbc-news' },
        { label: 'BBC Sport', value: 'bbc-sport' },
        { label: 'Bild', value: 'bild' },
        { label: 'Blasting News (BR)', value: 'blasting-news-br' },
        { label: 'Bleacher Report', value: 'bleacher-report' },
        { label: 'Bloomberg', value: 'bloomberg' },
        { label: 'Breitbart News', value: 'breitbart-news' },
        { label: 'Business Insider', value: 'business-insider' },
        { label: 'Business Insider (UK)', value: 'business-insider-uk' },
        { label: 'Buzzfeed', value: 'buzzfeed' },
        { label: 'CBC News', value: 'cbc-news' },
        { label: 'CBS News', value: 'cbs-news' },
        { label: 'CNN', value: 'cnn' },
        { label: 'CNN Spanish', value: 'cnn-es' },
        { label: 'Crypto Coins News', value: 'crypto-coins-news' },
        { label: 'Der Tagesspiegel', value: 'der-tagesspiegel' },
        { label: 'Die Zeit', value: 'die-zeit' },
        { label: 'El Mundo', value: 'el-mundo' },
        { label: 'Engadget', value: 'engadget' },
        { label: 'Entertainment Weekly', value: 'entertainment-weekly' },
        { label: 'ESPN', value: 'espn' },
        { label: 'ESPN Cric Info', value: 'espn-cric-info' },
        { label: 'Financial Post', value: 'financial-post' },
        { label: 'Focus', value: 'focus' },
        { label: 'Football Italia', value: 'football-italia' },
        { label: 'Fortune', value: 'fortune' },
        { label: 'FourFourTwo', value: 'four-four-two' },
        { label: 'Fox News', value: 'fox-news' },
        { label: 'Fox Sports', value: 'fox-sports' },
        { label: 'Globo', value: 'globo' },
        { label: 'Google News', value: 'google-news' },
        { label: 'Google News (Argentina)', value: 'google-news-ar' },
        { label: 'Google News (Australia)', value: 'google-news-au' },
        { label: 'Google News (Brasil)', value: 'google-news-br' },
        { label: 'Google News (Canada)', value: 'google-news-ca' },
        { label: 'Google News (France)', value: 'google-news-fr' },
        { label: 'Google News (India)', value: 'google-news-in' },
        { label: 'Google News (Israel)', value: 'google-news-is' },
        { label: 'Google News (Italy)', value: 'google-news-it' },
        { label: 'Google News (Russia)', value: 'google-news-ru' },
        { label: 'Google News (Saudi Arabia)', value: 'google-news-sa' },
        { label: 'Google News (UK)', value: 'google-news-uk' },
        { label: 'Göteborgs-Posten', value: 'goteborgs-posten' },
        { label: 'Gruenderszene', value: 'gruenderszene' },
        { label: 'Hacker News', value: 'hacker-news' },
        { label: 'Handelsblatt', value: 'handelsblatt' },
        { label: 'IGN', value: 'ign' },
        { label: 'Il Sole 24 Ore', value: 'il-sole-24-ore' },
        { label: 'Independent', value: 'independent' },
        { label: 'Infobae', value: 'infobae' },
        { label: 'InfoMoney', value: 'info-money' },
        { label: 'La Gaceta', value: 'la-gaceta' },
        { label: 'La Nacion', value: 'la-nacion' },
        { label: 'La Repubblica', value: 'la-repubblica' },
        { label: 'Le Monde', value: 'le-monde' },
        { label: 'Lenta', value: 'lenta' },
        { label: "L'equipe", value: 'lequipe' },
        { label: 'Les Echos', value: 'les-echos' },
        { label: 'Libération', value: 'liberation' },
        { label: 'Marca', value: 'marca' },
        { label: 'Mashable', value: 'mashable' },
        { label: 'Medical News Today', value: 'medical-news-today' },
        { label: 'MSNBC', value: 'msnbc' },
        { label: 'MTV News', value: 'mtv-news' },
        { label: 'MTV News (UK)', value: 'mtv-news-uk' },
        { label: 'National Geographic', value: 'national-geographic' },
        { label: 'National Review', value: 'national-review' },
        { label: 'NBC News', value: 'nbc-news' },
        { label: 'News24', value: 'news24' },
        { label: 'New Scientist', value: 'new-scientist' },
        { label: 'News.com.au', value: 'news-com-au' },
        { label: 'Newsweek', value: 'newsweek' },
        { label: 'New York Magazine', value: 'new-york-magazine' },
        { label: 'Next Big Future', value: 'next-big-future' },
        { label: 'NFL News', value: 'nfl-news' },
        { label: 'NHL News', value: 'nhl-news' },
        { label: 'NRK', value: 'nrk' },
        { label: 'Politico', value: 'politico' },
        { label: 'Polygon', value: 'polygon' },
        { label: 'RBC', value: 'rbc' },
        { label: 'Recode', value: 'recode' },
        { label: 'Reddit /r/all', value: 'reddit-r-all' },
        { label: 'Reuters', value: 'reuters' },
        { label: 'RT', value: 'rt' },
        { label: 'RTE', value: 'rte' },
        { label: 'RTL Nieuws', value: 'rtl-nieuws' },
        { label: 'SABQ', value: 'sabq' },
        { label: 'Spiegel Online', value: 'spiegel-online' },
        { label: 'Svenska Dagbladet', value: 'svenska-dagbladet' },
      ];
   
    const [selected, setSelected] = useState([]);

    function myFunction() {
        const data = selected.map(x => x.value)
        const formatted = `${data}`
        localStorage.setItem('sources', formatted);
        const setSources = localStorage.getItem('sources');
                
        alert(setSources);
        return setSelected
      };


    return (

      <div>
            <h></h>Drop down list using static data, b/c it isn't loading
            Data is stored in local storage to share with headline page

        <MultiSelect
          options={options}
          value={selected}
          onChange={myFunction()}
          labelledBy={"Select"}
        />
      </div>
    );
  };
   
  export default Dropdown;
