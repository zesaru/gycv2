  
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './sliders.css';
import styled from "styled-components"

const logo = 'https://images.ctfassets.net/uf4sk9fqckkz/2HdqAVJ8Maj42qt1PbFYze/9207cc73ee0d4a3c00344452fc796a7e/logo5.png';

const LinkSeeMore = styled(Link)`
  padding: 7px 10px;
  border: none;
  background: #00479a;
  border-radius: 30px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 10px;
  color: white;
  cursor: cursor;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`
const Inner = styled.div`
  padding: 0 70px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 85%;
  left: 80%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

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
            {/* <Inner>
              <LinkSeeMore to="/sevebuenazo">
                Reglamento
              </LinkSeeMore>
            </Inner>  */}
          </div>
        )
      })
      }

    </Slider>
  );
}
export default Sliders;