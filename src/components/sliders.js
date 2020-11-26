  
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './sliders.scss';

const logo = 'https://images.ctfassets.net/uf4sk9fqckkz/2HdqAVJ8Maj42qt1PbFYze/9207cc73ee0d4a3c00344452fc796a7e/logo5.png';


const Sliders = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBanners (
        sort: {
          fields:name
        }
      ){
        edges {
          node {
            id,
            name,
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Slider autoplay duration={4000} className="slider-wrapper">
      {data.allContentfulBanners.edges.map((edge) => {
        return (
          <div key={edge.node.id} className="slider-content" style={{ background: `url('${edge.node.image.file.url}') no-repeat center center` }} >
            <section>
              <img src={logo} alt={edge.node.name} />
            </section>
          </div>
        )
      })
      }

    </Slider>
  );
}
export default Sliders;