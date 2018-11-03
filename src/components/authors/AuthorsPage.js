import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, MenuItem } from 'react-bootstrap'
import { addAuthor, deleteAuthor } from '../../actions/authorActions'
import toastr from 'toastr'

class AuthorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      firstName: '',
      lastName: ''
    };
  
  this.handleHide = this.handleHide.bind(this);
  this.updateDetails = this.updateDetails.bind(this)
  this.addAuthor = this.addAuthor.bind(this)
  this.onDelete = this.onDelete.bind(this)
}

handleHide() {
  this.setState({ show: false });
}

addAuthor() {
  const { firstName, lastName} = this.state;
  if (firstName != '' && lastName != ''){
    const authorDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    this.props.addAuthor(authorDetails)
    this.setState({ show: false });
    toastr.success("Author Added.")
  } else {
    toastr.error("Please fill in Authors details.")
  }
}

onDelete(id) {
  this.props.deleteAuthor(id)
}

updateDetails(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

  render(){
    const {authors} = this.props
    return (
      <div>
        <h3 className="text-center">All Authors</h3>
        <button className="btn btn-primary btn-lg pull-right"
          onClick={() => this.setState({ show: true })} >Add Author</button>
        {authors ? (
          <div className="container row" style={{ width: '90%' }}>
            {authors.map((author, i) => (
              <span className="col-md-2">
                <span className="card"
              style={{ borderRadius: '2%', width: '22rem', height: '100px',
              backgroundColor: 'grey',
              float: "none",
              marginLeft: 'auto',
              marginRight: 'auto' }}
            >
              <h5 className="card-title text-white text-left">{`${author.firstName} ${author.lastName}`}</h5>
              <button className="btn btn-primary btn-danger btn-sm"
              onClick={() => this.onDelete(author.id)}
              >Delete</button>
            </span>
          </span>
        ))}
      </div>
        ) : (
        'There are no authors at this moment.'
       )}
        <div className="modal-container" style={{ height: 200 }}>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Author Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <label htmlFor="name" className="active">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              required
              onChange={this.updateDetails}
            />
            <label htmlFor="name" className="active">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              required
              onChange={this.updateDetails}
            />
            </Modal.Body>
            <Modal.Footer>
            <button
              type="submit"
              id="add-author"
              className="waves-effect waves-dark
              btn right hoverable dark-green btn btn-primary"
              onClick={this.addAuthor}
              >Submit
            </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authors: state.authors
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addAuthor,
      deleteAuthor
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);

