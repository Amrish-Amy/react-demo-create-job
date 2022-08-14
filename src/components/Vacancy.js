import React from 'react'

const Vacancy = ({vacancy, handleDelete}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{vacancy.title}</p>
                        <p className="subtitle is-6">{vacancy.company}</p>
                        <p className="subtitle is-6">{vacancy.city}</p>
                    </div>
                </div>
                <div className="content">
                    {vacancy.description}
                </div>
            </div>
            <footer className="card-footer">
                <button onClick = {() => {
                    window.alert(`applied for the position ${vacancy.title}`);
                    // store into database
                }} className="card-footer-item button is-primary mt-4">Apply</button>
                <button onClick={() => handleDelete(vacancy.id)  } className="card-footer-item item button is-danger mt-4">Delete</button>
            </footer>
        </div>
    )
}

export default Vacancy