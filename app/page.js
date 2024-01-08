'use client'
import Image from 'next/image'
import BMICalculator from './components/Calculator'

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-inter">
      <div className='relative flex flex-col xl:flex-row xl:ml-[24px] xl:mr-[140px] w-full'>
          <div className="bg-gradient-to-r from-[#d6fcfe] to-[#D6E6FE] xl:h-[737px] xl:w-[70%] rounded-b-[35px] h-[640px]">
            <Image
            className="mx-auto my-auto xl:mt-[75px] xl:ml-[116px] mt-8 mb-6"
            src="/images/logo.svg"
            alt="app logo"
            width={40}
            height={40}
            />
            <div className="font-inter xl:ml-[116px] xl:mr-[0px] xl:mt-[127px] xl:pr-60 ">
              <div className="font-semibold xl:text-6xl text-5xl text-center xl:text-start mx-6 xl:mx-0 xl:my-0 xl:mr-20 md:mx-48 md:mt-10">
                  <p className="mb-0">
                    Body Mass Index Calculator
                  </p>
              </div>
              <div className="xl:w-[456px] xl:mt-[35px] xl:mx-0 xl:text-start text-base text-center font-normal m-6 md:mx-11 text-[#5E6E85]">
                <p>
                  Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </p>
              </div>
            </div>
          </div>
           <BMICalculator />
      </div>

      <div className="md:grid grid-cols-2 xl:flex mt-[580px] md:mr-10 xl md:mt-[350px] overflow-visible xl:mx-[140px] xl:mt-[70px]">
        <div className='md:relative md:right-20 xl:static xl:w-[564px]'>
          <Image
            className=""
            src="/images/image-man-eating.webp"
            alt="man eating"
            width={564}
            height={533}
          />
        </div>

        <div className='mt-12 md:my-0 mx-6 xl:mt-0 md:mx-0 xl:ml-[120px] xl:w-[465px]'>
          <Image
            className="ml-auto xl:block hidden xl:relative bottom-[10%] left-[0%]"
            src="/images/pattern-curved-line-left.svg"
            alt="curved pattern"
            width={60}
            height={60}
          />
          <div className='md:my-8 lg:mt-20 xl:my-0 xl:relative bottom-[5%]'>
            <div className='font-semibold xl:text-[48px] text-3xl mb-8 xl:leading-tight xl:tracking-[-2.4px]'>
               <p>What your BMI result means</p>
            </div>
            <div className='text-base font-normal text-[#5E6E85]'>
              <p>
                A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:rounded-[35px] bg-gradient-to-br  from-white to-[#D6E6FE] bg-opacity-25 xl:pt-[72px] pt-14 pl-5 pr-7 pb-14 xl:pb-[96px] xl:px-[116px] xl:mt-[96px]  mt-16 xl:mx-[24px]  xl:flex">
        <div className='xl:flex-col md:flex'>
          <Image
              className=""
              src="/images/icon-eating.svg"
              alt="eating icon"
              width={64}
              height={64}
          />
          <div className='md:ml-10 xl:ml-0'>
            <p className='xl:pt-[0px] xl:pb-[0px] font-semibold text-2xl mt-8'>Healthy eating</p>
            <p className='mt-6 text-[#5E6E85] text-base'>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
          </div>
        </div>

        <div className='xl:px-[0px] xl:mt-0 mt-10 md:flex xl:flex-col xl:ml-8'>
          <Image
              className=""
              src="/images/icon-exercise.svg"
              alt="icon exercise"
              width={64}
              height={64}
          />
          <div className='md:ml-10 xl:ml-0'>
            <p className='xl:pt-[0px] xl:pb-[0px]  font-semibold text-2xl mt-8'>Regular exercise</p>
            <p className='mt-6 text-base text-[#5E6E85]'>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
          </div>
        </div>

        <div className='mt-10 xl:mt-0 md:flex xl:flex-col  xl:ml-8'>
          <Image
              className=""
              src="/images/icon-sleep.svg"
              alt="icon sleep"
              width={64}
              height={64}
          />
          <div className='md:ml-10 xl:ml-0'>
            <p className='xl:pt-[0px] xl:pb-[0px] font-semibold text-2xl mt-8'>Adequate sleep</p>
            <p className='mt-6 text-[#5E6E85] text-base'>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
          </div>
        </div>
    
      </div>

      <div className='xl:m-[140px] xl:px-0 pl-[19px] pr-[29px] md:px-10'>
        <div className='xl:flex'>
          <div className='xl:mr-[140px]'>
            <p className='font-semibold xl:text-[48px] text-3xl xl:text-start text-center mt-[72px] xl:mt-0 mb-8 xl:mb-[35px]'>Limitations of BMI</p>
            <p className='text-base text-[#5e6e85] xl:text-start text-center'>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
          </div>
          <div className='md:grid grid-cols-2 xl:flex xl:mr-20 md:mt-14 xl:mt-0'>
              <div className='xl:p-8 p-6 round-[16px] md:mr-4 xl:mr-[0px] md:mt-0 mt-14 shadow-[16px_15px_32px_0px_rgba(143,174,207,0.25)] rounded-[16px]'>
                <div className='flex'>
                  <Image
                    className=""
                    src="/images/icon-gender.svg"
                    alt="icon gender"
                    width={32}
                    height={32}
                  />
                  <div>
                    <p className='text-xl font-semibold pl-[16px]'>Gender</p>
                  </div>
                </div>
                <div >
                  <p className='text-base pt-[16px] text-[#5E6E85]'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
                </div>
              </div>

              <div className='hidden xl:hidden md:grid shadow-[16px_5px_56px_0px_rgba(143,174,207,0.25)] xl:p-[32px]  p-6 xl:mt-[32px] xl:mr-[32px] rounded-[16px]'>
                <div className=''>
                    <div className='flex'>
                      <Image
                        className=""
                        src="/images/icon-age.svg"
                        alt="icon age"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className='text-xl font-semibold pl-[16px]'>Age</p>
                      </div>
                    </div>
                    <p className='text-base mt-4 text-[#5E6E85]'>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
                </div>
              </div>
          </div>
        </div>

        <div className='xl:flex xl:overflow-visible mt-4 md:mt-6 xl:mt-8'>
          <div className=''>
              <Image
                className="xl:block hidden mb-[0px]  ml-[150px] mr-[170px]"
                src="/images/pattern-curved-line-right.svg"
                alt="icon gender"
                width={94}
                height={122}
              />
          </div>
          <div className='md:hidden xl:block shadow-[16px_5px_56px_0px_rgba(143,174,207,0.25)] xl:p-[32px] p-6  xl:mt-[0px] xl:mr-[32px] rounded-[16px]'>
            <div className=''>
                <div className='flex'>
                  <Image
                    className=""
                    src="/images/icon-age.svg"
                    alt="icon age"
                    width={32}
                    height={32}
                  />
                  <div>
                    <p className='text-xl font-semibold pl-[16px]'>Age</p>
                  </div>
                </div>
                <p className='text-base mt-4 text-[#5E6E85]'>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
            </div>
          </div>

          <div className='xl:flex md:grid grid-cols-2 gap-4'>
            <div className='xl:p-[32px] p-6 xl:mt-[0px] mt-4 md:mt-0 shadow-[16px_5px_56px_0px_rgba(143,174,207,0.25)] rounded-[16px]'>
              <div className='flex'>
                <Image
                  className=""
                  src="/images/icon-muscle.svg"
                  alt="icon muscle"
                  width={32}
                  height={32}
                />
                <div>
                  <p className='text-xl font-semibold pl-[16px]'>Muscle</p>
                </div>
              </div>
              <div >
                <p className='text-base mt-4 text-[#5E6E85] '>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
              </div>
            </div>

            <div className='xl:hidden hidden md:block xl:p-[32px] p-6 shadow-[16px_5px_56px_0px_rgba(143,174,207,0.25)] rounded-[16px]'>
              <div className='flex'>
                <Image
                  className=""
                  src="/images/icon-pregnancy.svg"
                  alt="icon race"
                  width={32}
                  height={32}
                />
                <div>
                  <p className='text-xl font-semibold pl-[16px]'>Pregnancy</p>
                </div>
              </div>
              <div >
                <p className='text-base pt-4 text-[#5E6E85]'>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='xl:flex xl:mt-[40px] mt-4 xl:mr-[140px] xl:mx-[140px] md:m-auto'>
            <div className='md:hidden xl:block xl:w-[50%] xl:p-[32px] p-6 shadow-[16px_5px_56px_0px_rgba(143,174,207,0.25)] rounded-[16px]'>
              <div className='flex'>
                <Image
                  className=""
                  src="/images/icon-pregnancy.svg"
                  alt="icon race"
                  width={32}
                  height={32}
                />
                <div>
                  <p className='text-xl font-semibold pl-[16px]'>Pregnancy</p>
                </div>
              </div>
              <div >
                <p className='text-base pt-4 text-[#5E6E85]'>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
              </div>
            </div>

            <div className='md:w-[50%] xl:p-[32px] p-6  round-[16px] md:mt-6 xl:mt-0 mt-4 mb-24 xl:mb-0 shadow-[16px_32px_32px_0px_rgba(143,174,207,0.25)] rounded-[16px] xl:ml-[32px] mx-auto'>
              <div className='flex'>
                <Image
                  className=""
                  src="/images/icon-race.svg"
                  alt="icon gender"
                  width={32}
                  height={32}
                />
                <div>
                  <p className='text-xl font-semibold pl-[16px]'>Race</p>
                </div>
              </div>
              <div >
                <p className='text-base pt-4 text-[#5E6E85]'>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
              </div>
            </div>
        </div>

      </div>
    </main>
  )
}
