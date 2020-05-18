import { html, css,svg, LitElement } from 'lit-element';

import {openpeepsTypes} from './openpeeps/index.js'

export class OpenpeepsWebcomponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        width: 50px;
        
      }
    `;
  }

  static get properties() {
    return {
      accessory: { type: String },
      pose: { type: String },
      face: {type: String},
      facialHair: {type:String},
      hair: {type:String},
      viewBox: {type:Object},
      circleStyle: {type:String},
      strokeColor: {type:String},
      backgroundColor: {type:String},
      skinColor: {type:String},
      hairColor: {type: String},
      clothesColorPrimary: {type:String},
      clothesColorSecondary: {type:String}

    };
  }

  constructor() {
    super();
    this.strokeColor = "#000000";
    this.backgroundColor = "#ffffff";
    this.pose = 'default';
    this.hair = 'default';
    this.face = 'default';
    this.facialHair = 'default';
    this.accessory = 'default';
    this.hairColor = 'default';
    this.skinColor = 'default';
    this.circleColor = '#ff004A';
    this.clothesColorPrimary = '#ffff00';
    this.clothesColorSecondary = '#cecece';
  }

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty(
      "--openpeeps-skin-color",
      openpeepsTypes.skinColorTypes[this.skinColor]
    );
    this.style.setProperty(
      "--openpeeps-clothes-color-primary",
      this.clothesColorPrimary
    );
    this.style.setProperty(
      "--openpeeps-clothes-color-secondary",
      this.clothesColorSecondary
    );
    this.style.setProperty(
      "--openpeeps-stroke-color",
      '#000000'
    );
    this.style.setProperty(
      "--openpeeps-circle-color",
      this.circleColor
    );
  }

  render() {
    const mainContent = svg`
      <svg style={style} viewBox="-100 -50 1100 1200"}>
      <g>
      ${openpeepsTypes.poseTypes[this.pose]}
        <g transform='translate(225 0)'>
        <g>
        ${openpeepsTypes.hairTypes[this.hair]}
        </g>
        <g transform='translate(159 186)'>
         ${openpeepsTypes.faceTypes[this.face]}
        </g>
        <g transform='translate(123 338)'>
        ${openpeepsTypes.facialHairTypes[this.facialHair]}
        </g>
        <g transform='translate(47 241)'>
        ${openpeepsTypes.accessoryTypes[this.accessory]}
        </g>
      </g>
    </svg>
    `;
    const  circleStyle = this.circleColor ? css`
      background-color: var(--openpeeps-circle-color,  #000000);
      width: 170px;
      height: 170px;
      align-self: center;
      border-radius: 135px;
      overflow: hidden;
      border-width: 3px;
      border-color: black;
      border-style: solid;
    ` : css``

    return html`
    <div style=${circleStyle}>
    ${mainContent}
    </div>
`
  }
}
