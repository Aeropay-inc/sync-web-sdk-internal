<template>
    <aside bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white p-4 w-2xs w-48>
        <ul mt-8>
            <li>
                <div grid="~ flow-col cols-[auto_1fr]">
                    <div place-self-center i-carbon:home />
                    <RouterLink to="/home" block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-xl>Home</RouterLink>
                </div>
            </li>
            <li>
                <div grid="~ flow-col cols-[auto_1fr]">
                    <div place-self-center i-carbon:help-filled />
                    <RouterLink to="/about" block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-xl>About</RouterLink>
                </div>
            </li>
            <li>
                <div grid="~ flow-col cols-[auto_1fr]">
                    <div place-self-center i-carbon:3rd-party-connected />
                    <RouterLink to="/embedded" block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-xl>Embedded</RouterLink>
                </div>
            </li>
        </ul>
    </aside>
</template>