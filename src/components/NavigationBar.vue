<template>
    <nav class="bg-blue-800">
        <div class="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-64 bg-blue-900">
                        <div class="text-blue-100 flex items-center justify-center font-bold h-16">AppName</div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <router-link
                                    class="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-700"
                                    to="/">Home
                            </router-link>
                            <router-link
                                    class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
                                    to="/about">About
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">

                        <!-- Profile dropdown -->
                        <div ref="userMenuWrapper" class="ml-3 relative">
                            <div>
                                <button @click="showUserMenu = !showUserMenu" ref="userMenuButton"
                                        class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                                        id="" aria-label="User menu" aria-haspopup="true">
                                    <img class="h-8 w-8 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt="" />
                                </button>
                            </div>
                            <!--
                              Profile dropdown panel, show/hide based on dropdown state.

                              Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                              Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                            -->
                            <transition
                                    enter-active-class="transition ease-out duration-100"
                                    leave-active-class="transition ease-in duration-75"
                                    enter-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                            >
                                <div v-show="showUserMenu" ref="userMenu" id="user-menu"
                                     class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                    <div class="py-1 rounded-md bg-white shadow-xs" role="menu"
                                         aria-orientation="vertical" aria-labelledby="user-menu-button">
                                        <a href="#" class="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
                                           role="menuitem">Your Profile
                                        </a>
                                        <a href="#" class="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
                                           role="menuitem">Settings
                                        </a>

                                        <a @click="$router.push('/login')" href="#" class="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
                                           role="menuitem">Sign out</a>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!-- Mobile menu button -->
                    <button @click="showMobileMenu = !showMobileMenu"
                            class="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white">
                        <!-- Menu open: "hidden", Menu closed: "block" -->
                        <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <!-- Menu open: "block", Menu closed: "hidden" -->
                        <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!--
          Mobile menu, toggle classes based on menu state.

          Open: "block", closed: "hidden"
        -->
        <div v-show="showMobileMenu" class="md:hidden">
            <div class="px-2 pt-2 pb-3 sm:px-3">
                <a href="#"
                   class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-700">Dashboard
                </a>
                <a href="#"
                   class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Team
                </a>
                <a href="#"
                   class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Projects
                </a>
                <a href="#"
                   class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Calendar
                </a>
                <a href="#"
                   class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Reports
                </a>
            </div>
            <div class="pt-4 pb-3 border-t border-blue-700">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full"
                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt="" />
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium leading-none text-white">Tom Cook
                        </div>
                        <div class="mt-1 text-sm font-medium leading-none text-blue-400">tom@example.com
                        </div>
                    </div>
                </div>
                <div class="mt-3 px-2">
                    <a href="#"
                       class="block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Your
                        Profile
                    </a>
                    <a href="#"
                       class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Settings
                    </a>
                    <a href="#"
                       class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Sign
                        out
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'NavigationBar',

    data () {
      return {
        showUserMenu: false,
        showMobileMenu: false,
      }
    },

    created () {
      window.addEventListener('click', this.closeUserMenu)
    },

    beforeDestroy () {
      window.removeEventListener('click', this.closeUserMenu)
    },

    methods: {
      closeUserMenu(event) {
        let self = this;

        if (!self.$refs.userMenuWrapper.contains(event.target)) {
          this.showUserMenu = false
        }
      }
    }
  }
</script>

<style scoped>
</style>