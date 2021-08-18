import {EventEmitter} from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '..actions/actionTypes';

const CHANGE_EVENT = "change";
let _posts = [];

class  PostStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback){
        this.emit(CHANGE_EVENT);
    }
    getPosts(){
        return_posts;
    }
}
const  store = new PostStore();

dispatcher.register((action) =>{
    switch(action.actionTypes){
        case actionTypes.Get_POSTS:
            _posts = action.posts;
            store.emitChange();
            break;
            default:

    }
});
export default store;