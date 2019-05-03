import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        console.log('Question Props: ', this.props);
        const {
            question,
            questionAuthorName
        } = this.props;

        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <p>{questionAuthorName} asks</p>
                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-8">
                        <h1>Would you Rather:</h1>
                        <p>{question.optionOne.text}</p>
                        <p>or</p>
                        <p>{question.optionTwo.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, { id }){
    const question = questions[id];
    const questionAuthorName = users[question.author] ? users[question.author].name : null;
    return{
        question,
        questionAuthorName
    }
}

export default connect(mapStateToProps)(Question);