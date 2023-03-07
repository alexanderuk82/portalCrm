function Task({task, setTask, handleTask}) {
    return (
        <div className="dashboard__container__task__content__item">
            <div
                onClick={() => handleTask()}
                className="dashboard__container__task__content__item__text"
            >
                <img
                    src={`${
                        task
                            ? 'public/img/checkcircle.svg'
                            : 'public/img/circleEmpty.svg'
                    }`}
                    alt="empty"
                />
                <p className={`${task && 'lineThrough'}`}>
                    This is an example about my task
                </p>
            </div>
            <div className="dashboard__container__task__content__item__action">
                <button className={`${task ? 'hide' : 'btnEdit'}`}>
                    <img src="public/img/edit.svg" alt="edit" />
                </button>
                <button className="btnRemove">
                    <img src="public/img/delete.svg" alt="remove" />
                </button>
            </div>
        </div>
    )
}

export default Task
