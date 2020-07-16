import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error; 
        }
    }, error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch((err) => {console.log('Post comments ', err.message);
        alert('Your comment could not be post \n Error: ' + err.message);
    });
};

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error; 
            }
        }, error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch((err) => dispatch(dishesFailed(err.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error; 
            }
        }, err => {
            var errmess = new Error(err.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch((err) => dispatch(commentsFailed(err.message)));
    }

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error; 
            }
        }, err => {
            var errmess = new Error(err.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch((err) => dispatch(promosFailed(err.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});

export const addPromos = (promos ) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error; 
            }
        }, err => {
            var errmess = new Error(err.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch((err) => dispatch(leadersFailed(err.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errMess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});

export const addLeaders = ( leaders ) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error; 
        }
    }, error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(response => {dispatch(addFeedback(response));
                        alert(JSON.stringify(response))})
    .catch((err) => {console.log('Post feedback ', err.message);
        alert('Your feedback could not be posted \n Error: ' + err.message);
    });
};