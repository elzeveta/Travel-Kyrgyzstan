import React, { Component } from "react";
import "./Attractions.css";
import Attraction from "./Attraction";

class Attractions extends Component {
  constructor() {
    super();
    this.state = {
      attractions: [
        {
          name: "Tash-Rabat",
          image: "../../images/tash-rabat.jpg",
          desc: "Tash-Rabat (also Tashrabat) is an ancient caravanserai located on the territory of the Naryn Region, located near the border with China, one of the key parts of the ancient The Great Silk Road. The caravanserai is located at an impressive height of 3,100 meters in the southern part of the At-Bashinsky ridge. It was here that, for centuries, numerous caravans loaded with oriental goods from China came to shelter. The history of Tash-Rabat goes back to ancient times. Back in the II – I centuries. BC and in the I-II centuries AC caravans of merchants passed this area. Later, the main route of the Silk Road changed, but still this place was often visited by trade caravans. In the X-XI centuries, a monastery was founded there, according to various versions, either Buddhist or Christian, which fell into decay. On its remains in the XV-XIV centuries a caravanserai was erected, one of the four most important in Central Asia. This is a splendidly preserved cultural and historical monument, the only one of its kind on the territory of Kyrgyzstan and one of the most important remnants of the Great Silk Road, which has survived through time.",
        },
        {
          name: "Museum of Przewalski",
          image: "../../images/museum.jpg",
          desc: "Museums of Karakol, the tourist capital of the country, are also noteworthy. There is one of the country's most interesting museums, the Museum of Przewalski, which tells about travels of the great explorer of Asia. The museum’s exposition contains Przhevalsky’s personal belongings, stuffed animals brought from travels, letters and much more. In Karakol itself, there is a small museum of local lore, which is about the history of Issyk-Kul Region and Karakol city. Museum of Przewalski is a place of great historical significance, which is located very close to the city of Karakol, on the south-eastern shore of Issyk-Kul Lake. It is where the grave of the world famous scientist, traveler, and researcher Przhevalsky Nikolai Mikhailovich, as well as a museum dedicated to his expeditions around Central Asia and beyond. ",
        },
        {
          name: "Osh city as a hub of The Great Silk Road ",
          image: "../../images/osh-silk.jpg",
          desc: "The city of Osh is the most authentic and ancient city of the country. Over its 3,000-year history, this city has seen the heyday of huge empires, numerous caravans of the Great Silk Road, crowds of pilgrims, many different nations and cultures, and despite all this, managed to maintain its unique spirit of the Muslim East. Do you know many cities in the middle of which a mountain rises, considered one of the most important Muslim shrines? Do you want to see colorful oriental bazaars and the life of Uzbek quarters that have not changed for centuries? Then welcome to Osh - the southern capital of Kyrgyzstan. Osh has quite large museums. The main museum of Osh is of course the Historical Museum, which is located right in the cave of The Sacred Mountain Sulaiman Too. At the foot of the mountain is another museum - Museum of the Great Silk Road, the exposition of which tells about the history of the region and the trade routes passing through it. Nearby, in a three-story yurt, there is a small museum of Alymbek Datka and traditions of nomadism.",
        },
        {
          name: "Uzgen",
          image: "../../images/uzgen.jpg",
          desc: "Uzgen is a city in Osh Region of Kyrgyzstan, one of the oldest cities in Ferghana Valley, part of the Great Silk Road and the ancient capital of Karakhanid state. Uzgen is primarily interesting for its rich history. The first settlements on the site of modern Uzgen were formed in the I-II centuries BC. The city is located on the banks of the large Kara-Daria River, in the eastern part of the Ferghana Valley. Such a good location made this city a very significant center of trade and culture in ancient times. For a long time, the city played a crucial role, being the most important settlement of trade between China and Central Asia. In the XII century AC, the city became the capital of the Karakhanid Khaganate, which was moved here from Balasagun that was captured by the Mongol tribes, located in Chuy Valley and now known as Burana tower. During this period, the main attractions of Uzgen were built - three Uzgen mausoleums and Uzgen Minaret. Then the city was part of the Kokand Khanate, until the arrival of the Russian Empire in this region, and later the Soviet Union. Traditionally, the city is the place of residence of Uzbeks. A distinctive feature of Uzgen is the mahallas - ancient Uzbek quarters located in the lower part of the city. It is worth noting that the mahalla is not a rural, but an urban Central Asian form of residence, despite external similarities. The upper part of Uzgen belongs to the Soviet period.",
        },
        {
          name: "Petroglyphs ",
          image: "../../images/ansient.jpg",
          desc: "Kyrgyzstan has many open air museums of petroglyphs, a heritage of ancient times. In the city of Cholpon-Ata, there is one of the petroglyphs museums - Petroglyph Gallery Cholpon-Ata. It contains drawings on stones left by primitive tribes living on the territory of Kyrgyzstan. Saimaluu-Tash is the largest collection of petroglyphs in Central Asia and the world, located on the eastern slope of Ferghana Range in Jalal-Abad region. This territory is a national park. The complex is located at an altitude of more than 3000 meters. Translated from Kyrgyz, Saimaluu-Tash means “patterned stone”. On the territory of the complex, which consists of alpine meadows spread in the depths of the gorge, and mighty basalt boulders, which are original canvases for images, there are more than 90,000 (!) drawings from different historical eras. The oldest images on the stones of Saimaluu-Tash date back to the 3rd-1st millennia BC, and the latest are dated to the 1st-8th centuries AC. However, you can visit the place only in summer, because in winter they are covered with snow. ",
        },
        {
            name: "Ancient settlement of Koshoy-Korgon",
            image: "../../images/koshoi.jpg",
            desc: "In At-Bashinsky district of Naryn region, surrounded by the majestic Tien Shan mountains, at an altitude of 3000 meters, there is one of the mysterious historical architectural monuments of Kyrgyz history - the ruins of the Ancient settlement of Koshoy-Korgon (At-Bashi). This is one of the cities that were on the Great Silk Road. The historical monument dates back to the 7th century. It is considered one of the attractions of our country. The medieval ruins are named after the hero Koshoy, who was a comrade-in-arms, and, moreover, the uncle of the great hero Manas. Koshoy-Korgon served as a place of rest for trade caravans and was the main hub in one of the busiest sections of the Great Silk Road. Nomads often raided the fortified city. In turbulent times, merchants hid in it, and then again continued on their way. 50 towers were erected on the impregnable fortress. It could accommodate a large number of soldiers who successfully fought off enemies. In the 30th year of its existence, it fell under the onslaught of Mongol invaders. Unfortunately, the details of that historic battle are almost unknown."
        }
      ],
    };
  }

  render() {
    const content = this.state.attractions.map((attraction) => {
      return <Attraction name={attraction.name} image={attraction.image} desc={attraction.desc} />;
    });

    return (
      <div className="attractions__container">
        <h2>Destinations</h2>
        <p>
        The long history of Kyrgyzstan conceals many secrets. Making a visit to numerous monuments and architectural buildings of antiquity and the Middle Ages, perfectly preserved in various parts of the country, will surely help to solve all mysteries. Museums, fortresses, mausoleums and mosques are just a few of the attractions that are worth a visit.
        </p>
        {content}
      </div>
    );
  }
}

export default Attractions;
