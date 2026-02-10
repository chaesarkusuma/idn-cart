import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        account: 'account.html',
        checkout: 'checkout.html',
        index: 'index.html',
        login: 'login.html',
        register: 'register.html',
        wishlist: 'wishlist.html',
        shop: 'shop.html',
        view: 'view.html',

      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})