import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { renderLog } from "../../utils/logging";

export default class OfficeNameText extends Component {
  static propTypes = {
    political_party: PropTypes.string,
    contest_office_name: PropTypes.string,
    office_link: PropTypes.string,
  };

  constructor (props) {
    super(props);
    this.state = {
      transitioning: false,
    };
  }

  componentWillReceiveProps () {
    this.setState({ transitioning: false });
  }

  render () {
    renderLog(__filename);
    let nameText = "";
    let { contest_office_name, political_party } = this.props;
    if (political_party === undefined) {
      nameText = <span className="no-political-party">
      Candidate for <Link to={this.props.office_link || "/office"}><span className="candidate-card-main__office">
      { contest_office_name } </span></Link> </span>;
    } else {
      nameText = <span> <span className="card-main__political-party u-bold u-gray-darker">
      {political_party} </span> candidate for <Link to={this.props.office_link || "/office"}><span className="candidate-card-main__office u-bold u-gray-darker">
        { contest_office_name }
      </span></Link></span>;
    }

    return nameText;
  }
}
