import React from "react";
import History from "../../History";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../Actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.fetchStream(id);
  }
  renderActions() {
    const id = this.props.match.params.id;

    return (
      //this is for the div padding/margin issue
      //can also use <> </> instead
      <React.Fragment>
        <button onClick={() => {
          this.props.deleteStream(id)
        }} className="ui button negative">Delete</button>
        <Link to='/' className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Delete "${this.props.stream.title}"?`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => History.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
