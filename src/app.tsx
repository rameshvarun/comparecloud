import * as React from "react";

import {
  Media,
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup,
  Checkbox,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

// @ts-ignore: Can't type image.
import cloudicon from "./providers/icons/generic.svg";

import providers from "./providers";
import { FeatureSupport } from "./features";

function getSupportColor(feature: FeatureSupport | undefined): string {
  if (!feature) return "grey";
  else if (feature.support === "supported") return "green";
  else if (feature.support === "unsupported") return "red";
  else if (feature.support === "partiallysupported") return "orange";
  throw new Error(`Unknown feature type.`);
}

function getSupportIcon(feature: FeatureSupport | undefined): string {
  if (!feature) return "glyphicon-question-sign";
  else if (feature.support === "supported") return "glyphicon-ok-sign";
  else if (feature.support === "unsupported") return "glyphicon-remove-sign";
  else if (feature.support === "partiallysupported")
    return "glyphicon-question-sign";
  throw new Error(`Unknown feature type.`);
}

const FeatureCheckmark: React.SFC<{
  support: FeatureSupport | undefined;
  feature: string;
}> = props => {
  let label = (
    <div
      style={{
        color: getSupportColor(props.support),
        display: "inline-block",
        marginRight: 10
      }}
    >
      <span
        className={"glyphicon " + getSupportIcon(props.support)}
        aria-hidden="true"
      />
      <span> {props.feature}</span>
    </div>
  );

  if (props.support && props.support.support === "partiallysupported") {
    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{props.support.description}</Tooltip>}
      >
        {label}
      </OverlayTrigger>
    );
  } else {
    return label;
  }
};

export class App extends React.Component<
  {},
  {
    storage: number;

    personal: boolean;
    application: boolean;
  }
> {
  constructor(props) {
    super(props);
    this.state = { storage: 100, personal: true, application: false };
  }
  render() {
    return (
      <div>
        <FormGroup>
          <ControlLabel> Required Storage: </ControlLabel>
          <InputGroup>
            <FormControl
              type="number"
              value={this.state.storage}
              onChange={event =>
                this.setState({ storage: parseInt(event.target.value, 10) })
              }
            />{" "}
            <InputGroup.Addon>GB</InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Checkbox
            inline
            checked={this.state.personal}
            onChange={event =>
              this.setState({ personal: event.target.checked })
            }
          >
            Personal
          </Checkbox>
          <Checkbox
            inline
            checked={this.state.application}
            onChange={event =>
              this.setState({ application: event.target.checked })
            }
          >
            Application
          </Checkbox>
        </FormGroup>
        <hr />
        <Media.List>
          {providers
            .filter(
              p =>
                (p.type === "personal" && this.state.personal) ||
                (p.type === "application" && this.state.application)
            )
            .map(p => {
              let price: number | undefined = undefined;
              if (p.getYearlyPrice) {
                price = p.getYearlyPrice(this.state.storage);
              } else if (p.getMonthlyPrice) {
                let monthlyPrice = p.getMonthlyPrice(this.state.storage);
                if (monthlyPrice !== undefined) price = 12 * monthlyPrice;
              } else {
                throw new Error(
                  `${
                    p.name
                  } needs to implement getYearlyPrice or getMonthlyPrice or both.`
                );
              }

              return {
                provider: p,
                price
              };
            })
            .sort((a, b) => {
              if (a.price != undefined && b.price == undefined) {
                return -1;
              } else if (a.price == undefined && b.price != undefined) {
                return 1;
              } else if (
                a.price != undefined &&
                b.price != undefined &&
                a.price !== b.price
              ) {
                return a.price - b.price;
              }

              return a.provider.name.localeCompare(b.provider.name);
            })
            .map(({ provider, price }) => (
              <Media.ListItem key={provider.name}>
                <Media.Left>
                  <a href={provider.url}>
                    <img
                      className="media-object"
                      width={64}
                      height={64}
                      src={provider.icon || cloudicon}
                    />
                  </a>
                </Media.Left>

                <Media.Body>
                  <Media.Heading>
                    <a href={provider.url}>{provider.name}</a>
                  </Media.Heading>
                  <div>
                    {price == 0 && "Free"}
                    {price !== undefined &&
                      price > 0 && <span>${price.toFixed(2)} / year</span>}
                    {price == undefined && "No plan available."}
                  </div>
                  <div style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <FeatureCheckmark
                      support={provider.features.rclone}
                      feature="Rclone Support"
                    />
                    <FeatureCheckmark
                      support={provider.features.videoPreviews}
                      feature="Video Previews"
                    />
                  </div>
                </Media.Body>
              </Media.ListItem>
            ))}
        </Media.List>
      </div>
    );
  }
}
