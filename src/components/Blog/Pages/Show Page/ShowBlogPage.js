import React from 'react';

function ShowBlogPage() {
  return (
    <div>
      <div className='xl:w-3/4'>
        <div className='max-w-sm m-6 w-full lg:max-w-full lg:flex'>
          <div
            className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            style={{ backgroundImage: 'url("/img/card-left.jpg")' }}
            title='Woman holding a mug'></div>
          <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
            <div className='mb-8'>
              <div className='text-gray-900 font-bold text-xl mb-2'>
                Can coffee make you a better developer?
              </div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='flex items-center'>
              <img
                className='w-10 h-10 rounded-full mr-4'
                src='/img/jonathan.jpg'
                alt='Avatar of Jonathan Reinink'
              />
              <div className='text-sm'>
                <p className='text-gray-900 leading-none'>Jonathan Reinink</p>
                <p className='text-gray-600'>Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBlogPage;
