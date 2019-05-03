import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        console.log('Question Props: ', this.props);
        const {
            question,
            questionAuthor
        } = this.props;

        return (
            <div className="col-12 question-card">
                <div className="row">
                    <div className="col-4">
                        {questionAuthor && (
                            <div className="question-card__author">
                                <img src={questionAuthor.avatarURL} alt="author profile image"/>
                                <p><strong>{questionAuthor ? questionAuthor.name : ""}</strong> asks</p>
                            </div>
                        )}

                    </div>
                    <div className="col-8">
                        <div className="question-card__question">
                            <h3>Would you Rather:</h3>
                            <p>{question.optionOne.text}</p>
                            <p>or</p>
                            <p>{question.optionTwo.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, { id }){
    const question = questions[id];
    const questionAuthor = users[question.author];
    return{
        question,
        questionAuthor
    }
}

export default connect(mapStateToProps)(Question);