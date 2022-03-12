import React from 'react'


const services = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <ul class="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
    <li class="mr-2">
        <a href="#" aria-current="page" class="inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
    </li>
    <li>
        <a class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
    </li>
</ul>
      </div>
    </section>
  )
}

export default services