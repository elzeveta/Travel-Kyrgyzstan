import React, { Component } from "react";
import "./Water.css";
import Lake from "./Lake";

class Water extends Component {
  constructor() {
    super();
    this.state = {
      lakes: [
        {
          name: "Issyk-Kul Lake",
          image: "../../images/img-ik.jpg",
          desc: "The county's most famous lake is Issyk-Kul. Issyk-Kul lake is the second largest alpine lake in the world. It’s approximately 20 000 sq. km. which is the size of the whole country - Slovenia. Due to the lake entire region has unique climate as the lake never freezes because it contains salt. It is surrounded by divers scenery - red Mars like rocks on the southern shore in Fairy Tail Canyon and green summer pastures on the northern part.",
        },
        {
          name: "Son-Kul Lake",
          image: "../../images/img-son-kul.jpg",
          desc: "Son-Kul is located in Naryn Region’s high altitude summer pasture (3016 meters). It is one of the biggest alpine lakes in the republic. The water is sweet and crystal clear. When there is no wind it perfectly reflects the sky and surrounding mountains as a mirror. During summer season nomads assemble their yourts around the lake and livestock is gazing around. If you want to experience a connection with nature and nomadic culture, Son-Kol lake is the place to visit during early spring and summer on horses or on an SUV. Today, the area around the lake has become a national park and protected by the law. ",
        },
        {
          name: "Sary-Chelek Lake",
          image: "../../images/img-sary-chelek.jpg",
          desc: "Sary-Chelek is  another hidden treasure of Kyrgyzstan. The name of the lake means yellow vasil, it becomes truly yellow during Autumn when bright orange leaves are reflected by the lake. This sweet water lake is surrounded by majestic mountains with diverse  landscape and a walnut forest. It formed 10 thousand years ago due to tectonic changes, it is the third deepest lake in Central Asia and the second in Kyrgyzstan. The whole territory is a nature reserve and protected by the State. It is a perfect place for sustainable tourism such as camping, trekking, and hiking. ",
        },
        {
          name: "Ala-Kul Lake",
          image: "../../images/img-ala-kul.jpg",
          desc: "Ala-Kul is a large alpine lake of glacial origin located in eastern part of the Terskey-Ala-Too ridge on the southern shore of Issyk-Kul Lake, near the city of Karakol. The lake is situated at an attitude of 3532 m above sea level. The name Ala-Kul means Motley Lake which accurately describes the lake. Ala-Kul indeed impresses with its colors - bright turquoise water is adjacent to snow (which doesn’t melt in summer), green grass, and mountain flowers of all kinds. There are two possible paths to get to the lake - first, through the pass, second, via Altyn-Arashan Valley. ",
        },
        {
          name: "Kel-Suu Lake ",
          image: "../../images/img-kel-suu.jpg",
          desc: "Kel-Suu is an alpine lake of glacial origin, located in the south-eastern part of the Naryn region, near the Kyrgyz-Chinese border, at an altitude of 3,500 meters. The lake is notable for its stunning views - the water is bright blue and emerald, and contrasts very beautifully with the surrounding rocks. This is one of the most beautiful and at the same time inaccessible places in Kyrgyzstan. Kel-Suu is a flood-type lake formed in a large crevice between the rocks. Most of it is not visible from the shore, and therefore, to see the whole lake, you need to sail along it in a boat. The length of the lake is 9 kilometers, and the width - varies from 500 meters to 2 kilometers in the widest place.",
        },
      ],
    };
  }

  render() {
    const content = this.state.lakes.map((lake) => {
      return <Lake name={lake.name} image={lake.image} desc={lake.desc} />;
    });

    return (
      <div className="lakes__container">
        <h1>Water points</h1>
        <p>
          Water resources of Kyrgyzstan are invaluable. There are more than
          40,000 large and small rivers. They rapidly flow among mountains and
          falling down from steep rocks, they form hundreds of beautiful
          waterfalls. The most powerful and longest river Naryn is 535 km long.
          Lakes in Kyrgyzstan are unique and remarkably beautiful. There are
          more than 2,000 of lakes, and most of them are located in the
          highlands. Kyrgyzstan is also widely known for its hydropower
          potential. There are 34 water reservoirs and 17 hydropower stations.
        </p>
        <p>
          Kyrgyzstan is a mountainous country, thus there are a lot of water
          resources thanks to glaciers. There are more than 2000 rivers and
          thousands of lakes various sizes. The country depends on annual melt
          of glaciers. In Kyrgyzstan, rivers and lakes often have emerald color
          as well as bright crystal and blinding white. If you would like to
          feel the power of the element you have to visit waterfalls across the
          country. The biggest is Shaar which is more than 300 meters tall and
          can be seen miles away.{" "}
        </p>
        {content}
      </div>
    );
  }
}

export default Water;
