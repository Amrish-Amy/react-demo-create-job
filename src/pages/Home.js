import React, { useState, useEffect } from 'react';
import { vacancies as jobs } from '../data';
import Vacancy from '../components/Vacancy';
import CreateJob from '../components/CreateJob';

const Home = () => {

  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    
    setVacancies(jobs);
    console.log(jobs);


  }, []);

  const handleSubmit = (form) =>{
    console.log(form);
    setVacancies([form, ...vacancies]);
  }

  const handleDelete = (id) => {
    const _vacancies = vacancies.filter(vacancy => vacancy.id !== id);
    setVacancies(_vacancies);
  }


  return (
    <>
      <section className="section">
        <h1 className="title">Find your dream job today</h1>
        <h2 className="subtitle">
          Apply for any vacancies below
        </h2>
      </section>
      <section>
        {<CreateJob submit={handleSubmit}/>}
      </section>
      <section>
      {vacancies.map(vacancy => {
        return  <Vacancy key={vacancy.id} vacancy={vacancy} handleDelete={handleDelete} />;
        

      })}
      </section>

    </>
  )
}

export default Home;