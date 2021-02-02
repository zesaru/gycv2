  
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
            jname,
            pname,
            image {
              file {
                url
              }
            }
            jimage {
              file {
                url
              }
            }
            pimage {
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
           window.location.pathname.includes("/jp") ?   
            
              <div key={edge.node.id} className="slider-content" style={{ background: `url('${edge.node.jimage.file.url}') no-repeat center center` }} >
                <section>
                  <img src={logo} alt={edge.node.jname} />
                </section>
              </div>
            
              :
              window.location.pathname.includes("/pt") ?
              <div key={edge.node.id} className="slider-content" style={{ background: `url('${edge.node.pimage.file.url}') no-repeat center center` }} >
                <section>
                  <img src={logo} alt={edge.node.pname} />
                </section>
              </div>
            
              :
            
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