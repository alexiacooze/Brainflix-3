import './CommentOutput.scss';

function CommentOutput({timestamp, comment, name}) {
    let formatDate = new Date(timestamp).toLocaleDateString()
    return (
    <header className="output">
            <p className='output__circle'></p>
        
        <div className='output__content-container'>
            <div className='output__container'>
                <p className='output__name'>{name}</p>
                <p className='output__date'>{formatDate}</p>
            </div>
            <div lassName='output__comment-container'>
                <p className='output__comment'>{comment}</p>
            </div>
        </div>
    </header>
    );
}

export default CommentOutput;