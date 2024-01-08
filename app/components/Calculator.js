// BMICalculator.js
import { useState } from 'react';
import styles from "../styles/Calculator.module.css"

const BMICalculator = () => {
  const [unit, setUnit] = useState('metric');
  const [height, setHeight] = useState({ feet: 0, inches: 0 });
  const [weight, setWeight] = useState({ st: 0, lbs: 0 });
  const [bmi, setBMI] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  const calculateBMI = () => {
    const heightValue = unit === 'metric' ? height : height.feet * 12 + height.inches;
    const weightValue = unit === 'metric' ? weight : weight.st * 6.35029 + weight.lbs;
  
    const heightInMeters = unit === 'metric' ? heightValue / 100 : heightValue * 0.0254;
    const weightInKg = unit === 'metric' ? weightValue : weightValue * 0.453592;
  
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
  
    setBMI(bmiValue.toFixed(1));
    // Hide welcome message after BMI calculation
    setShowWelcomeMessage(false);
  };

  const handleNumericInput = (e) => {
    // Allow backspace and delete keys
    if (e.key === 'Backspace' || e.key === 'Delete') {
        return;
      }
    // Prevent non-numeric input and arrow key events
    const isNumberKey = /^[0-9]$/.test(e.key);
    const isArrowKey = /^Arrow/.test(e.key);

    if (!isNumberKey && !isArrowKey) {
      e.preventDefault();
    }
}  

const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "overweight";
  } else {
    return "obese";
  }
};

const getIdealWeightRange = () => {
  if (unit === 'metric') {
    return '63.3kgs-85.2kgs';
  } else {
    return '9st 6lbs - 12st 10lbs';
  }
};


  return (
    <div className="absolute xl:top-[0%] xl:left-[50%] top-[70%] md:top-[55%] xl:right-2  mx-6 xl:mr-36 md:mx-11 xl:mt-[166px] bg-white xl:px-8 xl:pt-4 xl:pb-8 p-6 md:p-8 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)]">

      <p className='font-semibold text-2xl mb-8'>Enter your details below</p>
      
      <div className='flex'>
        <div className='w-full'>
          <label className={styles.container}>
            <input
              type="radio"
              value="metric"
              checked={unit === 'metric'}
              onChange={() => handleUnitChange('metric')}
              className=""
            />
            <span className={styles.checkmark}></span>
            <span className='text-base ml-11 font-semibold'>Metric</span>
          </label>
        </div>

        <div className='ml-6 w-full'>
          <label className={styles.container_imperial}>
            <input
              type="radio"
              value="imperial"
              checked={unit === 'imperial'}
              onChange={() => handleUnitChange('imperial')}
            />
            <span className={styles.checkmark}></span>
            <span className='ml-11 text-base font-semibold'>Imperial</span>
          </label>
        </div>  
      </div>

      <div className="input-fields mb-4">
        {unit === 'metric' ? (
          <>
            <div className='md:flex'>
              <div className="mb-4 w-full relative md:mr-6">
                <p className="text-sm text-[#5E6E85] mb-[8px]">Height</p> 
                <input
                    type="text"
                    placeholder="0"
                    className="p-5 border w-full rounded-[12px] text-2xl focus:border-blue-500 hover:border-blue-500 focus:outline-none"
                    onKeyDown={handleNumericInput}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <span className="absolute right-[20px] top-[45px] text-[#345FF6] font-semibold text-2xl">cm</span>  
              </div> 

              <div className="mt-0 relative w-full">
                <p className="text-sm text-[#5E6E85] mb-[8px]">Weight</p> 
                <input
                    type="text"
                    placeholder="0"
                    className="p-5 border w-full rounded-[12px] text-2xl focus:border-blue-500 hover:border-blue-500 focus:outline-none"
                    onKeyDown={handleNumericInput}
                    onChange={(e) => setWeight(e.target.value)}
                />
                 <span className="absolute right-[20px] top-[45px] text-[#345FF6] font-semibold text-2xl">kg</span> 
              </div> 
            </div>
          </>
        ) : (
          <>
            <div className='flex'>
              <div className="mb-4 relative">
                <p className="font-[14px] text-[#5E6E85] mb-[8px]">Height</p> 
                <input
                    type="text"
                    placeholder="0"
                    className="xl:mr-[24px] p-5 border rounded-[12px] w-[100%] text-2xl focus:border-blue-500 hover:border-blue-500 focus:outline-none"
                    onKeyDown={handleNumericInput}
                    onChange={(e) => setHeight({ ...height, feet: e.target.value })}
                />
                <span className="absolute right-[20px] top-[52px] xl:right-[45px] xl:top-[52px] text-[#345FF6] font-semibold text-2xl">ft</span>
              </div> 
              <div className="mt-8 ml-4 relative">
                <input
                    type="text"
                    placeholder="0"
                    className="p-5 border rounded-[12px] w-[100%] text-2xl focus:border-blue-500 hover:border-blue-500 focus:outline-none"
                    onKeyDown={handleNumericInput}
                    onChange={(e) => setHeight({ ...height, inches: e.target.value })}
                />
                 <span className="absolute right-[20px] top-[20px] xl:right-[20px] xl:top-[22px] text-[#345FF6] font-semibold text-2xl">in</span> 
              </div> 
            </div>

            <div className="flex">
              <div className="relative">
                <p className='font-[14px] text-[#5E6E85] mb-[8px]'>Weight</p>
                <input
                    type="text"
                    placeholder="0"
                    className="xl:mr-[24px] w-[100%] p-5 border rounded-[12px] text-2xl focus:border-blue-500 hover:border-blue-500 focus:outline-none"
                    onKeyDown={handleNumericInput}
                    onChange={(e) => setWeight({ ...weight, st: e.target.value })}
                 />
                  <span className="absolute right-[20px] top-[52px] xl:right-[45px] xl:top-[52px] text-[#345FF6] font-semibold text-2xl">st</span>  
              </div> 

              <div className="relative ml-4 mt-8">
                <input
                    type="text"
                    placeholder="0"
                    className="p-5 border rounded-[12px] w-[100%] text-2xl focus:border-blue-500 hover:border-blue-500 focus:outline-none"
                    onKeyDown={handleNumericInput}
                    onChange={(e) => setWeight({ ...weight, lbs: e.target.value })}
                />
                <span className="absolute right-[20px] top-[20px] xl:right-[20px] xl:top-[22px] text-[#345FF6] font-semibold text-2xl">lbs</span> 
              </div>
            </div>
          </>
        )}
      </div>

      <button className= 'bg-[#345FF6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4' onClick={calculateBMI}>Calculate BMI</button>

      <div className='bg-[#345FF6] p-8 rounded-2xl md:rounded-16-full-16'>
        {showWelcomeMessage ? (
          <div>
            <p className='font-semibold text-2xl text-white'>Welcome!</p>
            <p className='text-sm text-white '>Enter your height and weight and you’ll see your BMI result here</p>
          </div>
        ) : (
          <div className='md:flex text-white'>
            <div className='md:w-full md:mr-6'>
              <p className='text-base leading-6 font-semibold'>Your BMI is ...</p>
              <p className='xl:text-6xl text-5xl '>{bmi}</p>
            </div>
            <p className='xl:ml-[24px]  text-sm xl:w-[206px] mt-6 md:mt-0 md:py-2'>
              Your BMI suggests you’re {getBMICategory(bmi)}. Your ideal weight is between <span className='font-semibold'>{getIdealWeightRange()}.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
