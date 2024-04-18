import React from 'react';
import Backgrund from '../assets/images/home-apis-light-.webp';
import './style/separador.css';

function Separador3(){
    return (
      <div className="separadorContainer">
        <div className="separadorDescription">
          <div className="separadorTitle">
            <h1 className="separador-title">
              A complete set of APIs, primitives, and tools, design for
              commercer
            </h1>
            <hr />
            <div className="container-separador">
              <div className="separador-left">
                <p>
                  Shopify’s platform provides APIs, SDKs, primitives, and tools
                  for building{" "}
                  <a href="#" className="ancors-span">
                    storefronts
                  </a>
                  , custom cart and{" "}
                  <a href="#" className="ancors-span">
                    checkout
                  </a>{" "}
                  flows, and seamless{" "}
                  <a href="#" className="ancors-span">
                    integrations
                  </a>{" "}
                  with your systems.
                </p>
                <p>
                  Get full flexibility to assemble, customize, and extend the
                  entire commerce experience, all with the backing of our global
                  infrastructure, scalability, and reliability.
                </p>
              </div>

              <div className="separador-right">
                <div className="separador-right-tags">
                  <div className="check">✅</div>
                  <p>APIs in GraphQL and REST</p>
                </div>
                <div className="separador-right-tags">
                  <div className="check">✅</div>
                  <p>
                    React-based framework and component library for accelerating
                    storefront development
                  </p>
                </div>
                <div className="separador-right-tags">
                  <div className="check">✅</div>
                  <p>
                    React-based framework and component library for accelerating
                    storefront development
                  </p>
                </div>
                <div className="separador-right-tags">
                  <div className="check">✅</div>
                  <p>
                    Commerce primitives for building subscription plans, selling
                    B2B, expanding internationally, and more
                  </p>
                </div>
                <div className="separador-right-tags">
                  <div className="check">✅</div>
                  <p>
                    Shopify CLI for building, testing, and managing your
                    integration
                  </p>
                </div>
                <div className="separador-right-tags">
                  <div className="check">✅</div>
                  <p>Ready-to-use UI components for getting started quickly</p>
                </div>
                <div className="separador-right-tags">
                  <div className="check">✅</div>
                  <p>
                    Ecosystem of prebuilt and reference implementations for
                    integrations with systems like Netsuite and Sanity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-imagen-separador">
          <img src={Backgrund} alt="" />
        </div>
      </div>
    );
};

export default Separador3;