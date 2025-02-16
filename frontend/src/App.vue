<template>
  <section class="bg-m-blue-600 h-dvh flex flex-col items-center font-sans p-4 md:p-8 overflow-y-auto">
    <header class="bg-m-blue-500 h-16 w-full md:w-4/5 lg:w-[640px] shadow-custom rounded-[20px] py-4 px-6 mb-4 md:mb-6 lg:mb-8 sticky top-0">
      <nav class="h-full w-full flex items-center justify-center text-white">
        <router-link to="/" class="flex items-center">
          <img src="/assets/images/logo.gif" alt="Moodify logo" height="32" width="32" class="mr-2" />
          <span class="text-2xl font-semibold">Moodify</span>
        </router-link>
      </nav>
    </header>
    <main class="grow text-white md:w-4/5 lg:w-3/5 lg:max-w-[760px] mb-6">
      <router-view />
    </main>
    <footer class="flex items-center justify-center">
      <span class="text-white text-center text-sm md:text-base">Your Mood, Your Soundtrack, Your Inspiration.</span>
    </footer>
  </section>
</template>
