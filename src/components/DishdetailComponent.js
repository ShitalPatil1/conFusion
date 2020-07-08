import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Row, Label, Col, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component
{
    constructor(props){
        super(props);
        this.state ={
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }
    toggleModal()
    {
        this.setState({
          isModalOpen: !this.state.isModalOpen,
        });
    }
      handleComment(values)
      {
        this.toggleModal();
        alert("Current State is: " + JSON.stringify(values));
      }
    render()
    {
        return(
            <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil" aria-hidden="true"></span> Submit
          Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleComment(values)}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control custom-select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="uname">Your Name</Label>
                <Control.text
                  model=".uname"
                  id="uname"
                  name="uname"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".uname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  id="comment"
                  name="comment"
                  rows="6"
                  model=".comment"
                  className="form-control"
                />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
        );
        
    }
}

function RenderDish({dish})
{
    if(dish != null)
    {
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
} 


    function RenderComments({comments})
    {
        if(comments==null)
        {
            return(
                <div></div>
            )
        }
        const cmnts = comments.map(comment =>{
            return(
                <li key={Comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    { new Intl.DateTimeFormat('en-US',{
                        year:'numeric',
                        month:'long',
                        day:'2-digit',
                    }).format(new Date(Date.parse(comment.date)))}
                    </p>
                    </li>
            )
        })

        return(
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments</h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
                <div className="col-12">
                        <CommentForm />
                </div>
            </div>
        )
    }

    

    const DishDetail = (props) => {

       
        const dish = props.dish
        if(dish==null)
        {
            return(
                <div></div>
            )
        }
        
        return(
            <div className='container'>

            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                           {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
            </div>

            <div className='row'>
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </div>
            </div>

        )

    }
    
       
    


export default DishDetail;