<template>
    <nav class="bg-blue-800">
        <div class="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-64 bg-blue-900">
                        <div class="text-blue-100 flex items-center justify-center font-bold h-16">
                            AppName
                            <svg class="ml-2 fill-current text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                                 id="bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24"
                                 width="512">
                                <path d="m12 3.457c-.414 0-.75-.336-.75-.75v-1.957c0-.414.336-.75.75-.75s.75.336.75.75v1.957c0 .414-.336.75-.75.75z" />
                                <path d="m18.571 6.179c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.146-.339.22-.531.22z" />
                                <path d="m23.25 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
                                <path d="m19.955 20.705c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
                                <path d="m4.045 20.705c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.147-.339.22-.531.22z" />
                                <path d="m2.707 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
                                <path d="m5.429 6.179c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.148.146-.339.22-.531.22z" />
                                <path d="m15 21v1.25c0 .96-.79 1.75-1.75 1.75h-2.5c-.84 0-1.75-.64-1.75-2.04v-.96z" />
                                <path d="m16.41 6.56c-1.64-1.33-3.8-1.85-5.91-1.4-2.65.55-4.8 2.71-5.35 5.36-.56 2.72.46 5.42 2.64 7.07.59.44 1 1.12 1.14 1.91v.01c.02-.01.05-.01.07-.01h6c.02 0 .03 0 .05.01v-.01c.14-.76.59-1.46 1.28-2 1.69-1.34 2.67-3.34 2.67-5.5 0-2.12-.94-4.1-2.59-5.44zm-.66 5.94c-.41 0-.75-.34-.75-.75 0-1.52-1.23-2.75-2.75-2.75-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.34 0 4.25 1.91 4.25 4.25 0 .41-.34.75-.75.75z" />
                                <path d="m8.93 19.5h.07c-.02 0-.05 0-.07.01z" />
                                <path d="m15.05 19.5v.01c-.02-.01-.03-.01-.05-.01z" />
                            </svg>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <router-link
                                    class="px-3 py-2 rounded-md text-sm font-medium text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
                                    to="/">Dashboard
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
                                        <router-link to="/me"
                                                     class="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
                                                     role="menuitem">Mein Konto
                                        </router-link>

                                        <router-link to="/login"
                                                     class="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
                                                     role="menuitem">Abmelden
                                        </router-link>
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
                    <router-link to="/me"
                                 class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">
                        Mein Profil
                    </router-link>
                    <a href="#"
                       class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Abmelden
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
      closeUserMenu (event) {
        let self = this

        if (!self.$refs.userMenuWrapper.contains(event.target)) {
          this.showUserMenu = false
        }
      },
    },
  }
</script>

<style>
</style>