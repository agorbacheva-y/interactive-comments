import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Comment() {
  return (
    <div className='comment'>
      <div className='comment__header'>
        <p>avatar</p>
        <p>username</p>
        <p>badge if you == true</p>
        <p>date posted</p>
      </div>

      <div className='comment__body'>
        <p>comment</p>
      </div>

      <div className='comment__footer'>
        <div className='comment__footer--likes'>
          <p>likes</p>
        </div>
        <div className='comment__footer--icons'>
          <div className='comment__footer--delete'>
            <DeleteIcon />
            <p>Delete</p>
          </div>
          <div className='comment__footer--edit'>
            <EditIcon />
            <p>Edit</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Comment;
