import React from 'react'
import './App.css'
import iconarrow from './assets/iconarrow.svg'
import { useForm } from 'react-hook-form'

const App = () => {

  const {register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = (data) =>{
    console.log(data);
  }
  

 

   const age=()=> {
    var d1 = document.getElementById('day').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
     
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(d1 > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
  
    document.getElementById('result_year').innerHTML = y;
    document.getElementById('result_month').innerHTML = m;
    document.getElementById('result_day').innerHTML = d;

    
  }


   
  



  return (
    <>
      <div className="container">
        <div className="calculator">
          <form onSubmit={handleSubmit(onSubmit)} noValidate={false}>
            <label htmlFor="day" className={errors.day && "error-label"} >DAY
            <input 
            className={errors.day && "invalid"}
            id='day'
            type="number" 
            placeholder='DD' 
            {...register("day",{required:true,
            validate:value => value >= 1 && value <=31})}
            />
             <error className="error"  >
              {errors.day?.type === "required" && "Date is required"}
             {errors.day?.type === "validate" && "Must be a valid day"}
             </error>
            </label>


            <label htmlFor="month"  className={errors.month && "error-label"} >MONTH
            <input 
            className={errors.month && "invalid"}
            id='month'
            type="number" 
            placeholder='MM' 
            {...register("month",{required:true,
              validate:value => value >= 1 && value <= 12})}
            />
            <error className="error" >
              {errors.month?.type === "required" && "Month is required"}
              {errors.month?.type === "validate" && "Must be a valid month"}
            </error>
            </label>


            <label htmlFor="year" className={errors.year && "error-label"} >YEAR
            <input 
            className={errors.year && "invalid"}
            id='year'
            type="number" 
            placeholder='YYYY'
            
            {...register("year",{required:true,
            validate:value =>{
              const year = Number(value);
              if (year > new Date().getFullYear()){
                return "Must be in the past"
              }
            }})}
            />
            <error id="error_year"  className="error" >
            {errors.year?.type === "required" && "Year is required"}
            {errors.year?.type === "validate" && "Must be in the past"}
            
            </error>
            </label>

            <button type='submit'  onClick={age}><img src={iconarrow} alt="icon arrow" /></button>
          </form>

          <div className="output">
            <div className="years">
              <h1><span id='result_year'>--</span>years</h1>
            </div>
            <div className="month">
            <h1><span id='result_month'>--</span>months</h1>
            </div>
            <div className="day">
            <h1><span id='result_day'>--</span>days</h1>
            </div>


          </div>


        </div>
      </div>
    </>
  )
}

export default App


